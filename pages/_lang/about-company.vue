<template>
  <main class="main">
    <div class="sidebar mobile-full">
      <ProfileLinks />
    </div>
    <div class="content-wrap about-company">
      <AgentInfoContent />
      <AboutCompany
        @togglePopUp="togglePopUp"
      />
      <Widgets />
    </div>
    <PerformancePopup
      ref="performancePopup"
    />
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import AgentInfoContent from '~/components/agent/agent-info-content'
import AboutCompany from '~/components/agent/about-company'
import PerformancePopup from '~/components/pop-ups/performance-pop-up'
import Widgets from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'about-company',

  components: {
    AgentInfoContent,
    ProfileLinks,
    AboutCompany,
    Widgets,
    PerformancePopup
  },

  head: {
    title: 'Agent Company'
  },

  methods: {
    togglePopUp() {
      this.$refs.performancePopup.open()
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    margin-bottom: 166px;
    position: relative;
  }
</style>
