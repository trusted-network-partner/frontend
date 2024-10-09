<template>
  <main class="main">
    <div class="map" />
    <MapSearch />
    <MapEstateInfoSearch />
  </main>
</template>

<script>
import MapSearch from '~/components/map/map-search'
import MapEstateInfoSearch from '~/components/map/map-real-estate-info-search'

export default {
  layout: 'default-no-footer',
  name: 'map-real-estate',

  components: {
    MapSearch,
    MapEstateInfoSearch
  },

  head: {
    title: 'Map real estate'
  }
}
</script>

<style scoped lang="scss">
  .main {
    min-height: calc(100vh - 92px);
    position: relative;
  }
  .map {
    height: 100%;
    width: 100%;
    background: url("~/assets/img/map/map.jpg") 50% 50% no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
  }
  .main {
    border-top: 1px solid $thirdlyGray;
  }
</style>
