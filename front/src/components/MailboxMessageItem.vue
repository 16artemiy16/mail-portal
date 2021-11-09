<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxMessageItem',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return this.$props.message.date.toLocaleDateString();
    },
  },
});
</script>

<template>
  <div class="message">
    <input type="checkbox" class="message__marker" />
    <AppIcon class="far fa-star message__is-favourite" />
    <div class="message__from">{{ message.from }}</div>
    <div class="message__topic">{{ message.topic }}</div>
    <div class="message__date">{{ date }}</div>
  </div>
</template>

<style scoped lang="scss">
  .message {
    display: flex;
    align-items: center;
    width: 100%;
    user-select: none;
    cursor: pointer;
    padding: 1rem 0;

    &:hover {
      box-shadow: inset 1px 0 0 #dadce0,
                  inset -1px 0 0 #dadce0,
                  0 1px 2px 0 rgb(60 64 67 / 30%),
                  0 1px 3px 1px rgb(60 64 67 / 15%);
    }

    &__marker, &__is-favourite {
      flex-basis: 50px;
    }

    &__from {
      flex-basis: 150px;
      font-style: italic;
    }

    &__topic {
      flex: 1;
      text-align: left;
    }

    &__date {
      flex-basis: 100px;
    }
  }
</style>
