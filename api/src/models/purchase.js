const Mongoose = require('mongoose')

const purchase = new Mongoose.Schema({
    client: {
        type: Object,
        required: true
    },
    product: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = Mongoose.model('purchase', purchase)