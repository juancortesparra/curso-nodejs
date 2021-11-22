const os = require('os'); // creamos el sofware de OS.

// console.log(os.arch()); // para saber la arquitectura

// console.log(os.platform()); // para saber en que plataforma usas

// console.log(os.cpus().length); // para saber cuantos core tiene tu sistema

// console.log(os.constants); // para saber cuantas constanstes tenemos

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

// console.log(os.freemem());// para saber cuanta memoria libre en bytes tenemos
// console.log((kb(os.freemem())));// para saber cuanta memoria libre en ky tenemos
// console.log((mb(os.freemem())));// para saber cuanta memoria libre en mb tenemos
// console.log((gb(os.freemem())));// para saber cuanta memoria libre en gb tenemos
// console.log((gb(os.totalmem()))); // para saber memoria disponible dentro de la pc\

// console.log(os.homedir()); // home direccion
// console.log(os.tmpdir()); // rama de direcctorio

// console.log(os.hostname()); // para saber el hostname si trabajas con servidores

console.log(os.networkInterfaces());
