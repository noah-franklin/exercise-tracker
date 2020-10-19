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
  </div>
  

    

</template>

<script>
import Users from './model/Users.vue';
console.log(username);
export default {
    
  methods: {
      login() {
          <Users username="username" password="password"></ Users>
      }
  }
}
</script>

<style>

#login {
    padding: 50px;
    margin-left: 700px;
    margin-right: 700px;
    
    
}


</style>