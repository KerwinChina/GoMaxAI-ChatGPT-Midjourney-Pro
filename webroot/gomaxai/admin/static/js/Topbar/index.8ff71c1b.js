
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,i as t,a,C as r,r as n,x as o,F as i,D as s,j as c,o as u,c as l,b as p,e as d,H as f,f as m,g as h,K as v,J as E,W as b,X as y,ae as g,y as x,h as w,t as T,_ as C}from"../main-7fe883cc.js";import A from"../Tools/index.412e546b.js";import"../index/index.340ffc18.js";function R(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var r=e[a];if("*"!==r&&"+"!==r&&"?"!==r)if("\\"!==r)if("{"!==r)if("}"!==r)if(":"!==r)if("("!==r)t.push({type:"CHAR",index:a,value:e[a++]});else{var n=1,o="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--n){s++;break}}else if("("===e[s]&&(n++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));o+=e[s++]}else o+=e[s++]+e[s++];if(n)throw new TypeError("Unbalanced pattern at ".concat(a));if(!o)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:o}),a=s}else{for(var i="",s=a+1;s<e.length;){var c=e.charCodeAt(s);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;i+=e[s++]}if(!i)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:i}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),r=t.prefixes,n=void 0===r?"./":r,o="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),i=[],s=0,c=0,u="",l=function(e){if(c<a.length&&a[c].type===e)return a[c++].value},p=function(e){var t=l(e);if(void 0!==t)return t;var r=a[c],n=r.type,o=r.index;throw new TypeError("Unexpected ".concat(n," at ").concat(o,", expected ").concat(e))},d=function(){for(var e,t="";e=l("CHAR")||l("ESCAPED_CHAR");)t+=e;return t};c<a.length;){var f=l("CHAR"),m=l("NAME"),h=l("PATTERN");if(m||h){var v=f||"";-1===n.indexOf(v)&&(u+=v,v=""),u&&(i.push(u),u=""),i.push({name:m||s++,prefix:v,suffix:"",pattern:h||o,modifier:l("MODIFIER")||""})}else{var E=f||l("ESCAPED_CHAR");if(E)u+=E;else if(u&&(i.push(u),u=""),l("OPEN")){v=d();var b=l("NAME")||"",y=l("PATTERN")||"",g=d();p("CLOSE"),i.push({name:b||(y?s++:""),pattern:b&&!y?o:y,prefix:v,suffix:g,modifier:l("MODIFIER")||""})}else p("END")}}return i}function N(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),r=t.encode,n=void 0===r?function(e){return e}:r,o=t.validate,i=void 0===o||o,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",r=0;r<e.length;r++){var o=e[r];if("string"!=typeof o){var c=t?t[o.name]:void 0,u="?"===o.modifier||"*"===o.modifier,l="*"===o.modifier||"+"===o.modifier;if(Array.isArray(c)){if(!l)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===c.length){if(u)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var p=0;p<c.length;p++){var d=n(c[p],o);if(i&&!s[r].test(d))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(d,'"'));a+=o.prefix+d+o.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!u){var f=l?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(f))}}else{d=n(String(c),o);if(i&&!s[r].test(d))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(d,'"'));a+=o.prefix+d+o.suffix}}else a+=o}return a}}(R(e,t),t)}const M={class:"left-box"},P=e({name:"Topbar"}),_=C(e({...P,setup(e){const C=t(),R=a(),P=r((()=>"mobile"===R.mode||["side","head","single"].includes(R.settings.menu.menuMode)&&R.settings.menu.enableSubMenuCollapseButton)),_=r((()=>{const e=[];return R.settings.home.enable&&e.push({path:"/",title:R.settings.home.title}),C.meta.breadcrumbNeste&&e.push(...C.meta.breadcrumbNeste.filter((e=>!1===e.hide))),e})),D=n(0),O=n(!1);function S(){D.value=(document.documentElement||document.body).scrollTop}return o((()=>{window.addEventListener("scroll",S)})),i((()=>{window.removeEventListener("scroll",S)})),s(D,((e,t)=>{const a=parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-topbar-height"));O.value="sticky"===R.settings.topbar.mode&&e>t&&e>a})),(e,t)=>{const a=x,r=c("el-icon"),n=c("el-breadcrumb-item"),o=c("el-breadcrumb");return u(),l("div",{class:f(["topbar-container",{[`topbar-${d(R).settings.topbar.mode}`]:!0,shadow:d(D),hide:d(O)}]),"data-fixed-calc-width":""},[p("div",M,[d(P)?(u(),l("div",{key:0,class:f(["sidebar-collapse",{"is-collapse":d(R).settings.menu.subMenuCollapse}]),onClick:t[0]||(t[0]=e=>d(R).toggleSidebarCollapse())},[m(r,null,{default:h((()=>[m(a,{name:"toolbar-collapse"})])),_:1})],2)):v("",!0),d(R).settings.breadcrumb.enable&&"pc"===d(R).mode&&"filesystem"!==d(R).settings.app.routeBaseOn?(u(),E(o,{key:1},{default:h((()=>[m(g,{name:"breadcrumb"},{default:h((()=>[(u(!0),l(b,null,y(d(_),((e,t)=>{return u(),E(n,{key:e.path,to:t<d(_).length-1?(a=e.path,N(a)(C.params)):""},{default:h((()=>[w(T(e.title??"[ 无标题 ]"),1)])),_:2},1032,["to"]);var a})),128))])),_:1})])),_:1})):v("",!0)]),m(A)],2)}}}),[["__scopeId","data-v-065e83d5"]]);export{_ as default};