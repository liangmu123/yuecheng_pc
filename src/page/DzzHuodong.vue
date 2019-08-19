<template>
<div>

<common-head v-if="isDzz || isActivityDay"></common-head>

<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;" v-if="isDzz || isActivityDay">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li>
				<router-link to="/Main">首页</router-link>
			</li>
			<li>
				<router-link to="/Dyyz" v-if="isActivityDay">党员教育</router-link>
				<router-link to="/Djzc" v-else>党建之窗</router-link>
			</li>

			<!--
			<li class="active">党组织活动</li>
			-->

			<li class="active" v-if="isDzz">党建引领</li>
			<li class="active" v-if="isZyz">志愿者活动</li>
			<li class="active" v-if="isActivityDay">统一活动日,主题党日</li>
		</ol>
	</div>
</div>


 <ul class="nav nav-tabs" role="tablist">
	<li class="li_style active" role="presentation">
		<a href="#conduct" aria-controls="conduct" role="tab" data-toggle="tab">活动列表</a>
	</li>


	<li style="float: right;padding-right: 30px;">
		<div class="col-sm-6">
			<div class="input-group">
				<input type="text" style="width: 300px;border-top-left-radius: 10px;border-bottom-left-radius: 10px;height: 40px;" class="form-control" placeholder="请输入需要查询的活动" aria-describedby="basic-addon2" v-model="search">
				<span class="input-group-addon" id="basic-addon2" style="background-color: #FF0000;width: 100px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;">
	  				<a id="search" href="javascript:void(0);" @click="getActivityList" style="color: white;">搜索</a>
	  			</span>
			</div>
		</div>
	</li>
</ul>

<div class="tab-content">
	<!--正在进行-->
	<div role="tabpanel" class="tab-pane active" id="conduct">

		<div class="row"  v-for="(tab,index) in tableData">
			<div class="col-sm-11" style="background-color: white; margin-left: 12px; margin-top: 20px; border-radius: 5px;">
				<!--表格一-->

				<div class="row title" style="padding-top: 20px;">
					<div class="col-sm-10" align="left" >
						<span class="title_h">{{tab.title}}</span>
					</div>
					<div class="col-sm-2">

						<!--
						<div style="background-color: red; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;" v-if="isDzz">
							<span v-if="tab.status == '0'" >未开始</span>
							<span v-if="tab.status == '1'" >进行中</span>
							<span v-if="tab.status == '2'" >已结束</span>
							<span v-if="tab.status == '3'" >已完成</span>
						</div>

						<div style="background-color: red; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;" v-if="isZyz">
							<span >已结束</span>
						</div>
						--->

						<div style="background-color:#cabd78; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;" v-if="tab.status == '0'">
							<span v-if="tab.status == '0'" >未开始</span>
						</div>

						<div style="background-color:#48ca48; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;" v-if="tab.status == '1'">
							<span >进行中</span>
						</div>

						<div style="background-color:#ca100f; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;" v-if="tab.status == '2'">
							<span >已结束</span>
						</div>

						<div style="background-color:#ca100f; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;" v-if="tab.status == '3'">
							<span >已完成</span>
						</div>

					</div>
				</div>

				<div class="row table" style="padding-top: 20px; padding-left: 20px;">
					<table class="table table-bordered" align="center" border="1" bordercolor="#cbcbcb">
						<tr>
							<th width="25%">活动时间</th>
							<th width="15%">活动地点</th>
							<th width="15%">发起组织</th>
							<th width="15%">联系人</th>
							<th width="15%">联系电话</th>
							<th width="15%">操作</th>
						</tr>

						<tr>
							<td>{{tab.start_time}}~{{tab.end_time}}</td>
							<td>{{tab.address}}</td>
							<td>{{tab.group_name}}</td>
							<td>{{tab.contacter}}</td>
							<td>{{tab.phone}}</td>
							<td>

							<!--
							<a href="{:U('Zuzhi/detail',array('id'=>$vo['id']))}" target="_blank" style="color: #FF0000;">查询详情</a>
							-->

							<router-link tag="a" target="_blank" :to="{name:'Detail1',query:{aid:tab.id}}">
								<span style="color:red;">查询详情</span>
							</router-link>

							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<div class="Pagination" style="text-align: left;margin-top: 10px;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="3" layout="total, prev, pager, next" :total="count">
            </el-pagination>
        </div>


	</div>
</div>

</div>

</div>
</template>

<script>

	import commonHead from '../components/commonHead'
	import {getActivityList} from '@/api/getData'

    export default {

        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 3,
                count: 0,
                currentPage: 1,
                tpe:0,
                search:'',

                isDzz:this.$route.query.isDzz,
				isZyz:this.$route.query.isZyz,
				isActivityDay:this.$route.query.isActivityDay,
            }
		},
		props:['module'],
        created(){
			if(!this.isDzz && !this.isZyz && !this.isActivityDay){
				this.is_team = 1;
			}
			if(this.module&&this.module == 'heartTalk'){
				console.log(this.module)
				this.is_team = 0;
			}
			
			this.getActivityList();
        },
		computed: {

		},
		components: {
    		commonHead,
    	},

    	methods: {

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;

                this.getActivityList();
            },
            async getActivityList()
            {
            	// if(this.isDzz)
            	// {
            	// 	//组织活动
            	// 	this.is_team = 0;
            	// }
            	// else if(this.isZyz)
            	// {
            	// 	//志愿者活动
            	// 	this.is_team = 1;
            	// }
            	// else
            	// {
            	// 	return;
				// }
				if(this.isDzz)
            	{
            		//组织活动
            		this.is_team = 0;
            	}
            	else if(this.isZyz)
            	{
            		//志愿者活动
            		this.is_team = 1;
            	}else if(this.isActivityDay){
					this.is_team = 2;
				}

				//this.search = this.search;
				console.log(this.is_team,7777)

                const Activities1 = await getActivityList({tpe: this.tpe, is_team: this.is_team, page: this.tpe, page: this.currentPage, pagesize: this.pagesize, search:this.search});
                //alert(Articles1);

                const Activities  = Activities1.data.items;
                //alert(Users);

                this.count = Activities1.data.total;

                this.tableData = Activities;

            }
        },
    }





</script>


<style lang="less" scoped>
	@import '../style/activities.css';
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

	th {
		text-align: center !important;
		background: white;
	}

	.tab {
		text-align: center;
		padding: 10px 0;
		margin-right: 15px;
		border-radius: 5px;
		width: 200px;
	}

	.hov-but {
		background: #d81e06;
	}

	.hov-but a {
		color: #fff;
	}

	.com-but {
		background: #fff;
		color: #333;
	}

	.list-tab {
		margin-top: 20px;
		background: #fff;
		padding: 20px;
		border-radius: 5px;
	}

	.cont-dy {
		border: 1px solid #a29f9b
	}

	.pagers ul li {
		float: left;
		broder: 1px solid #bbb;
		list-style: none;
		border: 1px solid #eee;
		padding: 5px 8px;
	}

	.pagers {
		width: 300px;
		margin: 20px auto 50px auto;
	}

	.pagers ul li a {
		text-align: center;
	}

	table {
		width: 100%;
		text-align: center;
		line-height: 32px;
	}

	th {
		text-align: center;
		line-height: 39px;
		background: #e4b69c
	}

	.cont-dy table td {
		border-right: 1px solid #fff;
		border-top: 1px solid #a29f9b;
		background: #f7f1e5;
		line-height: 39px;
	}

	.num {
		padding: 0px 20px;
		border: 0px solid #eee;
	}

	.page-act {
		background: #ea4d4d;
	}

	.page-act a {
		color: #fff
	}

	.op a {
		color: red;
		margin: 0 4px;
	}

	.op {
		width: 150px;
		text-align: left;
		padding-left: 10px;
		line-height: 28px !important;
	}

    .title_h{
        font-size:20px;
        color: black;
        font-weight: bolder;
    }

</style>
