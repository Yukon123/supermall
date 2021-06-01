import Vue from 'vue'
import Router from 'vue-router'

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}


const Home = () =>
    import('view/home/Home');
const Category = () =>
    import('view/category/Category');
const Shopcart = () =>
    import('view/shopcart/Shopcart');
const Profile = () =>
    import('view/profile/Profile');
const Detail = () =>
    import('view/detail/Detail');

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
{
    name: "detail",       // 给路由起名字   query 可以用name或者path 但是path里面不可以写动态参数
    // params只能用name属性或者 完整字符串
    // path: '/detail/:iid', //iid就是携带的参数  在push的时候加进去
    path: '/detail/:iid',
    component: Detail,
},

];
const router = new Router({
    routes,
    mode: 'history',

});

export default router;