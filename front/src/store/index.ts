import { createStore } from 'vuex';
import { MailboxStateI, mailboxStore } from '@/store/mailbox.store';

export interface StateI {
  mailbox: MailboxStateI,
}

export const store = createStore<StateI>({
  modules: {
    mailbox: mailboxStore,
  },
});
