import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import vueztree from 'vue-ztree-2.0/dist/vue-ztree-2.0.umd.min.js'
import 'vue-ztree-2.0/dist/vue-ztree-2.0.css'
import { baseUrl } from './config/env'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
	// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
	ak: 'ZGtDjyQhqj4EEQyEGKAlyfbvnUFFEbhY'
})


Vue.use(vueztree)

import axios from 'axios'

Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://localhost:8002/api/v1';
//console.log(baseUrl)
axios.defaults.baseURL = baseUrl;

axios.defaults.withCredentials = true ;

Vue.config.productionTip = false;

Vue.use(ElementUI);

//respone拦截器
axios.interceptors.response.use(
    response => {
        if(response.data.code == 10002){
            window.location.href = 'http://ycweb.cst-info.cn'
        }
        return response
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response){   
        }
        return Promise.reject(error.response);
    }
)

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})



