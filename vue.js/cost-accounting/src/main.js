import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import PurchasePage from './components/Purchase'
import IncomePage from './components/IncomePage'
import StatPage from './components/StatPage'

let routes = [
    { path: '/', component: StatPage },
    { path: '/purchase', component: PurchasePage},
    { path: '/income', component: IncomePage},
]

let vm = createApp(App);

let router = createRouter({
    history: createWebHashHistory(),
    routes,
});

vm.use(router);

vm.mount('#app')