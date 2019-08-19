<template>
<div align="center">

<common-head></common-head>

<dj-head v3="true"></dj-head>

<div class="clear"></div> 

<div class="container" style="width: 1200px;margin-top:-50px;">
<div class="plate"> 
	<div class="cl djpannel flex"> 
		<div class="fl left-pannel">
			<img :src="imgurl2">
		</div> 
		<div class="fl right-pannel"> 
			<div class="box"> 				 
				<router-link to="/Dyfz"><img src="../assets/img/6.png" style="cursor:pointer;"  ></router-link>
			</div> 
			<div class="box"> 				
				<router-link to="/Dangfei"><img src="../assets/img/7.png" style="cursor:pointer;"  ></router-link>
			</div> 
			<div class="box"> 				
				<router-link to="/Jianyan"><img src="../assets/img/5.png" style="cursor:pointer;"  ></router-link>
			</div> 
			<div class="box"> 				
				<router-link to="/Tongzhi"><img src="../assets/img/4.png" style="cursor:pointer;"  ></router-link>				
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
    	methods: {
    		
    	}
    }
    
   
            
            
            
</script>


<style lang="less" scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
	
	.box {
		float: left;
		width: 350px;
		height: 210px;
		margin: 0 20px 5px 0
	}
	
	.box img {
		/*width: 350px;
		height: 210px;*/
		
		height: 180px;
	}
	.flex{
                display:flex;
                align-items:center;
				padding-top:29px;
				flex-wrap: wrap;
            }
	.left-pannel img {
		width: 460px;
		height: 440px;
		margin: -20px 0 0 0px;
	}
	
	.right-pannel {
		width: 740px;
		margin-left: -40px;
	}
	
	.djpannel {
		margin-top: 60px;
	}
	
 
</style>
