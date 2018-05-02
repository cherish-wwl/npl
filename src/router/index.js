import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/register',name:'register', component: () => import('@/views/register/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index')
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
      // {
      //   path: 'tree',
      //   name: 'Tree',
      //   component: () => import('@/views/tree/index'),
      //   meta: { title: 'Tree', icon: 'tree' }
      // }
  //   ]
  // },

  {
    path: '/services',
    component: Layout,
    redirect: '/services/list',
    children: [
      {
        path: 'list/:randomValue',
        // path:'index',
        name: 'serviceLists',
        component: () => import('@/views/serviceLists/index'),
        meta: { title: 'serviceLists' }
      },
      {
        path:'serviceDetail/:service_id/:type',
        name: 'serviceDetail',
        component: () => import('@/views/serviceDetail/index'),
        meta: { title: 'serviceDetail' }
      }
    ]
  },
  {
    path: '/dataSet',
    component: Layout,
    redirect: '/dataSet/index',
    children: [
      {
        path: 'index',
        // path:'index',
        name: 'dataset',
        component: () => import('@/views/dataset/index'),
        meta: { title: '数据集' }
      }
    ]
  },
  {
    path:"/solution",
    component:Layout,
    // redirct:'/solution/template',
    children:[
      {
        path:"xiaoniu/:id",
        name:"xiaoniu",
        component:() =>import('@/views/solution/xiaoniu/index'),
        meta: { title: '模板' }
      }
    ]
  },
  {
    path:"/innovation",
    name:'innovation',
    component:() =>import('@/views/innovation/index'),
    
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

