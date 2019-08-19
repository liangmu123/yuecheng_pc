<template>
 
 <div class="container" style="width: 1200px;">


	<!-- <object classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab" id="vlc" class="vlcPlayer" events="True">
		<param name="Src"  /> 
		<param name="ShowDisplay" value="True" />
		<param name="AutoLoop" value="False" />
		<param name="AutoPlay" value="True" />
	   <embed id="vlcEmb"  type="application/x-google-vlc-plugin"  version="VideoLAN.VLCPlugin.2" autoplay="yes" loop="no" width="60%"  height="780px" style="margin: 50px 19%;" target="" >
	   </embed>
	</object> -->
 
<!-- <video id="my-video" class="video-js" controls preload="auto" width="960" height="400" poster="" data-setup="{}">
 
 <source :src="vediourl" type="video/mp4">
 
<p class="vjs-no-js"> To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</a> </p>

</video> -->
		<!-- <object
		classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" 
		codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
		id="vlc"
		name="vlc"
		class="vlcPlayer"
		events="True">
		<param name="Src" :value="vediourl" />
		<param name="ShowDisplay" value="True" />
		<param name="AutoLoop" value="False" />
		<param name="AutoPlay" value="True" />
		<embed id="vlcEmb" type="application/x-google-vlc-plugin" version="VideoLAN.VLCPlugin.2" autoplay="yes" loop="no" width="640" height="480"
		:target="vediourl"></embed>
		</object> -->
		

       

<!-- <div style="opacity: 0; position:fixed;z-index:-1">{{imgurl2}}</div> -->
</div>

</template>

<script src="../style/video.min.js"></script>
<script src="../style/zh-CN.js"></script>

<script type="text/javascript">
	// var myPlayer = videojs('my-video');
	// videojs("my-video").ready(function(){
	// 	var myPlayer = this;
	// 	myPlayer.play();
	// });
	  
</script>

<script>
	import commonHead from '../components/commonHead'
	import {url} from '@/api/api'
	import {url2} from '@/api/api'
	import {mapActions, mapState} from 'vuex'
	import {getAdminImg} from '@/api/getData'

    export default {
		data(){
			return {
				vediourl:''
			}
		},
    	components: {    		
    		commonHead,
		},
		created(){
            if (this.$store.state.adminImg.length == 0){
				this.getAdminImg();
			}
			this.getVedio()
		},
		mounted(){
			
		},
		computed:{
			// imgurl2:function(){
			// 	if(!this.$store.state.adminImg){
            //         return ''
            //     }
            //     if(this.$store.state.adminImg[1] == undefined){
            //         return ''
			// 	}
            //     document.querySelector('body').style.backgroundImage = "url("+url + this.$store.state.adminImg[1]+")";
            //     return url + this.$store.state.adminImg[1];
            // },
		},
		methods: {
			...mapActions(['getAdminImg']),
			async getVedio(){
				try
				{
					const res = await getAdminImg()
					if (res.code == 0) 
					{	
						var result = res.data.video;
						this.vediourl = result;
						//document.getElementById('vlcEmb').setAttribute('target',this.vediourl)
						window.location.href = "http://ycweb.cst-info.cn/live2.html?" + this.vediourl
					}
					
				}
				catch(err)
				{
					//console.log('您尚未登陆或者session失效')
				}
			},
    	}

    }
</script>

<style scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
	@import '../style/video1.css';
	
	body {
		background-color: #191919
	}
	.m {
		width: 960px;
		height: 400px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100px;
	}
	
</style>
