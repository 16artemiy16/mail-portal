import { createStore } from 'vuex';
import { MessageI } from '@/interfaces/message.interface';

export const TOGGLE_LEFT_SIDEBAR = 'toggleLeftSidebar';

export interface MailboxStateI {
  messages: MessageI[],
  isLeftSidebarExpanded: boolean,
}

export const mailboxStore = {
  namespaced: true,
  state: () => ({
    messages: [],
    isLeftSidebarExpanded: true,
  }),
  mutations: {
    [TOGGLE_LEFT_SIDEBAR]: (state: MailboxStateI) => {
      state.isLeftSidebarExpanded = !state.isLeftSidebarExpanded;
    },
  },
};
