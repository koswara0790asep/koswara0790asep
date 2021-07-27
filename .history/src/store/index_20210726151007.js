import Vue from 'vue'
import Vuex from 'vuex'
import cart from '../store/cart'
import alert from '../store/alert'
import dialog from '../store/dialog'
import auth from '../store/auth'
import region from '../store/region'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBar: false,
    prevurl: '',
  },
  mutations: {
    setSideBar: (state, value) => {
      state.sideBar = value
    },
    setPrevUrl: (state, value) 
  },
  actions: {
    setSideBar: ({commit}, value) => {
      commit('setSideBar', value)
    },
  },
  getters: {
    sideBar: state => state.sideBar,
  },
  modules: {
    cart,
    alert,
    dialog,
    auth,
    region
  }
})
