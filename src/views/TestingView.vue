<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    data() {
        return {
               ticketId: "ed0f482b0a650932"
        };
    },

     mounted() {
          const route = useRoute();
          this.ticketId = route.params.ticketId;
          console.log(route.params.ticketId);
          console.log("BASE URL:" + import.meta.env.BASE_URL);
     }
}

</script>

<template>

Ticket ID: {{this.ticketId}}

</template>
