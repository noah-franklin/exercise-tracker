<template>
  <div>
    <input
      class="input"
      type="text"
      v-model="message"
      v-on:input="searchLog"
      placeholder="Search for Exercise by note"
    />
    <select
      id="autocomplete"
      v-bind:size="response.data.length || 1"
      autofocus="true"
      v-model="message"
    >
      <option v-for="note in response.data" :key="note.id"
        >{{ note.Note }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      message: null,
      response: { data: " " },
      yolo: 5,
    };
  },
  methods: {
    async searchLog() {
      if (!(this.message === null || this.message.match(/^ *$/) !== null)) {
        this.response = await axios.post(
          process.env.VUE_APP_APIURL + "/workout",
          { message: this.message },
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
      }
      console.log(this.response.data);
    },
  },
};
</script>
<style scoped>
#autocomplete {
  display: flex;
}
</style>
