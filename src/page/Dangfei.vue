<template>

<div>

<common-head></common-head>

<div class="container" style="width: 1200px;">
<div class="bread cl" style="margin-top: 20px;">
	<div class="site">当前位置:</div>
	<div class="path">
		<ol class="breadcrumb">
			<li><router-link to="/Main">首页</router-link></li>
			<li><router-link to="/Dwgl">党务管理</router-link></li>
			<li class="active">党费交纳</li>
		</ol>
	</div>
</div>
<div class="dangfei">

	<div class="cl">


	    <div @click="toggle(index)" v-for="(tab,index) in tabs" :class="[classA,classB,{'hov-but':index==active},{'com-but':index!=active}]">
			<a>{{tab.type}}</a>
		</div>


		<div class="fl ser">
			<div style="margin-top: -10px;" class="input-group" >
				<input type="text" style="width: 200px; border-radius: 10px; height: 40px;" class="form-control" placeholder="请输入需要查询的党员" v-model="search">
				<div class="" id="basic-addon2" style="background-color: #FF0000; width: 100px; border-radius: 10px;margin-left:10px;float:right;height: 40px;line-height: 40px;" align="center">
					<a id="search" href="javascript:void(0);" style="color: white;" @click="getPayList" >搜索</a>
				</div>
			</div>
		</div>
	</div>



  	<div class="list-tab cl" v-if="active==0">
	<table>
		<thead>
			<th>姓名</th>
			<th>1月</th>
			<th>2月</th>
			<th>3月</th>
			<th>4月</th>
			<th>5月</th>
			<th>6月</th>
			<th>7月</th>
			<th>8月</th>
			<th>9月</th>
			<th>10月</th>
			<th>11月</th>
			<th>12月</th>
		</thead>
		<tbody>
			<Tr v-for="(tab,index1) in tableData" :key="index1">
				<td>{{tab.real_name}}</td>
				<td>{{tab.t01}}</td>
				<td>{{tab.t02}}</td>
				<td>{{tab.t03}}</td>
				<td>{{tab.t04}}</td>
				<td>{{tab.t05}}</td>
				<td>{{tab.t06}}</td>
				<td>{{tab.t07}}</td>
				<td>{{tab.t08}}</td>
				<td>{{tab.t09}}</td>
				<td>{{tab.t10}}</td>
				<td>{{tab.t11}}</td>
				<td>{{tab.t12}}</td>
			</tr>

		</tbody>
	</table>
	</div>

	<div class="teble1" v-if="active==1">
		<table>
			<thead>
				<th>姓名</th>
				<th>支部</th>
				<th>党费期数</th>
				<th>核定缴纳党费金额</th>
				<th>实际缴纳党费金额</th>
				<th>缴纳日期</th>
			</thead>
			<tbody>
				<Tr v-for="(tab,index1) in tableData" :key="index1">
					<td>{{tab.real_name}}</td>
					<td>{{tab.group_name}}</td>
					<td>{{tab.end_time}}</td>
					<td>{{tab.price}}</td>
					<td>{{tab.price}}</td>
					<td>{{tab.add_time}}</td>
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
</template>


<script>

	import commonHead from '../components/commonHead'
	import {getPayList} from '@/api/getData'

    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                pagesize: 15,
                count: 0,
                currentPage: 1,
                tpe: 1,
                search:'',

                classA:'fl',
                classB:'tab',
                classC:'com-but',
                active: 0,
                tabs: [
	                {
	                    type: '党费缴纳记录',
	                },
/*	                {
	                    type: '综合记录查询'
	                }*/
	            ]
            }
        },

    	components: {
    		commonHead
    	},
        created(){
            this.getPayList();
        },
        methods: {
        	toggle(i)
            {
                this.active = i;

                //alert(this.currentPage);
                //alert(this.active);

                this.getPayList();
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val)
            {
                this.currentPage = val;


                this.getPayList();
            },
            async getPayList()
            {
            	if(this.active == undefined)
            	{
            		return;
            	}


                const Pays1 = await getPayList({page: this.currentPage, pagesize: this.pagesize, tpe:this.active, search:this.search});
                //alert(Articles1);

                const Pays  = Pays1.data.items;
                //alert(Users);

                this.count = Pays1.data.total;

                this.tableData = Pays;

            }
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

.tab {
	padding: 10px 60px;
	margin-right: 20px;
	border-radius: 5px;
}

.hov-but {
	background: #d81e06;
	color: #fff;
}

.com-but {
	background: #fff;
	color: #333;
}

.ser {
	padding: 10px 0px;
}

table {
	line-height: 38px
}

tbody {
	background: #fff;
}

table thead {
	background: #f9f1b7;
}
th{
	background-color: #f9f1b7;
	border: none;
}
th,
td {
	width: 100px;
	text-align: center;
}

.list-tab {
	margin-top: 20px;
}
tr{
	border-bottom: 1px dashed;

}



</style>
