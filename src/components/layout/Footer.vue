<template>
    <footer class="footer">
        <div class="upper-part">
            <div class="menu">
                <router-link to="/" class="row-title">Menu</router-link>
                <router-link to="/">Home</router-link>
                <router-link to="/">Shop</router-link>
                <router-link to="/">About Us</router-link>
                <router-link to="/">Contact Us</router-link>
            </div>
            <div class="categories">
                <router-link to="/" class="row-title">Categories</router-link>
                <router-link to="/">Casual</router-link>
                <router-link to="/">Work & Office</router-link>
                <router-link to="/">Activewear</router-link>
                <router-link to="/">Evening Dresses</router-link>
            </div>
            <div class="resources">
                <router-link to="/" class="row-title">Resources</router-link>
                <router-link to="/">Contact Support</router-link>
                <router-link to="/">FAQ</router-link>
                <router-link to="/">Live Chat</router-link>
                <router-link to="/">Returns</router-link>
            </div>
            <div class="social-media">
                <router-link to="/" class="row-title">Social Media</router-link>
                <router-link to="/">Facebook</router-link>
                <router-link to="/">Twitter</router-link>
                <router-link to="/">Instagram</router-link>
                <router-link to="/">Pinterest</router-link>
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

.footer .upper-part .menu router-link,
.footer .upper-part .categories router-link,
.footer .upper-part .resources router-link,
.footer .upper-part .social-media router-link {
    color: white;
}

.footer .upper-part .row-title {
    margin-bottom: 1rem;
    font-size: 18px;
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