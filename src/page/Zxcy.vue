<template>
<div align="center">

<common-head></common-head>

<dj-head v4="true"></dj-head>

 <div class="clear">
 </div>
 
 <div class="container" style="width: 1200px;margin-top:-50px;">
<div class="plate">
	<div class="cl djpannel flex">
		<div class="fl left-pannel">
			<img :src="imgurl2">
		</div>
		<div class="fl right-pannel">
			<!-- 星级评定 -->
			<!-- <div class="box b3">
				
				<router-link :to="{name:'Liangnuo',query:{v1:0}}"><img src="../assets/img/zycx/button01.png"></router-link>
				
				<router-link :to="{name:'Liangnuo',query:{v1:1}}"><img src="../assets/img/zycx/button02.png"></router-link>				
				
				<router-link :to="{name:'Liangnuo',query:{v1:2}}"><img src="../assets/img/zycx/button03.png"></router-link>
			</div> -->
			
			<!--
			<router-link to="/Chuangxin">
				<div class="box b1" style="text-align: center;"></div>
			</router-link>
			-->
			
			<router-link :to="{name:'Chuangxin',query:{v1:0}}"><div class="box b1" style="text-align: center;"></div></router-link>
			
			<div class="box b4">
				<router-link to="/Fengcai"><img src="../assets/img/zycx/icon_04.png" style="float:left;"></router-link>
			</div>
			<!-- 积分管理 -->
			<!-- <div class="box b2">
				
				<router-link to="/Dangyuanbang"><img src="../assets/img/zycx/button04.png"></router-link>
				<router-link to="/Dangzuzhibang"><img src="../assets/img/zycx/button05.png"></router-link>
				<router-link to="/democraticAppraisal"><img src="../assets/img/zycx/button06.png"></router-link>
			</div> -->
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
		height: 190px;
		margin: 0 20px 10px 0;
		background: #dab866;
		border-radius: 5px;
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
	
	.b1 {
		background: url('../assets/img/zycx/icon1.png') no-repeat   center;
		box-shadow:2px 2px 10px #9D9D9D;
	}
	
	.b2 {
		background: url('../assets/img/zycx/icon2.png') no-repeat   center;
		box-shadow:2px 2px 10px #9D9D9D;
	}
	
	.b3 {
		background: url('../assets/img/zycx/icon3.png') no-repeat   center;
		box-shadow:2px 2px 10px #9D9D9D;
	}
	
	.b4 {
		background: url('../assets/img/zycx/icon4.png') no-repeat   center;
		box-shadow:2px 2px 10px #9D9D9D;
	}
	
	.b2 img {
		margin: 60px 0 0 0;
	}
	
	.b3 img {
		margin: 60px 10px 0 20px
	}
	
	.b4 img {
		margin: 30px 10px 0 40px
	}
	
	
 
</style>
