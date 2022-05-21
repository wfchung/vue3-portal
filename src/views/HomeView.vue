<script>

import { onMounted, ref } from 'vue'

export default {

    data() {
        return {
               BASE_URL: ""
        };
    },

     mounted() {
          console.log("BASE URL:" + import.meta.env.BASE_URL);
          this.BASE_URL = import.meta.env.BASE_URL;
     }
}

</script>


<template>
  <main>
       <h1>
     Base URL is:
     {{this.BASE_URL}}
     </h1>
  </main>
</template>
