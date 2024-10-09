<template>
  <main class="main">
    <MainFilters />
    <div class="map" />
    <div class="map-search-wrap">
      <MapSearch />
    </div>
  </main>
</template>

<script>
import MapSearch from '~/components/map/map-search'
import MainFilters from '~/components/map/map-main-filters'

export default {
  layout: 'header-underline',
  name: 'map-search',

  components: {
    MapSearch,
    MainFilters
  },

  head: {
    title: 'Map search'
  }
}
</script>

<style scoped>
 .main {
   height: calc(100vh - 190px);
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
</style>
