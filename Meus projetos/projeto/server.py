import json
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/processar', methods=['POST'])
def processar():
    data = json.loads(request.data)
    pergunta = data['pergunta']

    # Ler as respostas do arquivo JSON
    with open('respostas.json', 'r') as file:
        respostas = json.load(file)
        resposta = respostas.get(pergunta, 'Perdão mas a resposta ainda não está disponivel')

    return jsonify({'resposta': resposta})

if __name__ == '__main__':
    app.run()
