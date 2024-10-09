<template>
  <div class="map-real-estate-info">
    <FiltersSearch />
    <RealEstateList />
  </div>
</template>

<script>
import RealEstateList from "~/components/property/real-estate-list";
import FiltersSearch from "~/components/map/filters-search";
export default {
  name: "map-real-estate-info",

  components: {
    RealEstateList,
    FiltersSearch
  }
};
</script>

<style lang="scss" scoped>
.map-real-estate-info {
  position: relative;
  background: $baseWhite;
  padding: 46px 16px;
  width: 58%;
  margin-left: auto;
  height: auto;

  @include maxMedia($breakpoint-lg) {
    margin-left: 0px;
    width: 100%;
  }
}
</style>
