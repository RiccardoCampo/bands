import { createApp } from 'vue'
import App from './App.vue'

import '../assets/css/main.css';
import SearchIcon from './components/icons/SearchIcon.vue';

const app = createApp(App)

app.component('search-icon', SearchIcon)

app.mount('#app')