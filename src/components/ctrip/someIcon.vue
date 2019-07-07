<template>
    <div class="someIcon">
      <div class="cm-banks-item">
        <div class="cm-bank-left">
          <i class="tips_pic"></i>
          <span class="tips_txt">热门目的地</span>
        </div>
      </div>
      <div class="hostedItem">
        <div class="hostItemWrap" v-for="items in ctripdata">
          <a href>
            <span>{{items}}</span>
          </a>
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
    props:["ctripdata"],
}
</script>



<style scoped>
    .cm-banks-item{
    display: flex;
    justify-content: space-between;
    background: #ffffff;
}
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
    padding-left: .1rem; 
}
.tips_pic{
    background:url(../../assets/icon2.png)no-repeat;
    display:block;
    height: .19rem;
    width: .19rem;
    background-size: .19rem auto;
    margin-bottom: -.03rem;
    margin-right: .03rem;
}
.tips_txt{
    display: block;
    font-size: .17rem;
    font-weight: 600;
    color: #ff4646;
}
.hostedItem{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 0 .15rem .1rem;
    flex-wrap: wrap;
    margin-bottom: .1rem;
}
.hostItemWrap>a{
    display: block;
    width: 0.8rem;
    height: .3rem;
    line-height: .3rem;
    background: #f7f7f7;
    border-radius: .15rem;
    font-size: .12rem;
    text-align: center;
    color: #333;
    margin-top: .1rem;
}
</style>