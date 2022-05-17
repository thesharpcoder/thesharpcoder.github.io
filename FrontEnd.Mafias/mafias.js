import Vue from 'vue';
import Calculator from './Calculator.vue';

window.eventBus = new Vue();

window.createCalculator = function createCalculator(d, p) {
    new Vue({
        el: d,
        render(h) {
            return h(Calculator, { props: p });
        }
    });
};
