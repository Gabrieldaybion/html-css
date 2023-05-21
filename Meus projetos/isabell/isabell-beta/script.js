function enviar() {
    var input = document.getElementById("inputTexto").value;
  
    fetch("/obter_resposta?pergunta=" + input)
      .then(response => response.text())
      .then(resposta => {
        document.getElementById("resposta").textContent = resposta;
      });
  }
  