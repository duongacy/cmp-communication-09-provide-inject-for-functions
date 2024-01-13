import { createApp } from 'vue';

import App from './App.vue';
import ActiveKnowledge from './components/ActiveKnowledge.vue';
import Knowledge from './components/Knowledge.vue';
import KnowledgeList from './components/KnowledgeList.vue';

const app = createApp(App);

app.component('active-knowledge', ActiveKnowledge);
app.component('knowledge', Knowledge);
app.component('knowledge-list', KnowledgeList);

app.mount('#app');
