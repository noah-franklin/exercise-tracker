<template>
<div>
    <div style="width: 33%" class="container">
        <!--<h1 class="tableheader">User List</h1>-->
        <div style="margin: auto" class="field">
            <label style="display: flex">Exercise Name: </label>
        <input style="color: white" class="input" v-model="ExerciseName" type="text" >
        
        <label  >Exercise Type: </label>
        <select class="select" v-model="ExerciseType">
            <option>Aerobic</option>
            <option>Strength</option>
            <option>Flexibility</option>
            <option>Balance</option>
        </select>
        <br>
        <br>
       </div>
        <button @click="addExercise" style="margin-bottom: 1em" class="button is-info">Add Exercise</button>
    </div>
        <div class="table-container">
            
            <table class="table is-striped is-narrow usertable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        
                        <th>Created</th>
                        <th>Updated</th>
                        
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="exercise in exercises" :key="exercise.id">
                        <td>{{exercise.id}}</td>
                        <td>{{exercise.Name}}</td>
                        <td>{{exercise.Type}}</td>
                        
                        <!--<td>{{user.Password}}</td>-->
                        
                        <td>{{exercise.created_at}}</td>
                        <td>{{exercise.update_at}}</td>
                        
                        <td><button class="button is-info" @click="setupEditExercise(exercise.id)">Edit</button></td>
                        <td><button class="button is-danger" @click="setupDeleteExercise(exercise.id)">Delete</button></td>
                    </tr>
                </tbody>

            </table>
            
             <div class="modal" id="editExercise">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <form class="control" name="regForm">
                        <label>Exercise Name: </label>
                        <input style="width: 33%" class="input" v-model="ExerciseName" type="text" >
                        <br>
                        <label>Exercise Type: </label>
                        
                        <select class="select" v-model="ExerciseType">
                            <option>Aerobic</option>
                            <option>Strength</option>
                            <option>Flexibility</option>
                            <option>Balance</option>
                            </select>
                          <div style="color: white">Current exercise name: {{currentExercise.Name}} <br>Current exercise type: {{currentExercise.Type}}
                            <br>
                        <button class="button is-info" @click="editNow">Submit</button>
                        </div>
                        
                    </form>
                    
                </div>
                <button @click="setupEditExercise" class="modal-close is-large" aria-label="close"></button>
            </div>
            <div class="modal" id="deleteExercise">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div style="color: white">Are you sure you want to delete exercise {{currentExercise.Name}} ?
                        
                    </div>
                    <button class="button is-danger" @click="deleteNow">Yes</button>
                    
                </div>
                <button @click="setupDeleteExercise" class="modal-close is-large" aria-label="close"></button>
            </div>
            
        </div>
    </div>

</template>

<script>
const axios = require('axios')



export default {
    name: 'ExerciseList',
    data() {
        return {
            exercises: axios.get(process.env.VUE_APP_APIURL+'/exercises').then(resp => this.exercises = resp.data),
            currentExercise: {},
            token: this.$store.state.token,
            ExerciseName: null,
            ExerciseType: null
            }
    },
    // created() {     
    //     axios.get(process.env.VUE_APP_APIURL+'/users').then(resp => this.users = resp.data)
    // },
    computed: {
        getUserList() {
            return this.exercises
        }
    },
     methods: {
        setupEditExercise(id) {
            document.getElementById("editExercise").classList.toggle('is-active');
            for(let i = 0; i < this.exercises.length; i++) {
                if (this.exercises[i].id == id) {
                    this.currentExercise = this.exercises[i];
                    //console.log(this.currentUser)
                }
            }
            
            
       },
        setupDeleteExercise(id) {
            document.getElementById("deleteExercise").classList.toggle('is-active');
            for(let i = 0; i < this.exercises.length; i++) {
                if (this.exercises[i].id == id) {
                    this.currentExercise = this.exercises[i];
                    //console.log(this.currentUser)
                }
            }
            
         },
        editNow() {
            console.log(this.ExerciseType)
            axios.post(process.env.VUE_APP_APIURL+"/exercises/"+this.currentExercise.id+'/update', {Name: this.ExerciseName, Type: this.ExerciseType}, {
                headers: {
                    'Authorization': "Bearer "+ this.token
                }
            })
            document.getElementById("editExercise").classList.toggle('is-active');
            this.exercises = axios.get(process.env.VUE_APP_APIURL+'/exercises').then(resp => this.exercises = resp.data)
            this.$forceUpdate()

        },
        deleteNow() {
            console.log(process.env.VUE_APP_APIURL+"/exercises/"+this.currentExercise.id+'/delete')
            
            axios.get(process.env.VUE_APP_APIURL+"/exercises/"+this.currentExercise.id+'/delete', {
                headers: {
                    'Authorization': "Bearer "+ this.token
                }
            })
            document.getElementById("deleteExercise").classList.toggle('is-active');
            this.exercises = axios.get(process.env.VUE_APP_APIURL+'/exercises').then(resp => this.exercises = resp.data)
            this.$forceUpdate()
            
        },
        addExercise() {
            axios.post(process.env.VUE_APP_APIURL+"/exercises", {created_at: new Date(), Name: this.ExerciseName, Type: this.ExerciseType}, {
                headers: {
                    'Authorization': "Bearer "+ this.token
                }
            })
            
            this.exercises = axios.get(process.env.VUE_APP_APIURL+'/exercises').then(resp => this.exercises = resp.data)
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