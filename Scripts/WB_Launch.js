/* Weibo ADS Remove

Surge4.0:
[Script]
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) requires-body=1,script-path=https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/WB_Launch.js
http-response ^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/(photos/pic_recommend_status|live/media_homelist)|video/tiny_stream_video_list|photo/info) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/WB_ADS.js

QX 1.0.0:
[rewrite_local]
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/WB_Launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/WB_ADS.js

Surge & QX Mitm
hostname = %APPEND% api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
*/

const path1 = "/interface/sdk/sdkad.php";
const path2 = "/wbapplua/wbpullad.lua";

const url = $request.url;
var body = $response.body;

if (url.indexOf(path1) != -1) {
    let re = /\{.*\}/;
    body = body.match(re);
    var obj = JSON.parse(body);
    if (obj.background_delay_display_time) obj.background_delay_display_time = 60*60*24*365;
    if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
    if (obj.ads) obj.ads = [];
    body = JSON.stringify(obj) + 'OK';
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(body);
    if (obj.cached_ad && obj.cached_ad.ads) obj.cached_ad.ads = [];
    body = JSON.stringify(obj);
}

$done({body});
