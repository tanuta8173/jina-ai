import{Q as ge}from"./QList-tKXbr30n.js";import{Q as T,a as re}from"./QImg--NoPG3tu.js";import{h as ie,ah as de,i,j as ce,N as he,M as we,ag as ye,u as me,bh as ve,bx as xe,aj as _e,aQ as qe,ak as d,al as f,am as n,ar as t,an as y,aE as c,l as u,az as g,ao as v,aw as U,at as q,au as m,av as a,ay as O,ap as F,aG as be,aJ as ne,ax as I,by as ke,Z as oe,bf as se}from"./index-D727oLxu.js";import{Q as Be}from"./QPage-Cud6xsSn.js";import{u as Re,T as Se}from"./useMetaTags-B-rW-V0B.js";import{F as Te}from"./FAQComponent-IyKXZp7D.js";import{a as Ce,Q as G,R as Qe,S as je,B as Le}from"./EmbeddingDialog-BV10pVA-.js";import{Q as A}from"./QTooltip-cQmx_kDf.js";import{Q as le}from"./QLinearProgress-B3BDCJ-Q.js";import{Q as Ue}from"./_setToArray-D1Cr36xF.js";import{c as Ie}from"./copy-to-clipboard-mFjN2wtY.js";import{P as Ae}from"./PricingComponent-fYwUlq7X.js";import{H as ze}from"./H2TitleBlock-CxZAXiDT.js";import{a as He}from"./QForm-BJtRyRIl.js";import"./QBadge-CbXHISwB.js";import"./QChip-BycOrEJU.js";import"./QTable-DZRnTQMC.js";import"./use-fullscreen-GYJw9Zib.js";import"./QExpansionItem-CnqnN8Qp.js";import"./finetune-CFmmJ5pS.js";import"./QTabs-CStWlAn0.js";import"./QResizeObserver-D9eB2JzT.js";import"./format-D12_ctTT.js";import"./position-engine-DHp4Evhk.js";import"./QSpace-C_HL6L8b.js";import"./embedding-B1GiGSKD.js";import"./blogs-BxOJouIJ.js";const De=ie({__name:"ReaderSearchDemoComponent",props:{originalURL:{type:String,default:""},disableQA:{type:Boolean,default:!1},disableOriginalURL:{type:Boolean,default:!1}},setup(C,{expose:r}){r();const{t:h}=de({useScope:"global"}),e=i(""),x=i(!1),w=i(!1),o=me(),s=["When was Jina AI founded?","What did Elon Musk say about Open AI recently?","When will the next SpaceX launch be?","What is the market cap of Apple today?","Who will win 2024 US presidential election?","Who is playing in the US Open final?"],Q=()=>s[Math.floor(Math.random()*s.length)],b=i(null);let _=null;const k=C,B=i(k.originalURL||Q()),W=ce(()=>`https://s.jina.ai/${encodeURIComponent(B.value)}`),N=i(null),j=i([]),R=i([]),z=i(!1),H=i(!1),D=i(!1),P=i(!1),M=async l=>{var $,ee,te;if(!await(($=N.value)==null?void 0:$.validate()))return Promise.reject();const V={parameters:{question:B.value,context:l?"":e.value.slice(0,3e3)}};l?(j.value=[],z.value=!0,D.value=!0):(R.value=[],H.value=!0,P.value=!0);const Z="https://api.promptperfect.jina.ai/ERK3nqviaFRyfGbkBsXD";try{const p=await fetch(Z,{headers:{"content-type":"application/json"},body:JSON.stringify(V),method:"POST"});if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);if((ee=p.headers.get("content-type"))!=null&&ee.includes("text/event-stream")){if(p.body){const L=p.body.getReader(),ue=new TextDecoder;for(;;){const{done:pe,value:ae}=await L.read();if(pe){l?D.value=!1:P.value=!1;break}ae&&ue.decode(ae).split(`

`).forEach(fe=>{const E=fe.replace(/data: /g,"");E&&(l?j.value.push(E):R.value.push(E))})}}}else if((te=p.headers.get("content-type"))!=null&&te.includes("application/json")){const L=(await p.json()).data;l?j.value=[L]:R.value=[L]}else throw new Error("Unknown response type")}catch(p){o.notify({color:"negative",message:h("landing_page.error",{message:p}),icon:"report_problem"})}finally{l?z.value=!1:H.value=!1}},J=async()=>{w.value=!0,R.value=[];try{const l=await fetch(W.value);if(!l.ok)throw e.value=`\`\`\`json
${await l.json()}
\`\`\``,new Error(`Request failed with status ${l.status}`);const S=await l.text();e.value=`\`\`\`plaintext
${S}
\`\`\``}catch(l){o.notify({message:l.message,color:"negative"})}finally{w.value=!1}},K=async()=>{await Promise.all([J(),M(!0)]),await M(!1)},X=()=>{var S;const l=((S=b.value)==null?void 0:S.$el)||b.value;l instanceof HTMLElement?(_=new IntersectionObserver(V=>{V[0].isIntersecting&&(K().then(()=>{}),_==null||_.disconnect())},{root:null,threshold:.1}),_.observe(l)):console.error("Element is not an HTMLElement:",l)};he(()=>{we(()=>{setTimeout(()=>{X()},100)})}),ye(()=>{_&&_.disconnect()});const Y={t:h,readerResult:e,isRawBusy:x,isReaderBusy:w,$q:o,randomURLs:s,randomURL:Q,componentRef:b,get observer(){return _},set observer(l){_=l},props:k,originalURL:B,readerURL:W,questionRef:N,rawAnswerChunks:j,readerAnswerChunks:R,rawAnswerIsBusy:z,readerAnswerIsBusy:H,rawAnswerIsStreaming:D,readerAnswerIsStreaming:P,askQuestion:M,fetchReaderURL:J,fetchBothURL:K,initIntersectionObserver:X,get copyToClipboard(){return Ie},get QInput(){return ve},TypingText:Ce,get redirect(){return xe}};return Object.defineProperty(Y,"__isScriptSetup",{enumerable:!1,value:!0}),Y}}),Pe={class:"text-caption text-bold text-dim"},Me={class:"text-caption text-bold text-dim"},Ve={class:"text-caption text-bold text-dim"};function Ee(C,r,h,e,x,w){const o=qe("q-markdown");return d(),f(be,{bordered:"",flat:"",square:"",class:"col-12 col-md-10",ref:"componentRef"},{default:n(()=>[t(c,{horizontal:e.$q.screen.gt.sm},{default:n(()=>[h.disableOriginalURL?U("",!0):(d(),y(v,{key:0},[t(c,{class:"col"},{default:n(()=>[t(e.QInput,{modelValue:e.originalURL,"onUpdate:modelValue":r[1]||(r[1]=s=>e.originalURL=s),label:e.t("reader.demo.your_query"),type:"url",loading:e.isRawBusy,hint:e.t("reader.demo.your_query_hint"),ref:"questionRef"},{prepend:n(()=>[t(u,{dense:"",square:"",flat:"",icon:"casino",onClick:r[0]||(r[0]=s=>e.originalURL=e.randomURL())})]),_:1},8,["modelValue","label","loading","hint"])]),_:1}),t(g,{vertical:e.$q.screen.gt.sm},null,8,["vertical"])],64)),t(c,{class:"col"},{default:n(()=>[t(e.QInput,{"model-value":`https://s.jina.ai/${e.originalURL}`,label:e.t("reader.demo.reader_url"),readonly:"",loading:e.isReaderBusy,"bottom-slots":""},{append:n(()=>[t(u,{flat:"",dense:"",square:"",icon:"content_copy",onClick:r[2]||(r[2]=s=>e.copyToClipboard(e.readerURL))},{default:n(()=>[t(A,null,{default:n(()=>[q(m(e.t("copy")),1)]),_:1})]),_:1}),t(u,{flat:"",dense:"",square:"",icon:"open_in_new",onClick:r[3]||(r[3]=s=>e.redirect(e.readerURL))},{default:n(()=>[t(A,null,{default:n(()=>[q(m(e.t("demo.open")),1)]),_:1})]),_:1})]),hint:n(()=>[q(m(e.t("reader.demo.reader_search_hint")),1)]),_:1},8,["model-value","label","loading"])]),_:1})]),_:1},8,["horizontal"]),t(g),t(u,{square:"",label:e.t("reader.demo.ask_llm"),class:"full-width",icon:"contact_support",onClick:e.fetchBothURL,padding:"md"},null,8,["label"]),e.readerAnswerIsBusy||e.rawAnswerIsBusy||e.isReaderBusy||e.readerAnswerChunks.length>0||e.rawAnswerChunks.length>0?(d(),y(v,{key:0},[t(g),t(c,{horizontal:e.$q.screen.gt.sm,class:"q-pa-none"},{default:n(()=>[t(c,{class:"col"},{default:n(()=>[a("span",Pe,m(e.t("reader.demo.ask_llm_directly")),1),e.rawAnswerIsBusy?(d(),f(c,{key:0},{default:n(()=>[t(O,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:n(()=>[t(A,null,{default:n(()=>[q(m(e.t("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),(d(),y(v,null,F([0,1,2,3],s=>t(G,{key:s,class:"q-my-xs",width:s>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(d(),y(v,{key:1},[t(c,{class:"q-pa-lg"},{default:n(()=>[t(e.TypingText,{text:e.rawAnswerChunks,"speed-time":e.rawAnswerChunks?50:0},null,8,["text","speed-time"])]),_:1}),e.rawAnswerIsStreaming?(d(),f(le,{key:0,indeterminate:""})):U("",!0)],64))]),_:1}),t(g,{vertical:e.$q.screen.gt.sm},null,8,["vertical"]),t(c,{class:"col"},{default:n(()=>[a("span",Me,m(e.t("reader.demo.reader_response")),1),e.isReaderBusy?(d(),f(c,{key:0},{default:n(()=>[(d(),y(v,null,F([100,300,200,200],s=>t(G,{type:"text",width:`${s}px`,key:s},null,8,["width"])),64))]),_:1})):(d(),f(o,{key:1,src:e.readerResult,"no-line-numbers":"",style:{"max-height":"300px"}},null,8,["src"]))]),_:1}),t(g,{vertical:e.$q.screen.gt.sm},null,8,["vertical"]),t(c,{class:"col"},{default:n(()=>[a("span",Ve,m(e.t("reader.demo.ask_llm_with_search_grounding")),1),t(Ue,{label:e.t("reader.demo.waiting_for_reader"),showing:e.isReaderBusy},null,8,["label","showing"]),e.readerAnswerIsBusy?(d(),f(c,{key:0},{default:n(()=>[t(O,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:n(()=>[t(A,null,{default:n(()=>[q(m(e.t("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),(d(),y(v,null,F([0,1,2,3],s=>t(G,{key:s,class:"q-my-xs",width:s>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(d(),y(v,{key:1},[t(c,{class:"q-pa-lg"},{default:n(()=>[t(e.TypingText,{text:e.readerAnswerChunks,"speed-time":e.readerAnswerIsStreaming?50:0},null,8,["text","speed-time"])]),_:1}),e.readerAnswerIsStreaming?(d(),f(le,{key:0,indeterminate:""})):U("",!0)],64))]),_:1})]),_:1},8,["horizontal"])],64)):U("",!0),t(g),t(c,{class:"text-dim"},{default:n(()=>[t(O,{name:"info"}),q(" "+m(e.t("reader.demo.search_query_rewrite")),1)]),_:1})]),_:1},512)}const Oe=_e(De,[["render",Ee],["__file","ReaderSearchDemoComponent.vue"]]),Fe=ie({__name:"ReaderPage",setup(C,{expose:r}){r();const{t:h}=de({useScope:"global"}),e=i(!1);Re({page:"reader",banner:"banner-reader-api.png",url:"reader"});const x=me(),w=[{label:"landing_page.get_api_now",icon:"code",anchor:"#apiform"},{label:"reader.demo.try_demo",icon:"play_arrow",anchor:"#demo"},{label:"landing_page.pricing",anchor:"#pricing",icon:"attach_money"}];function o(B){e.value=B,ne("#demo")}const s=ce(()=>{switch(x.screen.name){case"xl":return"lg";case"lg":return"lg";case"md":return"md";case"sm":return"md";case"xs":return"md";default:return"sm"}}),Q=i("https://example.com"),b=i("When was Jina AI founded?"),_=i("Jina AI was founded in 2020 in Berlin, Germany."),k={t:h,showSearchDemo:e,$q:x,titleButtons:w,moveToDemo:o,adaptiveSize:s,rawUrl:Q,rawQuery:b,rawGroundingQuestion:_,get locateByHash(){return ne},TitleBlock:Se,FAQComponent:Te,ReaderDemoComponent:Qe,ReaderSearchDemoComponent:Oe,PricingComponent:Ae,SeFoComponent:je,H2TitleBlock:ze,RateLimitComponent:He,BasicUsage:Le};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}),Ge="/assets/explain-EQrFe5k3.svg",We="/assets/explain3-CqNg2V0h.svg",Ne="/assets/explain5-CKbWV5a5.svg",Je="/assets/explain2-BYDhf_rF.svg",Ke="/assets/explain4-CPLfQrjf.png",Xe={class:"col-12 col-md-11 q-py-xl q-mx-xs-xs q-mx-sm-sm q-mx-md-md q-mx-lg-lg q-mx-xl-xl q-ma-xl relative-position"},Ye={class:"row justify-center items-center"},Ze={class:"row justify-center items-center"},$e={class:"col-11 col-md-8"},et={class:"q-my-xl row justify-center items-center"},tt={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},at={class:"q-my-xl row justify-center items-center"},rt={class:"row justify-center items-center"},nt={class:"col-11 col-md-8"},ot={class:"q-my-xl row justify-center items-center"},st={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},lt=["innerHTML"],it={class:"q-my-xl row justify-center items-center"},dt={class:"row justify-center items-center"},ct={class:"col-11 col-md-8"},mt={class:"q-my-xl row justify-center items-center"},_t={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},ut=["innerHTML"],pt={class:"q-my-xl row justify-center items-center"},ft={class:"row justify-center items-center"},gt={class:"col-11 col-md-8"},ht={class:"q-my-xl row justify-center items-center"},wt={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},yt={class:"row q-py-xl justify-center items-center"},vt={class:"col-11 col-md-8"},xt={class:"q-my-xl row justify-center items-center"},qt={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},bt=["innerHTML"],kt={class:"q-my-xl row justify-center"},Bt={class:"q-my-xl row justify-center items-center",id:"rate-limit"},Rt={class:"col-11 col-md-8 text-subtitle1 q-my-lg",style:{"white-space":"pre-line"}},St={class:"q-my-xl row justify-center items-center text-subtitle1"},Tt={class:"q-my-xl row justify-center items-center text-subtitle1"},Ct={class:"q-my-xl row justify-center items-center"},Qt={class:"q-my-xl row justify-center items-center"},jt={class:"row justify-center"},Lt={class:"col-12 col-sm-11 col-md-10 q-pb-xl"};function Ut(C,r,h,e,x,w){return d(),f(Be,null,{default:n(()=>[a("div",{class:I(["row justify-center items-center img-bg q-py-xl",e.$q.screen.lt.sm?"q-px-md":"q-px-xl"])},[a("div",Xe,[t(e.TitleBlock,{title:e.t("landing_page.reader"),tagline:e.t("reader.reader_description"),"large-title":!0,buttons:e.titleButtons},null,8,["title","tagline"])])],2),a("div",Ye,[t(ge,{class:"col-11 col-md-8 col-lg-6 q-py-xl"},{default:n(()=>[t(e.BasicUsage,{"raw-url":e.rawUrl,"onUpdate:rawUrl":r[0]||(r[0]=o=>e.rawUrl=o),"raw-query":e.rawQuery,"onUpdate:rawQuery":r[1]||(r[1]=o=>e.rawQuery=o),"raw-grounding-question":e.rawGroundingQuestion,"onUpdate:rawGroundingQuestion":r[2]||(r[2]=o=>e.rawGroundingQuestion=o)},null,8,["raw-url","raw-query","raw-grounding-question"])]),_:1})]),a("div",{class:I(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"what_reader"},[t(e.H2TitleBlock,{title:"reader.what_is1",anchor:"what_reader"}),a("div",Ze,[a("div",$e,[t(T,{src:Ge})])]),a("div",et,[a("div",tt,m(e.t("reader.what_is_answer_long")),1)]),a("div",at,[t(u,{label:e.t("reader.demo.show_read_demo"),icon:"play_arrow",outline:"",padding:"lg",square:"",onClick:r[3]||(r[3]=o=>e.moveToDemo(!1))},null,8,["label"])]),t(e.H2TitleBlock,{title:"reader.reader_do_search"}),a("div",rt,[a("div",nt,[t(T,{src:We})])]),a("div",ot,[a("div",st,[a("span",{innerHTML:e.t("reader.reader_do_search_explain")},null,8,lt)])]),a("div",it,[t(u,{label:e.t("reader.demo.show_search_demo"),icon:"play_arrow",outline:"",padding:"lg",square:"",onClick:r[4]||(r[4]=o=>e.moveToDemo(!0))},null,8,["label"])]),t(e.H2TitleBlock,{title:"reader.reader_do_grounding"}),a("div",dt,[a("div",ct,[t(T,{src:Ne})])]),a("div",mt,[a("div",_t,[a("span",{innerHTML:e.t("reader.reader_do_grounding_explain")},null,8,ut)])]),a("div",pt,[t(u,{label:e.t("reader.read_grounding_release_note"),outline:"",padding:"lg",square:"",to:"/news/fact-checking-with-new-grounding-api-in-jina-reader"},null,8,["label"])]),t(e.H2TitleBlock,{title:"reader.reader_reads_images"}),a("div",ft,[a("div",gt,[t(T,{src:Je})])]),a("div",ht,[a("div",wt,m(e.t("reader.reader_also_read_images")),1)]),t(e.H2TitleBlock,{title:"reader.reader_reads_pdf"}),a("div",yt,[a("div",vt,[t(T,{src:Ke})])]),a("div",xt,[a("div",qt,[a("span",{innerHTML:e.t("reader.reader_do_pdf_explain")},null,8,bt)])]),a("div",kt,[t(re,{flat:"",outline:"",square:""},{default:n(()=>[t(u,{label:e.t("reader.original_pdf"),href:"https://www.nasa.gov/wp-content/uploads/2023/01/55583main_vision_space_exploration2.pdf",outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",target:"_blank",icon:"open_in_new"},null,8,["label","size","padding"]),t(g),t(u,{label:e.t("reader.reader_result"),href:"https://r.jina.ai/https://www.nasa.gov/wp-content/uploads/2023/01/55583main_vision_space_exploration2.pdf",outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",target:"_blank",icon:"open_in_new"},null,8,["label","size","padding"])]),_:1})]),t(e.H2TitleBlock,{title:"reader.is_free",subtitle:"reader.is_free_description"}),a("div",Bt,[a("div",Rt,[t(e.RateLimitComponent)])]),a("div",St,m(e.t("reader.dont_panic_api_key_is_free")),1),a("div",Tt,[t(re,{outline:"",square:""},{default:n(()=>[t(u,{label:e.t("get_new_key"),onClick:r[5]||(r[5]=o=>e.locateByHash("#apiform")),outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",icon:"key"},null,8,["label","size","padding"]),t(g),t(u,{label:e.t("reader.check_price_table"),onClick:r[6]||(r[6]=o=>e.locateByHash("#pricing")),outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",icon:"attach_money"},null,8,["label","size","padding"])]),_:1})])],2),a("div",{class:I(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"demo"},[t(e.H2TitleBlock,{title:"reader.demo.tagline",anchor:"demo"}),a("div",Ct,[t(ke,{modelValue:e.showSearchDemo,"onUpdate:modelValue":r[7]||(r[7]=o=>e.showSearchDemo=o),size:"xl",label:e.showSearchDemo?e.t("reader.demo.show_read_demo"):e.t("reader.demo.show_search_demo"),"checked-icon":"search","unchecked-icon":"double_arrow"},null,8,["modelValue","label"])]),a("div",Qt,[oe(t(e.ReaderSearchDemoComponent,null,null,512),[[se,e.showSearchDemo]]),oe(t(e.ReaderDemoComponent,null,null,512),[[se,!e.showSearchDemo]])])],2),a("div",{class:I(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"apiform"},[t(e.H2TitleBlock,{title:"reader.title",subtitle:"reader.reader_description",anchor:"apiform"}),a("div",jt,[a("div",Lt,[t(e.SeFoComponent,{"show-function":"reader"})])])],2),t(e.PricingComponent),t(e.FAQComponent,{"faq-sources":["reader.faq_v1","api_general_faq","billing_general_faq"]})]),_:1})}const da=_e(Fe,[["render",Ut],["__scopeId","data-v-9a2e3446"],["__file","ReaderPage.vue"]]);export{da as default};