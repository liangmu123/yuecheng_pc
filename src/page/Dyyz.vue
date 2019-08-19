<template>
<div align="center">

<common-head></common-head>

<dj-head v5="true"></dj-head>


<div class="container" style="width: 1200px;margin-top:-50px;">
<div class="plate">
	<div class="cl djpannel flex">
		<div class="fl left-pannel">
			<img :src="imgurl2">
		</div>
		<div class="fl right-pannel">
			<div style="height: 135px; width: 740px; margin-bottom: 2px;">
			
				<!--
				<div class="box">					
					<router-link to="/Weidangke"><img src="../assets/img/one.png" style="cursor:pointer;"  ></router-link>
				</div>
				-->
				<!-- 微党课 -->
				<!-- <router-link :to="{name:'Weidangke',query:{v1:'0'}}">
					<img src="../assets/img/one.png" style="cursor:pointer;">
				</router-link> -->
				<!-- 统一活动日，主题党日 -->
					<!-- <div class="box">					
							<router-link :to="{name:'DzzHuodong',query:{isActivityDay:'1'}}">
									<img src="../assets/img/button3.png">
							</router-link>
					</div> -->
					<!-- 三会一课 -->
					<div>				
				
						<router-link to="/Sanhui">
							<img src="../assets/new/sanhui.png" style="cursor:pointer;">
						</router-link>
									
					</div>
					<!-- 统一活动日，主题党日 -->
					<div class="box">					
						<router-link to="/zhuti">
								<img src="../assets/img/button3.png">
						</router-link>
				</div>
				<!-- 他山之石 -->
				<div class="box">					
					<router-link :to="{name:'Tashan'}">
							<img src="../assets/new/shitou.png">
					</router-link>
			    </div>
			</div>
			<div>
					<!-- <div class="box">					
					
							<router-link to="/organizeLife">
								<img src="../assets/img/four.png" style="cursor:pointer;">
							</router-link>
							
						</div> -->
				
				
				<div class="box">	
				
					<!--				
					<router-link to="/Liangxue"><img src="../assets/img/three.png" style="cursor:pointer;"  ></router-link>
					-->
					
					
					<router-link :to="{name:'Chuangxin',query:{v1:'1'}}">
						<img src="../assets/img/three.png" style="cursor:pointer;">
					</router-link>
					
				</div>
				
				
				
								
				<div class="box">					
					<router-link to="/Qingfeng"><img :src="imgurl" style="cursor:pointer;"  ></router-link>					
				</div>
			</div>
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
			created(){
            if (!this.$store.state.adminImg)
						{
											//console.log("之心分零六零六")
								this.getAdminImg();
							}
			},
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			},
			imgurl:function(){
				if (!this.$store.state.adminImg){
                    return ''
                }else{
                    return url + this.$store.state.adminImg[5];
                }
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
    		...mapActions(['getAdminImg']),
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
		height: 128px;
		margin: 0 20px 2px 0;
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

	
 
</style>
