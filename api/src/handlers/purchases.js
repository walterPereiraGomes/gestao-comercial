var express = require('express');
var purchasesRoutes = express.Router();
const clientController = require('../controllers/clients')

purchasesRoutes.get('/welcome', (req, res) => {
    res.send('welcome to my app!');
})

purchasesRoutes.get('/clients/:page/:name', async (req, res) => {
    const {name, page} = req.params
    const where = name != 0 ? {name} : {}
    const clients = await clientController.getClients({where, page})
    res.send(clients)
})

module.exports = purchasesRoutes;