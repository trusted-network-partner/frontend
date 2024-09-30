<template>
  <div class="content-wrap">
    <Banner />
    <Info />
    <Posts />
  </div>
</template>

<script>
import Banner from '~/components/welcome/welcome-banner'
import Info  from '~/components/info/info'
import Posts from  '~/components/posts/posts'
  export default {
    layout: 'sidebar-items',

    name: 'news',

    head: {
      title: 'News'
    },

    components: {
      Banner,
      Info,
      Posts
    }
  }

</script>
