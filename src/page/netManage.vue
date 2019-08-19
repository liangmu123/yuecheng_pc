<template>
        <div class="" align="center" style="margin:0 auto;">
        
        <common-head tp="0"></common-head>
        
        <dj-head v2="true"></dj-head>
        
            
        <div class="" style="width:1200px;margin-top:-50px;" >
                <div class="cl djpannel flex">
                    <div class="fl left-pannel"><img :src="imgurl2"></div>
                    <div class="fl right-pannel">
                        <div class="floatRight">
                            <!-- <a target="_blank" href="http://www.cst-info.cn:8081/index.php/admin/portal/screen">
                                <img src="../assets/img/organize.png" alt="图片">
                            </a> -->
                            <router-link to="/show">
                                <img src="../assets/img/organize.png" alt="图片">
                            </router-link>
                            
                        </div>
                        <div class="floatRight">
                            <!-- <a target="_blank" href="http://www.cst-info.cn:8081/index.php/Admin/mapn/index">
                                <img src="../assets/img/net.png" alt="图片">
                            </a> -->
                            <router-link to="/MAPP">
                                <img src="../assets/img/net.png" alt="图片">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        </div>
        </template>
        
        <script>
            import djHead from '../components/djHead'
            import commonHead from '../components/commonHead'
            import {url} from '@/api/api'
	        import {mapActions, mapState} from 'vuex'
            
            
            export default {
                computed: {
                    defaultActive: function(){
                        return this.$route.path.replace('/', '');
                    },
                    imgurl2:function(){
                        if (!this.$store.state.adminImg){
                            return ''
                        }else{
                            return url + this.$store.state.adminImg[6];
                        }
                    },
                },
                components: {
                    djHead,
                    commonHead,
                },
                methods: 
                {
                    f1()
                    {
                      //alert(this.$store.state.adminInfo.realname);
                      //this.$router.push('/');
                      window.open('http://localhost:8002/#/OpenFile')
                    },
                    
                }
            }
            
           
                    
                    
                    
        </script>
        
        
        <style lang="less" scoped>
            @import '../style/main.css';
            @import '../style/mainheader.css';
            @import '../style/dangjian_window.css';
            @import '../style/style.css';
            @import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
            
            .box 
            {
                float: left;
                width: 350px;
                height: 128px;
                margin: 0 20px 5px 0;
                border-radius: 5px;
            }
            .flex{
                display:flex;
                align-items:center;
                padding-top:29px;
                flex-wrap: wrap;
            }
            
            .left-pannel img 
            {
                width: 460px;
                height: 440px;
                margin: -20px 0 0 0px;
            }
            
            .right-pannel 
            {
                width: 740px;
                margin-left: -40px;
            }
            
            .djpannel 
            {
                margin-top: 60px;
            }
            .floatRight{
                float:left;
            }
            .floatRight a{
                margin-top:20px;
                width:100%;
                height:100%;
                display:block;
            }
            .floatRight img{
                width:80%;
                display:block;
            }
        </style>
        