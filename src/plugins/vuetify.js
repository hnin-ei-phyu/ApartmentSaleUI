import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

Vue.use(Vuetify)

function loadTheme() {
  let theme = localStorage.getItem("theme") || "light"
  return theme == "dark"
}

export default new Vuetify({
  theme: {
    dark: loadTheme(),
    themes: {
      light: {
 
      },
      dark: {

      },
    },
  },
})