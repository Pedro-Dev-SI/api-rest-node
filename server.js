const http = require('http'); // -> Vai criar um serviço de http
const app = require('./app'); // -> Pega o app criado
const port = process.env.PORT || 3000; // -> Cria uma porta padrão
const server = http.createServer(app); // -> Cria o server, passando o app para o server
server.listen(port); // -> Escutando esse app na porta


