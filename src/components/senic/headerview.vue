<template>
<div>
    <div class="search-destination-head" v-show="flag">
        <div class="homeHeaderLogin">
            <i class="header_leftIcon" @click="handleclick"></i>
            <span class="header_middle">
                <i class="leftIcon_one"></i>
                <i class="more_sp">打开APP查看更多精彩</i>
            </span>
            <i class="header_RightIcon">去看看</i>
        </div>
    </div>
</div>
</template>


<script>
export default {
    data() {
        return {
            flag:true
        }
    },
    methods: {
        handleclick(){
            this.flag=!this.flag;
        }
    },
}
</script>



<style scoped>
    
/* 头部的打开APP */
.header{
    position: relative;
}
.search-destination-head {
    background: #E8F2F9;
    position: relative;
}

.homeHeaderLogin {
    height: .5rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between */
    padding: 0 .1rem
}

.header_leftIcon {
    display: block;
    width: .44rem;
    height: .44rem;
    background: url(../../assets/close.png)no-repeat center;
    background-size: 30% 30%;
}

.header_RightIcon {
    width: .66rem;
    height: .3rem;
    line-height: .3rem;
    font-family: PingFangSC-Medium;
    font-size: .14rem;
    font-style: normal;
    color: #FFF;
    text-align: center;
    background: #2094F5;
    box-shadow: 0 .02rem .08rem 0 rgba(32, 148, 245, .2);
    border-radius: .5rem;
    margin: 0 .1rem 0 0;
    margin-left: .3rem;
}

.header_middle {
    display: flex;
    align-items: center;
}

.leftIcon_one {
    display: block;
    width: .38rem;
    height: .38rem;
    background: url(../../assets/ic_logo.png)no-repeat center;
    background-size: cover;
    margin-left: 0;
}

.more_sp {
    display: block;
    font-size: .16rem;
    font-style: normal;
}

</style>