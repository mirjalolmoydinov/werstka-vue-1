import Vue from 'vue'
import VueRouter from 'vue-router'
import KakPokupka from '../views/KakPokupka.vue'
import ResprodajaTovar from '../views/RasprodajaTovar.vue'
import Senna from '../views/SennaView.vue'
import Pomosh from '../views/PomoshVie.vue'
import Bonus from '../views/BonusVie.vue'
import Blog from '../views/BlogVie.vue'
import Yshyo from '../views/YshyoVie.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:KakPokupka
  },
  {
    path: '/rasprodaja',
    name: 'rasprodaja',
    component: ResprodajaTovar
  },
  {
    path:'/senna',
    name:'name',
    component:Senna
  },
  {
    path:'/pomosh',
    name:'pomosh',
    component:Pomosh
  },
  {
    path:'/bonus',
    name:'bonus',
    component:Bonus
  },
  {
    path:'/blog',
    name:'blog',
    component:Blog
  },
   {
    path:'/yshyo',
    name:'yshyo',
    component:Yshyo
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
