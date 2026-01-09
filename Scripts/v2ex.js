/***********************************

> 网站名称：墨V2EX网页去广告
> 脚本功能：网站净化|去广告
> 更新时间：2024-01-05
		  
    
[rewrite_local]

^https?:\/\/.*v2ex\.com\/($|t\/\d+) url script-response-body https://github.com/ByteTimes/FilterRules/raw/Rules/Scripts/v2ex.js

[mitm] 

hostname = *.v2ex.com

***********************************/



var body = $response.body.replace(
  /<head>/,
  `<head>
    <style>
      .sidebar_units,
      .sidebar_compliance,
      div[class^="wwads-"]{
        display: none !important;
      }
    </style>`
);
$done({ body });
