<template>
        <div >
        
        <common-head></common-head>
        
        <div class="container" style="width: 1200px;">
        <div class="bread cl" style="margin-top: 20px;"> 
            <div class="site">当前位置:</div> 
            <div class="path"> 
                <ol class="breadcrumb"> 			
                    <li><router-link to="/Main">首页</router-link></li>
                    <li><router-link to="/Dyyz">党员教育</router-link></li>	
                    <li class="active">统一活动日、主题党日</li>
                </ol> 
            </div> 
        </div> 
        
        
         <!-- <ul class="nav nav-tabs" role="tablist">
             
            
            <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="[classA,{active:active===index}]">
                 <a>{{tab.type}}</a>     
            </li> 
          </ul> -->
         
        
          <!-- Tab panes -->
          <div style="margin-top:20px;">
              <component :is="currentView" :v1="active" :module="module"></component>
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
                name:"zhuti",
                
                data()
                {
                    return {  
                        classA: 'li_style',
                         classB: 'active',
                        active: 0,
                        module:'zhuti',
                        currentView: 'tab1',   
                        tabs: [   
                            {       
                                type: '党务公开',   
                                view: 'tab1'  
                            },     
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