const express = require('express');
const router = express.Router();


//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
   res.status(200).send({
      message: 'Return all requests'
   });
});

//INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
   res.status(201).send({
      message: 'A request was created'
   });
});

//RETORNA O DADO DE UM PEDIDO ESPECIFICO
router.get('/:id_request', (req, res, next) => {
   const id = req.params.id_request;

   res.status(200).send({
      message: 'Request details',
      id_request: id
   });
});

//EXCLUI UM PEDIDO
router.delete('/', (req, res, next) => {
   res.status(201).send({
      message: 'Request deleted'
   });
});

module.exports = router;