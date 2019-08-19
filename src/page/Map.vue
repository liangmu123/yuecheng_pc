<template>
<div class="container" style="width: 1200px;">

<common-head></common-head>

<!--网格化-->
<div class="dj10">
<ul id="tree" class="ztree" style="width:100%;height:100%; overflow:auto;"></ul>
</div>

<div class="dj11">
	
	<!--网格地图-->
	<div id="container" class="dj16" >
	</div>
	
	<!--搜索框-->
    <div class="" style="z-index:1001;position: fixed !important; top: 150px; left: 350px;width:250px; height:20px;">
        <input type="text" id="map_search" class="" style="height: 35px" placeholder="搜索党员......" onkeydown='if(event.keyCode==13){search()}' />
        <span class="">
            <button class="btn btn-info btn-group-sm" id="map_search_btn" type="button" onclick="search()"><i class="glyphicon glyphicon-search"></i></button>
        </span>
    </div>
    
     <div style="z-index:1001;position: fixed !important; top: 130px; left: 630px;width:64px; height:64px;">
	     <a href="javascript:fullScreen()" id="map_btn-population">
	     <img src="../assets/img/map/fullscreen.png" />
	     </a>
     </div>
    
	
	<!--红旗飘飘-->
	<div class="dj12" style="">
		<img src="../assets/img/map/016.gif" class="dj13"/>
		<div class="dj14">基本信息</div>
		<div class="dj15" style="">
			
			党支部：<a href="javascript:void(0);" onclick="getMember('018', '1')"><span id="dzz">0</span>个</a><br />
			正式党员：<a href="javascript:void(0);" onclick="getMember('019', '1')"><span id="zsdy">0</span>人</a><br />
			预备党员：<a href="javascript:void(0);" onclick="getMember('019', '2')"><span id="ybdy">0</span>人</a><br />
			入党积极分子：<a href="javascript:void(0);" onclick="getMember('019', '3')"><span id="jjfz">0</span>人</a><br />
			退休党员：<a href="javascript:void(0);" onclick="getMember('019', '4')"><span id="txdy">0</span>人</a><br />
			思想骨干：<a href="javascript:void(0);" onclick="getMember('019', '5')"><span id="xfdy">0</span>人</a>
		</div>
		
		<div style="width:100px;height:50px;margin-top:20px;margin-left:20px;">
		
			<div style="float:left;color:white;">
				<span show="true" id="018"><img src="../assets/img/map/018.png"/><br/>党组织</span>
			</div>
			
			<div style="float:right;color:white;">
				<span show="true" id="019"><img src="../assets/img/map/019.png"/><br/>党员</span>
			</div>
				
				
			
		</div>
		
	</div>
	
	<!--筛选
	<div class="dj17">
		<ul>
			<li show="true" id="018"><img src="../assets/img/map/018.png"/><br/>党组织</li>
			<li show="true" id="019"><img src="../assets/img/map/019.png"/><br/>党员</li>
		</ul>
	</div>
	-->
</div>
</div>
</template>

<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=aG6Q2NezVjNLrGewzpc2f0xtXBdpviBo"></script>

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
    	methods: 
    	{
    		
    		
    	}
    }
    
   
            
            
            
</script>


<style lang="less" scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
	@import '../style/zTreeStyle.css';
	
	@import '../style/style_map.css';
	
	.alert{
		filter:alpha(opacity=100);/* IE */
		-moz-opacity:1.0;/* Moz + FF */
		opacity: 1.0;
		width:145px;font-size:18px;font-weight:bold; position:absolute;z-index:99; text-align:center;
	}
 
</style>
