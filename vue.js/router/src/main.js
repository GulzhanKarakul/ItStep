import { createApp } from 'vue'
// импорт маршрутизатора
import { createRouter, createWebHashHistory } from 'vue-router'
import StoreView from './components/StoreView.vue';
import PaymentDiv from './components/PaymentDiv.vue';
import ShopBasket from './components/ShopBasket.vue';
// const About = { template: '<router-link  to="/hw"></router-link><div>About</div>' }

import App from './App.vue'
// Объект с путями
const routes = [
    { path: '/', component: StoreView },
    { path: '/payment', component:  PaymentDiv},
    { path: '/busket', component: ShopBasket },
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