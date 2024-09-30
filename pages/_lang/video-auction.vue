<template>
  <main class="main chat-wrap">
    <div class="content-wrap-items">
      <VideoAuctionInfo />
    </div>
  </main>
</template>

<script>
import ChatUsers from '~/components/chat/chat-users'
import VideoAuctionInfo from '~/components/chat/video-auction-info'
export default {
  layout: 'no-footer',
  name: 'video-auction',

  head: {
    title: 'Video auction'
  },

  components: {
    ChatUsers,
    VideoAuctionInfo
  }
}
</script>

<style scoped>
  .content-wrap {
    margin-bottom: 0;
  }
</style>
