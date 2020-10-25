import { createStore } from 'vuex'

export default createStore({
    state: {
        users: [
            {username:  'admin',password: 'password'},
            {username:  'jimmy',password: 'lol'},
    ],
        authenticated: false
    },
    mutations: {
        changeAuth(state, n) {
            state.authenticated = n

        }
    }
})
