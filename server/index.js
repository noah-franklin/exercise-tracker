var mysql = require('mysql');

var con = mysql.createConnection({
  ////
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT * FROM test", function(err, result, fields) {
  if(err) throw err;
  console.log(result);
});




