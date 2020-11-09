<template>
  <div id="about" class="about">
    <p> why isnt this working </p>
    <ul>
      <li>
        All Users:
      </li>
      <li v-for="user in testing" :key="user.id">
         Name: {{ user.first_name }} {{ user.last_name}} 
      </li>
    </ul>

  </div>
</template>

<script>

import axios from 'axios';

console.log('hiiiii');
export default {

  name: 'About',
  data() {
    return {testing: null}
    
  },
  mounted () {
    axios
      .get('http://localhost:8000/about')
      .then(response => (this.testing = response.data))
  }

  }
  


</script>

<style>
#about {
  margin-top: 5em;
}
</style>