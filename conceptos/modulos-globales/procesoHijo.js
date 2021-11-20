const { exec, spawn } = require('child_process');

// const { exec } = require('child_process');
// const { stdout, stderr } = require('process');

// exec('node modulos-globales/fs.js', (err, stdout, stderr) => {
// if (err) {
//  console.error(err);
//  return false;
// }
// });

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid); // para saber el ID del proceso
console.log(proceso.connected); // Para saber si esta conectado

proceso.stdout.on('data', function (dato) {
console.log('Esta muerto?');
console.log(process.killed);  
console.log(dato.toString())
})

proceso.on('exit', function () {
  console.log('El proceso termino');
  console.log(proceso.killed)
})