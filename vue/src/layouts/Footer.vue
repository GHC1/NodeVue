<template>
    <div id="Footer" class="foot-btn" v-show="this.$store.state.footer">
        <ul>
            <router-link to="/Home">
                <li class="home"><a href="javascript:;"></a></li>
            </router-link>
            <router-link to="">
                <li class="write"><a href="javascript:;"></a></li>
            </router-link>
            <router-link to="/Mine">
                <li class="my"><a href="javascript:;"></a></li>
            </router-link>
            
        </ul>
    </div>
</template>
<script>
// import {mapState} from '../plugins/vuex'
export default {
    computed:{
        // ...mapState(['footer','header'])
    }
}
</script>
<style>
  .foot-btn{width:100%;height:3.2rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:15.4rem; margin:0 auto; height: 100%; line-height: 3.2rem}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;}
  .foot-btn ul .home{width:1.8rem;height:2.6rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
  .foot-btn ul .write{width:3rem;height:3rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:4rem;}
  .foot-btn ul .my{width:1.8rem;height:2.9rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:4rem; margin-top:0.07rem;}
</style>