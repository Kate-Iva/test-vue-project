import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from './pages/FirstPage.vue';
import SecondPage from './pages/SecondPage.vue';
import ThirdPage from './pages/ThirdPage.vue';
const routes = [
  { path: '/first', component: FirstPage },
  { path: '/second', component: SecondPage },
  { path: '/third', component: ThirdPage },
  { path: '/', redirect: '/first' } 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;