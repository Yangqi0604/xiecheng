<template>
    <div>
        <div class="place_whiteWrap">
        <div class="place_top">
            <span>经典行程</span>
            <div class="supermarkett">
                <ul class="sup_ul">
                    <li>
                        <div class="sup_ulImg">

                        </div>
                        <div class="sup_ulBox">
                            <p>特价机票</p>
                            <i>超值低价</i>
                        </div>
                    </li>
                    <li>
                        <div class="sup_ulImg">

                        </div>
                        <div class="sup_ulBox">
                            <p>特价机票</p>
                            <i>超值低价</i>
                        </div>
                    </li>
                    <li>
                        <div class="sup_ulImg">

                        </div>
                        <div class="sup_ulBox">
                            <p>特价机票</p>
                            <i>超值低价</i>
                        </div>
                    </li>
                    <li>
                        <div class="sup_ulImg">

                        </div>
                        <div class="sup_ulBox">
                            <p>特价机票</p>
                            <i>超值低价</i>
                        </div>
                    </li>
                    <li>
                        <div class="sup_ulImg">

                        </div>
                        <div class="sup_ulBox">
                            <p>特价机票</p>
                            <i>超值低价</i>
                        </div>
                    </li>
                    <li>
                        <div class="sup_ulImg">

                        </div>
                        <div class="sup_ulBox">
                            <p>特价机票</p>
                            <i>超值低价</i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    /* 出行超市 */
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
.sup_ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.sup_ul>li{
    width: 1.11rem;
    height: .65rem;
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    margin-bottom: .05rem;
}
.sup_ulImg{
    display: block;
    width: .32rem;
    height: .32rem;
    margin-left: .05rem;
}
.sup_ulImg{
    width: .32rem;
    height: .32rem;
    background: url(../../assets/place_sp.png)no-repeat;
    background-size: 2rem 2rem;
    background-position: -.94rem 0;
}
.sup_ulBox{
    margin-left: .05rem;
}
.sup_ulBox>p{
    display: block;
    font-size: .14rem;
    color: #222222;
}
.sup_ulBox>i{
    display: block;
    font-style: normal;
    font-size: .10rem;
    text-align: left;
    line-height: .16rem;
}
</style>