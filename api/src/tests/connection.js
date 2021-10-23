const assert = require('assert')
const Mongoose = require('mongoose')

const STATUS = {
    0: 'disconnect',
    1: 'connected',
    2: 'connecting',
    3: 'disconnected'
}

describe('Connecting and make tests of connection', function () {
    before(() => {
        Mongoose.connect('mongodb://adminCommercial:senhaforte@localhost:27017/commercial_management',
            { useNewUrlParser: true}, (error) => {
                if(!error) return;
                console.log('fail to connect!', error)
            }
        )
    })
    it('CONNECTION - test connection', async () => {
        let state = STATUS[Mongoose.connection.readyState]
        if(state === 'connecting') {
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
        state = STATUS[Mongoose.connection.readyState]
        assert.equal(state, STATUS[1])
    })
})