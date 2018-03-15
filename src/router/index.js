// eslint-disable-next-line
/*eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Header = resolve => require(['@/components/myHeader.vue'], resolve)
const MyFirst=resolve=> require(['@/components/myFirst.vue'],resolve)
const Footer = resolve => require(['@/components/myFooter.vue'], resolve)
const myMain = resolve => require(['@/components/myMain.vue'], resolve)
const First = resolve => require(['@/components/first.vue'], resolve)
const Second = resolve => require(['@/components/second.vue'], resolve)
const Three = resolve => require(['@/components/three.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mymain',
      component: myMain
    },
    {
      path: '/footer',
      name: 'myfooter',
      component: Footer
    },
    {
      path: '/header',
      name: 'myheader',
      component: Header
    },
    {
      path: '/main',
      name: 'mymain',
      component: myMain,
      children:[
        {path:"",name:'first',component:First},
        {path:"/first",name:'first',component:First},
        {path:"/second",name:'second',component:Second},
        {path:"/three",name:'three',component:Three},
      ]
    },
    {
      path: '*',
      name: 'myFirst',
      component: MyFirst
    }
  ]
})
