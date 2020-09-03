import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from './views/Start'; // Det er den component der bliver kaldt

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', name: 'home', component: Start, // component er navnet på "home Component".
        }
    ]
});