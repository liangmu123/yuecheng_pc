<template>	
    <div>
        <common-head tp="1"></common-head>
        <div class="main">
            <div class="top">
                <div class="video">
                    <ckplayer :vediourl="vediourl"></ckplayer>
                </div>
                <div class="right">
                    <div class="img">
                        <router-link to="/Djzc">
                            <img src="../assets/main/1.png" alt="图片">
                        </router-link>
                    </div>
                    <div class="img">
                        <router-link to="/netManage">
                            <img src="../assets/main/2.png" alt="图片">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="img">
                    <router-link to="/Dwgl">
                        <img src="../assets/main/5.png" alt="图片">
                    </router-link>
                </div>
                <div class="img">
                    <router-link to="/Zxcy">
                        <img src="../assets/main/4.png" alt="图片">
                    </router-link>
                </div>
                <div class="img">
                    <router-link to="/Dyyz">
                        <img src="../assets/main/3.png" alt="图片">
                    </router-link>
                </div>
            </div>
        </div>
        <div style="opacity: 0; position:fixed;">{{imgurl2}}</div>
    </div>
</template>

<script>
    import commonHead from '../components/commonHead'
    import ckplayer from '../components/ckplayer'
    import {url} from '@/api/api'
    import {mapActions, mapState} from 'vuex'
    import {getAdminImg} from '@/api/getData'
	
    export default {
		data(){
			return {				
				note: '',
                vediourl:''
			}
		},
		// mounted() 
		// {
		//   //alert('22');		  
		 
		//   document.querySelector('body').style.backgroundImage = imgurl2;
		  
        // },
        mounted(){
            document.querySelector('body').style.backgroundImage = "url("+this.imgurl2+")";
        },
        created(){
            if (this.$store.state.adminImg.length == 0)
			{
                //console.log("之心分零六零六")
    			this.getAdminImg();
    		}
            this.getVedio()
        },
        computed:{
            imgurl:function(){
                console.log(this.$store.state.adminImg,222)
                if (!this.$store.state.adminImg){
                    return ''
                }else{
                    return url + this.$store.state.adminImg[2];
                }
            },
            imgurl3:function(){
                if (!this.$store.state.adminImg){
                    return ''
                }else{
                    return url + this.$store.state.adminImg[3];
                }
            },
            imgurl2:function(){
                if (!this.$store.state.adminImg){
                    return ''
                }
                if(this.$store.state.adminImg[1] == undefined){
                    return ''
                }
                document.querySelector('body').style.backgroundImage = "url("+url + this.$store.state.adminImg[1]+")";
                return url + this.$store.state.adminImg[1];
            },
        },
		components: {    		
    		commonHead,
            ckplayer
    	},
    	methods: {
			...mapActions(['getAdminImg']),
            async getVedio(){
				try
				{
					const res = await getAdminImg()
					if (res.code == 0) 
					{	
						var result = res.data.video;
						this.vediourl = result;
					}
					
				}
				catch(err)
				{
					//console.log('您尚未登陆或者session失效')
				}
			},
    	}
    }
   
            
            
            
</script>


<style scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
	
	
	
	.column_div:hover img{
        animation:mymove 2s 1 alternate forwards ;
        -webkit-animation:mymove 2s 1 alternate forwards; /*Safari and Chrome*/
    }

    @keyframes mymove
    {
        to {width:270px;height:190px}
    }
    @-webkit-keyframes mymove /*Safari and Chrome*/
    {
        to {width:270px;height:190px}
    }
    .video{
        width:795px;
        height:450px;
        padding-left:10px;
        padding-top:10px;
    }
    .main{
        width:1210px;
        margin:0 auto;
        padding-top:40px;
    }
    .top{
        width:100%;
        display:flex;
        justify-content: space-between;
    }
    .bottom{
        width:100%;
        display:flex;
        justify-content: space-between;
    }
</style>
