from flask import Flask, request

app = Flask(__name__)

@app.route("/obter_resposta")
def obter_resposta():
    pergunta = request.args.get("pergunta")

    # Aqui você pode realizar uma consulta ao banco de dados
    # e obter a resposta com base na pergunta fornecida
    resposta = consultar_banco_dados(pergunta)

    return resposta

def consultar_banco_dados(pergunta):
    # Implemente a lógica para consultar o banco de dados MySQL
    # e retornar a resposta com base na pergunta fornecida
    # Aqui está um exemplo simples que sempre retorna "Olá" como resposta
    if pergunta == "oi":
        return "Olá"
    elif pergunta =="tudo bem":
        return "Sim e você ?"
    else:
        return "Desculpe, não entendi a pergunta."

if __name__ == "__main__":
    app.run()
print('Funcionando!!!')