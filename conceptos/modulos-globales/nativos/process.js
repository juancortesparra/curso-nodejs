const { set } = require("express/lib/application");

// const process = require('process');
process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});
process.on('exit', () => {
  console.log('El proceso acabo'); // todo lo que este dentro de exit es como un eventlop
  setTimeout(() => {
    console.log('Esto no se ve por que esta dentro del exit');
  }, 0);
});

setTimeout(() => {
  console.log('Esto si se ve por que esta fuera del exit');
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.error('Se nos olvido capturar un error');
  setTimeout(() => {
    console.log('Esto viene desde las exepciones');
  }, 0);
}); // Capturar exepciones que no se han capturado

functionQuenoexiste();


// process.on('uncaughtRejection'); // Para promesas que se rechazaron y nadie tiene un cath

