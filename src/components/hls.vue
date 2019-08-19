<template>


<video-player class="vjs-custom-skin"  :options="playerOptions" style="margin-top: 50px">
 </video-player>
</template>

<script>
  // custom skin css

  import { videoPlayer } from 'vue-video-player'
  import '../style/custom-theme.css'
  import 'video.js/dist/video-js.css'

  // videojs
  import videojs from 'video.js'
  window.videojs = videojs

  // hls plugin for videojs6
  require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

  // export
  export default {
    data() {
      return {
        playerOptions: {
          // videojs and plugin options
          height: '500',
          live:true,
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            //src: this.sc
            src:'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8'
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }},
          //poster: "http://dangjian.people.com.cn/NMediaFile/2018/0716/MAIN201807161530039769204099837.jpg"
        }
      }
    },
    props:
	{
		sc:String
	},
    components: {
		videoPlayer
	},
    methods: {
      playerReadied(player) {
        var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls;
        player.tech_.hls.xhr.beforeRequest = function(options) {
          // console.log(options)
          return options
        }
      }
    },
      created: function () {
          var a = this.sc;
          //console.log(a);
      }
  }
</script>

