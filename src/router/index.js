import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function load(componentPath){
  return import(`@/views/${componentPath}`)
}

export default new Router({
  mode : 'history',
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
      children:[
        {
          path : '/',
          name : 'Home',
          component: () => load('Home.vue'),
        }
      ]
    }
  ]
})
