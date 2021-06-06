import { createRouter, createWebHistory } from 'vue-router'
import Discover from '../views/discover/Discover.vue'
import Recommend from '../views/discover/recommend/recommend/Recommend.vue'
import Toplist from '../views/discover/toplist/toplist/TopList.vue'

const routes = [
  {
    path: '/',
    redirect: {name: 'discover'}
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
    redirect: {name: 'recommend'},
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        component: Recommend
      },
      {
        path: 'toplist',
        name: 'toplist',
        component: Toplist
      }
    ]
  },
  {
    path: '/mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mine/Mine.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
