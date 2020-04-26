<template>
    <div class="content">
  <p class="fhbtn"><a href="mydoc_m.html"></a></p>
  <h1></h1>
  <div class="login-box">
    <p class="lsolid"></p>
    <div class="login">
      <router-link to="/Login">登录</router-link>
      <span></span>
      <router-link to="/Reg">注册</router-link>
    </div>
    <p class="rsolid"></p>
  </div>
  <ul>
    <li class="lifirst">
      <input type="text" value=""/>
      <span>帐号</span>
    </li>
    <li>
      <input type="text" value=""/>
      <span>密码</span>
    </li>
  </ul>
  <div class="footbox">
    <input type="button" value="注册" class="login-btn" @click="reg()"/>
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</div>
</template>
<script>
import axios from '../plugins/axios'
export default {
  
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      reg(){
          axios({
            url:'api/reg',
            method:'post',
            data:{
              username:this.username,
              password:this.password
            }
          }).then(
            alert('注册成功'),

            this.$router.replace('/Login')
          )
      }
    }
}
</script>
<style scoped>
     body{ background:#f2f4f5;}
    .content{ margin:0 auto;}
    .content .fhbtn{ padding-top:0.27rem;}
    .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
    .content h1{width:7.18rem;height:5.35rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
    .content .login{width:7.0rem;height:2.38rem; margin:0 auto; margin-top:0.85rem;}
    .login a{width:2.97rem;height:2.38rem; font-size:1.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:1.38rem; border-left:1px solid #4c4f50; }
    .content .login-box{ position:relative;}
    .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .content ul{width:23.78rem;height:7.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    .content ul li{height:3.95rem; position:relative;}
    .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .content ul li input{ padding-left:1.24rem;width:17.54rem;height:100%; font-size:1.4rem;}
    .content ul li span{width:3.23rem;height:3.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.9rem; line-height:3.49rem; text-align:center;}
    .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .content .login-btn{margin-left: -8rem; width:20.65rem;height:2.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:1rem; font-size:1rem;}
    .content .tishi{width:5.4rem; font-size:1rem; margin-top:0.28rem; display:block;margin-left: -8rem}
</style>