<!-- 视频组件 -->
<template>
    <div id="ysp_ckplayer"></div>
</template>
<script>
    export default {
        name:'ckplayer',
        props:['vediourl'],
        data(){
            return {
                player:null,
                nowPlayTime:0,
            }
        },
        watch:{
            vediourl(val){
                var videoObject = {
                    container: "#ysp_ckplayer", //“#”代表容器的ID，“.”或“”代表容器的class
                    variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                    poster: "pic/wdm.jpg", //封面图片
                    autoplay:true,
                    loop:true,
                    video: val //视频地址
                }
                this.player = new ckplayer(videoObject)
            } 
        },
        mounted(){
        },
    }
</script>
<style scoped>
    #ysp_ckplayer{
        width:100%;
        height:100%;
    }
</style>