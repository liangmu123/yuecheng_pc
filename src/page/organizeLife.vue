<template>

        <div>
        
        <common-head></common-head>
        
        <div class="container" style="width: 1200px;">
        <div class="bread cl" style="margin-top: 20px;">
            <div class="site">当前位置:</div>
            <div class="path">
                <ol class="breadcrumb">
                    <li><router-link to="/Main">首页</router-link></li>
                    <li><router-link to="/Dyyz">党员教育</router-link></li>
                    <li class="active">组织生活</li>
                </ol>
            </div>
        </div>
        <!-- 一级tab -->
        <ul class="nav nav-tabs" role="tablist" style="margin-bottom:20px;">
               <li @click="mainToggle(index ,tab.id)" v-for="(tab,index) in mainTabs" :class="[classA,{active:mainActive===index}]">
                    <a>{{tab.type}}</a>     
               </li> 
        </ul>
        <!-- 组织生活会 -->
        <div v-show="show == 0">
            <volunteer :module="module"></volunteer>
        </div>
        <!-- 代办文件 -->
        <div v-show="show == 1">
            <component :is="currentView" :v1="active" :module="module"></component>
        </div>
        
        </div>
        
        </div>
        </div>
        </template>
        
        
        <script>
            import volunteer from './DzzHuodong';
            import commonHead from '../components/commonHead'
            import tab1 from '../components/yltab.vue';
            import {getArticleList} from '@/api/getData'
            export default {
                data(){
                    return {
                        tableData: [],
                        currentRow: null,
                        //offset: 0,
                        pagesize: 15,
                        count: 0,
                        currentPage: 1,
                        currentView:'tab1',
                        module:'heartTalk',
                        active:0,
                        show:0,
                        mainActive:0,
                        classA: 'li_style',
                        classB: 'active',
                        mainTabs: [   
                            {       
                                type: '组织生活会',   
                                id: '0'  
                            },     
                            {       
                                type: '谈心谈话',    
                                id: '1'    
                            }
                        ],
                    }
                },
                props:
                {
                  v1:Number
                },
                components: {
                    commonHead,
                    tab1,
                    volunteer,
                },
                created(){
                    
                },
                methods: {
                    mainToggle(i, id)
                        {    
                            this.mainActive = i ;
                            this.show = id;
                        } ,
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

        </style>
        