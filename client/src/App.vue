<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <Nav />
    
    <router-view/>
  </div>

</template>

<script>

import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav

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
  
  margin-right: 1%
  
}
</style>
