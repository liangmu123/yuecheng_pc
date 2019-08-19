<template>
<div class="" align="center" style="margin:0 auto;">

<common-head tp="0"></common-head>

<dj-head v1="true"></dj-head>

	
<div class="" style="width:1200px;margin-top:-50px;" >
		<div class="cl djpannel flex">
			<div class="fl left-pannel"><img :src="imgurl2"></div>
			<div class="fl right-pannel">

				<div>
					<div style="height:140px;width:740px;margin-bottom:0px;">
						<div class="box " >	
							<!--					
							<a href="javascript:;" @click="f1"><img src="../assets/img/button5.png"></a>	
							-->
							
							<router-link tag="a" target="_blank" :to="{name:'OpenFile'}">
								<img :src="imgurl">
							</router-link>						
						</div>
						<div class="box " >	
							<!--					
							<a href="javascript:;" @click="f1"><img src="../assets/img/button5.png"></a>	
							-->
							<!-- 阵地建设 -->
							<router-link tag="a" to="/zhendi">
								<img src="../assets/new/build.png">
							</router-link>						
						</div>
					</div>

					<div class="box">	
						<!--					
						<router-link to="/Gaikuang"><img src="../assets/img/button1.png"></router-link>		
						-->
						
						<!-- <a  target="_blank" href="http://www.cst-info.cn:8081/index.php/admin/portal/screen" >
                      		<img src="../assets/img/button1.png">
												</a> -->
						<router-link to="/teamBuild"><img src="../assets/img/button1.png"></router-link>
                      						
					</div>
					
					
					<!--
					<div class="box">						
						<router-link to="/Yinling"><img src="../assets/img/button2.png"></router-link>	
					</div>	
					
					<div class="box">
						<router-link :to="{name:'DzzHuodong',query:{isDzz:'1'}}">
							<img src="../assets/img/qun.png">
						</router-link>
					</div>
					-->
					
					<!-- <div class="box">						
						<router-link :to="{name:'DzzHuodong',query:{isDzz:'1'}}"><img src="../assets/img/button2.png"></router-link>	
					</div> -->
					
					<div class="box">						
							<router-link to="/basicGuarantee"><img src="../assets/img/button2.png"></router-link>	
					</div>
					<!-- 统一活动日，主题党日 -->
					<!-- <div class="box">					
							<router-link :to="{name:'DzzHuodong',query:{isActivityDay:'1'}}">
									<img src="../assets/img/button3.png">
							</router-link>
					</div> -->
					<!-- 志愿者活动 -->
					<div class="box">					
							<router-link :to="{name:'Yinling2'}">
									<img src="../assets/new/volunteer.png">
							</router-link>
					</div>
							
					
									
					<div class="box">
						<!-- <router-link :to="{name:'DzzHuodong',query:{isZyz:'1'}}">
							<img src="../assets/img/button3.png">
						</router-link> -->
						<router-link to="/Yinling"><img src="../assets/img/qun.png"></router-link>
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
                    return url + this.$store.state.adminImg[4];
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
    	methods: 
    	{
				...mapActions(['getAdminImg']),
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
 
</style>
