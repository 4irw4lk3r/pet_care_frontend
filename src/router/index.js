import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Owner from '../views/Owner.vue';
import Pet from '../views/Pet.vue';
import Medical from '../views/Medical.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/owner',
    name: 'Owner',
    component: Owner,
  },
  {
    path: '/pet',
    name: 'Pet',
    component: Pet,
  },
  {
    path: '/medical',
    name: 'Medical',
    component: Medical,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
