/***********************************

> 应用名称：爱奇艺去除开屏广告
> 更新时间：2023-03-17
> 脚本功能：去除开屏广告
        
        
        
请自行在本地添加分流
host-suffix, cupid.iqiyi.com, direct


[rewrite_local]

# ～ 爱奇艺（2023-03-17）
^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? url script-response-body https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/iqiyi_open_ads.js

[mitm]

hostname=*cupid.iqiyi.com

***********************************/












let obj=JSON.parse($response.body);delete obj.adSlots,$done({body:JSON.stringify(obj)});
