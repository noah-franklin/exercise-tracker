<template>
  <form name="regForm">
      <label>Username</label>
      <input type="text" name="firstname" placeholder="username">
      <br>
      <label>Password</label>
      <input type="password">
      <br>
      <label>First Name</label>
      <input type="text">
      <br>
      <label>Last Name</label>
      <input type="text">
      <br>
      <label>Admin 1 || 0</label>
      <input type="number">
      <br>
      <button @click="register">Submit</button>
      <div>{{ test }}</div>
  </form>
 
</template>

<script>

const axios = require('axios')
// let username = {{ username }}
export default {
    data() {
        return {
            test: null
        }
    },
    methods: {
        
        async register() {
            console.log("wtf")
            //await axios.get('http://localhost:8080/users').then(resp => console.log(resp.data))
            axios.post('http://localhost:8080/users',
            {
                username: 'joe',
                password: 'bingo',
                first_name: 'lol',
                last_name: 'ydsdsa',
                is_admin: 0
            })
        }
    },
    mounted () {
    axios
      .get('http://localhost:8080/users')
      .then(response => (this.test = response.data))
  }
}
</script>

<style>
label {
    color: white
}
</style>