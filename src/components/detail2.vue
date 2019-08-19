<template>
<div>

<common-head></common-head>

<div style="margin-top:50px"></div>

<div class="container" style="width: 1300px !important;">

<!--<div class="row" style="margin-top:10px;">
	<div class="col-sm-10 col-sm-offset-1">
		<div style="position: relative; top: 30px; height: 500px;" align="left">
			&lt;!&ndash;区域,两栏一换行&ndash;&gt;
			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4 size">会议标题 :</div>
					<div class="col-sm-8 content">{{title}}</div>
				</div>
				<div class="col-sm-6">
					<div class="col-sm-4 size">发起组织 :</div>
					<div class="col-sm-8 content">{{group_name}}</div>
				</div>
			</div>
			&lt;!&ndash;区域end&ndash;&gt;
			&lt;!&ndash;区域,两栏一换行&ndash;&gt;
			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4 size">开始时间 :</div>
					<div class="col-sm-8 content">{{start_time}}</div>
				</div>
				<div class="col-sm-6">
					<div class="col-sm-4 size">结束时间 :</div>
					<div class="col-sm-8 content">{{end_time}}</div>
				</div>
			</div>
			&lt;!&ndash;区域end&ndash;&gt;
			&lt;!&ndash;区域,两栏一换行&ndash;&gt;
			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4 size">会议联系人 :</div>
					<div class="col-sm-8 content">{{contacter}}</div>
				</div>
				<div class="col-sm-6">
					<div class="col-sm-4 size">联系电话 :</div>
					<div class="col-sm-8 content">{{phone}}</div>
				</div>
			</div>
			&lt;!&ndash;区域end&ndash;&gt;
			&lt;!&ndash;区域,两栏一换行&ndash;&gt;
			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4 size">参与人数 :</div>
					<div class="col-sm-8 content">全体人员</div>
				</div>
				<div class="col-sm-6">
					<div class="col-sm-4 size">活动地点 :</div>
					<div class="col-sm-8 content">{{address}}</div>
				</div>

			</div>
			&lt;!&ndash;区域end&ndash;&gt;
			&lt;!&ndash;区域,两栏一换行&ndash;&gt;
			<div class="row">
				<div class="neirong2">
					<div class="col-sm-6">
						<div class="col-sm-4 size">会议内容 :</div>
						<div class=" col-sm-8 content ">{{brief}}</div>
					</div>
					<div class="col-sm-6">
						<div class="col-sm-4 size">会议直播 :</div>

						<div class=" col-sm-8 content " style="cursor:pointer;" @click="openLive(video_path)">
							<img src="../assets/img/live.png" style="width:120px;height:35px;margin-top:-10px;"/>
						</div>

					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-6">
					<div class="col-sm-4 size">会议图片 :</div>
					<div class=" col-sm-8 content ">
						<img :src="images"/>
					</div>
				</div>
			</div>
			&lt;!&ndash;区域end&ndash;&gt;
		</div>
	</div>
</div>-->

    <div class="row" style="margin-top:0px;">
        <div class="col-sm-10 col-sm-offset-1" style="background: #F4DEB9;min-height:780px;opacity: 0.9;min-width: 1290px;margin-left: 0%;border-radius: 10px;">
            <div class="con" style="padding: 30px 0 30px 0;" align="left">
                <!--区域,两栏一换行-->
                <div class="row" >

                    <div class="col-sm-6" >
                        <div class="col-sm-3 size">会议标题:</div>
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
                        <div class="col-sm-3 size">会议联系人:</div>
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
                        <div class="col-sm-3 size">会议地点:</div>
                        <div class="col-sm-8 conts">{{address}}</div>
                    </div>

                </div>
                <!--区域end-->
                <!--区域,两栏一换行-->
                <div class="row" v-if="status != 0">
                    <div class="col-sm-6" v-if="status == 1">
                        <div class="col-sm-3 size">会议直播:</div>
                        <div class="col-sm-8 "><div @click="openLive(video_path)" class="tu"><img src="../assets/img/shykmbtp.png" style="width: 300px"></div></div>
                    </div>
                    <div class="col-sm-6" v-if="status == 2">
                        <div class="col-sm-3 size">会议回看:</div>
                        <div class="col-sm-8 ">
                            <div @click="getShipin(video_url)" class="tu">
                                <img src="../assets/img/shykmbtp.png" style="width: 300px;height: 205px" v-if="images == '' ">
                                <img :src="images" style="width: 300px;height: 205px" v-if="images != ''">
                            </div>
                        </div>
                    </div>

                </div>
                <!--区域end-->
                <!--区域,两栏一换行-->
                <div class="row">
                    <div class="neirong2">
                        <div class="col-sm-12">
                            <div class="contents_t size">会议内容:</div>
                            <div class=" contents_c  conts" style="text-indent: 2em" v-html="brief"></div>
                        </div>

                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-12">
                        <div class="col-sm-2 size">会议展示:</div><br />
                    </div>

                    <div class="row img_showlist" style="">
                        <div class="col-sm-12">
                            <div class="col-sm-10 col-sm-offset-1" style="padding: 0 40px">
                                <div class="col-sm-6" style="padding: 0px 30px 0 0"  v-for="item in photos"><a :href="IMG_PATH + item"><img :src="IMG_PATH + item" class="img_style"/></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--区域end-->
            </div>
        </div>
    </div>



</div>
</div>
</template>

<script>

	import commonHead from '../components/commonHead'
	import hls from '../components/hls'
	import {getMeetingInfo} from '@/api/getData'
    import $ from 'jquery'
    import tc from '../style/screen/js/touchTouch.jquery'
    import {getShipin} from '@/api/getData'

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
                video_path:'',
                photos:'',
                video_url: '',
                status: '',
                IMG_PATH:'http://ycdj.cst-info.cn',
            }
        },
        created(){
            this.getMeetingInfo();
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
    		hls
    	},
    	methods:
    	{
    		async getMeetingInfo()
            {
            	if(this.aid == undefined)
            	{
            		return;
            	}

                const Activity1 = await getMeetingInfo({id: this.aid});
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
                this.images = Activity1.data.img;
                this.photos = Activity1.data.photos;
                this.status = Activity1.data.status;
                this.video_path = Activity1.data.play_url;
                this.video_url = Activity1.data.video_url;
                this.status = Activity1.data.status;

                //alert(this.video_path);
            },

            openLive(video_path)
            {
            	window.open('http://ycweb.cst-info.cn/camera.html?'+video_path);
            },

            async getShipin(path)
            {
                //alert(Articles1);
                window.open('http://ycweb.cst-info.cn/live.html?'+path);


            },



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

    .neirong2 span{
        background-color: none!important;
    }

    .img_style{
        width: 100%;
        height: 250px;
        margin: 20px 20px 20px 0px;
    }

    .tu img:hover{
        cursor: pointer;
    }

</style>
