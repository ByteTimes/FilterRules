
var body = $response.body;
var dreamstart = JSON.parse(body);

if (dreamstart.Variables.data.threaddetail) 
{
dreamstart.Variables.data.threaddetail.tagadv = "";
	dreamstart.Variables.data.threaddetail.threadapp_ad_video = [];
	dreamstart.Variables.data.threaddetail.pingyouadv = "";
	dreamstart.Variables.data.threaddetail.middleadv = "";
	dreamstart.Variables.data.threaddetail.bottomadv = "";
	dreamstart.Variables.data.threaddetail.appdetailadv = [];
}
//delete dreamstart.Variables.data.threaddetail.threadapp_ad_video;
//delete dreamstart.Variables.data.threaddetail.tagadv;
//delete dreamstart.Variables.data.threaddetail.middleadv;
//delete dreamstart.Variables.data.threaddetail.pingyouadv;
//delete dreamstart.Variables.data.threaddetail.bottomadv;
//delete dreamstart.Variables.data.threaddetail.appdetailadv;
	
$done({body: JSON.stringify(dreamstart)});