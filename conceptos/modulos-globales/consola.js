// Muchas de las funciones sobre como utilizar console dentro del codigo.
console.log('Algo'); // print en pantalla

console.info('Algo'); // info del codigo ejecutado

console.error('Algo'); // cojer el error y guardarlo dentro de una parte del codigo 

console.warn(); // Para error mayores {warnings}

// Ejemplo de implementacion de console.table
var tabla = [
 {
    a: 1,
    b: 'z'
 },
  {
    a: 1,
    b: 'Otra'
  }
]
console.table(tabla);

// Agrupar muchos logs dentro de una misma familia
console.group('opt1');
console.log('Hola');
console.log('Espero que estes bien');
console.log('Adios');
console.groupEnd('opt1');

// Ejemplo mas claro sobre console.group();
function funcion1() {
  console.group('funcion 1');
  console.log('Esto es parte de la funcion 1');
  funcion2();
  console.groupEnd('funcion 1');
}
function funcion2() {
  console.group('funcion 2');
  console.log('Ahora estamos en la funcion 2');

  console.groupEnd('funcion 2');
}

console.log('Empezamos');
funcion1();

// Otro ejemplo de contador
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');

// Todo esto se arranca con nodemon dentro de la consola
// nodemon consola.js
