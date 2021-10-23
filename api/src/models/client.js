const Mongoose = require('mongoose')

const client = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    totalBalance: {
        type: Number,
        required: true
    }
})

module.exports = Mongoose.model('client', client)