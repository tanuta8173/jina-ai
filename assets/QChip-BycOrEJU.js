import{m as h,j as t,k as i,G as x,a2 as y,bY as C,a3 as B,bZ as w,ab as I,ay as r,b_ as R,bd as L,F as Q,H as z}from"./index-D727oLxu.js";const j=h({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const a=t(()=>parseInt(e.lines,10)),n=t(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),c=t(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>i("div",{style:c.value,class:n.value},x(o.default))}}),D={xs:8,sm:10,md:14,lg:20,xl:24},A=h({name:"QChip",props:{...y,...C,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:a}){const{proxy:{$q:n}}=Q(),c=B(e,n),m=w(e,D),f=t(()=>e.selected===!0||e.icon!==void 0),q=t(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),_=t(()=>e.iconRemove||n.iconSet.chip.remove),s=t(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=t(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(s.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(c.value===!0?" q-chip--dark q-dark":"")}),d=t(()=>{const l=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},u={...l,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:l,remove:u}});function k(l){l.keyCode===13&&b(l)}function b(l){e.disable||(a("update:selected",!e.selected),a("click",l))}function v(l){(l.keyCode===void 0||l.keyCode===13)&&(z(l),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function S(){const l=[];s.value===!0&&l.push(i("div",{class:"q-focus-helper"})),f.value===!0&&l.push(i(r,{class:"q-chip__icon q-chip__icon--left",name:q.value}));const u=e.label!==void 0?[i("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(i("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},R(o.default,u))),e.iconRight&&l.push(i(r,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(i(r,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:_.value,...d.value.remove,onClick:v,onKeyup:v})),l}return()=>{if(e.modelValue===!1)return;const l={class:g.value,style:m.value};return s.value===!0&&Object.assign(l,d.value.chip,{onClick:b,onKeyup:k}),I("div",l,S(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[L,e.ripple]])}}});export{j as Q,A as a};