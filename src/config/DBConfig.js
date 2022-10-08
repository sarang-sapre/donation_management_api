var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Admin@123',
  database : 'ngo',
  multipleStatements: true
});
 


module.exports = connection