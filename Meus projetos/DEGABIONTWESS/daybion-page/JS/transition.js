import {typeWrite} from "./script.js";


function verifica(){
    var txt = document.getElementById('s-html-txt');
    var scaixa = document.getElementById('s-caixa');
    scaixa.addEventListener('mouseenter',function(){
        console.log('Mouse em cima do elemento');
        txt.style.display = 'inline'
    })
    scaixa.addEventListener('mouseleave',function(){
        console.log('Mouse saiu');
        txt.style.display = 'none';
    })
    
    

}

/* Para escrever o Header */
function escreva_header(esc){
    
    typeWrite(esc);
}
const titulo = document.querySelector('h1#tt');
escreva_header(titulo);
verifica()