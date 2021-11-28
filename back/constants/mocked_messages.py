import datetime


def _form_msg_by_num(i):
    return {
        'id': f'{i + 1}',
        'topic': f'Message number {i + 1}',
        'isFavourite': False,
        'isUnread': (i + 1) % 2 == 0,
        'from': 'admin@test.com',
        'date': datetime.date.today(),
        'body': f'Hello! This is a message # {i + 1}. This is a text message and you don\'t need to reply it!'
    }


MOCKED_MESSAGES = [_form_msg_by_num(i) for i in range(50)]
