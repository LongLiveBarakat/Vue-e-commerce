<template>
    <header class="main-header">

        <div class="links">
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/shop">Shop</RouterLink>
            <RouterLink class="link" to="/about-us">Aboute Us</RouterLink>
            <RouterLink class="link" to="/contact-us">Contact Us</RouterLink>
        </div>

        <div class="logo">
            <h1>ThreadTrove</h1>
        </div>

        <div class="search-cart">
            <input class="search-input" type="text" placeholder="What Are You Looking For ?">
            <i class="fa-solid fa-bag-shopping shopping-cart"></i>
            <router-link class="link" to="/Sign-Up"> <i class="fa-solid fa-user"></i> </router-link>
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
    background: white;
    box-shadow: 0px 0px 10px 0px #0000001A;
}

.main-header .links {
    display: flex;
    gap: 1rem;
}

.main-header .links .link {
    cursor: pointer;
    text-decoration: none;
    color: black;
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

.main-header .search-cart .link {
    color: black;
}
</style>