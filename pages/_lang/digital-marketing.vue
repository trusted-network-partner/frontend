<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap digital-marketing">
      <AgentInfoContent />
      <DigitalMarketing />
      <Widgets />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import AgentInfoContent from '~/components/agent/agent-info-content'
import DigitalMarketing from '~/components/agent/digital-marketing'
import Widgets from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'digital-marketing',

  components: {
    AgentInfoContent,
    ProfileLinks,
    DigitalMarketing,
    Widgets
  },

  head: {
    title: 'Digital marketing'
  },
}
</script>

<style scoped>
  .content-wrap {
    margin-bottom: 60px;
    position: relative;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 14%;
  }
</style>
