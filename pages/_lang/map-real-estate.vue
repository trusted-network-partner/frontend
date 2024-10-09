<template>
  <main class="main">
    <div class="map" />
    <div class="map-real-estate-btns">
      <nuxt-link
        to="map-real-estate-search"
        class="btn-default black map-real-estate-btn"
      >
        {{ $t("searchHere") }}
      </nuxt-link>
      <nuxt-link
        to="map-real-estate-status"
        class="btn-default black map-real-estate-btn"
      >
        {{ $t("status") }}
      </nuxt-link>
    </div>
    <MapEstateItem />
    <MapRealEstateInfo />
  </main>
</template>

<script>
import MapEstateItem from "~/components/map/map-real-estate-single";
import MapRealEstateInfo from "~/components/map/map-real-estate-info";

export default {
  layout: "default-no-footer",
  name: "map-real-estate",

  components: {
    MapEstateItem,
    MapRealEstateInfo
  },

  head: {
    title: "Map real estate"
  }
};
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
  @include maxMedia($breakpoint-lg) {
    display: none;
  }
}
.map-real-estate-btn {
  min-height: 58px;
  margin-bottom: 7px;
  text-transform: uppercase;
  min-width: 178px;
  border-radius: 0 5px 5px 0;
}
.map-real-estate-btns {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.main {
  border-top: 1px solid $thirdlyGray;
}
</style>
