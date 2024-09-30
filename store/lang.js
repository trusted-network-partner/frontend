import { loadMessages } from '~/plugins/i18n'
// state
export const state = () => ({
  defaultLocale: 'en',
  locale: 'en',
  locales: ['en', 'es', 'ua']
})
// getters
export const getters = {
  getLocale: state => state.locale,
  getLocales: state => state.locales,
  getDefaultLocale: state => state.defaultLocale,
}
// mutations
export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      loadMessages(locale)
      state.locale = locale
    }
  }
}
// actions
export const actions = {
  setLocale({ commit }, locale) {
    commit('SET_LOCALE', locale)
  }
}
