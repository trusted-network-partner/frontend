<template>
  <main class="main">
    <div class="sidebar">
      <Filters />
    </div>
    <div class="content-wrap">
      <div class="real-estate-wrap">
        <h2 class="default-title">
          {{ $t('shop_services') }} 1 of 12
        </h2>
        <ShopService />
      </div>
    </div>
  </main>
</template>

<script>
import Filters from '~/components/filter/filters'
import ShopService from '~/components/info/shop-service'
export default {
  layout: 'default',
  name: 'shop-services',

  components: {
    ShopService,
    Filters
  },

  head: {
    title: 'Product and services'
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
</style>
