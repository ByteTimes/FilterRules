/***********************************************
> 应用名称：菜鸟净化[原菜鸟裹裹]
> 更新时间：2025-04-07
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/	  





const version = 'V1.0.21';


var dreamstart=JSON.parse($response.body);if(-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn"))dreamstart.data?.result?.dataList?.length>0&&(dreamstart.data.result.dataList=dreamstart.data.result.dataList.filter(a=>!("big_banner_area_v870"==a.type||"todo_list_v860"==a.type)));else if(-1!=$request.url.indexOf("mtop.cainiao.app.e2e.engine")){let a=["banner","activity","asset","vip","wallet"];for(let d of a)dreamstart.data?.data?.[d]&&delete dreamstart.data.data[d]}else if(-1!=$request.url.indexOf("mtop.cainiao.nbpresentation.homepage.merge.get.cn"))for(let i=0;i<4;i++){let t=`mtop.cainiao.nbpresentation.protocol.homepage.get.cn@${i}`;dreamstart.data?.[t]?.data?.result?.dataList?.length>0&&(dreamstart.data[t].data.result.dataList=dreamstart.data[t].data.result.dataList.filter(a=>!("big_banner_area_v870"==a.type||"todo_list_v860"==a.type)))}else -1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.mshow")?(dreamstart.data["1308"]&&delete dreamstart.data["1308"],dreamstart.data["1275"]&&delete dreamstart.data["1275"],dreamstart.data["205"]&&delete dreamstart.data["205"]):-1!=$request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")?dreamstart.data?.result&&(dreamstart.data.result=[{}]):-1!=$request.url.indexOf("mtop.cainiao.adkeyword")&&dreamstart.data?.result?.adHotKeywords&&(dreamstart.data.result.adHotKeywords=[]);var body=JSON.stringify(dreamstart);$done({body});
