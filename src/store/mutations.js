import { UPDATE_MESSAGE, SET_MOVIES } from "@/store/mutation-types";

const mutations = {
  [UPDATE_MESSAGE](state, payload){
    state.message = payload.message;
  },
  [SET_MOVIES](state, payload){
    state.movies = payload
  },
}

export default mutations
