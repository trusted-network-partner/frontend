export const state = () => ({
  realEstate: []
})

export const mutations = {
  setRealEstate(state, realEstate) {
    state.realEstate = realEstate
  }
}

export const actions = {
  async getRealEstate({commit}, locale) {
    await fetch(`${process.env.APP_URL}real-estate-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setRealEstate', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  realEstate: state => state.realEstate
}
