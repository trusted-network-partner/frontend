<template>
  <div class="content" :key="reRender">
    <div class="wrapper">
      <div class="container">
        <Header />
        <main class="main">
          <SideBarItems />
          <Nuxt />
        </main>
      </div>
      <Footer
        @changeLang="changeLang"
      />
    </div>
    <GlobalMenu />
  </div>
</template>

<script>
import Header from '~/components/headers/header-search'
import SideBarItems from '~/components/sidebar/sidebar-items'
import Footer from '~/components/footer/footer'
import GlobalMenu from '~/components/global-menu/global-menu'
export default {
  name: 'sidebar-items-header-search',

  components: {
    Header,
    SideBarItems,
    Footer,
    GlobalMenu
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
