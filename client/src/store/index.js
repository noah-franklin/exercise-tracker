import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {},
    token: '',
    loggedIn: false
  },
  mutations: {
    login (state, user, token) {
      // mutate state
      state.user = user
      state.token = token
      state.loggedIn = true;
    }
  },
  getters: {
      getUsername(state) {
          return state.user.Username;
          
      }
  }
})

export default store