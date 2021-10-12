const Mongoose = require('mongoose')
const IDb = require('../interfaces/ICrud')

const STATUS = {
    0: 'disconnect',
    1: 'connected',
    2: 'connecting',
    3: 'disconnected'
}

class DefaultSchema extends IDb {
    constructor(connection, schema) {
        super()
        this._connection = connection
        this._schema = schema
    }

    static connect() {
        Mongoose.connect('mongodb://adminCommercial:senhaforte@localhost:27017/commercial_management',
            { useNewUrlParser: true}, (error) => {
                if(!error) return;
                console.log('fail to connect!', error)
            }
        )
        const connection = Mongoose.connection
        connection.once('open', () => console.log('database is running!!'))
        return connection
    }

    async isConnected() {
        const state = STATUS[this._connection.readyState]

        if(state !== 'connecting') return state
        await new Promise(resolve => setTimeout(resolve, 1000))
        return STATUS[this._connection.readyState]
    }

    async create(item) {
        return await this._schema.create(item)
    }

    async read(filter = {}, skip=0, limit=10) {
        return await this._schema.find(filter).skip(skip).limit(limit)
    }

    update(_id, newValues) {
        return this._schema.updateOne({_id}, newValues)
    }

    delete(_id) {
        return this._schema.deleteOne({ _id })
    }

}

module.exports = DefaultSchema;