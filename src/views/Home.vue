<template>
    <div class="landing-section">
        <div class="header-buttons">
            <div class="title">
                <h1>Raining <span class="different-color-one">Offers For</span> <br> Hot <span
                        class="different-color">Summer!</span></h1>
                <p>70% Off <span class="different-color-p">On All Products</span></p>
            </div>
            <div class="buttons">
                <button class="shop-now-btn">Shop Now</button>
                <button class="find-more-btn">Find More</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.landing-section {
    background-image: url(../assets/images/landing-image.jpg);
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
}

.landing-section .header-buttons .title .different-color-one {
    color: rgb(3, 20, 34);
    margin-left: 28px;
}

.landing-section .header-buttons .title .different-color {
    color: rgb(3, 20, 34);
    margin-left: 70px;
}

.landing-section .header-buttons .title .different-color-p {
    color: rgb(3, 20, 34);
    margin-left: 5px;
}

.landing-section .header-buttons .title h1 {
    margin-bottom: 2rem;
}

.landing-section .header-buttons .title p {
    font-size: 22px;
}

.landing-section .header-buttons .title h1,
.landing-section .header-buttons .title p {
    color: white;
}

.landing-section .header-buttons .buttons button {
    border: 1px solid black;
    padding: 1rem 2rem;
    margin-right: 1rem;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
}

.landing-section .header-buttons .buttons .find-more-btn {
    background: black;
    border: 1px solid white;
    color: white;
}
</style>