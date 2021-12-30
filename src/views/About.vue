<template>
  <div class="about">
    <h1>Hi {{ firstName }}</h1>
  </div>
</template>

<script>
import AboutService from '../services/AboutService.js'

export default {
  name: "About",
  data(){
    return {
      firstName: ""
    }
  },
  created() {
    AboutService.getAbout('name')
    .then(response => {
      console.log(response)
      this.firstName = response.data.FirstName
    })
  }
};
</script>