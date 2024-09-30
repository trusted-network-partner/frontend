<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap">
      <CommunitiesEvents />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import CommunitiesEvents from '~/components/info/communities-events'
export default {
  layout: 'default',
  name: 'communities-page',

  components: {
    ProfileLinks,
    CommunitiesEvents
  },

  head: {
    title: 'Communities & Events'
  },
}
</script>

<style scoped>
  .content-wrap {
    margin-bottom: 120px;
  }
</style>
