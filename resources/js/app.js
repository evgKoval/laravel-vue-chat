import './bootstrap';
import vuetify from '@/plugins/vuetify';
import router from '@/plugins/router';

import Sidebar from '@/components/Sidebar';
import Channels from '@/components/Channels';

window.Vue = require('vue').default;

Vue.component('sidebar', Sidebar);
Vue.component('channels', Channels);

const app = new Vue({
    el: '#app',
    vuetify,
    router
});
