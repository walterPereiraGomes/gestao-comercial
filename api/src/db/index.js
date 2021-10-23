const Mongoose = require('mongoose')

const connect = () => {
    Mongoose.connect('mongodb://adminCommercial:senhaforte@localhost:27017/commercial_management',
        { useNewUrlParser: true}, (error) => {
            if(!error) return;
            console.log('fail to connect!', error)
        }
    )
}

module.exports = {
    connect
}
