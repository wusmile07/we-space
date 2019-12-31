<template>
    <div class="index">
        <div class="box">
            <img src="../assets/addert.png">
            <span>西安</span>
            <span class="jian">空间</span>
        </div>
        <el-carousel height="4.06rem">
            <el-carousel-item  v-for="(item, index) in img" :key="index">
                <img :src="item.src">
            </el-carousel-item>
        </el-carousel>
        <div class="xiu"></div>
    </div>
</template>

<script>
    export default {
        name: 'index',
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
        width: 6.7rem;
        height: .5rem;
        /*background: red;*/
        margin: .32rem auto;
        display: flex;
        img{
            display: block;
            margin-top: .2rem;
            margin-right: .2rem;
            width:.17rem;
            height: .14rem;
        }
        span{
            display: block;
          font-size: .26rem;
            line-height: .5rem;
        }
        .jian{
            font-size: .36rem;
            margin-left: 2.25rem;
            font-weight:600;
            color:rgba(62,54,45,1);
        }
    }
  .xiu{
    width: 100%;
  }
</style>