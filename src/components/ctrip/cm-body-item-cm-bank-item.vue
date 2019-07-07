<template>
<div>
    <div class="cm-bank-item" v-for="items in ctripdata">
        <div class="cm-bank-left">
          <i class="tips_picone"></i>
          <span class="tips_txt">{{items.title}}</span>
          <span class="tips_saletone">{{items.saletone}}</span>
        </div>
        <div class="cm-bank-right">
          <span class="tit">{{items.tit}}</span>
          <em class="num">{{items.hour}}</em>
          <span>:</span>
          <em class="num">{{items.minute}}</em>
          <span>:</span>
          <em class="num">{{items.second}}</em>
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
    props:["ctripdata"]
}
</script>


<style scoped>
.cm-bank-item{
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    margin-top: .08rem;
}
.cm-bank-left{
    display: flex;
    height: .48rem;
    align-items: center;
    padding-left: .15rem; 
}
.tips_picone{
    background:url(../../assets/icon1.png)no-repeat;
    display:block;
    height: .19rem;
    width: .19rem;
    background-size: .19rem auto;
    margin-bottom: -.03rem;
    margin-right: .03rem;
}
.tips_saletone{
    color: #999;
    font-size: .12rem;
    line-height: .12rem;
    padding-left: .02rem;
    padding-right: .03rem;
    vertical-align: middle;
    display: block;
    margin-top: .06rem;
}
.tips_txt{
    display: block;
    font-size: .17rem;
    font-weight: 600;
    color: #ff4646;
}
.cm-bank-right{
    display: flex;
    align-items: center;
    padding-right: .1rem;
    position: relative;
}
.cm-bank-right>span{
    display: block;
    font-size:.12rem;
}
.tit{
    display: block;
    font-size: .24rem;
    color: #333;
    line-height: .26rem;
    font-weight: 400;
    margin-right: .06rem;
    margin-top: .02rem;
}
.num {
    display: block;
    font-style: normal;
    background-color: #666;
    border-radius: .03rem;
    width: .15rem;
    height: .15rem;
    line-height: .15rem;
    color: #fff;
    text-align: center;
    font-size: .12rem;
    margin: 0 .02rem;
}
</style>