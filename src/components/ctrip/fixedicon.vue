<template>
<div>
    <div class="fixed_icon">
        <div class="iconT">
            <span class="fixed_iconT"></span>
        </div>
        <div class="iconX">
            <span class="fixed_iconX"></span>
        </div>
    </div>
</div>
</template>


<script>
export default {

}
</script>



<style scoped>
.iconT{
    width: .35rem;
    height: .35rem;
    background: #fff;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: .1rem;
    top: 5rem;
}
.fixed_iconT{
    display: block;
    width: .3rem;
    height: .3rem;
    background: url(../../assets/love.png)no-repeat center;
    background-size: 60% 60%;
}
.iconX{
    width: .35rem;
    height: .35rem;
    background: #fff;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: .1rem;
    top: 5.5rem;
}
.fixed_iconX{
    display: block;
    width: .3rem;
    height: .3rem;
    background: url(../../assets/jiao.png)no-repeat center;
    background-size: 60% 60%;
}
</style>