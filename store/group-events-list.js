export const state = () => ({
  groupEventsList: []
})

export const mutations = {
  setList(state, groupEventsList) {
    state.groupEventsList = groupEventsList
  }
}

export const actions = {
  async getGroupEventsList({commit}, locale) {
    await fetch(`${process.env.APP_URL}communities-events-list-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setList', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  groupEventsList: state => state.groupEventsList
}
