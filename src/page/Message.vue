<template>

<div>

<common-head></common-head>

<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li class="active">个人消息</li>
		</ol>
	</div>
</div>
<div>
	<div class="notice-list cl">


		<div class="notice cl tc" v-for="(tab,index) in tableData" style="cursor:pointer;" @click="setRead(tab.id, index, tab.tpe)">

			<div class="icon fl tc">
				<div class="line"></div>
			</div>

			<div class="con fl" v-if="tab.is_read == 0">{{tab.title}}</div>
			<div class="con fl" v-if="tab.is_read == 1" style="color:#777;">{{tab.title}}</div>

			<div class="tt fr" v-if="tab.is_read == 0">{{tab.add_time}}</div>
			<div class="tt fr" v-if="tab.is_read == 1" style="color:#777;">{{tab.add_time}}</div>

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
</template>


<script>
	import commonHead from '../components/commonHead'
	import {getMessageList, setRead} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                //offset: 0,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                uid: this.$route.query.uid,

            }
        },
    	components: {
    		commonHead,
    	},
        created(){
            //this.initData();
            this.getMessageList();
        },
        methods: {

            async initData()
            {

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;

                this.getMessageList();
            },
            async getMessageList()
            {
            	//alert(this.uid);
                const Articles1 = await getMessageList({page: this.currentPage, pagesize: this.pagesize, uid:this.uid});
                //alert(Articles1);

                const Articles  = Articles1.data.items;
                //alert(Users);

                this.count = Articles1.data.total;

                this.tableData = Articles;

            },
            async setRead(id, index, tpe)
            {
                const tmp = await setRead({id:id});

                this.tableData[index].is_read = 1;

                if(tpe == 1)
                {
                	//活动
                	//const { href } = this.$router.resolve({name: 'Detail1', query:{aid:id}});
                	//console.log('22');
					//window.open(href, '_blank');
					//console.log('33');

					const url = window.location.origin + '/#/Detail1?aid='+id;
					window.open(url, '_blank');
                }
                else if(tpe == 2)
                {
                   //会议
                	const url = window.location.origin + '/#/Detail2?aid='+id;
                	window.open(url, '_blank');
                }

                window.location.reload();
            },

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
