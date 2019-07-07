<template>
    <div>
        <div class="place_whiteWrap">
        <div class="place_top">
            <span>经典行程</span>
            <a href="">
                <div class="c-listinnerwrap">
                    <div class="c-textview">
                        <p class="specital_txt">日本名古屋5日自由行·网红摘草blue＇dge 空中酒吧 在城市之上享受温情浪漫|人气名古屋4晚连住|战国三雄故乡 游日本中部高山古街 走进白川乡秘境|享受一份江户时代流传下来的闲适与细致
                        </p>
                        <ul class="c-ul">
                            <li>经典</li>
                            <li>城市观光</li>
                            <li>泡吧</li>
                            <li>秋游</li>
                            <li>城市</li>
                        </ul>
                        <i class="c-i">共2天，15个景点</i>
                    </div>
                    <div class="c-imgbox">
                        <img src="https://dimg02.c-ctrip.com/images/fd/tg/g2/M05/87/D9/Cghzf1WwsVWAFjE2ACqTKYbSfPQ625_D_220_150.jpg" alt="">
                    </div>
                </div>
            </a>
            <a href="">
                <div class="c-listinnerwrap">
                    <div class="c-textview">
                        <p class="specital_txt">日本名古屋5日自由行·网红摘草blue＇dge 空中酒吧 在城市之上享受温情浪漫|人气名古屋4晚连住|战国三雄故乡 游日本中部高山古街 走进白川乡秘境|享受一份江户时代流传下来的闲适与细致
                        </p>
                        <ul class="c-ul">
                            <li>经典</li>
                            <li>城市观光</li>
                            <li>泡吧</li>
                            <li>秋游</li>
                            <li>城市</li>
                        </ul>
                        <i class="c-i">共2天，15个景点</i>
                    </div>
                    <div class="c-imgbox">
                        <img src="https://dimg02.c-ctrip.com/images/fd/tg/g2/M05/87/D9/Cghzf1WwsVWAFjE2ACqTKYbSfPQ625_D_220_150.jpg" alt="">
                    </div>
                </div>
            </a>
        </div>
        <div class="place_bottom">
            <a href="">查看全部行程</a>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
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

  /* 经典行程 */
.c-listinnerwrap{
    display: flex;
    margin-bottom: .1rem;
}
.c-ul{
    display: flex;
    margin-left: .05rem;
}
.c-ul>li{
    display: block;
    font-size: .10rem;
    border: 1px solid #4cb7f9;
    margin: 0 .05rem .05rem 0;
    color: #4cb7f9;
    padding: .02rem;
}
.c-i{
    display: block;
    font-style: normal;
    font-size: .12rem;
    text-align: left;
    margin-left: .05rem;
    color: #a3a8ab;
}
.c-imgbox {
    margin: 0 0 0 .12rem;
    width: 1.1rem;
    height: .85rem;
}
.c-imgbox > img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-size: 50% auto;
}
.specital_txt {
    display: block;
    font-size: .15rem;
    line-height: .16rem;
    height: 0.16rem;
    width: 2.3rem;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin: 0 auto;
    color: #222;
    margin: 0 0 .08rem;
    margin-left: -.08rem;
    margin-top: .15rem;
}
  
</style>