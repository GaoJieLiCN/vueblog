import Vue from 'vue'
import Router from 'vue-router'
import indexList from '@/page/indexList/index'
import details from '@/page/details/details'
import error from '@/page/error/404'
import yqh from '@/page/yqh/yqh'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [{
      path: '/',
      redirect: '/indexList' //页面重定向
    },
    {
      path: '/indexList',
      name: 'indexList',
      component: indexList
    },
    {
      path: '/indexList/details',
      name: 'indexList/details',
      component: details
    }, 
    {
      path: '*',
      name: 'error',
      component: error
    },
    {
      path: '/yqh',
      name: 'yqh',
      component: yqh
    },
  ],

  // 这个是操作vue 跳转后页面不是在最上面的问题
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },

})
