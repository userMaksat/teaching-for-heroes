const express = require('express');
const data = require('./../data.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        ...data.common[1],
        ...data.home[1]
    });
})

module.exports = router;