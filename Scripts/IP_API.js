// geo_location_checker=http://ip-api.com/json/, https://raw.githubusercontent.com/SavileLee/FilterRules/Rules/Scripts/IP_API.js

if ($response.statusCode != 200) {
    $done(Null);
}

var default_regionName = "Oops!!!";
var default_city = "Oh No!!!";
var default_org = "Cross Utility Ltd";

/**
 * @return {string}
 */
function RegionName_Check(para) {
    if (para) {
        return para;
    } else {
        return default_regionName;
    }
}

/**
 * @return {string}
 */
function City_Check(para) {
    if (para) {
        return para;
    } else {
        return default_city;
    }
}

/**
 * @return {string}
 */
function Org_Check(para) {
    if (para) {
        return para;
    } else {
        return default_org;
    }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = default_regionName + default_org;

var index = obj['org'].indexOf('(');
if (index != -1) {
    subtitle = RegionName_Check(obj['regionName']) + ' ➠ ' + Org_Check(obj['org'].substring(0, index).trim());
} else {
    subtitle = RegionName_Check(obj['regionName']) + ' ➠ ' + Org_Check(obj['org']);
}

var ip = obj['query'];
//var description = obj['isp'] + '\n' + RegionName_Check(obj['regionName']) + '\n' + obj['query'] + '\n' + obj['timezone'];
var description = obj['country'] + '\n' + RegionName_Check(obj['regionName']) + '\n' + City_Check(obj['city']) + '\n' + obj['query'] + '\n' + obj['isp'] + '\n' + Org_Check(obj['org']);

$done({title, subtitle, ip, description});
