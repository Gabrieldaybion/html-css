function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        setTimeout(()=> 
            elemento.innerHTML += letra, 255 * i)
    } );
}


const titulo = document.querySelector('h1#tt');

typeWrite(titulo);