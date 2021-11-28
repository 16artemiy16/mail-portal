<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailboxMessagePage',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <div class="msg">
    <h1>{{ message.topic }}</h1>
    <div class="msg__meta">
      <div class="msg__sender-img"></div>
      <div class="msg__info">
        <div class="msg__info-from">
          <div><b>Firstname Lastname</b></div>
          <div class="mx-2">&lt;user@super.com&gt;</div>
        </div>
        <div class="msg__info-to">
          Whom: me
        </div>
      </div>
    </div>
    <div class="msg__body">{{ message.body }}</div>
  </div>
</template>

<style scoped lang="scss">
  .msg {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;

    &__meta {
      display: flex;
    }

    &__info {
      padding-left: 1rem;
      text-align: left;
    }

    &__info-from {
      display: flex;
    }

    &__sender-img {
      width: 50px;
      height: 50px;
      border: 1px black solid;
    }

    &__body {
      margin-top: 2rem;
      text-align: left;
    }
  }
</style>
