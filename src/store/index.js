import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new*/
const store = new Vuex.Store({
  state: {
<<<<<<< HEAD
    user: null,
=======
    currentUser : null,
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
    token: null,
    mqttclient: null
  },
  mutations: {
<<<<<<< HEAD
    setUser: function (state, user) {
      state.user = user
    },
    setToken: function (state, token) {
      state.token = token
    }
  },
=======
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
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
  modules: {
  }
})
export  default store