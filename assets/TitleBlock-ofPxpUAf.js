import{j as B,k as T,af as Q,m as z,n as L,aL as C,a0 as H,a1 as n,a6 as s,ab as d,a9 as _,ak as g,ac as u,a2 as c,a3 as i,a4 as r,aa as I,ad as b,ah as M,a7 as m,a8 as k,q as w,ai as W,aj as y,aM as p,ar as A}from"./index-CMbCIxJx.js";import{Q as O}from"./QBadge-DmZqijkj.js";import{a as x}from"./QItemLabel-UhmA8qlW.js";import{Q as N}from"./QBtnDropdown-BdAWgzBk.js";import{a as V}from"./QBtnGroup-Bt6QkkZj.js";const j=B({__name:"TitleBlock",props:{title:String,subtitle:String,tagline:String,largeTitle:Boolean,buttons:Array,noAnimation:Boolean,badge:String,badgeIcon:String,badgeLink:String},setup(S,{expose:o}){o();const e=T(!1),{t}=Q({useScope:"global"}),h=L(),f=z(()=>{switch(h.screen.name){case"xl":return"lg";case"lg":return"lg";case"md":return"md";case"sm":return"md";case"xs":return"md";default:return"sm"}}),a={hoverOnSubtitle:e,t,$q:h,adaptiveSize:f,get locateByHash(){return C}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),D={style:{"line-height":"1","font-size":"inherit"},class:"q-pa-none q-ma-none q-mt-xl"},E=["innerHTML"],F={key:1,class:"q-mb-xl q-pb-xl q-my-xl"},G=["innerHTML"];function P(S,o,e,t,h,f){return n(),s(m,null,[d("h1",D,[d("span",{class:_(["text-no-wrap",{"my-subtitle text-bold":e.largeTitle,"my-headline":!e.largeTitle}])},[g(u(e.title)+" ",1),e.badge?(n(),c(O,{key:0,align:"top",outline:"",style:{"border-radius":"0"},onClick:o[0]||(o[0]=a=>e.badgeLink?t.locateByHash(e.badgeLink):void 0),class:"cursor-pointer"},{default:i(()=>[r(I,{name:e.badgeIcon,class:"q-mr-xs dynamic-text"},null,8,["name"]),g(" "+u(t.t(`landing_page.badge.${e.badge}`)),1)]),_:1})):b("",!0)],2),e.subtitle?(n(),s("span",{key:0,class:_(["text-weight-bold block q-pb-md animated-text",{"blend-diff":t.$q.screen.gt.sm,"neon-hover":!e.noAnimation&&t.hoverOnSubtitle,neonText:e.noAnimation,"my-headline":e.largeTitle,"my-subtitle":!e.largeTitle}]),onMouseenter:o[1]||(o[1]=a=>t.hoverOnSubtitle=!0),onMouseleave:o[2]||(o[2]=a=>t.hoverOnSubtitle=!1)},u(e.subtitle),35)):b("",!0)]),e.tagline?(n(),s("div",{key:0,class:"text-subtitle1 q-my-xl q-py-xl",style:M({width:t.$q.screen.gt.md?"45%":"100%"})},[d("span",{innerHTML:e.tagline},null,8,E)],4)):(n(),s("div",F)),r(V,{outline:"",square:""},{default:i(()=>[(n(!0),s(m,null,k(e.buttons,(a,v)=>(n(),s(m,{key:v},[a.items?(n(),c(N,{key:1,class:"lock-blur",label:a.label?t.t(a.label):void 0,icon:a.icon,square:"",outline:"",size:t.adaptiveSize,padding:t.adaptiveSize,"content-class":"lock-blur bg-transparent","auto-close":"","no-caps":""},{default:i(()=>[(n(!0),s(m,null,k(a.items,(l,q)=>(n(),c(W,{key:q,clickable:"",to:l.anchor.startsWith("/")?l.anchor:void 0,href:l.anchor.startsWith("http")?l.anchor:void 0,onClick:J=>l.anchor.startsWith("#")?t.locateByHash(l.anchor):void 0,class:"q-pa-md"},{default:i(()=>[r(y,{avatar:""},{default:i(()=>[r(p,{icon:l.icon},null,8,["icon"])]),_:2},1024),r(y,null,{default:i(()=>[r(x,null,{default:i(()=>[d("span",{innerHTML:t.t(l.label)},null,8,G)]),_:2},1024),r(x,{caption:"",class:"text-dim"},{default:i(()=>[g(u(t.t(l.description)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to","href","onClick"]))),128))]),_:2},1032,["label","icon","size","padding"])):(n(),c(w,{key:0,icon:a.icon,square:"",outline:"",label:a.label?t.t(a.label):void 0,size:t.adaptiveSize,padding:t.adaptiveSize,to:a.anchor.startsWith("/")?a.anchor:void 0,href:a.anchor.startsWith("http")?a.anchor:void 0,onClick:l=>a.anchor.startsWith("#")?t.locateByHash(a.anchor):void 0,class:"lock-blur","no-caps":""},null,8,["icon","label","size","padding","to","href","onClick"])),v!==e.buttons.length-1?(n(),c(A,{key:2,vertical:""})):b("",!0)],64))),128))]),_:1})],64)}const Z=H(j,[["render",P],["__scopeId","data-v-c730c838"],["__file","TitleBlock.vue"]]);export{Z as T};