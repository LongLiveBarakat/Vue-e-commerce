<template>
    <footer class="footer">
        <div class="upper-part">
            <div class="shop-co">
                <p class="shop-co-title">SHOP-CO</p>
                <p class="shop-co-paragraph">We have clothes that suits your style and <br> which you’re proud to wear.
                    From <br> women to men.
                </p>
                <div class="social-links">
                    <div class="twitter">
                        <img src="../../assets/images/socialLinks/1.svg" alt="">
                    </div>
                    <div class="facebook">
                        <img src="../../assets/images/socialLinks/2.svg" alt="">
                    </div>
                    <div class="instagram">
                        <img src="../../assets/images/socialLinks/3.svg" alt="">
                    </div>
                    <div class="github">
                        <img src="../../assets/images/socialLinks/4.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="menu">
                <p class="row-title">Company</p>
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/">Shop</router-link>
                <router-link class="link" to="/">About Us</router-link>
                <router-link class="link" to="/">Contact Us</router-link>
            </div>
            <div class="categories">
                <p class="row-title">Help</p>
                <router-link class="link" to="/">Casual</router-link>
                <router-link class="link" to="/">Work & Office</router-link>
                <router-link class="link" to="/">Activewear</router-link>
                <router-link class="link" to="/">Evening Dresses</router-link>
            </div>
            <div class="resources">
                <p class="row-title">FAQ</p>
                <router-link class="link" to="/">Contact Support</router-link>
                <router-link class="link" to="/">FAQ</router-link>
                <router-link class="link" to="/">Live Chat</router-link>
                <router-link class="link" to="/">Returns</router-link>
            </div>
            <div class="social-media">
                <p class="row-title">resources</p>
                <router-link class="link" to="/">Facebook</router-link>
                <router-link class="link" to="/">Twitter</router-link>
                <router-link class="link" to="/">Instagram</router-link>
                <router-link class="link" to="/">Pinterest</router-link>
            </div>
        </div>
        <div class="lower-part">
            <p>Copyright @ 2024 Clothing Store Demo</p>
            <div class="visa-images">
                <img src="../../assets/images/visaImages/Badge.svg" alt="">
                <img src="../../assets/images/visaImages/Badge-1.svg" alt="">
                <img src="../../assets/images/visaImages/Badge-2.svg" alt="">
                <img src="../../assets/images/visaImages/Badge-3.svg" alt="">
                <img src="../../assets/images/visaImages/Badge-4.svg" alt="">
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    width: 100%;
    background: #F0F0F0;
}

.footer .upper-part {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0rem 5rem;
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
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 0.5rem;
}

.footer .upper-part .row-title {
    margin-bottom: 1rem;
    font-size: 16px;
    color: black;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.footer .upper-part .shop-co {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer .upper-part .shop-co .shop-co-title {
    font-size: 33.45px;
    margin-bottom: 1rem;
}

.footer .upper-part .shop-co .shop-co-paragraph {
    color: rgba(0, 0, 0, 0.6);
}

.footer .upper-part .shop-co .social-links {
    display: flex;
}

.footer .upper-part .shop-co .social-links div {
    margin-right: 1.5rem;
    cursor: pointer;
}

.footer .lower-part {
    width: 100%;
    padding: 1.5rem 5rem 3rem 5rem;
    display: flex;
    justify-content: space-between;

}

.footer .lower-part p {
    color: rgba(0, 0, 0, 0.6);
}
</style>