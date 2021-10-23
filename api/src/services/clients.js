const clientRepository = require('../repositories/clients');
const getClients = async ({page = 2, where = {}}) => {
    return await clientRepository.find(where, page * 2, 2)
}
module.exports = {
    getClients
}