import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'
import AuthView from '@/views/AuthView'
import UserLogin from "../pages/Auth/UserLogin"
import UserRegister from "../pages/Auth/UserRegister"
import SellerLogin from "../pages/Auth/SellerLogin"
import SellerRegister from "../pages/Auth/SellerRegister"
import Home from "../pages/Home/Home"
import UserHome from "../pages/Home/UserHome"
import Detail from "../pages/Home/Detail"
import SellerHome from "../pages/Home/SellerHome"


Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name: "Admin Auth",
    component: AuthView,
    redirect: "/home",
    children: [
      {
        path : "/buyer-login",
        name : "User Login",
        component : UserLogin,
        
      },
      {
        path : "/buyer-register",
        name : "Buyer Regisger",
        component : UserRegister,

      },
      {
        path: "/seller-login",
        name: "Seller Login",
        component : SellerLogin,
      },
      {
        path : "/seller-register",
        name : "Seller Register",
        component : SellerRegister,
      },
    ],
  },
  {
    path: '/',
    name: 'Main',
    component: MainView,
    redirect: '/home',
    children: [
      {
        path : "/home",
        name : "Home",
        component : Home,
      },
      {
        path : "/detail",
        name : "detail",
        component : Detail,
      },
      {
        path: "/user-home",
        name: "UserHome",
        component: UserHome
      },
      {
        path: "/seller-home",
        name: "SellerHome",
        component: SellerHome,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
