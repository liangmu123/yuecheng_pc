<template>
    <div>
        <common-head></common-head>
        <div class="container">
            <hls :sc="shipinData.video_url" ></hls>
        </div>
    </div>


</template>

<script>

    import commonHead from '../components/commonHead'
    import hls from '../components/hls'
    import {getShipin} from '@/api/getData'


    export default {
        data(){
            return {
                id: this.$route.query.id,
                shipinData: ''
            }
        },
        created(){
            this.getShipin();
        },
        components: {
            commonHead,
            hls
        },
        methods: {
            async getShipin()
            {
                const Articles1 = await getShipin({id:this.id});

                const Articles  = Articles1.data;

                this.shipinData = Articles;
            }
        },
    }
</script>

<style>

</style>
