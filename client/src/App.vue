<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <Nav :auth=false></Nav>
    <p style="margin-top: 5em">{{ auth }}</p>
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
  data() {
    return {
      auth: false
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
  
  
  
  
}

</style>
