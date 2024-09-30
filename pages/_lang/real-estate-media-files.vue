<template>
  <div>
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
              {{ $t('media_question') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('media_descr') }}
              </p>
            </div>
          </div>
          <EstateInfoLinks
            :step="4"
          />
        </div>
        <EstateMedia />
      </div>
    </div>
  </div>
</template>

<script>
import EstateInfoLinks from '~/components/property/add-real-estate-nav'
import EstateMedia from '~/components/property/add-real-estate-media.vue'
export default {
  layout: 'sidebar',
  name: 'real-estate-main-files',

  head: {
    title: 'Add real estate'
  },

  components: {
    EstateInfoLinks,
    EstateMedia
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
