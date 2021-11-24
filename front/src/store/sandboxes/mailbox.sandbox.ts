import { createNamespacedHelpers } from 'vuex';
import { MAILBOX_NAMESPACE, SET_SELECTED_MSG, TOGGLE_LEFT_SIDEBAR } from '@/store/mailbox.store';

const {
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
} = createNamespacedHelpers(MAILBOX_NAMESPACE);

// Methods
export const {
  toggleLeftSidebar,
  setSelectedMsg,
} = mapMutations([TOGGLE_LEFT_SIDEBAR, SET_SELECTED_MSG]);

// State
export const {
  messages,
  isLeftSidebarExpanded,
} = mapState(['messages', 'isLeftSidebarExpanded']);

// Getters
export const {
  selectedMsg,
} = mapGetters(['selectedMsg']);

// Actions
export const {
  fetchMsgs,
} = mapActions(['fetchMsgs']);
