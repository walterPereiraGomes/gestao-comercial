## conectando ao mongo pelo docker
docker exec -it mongodb

mongo --host localhost -u walter -p senhaforte --authenticationDatabase admin --eval "db.getSiblingDB('commercial_management').createUser({user: 'adminCommercial', pwd: 'senhaforte', roles: [{role: 'readWrite', db: 'commercial_management'}]})"

use commercial_management

db.merchandise.insert({
    name: 'Arroz 5kg',
    amount: 50,
    value: 10
})

db.client.insert({
    name: 'Walter Pereira',
    age: 24,
    totalBalance: 500,
})