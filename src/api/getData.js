import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('/api/v1/auth/login', data, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('/api/v1/auth/logout');

/**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/api/v1/user/userInfo');

/**
 * 获取用户区域图片
 */
export const getAdminImg = data => fetch('/api/v1/party/getImgs',data);


/**
 * 获取消息列表
 */

export const getMessageList = data => fetch('/api/v1/user/messageList', data);

/**
 * 设置已读
 */

export const setRead = data => fetch('/api/v1/user/setRead', data);




/**
 * 获取文章列表
 */

export const getArticleList = data => fetch('/api/v1/article/articleList', data);

/**
 * 获取文章详情
 */

export const getArticleInfo = data => fetch('/api/v1/article/index', data);


/**
 * 获取活动列表
 */

export const getActivityList = data => fetch('/api/v1/activity/activityList', data);

/**
 * 获取活动详情
 */

export const getActivityInfo = data => fetch('/api/v1/activity/index', data);

/**
 * 获取建言献策列表
 */

export const getCaseList = data => fetch('/api/v1/cases/caseList', data);

/**
 * 点赞
 */

export const postZan = data => fetch('/api/v1/cases/likes', data);


/**
 * 获取党费缴纳列表
 */

export const getPayList = data => fetch('/api/v1/pay/payList', data);


/**
 * 获取党员列表
 */

export const partyMemberList = data => fetch('/api/v1/party/partyMemberList', data);


/**
 * 获取党员风采列表
 */

export const partyMemberAdv = data => fetch('/api/v1/party/partyMemberAdv', data);

/**
 * 获取党员发展列表
 */

export const partyMemberLogList = data => fetch('/api/v1/party/partyMemberLogList', data);


/**
 * 提交党员风采赞
 */

export const zanMemberAdv = data => fetch('/api/v1/party/zanMemberAdv', data);

/**
 * 获取群众求助列表
 */

export const getHelpList = data => fetch('/api/v1/help/helpList', data);


/**
 * 获取享列表
 */

export const getshareList = data => fetch('/api/v1/share/getshareList', data);



/**
 * 获取物品共享列表
 */

export const getThingsList = data => fetch('/api/v1/share/thingsList', data);

/**
 * 获取人才共享列表
 */

export const getPersonList = data => fetch('/api/v1/share/personList', data);


/**
 * 获取会议列表
 */

export const getMeetingList = data => fetch('/api/v1/meeting/meetingList', data);

/**
 * 获取会议内容
 */

export const getMeetingInfo = data => fetch('/api/v1/meeting/index', data);

/**
 * 获取服务记录
 */

export const getFuwuInfo = data => fetch('/api/v1/share/getsharelog', data);

/**
 * 获取服务记录
 */

export const getShipin = data => fetch('/api/v1/article/index', data);

/**
 * 获取党员详情
 */

export const partyMemberInfo = data => fetch('/api/v1/party/partyMember', data);


/**
 * 获取学习进度
 * */

export const allLearnSpeed = data => fetch('/api/v1/passport/AllLearnSpeed', data);

/**
 * 获取党员积分榜
 * */

export const getIntegralSort = data => fetch('/api/v1/wechat/integralSort', data);

/**
 * 获取党员数据
 * */

export const getTotalData = data => fetch('/api/v1/wechat/integralSort', data);