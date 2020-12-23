import { UPDATE_MESSAGE } from "@/store/mutation-types";

const mutations = {
  [UPDATE_MESSAGE](state, payload){
    state.message = payload.message;
  }
}

export default mutations
