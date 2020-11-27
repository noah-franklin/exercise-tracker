<template>
    <div class="columns">
        <div class="column is-one-quarter">
        <aside class="menu">
            <p style="color:white" class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li ><a class="is-active" style="color:white" id="showUserList" @click="showUserLists">User List</a></li>
                
                <li><a style="color:white" id="showExerciseList" @click="showExerciseLists">Exercise Types</a></li>
            </ul>
            
        </aside>
        </div>
        <div class="column">
        <UserList v-if="checkerUser"></UserList>
        <ExerciseList v-if="checkerExercise"></ExerciseList>
        </div>
        
    </div>
</template>

<script>

import UserList from '../components/UserList.vue'
import ExerciseList from '../components/ExerciseList.vue'
export default {
    name: 'Admin',
    components: {
        UserList,
        ExerciseList
    },
    data() {
        return {
            checkerUser: true,
            checkerExercise: false
        }
    },
    methods: {
        showUserLists() {
            document.getElementById("showUserList").classList.toggle('is-active');
            this.checkerUser = document.getElementById("showUserList").classList.contains('is-active');
            if(this.checkerUser == true) {
                this.checkerExercise = false
                if(document.getElementById("showExerciseList").classList.contains('is-active')) {
                    document.getElementById("showExerciseList").classList.toggle('is-active');
                }
                
            }
        },
        showExerciseLists() {
            document.getElementById("showExerciseList").classList.toggle('is-active');
            this.checkerExercise = document.getElementById("showExerciseList").classList.contains('is-active');
            if(this.checkerExercise == true) {
                this.checkerUser = false
                if(document.getElementById("showUserList").classList.contains('is-active')) {
                    document.getElementById("showUserList").classList.toggle('is-active');
                }
            }

        }
    }
    
}
</script>

<style scoped>

</style>