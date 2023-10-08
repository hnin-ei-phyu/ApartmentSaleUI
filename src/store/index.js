import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
    mqttclient: null
  },
  mutations: {
    setUser: function (state, user) {
      state.user = user
    },
    setToken: function (state, token) {
      state.token = token
    }
  },
  modules: {
  }
})
export  default store