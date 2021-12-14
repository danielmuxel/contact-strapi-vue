<template>
  <div v-if="contact">
    <h1>{{ contact.attributes.firstname}} {{ contact.attributes.lastname }}</h1>
    <p>{{ contact }}</p>
  </div>
</template>

<script>
import ContactService from '../services/ContactService.js'

export default {
  data() {
    return {
      contact: null
    }
  },
  mounted() {
    this.getContact()
  },
  methods: {
    getContact() {
      ContactService.getContact(this.$route.params.id)
        .then(contact => {
          this.contact = contact.data.data
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>