<template>
  <form style="width: 25%" class="control" name="regForm">
       <label style="display: flex">Username</label>
      <input class="input" v-model="Username" type="text">
      <br>
      <label style="display: flex">Password</label>
      <input class="input" v-model="Password" type="password">
      <br>
      <label style="display: flex">First Name</label>
      <input class="input" v-model="FirstName" type="text">
      <br>
      <label style="display: flex">Last Name</label>
      <input class="input" v-model="LastName" type="text">
      <br>
      <label style="display: flex">DOB</label>
      <input class="input" v-model="DOB" type="date">
      <br>
      <br>
      <button style="background-color: #3273dc;" class="button is-dark" @click.prevent="register">Register</button>
      
  </form>
 
</template>

<script>

const axios = require('axios')
// let username = {{ username }}
export default {
    data() {
        return {      
            Username: "",
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
                Username: this.Username,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Password: this.Password,
                DOB: this.DOB  
            }
            console.log(user)
            await axios.post(process.env.VUE_APP_APIURL+'/register', user)
            this.$router.push('/login')
        }
    }
}
</script>

<style>
label {
    color: white
}
</style>