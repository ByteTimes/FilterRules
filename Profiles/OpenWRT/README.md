## OpenWrt Hosts配置方法

1.输入 cp /etc/hosts /etc/hosts.bak 备份原有 Hosts

2.输入 wget https://savilelee.github.io/FilterRules/Profiles/openwrt/hosts -O /etc/hosts --no-check-certificate 下载屏蔽广告 Hosts

3.输入 /etc/init.d/dnsmasq restart 重启 Dnsmasq 使 Hosts 生效

4.浏览器打开路由器管理页面，依次点击 [系统] → [计划任务]，在新的一行填写 0 4 * * * wget https://savilelee.github.io/FilterRules/Profiles/openwrt/hosts -O /etc/hosts --no-check-certificate && /etc/init.d/dnsmasq restart # 每天4点自动更新 Hosts

5.如果你固件的 wget 不支持 HTTPS，那么 Hosts 会下载失败。
解决方法：输入opkg update && opkg install wget 安装完整 wget 重新执行上面的命令。

6.删除 Hosts 屏蔽：输入命令 mv /etc/hosts.bak /etc/hosts 还原 Hosts，接着删除计划任务的任务即可。

这种方法有一定几率误杀也可能导致某些网站打不开或者显示错误。


###特别声明
本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。

本项目主要目的为学习和研究，来源于网络收集，无法保证项目内容的合法性、准确性、完整性和有效性。

本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。

本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。

所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。

所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。

本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。
## 规则来源
GITHUB搜集整理，感谢所有开源规则项目作者的辛勤付出。

**项目中含有搬运其他作者开源规则项目的脚本，没办法进行任何支持、维护和解答，有问题请联系原作者。**