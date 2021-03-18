const express = require('express');
const router = express.Router();

const lang = 'Russian';

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        language: lang
    });
})

module.exports = router;