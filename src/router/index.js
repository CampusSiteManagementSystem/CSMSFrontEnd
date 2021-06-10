import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

{
    path: '/',
    name: 'Home',
    component: () =>
        import ('../page/SystemHomePage.vue')
}, 

{
    path: '/groupverifylist',
    name: 'Home',
    component: () =>
        import ('../page/GroupVerifyList.vue')
}, 

{
    path: '/groupverify',
    name: 'Home',
    component: () =>
        import ('../page/GroupVerify.vue')
}, 

{
    path: '/accountmodifylist',
    name: 'Home',
    component: () =>
        import ('../page/AccountModifyList.vue')
}, 

{
    path: '/accountmodify',
    name: 'Home',
    component: () =>
        import ('../page/AccountModify.vue')
}, 

{
    path: '/testl',
    name: 'Home',
    component: () =>
        import ('../page/testGroupVerifyList.vue')
}, 

{
    path: '/testv',
    name: 'Home',
    component: () =>
        import ('../page/testGroupVerify.vue')
}, 


{
    path: '/testml',
    name: 'Home',
    component: () =>
        import ('../page/testAccountModifyList.vue')
}, 


{
    path: '/testm',
    name: 'Home',
    component: () =>
        import ('../page/testAccountModify.vue')
}, 

{
    path: '/test',
    name: 'Home',
    component: () =>
        import ('../page/test.vue')
}, 


]





const router = new VueRouter({
    routes
})

export default router