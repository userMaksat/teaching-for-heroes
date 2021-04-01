const express = require('express');
const data = require('./../data.js');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {
        title: 'Home',
        ...data.common[2],
        ...data.home[2]
    });
});

router.get('/about-us', function(req, res) {
    res.render('about-us', {
        title: 'About the initiative',
        ...data.common[2],
        ...data.aboutUs[2]
    });
});

router.get('/for-students', function(req, res) {
    res.render('for-people', {
        title: "Students",
        ...data.common[2],
        ...data.students[2]
    });
});

router.get('/for-teachers', function(req, res) {
    res.render('for-people', {
        title: "Teachers",
        ...data.common[2],
        ...data.teachers[2]
    });
});

router.get('/for-sponsors', function(req, res) {
    res.render('for-people', {
        title: "Sponsors",
        ...data.common[2],
        ...data.sponsors[2]
    });
});

module.exports = router;