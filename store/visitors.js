export const state = () => ({
  visitors: []
})

export const mutations = {
  setVisitors(state, visitors) {
    state.visitors = visitors
  }
}

export const actions = {
  async fetchVisitors({commit}) {
    await fetch(`${process.env.APP_URL}visitors.json`)
      .then(response => response.json())
      .then(result => {
        commit('setVisitors', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  visitors: state => state.visitors
}
