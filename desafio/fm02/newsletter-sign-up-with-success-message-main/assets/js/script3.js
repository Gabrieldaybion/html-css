/* Parte via url */

function obterMsgURL(nome){
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

const mensagem = obterMsgURL("mensagem");
console.log(`Email enviado para ${mensagem}`)
const insirir = document.getElementById('pemail')
insirir.innerHTML = mensagem 
