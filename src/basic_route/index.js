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

// template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trang-chu', (req, res) => { 
    res.render('home')
});

app.listen(port, () => {
    console.log(`Example app listening at http://phu-nodejs.com:${port}`);
})