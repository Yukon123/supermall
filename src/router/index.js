import Vue from 'vue'
import Router from 'vue-router'

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}


const Home = () =>
    import ('view/home/Home');
const Category = () =>
    import ('view/category/Category');
const Shopcart = () =>
    import ('view/shopcart/Shopcart');
const Profile = () =>
    import ('view/profile/Profile');


Vue.use(Router)
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    }, {
        path: '/shopcart',
        component: Shopcart,
    },
    {
        path: '/profile',
        component: Profile,
    },

];
const router = new Router({
    routes,
    mode: 'history',

});

export default router;