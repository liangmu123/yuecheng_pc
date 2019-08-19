<template>
	<div id="map">
		<div class="left" v-show="isShow">
				<ul id="tree" class="ztree" style="width:100%;height:100%; overflow:auto;"></ul>
		</div>
		<div class="map">
				<baidu-map class="bm-view" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
						<bm-polygon :path="polygonPath" stroke-color="red" :stroke-weight="5" fillColor="transparent"/>
						<template v-for="(item,index) in markerMember">
							<bm-marker class="map22" :key="'dang'+index" v-if="markerMemberShow && item.is_van == 0" @click="infoWindow(markerMember[index])" :massClear="true" :position="item.marker_point" :icon="imgUrl2">
							</bm-marker>
						</template>
						<template v-for="(item,index) in markerMember">
							<bm-marker class="map22" :key="'xianfeng'+index" v-if="markerMemberShow2 && item.is_van == 1" @click="infoWindow(markerMember[index])" :massClear="true" :position="item.marker_point" :icon="imgUrl3">
							</bm-marker>
						</template>
						<bm-info-window :position="list.marker_point" :show="show" @close="infoWindowClose" @open="infoWindowOpen">
							<div class="top">
								<p>{{list.name}}</p>
								<p>单位职务:<span>{{list.post}}</span></p>
								<p>所属支部:<span>{{list.group_name}}</span></p>
							</div>
							<div class="bottom">
								<span><i class="el-icon-location"></i>{{list.home_address}}</span><br/>
								<span><i class="el-icon-phone"></i>{{list.mobile}}</span>
							</div>
						</bm-info-window>

						<bm-marker class="map11" v-for="(item,index) in markerGroup" :key="'zu'+index" v-if="markerGroupShow" :massClear="true" @click="infoWindowOpen2" :position="item.markerPoint" :icon="imgUrl1" >
							<!-- <bm-info-window :show="item.isShow" :key="'zu'+index" @close="infoWindowClose2(item)" @open="infoWindowOpen2(item,markerGroup)"  v-if="markerGroupShow">
								<div class="top" v-if="markerGroupShow">
									<p>{{item.name}}</p>
									<p>单位职务:<span>{{item.post}}</span></p>
									<p>所属支部:<span>{{item.group_name}}</span></p>
								</div>
								<div class="bottom" v-if="markerGroupShow">
									<span><i class="el-icon-location"></i>{{item.home_address}}</span><br/>
									<span><i class="el-icon-phone"></i>{{item.mobile}}</span>
								</div>
						    </bm-info-window> -->
						</bm-marker>

						<!-- <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection> -->
				</baidu-map>
		</div>
		<div class="right">
				<img class="img" src="../assets/new/016.gif" alt="图片">
				<div class="mainContent">
					<ul>
						<li class="title">
								基本信息
						</li>
						<li>
								<span>党支部：</span>
								<span @click="showTable2">{{nums.party_group.party_count}}个</span>
						</li>
						<li>
								<span>正式党员：</span>
								<span @click="showTable({is_formal:1})">{{nums.formal_party.party_count}}个</span>
						</li>
						<li>
								<span>预备党员：</span>
								<span @click="showTable({is_formal:2})">{{nums.prep_party.party_count}}个</span>
						</li>
						<li>
								<span>入党积极分子：</span>
								<span @click="showTable({is_formal:4})">{{nums.active_party.party_count}}个</span>
						</li>
						<li>
								<span>退休党员：</span>
								<span @click="showTable({post:'退休人员'})">{{nums.retired_party.party_count}}个</span>
						</li>
						<li>
								<span>先锋党员：</span>
								<span @click="showTable({is_van:1})">{{nums.pioneer_party.party_count}}个</span>
						</li>
						<li>
								<span>思想骨干党员：</span>
								<span @click="showTable({is_adv:1})">{{nums.key_party.party_count}}个</span>
						</li>
						<li>
								<span>流动党员：</span>
								<span @click="showTable({is_flow:1})">{{nums.flow_party.party_count}}个</span>
						</li>
						<li>
								<span>失联党员：</span>
								<span @click="showTable({is_out:1})">{{nums.out_party.party_count}}个</span>
						</li>
						<li>
								<span>受处分党员</span>
								<span @click="showTable({is_bad:1})">{{nums.bad_party.party_count}}个</span>
						</li>
						<li>
								<div><img src="../assets/new/018.png" alt="图片" @click="markerGroupShowis">党组织</div>
								<div style="margin-left:20px;"><img src="../assets/new/20.png" alt="图片" @click="markerMemberShowis2">先锋党员</div>
								<div><img src="../assets/new/019.png" alt="图片" @click="markerMemberShowis">党员</div>
						</li>
					</ul>
				</div>
		</div>

		<!-- 表格1 -->
		<el-dialog title="党支部信息" :visible.sync="dialogTable1Visible" center>
				<el-table :data="table2Data" border>
					<el-table-column property="title" label="党支部名称"></el-table-column>
					<el-table-column property="parentGroup" label="所属组织"></el-table-column>
					<el-table-column property="address" label="支部地址"></el-table-column>
					<el-table-column property="secretary" label="支部书记"></el-table-column>
				</el-table>
				<el-pagination
				class="table"
				background
				layout="prev, pager, next"
				:total="total"
				:current-page="currentPage"
				@current-change="changePize2">
				</el-pagination>
		</el-dialog>

		<!-- 表格2 -->
		<el-dialog title="党员信息" :visible.sync="dialogTable2Visible" center>
				<el-table :data="table1Data" border>
					<el-table-column property="name" label="姓名"></el-table-column>
					<el-table-column property="group_name" label="所属组织" width="300px"></el-table-column>
					<el-table-column property="name" label="人员类别"></el-table-column>
					<el-table-column property="turn_time" label="入党时间"></el-table-column>
					<el-table-column property="mobile" label="手机号码"></el-table-column>
					<el-table-column property="education" label="学历"></el-table-column>
				</el-table>
				<el-pagination
				class="table"
				background
				layout="prev, pager, next"
				:total="total"
				:current-page="currentPage"
				@current-change="changePize">
				</el-pagination>
		</el-dialog>
		<!-- 全屏按钮 -->
		<img :src="fullGreen" alt="全屏" id="fullGreen" @click="isShow = !isShow">
		<!-- 搜索 -->
		<input type="text" v-model="search" id="search">
		<el-button type="primary" icon="el-icon-search" id="searchBtn" @click="searchInfo"></el-button>
	</div>
</template>


<script>
		import "../style/zTree/js/jquery-1.4.4.min.js"
		import "../style/zTree/js/jquery.ztree.core.min.js"
		import "../style/zTree/js/jquery.ztree.excheck.min.js"

		import {get_basic_info} from '@/api/api'
		import {get_partyMemberList} from '@/api/api'
		import {get_partyGroupList} from '@/api/api'
		import {get_getPoy} from '@/api/api'
		import {get_getElements} from '@/api/api'
		import {get_partyGroupAll} from '@/api/api'
		import {get_partyMember} from '@/api/api'
		import {get_partyMemberSearch} from '@/api/api'
		import {groupTree} from '@/api/api'
		import $ from 'jquery'
		
    export default {
			data(){
				return {
					search:'',
					fullGreen:require('../assets/new/fullscreen.png'),
					isShow:true,
					show:false,
					dialogTable1Visible: false,
					dialogTable2Visible: false,
					data:[],
					center: {lng: 120.399599, lat: 31.895548},
					markerPoint:{lng: 120.427447, lat: 31.898552},
					nums:{
						party_group:{party_count:0},
						formal_party:{party_count:0},
						prep_party:{party_count:0},
						active_party:{party_count:0},
						retired_party:{party_count:0},
						pioneer_party:{party_count:0},
						key_party:{party_count:0},
						flow_party:{party_count:0},
						out_party:{party_count:0},
						bad_party:{party_count:0},
					},//党员数量
					table1Data:[],//表格1数据
					table2Data:[],//表格1数据
					zoom: 16,
					// 多边形
					polygonPath: [],
					pagesize: 10,
					currentPage: 1,
					total:0,
					star:{},
					markerGroup:[],
					markerMember:[],
					markerGroupShow:true,
					markerMemberShow:true,
					markerMemberShow2:true,
					imgUrl1:{url: require('../assets/new/018.png'), size: {width: 30, height: 40}},
					imgUrl2:{url: require('../assets/new/019.png'), size: {width: 30, height: 40}},
					imgUrl3:{url: require('../assets/new/20.png'), size: {width: 30, height: 40}},
					points: [],
					list:{},
				}
			},
			created(){
				this.getBasicInfo()
				this.getList()
				this.getPoy()
				this.getParty()
			},
			watch:{
				dialogTable2Visible(val){
					this.currentPage = 1;
					//console.log(this.currentPage)
				},
				dialogTable1Visible(val){
					this.currentPage = 1;
					//console.log(this.currentPage)
				}
			},
			mounted(){
				this.addPoints ()
			},
			methods:{
				markerGroupShowis(){
					this.markerGroupShow = !this.markerGroupShow
					this.show = false;
				},
				markerMemberShowis(){
					this.markerMemberShow = !this.markerMemberShow
					this.show = false
				},
				markerMemberShowis2(){
					this.markerMemberShow2 = !this.markerMemberShow2
					this.show = false
				},
				clickHandler (e) {
					alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
				},
				addPoints () {
					const points = [];
					for (var i = 0; i < 1000; i++) {
						const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
						points.push(position)
					}
					this.points = points
				},
				// 获取个人信息
				getAdvInfo(id){
					var that = this;
					var param = {};
					param.id = id;
					//param.area_id = 11;
					that.$axios.post(get_partyMember,param)
					.then(res=>{
						//console.log(res.data.data)
						that.markerMember = [];
						that.markerGroup = [];
						that.markerMemberShow = false;
						
						var obj = res.data.data
						var marker_point = {};
						marker_point.lng = obj.x;
						marker_point.lat = obj.y;
						obj.marker_point = marker_point;
						//console.log(obj,88888)
						// that.$set(that.markerMember,0,marker_point)
						that.markerMember.push(obj);
						//console.log(that.markerMember,99990)
						that.markerMemberShow = true;
					})
					
				},
				searchInfo(){
					if(this.search.trim() == ""){
						return
					}
					var that = this;
					var param = {};
					that.show = false;
					//param.area_id = 11;
					param.keyword = that.search;
					that.$axios.post(get_partyMemberSearch,param)
					.then(res=>{
						//that.markerMember = res.data.data;
						that.markerGroup = []
						that.markerMember = []
						
						for(var i=0;i<res.data.data.length;i++){
							that.markerMember[i] = {}
							//res.data.data[i].isShow = false;
                            that.markerMember[i] = $.extend(true,{},res.data.data[i])
							that.markerMember[i].marker_point = {};
							if(res.data.data[i].x){
								that.markerMember[i].marker_point.lng = Number(res.data.data[i].x)
							}else{
								that.markerMember[i].marker_point.lng = 0
							}
							if(res.data.data[i].y){
								that.markerMember[i].marker_point.lat = Number(res.data.data[i].y)
							}else{
								that.markerMember[i].marker_point.lat = 0
							}
						}
						that.search = ""
						that.markerMemberShow = true;
						//console.log(that.markerMember,77777)
					})
				},
				changePize(val){
					this.currentPage = val;
					//console.log(val)
					this.showTable()
				},
				changePize2(val){
					this.currentPage = val;
					//console.log(val)
					this.showTable2()
				},
				getParty(){
					var that = this;
					var param = {};
					//param.area_id = 11;
					that.$axios.post(get_partyGroupAll,param)
					.then(res=>{
						//console.log(res.data.data)
						that.markerMember = [];
						that.markerGroup = [];
						for(var i=0;i<res.data.data.length;i++){
							that.markerGroup[i] = {}
							that.markerGroup[i].markerPoint = {};
							if(res.data.data[i].x){
								that.markerGroup[i].markerPoint.lng = Number(res.data.data[i].x)
							}else{
								that.markerGroup[i].markerPoint.lng = 0
							}
							if(res.data.data[i].y){
								that.markerGroup[i].markerPoint.lat = Number(res.data.data[i].y)
							}else{
								that.markerGroup[i].markerPoint.lat = 0
							}
						}
						that.markerGroupShow = true;
						//console.log(that.markerGroup)
					})
				},
				// 获取描边
				getPoy(){
					var that = this;
					var param = {};
					//param.area_id = 1;
					that.$axios.get(get_getPoy)
					.then(res=>{
						//console.log(res.data.data.longlat)
						that.polygonPath = [];
						for(var i=0;i<res.data.data.longlat.length;i++){
							that.polygonPath[i] = {};
							that.polygonPath[i].lng = Number(res.data.data.longlat[i][0])
							that.polygonPath[i].lat = Number(res.data.data.longlat[i][1])
						}
						let len = that.polygonPath.length
						//console.log(len)
						that.polygonPath[len] = {};
						that.polygonPath[len].lng = Number(res.data.data.longlat[0][0])
						that.polygonPath[len].lat = Number(res.data.data.longlat[0][1])
					// 	that.polygonPath=[
					// {lng: 116.412732, lat: 39.911707},
					// {lng: 116.39455, lat: 39.910932},
					// {lng: 120.427447, lat: 120.427447},
					// {lng: 120.426908, lat: 31.898552},
					// {lng: 120.426908, lat: 31.898552},
					// {lng: 120.424842, lat: 31.883269},
					// {lng: 116.403461, lat: 39.921336}
					// ]
						that.center.lng = res.data.data.x
						that.center.lat = res.data.data.y
						//console.log(that.polygonPath,666)
					})
				},
				// 控制信息弹窗得展开和收起
				infoWindowClose (e) {
				    //console.log(666,777)
					this.show = false;
					//console.log("执行了")
				},
				infoWindowOpen (e) {
					//console.log(event.target)
					//event.stopPropagation()
					//event.domEvent.stopPropagation();
					//this.show = true
					
					//console.log(val,666)
					this.show = true;
					console.log("执行了666")
					//console.log("执行了llalala",e)
				},
				infoWindow(val){
					//console.log("执行了22222",val)
					this.show = false;
					this.list = val;
					//console.log(this.list,999)
					this.infoWindowOpen()
				},
				// 控制信息弹窗得展开和收起
				infoWindowClose2 (val,event) {
				    //console.log(val,666,777)
					val.isShow = false;
					//console.log("执行了")
				},
				infoWindowOpen2 (val,item,event) {
					//console.log(event.target)
					//event.stopPropagation()
					//event.domEvent.stopPropagation();
					//this.show = true
					
					//console.log(val,item,666,777,88)
					val.isShow = true;
					//console.log("执行了")
				},
				// 获取党员数量
				getBasicInfo(){
					var that = this;
					var param = {};
					//param.area_id = 11;
					that.$axios.post(get_basic_info,param)
					.then(res=>{
						//console.log(res.data.data)
						that.nums = res.data.data;
					})
				},
				// 展示表格
				showTable(val){
					//console.log(param)
					var that = this;
					if(val!=undefined){
						that.star = val;
					}
                    var param = $.extend(true,{},that.star)
					//console.log(that.star);
					param.page = that.currentPage;
					param.pagesize = that.pagesize;
					that.$axios.post(get_partyMemberList,param)
					.then(res=>{
						//console.log(res.data.data.items)
						that.table1Data = res.data.data.items
						that.total = res.data.data.total;
						this.dialogTable2Visible = true;
					})
				},
				// 展示表格
				showTable2(){
					//console.log(param)
					var that = this;
					var param = {}
					//console.log(that.star);
					//param.area_id = 11;
					param.page = that.currentPage;
					param.pagesize = that.pagesize;
					that.$axios.post(get_partyGroupList,param)
					.then(res=>{
						//console.log(res.data.data.items)
						that.table2Data = res.data.data.items;
						that.total = res.data.data.total;
						that.dialogTable1Visible = true;
					})
				},
				getDetails(id){
					var that = this;
					var param = {};
					param.id = id;
					that.$axios.post(get_getElements,param)
					.then(res=>{
						//console.log(res.data.data)
						that.markerMemberShow = false;
						that.markerGroupShow = false;
						for(let item of res.data.data.partyMember){
							item.isShow = false
						}
						that.markerMember = [];
						that.markerMember = res.data.data.partyMember;
						that.markerGroup = [];
						if(res.data.data.group.lat && res.data.data.group.lng){
							//res.data.data.group.isShow = false;
							res.data.data.group.lng = Number(res.data.data.group.lng)
							res.data.data.group.lat = Number(res.data.data.group.lat)
							that.markerGroup[0] = {}
							that.markerGroup[0].markerPoint = {}
							that.markerGroup[0].markerPoint = res.data.data.group;
							that.markerGroupShow = true;
						}else{
							that.markerGroup = []
						}
						//console.log(that.markerGroup)
						//console.log(that.markerMember)
						//console.log(that.markerGroupShow)
						that.markerMemberShow = true;
						//console.log(that.markerMember)
						//console.log(that.markerGroup)
					})
				},
				getList(){
					var that = this;
					this.$axios.post(groupTree)
					.then(res=>{
						 //console.log(res.data.data)
						 that.data.push(res.data.data)
						 that.getListData()
					})
				},
				getListData(){
					var that = this;
					var g_gridNo   = '';
					var g_gridNo_b = '';
					
					var zTree;
					var setting = {
						view: {
							dblClickExpand: false,
							showLine: true,
							selectedMulti: true
						},
						data: {
							simpleData: {
								enable:true,
								idKey: "id",
								pIdKey: "pId",
								rootPId: ""
							}
						},
						callback: 
						{
							beforeClick: function(treeId, treeNode) 
							{
								// if(infoBox)
								// {
								// 	infoBox.close();
								// }
								//console.log(treeNode)
								that.show = false;
								var zTree = $.fn.zTree.getZTreeObj("tree");
								var id = treeNode.id;
								//console.log(treeNode)
								var spanId = treeNode.tId+'_span';
								$('#tree').find("*[id*='tree_']").each(function(i,ele){
									$(ele).css('color','#000')
								});
								document.getElementById(spanId).style.color='red'
								var pId = treeNode.pId;
								var level = treeNode.level
								//console.log(level)		
								
								if(treeNode.gridNo > 33)
								{
									g_gridNo_b = treeNode.gridNo;
								}
								else
								{
									g_gridNo = treeNode.gridNo;
								}
								//console.log(pId, treeNode.gridNo, '')
								//getGridPoly(pId, treeNode.gridNo, '');
								if(level == 0){
									that.getParty()
								}else if(level == 1){
									that.getDetails(id)
								}else if(level == 2){
									that.getAdvInfo(id)
								}else{
									return;
								}
								
								return true;
							}
						
						
						
						}
					};
			// 		var zNodes=[
			// 				{id:1,pid:0,name:"大良造菜单",open:true,nocheck:false,
			// 				icon:'http://www.cst-info.cn:8081/admin/themes/simplebootx/Public/mapn/image/treezz.png',
            //     children: [
            //         { id:11,pid:1,name:"当前项目",icon:'http://www.cst-info.cn:8081/admin/themes/simplebootx/Public/mapn/image/treezz.png',},
			// 							{ id:12,pid:1,name:"工程管理",open:true,
			// 							icon:'http://www.cst-info.cn:8081/admin/themes/simplebootx/Public/mapn/image/treezz.png',
            //             children: [
            //                 { id:121,pid:12,name:"我的工程"},
            //                 { id:122,pid:12,name:"施工调度"},
            //                 { id:1211,pid:12,name:"材料竞价"}
            //             ]
            //         },
            //         { id:13,pid:1,name:"录入管理",open:true,
            //             children: [
            //                 { id:131,pid:13,name:"用工录入"},
            //                 { id:132,pid:13,name:"商家录入"},
            //                 { id:1314,pid:13,name:"机构列表"}
            //             ]
            //         },
            //         { id:14,pid:1,name:"审核管理",open:true,
            //             children: [
            //                 { id:141,pid:14,name:"用工审核"},
            //                 { id:142,pid:14,name:"商家审核"},
            //                 { id:145,pid:14,name:"机构审核"}
            //             ]
            //         },
            //         { id:15,pid:1,name:"公司管理",open:true,
            //             children: [
            //                 { id:1517,pid:15,name:"我的工程案例"},
            //                 { id:1518,pid:15,name:"联系人设置"},
            //                 { id:1519,pid:15,name:"广告设置"}
            //             ]
            //         },
            //         { id:16,pid:1,name:"业务管理",open:true,
            //             children: [
            //                 { id:164,pid:16,name:"合同范本"},
            //                 { id:165,pid:16,name:"合同列表"},
            //                 { id:166,pid:16,name:"需求调度"}
            //             ]
            //         },
            //         { id:17,pid:1,name:"订单管理",open:true,
            //             children: [
            //                 { id:171,pid:17,name:"商品订单"},
            //                 { id:172,pid:17,name:"用工订单"},
            //                 { id:175,pid:17,name:"供应菜单"}
            //             ]
            //         },
            //         { id:18,pid:1,name:"我的功能",open:true,
            //             children: [
            //                 { id:181,pid:18,name:"免费设计"},
            //                 { id:182,pid:18,name:"装修报价"},
            //                 { id:1817,pid:18,name:"项目用工"}
            //             ]
            //         },
            //         { id:19,pid:1,name:"分润管理",open:true,
            //             children: [
            //                 { id:191,pid:19,name:"分润列表"}
            //             ]
            //         },
            //         { id:110,pid:1,name:"运营管理",open:true,
            //             children: [
            //                 { id:1101,pid:110,name:"代理列表"},
            //                 { id:1102,pid:110,name:"代售商品"}
            //             ]
            //         },
            //     ]
            //   }
            // ]
						//zNodes 这个里面数据可以灵活配置的，不再叙述 
					that.data[0].open = true;
					var zNodes= that.data;
					//console.log(zNodes)	
					$(document).ready(function(){
						var t = $("#tree");
						t = $.fn.zTree.init(t, setting, zNodes);
					});
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
	/* @import '../style/zTreeStyle.css'; */
	
	@import '../style/style_map.css';
	
	#map{
		width:100%;
		height:100%;
		display:flex;
		
	}
	.table{
		text-align:center;
	}
	#searchBtn{
		position: fixed;
		z-index:999;
		top:120px;
		left:640px;
		height:30px;
		padding:0 10px;
	}
	.el-icon-search{
		line-height: 30px;
	}
	#search{
		position: fixed;
		z-index:999;
		top:120px;
		left:460px;
		height:30px;
	}
	#fullGreen{
		position: fixed;
		z-index:999;
		top:100px;
		left:700px;
	}
	.bm-view {
		width: 100%;
		height: 100%;
	}
	.map{
		width:100%;
		height:100%;
	}
  .left{
		background: url(../assets/new/015.png) no-repeat;
		background-size:100% 100%;
		width:450px;
		height:100%;
		position:fixed;
		z-index:999;
	}
  ul.ztree{
		background-color:transparent;
		border:none;
	}
	.right{
		position:fixed;
		right:0;
		bottom:2rem;
	}
	.right img.img{
		width:420px;
	}
	.mainContent{
		position:absolute;
		top:120px;
		left:180px;
	}
	ul{
		padding:0;
	}
	.right .title{
		width:120px;
		height:34px;
		background-image: url(../assets/new/016.png);
		color:#FFF;
		font-size:2rem;
		text-align: center;
		line-height:34px;
	}
	.right ul li{
		text-align:left;
		display:block;
		color: #fef0c4;
		margin-bottom:2rem;
	}
	.right ul li span{
		font-size:2.2rem;
	}
	.right ul li span:last-child{
		color:#FFF;
		border-bottom:1px solid #FFF;
		cursor: pointer;
	}
	.right ul li:last-child{
		display:flex;
		justify-content: flex-start;
	}
	.right ul li:last-child div{
		text-align:center;
	}
	.right ul li:last-child img{
		display:block;
		height:4rem;
		margin:0 auto;
	}
	.right ul li:last-child div:last-child{
		margin-left:2rem;
	}
	.map .top p:first-child{
		font-size:2.4rem;
	}
	.map .top span{
		color:rgb(187, 0, 0);
	}
	.map .bottom i{
		color:#aaa;
	}
	.map .top,.map .bottom{
		border-bottom:1px dashed #aaa;
	}
	.map .bottom{
		padding:0.1rem 0;
	}
</style>
