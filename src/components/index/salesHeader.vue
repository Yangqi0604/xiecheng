<template>
<div>
    <div class="sales_hd">
        <span class="sales_hd-left"></span>
        <a class="sales_hd-right">
            更多
        </a>
    </div>
</div>
</template>




<script>
export default {

}
</script>



<style scoped>
/* 特卖板块 */

.sales_hd {
    width: 100%;
    height: .44rem;
    border-top: .01rem solid #dbdbdd;
    position: relative;
    background: #ffffff;
}

.sales_hd-left {
    content: '';
    display: inline-block;
    position: absolute;
    left: .18rem;
    top: 50%;
    width: .79rem;
    height: .15rem;
    background: url(../../assets/un_home_text.png) no-repeat;
    background-size: .79rem auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.sales_hd-right {
    background: linear-gradient(to right, #ff4e63, #ff6cc9);
    content: '';
    position: absolute;
    right: .08rem;
    top: .11rem;
    display: inline-block;
    width: .42rem;
    height: .2rem;
    line-height: .2rem;
    color: #fff;
    border-radius: .63rem;
    font-size: .75rem;
    font-size: .12rem;
    padding-left: .15rem;
}

.sales_hd-right:after {
    content: '';
    position: absolute;
    top: .06rem;
    right: .09rem;
    width: .07rem;
    height: .07rem;
    border: .02rem solid #fff;
    border-width: 0 .02rem .02rem 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>