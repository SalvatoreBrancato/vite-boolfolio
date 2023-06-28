<script>
import MainComp from './components/MainComp.vue';
import {store} from './store';
import axios from 'axios';


export default{
  name: "App",
  components:{
    MainComp
},
data(){
    return{
      store,
     
    }
  },
  mounted(){
    this.getPosts()
  },
  methods: {
    getPosts(){
      axios.get('http://127.0.0.1:8000/api/posts')
    .then(res => {
        this.store.post = res.data.posts;
      }) 
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
