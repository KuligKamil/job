import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

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