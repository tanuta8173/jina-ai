import{m as te,n as oe,p as T,s as ae,q as ne,i as C,j as f,t as ie,v as se,x as le,y as re,z as ue,w as E,B as k,C as x,D as H,E as ce,k as q,T as de,F as fe,G as he,H as ve}from"./index-DjA45p72.js";import{u as ge,v as A,a as me,b as Te,c as ye,r as D,s as pe,d as j,p as M,e as Se}from"./position-engine-KELtLTkX.js";const we=te({name:"QTooltip",inheritAttrs:!1,props:{...ge,...oe,...T,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...T.transitionShow,default:"jump-down"},transitionHide:{...T.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:ae,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ne],setup(e,{slots:L,emit:y,attrs:h}){let i,s;const v=fe(),{proxy:{$q:o}}=v,l=C(null),c=C(!1),B=f(()=>M(e.anchor,o.lang.rtl)),Q=f(()=>M(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ie(),{registerTimeout:d}=se(),{transitionProps:_,transitionStyle:z}=le(e),{localScrollTarget:p,changeScrollEvent:F,unconfigureScrollTarget:G}=Te(e,w),{anchorEl:a,canShow:I,anchorEvents:r}=ye({showing:c,configureAnchorEl:Y}),{show:U,hide:g}=re({showing:c,canShow:I,handleShow:$,handleHide:J,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:K,delayHide:X});const{showPortal:S,hidePortal:b,renderPortal:V}=ue(v,l,ee,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:l,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(m,n=>{(n===!0?Se:D)(t)}),k(()=>{D(t)})}function $(t){S(),N(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=E(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{S(!0),y("show",t)},e.transitionDuration)}function J(t){R(),b(),P(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),G(),x(r,"tooltipTemp")}function u(){pe({targetEl:l.value,offset:e.offset,anchorEl:a.value,anchorOrigin:B.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function K(t){if(o.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[m,O,"delayHide","passiveCapture"]);H(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function X(t){o.platform.is.mobile===!0&&(x(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];H(r,"anchor",t)}function w(){if(a.value!==null||e.scrollTarget!==void 0){p.value=ce(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;F(p.value,t)}}function Z(){return c.value===!0?q("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,z.value],role:"tooltip"},he(L.default)):null}function ee(){return q(de,_.value,Z)}return k(P),Object.assign(v.proxy,{updatePosition:u}),V}});export{we as Q};