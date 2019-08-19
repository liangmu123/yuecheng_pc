$(function () 
{
    // 百度地图API功能
    var map = new BMap.Map("allmap" , { mapType: BMAP_NORMAL_MAP});    // 创建Map实例
    map.centerAndZoom(new BMap.Point(120.394604, 31.883013), 16);  // 初始化地图,设置中心点坐标和地图级别 
    map.addControl(new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP] }));
    map.setCurrentCity("倪家巷");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var opts = {
        width: 550,     // 信息窗口宽度
        // 信息窗口高度
        //  title: "信息窗口", // 信息窗口标题
        enableMessage: true//设置允许信息窗发送短息
    }; 
    $.ajax({
        url: "dma.php?act=get_area",
    	//url: "js/json/area.json",
        type: "GET",
        data: {},
        dataType: 'json',      //超时时间
        success: function (data) 
        {     
        	for (var i = 0; i < data.data.length; i++) 
            {
               pt= new BMap.Point(data.data[i].longitude, data.data[i].latitude);
                console.log(pt);                
                var opts = {
                    position: pt,    // 指定文本标注所在的地理位置
                   // offset: new BMap.Size(-30, -40)    //设置文本偏移量
                }
                var label = new BMap.Label(data.data[i].name, opts);  // 创建文本标注对象
                label.setStyle({
                    color: "red",
                    fontSize: "16px",
                    height: "20px",
                    border:"none",                    
                    fontFamily: "微软雅黑"
                });
                map.addOverlay(label);
                boundaries = data.data[i].boundary;
                var ply = new BMap.Polygon(boundaries, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.6, fillColor: getRandomColor(), fillOpacity: 0.3, });
                map.addOverlay(ply);
                var content = '<table class="table">' +
                         ' <tr>' +
                             '<td class="info" width="100">区域名称：</td>' +
                             ' <td id="population_detail-censusRegister" width="100">' + data.data[i].name + '</td>' +
                              '<td class="info"width="100">区域地址：</td>' +
                             ' <td id="population_detail-sex" width="100">' + data.data[i].address + '</td>' +
                            '<td class="info"width="100">分区数量：</td>' +
                             ' <td id="population_detail-censusRegister" width="100">' + data.data[i].sons + '</td>' +
                         ' </tr>' +
                          ' <tr>' +
                             ' <td class="info" >设备标识：</td>' +
                             ' <td id="population_detail-workPlace">' + data.data[i].deviceId + '</td>' +
                             ' <td class="info">设备经度：</td>' +
                            '  <td id="population_detail-phone">' + data.data[i].longitude + '</td>' +
                             ' <td class="info">设备纬度：</td>' +
                            '  <td id="population_detail-phone">' + data.data[i].latitude + '</td>' +
                         ' </tr>' +
                         
                      '</table>'
                addClickHandler(content, ply);// 不可拖拽 
                var removeMarker = function (e, ee, marker) {
                    map.removeOverlay(marker);
                }
            }
        }
    })   
    
    /*------------设备按钮-------------*/
    $('#map_btn-agriculture').on('click', function () {
        $('#Clear_Marker').click();
        $('.map_right_nav').animate({ right: '-200px' });
        $('.map_right_nav').html('');
        $('.map_right_nav').show();
        var myIcon = new BMap.Icon("images/chuangzhurenyuan.png", new BMap.Size(27, 39));
        $.ajax({
            //url: SVC_MAP + "/getOrgan",
        	url: "js/json/getOrgan.json",
            type: "GET",
            data: {
                districtID: $.cookie('JTZH_districtID'),
            },
            success: function (data) {
		console.log(data);
                cleanLayer(map);
                var MAX = 100;
                var markers = [];
                var pt = null;
                var i = 0;
                for (var i = 0; i < data.data.length; i++) {
                    pt = new BMap.Point(data.data[i].x, data.data[i].y);
                    
                    /*
                    var content = '<table class="table">' +
                  '<tr>' +
                      '<td class="info"width="90">网格名称：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].district + '</td>' +
                       '<td class="info"width="90">组织名称：</td>' +
                      ' <td id="population_detail-sex">' + data.data[i].organName + '</td>' +
                  '</tr>' +
                   '<tr>' +
                     '<td class="info"width="90">企业类型：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].organName + '</td>' +
                       '<td class="info"width="90">注册资金(万元)：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].registFund + '</td>' +
                  '</tr>' +
                  '<tr>' +
                     '<td class="info"width="90">负责人：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].name + '</td>' +
                       '<td class="info"width="90">经营范围：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].involve + '</td>' +
                  '</tr>' +
                   '<tr>' +
                      '<td class="info"width="90">地址：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].NowAddress + '</td>' +
                       '<td class="info"width="90">税号：</td>' +
                      ' <td id="population_detail-sex">' + data.data[i].TaxNumber + '</td>' +
                  '</tr>' +
                  '<tr>' +
                     '<td class="info"width="90">企业类型：</td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].mianType + '</td>' +
                       '<td class="info"width="90">法人： </td>' +
                      ' <td id="population_detail-censusRegister">' + data.data[i].legalPerson + '</td>' +
                  '</tr>' +
               '</table>'
               */
                    var content = '<table class="table">' +
                    
                     '<tr>' +
                        
                         '<td class="info"width="90">设备编号：</td>' +
                        ' <td id="population_detail-sex">' + data.data[i].TaxNumber + '</td>' +
                    '</tr>' +
                    
                 '</table>'
                    
                    var myIcon = new BMap.Icon("images/marker.png", new BMap.Size(30, 45), {
                        anchor: new BMap.Size(10, 30),
                        infoWindowAnchor: new BMap.Size(10, 0)
                    });
                    var marker = new BMap.Marker(pt, { icon: myIcon });// 创建标注
                    map.addOverlay(marker);             // 将标注添加到地图中
                    marker.disableDragging();
                    addClickHandler(content, marker);// 不可拖拽 
                    $('#Clear_Marker').on('click', function () {
                        cleanLayer(map)
                    })
                }
            }
        })
    })
    function addClickHandler(content, marker) {
        marker.addEventListener("click", function (e) {
            openInfo(content, e)
        }
		);
    }
    function openInfo(content, e) {
        var p = e.target;
        var point = new BMap.Point(e.point.lng, e.point.lat);
        var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象 
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    }
   
   
    
})
function changeFrameHeight() {
    var ifm = document.getElementById("allmap");
    ifm.height = document.documentElement.clientHeight;
    console.log(ifm.height);
}

//清空
function cleanLayer(map) {
    var allOverlay = map.getOverlays();
    for (var i = 0; i < map.getOverlays().length; i++) {
        if (typeof (map.getOverlays()[i].point) != "undefined")
            map.removeOverlay(map.getOverlays()[i]);
    }
}

//生成随机颜色
function getRandomColor() {
    var c = '#';
    var cArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (var i = 0; i < 6; i++) {
        var cIndex = Math.round(Math.random() * 15);
        c += cArray[cIndex];
    }
    return c;
}