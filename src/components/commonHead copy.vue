<template>
<div class="">

		<div class="dj01" v-if="home" style="padding-top: 20px; border:1px solid red" :style="'background-image:url('+indexImg+')'">

		</div>
<div class="dj01" v-else style="padding-top: 20px;" :style="'background-image:url('+headerBgImg+')'">
		<div v-if="tp==1">
			<div class="" style="width:45rem;height:70px;float:right;margin-right:17rem;">

			<div  style="float:left;line-height:70px;color:white;font-size:2.2rem;">
				{{currentdate}}  {{weekday}}
			</div>

			<div style="float:left;margin-left:2rem;height:70px;width:50px;">
				<img v-if="headimg" :src="headimg" style="width: 50px;height: 50px;border-radius: 39px;margin-top:10px;"/>
				<img v-else src="../assets/user.png" style="width: 50px;height: 50px;border-radius: 39px;margin-top:10px;"/>
			</div>


			<div style="float:left;height:70px;width:72px;">
				<div style="float:right;margin-top:5px;font-size:1.5rem;color:white;">
					<div id="" style="">{{realname}}</div>
					<div id="" style="line-height:30px;"><img src="../assets/img/jf.png" style="width: 36px;height: 42px;"/><span style="color:yellow;">{{scores}}</span></div>
				</div>
			</div>

			<div style="float:left;margin-left:2rem;margin-top:5px;">
				<div id="" style="border:1px solid red;background-color: red;">
					<a href="javascript:;" @click="quit" style="color:white;"><a class="glyphicon glyphicon-off" style="color:white;"></a>&nbsp;&nbsp;退出</a>
				</div>
				<div id="" style="margin-top:5px;">
					<router-link :to="{name:'Message',query:{uid:this.uid}}">
						<button class="btn btn-primary" type="button" style="position: relative;border-radius: 10px;background-color: #FFC000;top: 4px;padding: 2px;border:none;">
							<span class="glyphicon glyphicon-bell" style="font-size:1.3rem;"></span><span style="font-size:1.4rem;">消息</span> <span class="badge" style="background-color: red;color: #FFFFFF;font-size:1.3rem;border-raduis:1.2rem;"><span style="font-size:1.2rem;">{{mess}}</span> </span>
						</button>
					</router-link>
				</div>
			</div>
			</div>
		</div>

		<div v-else>

			<div class="" style="width:45rem;height:70px;float:right;margin-right:17rem;">

			<div  style="float:left;line-height:70px;color:white;font-size:2.2rem;">
				{{currentdate}}  {{weekday}}
			</div>

			<div style="float:left;margin-left:2rem;height:70px;width:50px;">
				<img v-if="headimg" :src="headimg" style="width: 50px;height: 50px;border-radius: 39px;margin-top:10px;"/>
				<img v-else src="../assets/user.png" style="width: 50px;height: 50px;border-radius: 39px;margin-top:10px;"/>
			</div>

			<div style="float:left;height:70px;width:72px;">
				<div style="float:right;margin-top:5px;font-size:1.5rem;color:white;">
					<div id="" style="">{{realname}}</div>
					<div id="" style="line-height:30px;"><img src="../assets/img/jf.png" style="width: 36px;height: 42px;"/><span style="color:yellow;">{{scores}}</span></div>
				</div>
			</div>

			<div style="float:left;margin-left:2rem;margin-top:5px;">
				<div id="" style="">
					<div id="" style="background-color: red;width:3.5rem;height:2.5rem;float:left;">
					<a href="javascript:;" @click="backToMain" class="glyphicon glyphicon-home" style="color:white;"></a>
					</div>

					<div id="" style="background-color: red;width:3.5rem;height:2.5rem;float:right;">
					<a href="javascript:;" @click="quit" class="glyphicon glyphicon-off" style="color:white;"></a>
					</div>
				</div>

				<div id="" style="margin-top:5px;">
					<router-link :to="{name:'Message',query:{uid:this.uid}}">
						<button class="btn btn-primary" type="button" style="position: relative;border-radius: 10px;background-color: #FFC000;top: 4px;padding: 2px;border:none;">
							<span class="glyphicon glyphicon-bell" style="font-size:1.3rem;"></span><span style="font-size:1.4rem;">消息</span> <span class="badge" style="background-color: red;color: #FFFFFF;font-size:1.3rem;border-raduis:1.2rem;"><span style="font-size:1.2rem;">{{mess}}</span> </span>
						</button>
					</router-link>
				</div>
			</div>
			<div style="opacity: 0; position:fixed;z-index:-1">{{imgurl2}}</div>
			<!--
			<div style="float:left;margin-left:2rem;margin-top:5px;">
				<div id="" style="background-color: red;margin-top:5px;">
					<a href="javascript:;" @click="quit" style="color:white;"><a class="glyphicon glyphicon-off" style="color:white;"></a>&nbsp;&nbsp;<span style="font-size:1.5rem;">退出</span></a>
				</div>
				<div id="" style="margin-top:10px;background-color: red;font-size:1rem;">
					<a href="javascript:;" @click="backToMain" style="color:white;"><a class="glyphicon glyphicon-home" style="color:white;"></a>&nbsp;<span style="font-size:1.5rem;">返回首页</span></a>
				</div>
			</div>
			-->
		</div>
		</div>


	</div>
	
</div>


<!--
<div class="dj01">

	<div class="dj03">
		<div class=""></div>
		<div class="title"></div>
		<div style="cursor: pointer;" onclick="window.location='index.jsp'" class="dj05">
		</div>
		<div class="login">周耀法，欢迎您<br />
		<a href="javascript:quit()" class="quit">退出</a>
		</div>
	</div>

</div>
-->

</div>
</template>

<script>
	import {signout,getAdminInfo} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'
	import {url} from '@/api/api'

	export default
	{
	    data()
	    {
    		return {
    			currentdate: null,
				weekday: null,
				indexImg:require('../assets/new/index.png'),
    		}
    	},
    	props:
		{
		  tp:String,
		  home:String,
		  // ms:Number
		},
    	created()
    	{
			this.getAdminData1();
			//console.log("执行了")
    	},
    	mounted()
    	{
			//alert('m='+this.$store.state.adminInfo.uid);
    		var date = new Date();
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			var year = date.getFullYear();
			if(month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}

			this.currentdate = month + '月' + strDate+'日';

			var a = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
			var week = date.getDay();

			this.weekday =  a[week];

			if (this.$store.state.adminInfo.realname == '')
			{
				//alert('11');
    			this.getAdminData1();
			}
			document.querySelector('body').style.backgroundImage = "url("+this.imgurl2+")";
    	},
		computed: {
			 headerBgImg:function()
             {
				  // 通过vuex的getters方法来获取state里面的数据
			      if (!this.$store.state.adminImg){
                    return ''
                }else{
                    return url + this.$store.state.adminImg[0];
                }
		    },
             realname:function()
             {
			      // 通过vuex的getters方法来获取state里面的数据
			      return this.$store.state.adminInfo.realname;
		    },
		    uid:function()
             {
			      // 通过vuex的getters方法来获取state里面的数据
			      return this.$store.state.adminInfo.uid;
		    },
		    headimg:function()
            {
			      // 通过vuex的getters方法来获取state里面的数据
			      return this.$store.state.adminInfo.headimg;
		    },
		    scores:function()
            {
			      // 通过vuex的getters方法来获取state里面的数据
			      if(this.$store.state.adminInfo.scores == undefined)
			      {
			      	return 0;
			      }

			      return this.$store.state.adminInfo.scores;
		    },
		    mess:function()
            {
			      // 通过vuex的getters方法来获取state里面的数据
			      return this.$store.state.adminInfo.mess;
			},
			imgurl2:function(){
				if(!this.$store.state.adminImg){
                    return ''
                }
                if(this.$store.state.adminImg[1] == undefined){
                    return ''
                }
                document.querySelector('body').style.backgroundImage = "url("+url + this.$store.state.adminImg[1]+")";
                return url + this.$store.state.adminImg[1];
            },
        },
        methods: {
			...mapActions(['getAdminData']),
			...mapActions(['getAdminImg']),
			backToMain()
			{
		      //alert(this.$store.state.adminInfo.realname);
		      this.$router.push('/Main');
		    },


		    async getAdminData1()
			{
				//alert('getAdminData1');
				try
				{
					const res = await getAdminInfo()
					if (res.code == 0)
					{    
						//console.log("执行了6666")
						this.getAdminImg(16);
						this.getAdminData();
					}
					else
					{
						this.$router.push('/')
					}
				}
				catch(err)
				{
					//console.log('12345');
				}
			},

			async quit()
			{
				const res = await signout()
				if (res.code == 0)
				{
					this.$message({
                        type: 'success',
                        message: '退出成功'
					});
					document.querySelector('body').style.backgroundImage = "";
                    this.$router.replace('/');
				}
				else
				{
					this.$message({
                        type: 'error',
                        message: res.message
                    });
				}
			},
		}

	}

</script>

<style lang="less" scoped>
	@import '../style/style_map.css';

    .glyphicon {
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: Glyphicons Halflings !important;
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>

