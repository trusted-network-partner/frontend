<template>
  <div class="content" :key="reRender">
    <div class="wrapper">
      <div class="container">
        <Header />
      </div>
      <Nuxt />
      <Footer
        @changeLang="changeLang"
      />
    </div>
    <GlobalMenu />
  </div>
</template>

<script>
import Header from '~/components/headers/header-search'
import GlobalMenu from '~/components/global-menu/global-menu'
import Footer from '~/components/footer/footer'
export default {
  name: 'header-underline',

  components: {
    Header,
    GlobalMenu,
    Footer
  },

  data() {
    return {
      reRender: 0
    }
  },

  methods: {
    changeLang() {
      this.reRender +=1
    }
  },

  mounted() {
    let locale = this.$cookies.get('locale')
    this.$store.dispatch('lang/setLocale', locale)
  }
}
</script>

<style lang="scss" src="~/assets/css/default/main.scss"></style>
