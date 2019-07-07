<template>
<div class="place_whiteWrap">
    <div class="place_top">
        <span>当地问答</span>
        <dl class="question">
            <dt>
                    外滩最佳观夜景时间是几点到几点？
                </dt>
            <dd>
                大约晚上十点之后吧！人少，真正悠闲散步的人才出来，更晚灯红酒绿的人也还没出来，正好。如果你的想法是捡尸，那就12点过后再来转转吧！
            </dd>
        </dl>
        <dl class="question">
            <dt>
                    浦东有哪些景点、好玩的地方
                </dt>
            <dd>
                滴水湖，野生动物园，周浦花海，迪士尼乐园，世博园，上海科技馆，世纪公园，上海海洋水族馆，东方明珠，东方艺术中心，新国际博览中心，世贸观光厅，昌里路小吃街，小上海步行街等等，希望对您有帮助吧！
            </dd>
        </dl>
    </div>
    <div class="place_bottom">
        <a href="">查看全部攻略</a>
    </div>
</div>
</template>


<script>
export default {

}
</script>


<style scoped>
/* 当地问答 */
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

.question {
    margin-bottom: .15rem;
}

.question>dt {
    padding-left: .2rem;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: .15rem;
    text-align: left;
    margin-bottom: .05rem;
}

.question>dt:before {
    content: "";
    background: #000;
    width: .16rem;
    height: .16rem;
    position: absolute;
    left: 0px;
    top: 0px;
    background: url(https://pages.c-ctrip.com/you/place/place_sp.png?v=20190530_19_25) no-repeat;
    background-size: 2rem 2rem;
    background-position: -1.84rem 0px;
}

.question>dd {
    padding-left: .15rem;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: .15rem;
}

.question>dd:before {
    content: "";
    background: #000;
    width: .16rem;
    height: .16rem;
    position: absolute;
    left: 0;
    top: .03rem;
    background: url(https://pages.c-ctrip.com/you/place/place_sp.png?v=20190530_19_25) no-repeat;
    background-size: 2rem 2rem;
    background-position: -1.68rem 0;
}
</style>