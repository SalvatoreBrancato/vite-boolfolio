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
    <div>
        <img :src="`${store.url}${cardProps.path}`" alt="">
        <h5>{{ cardProps.title }}</h5>
        <div>{{ cardProps.description }}</div>
        <div v-if="cardProps.type">{{ cardProps.type.name }}</div>
        <ul class="card-text" v-if="cardProps.technologies">
          <li v-for="(element, index) in cardProps.technologies" :key="index">{{ element.name}}</li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>

</style>