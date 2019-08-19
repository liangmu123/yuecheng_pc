<template>
    <div>
        <common-head></common-head>
        <div class="container">
            <div style="padding: 30px">
                <div class="row jl" v-for="content in contents" >
                    <div class="col-sm-2">
                        <img :src="content.head_img" class="tou"/>
                    </div>
                    <div class="col-sm-4 wenzi">
                        <span>{{content.username}}</span>
                        <p>{{content.reply_time}}</p>
                        <el-rate v-model="content.score" disabled></el-rate>
                    </div>

                    <div class="row pj">
                        <span class="" style="font-size: 24px">评价：</span>
                        <span class="" style="font-size: 20px">{{content.reply_content}}</span>
                    </div>

                </div>
                <div v-if="total == 0">
                    <h3 style="font-weight: bolder">暂无服务记录</h3>
                </div>

            </div>
        </div>
    </div>


</template>

<script>

    import commonHead from '../components/commonHead'
    import {getFuwuInfo} from '@/api/getData'


    export default {
        data(){
            return {
                sid: this.$route.query.sid,
                contents: [],
                value1: null,
                total:''
            }
        },
        created(){
            this.getFuwuInfo();
        },
        components: {
            commonHead
        },
        methods: {
            async getFuwuInfo()
            {
                if(this.sid == undefined)
                {
                    return;
                }

                const Activity1 = await getFuwuInfo({id: this.sid});

                this.contents  = Activity1.data.list;

                this.total = Activity1.data.total;

            }
        },
    }
</script>

<style>
	@import '../style/main.css';
	@import '../style/mainheader.css';
	@import '../style/dangjian_window.css';
	@import '../style/style.css';
	@import '../style/bootstrap-3.3.7/css/bootstrap.min.css';

    .jl{
        height: 200px;
        background: white;
        margin-bottom: 20px;
        border-radius: 10px;
    }

    .tou{
        width: 80px;
        height: 80px;
        margin-top: 25px;
        border-radius: 50%;
    }

    .wenzi{
        text-align: left;
        margin-top: 25px;
    }

    .wenzi span{
        font-size: 24px;
    }

    .wenzi p{
        font-size: 20px;
        color: gray;
    }

    .pj{
        clear: both;
        font-size: 24px;
        text-align: left;
        padding-left: 60px;
        padding-right: 30px;
        position: relative;
        top:20px;
    }
</style>
