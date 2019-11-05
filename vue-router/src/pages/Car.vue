<template>
  <div>
    <h1>car id {{ id }}</h1>
    <button class="btn btn-sm btn-default mb-2" @click="goBackToCars">Back Cars</button>
    <br>
<!--    <router-link-->
<!--      class="btn btn-sm btn-info mt-2"-->
<!--      tag="button"-->
<!--      :to="'/car/' + id + '/full/'"-->
<!--    >Full info</router-link>-->
    <router-link
      class="btn btn-sm btn-info mt-2"
      tag="button"
      :to="{
        name: 'carFull',
        params: {id: id},
        query: {name:'Mazda', year: 2000},
        hash: '#scroll'
        }"
    >Full info</router-link>

    <br><br><br>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      data () {
          return {
              // id: this.$router.currentRoute.params['id']
              id: this.$route.params['id']
          }
      },
        methods: {
            goBackToCars() {
                this.$router.push('/cars')
            }
        },
        watch: {
          $route (toR, fromR) {
              this.id = toR.params['id']
          }
        },
        beforeRouteLeave (to, from, next) {
          console.log('beforeRouteLeave')
          if ( window.confirm('Are you sure you want to leave?') ){
              next()
          }else{
              next(false)
          }
        }
    }
</script>

<style scoped>

</style>
