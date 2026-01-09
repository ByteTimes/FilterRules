/***********************************

> 应用名称：知乎开屏
> 更新时间：2023-02-04
> 脚本功能：去开屏广告

		   
		   
请搭配@blackmatrix7的知乎净化助手使用
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zheye/zheye.snippet


[rewrite_local]

# ～ 知乎开屏（2023-02-04）
^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2 url script-response-body https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/zhihu_openads.js

[mitm]

hostname=api.zhihu.com

***********************************/





















var body=$response.body.replace(/img_play_duration\\":\d+/g,'img_play_duration":0').replace(/launch_timeout\\":\d+/g,'launch_timeout":0');$done({body});
