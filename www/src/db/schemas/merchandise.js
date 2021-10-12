const Mongoose = require('mongoose')

const merchandiseSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

module.exports = Mongoose.model('merchandise', merchandiseSchema)