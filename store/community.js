export const state = () => ({
  community: []
})

export const mutations = {
  setCommunity(state, community) {
    state.community =  community
  }
}

export const actions = {
  async getCommunity({commit}, locale) {
    await fetch(`${process.env.APP_URL}community-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setCommunity', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  community: state => state.community
}
