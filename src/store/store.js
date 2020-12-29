import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import posts from '@/store/modules/store'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    posts
  }
})

export default store
