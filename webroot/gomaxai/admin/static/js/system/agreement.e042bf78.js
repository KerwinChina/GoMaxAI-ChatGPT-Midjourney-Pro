
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,a as t,G as s,C as r,r as n,x as i,j as o,o as l,c as p,b as c,f as g,g as m,h as d,Q as u,P as y,p as f,k as x,_ as b,q as h}from"../main-4d5ea9bc.js";/* empty css                     */const v={style:{"margin-top":"16px"}},_=(e=>(f("data-v-03353847"),e=e(),x(),e))((()=>c("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 用户协议内容 ",-1))),j={style:{"margin-top":"50px"}},k=e({__name:"agreement",setup(e){const f=a(),x=t(),b=s({agreement:""});async function h(){const e=await u.queryConfig({keys:["agreement"]}),{agreement:a}=e.data;Object.assign(b,{agreement:a})}async function k(){if(0==f.isUserModifyPermissions())return y.error("非超级管理员无权限操作！");if(""!=b.agreement){try{await u.setConfig({settings:(e=b,Object.keys(e).map((a=>({configKey:a,configVal:e[a]}))))}),y.success("变更配置信息成功")}catch(a){}var e;h()}else y.error("请填写用户协议内容")}return r((()=>x.settings.app.colorScheme)),n({agreement:[{required:!0,trigger:"blur",message:"请填写用户协议内容"}]}),n(),n("/api/file/upload"),i((()=>{h()})),(e,a)=>{const t=o("el-alert"),s=o("el-input"),r=o("el-button");return l(),p("div",null,[c("div",v,[g(t,{closable:!1,"show-icon":"",title:"用户协议设置说明",description:"这里的用户协议设置是对应用户端的底部用户协议链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),c("div",null,[_,g(s,{style:{width:"100%",height:"50vh"},type:"textarea",modelValue:b.agreement,"onUpdate:modelValue":a[0]||(a[0]=e=>b.agreement=e),placeholder:"请输入用户协议内容",clearable:""},null,8,["modelValue"])]),c("div",j,[g(r,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:k},{default:m((()=>[d("保存设置")])),_:1})])])}}});"function"==typeof h&&h(k);const w=b(k,[["__scopeId","data-v-03353847"]]);export{w as default};