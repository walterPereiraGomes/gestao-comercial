const purchaseRepository = require('../repositories/purchases')
const clientRepository = require('../repositories/clients')
const productRepository = require('../repositories/products')

const makePurshase = async (count, client, product) => {
    const {_id: clientId, totalBalance, name: clientName} = client
    const {_id: productId, value, amount, name: productName} = product

    if(amount < count) {
        console.log('insufficient quantity of product selected!')
        return;
    }

    if(totalBalance < (value * count)) {
        console.log('insufficient balance for buy this product!')
        return;
    }

    await clientRepository.update(clientId, { $set: { totalBalance: totalBalance - value} })
    await productRepository.update(productId, { $set: { amount: amount - count} })

    const newPurchase = {
        product: {
            name: productName,
            _id: productId,
            value
        },
        client: {
            name: clientName,
            _id: clientId
        }
    }
    return await  purchaseRepository.create(newPurchase)
}

module.exports = {
    makePurshase
}