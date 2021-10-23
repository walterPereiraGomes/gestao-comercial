var express = require("express");
const app = express();
const purchasesRoutes = require('./purchases')
const db = require('../db')
db.connect();

app.use(purchasesRoutes);

app.listen(8081, () => {
    console.log('server is running!');
})