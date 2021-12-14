<template>
  <main>
    <form @submit.prevent="createContact">
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
      <div>
        <label for="firstname">firstname</label>
        <input type="text" id="firstname" v-model="firstname" />
      </div>
      <div>
        <label for="lastname">lastname</label>
        <input type="text" id="lastname" v-model="lastname" />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  </main>
</template>

<script>
import ContactService from "../services/ContactService.js";

export default {
  data() {
    return {
      contact: {
        firstname: "",
        lastname: "",
      },
      error: null,
    };
  },
  methods: {
    createContact() {
      ContactService.postContact(this.contact).then(() => {
        this.$router.push("/");
      }).catch((error) => {
        this.error = error;
      });
    },
  },
};
</script>

<style scoped>
.error {
  background-color: #b11111;
  color: #fff;
  padding: 1em;
}
</style>