const clientService = require('../services/clients')

const getClients = async (filter) => {
    return clientService.getClients(filter)
}

module.exports = {
    getClients
}