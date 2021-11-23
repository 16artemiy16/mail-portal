import datetime


def _form_msg_by_num(i):
    return {
        'id': f'{i + 1}',
        'topic': f'Message number {i + 1}',
        'isFavourite': False,
        'isUnread': (i + 1) % 2 == 0,
        'from': 'admin@test.com',
        'date': datetime.date.today(),
    }


MOCKED_MESSAGES = [_form_msg_by_num(i) for i in range(50)]
