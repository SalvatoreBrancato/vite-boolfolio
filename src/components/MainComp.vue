<script>

import CardComp from './CardComp.vue';
import {store} from '../store';
export default{
  name: "MainComp",
  components:{
    CardComp
  },
  data(){
      return{
        store,
      }
    }
}
</script>

<template>
    <h1 class="animate__animated animate__bounce text-primary text-center">Portfolio</h1>
    <div id="container" class="d-flex justify-content-around flex-wrap">
      <CardComp v-for="(elem,index) in store.post" :key="index" :cardProps="elem"/>
    </div>
</template>

<style lang="scss" scoped>
  #container{
    height: 75vh;
  }
</style>