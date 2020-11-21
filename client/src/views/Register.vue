<template>
  <form class="control" name="regForm">
     <!--  <label>Username</label>
      <input v-model="firstname" type="text" name="firstname" placeholder="username">
      <br>-->
      <label>Password</label>
      <input v-model="Password" type="password">
      <br>
      <label>First Name</label>
      <input v-model="FirstName" type="text">
      <br>
      <label>Last Name</label>
      <input v-model="LastName" type="text">
      <br>
      <label>DOB</label>
      <input v-model="DOB" type="date">
      <br>
      <button @click.prevent="register">Register</button>
      
  </form>
 
</template>

<script>

const axios = require('axios')
// let username = {{ username }}
export default {
    data() {
        return {      
            Password: "",
            FirstName: null,
            LastName: null,
            DOB: null,
        }
    },
    methods: {
        
        async register() {
            const user = {
                created_at: new Date(),
                FirstName: this.FirstName,
                LastName: this.LastName,
                Password: this.Password,
                DOB: this.DOB,
                User_Type: 1    
            }
            console.log(user)
            await axios.post('http://localhost:3000/register', user)
        }
    }
}
</script>

<style>
label {
    color: white
}
</style>