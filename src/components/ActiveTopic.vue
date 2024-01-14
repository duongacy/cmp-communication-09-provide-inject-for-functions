<template>
    <div style="border: #ccc solid 2px;">
        <h3>{{ topic.title }}</h3>
        <p>{{ topic.fullText }}</p>
    </div>
</template>
<script>
export default {
    props: ['topic'],
}
</script>