import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { createPinia } from "pinia";
import { createApp } from 'vue';
// import './style.css';
import App from "./App.vue";


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
});

createApp(App).use(createPinia()).use(vuetify).mount('#app')