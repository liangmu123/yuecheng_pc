<template>

<div>

<common-head></common-head>
<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dyyz">党员教育</router-link></li>
			<li><router-link to="/Qingfeng">双泾清风</router-link></li>

			<li class="active" v-if="v1==0">党规党纪</li>
			<li class="active" v-if="v1==1">作风建设</li>
			<li class="active" v-if="v1==2">廉政教育</li>
			<li class="active" v-if="v1==3">制度建设</li>
			<li class="active" v-if="v1==4">廉政文化</li>
			<li class="active" v-if="v1==5">警钟长鸣</li>

		</ol>
	</div>
</div>



<div>
	<div class="list-cases">
		<div class="cl cases" v-for="(tab,index) in tableData" :key="index">
			<router-link tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id}}">
				<div class="fl" v-if="v1==0">
					<img :src="tab.img" style="width: 100px;">
				</div>
				<div class="fl brief" align="left">
					<h3 class="title_h">{{tab.title}}</h3>
					<p style="text-indent: 2em;color: gray;">{{tab.brief}}</p>
				</div>
			</router-link>
		</div>

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
</div>

</template>


<script>

	import commonHead from '../components/commonHead'
	import {getArticleList} from '@/api/getData'
	import {get_areaCname} from '@/api/api'
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
				title:'',
            }
        },


    	components: {
    		commonHead
    	},
        created(){
            this.getArticleList();
			this.get_areaCname()
        },
        methods: {
			get_areaCname(){
					var that = this;
					that.$axios.get(get_areaCname)
					.then(res=>{
						//console.log(res.data.data.cname)
						if(res.data.data.cname.indexOf('村')!=-1){
                            var length = res.data.data.cname.indexOf('村')
                            //console.log(length,res.data.data.cname.length)
                            if(length == res.data.data.cname.length-1){
                                that.title = res.data.data.cname.slice(0,length)
                                //alert(that.title)
                                return;
                            }
                        }
						that.title = res.data.data.cname
					})
				},

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
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
            		//廉政书屋 党规党纪
            		this.cid = 255;
            	}
            	else if(this.v1 == 1)
            	{
            		//勤廉楷模 作风建设
            		this.cid = 256;
            	}
            	else if(this.v1 == 2)
            	{
            		//警钟长鸣 廉政教育
            		this.cid = 257;
            	}
            	else if(this.v1 == 3)
            	{
            		//清风文苑 制度建设
            		this.cid = 258;
            	}
            	else if(this.v1 == 4)
            	{
            		//微悦读馆 廉政文化
            		this.cid = 259;
            	}
            	else if(this.v1 == 5)
            	{
            		//警钟长鸣
            		this.cid = 260;
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
	@import '../style/demo.css';

.list-cases img {
	width: 120px;
	height: 120px;
	margin-right: 20px;
}

.brief {
	width: 1000px;
}

.cases {
	padding: 20px;
	background: #fff;
	margin-bottom: 20px;
}

.title_h{
    font-size:20px;
    color: black;
    font-weight: bolder;
}

</style>
