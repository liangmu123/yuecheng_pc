<template>

<div>

<common-head></common-head>



<el-dialog title="党员详情" :visible.sync="formVisible" class="capacity" >
<div class="cont-dy cl" style="">
		<table class="">
			<thead>
				<th width="10%">姓名</th>
				<th width="10%">民族</th>
				<th width="18%">学历</th>
				<th width="14%">身份证号码</th>
				<th width="11%">手机号码</th>
				<th width="37%">所在组织</th>
			</thead>
			<tbody>
				<Tr>
					<td>{{name}}</td>
					<td>{{nation}}</td>
					<td>{{ed}}</td>
					<td>{{card}}</td>
					<td>{{mobile}}</td>
					<td>{{group_name}}</td>
				</tr>


			</tbody>
		</table>

</div>

</el-dialog>

<!--
<el-dialog title="资料详情" :visible.sync="picVisible" class="capacity">
<img src="http://localhost:8001/attaches/image/20181101/40f26dcfb79283ebb6447fca01fc13c6.jpg" style="width:720px;height:960px;" />
</el-dialog>


<pic :filePreviewShow="filePreviewShow" :aList="aList">
</pic>
-->


	<el-dialog class="" title="资料详情" :visible.sync="imgShow" customClass="customWidth">
	<div style="">

<!--		<div style="text-align: center;">
			<button @click="rotateL" icon="el-icon-arrow-left">
				<i class="el-icon-arrow-left"></i>左旋转
			</button>

			<button @click="rotateR">
				右旋转 <i class="el-icon-arrow-right"></i>
			</button>

			<button @click="scale">
				<i class="el-icon-zoom-out"></i>缩小
			</button>

			<button @click="scale1">
				 <i class="el-icon-zoom-in"></i>放大
			</button>
		</div>-->

		<!--<div id="test_3" @mousemove="move" @mouseup="stop" style="margin-top:10rem;" >
			<p @mousedown="start">
				<img :src="xqImg" ref="singleImg" class="originStyle" style="max-width:100%;">
			</p>
		</div>-->

        <div id="test_3" class="img_showlist" style="margin-top:2rem;" >
            <a :href="xqImg" id="img">
                <img :src="xqImg" style="max-width:100%;">
            </a>
        </div>

	</div>
	</el-dialog>



<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dwgl">党务管理</router-link></li>
			<li class="active">发展党员</li>
		</ol>
	</div>
</div>
<div class="dangfei">

	<div class="cl">


	    <div @click="toggle(index)" v-for="(tab,index) in tabs" :class="[classA,classB,{'hov-but':index==active},{'com-but':index!=active}]">
			<a>{{tab.type}}</a>
		</div>

	</div>


	<div class="list-tab cl w1200">
		<div class="cont-dy cl">
			<table class="cl">
				<thead>
					<th width=10%>姓名</th>
					<th width=12%>手机</th>
					<th width=17%>身份证号</th>
					<th width=33%>组织名称</th>

					<th width="18%" v-if="active==0">确认入党积极分子时间</th>
					<th width="18%" v-if="active==1">确认培养入党积极分子时间</th>
					<th width="18%" v-if="active==2">确认接受预备党员时间</th>
					<th width="18%" v-if="active==3">确认预备党员考察转正时间</th>
					<th width="18%" v-if="active==4">转正时间</th>
					<th width="10%" v-if="active==5">转入组织</th>
					<th width="10%" v-if="active==5">转出组织</th>

					<!--
					<th align="center">消息提醒</th>
					-->

					<th width="16%">资料</th>
				</thead>
				<tbody>
					<Tr v-for="(tab,index1) in tableData" :key="index1">
						<td>{{tab.name}}</td>
						<td>{{tab.mobile}}</td>
						<td>{{tab.card}}</td>
						<td>{{tab.group_name}}</td>

						<!--
						<td>{{tab.join_time}}</td>


						<td v-if="active==0">{{tab.sure_time}}</td>
						<td v-if="active==1">{{tab.join_time}}</td>
						<td v-if="active==2">{{tab.add_time}}</td>
						-->

						<td v-if="active!==5">{{tab.add_time}}</td>
						<td v-if="active == 5">{{123}}</td>
						<td v-if="active == 5">{{456}}</td>

						<td>
							<a style="font-size:1.5rem;margin-left:0px;cursor:pointer;" href="javascript:;" @click="openDangyuan(tab.id)">
                                <img src="../assets/img/eye1.png"/>
                            </a>

							<a style="font-size:1.5rem;margin-left:0px;cursor:pointer;margin-left: 10px" href="javascript:;" @click="openPic(tab.img)" v-if="active!=0">
                                <img src="../assets/img/file1.png"/>
                            </a>
						</td>
					</tr>

				</tbody>
			</table>
		</div>

		<div class="Pagination" style="text-align: left;margin-top: 10px;">
		    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
		    </el-pagination>
		</div>

	</div>





</div>

</div>

</div>

</template>


<script>

	import commonHead from '../components/commonHead'
	import {partyMemberList, partyMemberInfo, partyMemberLogList} from '@/api/getData'
    import tc from '../style/screen/js/touchTouch.jquery'
    import $ from 'jquery'

    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,

                formVisible:false,
                picVisible:false,

                xqImg:'',

                aList:[],
                filePreviewShow:false,


                classA:'fl',
                classB:'tab',
                classC:'com-but',
                active: 0,
                tabs: [
	                {
	                    type: '确定入党积极分子'
	                },
	                {
	                    type: '培养入党积极分子'
	                },
	                {
	                    type: '接受预备党员'
	                },
	                {
	                    type: '预备党员考察转正'
					},
					{
						type:'转正历史记录'
					},
					{
						type:'组织关系转接'
					},
	            ],

	            name:'',
	            ed:'',
	            nation:'',
	            card:'',
	            mobile:'',
	            group_name:'',

	            currentImg:1,
				changeColor:-1,
				currentRotate: 0,
				currentScale:1,
				canDrag: false,
				offset_x:0,
				offset_y:0,
				mouse_x:0,
				mouse_y:0,
				num:0,
				imgShow:false,
            }
        },

    	components: {
    		commonHead,
    	},
        created(){
            this.partyMemberList();
        },
        methods: {
        	toggle(i)
            {
                this.active = i;

                //alert(this.currentPage);
                //alert(this.active);

                this.partyMemberList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;


                this.partyMemberList();
            },
            async partyMemberList()
            {
            	if(this.active == undefined)
            	{
            		return;
            	}

            	else if(this.active == 0)
            	{
            		//确定入党积极分子
            		this.tpe = 1;
            	}
            	else if(this.active == 1)
            	{
            		//培养入党积极分子
            		this.tpe = 2;
            	}
            	else if(this.active == 2)
            	{
            		//接受预备党员
            		this.tpe = 3;
            	}
            	else if(this.active == 3)
            	{
            		//预备党员考察转正
            		this.tpe = 4;
				}
				else if(this.active == 4)
            	{
            		//预备党员考察转正
            		this.tpe = 5;
				}
				else if(this.active == 5)
            	{
            		//预备党员考察转正
            		this.tpe = 6;
				}

                const MemberList1 = await partyMemberLogList({page: this.currentPage, pagesize: this.pagesize, tpe:this.tpe});

                const MemberList  = MemberList1.data.items;
                this.count = MemberList1.data.total;
                this.tableData = MemberList;

            },

            async openDangyuan(id)
	    	{
	    		//alert(shiji);
	    		this.formVisible = true;

	    		const Member = await partyMemberInfo({id:id});

	            this.name   = Member.data.name;
	            this.ed     = Member.data.education;
	            this.nation = Member.data.nation;
	            this.card = Member.data.card;
	            this.mobile = Member.data.mobile;
	            this.group_name = Member.data.group_name;

	    	},
	    	async openPic(pic)
	    	{
	    		//alert(pic);
	    		//this.picVisible = true;

	    		if(pic == undefined || pic == '')
	    		{
	    			this.$message({
                        type: 'error',
                        message: '资料内容为空'
                    });

                    return;
	    		}

	    		this.xqImg = pic;
	    		this.imgShow = true;

                setTimeout(function () {
                    $(".img_showlist").each(function(){
                        var a  = $(this).find("a");
                        $(this).find("a").touchTouch();
                    });
                },1000);
	    	},

	    	handleCurrentChange1(val) {
				this.currentRotate = 0
				this.currentScale = 1
				this.rotateScale()
				this.$refs.singleImg.style.left = 0
				this.$refs.singleImg.style.top = 0
				this.furl = this.imgList[val-1].furl
				this.changeColor = val-1
			},
			start(e){
				//鼠标左键点击
				e.preventDefault && e.preventDefault(); //去掉图片拖动响应
				if(e.button==0)
				{
					this.canDrag=true;
					//获取需要拖动节点的坐标
					this.offset_x = document.getElementsByClassName('originStyle')[0].offsetLeft;//x坐标
					this.offset_y = document.getElementsByClassName('originStyle')[0].offsetTop;//y坐标
					//获取当前鼠标的坐标
					this.mouse_x = e.pageX;
					this.mouse_y = e.pageY;
				}
			},
			move(e){
				e.preventDefault && e.preventDefault()
				if(this.canDrag==true)
				{
					let _x = e.pageX - this.mouse_x;
					let _y = e.pageY - this.mouse_y;
					//设置移动后的元素坐标
					let now_x = (this.offset_x + _x ) + "px";
					let now_y = (this.offset_y + _y ) + "px";
					document.getElementsByClassName('originStyle')[0].style.top = now_y
					document.getElementsByClassName('originStyle')[0].style.left = now_x
				}
			},
			stop(e){
				this.canDrag = false;
			},
			//旋转放大
			rotateScale()
			{
				this.$refs.singleImg.style.OTransform = 'rotate('+this.currentRotate+'deg)'+'scale('+this.currentScale+')'
				this.$refs.singleImg.style.webkitTransform = 'rotate('+this.currentRotate+'deg)'+'scale('+this.currentScale+')'
				this.$refs.singleImg.style.MozTransform = 'rotate('+this.currentRotate+'deg)'+'scale('+this.currentScale+')'
				this.$refs.singleImg.style.msTransform = 'rotate('+this.currentRotate+'deg)'+'scale('+this.currentScale+')'
				this.$refs.singleImg.style.transform = 'rotate('+this.currentRotate+'deg)'+'scale('+this.currentScale+')'
			},
			//旋转
			rotateL()
			{
				this.currentRotate += 15
				this.rotateScale()
			},
			rotateR(){
				this.currentRotate -= 15
				this.rotateScale()
			},
			//缩放
			scale()
			{
				this.currentScale -= 0.1
				if(this.currentScale <= 0.1)
				{
					this.currentScale = 0.1
					this.rotateScale()
				}
				else
				{
					this.rotateScale()
				}
			},
			scale1()
			{
				this.currentScale += 0.1
				this.rotateScale()
			},
        },






    }
</script>

<style scoped>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
	@import '../style/fonts/font-awesome-4.5.0/css/font-awesome.min.css';
	@import '../style/icons.css';
    @import '../style/touchTouch.css';

	.customWidth{
        width:20%;
        }

.tab {
	text-align: center;
	padding: 10px 0;
	margin-right: 15px;
	border-radius: 5px;
	width: 160px;
}

.hov-but {
	background: #d81e06;
}

.hov-but a {
	color: #fff;
}

.com-but {
	background: #fff;
	color: #333;
}

.list-tab {
	margin-top: 20px;
	background: #fff;
	padding: 20px;
	border-radius: 5px;
}

.cont-dy {
	border: 1px solid #a29f9b
}

.pagers ul li {
	float: left;
	broder: 1px solid #bbb;
	list-style: none;
	border: 1px solid #eee;
	padding: 5px 8px;
}

.pagers {
	width: 300px;
	margin: 20px auto 50px auto;
}

.pagers ul li a {
	text-align: center;
}
</style>
