import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import LogIn from "@/views/LogIn.vue";
import SignIn from "@/views/SignIn.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Alumno',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Materias',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
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

export default router
