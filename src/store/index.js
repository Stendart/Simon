import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roundDelay: 1000,
  },
  mutations: {
    setDelay(state, payload) {
      state.roundDelay = payload
    }
  },
  actions: {
  },
  getters: {
    getDelay(state) {
      return state.roundDelay
    }
  },
  modules: {
  }
})
