<template>
    <div >

        <common-head></common-head>

        <div class="container" style="width: 1300px !important;">

            <div class="row" style="margin-top:50px;">
                <div class="col-sm-10 col-sm-offset-1" style="background: #F4DEB9;min-height:780px;opacity: 0.9;min-width: 1290px;margin-left: 0%;border-radius: 10px;">
                    <div class="con" style="padding: 30px 0 30px 0;" align="left">
                        <!--区域,两栏一换行-->
                        <div class="row" >

                            <div class="col-sm-6" >
                                <div class="col-sm-3 size">活动标题:</div>
                                <div class="col-sm-8 conts">{{title}}</div>
                            </div>
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">发起组织:</div>
                                <div class="col-sm-8 conts">{{group_name}}</div>
                            </div>
                        </div>
                        <!--区域end-->
                        <!--区域,两栏一换行-->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">开始时间:</div>
                                <div class="col-sm-8 conts">{{start_time}}</div>
                            </div>
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">结束时间:</div>
                                <div class="col-sm-8 conts">{{end_time}}</div>
                            </div>
                        </div>
                        <!--区域end-->
                        <!--区域,两栏一换行-->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">活动联系人:</div>
                                <div class="col-sm-8 conts">{{contacter}}</div>
                            </div>
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">联系电话:</div>
                                <div class="col-sm-8 conts">{{phone}}</div>
                            </div>
                        </div>
                        <!--区域end-->
                        <!--区域,两栏一换行-->
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">参与人数:</div>
                                <div class="col-sm-8 conts">全体人员</div>
                            </div>
                            <div class="col-sm-6">
                                <div class="col-sm-3 size">活动地点:</div>
                                <div class="col-sm-8 conts">{{address}}</div>
                            </div>

                        </div>
                        <!--区域end-->
                        <!--区域,两栏一换行-->
                        <div class="row">
                            <div class="neirong2">
                                <div class="col-sm-12">
                                    <div class="contents_t size">活动内容:</div>
                                    <div class="contents_c conts" style="text-indent: 2em" v-html="brief"></div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="col-sm-2 size">活动展示:</div><br />
                                <div class="row img_showlist" style="">
                                    <div class="col-sm-12">
                                        <div class="col-sm-10 col-sm-offset-1" style="padding: 0 20px">
                                            <div class="col-sm-6" style="padding: 0px 30px 0 0"  v-for="item in photos"><a :href="IMG_PATH+item"><img :src="IMG_PATH+item" class="img_style"/></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--区域end-->
                    </div>
                </div>
            </div>

            <!--
            <div class="dj143">

                <table cellpadding="0" cellspacing="0" border="0" bordercolor="#cbcbcb" style="border-collapse:collapse;border-spacing:0; ">
                    <tr style="line-height:40px;">
                        <td class="title">活动标题</td>
                        <td>{{title}}</td>
                        <td class="title">活动状态</td>
                        <td>
                            <span v-if="status == '0'" >未开始</span>
                            <span v-if="status == '1'" >进行中</span>
                            <span v-if="status == '2'" >已结束</span>
                        </td>
                    </tr>
                    <tr style="line-height:40px;">
                        <td class="title">开始时间</td>
                        <td>{{start_time}}</td>
                        <td class="title">结束时间</td>
                        <td>{{end_time}}</td>
                    </tr>
                    <tr style="line-height:40px;">
                        <td class="title">发起党组织</td>
                        <td colspan="3">{{group_name}}</td>
                    </tr>
                    <tr style="line-height:40px;">
                        <td class="title">联系人</td>
                        <td>{{contacter}}</td>
                        <td class="title">联系电话</td>
                        <td>{{phone}}</td>
                    </tr>
                    <tr style="line-height:40px;">
                        <td class="title">活动地址</td>
                        <td colspan="3">{{address}}</td>
                    </tr>
                    <tr style="line-height:50px;">
                        <td class="title">活动内容</td>
                        <td colspan="3">{{brief}}</td>
                    </tr>
                    <tr style="line-height:40px;">
                        <td class="title">活动图片</td>
                        <td colspan="3" align="left" style="float:left;width:430px;height:430px;margin:20px 15px;border:0px"><img :src="images" style="max-width:90%;"/> </td>
                    </tr>
                </table>

            </div>

            -->

        </div>

    </div>
</template>

<script>

    import commonHead from '../components/commonHead'
    import {getActivityInfo} from '@/api/getData'
    import tc from '../style/screen/js/touchTouch.jquery'
    import $ from 'jquery'

    export default {
        data(){
            return {
                aid:this.$route.query.aid,
                content:'',
                title:'',
                start_time:'',
                end_time:'',
                group_name:'',
                address:'',
                contacter:'',
                phone:'',
                brief:'',
                images:'',
                status:'',
                photos:'',
                IMG_PATH:'http://ycdj.cst-info.cn',
            }
        },
        created(){

            this.getActivityInfo();
        },
        mounted: function () {
            setTimeout(function () {
                $(".img_showlist").each(function(){
                    var a  = $(this).find("a");
                    $(this).find("a").touchTouch();
                });
            },1000);
        },
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        },
        components: {
            commonHead,
        },
        methods:
            {
                async getActivityInfo()
                {
                    if(this.aid == undefined)
                    {
                        return;
                    }

                    const Activity1 = await getActivityInfo({id: this.aid});
                    //alert(Articles1);

                    this.content  = Activity1.data.content;

                    this.title = Activity1.data.title;
                    this.start_time = Activity1.data.format_start_time;
                    this.end_time = Activity1.data.format_end_time;

                    this.group_name = Activity1.data.group_name;
                    this.address = Activity1.data.address;
                    this.contacter = Activity1.data.contacter;
                    this.phone = Activity1.data.phone;
                    this.brief = Activity1.data.content;
                    this.images = Activity1.data.images;
                    this.status = Activity1.data.status;
                    this.photos = Activity1.data.photos;
                }

            }
    }





</script>


<style lang="less" scoped>
    @import '../style/activities.css';
    @import '../style/main.css';
    @import '../style/mainheader.css';
    @import '../style/dangjian_window.css';
    @import '../style/style.css';
    @import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
    @import '../style/touchTouch.css';

    .size{
        text-align: left;
        font-size: 20px;
    }

    .conts{
        font-size: 18px;
    }

    .contents_t{
        width: 13%;
        float: left;
        padding: 0 15px;
    }

    .contents_c{
        width: 85%;
        float: left;
        padding: 0 100px 0 0;
    }

    .content{
        line-height: 30px;
    }
    .row{
        padding-top: 15px;
        padding-bottom: 15px;
        margin-left: 20px;
        margin-right: 20px;

    }
    .con>.row{
        border: 1px solid #D3A669;
    }
/*    .neirong2 img{
        width: 270px;
        padding-top: 20px;
        float: left;
        padding-right: 20px;
        padding-bottom: 20px;
    }*/


    .img_style{
        width: 100%;
        height: 313px;
        margin: 20px 20px 20px 0px;
    }


</style>
