

export default function ({
                           isHMR, app, store, route, params, error, redirect
                         }) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) { return }
  let locale = params.lang || defaultLocale
  if (!store.state.lang.locales.includes(locale)) {
    return error({ statusCode: 404 })
  }

  if (!store.state.lang.locales.includes(locale) && app.$cookies.get('locale') !== locale) {
    locale = app.$cookies.get('locale')
  }

  store.commit('lang/SET_LOCALE', locale)
  app.i18n.locale = locale

  if (locale === defaultLocale && route.fullPath.indexOf('/' + params.lang) === 0) {
    const toReplace = '^/' + params.lang + (route.fullPath.indexOf('/' + params.lang + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/')
    )
  } else if (locale !== defaultLocale && locale !== params.lang) {
    if (!params.lang) {
      return redirect(
        route.fullPath.replace('', '/' + locale)
      )
    }
    const toReplace = '^/' + params.lang + (route.fullPath.indexOf('/' + params.lang + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/' + locale + '/')
    )
  }
}
