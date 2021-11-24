import { MessageI } from '@/interfaces/message.interface';

interface ResponseMessageI extends Omit<MessageI, 'date'> {
  date: string;
}

interface GetManyResI {
  messages: ResponseMessageI[]
}

export class MessageService {
  private readonly URL = `${process.env.VUE_APP_BACK_URL}messages`;

  static instance: MessageService | undefined;

  static getInstance(): MessageService {
    if (!MessageService.instance) {
      this.instance = new MessageService();
    }

    return this.instance as MessageService;
  }

  getMany(): Promise<GetManyResI> {
    const url = `${this.URL}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => ({
        ...data,
        messages: data.messages.map((msg: MessageI) => ({ ...msg, date: new Date(msg.date) })),
      }));
  }
}

export default MessageService.getInstance();
