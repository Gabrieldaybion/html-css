export  function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        setTimeout(()=> 
            elemento.innerHTML += letra, 319 * i)
            return 'função funcionando'
    } );
}




