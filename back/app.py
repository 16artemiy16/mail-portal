from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_jwt_extended import JWTManager, create_access_token

from models.User import UserModel
from constants.mocked_messages import MOCKED_MESSAGES

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["JWT_SECRET_KEY"] = "super-secret"
cors = CORS(app)

jwt = JWTManager(app)


@app.get('/')
def hello():
    return {'hello': True}


@app.get('/messages')
def get_msgs():
    return {'messages': MOCKED_MESSAGES}


@app.post('/auth')
def auth():
    email = request.json.get('email')
    password = request.json.get('password')
    user = UserModel.get_by_email(email)
    if user and user['password'] == password:
        additional_claims = {'id': user['id'], 'email': user['email']}
        token = create_access_token(identity=user['id'], additional_claims=additional_claims)
        return {'token': token}, 200
    return {'success': False, 'msg': 'Wrong email or password'}, 400



if __name__ == '__main__':
    app.run(port=5000, debug=True)
