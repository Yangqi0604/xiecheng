<template>
<div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="items in indexdata">
                <img :src=items alt="">
            </div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
    </div>
</div>
</template>


<script>
import Swiper from "swiper"
export default {
    data() {
        return {

        }
    },
    props: ["indexdata"],
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            observer:true , //动态获取资源时，需要加上这一句
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    },
}
</script>


<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.min.css";
.swiper-slide>img {
    width: 100%;
    height: 2.2rem;
    position: relative;
    margin-top: -.25rem;
    -webkit-box-reflect: below 2rem linear-gradient(rgba(255, 255, 255, 0)0%, rgba(255, 255, 255, 1)75%);
}

.svg {
    z-index: 9;
    width: 100%;
    height: .4rem;
    background: url(../../assets/bg.png);
    background-size: 100% 100%;
    position: absolute;
    top: 1.6rem;
}
</style>