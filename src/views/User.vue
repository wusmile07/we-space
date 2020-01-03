<template>
    <div class="user">
        <div class="arrow">
            <img src="../assets/arrow.png" @click="back">
            <p>编辑个人信息</p>
        </div>
        <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <span>上传头像</span>
        </el-upload>
        <div class="box">
            <div class="boxs">
                <span>昵称</span>
                <div class="input">
                    <input type="text" maxlength="6">
                <img src="../assets/right-arrow.png">
                </div>
            </div>
            <div class="boxs">
                <span>空间号</span>
                <div class="input">
                    <input type="text" maxlength="6">
                </div>
            </div>
            <div class="boxs">
                <span>性别</span>
                <div class="input">
                    <input type="text" maxlength="6">
                </div>
            </div>
            <div class="boxs">
                <span>个性签名</span>
                <div class="input">
                    <input type="text" maxlength="6">
                    <img src="../assets/right-arrow.png">
                </div>
            </div>
            <div class="boxs">
                <span>收货地址</span>
                <div class="input">
                    <input type="text" maxlength="6">
                    <img src="../assets/right-arrow.png">
                </div>
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
        data() {
            return {
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            back(){
                this.$router.go(-1)
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
    .avatar-uploader .el-upload {
        border: 1px solid #409EFF;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
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
    .box{
        width: 100%;
        height: 4rem;
        /*background: palegoldenrod;*/
        .boxs{
            width: 6.68rem;
            height: .79rem;
            margin: 0 auto;
            /*background: yellow;*/
            border-bottom: 1px solid rgba(198,198,198,1);
            display: flex;
            justify-content: space-between;
            span{
                font-size: .26rem;
                line-height: .79rem;
            }
            .input{
                width: 2.5rem;
                height: .79rem;
                /*background: red;*/
                display: flex;
                input{
                    width: 2rem;
                    height: .7rem;
                    border: none;
                    outline: none;
                    /*background-color: gray;*/
                }
                img{
                    width: .1rem;
                    height: .17rem;
                    margin-top: .3rem;
                    margin-left: .3rem;
                }
            }

        }
    }
</style>