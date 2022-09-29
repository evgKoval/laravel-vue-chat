import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/plugins/store';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach(async (to, from, next) => {
    const user = store.getters["user"];
    const isAuthRequired = to.matched.some((route) => route.meta.requiresAuth);

    store.commit('SET_APP_LOADING', true);

    if (isAuthRequired && !user) {
        await store.dispatch("getUser");
        redirectIfUserNotLogined(to, next);
    } else {
        next();
    }

    store.commit('SET_APP_LOADING', false);
});

function redirectIfUserNotLogined(to, next) {
    if (!store.getters["user"]) {
        next({
            path: "/login",
            query: {
                redirect: to.fullPath
            }
        });
    } else {
        next();
    }
}

export default router;
