import Vue from 'vue'
//1、引入路由包
import VueRouter from 'vue-router'
// import Home from '../pages/Home'

// const Home=()=>import(/* webpackChunkName: "groupname-home" */ "../pages/Home");

// import Attention from '../pages/Attention'
const Attention = ()=> import(/*webpackChunkName: "groupname-attention" */ "../pages/Attention")
import Column from '../pages/Column'
import Login from '../pages/Login'
import Mine from '../pages/Mine'
import Reg from '../pages/Reg'
import Details from '../pages/Details'

// 2.
Vue.use(VueRouter)

// 3.路由配置
let routes = [
    {path:'/',component:()=>import(/* webpackChunkName: "groupname-home" */ "../pages/Home")},
    {path:'/Attention',component:Attention},
    {path:'/Column',component:Column},
    {path:'/Login',component:Login},
    {path:'/Mine',component:Mine},
    {path:'/Reg',component:Reg},
    {path:'/Home',component:()=>import(/* webpackChunkName: "groupname-home" */ "../pages/Home")},
    {path:'/Details',component:Details}

]
let router = new VueRouter({
    routes,
});
export default router
