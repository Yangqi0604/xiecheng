<template>
    <div>
            <div class="headerview">
        <!-- 搜索框 -->
        <div class="search-destination">
            <span class="sale-go-back">
                <i class="sale-back-icon">
                    <img src="img/Back icon1.png" alt="">
                </i>
            </span>
            <div class="search-destination-main">
                <div class="search-destination-mainL">
                    <div class="search-destination-input">
                        <a class="input_left">
                            <span>上海</span>
                        </a>
                        <div class="search-destination-text">
                            <input class="search-destination-keywords" type="text" placeholder="目的地/关键字">
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-destination-mainR">
                <img src="img/home .png" alt="">
            </div>
        </div>
        <!-- 底下的大背景图 -->
        <div class="backgroundImg">
            <img src="img/100e0h0000008rp39A12F_C_750_375.jpg" alt="">
        </div>
        <!-- 天气部分 -->
        <div class="weather">
            <h2>上海</h2>
            <i> Shanghai</i>
        </div>
        <div class="weatherIcon">
            <img src="img/02.png" alt="">
            <span>阴 20-27℃</span>
            <a href="" class="weather_pic">92548张照片</a>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    /* 顶部带搜索框的部分 */
.header-top{
    position: absolute;
    left: 0;
    top: 0;
}
.headerview {
    width: 100%;
    height: .44rem;
    background: #ffffff;
    z-index: 999;
    position: relative;
}
/* 搜索框 */
.search-destination {
    padding: 0 .1rem;
    display: flex;
    align-items: center;
}
.sale-go-back {
    float: left;
    display: block;
    width: 10%;
    height: .44rem;
    position: relative;
}
.sale-back-icon>img {
    width: .24rem;
    height: .24rem;
    display: block;
    position: absolute;
    top: .1rem;

}
.search-destination-main {
    float: left;
    width: 90%;
    height: .44rem;
}
.search-destination-main {
    width: 2.6rem;
    height: .32rem;
    border-radius: .08rem;
    background: #eaeaea;
}
.input_left {
    width: 20%;
    height: .3rem;
    display: block;
    color: #19a0f0;
}
.search-destination-input {
    position: relative;
    width: 100%;
    background: #FFF;
    margin-left: .1rem;
}
.input_left>span {
    display: block;
    font-size: .14rem;
    text-align: center;
    line-height: .32rem;
    margin-left: .2rem;
}
.input_left:before {
    content: "";
    width: .12rem;
    height: .16rem;
    background-position: -.64rem -1.02rem;
    position: absolute;
    left: .08rem;
    top: .08rem;
    background-image: url(../../assets/un_index_v7.png);
    background-repeat: no-repeat;
    background-size: 2.80rem auto;
}
.search-destination-text {
    display: table-cell;
    color: #999;
    background: #eaeaea;
    padding-left: .3rem;
    position: relative;
    white-space: nowrap;
    border-radius: 0 .5rem .5rem 0;
}
.search-destination-text:before {
    background: url(../../assets/spe_sou.png) no-repeat !important;
    background-size: .13rem auto !important;
    content: "";
    width: .13rem !important;
    height: .13rem !important;
    background-position: 0 0 !important;
    position: absolute;
    top: -.2rem;
    left: .62rem;
}
.search-destination-keywords {
    display: block;
    height: .3rem;
    padding: 0;
    font-size: .14rem;
    line-height: .3rem;
    vertical-align: middle;
    color: #999;
    width: 1.5rem;
    border: 0;
    background: 0 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-appearance: none;
    border-radius: 0;
    position: absolute;
    left: .85rem;
    top: -.29rem;
}
.search-destination-mainR>img {
    display: block;
    width: .24rem;
    height: .24rem;
    position: absolute;
    top: 0.1rem;
    right: .21rem;
}
/* 底下的背景图 */
.backgroundImg>img {
    width: 100%;
    height: 100%;
    margin-top: -.44rem;
}
/* 天气部分 */
.weather {
    position: absolute;
    top: 1.16rem;
    left: .1rem;
    display: flex;
    align-items: center;
}
.weather>h2 {
    color: #FFF;
    font-size: .28em;
    font-weight: 400;
}
.weather>i {
    display: block;
    font-size: .14rem;
    font-style: normal;
    color: #ffffff;
    margin-top: .1rem;
    margin-left: .1rem;
}
.weatherIcon {
    position: absolute;
    left: .13rem;
    top: 1.53rem;
    display: flex;
}
.weatherIcon>img {
    width: .22rem;
    height: .22rem;
    margin-right: .1rem;
}
.weatherIcon>span {
    display: block;
    font-size: .14rem;
    color: #ffffff;
}
.weatherIcon>span:after {
    content: '';
    right: -.14rem;
    top: 50%;
    margin-top: -.04rem;
    position: absolute;
    width: 0.06rem;
    height: .06rem;
    border-bottom: .01rem #fff solid;
    border-left: .01rem #fff solid;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.weather_pic {
    display: block;
    font-size: .14rem;
    color: #ffffff;
    margin-left: .1rem;
}

</style>