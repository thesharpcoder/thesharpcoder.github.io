import Vue from 'vue';

import router from './router.js';
import auth from './firebase.js';
//import { onAuthStateChanged } from "firebase/auth";

import App from './App.vue';

console.log('Imported auth', auth);
// var userLoggedIn = false;
// onAuthStateChanged(auth, user => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         //const uid = user.uid;
//         userLoggedIn = true;
//     } else {
//         // User is signed out
//         // ...
//     }
// });

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        //if (firebase.auth().currentUser) {
        if (auth.currentUser)
            next();
        else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else
        next();
});

window.eventBus = new Vue();
window.createApp = function createApp(d, p) {
    new Vue({
        el: d,
        router,
        data() {
            return {
                auth
            }
        },
        render(h) {
            return h(App, { props: p });
        }
    });
};
