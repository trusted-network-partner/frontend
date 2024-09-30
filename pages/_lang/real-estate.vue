<template>
  <main class="main">
    <div class="sidebar">
      <nuxt-link to="map-real-estate"
        class="btn-default black btn-filter uppercase"
      >
        {{ $t('map_search') }}
      </nuxt-link>
      <FiltersProperty />
    </div>
    <div class="content-wrap">
      <div class="real-estate-wrap">
        <h2 class="default-title">
          {{ $t('listing_real_estate') }}
        </h2>
        <RealEstateList />
      </div>
      <Widgets />
    </div>
  </main>
</template>

<script>
import FiltersProperty from '~/components/filter/filters-property'
import RealEstateList from '~/components/property/real-estate-list'
import Widgets from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'real-estate-page',

  components: {
    RealEstateList,
    Widgets,
    FiltersProperty
  },

  head: {
    title: 'Real estate'
  },
}
</script>

<style scoped>
  .btn-filter {
    margin-bottom: 34px;
  }

  .main {
    margin-top: 32px;
  }
  .content-wrap {
    margin-bottom: 147px;
    position: relative;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 7%;
  }
  .pagination-list{
    margin-left: 10px;
  }
</style>
