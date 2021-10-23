const assert = require('assert')
const productRepository = require('../repositories/products')
const clientRepository = require('../repositories/clients')
const purchaseService = require('../services/purchases')

describe('TESTS IN PURCHASES', function () {
    it('Making a purchase', async () => {
        const count = 1;
        const client = await clientRepository.findOne({name: 'Walter'})
        const product = await productRepository.findOne({name: 'detergent'})

        const {client: { name: nameClient }, product: { name: nameProduct }} = await purchaseService.makePurshase(count, client, product)
        assert.deepEqual({product: product.name, client: client.name}, {product: nameProduct, client: nameClient})
    })

})