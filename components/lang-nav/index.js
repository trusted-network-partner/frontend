import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  props: {
    isSelect: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      selectedImg: '~/assets/img/lang/en.png',
      selectedLang: 'English',
      defaultLanguage: {
        img: '~/assets/img/lang/en.png',
        code: 'en',
      },
      languages: [
        {
          img: '~/assets/img/lang/en.png',
          code: 'en',
          name: 'English'
        },
        {
          img: '~assets/img/lang/es.png',
          code: 'es',
          name: 'Español',
        },
        {
          img: '~/assets/img/lang/ua.png',
          code: 'ua',
          name: 'Українська',
        },
        // {
        //   code: 'pt',
        //   name: 'Português',
        // },
        // {
        //   code: 'fr',
        //   name: 'Français',
        // },
        // {
        //   code: 'de',
        //   name: 'Deutsch',
        // },
        // {
        //   code: 'pl',
        //   name: 'Polski',
        // },
        // {
        //   code: 'ua',
        //   name: 'Українська',
        // },
        // {
        //   code: 'ru',
        //   name: 'Русский',
        // },
        // {
        //   code: 'tr',
        //   name: 'Türkçe',
        // },
        // {
        //   code: 'hi',
        //   name: 'हिन्दी',
        // },
      ],
    }
  },
  computed: {
    ...mapGetters({
      getLocale: 'lang/getLocale',
      getLocales: 'lang/getLocales'
    }),
    getRoute: function () {
      const toReplace = '^/' + this.$store.state.lang.locale + (this.$route.fullPath.indexOf('/' + this.$store.state.lang.locale + '/') === 0 ? '/' : '')
      const re = new RegExp(toReplace)
      return this.$route.fullPath.replace(re, '/')
    }
  },
  methods: {
    selectLang(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
        const app = this
        this.$cookies.set('locale', locale, {
          path: '/',
        })
        loadMessages(locale).then(function () {
          // app.$router.push({ path: '/' + locale + app.getRoute.replace(/\/+$/, '') })
          app.$store.dispatch('lang/setLocale', locale)
        })
        this.$emit('changeLang')
      }
    },
    checkLocale() {
      const locale = window.navigator.language || navigator.userLanguage
      this.languages.map(item => {
        item.active = false
        if (item.locale !== undefined && item.locale.toUpperCase() === locale.toUpperCase()) {
          item.active = true
          this.$i18n.locale = item.code
          this.locale = locale
        } else {
          this.locale = 'en'
        }
      })
    }
  },
}
