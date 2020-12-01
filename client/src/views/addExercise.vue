<template>
  <div>
      <form>
          <label>Choose Exercise: </label>
      <div class="select">

        <select class="select" v-model="selectedType" value="Choose Exercise">
            <option disabled value=''>Choose Exercise</option>
            
            <option v-for="exercise in exercises" :key="exercise.id">{{exercise.Name}}</option>
           
        </select>
        
       
    </div>  
    <Cardio :Type="selectedType" style="margin: auto; width: 13%" Cardio v-if="selectedType != null"></Cardio>
    </form>
    
  </div>
</template>

<script>
import Cardio from "../components/Cardio"

const axios = require('axios')
export default {

    name: 'addExercise',
    components: { Cardio },
    data() {
        return {
            exercises: axios.get(process.env.VUE_APP_APIURL+'/exercises').then(resp => this.exercises = resp.data),
            selectedType: null,
            StartTime: null,

            }
    },
    computed: {
        getExerciseList() {
            return this.exercises
        }

    } //console.log(this.exercises)
    
}
</script>

<style>

</style>