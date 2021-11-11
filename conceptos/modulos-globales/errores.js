function error1() {
  errors();
}

function errors() {
  return 3 + Z;
}
function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
        return 3 + Z;
    } catch (err) {
      console.error('Error en mi funcion asincrona');  
      cb(err);
    }
    })
}
// Aqui cojemos el error y evitamos que se rompa la aplicacion
try {
  // error1();
  seRompeAsincrona(function (err) {
  console.log(err.message)
  });
} catch (err) {
  console.error('Vaya, algo se ha roto...');
  console.error(err.message); // aqui nos muestra el error en mensaje
}

console.log('Esto de aqui esta al final');

// EJECUTAR CON nodemon modulos-globales/ errores.js
