<template>
<div>
		<div class="dj01" v-if="home" :style="'background-image:url('+indexImg+')'">
		</div>
		<div class="dj01" v-else :style="'background-image:url('+headerBgImg+')'">
			<ul class="userInfo">
				<li>
					<router-link :to="{name:'Message',query:{uid:this.uid}}">
						<p>{{mess}}</p>
						<p>
							未读消息
						</p>
					</router-link>
				</li>
				<li>
					<p>{{realname}}</p>
					<p>{{nowTime}}</p>
				</li>
				<li>
					<img v-if="headimg" :src="headimg" style="width: 50px;height: 50px;border-radius: 39px;"/>
				    <img v-else src="../assets/user.png" style="width: 50px;height: 50px;border-radius: 39px;"/>
				</li>
			</ul>
		</div>
		<div style="opacity: 0; position:fixed;z-index:-1">{{imgurl2}}</div>
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
			nowTime(){
				//获取当前时间
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				if (month < 10) {
					month = "0" + month;
				}
				if (day < 10) {
					day = "0" + day;
				}
				var nowDate = year + "." + month + "." + day
				return nowDate
			},
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
	.userInfo{
		display:flex;
		align-items:center;
		height:120px;
		justify-content: flex-end;
		width:1210px;
		margin:0 auto;
	}
	.userInfo li{
		margin-right:10px;
	}
	.userInfo li:first-child{
		margin-right:30px;
	}
	.userInfo li:first-child p:first-child{
		color:red;
	}
	.userInfo li:nth-child(2) p{
		text-align:right;
	}
	p{
		margin-bottom:0;
	}
</style>

