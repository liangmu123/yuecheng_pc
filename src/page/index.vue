<template>
    <div class="index">
	    <common-head tp="1" home="home"></common-head>
        <div class="col-sm-12">
            <ul>
                <li v-for="(item,index) in data" :key="index" @click="next(item.id)">
                    <span v-if="item.cname" :title="item.title">{{item.cname}}</span>
                    <span v-else :title="item.title">{{item.title}}</span>
                </li>
            </ul>
            <div class="next">
                    <span @click="continue1" v-show="isShow1"></span>
                <span @click="continue2" v-show="isShow2"></span>
            </div>
        </div>
    </div>
</template>
<script>
    import commonHead from '../components/commonHead'
    import {url} from '@/api/api'
    import {get_areaList} from '@/api/api'
    import {get_childArea} from '@/api/api'
    import { mapState} from 'vuex'
    export default {
        name:'index',
        data(){
            return {
                currentPage:1,
                totalPage:1,
                data:[],
                isShow2:true,
                isShow1:false,
            }
        },
        components: {    		
    		commonHead,
        },
        created(){
            this.getArea()
            
        },
        methods:{
            getArea(){
                var that = this;
                var param = {};
                param.pagesize = 18;
                param.page = that.currentPage;
                that.$axios.post(get_areaList,param)
                .then(res=>{
                    //console.table(res)
                    that.$store.state.adminImg = [];
                    that.data = res.data.data.items;
                    that.totalPage = res.data.data.totalpage;
                    if(that.currentPage==1){
                        that.isShow1 = false;
                        that.isShow2 = true;
                    }else if(that.currentPage == that.totalPage && that.currentPage==1){
                        that.isShow2 = false;
                    }else if(that.currentPage == that.totalPage){
                        that.isShow2 = false;
                        that.isShow1 = true;
                    }else{
                        that.isShow1 = true;
                        that.isShow2 = true;
                    }
                })
            },
            next(id){
                this.$router.replace({path: '/login?id=' + id})
            },
            continue1(){
                this.currentPage--;
                this.getArea();
            },
            continue2(){
                this.currentPage++;
                this.getArea();
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
    *{
        margin:0;
        padding:0;
    }
    .index{
        height:100%;
    }
    .col-sm-12{
        background-image:url('../assets/new/indexBg.png');
        background-repeat: no-repeat;
        background-size:100% 100%;
        height:calc(100% - 120px);
    }
    .col-sm-12 ul{
        display:flex;
        flex-wrap:wrap;
        width:1320px;
        margin:0 auto;
        padding-top:100px;
        height:400px;
    }
    .col-sm-12 ul li{
        width:200px;
        height:60px;
        line-height:60px;
        margin-right:20px;
        margin-bottom:40px;
        font-size:30px;
        font-weight:bold;
        background-image:url('../assets/new/smallBg.png');
        background-repeat: no-repeat;
        background-size:100% 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:#8f602e;
    }
    .col-sm-12 ul li span{
        font-size:30px;
        font-weight:bold;
    }
    .col-sm-12 ul li:hover{
        background-image:url('../assets/new/active.png');
        background-repeat: no-repeat;
        background-size:100% 100%;
        color:#FFF;
        cursor: pointer;
    }
    .next{
        width:1320px;
        margin:0 auto;
        margin-top:30px;
        padding:0 20px;
    }
    .next span:last-child{
        width:120px;
        height:40px;
        background-image:url('../assets/new/button.png');
        background-repeat: no-repeat;
        background-size:100% 100%;
        cursor: pointer;
        float:right;
    }
    .next span:first-child{
        width:120px;
        height:40px;
        background-image:url('../assets/new/preview.png');
        background-repeat: no-repeat;
        background-size:100% 100%;
        cursor: pointer;
        float:left;
    }
</style>