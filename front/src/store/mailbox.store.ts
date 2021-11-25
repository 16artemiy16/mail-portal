import { MessageI } from '@/interfaces/message.interface';
import msgService from '@/services/message.service';

export const MAILBOX_NAMESPACE = 'mailbox';

export const TOGGLE_LEFT_SIDEBAR = 'toggleLeftSidebar';
export const SET_MSGS = 'setMsgs';
export const SET_SELECTED_MSG = 'setSelectedMsg';

export interface MailboxStateI {
  messages: MessageI[],
  isLeftSidebarExpanded: boolean,
  selectedMsgId: string | null,
}

export const mailboxStore = {
  namespaced: true,
  state: (): MailboxStateI => ({
    messages: [],
    isLeftSidebarExpanded: true,
    selectedMsgId: null,
  }),
  mutations: {
    [TOGGLE_LEFT_SIDEBAR]: (state: MailboxStateI): void => {
      state.isLeftSidebarExpanded = !state.isLeftSidebarExpanded;
    },
    [SET_MSGS]: (state: MailboxStateI, messages: MessageI[]): void => {
      state.messages = messages;
    },
    [SET_SELECTED_MSG]: (state: MailboxStateI, id: string | null | undefined): void => {
      state.selectedMsgId = id || null;
    },
  },
  getters: {
    selectedMsg: ({ messages, selectedMsgId }: MailboxStateI): MessageI | null => {
      return messages.find(({ id }) => id === selectedMsgId) || null;
    },
  },
  actions: {
    fetchMsgs: async ({ commit }: any): Promise<void> => {
      try {
        const { messages } = await msgService.getMany();
        commit(SET_MSGS, messages);
      } catch (e) {
        // TODO: add error handling
      }
    },
  },
};
