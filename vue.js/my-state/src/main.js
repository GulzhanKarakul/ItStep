import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import MainPage from './components/MainPage'
import LessonPage from './components/LessonPage'
import ClassPage from './components/ClassPage'
import StudentPage from './components/StudentPage'

let routes = [
    { path: '/', component: MainPage },
    { path: '/lesson:id', component: LessonPage},
    { path: '/class', component: ClassPage},
    { path: '/student:id', component: StudentPage},
]

let vm = createApp(App);

let router = createRouter({
    history: createWebHashHistory(),
    routes,
});

vm.use(router);

vm.mount('#app')
