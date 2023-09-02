console.log('Iniciado o app:')
const fs = require('fs');
var bb = "Rei gabriel e fabyyy "
// Leitura do arquivo JSON
const data = fs.readFileSync('teste.json', 'utf8');
const dados = JSON.parse(data);

// Modificamos a variável "msg" com a mensagem desejada
dados.msg = bb;

// Escrevemos os dados atualizados de volta no arquivo JSON
fs.writeFileSync('dados.json', JSON.stringify(dados, null, 2), 'utf8');

console.log('Finalizado o app:')
