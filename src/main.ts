import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: '#F0FAFB',
    background: "#effafa",
    // surface: '#FFFFFF',
    // primary: '#64B9BC',
    // 'primary-darken-1': '#3700B3',
    // secondary: '#03DAC6',
    // 'secondary-darken-1': '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

createApp(App).use(createPinia()).use(vuetify).mount("#app");
