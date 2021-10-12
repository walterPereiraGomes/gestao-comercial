const Mongoose = require('mongoose')

const clientSchema = new Mongoose.Schema({
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

module.exports = Mongoose.model('client', clientSchema)