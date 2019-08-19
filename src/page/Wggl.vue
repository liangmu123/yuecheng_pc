<template>
 
<div>

<common-head></common-head>



</div>

</template>


<script>

import commonHead from '../components/commonHead'


export default {
	computed: {
		defaultActive: function(){
			return this.$route.path.replace('/', '');
		}
	},
	components: {		
		commonHead,
	},
	methods: {
		
	}
}
</script>

<style scoped>
.alert{
	filter:alpha(opacity=100);/* IE */
	-moz-opacity:1.0;/* Moz + FF */
	opacity: 1.0;
	width:145px;font-size:18px;font-weight:bold; position:absolute;z-index:99; text-align:center;
}	
	
	
</style>
