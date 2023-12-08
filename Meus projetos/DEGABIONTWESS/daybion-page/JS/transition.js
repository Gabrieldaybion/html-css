import {typeWrite} from "./script.js";


function verifica_html(){
    var txt = document.getElementById('s-html-txt');
    var scaixa = document.getElementById('s-caixa');
    var s_html = document.querySelector('.s-html');
    scaixa.addEventListener('mouseenter',function(){
        console.log('Mouse em cima do elemento');
        s_html.style.height = '20%'
        txt.style.display = 'inline'
        
        
    })
    scaixa.addEventListener('mouseleave',function(){
        console.log('Mouse saiu');
        s_html.style.height = '90%'
        txt.style.display = 'none';
    })
}

function verifica_css(){
    var txt = document.getElementById('s-css-txt');
    var scaixa = document.getElementById('s-caixa2');
    scaixa.addEventListener('mouseenter',function(){
        console.log('Mouse em cima do elemento');
        txt.style.display = 'inline'
    })
    scaixa.addEventListener('mouseleave',function(){
        console.log('Mouse saiu');
        txt.style.display = 'none';
    })
}
function verifica_js(){
    var txt = document.getElementById('s-js-txt');
    var scaixa = document.getElementById('s-caixa3');
    scaixa.addEventListener('mouseenter',function(){
        console.log('Mouse em cima do elemento');
        txt.style.display = 'inline'
    })
    scaixa.addEventListener('mouseleave',function(){
        console.log('Mouse saiu');
        txt.style.display = 'none';
    })
} 
function verifica_git(){
    var txt = document.getElementById('s-js-txt');
    var scaixa = document.getElementById('s-caixa3');
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
verifica_html()
verifica_css()
verifica_js()