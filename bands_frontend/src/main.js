import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import '../assets/css/main.css';
import SearchIcon from './components/icons/SearchIcon.vue';
import StarIcon from './components/icons/StarIcon.vue';
import StarFilledIcon from './components/icons/StarFilledIcon.vue';
import CheckIcon from './components/icons/CheckIcon.vue';
import CrossIcon from './components/icons/CrossIcon.vue';
import ExternalLink from './components/icons/ExternalLink.vue';
import LoadingIcon from './components/icons/LoadingIcon.vue';

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.component('search-icon', SearchIcon)
app.component('star-icon', StarIcon)
app.component('star-filled-icon', StarFilledIcon)
app.component('check-icon', CheckIcon)
app.component('cross-icon', CrossIcon)
app.component('external-link', ExternalLink)
app.component('loading-icon', LoadingIcon)

app.mount('#app')
