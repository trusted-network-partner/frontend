export const state = () => ({
  communitiesList: []
})

export const mutations = {
  setCommunitiesList(state, communitiesList) {
    state.communitiesList =  communitiesList
  }
}

export const actions = {
  async getCommunitiesList({commit}, locale) {
    await fetch(`${process.env.APP_URL}communities-list-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setCommunitiesList', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  communitiesList: state => state.communitiesList
}
