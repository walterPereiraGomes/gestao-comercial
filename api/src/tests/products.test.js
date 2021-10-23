const assert = require('assert')
const productRepository = require('../repositories/products')

describe('TESTS IN PRODUCTS', function () {
    it('Test products in 5 first pages', async () => {
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
    it('Test create product', async () => {
        const newProduct = {
            name: 'product test',
            amount: 180,
            value: 2.5
        }
        const {name, amount, value} = await productRepository.create(newProduct)
        assert.deepEqual({name, amount, value}, newProduct)
    })
})