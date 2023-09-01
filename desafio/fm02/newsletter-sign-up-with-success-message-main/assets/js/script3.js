var urlParams = new URLSearchParams(window.location.search);
var msg = urlParams.get('var');
console.log(`Variavel fora da função ${msg}`);
