<template>
  <nav style="border-width: 2px; border-style: solid; border-color: black black #3273dc black" class="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <div id="brand" class="navbar-item">
          Excersie App Tracker
          </div>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      
    </a>
    
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a style="color: #3273dc" href="/" class="navbar-item">
        Home
      </a>

     <a style="color: #3273dc" href="/about" class="navbar-item">
        About
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" style="color: #3273dc">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
       <button id="signup" style="color: #3273dc;" class="button" onclick="document.location='/about'">Signup</button>
       <button id="login" v:if="checkAuth" class="button" onclick="document.location='/login'"> {{ authNav }} Login</button>
       
        
      </div>
    </div>
  </div>
</nav>
</template>

<script>

/*var x = document.getElementById("signup");
var y = document.getElementById("login");
var auth = false;
function login() {
  if (auth)
}*/

export default {
    name: 'Nav',
    props: [
      'auth'
    ],
    data() {
      return {
        authNav: this.auth
      }
    },
    computed: {
      checkAuth() {
        return this.authNav
      }
    }
   
}

</script>

<style scoped>

#login {
  background-color: #3273dc; 
  border-color: #3273dc; 
  color: white;
}

#brand {
  
    font-weight: bold
}
</style>