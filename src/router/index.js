import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Baojia from "@/components/Baojia"
import Upload from "@/components/Upload"
import Lian from "@/components/Lian"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Baojia',
      name: 'Baojia',
      component: Baojia
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/lian',
      name: 'Lian',
      component: Lian
    }
  ]
})
