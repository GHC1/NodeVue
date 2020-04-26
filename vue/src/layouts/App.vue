<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>
     <!-- <Home></Home> -->
    <Footer></Footer>
    <Loging></Loging>
   
  </div>
</template>

<script>
import Header from './Header'
// import Home from '../pages/Home'
import Footer from './Footer'
import Loging from '../components/loging'
// import vm from '../main'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loging
    // Home
  },
  methods:{
  },
  watch:{
    $route:{
      handler(nextValue){
          console.log('路由变化了',nextValue);
          let path = nextValue.path
          if(/Home|Column|Attention/.test(path)){
            this.$store.commit("getfooter",true)
            this.$store.commit("getheader",true)
            // this.$root.footer=true,
            // this.$root.header=true
          }else if(path.includes('/Mine')){
            this.$store.commit("getheader",false)
            // this.$root.header = false
            // this.$root.header=true
          }else if(/login|reg|Details/.test(path)){
            this.$store.commit("getheader",false);
            this.$store.commit("getfooter",false)            
            // this.$root.header = false,
            // this.$root.footer = false
          }

      },
          immediate:true
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
