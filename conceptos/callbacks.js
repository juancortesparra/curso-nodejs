function hello(name,miCallback) {
setTimeout(function () {
    console.log('You Web is, ' + name);
    miCallback();
  }, 1000);
}
function bye(name, otroCallback) {
  setTimeout(function()  {
  console.log('Say, ' + name);
  otroCallback();  
  }, 1000);
}

console.log('Iniciando Proceso....');
hello('Crash', function () {
bye('Bye', function() {
console.log('Terminando Proceso....');
});
});
