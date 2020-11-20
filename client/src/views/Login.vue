

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
  <!--
  <p id="success" v-if="this.$store.state.authenticated">Login Successful</p>
  -->
  
  </div>
  

    

</template>

<script>

export default {
  name: 'Login',
  props: [
      'auth'
  ],
  data() {
      return {
        authLogin: this.auth
        
      }
  },
  methods: {
    login() {
      this.authLogin = true;
      
    }
  }
  
}
</script>

<style>
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