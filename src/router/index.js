import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const Main  = r => require.ensure([], () => r(require('@/page/Main')), 'Main');
const Djzc  = r => require.ensure([], () => r(require('@/page/Djzc')), 'Djzc');
const OpenFile  = r => require.ensure([], () => r(require('@/page/OpenFile')), 'OpenFile');
const Gaikuang  = r => require.ensure([], () => r(require('@/page/Gaikuang')), 'Gaikuang');
const Yinling  = r => require.ensure([], () => r(require('@/page/Yinling')), 'Yinling');
const Yinling2  = r => require.ensure([], () => r(require('@/page/Yinling2')), 'Yinling2');
const DzzHuodong  = r => require.ensure([], () => r(require('@/page/DzzHuodong')), 'DzzHuodong');
const Wggl  = r => require.ensure([], () => r(require('@/page/Wggl')), 'Wggl');




const Dwgl  = r => require.ensure([], () => r(require('@/page/Dwgl')), 'Dwgl');
const Dangfei  = r => require.ensure([], () => r(require('@/page/Dangfei')), 'Dangfei');
const Jianyan  = r => require.ensure([], () => r(require('@/page/Jianyan')), 'Jianyan');
const Tongzhi  = r => require.ensure([], () => r(require('@/page/Tongzhi')), 'Tongzhi');

const Zxcy  = r => require.ensure([], () => r(require('@/page/Zxcy')), 'Zxcy');
const Liangnuo  = r => require.ensure([], () => r(require('@/page/Liangnuo')), 'Liangnuo');
const Chuangxin  = r => require.ensure([], () => r(require('@/page/Chuangxin')), 'Chuangxin');
const Fengcai  = r => require.ensure([], () => r(require('@/page/Fengcai')), 'Fengcai');
const Dangyuanbang  = r => require.ensure([], () => r(require('@/page/Dangyuanbang')), 'Dangyuanbang');
const Dangzuzhibang  = r => require.ensure([], () => r(require('@/page/Dangzuzhibang')), 'Dangzuzhibang');

const Dyyz  = r => require.ensure([], () => r(require('@/page/Dyyz')), 'Dyyz');
const Weidangke  = r => require.ensure([], () => r(require('@/page/Weidangke')), 'Weidangke');
const Sanhuiyike  = r => require.ensure([], () => r(require('@/page/Sanhuiyike')), 'Sanhuiyike');
const Liangxue  = r => require.ensure([], () => r(require('@/page/Liangxue')), 'Liangxue');
const Qingfeng  = r => require.ensure([], () => r(require('@/page/Qingfeng')), 'Qingfeng');
const Shuwu  = r => require.ensure([], () => r(require('@/page/Shuwu')), 'Shuwu');
const Wenyuan  = r => require.ensure([], () => r(require('@/page/Wenyuan')), 'Wenyuan');
const Duguan  = r => require.ensure([], () => r(require('@/page/Duguan')), 'Duguan');
const Qinlian  = r => require.ensure([], () => r(require('@/page/Qinlian')), 'Qinlian');
const Jingzhong  = r => require.ensure([], () => r(require('@/page/Jingzhong')), 'Jingzhong');
const Tashan  = r => require.ensure([], () => r(require('@/page/Tashan')), 'Tashan');

const Gxxw  = r => require.ensure([], () => r(require('@/page/Gxxw')), 'Gxxw');
const Qiuzhu  = r => require.ensure([], () => r(require('@/page/Qiuzhu')), 'Qiuzhu');
const Fanying  = r => require.ensure([], () => r(require('@/page/Fanying')), 'Fanying');
const Baibaoxiang  = r => require.ensure([], () => r(require('@/page/Baibaoxiang')), 'Baibaoxiang');
const Rencai  = r => require.ensure([], () => r(require('@/page/Rencai')), 'Rencai');

const Detail  = r => require.ensure([], () => r(require('@/components/detail')), 'Detail');

const Detail1  = r => require.ensure([], () => r(require('@/components/detail1')), 'Detail1');

//const userList = r => require.ensure([], () => r(require('@/page/djzcd/userList')), 'userList');

const Dyfz  = r => require.ensure([], () => r(require('@/page/Dyfz')), 'Dyfz');

const Map  = r => require.ensure([], () => r(require('@/page/Map')), 'Map');

const Sanhui  = r => require.ensure([], () => r(require('@/page/Sanhui')), 'Sanhui');

const Detail2  = r => require.ensure([], () => r(require('@/components/detail2')), 'Detail2');

const Fujl  = r => require.ensure([], () => r(require('@/components/fujl')), 'Fujl');

const Message  = r => require.ensure([], () => r(require('@/page/Message')), 'Message');

const Shipin  = r => require.ensure([], () => r(require('@/components/shipin')), 'Shipin');

const Echarts  = r => require.ensure([], () => r(require('@/page/Echarts')), 'Echarts');

// 2019/3/19 new
const teamBuild = r => require.ensure([],() => r(require('@/page/teamBuild')),'teamBuild');

const basicGuarantee = r => require.ensure([],() => r(require('@/page/basicGuarantee')),'basicGuarantee');

const netManage = r => require.ensure([],() => r(require('@/page/netManage')),'netManage');

const democraticAppraisal = r => require.ensure([],() => r(require('@/page/democraticAppraisal')),'democraticAppraisal');

const organizeLife = r => require.ensure([],() => r(require('@/page/organizeLife')),'organizeLife');

// 新增
const MAPP  = r => require.ensure([], () => r(require('@/page/MAPP')), 'MAPP');

const show = r => require.ensure([], () => r(require('@/page/show')), 'show');

const zhendi = r => require.ensure([], () => r(require('@/page/zhendi')), 'zhendi');

const zhuti = r => require.ensure([], () => r(require('@/page/zhuti')), 'zhuti');

// const index = r => require.ensure([], () => r(require('@/page/index')), 'index');

const routes = [
	// {
	// 	path: '/',
	// 	component: index
	// },
	{
		path: '/',
		component: login
	},
	{
		path:'/zhuti',
		component:zhuti
	},
	{
		path:'/zhendi',
		component:zhendi
	},
	{
		path:'/show',
		component:show
	},
	{
		path:'/MAPP',
		component:MAPP
	},
	{
		path:'/organizeLife',
		component:organizeLife
	},
	{
		path:'/democraticAppraisal',
		component:democraticAppraisal
	},
	{
		path:'/netManage',
		component:netManage
	},
	{
		path:'/basicGuarantee',
		component:basicGuarantee
	},
	{
		path:'/teamBuild',
		component:teamBuild
	},
    {
        path: '/Echarts',
        name: 'Echarts',
        component: Echarts
    },
	{
		path: '/Main',
		name: 'Main',
		component: Main
	},
	{
		path: '/Djzc',
		name: 'Djzc',
		component: Djzc
	},
	{
		path: '/OpenFile',
		name: 'OpenFile',
		component: OpenFile
	},
	{
		path: '/Gaikuang',
		name: 'Gaikuang',
		component: Gaikuang
	},
	{
		path: '/Yinling',
		name: 'Yinling',
		component: Yinling
	},
	{
		path: '/Yinling2',
		name: 'Yinling2',
		component: Yinling2
	},
	{
		path: '/DzzHuodong',
		name: 'DzzHuodong',
		component: DzzHuodong
	},
	{
		path: '/Wggl',
		name: 'Wggl',
		component: Wggl
	},

	{
		path: '/Dwgl',
		name: 'Dwgl',
		component: Dwgl
	},
	{
		path: '/Dangfei',
		name: 'Dangfei',
		component: Dangfei
	},
	{
		path: '/Jianyan',
		name: 'Jianyan',
		component: Jianyan
	},
	{
		path: '/Tongzhi',
		name: 'Tongzhi',
		component: Tongzhi
	},
	{
		path: '/Zxcy',
		name: 'Zxcy',
		component: Zxcy
	},
	{
		path: '/Liangnuo',
		name: 'Liangnuo',
		component: Liangnuo
	},
	{
		path: '/Chuangxin',
		name: 'Chuangxin',
		component: Chuangxin
	},
	{
		path: '/Fengcai',
		name: 'Fengcai',
		component: Fengcai
	},
	{
		path: '/Dangyuanbang',
		name: 'Dangyuanbang',
		component: Dangyuanbang
	},
	{
		path: '/Dangzuzhibang',
		name: 'Dangzuzhibang',
		component: Dangzuzhibang
	},

	{
		path: '/Dyyz',
		name: 'Dyyz',
		component: Dyyz
	},
	{
		path: '/Weidangke',
		name: 'Weidangke',
		component: Weidangke
	},
	{
		path: '/Sanhuiyike',
		name: 'Sanhuiyike',
		component: Sanhuiyike
	},
	{
		path: '/Liangxue',
		name: 'Liangxue',
		component: Liangxue
	},
	{
		path: '/Qingfeng',
		name: 'Qingfeng',
		component: Qingfeng
	},
	{
		path: '/Shuwu',
		name: 'Shuwu',
		component: Shuwu
	},
	{
		path: '/Wenyuan',
		name: 'Wenyuan',
		component: Wenyuan
	},
	{
		path: '/Duguan',
		name: 'Duguan',
		component: Duguan
	},
	{
		path: '/Qinlian',
		name: 'Qinlian',
		component: Qinlian
	},
	{
		path: '/Jingzhong',
		name: 'Jingzhong',
		component: Jingzhong
	},
	{
		path: '/Tashan',
		name: 'Tashan',
		component: Tashan
	},

	{
		path: '/Gxxw',
		name: 'Gxxw',
		component: Gxxw
	},
	{
		path: '/Qiuzhu',
		name: 'Qiuzhu',
		component: Qiuzhu
	},
	{
		path: '/Fanying',
		name: 'Fanying',
		component: Fanying
	},
	{
		path: '/Baibaoxiang',
		name: 'Baibaoxiang',
		component: Baibaoxiang
	},
	{
		path: '/Rencai',
		name: 'Rencai',
		component: Rencai
	},

	{
		path: '/Detail',
		name: 'Detail',
		component: Detail
	},

	{
		path: '/Detail1',
		name: 'Detail1',
		component: Detail1
	},

	{
		path: '/Dyfz',
		name: 'Dyfz',
		component: Dyfz
	},

	{
		path: '/Map',
		name: 'Map',
		component: Map
	},

	{
		path: '/Sanhui',
		name: 'Sanhui',
		component: Sanhui
	},

	{
		path: '/Detail2',
		name: 'Detail2',
		component: Detail2
	},


    {
        path: '/Fujl',
        name: 'Fujl',
        component: Fujl
    },
    {
  		path: '/Message',
  		name: 'Message',
  		component: Message
  	},

    {
        path: '/Shipin',
        name: 'Shipin',
        component: Shipin
    },


]

/*
export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
*/


let vueRouter = new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
/*
vueRouter.beforeEach(({meta, path}, from, next) =>
{　
	　
	  alert('11');
	　　const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象
	alert('auth='+auth);
	　　var uid = store.state.adminInfo.realname;   // true用户已登录， false用户未登录　
	alert(uid);　　
	　　if (auth  &&  uid == ''  &&  path !== '/') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
	　　　　return next({ path: '/' })   //  跳转到login页面
	　　}


	　　next()   // 进行下一个钩子函数

})
*/

export default vueRouter;



