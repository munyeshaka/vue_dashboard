import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import axios from 'axios'


// document.addEventListener('DOMContentLoaded', () => {
//     const csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');

//     if (csrfTokenInput) {
//         axios.defaults.headers.common['X-CSRFToken'] = csrfTokenInput.value;
//     }
// });



const app = createApp(App)

app.config.globalProperties.axios=axios //

app
.use(store)
.use(router)

.mount('#app') // ija musi yizindi zose
