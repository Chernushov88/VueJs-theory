import VueRouter from 'vue-router'
import Home from './pages/Home'
//import Cars from './pages/Cars'
// import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

const Cars = resolve => {
  require.ensure(['./pages/Cars'], () => {
    resolve(
      require('./pages/Cars')
    )
  })
}
const Car = resolve => {
  require.ensure(['./pages/Car'], () => {
    resolve(
      require('./pages/Car')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full', // http://localhost:8080/car/10/full
          component: CarFull,
          name: 'carFull'
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'cars'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition){
      return savePosition
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {
      x: 0,
      y: 0
    }
  }
})
