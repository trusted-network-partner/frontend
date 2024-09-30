<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap content-wrap__info">
      <Calendar />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import Calendar from '~/components/calendar/calendar'
export default {
  layout: 'default',
  name: 'calendar',

  components: {
    ProfileLinks,
    Calendar
  },

  head: {
    title: 'Agent Info'
  },
}
</script>

<style scoped>
.content-wrap {
  margin-bottom: 166px;
  position: relative;
}
</style>
