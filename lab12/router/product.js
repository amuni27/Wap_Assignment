const express = require('express')
const route = express.Router()


route.get('/', (req, res) => {
    res.send('Products Page');
})
route.post('/', (req, res) => {
    res.send('Handling POST request for Products');
})

module.exports = route;