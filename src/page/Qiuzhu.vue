<template>

    <div>

        <common-head></common-head>
        <div class="container" style="width: 1200px;">
            <div class="bread cl" style="margin-top: 20px;">
                <div class="site">当前位置:</div>
                <div class="path">
                    <ol class="breadcrumb">
                        <li>
                            <router-link to="/Main">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/Gxxw">共享小屋</router-link>
                        </li>
                        <li class="active">群众求助</li>
                    </ol>
                </div>
            </div>


            <div id="" style=";;margin-bottom: 20px;">
                <div style="width: 100%; height: 150px; background: white; padding: 20px; margin-top: 40px;" class="">

                    <div class="RadioStyle">
                        <span style="position: relative; float: left; top: 10px;">求助类型：</span>
                        <div class="Block PaddingL" style="position: relative; float: left;">

                            <!--
                            <input type="radio" name="Storage" id="model1" checked=""> <label for="model1">全部</label>
                            <input type="radio" name="Storage" id="model2"> <label for="model2">家庭修配</label>
                            <input type="radio" name="Storage" id="model3"> <label for="model3">陪护老人</label>
                            <input type="radio" name="Storage" id="model4"> <label for="model4">生活缴费</label>
                            <input type="radio" name="Storage" id="model9"> <label for="model9">日常代购</label>
                            <input type="radio" name="Storage" id="model10"> <label for="model10">预约预定</label>
                            <input type="radio" name="Storage" id="model11"> <label for="model11">法律服务</label>
                            <input type="radio" name="Storage" id="model12"> <label for="model12">咨询辅导</label>
                            <input type="radio" name="Storage" id="model13"> <label for="model13">其他</label>
                            -->

                            <div @click="toggle(index)" v-for="(tab,index) in tabs" style="float:left;">
                                <input type="radio" checked="" v-if="active==index"> <label style="cursor: pointer">{{tab.type}}</label>
                            </div>

                        </div>
                    </div>
                    <div style="border-bottom: dotted 1px; padding: 25px 50px;"></div>
                    <div class="RadioStyle" style="top: 10px; position: relative;">
                        <span style="position: relative; float: left; top: 10px;">求助状态：</span>
                        <div class="Block PaddingL" style="position: relative; float: left;">

                            <!--
                            <input type="radio" name="chang" id="model5" checked=""> <label for="model5">全部</label>
                            <input type="radio" name="chang" id="model6"> <label for="model6">未开始</label>
                            <input type="radio" name="chang" id="model7"> <label for="model7">进行中</label>
                            <input type="radio" name="chang" id="model8"> <label for="model8">已完成</label>
                            -->

                            <div @click="toggle1(index1)" v-for="(tab,index1) in tabs1" style="float:left;">
                                <input type="radio" checked="" v-if="active1==index1"> <label style="cursor: pointer">{{tab.type}}</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="photo"
                     style="width: 100%; min-width: 800px; height: 100%;; top: 20px; position: relative; margin-bottom: 80px;"
                     align="left">
                    <div v-for="(tab,index1) in tableData" :key="index1">
                        <div class="item" style="width: 100%; height: 190px;">
                            <div class="title_h" style="margin-bottom: 20px">{{tab.title}}


                                <div style="float: right;position: relative;top: -10px">
                                    <div v-if="tab.status==='进行中'">
                                        <div
                                            style="background-color: #48ca48; border-radius: 5px; margin-top: 0px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;">
                                            {{tab.status}}
                                        </div>
                                    </div>

                                    <div v-if="tab.status==='已完成'">
                                        <div
                                            style="background-color: #ca100f; border-radius: 5px; margin-top: 0px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;">
                                            {{tab.status}}
                                        </div>
                                    </div>

                                    <div v-if="tab.status==='未开始'">
                                        <div
                                            style="background-color: #cabd78; border-radius: 5px; margin-top: 0px; text-align: center; height: 30px; width: 120px; padding-top: 5px; color: white;">
                                            {{tab.status}}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row" style="padding: 0 15px 0 15px;color: gray">
                                <div class="col-sm-6" style="padding: 0">
                                    {{tab.username}} |{{tab.type}} | 发布时间：{{tab.add_time}}
                                </div>

                                <div class="col-sm-6" style="padding: 0;text-align: right">
                                    <div v-if="tab.status!=='未开始'">互助者：{{tab.real_name}}</div>
                                </div>

                            </div>
                            <div class="addres">
                                	服务地址：{{tab.address}}
                                <div style="float: right;" v-if="tab.status!=='未开始'">互助日期：{{tab.hand_time}}</div>
                            </div>
                            <div class="addres">
                                	求助内容：{{tab.content}}
                                <div style="float: right;" v-if="tab.status==='已完成'">互助积分:{{tab.scores}}</div>
                            </div>
                            <div v-if="tab.status==='已完成'">
                                <div class="addres">
                                    服务评价：{{tab.reply}}
                                    <div style="float: right;top: -10px;position: relative">服务评星：
                                        <div  class="layui-inline" style="top:-5px;left: 10px;">
                                            <ul class="layui-rate">
                                           <li  v-for="n in tab.scores " class="layui-inline">
                                               <i class="layui-icon layui-icon-rate-solid"></i>
                                           </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

                <div class="Pagination" style="text-align: left;margin-top: 10px;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                   :current-page="currentPage" :page-size="15" layout="total, prev, pager, next"
                                   :total="count">
                    </el-pagination>
                </div>

            </div>


        </div>
    </div>
</template>


<script>

    import commonHead from '../components/commonHead'
    import {getHelpList} from '@/api/getData'

    export default {
        data() {
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,

                type: '',
                status: '',

                active: 0,
                active1: 0,

                tabs: [
                    {
                        type: '全部',
                    },
                    {
                        type: '家庭修配'
                    },
                    {
                        type: '陪护老人',
                    },
                    {
                        type: '生活缴费'
                    },
                    {
                        type: '日常代购',
                    },
                    {
                        type: '预约预定'
                    },
                    {
                        type: '法律服务',
                    },
                    {
                        type: '咨询辅导'
                    },
                    {
                        type: '其他'
                    }
                ],
                tabs1: [
                    {
                        type: '全部',
                    },
                    {
                        type: '未开始'
                    },
                    {
                        type: '进行中',
                    },
                    {
                        type: '已完成'
                    }
                ]
            }
        },

        components: {
            commonHead
        },
        created() {
            this.helpList();
        },
        methods: {
            toggle(i) {
                //alert('1='+i);
                this.active = i;
                //alert('2='+this.active);
                this.helpList();
            },

            toggle1(i) {
                this.active1 = i;
                this.helpList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.helpList();
            },
            async helpList() {
                //alert('this.active='+this.active);
                if (this.active == undefined) {
                    return;
                }

                if (this.active == 0) {
                    this.type = '';
                }
                else {
                    this.type = this.tabs[this.active].type;
                }

                //alert(this.type);

                if (this.active1 == undefined) {
                    return;
                }

                if (this.active1 == 0) {
                    this.status = -1;
                }
                else {
                    this.status = this.active1 - 1;
                }

                const helpList1 = await getHelpList({
                    page: this.currentPage,
                    pagesize: this.pagesize,
                    type: this.type,
                    status: this.status
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

    #help {
        background: #D43F3A;
        color: white;
        font-size: 20px;
        border: solid 0px;
        width: 100px;
        float: right;
    }

    body {
        font: 14px microsoft yahei, tahoma;
    }

    .clear {
        clear: both
    }

    .RadioStyle input {
        display: none
    }

    .RadioStyle label {
        border: 1px solid #CCC;
        color: #666;
        padding: 2px 10px 2px 5px;
        line-height: 28px;
        min-width: 80px;
        text-align: center;
        float: left;
        margin: 2px;
        border-radius: 4px
    }

    .RadioStyle input:checked + label {
        border: 1px solid red;
        color: red
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
        color: gray
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

    .title_h{
        font-size:20px;
        color: black;
        font-weight: bolder;
    }

    @import '../style/layui/css/layui.css';

</style>

