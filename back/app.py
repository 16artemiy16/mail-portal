from flask import Flask
from flask_cors import CORS, cross_origin

from constants.mocked_messages import MOCKED_MESSAGES

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

@app.get('/')
def hello():
    return {'hello': True}


@app.get('/messages')
def get_msgs():
    return {'messages': MOCKED_MESSAGES}


if __name__ == '__main__':
    app.run(port=5000, debug=True)
