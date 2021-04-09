const express = require('express');
const subdomain = require('express-subdomain');
const data = require('./data.js');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/ru', require('./routes/russian'));
app.use('/kk', require('./routes/kazakh'));
app.use(subdomain('app', require('./routes/app/app')));
app.use('/app', require('./routes/app/app'));

app.get('/en', function(req, res) {
    res.redirect('/');
})
app.get('/en/:route', function(req, res) {
    res.redirect('/' + req.params.route);
});

app.get('/', function(req, res) {
    res.render('home', {
        title: "Home",
        ...data.common[0],
        ...data.home[0]
    });
});

app.get('/about-us', function(req, res) {
    res.render('about-us', {
        title: "About the initiative",
        ...data.common[0],
        ...data.aboutUs[0]
    });
});

app.get('/for-students', function(req, res) {
    res.render('for-people', {
        title: "Students",
        ...data.common[0],
        ...data.students[0]
    });
});

app.get('/for-teachers', function(req, res) {
    res.render('for-people', {
        title: "Teachers",
        ...data.common[0],
        ...data.teachers[0]
    });
});

app.get('/for-sponsors', function(req, res) {
    res.render('for-people', {
        title: "Sponsors",
        ...data.common[0],
        ...data.sponsors[0]
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Server works');
});