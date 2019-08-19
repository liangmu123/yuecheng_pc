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
            <li v-if="v1==3"><router-link to="/Qingfeng">宗言清风</router-link></li>

			<li class="active" v-if="v1==0">微党课</li>
			<li class="active" v-if="v1==1">三会一课</li>
			<li class="active" v-if="v1==2">他山之石</li>
            <li class="active" v-if="v1==3">警钟长鸣</li>
		</ol>
	</div>
</div>

<div class="dangfei">
	<div class="videos" style="min-height: 700px">
        <div style="padding-right: 100px;padding: 0 100px 0 60px">
            <div style="text-align: left;font-size: 28px;font-weight: bolder;margin-bottom: 10px">学习进度：
                <span>【已学时长: <span style="font-weight: bolder">82.5</span> 小时; 总时长： <span style="font-weight: bolder">256.5</span> 小时】</span></div>
            <div style="margin-bottom: 30px;">
                <el-progress :text-inside="true" :stroke-width="30" :percentage="15" status="success"></el-progress>
            </div>
        </div>
		<ul>
			<li v-for="(tab,index) in tableData" :key="index">

			<!--
			<video width="100%" controls controlsList="nodownload" controlslist="nofullscreen" height="180" controls>
					<source src="../assets/video/one.mp4" type="video/mp4">
			</video>


			<video id="my-video" class="video-js" controls preload="auto" height="180" >
			 	<source src="http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" type="application/x-mpegURL">
			</video>
			-->

                <div @click="getShipin(tab.id)" class="tu">
                    <img src="../assets/img/shykmbtp.png" style="width: 300px;height: 205px" v-if="tab.img.length < 25">
                    <img :src="tab.img" style="width: 300px;height: 205px" v-else-if="tab.img.length > 25">
                    <div style="margin-top: 10px;font-weight: bolder;font-size: 18px">【{{tab.title}}】</div>
                </div>

<!--			<hls :sc="tab.video_path" ></hls>-->



			</li>

		</ul>
	</div>

</div>

<div class="Pagination" style="text-align: left;margin-top: 10px;margin-left: 50px">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="6" layout="total, prev, pager, next" :total="count">
    </el-pagination>
</div>

</div>

</div>
</div>

</template>

<script>

	import commonHead from '../components/commonHead'
	import hls from '../components/hls'
	import {getArticleList} from '@/api/getData'
    import {getShipin} from '@/api/getData'
    import {allLearnSpeed} from '@/api/getData'

    export default {
    	data() {
	      return {
	        playerOptions: {
	          // videojs options
	          muted: true,
	          language: 'en',
	          playbackRates: [0.7, 1.0, 1.5, 2.0],
	          sources: [{
	            type: "application/x-mpegURL",
          		src: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
	          }],
	          poster: "/static/images/author.jpg",
	        },

	        tableData: [],
            currentRow: null,
            pagesize: 6,
            count: 0,
            currentPage: 1,
            cid: 0,
            tpe:5, //推流

            v1:this.$route.query.v1,
              speed: ''
	      }
	    },

		created(){
            this.getArticleList();
            this.allLearnSpeed();
        },
		components: {
    		commonHead,
    		hls
    	},
    	methods: {
    		handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;
                //this.offset = (val - 1)*this.limit;

                this.getArticleList();
            },
            async allLearnSpeed()
            {
                const Articles1 = await allLearnSpeed();
                //alert(Articles1);

                const Articles  = Articles1;

                this.speed = Articles;

            },
            async getArticleList()
            {
            	//alert('v1='+this.v1);
            	if(this.v1 == undefined)
            	{
            		return;
            	}

            	if(this.v1 == 0)
            	{
            		//微党课
            		this.cid = 238;
            	}
            	else if(this.v1 == 1)
            	{
            		//三会一课
            		this.cid = 237;
            	}
            	else if(this.v1 == 2)
            	{
            		//他山之石
            		this.cid = 236;
            	}
                else if(this.v1 == 3)
                {
                    //警钟长鸣
                    this.cid = 260;
                }

                const Articles1 = await getArticleList({page: this.currentPage, pagesize: this.pagesize, id:this.cid, tpe:this.tpe});
                //alert(Articles1);

                const Articles  = Articles1.data.items;
                //alert(Users);

                this.count = Articles1.data.total;

                this.tableData = Articles;

            },
            async getShipin(id)
            {
                const Activity1 = await getShipin({id: id});
                window.open('http://ycweb.cst-info.cn/live.html?'+Activity1.data.video_path);


            },
    	}
    }
</script>

<style>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';


.tab{padding:10px 60px;margin-right:20px;border-radius:5px;}.hov-but{background:#d81e06;color:#fff;}.com-but{background:#fff;color:#333;}
.ser{padding:10px 0px;}
table{line-height:38px}
tbody{background:#fff;}
table thead{background:#f9f1b7;}
th,td{width:100px;text-align:center;}.list-tab{margin-top:20px;}
.videos ul li{float:left;width:330px;height:230px;margin:20px 15px;border:0px}
.videos{clear:both;overflow: hidden;}
.el-progress-bar__outer{
    background-color: #f1a83b !important;
}
    .tu img:hover{
        cursor: pointer;
    }

</style>
