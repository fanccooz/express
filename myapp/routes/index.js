
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', message: 'hello word!哈啥哈哈！' });
};