<template>
  <main class="main">
    <div class="map" />
    <MapEstateInfoSearch />
    <FiltersPopUp
     ref="filterPopUp"
    />
  </main>
</template>

<script>
import MapEstateInfoSearch from '~/components/map/map-real-estate-info-search'
import FiltersPopUp from '~/components/pop-ups/filter-popup-second'

export default {
  layout: 'default-no-footer',
  name: 'map-real-estate-filters',

  components: {
    MapEstateInfoSearch,
    FiltersPopUp
  },

  head: {
    title: 'Map real estate'
  },

  mounted() {
    this.$refs.filterPopUp.open()
  }
}
</script>

<style scoped>
  .main {
    min-height: calc(100vh - 92px);
    position: relative;
    min-width: 1470px;
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
