const express = require('express');
const route = express.Router();


route.get('/', (req, res) => {
    res.send('Users Page');
})

route.post('/', (req, res) => {
    res.send('Handling POST request for Users');
})

module.exports = route;