

<template>
    <div id="login">
    
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input v-model="username" class="input" type="text" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p> 
</div>

<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input v-model="password" class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>

</div>



<div class="field">
  <p class="control">
    <button style="background-color: #3273dc;"  class="button is-dark" @click="login" >
      Login
    </button>
  </p>
  </div>
  <p>{{ count }}</p>
  <!--
  <p id="success" v-if="this.$store.state.authenticated">Login Successful</p>
  -->
  
  </div>
  

    

</template>

<script>
const axios = require('axios')
export default {
  name: 'Login',
  props: [
      'auth'
  ],
  data() {
      return {
        authLogin: this.auth,
        username: "",
        password: ""
        
      }
  },
  methods: {
    async login() {
      const user = {
        Username: this.username,
        Password: this.password
      }
      const response = await axios.post(process.env.VUE_APP_APIURL + '/login', user)
      console.log(response)
      this.$store.commit('login',response.data.user)
      this.$store.commit('changeToken',response.data.token)
      this.$cookie.setCookie('user', response.data.user[0])
      console.log(response.data.user[0])
      this.$cookie.setCookie('token', response.data.token)
      this.$router.push('/')
      const cookie = this.$cookie.getCookie('user')
      
      this.$store.commit('login', cookie)


      
    }
  },
  computed: {
    count() {
      
      return this.$store.state.loggedIn
    }
  }
  
}
</script>

<style scoped>
#login {
    margin: auto;
    width: 25%;
  }
@media only screen and (max-width: 700px) {
  #login {
    margin: auto;
    width: 100%;
  }
}


#success {
  color: lightgreen;
  font-weight: bold;
}

</style>