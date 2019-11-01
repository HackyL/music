import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Singer from '@/components/singer/singer'
import Recommend from '@/components/recommend/recommend'
import SingerDetail from '@/components/singer/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
