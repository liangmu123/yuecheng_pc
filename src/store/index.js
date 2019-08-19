import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'
import {getAdminImg} from '@/api/getData'

Vue.use(Vuex)

const state = {
	adminInfo: {
		//avatar: 'default.jpg'
		'realname': '',
        'headimg':   '',
    	'uid':   	'',
    	'mobile':    '',
    	'is_leader': '',
    	'scores':'',
    	'mess':''
	},
	adminImg:[],
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
		//alert('22');
		//alert('state.adminInfo.realname='+state.adminInfo.realname);
	},
	saveAdminImg(state, adminImg){
		//console.log(adminImg,666)
		state.adminImg = adminImg
	}
}

const actions = {
	async getAdminData({commit})
	{
		try
		{
			const res = await getAdminInfo()
			if (res.code == 0) 
			{	
				//alert('11');
				commit('saveAdminInfo', res.data);
			}
			else
			{
				//alert('33');
				//throw new Error(res)
				//alert(res.code);
				//window.location.href = "http://localhost:8002";
			}
		}
		catch(err)
		{
			console.log('您尚未登陆或者session失效')
			//window.location.href = "http://localhost:8002";
		}
	},
	async getAdminImg(context,args)
	{
		try
		{   
			if(args){
				const res = await getAdminImg({area_id:args})
				if (res.code == 0) 
			{	
				//console.log("值222")
				//alert('11');
				var res = res.data.photos
				console.log(res,"store")
				context.commit('saveAdminImg', res);
			}
			else
			{
				//alert('33');
				//throw new Error(res)
				//alert(res.code);
				//window.location.href = "http://localhost:8002";
			}
			}else{
				const res = await getAdminImg()
				if (res.code == 0) 
			{	
				//console.log("值222")
				//alert('11');
				var res = res.data.photos
				context.commit('saveAdminImg', res);
			}
			else
			{
				//alert('33');
				//throw new Error(res)
				//alert(res.code);
				//window.location.href = "http://localhost:8002";
			}
			}
			
		}
		catch(err)
		{
			//console.log('您尚未登陆或者session失效')
			//window.location.href = "http://localhost:8002";
		}
	},
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})