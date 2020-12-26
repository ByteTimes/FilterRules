/* YouTube ADS Remove

# 如果您是 YouTube Premium，请不要开启此模块。
Surge4.0:
[Script]
youtube_ad = type=http-request,pattern=^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A),script-path=https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/YouTube.js

QX 1.0.0:
[rewrite_local]
^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A) url script-request-header https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/YouTube.js

Surge & QX Mitm
hostname = %APPEND% *.googlevideo.com
*/

if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 302, headers: { Location: url } } });
} else {
  $done({})
}
