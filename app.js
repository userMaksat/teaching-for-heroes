const express = require('express');
const russian = require('./routes/russian');
const kazakh = require('./routes/kazakh');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/ru', russian);
app.use('/kk', kazakh);

const lang = 'English';

app.get('/', function(req, res) {
    res.render('home', {
        title: 'Home',
        language: lang
    });
});

app.listen(3000, function() {
    console.log('Server works');
});