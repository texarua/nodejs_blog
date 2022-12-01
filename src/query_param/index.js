const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));

//use static file
app.use(express.static(path.join(__dirname, 'public/')));

//middleware : handle data send by form data with method post
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trang-chu', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    console.log(req);
    res.render('search');
});

app.post('/search', (req, res) => {
    console.log(req.body);
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening at http://phu-nodejs.com:${port}`);
});
