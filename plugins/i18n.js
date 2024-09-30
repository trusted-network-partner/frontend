
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {},
  silentTranslationWarn: true
})

export default async ({ app, store }) => {
  await loadMessages(store.getters['lang/getLocale'])
  app.i18n = i18n
}

/**
 *
 * @param locale
 * @returns {Promise<void>}
 */
export async function loadMessages(locale) {
  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const messages = await import(/* webpackChunkName: "lang-[request]" */ `~/lang/${locale}.json`)
    i18n.setLocaleMessage(locale, messages.default)
  }
  if (i18n.locale !== locale) {
    i18n.locale = locale
  }
}

