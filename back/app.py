from flask import Flask

app = Flask(__name__)

@app.get('/')
def hello():
    return { 'hello': True }


if __name__ == '__main__':
    app.run(port=5000)
