<script>

import {store} from '../store';

export default{
  name: "CardComp",
  props:[
    'cardProps'
  ],
  components:{
    
  },
  data(){
      return{
        store,
      }
    }
}
</script>

<template>
    <div class="card" >
        <h5>{{ cardProps.title }}</h5>
    </div>
</template>

<style lang="scss" scoped>

</style>