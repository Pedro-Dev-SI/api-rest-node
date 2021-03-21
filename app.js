const express = require('express');
const app = express();

const productRoute = require('./routes/products');

app.use('/products', productRoute);
app.use('/test', (req, res, next) => {
   res.status(200).send({
      message: 'Its working'
   });
});

module.exports = app;
