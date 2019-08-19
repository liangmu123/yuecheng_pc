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
			<li class="active">双泾清风</li>
		</ol>
	</div>
</div>


<div class="zyqf" style="">

	<ul class="wind_li" style="position: relative;width:1200px;height:470px; ">

		<li style="margin-left:190px;margin-top:120px;">

			<router-link :to="{name:'Shuwu',query:{v1:'0'}}">
				<img src="../assets/img/dangji.png" style="cursor:pointer;"  >
			</router-link>


		<li style="margin-left:120px;margin-top:120px;">
			<router-link :to="{name:'Shuwu',query:{v1:'1'}}"><img src="../assets/img/zuofeng.png" style="cursor:pointer;"  ></router-link>
		</li>

		<li style="margin-left:120px;margin-top:120px;">
			<router-link :to="{name:'Shuwu',query:{v1:'2'}}"><img src="../assets/img/lianzheng.png" style="cursor:pointer;"  ></router-link>
		</li>

		<li style="margin-left:120px;margin-top:120px;">
			<router-link :to="{name:'Shuwu',query:{v1:'3'}}"><img src="../assets/img/zhidu.png" style="cursor:pointer;"  ></router-link>
		</li>

		<li style="margin-left:120px;margin-top:120px;">
			<router-link :to="{name:'Shuwu',query:{v1:'4'}}"><img src="../assets/img/wenhua.png" style="cursor:pointer;"  ></router-link>
		</li>

		<li style="margin-left:120px;margin-top:120px;">
			<router-link :to="{name:'Weidangke',query:{v1:'3'}}"><img src="../assets/img/jingzhong.png" style="cursor:pointer;"  ></router-link>
		</li>
	</ul>
</div>

</div>
</div>

</template>


<script>

	import commonHead from '../components/commonHead'
	import {get_areaCname} from '@/api/api'

    export default {
			data(){
				return {
					title:''
				}
			},
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		components: {
    		commonHead,
			},
			created(){
				this.get_areaCname()
			},
    	methods: {
				get_areaCname(){
					var that = this;
					that.$axios.get(get_areaCname)
					.then(res=>{
						//console.log(res.data.data.cname)
						if(res.data.data.cname.indexOf('村')!=-1){
                            var length = res.data.data.cname.indexOf('村')
                            //console.log(length,res.data.data.cname.length)
                            if(length == res.data.data.cname.length-1){
                                that.title = res.data.data.cname.slice(0,length)
                                //alert(that.title)
                                return;
                            }
                        }
						that.title = res.data.data.cname
					})
				}
    	}
    }
</script>

<style scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

.wind_li li{
	float: left;
}

.zyqf{
	width:1200px;height:470px;
	background-image: url(../assets/img/zyqf.png);
	background-size:100% 100%;
	background-repeat: no-repeat;
}


</style>
