import{Q as he}from"./QList-BwcrRjhT.js";import{Q as T,a as oe}from"./QBtnGroup-649K0NLP.js";import{h as de,aa as ce,i as d,j as me,N as we,M as ye,ag as ve,u as _e,aY as xe,az as qe,W as ue,bh as be,X as i,Y as g,Z as o,$ as a,a0 as y,a3 as c,l as u,al as h,a2 as v,a9 as C,af as x,a8 as _,a7 as t,a6 as O,a1 as G,a4 as ke,aG as ne,a5 as A,am as Be,aE as se,aF as le}from"./index-D0osYMM3.js";import{Q as Se}from"./QPage-CRUd-PPp.js";import{u as Te}from"./useMetaTags-DHTU-o8q.js";import{T as Ce}from"./TitleBlock-CyEVQ6CH.js";import{F as Re}from"./FAQComponent-DdRtXkkp.js";import{T as Qe,b as W,R as je,S as Le,B as Ue}from"./SeFoComponent-CzKLDvO0.js";import{Q as I}from"./QTooltip-CcjrvlUD.js";import{a as ie}from"./QLinearProgress-BP_OCvG8.js";import{Q as Ae}from"./finetune-DybzJoN6.js";import{c as Ie}from"./copy-to-clipboard-CKU5dFH4.js";import{u as ze}from"./embedding-DxS7UY4P.js";import{P as He}from"./PricingComponent-V0BsIhrU.js";import{H as De}from"./H2TitleBlock-CCZiPho2.js";import{b as Pe}from"./QForm-E5vAsKil.js";import"./QBadge-5kQnognc.js";import"./QItemLabel-Dwod2HLb.js";import"./QTable-CZJL_T3A.js";import"./use-fullscreen-BO2qVHth.js";import"./QExpansionItem-BmF5otaI.js";import"./QTabs-D3R9_9hg.js";import"./QResizeObserver-DDyzIK6F.js";import"./format-Du4tGnpb.js";import"./position-engine-BdefeX0w.js";import"./QSpace-Dq58H64T.js";import"./orderBy-CAlA4XyW.js";import"./use-meta-CE40-SHg.js";import"./blogs-zPl5YZUK.js";const Ee=de({__name:"ReaderSearchDemoComponent",props:{originalURL:{type:String,default:""},disableQA:{type:Boolean,default:!1},disableOriginalURL:{type:Boolean,default:!1}},setup(R,{expose:r}){r();const{t:w}=ce({useScope:"global"}),e=ze(),p=d(""),q=d(!1),n=d(!1),s=_e(),b=["When was Jina AI founded?","What did Elon Musk say about Open AI recently?","When will the next SpaceX launch be?","What is the market cap of Apple today?","Who will win 2024 US presidential election?","Who is playing in the US Open final?"],Q=()=>b[Math.floor(Math.random()*b.length)],k=d(null);let m=null;const j=R,z=d(j.originalURL||Q()),N=me(()=>`https://s.jina.ai/${encodeURIComponent(z.value)}`),J=d(null),L=d(""),B=d(""),H=d(!1),D=d(!1),P=d(!1),E=d(!1),M=async l=>{var ee,ae,te;if(!await((ee=J.value)==null?void 0:ee.validate()))return Promise.reject();const V={parameters:{question:z.value,context:l?"":p.value.slice(0,3e3)}};l?(L.value="",H.value=!0,P.value=!0):(B.value="",D.value=!0,E.value=!0);const $="https://api.promptperfect.jina.ai/ERK3nqviaFRyfGbkBsXD";try{const f=await fetch($,{headers:{"content-type":"application/json"},body:JSON.stringify(V),method:"POST"});if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);if((ae=f.headers.get("content-type"))!=null&&ae.includes("text/event-stream")){if(f.body){const U=f.body.getReader(),pe=new TextDecoder;for(;;){const{done:fe,value:re}=await U.read();if(fe){l?P.value=!1:E.value=!1;break}re&&pe.decode(re).split(`

`).forEach(ge=>{const F=ge.replace(/data: /g,"");F&&(l?L.value+=F:B.value+=F)})}}}else if((te=f.headers.get("content-type"))!=null&&te.includes("application/json")){const U=(await f.json()).data;l?L.value=U:B.value=U}else throw new Error("Unknown response type")}catch(f){s.notify({color:"negative",message:w("landing_page.error",{message:f}),icon:"report_problem"})}finally{l?H.value=!1:D.value=!1}},K=async()=>{n.value=!0,B.value="";try{const l=await fetch(N.value,{method:"GET",headers:{Authorization:`Bearer ${e.apiKey}`}});if(!l.ok)throw p.value=`\`\`\`json
${await l.json()}
\`\`\``,new Error(`Request failed with status ${l.status}`);const S=await l.text();p.value=`\`\`\`plaintext
${S}
\`\`\``}catch(l){s.notify({message:l.message,color:"negative"})}finally{n.value=!1}},X=async()=>{await Promise.all([K(),M(!0)]),await M(!1)},Y=()=>{var S;const l=((S=k.value)==null?void 0:S.$el)||k.value;l instanceof HTMLElement?(m=new IntersectionObserver(V=>{V[0].isIntersecting&&(X().then(()=>{}),m==null||m.disconnect())},{root:null,threshold:.1}),m.observe(l)):console.error("Element is not an HTMLElement:",l)};we(()=>{ye(()=>{setTimeout(()=>{Y()},100)})}),ve(()=>{m&&m.disconnect()});const Z={t:w,embeddingStore:e,readerResult:p,isRawBusy:q,isReaderBusy:n,$q:s,randomURLs:b,randomURL:Q,componentRef:k,get observer(){return m},set observer(l){m=l},props:j,originalURL:z,readerURL:N,questionRef:J,rawAnswerChunks:L,readerAnswerChunks:B,rawAnswerIsBusy:H,readerAnswerIsBusy:D,rawAnswerIsStreaming:P,readerAnswerIsStreaming:E,askQuestion:M,fetchReaderURL:K,fetchBothURL:X,initIntersectionObserver:Y,get copyToClipboard(){return Ie},get QInput(){return xe},TypingText:Qe,get redirect(){return qe}};return Object.defineProperty(Z,"__isScriptSetup",{enumerable:!1,value:!0}),Z}}),Me={class:"text-caption text-bold text-dim"},Ve={class:"text-caption text-bold text-dim"},Fe={class:"text-caption text-bold text-dim"};function Oe(R,r,w,e,p,q){const n=be("q-markdown");return i(),g(ke,{bordered:"",flat:"",square:"",class:"col-12 col-md-10",ref:"componentRef"},{default:o(()=>[a(c,{horizontal:e.$q.screen.gt.sm},{default:o(()=>[w.disableOriginalURL?C("",!0):(i(),y(v,{key:0},[a(c,{class:"col"},{default:o(()=>[a(e.QInput,{modelValue:e.originalURL,"onUpdate:modelValue":r[1]||(r[1]=s=>e.originalURL=s),label:e.t("reader.demo.your_query"),type:"url",loading:e.isRawBusy,hint:e.t("reader.demo.your_query_hint"),ref:"questionRef"},{prepend:o(()=>[a(u,{dense:"",square:"",flat:"",icon:"casino",onClick:r[0]||(r[0]=s=>e.originalURL=e.randomURL())})]),_:1},8,["modelValue","label","loading","hint"])]),_:1}),a(h,{vertical:e.$q.screen.gt.sm},null,8,["vertical"])],64)),a(c,{class:"col"},{default:o(()=>[a(e.QInput,{"model-value":`https://s.jina.ai/${e.originalURL}`,label:e.t("reader.demo.reader_url"),readonly:"",loading:e.isReaderBusy,"bottom-slots":""},{append:o(()=>[a(u,{flat:"",dense:"",square:"",icon:"content_copy",onClick:r[2]||(r[2]=s=>e.copyToClipboard(e.readerURL))},{default:o(()=>[a(I,null,{default:o(()=>[x(_(e.t("copy")),1)]),_:1})]),_:1}),a(u,{flat:"",dense:"",square:"",icon:"open_in_new",onClick:r[3]||(r[3]=s=>e.redirect(e.readerURL))},{default:o(()=>[a(I,null,{default:o(()=>[x(_(e.t("demo.open")),1)]),_:1})]),_:1})]),hint:o(()=>[x(_(e.t("reader.demo.reader_search_hint")),1)]),_:1},8,["model-value","label","loading"])]),_:1})]),_:1},8,["horizontal"]),a(h),a(u,{square:"",label:e.t("reader.demo.ask_llm"),class:"full-width",icon:"contact_support",onClick:e.fetchBothURL,padding:"md"},null,8,["label"]),e.readerAnswerIsBusy||e.rawAnswerIsBusy||e.isReaderBusy||e.readerAnswerChunks||e.rawAnswerChunks?(i(),y(v,{key:0},[a(h),a(c,{horizontal:e.$q.screen.gt.sm,class:"q-pa-none"},{default:o(()=>[a(c,{class:"col answer-panel overflow-auto"},{default:o(()=>[t("span",Me,_(e.t("reader.demo.ask_llm_directly")),1),e.rawAnswerIsBusy&&!e.rawAnswerChunks?(i(),g(c,{key:0},{default:o(()=>[a(O,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:o(()=>[a(I,null,{default:o(()=>[x(_(e.t("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),(i(),y(v,null,G([0,1,2,3],s=>a(W,{key:s,class:"q-my-xs",width:s>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(i(),y(v,{key:1},[a(c,{class:"q-pa-lg"},{default:o(()=>[a(e.TypingText,{text:e.rawAnswerChunks,loading:e.rawAnswerIsStreaming,"show-copy":!1},null,8,["text","loading"])]),_:1}),e.rawAnswerIsStreaming?(i(),g(ie,{key:0,class:"absolute-bottom",indeterminate:""})):C("",!0)],64))]),_:1}),a(h,{vertical:e.$q.screen.gt.sm},null,8,["vertical"]),a(c,{class:"col answer-panel overflow-auto"},{default:o(()=>[t("span",Ve,_(e.t("reader.demo.reader_response")),1),e.isReaderBusy?(i(),g(c,{key:0},{default:o(()=>[(i(),y(v,null,G([100,300,200,200],s=>a(W,{type:"text",width:`${s}px`,key:s},null,8,["width"])),64))]),_:1})):(i(),g(n,{key:1,src:e.readerResult,"copy-icon":"content_copy","no-line-numbers":""},null,8,["src"]))]),_:1}),a(h,{vertical:e.$q.screen.gt.sm},null,8,["vertical"]),a(c,{class:"col relative-position answer-panel overflow-auto"},{default:o(()=>[t("span",Fe,_(e.t("reader.demo.ask_llm_with_search_grounding")),1),a(Ae,{label:e.t("reader.demo.waiting_for_reader"),showing:e.isReaderBusy},null,8,["label","showing"]),e.readerAnswerIsBusy&&!e.readerAnswerChunks?(i(),g(c,{key:0},{default:o(()=>[a(O,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:o(()=>[a(I,null,{default:o(()=>[x(_(e.t("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),(i(),y(v,null,G([0,1,2,3],s=>a(W,{key:s,class:"q-my-xs",width:s>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(i(),y(v,{key:1},[e.readerAnswerChunks?(i(),g(c,{key:0,class:"q-pa-lg"},{default:o(()=>[a(e.TypingText,{text:e.readerAnswerChunks,loading:e.readerAnswerIsStreaming,"show-copy":!1},null,8,["text","loading"])]),_:1})):C("",!0),e.readerAnswerIsStreaming?(i(),g(ie,{key:1,class:"absolute-bottom",indeterminate:""})):C("",!0)],64))]),_:1})]),_:1},8,["horizontal"])],64)):C("",!0),a(h),a(c,{class:"text-dim"},{default:o(()=>[a(O,{name:"info"}),x(" "+_(e.t("reader.demo.search_query_rewrite")),1)]),_:1})]),_:1},512)}const Ge=ue(Ee,[["render",Oe],["__scopeId","data-v-4c2e4c35"],["__file","ReaderSearchDemoComponent.vue"]]),We=de({__name:"ReaderPage",setup(R,{expose:r}){r();const{t:w}=ce({useScope:"global"}),e=d(!1);Te({page:"reader",banner:"banner-reader-api.png",url:"reader"});const p=_e(),q=[{label:"landing_page.get_api_now",icon:"code",anchor:"#apiform"},{label:"reader.demo.try_demo",icon:"play_arrow",anchor:"#demo"},{label:"landing_page.pricing",anchor:"#pricing",icon:"attach_money"}];function n(j){e.value=j,ne("#demo")}const s=me(()=>{switch(p.screen.name){case"xl":return"lg";case"lg":return"lg";case"md":return"md";case"sm":return"md";case"xs":return"md";default:return"sm"}}),b=d("https://example.com"),Q=d("When was Jina AI founded?"),k=d("Jina AI was founded in 2020 in Berlin, Germany."),m={t:w,showSearchDemo:e,$q:p,titleButtons:q,moveToDemo:n,adaptiveSize:s,rawUrl:b,rawQuery:Q,rawGroundingQuestion:k,get locateByHash(){return ne},TitleBlock:Ce,FAQComponent:Re,ReaderDemoComponent:je,ReaderSearchDemoComponent:Ge,PricingComponent:He,SeFoComponent:Le,H2TitleBlock:De,RateLimitComponent:Pe,BasicUsage:Ue};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),Ne="/assets/explain-EQrFe5k3.svg",Je="/assets/explain3-CqNg2V0h.svg",Ke="/assets/explain5-CKbWV5a5.svg",Xe="/assets/explain2-BYDhf_rF.svg",Ye="/assets/explain4-CPLfQrjf.png",Ze={class:"col-12 col-md-11 q-py-xl q-mx-xs-xs q-mx-sm-sm q-mx-md-md q-mx-lg-lg q-mx-xl-xl q-ma-xl relative-position"},$e={class:"row justify-center items-center"},ea={class:"row justify-center items-center"},aa={class:"col-11 col-md-8"},ta={class:"q-my-xl row justify-center items-center"},ra={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},oa={class:"q-my-xl row justify-center items-center"},na={class:"row justify-center items-center"},sa={class:"col-11 col-md-8"},la={class:"q-my-xl row justify-center items-center"},ia={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},da=["innerHTML"],ca={class:"q-my-xl row justify-center items-center"},ma={class:"row justify-center items-center"},_a={class:"col-11 col-md-8"},ua={class:"q-my-xl row justify-center items-center"},pa={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},fa=["innerHTML"],ga={class:"q-my-xl row justify-center items-center"},ha={class:"row justify-center items-center"},wa={class:"col-11 col-md-8"},ya={class:"q-my-xl row justify-center items-center"},va={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},xa={class:"row q-py-xl justify-center items-center"},qa={class:"col-11 col-md-8"},ba={class:"q-my-xl row justify-center items-center"},ka={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},Ba=["innerHTML"],Sa={class:"q-my-xl row justify-center"},Ta={class:"q-my-xl row justify-center items-center",id:"rate-limit"},Ca={class:"col-11 col-md-8 text-subtitle1 q-my-lg",style:{"white-space":"pre-line"}},Ra={class:"q-my-xl row justify-center items-center text-subtitle1"},Qa={class:"q-my-xl row justify-center items-center text-subtitle1"},ja={class:"q-my-xl row justify-center items-center"},La={class:"q-my-xl row justify-center items-center"},Ua={class:"row justify-center"},Aa={class:"col-12 col-sm-11 col-md-10 q-pb-xl"};function Ia(R,r,w,e,p,q){return i(),g(Se,null,{default:o(()=>[t("div",{class:A(["row justify-center items-center img-bg q-py-xl",e.$q.screen.lt.sm?"q-px-md":"q-px-xl"])},[t("div",Ze,[a(e.TitleBlock,{title:e.t("landing_page.reader"),tagline:e.t("reader.reader_description"),"large-title":!0,buttons:e.titleButtons},null,8,["title","tagline"])])],2),t("div",$e,[a(he,{class:"col-11 col-md-8 col-lg-6 q-py-xl"},{default:o(()=>[a(e.BasicUsage,{"raw-url":e.rawUrl,"onUpdate:rawUrl":r[0]||(r[0]=n=>e.rawUrl=n),"raw-query":e.rawQuery,"onUpdate:rawQuery":r[1]||(r[1]=n=>e.rawQuery=n),"raw-grounding-question":e.rawGroundingQuestion,"onUpdate:rawGroundingQuestion":r[2]||(r[2]=n=>e.rawGroundingQuestion=n)},null,8,["raw-url","raw-query","raw-grounding-question"])]),_:1})]),t("div",{class:A(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"what_reader"},[a(e.H2TitleBlock,{title:"reader.what_is1",anchor:"what_reader"}),t("div",ea,[t("div",aa,[a(T,{src:Ne})])]),t("div",ta,[t("div",ra,_(e.t("reader.what_is_answer_long")),1)]),t("div",oa,[a(u,{label:e.t("reader.demo.show_read_demo"),icon:"play_arrow",outline:"",padding:"lg",square:"",onClick:r[3]||(r[3]=n=>e.moveToDemo(!1))},null,8,["label"])]),a(e.H2TitleBlock,{title:"reader.reader_do_search"}),t("div",na,[t("div",sa,[a(T,{src:Je})])]),t("div",la,[t("div",ia,[t("span",{innerHTML:e.t("reader.reader_do_search_explain")},null,8,da)])]),t("div",ca,[a(u,{label:e.t("reader.demo.show_search_demo"),icon:"play_arrow",outline:"",padding:"lg",square:"",onClick:r[4]||(r[4]=n=>e.moveToDemo(!0))},null,8,["label"])]),a(e.H2TitleBlock,{title:"reader.reader_do_grounding"}),t("div",ma,[t("div",_a,[a(T,{src:Ke})])]),t("div",ua,[t("div",pa,[t("span",{innerHTML:e.t("reader.reader_do_grounding_explain")},null,8,fa)])]),t("div",ga,[a(u,{label:e.t("reader.read_grounding_release_note"),outline:"",padding:"lg",square:"",to:"/news/fact-checking-with-new-grounding-api-in-jina-reader"},null,8,["label"])]),a(e.H2TitleBlock,{title:"reader.reader_reads_images"}),t("div",ha,[t("div",wa,[a(T,{src:Xe})])]),t("div",ya,[t("div",va,_(e.t("reader.reader_also_read_images")),1)]),a(e.H2TitleBlock,{title:"reader.reader_reads_pdf"}),t("div",xa,[t("div",qa,[a(T,{src:Ye})])]),t("div",ba,[t("div",ka,[t("span",{innerHTML:e.t("reader.reader_do_pdf_explain")},null,8,Ba)])]),t("div",Sa,[a(oe,{flat:"",outline:"",square:""},{default:o(()=>[a(u,{label:e.t("reader.original_pdf"),href:"https://www.nasa.gov/wp-content/uploads/2023/01/55583main_vision_space_exploration2.pdf",outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",target:"_blank",icon:"open_in_new"},null,8,["label","size","padding"]),a(h),a(u,{label:e.t("reader.reader_result"),href:"https://r.jina.ai/https://www.nasa.gov/wp-content/uploads/2023/01/55583main_vision_space_exploration2.pdf",outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",target:"_blank",icon:"open_in_new"},null,8,["label","size","padding"])]),_:1})]),a(e.H2TitleBlock,{title:"reader.is_free",subtitle:"reader.is_free_description"}),t("div",Ta,[t("div",Ca,[a(e.RateLimitComponent)])]),t("div",Ra,_(e.t("reader.dont_panic_api_key_is_free")),1),t("div",Qa,[a(oe,{outline:"",square:""},{default:o(()=>[a(u,{label:e.t("get_new_key"),onClick:r[5]||(r[5]=n=>e.locateByHash("#apiform")),outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",icon:"key"},null,8,["label","size","padding"]),a(h),a(u,{label:e.t("reader.check_price_table"),onClick:r[6]||(r[6]=n=>e.locateByHash("#pricing")),outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",icon:"attach_money"},null,8,["label","size","padding"])]),_:1})])],2),t("div",{class:A(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"demo"},[a(e.H2TitleBlock,{title:"reader.demo.tagline",anchor:"demo"}),t("div",ja,[a(Be,{modelValue:e.showSearchDemo,"onUpdate:modelValue":r[7]||(r[7]=n=>e.showSearchDemo=n),size:"xl",label:e.showSearchDemo?e.t("reader.demo.show_read_demo"):e.t("reader.demo.show_search_demo"),"checked-icon":"search","unchecked-icon":"double_arrow"},null,8,["modelValue","label"])]),t("div",La,[se(a(e.ReaderSearchDemoComponent,null,null,512),[[le,e.showSearchDemo]]),se(a(e.ReaderDemoComponent,null,null,512),[[le,!e.showSearchDemo]])])],2),t("div",{class:A(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"apiform"},[a(e.H2TitleBlock,{title:"reader.title",subtitle:"reader.reader_description",anchor:"apiform"}),t("div",Ua,[t("div",Aa,[a(e.SeFoComponent,{"show-function":"reader","hide-others":!0})])])],2),a(e.PricingComponent,{"hide-others":!0}),a(e.FAQComponent,{"faq-sources":["reader.faq_v1","api_general_faq","billing_general_faq"]})]),_:1})}const ut=ue(We,[["render",Ia],["__scopeId","data-v-f4a51b92"],["__file","ReaderPage.vue"]]);export{ut as default};