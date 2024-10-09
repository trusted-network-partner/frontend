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
          <div class="estate-general__title">
            {{ $t('share_documents') }}
          </div>
          <div class="estate-general__descr">
            <p>
              {{ $t('share_documents_descr') }}
            </p>
          </div>
        </div>
        <EstateInfoLinks
          :step="5"
        />
      </div>
      <EstateDocuments />
    </div>
  </div>
</template>

<script>
import EstateInfoLinks from '~/components/property/add-real-estate-nav'
import EstateDocuments from '~/components/property/add-real-estate-documentation.vue'
export default {
  layout: 'sidebar',
  name: 'real-estate-documentation',

  head: {
    title: 'Add real estate'
  },

  components: {
    EstateInfoLinks,
    EstateDocuments
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
    handleSubmit() {
      console.log('success')
    }
  },

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style scoped>
.estate-general__descr {
  max-width: 540px;
}
</style>
