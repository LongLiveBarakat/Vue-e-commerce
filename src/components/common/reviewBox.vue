<template>
    <div class="review-box">
        <div class="review-rate">
            <img class="star" src="../../assets/images/Star.svg" alt="" v-for="star in reviewBox.starsCount"
                :key="star">
        </div>
        <div class="customer-name">
            <h1 class="name">{{ reviewBox.customerName }} </h1>
            <img src="../../assets/images/check.svg" alt="" v-if="reviewBox.isVerified">
        </div>
        <p class="description"> {{ reviewBox.description }} </p>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    reviewBox: {
        type: Object,
        required: true
    }
});
</script>


<style scoped>
.review-box {
    border: 1px solid gainsboro;
    background: white;
    border-radius: 20px;
    width: 400px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.review-box .star {
    width: 22px;
}

.review-box .name {
    font-size: 20px;
}

.review-box .description {
    color: rgb(0, 0, 0, 0.6);
    line-height: 1.5rem;
}

.review-box .customer-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.review-box .customer-name img {
    width: 19px;
}

.review-box .review-rate {
    display: flex;

}
</style>