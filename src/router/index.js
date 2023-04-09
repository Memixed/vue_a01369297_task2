import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import LogIn from "@/views/LogIn.vue";
import SignIn from "@/views/SignIn.vue";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
Vue.use(VueRouter)

const routes = [
  {
    path: '/Alumno',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/Materias',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/',
    name: 'login',
    component: LogIn,
  },
  {
    path: '/NewUsr',
    name: 'Joining',
    component: SignIn,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser){
      next();
    }
    else{
      alert("Necesitas iniciar sesión para entrar");
      router.push("/");
    }
  }
  else{
    next();
  }
})
export default router
