const fs = require('fs');

// Leitura do arquivo JSON
const data = fs.readFileSync('dados.json', 'utf8');
const dados = JSON.parse(data);

// Acessamos o valor de "msg" e o exibimos
console.log('Valor atual de "msg" em secundario.js:', dados.msg);
        