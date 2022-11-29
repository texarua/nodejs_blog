const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');


//News detail
router.use('/:slug', newsController.show);
//News index
router.use('/', newsController.index);


module.exports = router