/* Projetos de cursos */
function music(){
    console.log('Imagem music carregada.')
    const img = document.getElementById("fotinx");
    const al = document.getElementById('alink');
    al.setAttribute('href', 'https://gabrieldaybion.github.io/html-css/desafio/produto-pedido/index.html');
    img.setAttribute('src', './imagens/app-musica.PNG');
    img.style.height ='300px'
}

function perf(){
    console.log('Imagem perfume carregada');
    const img = document.getElementById('fotinx');
    const al = document.getElementById('alink');
    al.setAttribute('href', 'https://gabrieldaybion.github.io/html-css/desafio/card-product/index.html');
    img.setAttribute('src', './imagens/Site-perfume.PNG');
}
function login(){
    console.log('Imagem login carregada');
    const img = document.getElementById('fotinx');
    const al = document.getElementById('alink');
    al.setAttribute('href', 'https://gabrieldaybion.github.io/projeto-login/');

    img.setAttribute('src', './imagens/Login.PNG');
    img.style.height = '300px';
    img.style.width =  '100%'

}

function cordel(){
    console.log('Imagem condel carregada');
    const img = document.getElementById('fotinx');
    const al = document.getElementById('alink');
    al.setAttribute('href', 'https://gabrieldaybion.github.io/html-css/desafio/desafio012/');
    img.setAttribute('src', './imagens/cordel.PNG');
    img.style.height ='300px';

}
/* Projetos pessoais.*/

/* Habilidades */

/* Funções para escrever na imagem hmtl e retirar a escrita */
function sobrehtml(){
    console.log('texto da imagem html funcionando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = 'center'
    ttx.style.marginLeft = '0px'
    ttx.innerHTML = '[HTML é uma linguagem de marcação usada para estruturar e exibir conteúdo na web.É a base para a construção de páginas da web.]'
}
function sobrehtmlnor(){
    console.log('texto da imagem html funcionando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = 'center'
    ttx.style.marginLeft = '1px'
    ttx.innerHTML = '/*Passe o mouse em uma das imagens para saber sobre a tecnologia.*/'
}



/* Funções para escrever na imagem css e retirar a escrita */
function sobrecss(){
    console.log('texto da imagem css funcionando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = 'center'
    ttx.style.marginLeft = '0px'
    ttx.innerHTML = '[CSS é uma linguagem de estilo usada para modificar a aparência e o layout de elementos em páginas da web.]'
}
function sobrecssnor(){
    console.log('texto da imagem css está voltando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = 'center'
    ttx.style.marginLeft = '1px'
    ttx.innerHTML = '/*Passe o mouse em uma das imagens para saber sobre a tecnologia.*/'
}



/* Funções para escrever na imagem python e retirar a escrita */
function sobrepy(){
    console.log('texto da imagem css funcionando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = ''
    ttx.style.marginLeft = '0px'
    ttx.innerHTML = '[Python é uma linguagem de programação de alto nível e fácil leitura, ela sonsegue criar, desde scripts simples até aplicações web complexas, inteligência artificial e ciência de dados..]'
}
function sobrepynor(){
    console.log('texto da imagem css está voltando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = 'center'
    ttx.style.marginLeft = '1px'
    ttx.innerHTML = '/*Passe o mouse em uma das imagens para saber sobre a tecnologia.*/'
}



/* Funções para escrever na imagem javascript e retirar a escrita */
function sobrejs(){
    console.log('texto da imagem css funcionando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = ''
    ttx.style.marginLeft = '0px'
    ttx.innerHTML = '[JavaScript é uma linguagem de programação usada principalmente para adicionar interatividade e funcionalidades dinâmicas às páginas da web.]'
}
function sobrejsnor(){
    console.log('texto da imagem css está voltando');
    const ttx = document.getElementById('sbtec');
    ttx.style.textAlign = 'center'
    ttx.style.marginLeft = '1px'
    ttx.innerHTML = '/*Passe o mouse em uma das imagens para saber sobre a tecnologia.*/'
}