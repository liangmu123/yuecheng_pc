<template>
    <div class="fillcontain">
       <div class="chuangxin">
       		<!--
			<div class="row" v-for="(tab,index) in tableData" :key="index">
				<router-link tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id}}">
				<div class="col-sm-11 li_div">
					<div class="col-sm-2">
						<img :src="tab.img" class="img_yingling" />
					</div>
					<div class="col-sm-10" style="line-height: 30px;">
						<h4>{{tab.title}}</h4>
						<p style="color: gray;">{{tab.add_time}}</p>
					</div>
				</div>
				</router-link>
			</div>
			-->

			<div class="row"  v-for="(tab,index) in tableData" :key="index">
				<router-link v-if="mode != 'teamBuild'" tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id,need:1}}">
					<div class="col-sm-11 li_div" style="display:flex;align-items: center;">
						<div class="col-sm-2">
							<img :src="tab.img" class="img_yingling" />
						</div>
						<div class="col-sm-10" style="line-height: 50px;" align="left">
							<h3 style="font-weight: bolder">{{tab.title}}</h3>
							<p style="color: gray;" >{{tab.add_time}}</p>
						</div>
					</div>
				</router-link>
				<router-link v-else tag="a" target="_blank" :to="{name:'Detail',query:{aid:tab.id,need:1,mode:mode}}">
					<div class="col-sm-11 li_div" style="display:flex;align-items: center;">
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

			<!--分页-->
			<div class="Pagination" style="text-align: left;margin-top: 10px;">
			    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
			    </el-pagination>
			</div>

		</div>

    </div>
</template>

<script>

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
                cid: 0,
            }
        },
        props:
		{
		  v1:Number,
		  module:String,
		  mode:String,
		},
    	components: {

    	},
        created(){
            //this.initData();
			this.getArticleList();
			//console.log(this.module)
        },
        methods: {

            async initData()
            {
            	/*
                try{
                    const countData = await getUserCount();
                    if (countData.code == 0)
                    {
                        this.count = countData.data.count;

                        //alert(this.count);
                    }
                    else
                    {
                    	//alert('22');
                        throw new Error('获取数据失败');
                    }
                    this.getUsers();
                }
                catch(err){
                    console.log('获取数据失败', err);
                }
                */


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
				//alert('v1='+this.v1);
            	if(this.module){
					if(this.module == 'teamBuild'){
						if(this.v1 == undefined)
							{
								return;
							}

							if(this.v1 == 0)
							{
								this.cid = 794;
							}
							else if(this.v1 == 1)
							{
								this.cid = 0;
							}
							else if(this.v1 == 2)
							{
								this.cid = 0;
							}
					}else if(this.module == 'basicGuarantee'){
						if(this.v1 == undefined)
							{
								return;
							}

							if(this.v1 == 0)
							{
								this.cid = 793;
							}
							else if(this.v1 == 1)
							{
								this.cid = 253;
							}
							else if(this.v1 == 2)
							{
								this.cid = 254;
							}
					}else if(this.module == 'zhendi'){
						this.cid = 792
					}else if(this.module == 'zhuti'){
						this.cid = 798
					}else if(this.module == 'Yinling'){
						if(this.v1 == undefined)
							{
								return;
							}

							if(this.v1 == 0)
							{
								this.cid = 227;
							}
							else if(this.v1 == 1)
							{
								this.cid = 253;
							}
							else if(this.v1 == 2)
							{
								this.cid = 254;
							}
					}else if(this.module == 'agencyDoc'){
						return;
						if(this.v1 == undefined)
							{
								return;
							}

							if(this.v1 == 0)
							{
								this.cid = 0;
							}
							else if(this.v1 == 1)
							{
								this.cid = 253;
							}
							else if(this.v1 == 2)
							{
								this.cid = 254;
							}
					}else if(this.module == 'heartTalk'){
						return;
						if(this.v1 == undefined)
							{
								return;
							}
							if(this.v1 == 0)
							{
								this.cid = 0;
							}
							else if(this.v1 == 1)
							{
								this.cid = 253;
							}
							else if(this.v1 == 2)
							{
								this.cid = 254;
							}
					}
				}

                const Articles1 = await getArticleList({page: this.currentPage, pagesize: this.pagesize, id:this.cid});
                
                const Articles  = Articles1.data.items;
                //alert(Users);

                this.count = Articles1.data.total;

                this.tableData = Articles;

                /*
                this.tableData = [];
                Users.forEach(item =>
                {
                    const tableData = {};
                    //alert(item.mobile);
                    tableData.username = item.mobile;
                    tableData.registe_time = item.created_at;
                    tableData.city = item.nick_name;
                    this.tableData.push(tableData);
                })
                */
            }
        },
    }
</script>

<style scoped>
	@import '../style/activities.css';
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

	.breadcrumb {
		    padding: 8px 15px;
		    margin-bottom: 20px;
		    list-style: none;
		    border-radius: 4px;
		    background: none;
		}

		.breadcrumb>li+li:before {
		    padding: 0 5px;
		    color: #000;
		    content: ">\00a0";
		}

		.li_div{
			background: white;
			height: 100px;
			border-radius: 10px;
			margin-left: 15px;
		}

		.li_div:hover{
			box-shadow: 0 0 20px #FF5722;
		}

		.img_yingling{
			width: 120px;
			height: 90px;
			border-radius: 10px;
		}
		.row{
			padding-bottom: 10px;
		}
</style>
