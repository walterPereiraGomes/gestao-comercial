const ProductModel = require('../models/product')

const find = (filter = {}, page = 0, limit = 10) => ProductModel.find(filter).skip(page).limit(limit)

const findOne = (filter = {}) => ProductModel.findOne(filter)

const create = (item) => ProductModel.create(item)

const update = (_id, newValues) => ProductModel.updateOne({_id}, newValues)

module.exports = {
    find,
    create,
    findOne,
    update
}