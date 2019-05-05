//'use strict' // força o javascript a ser mais criterioso (falha na compilação caso esquesa ';', etc)

/**
 * para criar um servidor http é necessário instalar pacotes adicionais:
 * 
 * npm install http express debug --save    ('--save' coloca o pacote como dependencia do projeto no package.json)
 * 
 * o comando acima cria a pasta node_modules
 * 
 * é interessante excluir a pasta antes de colocar no git, pois é desnecessária e pode ser usada como
 * depedencias no arquivo package.json utilizando o argumento '--save'.
 * 
 * após baixar o repositório, basta executar o comando npm install, para baixar todas as dependencias do projeto                                   
 */ 

// importações de dependencias da pasta node_modules

const http = require('http');
const debug = require('debug')('nodestr:server');
const app = require('../src/app');

// criando servidor 

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

// fazendo o servidor ouvir uma porta

server.listen(port);
server.on('listening', onListening);

// para fazer o servidor rodar basta executar o comando: node server.js

console.log("API rodando na porta: " + port);

/**
 * Normalize a port into a number, string, or false.
 * Função recomendada pelo express 
 */

function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
}

function onListening() { 
    const andress = server.address();
    const bind = typeof andress === 'string' 
        ? 'pipe ' + andress
        : 'port ' + andress.port;
    debug('Listening on ' + bind);
}