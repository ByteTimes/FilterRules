/***********************************

> 应用名称：Stay去除仓库广告
> 脚本作者：Cuttlefish
> 更新时间：2022-10-17
> 脚本功能：去除仓库广告
            
[rewrite_local]

# ～ Stay（2022-10-17）
^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/stay.js

[mitm]

hostname=api.shenyin.name

***********************************/

let dreamstart = JSON.parse($response.body);
if (dreamstart.biz) {
    dreamstart.biz = Object.values(dreamstart.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(dreamstart) });
