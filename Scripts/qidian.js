/***********************************************
> 应用名称：奇点阅读去广告脚本
> 更新时间：2024-09-14
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/


const version = 'V1.0.0';


var obj=JSON.parse($response.body);const propertiesToDelete=["ads2","adSource2","third"];for(const prop of propertiesToDelete)obj.data?.[prop]&&(obj.data[prop]={});$done({body:JSON.stringify(obj)});
