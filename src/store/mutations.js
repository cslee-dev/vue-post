import * as types from "@/store/mutation-types";

const mutations = {
  [types.UPDATE_MESSAGE](state, payload) {
    state.message = payload.message;
  },
  [types.SET_MOVIES](state, payload) {
    state.movies = payload
  },
  [types.SHOW_GLOBAL_SPINNER](state, payload) {
    state.globalSpinner = true
  },
  [types.HIDE_GLOBAL_SPINNER](state, payload) {
    state.globalSpinner = false
  }
}

export default mutations
