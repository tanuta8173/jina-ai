import{s as Z,m as M,p as ue,K as ce,dk as me,dy as de,w as B,j as q,af as $,a0 as F,aI as I,aQ as P,a1 as n,a2 as l,a3 as a,a4 as t,aj as c,aa as y,ak as p,ac as d,ai as S,a6 as x,ab as i,ah as fe,u as _e,an as E,k as w,V as pe,n as ye,ao as ve,ap as ge,dH as be,cC as he,cM as ke,cN as Se,q as h,aM as H,a8 as L,a7 as N,ad as g,aK as xe,ae as Te,a5 as Y,a9 as J,T as De,am as Ke,aV as Qe}from"./index-CMbCIxJx.js";import{Q as we}from"./QToolbar-DTagO2vU.js";import{u as Ce,a as Me,b as Ae,Q as Ee}from"./QTabs-BNtnPrLu.js";import{P as Le,d as Ne,Q as Be,a as Ie,b as Pe,c as Re}from"./PurchaseSuccessDialog-B-hBSjVc.js";import{a as R,Q as W}from"./QItemLabel-UhmA8qlW.js";import{Q as qe}from"./QMenu-BekJfisg.js";import{Q as k}from"./QTooltip-CfAkoLX3.js";import{Q as Fe}from"./QBadge-DmZqijkj.js";import{c as Ve}from"./copy-to-clipboard-BGhp_x5i.js";import{a as Oe,b as ze}from"./finetune-Cej12yLc.js";import{S as X,E as C,L as Ue,P as Ge}from"./PurchaseDialog-Cg2RQ_kA.js";import{u as je}from"./embedding-DFquNX-8.js";import{u as He}from"./QForm-CRS9gpiF.js";import"./QResizeObserver-lVgzZ_Fw.js";import"./QLinearProgress-P3yLIeFN.js";import"./format-DyQxkAtJ.js";import"./TouchPan-CnPtHCtc.js";import"./touch-BjYP5sR0.js";import"./position-engine-Ci6-oI4t.js";import"./use-dialog-plugin-component-DyW9eUh-.js";import"./package-D9JPNs5w.js";import"./QBtnGroup-Bt6QkkZj.js";import"./QExpansionItem-DUmjy_tl.js";import"./QTable-CXNeIOS6.js";import"./use-fullscreen-BbZLxYHx.js";import"./ClosePopup-CYOHAkQh.js";import"./QSpace-ax60NobV.js";const Ye=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(m,{slots:s}){const r=M(()=>"q-toolbar__title ellipsis"+(m.shrink===!0?" col-shrink":""));return()=>ue("div",{class:r.value},ce(s.default))}}),Je=Z({name:"QRouteTab",props:{...me,...Ce},emits:Me,setup(m,{slots:s,emit:r}){const e=de({useDisableForRouterLinkProps:!1}),{renderTab:v,$tabs:_}=Ae(m,s,r,{exact:M(()=>m.exact),...e});return B(()=>`${m.name} | ${m.exact} | ${(e.resolvedLink.value||{}).href}`,_.verifyRouteModel),()=>v(e.linkTag.value,e.linkAttrs.value)}}),We=q({__name:"DrawerItemComponent",props:{item:{type:Object,required:!0},isActive:{type:Boolean,default:!1}},setup(m,{expose:s}){s();const{t:r}=$({useScope:"global"}),e={t:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function Xe(m,s,r,e,v,_){return I((n(),l(S,{to:{name:"api",params:{tab:r.item.name}},"active-class":"text-primary",clickable:""},{default:a(()=>[t(c,{avatar:""},{default:a(()=>[t(y,{name:r.item.iconType==="svg"||r.item.icon.includes(".svg")?`img:${r.isActive?r.item.activeIcon:r.item.icon}`:r.item.icon},null,8,["name"])]),_:1}),t(c,null,{default:a(()=>[t(R,{lines:"1"},{default:a(()=>[p(d(e.t(r.item.label)),1)]),_:1})]),_:1})]),_:1},8,["to"])),[[P]])}const Ze=F(We,[["render",Xe],["__file","DrawerItemComponent.vue"]]),$e=q({__name:"AnimatedLogo",props:{miniState:Boolean},setup(m,{expose:s}){s();const r={};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),ea={style:{height:"56px"},class:"row items-center absolute-top"},aa={style:{"padding-left":"20px"}},ta={viewBox:"0 0 232 100",style:{width:"56px",height:"56px",transition:"all 0.2s ease-in-out"}},oa={fill:"#FFFFFF"};function sa(m,s,r,e,v,_){return n(),x("div",ea,[i("div",aa,[(n(),x("svg",ta,[i("g",oa,[s[1]||(s[1]=i("circle",{id:"j-dot",cx:"15",cy:"84.5",r:"15"},null,-1)),s[2]||(s[2]=i("path",{id:"letter-j",d:"M61.5 36.35c2 0 3.6 1.6 3.6 3.6v29.3c0 16.7-13.5 30.3-30 30.5V69.3l-.1-29.4c0-2 1.6-3.6 3.6-3.6h23.3z"},null,-1)),i("g",{style:fe({opacity:r.miniState?0:1,transition:"opacity 0.2s ease-in-out"})},s[0]||(s[0]=[i("circle",{id:"top-dot",cx:"96",cy:"15",r:"15"},null,-1),i("path",{id:"letter-i",d:"M81 40c0-2 1.5-3.6 3.6-3.6h23.4c2 0 3.6 1.6 3.6 3.6v41c0 2-1.6 3.6-3.6 3.6H84.6c-2 0-3.6-1.6-3.6-3.6V40z"},null,-1),i("path",{id:"letter-n",d:"M128.5 39.8c0-2 1.6-3.6 3.6-3.6h13.3l.5.1c15 .2 27.2 12.3 27.6 27.3v17.3c0 2-1.6 3.6-3.6 3.6h-37.8c-2 0-3.6-1.6-3.6-3.6V39.8z"},null,-1),i("path",{id:"letter-a",d:"M207.2 84h-.2c-12.6-.7-22.5-11.2-22.5-24 0-13.3 10.8-24.1 24.1-24.1 12.8 0 23.3 10 24 22.6h.1V80.4c0 2-1.6 3.6-3.6 3.6h-21.9z"},null,-1)]),4)])]))])])}const ra=F($e,[["render",sa],["__file","AnimatedLogo.vue"]]),na=q({__name:"SeFoLayout",setup(m,{expose:s}){s();const{t:r}=$({useScope:"global"}),e=ye(),v=ve(),_=ge(),T=_e(),{user:o}=E(T),f=je(),{apiKeyTokens:ee,isPremiumPaidUser:ae,isPaidUser:te}=E(f),b=He(),{keys:A,keysInfoCache:V}=E(b),oe=w(!0),O=w(!0),D=w(),se=X.filter(u=>u.tooling),re=M(()=>{let u=[],j={};return X.forEach(Q=>{Q.name===C.KEY_MANAGER?j=Q:Q.showsOn.includes("menu")&&u.push(Q)}),o.value.uid&&u.unshift(j),u}),ne=u=>{D.value&&clearTimeout(D.value),D.value=setTimeout(()=>{O.value=!u},100)},le=()=>{o.value.uid?v.push({params:{tab:C.KEY_MANAGER}}):(ke(Se,"click_login_button"),e.dialog({component:Ue,componentProps:{user:o},persistent:!0}))},ie=M(()=>o.value.uid?o.value.displayName||o.value.email||o.value.uid:r("key_manager.login"));function z(){if(_.query.purchase_status==="success"){const u=new Date(parseInt(_.query.session_id)).toLocaleString();be.create({component:Le,componentProps:{purchasedTime:u,hideActions:!0}})}}const U=async()=>{await b.fetchKeys(_.params.tab===C.KEY_MANAGER),A.value.length===0?(await b.addKey(f.apiKey),b.setPrimaryKey(f.apiKey)):b.checkPrimaryKey()};pe(async()=>{z()}),B(()=>f.apiKey,u=>{u&&f.getCurrentKeyInfo()}),B(()=>o.value.uid,async u=>{u?U():(A.value=[],V.value={},f.getCurrentKeyInfo())},{immediate:!0});const K=w(!1),G={t:r,$q:e,router:v,route:_,userStore:T,user:o,embeddingStore:f,apiKeyTokens:ee,isPremiumPaidUser:ae,isPaidUser:te,apiKeyStore:b,keys:A,keysInfoCache:V,drawer:oe,miniState:O,timeout:D,seFoMoreRoutes:se,seFoRoutes:re,handleMouseMove:ne,login:le,userDisplayName:ie,checkPurchaseStatus:z,init:U,isApiKeyCopyDone:K,copyApiKey:()=>{!f.apiKey||K.value||(Ve(f.apiKey).then(()=>{e.notify({message:r("copy_to_clipboard_success"),icon:"done"}),K.value=!0,gtag==null||gtag("event","embedding_copy_api_key",{location:document.location.href})}),setTimeout(()=>{K.value=!1},1800))},onBuy:()=>{e.dialog({component:Ge,componentProps:{purchaseKey:f.apiKey}})},get formatNumber(){return Oe},get formatNumberShort(){return ze},get EMBEDDING_TABS(){return C},DrawerItemComponent:Ze,AnimatedLogo:ra,get formatKey(){return he}};return Object.defineProperty(G,"__isScriptSetup",{enumerable:!1,value:!0}),G}}),la=["src","alt"],ia={class:"absolute-bottom"},ua={style:{"font-family":"monospace"}},ca=["src","alt"],ma={class:"ellipsis"};function da(m,s,r,e,v,_){const T=Qe("router-view");return n(),l(Ne,{view:"lHh Lpr lff",class:"main-layout"},{default:a(()=>[e.$q.screen.gt.sm?g("",!0):(n(),l(Be,{key:0,bordered:"",reveal:"",class:"bg-mixed-200 text-white","height-hint":"98"},{default:a(()=>[t(we,{class:"q-pa-none"},{default:a(()=>[t(h,{flat:"",square:"",stretch:"",icon:"img:/J.svg",to:{name:"landing"}}),t(Ye,{class:"my-font non-selectable"}),t(h,{flat:"",stretch:"",square:"",onClick:e.userStore.logout},{default:a(()=>[e.user.photoURL?(n(),l(H,{key:0,size:"sm",round:"",class:"bordered-avatar"},{default:a(()=>[i("img",{src:e.user.photoURL,referrerpolicy:"no-referrer",alt:e.userDisplayName},null,8,la)]),_:1})):(n(),l(y,{key:1,size:"sm",round:"",name:"person"})),t(y,{name:"logout",class:"q-ml-md"})]),_:1},8,["onClick"])]),_:1}),e.user&&e.$q.screen.lt.md?(n(),l(Ee,{key:0,shrink:"","mobile-arrows":"",align:"left"},{default:a(()=>[(n(!0),x(N,null,L([...e.seFoRoutes,...e.seFoMoreRoutes],o=>(n(),l(Je,{key:o.name,to:{name:"api",params:{tab:o.name}},label:o.label?e.t(o.label):"",icon:o.tag==="usage"?`img:${o.name===(e.route.params.tab||e.EMBEDDING_TABS.CODE)?o.activeIcon:o.icon}`:o.icon,"active-class":"text-primary","no-caps":"",exact:"",replace:""},null,8,["to","label","icon"]))),128))]),_:1})):g("",!0)]),_:1})),e.$q.screen.gt.sm?(n(),l(Ie,{key:1,modelValue:e.drawer,"onUpdate:modelValue":s[1]||(s[1]=o=>e.drawer=o),"show-if-above":"",mini:e.miniState,onMouseover:s[2]||(s[2]=o=>e.handleMouseMove(!0)),onMouseout:s[3]||(s[3]=o=>e.handleMouseMove(!1)),"mini-to-overlay":"",width:250,breakpoint:500,bordered:"",class:"bg-mixed-200"},{default:a(()=>[i("div",{class:"row items-center absolute-top cursor-pointer",onClick:s[0]||(s[0]=o=>e.router.push({name:"landing"}))},[t(e.AnimatedLogo,{"mini-state":e.miniState},null,8,["mini-state"])]),t(Pe,{class:"fit",style:{"max-height":"calc(100% - 112px)","margin-top":"56px"},"horizontal-thumb-style":{opacity:"0"}},{default:a(()=>[t(W,null,{default:a(()=>[t(xe,{"enter-to-class":"list-enter-from","enter-active-class":"animated bounceIn","leave-active-class":"animated backOutRight","leave-from-class":"list-leave-to","move-class":"list-move","enter-from-class":"list-enter-from","leave-to-class":"list-leave-to"},{default:a(()=>[(n(!0),x(N,null,L(e.seFoRoutes,o=>(n(),l(e.DrawerItemComponent,{item:o,key:o==null?void 0:o.label,"is-active":o.name===(e.route.params.tab||e.EMBEDDING_TABS.CODE)},null,8,["item","is-active"]))),128)),I((n(),l(S,{clickable:"","active-class":"text-primary",key:"tools"},{default:a(()=>[t(c,{avatar:""},{default:a(()=>[t(y,{name:"service_toolbox"})]),_:1}),t(c,null,{default:a(()=>[t(R,{lines:"1"},{default:a(()=>[p(d(e.t("embedding.tools")),1)]),_:1})]),_:1}),t(qe,{class:"bg-mixed-300 lock-blur","auto-close":""},{default:a(()=>[t(W,{class:"cursor-pointer",style:{width:"250px"}},{default:a(()=>[(n(!0),x(N,null,L(e.seFoMoreRoutes,o=>(n(),l(e.DrawerItemComponent,{item:o,key:o==null?void 0:o.label,"is-active":o.name===(e.route.params.tab||e.EMBEDDING_TABS.CODE)},null,8,["item","is-active"]))),128))]),_:1})]),_:1})]),_:1})),[[P]])]),_:1})]),_:1})]),_:1}),i("div",ia,[t(De,{appear:"","enter-active-class":"animated faster fadeInLeft","leave-active-class":"animated faster fadeOutLeft"},{default:a(()=>[e.miniState?g("",!0):(n(),l(Te,{key:0,flat:"",square:"",class:"bg-mixed-300"},{default:a(()=>[t(Y,{class:"q-pb-none text-dim"},{default:a(()=>[p(d(e.t("key_manager.available_resources")),1)]),_:1}),t(Y,{class:"q-pa-none"},{default:a(()=>[t(S,null,{default:a(()=>[t(c,{side:""},{default:a(()=>[t(y,{name:"o_data_usage"})]),_:1}),t(c,null,{default:a(()=>[i("span",{class:J(["text-h5",{"text-negative":e.apiKeyTokens<=0}])},d(e.formatNumberShort(e.apiKeyTokens)),3),t(k,null,{default:a(()=>[p(d(e.t("key_manager.balance_primary_key")+": "+e.formatNumber(e.apiKeyTokens)),1)]),_:1})]),_:1}),t(c,{side:""},{default:a(()=>[t(h,{icon:"add_shopping_cart",flat:"",square:"",onClick:e.onBuy},{default:a(()=>[t(k,null,{default:a(()=>[p(d(e.t("embedding.buy_more_quota")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(S,null,{default:a(()=>[t(c,{side:"",class:"relative-position"},{default:a(()=>[t(y,{name:"o_key"}),e.keys.length>0?(n(),l(Fe,{key:0,floating:"",rounded:"",label:e.keys.length,class:"bg-mixed-400"},{default:a(()=>[t(k,null,{default:a(()=>[p(d(e.t("key_manager.total_keys")+": "+e.keys.length),1)]),_:1})]),_:1},8,["label"])):g("",!0)]),_:1}),t(c,null,{default:a(()=>[i("span",ua,d(e.formatKey(e.embeddingStore.apiKey,{tailOnly:!0})),1),t(k,null,{default:a(()=>[p(d(e.t("key_manager.is_primary")),1)]),_:1})]),_:1}),t(c,{side:""},{default:a(()=>[t(h,{icon:"content_copy",flat:"",square:"",onClick:e.copyApiKey})]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1}),I((n(),l(S,{clickable:"",style:{height:"56px"},onClick:e.login},{default:a(()=>[t(c,{avatar:"",class:"q-my-sm q-pr-none user-avatar"},{default:a(()=>[e.user.photoURL?(n(),l(H,{key:0,size:"sm",round:"",class:"bordered-avatar"},{default:a(()=>[i("img",{src:e.user.photoURL,referrerpolicy:"no-referrer",alt:e.userDisplayName},null,8,ca)]),_:1})):(n(),l(y,{key:1,size:"sm",round:"",name:"person"}))]),_:1}),t(c,null,{default:a(()=>[t(R,{lines:"1",class:"row items-center"},{default:a(()=>[i("span",ma,[e.isPaidUser?(n(),l(y,{key:0,name:"verified",class:J([{"golden-foil":e.isPremiumPaidUser,"silver-foil":e.isPaidUser},"q-mr-xs"])},null,8,["class"])):g("",!0),p(" "+d(e.userDisplayName),1)]),t(k,null,{default:a(()=>[p(d(e.userDisplayName),1)]),_:1})]),_:1})]),_:1}),e.user.uid&&!e.miniState?(n(),l(c,{key:0,side:""},{default:a(()=>[t(h,{flat:"",square:"",id:"more_menu",icon:"logout",onClick:Ke(e.userStore.logout,["stop"])},null,8,["onClick"])]),_:1})):g("",!0)]),_:1})),[[P]])])]),_:1},8,["modelValue","mini"])):g("",!0),t(Re,null,{default:a(()=>[t(T)]),_:1})]),_:1})}const Oa=F(na,[["render",da],["__file","SeFoLayout.vue"]]);export{Oa as default};