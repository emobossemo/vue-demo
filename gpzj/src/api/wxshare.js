// import wx from '../lib/jweixin-1.0.0.js';
var wx = require('weixin-js-sdk');
// var wx = require('../lib/jweixin-1.0.0.js');
import axios from 'axios';
import { filePath } from './config';

export function shareConfig(configMsg = {}, path = "") {
	var currentHost = window.location.host;
	var wechatToken = "d7f1a00678928a59438b40c32d33025d164c773b";
	var getUrl = `${filePath}weichat/weichat/share/${wechatToken}?url=${encodeURIComponent(window.location.href)}`;
	if (currentHost.indexOf("wxtest")!==-1) {
		var wechatToken = "da39a3ee5e6b4b0d3255bfef95601890afd80710";
		var getUrl = `${filePath}weichat/weichat/share/da39a3ee5e6b4b0d3255bfef95601890afd80710?url=${encodeURIComponent(window.location.href)}`;
    }

	axios.get(getUrl).then(response => {
		var opts = {
	    	link: `${filePath}hxwwz/rest/json/gaoshou/info/param/page/index?jump_mode=1&jump=${path}#${path}`,
	        ...configMsg,
	        success: function(data) {
	            
	        }
	    };
	    var configData = eval('(' + response.data + ')');
	    
	    var wxconfig = {
	    	debug: false,
	    	...configData.data,
	    	jsApiList:[
	    		"onMenuShareTimeline",
	    		"onMenuShareAppMessage",
	    		"onMenuShareQQ",
	    		"onMenuShareWeibo"
	    	]
	    }
		wx.config(wxconfig);
		wx.ready(function() {

		    // 分享到朋友圈
		    wx.onMenuShareTimeline(opts);
		    // 分享给朋友
		    wx.onMenuShareAppMessage(opts);
		    wx.onMenuShareQQ(opts);
		    wx.onMenuShareWeibo(opts);
		    //wx.showAllNonBaseMenuItem();
		});
		wx.error(function(res) {
			console.log(res)
		    // alert('error:'+JSON.string(res));
		});

	});
}