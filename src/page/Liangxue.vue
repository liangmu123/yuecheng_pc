<template>
 
<div class="container" style="width: 1200px;">

<common-head></common-head>

<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">			
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dyyz">党员教育</router-link></li>			
			<li class="active">两学一做</li>
		</ol>
	</div>
</div>


<div class="chuangxin">
	<div class="row">
		<div class="col-sm-11 li_div">
			<div class="col-sm-2">
				<img src="../assets/img/001.png" class="img_yingling" />
			</div>
			<div class="col-sm-10" style="line-height: 30px;">
				<h4></h4>
				<p style="color: gray;">
					做爱国爱党的模范人、做遵纪守法的文明人、做廉洁自律的清白人、做创业创新的的引路人、做勤劳致富的实
					干人、做爱岗敬业的标兵人、做言行一致的诚信人、做和 睦邻里的调解人、做尊老爱亲的孝顺人、做环境整治
					的带头人、做助人为乐的贴心人，做帮贫扶困的慈善人。</p>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-11 li_div">
			<div class="col-sm-2">
				<img src="../assets/img/02.png" class="img_yingling" />
			</div>
			<div class="col-sm-10" style="line-height: 30px;">
				<h4></h4>
				<p style="color: gray;">近期，宗言村全体党员如火如荼开展“两学一做”主题教育学习活动，总的要求是全面贯彻习近平总书记重要指示和中央精神，以尊崇党章、遵守党规为基本要求，以用习总书记系列重要讲话精神武装全村党员为根本任务，以党员标准严格规范党员干部言行，把开展学习教育与贯彻落实习总书记视察江苏时重要讲话精神紧密结合起来、与做好“十三五”开局各项工作紧密结合起来、与村领导班子换届紧密结合起来，遵纪守法、克己奉公、团结务实、砥砺奋进，为协调推进“新宗言”建设.....

				</p>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-11 li_div">
			<div class="col-sm-2">
				<img src="../assets/img/003.png" class="img_yingling" />
			</div>
			<div class="col-sm-10" style="line-height: 30px;">
				<h4></h4>
				<p style="color: gray;">开展“两学一做”学习教育，必须全面贯彻落实习近平总书记重要指示精神和
					中央及省市委统一部署，把党的思想政治建设放在首位，以尊崇党章、遵守党规为基
					本要求，以用习近平总书记系列重要讲话特别是视察江苏重要讲话精神武装全体党员为
					根本任务，教育引导党员自觉按照党员标准规范言行，进一步坚定理想信念，提高党性觉悟；进
					一步增强政治意识、大局意识、核心意识、看齐意识，坚定正确政治方向；进一步树立清风正气 ，严守政治纪律政治规矩；进一步强化宗旨观念...

				</p>
			</div>
		</div>
	</div>
</div>
<!--分页-->
<div class="pagers cl">
	<ul class="cl">
		<li><a href="">上一页</a></li>
		<li class="num page-act"><a href="">1</a></li>
		<li class="num"><a href="">2</a></li>
		<li class="num"><a href="">3</a></li>
		<li class="num"><a href="">4</a></li>
		<li><a href="">下一页</a></li>
	</ul>
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

.chuangxin ul {
	margin: 0px;
	padding: 0px;
}

.chuangxin ul li {
	width: 1200px;
	background: white;
	padding: 20px;
	margin-bottom: 20px;
}

.chuangxin ul li p {
	font-size: 20px;
}

.desc {
	font-size: 14px;
}

.li_div {
	background: white;
	height: 150px;
	border-radius: 10px;
	margin-left: 15px;
}

/*.li_div:hover {
	box-shadow: 0 0 20px #FF5722;
}*/

.img_yingling {
	width: 130px;
	height: 120px;
	border-radius: 10px;
	margin-top: 15px;
}

.row {
	padding-bottom: 10px;
}


	
</style>
