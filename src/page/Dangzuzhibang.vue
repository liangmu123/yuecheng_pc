<template>

    <div>

        <common-head></common-head>

        <el-dialog title="" width="60%" :visible.sync="formVisible" class="capacity">
            <img src="../assets/img/jifen.png" style="width: 80%">
        </el-dialog>

        <div class="container" style="width: 1200px;">
            <div class="bread cl" style="margin-top: 20px;">
                <div class="site">当前位置:</div>
                <div class="path">
                    <ol class="breadcrumb">
                        <li><router-link to="/Main">首页</router-link></li>
                        <li><router-link to="/Zxcy">争先创优</router-link></li>
                        <li class="active">党组织争先榜</li>
                    </ol>
                </div>
            </div>

            <div >
                <!--	<img src="../assets/img/10086.png" style="width: 580px; height: auto;float:left;">-->
                <div style="" class="pik">
                    <el-row class="one"><el-col :span="8" :offset="8" ><div>农村一支部</div></el-col></el-row>
                    <el-row class="two"><el-col :span="8" :offset="1"><div>大学生支部</div></el-col></el-row>
                    <el-row class="three"><el-col :span="8" :offset="15"><div>农村三支部</div></el-col></el-row>
                    <el-row :gutter="20" class="lang">
                        <el-col :span="24">
                            <div>
                                <el-col :span="8">110<p>大学生支部</p></el-col>
                                <el-col :span="8">120<p>农村一支部</p></el-col>
                                <el-col :span="8">105<p>农村三支部</p></el-col>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" class="tab_line">
                        <el-col :span="24">
                            <div>
                                <el-col :span="4" >排行</el-col>
                                <el-col :span="4" :offset="6">支部</el-col>
                                <el-col :span="4" :offset="5">积分数</el-col>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" class="tab_line">
                        <el-col :span="24">
                            <div>
                                <el-col :span="4">4</el-col>
                                <el-col :span="12" :offset="2">工业支部</el-col>
                                <el-col :span="4" :offset="1">100</el-col>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" class="tab_line_two">
                        <el-col :span="24">
                            <div>
                                <el-col :span="4">5</el-col>
                                <el-col :span="12" :offset="2">爱多支部</el-col>
                                <el-col :span="4" :offset="1">98</el-col>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <div style="" class="pic">
                    <el-row class="one"><el-col :span="6" :offset="9" ><div>{{one}}</div></el-col></el-row>
                    <el-row class="two"><el-col :span="6" :offset="2"><div>{{two}}</div></el-col></el-row>
                    <el-row class="three"><el-col :span="6" :offset="16"><div>{{three}}</div></el-col></el-row>
                    <el-row :gutter="20" class="lang">
                        <el-col :span="24">
                            <div>
                                <el-col :span="8">{{twoscroe}}<p>{{two}}</p></el-col>
                                <el-col :span="8">{{onescroe}}<p>{{one}}</p></el-col>
                                <el-col :span="8">{{threescroe}}<p>{{three}}</p></el-col>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" class="tab_line">
                        <el-col :span="24">
                            <div>
                                <el-col :span="4">排行</el-col>
                                <el-col :span="4" :offset="6">姓名</el-col>
                                <el-col :span="4" :offset="5">积分数</el-col>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" class="tab_line">
                        <el-col :span="24">
                            <div>
                                <el-col :span="4">4</el-col>
                                <el-col :span="12" :offset="2">{{four}}</el-col>
                                <el-col :span="4" :offset="1">{{fourscroe}}</el-col>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" class="tab_line_two">
                        <el-col :span="24">
                            <div>
                                <el-col :span="4">5</el-col>
                                <el-col :span="12" :offset="2">{{five}}</el-col>
                                <el-col :span="4" :offset="1">{{fivescroe}}</el-col>
                            </div>
                        </el-col>
                    </el-row>


                    <div style="position:relative;top:145px;width:580px;height:100px;cursor:pointer" @click="openShiji()"></div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>

    import commonHead from '../components/commonHead'
    import {getIntegralSort} from '@/api/getData'

    export default {
        data(){
            return {
                formVisible:false,
                integralList: '',
                one: '',
                onescroe: '',
                two: '',
                twoscroe: '',
                three: '',
                threescroe: '',
                four: '',
                fourscroe: '',
                five: '',
                fivescroe: '',
            }
        },
        created: function () {
            this.getIntegralSort();
        },
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        },
        components: {
            commonHead,
        },
        methods: {
            async getIntegralSort(){
                const integralList = await getIntegralSort();
                this.integralList = integralList.data;
                this.one = integralList.data[0].username;
                this.onescroe = integralList.data[0].scores;
                this.two = integralList.data[1].username;
                this.twoscroe = integralList.data[1].scores;
                this.three = integralList.data[2].username;
                this.threescroe = integralList.data[2].scores;
                this.four = integralList.data[3].username;
                this.fourscroe = integralList.data[3].scores;
                this.five = integralList.data[4].username;
                this.fivescroe = integralList.data[4].scores;
            },
            openShiji()
            {
                this.formVisible = true;

            },

        }
    }
</script>

<style scoped lang="less">
    @import '../style/main.css';
    @import '../style/mainheader.css';
    @import '../style/dangjian_window.css';
    @import '../style/style.css';
    @import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

    .pic {
        float:left;background-image: url(../assets/img/10087.png);background-size:100% 100%;background-repeat: no-repeat;width: 580px; height: 573px;
    }

    .pik {
        float:left;background-image: url(../assets/img/10086.png);background-size:100% 100%;background-repeat: no-repeat;width: 580px; height: 573px;
    }


    .img_left {
        position: absolute;
        left: 15px;
        top: 80px;
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

    .one{
        color: #AB6C03;
        position: relative;
        top:10px;
        div{
            font-size: 30px;
            font-weight: bolder;
        }
    }

    .two:extend(.one){
        top:45px;
        div{
            font-size: 30px;
            font-weight: bolder;
        }
    }

    .three:extend(.one){
        top:25px;
        div{
            font-size: 30px;
            font-weight: bolder;
        }
    }

    .lang:extend(.one){
        top:100px;
        div{
            font-size: 36px;
            font-weight: bolder;
            color: #FF5C5C;
        }
        p{
            color: #696968;
            font-size: 18px;
        }
    }

    .tab_line:extend(.one){
        top:100px;
        div{
            font-size: 22px;
            font-weight: bolder;
            color: black;
            margin-top: 3px;
        }
    }

    .tab_line_two:extend(.one){
        top:125px;
        div{
            font-size: 22px;
            font-weight: bolder;
            color: black;
        }
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
        background-color: gray;
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
<style>
    .el-dialog--small {
        width: 60% !important;
    }
</style>
