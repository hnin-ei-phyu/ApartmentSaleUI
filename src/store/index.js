import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new*/

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
    mqttclient: null
  },
  mutations: {
    setUser: function (state, user) {
      state.user = user
      console.log(user)
    },
    setToken: function (state, token) {
      state.token = token
      console.log(token)
    },
    setMqttClient: function (state, client) {
      state.mqttclient = client
    }
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
export  default store