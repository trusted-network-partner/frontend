<template>
  <div class="content-wrap">
    <Banner />
    <InfoEventsLItems />
    <Posts />
  </div>
</template>

<script>
import Banner from '~/components/welcome/welcome-banner'
import InfoEventsLItems  from '~/components/info/info-events'
import Posts from  '~/components/posts/posts'
export default {
  layout: 'sidebar-items',
  name: 'news-events',

  components: {
    Banner,
    InfoEventsLItems,
    Posts
  },

  head: {
    title: 'News'
  },
}
</script>
