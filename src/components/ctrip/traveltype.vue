<template>
    <div class="traveltype">
      <a href class="traveltype_sq" v-for="items in ctripdata">
        <i></i>
        <span>{{items}}</span>
      </a>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    props:["ctripdata"],
}
</script>


<style scoped>
    .traveltype{
    width: 100%;
    display: flex;
    height: 1.2rem;
    overflow-x: auto;
    background: #ffffff;
    /* align-items: center; */
    /* margin-top: .55rem; */
}
.traveltype_sq{
    width: .93rem;
    display: block;
    height: .66rem;
    text-align: center;
    flex-shrink: 0;
    margin-top: .2rem;
}
.traveltype_sq>i{
    background-image: url(../../assets/lv_2.png);
    display: block;
    width: .44rem;
    height: .44rem;
    background-size: .44rem auto;
    margin: 0 auto .05rem auto;
}
.traveltype>a:nth-child(2) i{
    background-image: url(../../assets/lv_1.png);
}
.traveltype>a:nth-child(3) i{
    background-image: url(../../assets/lv_4.png);
}
.traveltype>a:nth-child(4) i{
    background-image: url(../../assets/lv_10.png);
}
.traveltype>a:nth-child(5) i{
    background-image: url(../../assets/sales2-2.png);
}
.traveltype>a:nth-child(6) i{
    background-image: url(../../assets/sales2-3.png);
}
.traveltype>a:nth-child(7) i{
    background-image: url(../../assets/sales2-4.png);
}
.traveltype_sq>span{
    display: block;
    font-size: .12rem;
    color: #222;
}
</style>