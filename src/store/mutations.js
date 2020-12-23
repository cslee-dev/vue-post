import * as types from "@/store/mutation-types";

const mutations = {
  [types.UPDATE_MESSAGE](state, payload){
    state.message = payload.message;
  },
  [types.SET_MOVIES](state, payload){
    state.movies = payload
  },
}

export default mutations
