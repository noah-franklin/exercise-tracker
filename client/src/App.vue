<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <Nav></Nav>

      <router-view style="margin-top: 5em"/>
  </div>

</template>

<script>

import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  },
  beforeMount() {
    console.log(this.$cookie.getCookie('user'))
    if(this.$cookie.getCookie('user') !== null){
      const user = this.$cookie.getCookie('user')
      const token = this.$cookie.getCookie('token')
      this.$store.commit('login', user, token)
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

</style>
