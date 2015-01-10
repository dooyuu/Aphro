// 所有的路由写在这里

var express = require('express');

var site = require('../controllers/site');

var movie = require('../api/movie');

var router = express.Router();


// 首页，电影列表 render(arg1, arg2)
// arg1: 渲染使用的文件名，views 目录中,
// arg2(Object): 向前端模板传递的变量
router.get('/', site.index);

// 电影详细
router.get('/:id', site.movie);

router.get('/tag/:tag', site.tag);

router.get('/api/movie', movie.index);

module.exports = router;
