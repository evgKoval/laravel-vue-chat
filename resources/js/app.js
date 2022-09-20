import './bootstrap';
import vuetify from '@/plugins/vuetify';
import router from '@/plugins/router';

import Sidebar from '@/components/Sidebar';

window.Vue = require('vue').default;

Vue.component('sidebar', Sidebar);

const app = new Vue({
    el: '#app',
    vuetify,
    router
});
