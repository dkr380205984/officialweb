import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false
  },
  mutations: {
    getMobileState (state, flag) {
      state.isMobile = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
