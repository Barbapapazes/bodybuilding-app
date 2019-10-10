import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'
import { Touch } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  directives: {
    Touch
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken4,
        secondary: colors.deepPurple.darken3,
        accent: colors.deepPurple.base,
        error: colors.red.base,
        warning: colors.amber.base,
        info: colors.cyan.base,
        success: colors.green.base,
        background: '#ffffff',
        text: '#000000'
      },
      dark: {
        primary: colors.blue.darken3,
        secondary: colors.purple,
        accent: colors.deepPurple.base,
        error: colors.red.base,
        warning: colors.amber.base,
        info: colors.cyan.base,
        success: colors.green.base,
        background: '#000000',
        text: '#ffffff'
      }
    }
  }
})
