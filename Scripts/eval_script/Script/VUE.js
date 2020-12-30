/* VUE Vlog app unlocks pro

Surge4.0:
[Script]
http-response https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/VUE.js

QX 1.0.0:
[rewrite_local]
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/VUE.js

Surge & QX Mitm 
hostname = api.vuevideo.net
*/

body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true").replace(/\"valid\":false/, "\"valid\":true")
$done({body});