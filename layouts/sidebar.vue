<template>
  <div
    @drop="drag"
    @dragover="drag"
    class="content" :key="reRender"
  >
    <div class="wrapper">
      <div class="container">
        <Header />
      </div>
      <main class="add-real-estate">
        <Nuxt />
      </main>
    </div>
    <GlobalMenu />
  </div>
</template>

<script>
import Header from '~/components/headers/header-search'
import GlobalMenu from '~/components/global-menu/global-menu'
export default {
  name: 'sidebar',

  components: {
    Header,
    GlobalMenu,
  },

  data() {
    return {
      reRender: 0
    }
  },

  methods: {
    changeLang() {
      this.reRender +=1
    },
    drag(e) {
      e.preventDefault()
    }
  },

  mounted() {
    let locale = this.$cookies.get('locale')
    this.$store.dispatch('lang/setLocale', locale)
  }
}
</script>

<style lang="scss" src="~/assets/css/default/main.scss"></style>
