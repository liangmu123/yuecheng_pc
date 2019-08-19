<template>

<div >

<common-head></common-head>
<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dyyz">党员教育</router-link></li>
			<li class="active">三会一课</li>
		</ol>
	</div>
</div>
<div class="dangfei">

	<div class="cl">


	    <div @click="toggle(index)" v-for="(tab,index) in tabs" :class="[classA,classB,{'hov-but':index==active},{'com-but':index!=active}]">
			<a>{{tab.type}}</a>
		</div>

	</div>


	<div class="tab-content">
		<!--正在进行-->
		<div role="tabpanel" class="tab-pane active" id="conduct">

            <div style="padding-right: 80px">
                <div style="text-align: left;font-size: 28px;margin-top: 10px;margin-bottom: 10px">学习进度：
                    <span>【已学时长: <span style="font-weight: bold">15.5</span> 小时; 总时长： <span style="font-weight: bold">256.5</span> 小时】</span></div>
                <div style="margin-bottom: 10px">
                    <el-progress :text-inside="true" :stroke-width="30" :percentage="5" status="success"></el-progress>
                </div>
            </div>

			<div class="row"  v-for="(tab,index) in tableData">
				<div class="col-sm-11" style="background-color: white; margin-left: 12px; margin-top: 20px; border-radius: 5px;">
					<!--表格一-->

					<div class="row title" style="padding-top: 20px;">
						<div class="col-sm-10" align="left">
							<span class="title_h">{{tab.title}}</span>
						</div>
						<div class="col-sm-2">
							<div style="background-color: red; border-radius: 5px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;">

								<span v-if="tab.status == '0'" >未开始</span>
								<span v-if="tab.status == '1'" >进行中</span>
								<span v-if="tab.status == '2'" >已结束</span>

							</div>


						</div>
					</div>

					<div class="row table" style="padding-top: 20px; padding-left: 20px;">
						<table class="table table-bordered" align="center" border="1" bordercolor="#cbcbcb">
							<tr>
								<th width="23%">会议时间</th>
								<th width="18%">会议地点</th>
								<th width="29%">发起组织</th>
								<th width="8%">联系人</th>
								<th width="8%">联系电话</th>
								<th width="8%">操作</th>
							</tr>

							<tr>
								<td>{{tab.format_start_time}}~{{tab.format_end_time}}</td>
								<td>{{tab.address}}</td>
								<td>{{tab.group_name}}</td>
								<td>{{tab.contacter}}</td>
								<td>{{tab.phone}}</td>
								<td>

								<router-link tag="a" target="_blank" :to="{name:'Detail2',query:{aid:tab.id}}">
									<span style="color:red;">查询详情</span>
								</router-link>

								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>

			<div class="Pagination" style="text-align: left;margin-top: 10px;">
	            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
	            </el-pagination>
	        </div>


		</div>
	</div>




</div>
</div>

</div>

</template>


<script>

	import commonHead from '../components/commonHead'
	import {getMeetingList} from '@/api/getData'
    import {allLearnSpeed} from '@/api/getData'

    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                tpe: 0,
                speed: '',
                classA:'fl',
                classB:'tab',
                classC:'com-but',
                active: 0,
                tabs: [

	                {
	                    type: '党员大会'
	                },
	                {
	                    type: '党支委会'
	                },
	                // {
	                //     type: '党小组会'
	                // },
	                {
	                    type: '党课学习'
	                }
	            ]
            }
        },

    	components: {
    		commonHead
    	},
        created(){
            this.getMeetingList();
            this.allLearnSpeed();
        },
        methods: {
        	toggle(i)
            {
				console.log()
                this.active = i;

                //alert(this.currentPage);
                //alert(this.active);

                this.getMeetingList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;


                this.getMeetingList();
            },
            async allLearnSpeed()
            {
                const Articles1 = await allLearnSpeed();
                //alert(Articles1);

                const Articles  = Articles1;

                this.speed = Articles;

            },
            async getMeetingList()
            {
            	if(this.active == undefined)
            	{
            		return;
            	}

            	else if(this.active == 0)
            	{
            		//党员大会
            		this.tpe = 1;
            	}
            	else if(this.active == 1)
            	{
            		//党支委会
            		this.tpe = 2;
            	}
            	else if(this.active == 2)
            	{
            		//党小组会
            		this.tpe = 4;
            	}
            	else if(this.active == 3)
            	{
            		//党课学习
            		this.tpe = 4;
            	}

                const MemberList1 = await getMeetingList({page: this.currentPage, pagesize: this.pagesize, tpe:this.tpe});

                const MemberList  = MemberList1.data.items;

                this.count = MemberList1.data.total;

                this.tableData = MemberList;

            }
        },
    }
</script>

<style scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
	@import '../style/fonts/font-awesome-4.5.0/css/font-awesome.min.css';
	@import '../style/icons.css';

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

    .title_h{
        font-size:20px;
        color: black;
        font-weight: bolder;
    }

	.hov-but a {
		color: #fff;
	}

    .title_h{
        font-size:20px;
        color: black;
        font-weight: bolder;
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



</style>
<style>
    .el-progress-bar__outer{
        background-color: #f1a83b !important;
    }
</style>
