import {reactive} from 'vue';

export const store = reactive({
	post:[],
	currentPage: null,
	lastPage: null,
	url:'http://127.0.0.1:8000/storage/'
})