<template>
    <h2>Select a Topic</h2>
    <topic v-for="topic in topics" :key="topic.id" :topic="topic" />
</template>

<script>
export default {
    props: ['topics'],
    data() {
        return {

        }
    }
}
</script>