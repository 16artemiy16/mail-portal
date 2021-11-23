from flask import Flask
from constants.mocked_messages import MOCKED_MESSAGES
app = Flask(__name__)

@app.get('/')
def hello():
    return {'hello': True}


@app.get('/messages')
def get_msgs():
    return {'messages': MOCKED_MESSAGES}


if __name__ == '__main__':
    app.run(port=5000)
