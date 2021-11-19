import { createNamespacedHelpers } from 'vuex';
import { MAILBOX_NAMESPACE, TOGGLE_LEFT_SIDEBAR } from '@/store/mailbox.store';

const { mapState, mapMutations } = createNamespacedHelpers(MAILBOX_NAMESPACE);

// Methods
export const { toggleLeftSidebar } = mapMutations([TOGGLE_LEFT_SIDEBAR]);

// State
export const {
  messages,
  isLeftSidebarExpanded,
} = mapState(['messages', 'isLeftSidebarExpanded']);
