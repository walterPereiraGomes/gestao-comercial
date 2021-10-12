const assert = require('assert')
const productRepository = require('../repositories/products')
const clientRepository = require('../repositories/clients')
const purchaseService = require('../services/purchases')
const Mongoose = require('mongoose')

describe('Connection in Schemas', function () {
    before(() => {
        Mongoose.connect('mongodb://adminCommercial:senhaforte@localhost:27017/commercial_management',
            { useNewUrlParser: true}, (error) => {
                if(!error) return;
                console.log('fail to connect!', error)
            }
        )
    })
    it('PRODUCT - test products in 5 first pages', async () => {
        const arrayPaginatedProducts  = []
        for(let i = 0; i <= 4; i++) {
            const products = await productRepository.find({}, i, 2)
            arrayPaginatedProducts.push({
                page: i + 1,
                products
            })
        }
        assert.equal(arrayPaginatedProducts.length, 5)
    })
    it('PRODUCT - test create product', async () => {
        const newProduct = {
            name: 'product test',
            amount: 180,
            value: 2.5
        }
        const {name, amount, value} = await productRepository.create(newProduct)
        assert.deepEqual({name, amount, value}, newProduct)
    })
    it('CLIENT - test clients in 5 first pages', async () => {
        const arrayPaginatedClient  = []
        let page = 0
        for(let page = 0; page <= 4; page++) {
            const clients = await clientRepository.find({name: {$not: /Client Test/}}, page * 2, 2)
            arrayPaginatedClient.push({
                page,
                clients: clients.map(client => client.name)
            })
        }
        assert.equal(arrayPaginatedClient.length, 5)
    })
    it('CLIENT - test create new client', async () => {
        const newClient = {
            name: 'Client Test',
            age: 20,
            totalBalance: 500
        }
        const {name, age, totalBalance} = await clientRepository.create(newClient)
        assert.deepEqual({name, age, totalBalance}, newClient)
    })
    it('PURSHASE - making a purchase', async () => {
        const count = 1;
        const client = await clientRepository.findOne({name: 'Walter'})
        const product = await productRepository.findOne({name: 'detergent'})

        const {client: { name: nameClient }, product: { name: nameProduct }} = await purchaseService.makePurshase(count, client, product)
        assert.deepEqual({product: product.name, client: client.name}, {product: nameProduct, client: nameClient})
    })

})