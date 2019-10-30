<template>
  <div>
    <h2>Form inputs</h2>

    <app-onoff v-model="switched"></app-onoff>

    <div>
      <h3 v-if="switched">Component is enable</h3>
      <h3 v-else>Component is disable</h3>
    </div>

  </div>
</template>

<script>
  import Onoff from './Onoff.vue'

    export default {
        data () {
            return {
                switched: false
            }
        },
        components: {
            appOnoff: Onoff
        }
    }
</script>




<style scoped>

</style>

