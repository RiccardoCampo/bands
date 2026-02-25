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
import EditIcon from './components/icons/EditIcon.vue';
import { debounce } from './utils';
import SlidersIcon from './components/icons/SlidersIcon.vue';

const app = createApp(App)

app.directive('click-outside', {
    beforeMount: function (element, binding) {
        element.clickOutsideEvent = function (event: any) {
            const rect = element.getBoundingClientRect()
            const isInside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom
            if (element !== event.target && !isInside) {
                binding.value(event);
            }
        };
        // Do not add the listener right away, this allow opening the element with a click outside the element itself.
        debounce(
            () => {
                document.body.addEventListener('mousedown', element.clickOutsideEvent)
            },
            300
        )()
        
    },
    unmounted: function (element) {
        document.body.removeEventListener('mousedown', element.clickOutsideEvent)
    }
});

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
app.component('edit-icon', EditIcon)
app.component('sliders-icon', SlidersIcon)

app.mount('#app')
