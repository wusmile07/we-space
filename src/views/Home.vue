<template>
  <div class="index">
    <div class="box">
      <img src="../assets/addert.png">
      <p>西安</p>
      <span class="jian">空间</span>
    </div>
    <div class="boxs">
    <el-carousel height="4.06rem">
      <el-carousel-item  v-for="(item, index) in img" :key="index">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
    <div class="xiu">
      <div class="zhu">
        <img src="../assets/xiu1.png">
        <p>0-1装修</p>
      </div>
      <div class="zhu">
        <img src="../assets/xiu2.png">
        <p>预估报价</p>
      </div>
      <div class="zhu">
        <img src="../assets/xiu3.png">
        <p>设计师</p>
      </div>
      <div class="zhu">
        <img src="../assets/xiu4.png">
        <p>整装案例</p>
      </div>
    </div>
    <div class="today">
      <span class="day">今日推荐</span>
      <div class="select">
        <span>推荐</span>
        <img src="../assets/down.png">
      </div>
    </div>
    <div class="watch">
      <img src="../assets/watch.png">
    </div>
    <div class="watch">
      <img src="../assets/desk.png">
    </div>
    </div>
    <div class="tab">
      <router-link :to="{ name: 'home' }" >
        <img v-if="$route.name==='home'" src="../assets/home.png">
        <img v-else src="../assets/bluehome.png">
        <span>首页</span>
      </router-link>
      <router-link :to="{ name: 'index' }">
        <img v-if="$route.name==='index'" src="../assets/liu.png">
        <img v-else src="../assets/bluexiu.png">
        <span>装修</span>
      </router-link>
      <router-link :to="{ name: 'shop' }">
        <img  v-if="$route.name==='shop'" src="../assets/blueshop.png">
        <img  v-else src="../assets/shop.png">
        <span>商城</span>
      </router-link>
      <router-link :to="{ name: 'user' }">
        <img v-if="$route.name==='user'" src="../assets/bluemy.png">
        <img v-else src="../assets/my.png">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        img: [{
          src: require('../assets/kong.png'),
        },
          {
            src: require('../assets/kong1.png'),
          },
          {
            src: require('../assets/kong.png'),
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    width: 6.68rem;
    margin: 0 auto;
    height: 1rem;
    /*background: yellow;*/
    display: flex;
    img{
      display: block;
      margin-top: .4rem;
      margin-left: .6rem;
      height: .14rem;
    }
    p{
      font-size: .26rem;
      margin-left: .1rem;
      line-height: .5rem;
    }
    .jian{
      font-size: .36rem;
      margin-left: 2.25rem;
      line-height: 1rem;
      font-weight:600;
      color:rgba(62,54,45,1);
    }
  }
  .boxs{
    width: 100%;
    height:11rem;
    overflow-y: auto;
  }
  .xiu{
    width: 6.68rem;
    height:1.3rem;
    /*background: yellow;*/
    margin: .39rem auto;
    display: flex;
    justify-content: space-between;
    .zhu{
      width: 1.2rem;
      height: 1.3rem;
      /*background: red;*/
      img{
        display: block;
        width: .56rem;
        height: .56rem;
        margin: 0 auto;
      }
      p{
        font-size: .26rem;
        margin-top: .23rem;
        text-align: center;
        color:rgba(139,139,139,1);
      }
    }
  }
  .today{
    width: 6.68rem;
    height: .5rem;
    /*background: rosybrown;*/
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .day{
      width: 1.2rem;
      font-size: .3rem;
      line-height: .5rem;
    }
    .select{
      width: 1rem;
      height: .5rem;
      /*background: red;*/
      display: flex;
      justify-content: space-between;
      span{
        font-size: .24rem;
        color:rgba(123,123,123,1);
        line-height: .5rem;
      }
      img{
        display: block;
        margin-top: .2rem;
        width: .21rem;
        height: .13rem;
      }
    }
  }
  .watch{
    width: 6.68rem;
    height: 3.18rem;
    /*background: rosybrown;*/
    margin: .3rem auto;
    img{
      width: 6.68rem;
      height: 3.18rem;
    }
  }
  .tab{
    width: 100%;
    height:1rem;
    background: white;
    /*background: yellow;*/
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a{
      width: .5rem;
      height: .9rem;
      margin: .08rem .65rem;
      text-decoration: none;
      /*background: rosybrown;*/
      img{
        width: .5rem;
        height: .5rem;
      }
      img.active{
        width: .5rem;
        height: .5rem;
      }
      span{
        font-size: .2rem;
      }
    }
  }
</style>