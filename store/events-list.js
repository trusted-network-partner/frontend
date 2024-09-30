export const state = () => ({
  eventsList: []
})

export const mutations = {
  setEventsList(state, eventsList) {
    state.eventsList = eventsList
  }
}

export const actions = {
  async getEventsList({commit}, locale) {
    await fetch(`${process.env.APP_URL}events-list-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setEventsList', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  eventsList: state => state.eventsList
}
