/* Função para pegar variavel */
var msg = 100
console.log(`Variavel fora da função ${msg}`);
const btn = document.getElementById('btnemail');
function enviarMsg(){
    var ms = document.getElementById('txtemail');
    msg = String(ms.value);
    console.log(msg)
    return msg
    
};
btn.onclick = enviarMsg
window.Location.href = "" + msg;
/* TODAS as tentativas deram errado, tentar usar o arquivo.json */


