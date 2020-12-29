import * as types from "@/store/modules/mutation-types.js";


const posts = [
  {id: 0, title: "2월의 반갑습니다.", 'author': "군고구마", 'created_at': '2019-02-03'},
  {id: 1, title: "4월의 반갑습니다.", 'author': "군고구마", 'created_at': '2019-04-03'},
  {id: 2, title: "6월의 반갑습니다.", 'author': "군고구마", 'created_at': '2019-06-03'},
]
const actions = {
  fetchPost(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit({
          type: types.SET_POSTS,
          posts,
        })
        resolve()
      }, 1000)
    })
  },
  createPost(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(types.CREATE_POST, payload)
        resolve()
      }, 1000)
    })
  }
}

export default actions
