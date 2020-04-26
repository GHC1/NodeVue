<template>
  <div class="banner">
    <ul class="clearfix">
      <li><img :src="$baseUrl+data.banner" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房111</h2>
          <p>刘德华11 / 文</p>
        </div>
      </li>
      <li><img :src="$baseUrl+data.banner" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房2222</h2>
          <p>刘德华22 / 文</p>
        </div>
      </li>
      <li><img :src="$baseUrl+data.banner" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房333</h2>
          <p>刘德华33 / 文</p>
        </div>
      </li>
      <li><img :src="$baseUrl+data.banner" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房11111</h2>
          <p>刘德华11 / 文</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Swipe from '../assets/js/swipe.js'
// import $ from '../assets/js/jquery-1.7.2'
import $ from 'jquery';
  export default {
    name:'swiper',
    props:{
      data:{
        // type:Object
      },
      index:{
        // type:Number
      }
    },
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
      // console.log(Swipe,'123123')
      // js 控制 轮播图，计算横向长度=item*num
      
      new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
      
    },
    updated(){},
    methods:{}
  }
</script>

<style>
  /* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;} */
  .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1;width:25.4rem}
  .banner ul{width: 100rem}
  .banner ul li{width:20.4rem;float:left;position: relative;}
  .banner ul li img{width:100%; display:block;}
  .banner ul li .text-box{width:100%; padding:0 0.3rem;height:5.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
  .text-box h2{ font-size:1.3rem; font-weight:normal; margin-top:0.8rem;margin-left: -7rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
  .text-box p{ line-height:100%; text-align: left}
  
  .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
  .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
  .banner ol li.active{ background:#fff;}
</style>
