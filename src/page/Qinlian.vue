<template>
 
<div class="container" style="width: 1200px;">

<common-head></common-head>

<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">			
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dyyz">党员教育</router-link></li>	
			<li><router-link to="/Qingfeng">宗言清风</router-link></li>			
			<li class="active">勤廉楷模</li>
		</ol>
	</div>
</div>

<div>
	<div class="list-cases">
		<div class="cl cases">
			<div class="fl brief">
				<h3>支月英：为了大山深处的孩子们</h3>
				<p>本着“发展为了村民、发展依靠村民、发展成果由村民共享”的宗旨，全面推进我村的新农村建设。经村民代表充分酝酿，达成如下决议：1.关于拆迁安置的决议。2.关于“规费、租金收缴办法”的决议。3.关于计划生育管理的决议。4.关于户籍管理的决议。5.关于用电管理的决议</p>
			</div>
		</div>
		<div class="cl cases">
			<div class="fl brief">
				<h3>"为国家培养人才，是我一生最有意义的工作"</h3>
				<p>为进一步推进村庄环境整治工作，全面提高宗言村人民群众的文明程度，积极营造洁净的生活居住环境，共同改善群众生活条件和生活质量，努力把我们的家乡建设成为一个空气清新、环境优美的美丽乡村。在广泛听取全体村民代表意见、建议的前提下，形成决议如下：1.全体村民代表一致认为村委组织村民代表、党员等相关人员外出学习考察是必要的。2.全体村民代表一致要求村委严格按照《细则》内容，定期组织相关人员对全村村民和企业的卫生状况进行考核，并将考核结果公布于众</p>
			</div>
		</div>
		<div class="cl cases">
			<div class="fl brief">
				<h3>用钢铁意志书写人生</h3>
				<p>为快速有效提高全体村民医疗保障水平，实现本村全体村民共享安心医疗、共享邻里互助情；加快建设社会主义新农村、共建共享“健康乡村”、全面实现小康生活。在广泛听取代表意见、建议的前提下，作出了如下决议：1.全体村民代表一致认为由福村宝为村民医疗互助会开展医疗互助活动提供有偿服务，包括在线设计补助方案及在线生成补助信息等。2.医疗互助金设立银行专户，全部用于补助村民，补助金额从340元到50000元，账务情况定期公示。</p>
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

.list-cases img {
	width: 120px;
	height: 120px;
	margin-right: 20px;
}

.brief {
	width: 900px;
}

.cases {
	padding: 20px;
	background: #fff;
	margin-bottom: 20px;
}




	
</style>
