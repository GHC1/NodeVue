<template>
   
        <div id="list" class="cell" @click="skip()">
            <h2>
                <span v-show="index!=null">{{index + 1}} . </span>
                <span>{{data.title}}</span>
            </h2>
            <p>{{data.intro}}</p>
        </div>
   
    
</template>
<script>
export default {
  name:'list',
    props:{
      data:{
        type:Object,
        required:true,
        default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
          //...
          return {}
        }
      },
      index:{
        type:Number,
        default:null
      }
    },
    methods:{
        skip(){
            // console.log(this.data.title)
            // this.$router.push('/Details')
            this.$router.push(`/Details?_id=${this.data._id}&nikename=${this.data.nikename}`)
        },
        
    },
    // mounted(){
    //   console.log(this.data.nikename,"nikename")
    // }
}
</script>
<style scoped>
  .cell { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;height:auto}
  .cell h2{max-height:1.5rem; font-size:1rem; overflow:hidden;text-align: left;margin-top: 0.5rem}
  .cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;text-align: left;margin-bottom: 0.5rem;margin-top: 0.5rem}
  .cell{clear: both;/* margin-bottom:1rem; */}
</style>