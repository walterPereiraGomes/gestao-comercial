const assert = require('assert')
const clientRepository = require('../repositories/clients')

describe('TESTS IN CLIENTS ', function () {
    it('Test clients in 5 first pages', async () => {
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
    it('Test create new client', async () => {
        const newClient = {
            name: 'Client Test',
            age: 20,
            totalBalance: 500
        }
        const {name, age, totalBalance} = await clientRepository.create(newClient)
        assert.deepEqual({name, age, totalBalance}, newClient)
    })
})