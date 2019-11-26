import Vue from "vue";
import VueRouter from "vue-router";

// 正常加载
import Home from "../views/Home.vue";

// 按需（懒）加载（vue实现）
// const Home = () => import( /* webpackChunkName: "home" */ '../views/home')

// 按需（懒）加载（webpack动态导入）
// require.ensure() 是 webpack 特有的，已经被 import() 取代。
// 大家理解其作用即可，参考issues —— https://github.com/wangyupo/vue-vuex-router/issues/1
// const Home = r => require.ensure([], () => r(require('../views/home')), 'home')

Vue.use(VueRouter);

// 相同路由 不跳转
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
const routes = [
    {
        path: "",
        redirect: "home"
    },
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
            icon: "",
            title: "home",
            keepAlive: false,
            requiresAuth: false
        }
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: {
            icon: "",
            title: "about",
            keepAlive: false
        }
    },
    {
        path: "/work",
        name: "work",
        component: () =>
            import(/* webpackChunkName: "works" */ "../views/Work.vue"),
        meta: {
            icon: "",
            title: "work",
            keepAlive: false
        }
    },
    {
        path: "/archives",
        name: "archives",
        component: () =>
            import(/* webpackChunkName: "file" */ "../views/Archives.vue"),
        meta: {
            icon: "",
            title: "archives",
            keepAlive: false
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});

// 登陆页面路由 name
// const LOGIN_PAGE_NAME = "login";


// 跳转之前
router.beforeEach((to, from, next) => {
    // console.log("router拦截");
    // const token = "xyy";
    // // const token = getToken()
    // if (!token && to.name !== LOGIN_PAGE_NAME) {
    //     // 未登录且要跳转的页面不是登录页
    //     next({
    //         name: LOGIN_PAGE_NAME // 跳转到登录页
    //     });
    // } else if (!token && to.name === LOGIN_PAGE_NAME) {
    //     // 未登陆且要跳转的页面是登录页
    //     next(); // 跳转
    // } else if (token && to.name === LOGIN_PAGE_NAME) {
    //     // 已登录且要跳转的页面是登录页
    //     next({
    //         name: "index" // 跳转到 index 页
    //     });
    // } else {
    //     if (token) {
    //         next(); // 跳转
    //     } else {
    //         next({
    //             name: LOGIN_PAGE_NAME
    //         });
    //     }
    // }
    next(); // 跳转
});

// 跳转之后
// router.afterEach(to => {
//     //
// })

export default router;
