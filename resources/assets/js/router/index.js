import Vue from 'vue'
import Router from  'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

const constantRouterMap=[
    {
        path:'/',
        component:Layout,
        name:'Dashboard'
    }
]

const router = new Router({
    routes:constantRouterMap
})

export default router