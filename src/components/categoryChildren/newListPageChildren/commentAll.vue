<template>
    <div class="commentAll">
        <ul>
        <li v-for="item in commentAll" :key="item.username">
        <div class="li-left">
        <img :src="item.logoImg" class="li-left-img"/>
        </div>
     <div class="li-right">
        <p class="li-right-header">
        <span>{{item.username}}</span>
        <span class="star">{{item.star}}</span>
        </p>
        <p class="li-right-center">
        <span>加入E宠{{item.date}}天</span>
        <span class="v-level">V{{item.level}}</span>
        </p>
        <p class="li-right-bottom">
        <span>{{item.comment}}</span>
        <b :class="{showimg:boolImg(item.bool)}"><img :src="item.bigImg"/></b>
        </p>
    </div>
    </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: "commentAll",
  data() {
    return {
      commentAll: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getcomentAll();
    });
  },
  methods: {
    getcomentAll() {
      this.commentAll = JSON.parse(
        window.sessionStorage.getItem("get-detail-comment")
      );
      console.log(this.commentAll[0].bool);
    },
    boolImg(item){
    return item==="true" ?1:0;
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #dedede;
  padding: 4vw 0;
  font-size: 1.6vw;
}
.li-left {
  width: 5vw;
  padding-right: 4vw;
}
.li-left-img {
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
}
.li-right {
  flex: 1;
  &-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .star {
      color: red;
    }
  }
  &-center {
    display: flex;
    justify-content: space-between;
    padding: 1vw 0;
    .v-level {
      color: red;
      padding-right: 2vw;
    }
  }
  .li-right-bottom{
      display: flex;
      flex-direction: column;
  b {
    padding:2vw 0;
    height: 15vw;
    width: 12vw;
    display: none;
    img{
        height:15vw;
        width:12vw;
    }
  }
  .showimg{
      display: block;
  }
  }
}
</style>
