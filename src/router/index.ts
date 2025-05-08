import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false }
    }
  ]
});

router.beforeEach((to, from) => {
  const isAuthenticated = store.getters['oauth/isAuthenticated'];
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { path: '/login' };
  }
  
  if (to.path === '/login' && isAuthenticated) {
    return { path: '/' };
  }
  
  return true;
});

export default router; 