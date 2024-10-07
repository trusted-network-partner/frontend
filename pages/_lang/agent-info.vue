<template>
  <main class="main">
    <div class="sidebar mobile-full">
      <ProfileLinks />
    </div>
    <div class="content-wrap content-wrap__info">
      <AgentInfoContent />
      <AgentInfo />
      <Widgets />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import AgentInfoContent from '~/components/agent/agent-info-content'
import AgentInfo from '~/components/agent/agent-info'
import Widgets from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'agent-info',

  components: {
    AgentInfoContent,
    ProfileLinks,
    AgentInfo,
    Widgets
  },

  head: {
    title: 'Agent Info'
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/agent/info";
  .content-wrap {
    margin-bottom: 166px;
    position: relative;
  }
</style>
