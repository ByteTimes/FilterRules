/***********************************************
> 应用名称：ithome去除信息流广告
> 更新时间：2024-10-12
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/

const version = 'V1.0.1';

var obj=JSON.parse($response.body);obj.data.list=Object.values(obj.data.list).filter(a=>2!=a.feedContent.flag),$done({body:JSON.stringify(obj)});
