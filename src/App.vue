<template>
  <div>
    <active-knowledge v-if="activeTopic" :topic-title="activeTopic.title" :text="activeTopic.fullText"></active-knowledge>
    <h2>Select a Topic</h2>
    <knowledge-list :topics="topics"></knowledge-list>
  </div>
</template>

<script>
import ActiveKnowledge from './components/ActiveKnowledge.vue';
export default {
  components: { ActiveKnowledge },
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.topics.push({
        id: 'events',
        title: 'Events',
        description: 'Events are important in Vue',
        fullText: 'Events allow you to trigger code on demand!'
      });
    }, 3000);
  }
};
</script>