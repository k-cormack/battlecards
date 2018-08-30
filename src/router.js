import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import BattleCards from './views/BattleCards.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'battleCards',
      component: BattleCards
    
    }
  ]
})
