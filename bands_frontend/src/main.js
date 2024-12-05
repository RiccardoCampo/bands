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
import ChevronUp from './components/icons/ChevronUp.vue';
import ChevronDown from './components/icons/ChevronDown.vue';
import PlusIcon from './components/icons/PlusIcon.vue';

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
app.component('chevron-up', ChevronUp)
app.component('chevron-down', ChevronDown)
app.component('plus-icon', PlusIcon)

app.mount('#app')
