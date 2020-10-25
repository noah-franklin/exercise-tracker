<template>
  <div id="nav">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <Nav />
    
    <router-view/>
  </div>

</template>

<script>

import Nav from './components/Nav.vue';

export default {
  name: 'App',
  data() {
            return {
                authenticated: false,
                users: {
                    username: "admin",
                    password: "password"
                }
            }
  },
  components: {
    Nav

  },
  mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: white;
}

#login {
    padding: 100px;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
}
</style>
