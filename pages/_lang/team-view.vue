
<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
      <Participants />
    </div>
    <div class="content-wrap">
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links-team'
import Participants from '~/components/agent/participants'
export default {
  layout: 'default',
  name: 'team-view',

  components: {
    ProfileLinks,
    Participants
  },

  head: {
    title: 'Team view'
  },
}
</script>

<style scoped>
.content-wrap {
  margin-bottom: 125px;
}
</style>

