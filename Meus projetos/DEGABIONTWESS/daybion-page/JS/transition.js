import {typeWrite} from "./script.js";

function html_txt(){

    console.log('txt aparece');
    var txt = document.getElementById('s-html-txt')
    var scaixa = document.getElementById('s-caixa');
    scaixa.onpointerover = ()=>{
        txt.style.display = 'inline'
        
    };
    
};
function html_txt_desable(){
    
  
        console.log('txt aparece'); 
        console.log('txt some');

        var txt = document.getElementById('s-html-txt') 
        var scaixa = document.getElementById('s-html-txt')

        function saiu(mouse){
          if (mouse = "mouseout")
          return 
        }

        if(saiu() ==  "mouseout"){
            saiu()
            console.log('A mensagem saiu')
        }else{
            console.log('Deu algum b.o');
        }
        scaixa.addEventListener("mouseout",()=>{
            txt.style.display = 'none';
        })
        
        
      
};
/* Para escrever o Header */
function escreva_header(esc){
    
    typeWrite(esc);
}
const titulo = document.querySelector('h1#tt');
escreva_header(titulo);
html_txt()
html_txt_desable()