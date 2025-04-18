import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 导入你的视图组件
// 例如: import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    // 在这里定义你的路由
    {
        path: '/', // 仪表盘路由路径
        name: 'Dashboard', // 仪表盘路由名称
        // 路由级代码分割 (懒加载)
        component: () => import('@/views/dashboard/index.vue') // 导入 Dashboard 组件
    },
    {
      path: '/temp',
      name: 'Temp',
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