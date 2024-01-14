<template>
  <div>
    <active-topic :topic="topicSelected" v-if="topicSelected" />
    <list-topic :topics="topics" />
  </div>
</template>

<script>
import ActiveTopic from './components/ActiveTopic.vue';
import ListTopic from './components/ListTopic.vue';
export default {
  provide() {
    return {
      selectTopic: this.select,
      removeTopic: this.removeTopic,
      changeTitleTopicProvider: this.changeTitleTopic
    }
  },
  components: { ListTopic, ActiveTopic },
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
      topicSelected: null
    }
  },
  methods: {
    select(id) {
      this.topicSelected = this.topics.find(topic => topic.id === id)
    },
    removeTopic(id) {
      this.topics = this.topics.filter(item => item.id !== id)
    },
    async changeTitleTopic(id, callback) {
      await new Promise(rs => setTimeout(rs, 2000))
      const topic = this.topics.find(item => item.id === id);
      topic.title = new Date().getTime();
      callback?.()
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>