<template>
  <main class="main chat-wrap">
    <div class="content-wrap-items">
      <VideoChatInfo />
    </div>
  </main>
</template>

<script>
import ChatUsers from '~/components/chat/chat-users'
import VideoChatInfo from '~/components/chat/video-chat-info'
export default {
  layout: 'no-footer',
  name: 'video-conference',

  head: {
    title: 'Video conference'
  },

  components: {
    ChatUsers,
    VideoChatInfo
  }
}
</script>

<style scoped>
  .content-wrap {
    margin-bottom: 0;
  }
</style>
