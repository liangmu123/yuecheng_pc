<template>
    <div class=" " style="width:1200px;margin-top:20px;height:90px;display:flex;justify-content: space-between;" >

		<router-link to="/djzc">
			<div v-if="v1">
				<img src="../assets/img/sel_icon01.png" />
			</div>
			<div v-else>
				<img src="../assets/img/nav_icon01.png" />
			</div>
		</router-link>

		<!--
		<router-link to="/Wggl">
			<div v-if="v2" style="float:left;padding-left: 117px;">
				<img src="../assets/img/sel_icon02.png" />
			</div>
			<div v-else style="float:left;padding-left: 117px;">
				<img src="../assets/img/nav_icon02.png" />
			</div>
		</router-link>


		<router-link to="">
			<div v-if="v2" style="float:left;padding-left: 117px;" >
				<img src="../assets/img/sel_icon02.png" />
			</div>
			<div v-else  style="float:left;padding-left: 117px;">
				<img src="../assets/img/nav_icon02.png" />
			</div>
		</router-link>

		-->

		<!-- <a  target="_blank" href="http://www.cst-info.cn:8081/index.php/Admin/mapn/index" >
      		<div v-if="v2"  style="float:left;padding-left: 117px;">
				<img src="../assets/img/sel_icon02.png" />
			</div>
			<div v-else  style="float:left;padding-left: 117px;">
				<img src="../assets/img/nav_icon02.png" />
			</div>
				</a> -->
				<router-link to="/netManage">
					<div v-if="v2"  >
						<img src="../assets/img/sel_icon02.png" />
					</div>
					<div v-else >
						<img src="../assets/img/nav_icon02.png" />
					</div>
				</router-link>

		<router-link to="/Dwgl">
			<div v-if="v3"  >
				<img src="../assets/img/sel_icon03.png" />
			</div>
			<div v-else >
				<img src="../assets/img/nav_icon03.png" />
			</div>
		</router-link>

		<router-link to="/Zxcy">
			<div v-if="v4"  style="float:left;">
				<img src="../assets/img/sel_icon04.png" />
			</div>
			<div v-else  style="float:left;">
				<img src="../assets/img/nav_icon04.png" />
			</div>
		</router-link>


		<router-link to="/Dyyz">
			<div v-if="v5" >
				<img src="../assets/img/sel_icon05.png" />
			</div>
			<div v-else >
				<img src="../assets/img/nav_icon05.png" />
			</div>
		</router-link>
		<!-- 共享小握 -->
		<!-- <router-link to="/Gxxw">
			<div v-if="v6" style="float:left;padding-left: 117px;">
				<img src="../assets/img/sel_icon06.png" />
			</div>
			<div v-else style="float:left;padding-left: 117px;">
				<img src="../assets/img/nav_icon06.png" />
			</div>
		</router-link> -->

	</div>
</template>

<script>

export default
{
	//此写法是控制传过来的数据类型
	props:
	{
	  v1:String,
	  v2:String,
	  v3:String,
	  v4:String,
	  v5:String,
	  v6:String
	},

	methods: {


	},
}

</script>

<style scoped>

</style>
