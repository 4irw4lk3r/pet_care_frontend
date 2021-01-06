import Vue from 'vue';
import VueRouter from 'vue-router';
import ListPet from '../views/ListPet.vue';
import ListOwner from '../views/ListOwner.vue';
import AddPet from '../views/AddPet.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/listPet',
    name: 'listpet',
    component: ListPet,
  }, {
    path: '/listOwner',
    name: 'listowner',
    component: ListOwner,
  }, {
    path: '/addPet',
    name: 'addpet',
    component: AddPet,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
