const assert = require('assert')
const DefaultSchema = require('../db/defaultSchema')
const merchandiseSchema = require('../db/schemas/merchandise')
const clientSchema = require('../db/schemas/client')

const merchandise =  {}
const client =  {}
describe('Connection in Schemas', function () {
    before(() => {
        const connection = DefaultSchema.connect()
        this.merchandise = new DefaultSchema(connection, merchandiseSchema)
        this.client = new DefaultSchema(connection, clientSchema)
    })
    it('TEST 1 - CONNECTION IN MERCHANDISE', async() => {
        const result = await this.merchandise.isConnected()
        assert.equal('connected', result)
    })
    it('TEST 2 - CONNECTION IN CLIENT', async() => {
        const result = await this.client.isConnected()
        assert.equal('connected', result)
    })
})