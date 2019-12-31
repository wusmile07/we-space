<template>
  <div class="home">
   <div class="arrow">
      <img src="../assets/arrow.png">
     <p>0-1装修</p>
    </div>
    <div class="navs">
    <div class="nav">
      <div class="banner">
          <img src="../assets/liucheng-2.png">
        <p @click="bed">流程悉知</p>
      </div>
      <div class="banner">
        <img src="../assets/huashudaquan.png">
        <p>避坑大全</p>
      </div>
      <div class="banner">
        <img src="../assets/guihua.png">
        <p>动线布局</p>
      </div>
      <div class="banner">
        <img src="../assets/j.png">
        <p>收纳规划</p>
      </div>
      <div class="banner">
        <img src="../assets/shou.png">
        <p>居住智慧</p>
      </div>
    </div>
  </div>
    <div class="content">
      <p>装修前必看秘籍</p>
      <div class="picture">
        <img src="../assets/tu.png">
        <div class="right">
          <span>必读装修流程</span>
          <p>53467人收藏</p>
        </div>
      </div>
      <div class="picture">
        <img src="../assets/gong.png">
        <div class="right">
          <span>老方拆旧与翻新，牢记这10点注意事项</span>
          <p>5334人收藏</p>
        </div>
      </div>
    </div>
    <div class="content">
      <p>拆除工程</p>
      <div class="picture">
        <img src="../assets/tool.png">
        <div class="right">
          <span>必读装修流程</span>
          <p>53467人收藏</p>
        </div>
      </div>
      <div class="picture">
        <img src="../assets/rerdering.png">
        <div class="right">
          <span>老方拆旧与翻新，牢记这10点注意事项</span>
          <p>5334人收藏</p>
        </div>
      </div>
    </div>
    <div class="content">
      <p>主材选购</p>
      <div class="picture">
        <img src="../assets/coating.png">
        <div class="right">
          <span>网购主材避坑，看完给你省一大笔钱</span>
          <p>1770人收藏</p>
        </div>
      </div>
      <div class="picture">
      <img src="../assets/stell.png">
      <div class="right">
        <span>不想耽误工期，先牢记7大主材进场顺序</span>
        <p>14211人收藏</p>
      </div>
    </div>
      <div class="picture">
        <img src="../assets/cabinet.png">
        <div class="right">
          <span>搞清主材购买时间，装修不留空窗期</span>
          <p>11810人收藏</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    methods:{
      bed(){
        this.$router.push({
          name: 'about'
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .arrow{
    width: 100%;
    height:.8rem;
    background: gainsboro;
    display: flex;
    justify-content: space-between;
    img{
      width: .22rem;
      height: .29rem;
      margin: .2rem .2rem;
    }
  }
  .arrow p{
    font-size:.32rem;
    line-height: .2rem;
    padding-right:3rem;
    font-weight:600;
  }
  .navs{
    width: 100%;
    overflow-x: auto;
  }
.nav{
  width: .8rem;
  height: 1.5rem;
  margin-top: .57rem;
  display:flex;
  justify-content: space-between;
  .banner{
    width: 1.2rem;
    height: 1.5rem;
    padding-left: .4rem;
    margin-right: .72rem;
    img{
      display: block;
      width:.6rem;
      margin:.22rem .22rem;
    }
    p{
      font-size: .24rem;
      text-align: center;
    }
  }
}
  .content{
    background:rgba(255,255,255,1);
    box-shadow:0px 9px 18px 0px rgba(192,192,192,0.32);
    p{
      margin: .2rem .4rem;
      font-size:.28rem;
      font-weight:600;
      color:rgba(15,15,15,1);
    }
    .picture{
      /*width: 100%;*/
      height: 1.04rem;
      padding-bottom: .3rem;
      /*background: aqua;*/
      display: flex;
      img{
        width: 1.44rem;
        margin-left: .4rem;
      }
      .right{
        flex: 1;
        span{
          display: block;
          font-size:.26rem;
          margin-top: .14rem;
          padding-left: .72rem;
        }
        p{
          font-size:.2rem;
          padding-left: .6rem;
          color: gray;
        }
      }
    }
  }
</style>