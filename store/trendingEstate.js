export const state = () => ({
  estate: []
})

export const mutations = {
  setEstate(state, estate) {
    state.estate = estate
  }
}

export const actions = {
  async getEstate({commit}, locale) {
    await fetch(`${process.env.APP_URL}trending-estate-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setEstate', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  estate: state => state.estate
}
