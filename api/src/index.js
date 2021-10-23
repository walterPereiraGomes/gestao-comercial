const MerchandiseService = require('./services/merchandise')
async function main() {
    const merchandiseService = new MerchandiseService()

    const list = await merchandiseService.readMerchans()
    console.log('list :>> ', list);
}

main()