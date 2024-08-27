
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as t,G as l,C as n,j as i,o,J as s,g as d,b as r,t as c,e as p,f as u,c as m,X as g,W as f,h as b,O as y,P as h,y as x,_ as v}from"../main-2d3d97e8.js";import{A as w}from"../mj/mj.f9be448f.js";import{a as _}from"../system/system.b24f9b0c.js";const j={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},C={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},F={style:{width:"100%",display:"flex","align-items":"center"}},V=["src"],E={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},k=v(e({__name:"mjIncantation",props:{list:{type:Array,required:!0,default:()=>[]}},emits:["fresh"],setup(e,{expose:v,emit:k}){const I=a(),M=t(!1),U=t(""),q=t(0),A=t(),O=t(!1),P=l({incantationCn:"",incantationEn:"",pid:void 0,img:""}),z=e,T=n((()=>z.list.filter((e=>2===e.level)))),B=k,D=l({incantationCn:[{required:!0,message:"字典名称不能为空",trigger:"change"},{max:50,message:"最大长度50"}],incantationEn:[{required:!0,message:"字典英文翻译不能为空",trigger:"change"},{max:100,message:"最大长度100"}],pid:[{required:!0,message:"分类必选",trigger:"change"}]});const G=e=>"image/jpeg"!==e.type&&"image/png"!==e.type?(h.error("只支持jpg和png格式"),!1):!(e.size/1024/1024>2)||(h.error("图片不能大于2M!"),!1),J=async e=>{await(null==e?void 0:e.validate((async e=>{if(e){if(0==I.isUserModifyPermissions())return h.error("非超级管理员无权限操作！");q.value?await W({id:q.value,...P}):await N(P),B("fresh",!0),M.value=!1,Object.assign(P,{})}})))},N=async e=>(await w.addMjIncantation(e),h.success("添加咒语成功！"),!0),R=async e=>await w.getMjIncantation(e).then((e=>e.data)),W=async e=>{await w.modifyMjIncantation(e),h.success("更新咒语成功！")};return v({open:function(e){M.value=!0,q.value=e||0,U.value=e?"编辑字典":"添加字典",e&&e>0?R({id:e}).then((e=>{const{incantationCn:a,incantationEn:t,img:l,pid:n}=e;Object.assign(P,{incantationCn:a,incantationEn:t,img:l,pid:n})})):Object.assign(P,{incantationCn:"",incantationEn:"",pid:void 0,img:""})}}),(e,a)=>{const t=x,l=i("el-icon"),n=i("el-option"),h=i("el-select"),v=i("el-form-item"),k=i("el-input"),I=i("el-button"),q=i("Plus"),z=i("el-upload"),B=i("el-form"),N=i("el-dialog");return o(),s(N,{modelValue:p(M),"onUpdate:modelValue":a[8]||(a[8]=e=>y(M)?M.value=e:null),width:"450","show-close":!1,"destroy-on-close":""},{header:d((({close:e,titleId:n,titleClass:i})=>[r("div",j,[r("div",null,c(p(U)),1),r("div",{onClick:a[0]||(a[0]=e=>M.value=!1),style:{cursor:"pointer"}},[u(l,null,{default:d((()=>[u(t,{name:"close"})])),_:1})])])])),default:d((()=>[r("div",C,[u(B,{model:P,"label-position":"right",disabled:p(O),ref_key:"formRef",ref:A,rules:D,inline:!1,"label-width":"80px"},{default:d((()=>[u(v,{label:"分类",prop:"pid"},{default:d((()=>[u(h,{modelValue:P.pid,"onUpdate:modelValue":a[1]||(a[1]=e=>P.pid=e),placeholder:"选择分类","fit-input-width":"",style:{width:"100%"}},{default:d((()=>[(o(!0),m(f,null,g(p(T),(e=>(o(),s(n,{value:e.id,label:e.classifyName},null,8,["value","label"])))),256))])),_:1},8,["modelValue"])])),_:1}),u(v,{label:"字典名称",prop:"incantationCn"},{default:d((()=>[r("div",F,[u(k,{modelValue:P.incantationCn,"onUpdate:modelValue":a[2]||(a[2]=e=>P.incantationCn=e),style:{width:"100%"},placeholder:"输入中文字典名称",clearable:"",maxlength:"50"},null,8,["modelValue"]),u(I,{onClick:a[3]||(a[3]=e=>(async e=>{O.value=!0;const a=await w.getCnTranslateEn({text:e}).then((e=>e.data)).catch((e=>{O.value=!1}));P.incantationEn=a,O.value=!1})(P.incantationCn)),loading:p(O),style:{"margin-left":"10px"}},{default:d((()=>[b("翻译")])),_:1},8,["loading"])])])),_:1}),u(v,{label:"字典英译",prop:"incantationEn"},{default:d((()=>[u(k,{modelValue:P.incantationEn,"onUpdate:modelValue":a[4]||(a[4]=e=>P.incantationEn=e),placeholder:"输入字典英译",clearable:"",maxlength:"50"},null,8,["modelValue"])])),_:1}),u(v,{label:"字典图片",prop:"img"},{default:d((()=>[u(z,{class:"logo-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:a[5]||(a[5]=e=>(e=>{const a=e.name.split(".")[1],t=new FormData;t.append("filename",e.raw.uid+"."+a),t.append("file",e.raw),t.append("dir","gpts-logo"),_.uploadFile(t).then((e=>{P.img=e.data}))})(e)),"before-upload":G},{default:d((()=>[P.img?(o(),m("img",{key:0,src:P.img,class:"avatar",style:{border:"1px dashed #cccccc","border-radius":"12px"}},null,8,V)):(o(),s(l,{key:1,class:"logo-uploader-icon",style:{border:"1px dashed #cccccc","border-radius":"12px"}},{default:d((()=>[u(q)])),_:1}))])),_:1})])),_:1})])),_:1},8,["model","disabled","rules"])]),r("div",E,[u(I,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[6]||(a[6]=e=>M.value=!1)},{default:d((()=>[b("取消 ")])),_:1}),u(I,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:a[7]||(a[7]=e=>J(p(A)))},{default:d((()=>[b(" 确定 ")])),_:1})])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-b30d6b2d"]]);export{k as default};