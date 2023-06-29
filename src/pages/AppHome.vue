<script>
import MainComp from '../components/MainComp.vue';
import {store} from '../store';
import axios from 'axios';


export default{
  name: "App",
  components:{
    MainComp,
    
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
    getPosts(currentPage){
      axios.get('http://127.0.0.1:8000/api/posts',{
        params:{
          page: this.store.currentPage
        }
      })
      .then(res => {
          this.store.post = res.data.posts.data;
          this.store.currentPage = res.data.posts.current_page;
          this.store.lastPage = res.data.posts.last_page;
        }) 
    },
    prev() {
      this.store.currentPage = this.store.currentPage - 1;
      if (this.store.currentPage == 0) {

        return this.store.currentPage = this.store.lastPage;
      }
    },
    next() {
      this.store.currentPage = this.store.currentPage + 1;
      if (this.store.currentPage == this.store.lastPage + 1) {

        return this.store.currentPage = 1;
      }
    }
  }
}
</script>

<template>
  <MainComp/>
  <div class="container">
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" @click.prevent="prev(), getPosts()" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" @click.prevent="next(), getPosts()"  href="#">Next</a></li>
    </ul>
  </nav>
  </div>
</template>

<style lang="scss" scoped>

</style>