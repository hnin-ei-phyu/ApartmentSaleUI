import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

function loadTheme() {
  let theme = localStorage.getItem("theme") || "dark";
  return theme == "dark";
}

export default new Vuetify({
  theme: {
    dark: loadTheme(),
    themes: {
      light: {
        dark: "#444",
        primary: "#17b78d",
        buttonBackground: "#08d19b",
        buttonTextColor: "#fff",
        cardBackground: "#f9f9f9",
        tableBackground: "#1B539D",
        alertColor: "#FF803E",
        normal: "#17b78d",
        low: "#1cd8d8",
        high: "#ff9e3d"
      },
      dark: {
        dark: "#ddd",
        primary: "#fff",
        buttonBackground: "#fff",
        buttonTextColor: "#fff",
        cardBackground: "#5A7EAE",
        tableBackground: "#5A7EAE",
        alertColor: "#FF803E",
        normal: "#efefef",
        low: "#1cd8d8",
        high: "#ff9e3d"
      },
    },
  },
});