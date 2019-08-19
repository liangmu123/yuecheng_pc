/**
* Cookie plugin
*
* Copyright (c) 2006 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

/**
* Create a cookie with the given name and value and other optional parameters.
*
* @example $.cookie('the_cookie', 'the_value');
* @desc Set the value of a cookie.
* @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'http://218.77.42.151:8913/js/jquery.com', secure: true });
* @desc Create a cookie with all available options.
* @example $.cookie('the_cookie', 'the_value');
* @desc Create a session cookie.
* @example $.cookie('the_cookie', null);
* @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
*       used when the cookie was set.
*
* @param String name The name of the cookie.
* @param String value The value of the cookie.
* @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
* @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
*                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
*                             If set to null or omitted, the cookie will be a session cookie and will not be retained
*                             when the the browser exits.
* @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
* @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
* @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
*                        require a secure protocol (like HTTPS).
* @type undefined
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/

/**
* Get the value of a cookie with the given name.
*
* @example $.cookie('the_cookie');
* @desc Get the value of a cookie.
*
* @param String name The name of the cookie.
* @return The value of the cookie.
* @type String
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/


jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/*
$(function () {
    var User = $.cookie("RiverOwnerSessionCookie")
    if (User == "" || User == null) {
        var url = window.location.href;
        url = url.substring(":");
        if (url.indexOf("http://218.77.42.151:8913/js/login.html") < 0) {
            if (url.indexOf("http://218.77.42.151:8913/js/index.html")>=0)
            {
                window.location ='http://218.77.42.151:8913/js/login.html';
            } else {
                var parentPage = window.top;
                //parentPage.window.location = "http:///" + window.location.host + '/login.html';
                parentPage.window.location = "http:///" + window.location.host + '/ceshi/changhe/login.html';
            }
         }
    }
});
*/


//alert("ps" + ps);
// $.cookie("RiverOwnerSessionCookie", ps, { expires: 30 });
//var User = $.cookie("RiverOwnerSessionCookie");//获取cookie中的user
//var us = eval('(' + User + ')');

function getSys_User()   //返回当前登陆用户对象
{
	//alert('22');
    var User = $.cookie("RiverOwnerSessionCookie");//获取cookie中的user
    var us = eval('(' + User + ')');
    return us;
}

function delCookieSys_User()   //返回当前登陆用户对象
{
    $.cookie('RiverOwnerSessionCookie',null); // 删除 cookie
}

function refreshUserCookie() {
    var refusercookie = getUser();
    Person(refusercookie.Sys_UserId, refusercookie.UserName, refusercookie.Token, refusercookie.IsSuccess, refusercookie.ElapseTime, refusercookie.Message, refreshUserCookie.UserTel, refreshUserCookie.AreaCode, refreshUserCookie.Sys_RoleId, refreshUserCookie.Sys_DepartmentId, refusercookie.AD_Level, refusercookie.AD_Name, refusercookie.DepartmentName, refusercookie.UserDistrictLevel, refusercookie.PassWord, refusercookie.UserType, refusercookie.ForceModificationPWD)
}

function Person(Sys_UserId, UserName, Token, IsSuccess, ElapseTime, Message, UserTel, AreaCode, Sys_RoleId, Sys_DepartmentId, AD_Level, AD_Name, DepartmentName, UserDistrictLevel,PassWord,UserType,ForceModificationPWD) {
    var s = new Object();
    s.Sys_UserId = Sys_UserId;
    s.UserName = UserName;
    s.Token = Token;
    s.IsSuccess = IsSuccess;
    s.ElapseTime = ElapseTime;
    s.Message = Message;
    s.UserTel = UserTel;
    s.AreaCode = AreaCode;
    s.Sys_RoleId = Sys_RoleId;
    s.Sys_DepartmentId = Sys_DepartmentId;
    s.AD_Level = AD_Level;
    s.AD_Name = AD_Name;
    s.DepartmentName = DepartmentName;
    s.UserDistrictLevel = UserDistrictLevel;
    s.PassWord = PassWord;
    s.UserType = UserType;
    s.ForceModificationPWD = ForceModificationPWD;
    var data = JSON.stringify(s);
    $.cookie("RiverOwnerSessionCookie", data, { expires: 30 });
}
