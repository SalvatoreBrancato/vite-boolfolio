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
    this.getPosts();
    this.getTypes();
  },
  methods: {
    getPosts(){
      const params = {
        page: this.store.currentPage
      }
      if(this.store.selectType !=='all'){
        params.type_id = this.store.selectType
      }
      axios.get('http://127.0.0.1:8000/api/posts',{params})
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
    },
    getTypes(){
      axios.get(`http://127.0.0.1:8000/api/types`).then(res => {
        this.store.types = res.data.types
      })
    }
  }
}
</script>

<template>
  <div class="mb-3">
      <label for="category" class="form-label">Categorie</label>
      <select @change="getPosts()" v-model="this.store.selectType" class="form-select form-select-lg" name="" id="category">
          <option value="all">--Select All---</option>
          <option :value="elem.id" v-for="(elem, index) in this.store.types" :key="index">{{ elem.name }}
          </option>
      </select>
  </div>
  <MainComp/>
  <div class="container">
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" @click.prevent="prev(), getPosts()" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" @click.prevent="next(), getPosts()"  href="#">Next</a></li>
    </ul>
  </nav>
  </div>
</template>

<style lang="scss" scoped>

</style>