export const state = () => ({
  customers: []
})

export const mutations = {
  setCustomers(state, customers) {
    state.customers = customers
  }
}

export const actions = {
  async getCustomers({commit}, locale) {
    await fetch(`${process.env.APP_URL}customers-${locale || 'en'}.json`)
      .then(response => response.json())
      .then(result => {
        commit('setCustomers', result || [])
      })
      .catch(error => console.log('error', error));
  },
}

export const getters = {
  customers: state => state.customers
}
