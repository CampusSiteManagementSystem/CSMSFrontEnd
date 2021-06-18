import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () =>
    // import ('../components/personinfocard')
    import('../page/8grandsman-homepage')
},
{
  path: '/groundinfo',
  name: 'Groundinfo',
  component: () =>
    // import ('../components/personinfocard')
    import('../page/27groundsman-groundinfo')
},
{
  path: '/groundannouncement',
  name: 'Groundannouncement',
  component: () =>
    // import ('../components/personinfocard')
    import('../page/30grandsman-groundannouncement')
},
{
  path: '/creditscoring',
  name: 'Creditscoring',
  component: () =>
    // import ('../components/personinfocard')
    import('../page/28grandsman-creditscoring')
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
  component: () =>
    // import ('../components/personinfocard')
    import('../page/28or29groundsman-activitylist')
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
  component: () => import(/* webpackChunkName: "about" */ '../page/Publish.vue')
},
{
  path: '/Groundsman/ActivityList',
  name: 'ActivityList',
  component: () => import(/* webpackChunkName: "about" */ '../page/ActivityList.vue')
},
{
  path: '/Groundsman/GroundList',
  name: 'GroundList',
  component: () => import(/* webpackChunkName: "about" */ '../page/GroundList.vue')
},
{
  path: '/Groundsman/ActivityInfo',
  name: 'ActivityInfo',
  component: () => import(/* webpackChunkName: "about" */ '../page/ActivityInfo.vue')
},

{
  path: '/GroundsmanFrame',
  component: () =>
    // import ('../components/personinfocard')
    import('../page/GroundsmanFrame'),
  children: [{
    path: "Home",
    name: "Home",
    component: () =>
      import('../page/8GroundsmanHome.vue')
  },
  {
    path: "ScoringActivityList",
    name: "ScoringActivityList",
    component: () =>
      import('../page/28or29ScoringActivityList.vue'),
  },
  {
    path: "ScoringActivity/:ID",
    name: "ScoringActivity",
    component: () =>
      import('../page/28ScoringActivity'),
  },
  {
    path: "ReleaseGroundAnnouncement",
    name: "ReleaseGroundAnnouncement",
    component: () =>
      import('../page/30ReleaseGroundAnnouncement'),
  },
  {
    path: "test",
    name: "test",
    component: () =>
      import('../page/待议29groundsman-creditdetail'),
  }
  ]
},

]

const router = new VueRouter({
  routes
})

export default router