<template>
    <div style="border: #ccc solid 1px; display: flex; flex-direction: column; gap:8px;">
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.description }}</p>
        <div style="display: flex;">
            <button @click="changeTitleTopic"> {{ this.isChanging ? 'Changing...' : 'Change title' }} </button>
            <button @click="selectTopic(topic.id)" style="margin-left: auto;">Select</button>
            <button @click="removeTopic(topic.id)">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['selectTopic', 'removeTopic', 'changeTitleTopicProvider'],
    props: ['topic'],
    data() {
        return {
            isChanging: false
        }
    },
    methods: {
        changeTitleTopic() {
            this.isChanging = true
            this.changeTitleTopicProvider(this.topic.id, this.changeTitleSuccess)
        },
        changeTitleSuccess() {
            // alert("success")
            this.isChanging = false
        }
    }
}
</script>