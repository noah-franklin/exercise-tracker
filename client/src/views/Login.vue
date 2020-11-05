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
    <button class="button is-danger" @click="login" >
      Login
    </button>
  </p>
  </div>
  <p id="success" v-if="this.$store.state.authenticated">Login Successful</p>
  
  </div>
  

    

</template>

<script>


export default {
  name: 'Login',
  methods: {
      
      login() {
        console.log(this.$store.state.users.username)
        console.log(this.$store.state.users.password)
        console.log(this.$store.state.authenticated)
        const { username, password } = this
        console.log(username)
        console.log(password)
        
        if (username == this.$store.state.users.username && password == this.$store.state.users.password) {
          // console.log(this.authenticated)
            this.$store.commit('changeAuth',true)
           
            console.log(this.$store.state.authenticated)
            console.log('SUCCESS')
            this.$router.push('/about') 
        }
        else {
          console.log("wrong username or  password")
        }
      }

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