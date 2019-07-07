<template>
    <div>
        <div class="localhot_special">
        <div class="place_top">
            <span>必吃特色菜</span>
        </div>
        <div class="local_bottom bottom_mar">
            <a href="" class="local_blank">
                <div class="local_pic">
                    <img src="img/100s080000003e1h3372F_C_220_150.jpg" alt="">
                </div>
                <div class="local_pictxts">
                    <span>上海生煎包</span>
                </div>
            </a>
            <a href="" class="local_blank">
                <div class="local_pic">
                    <img src="img/100s080000003e1h3372F_C_220_150.jpg" alt="">
                </div>
                <div class="local_pictxts">
                    <span>上海生煎包</span>
                </div>
            </a>
            <a href="" class="local_blank">
                <div class="local_pic">
                    <img src="img/100s080000003e1h3372F_C_220_150.jpg" alt="">
                </div>
                <div class="local_pictxts">
                    <span>上海生煎包</span>
                </div>
            </a>
            <a href="" class="local_blank">
                <div class="local_pic">
                    <img src="img/100s080000003e1h3372F_C_220_150.jpg" alt="">
                </div>
                <div class="local_pictxts">
                    <span>上海生煎包</span>
                </div>
            </a>
            <a href="" class="local_blank">
                <div class="local_pics">
                    查看更多
                    <i class="local_picsicon"></i>
                </div>
            </a>
        </div>
    </div>
    </div>
</template>



<script>
export default {
    
}
</script>


<style scoped>
        /* 当地热门 */
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
.localhot {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .15rem;
    margin: .1rem 0 0;
    background: #fff;
}
.local_middle {
    display: flex;
    justify-content: space-between;
    padding: 0 0 .12rem .05rem;
}
.local_middle>a {
    width: .8rem;
    height: .28rem;
    display: block;
    font-size: .13rem;
    background: #4CB7F9;
    color: #fff;
    text-align: center;
    line-height: .28rem;
    border-radius: .02rem;
}
.local_bottom {
    margin-left: .15rem;
    display: flex;
    overflow-x: auto;
    margin-bottom: .1rem;
}
.local_blank {
    margin-right: .1rem;
    flex-shrink: 0;
    margin-bottom: .1rem;
}
/* 特色菜 */
.local_pic {
    width: 1.1rem;
    height: .8rem;
}

.local_pic>img {
    width: 100%;
    height: 100%;
}

.local_pictxt {
    width: 1.1rem;
}

.local_pictxt>span {
    display: block;
    font-size: .14rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333333;
    margin: .08rem 0 .02rem;
}

.local_pictxt>i {
    display: block;
    font-style: normal;
    font-size: .14rem;
    color: #0099f7;
}

.local_pics {
    height: .8rem;
    width: .1rem;
    font-size: .12rem;
    padding-top: .08rem;
    margin-left: .1rem;
    position: relative;
    color: #222222;
}
.local_pictxts>span {
    display: block;
    font-size: .14rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333333;
    margin: .08rem 0.2rem .02rem;
}

.local_picsicon {
    content: "";
    width: .14rem;
    height: .14rem;
    position: absolute;
    left: -.12rem;
    top: 50%;
    margin-top: -.07rem;
    background: url(https://pages.c-ctrip.com/you/place/place_sp.png?v=20190530_19_25) no-repeat;
    background-size: 2rem 2rem;
    background-position: -1.88rem -.16rem;
}

</style>