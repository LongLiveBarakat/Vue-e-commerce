<template>
    <button @click="$emit('click')" class="view-all">View All</button>
</template>

<script setup>
</script>

<style scoped>
.view-all {
    border-radius: 62px;
    padding: 1rem 5rem;
    background: white;
    outline: none;
    border: 1px solid gainsboro;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 5rem;
}
</style>