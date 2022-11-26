const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/trang-chu', (req, res) => { 
    let a = 1;
    let b = 2;

    let c = a + b;
    res.send('Hello world!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://phu-nodejs.com:${port}`);
})