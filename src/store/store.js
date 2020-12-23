import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

export default store
