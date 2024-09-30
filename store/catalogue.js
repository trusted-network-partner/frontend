 export const state = () => ({
    countries: []
  })

  export const mutations = {
    setCountries(state, countries) {
      state.countries = countries
    }
  }

  export const actions = {
     async getCountries({commit}, locale) {
      await fetch(`${process.env.APP_URL}catalogue-${locale || 'en'}.json`)
        .then(response => response.json())
        .then(result => {
          commit('setCountries', result || [])
        })
        .catch(error => console.log('error', error));
    },
  }

  export const getters = {
    countries: state => state.countries
  }
