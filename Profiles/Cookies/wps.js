require("dotenv").config();

let url = "http://zt.wps.cn/2018/clock_in/api/get_question?member=wps";
invite_sid = [
  "V02S2UBSfNlvEprMOn70qP3jHPDqiZU00a7ef4a800341c7c3b",
  "V02StVuaNcoKrZ3BuvJQ1FcFS_xnG2k00af250d4002664c02f",
  "V02SWIvKWYijG6Rggo4m0xvDKj1m7ew00a8e26d3002508b828",
  "V02Sr3nJ9IicoHWfeyQLiXgvrRpje6E00a240b890023270f97",
  "V02SBsNOf4sJZNFo4jOHdgHg7-2Tn1s00a338776000b669579",
  "V02ScVbtm2pQD49ArcgGLv360iqQFLs014c8062e000b6c37b6",
  "V02S2oI49T-Jp0_zJKZ5U38dIUSIl8Q00aa679530026780e96",
  "V02ShotJqqiWyubCX0VWTlcbgcHqtSQ00a45564e002678124c",
  "V02SFiqdXRGnH5oAV2FmDDulZyGDL3M00a61660c0026781be1",
  "V02S7tldy5ltYcikCzJ8PJQDSy_ElEs00a327c3c0026782526",
  "V02SPoOluAnWda0dTBYTXpdetS97tyI00a16135e002684bb5c",
  "V02Sb8gxW2inr6IDYrdHK_ywJnayd6s00ab7472b0026849b17",
  "V02SwV15KQ_8n6brU98_2kLnnFUDUOw00adf3fda0026934a7f",
  "V02SC1mOHS0RiUBxeoA8NTliH2h2NGc00a803c35002693584d",
  "V02StVuaNcoKrZ3BuvJQ1FcFS_xnG2k00af250d4002664c02f",
  "V02SWIvKWYijG6Rggo4m0xvDKj1m7ew00a8e26d3002508b828",
  "V02Sr3nJ9IicoHWfeyQLiXgvrRpje6E00a240b890023270f97",
  "V02SBsNOf4sJZNFo4jOHdgHg7-2Tn1s00a338776000b669579",
  "V02SfEpW1yy4wUUh_eEnEHpiJJuoDnE00ae12710000179aa7f",
  "V02S2oI49T-Jp0_zJKZ5U38dIUSIl8Q00aa679530026780e96",
  "V02ShotJqqiWyubCX0VWTlcbgcHqtSQ00a45564e002678124c",
  "V02SFiqdXRGnH5oAV2FmDDulZyGDL3M00a61660c0026781be1",
  "V02S7tldy5ltYcikCzJ8PJQDSy_ElEs00a327c3c0026782526",
  "V02SPoOluAnWda0dTBYTXpdetS97tyI00a16135e002684bb5c",
  "V02Sb8gxW2inr6IDYrdHK_ywJnayd6s00ab7472b0026849b17",
  "V02SwV15KQ_8n6brU98_2kLnnFUDUOw00adf3fda0026934a7f",
  "V02SC1mOHS0RiUBxeoA8NTliH2h2NGc00a803c35002693584d",
];
let i = 0;
wpsinviteid = config.inviteid;
const answer = [
  "WPS会员全文检索",
  "100G",
  "WPS会员数据恢复",
  "WPS会员PDF转doc",
  "WPS会员PDF转图片",
  "WPS图片转PDF插件",
  "金山PDF转WORD",
  "WPS会员拍照转文字",
  "使用WPS会员修复",
  "WPS全文检索功能",
  "有，且无限次",
  "文档修复",
];
msg = "";

async function task() {
  await invite();
  console.log(msg);
  await server(msg);
}

function invite() {
  return new Promise(async (resolve) => {
    try {
      invitedata = `invite_userid=${wpsinviteid}`;
      inviteurl = "http://zt.wps.cn/2018/clock_in/api/invite";
      for (i; i < invite_sid.length; i++) {
        ires = await axios.post(inviteurl, invitedata, {
          headers: { sid: invite_sid[i] },
        });
        if (ires.status == 200) {
          console.log(`邀请第${i}个好友成功`);
        } else {
          console.log("邀请失败");
        }
      }
      msg += `邀请任务：${i}/10\n`;
    } catch (err) {
      msg += "邀请出错";
      console.log(err);
    }
    resolve(msg);
  });
}

module.exports = task;
