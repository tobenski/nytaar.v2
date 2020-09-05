import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from './views/Start';
import Born from './views/Born';
import Order from './views/Order';
import FirstStep from './views/order/FirstStep';
import SecondStep from './views/order/SecondStep';
import ThirdStep from './views/order/ThirdStep';
import FourthStep    from './views/order/FourthStep';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', name: 'home', component: Start,
        },
        {
            path: '/born', name: 'born', component: Born, 
        },
        {
            path: '/order', name: 'order', component: Order, 
        },
        {
            path: '/order/details', name: 'order.details', component: SecondStep, 
        },
        {
            path: '/order/confirm', name: 'order.confirm', component: ThirdStep,
        },
        {
            path: '/order/payment', name: 'order.payment', component: FourthStep,
        },
    ]
});