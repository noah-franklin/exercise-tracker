<template>
    <div>
        <!--<h1 class="tableheader">User List</h1>-->
        <div class="table-container">
            
            <table class="table is-striped is-narrow usertable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th><abbr title="Date of Birth">DOB</abbr></th>
                        <!--<th>Password</th>-->
                        <th>User Type 1(Admin) 2(User)</th>  
                        <th>Created</th>
                        <th>Updated</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.Username}}</td>
                        <td>{{user.FirstName}}</td>
                        <td>{{user.LastName}}</td>
                        <td>{{user.DOB}}</td>
                        <!--<td>{{user.Password}}</td>-->
                        <td>{{user.User_Type}}</td>
                        <td>{{user.created_at}}</td>
                        <td>{{user.update_at}}</td>
                        <td><button class="button is-info" @click="editUser(user.id)">Edit</button></td>
                        <td><button class="button is-danger" @click="deleteUser(user.id)">Delete</button></td>
                    </tr>
                </tbody>

            </table>
            <div class="modal" id="edit">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <form class="control" name="regForm">
                        <label>User Type: </label>
                        <input v-model="User_Type" type="text" placeholder="1 (Admin), 2 (User)">
                          <div style="color: white">Current Role: {{currentUser.User_Type}} 
                        <button  @click.prevent="editNow">Submit</button>
                        </div>
                        
                    </form>
                    
                </div>
                <button @click="editUser" class="modal-close is-large" aria-label="close"></button>
            </div>
            <div class="modal" id="delete">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div style="color: white">Are you sure you want to delete {{currentUser.Username}} ?
                        
                    </div>
                    <button class="button is-danger" @click.prevent="deleteNow">Yes</button>
                    
                </div>
                <button @click="deleteUser" class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios')



export default {
    name: 'UserList',
    data() {
        return {
            users: axios.get(process.env.VUE_APP_APIURL+'/users').then(resp => this.users = resp.data),
            currentUser: {},
            token: this.$store.state.token,
            User_Type: null
            }
    },
    // created() {     
    //     axios.get(process.env.VUE_APP_APIURL+'/users').then(resp => this.users = resp.data)
    // },
    computed: {
        getUserList() {
            return this.users
        }
    },
    methods: {
        editUser(id) {
            document.getElementById("edit").classList.toggle('is-active');
            for(let i = 0; i < this.users.length; i++) {
                if (this.users[i].id == id) {
                    this.currentUser = this.users[i];
                    console.log(this.currentUser)
                }
            }
            
            
        },
        deleteUser(id) {
            document.getElementById("delete").classList.toggle('is-active');
            for(let i = 0; i < this.users.length; i++) {
                if (this.users[i].id == id) {
                    this.currentUser = this.users[i];
                    console.log(this.currentUser)
                }
            }
            
        },
        editNow() {
            axios.post(process.env.VUE_APP_APIURL+"/users/"+this.currentUser.id+'/update', {User_Type: this.User_Type }, {
                headers: {
                    'Authorization': "Bearer "+ this.token
                }
            })
            document.getElementById("edit").classList.toggle('is-active');
            this.users = axios.get(process.env.VUE_APP_APIURL+'/users').then(resp => this.users = resp.data)
            this.$forceUpdate()

        },
        deleteNow() {
            console.log(process.env.VUE_APP_APIURL+"/users/"+this.currentUser.id+'/delete')
            
            axios.get(process.env.VUE_APP_APIURL+"/users/"+this.currentUser.id+'/delete', {
                headers: {
                    'Authorization': "Bearer "+ this.token
                }
            })
            document.getElementById("delete").classList.toggle('is-active');
            this.users = axios.get(process.env.VUE_APP_APIURL+'/users').then(resp => this.users = resp.data)
            this.$forceUpdate()
            
        }
    }
}
    
        
    

</script>

<style scoped>

.usertable {
    margin: 0 auto;
}
.tableheader {
    margin-bottom: 15px;
    color:aliceblue;

}
</style>