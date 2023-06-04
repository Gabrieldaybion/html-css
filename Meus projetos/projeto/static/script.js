function enviarPergunta() {
    var pergunta = document.getElementById('pergunta').value;

    $.ajax({
        type: 'POST',
        url: '/processar',
        data: JSON.stringify({ pergunta: pergunta }),
        contentType: 'application/json',
        success: function(data) {
            var respostaElement = document.getElementById('resposta');
            respostaElement.innerHTML = data.resposta;
        }
    });
}
