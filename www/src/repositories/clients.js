const ClientModel = require('../models/client')

const find = (filter = {}, page = 0, limit = 10) => ClientModel.find(filter).skip(page).limit(limit)

const findOne = (filter = {}) => ClientModel.findOne(filter)


const create = (item) => ClientModel.create(item)

const update = (_id, newValues) => ClientModel.updateOne({_id}, newValues)

module.exports = {
    find,
    findOne,
    create,
    update
}