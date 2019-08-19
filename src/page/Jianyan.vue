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
			<li class="active">民声通道</li>
		</ol>
	</div>
</div>

    <!-- <div class="cl">
        <div @click="toggle(index)" v-for="(tab,index) in ttabs" :class="[classA,classB,{'hov-but':index==active},{'com-but':index!=active}]">
            <a>{{tab.type}}</a>
        </div>
    </div><br> -->

        <div v-show="tp == 0">
            <div class="list-cases" align="left">
                <div class="cl cases" v-for="(tab,index) in tableData">
                    <div class="fl brief">
                        <p style="text-indent: 2em;">{{tab.content}}</p>
                        <div class="info" >
                            <hr style="border: dashed 0px; height: 1px;" />
                            <div>献策人: {{tab.username}}</div>
                            <div>所属支部:{{tab.group_name}}</div>
                            <div>献策时间：{{tab.addtime}}</div>
                            <div style="float:right">回复时间：{{tab.dealtime}}</div>
                        </div>

                        <div style="clear: both">

                            <div class="info">
                                <span>回复内容: </span>
                                <span v-html="tab.deal_content"></span>
                            </div>
                        </div>
                    </div>


                    <div>
                        <section class="content">
                            <ol class="grid" style="position: relative;">
                                <li class="grid__item">
                                    <button class="icobutton icobutton--thumbs-up" style="left:60px;color:#ff5c5c" @click="postZan(tab.id, index)">
                                        <img src="../assets/img/dianz.png" style="width: 75px;height: 65px">
                                        <div>{{tab.likes}}</div>
                                    </button>
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>

            </div>
            <!--分页-->
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>
        </div>

    <div v-show="tp == 1">
        <div>
            <div
                style="width: 100%; height: 150px; background: white; padding: 20px;"
                class
            >
                <div class="RadioStyle">
                    <span style="position: relative; float: left; top: 10px;">反映类型：</span>
                    <div class="Block PaddingL" style="position: relative; float: left;">
                        <div
                            @click="toggle1(index)"
                            v-for="(tab,index) in tabs"
                            style="float:left;"
                            :key="tab.type"
                        >
                            <input type="radio" checked v-if="active1==index">
                            <label style="cursor: pointer">{{tab.type}}</label>
                        </div>
                    </div>
                </div>
                <div style="border-bottom: dotted 1px; padding: 25px 50px;"></div>
                <div class="RadioStyle" style="top: 10px; position: relative;">
                    <span style="position: relative; float: left; top: 10px;">反映状态：</span>
                    <div class="Block PaddingL" style="position: relative; float: left;">
                        <div
                            @click="toggle2(index1)"
                            v-for="(tab,index1) in tabs1"
                            style="float:left;"
                            :key="tab.type"
                        >
                            <input type="radio" checked v-if="active2==index1">
                            <label style="cursor: pointer">{{tab.type}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="photo"
                style="width: 100%; min-width: 800px; height: 100%;; top: 20px; position: relative; margin-bottom: 80px;"
                align="left"
            >
                <div v-for="(tab,index1) in tableData" :key="index1">
                    <div class="item" style="width: 100%; height: 190px;">
                        <div class="fany-img" v-if="tab.img">
                            <img :src="tab.img" alt>
                        </div>
                        <div style="float:left;width:60%;">
                            <div class="title_h" style="margin-bottom: 20px">{{tab.title}}</div>
                            <div class="row" style="padding: 0 15px 0 15px;color: gray">
                                <div style="padding: 0">{{tab.username}} |{{tab.type}} | 发布时间：{{tab.add_time}}</div>
                            </div>
                            <div class="addres">地址：{{tab.address}}</div>
                            <div class="addres">反映内容：{{tab.content}}</div>
                            <div v-if="tab.status==='已完成'">
                                <div class="addres">服务评价：{{tab.reply}}</div>
                            </div>
                        </div>
                        <div style="float:right;width:20%;color: gray;">
                            <div style="float: right;position: relative;top: -10px">
                                <div v-if="tab.status==='进行中'">
                                    <div
                                        style="background-color: #48ca48; border-radius: 5px; margin-top: 0px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;"
                                    >{{tab.status}}</div>
                                </div>

                                <div v-if="tab.status==='已完成'">
                                    <div
                                        style="background-color: #ca100f; border-radius: 5px; margin-top: 0px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;"
                                    >{{tab.status}}</div>
                                </div>

                                <div v-if="tab.status==='未开始'">
                                    <div
                                        style="background-color: #cabd78; border-radius: 5px; margin-top: 0px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;"
                                    >{{tab.status}}</div>
                                </div>
                            </div>
                            <div style="padding-left: 15px;text-align: right;margin-top:40px;">
                                <div v-if="tab.status!=='未开始'">解决处理者：{{tab.real_name}}</div>
                            </div>
                            <div
                                style="float: right;margin-top:7px;"
                                v-if="tab.status!=='未开始'"
                            >处理日期：{{tab.hand_time}}</div>
                            <div
                                style="float: right;margin-top:7px;"
                                v-if="tab.status==='已完成'"
                            >互助积分:{{tab.scores}}</div>
                            <div style="float: right;top:-2px;position: relative"  v-if="tab.status==='已完成'">服务评星：
                                <div class="layui-inline" style="top:-5px;left: 10px;">
                                    <ul class="layui-rate">
                                        <li v-for="n in tab.scores " class="layui-inline">
                                            <i class="layui-icon layui-icon-rate-solid"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChanges"
                    :current-page="currentPages"
                    :page-size="15"
                    layout="total, prev, pager, next"
                    :total="count"
                ></el-pagination>
            </div>
        </div>
    </div>

    <div v-show = "tp == 2">
            <div class="main">
                <!-- <div class="content">
                    <router-link target="_blank" :to="{name:'Detail',query:{aid:1}}">
                        <p>高温送清凉，宗言村工会慰问企业高温作业一线员工</p>
                        <p>2018-03-19</p>
                    </router-link>
                </div>
                <div class="content">
                        <router-link to="#">
                            <p>高温送清凉，宗言村工会慰问企业高温作业一线员工</p>
                            <p>2018-03-19</p>
                        </router-link>
                </div>
                <div class="content">
                        <router-link to="#">
                            <p>高温送清凉，宗言村工会慰问企业高温作业一线员工</p>
                            <p>2018-03-19</p>
                        </router-link>
                </div> -->
            </div>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange2"
                        :current-page="currentPage2"
                        :page-size="15"
                        layout="total, prev, pager, next"
                        :total="count"
                    ></el-pagination>
            </div>
    </div>

</div>
</div>
</template>


<script>

	import commonHead from '../components/commonHead'
	import {getCaseList, postZan} from '@/api/getData'
    import { getHelpList } from "@/api/getData";

    export default {

        data(){
            return {
                tp: 0,
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                currentPages:1,
                currentPage2: 1,
                tpe: 0,
                speed: '',
                classA:'fl',
                classB:'tab',
                classC:'com-but',
                active: 0,
                ttabs: [

                    {
                        type: '建言献策'
                    },
                    {
                        type: '群众反映'
                    },
                    {
                        type:'党内关怀激励'
                    }
                ],

                type: "",
                status: "",

                active1: 0,
                active2: 0,

                tabs: [
                    {
                        type: "全部"
                    },
                    {
                        type: "社会治理"
                    }
                ],
                tabs1: [
                    {
                        type: "全部"
                    },
                    {
                        type: "未开始"
                    },
                    {
                        type: "进行中"
                    },
                    {
                        type: "已完成"
                    }
                ]
            }
        },

        created(){
            this.getCaseList();
        },
		computed: {

		},
        filters:{
            formatDate:function (val) {
                var str = val.slice(0,10);
                return str;

            }
        },
		components: {
    		commonHead,
    	},

    	methods: {
            toggle1(i) {
                this.active1 = i;
                this.helpList();
            },
            toggle2(i) {
                this.active2 = i;
                this.helpList();
            },
            toggle(i)
            {
                this.active = i;
                this.tp = i;
                if(i == 1){
                    this.helpList();
                }else if(i == 2){
                    this.getCare();
                }else{
                    this.getCaseList();
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChanges(val) {
                this.currentPages = val;
                this.helpList();
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;

                this.getCaseList();
            },
            handleCurrentChange2(val)
            {
                this.currentPage2 = val;

                this.getCare();
            },
            // 获取关怀激励咨询数据
            async getCare(){
                console.log("执行了")
            },
            async getCaseList()
            {
                const Cases1 = await getCaseList({page: this.currentPage, pagesize: this.pagesize});

                const Cases  = Cases1.data.items;

                this.count = Cases1.data.total;

                this.tableData = Cases;

            },
            async postZan(id, index)
            {
                const tmp = await postZan({page: this.currentPage, pagesize: this.pagesize, id:id});

                const likes  = tmp.data.likes;

                this.tableData[index].likes = likes;

                this.$message({
                    type: 'success',
                    message: '点赞成功'
                });
            },

            async helpList() {
                //alert('this.active='+this.active);
                if (this.active1 == undefined) {
                    return;
                }

                if (this.active1 == 0) {
                    this.type = "";
                } else {
                    this.type = this.tabs[this.active1].type;
                }

                //alert(this.type);

                if (this.active2 == undefined) {
                    return;
                }

                if (this.active2 == 0) {
                    this.status = -1;
                } else {
                    this.status = this.active2 - 1;
                }

                const helpList1 = await getHelpList({
                    page: this.currentPages,
                    pagesize: this.pagesize,
                    type: this.type,
                    status: this.status,
                    is_reflect:1
                });

                const helpList = helpList1.data.items;

                this.count = helpList1.data.total;

                this.tableData = helpList;
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

.list-cases img {
	width: 120px;
	height: 120px;
	margin-right: 0px;
}

.brief {
	width: 1000px;
}

.cases {
	padding: 20px;
	background: #fff;
	margin-bottom: 20px;
}
.info div{
	float: left;
	margin-right: 30px;
	bottom: 20px;
    color: gray;
}
.grid{
	top: 10px;
}
hr{
	background: #AFAFAF;
	height: 0.5px;
	border: dashed 0px;
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

    .fany-img {
        width:16%;
        height:120px;
        margin-right:3%;
        float: left;
        border: 1px solid red;
    }
    .fany-img>img{
        width: 100%;
        height: 100%;
    }
    .clear {
        clear: both;
    }

    .RadioStyle input {
        display: none;
    }

    .RadioStyle label {
        border: 1px solid #ccc;
        color: #666;
        padding: 2px 10px 2px 5px;
        line-height: 28px;
        min-width: 80px;
        text-align: center;
        float: left;
        margin: 2px;
        border-radius: 4px;
    }

    .RadioStyle input:checked + label {
        border: 1px solid red;
        color: red;
    }

    .item {
        font: 30px "微软雅黑";
        color: black;
        padding: 20px;
        margin-top: 10px;
        background: white;
        width: 100%;
    }

    .people {
        margin-top: 15px;
        font-size: 20px;
        padding: 5px;
    }

    .addres {
        margin-top: 6px;
        color: gray;
    }

    .photo > a {
        text-decoration: none;
    }

    .jifen {
        float: right;
        color: red;
        position: relative;
        top: -20px;
        left: 1060px;
    }

    .title_h {
        font-size: 20px;
        color: black;
        font-weight: bolder;
    }
    
    .content{
        background-color:#FFF;
        border-radius: 10px;
        margin-bottom:20px;
    }
    .content a{
        width:100%;
        height:100%;
        display: flex;
        padding:20px;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        text-decoration: none;
    }
    .content a:hover{
        box-shadow: 0px 0px 10px red;
    }
    .content p{
        color:gray;
        font-size:32px;
    }
    .content p:last-child{
        font-size:20px;
    }
    @import "../style/layui/css/layui.css";

</style>
