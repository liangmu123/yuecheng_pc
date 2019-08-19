<template>
<div class="container">

<!--工会-->
<div role="tabpanel" class="tab-pane active" id="yltab1">
	<div class="padding_tabpanel">
		<!--区域块-->
		
		<!--区域块-->
		<!--区域块-->
		<div class="row">
			<a href="guideone.html" target="_blank">
				<div class="col-sm-11 li_div">
    				<div class="col-sm-2">
    					<img src="../assets/img/yinling/IMG_20170927_091109.jpg" class="img_yingling"/>
    				</div>
    				<div class="col-sm-6" style="line-height: 50px;">
    					<h3>11工会慰问一线员工</h3>
    					<p style="color: gray;">2018-09-17</p>
    				</div>
    			</div>
			</a>
		</div>
		<!--区域块-->
		<!--区域块-->
		<!--区域块-->
		<div class="row">
			<a href="guide_details.html" target="_blank">
				<div class="col-sm-11 li_div">
    				<div class="col-sm-2">
    					<img src="../assets/img/yinling/IMG_20170927_092151.jpg" class="img_yingling"/>
    				</div>
    				<div class="col-sm-6" style="line-height: 50px;">
    					<h3>11关工委澄东片区工作交流座谈会会</h3>
    					<p style="color: gray;">2018-09-17</p>
    				</div>
    			</div>
			</a>
		</div>
		<!--区域块-->
		<div class="row">
			<a href="guide_details.html" target="_blank">
				<div class="col-sm-11 li_div">
    				<div class="col-sm-2">
    					<img src="../assets/img/yinling/IMG_20180617_121455.jpg" class="img_yingling"/>
    				</div>
    				<div class="col-sm-6" style="line-height: 50px;">
    					<h3>关工委江顺青工培训20171128</h3>
    					<p style="color: gray;">2018-09-16</p>
    				</div>
    			</div>
			</a>
		</div>
		<!--区域块-->
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


<style lang="less" scoped>
	@import '../style/activities.css';
	
	.breadcrumb {
		    padding: 8px 15px;
		    margin-bottom: 20px;
		    list-style: none;
		    border-radius: 4px;
		    background: none;
		}
		
		.breadcrumb>li+li:before {
		    padding: 0 5px;
		    color: #000;
		    content: ">\00a0";
		}
		
		.li_div{
			background: white;
			height: 100px;
			border-radius: 10px;
			margin-left: 15px;
		}
		
		.li_div:hover{
			box-shadow: 0 0 20px #FF5722;
		}
		
		.img_yingling{
			width: 120px;
			height: 90px;
			border-radius: 10px;
			margin-top: 5px;
		}
		.row{
			padding-bottom: 10px;
		}
 
</style>
