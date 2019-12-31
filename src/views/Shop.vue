<template>
    <div class="shop">
    <div class="bed">
        <img src="../assets/arrow.png" @click="back">
        <span>床</span>
        <span class="select">筛选</span>
    </div>
        <div class="copy">
            <div class="box1">
                <img src="../assets/bed1.png">
                <span>北欧实木床北美黑胡桃木床1.8米双人床现……</span>
                <div class="str">
                    <strong>¥2319-4679</strong>
                    <p>10人付款</p>
                </div>
            </div>
            <div class="box2">
                <img src="../assets/bed2.png">
                <span>美式双人床实木1.8米现代简约主卧欧式……</span>
                <div class="str">
                    <strong>¥3130-12399</strong>
                    <p>5人付款</p>
                </div>
            </div>
        </div>
        <div class="copys">
            <div class="box1">
                <img src="../assets/bed3.png">
                <span>韩式双人床 田园风简约实木欧式公主床……</span>
                <div class="str">
                    <strong>¥2467-5168</strong>
                    <p>10人付款</p>
                </div>
            </div>
            <div class="box2">
                <img src="../assets/bed4.png">
                <span>北欧实木床北美黑胡桃木床1.8米双人床现……</span>
                <div class="str">
                    <strong>¥2319-4679</strong>
                    <p>10人付款</p>
                </div>
            </div>
        </div>
        <div class="copy">
            <div class="box1">
                <img src="../assets/bed5.png">
                <span>北欧实木床北美黑胡桃木床1.8米双人床现……</span>
                <div class="str">
                    <strong>¥2319-4679</strong>
                    <p>10人付款</p>
                </div>
            </div>
            <div class="box2">
                <img src="../assets/bed6.png">
                <span>北欧实木床北美黑胡桃木床1.8米双人床现……</span>
                <div class="str">
                    <strong>¥2319-4679</strong>
                    <p>10人付款</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default  {
        data() {
            return {
                article: {
                    title: '',
                    description: '',
                    detail: ''
                }
            }
        },
        methods:{
         back(){
             this.$router.go(-1)
         }
        }
    }
</script>

<style lang="scss" scoped>
.bed {
    width: 6.68rem;
    margin: .2rem auto;
    height: .5rem;
    /*background: rebeccapurple;*/
    display: flex;
    justify-content: space-between;

    img {
        width: .22rem;
        height: .29rem;
        display: block;
        margin-top: .06rem;
        margin-left: .33rem;
    }

    span {
        display: block;
        font-size: .34rem;
        color: rgba(55, 55, 55, 1);
        line-height: .4rem;
        font-weight: 600;
    }

    .select {
        font-size: .28rem;
        line-height: .5rem;
        color: rgba(97, 97, 97, 1);
        font-weight: 600;
    }
}
   .copy{
    width: 6.68rem;
    height: 4.08rem;
    /*background: yellow;*/
    margin: .27rem auto;
    display: flex;
    justify-content: space-between;
    .box1{
        width: 3.22rem;
        height: 3.6rem;
        /*background: gray;*/
        img{
            width: 3.22rem;
            height: 2.59rem;
        }
        span{
            display: block;
            font-size: .24rem;
            margin: 0 auto;
        }
        .str{
            width: 2.63rem;
            margin: .13rem auto;
            height: .3rem;
            display: flex;
            justify-content: space-between;
            strong{
                font-size:.2rem;
                margin-top: -.1rem;
                color:rgba(255,35,35,1);
            }
            p {
                font-size:.2rem;
                margin-top: -.1rem;
            }
        }
    }
       .box2{
           width: 3.22rem;
           height: 3.7rem;
           /*background: gray;*/
           img{
               width: 3.22rem;
               height: 2.6rem;
           }
           span{
               display: block;
               font-size: .24rem;
               width: 2.63rem;
               height: .6rem;
               /*background: gray;*/
               margin: 0 auto;
           }
           .str{
               width: 2.63rem;
               margin: .13rem auto;
               height: .3rem;
               display: flex;
               justify-content: space-between;
               strong{
                   font-size:.2rem;
                   color:rgba(255,35,35,1);
               }
               p {
                   font-size:.2rem;
                   margin-top: -.03rem;
               }
           }
       }
   }
  .copys{
    width: 6.68rem;
    height: 4.08rem;
    /*background: yellow;*/
    margin: .27rem auto;
    display: flex;
    justify-content: space-between;
    .box1{
        width: 3.22rem;
        height: 4.08rem;
        /*background: gray;*/
        img{
            width: 3.22rem;
            height: 2.9rem;
        }
        span{
            display: block;
            font-size: .24rem;
            width: 2.63rem;
            height: .6rem;
            /*background: gray;*/
            margin: 0 auto;
        }
        .str{
            width: 2.63rem;
            margin: .13rem auto;
            height: .3rem;
            /*background: red;*/
            display: flex;
            justify-content: space-between;
            strong{
                font-size:.2rem;
                color:rgba(255,35,35,1);
            }
            p {
                font-size:.2rem;
                margin-top: -.03rem;
            }
        }
    }
    .box2{
        width: 3.22rem;
        height: 3.58rem;
        /*background: gray;*/
        img{
            width: 3.22rem;
            height: 2.48rem;
        }
        span{
            display: block;
            font-size: .24rem;
            width: 2.63rem;
            height: .6rem;
            /*background: gray;*/
            margin: 0 auto;
        }
        .str{
            width: 2.63rem;
            margin: .13rem auto;
            height: .3rem;
            /*background: red;*/
            display: flex;
            justify-content: space-between;
            strong{
                font-size:.2rem;
                color:rgba(255,35,35,1);
            }
            p {
                font-size:.2rem;
                margin-top: -.03rem;
            }
        }
    }
}
</style>