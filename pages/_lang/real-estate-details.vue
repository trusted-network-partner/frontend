<template>
  <div class="container">
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
            {{ $t('know_question') }}
          </div>
          <div class="estate-general__descr">
            <p>
              {{ $t('know_descr') }}
            </p>
          </div>
        </div>
        <EstateInfoLinks
          :step="3"
        />
      </div>
      <EstateDetails />
    </div>
  </div>
</template>

<script>
import EstateInfoLinks from '~/components/property/add-real-estate-nav'
import EstateDetails from '~/components/property/add-real-estate-details'

export default {
  layout: 'sidebar',
  name: 'real-estate-details',

  head: {
    title: 'Add real estate'
  },

  components: {
    EstateInfoLinks,
    EstateDetails,
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
