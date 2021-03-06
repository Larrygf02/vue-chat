import Vue from 'vue';
import Router from 'vue-router';
import Chat from './components/Chat';
Vue.use(Router)

const routes = [
    { path: '/chat', component: Chat }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router;
