<template>
    <footer class="footer">
        <div class="upper-part">
            <div class="menu">
                <p class="row-title">Menu</p>
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/">Shop</router-link>
                <router-link class="link" to="/">About Us</router-link>
                <router-link class="link" to="/">Contact Us</router-link>
            </div>
            <div class="categories">
                <p class="row-title">Categories</p>
                <router-link class="link" to="/">Casual</router-link>
                <router-link class="link" to="/">Work & Office</router-link>
                <router-link class="link" to="/">Activewear</router-link>
                <router-link class="link" to="/">Evening Dresses</router-link>
            </div>
            <div class="resources">
                <p class="row-title">Resources</p>
                <router-link class="link" to="/">Contact Support</router-link>
                <router-link class="link" to="/">FAQ</router-link>
                <router-link class="link" to="/">Live Chat</router-link>
                <router-link class="link" to="/">Returns</router-link>
            </div>
            <div class="social-media">
                <p class="row-title">Social Media</p>
                <router-link class="link" to="/">Facebook</router-link>
                <router-link class="link" to="/">Twitter</router-link>
                <router-link class="link" to="/">Instagram</router-link>
                <router-link class="link" to="/">Pinterest</router-link>
            </div>
        </div>
        <div class="lower-part">
            <p>Copyright @ 2024 Clothing Store Demo</p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    width: 100%;
    background: black;
}

.footer .upper-part {
    display: flex;
    justify-content: space-around;
    padding: 4rem 1rem;
    border-bottom: 1px solid white;
}

.footer .upper-part .menu,
.footer .upper-part .categories,
.footer .upper-part .resources,
.footer .upper-part .social-media {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer .upper-part .menu .link,
.footer .upper-part .categories .link,
.footer .upper-part .resources .link,
.footer .upper-part .social-media .link {
    color: white;
    text-decoration: none;
}

.footer .upper-part .row-title {
    margin-bottom: 1rem;
    font-size: 18px;
    color: white;
}

.footer .lower-part {
    width: 100%;
}

.footer .lower-part p {
    text-align: center;
    padding: 2rem;
    color: white;
}
</style>