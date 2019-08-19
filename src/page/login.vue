<template>
	  	
<div class="login_page container">
    <div class="login_div">
        <div class="form_div">
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
                <div class="form-group">
                    <label for="js-admin-name" class="col-sm-4 control-label">用户名: </label>
                    <div class="col-sm-8">
                    	<el-form-item prop="username">
							<el-input v-model="loginForm.username" placeholder="用户名或邮箱" ></el-input>
						</el-form-item>						
                    </div>
                </div>
                <div class="form-group">
                    <label for="admin_pwd" class="col-sm-4 control-label">密码 :</label>
                    <div class="col-sm-8">
                    	<el-form-item prop="password">
							<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
						</el-form-item>                        
                    </div>
                </div>

                <div class="form-group" style="margin-top:-20px">
                    <div class="col-sm-offset-4 col-sm-10">
                    	<el-form-item>
					    	<el-button type="primary" @click="submitForm('loginForm')" class="btn btn_submit js-ajax-submit">登录</el-button>
					  	</el-form-item>				  	
                    </div>
                </div>
            </el-form>
        </div>
	</div>
	<div style="opacity: 0; position:fixed;">{{imgurl2}}</div>
</div>
</template>

<script>
	import {login, getAdminInfo} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'
	import {url} from '@/api/api'

	export default {
		name:'login',
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
				note: {
		            backgroundImage: "url(" + require("../assets/img/bg.png") + ")"
		          },
				pic: require('../assets/img/bg.png'),
				area_id:this.$route.query.id,
			}
		},
		created () 
		{
		  //alert('11');
		  
		  //document.querySelector('body').setAttribute('style', 'background-image:'+this.pic)
		//   document.querySelector('body').style.backgroundImage = this.note.backgroundImage;
		  //alert(document.querySelector('body').style.backgroundImage);
		  
		  //document.querySelector('body').style.backgroundImage = './static/img/bg.1d1240c.png';
		  //alert(document.querySelector('body').style.backgroundImage);
		  document.querySelector('body').style.backgroundImage = "";
		//   if(this.area_id){
			  this.$store.state.adminImg = [];
			  this.getAdminImg(16);
		//   }else{
		// 	  this.$router.push('/')
		//   }
		},
		mounted(){
			this.showLogin = true;
			if (!this.adminInfo.uid) {
    			this.getAdminData()
			};
			
		},
		computed: {
			...mapState(['adminInfo']),
			imgurl2:function(){
				//alert('执行了')
				if(!this.$store.state.adminImg){
					return ''
				}
                if(this.$store.state.adminImg[7] == undefined){
                    return ''
				}
				//alert('执行了')
                document.querySelector('body').style.backgroundImage = "url("+url + this.$store.state.adminImg[7]+")";
                return url + this.$store.state.adminImg[7];
            },
		},
		methods: {
			...mapActions(['getAdminData','getAdminImg']),
			async submitForm(formName) 
			{
				this.$refs[formName].validate(async (valid) => 
				{
					if (valid) 
					{
						var sign = 'cbcb7d7fe3b2147bfe2b3131efd50d34';
						const res = await login({username: this.loginForm.username, password: this.loginForm.password, sign:sign})
						if (res.code == 0) 
						{
							this.$message({
		                        type: 'success',
		                        message: '登录成功'
		                    });
		                    
							this.getAdminData();
							//this.getAdminImg();
		                    this.$router.replace('Main');
		                    
						}
						else
						{
							this.$message({
		                        type: 'error',
		                        message: res.message
		                    });
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
		},
		// watch: {
		// 	adminInfo: function (newValue){
		// 		if (newValue.uid) {
		// 			this.$message({
        //                 type: 'success',
        //                 message: '检测到您之前登录过，将自动登录'
        //             });
		// 			this.$router.push('Main')
		// 		}
		// 	}
		// }
	}
</script>

<style scoped>
	@import '../style/index.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
</style>
