<template>
  <div class="home">
    <h1>Kontakte</h1>

    <div class="contact-list" v-if="contacts.length > 0">
      <h2>Total: {{ meta.pagination.total }}</h2>
      <div class="contact-item" v-for="contact in contacts" :key="contact.id">
        <div class="contact-item-name">
          {{ contact.attributes.firstname }} {{ contact.attributes.lastname }}
        </div>
        <div class="contact-item-phone">
          {{ contact.attributes.phone }}
        </div>
        <div class="contact-item-email">
          {{ contact.attributes.email }}
        </div>
      </div>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="contacts.length > 0">
      Seite {{ meta.pagination.page }} / {{ meta.pagination.pageCount }}
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      contacts: [],
      meta: null,
      error: null,
    };
  },
  mounted() {
    axios.get("http://localhost:1337/api/contacts").then((response) => {
      console.log(response);
      this.contacts = response.data.data;
      this.meta = response.data.meta;
    }).catch((error) => {
      this.error = error;
    });
  },
};
</script>

<style>
.contact-item {
  margin-bottom: 1rem;
}

.error {
  background: #9a1e08;
  color: #ffffff;

  padding: 0.5rem 1rem;
}
</style>
