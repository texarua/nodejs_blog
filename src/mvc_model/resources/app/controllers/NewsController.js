const Course = require('../models/Course');

class NewsController {
    //[GET] index
    index(req, res) {
        Course.find({}, function (err, courses) {
            console.log(courses);
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });
        // res.render('news/index');
    }

    //[GET] /:slug show
    show(req, res) {
        res.render('news/detail');
    }
}

module.exports = new NewsController();
