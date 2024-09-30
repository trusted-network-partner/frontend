<template>
  <div class="content auth-layout" :key="reRender">
    <div class="wrapper">
      <div class="container">
        <div class="header-wrap">
          <header class="header">
            <div class="header__logo">
              <nuxt-link to="/" class="logo">
                TRUSTED NETWORK PARTNER
              </nuxt-link>
            </div>
            <div class="header__info">
              <Langs />
            </div>
          </header>
        </div>
      </div>
      <main class="main-auth">
        <Nuxt />
      </main>
    </div>
    <GlobalMenu />
  </div>
</template>

<script>
import GlobalMenu from '~/components/global-menu/global-menu'
import Langs from '~/components/lang-nav/lang-nav'
export default {
  name: 'auth',

  components: {
    GlobalMenu,
    Langs
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

<style lang="scss" src="~/assets/css/default/main.scss" />
