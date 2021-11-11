let nombre = process.env.NOMBRE || 'Sin sensura';
let web = process.env.WEB || 'El club de la lagana';
console.log(`Hi ` + nombre);
console.log('My web is ' + web);
// En consola ejecuta esto
// NOMBRE=Juan WEB=hacked.com node entorno.js
