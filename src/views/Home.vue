<template>
    <div class="landing-section">
        <div class="header-buttons">
            <div class="title">
                <h1>Raining Offers For <br> Hot Summer!</h1>
                <p>70% Off <span class="different-color-p">On All Products</span></p>
            </div>
            <div class="buttons">
                <button class="shop-now-btn">Shop Now</button>
                <button class="find-more-btn">Find More</button>
            </div>
        </div>
    </div>

    <div class="phrase">
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.</p>
    </div>

    <div class="new-arrivals">
        <h1 class="heading-title">NEW ARRIVALS</h1>
        <div class="products">
            <productCart v-for="product in newArrivalProducts" :key="product.id" :product="product" />
        </div>
        <viewAll @click="viewAllProductsArrival" />
    </div>

    <div class="top-selling new-arrivals">
        <h1 class="heading-title">TOP SELLING</h1>
        <div class="products">
            <productCart v-for="product in topSellingProducts" :key="product.id" :product="product" />
        </div>
        <viewAll @click="viewAllProductsSelling" />
    </div>
</template>

<script setup>
import viewAll from '../components/common/viewAll.vue';
import productCart from '../components/common/productCart.vue';
import { faker } from '@faker-js/faker';
import { ref } from 'vue';

const generateProducts = (count) => {
    const products = []
    for (let i = 0; i < count; i++) {
        products.push({
            id: i + 1,
            image: `https://picsum.photos/600/600?random=${i}`,
            name: faker.commerce.productName(),
            rating: parseFloat((Math.random() * 5).toFixed(1)),
            price: faker.commerce.price()
        })
    }
    return products
};

const newArrivalProducts = ref(generateProducts(4));
const topSellingProducts = ref(generateProducts(4));

const viewAllProductsArrival = () => {
    newArrivalProducts.value = newArrivalProducts.value.concat(generateProducts(10))
}

const viewAllProductsSelling = () => {
    topSellingProducts.value = topSellingProducts.value.concat(generateProducts(10))
}

</script>

<style scoped>
.landing-section {
    background-image: url(../assets/images/Rectangle.png);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: 700px;
    display: flex;
    align-items: center;
}

.landing-section .header-buttons {
    margin-left: 7rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.landing-section .header-buttons .title h1 {
    font-size: 50px;
    line-height: 4rem;
    color: black;
    margin-bottom: 2rem;
}

.landing-section .header-buttons .title p {
    font-size: 22px;
}

.landing-section .header-buttons .buttons button {
    border: 1px solid black;
    padding: 1rem 2rem;
    margin-right: 1rem;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    background: white;
    color: black;
}

.landing-section .header-buttons .buttons .find-more-btn {
    background: black;
    border: 1px solid white;
    color: white;
}

.phrase {
    width: 100%;
    background: black;
}

.phrase p {
    text-align: center;
    color: white;
    padding: 4rem 0;
}

.new-arrivals {
    margin: 4rem auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid gainsboro;
}

.new-arrivals .heading-title {
    margin-bottom: 4rem;
    font-size: 48px;
    font-family: 'Satoshi-Black';
}

.new-arrivals .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
}

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
    height: 300px;
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

.top-selling {
    border-bottom: none;
}
</style>