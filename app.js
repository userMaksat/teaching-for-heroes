const express = require('express');
const russian = require('./routes/russian');
const kazakh = require('./routes/kazakh');
const data = require('./data.js');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/ru', russian);
app.use('/kk', kazakh);

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

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Server works');
});