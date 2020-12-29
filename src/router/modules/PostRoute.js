import store from "@/store/store";
import {HIDE_GLOBAL_SPINNER, SHOW_GLOBAL_SPINNER} from "@/store/mutation-types";

const postRoute = [
  {
    path: 'posts',
    name: 'PostHome',
    component: () => import('@/views/post/PostHome.vue'),
    beforeEnter(to, from, next) {
      store.commit(SHOW_GLOBAL_SPINNER)
      if (from.name) {
        store.dispatch('posts/fetchPost')
          .then(() => {
            store.commit(HIDE_GLOBAL_SPINNER)
            next()
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        next()
        store.dispatch('posts/fetchPost')
          .then(() => {
            store.commit(HIDE_GLOBAL_SPINNER)
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  },
]

export default postRoute
