import { createApp } from 'vue'
// импорт маршрутизатора
import { createRouter, createWebHashHistory } from 'vue-router'
import PagesComp from './components/PagesComp.vue';
import ItemsComp from './components/ItemsComp.vue';

import App from './App.vue'
// Объект с путями
const routes = [
    { path: '/pages', component: PagesComp },
    { path: '/items/:id', component:  ItemsComp},
    { path: '/items/', component:  ItemsComp},
    { path: '/first/', redirect: '/items/2'},
]
// Создание маршрутизатора и его настройка
let router = createRouter({
    // 4. Предоставьте реализацию истории для использования. Для простоты здесь мы используем хэш-историю.
    history: createWebHashHistory(),
    routes, // сокращение от `routes: маршруты`
});

let va = createApp(App);
// Подключение маршрутизатора к вью приложению
va.use(router);
va.mount('#app');