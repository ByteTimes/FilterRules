/**********************************************

> 应用名称：555去广告脚本
> 更新时间：2024-10-30
> 特别提醒：如需转载请注明出处，谢谢合作！
> 脚本说明：去除首页轮播图广告、首页信息流广告、我的页面推广、缩短开屏广告倒计时

请在QuantumultX配置文件的[general]下添加 udp_drop_list=443

[rewrite_local]

^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/movie\/index_recommend url script-response-body https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/555Ad.js
^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/advert url reject-200
^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/notice url reject-200


[mitm]

hostname = *.qyfxgd.cn, *.weilai555.com, *.ecoliving168.com

**********************************************/



















let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});
