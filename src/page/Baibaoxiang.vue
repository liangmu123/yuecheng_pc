<template>

<div >

<common-head></common-head>
<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Gxxw">共享小屋</router-link></li>
			<li class="active">物品共享</li>
		</ol>
	</div>
</div>



<div  style="margin-bottom: 20px;">

	<div style="height: 75px; background: white; padding: 20px;" class="">
		<div class="RadioStyle">
			<span style="position: relative; float: left; top: 10px;">共享类型：</span>
			<div class="Block PaddingL" style="position: relative; float: left;">

				<!--
				<input type="radio" name="Storage" id="model1" checked=""> <label for="model1">全部</label>
				<input type="radio" name="Storage" > <label for="">家用电器</label>
				<input type="radio" name="Storage" id="model3"> <label for="model3">书籍</label>
				<input type="radio" name="Storage" id="model4"> <label for="model4">数码产品</label>
				-->

				<div @click="toggle(index)" v-for="(tab,index) in tabs" style="float:left;">
					<input type="radio" checked="" v-if="active==index" > <label >{{tab.type}}</label>
				</div>
			</div>
		</div>

		<div style="border-bottom: dotted 1px; padding: 25px 50px;"></div>

		
	</div>


    <div class="row">
        <div class="col-sm-3" v-for="(tab,index1) in tableData" :key="index1">
            <router-link :to="{name:'Fujl',query:{id:tab.id}}">
                <div style="background: white;padding: 10px;margin: 20px 10px 20px 10px;height: 350px">
                    <div style="text-align: right">
                        <img v-if="tab.status==0" src="../assets/img/tg.png">
                        <img v-if="tab.status==1" src="../assets/img/ml.png">
                    </div>
                    <div>
                        <img class="toux" :src="tab.img" />
                    </div>
                    <div style="text-align: left;padding: 0px 20px 0px 20px">
                        <p>联系人 ：{{tab.username}}</p>
                        <p>联系方式 ：{{tab.mobile}}</p>
                        <p>服务总计 ：{{tab.share_count}}</p>
                        <p>共享物品 ：{{tab.title}}</p>
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
	import {getshareList} from '@/api/getData'

    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,

                cat_id: '',
                active: 0,

                tabs: [
	                {
	                    type: '全部',
	                },
	                {
	                    type: '家用电器'
	                },
	                {
	                    type: '书籍',
	                },
	                {
	                    type: '数码产品'
	                },
	                {
	                    type: '建材',
	                }
	            ],

            }
        },

    	components: {
    		commonHead
    	},
        created(){
            this.thingsList();
        },
        methods: {
        	toggle(i)
            {
            	//alert('1='+i);
                this.active = i;
                //alert('2='+this.active);
                this.thingsList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;
                this.thingsList();
            },
            async thingsList()
            {
            	//alert('this.active='+this.active);
            	if(this.active == undefined)
            	{
            		return;
            	}

            	if(this.active == 0)
            	{
            		this.cat_id = 0;
            	}
            	else
            	{
            		this.cat_id = this.active;
            	}


                const ThingsList1 = await getshareList({tpe:1});

                const ThingsList  = ThingsList1.data.list;

                this.tableData = ThingsList;

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
		padding: 5px 15px;
		position: relative;
	}
	.item>a{
		color:  #666666;
	}
    .item img{
        width: 220px;
    }

    .toux{
        border-radius: 50%;
        margin-bottom: 20px;
        width: 110px;
        height: 110px
    }



</style>
