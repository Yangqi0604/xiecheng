<template>
        <div class="cm-page-wrap">
        <div class="cm-page">
            <ul class="homeListCard">
                <li class="btnGoWallet">
                    <i class="btnGoWallet_pic"></i>
                    <span class="walLent">钱包</span>
                    <a>
                        <i>礼品卡</i>
                        <i>现金</i>
                        <i>返现</i>
                    </a>
                </li>
                <div class="cm_page_bt">
                    <li class="btnPromocode border">
                        <i class="homeGoWallet_pic"></i>
                        <span class="walLent">钱包</span>
                        <a>
                            <i>领券</i>
                        </a>
                    </li>
                    <li class="btnPromocode border">
                        <i class="homeGoWallet_pic"></i>
                        <span class="walLent">积分</span>
                        <a>
                            <i>兑好礼</i>
                        </a>
                    </li>
                    <li class="btnPromocode border">
                        <i class="homeGoWallet_pic"></i>
                        <span class="walLent">拿去花</span>
                        <a>
                            <i>分期付款</i>
                        </a>
                    </li>
                </div>

            </ul>

            <!-- 列表 信息-->
            <ul class="home_list">
                <li class="home_list-msg">
                    <span class="list_left">常用信息</span>
                    <span class="list_right">
                        旅客/地址/发票抬头
                        <i class="list_pic"></i>
                    </span>
                </li>
                <li class="home_list-msg">
                    <span class="list_left">我的收藏</span>
                    <span class="list_right">
                        降价产品有提醒
                        <i class="list_pic"></i>
                    </span>
                </li>
                <li class="home_list-msg">
                    <span class="list_left">浏览历史</span>
                    <span class="list_right">
                        近15天访问记录
                        <i class="list_pic"></i>
                    </span>
                </li>
                <li class="home_list-msg">
                    <span class="list_left">我要合作</span>
                    <span class="list_right">
                        供应商加盟/代理合作
                        <i class="list_pic"></i>
                    </span>
                </li>
            </ul>
            <ul class="last_list">
                <li class="home_list-msg">
                    <span class="list_left">出行工具</span>
                    <span class="list_right">
                            航班动态/翻译助手等
                        <i class="list_pic"></i>
                    </span>
                </li>
            </ul>



        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
    .search-destination-head {
    height: 1.56rem;
    background: url(../../assets/photo_myctrip@2x_6.22.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.homeHeaderLogin {
    height: .44rem;
    display: flex;
    justify-content: space-between;
}

.header_leftIcon {
    display: block;
    width: .44rem;
    height: .44rem;
    background: url(../../assets/back.png)no-repeat center;
    background-size: 80% 80%;
}

.header_RightIcon {
    display: block;
    width: .44rem;
    height: .44rem;
    background: url(../../assets/msg.png)no-repeat center;
    background-size: 60% 60%;
}

.homeHeaderSp>span {
    display: block;
    margin-top: .2rem;
    line-height: .44rem;
    text-align: center;
    font: .18rem/1 Microsoft Yahei;
    color: #fff;
}

.home_btn {
    width: 1.2rem;
    height: .36rem;
    text-align: center;
    font-size: .15rem;
    color: #fff;
    border-radius: .5rem;
    background-color: #ff9a14;
    -webkit-tap-highlight-color: #ff9a14;
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.homeHeaderBtn {
    position: absolute;
    left: .55rem;
    top: .2rem;
}


.homeListCard {
    background: #fff;
    margin-top: 1.1rem;
}

.homeListCard>.btnGoWallet {
    height: .43rem;
    position: relative;
    background: #fff;
    padding: .15rem .1rem .2rem .45rem;
    border-bottom: 1px solid #cccccc;
}

.btnGoWallet_pic {
    background: url(../../assets/un_home_mobile_7.4@2x.png) no-repeat;
    background-size: .44rem auto;
    background-position: 0 -.4rem;
    display: block;
    width: .2rem;
    height: .2rem;
    vertical-align: middle;
    position: absolute;
    left: .23rem;
    top: .17rem;
}

.walLent {
    display: block;
    font-size: .15rem;
    color: #333333;
    margin-left: .1rem;
}

.btnGoWallet>a {
    display: flex;
}

.btnGoWallet>a>i {
    font-size: .13rem;
    font-style: normal;
    margin-right: .1rem;
    line-height: .4rem;
}

.cm_page_bt {
    display: flex;
    margin-bottom: .1rem;
}

.btnPromocode {
    display: block;
    margin: 0;
    padding: .14rem 0 0;
    height: .73rem;
    width: 33.33%;
    text-align: center;
    font-size: .15rem;
    line-height: 1;
    box-sizing: border-box;
    border-bottom: 1px solid #cccccc;
}

.border {
    border-right: 1px solid #cccccc;
    position: relative;
}

.btnPromocode>a {
    display: flex;
}

.btnPromocode>a>i {
    display: block;
    margin: .06rem auto;
    font-size: .13rem;
    font-style: normal;
    line-height: .3rem;
    color: #999999;
}

.homeGoWallet_pic {
    background: url(../../assets/un_home_mobile_7.4@2x.png) no-repeat;
    background-size: .44rem auto;
    background-position: 0 -.6rem;
    display: block;
    width: .2rem;
    height: .2rem;
    vertical-align: middle;
    position: absolute;
    left: .21rem;
    top: .11rem;
}



.home_list-msg {
    display: flex;
    height: .49rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 .25rem 0 .2rem;
    background: #fff;
    position: relative;
    border-bottom: .01rem solid #efefefef;
}

.list_left {
    display: block;
    font-size: .16rem;
}
.list_right {
    display: block;
    font-size: .14rem;
    color: #999999
}
.list_pic:after{
    position: absolute;
    right: .1rem;
    top: 50%;
    display: inline-block;
    content: "";
    width: .07rem;
    height: .07rem;
    border: solid #999;
    border-width: .01rem .01rem 0 0;
    -webkit-transform: translate(0, -50%) rotate(45deg);
    transform: translate(0, -50%) rotate(45deg);
}
.last_list{
    margin-top: .1rem;
}
</style>