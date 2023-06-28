<script>
import MainComp from './components/MainComp.vue';
import {store} from './store'



export default{
  name: "App",
  components:{
    MainComp
},
data(){
  return{
    store
  }
}
}
</script>

<template>
  <MainComp/>
</template>

<style lang="scss">
@use "./style/main.scss";
</style>
