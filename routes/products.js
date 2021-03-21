const express = require('express');
const router = express.Router();


//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
   res.status(200).send({
      message: 'Return all products'
   });
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
   res.status(201).send({
      message: 'Insert a new product'
   });
});

//RETORNA O DADO DE UM PRODUTO ESPECIFICO
router.get('/:id_product', (req, res, next) => {
   const id = req.params.id_product;

   if(id === 'special'){
      res.status(200).send({
         message: 'You dicovered the special id',
         id: id
      });
   }else{
      res.status(200).send({
         message: 'An id was passed'
      });
   }
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
   res.status(201).send({
      message: 'Product changed'
   });
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
   res.status(201).send({
      message: 'Product deleted'
   });
});

module.exports = router;