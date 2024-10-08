from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'chave_secreta_para_sessao'

# Configuração do banco de dados SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///usuarios.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Definição do modelo de usuário
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Criação do banco de dados
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        gender = request.form['gender']
        age = request.form['age']
        password = request.form['password']

        # Criação de um novo usuário
        novo_usuario = Usuario(name=name, gender=gender, age=age, password=password)
        db.session.add(novo_usuario)
        db.session.commit()

        flash('Usuário cadastrado com sucesso!')
        return redirect(url_for('index'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']

        # Busca o usuário no banco de dados
        usuario = Usuario.query.filter_by(name=name, password=password).first()

        if usuario:
            flash('Login realizado com sucesso!')
            return redirect(url_for('index'))
        else:
            flash('Nome ou senha incorretos!')
            return redirect(url_for('login'))
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
