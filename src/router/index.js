import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }],
});
