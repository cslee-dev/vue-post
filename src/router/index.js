import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function load(componentPath){
  return import(`@/views/${componentPath}`)
}

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => load('Main.vue')
    }
  ]
})
