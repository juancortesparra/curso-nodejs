function saludar() {
  console.log('Me estas llamando desde el archivo modulo.js');
}

module.exports = {
  saludar,
  prop1: 'Hola que tal',
};
