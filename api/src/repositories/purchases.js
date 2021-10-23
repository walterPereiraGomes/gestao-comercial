const PurchaseModel = require('../models/purchase')

const find = (filter = {}, page = 0, limit = 10) => PurchaseModel.find(filter).skip(page).limit(limit)

const create = item => PurchaseModel.create(item)

module.exports = {
    find,
    create
}