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
    <div id="card" class="my-2 text-center">
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
  #card{
    width: calc(90% / 2);
    //height: 50%;
    border: 2px solid black;
    img{
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    li{
      list-style: none;
    }
  }
</style>