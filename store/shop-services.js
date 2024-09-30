export const state = () => ({
  shopServices: []
})

export const mutations = {
  setRealShopServices(state, shopServices) {
    state.shopServices = shopServices
  }
}

export const actions = {
  async getShopServices({commit}, locale) {
    await fetch(`${process.env.APP_URL}shop-services-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setRealShopServices', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  shopServices: state => state.shopServices
}
