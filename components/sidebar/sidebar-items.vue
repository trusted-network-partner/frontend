<template>
  <div class="sidebar">
    <TrustedAgents />
    <TrendingEstate />
  </div>
</template>

<script>
import TrustedAgents from '~/components/sidebar/trustedAgents'
import TrendingEstate from '~/components/sidebar/trendingEstate'
  export default  {
    name: 'sidebar-items',

    components: {
      TrustedAgents,
      TrendingEstate
    }
  }
</script>
