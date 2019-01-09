<template>
    <div class="selectList">
           <ul class="normalList" @click="back">
               <li>{{list[0]}}</li>
               <li>{{list[1]}}</li>
               <li>{{list[2]}}</li>
               <li>{{list[3]}}</li>
           </ul>
    </div>
</template>

<script>
export default {
  name: "selectList",
  data() {
    return {
      list: ["默认排序", "按人气", "最新上架", "按评论"]
    };
  },
  methods: {
    back(e) {
       this.$router.push({
           name:'newlistpage',
           path:'/newlistpage',
           params:{
               title:e.target.innerText
           }
       })
    }
  }
};
</script>

<style lang="scss" scoped>
.selectList {
  height: 40vw;
  width: 100%;
  display: flex;
  position: absolute;
  background: white;
  z-index: 999;
  .normalList {
    width: 100%;
    li {
      height: 10vw;
      line-height: 10vw;
      width: 100%;
      border-bottom: 0.1vw solid #dedede;
      padding-left: 5vw;
    }
  }
}
</style>
