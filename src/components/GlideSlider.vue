<template>
    <div class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">Slide 1</li>
                <li class="glide__slide">Slide 2</li>
                <li class="glide__slide">Slide 3</li>
            </ul>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Glide from '@glidejs/glide';

onMounted(() => {
    new Glide('.glide').mount();
});

</script>

<style scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
@import '@glidejs/glide/dist/css/glide.theme.min.css';

.glide__slide {
    text-align: center;
    font-size: 20px;
    padding: 40px;
    background: #eee;
}
</style>