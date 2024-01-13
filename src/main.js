import { createApp } from 'vue';

import App from './App.vue';
import ActiveKnowledge from './components/ActiveKnowledge.vue';
import Knowledge from './components/Knowledge.vue';
import KnowledgeList from './components/KnowledgeList.vue';

const app = createApp(App);

app.component('active-element', ActiveKnowledge);
app.component('knowledge-element', Knowledge);
app.component('knowledge-grid', KnowledgeList);

app.mount('#app');
