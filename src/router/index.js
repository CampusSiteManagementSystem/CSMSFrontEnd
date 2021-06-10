import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        // import ('../components/personinfocard')
         import ('../page/8grandsman-homepage')
},
{
    path: '/groundinfo',
    name: 'Groundinfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        // import ('../components/personinfocard')
         import ('../page/27groundsman-groundinfo')
}, 
{
    path: '/groundannouncement',
    name: 'Groundannouncement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        // import ('../components/personinfocard')
         import ('../page/30grandsman-groundannouncement')
},
{
    path: '/creditscoring',
    name: 'Creditscoring',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        // import ('../components/personinfocard')
         import ('../page/28grandsman-creditscoring')
},
// {
//     path: '/creditdetail',
//     name: 'Creditscoring',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//         // import ('../components/personinfocard')
//          import ('../page/29groundsman-creditdetail')
// },
{
    path: '/activitylist',
    name: 'Activitylist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        // import ('../components/personinfocard')
         import ('../page/28or29groundsman-activitylist')
},
// {
//     path: '/test',
//     name: 'Home',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//         // import ('../components/personinfocard')
//          import ('../page/testpage3')
// },



//罗
{
    path: '/SystemAdmin/PublishSystemAnnouncement',
    name: 'Publish',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../page/Publish.vue')
  },
  {
    path: '/Groundsman/ActivityList',
    name: 'ActivityList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../page/ActivityList.vue')
  },
  {
    path: '/Groundsman/GroundList',
    name: 'GroundList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../page/GroundList.vue')
  },
  {
    path: '/Groundsman/ActivityInfo',
    name: 'ActivityInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../page/ActivityInfo.vue')
  }

]

const router = new VueRouter({
    routes
})

export default router