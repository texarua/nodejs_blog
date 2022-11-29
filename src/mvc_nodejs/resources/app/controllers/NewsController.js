class NewsController {
    
    //[GET] index
    index(req, res) {
        res.render('news/index');
    }

    //[GET] /:slug show
    show(req, res) {
        res.render('news/detail');
    }
}

module.exports = new NewsController