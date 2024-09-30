export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async getUsers({commit}) {
    await fetch(`${process.env.APP_URL}users.json`)
      .then(response => response.json())
      .then(result => {
        commit('setUsers', result || [])
      })
      .catch(error => console.log('error', error));
  },
  async fetchUsers({context}) {
    return await fetch(`${process.env.APP_URL}users.json`)
      .then(response => response.json())
      .catch(error => console.log('error', error))
      // .finally(result => {
      //   commit('setUsers', result || [])
      // })
  },
}

export const getters = {
  users: state => state.users
}
