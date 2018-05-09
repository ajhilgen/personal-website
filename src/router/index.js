import Vue from 'vue';
import Router from 'vue-router';
import AboutMe from '@/components/AboutMe';
import Resume from '@/components/Resume';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
});
