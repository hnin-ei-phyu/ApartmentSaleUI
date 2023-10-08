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
import Detail from "../pages/Home/Card/CardDetail"
import SellerHome from "../pages/Home/SellerHome"
<<<<<<< HEAD
// import store from "../store/index"
// import Auth from '../api/auth'
=======
import AddCard from "../pages/Home/Card/AddCard"
>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903


Vue.use(VueRouter)

const routes = [

      {
        path: "/",
        name: "Admin Auth",
        component: AuthView,
        redirect: "/home",
        children: [
          {
            path: "/home",
            name: "Home",
            component: Home,
            
          },
        ],
      },
      {
<<<<<<< HEAD
        path: '/main',
        name: 'Main',
        component : MainView,
        redirect: '/home',
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
];
=======
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
        path : "/addCard",
        name : "addCard",
        component : AddCard
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

>>>>>>> 789cb8b72d86021cdc1a918fffa42b376e941903
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach(async (to,from,next) => {
//   if(to.name !== "Login") {
//     let authenticated;
//     try {
//       authenticated = await isAuthenticated();

//     } catch (error) {
//       authenticated = false;
//     }

//     if(!authenticated) next ({name : "Login"});
//     else next();
    
//   }
//   else next();
// })

// const isAuthenticated = async function () {
//   //check there's current user 
//   let curentUser = store.state.user;
//   if(curentUser) {
//     return true;
//   }
//   else {
//     let token = localStorage.getItem("token");
//     console.log(token) 
//     store.commit("setToken",token)

//     let auth = new Auth();
//     let result = await auth.isAuth(token);
//     store.commit("setUser", result.data)
//   }
//};
export default router
