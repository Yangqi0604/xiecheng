<template>
    <div>
            <div class="localhot_special">
        <div class="place_top">
            <span>推荐住宿区域</span>
        </div>
        <div class="put_bottoms">
            <a href="" class="local_put">
                <div class="put_pic">
                    <div class="put_pictxt">
                        <span>迪士尼度假区</span>
                        <i>2141家酒店</i>
                        <p>7.7%用户选择</p>
                    </div>
                </div>
            </a>
            <a href="" class="local_put local_puter">
                <div class="put_pic">
                    <div class="put_pictxt">
                        <span>迪士尼度假区</span>
                        <i>2141家酒店</i>
                        <p>7.7%用户选择</p>
                    </div>
                </div>
            </a>
            <a href="" class="local_put">
                <div class="put_pic">
                    <div class="put_pictxt">
                        <span>迪士尼度假区</span>
                        <i>2141家酒店</i>
                        <p>7.7%用户选择</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="place_bottom">
            <a href="">查看全部酒店</a>
        </div>
    </div>
    </div>
</template>



<script>
export default {
    
}
</script>



<style scoped>
    /* 推荐住宿区域 */
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
.put_bottoms{
    display: flex;
    justify-content: center;
}
.local_put {
    flex-shrink: 0;
    margin-bottom: .1rem;
}
.local_puter{
   margin:0 .1rem;
}

.put_pic {
    width: 1.1rem;
    height: .66rem;
    background: url(../../assets/place_pic.png) no-repeat;
    background-size: 1.1rem 2.55rem;
    background-position: 0 0;
    position: relative;
    padding-top: .2rem;
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

.local_put:nth-child(2) .put_pic {
    background-position: 0 -.85rem;
}

.local_put:nth-child(3) .put_pic {
    background-position: 0 -1.69rem;
}

.put_pictxt {
    width: 1.1rem;
}
.put_pictxt>span {
    display: block;
    font-size: .14rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    text-align: center;
}
.put_pictxt>i {
    display: block;
    font-size: .12rem;
    font-style: normal;
    color: #FFF;
    text-align: center;
    line-height: .2rem;
}
.put_pictxt>p{
    width: .7rem;
    padding: 0 .07rem;
    background: rgba(255,255,255,0.7);
    height: .18rem;
    line-height: .2rem;
    color: #222;
    font-size: .11rem;
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
}
</style>