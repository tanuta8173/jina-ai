import{j as i,w as o,co as t,c7 as u,c6 as l,ag as v,cp as c}from"./index-DjA45p72.js";function p(a){{const e={active:!0};if(typeof a=="function"){const n=i(a);e.val=n.value,o(n,s=>{e.val=s,e.active===!0&&t()})}else e.val=a;c.push(e),t(),u(()=>{e.active=!0,t()}),l(()=>{e.active=!1,t()}),v(()=>{c.splice(c.indexOf(e),1),t()})}}export{p as u};