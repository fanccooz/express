exports.database = function(req, res){
  res.send("respond with a resource!!!!!!!!!!!!");
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'linuxer119',
    database : 'express_test'
  });

  connection.connect();

  connection.query("insert into users set ?",{username:"doudou",'password':"1234",created_at:"2018-01-03",updated_at:"2018-09-09"}, function (error, results, fields) {
    if (error) throw error;
    // Neat!
  });

  connection.query('SELECT * from users limit 4', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });

  connection.end();
};