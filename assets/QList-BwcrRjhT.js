import{m as n,aq as d,ar as u,j as t,k as i,G as c,F as g}from"./index-D0osYMM3.js";const q=["ul","ol"],k=n({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const s=g(),r=u(e,s.proxy.$q),o=t(()=>q.includes(e.tag)?null:"list"),l=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:l.value,role:o.value},c(a.default))}});export{k as Q};