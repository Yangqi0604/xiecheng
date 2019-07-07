<template>
    <div>
        <div class="headerview">
        <div class="search-destination-head">
            <div class="homeHeaderLogin">
                <i class="header_leftIcon"></i>
                <i class="header_RightIcon"></i>
            </div>
            <div class="homeHeaderSp">
                <span>登录携程，开启旅程</span>
            </div>
            <div class="homeHeaderBtn">
                <a class="home_btn home-btn-primary" @click="handleback">登录/注册</a>
                <a class="home_btn home-btn-primary" @click="clearcookie">退出登录</a>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    methods: {
        handleback(){
            this.$router.push('/login')
        },
        clearcookie(){
            this.$Cookie.delCookie("username",this.username,60);
        }
    },
}
</script>

<style scoped>
    /* 顶部 */
.search-destination-head {
    display: flex;
    height: 1.56rem;
    background: url(../../assets/photo_myctrip@2x_6.22.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
    justify-content: center;
}

.homeHeaderLogin {
    display: flex;
    width: 95%;
    height: .44rem;
    display: flex;
    top: 0;
    left: 0;
    justify-content: space-between;
    position: absolute;
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
    line-height: .44rem;
    text-align: center;
    font: .18rem/1 Microsoft Yahei;
    color: #fff;
}

.home_btn {
    width: 1.5rem;
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
    top: 1rem;
    display: flex;
    justify-content: center;
}
.homeHeaderBtn a{
    display: block;
    text-align: center;
    line-height: .3rem;
    width: 1rem;
    height: .3rem;
    margin-right: .1rem;
}

.homeListCard {
    background: #fff;
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

.btnGoWallet>el {
    display: flex;
}

.btnGoWallet>el>i {
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

.btnPromocode>el {
    display: flex;
}

.btnPromocode>el>i {
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