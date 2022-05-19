import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './Home.vue';
import Game from './Game.vue';
import Register from './Register.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: Home, },
    {
        path: '/register', name: 'Register', component: Register
        //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/game', name: 'Game', component: Game,
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

export default router;