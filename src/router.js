import Vue from 'vue';
import Router from 'vue-router';
import Films from './views/films.vue';

Vue.use(Router);

const parseProps = r => ({ idd: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/films',
    },
    {
      path: '/films',
      name: 'films',
      component: Films,
    },
    {
      path: '/films/:id',
      name: 'film-detail',
      props: parseProps,
      component: () =>
        import(/* webpackChunkName: "bundle.films" */ './views/film-detail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue'),
    },
  ],
});
