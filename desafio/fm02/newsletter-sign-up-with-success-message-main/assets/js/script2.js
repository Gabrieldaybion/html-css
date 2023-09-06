/* Função para pegar variavel */
var msg = 100
console.log(`Variavel fora da função ${msg}`);
const btn = document.getElementById('btnemail');
function enviarMsg(){
    var ms = document.getElementById('txtemail');
    var txterr = document.getElementById('emaillabel');
    msg = String(ms.value);
    console.log(msg);
    const regexEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (msg == ""){
        txterr.style.marginLeft = '100px'
        txterr.innerHTML = 'insira um email'
        
    }else{
        if(regexEmail.test(msg)){
            window.location.href = "confirm.html"
            window.location.href = `confirm.html?mensagem=${msg}`;
        }else{
            txterr.style.marginLeft = '100px'
            txterr.innerHTML = 'Email invalido'

        }
        
    }
   
    
};

btn.onclick = enviarMsg
/* Iniciando para pegar variavel msg */
console.log('Iniciado o app:')

/* TODAS as tentativas deram errado, tentar usar o arquivo.json */


