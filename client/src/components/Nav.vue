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
      <a style="color: #3273dc" @click="this.$router.push('/')" class="navbar-item">
        Home
      </a>

     <a style="color: #3273dc" @click="this.$router.push('/about')" class="navbar-item">
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
       <button id="signupNav" v-if="!this.$store.state.loggedIn" style="color: #3273dc;" class="button" @click="this.$router.push('register')">Signup</button>
       <button id="loginNav" v-if="!this.$store.state.loggedIn" class="button" @click="this.$router.push('login')">Login</button>
       <div v-if="this.$store.state.loggedIn">
        Welcome {{getUser.FirstName}} {{getUser.LastName}}
       </div>
       <button id="logoutNav" v-if="this.$store.state.loggedIn" class="button" @click="logout">Logout</button>
        
      </div>
    </div>
  </div>
</nav>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default {
    
    name: 'Nav',
    data() {
      return {
        Username: this.$store.state.user
      }
    },
    computed: {
      getUser() {
        return this.$store.state.user
      }
      
    },
    methods: {
        logout() {
          this.$cookie.removeCookie("user")
          this.$cookie.removeCookie("token")
          this.$store.commit('logout')
        }
    }
    
}

</script>

<style scoped>

#loginNav {
  background-color: #3273dc; 
  border-color: #3273dc; 
  color: white;
}
#logoutNav {
  margin-left: 5px;
}
#brand {
  
    font-weight: bold
}
</style>