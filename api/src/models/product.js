const Mongoose = require('mongoose')

const product = new Mongoose.Schema({
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

module.exports = Mongoose.model('product', product)