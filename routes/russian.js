const express = require('express');
const data = require('./../data.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        ...data.common[1],
        ...data.home[1]
    });
});

router.get('/about-us', (req, res) => {
    res.render('about-us', {
        title: 'About the initiative',
        ...data.common[1],
        ...data.aboutUs[1]
    });
});

router.get('/for-students', function(req, res) {
    res.render('for-people', {
        title: "Students",
        ...data.common[1],
        ...data.students[1]
    });
});

router.get('/for-teachers', function(req, res) {
    res.render('for-people', {
        title: "Teachers",
        ...data.common[1],
        ...data.teachers[1]
    });
});

router.get('/for-sponsors', function(req, res) {
    res.render('for-people', {
        title: "Sponsors",
        ...data.common[1],
        ...data.sponsors[1]
    });
});

module.exports = router;