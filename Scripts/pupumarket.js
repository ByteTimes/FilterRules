/**********************************************
> 应用名称：朴朴超市去广告脚本
> 更新时间：2023-11-19
> 脚本说明：去除开屏广告、搜索轮播填充
**********************************************/


const version = 'V1.0.0';

var obj=JSON.parse($response.body);obj.data&&(obj.data=Object.values(obj.data).filter(o=>!(320==o.position_type||710==o.position_type||50==o.position_type))),$done({body:JSON.stringify(obj)});
