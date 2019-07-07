<template>
    <div>
         <div class="header-nav">
        <ul>
            <li>
                <span class="icon-local-scenic"></span>
                <span class="icon-local-write">攻略·景点</span>
            </li>
            <li>
                <span class="icon-local-scenic"></span>
                <span class="icon-local-write">攻略·景点</span>
            </li>
            <li>
                <span class="icon-local-scenic"></span>
                <span class="icon-local-write">攻略·景点</span>
            </li>
            <li>
                <span class="icon-local-scenic"></span>
                <span class="icon-local-write">攻略·景点</span>
            </li>
        </ul>
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>



<style scoped>
    
/* 导航栏 */
.header-nav {
    z-index: 10;
    width: 100%;
    height: .6rem;
    background: #ffffff;
    margin-top: 1.4rem;
    padding: .04rem 0 .08rem;
}
.header-nav>ul {
    display: flex;
}

.header-nav>ul>li {
    text-align: center;
    flex: 1;
}
.icon-local-scenic {
    width: .4rem;
    height: .4rem;
    border-radius: 100%;
    background-image: url(../../assets/home-fivemain-sprite2x@v7.15.png);
    background-repeat: no-repeat;
    background-size: .4rem auto;
    display: block;
    margin: 0 auto;
}
.header-nav>ul>li:nth-child(2) .icon-local-scenic {
    background-position: 0 -.39rem;
}
.header-nav>ul>li:nth-child(3) .icon-local-scenic {
    background-position: 0 -.77rem;
}
.header-nav>ul>li:nth-child(4) .icon-local-scenic {
    background-position: 0 -1.18rem;
}
.header-nav>ul>li:nth-child(5) .icon-local-scenic {
    background-position: 0 -1.57rem;
}
.icon-local-write {
    display: block;
    font-size: .12rem;
    color: #222222;
}

</style>