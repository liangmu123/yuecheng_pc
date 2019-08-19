<template>

<div>

<common-head></common-head>

<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dwgl">党务管理</router-link></li>
			<li class="active">通知公告</li>
		</ol>
	</div>
</div>
<!-- 一级tab -->
<ul class="nav nav-tabs" role="tablist" style="margin-bottom:20px;">
	   <li @click="mainToggle(index ,tab.id)" v-for="(tab,index) in mainTabs" :class="[classA,{active:mainActive===index}]">
			<a>{{tab.type}}</a>     
	   </li> 
	 </ul>
<!-- 通知公告 -->
<div v-show="show == 0">
	<div class="notice-list cl" v-if="tableData.length>0">

		<div class="notice cl tc" v-for="(tab,index) in tableData">
			<div class="icon fl tc">
				<div class="line"></div>
			</div>

			<router-link tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id,need:1}}">
			<div class="con fl" style="cursor:pointer;">
				{{tab.title}}
			</div>
			</router-link>

			<div class="tt fr">{{tab.add_time}}</div>
		</div>

	</div>

	<div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
        </el-pagination>
    </div>
</div>
<!-- 代办文件 -->
<div v-show="show == 1">
	<component :is="currentView" :v1="active" :module="module"></component>
</div>

</div>

</div>
</div>
</template>


<script>
	import commonHead from '../components/commonHead'
	import tab1 from '../components/yltab.vue';
	import {getArticleList} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                //offset: 0,
                pagesize: 15,
                count: 0,
				currentPage: 1,
				currentView:'tab1',
				module:'agencyDoc',
				active:0,
				cid: 231,
				show:0,
				mainActive:0,
				classA: 'li_style',
				classB: 'active',
				mainTabs: [   
	                {       
	                    type: '通知公告',   
	                    id: '0'  
	                },     
	                // {       
	                //     type: '代办文件',    
	                //     id: '1'    
	                // }
	            ],
            }
        },
        props:
		{
		  v1:Number
		},
    	components: {
			commonHead,
			tab1,
    	},
        created(){
            //this.initData();
            this.getArticleList();
        },
        methods: {
			mainToggle(i, id)
	            {    
					this.mainActive = i ;
					this.show = id;
	            } ,
            async initData()
            {

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;
                //this.offset = (val - 1)*this.limit;

                this.getArticleList();
            },
            async getArticleList()
            {
            	/*
            	if(this.v1 == undefined)
            	{
            		return;
            	}

            	if(this.v1 == 0)
            	{
            		this.cid = 252;
            	}
            	else if(this.v1 == 1)
            	{
            		this.cid = 253;
            	}
            	else if(this.v1 == 2)
            	{
            		this.cid = 254;
            	}
            	*/

                const Articles1 = await getArticleList({page: this.currentPage, pagesize: this.pagesize, id:this.cid});
                //alert(Articles1);

                const Articles  = Articles1.data.items;
                //alert(Users);

                this.count = Articles1.data.total;

                this.tableData = Articles;

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


.icon div {
    float: none;
    padding: 0;
}
.notice-list {
	background: #fff;
	padding: 20px;
}

.tt {
	height: 60px;
	margin-right: 30px;
}

.icon {
	border-radius: 20px;
	background: red;
	width: 20px;
	height: 20px;
	position: relative;
	top: 10px;
}

.line {
	width: 1px;
	border: 1px solid red;
	margin: 0 auto;
	height: 60px;
	position: relative;
	top: -10px;
}

.con {
	margin-left: 20px;
	width: 900px;
	text-align: left;
	text-ident: 2em;
	font-family:'仿宋' ;
	padding-top:10px ;
}
.tt{
	font-family: '仿宋';
	padding-top:10px ;
}
</style>
