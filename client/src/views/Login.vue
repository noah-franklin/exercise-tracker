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
    <button style="background-color: #3273dc" class="button is-dark" @click="login" >
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
  methods: {
 

  }
  
}
</script>

<style>

#login {
    margin-top: 20%;
    margin-left: 33%;
    margin-right: 33%;  
}

#success {
  color: lightgreen;
  font-weight: bold;
}

</style>