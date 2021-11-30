from constants.mocked_users import users


class UserModel:
    @staticmethod
    def get_by_id(id):
        return next(filter(lambda user: user['id'] == id, users), None)

    @staticmethod
    def get_by_email(email):
        return next(filter(lambda user: user['email'] == email, users), None)
