<template>
    <div style="width: 33%" class="container">
        <div style="margin-bottom: 1EM" class="card" v-for="workout in workouts" :key="workout.id">

            <header class="card-header is-centered">
                
                <p class="card-header-title is-centered">
                    {{currentUser.Username}} ({{currentUser.FirstName}} {{currentUser.LastName}})
                </p>

            </header>
            
            <br>
             <div class="">
                    Activity: {{workout.Exercise_Type}}
                </div>
                
                <div >

                 Distance: {{workout.Distance}} miles
                 </div>
            <br>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img src="../cardio.png" alt="Placeholder image">
                        </figure>

                    </div>

                    <div class="media-content">
                        <br>
                        <p class="title is-4">{{workout.Note}}</p>
                        <p ></p>
                        <!--<p class="subtitle is-6">@johnsmith</p>-->
                    </div>
               </div>
            </div>

            <div class="card-content"> 
                <p><strong>Started: </strong>{{formatDate(workout.Start_Time)}}</p>
                <p><strong>Ended: </strong> {{formatDate(workout.End_Time)}}</p>
         
            </div>
        </div>
    </div>
</template>

<script>


const axios = require('axios')
const moment = require('moment')

export default {
    name: 'Feed',
    data() { 
        return {
            workouts: axios.get(process.env.VUE_APP_APIURL+'/workout', {
        headers: {
            'Authorization': "Bearer "+ this.$store.state.token
        }
        }).then(resp => {
            
            this.workouts = resp.data
        
        }),
        
        currentUser: this.$store.state.user
        }
        
    },
    methods: {
        formatDate(value) {
            let temp = moment(value)
            console.log(temp.format("dddd, MMMM Do YYYY, h:mm:ss a"))
            return temp.format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
        
    }
    
}


</script>

<style>


</style>