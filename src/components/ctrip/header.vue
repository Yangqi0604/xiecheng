<template>
<div class="headerview">
    <div class="search-destination-head">
        <span class="sale-go-back">
        <i class="sale-back-icon">
          <img src="../../assets/goback.png" alt>
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
    </div>
</div>
</template>



<script>
export default {
    data() {
        return {

        }
    },
};
</script>





<style>
/* 头部导航 */

.headerview {
    width: 100%;
    height: .44rem;
    /* position: fixed; */
    background: #ffffff;
    z-index: 999;
}

.search-destination-head {
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
    width: .35rem;
    height: .35rem;
    display: block;
    position: absolute;
    top: .04rem;
}

.search-destination-main {
    float: left;
    width: 90%;
    height: .44rem;
}

.search-destination-main {
    width: 3.376rem;
    height: .32rem;
    border-radius: .22rem;
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
}

.input_left>span {
    display: block;
    font-size: .14rem;
    text-align: center;
    line-height: .32rem;
    margin-left: .1rem;
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
    background: url(../../assets/spe_sou.png) no-repeat!important;
    background-size: .13rem auto!important;
    content: "";
    width: .13rem!important;
    height: .13rem!important;
    background-position: 0 0!important;
    position: absolute;
    top: -.19rem;
    left: .72rem;
}

.search-destination-keywords {
    display: block;
    height: .3rem;
    padding: 0;
    font-size: .14rem;
    line-height: .3rem;
    vertical-align: middle;
    color: #999;
    width: 2rem;
    ;
    border: 0;
    background: 0 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-appearance: none;
    border-radius: 0;
    position: absolute;
    left: .97rem;
    top: -.27rem;
}
</style>