const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Nueva Peticion!');
  console.log(req.url);
  switch (req.url) {
    case '/hola':
      res.write('Hola, estas en otro archivo');
      res.end();
      break;

    default:
      res.write('Error 404: No encuentro lo que buscas');
      res.end();
  }

  // res.writeHead(201, {'Content-type': 'text/plain'})
 // Escribir respuesta al usuario.
 //  res.write('Hola, estas usando un servidor de NodeJS');
 // res.end();
}

console.log('escuchando http en el puerto 3000');
