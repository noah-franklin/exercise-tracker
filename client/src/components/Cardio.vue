<template>
  <div>
       
            <label>Start Time</label>
           <input v-model="cardio.Start_Time" class="input" type="datetime-local" placeholder="">
            <label>End Time</label>
           <input v-model="cardio.End_Time" class="input" type="datetime-local" placeholder="">
           <label>Notes</label>
           <textarea v-model="cardio.Note" style="margin: auto" class="textarea" placeholder="Note" rows="2"></textarea>
            <label>Distance mi</label>
           <input v-model="cardio.Distance" class="input" type="text" placeholder="">
           
           <button style="margin: 1EM auto; background-color: #3273dc;"  class="button is-dark" @click.prevent="addExercise" >
            Add Exercise
            </button>
            
        </div>
</template>

<script>
const axios = require('axios')
export default {
    name: 'Cardio',
    props: ['Type'],

    data() {
        return {
            cardio: {
                created_at: new Date(),
                Exercise_Type: this.Type,
                Start_Time: null,
                End_Time: null,
                Note: null,
                Distance: null,
            }
        }
    },
    methods: {
        addExercise() {
            //(created_at, Owner_id, Start_Time, End_Time, Exercise_Type, Note, Distance)
            console.log(this.cardio) 
            console.log(this.startTime)
            axios.post(process.env.VUE_APP_APIURL+"/workout/add", this.cardio, {
                headers: {
                    'Authorization': "Bearer "+ this.$store.state.token
                }
            })
            console.log('hiiiii')
            console.log(this.Type)
        }
    }
}
</script>

<style>

</style>