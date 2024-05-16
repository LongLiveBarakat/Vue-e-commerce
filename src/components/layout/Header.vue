<template>
    <header class="main-header">

        <div class="links">
            <RouterLink to="/home">Home</RouterLink>
            <RouterLink to="/shop">Shop</RouterLink>
            <RouterLink to="/about-us">Aboute Us</RouterLink>
            <RouterLink to="/contact-us">Contact Us</RouterLink>
        </div>

        <div class="logo">
            <h1>ThreadTrove</h1>
        </div>

        <div class="search-cart">
            <input class="search-input" type="text" placeholder="What Are You Looking For ?">
            <i class="fa-solid fa-bag-shopping shopping-cart"></i>
            <i class="fa-solid fa-user"></i>
        </div>

    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
}

.main-header .links {
    display: flex;
    gap: 1rem;
}

.main-header .links RouterLink {
    cursor: pointer;
}

.main-header .search-cart {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 20%;
}

.main-header .search-cart input {
    outline: none;
    border: 1px solid black;
    width: 100%;
    padding: 0.5rem;
}

.main-header .search-cart i {
    font-size: 20px;
    cursor: pointer;
}
</style>