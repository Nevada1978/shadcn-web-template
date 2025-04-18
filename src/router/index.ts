import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 导入你的视图组件
// 例如: import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    // 在这里定义你的路由
    {
      path: '/',
        name: 'Dashboard',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 使用 history 模式
    routes, // `routes: routes` 的缩写
});

export default router; 