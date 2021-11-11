async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function()  {
      console,log('Hola', nombre);
      resolve(nombre);
    }, 1500);
  });
}
 function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bla bla bla...');
     resolve('HAY UN ERROR');
   // aqui podemos borrar el reject por resolve
     // reject('Hay un error');
  }, 1000);
  });
  
  
   async function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log('Adios', nombre);
        resolve();
      }, 1000);
    });
  }
async function main() {
    let nombre = await hola('Juan');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
};

console.log('Empezamos el proceso');
main();
console.log('Termina el proceso');
// Este codigo tiene errores
