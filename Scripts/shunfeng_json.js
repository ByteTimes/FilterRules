/*
version     v0.0.1
updatetime  2022-11-17
function    顺丰


[rewrite_local]
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow url script-response-body https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/shunfeng_json.js

[mitm]
hostname = ccsp-egmas.sf-express.com

*/

if ($request.url.indexOf("app/ad/queryInfoFlow") != -1) {
    var dreamstart = JSON.parse($response.body);
    dreamstart.obj = Object.values(dreamstart.obj).filter((item) => item.adverId==2833);
    $done({
        body: JSON.stringify(dreamstart),
    });
}
