import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      SignedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_SIGNEDIN(state, value) {
      state.user.SignedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
    }
  },
  actions: {
    fetchUser({
      commit
    }, user) {
      commit("SET_SIGNEDIN", user !== null);
      if (user) {
        commit("SET_USER", {
          email: user.email
        })
      } else {
        commit("SET_USER", null)
      }
    }
  },
  modules: {}
})