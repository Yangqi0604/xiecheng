<template>
<div>
    <div class="moreListButton">
        <p class="moreListP">
            更多推荐
            <i class="sale_iconfont"></i>
        </p>
    </div>
</div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    .moreListButton{
    height: .5rem;
    line-height: .5rem;
    text-align: center;
}
.moreListP{
    font-size: .14rem;
    color: #19a0f0;
    height: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sale_iconfont{
    display: block;
    background: url(../../assets/更多.png) no-repeat;
    width: .16rem;
    height: .16rem;
    background-size: cover;
    margin-left: .05rem;
}
</style>