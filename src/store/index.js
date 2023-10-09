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
<<<<<<< HEAD
    user: null,
=======
    currentUser : null,
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
>>>>>>> 1bb755469fce9cd0a4c642db51eafa97f4a470b9
    token: null,
    mqttclient: null
  },
  mutations: {
<<<<<<< HEAD
    setUser: function (state, user) {
      state.user = user
      console.log(user)
=======
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
>>>>>>> 1bb755469fce9cd0a4c642db51eafa97f4a470b9
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
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
  modules: {
  }
})
export  default store