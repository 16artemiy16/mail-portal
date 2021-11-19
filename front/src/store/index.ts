import { createStore } from 'vuex';
import { MAILBOX_NAMESPACE, MailboxStateI, mailboxStore } from '@/store/mailbox.store';

export interface StateI {
  mailbox: MailboxStateI,
}

export const store = createStore<StateI>({
  modules: {
    [MAILBOX_NAMESPACE]: mailboxStore,
  },
});
