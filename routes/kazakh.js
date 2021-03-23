const express = require('express');
const data = require('./../data.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        ...data.common[2],
        ...data.home[2]
    });
})

module.exports = router;