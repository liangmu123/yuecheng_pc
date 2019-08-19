<template>

<div>

<common-head></common-head>
<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Gxxw">共享小屋</router-link></li>
			<li class="active">人才共享</li>
		</ol>
	</div>
</div>



<div id="" style="margin-bottom: 20px;">
	<div id="" style="position: relative; float: right;">

	</div>
	<div style="height: 150px; background: white; padding: 20px;" class="">
		<div class="RadioStyle">
			<span style="position: relative; float: left; top: 10px;">技能类型：</span>
			<div class="Block PaddingL" style="position: relative; float: left;">

			    <!--
				<input type="radio" name="Storage" id="model1" checked="">  <label for="model1">全部</label>
				<input type="radio" name="Storage" > <label for="model2">医生</label>
				<input type="radio" name="Storage" id="model3">  <label for="model3">教师</label>
				<input type="radio" name="Storage" id="model4"> <label for="model4">水电工</label>
				-->

				<div @click="toggle(index)" v-for="(tab,index) in tabs" style="float:left;">
					<input type="radio" checked="" v-if="active==index" > <label >{{tab.type}}</label>
				</div>

			</div>
		</div>

		<div style="border-bottom: dotted 1px; padding: 25px 50px;"></div>

		<div class="RadioStyle" style="top: 10px; position: relative;">
			<span style="position: relative; float: left; top: 10px;">帮助状态：</span>

			<div class="Block PaddingL" style="position: relative; float: left;">

				<!--
				<input type="radio" name="chang" id="model5" checked="">  <label for="model5">全部</label>
				<input type="radio" name="chang" id="model6"> <label for="model6">已服务</label>
				<input type="radio" name="chang" id="model7"> <label for="model7">未服务</label>
				-->

				<div @click="toggle1(index1)" v-for="(tab,index1) in tabs1" style="float:left;">
					<input type="radio" checked="" v-if="active1==index1" > <label >{{tab.type}}</label>
				</div>

			</div>


		</div>
	</div>

    <div class="row">
        <div class="col-sm-3" v-for="(tab,index1) in tableData" :key="index1">
        	<router-link tag="a" target="_blank" :to="{name:'Fujl',query:{sid:tab.share_id}}">
                <div style="background: white;padding: 10px;margin: 20px 10px 20px 10px;height: 300px">

                	<div class="row">
	                	<div class="col-sm-6" style="text-align: left">
	                        <img v-if="tab.is_member==1" src="../assets/img/dang_icon.png">
	                    </div>

	                    <div class="col-sm-6" style="text-align: right">
	                        <img v-if="tab.status==0" src="../assets/img/tg.png">
	                        <img v-if="tab.status==1" src="../assets/img/ml.png">
	                    </div>
                    </div>

                    <div>
                        <img v-if="tab.title=='教师'" class="toux" src="../assets/img/jiaoshi.png">
                        <img v-else-if="tab.title=='架子工'" class="toux" src="../assets/img/jiazigong.png">
                        <img v-else-if="tab.title=='电工'" class="toux" src="../assets/img/diangong.png">
                        <img v-else-if="tab.title=='医生'" class="toux" src="../assets/img/yisheng.png">
                        <img v-else  src="../assets/img/man.png" class="toux">
                    </div>
                    <div style="text-align: left;padding: 0px 30px 0px 30px;line-height: 30px;">
                        <p>{{tab.title}}: {{tab.username}}</p>
                        <p>联系方式:{{tab.mobile}}</p>
                        <p>空闲时间: {{tab.time}}</p>

                    </div>
                </div>
            </router-link>
        </div>
    </div>

</div>



</div>
</div>

</template>


<script>

	import commonHead from '../components/commonHead'
	import {getPersonList} from '@/api/getData'

    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                type: '',
                status: '',
                active: 0,
                active1: 0,

                tabs: [
	                {
	                    type: '全部',
	                },
	                {
	                    type: '教师'
	                },
	                {
	                    type: '水电工',
	                },
	                {
	                    type: '瓦工'
	                },
	                {
	                    type: '警察',
	                },
	                {
	                    type: '医生'
	                },
	                {
	                    type: '叉车工',
	                },
	                {
	                    type: '架子工'
	                }
	            ],
	            tabs1: [
	                {
	                    type: '全部',
	                },
	                {
	                    type: '未服务'
	                },
	                {
	                    type: '已服务',
	                }
	            ]
            }
        },

    	components: {
    		commonHead
    	},
        created(){
            this.personList();
        },
        methods: {
        	toggle(i)
            {
            	//alert('1='+i);
                this.active = i;
                //alert('2='+this.active);
                this.personList();
            },

            toggle1(i)
            {
                this.active1 = i;
                this.personList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;
                this.personList();
            },
            async personList()
            {
            	//alert('this.active='+this.active);
            	if(this.active == undefined)
            	{
            		return;
            	}

            	if(this.active == 0)
            	{
            		this.type = '';
            	}
            	else
            	{
            		this.type = this.active;
            	}

            	//alert(this.type);

            	if(this.active1 == undefined)
            	{
            		return;
            	}

            	if(this.active1 == 0)
            	{
            		this.status = -1;
            	}
            	else
            	{
            		this.status = this.active1 -1;
            	}

                const PersonList1 = await getPersonList({skill_id:this.type, status:this.status});

                const PersonList  = PersonList1.data.items;

                this.tableData = PersonList;

            }
        },
    }
</script>

<style scoped>
	@import '../style/fonts/font-awesome-4.5.0/css/font-awesome.min.css';
	@import '../style/icons.css';
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

#help{
	background: #D43F3A;
	color: white;
	font-size: 20px;
	border: solid 0px;
	width: 100px;
	float: right;
}

body {
	font: 14px microsoft yahei,tahoma;
	}
.clear {
	clear: both
	}
.RadioStyle input {
	display: none
	}

.RadioStyle label {
	border: 1px solid #CCC;
	color: #666;
	padding: 2px 10px 2px 5px;
	line-height: 28px;
	min-width: 80px;
	text-align: center;
	float: left;
	margin: 2px;
	border-radius: 4px
	}
.RadioStyle input:checked + label {
	border: 1px solid red;
	color: red
	}
.photo>div{
		float: left;
		position: relative;
		width: 250px;
	}
.item>a>img {
    width: 130px;
    margin-top: 15px;
    margin-left: 30px;
    border-radius: 50%;
}
.item{
	background: white;
}

.toux{
    border-radius: 50%;
    margin-bottom: 20px;
    width: 110px;
    height: 110px
}


</style>
