<template>
    <div class="mainContent">
        <img id="img" src="../assets/new/bg.png" alt="">
        <h1>{{title}}党建数据平台</h1>
        <div class="left">
            <div class="top" id="InspectBarContainer"></div>
            <div class="bottom" id="InspectLineContainer"></div>
        </div>
        <div class="middle">
            <div class="top">
                <h2>辖区党组织</h2>
                <p>党组织数量<span>{{memberData.party_group}}</span>个,党员数量<span>{{memberData.party_count}}</span>个</p>
            </div>
            <div class="top">
                <h2>党员管理</h2>
                <p>正式党员<span>{{memberData.formal_party}}</span>个,预备党员<span>{{memberData.prep_party}}</span>个,</p>
                <p>入党积极分子<span>{{memberData.active_party}}</span>个,</p>
                <p>退休党员<span>{{memberData.retired_party}}</span>个,</p>
                <p>先锋党员<span>{{memberData.pioneer_party}}</span>个,</p>
                <p>思想骨干党员<span>{{memberData.key_party}}</span>个,流动党员<span>{{memberData.flow_party}}</span>个,</p>
                <p>处分党员<span>{{memberData.bad_party}}</span>个,</p>
                <p>大学以上学历<span>{{memberData.bachelor_party}}</span>人,大专以上学历<span>{{memberData.college_party}}</span>人,</p>
                <p>其他学历<span>{{memberData.other_party}}</span>人</p>
            </div>
            <div class="top">
                <h2>党务管理</h2>
                <p>组织党建引领活动<span>{{memberData.bad_party}}</span>次,</p>
                <p>群团活动<span>{{memberData.team_activity}}</span>次,</p>
                <p>志愿者活动<span>{{memberData.vol_activity}}</span>次</p>
            </div>
        </div>
        <div class="right">
                <div class="top" >
                    <div id="TypePieContainer"></div>
                </div>
                <div class="bottom">
                    <div id="TypeBarContainer"></div>
                </div>
        </div>
    </div>
</template>
<script>
    import Highcharts from 'highcharts';
    import {get_partyCharts} from '@/api/api'
    import {get_partyGroupCount} from '@/api/api'
    import {get_TranStatistics} from '@/api/api'
    import {get_ageStatistics} from '@/api/api'
    import {get_IntegralCount} from '@/api/api'
    import {get_areaCname} from '@/api/api'

    export default {
        data(){
            return {
                memberData:[],
                title:'',
            }
        },
        mounted(){
            this.getMember()
            this.getOneData()
            this.getTwoData()
            this.getThreeData()
            this.getFourData()
            this.get_areaCname()
        },
        methods:{
            get_areaCname(){
					var that = this;
					that.$axios.get(get_areaCname)
					.then(res=>{
						//console.log(res.data.data.cname)
						that.title = res.data.data.cname
					})
			},
            getMember(){
                var that = this;
                var param = {};
                //param.area_id = 11;
                that.$axios.post(get_partyGroupCount,param)
                .then(res=>{
                    //console.log(res.data.data)
                    that.memberData = res.data.data;
                })
            },
            getOneData(){
                var that = this;
                var param = {};
                //param.area_id = 11;
                that.$axios.post(get_partyCharts,param)
                .then(res=>{
                    //console.log(res.data.data)
                    var groupName = [];
                    var groupNum = [];
                    for(let item of res.data.data){
                        if(item.group_name){
                            // groupName.push(item.group_name.slice(5,))
                            groupName.push(item.group_name)
                            groupNum.push(item.count)
                        }
                    }
                    //console.log(groupName,groupNum)
                    that.getOneCharts(groupName,groupNum)
                })
            },
            getTwoData(){
                var that = this;
                var param = {};
                //param.area_id = 11;
                that.$axios.post(get_TranStatistics,param)
                .then(res=>{
                    //console.log(res.data.data)
                    var months = [];
                    for(let item of res.data.data[0].list){
                        months.push(item.months)
                    }
                    var data = [];
                    for(let item of res.data.data){
                        var obj = {}
                        obj.name = item.title;
                        var arr = [];
                        for(let itm of item.list){
                            arr.push(itm.count)
                        }
                        obj.data = arr;
                        data.push(obj);
                    }
                    //console.log(months,data)
                    that.getTwoCharts(months,data)
                })
            },
            getThreeData(){
                var that = this;
                var param = {};
                //param.area_id = 11;
                that.$axios.post(get_ageStatistics,param)
                .then(res=>{
                    //console.log(res.data.data)
                    var total = 0;
                    for(let item of res.data.data){
                        total += Number(item)
                    }
                    console.log(total)
                    var per = [
                        {name:'20-30岁',y:0},
                        {name:'30-40岁',y:0},
                        {name:'40-50岁',y:0},
                        {name:'50-60岁',y:0},
                        {name:'60岁以上',y:0},
                    ];
                    // here
                    var i = 0
                    for(let item of res.data.data){
                        var percent = 0;
                        percent = Math.round(item / total * 10000) / 100.00;
                        per[i].y = percent
                        i++;
                    }
                    //console.log(per)
                    that.getThreeCharts(per)
                })
            },
            getFourData(){
                var that = this;
                var param = {};
                //param.area_id = 11;
                that.$axios.post(get_IntegralCount,param)
                .then(res=>{
                    //console.log(res.data.data)
                    var data1=[];
                    var data2=[];
                    var data3 = [];
                    var dzzList = [];
                    var dyList = [];
                    for(let item of res.data.data){
                        data1.push(item.option)
                        data2.push(Number(item.handledCount))
                        data3.push(Number(item.planedCount))
                        dzzList.push(item.group);
                        dyList.push(item.member);
                    }
                    //console.log(data1,data2,data3,dzzList,dyList)
                    that.getFourCharts(data1,data2,data3,dzzList,dyList);
                })
            },
            getOneCharts(name,num){
                var o = document.getElementById("InspectBarContainer");
                var height = o.offsetHeight; //高度
                var width = o.offsetWidth; //宽度
                Highcharts.chart('InspectBarContainer', {
                        chart: {
                            renderTo: 'InspectBarContainer',
                            backgroundColor: 'rgba(0,0,0,0)'
                        },
                        title: {
                            text: '支部党员分布图',
                            style: {
                                color: "#f15c80",
                                fontSize: '18px',
                                fontWeight:'900',
                            }
                        },
                        subtitle: {
                            //text: '6总类型'
                        },
                        xAxis: {
                            categories: name,
                            crosshair: true,
                            labels: {
                                style: {
                                    color: 'white',//颜色
                                    fontSize: '14px'  //字体
                                }
                            },
                        },
                        exporting: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            layout: 'vertical',
                            backgroundColor: 'rgba(0,0,0,0)',
                            Color: '#fff',
                            floating: true,
                            align: 'left',
                            verticalAlign: 'top',
                            x: width*0.57,
                            y: 15,
                            itemStyle: {
                                color: '#fff'
                            },
                            //labelFormat: '<span style="{color}">{name} (click to hide or show)</span>'
                        },
                        yAxis:
                            [{
                                allowDecimals: false, //是否允许刻度有小数
                                min: 0,
                                format: '{value} 个',
                                labels: {
                                    style: {
                                        color: 'white',//颜色
                                        fontSize: '14px',  //字体
                                    },
                                }, gridLineWidth: 0,
                                title: {
                                    text: '党员个数',
                                    style: {
                                        color: '#FFF',//颜色
                                        fontSize: '14px'  //字体
                                    },
                                }
                            }],
                        tooltip: {
                            shared: true,
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0,
                                borderWidth: 0,
                                events: {

                                }
                            }
                        },
                        colors:
                            ['#7cb5ec', '#f15c80', '#EEAEEE', '#90ed7d', '#f7a35c', '#BF3EFF',
                                '#e4d354', '#8085e8', '#8d4653', '#91e8e1',
                                '#CAFF70', '#D2691E', '#A9A9A9', '#CDC673', '#CD8C95'],
                        series: [{
                            type: 'column',
                            name: '支部党员数',
                            data: num,
                            tooltip: {
                                valueSuffix: ' 个'
                            },
                        }]
                    });
            },
            getTwoCharts(months,data){
                Highcharts.chart('InspectLineContainer', {
                        chart: {
                            renderTo: 'InspectLineContainer',
                            type: 'spline',
                            backgroundColor: 'rgba(0,0,0,0)'
                        },
                        title: {
                            text: '近一年党建事务变化趋势图',
                            style: {
                                color: "#f15c80",
                                fontSize: '18px',
                                fontWeight:'900',
                            }
                        },
                        legend: {
                            itemStyle: {
                                color: '#fff'
                            },
                        },
                        xAxis: {
                            categories: months,
                            labels: {
                                style: {
                                    color: 'white',//颜色
                                    fontSize: '14px'  //字体
                                }
                            }
                        },
                        exporting: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        yAxis: {
                            minPadding: 0,
                            min: 0,
                            title: {
                                text: '数量',
                                style: {
                                    color: 'white',//颜色
                                    fontSize: '14px',  //字体
                                    
                                },

                            },
                            gridLineWidth: 0,
                            labels: {
                                style: {
                                    color: 'white',//颜色
                                    fontSize: '14px'  //字体
                                }
                            },
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: true
                                },
                                enableMouseTracking: false
                            }
                        },
                        tooltip: {
                            valueSuffix: ' m³'
                        },
                        colors:
                            ['#7cb5ec', '#EEAEEE', '#90ed7d', '#f7a35c', '#BF3EFF',
                                '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1',
                                '#CAFF70', '#D2691E', '#A9A9A9', '#CDC673', '#CD8C95']
                        ,
                        series: data
                    });
            },
            getThreeCharts(per){
                Highcharts.chart('TypePieContainer', {
                        chart: {
                            renderTo: 'TypePieContainer',
                            backgroundColor: 'rgba(0,0,0,0)',
                            type: 'pie',
                            options3d: {
                                enabled: true,
                                alpha: 45,
                                beta: 0
                            }

                        },
                        title: {
                            text: '党员年龄分布图',
                            style: {
                                color: "#f15c80",
                                fontSize: '18px',
                                fontWeight:'900',
                            },
                            y: 45,
                        },
                        tooltip: {
                            headerFormat: '{series.name}<br>',
                            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        credits: {
                            enabled: false
                        },
                        plotOptions: {
                            pie: {
                                events: {
                                    click: function (event)
                                    {

                                    }
                                },
                                allowPointSelect: true,
                                cursor: 'pointer',
                                depth: 30,
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                    style: {
                                        color: 'white',
                                        fontSize: '14px'  //字体
                                    }
                                }
                            }
                        },
                        exporting: {
                            enabled: false
                        },
                        colors:
                            ['#7cb5ec', '#EEAEEE', '#90ed7d', '#f7a35c', '#BF3EFF',
                                '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1',
                                '#CAFF70', '#D2691E', '#A9A9A9', '#CDC673', '#CD8C95']
                        ,
                        series: [{
                            type: 'pie',
                            name: '告警问题占比',
                            colorByPoint: true,
                            data: per,
                        }]
                    });
            },
            getFourCharts(data1,data2,data3,dzzList,dyList){
                var o = document.getElementById("TypeBarContainer");
                    var height = o.offsetHeight; //高度
                    var width = o.offsetWidth; //宽度

                    Highcharts.chart('TypeBarContainer', {
                        chart: {
                            renderTo: 'TypeBarContainer',
                            backgroundColor: 'rgba(0,0,0,0)'
                        },
                        title: {
                            text: '2018年累12月份计积分排行图',
                            style: {
                                color: "#f15c80",
                                fontSize: '18px',
                                fontWeight: 'bolder'
                            }
                        },
                        subtitle: {
                            //text: '6总类型'
                        },
                        xAxis: {
                            categories: data1,
                            crosshair: true,
                            labels: {
                                style: {
                                    color: 'white',//颜色
                                    fontSize: '14px'  //字体
                                }
                            },
                        },
                        exporting: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        legend: {
                            layout: 'vertical',
                            backgroundColor: 'rgba(0,0,0,0)',
                            Color: '#fff',
                            floating: true,
                            align: 'left',
                            verticalAlign: 'top',
                            x: width * 0.57,
                            y: 15,
                            itemStyle: {
                                color: '#fff'
                            },
                            //labelFormat: '<span style="{color}">{name} (click to hide or show)</span>'
                        },
                        yAxis:
                            [{
                                allowDecimals: false, //是否允许刻度有小数
                                min: 0,
                                format: '{value} 分',
                                labels: {
                                    style: {
                                        color: 'white',//颜色
                                        fontSize: '14px'  //字体
                                    },
                                }, gridLineWidth: 0,
                                title: {
                                    text: '积分数',
                                    style: {
                                        color: '#FFF',//颜色
                                        fontSize: '14px'  //字体
                                    },
                                }
                            }],
                        tooltip: {
                            //shared: true,
                            formatter: function () 
                            {
                            	
                            	if(this.series.name == '党组织')
                           		{
                            		//return '<b>' + dzzList[0] + '</b><br/>' + this.y + ' 分' ;   
                            		if(this.y == 120)
                           			{
                            			return '<b>' + dzzList[0] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 116)
                           			{
                            			return '<b>' + dzzList[1] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 110)
                           			{
                            			return '<b>' + dzzList[2] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 108)
                           			{
                            			return '<b>' + dzzList[3] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 106)
                           			{
                            			return '<b>' + dzzList[4] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		
                           		}
                            	else
                           		{
                            		//return '<b>' + dyList[0] + '</b><br/>' + this.y + ' 分' ;   
                            		if(this.y == 82)
                           			{
                            			return '<b>' + dyList[0] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 80)
                           			{
                            			return '<b>' + dyList[1] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 78)
                           			{
                            			return '<b>' + dyList[2] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 76)
                           			{
                            			return '<b>' + dyList[3] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                            		else if(this.y == 72)
                           			{
                            			return '<b>' + dyList[4] + '</b><br/>' + this.y + ' 分' ;                              			
                           			}
                           		}
							}
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0,
                                borderWidth: 0,
                                events: {}
                            }
                        },
                        colors:
                            ['#7cb5ec', '#f15c80', '#EEAEEE', '#90ed7d', '#f7a35c', '#BF3EFF',
                                '#e4d354', '#8085e8', '#8d4653', '#91e8e1',
                                '#CAFF70', '#D2691E', '#A9A9A9', '#CDC673', '#CD8C95'],

                        series: [{
                            type: 'column',
                            name: '党组织',
                            data: data2,
                            tooltip: {
                                valueSuffix: ' 分'
                            },

                        }, {
                            type: 'column',
                            name: '党员',
                            data: data3,
                            tooltip: {
                                valueSuffix: ' 分'
                            }
                        }]
                    });

            },
        }
    }
</script>
<style scoped>
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
    .mainContent{
        width:100%;
        min-height:100%;
        background:url(../assets/new/bg.jpg) no-repeat;
        background-size:cover;
        font-family: "Microsoft YaHei";
        display:flex;
        justify-content: space-between;
    }
    #img{
        width:80%;
        position:fixed;
        top:0;
        left:50%;
        top:-3rem;
        transform: translateX(-50%);
    }
    .mainContent h1{
        position:fixed;
        left:50%;
        transform: translateX(-50%);
        color:#FFF;
        font-size:3rem;
    }
    .mainContent h2{
        color:red;
        font-weight:bold;
        font-family: "Microsoft YaHei";
        text-align:center;
        font-size:3rem;
        margin-bottom:2rem;
    }
    .mainContent .left{
        width:35%;
        height:100%;
    }
    .mainContent .left .top{
        padding-top:4rem;
    }
    .mainContent .left .bottom{
        padding:2rem 0 4rem 0;
    }
    .mainContent .right .top{
        padding-top:2rem;
    }
    .mainContent .left .top,.mainContent .left .bottom{
        height:50%;
        width:100%;
    }
    .mainContent .right .top,.mainContent .right .bottom{
        height:50%;
        width:100%;
    }
    .mainContent .right{
        width:35%;
        height:100%;
    }
    .mainContent .middle{
        padding-top:8rem;
        width:25%;
    }
    .mainContent .middle p{
        color:#FFF;
        font-size:2rem;
        font-family: "Microsoft YaHei";
        font-weight:normal;
        margin-bottom:1rem;
        text-align:left;
    }
    .mainContent .middle p span{
        color: #0094ff;
        font-weight:900;
        font-family: "Microsoft YaHei";
        font-size:2rem;
    }
    .mainContent .middle>div{
        border:1px solid #0094ff;
        border-radius:5px;
        margin-bottom:10px;
        padding:0 1rem;
    }
</style>