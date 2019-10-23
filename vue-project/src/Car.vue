<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverstName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="chengeName">chenge Name</button>
    <button @click="changeFunc()">chenge from parent</button>
    <button @click="updateCounterc">Update countert</button>
  </div>
</template>


<script>
  import {eventEmitter} from "./main";

  export default {
      props: {
          carName: {
              type: String,
              request: true,
              default: 'Default Name'
          },
          carYear: Number,
          changeFunc: Function
      },
      methods: {
          chengeName() {
              this.carName = 'Mazda'
              this.$emit('nameChenged', this.carName)
          },
          updateCounterc() {
              // this.$emit('counterChenged', this.counter + 1)
              eventEmitter.$emit('counterUpdated', 3)
          }
      },
      computed: {
          reverstName() {
              return this.carName.split('').reverse().join('')
          }
      }
  }

</script>
Number
<style>
  .car{
    border: 1px solid#000;
  }
  h3{
    margin-bottom: 5px;
  }
</style>
