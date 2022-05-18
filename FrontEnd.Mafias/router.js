import Vue from 'vue';
import VueRouter from 'vue-router';

import firebase from 'firebase/compat/app';
import initialize from './firebase.js';
import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

import Home from './Home.vue';
import Game from './Game.vue';
import Register from './Register.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: Home, },
    { path: '/register', name: 'Register', component: Register
        //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    { path: '/game', name: 'Game', component: Game,
        meta: {
            authRequired: true,
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

initialize(firebase);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router;