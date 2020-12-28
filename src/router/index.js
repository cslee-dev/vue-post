import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import {HIDE_GLOBAL_SPINNER, SHOW_GLOBAL_SPINNER} from "@/store/mutation-types"
import postRoute from '@/router/modules/PostRoute'

Vue.use(Router)

function load(componentPath) {
  return import(`@/views/${componentPath}`)
}

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      return {selector: to.hash}; // 앵커 태그 이동 지원
    } else {
      return {x: 0, y: 0}; // 페이지 이동시 화면 위치 맨위로.
    }
  },
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => load('Main.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => load('Home.vue'),
        },
        {
          path: 'state',
          name: 'State',
          component: () => load('exam/StateExam.vue')
        },
        {
          path: 'getter',
          name: 'Getter',
          component: () => load('exam/GetterExam.vue')
        },
        {
          path: 'mutation',
          name: 'Mutation',
          component: () => load('exam/MutationExam.vue')
        },
        {
          path: 'action',
          name: 'Action',
          component: () => load('exam/ActionExam.vue'),
          beforeEnter(to, from, next) {
            if(from.name){
              store.commit(SHOW_GLOBAL_SPINNER);
              store.dispatch('fetchMovies')
                .then(function () {
                  store.commit(HIDE_GLOBAL_SPINNER);
                  next()
                }).catch(err => console.log(err))
            }else{
              next()
              store.commit(SHOW_GLOBAL_SPINNER);
              store.dispatch('fetchMovies')
                .then(function () {
                  store.commit(HIDE_GLOBAL_SPINNER);
                }).catch(err => console.log(err))
            }

          },
        },
        ...postRoute
      ]
    }
  ]
})
