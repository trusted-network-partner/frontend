  export const state = () => ({
    notifications: []
  })

  export const mutations = {
    setNotifications(state, notifications) {
      state.notifications = notifications
    }
  }

  export const actions = {
    async getNotifications({commit}, locale) {
      await fetch(`${process.env.APP_URL}notifications-${locale || 'en'}.json`)
        .then(response => response.json())
        .then(result => {
          commit('setNotifications', result || [])
        })
        .catch(error => console.log('error', error));
    },
  }

  export const getters = {
    notifications: state => state.notifications
  }
