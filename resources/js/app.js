import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-utilities.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
