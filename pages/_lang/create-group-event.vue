<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap">
      <CreateContent />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import CreateContent from '~/components/info/create-group-event'
export default {
  layout: 'default',
  name: 'create-group-event',

  components: {
    CreateContent,
    ProfileLinks,
  },

  head: {
    title: 'Create Groups & Events'
  },
}
</script>

<style scoped>
.content-wrap {
  margin-bottom: 120px;
}
</style>
