<template>

<div>

<common-head></common-head>
<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>

			<li v-if="v1==0"><router-link to="/Zxcy" >争先创优</router-link></li>
			<li v-if="v1==1"><router-link to="/Dyyz" >党员教育</router-link></li>

			<li class="active" v-if="v1==0">党建品牌</li>
			<li class="active" v-if="v1==1">两学一做</li>

		</ol>
	</div>
</div>
<div class="chuangxin">

	<div class="row"  v-for="(tab,index) in tableData" :key="index" v-if="v1==0">
			<router-link tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id,need:1}}" >
			<div class="col-sm-11 li_div" style="padding:20px 0;">
				<div class="col-sm-2">
					<img :src="tab.img" class="img_yingling" />
				</div>
				<div class="col-sm-10" align="left">
					<h3 style="margin-top:35px;" class="title_h" >{{tab.title}}  <span style="float:right;margin-right:2rem;font-size:1.5rem;">{{tab.add_time}}</span></h3>
				</div>
			</div>
		</router-link>
	</div>

	<div class="row"  v-for="(tab,index) in tableData" :key="index" v-if="v1==1">
		<router-link tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id}}" >
			<div class="col-sm-11 li_div" style="display:flex;align-items:center;">
				<div class="col-sm-2">
					<img :src="tab.img" class="img_yingling" />
				</div>
				<div class="col-sm-10" style="line-height: 50px;" align="left">
					<h3 style="font-weight: bolder">{{tab.title}}</h3>
					<p style="color: gray;" >{{tab.add_time}}</p>

				</div>
			</div>
		</router-link>
	</div>

</div>
<!--分页-->
<div class="Pagination" style="text-align: left;margin-top: 10px;">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
    </el-pagination>
</div>
</div>

</div>
</div>
</template>


<script>

	import commonHead from '../components/commonHead'
	import {getArticleList} from '@/api/getData'

    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                cid: '',
                v1:this.$route.query.v1,
            }
        },

    	components: {
    		commonHead
    	},
        created(){
            //this.initData();
            this.getArticleList();
        },
        methods: {

            async initData()
            {

            },
            handleSizeChange(val) {
                //console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;

                this.getArticleList();
            },
            async getArticleList()
            {
            	if(this.v1 == undefined)
            	{
            		return;
            	}

            	if(this.v1 == 0)
            	{
            		//创新特色
            		this.cid = 796;
            	}
            	else if(this.v1 == 1)
            	{
            	    //两学一做
            		//this.cid = 255;
            		this.cid = 240;
            	}

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

.title_h{
    font-size:20px;
    color: black;
    font-weight: bolder;
}

.li_div{
	background: white;
	height: 150px;
	border-radius: 10px;
	margin-left: 15px;
}

.li_div:hover{
	box-shadow: 0 0 20px #FF5722;
}

.img_yingling{
	width: 150px;
	height: 100px;
	border-radius: 10px;
}
.row{
	padding-bottom: 10px;
}





</style>
