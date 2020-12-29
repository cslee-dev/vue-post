import * as types from "@/store/modules/mutation-types";

const mutations = {
  [types.SET_POSTS](state, payload) {
    // mutations의 state는 로컬 범위를 갖는 state.
    state.posts = payload.posts
  },
  [types.CREATE_POST](state, post){
    let lastPost = state.posts[state.posts.length-1]
    post.id = lastPost.id + 1;
    state.posts.push(post)
  }
}

export default mutations
