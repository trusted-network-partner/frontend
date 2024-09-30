<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap">
      <AgentInfoContent />
      <div class="listing-services__items">
        <RealEstate />
        <ShopServices />
      </div>
      <Widget />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import AgentInfoContent from '~/components/agent/agent-info-content'
import RealEstate from '~/components/agent/real-esate'
import ShopServices from '~/components/agent/services'
import Widget from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'listing-services',

  components: {
    ProfileLinks,
    AgentInfoContent,
    RealEstate,
    ShopServices,
    Widget
  },

  head: {
    title: 'Listing & Services'
  },
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    margin-bottom: 104px;
  }
  .content-wrap {
    position: relative;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 50%;
    transform: translateY(-42%);
  }
</style>
