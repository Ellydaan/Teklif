import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import firebase from "firebase/compat/app";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Mission',
    name: 'Mission',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mission.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sing.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },{
    path: '/Annonce',
    name: 'Annonce',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Annonce.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')

  },
  {
    path: '/Savoir/:id',
    name: 'Savoir',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ensavoir.vue'),
    meta: { requiresAuth: true }

},

  {
    path: '/Entreprise',
    name: 'Entreprise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entreprise.vue')

  },
  {
    path: '/Etudiant',
    name: 'Etudiant',
    component: () => import(/* webpackChunkName: "about" */ '../views/Etudiant.vue')

  },

  {
    path: '/AddC',
    name: 'AddC',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddC.vue')

  },
  {
    path: '/EnSavoirE/:id',
    name: 'EnSavoirE',
    component: () => import(/* webpackChunkName: "about" */ '../views/EnSavoirE.vue'),
    meta: { requiresAuth: true }

  }






]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // This route requires authentication. Check if the user is signed in.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in. Allow access to the route.
        next();
      } else {
        // User is not signed in. Redirect to the login page.
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    // This route does not require authentication. Allow access.
    next();
  }
});




export default router
