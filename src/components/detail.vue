<template>
<div>

<common-head></common-head>

<div class="container" style="">


	<div class="" style="background: rgb(244, 222, 185);min-height: 500px;
	background-color: #f3ddb8d9;padding:20px 65px 20px 65px;margin-top: 50px;margin-bottom: 20px;border-radius: 10px;">
		<div class="" style="padding-top: 30px;">
			<div class="col-sm-12">
				<h2 style="font-size: 32px;color: black;font-weight: bolder">{{title}}</h2>
                <span style="font-size: 24px;padding-right: 10px">{{author}}</span>
				<span style="font-size: 24px;color: gray">{{time | formatDate}}</span>
			</div>
		</div>
<!--
		<hr style="background-color: #000000;">-->



		<div style="margin-top:30px;height:auto;clear: both;position: relative;top: 20px;" >
			<div class="size" >
				<div v-html="content" class="contents" style="text-indent: 2em;"></div>

			</div>
		</div>

        <div  v-if="need==1" style="width:920px;margin:0 auto;display: flex;flex-wrap:wrap;" class="img_showlist" :class="{justify_center:imgs.length == 1,justify_between:imgs.length>1}">
            <!-- <a :href="img1" v-if="img1 != ''"><img :src="img1" class="img_yingling" style="width: 450px; height: 300px;" alt="图片"/></a>
            <a :href="img2" v-if="img2 != ''"><img :src="img2" class="img_yingling" style="width: 450px; height: 300px; margin-left: 100px;" alt="图片"/></a> -->
            <template v-if="mode != 'teamBuild'">
                    <a v-for="(item,index) in imgs" :href="item"><img :src="item" class="img_yingling" style="width: 450px; height: 337px;margin-bottom:20px;" alt="图片"/></a>
            </template>
            <template v-else>
                    <a v-for="(item,index) in imgs" :href="item"><img :src="item" class="img_yingling" style="width: 450px; height: 700px;margin-bottom:20px;" alt="图片"/></a>
            </template>
            
        </div>

	</div>


</div>
</div>
</template>

<script>

	import commonHead from '../components/commonHead'
	import {getArticleInfo} from '@/api/getData'
    import $ from 'jquery'
    import tc from '../style/screen/js/touchTouch.jquery'

    export default {
    	data(){
            return {
                aid:this.$route.query.aid,
                need:this.$route.query.need,
                content:'',
                title:'',
                time:'',
                img1:'',
                img2:'',
                imgs:[],
                mode:this.$route.query.mode,
            }
        },
        created(){

            this.getArticleInfo();
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
        filters:{
            formatDate:function (val) {
                var str = val.slice(0,10);
                return str;

            }
        },
    	methods:
    	{
    		async getArticleInfo()
            {
            	if(this.aid == undefined)
            	{
            		return;
            	}

                const Article1 = await getArticleInfo({id: this.aid});
                //alert(Articles1);

                this.content  = Article1.data.content;

                this.title = Article1.data.title;
                this.time = Article1.data.format_add_time;
                this.author = Article1.data.author;


                if(Article1.data.photos1 != null)
                {
                	if(Article1.data.photos1.length > 1)
                	{
                		this.img1 = Article1.data.photos1[0];
                		this.img2 = Article1.data.photos1[1];
                        this.imgs = Article1.data.photos1
                	}
                	else if(Article1.data.photos1.length > 0)
                	{
                		this.img1 = Article1.data.photos1[0];
                        this.imgs = Article1.data.photos1
                	}
                }
            }

    	}
    }





</script>


<style lang="less" >
	@import '../style/activities.css';
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
    @import '../style/touchTouch.css';

	.size{
		text-align: left;
		font-size: 28px;
		line-height: 40px;
		font-weight: 500;
	}
     .contents p {
        font-size: 24px !important;
        line-height: 50px !important;
         font-weight: bolder;
         color: black;
    }

    .contents strong {
        font-size: 28px !important;
        line-height: 50px !important;
        color: black;
        font-weight: bolder;
    }

    .contents small {
        font-size: 24px !important;
        line-height: 50px !important;
        font-weight: bolder;
        color: black;
    }

    .contents span {
        font-size: 24px !important;
        line-height: 50px !important;
        font-weight: bolder;
        color: black;
    }
    .justify_between{
        justify-content: space-between !important;
    }
    .justify_center{
        justify-content: center !important;
    }

</style>

