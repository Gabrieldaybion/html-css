import json
from flask import Flask, request, render_template

app = Flask(__name__)
app.run(port=8000)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/processar', methods=['POST'])

def processar():
    data = json.loads(request.data)
    pergunta = data['pergunta']

    # Aqui você pode escrever a lógica para ler o arquivo JSON e obter a resposta com base na pergunta

    # Exemplo simples usando um arquivo JSON fixo
    with open('respostas.json', 'r') as file:
        respostas = json.load(file)
        resposta = respostas.get(pergunta, 'Resposta não encontrada.')

    return json.dumps({'resposta': resposta})

if __name__ == '__main__':
    app.run()
