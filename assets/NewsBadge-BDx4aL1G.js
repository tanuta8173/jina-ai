import{a as n}from"./QItemLabel-BtjgGvL2.js";import{h as _,aa as i,W as d,X as s,a0 as l,Y as o,a9 as p,a2 as u,a1 as m}from"./index-DjA45p72.js";const b=_({__name:"NewsBadge",props:{news:{}},setup(c,{expose:r}){r();const{t:a}=i({useScope:"global"}),e={t:a};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function f(c,r,a,e,g,w){return s(),l(u,null,[a.news.featured?(s(),o(n,{key:0,label:e.t("blog_tags.featured"),size:"sm",outline:"",square:"",class:"non-selectable no-border-radius",icon:"star"},null,8,["label"])):p("",!0),(s(!0),l(u,null,m(a.news.tags,t=>(s(),o(n,{key:t.id,size:"sm",outline:"",square:"",class:"non-selectable no-border-radius",label:e.t(`blog_tags.${t.slug}`)},null,8,["label"]))),128))],64)}const N=d(b,[["render",f],["__file","NewsBadge.vue"]]);export{N};