import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Main from "@/components/main/main";
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/home'},
  {path: '/home',component:Home,
  redirect: '/home/main',children:[
      {path:'main',component:Main}
    ]}


]

const router = new VueRouter({
  routes
})

export default router
