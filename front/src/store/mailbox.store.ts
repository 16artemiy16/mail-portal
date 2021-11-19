import { MessageI } from '@/interfaces/message.interface';

export const MAILBOX_NAMESPACE = 'mailbox';

export const TOGGLE_LEFT_SIDEBAR = 'toggleLeftSidebar';

export interface MailboxStateI {
  messages: MessageI[],
  isLeftSidebarExpanded: boolean,
}

const FAKE_MESSAGES = new Array(50).fill(null).map((_, i) => ({
  id: `${i}`,
  topic: `Message number ${i}`,
  isFavourite: false,
  isUnread: i % 2 === 0,
  from: 'admin@test.com',
  date: new Date(),
}));

export const mailboxStore = {
  namespaced: true,
  state: () => ({
    messages: FAKE_MESSAGES,
    isLeftSidebarExpanded: true,
  }),
  mutations: {
    [TOGGLE_LEFT_SIDEBAR]: (state: MailboxStateI) => {
      state.isLeftSidebarExpanded = !state.isLeftSidebarExpanded;
    },
  },
};
