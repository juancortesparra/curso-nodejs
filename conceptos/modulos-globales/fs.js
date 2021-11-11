const fs = require('fs');

// para leer
function read(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}
// para escribir
function write(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.log('No he podido escribirlo', err);
    }
    else {
      console.log('Se ha escrito correctamente');
    }
  });
}
// para borrar un archivo
function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// read(__dirname + '/archivo.txt', console.log);
// borrar(__dirname + '/archivo1.txt', console.log);

// To start: open a terminal and run: nodemon modulos-globales/fs.js
