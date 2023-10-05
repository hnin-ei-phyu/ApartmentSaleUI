import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new*/
const store = new Vuex.Store({
  state: {
    currentUser : null,
    token: null,
    mqttclient: null
  },
  mutations: {
    setCurrentUser : function (state, user) {
      state.currentUser = user
    },
    SetToken: function (state, token) {
      state.token = token
    },
    setMqttClient: function (state, token) {
      state.mqttclient = client
    }
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
export  default store