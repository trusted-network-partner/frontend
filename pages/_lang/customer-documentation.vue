<template>
  <div class="real-estate-wrapper">
    <div
      class="estate-info-element"
      :style="{'height': sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap">
      <div class="estate-general">
        <div
          ref="sidebar"
          class="estate-general__wrap"
        >
          <div class="estate-general__container">
          <div class="estate-general__title">
            {{ $t('documentation') }}
          </div>
          <div class="estate-general__descr">
            <p>
              {{ $t('documentation_share') }}
            </p>
          </div>
          </div>
        </div>
        <CustomerInfoLinks
          :step="4"
        />
      </div>
      <EstateDocuments />
    </div>
  </div>
</template>

<script>
import CustomerInfoLinks from '~/components/customer/new-customer-links'
import EstateDocuments from '~/components/property/add-real-estate-documentation.vue'
export default {
  layout: 'sidebar',
  name: 'customer-documentation',

  head: {
    title: 'New customer'
  },

  components: {
    CustomerInfoLinks,
    EstateDocuments,
  },

  data() {
    return {
      sidebarOffset: 0
    }
  },

  computed: {
    sidebarHeight() {
      return this.sidebarOffset
    }
  },

  methods: {
  },

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/new-customer/new-customer";
  .estate-general__title {
    margin-bottom: 15px;
  }
  .info-default {
    margin-bottom: 40px;
  }
</style>
