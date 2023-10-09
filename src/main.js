import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/lib/util/colors'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  colors,
  render: h => h(App)
}).$mount('#app')
