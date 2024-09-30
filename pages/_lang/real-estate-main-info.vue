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
           {{ $t('affect_question') }}
          </div>
          <div class="estate-general__descr">
            <p>
              <span class="bold">
                 {{ $t('affect_bold') }}
              </span>
              {{ $t('affect_descr') }}
            </p>
          </div>
        </div>
        <EstateInfoLinks
          :step="2"
        />
      </div>
      <EstateMainInfo />
    </div>
  </div>
</template>

<script>
import EstateInfoLinks from '~/components/property/add-real-estate-nav'
import EstateMainInfo from '~/components/property/add-real-estate-main-info'
export default {
  layout: 'sidebar',
  name: 'real-estate-address',

  head: {
    title: 'Add real estate'
  },

  components: {
    EstateInfoLinks,
    EstateMainInfo
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
