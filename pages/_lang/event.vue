<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap">
      <EventDetails />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import EventDetails from '~/components/info/event-details'
export default {
  layout: 'default',
  name: 'event',

  components: {
    ProfileLinks,
    EventDetails
  },

  head: {
    title: 'Event'
  },
}
</script>

<style scoped>
.content-wrap {
  margin-bottom: 125px;
}
</style>
