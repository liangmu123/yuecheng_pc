<template>
 
<div class="container">

<div class="list-tab cl">
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
		<Tr>
			<td>陈全德</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td>15</td>
			<td></td>
			<td></td>
		</tr>
		
	</tbody>
</table>
</div>


<div class="Pagination" style="text-align: left;margin-top: 10px;">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
    </el-pagination>
</div>


</div>

</template>


<script>
	
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
            }
        },
       
    	components: {
    		
    	},
        created(){           
            this.getPayList();
        },
        methods: {
        	
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) 
            {
                this.currentPage = val;
                
                this.getArticleList();
            },
            async getPayList()
            {
            	//alert('v1='+this.v1);
            	if(this.v1 == undefined)
            	{
            		return;
            	}            	
            	
            	if(this.v1 == 0)
            	{
            		this.cid = 252;
            	}
            	else if(this.v1 == 1)
            	{
            		this.cid = 253;
            	}
            	else if(this.v1 == 2)
            	{
            		this.cid = 254;
            	}
            	
                const Articles1 = await getPayList({page: this.currentPage, pagesize: this.pagesize, id:this.cid});
                //alert(Articles1);
                
                const Articles  = Articles1.data.items;
                //alert(Users);
                
                this.count = Articles.length;
                
                this.tableData = Articles;
               
            }
        },
    }
</script>

<style scoped>
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
