function saludar() {
  console.log('Me estas llamando desde el archivo modulo.mjs');
}

export default {
  saludar,
  prop1: 'Soy un modulo experimental',
};

// Aqui ejecutamos en la consola de este modo  node --experimental-modules index.mjs
