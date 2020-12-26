/* 人人视频，您的海外追剧神器

Surge4.0:
[Rule]
AND,((USER-AGENT,PUClient*), (NOT,((DOMAIN-SUFFIX,rr.tv)))),REJECT
URL-REGEX,^https?:\/\/api\.rr\.tv\/(?:ad\/getAll$|storage/business/rootName/app/homePage),REJECT
[Script]
rrsp_video = type=http-response,requires-body=true,pattern=^https?:\/\/api\.rr\.tv\/watch\/v\d\/get_movie_info,script-path=https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/RRSP.js
rrsp_banner = type=http-response,requires-body=true,pattern=^https?:\/\/api\.rr\.tv\/v\dplus\/index\/channel$,script-path=https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/RRSP.js

QX 1.0.0:
[rewrite_local]
^https?:\/\/api\.rr\.tv\/(?:ad\/getAll$|storage/business/rootName/app/homePage) url reject-200
^https?:\/\/api\.rr\.tv\/watch\/v\d\/get_movie_info url script-response-header https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/RRSP.js
^https?:\/\/api\.rr\.tv\/v\dplus\/index\/channel$ url script-response-header https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/RRSP.js
Surge & QX Mitm 
hostname = %APPEND% api.rr.tv
*/

const path1 = "channel";
const path2 = "get_movie_info";

if ($request.method != "OPTIONS") {
  if ($request.url.indexOf(path1) != -1) {
    banner();
  } else if ($request.url.indexOf(path2) != -1) {
    movie();
  }
} else {
  $done({});
}

function banner() {
  let obj = JSON.parse($response.body);
  if (obj.data.sections) {
    for (var i = obj.data.sections.length - 1; i >= 0; i--) {
      if (obj.data.sections[i].sectionType === "AD") {
        obj.data.sections.splice(i, 1);
      }
    }
  }
  $done({ body: JSON.stringify(obj) });
}

function movie() {
  let obj = JSON.parse($response.body);
  obj.data.m3u8.openingLength = obj.data.m3u8.startingLength;
  $done({ body: JSON.stringify(obj) });
}