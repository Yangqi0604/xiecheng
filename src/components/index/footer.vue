<template>
<div>
    <div id="footer">
        <ul>
            <router-link v-for="(items,index) in ctripdata"
             :to="items.path"
              tag="li">
                <img :src=items.pic alt="">
                <p>{{items.p}}</p>
            </router-link>
        </ul>
    </div>
</div>
</template>


<script>
export default {
    data() {
        return {
            ctripdata: [
                {
                    pic: "img/icon1.png",
                    p: "首页",
                    path:"/index"
                },
                {
                    pic: "img/icon2.png",
                    p: "列表",
                    path:"/ctrip"
                }
            ]
        }
    },
    // props:["ctripdata"],
}
</script>


<style scoped>
/* 底部导航条 */

#footer {
    width: 100%;
    /* position: fixed; */
    bottom: 0;
    background: #ffffff;
    z-index: 9999;
    height: .48rem;
}

#footer>ul {
    width: 100%;
    display: flex;
}

#footer>ul>li {
    width: 25%;
    text-align: center;
    padding-top: .07rem;
}

#footer>ul>li>img {
    width: .2rem;
    height: .2rem;
    margin: 0 auto;
}

#footer>ul>li>p {
    display: block;
    font-size: 10px;
    margin: 5px 0 5px;
}
</style>