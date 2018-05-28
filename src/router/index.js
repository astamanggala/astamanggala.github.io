import Vue from 'vue'
import Router from 'vue-router'
import FamilyTree from '@/components/FamilyTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FamilyTree',
      component: FamilyTree
    }
  ]
})
