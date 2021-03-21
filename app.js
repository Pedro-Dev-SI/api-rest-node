const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoute = require('./routes/products');
const requestRoute = require('./routes/requests');

app.use(morgan('dev'));

app.use('/products', productRoute);
app.use('/requests', requestRoute);


//CASO NÃO ENCONTRE NENHUMA ROTA, ESSE SERÁ O TRATAMENTO:
app.use((req, res, next) => {
   const erro = new Error('Not found');
   erro.status = 404;
   next(erro);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   return res.send({
      erro:{
         message: error.message
      }
   });
});

module.exports = app;
