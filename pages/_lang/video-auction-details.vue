<template>
  <main class="main chat-wrap">
    <div class="content-wrap-items">
      <VideoAuctionInfoDetails />
    </div>
  </main>
</template>

<script>
import ChatUsers from '~/components/chat/chat-users'
import VideoAuctionInfoDetails from '~/components/chat/video-auction-info-details'
export default {
  layout: 'no-footer',
  name: 'video-auction-details',

  head: {
    title: 'Video auction'
  },

  components: {
    ChatUsers,
    VideoAuctionInfoDetails
  }
}
</script>

<style scoped>
  .content-wrap {
    margin-bottom: 0;
  }
</style>
