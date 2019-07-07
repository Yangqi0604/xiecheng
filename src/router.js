import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [{
    path: '/',
    name: 'index',
    component: () => import("./pages/index.vue")
  },
  {
    path: '/ctrip',
    name: 'ctrip',
    component: () => import("./pages/ctrip.vue")
  },
  {
    path: '/index',
    name: 'index',
    component: () => import("./pages/index.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("./pages/login.vue")
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("./pages/admin.vue")
  },
  {
    path: '/senic',
    name: 'senic',
    component: () => import("./pages/senic.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("./pages/cartInfo.vue")
  },
  ]
})
//路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.login ? true : false;
//   if (to.path == "/login") {
//     next();
//   } else {
//     //是否登录状态下
//     isLogin ? next() : next("/login");
//   }
// });

// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
//   // // to: Route: 即将要进入的目标 路由对象
//   // // from: Route: 当前导航正要离开的路由
//   // // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//   const nextRoute = ['index', 'ctrip', 'admin', 'senic'];
//   let isLogin = global.isLogin; // 是否登录
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) {
//     if (!isLogin) {
//       console.log('what fuck');
//       router.push({
//         name: 'login'
//       })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   if (to.name === 'login') {
//     if (isLogin) {
//       router.push({
//         name: 'index'
//       });
//     }
//   }
//   next();
// });
export default router;