<template>
  <main class="main chat-wrap">
    <div class="sidebar mobile-full">
      <div class="chat-aside">
        <ChatUsers
          @togglePopUp="togglePopUp"
        />
      </div>
    </div>
    <div class="content-wrap">
     <ChatInfo />
    </div>
    <ChatRoom
      ref="chatUsers"
    />
  </main>
</template>

<script>
import ChatUsers from '~/components/chat/chat-users'
import ChatInfo from '~/components/chat/chat-info'
import ChatRoom from '~/components/pop-ups/chat-pop-up'

export default {
  layout: 'no-footer',
  name: 'chat',

  head: {
    title: 'Chat'
  },

  components: {
    ChatUsers,
    ChatInfo,
    ChatRoom
  },

  data() {
    return {
      isPopUpShown: false
    }
  },

  methods: {
    togglePopUp() {
      this.$refs.chatUsers.open()
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    margin-bottom: 40px;
  }
</style>
