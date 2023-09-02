/* Função para pegar variavel */
var msg = 100
console.log(`Variavel fora da função ${msg}`);
const btn = document.getElementById('btnemail');
function enviarMsg(){
    var ms = document.getElementById('txtemail');
    msg = String(ms.value);
    console.log(msg)
    
    if (msg == ""){
        window.alert('Desculpe insira um email para continuar')
        
    }else{
        window.location.href = "confirm.html"
        window.location.href = `confirm.html?mensagem=${msg}`;
    }
   
    
};

btn.onclick = enviarMsg
/* Iniciando para pegar variavel msg */
console.log('Iniciado o app:')

/* TODAS as tentativas deram errado, tentar usar o arquivo.json */


