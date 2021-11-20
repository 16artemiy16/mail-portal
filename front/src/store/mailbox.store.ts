import { MessageI } from '@/interfaces/message.interface';

export const MAILBOX_NAMESPACE = 'mailbox';

export const TOGGLE_LEFT_SIDEBAR = 'toggleLeftSidebar';
export const SET_SELECTED_MSG = 'setSelectedMsg';

export interface MailboxStateI {
  messages: MessageI[],
  isLeftSidebarExpanded: boolean,
  selectedMsgId: string | null,
}

const FAKE_MESSAGES = new Array(50).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  topic: `Message number ${i + 1}`,
  isFavourite: false,
  isUnread: (i + 1) % 2 === 0,
  from: 'admin@test.com',
  date: new Date(),
}));

export const mailboxStore = {
  namespaced: true,
  state: (): MailboxStateI => ({
    messages: FAKE_MESSAGES,
    isLeftSidebarExpanded: true,
    selectedMsgId: null,
  }),
  mutations: {
    [TOGGLE_LEFT_SIDEBAR]: (state: MailboxStateI): void => {
      state.isLeftSidebarExpanded = !state.isLeftSidebarExpanded;
    },
    [SET_SELECTED_MSG]: (state: MailboxStateI, id: string | null): void => {
      state.selectedMsgId = id;
    },
  },
  getters: {
    selectedMsg: ({ messages, selectedMsgId }: MailboxStateI): MessageI | null => {
      return messages.find(({ id }) => id === selectedMsgId) || null;
    },
  },
};
