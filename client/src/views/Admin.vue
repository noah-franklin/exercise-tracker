<template>
    <div>
        <h1 class="tableheader">User List</h1>
        <div>
            
            <table class="table usertable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th><abbr title="Date of Birth">DOB</abbr></th>
                        <th>Password</th>
                        <th>User Type</th>  
                        <th><abbr title="Created at">C</abbr></th>
                        <th><abbr title="Updated at">U</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.FirstName}}</td>
                        <td>{{user.LastName}}</td>
                        <td>{{user.DOB}}</td>
                        <td>{{user.Password}}</td>
                        <td>{{user.User_Type}}</td>
                        <td>{{user.created_at}}</td>
                        <td>{{user.update_at}}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    name: 'Admin',
    data() {
        return {users: null}
    },
    created() {
        axios.get('https://exercise-app-api.herokuapp.com/users').then(resp => this.users = resp.data)
       

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