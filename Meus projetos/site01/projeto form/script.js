document.getElementById('submitBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    
    // Realize uma requisição AJAX para enviar o valor do input para o servidor Python
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/processar');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById('result').innerHTML = response.resposta;
      }
    };
    xhr.send(JSON.stringify({ pergunta: inputText }));
  });
  