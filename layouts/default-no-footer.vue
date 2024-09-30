<template>
  <div class="content">
    <div class="wrapper">
      <div class="container">
        <Header />
      </div>
      <Nuxt />
    </div>
    <GlobalMenu />
  </div>
</template>

<script>
import Header from '~/components/headers/header-search'
import GlobalMenu from '~/components/global-menu/global-menu'
export default {
  name: 'default-no-footer',

  components: {
    Header,
    GlobalMenu,
  },

  mounted() {
    let locale = this.$cookies.get('locale')
    this.$store.dispatch('lang/setLocale', locale)
  }
}
</script>

<style lang="scss" src="~/assets/css/default/main.scss"></style>
