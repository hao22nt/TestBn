const express = require('express');
const app = express();
const port = 3000;

const productsRoute = require('./product'); 

app.use('/products', productsRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
