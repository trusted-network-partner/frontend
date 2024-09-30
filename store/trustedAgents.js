export const state = () => ({
  agents: []
})

export const mutations = {
  setAgents(state, agents) {
    state.agents =  agents
  }
}

export const actions = {
  async getAgents({commit}) {
    await fetch(`${process.env.APP_URL}trusted.json`)
      .then(response => response.json())
      .then(result => {
        commit('setAgents', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  agents: state => state.agents
}
