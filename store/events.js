export const state = () => ({
  events: []
})

export const mutations = {
  setEvents(state, events) {
    state.events = events
  }
}

export const actions = {
  async getEvents({commit}) {
    await fetch(`${process.env.APP_URL}events.json`)
      .then(response => response.json())
      .then(result => {
        commit('setEvents', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  events: state => state.events
}
