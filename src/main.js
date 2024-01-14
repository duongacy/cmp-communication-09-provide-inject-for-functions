import { createApp } from 'vue';

import App from './App.vue';
import Topic from './components/Topic.vue';
import ListTopic from './components/ListTopic.vue';
import ActiveTopic from './components/ActiveTopic.vue';

const app = createApp(App);
app.component('topic', Topic);
app.component('list-topic', ListTopic);
app.component('active-topic', ActiveTopic);
app.mount('#app');
