import{m as ae,n as se,a2 as ue,p as le,s as ie,q as re,i as M,j as r,a3 as ce,t as fe,v as de,x as ve,y as ge,z as he,w as A,I as me,aZ as Te,J as Pe,b$ as D,E as ye,k as R,G as ke,T as Se,B as xe,F as Be,c0 as Ce,c1 as qe,c2 as Oe,H as be,c3 as Ee}from"./index-D727oLxu.js";import{f as Fe,v as H,a as we,b as Me,c as Ae,r as K,s as De,p as z,e as Re}from"./position-engine-DHp4Evhk.js";const ze=ae({name:"QMenu",inheritAttrs:!1,props:{...Fe,...se,...ue,...le,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:H},self:{type:String,validator:H},offset:{type:Array,validator:we},scrollTarget:ie,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...re,"click","escapeKey"],setup(e,{slots:o,emit:n,attrs:s}){let a=null,v,c,g;const k=Be(),{proxy:h}=k,{$q:u}=h,l=M(null),i=M(!1),$=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),j=ce(e,u),{registerTick:Q,removeTick:W}=fe(),{registerTimeout:S}=de(),{transitionProps:G,transitionStyle:U}=ve(e),{localScrollTarget:x,changeScrollEvent:_,unconfigureScrollTarget:J}=Me(e,F),{anchorEl:f,canShow:L}=Ae({showing:i}),{hide:B}=ge({showing:i,canShow:L,handleShow:Y,handleHide:p,hideOnRouteChange:$,processOnMount:!0}),{showPortal:C,hidePortal:q,renderPortal:Z}=he(k,l,te,"menu"),m={anchorEl:f,innerRef:l,onClickOutside(t){if(e.persistent!==!0&&i.value===!0)return B(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&be(t),!0}},O=r(()=>z(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),N=r(()=>e.cover===!0?O.value:z(e.self||"top start",u.lang.rtl)),V=r(()=>(e.square===!0?" q-menu--square":"")+(j.value===!0?" q-menu--dark q-dark":"")),X=r(()=>e.autoClose===!0?{onClick:ee}:{}),b=r(()=>i.value===!0&&e.persistent!==!0);A(b,t=>{t===!0?(Ce(P),Re(m)):(D(P),K(m))});function T(){qe(()=>{let t=l.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function Y(t){if(a=e.noRefocus===!1?document.activeElement:null,me(w),C(),F(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const y=Te(t);if(y.left!==void 0){const{top:oe,left:ne}=f.value.getBoundingClientRect();v={left:y.left-ne,top:y.top-oe}}}c===void 0&&(c=A(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,d)),e.noFocus!==!0&&document.activeElement.blur(),Q(()=>{d(),e.noFocus!==!0&&T()}),S(()=>{u.platform.is.ios===!0&&(g=e.autoClose,l.value.click()),d(),C(!0),n("show",t)},e.transitionDuration)}function p(t){W(),q(),E(!0),a!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),S(()=>{q(!0),n("hide",t)},e.transitionDuration)}function E(t){v=void 0,c!==void 0&&(c(),c=void 0),(t===!0||i.value===!0)&&(Pe(w),J(),K(m),D(P)),t!==!0&&(a=null)}function F(){(f.value!==null||e.scrollTarget!==void 0)&&(x.value=ye(f.value,e.scrollTarget),_(x.value,d))}function ee(t){g!==!0?(Oe(h,t),n("click",t)):g=!1}function w(t){b.value===!0&&e.noFocus!==!0&&Ee(l.value,t.target)!==!0&&T()}function P(t){n("escapeKey"),B(t)}function d(){De({targetEl:l.value,offset:e.offset,anchorEl:f.value,anchorOrigin:O.value,selfOrigin:N.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function te(){return R(Se,G.value,()=>i.value===!0?R("div",{role:"menu",...s,ref:l,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,s.class],style:[s.style,U.value],...X.value},ke(o.default)):null)}return xe(E),Object.assign(h,{focus:T,updatePosition:d}),Z}}),I=["B","KB","MB","GB","TB","PB"];function Ie(e,o=1){let n=0;for(;parseInt(e,10)>=1024&&n<I.length-1;)e/=1024,++n;return`${e.toFixed(o)}${I[n]}`}function $e(e){return e.charAt(0).toUpperCase()+e.slice(1)}function je(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}function Qe(e,o,n){if(n<=o)return o;const s=n-o+1;let a=o+(e-o)%s;return a<o&&(a=s+a),a===0?0:a}function We(e,o=2,n="0"){if(e==null)return e;const s=""+e;return s.length>=o?s:new Array(o-s.length+1).join(n)+s}export{ze as Q,je as b,$e as c,Ie as h,Qe as n,We as p};