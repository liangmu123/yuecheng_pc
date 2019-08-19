<template>
    <div >
    
    <common-head></common-head>
    
    <div class="container" style="width: 1200px;">
    <div class="bread cl" style="margin-top: 20px;"> 
        <div class="site">当前位置:</div> 
        <div class="path"> 
            <ol class="breadcrumb"> 			
                <li><router-link to="/Main">首页</router-link></li>
                <li><router-link to="/Djzc">党建之窗</router-link></li>	
                <li class="active">班子建设</li>
            </ol> 
        </div> 
    </div> 
    
    
     <ul class="nav nav-tabs" role="tablist">
         <!--
          <li class="li_style active"><a href="#yltab1" aria-controls="yltab1" role="tab" data-toggle="tab">工会</a></li>
        <li class="li_style "><a href="#yltab2" aria-controls="yltab2" role="tab" data-toggle="tab">共青团</a></li>
        <li class="li_style"><a href="#yltab3" aria-controls="yltab3" role="tab" data-toggle="tab">妇联</a></li>
        -->
        
        <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="[classA,{active:active===index}]">
             <a>{{tab.type}}</a>     
        </li> 
      </ul>
     
    
      <!-- Tab panes -->
      <div style="margin-top:20px;">
          <component :is="currentView" :v1="active" :module="module" :mode="mode"></component>
      </div>		    
    </div> 
    
    </div>
    </template>
    
    <script>
        
        import commonHead from '../components/commonHead'
        import tab1 from '../components/yltab.vue';
        import tab2 from '../components/yltab.vue';
        import tab3 from '../components/yltab.vue';  
        export default {
            name:"teamBuild",
            
            data()
            {
                return {  
                    classA: 'li_style',
                     classB: 'active',
                    module:'teamBuild',
                    mode:'teamBuild',
                    active: 0, 
                    currentView: 'tab1',   
                    tabs: [   
                        // {       
                        //     type: '党务公开',   
                        //     view: 'tab1'  
                        // },     
                    ]  
                }
            },
            components: {
                tab1,
                tab2,
                tab3,
                commonHead,
              },
                    
            methods: 
            {  
                    toggle(i, v)
                    {    
                        this.active = i   
                        this.currentView = v  
                    } 
             }
        }
        
       
                
                
                
    </script>
    
    
    <style lang="less" scoped>
        @import '../style/activities.css';
        @import '../style/main.css';
        @import '../style/mainheader.css';
        @import '../style/dangjian_window.css';
        @import '../style/style.css';
        @import '../style/bootstrap-3.3.7/css/bootstrap.min.css';
        
        .breadcrumb {
                padding: 8px 15px;
                margin-bottom: 20px;
                list-style: none;
                border-radius: 4px;
                background: none;
            }
            
            .breadcrumb>li+li:before {
                padding: 0 5px;
                color: #000;
                content: ">\00a0";
            }
            
            .li_div{
                background: white;
                height: 100px;
                border-radius: 10px;
                margin-left: 15px;
            }
            
            .li_div:hover{
                box-shadow: 0 0 20px #FF5722;
            }
            
            .img_yingling{
                width: 120px;
                height: 90px;
                border-radius: 10px;
                margin-top: 5px;
            }
            .row{
                padding-bottom: 10px;
            }
     
    </style>    