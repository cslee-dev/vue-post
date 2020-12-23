const getters = {
  doubleMessage(state){
    return state.message + " " + state.message;
  }
}

export default getters
