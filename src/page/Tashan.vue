<template>
 
<div>

<common-head></common-head>

<div class="bread cl" style="width: 1200px;margin:0 auto;padding-top:40px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">			
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dyyz">党员教育</router-link></li>			
			<li class="active">他山之石</li>
		</ol>
	</div>
</div>


<div class="dangfei" style="width: 1200px;margin:0 auto;">
	<div class="videos">
		<ul>
			<li><video width="100%" controls controlsList="nodownload"
					controlslist=”nofullscreen“ height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
				</video> 【他山之石】三大发展战略</li>
			<li><video width="100%" controls controlsList="nodownload"
					controlslist=”nofullscreen“ height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
				</video> 【他山之石】学习治国新方略</li>
			<li><video width="100%" controls controlsList="nodownload"
					controlslist=”nofullscreen“ height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
				</video> 【他山之石】争做合格好党员</li>
			<li><video width="100%" controls controlsList="nodownload"
					controlslist=”nofullscreen“ height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
				</video> 【他山之石】三大发展战略</li>
			<li><video width="100%" controls controlsList="nodownload"
					controlslist=”nofullscreen“ height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
				</video> 【他山之石】争做新时期好党员</li>
			<li><video width="100%" controls controlsList="nodownload"
					controlslist=”nofullscreen“ height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
				</video> 【他山之石】光辉的历程</li>
		</ul>
	</div>
</div>
</div>


</div>

</template>


<script>
	
	import commonHead from '../components/commonHead'	
	
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		components: {    		
    		commonHead,
    	},
    	methods: {
    		
    	}
    }
</script>

<style scoped>

.tab{padding:10px 60px;margin-right:20px;border-radius:5px;}.hov-but{background:#d81e06;color:#fff;}.com-but{background:#fff;color:#333;}
.ser{padding:10px 0px;}
table{line-height:38px}
tbody{background:#fff;}
table thead{background:#f9f1b7;}
th,td{width:100px;text-align:center;}.list-tab{margin-top:20px;}
.videos ul li{float:left;width:330px;height:230px;margin:20px 15px;border:0px}
.videos{clear:both;overflow: hidden;}


	
</style>
