<template>
    <div>
        <div class="place_whiteWrap">
        <div class="place_top">
            <span>旅游攻略</span>
            <p class="ct_txts">上海，被称为“东方的巴黎”，东西方文化在此融汇交织，造就了洋气的海派风情。它是曾经的“十里洋场”老上海，也是如今日新月异的繁华“魔都”。</p>
        </div>
        <div class="place_middle">
            <a href="">第一次来上海</a>
            <a href="">新年嗨起来</a>
            <a href="">迪士尼亲子游</a>
            <a href="">星巴克烘培馆</a>
            <a href="">老字号小吃店</a>
            <a href="">周边温泉推荐</a>
        </div>
        <div class="place_bottom">
            <a href="">查看全部攻略</a>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    /* 旅游攻略 */
.place_whiteWrap {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .15rem;
    margin: .1rem 0 0;
    background: #fff;
}
.place_top {
    text-align: center;
    /* padding: 0 .1rem; */
}
.place_top>span {
    display: block;
    font-size: .17rem;
    height: .5rem;
    line-height: .5rem;
}
.ct_txts {
    display: block;
    font-size: .15rem;
    line-height: .16rem;
    height: .32rem;
    width: 100%;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 0 auto;
    color: #222;
    margin: 0 0 .12rem;
}
.place_middle {
    display: flex;
    flex-wrap: wrap;
}
.place_middle>a {
    padding: .1rem;
    height: .2rem;
    display: block;
    font-size: .13rem;
    background: #f5f5f5;
    margin: .1rem .1rem .1rem 0;
    color: #333333;
}
.place_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0.01rem solid #cccccc;
}
.place_bottom>a {
    height: .47rem;
    font-size: .15rem;
    line-height: .47rem;
    color: #0099f7;
}

</style>