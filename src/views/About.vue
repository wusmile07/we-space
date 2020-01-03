<template>
  <div class="about">
    <div class="srow">
    <el-carousel height="4.06rem">
      <el-carousel-item  v-for="(item, index) in img" :key="index">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
    <div class="price">
      <strong>¥2260-9860</strong>
      <p>北欧实木床北美黑胡桃木床1.8米双人床现代简约主卧床婚床大床</p>
      <div class="expressage">
        <span>快递：0.00</span>
        <span>月销：23</span>
        <span >地址：广东佛山</span>
      </div>
    </div>
    <div class="discounts">
      <p>优惠</p>
      <span>满2999元减299满5999减899</span>
      <img src="../assets/right-arrow.png">
    </div>
    <div class="discounts">
      <p>保障</p>
      <span>假一赔十送装入户三年质保七天无理由退换</span>
      <img src="../assets/right-arrow.png">
    </div>
    <div class="discounts">
      <p>选择</p>
      <span>请选择尺寸、颜色</span>
      <img src="../assets/right-arrow.png">
    </div>
    <div class="shop">
      <a href="javascript：；">商品</a>
      <a href="javascript：；" >评价</a>
      <a href="javascript：；">详情</a>
      <a href="javascript：；">推荐</a>
      <img src="../assets/share.png" @click="s">
    </div>
    <div class="evaluate">
      <div class=" evaluates">
        <p>评价</p>
        <h5>300+</h5>
        <span>好评度 99%</span>
      </div>
      <div class="gray">
        <img src="../assets/liu.png">
        <div class="start">
          <span>woajinas</span>
          <img src="../assets/start.png">
        </div>
      </div>
      <div class="buy">买了两个月了，沙发非常满意，做工精致款式大方，跟家里装修风格特别配客服很耐心的讲解 ，赞一个。</div>
    </div>
    </div>
    <div class="tab">
     <router-link :to="{ name: 'shop' }">
      <img src="../assets/dianpu.png">
        <span>店铺</span>
     </router-link>
      <a href="javascript">
        <img src="../assets/kefu1.png">
        <span>客服</span>
      </a>
      <a href="javascript">
        <img src="../assets/shoucang-3.png">
        <span>收藏</span>
      </a>
        <button>加入购物车</button>
        <button class="promptly">立即购买</button>
    </div>
    <div class="fei" >
      <div class="go">
        <span>分享到</span>
        <div class="wei">
          <div class="peng">
            <img src="../assets/weixin-2.png">
            <span>微信好友</span>
          </div>
          <div class="peng">
            <img src="../assets/pengyouquan.png">
            <span>朋友圈</span>
          </div>
          <div class="peng">
            <img src="../assets/qq-copy.png">
            <span> QQ好友</span>
          </div>
          <div class="peng">
            <img src="../assets/qqkongjian-2.png">
            <span>QQ空间</span>
          </div>
          <div class="peng">
            <img src="../assets/unie61d.png">
            <span>微博</span>
          </div>
          <div class="peng">
            <img src="../assets/fuzhilianjie.png">
            <span>复制链接</span>
          </div>
          <div class="peng">
            <img src="../assets/tupian.png">
            <span>分享图片</span>
          </div>
        </div>
        <div class="xiao">
          <span>取消</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about',
    data() {
      return {
        img: [{
          src: require('../assets/bed.png'),
        },
          {
            src: require('../assets/bed.png'),
          },
          {
            src: require('../assets/bed.png'),
          }
        ],
      }
    },
    methods: {
      s(){
      }
    }
  }
  </script>




<style lang="scss" scoped>
  body{
    position: relative;
  }
  .srow{
    width: 100%;
    height:15rem;
    overflow-y: auto;
  }
  .price{
    width: 100%;
    height: 1.8rem;
    background: #FFF;
    /*background: aqua;*/
    strong{
      font-size:.6rem;
      margin: .4rem .4rem;
      color:rgba(238,50,0,1);
    }
    p{
        font-size: .26rem;
        margin-left: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .expressage{
      width: 100%;
      height: .4rem;
      /*background: rebeccapurple;*/
      display: flex;
      justify-content: space-between;
      span{
        width: 2rem;
        height: .4rem;
        font-size:.2rem;
        line-height: .4rem;
        margin-left: .4rem;
        color:rgba(134,134,134,1);
      }
    }
  }
  .discounts{
    width: 100%;
    height: .8rem;
    /*background: red;*/
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    p{
      font-size: .24rem;
      color:rgba(134,134,134,1);
      margin-left: .4rem;
    }
    span{
      font-size:.24rem;
      color:rgba(83,83,83,1);
      line-height: .8rem;
    }
    img{
      width: .1rem;
      height: .17rem;
      margin:.3rem .3rem;
    }
  }
.shop{
  width: 100%;
  height: 1rem;
  background:rgba(239,250,255,1);
  margin-top: .4rem;
  display: flex;
  a{
    font-size: .34rem;
    text-decoration: none;
    line-height: 1rem;
    width: 20%;
    color:rgba(49,62,67,1);
    margin-left: .4rem;
  }
  img{
    width: .34rem;
    height: .34rem;
    margin: .33rem .3rem;
  }
}
  .evaluate{
    width: 100%;
    height:2.8rem;
    /*background: rebeccapurple;*/
    margin-top: .2rem;
    .evaluates{
      width: 100%;
      height: .5rem;
      /*background: aqua;*/
      display: flex;
      p{
        width: .7rem;
        height: .34rem;
        margin-left: .4rem;
        margin-top: -.02rem;
        font-size: .34rem;
      }
      h5{
        font-size: .26rem;
        line-height: .3rem;
        color:rgba(112,112,112,1);
        margin-top: -.01rem;
        margin-left: .18rem;
      }
      span{
        font-size:.24rem;
        margin-left: 4.02rem;
        line-height: .4rem;
      }
    }
  }
  .gray{
    width: 100%;
    height: .6rem;
    /*background: blue;*/
    margin-top: .2rem;
    display: flex;
    img{
      width:.56rem;
      height: .56rem;
      margin-left: .4rem;
    }
  }
  .start{
    width: 1.3rem;
    height: .6rem;
    margin-left: .12rem;
    /*background: aqua;*/
    span{
      font-size: .26rem;
      width: 1rem;
      height: .26rem;
    }
    img{
      display: block;
      width: 1.22rem;
      height: .21rem;
      margin-left: -.03rem;
    }
  }
  .buy{
    width:5.8rem;
    height: 1.3rem;
    /*background: gray;*/
    margin:.2rem 1rem;
  }
  .tab{
    width: 100%;
    height: 1.1rem;
    margin-top: .2rem;
    position: fixed;
    bottom: 0;
    background:rgba(255,255,255,1);
    /*background: yellow;*/
    display: flex;
    justify-content: space-between;
    a{
      width:.6rem;
      height: 1.1rem;
      margin-right: .4rem;
      margin-left: .4rem;
      color: rgba(169, 169, 169, 1);
      text-decoration: none;
      img{
        display: block;
        margin: .32rem auto;
        width: .35rem;
        height: .35rem;
      }
     span{
       display: block;
        font-size:.2rem;
        margin-top: -.3rem;
       text-align: center;
      }
    }
   button{
     font-size: .26rem;
     background:rgba(255,149,78,1);
     border: none;
      width: 1.64rem;
      height: .66rem;
      text-align: center;
     margin-top: .22rem;
     border-radius: .1rem;
     color: white;
    }
    .promptly{
      font-size: .26rem;
      background:rgba(254,105,63,1);
      border: none;
      width: 1.64rem;
      height: .66rem;
      text-align: center;
      margin-top: .22rem;
      color: white;
      border-radius: .1rem;
     margin-right: .3rem;
    }
  }
  .fei{
    width: 100%;
    height: 5.17rem;
    background: white;
    display: none;
    position: absolute;
    top:10rem;
    left:0;
    .go{
      width: 100%;
      height: .8rem;
      /*background: palegoldenrod;*/
      span{
        display: block;
        font-size: .36rem;
        line-height: .8rem;
        text-align: center;
      }
      .wei{
        width: 100%;
        height: 3rem;
        /*background: yellow;*/
        margin-top: .3rem;
        border-bottom: 1px solid rgba(111,111,111,1);
        display: flex;
        flex-flow: wrap;
        /*justify-content: space-between;*/
        .peng{
          width: 1.2rem;
          height: 1.2rem;
          /*background: rebeccapurple;*/
          margin: 0 .3rem;
        }
        img{
          margin: 0 auto;
          display: block;
          width: .7rem;
          height: .7rem;
        }
        span{
          font-size: .2rem;
          text-align: center;
          display: block;
        }
      }
    }
  }
  .xiao{
    width: 100%;
    height: 1rem;
    background: white;
    span{
      display: block;
      font-size: .36rem;
      line-height: 1.5rem;
      text-align: center;
      color:rgba(111,111,111,1);
    }
  }
  .fei.active{
    display: block;
  }
</style>