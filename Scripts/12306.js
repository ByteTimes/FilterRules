/***********************************************

> 应用名称：12306去广告脚本
> 更新时间：2024-08-24
> 特别提醒：如需转载请注明出处，谢谢合作！
> 脚本说明：目前脚本是最简洁也是最完美的了（低调使用），Enjoy！
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/12306.js

[mitm]

hostname = ad.12306.cn

***********************************************/













const version = 'V1.0.23';

var obj=JSON.parse($request.body),dreamstart={};"0007"==obj.placementNo?(dreamstart.materialsList=[{billMaterialsId:"6491",filePath:"dreamstart",creativeType:1}],dreamstart.advertParam={skipTime:1},dreamstart.code="00"):dreamstart="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},"undefined"!=typeof $task?$done({body:JSON.stringify(dreamstart)}):$done({response:{body:JSON.stringify(dreamstart)}});
