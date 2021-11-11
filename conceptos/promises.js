function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Hola', nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bla bla bla...');
      // resolve(nombre);
     // aqui podemos borrar el reject por resolve
      reject('Hay un error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Adios', nombre);
      resolve(nombre);
    }, 1000);
  });
}
// - - -
console.log('Iniciando el proceso...');
hola('Juan')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso');
  })
  // con esta linea de .catch colectamos errores y mostramos por consola
  .catch(error => {
    console.log('Ha habido un error:');
    console.log(error);
  });
