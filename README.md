<div align="center">

<a href='#LOGO'>
  <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/256yuan.png" alt="icon"/>
</a>

<h1 align="center">GoMaxAI Pro版 (ChatGPT-Midjourney)</h1>

[简体中文](./README.md)


个人、团队、企业私有化运营的AIGC应用,支持ChatGPT、Claude、Gemini、kimi、文心一言、讯飞星火、清华智谱、suno-v3.5、luma-video等模型。

[![Web][Web-image]][web-url]
[![Windows][Windows-image]][download-url]
[![MacOS][MacOS-image]][download-url]
[![Linux][Linux-image]][download-url]

[演示站](https://gomaxai.qumao518.vip) / [免费版](https://gitee.com/ignition-network/gomaxai) / [Pro版](https://gitee.com/ignition-network/gomaxaipro) / [咨询](http://wpa.qq.com/msgrd?v=3&uin=124628086&site=qq&menu=yes)

[web-url]: https://gomaxai.qumao518.vip/
[download-url]: https://wwr.lanzouh.com/iufxa28xh3cb
[Web-image]: https://img.shields.io/badge/Web-PWA-orange?logo=microsoftedge
[Windows-image]: https://img.shields.io/badge/-Windows-blue?logo=windows
[MacOS-image]: https://img.shields.io/badge/-MacOS-black?logo=apple
[Linux-image]: https://img.shields.io/badge/-Linux-333?logo=ubuntu

[<img src="https://vercel.com/button" alt="Deploy on Zeabur" height="30">](https://pxl6xtaj0ew.feishu.cn/wiki/QiwZwSGUniLU6bkAjXVcJ3CWnZf?from=from_copylink) [<img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/lazy.png" alt="icon" height="30">](https://laomao.qumao518.vip)  [<img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/mjpe.png" alt="icon" height="30">](https://midjourney.bxmj.top)

[<img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/mj59.png" height="60" width="288" >](https://midjourney.bxmj.top)

</div>

满足企业用户私有化部署和个性化定制需求：
- **简洁直观**：系统界面设计注重用户体验，采用简洁而现代的设计风格，使用户可以轻松上手，减少学习成本
- **资源集成**：系统集体数十种AI功能，开箱即用
- **权限管理**：成员权限、资源权限、知识库权限层级分明，企业级 Admin Panel 统一控制
- **安全审计**：系统能够自动拦截敏感提问，支持全面的对话记录追溯，确保AI的行为遵循企业信息安全规范
- **私有部署**：支持在各类主流私有云环境下的部署，确保数据的安全性和隐私保护
- **持续更新**：系统采用敏捷开发模式，能够快速响应用户反馈，持续推出新功能和优化。

## 系统技术架构
- web前端：vue3
- 移动端：uniapp
- 管理端：Vue3
- 服务端（后端）：Nodejs
- 数据支持： Mysql5.7(+) + Redis
- 运行环境：Linux、Windows、MacOs（推荐使用Linux）
- 数据存储：本地存储 | 阿里云oss | 腾讯云cos | chevereto图床

## 系统授权

- Q Q咨询：**124628086**
- 微信咨询: **lzgzs168**
---
 <div align="center">   
 <img src="https://gitee.com/ignition-network/gomaxai/raw/master/images/wechat.png" alt="icon"/>


<h1 align="center">系统主界面</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/主页.png" alt="icon"/>
</div>

---
## 主要功能

- 极速部署，宝塔10分钟部署完成，小白易可操作！**一键部署**
- 强大的在线配置框架及丝滑版的体验，95%数据都可以后台在线统一管理！
- 完整的 Markdown 支持：LaTex 公式、Mermaid 流程图、代码高亮等等
- 精心设计的 UI，支持深色和浅色两种主题
- ChatGPT + Azure OpenAI +gemini+claude+kimi+suno+keepdesk+文心一言 + 讯飞星火 + 清华智谱 + 自定义对话模型支持
- 内容安全多层过滤：内置词库 -> 自定义词库 -> 第三方（百度内容审核）安全检测，可同时启用
- 支持GPT最新模型：gpt-4-1106-preview、gpt-4-vision-preview、gpt-4-v(识图)、gpt-4-dalle(生图)、gpt-4-all(上传文件)、 Dall-E-3、suno-v3、gpt-4o
- AI绘画支持：文生图 / 放大 / 微调 / 垫图 / 混图 / 咒语解析 / 平移(Pan) / 扩图(Zoom) / 变幻(Vary) / 区域重绘等
- 绘画账号池（无限量）：每个账号同时支持单独的并发线程设定，线程隔离，可设置出图模式
- 绘图普通(relax)/快速模式(fast)/极速模式（turb）区分，可单独设置扣除积分
- 拥有自己的域名？好上加好，绑定后即可在任何地方**无障碍**快速访问
- LUMA视频：支持文生视频、图生视频等
- 思维导图：一键根据需求生成思维导图，可导出PNG或SVG
- 灵感广场：用户绘图公开展示（私有绘图不展示）
- 应用市场：可后台管理动态添加及其管理
- 用户系统：微信扫码登录、邮箱、手机号码
- 支付系统：微信（支持扫码支付+JSAPI支持） / 支付宝 / 虎皮椒 / 自定义外链
- 兑换码系统
- 站点在线配置：例如主题色、LOGO、名称等等均可在后台管理在线配置
- 邀请机制：好友邀请获得对应奖励，包含防止恶意自己邀请自己机制检测
- 对话各个模型+绘画各个操作单独自定义扣除积分数量支持
- 动态用户侧边栏菜单控制显隐
- 用户端动态菜单（支持内嵌网页、外部链接跳转、内部路径跳转）

## 界面截图

<h1 align="center">智能问答</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/智能问答.png" alt="icon"/>
<h1 align="center">MJ绘画</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/MJ.png" alt="icon"/>
<h1 align="center">Suno音乐</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/3.png" alt="icon"/>
<h1 align="center">Luma视频</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/1.png" alt="icon"/>
<h1 align="center">个人中心</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/个人中心.png" alt="icon"/>
<h1 align="center">手机端</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/手机端.png" alt="icon"/>
<h1 align="center">管理后台</h1>
 <img src="https://gitee.com/ignition-network/gomaxaipro/raw/master/images/管理后台.png" alt="icon"/>

## 开发计划

- [x] AIPPT一键生成
- [x] 语音实时通话功能
- [x] SAAS多开功能
- [x] 移动端全新界面
- [x] SD绘画功能
- [x] 更多大语言模型

## 最新动态

- 🚀 6.0.3  智能问答内容排版优化
- 🚀 6.0.2  web端各界面BUG修复
- 🚀 6.0.1  web端各界面优化
- 🚀 6.0.0  重构web界面及交互设计
- 🚀 5.0.2  增加Luma视频功能
- 🚀 5.0.1  重构管理后台
- 🚀 5.0.0  新增主页功能
- 🚀 ......
- 🚀 了解更多： [系统介绍](https://pxl6xtaj0ew.feishu.cn/wiki/QiwZwSGUniLU6bkAjXVcJ3CWnZf)。

