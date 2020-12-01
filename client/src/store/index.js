import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {},
    token: '',
    loggedIn: false,
    exerciseLog: {}
  },
  mutations: {
    login (state, user) {
      // mutate state
      state.user = user;
      state.loggedIn = true;
    },
    changeToken(state, token) {
        state.token = token;
    },
    
    logout (state) {
        state.user = {},
        state.token = ''
        state.loggedIn = false;
    }
  },
  getters: {
      getUsername(state) {
          return state.user.Username;
          
      },
      getToken(state) {
          return state.token;
      },
      getLoginStatus(state) {
          return state.loggedIn;
      }
      
  }
})

export default store