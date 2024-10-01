const express = require('express');
const router = express.Router();
const connection = require('./connect');


router.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error fetching products' });
    }
    res.json(results);
  });
});



module.exports = router;
