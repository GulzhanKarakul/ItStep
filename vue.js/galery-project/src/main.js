import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import GaleryPage from './components/GaleryPage.vue'
import ContactsPage from './components/ContactsPage.vue'

let routes = [
    { path: '/', component: MainPage},
    { path: '/galery', component: GaleryPage},
    { path: '/galery:id', component: GaleryPage},
    { path: '/contacts', component: ContactsPage},
]

let router = createRouter({
    history: createWebHashHistory(),
    routes,
});

let vm = createApp(App)
vm.use(router)
vm.mount('#app')