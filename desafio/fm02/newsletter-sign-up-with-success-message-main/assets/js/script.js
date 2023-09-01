/* Modificações para controle de tela */
/* Tela de celular pequeno (min-width:310px) and (max-width:350px) */
/* Tela de celular normal (min-width:351px) and (max-width:400px) */
/* Tela de celular grande (min-width:401px) and (max-width:480px) */
function modificar_size_email(){
    var elemento = document.getElementById('txtemail');
    var larguraTela = window.innerWidth;
    if(larguraTela < 400 && larguraTela > 381){
        elemento.setAttribute('size','33'); 
    }
    else if(larguraTela < 380 && larguraTela > 361){ /* Telas normal */
        elemento.setAttribute('size','31'); 

    }else if (larguraTela < 361 && larguraTela > 351) /* Telas de 360 normal*/{
        elemento.setAttribute('size','30');
    }
    else if(larguraTela <350 && larguraTela > 310){ /* Telas pequenas */
        elemento.setAttribute('size','26')

    } else if(larguraTela <426 && larguraTela > 401){ /* Telas grandes */
        elemento.setAttribute('size','34')
    } else if (larguraTela <480 && larguraTela > 427){
        elemento.setAttribute('size','35.3')

    } else if (larguraTela <825 && larguraTela > 700){ /* telas de tablet */
            elemento.setAttribute('size','35.3')
    }else if(larguraTela <845 && larguraTela > 826){
        elemento.setAttribute('size','35.3')
    }

    else{
        elemento.setAttribute('size','32') /* Versão padrão. */
    }
};

window.addEventListener("load",modificar_size_email);
window.addEventListener("resize",modificar_size_email);



