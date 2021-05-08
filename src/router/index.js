import Vue from 'vue'
import Router from 'vue-router'
// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}


const home = () =>
    import ('view/home/home');
const category = () =>
    import ('view/category/category');
const shopcart = () =>
    import ('view/shopcart/shopcart');
const profile = () =>
    import ('view/profile/profile');


Vue.use(Router)
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
    },
    {
        path: '/category',
        component: category,
    }, {
        path: '/shopcart',
        component: shopcart,
    },
    {
        path: '/profile',
        component: profile,
    },

];
const router = new Router({
    routes,
    mode: 'history',

});
// // 解决重复点击路由报错的BUG
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch((err) => err)
// }



export default router;