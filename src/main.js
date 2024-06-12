import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)
axios.interceptors.request.use((config) => {
    const auth = JSON.parse(localStorage.getItem("data"));
    if(auth){
        config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
})

app.use(router)

app.mount('#app')
