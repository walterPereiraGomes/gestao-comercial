const DefaultSchema = require('../db/defaultSchema')
const merchandiseSchema = require('../db/schemas/merchandise')

class Merchandise {
    constructor() {
        this._connection = new DefaultSchema(DefaultSchema.connect(), merchandiseSchema)
    }

    readMerchans() {
        return merchandiseSchema.find()
    }
}

module.exports = Merchandise;