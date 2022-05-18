import Vue from 'vue';

import App from './App.vue';
import router from './router.js';

window.eventBus = new Vue();

window.createApp = function createApp(d, p) {
    new Vue({
        el: d,
        router,
        render(h) {
            return h(App, { props: p });
        }
    });
};
