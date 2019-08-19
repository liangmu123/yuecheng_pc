<template>

<div>

<common-head></common-head>


 <el-dialog title="党员先进事迹" :visible.sync="formVisible" class="capacity">
{{content}}
</el-dialog>
<div class="container" style="width: 1200px;">

<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Zxcy">争先创优</router-link></li>
			<li class="active">党员风采</li>
		</ol>
	</div>
</div>
<div class="xianfen-list cl">

    <div class="row">
        <div class="col-sm-2" v-for="(tab,index) in tableData"
             style="background-color: hsla(35,69%,80%,.5);margin: 20px 30px 10px 0;border-radius: 10px;
                    padding: 0 0 10px 0">
                <div >
                    <el-popover
                        placement="right"
                        width="350"
                        trigger="click">
                        <h3 class="title_h" style="margin-top: 10px">主要事迹</h3>
                        <p style="font-size: 16px;text-indent: 2em;text-align: left">{{tab.brief}}</p>
                        <el-button slot="reference" style="background: transparent;border: none;">
                            <div v-if="tab.vivid_img" href="javascript:void(0);" >
                                <img :src="tab.vivid_img" class="toux">
                            </div>
                            <div v-else href="javascript:void(0);" class="toux">
                                <img src="../assets/img/xiaoren1.png">
                            </div>
                        </el-button>
                    </el-popover>
                    <div>
                        <p>{{tab.name}}</p>
                        <p style="width:160px;margin:0 auto;">{{tab.group_name}}</p>
                    </div>

                    <section class="content">
                        <ol class="grid" style="position: relative; left: -20px;">
                            <li class="grid__item">
                                <button class="icobutton icobutton--thumbs-up" @click="postZan(tab.id, index)" style="color: #FF5C5C">
                                    <img src="../assets/img/dianz.png" style="width: 75px;height: 65px;margin-top: -30px">
                                </button>
                            </li>
                        </ol>
                        <div >{{tab.likes}}</div>
                    </section>

                </div>

        </div>
    </div>

</div>
</div>


</div>
</div>

</template>


<script>

	import commonHead from '../components/commonHead'
	import {partyMemberAdv, zanMemberAdv} from '@/api/getData'

    export default {
        data(){
            return {
                tableData: [],
                //currentRow: null,
                //offset: 0,
                //pagesize: 15,
                //count: 0,
                //currentPage: 1,
                //cid: 0,
                formVisible:false,
                content:''
            }
        },

    	components: {
    		commonHead,
    	},
        created(){
            //this.initData();
            this.partyMemberAdv();
        },
        methods: {
        	addCapacity() {
			   this.formVisible = true;
			},
        	openShiji(shiji)
        	{
        		//alert(shiji);

        		this.formVisible = true;
        		this.content = shiji;

        		/*
        		this.$message({
                    type: 'info',
                    message: shiji,
                    duration: 4000
                });
                */

        	},

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;
                this.partyMemberAdv();
            },
            async partyMemberAdv()
            {
                const MemberAdv1 = await partyMemberAdv({page: 1, pagesize: 100});

                const MemberAdv  = MemberAdv1.data.items;

                this.tableData = MemberAdv;
            },
            async postZan(id, index)
            {
                const tmp = await zanMemberAdv({id:id});

                const likes  = tmp.data.likes;

                this.tableData[index].likes = likes;

                this.$message({
                    type: 'success',
                    message: '点赞成功'
                });
            }
        },
    }
</script>

<style scoped>
	@import '../style/fonts/font-awesome-4.5.0/css/font-awesome.min.css';
	@import '../style/icons.css';
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

.xianfen-list {
	text-align: center;
}

.xianfen-list ul {
	margin: 0;
	padding: 0;
	padding-left: 35px;
}

.xianfen-list ul li img {
	border-radius: 80px;
	width: 80px;
	height: 80px;
	margin-bottom: 30px;
}

.xianfen-list ul li {
	float: left;
	margin: 20px 30px 0px 0;
	background-color: rgba(239, 210, 168, 0.5);
	padding: 30px 50px;
	border-radius: 10px;
    height: 350px;
}
.grid__item{
	background-color: transparent !important;
	padding: 0 !important;
	margin: 0 !important;
}

.title_h{
    font-size:20px;
    color: black;
    font-weight: bolder;
}

.toux{
    border-radius: 50%;
    margin-bottom: 20px;
    width: 110px;
    height: 110px
}

</style>
