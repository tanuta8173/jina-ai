import{aA as p,k as T,m as d,F as fe,V as Ae,aB as Be,bF as de,aI as $e,aQ as xe,p as h,L as ce,R as Me,bG as De,aa as O,aU as Ee,J as be,bH as Fe,bI as Qe,s as We,z as ee,B as ve,w as H,bJ as Ke,bK as je,K as Ve,aT as ze}from"./index-CMbCIxJx.js";import{Q as He}from"./QResizeObserver-lVgzZ_Fw.js";import{r as Oe}from"./QLinearProgress-P3yLIeFN.js";let Ne=0;const Ze=["click","keydown"],pe={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ne++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function et(e,x,_,c){const r=Be(de,p);if(r===p)return console.error("QTab/QRouteTab component needs to be child of QTabs"),p;const{proxy:N}=be(),M=T(null),F=T(null),Q=T(null),U=d(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),P=d(()=>r.currentModel.value===e.name),G=d(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(P.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),I=d(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=d(()=>e.disable===!0||r.hasFocus.value===!0||P.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function C(l,b){if(b!==!0&&M.value!==null&&M.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&ce(l);return}if(c===void 0){r.updateModel({name:e.name}),_("click",l);return}if(c.hasRouterLink.value===!0){const m=(v={})=>{let w;const y=v.to===void 0||Fe(v.to,e.to)===!0?r.avoidRouteWatcher=Qe():null;return c.navigateToRouterLink(l,{...v,returnRouterError:!0}).catch(k=>{w=k}).then(k=>{if(y===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(k===void 0||k.message!==void 0&&k.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),v.returnRouterError===!0)return w!==void 0?Promise.reject(w):k})};_("click",l,m),l.defaultPrevented!==!0&&m();return}_("click",l)}function R(l){Me(l,[13,32])?C(l,!0):De(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,N.$el)===!0&&ce(l),_("keydown",l)}function D(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:Q,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(O,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(O,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const v=[h("div",{class:"q-focus-helper",tabindex:-1,ref:M}),h("div",{class:I.value},Ee(x.default,b))];return l===!1&&v.push(m),v}const A={name:d(()=>e.name),rootRef:F,tabIndicatorRef:Q,routeData:c};fe(()=>{r.unregisterTab(A)}),Ae(()=>{r.registerTab(A)});function W(l,b){const m={ref:F,class:G.value,tabindex:g.value,role:"tab","aria-selected":P.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:R,...b};return $e(h(l,m,D()),[[xe,U.value]])}return{renderTab:W,$tabs:r}}function Ue(e,x,_){const c=_===!0?["left","right"]:["top","bottom"];return`absolute-${x===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Ge=["left","center","right","justify"],tt=We({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ge.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:x,emit:_}){const{proxy:c}=be(),{$q:r}=c,{registerTick:N}=ee(),{registerTick:M}=ee(),{registerTick:F}=ee(),{registerTimeout:Q,removeTimeout:U}=ve(),{registerTimeout:P,removeTimeout:G}=ve(),I=T(null),g=T(null),C=T(e.modelValue),R=T(!1),D=T(!0),A=T(!1),W=T(!1),l=[],b=T(0),m=T(!1);let v=null,w=null,y;const k=d(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ue(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=d(()=>{const t=b.value,a=C.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=d(()=>`q-tabs__content--align-${R.value===!0?"left":W.value===!0?"justify":e.align}`),me=d(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=d(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),K=d(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),j=d(()=>e.vertical!==!0&&r.lang.rtl===!0),J=d(()=>Oe===!1&&j.value===!0);H(j,$),H(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,V);function X({name:t,setCurrent:a,skipEmit:n}){C.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&_("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(we(C.value,t),C.value=t))}function V(){N(()=>{te({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function te(t){if(K.value===void 0||g.value===null)return;const a=t[K.value.container],n=Math.min(g.value[K.value.scroll],Array.prototype.reduce.call(g.value.children,(s,i)=>s+(i[K.value.content]||0),0)),u=a>0&&n>a;R.value=u,u===!0&&M($),W.value=a<parseInt(e.breakpoint,10)}function we(t,a){const n=t!=null&&t!==""?l.find(s=>s.name.value===t):null,u=a!=null&&a!==""?l.find(s=>s.name.value===a):null;if(z===!0)z=!1;else if(n&&u){const s=n.tabIndicatorRef.value,i=u.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const o=s.getBoundingClientRect(),f=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-f.top}px,0) scale3d(1,${f.height?o.height/f.height:1},1)`:`translate3d(${o.left-f.left}px,0,0) scale3d(${f.width?o.width/f.width:1},1,1)`,F(()=>{v=setTimeout(()=>{v=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&R.value===!0&&B(u.rootRef.value)}function B(t){const{left:a,width:n,top:u,height:s}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-u:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),$();return}o+=e.vertical===!0?i.height-s:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),$())}function $(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);j.value===!0?(D.value=Math.ceil(n+a.width)<t.scrollWidth-1,A.value=n>0):(D.value=n>0,A.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function ae(t){w!==null&&clearInterval(w),w=setInterval(()=>{qe(t)===!0&&S()},5)}function ne(){ae(J.value===!0?Number.MAX_SAFE_INTEGER:0)}function le(){ae(J.value===!0?0:Number.MAX_SAFE_INTEGER)}function S(){w!==null&&(clearInterval(w),w=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,f=>f===a||f.matches&&f.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(t===36)return B(n[0]),n[0].focus(),!0;if(t===35)return B(n[u-1]),n[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=s===!0?-1:i===!0?1:void 0;if(o!==void 0){const f=j.value===!0?-1:1,q=n.indexOf(a)+o*f;return q>=0&&q<u&&(B(n[q]),n[q].focus({preventScroll:!0})),!0}}const ye=d(()=>J.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function qe(t){const a=g.value,{get:n,set:u}=ye.value;let s=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(s=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(s=!0,i=t),u(a,i),$(),s}function oe(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function _e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:u,query:s}=c.$route,i=Object.keys(s).length;for(const o of n){const f=o.routeData.exact.value===!0;if(o.routeData[f===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:q,query:Y,matched:Ie,href:Pe}=o.routeData.resolvedLink.value,Z=Object.keys(Y).length;if(f===!0){if(q!==u||Z!==i||oe(s,Y)===!1)continue;t=o.name.value;break}if(q!==""&&q!==u||Z!==0&&oe(Y,s)===!1)continue;const L={matchedLen:Ie.length,queryDiff:i-Z,hrefLen:Pe.length-q.length};if(L.matchedLen>a.matchedLen){t=o.name.value,a=L;continue}else if(L.matchedLen!==a.matchedLen)continue;if(L.queryDiff<a.queryDiff)t=o.name.value,a=L;else if(L.queryDiff!==a.queryDiff)continue;L.hrefLen>a.hrefLen&&(t=o.name.value,a=L)}if(t===null&&l.some(o=>o.routeData===void 0&&o.name.value===C.value)===!0){z=!1;return}X({name:t,setCurrent:!0})}function Re(t){if(U(),m.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(m.value=!0,R.value===!0&&B(a))}}function ke(){Q(()=>{m.value=!1},30)}function E(){ie.avoidRouteWatcher===!1?P(_e):G()}function re(){if(y===void 0){const t=H(()=>c.$route.fullPath,E);y=()=>{t(),y=void 0}}}function Se(t){l.push(t),b.value++,V(),t.routeData===void 0||c.$route===void 0?P(()=>{if(R.value===!0){const a=C.value,n=a!=null&&a!==""?l.find(u=>u.name.value===a):null;n&&B(n.rootRef.value)}}):(re(),t.routeData.hasRouterLink.value===!0&&E())}function Le(t){l.splice(l.indexOf(t),1),b.value--,V(),y!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&y(),E())}const ie={currentModel:C,tabProps:k,hasFocus:m,hasActiveTab:he,registerTab:Se,unregisterTab:Le,verifyRouteModel:E,updateModel:X,onKbdNavigate:Ce,avoidRouteWatcher:!1};ze(de,ie);function ue(){v!==null&&clearTimeout(v),S(),y!==void 0&&y()}let se,z;return fe(ue),Ke(()=>{se=y!==void 0,ue()}),je(()=>{se===!0&&(re(),z=!0,E()),V()}),()=>h("div",{ref:I,class:me.value,role:"tablist",onFocusin:Re,onFocusout:ke},[h(He,{onResize:te}),h("div",{ref:g,class:Te.value,onScroll:$},Ve(x.default)),h(O,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S}),h(O,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:le,onTouchstartPassive:le,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S})])}});export{tt as Q,Ze as a,et as b,pe as u};