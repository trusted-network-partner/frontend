<template>
  <div class="content">
    <div class="wrapper">
      <div class="container">
        <Header />
        <Nuxt />
      </div>
    </div>
    <GlobalMenu />
  </div>
</template>

<script>
import Header from '~/components/headers/header-search'
import GlobalMenu from '~/components/global-menu/global-menu'
import Footer from '~/components/footer/footer'
export default {
  name: 'no-footer',

  components: {
    Header,
    GlobalMenu,
    Footer
  },

  mounted() {
    let locale = this.$cookies.get('locale')
    this.$store.dispatch('lang/setLocale', locale)
  }
}
</script>

<style lang="scss" src="~/assets/css/default/main.scss"></style>
