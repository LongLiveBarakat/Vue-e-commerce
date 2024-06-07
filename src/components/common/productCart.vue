<template>
    <div class="single-product">
        <div class="image">
            <img :src="product.image" alt="">
        </div>
        <h1 class="title"> {{ product.name }} </h1>
        <div class="ratings">
            <i v-for="n in Math.floor(product.rating)" :key="n" class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i v-if="product.rating % 1 !== 0" class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
            <i v-for="n in (5 - Math.ceil(product.rating))" :key="n" class="fa-regular fa-star"
                style="color: #FFD43B;"></i>
            <p> {{ product.rating }} </p>
        </div>
        <h1 class="price"> ${{ product.price }} </h1>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.new-arrivals .products .single-product {
    margin-bottom: 4rem;
}

.new-arrivals .products .single-product .ratings {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.5rem;
}

.new-arrivals .products .single-product .price {
    font-size: 24px;
    font-weight: 400;
}

.new-arrivals .products .single-product .image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s all ease;
}

.new-arrivals .products .single-product .image img:hover {
    scale: 1.03;
}

.new-arrivals .products .single-product .title {
    font-size: 20px;
    margin: 0.8rem 0 0.5rem 0;
    font-weight: 400;
}
</style>