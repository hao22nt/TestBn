const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',         
  password: 'Xuxu120521.', 
  database: 'economic'  
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});


connection.query('SELECT * FROM products', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });

connection.end();
module.exports = connection;
