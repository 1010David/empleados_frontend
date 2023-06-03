import { createApp } from 'vue';
import App from './App.vue';
import routerInstance from './router/indexRouter';
import store from './store/indexStore';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const app = createApp(App);
app.use(routerInstance);
app.use(store);
app.mount('#app');
