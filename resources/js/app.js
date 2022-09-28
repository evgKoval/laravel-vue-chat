import './bootstrap';
import vuetify from '@/plugins/vuetify';
import router from '@/plugins/router';
import store from '@/plugins/store';

import App from './App.vue';
import Sidebar from '@/components/Sidebar';
import Channels from '@/components/Channels';
import Profile from '@/components/Profile';
import AuthButtons from '@/components/AuthButtons';

window.Vue = require('vue').default;

Vue.component('sidebar', Sidebar);
Vue.component('channels', Channels);
Vue.component('profile', Profile);
Vue.component('auth-buttons', AuthButtons);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
