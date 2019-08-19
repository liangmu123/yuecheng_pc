<template>

    <div>

        <common-head></common-head>
        <div class="container" style="width: 1200px;">
            <div class="bread cl" style="margin-top: 20px;">
                <div class="site">当前位置:</div>
                <div class="path">
                    <ol class="breadcrumb">
                        <li><router-link to="/Main">首页</router-link></li>
                        <li><router-link to="/Zxcy">争先创优</router-link></li>

                        <li class="active" v-if="active==0">党员五诺</li>
                        <li class="active" v-if="active==1">党员中心户</li>
                        <li class="active" v-if="active==2">E票通</li>
                    </ol>
                </div>
            </div>
            <div class="container">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <!--
                    <li class="li_style active" role="presentation"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">亮牌亮诺</a></li>
                    <li role="presentation" class="li_style "><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">党员中心户</a></li>
                    <li class="li_style" role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">E票通</a></li>
                    -->


                    <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="[classA,{'active':active===index}]">
                        <a>{{tab.type}}</a>
                    </li>

                </ul>

                <!-- Tab panes -->
                <div class="tab-content" style="padding-top: 50px;">
                    <!--党员五诺-->
                    <div id="tab1" v-if="active==0" :class="['tab-pane',{'active':active===0}]">
                        <div class="padding_tabpanel">
                            <div class="row">
                                <div class="col-sm-11 opacity_div">
                                    <div class="col-sm-4" style="padding-top: 50px;">
                                        <ul id="taskType">
                                            <!--<li name="li_type" id="li_1" class="checked">党组织承诺</li>-->
                                            <!--<li name="li_type" id="li_2" class="list-group">党员承诺</li>-->
                                        </ul>
                                    </div>
                                    <div class="" style="padding-top: 20px;">
                                        <!--搜索栏-->
                                        <!--<div class="input-group"> <input type="text" style="width: 300px;border-radius: 10px;height: 40px;" class="form-control" placeholder="" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2" style="background-color: #FF0000;width: 100px;border-radius: 10px;"> <a id="search" href="javascript:void(0);" style="color: white;">搜索</a> </span> </div>-->
                                        <!--搜索栏end-->

                                        <!--党员五诺div1-->
                                        <div id="" class="back_div" :style="'background-image:url('+url+')'">

                                        </div>

                                        <!--党员五诺div2-->
                                        <div id="div_li_2" style="display: none;">
                                            <!--<table class="table table-bordered" style="margin-top: 30px;" align="center"> <tr style="background-color: #fcc190a8;"> <th width="50px">序号</th> <th width="100px">责任人姓名</th> <th width="80px">联系电话</th> <th width="100px">联系村民</th> <th width="100px">一句话承诺</th> <th width="80px">包管区域</th> <th width="50px">备注</th> </tr> <tr style="background-color: #fffaf2a3;"> <td>1</td> <td>王丽虎</td> <td>15251595660</td> <td>卢佛兴、王祥金、王忠义、王龙福、王珠宝、王珠福</td> <td>环境卫生，从我做起</td> <td>西屋山绿化带</td> <td>村民代表</td> </tr> <tr style="background-color: #fffaf2a3;"> <td>2</td> <td>周亨伟</td> <td>13382277155</td> <td>周国正、周忠兴、周明元、周丰、周兴、周瑞兴、周丙洪</td> <td>贴近群众  贴近实际  搞好宗言村卫生工作</td> <td>老屋家前屋后</td> <td>党员</td> </tr> </table>-->
                                            <img style="width: 650px; padding: 20px 0px;" src="../assets/img/dychengnuo.png" />
                                        </div>
                                        <!--分页-->
                                        <!--分页-->
                                        <!-- <div style="text-align: center;margin-top: 50px">
                                                <el-pagination
                                                    :page-size="1"
                                                    :pager-count="9"
                                                    layout="prev, pager, next"
                                                    :total="9" @current-change="chas">
                                                </el-pagination>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--帮带联扶-->
                    <div v-if="active==1" :class="['tab-pane',{'active':active===1}]">
                        <div class="padding_tabpanel">
                            <div class="row">
                                <div class="col-sm-10 opacity_div flex">
                                    <div class="col-sm-4">
                                        <div style="smargin-top: 60px; height: 300px;">
                                            <!--图表-->
                                            <img src="../assets/img/bg03.png" class="img_left">
                                        </div>
                                    </div>
                                    <div class="col-sm-8" style="padding-top: 20px;">
                                        <!--搜索栏-->
                                        <!--<div class="input-group">
                                            <input type="text"
                                                style="width: 300px; border-radius: 10px; height: 40px;"
                                                class="form-control" placeholder=""
                                                aria-describedby="basic-addon2"> <span
                                                class="input-group-addon" id="basic-addon2"
                                                style="background-color: #FF0000; width: 100px; border-radius: 10px;">
                                                <a id="search" href="javascript:void(0);" style="color: white;">搜索</a>
                                            </span>
                                        </div>-->
                                        <!--搜索栏end-->
                                        <!--党员五诺div1-->
                                        <div id="div_li_1" style="display: block;">
                                            <!--<table class="table table-bordered" style="margin-top: 30px;" align="center"> <tr style="background-color: #fcc190a8;"> <th width="50px">序号</th> <th width="100px">责任人姓名</th> <th width="80px">联系电话</th> <th width="100px">联系村民</th> <th width="100px">一句话承诺</th> <th width="80px">包管区域</th> <th width="50px">备注</th> </tr> <tr style="background-color: #fffaf2a3;"> <td>1</td> <td>周燕萍</td> <td>86235189</td> <td>姚家巷外来新市民小区居民</td> <td>尽心尽力做好环境卫生工作</td> <td>新市民小区绿化</td> <td>党员</td> </tr> <tr style="background-color: #fffaf2a3;"> <td>2</td> <td>周耀法</td> <td>13806168614</td> <td>周红兴、周福兴、王协兴、卢忠岳、朱明华、王玉兴</td> <td>家前屋后整洁有序</td> <td>周兴后面垃圾箱</td> <td>党员</td> </tr> </table>-->
                                            <!-- <img style="width: 650px; padding: 20px 0px;display: block" id="imgss_1" src="../assets/img/bf/1.png" /> -->
                                            <!-- <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_2" src="../assets/img/bf/2.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_3" src="../assets/img/bf/3.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_4" src="../assets/img/bf/4.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_5" src="../assets/img/bf/5.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_6" src="../assets/img/bf/6.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_7" src="../assets/img/bf/7.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_8" src="../assets/img/bf/8.png" />
                                            <img style="width: 650px; padding: 20px 0px;display: none" id="imgss_9" src="../assets/img/bf/9.png" /> -->
                                            <div class="componentTwo">
                                                <div class="left">
                                                    <div class="top" v-if="centerList.img">
                                                        <img :src="centerList.img" alt="图片">
                                                    </div>
                                                    <p class="bottom" v-if="centerList.name">
                                                        {{centerList.name}}
                                                    </p>
                                                </div>
                                                <div class="right">
                                                    <ul class="top">
                                                        <li v-for="(item,index) in centerList.cpartyname" :key="index">{{item}}</li>
                                                    </ul>
                                                    <ul class="bottom">
                                                        <li v-for="(item,index) in centerList.cpeoplename" :key="index">{{item}}</li>
                                                    </ul>
                                                </div>
                                                <div v-if="!centerList.img && !centerList.name && centerList.cpartyname.length==0 && centerList.cpeoplename.length==0" style="font-size:32px;">
                                                    暂无数据
                                                </div>
                                            </div>
                                        </div>
                                        <!--分页-->
                                        <div style="text-align: left;margin-top: 50px">
                                            <el-pagination
                                                v-if="total>1"
                                                :page-size="1"
                                                :pager-count="9"
                                                layout="prev, pager, next"
                                                :total="total" @current-change="changeSize">
                                            </el-pagination>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--一票通-->
                    <div id="tab3" v-if="active==2" :class="['tab-pane',{'active':active===2}]">
                        <div class="padding_tabpanel">
                            <div class="row">
                                <div class="col-sm-11 opacity_div">
                                    <div class="col-sm-3" style="padding-top: 60px;">
                                        <ul id="taskType">
                                            <li name="li_type0" id="organization" @click="zuz" class="checked list-group">党组织投票</li>
                                            <li name="li_type0" id="party_member" @click="dangy" class="list-group">党员投票</li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-9" style="padding-top: 20px;">
                                        <!--搜索栏-->
                                        <!--<div class="input-group">
                                            <input type="text"
                                                style="width: 300px; border-radius: 10px; height: 40px;"
                                                class="form-control" placeholder=""
                                                aria-describedby="basic-addon2"> <span
                                                class="input-group-addon" id="basic-addon2"
                                                style="background-color: #FF0000; width: 100px; border-radius: 10px;">
                                                <a id="search" href="javascript:void(0);" style="color: white;">搜索</a>
                                            </span>
                                        </div>-->
                                        <!--搜索栏end-->
                                        <div id="organization_table" style="display: block;background: white;border-radius: 10px;">
                                            <!--<table class="table table-bordered" style="margin-top: 30px;" align="center"> <tr style="background-color: #fcc190a8;"> <th width="100px">投票主题</th> <th width="100px">投票人数</th> <th width="100px">投票结果</th> </tr> <tr style="background-color: #fffaf2a3;"> <td>迎国庆道德党组织评选</td> <td>406人</td> <td>小林村支部当选</td> </tr> <tr style="background-color: #fffaf2a3;"> <td>庆中秋优秀党组织评选</td> <td>367人</td> <td>卫庄村支部当选</td> </tr> <tr style="background-color: #fffaf2a3;"> <td>迎国庆先进党组织评选</td> <td>400人</td> <td>李庄村支部当选</td> </tr> </table>    -->
                                            <!--<img style="width: 650px; padding: 20px 0px;" src="../assets/img/zhibu.png" />-->
                                            <div id="myChart" style="width: 750px;height: 350px;"></div>
                                        </div>
                                        <div id="party_member_table" style="display: none;background: white;border-radius: 10px;">
                                            <!--<table class="table table-bordered" style="margin-top: 30px;" align="center"> <tr style="background-color: #fcc190a8;"> <th width="100px">投票主题</th> <th width="100px">投票人数</th> <th width="100px">投票结果</th> </tr> <tr style="background-color: #fffaf2a3;"> <td>迎国庆道德党员评选</td> <td>406人</td> <td>李国庆当选</td> </tr> <tr style="background-color: #fffaf2a3;"> <td>庆中秋优秀党员评选</td> <td>388人</td> <td>张强当选</td> </tr> <tr style="background-color: #fffaf2a3;"> <td>迎国庆先进党员评选</td> <td>391人</td> <td>王子文当选</td> </tr> </table>    -->
                                            <!--<img style="width: 650px; padding: 20px 0px;" src="../assets/img/pingxun.png" />-->
                                            <div id="dangyuChart" style="width: 750px;height: 350px;"></div>
                                        </div>
                                    </div>
                                    <!--分页-->
                                    <!--<div class="pagers cl" style="margin-left: 380px;">
                                        <ul class="cl">
                                            <li><a href="">上一页</a></li>
                                            <li class="num page-act"><a href="">1</a></li>
                                            <li class="num"><a href="">2</a></li>
                                            <li class="num"><a href="">3</a></li>
                                            <li class="num"><a href="">4</a></li>
                                            <li><a href="">下一页</a></li>
                                        </ul>
                                    </div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    import Vue from 'vue'
    import commonHead from '../components/commonHead'
    import {getPayList} from '@/api/getData'
    // 引入基本模板
    // var echarts = require('echarts');
    import echarts from 'echarts' //引入echarts
    import $ from 'jquery'
    import {get_lplnList} from '@/api/api'
    import {get_partyCenterList} from '@/api/api'
    import {url} from '@/api/api'

    export default {
        data(){
            return {
                url:'',
                tableData: [],
                centerList:{
                    name:'',
                    img:'',
                    cpartyname:[],
                    cpeoplename:[],
                },
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                tpe: 1,
                search:'',
                total:0,
                active0Img:'',
                classA:'li_style',
                active: this.$route.query.v1,
                tabs: [
                    {
                        type: '亮牌亮诺',
                    },
                    {
                        type: '党员中心户'
                    },
                    {
                        type: 'E票通'
                    }
                ]
            }
        },


        components: {
            commonHead
        },
        created()
        {
            //alert(this.$route.query.v1);
            //this.active = this.$route.query.v1;
            //this.getPayList();
            this.getOne()
            this.getTwo()
        },
        mounted(){
            // that.dangzhuTuBiao();
            // that.dangyuanTuBiao();
            
        },
        methods: {
            changeSize(val){
                //console.log(val)
                var that = this;
                var param = {};
                param.currentPage = val;
                that.$axios.post(get_partyCenterList,param)
                .then(res=>{
                    console.log(res.data.data.items[0])
                    that.centerList.name = res.data.data.items[0].pname
                    that.centerList.img = url + res.data.data.items[0].pimg
                    that.centerList.cpartyname = res.data.data.items[0].cpartyname
                    that.centerList.cpeoplename = res.data.data.items[0].cpeoplename
                })
            },
            getOne(){
                var that = this;
                that.$axios.get(get_lplnList)
                .then(res=>{
                    //console.log(res.data.data.items[0].img)
                    if(res.data.data.items.length>0){
                        if(res.data.data.items[0].img){
                            that.url = url + res.data.data.items[0].img;
                        }
                    }
                    
                })
            },
            getTwo(){
                var that = this;
                var param = {};
                param.currentPage = that.currentPage;
                that.$axios.post(get_partyCenterList,param)
                .then(res=>{
                    console.log(res.data.data.items[0])
                    if(res.data.data.items.length>0){
                        that.centerList.name = res.data.data.items[0].pname
                        that.centerList.img = url + res.data.data.items[0].pimg
                        that.centerList.cpartyname = res.data.data.items[0].cpartyname
                        that.centerList.cpeoplename = res.data.data.items[0].cpeoplename
                        that.total = res.data.data.totalpage
                    }
                })
            },
            dangzhuTuBiao(){
                var myChart = echarts.init(document.getElementById('myChart'));
                myChart.setOption({
                    title: {
                        text: '先进党组织评选第四季度',
                        padding: [10, 0, 10, 280]  // 位置
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            magicType: {show: true, type: ['line', 'bar']},
                            saveAsImage: {show: true},
                            restore: {show: true},
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['农村一支部', '大学生支部', '农村三支部', '工业支部', '爱多支部'],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 0
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '投票数',
                            min: 0,
                            max: 150,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} 票'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'票数',
                            type:'bar',
                            data:[120,110,105,100,98],
                            barMaxWidth: 50,//最大宽度
                            itemStyle: {
                                normal: {
                                    // 定制显示（按顺序）
                                    label: {
                                        show: true, //开启显示
                                        position: 'top', //在上方显示
                                        textStyle: { //数值样式
                                            color: 'black',
                                            fontSize: 14
                                        }
                                    },
                                    color: function(params) {
                                        var colorList = ['#F7B794','#95F4F8','#94CAF8','#B494F7','#FA93E6'];
                                        return colorList[params.dataIndex]
                                    }
                                },
                            },
                        }
                    ]
                });
            },
            dangyuanTuBiao(){
                var dangyuChart = echarts.init(document.getElementById('dangyuChart'));

                dangyuChart.setOption({
                    title: {
                        text: '先进党员评选第四季度',
                        padding: [10, 0, 10, 280]  // 位置
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            magicType: {show: true, type: ['line', 'bar']},
                            saveAsImage: {show: true},
                            restore: {show: true},
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['殷进法', '沈玉娟', '陈文权','陈仲清','殷瑞能'],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 0
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '投票数',
                            min: 0,
                            max: 150,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} 票'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'票数',
                            type:'bar',
                            data:[81,80,79,78,77],
                            barMaxWidth: 50,//最大宽度
                            itemStyle: {
                                normal: {
                                    // 定制显示（按顺序）
                                    label: {
                                        show: true, //开启显示
                                        position: 'top', //在上方显示
                                        textStyle: { //数值样式
                                            color: 'black',
                                            fontSize: 14
                                        }
                                    },
                                    color: function(params) {
                                        var colorList = ['#F7B794','#95F4F8','#94CAF8','#B494F7','#FA93E6'];
                                        return colorList[params.dataIndex]
                                    }
                                },
                            },
                        }
                    ]
                });
            },
            toggle(i)
            {
                var _this = this;
                this.active = i;
                if(i == 2){
                    Vue.nextTick(function(){
                        _this.dangzhuTuBiao();
                        _this.dangyuanTuBiao();
                    })
                }
                //alert(this.currentPage);
                //alert(this.active);

                //this.getPayList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;


                this.getPayList();
            },
            async getPayList()
            {
                if(this.active == undefined)
                {
                    return;
                }


                const Pays1 = await getPayList({page: this.currentPage, pagesize: this.pagesize, tpe:this.active, search:this.search});
                //alert(Articles1);

                const Pays  = Pays1.data.items;
                //alert(Users);

                this.count = Pays1.data.total;

                this.tableData = Pays;

            },
            chas(val){

                for(var i=1;i<=9;i++){
                    document.getElementById('imgss_'+i).style.display = "none";
                }

                /*$('#div_li_1').find('img').each(function () {
                    $(this).css('display','none');
               });*/

                document.getElementById('imgss_'+val).style.display = "block";
                /*$('#imgss_'+val).css('display','block');*/
            },
            zuz(){
                this.dangzhuTuBiao();
                document.getElementById('organization_table').style.display = "block";
                document.getElementById('party_member_table').style.display = "none";

                document.getElementById('organization').classList.add('checked');
                document.getElementById('party_member').classList.remove('checked');
                /*                document.getElementById('#organization').prop('class','checked');
                                document.getElementById('#party_member').prop('class','list-group');*/
            },
            dangy(){
                this.dangyuanTuBiao();
                document.getElementById('organization_table').style.display = "none";
                document.getElementById('party_member_table').style.display = "block";


                document.getElementById('organization').classList.remove('checked');
                document.getElementById('party_member').classList.add('checked');
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
    .componentTwo{
        display:flex;
        align-items:center;
    }
    .componentTwo ul,.componentTwo p{
        padding:0;
        margin:0;
    }
    .componentTwo .left{
        flex-basis: 150px;
        margin-right:60px;
    }
    .componentTwo .left .top{
        width:150px;
    }
    .componentTwo .left .top img{
        width:150px;
    }
    .componentTwo .left p{
        background-color:#9C4D00;
        color:#FFF;
        line-height:30px;
    }
    .componentTwo .right .top,.componentTwo .right .bottom{
        display:flex;
        flex-wrap:wrap;
    }
    .componentTwo .right .top li,.componentTwo .right .bottom li{
        background-color:#9C4D00;
        margin-right:10px;
        margin-bottom:5px;
        width:82px;
        line-height:35px;
        color:#FFF;
        font-size:13px;
    }
    .componentTwo .right .top li{
        background-image:url(../assets/new/dang.png);
        background-repeat: no-repeat;
        background-position: 10px 9px;
        padding-left:15px;
    }
    .componentTwo .right .bottom li:nth-child(1){
        margin-top:30px;
    }
    .componentTwo .right .bottom li:nth-child(2){
        margin-top:30px;
    }
    .componentTwo .right .bottom li:nth-child(3){
        margin-top:30px;
    }
    .componentTwo .right .bottom li:nth-child(4){
        margin-top:30px;
    }
    .componentTwo .right .bottom li:nth-child(5){
        margin-top:30px;
    }
    .img_left {
        position: absolute;
        left: 15px;
        top: 20px;
        width: 300px;
        height: 250px;
    }

    .li_style {
        background-color: white;
        width: 200px;
        margin-right: 30px;
        text-align: center;
        border-radius: 10%;
    }

    .nav-tabs>li.active>a,
    .nav-tabs>li.active>a:focus,
    .nav-tabs>li.active>a:hover {
        color: white !important;
        width: 200px;
        cursor: default;
        background-color: red !important;
        border: 1px solid #ddd;
        border-radius: 10%;
        border-bottom-color: transparent;
    }

    .back_div {
        background-size:100% 100%;
        background-repeat: no-repeat;
        height: 360px;
        width: 1080px;
    }
    .flex{
        display:flex;
        align-items: center;
    }
    .opacity_div {
        
        background-color: orange;
        height: 400px;
        margin-left: 15px;
        border-radius: 10px;
        /*opacity: 0.2;*/
        background: rgba(239, 190, 99, 0.4);
        width: 1100px;
    }

    .list-group {
        padding-left: 0;
        margin-bottom: 20px;
        background-color: white;
        border-radius: 10px;
        list-style: none;
        width: 200px;
        text-align: center;
        padding: 10px;
    }

    .list-group:hover {
        cursor: pointer;
    }

    .checked {
        padding-left: 0;
        margin-bottom: 20px;
        background-color: red;
        border-radius: 10px;
        list-style: none;
        width: 200px;
        text-align: center;
        padding: 10px;
        color: white;
    }

    .table-bordered>tbody>tr>td,
    .table-bordered>tbody>tr>th,
    .table-bordered>tfoot>tr>td,
    .table-bordered>tfoot>tr>th,
    .table-bordered>thead>tr>td,
    .table-bordered>thead>tr>th {
        border: 1px solid #000;
        vertical-align: middle;
    }




</style>
