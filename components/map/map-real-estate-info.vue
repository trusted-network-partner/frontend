<template>
  <div class="map-real-estate-info">
    <FiltersShort />
    <RealEstateList />
  </div>
</template>

<script>
import RealEstateList from '~/components/property/real-estate-list'
import FiltersShort from '~/components/map/filters-short'
  export default {
    name: 'map-real-estate-info',

    components: {
      RealEstateList,
      FiltersShort
    }
  }
</script>

<style lang="scss" scoped>
  .map-real-estate-info {
    position: relative;
    background: $baseWhite;
    padding: 46px 16px;
    width: 58%;
    min-width: 1112px;
    margin-left: auto;
    height: auto;
  }
</style>
