import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { type ThemeDefinition, createVuetify } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: '#F0FAFB',
    background: '#effafa',
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
}

export const vuetify = createVuetify({
  theme: {
    themes: {
      myCustomLightTheme,
    },
  },
})
