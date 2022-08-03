import Vue from 'vue'
import VueRouter from 'vue-router'
// import KakPokupka from '../views/KakPokupka.vue'
// import ResprodajaTovar from '..'
// import Senna from '../views/SennaView.vue'
// import Pomosh from '../views/PomoshVie.vue'
// import Bonus from '../views/BonusVie.vue'
// import Blog from '../views/BlogVie.vue'
// import Yshyo from '../views/YshyoVie.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:()=>import(`@/views/KakPokupka.vue`)
  },
  {
    path: '/rasprodaja',
    name: 'rasprodaja',
    component:()=>import(`@/views/RasprodajaTovar.vue`)
  },
  {
    path:'/senna',
    name:'name',
    component:()=>import(`@/views/SennaView.vue`)
  },
  {
    path:'/pomosh',
    name:'pomosh',
    component:()=>import(`@/views/PomoshVie.vue`)
  },
  {
    path:'/bonus',
    name:'bonus',
    component:()=>import(`@/views/BonusVie.vue`)
  },
  {
    path:'/blog',
    name:'blog',
    component:()=>import(`@/views/BlogVie.vue`)
  },
   {
    path:'/yshyo',
    name:'yshyo',
    component:()=>import (`@/views/YshyoVie.vue`)
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
