import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import we from '@/components/we'
import your from '@/components/your'
import gis from '@/components/gis'
import www from '@/components/www'
import yourson from '@/components/yourson'
import sss from '@/components/sss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },{
      path: '/we',
      name: 'we',
      component: we,
    },{
      path: '/your',
      name: 'your',
      component: your,
      children:[
        {
          path:'www',
          name:'www',
          component:www,
        },
        {
          path:'yourson',
          name:'yourson',
          component:yourson,
        },
        {
          path:'sss',
          name:'sss',
          component:sss,
        }
      ]
    }
  ]
})
