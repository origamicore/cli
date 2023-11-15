import{i as V,_ as q,a4 as F,r as S,$ as y,o,c as w,w as C,e as x,a9 as M,a5 as n,aC as K,b as l,t as d,g as N,a8 as p,a6 as O,K as Q,a as e,a0 as v,a1 as B,a3 as R,bj as j}from"./index.66a65c15.js";import{D as $}from"./DatabaseService.728a8def.js";import{u as E}from"./use-quasar.967395eb.js";import{c as G,a as I}from"./index.esm.3ac0c307.js";import{u as T,a as U}from"./vee-validate.esm.06ebb446.js";const H={key:0,class:"error"},J=V({__name:"CreateDatabaseDialog",props:["show"],emits:["closeDialog","reload"],setup(A,{emit:b}){const D=A,g=q(),r=F(),a=S({schema:G({name:I().nullable("Database name is required!").required("Database name is required!")})}),{handleSubmit:u,errors:m}=T({validationSchema:a.schema}),{value:i}=U("name");function h(){b("closeDialog")}function t(){u(async()=>{try{await $.createCollection(g.params.connectionName,i.value,"deleteMe"),p.success("Database was added successfully."),b("reload"),h()}catch{p.error("Adding the Database encountered problem.")}})()}return(c,f)=>{const k=y("Dialog");return o(),w(k,{show:D.show,title:"Create Database",onCloseDialog:h,onConfirmDialog:t},{default:C(()=>[x(M,{outlined:"",class:"mt-3",modelValue:n(i),"onUpdate:modelValue":f[0]||(f[0]=s=>K(i)?i.value=s:null),error:!!n(m).name,dark:n(r).isDark,label:"Name*","hide-bottom-space":""},null,8,["modelValue","error","dark"]),n(m).name?(o(),l("span",H,d(n(m).name),1)):N("",!0)]),_:1},8,["show"])}}}),P={class:"card"},W={class:"card-body"},X={class:"flex-between"},Y={class:"flex items-center"},Z={key:0,class:"fas fa-angle-right mx-2 text-blue-500"},z={class:"card mt-5"},ee={class:"card-header"},ae={class:"title"},te={key:0,class:"card-body"},se={class:"table"},oe=e("thead",null,[e("tr",{class:"tr-header"},[e("th",{class:"text-left"},"Row"),e("th",{class:"text-left"},"Database"),e("th",{class:"text-left"},"Size"),e("th",{class:"text-left"},"Action")])],-1),ne={class:"font-bold"},re={class:"text-subtitle2"},le={class:"flex items-center gap-2"},ce=["onClick"],ie=e("i",{class:"text-md fas fa-list"},null,-1),de=[ie],ue=["onClick"],me=e("i",{class:"text-md fas fa-trash-alt"},null,-1),_e=[me],be={key:1,class:"card-body"},ke=V({__name:"Connection",setup(A){const b=F(),D=E(),g=O(),r=q(),a=S({loading:!0,breadcrumb:[{title:"All Connections",link:"/orimongo/connections"},{title:r.params.connectionName,link:null}],databases:[],showAddDialog:!1});Q(()=>{u()});async function u(){a.loading=!0;try{a.databases=await $.getDb(r.params.connectionName)}catch{}a.loading=!1}function m(t){return t<1024?t:t<1024*1024?(t/1024).toFixed(1)+" KB":t<1024*1024*1024?(t/(1024*1024)).toFixed(1)+" MB":(t/(1024*1024*1024)).toFixed(1)+" GB"}async function i(t){D.dialog({title:"Remove Database",message:"Are you sure you would like to remove this collection?",dark:b.isDark,cancel:!0}).onOk(async()=>{try{await $.deleteDatabase(r.params.connectionName,t.name),await u(),p.success("Database was removed successfully.")}catch{p.error("Removing the Database encountered problem.")}})}function h(){a.showAddDialog=!1}return(t,c)=>{const f=y("router-link"),k=y("Loading");return o(),l(v,null,[e("div",P,[e("div",W,[e("div",X,[e("div",Y,[(o(!0),l(v,null,B(a.breadcrumb,(s,_)=>(o(),w(j(s.link?"router-link":"span"),{key:_,to:s.link},{default:C(()=>[R(d(s.title),1),a.breadcrumb.length!=_+1?(o(),l("i",Z)):N("",!0)]),_:2},1032,["to"]))),128))]),e("button",{class:"btn btn-green",onClick:c[0]||(c[0]=s=>a.showAddDialog=!0)}," New Database ")])])]),e("div",z,[e("div",ee,[e("span",ae,"Connection: "+d(n(r).params.connectionName),1)]),a.loading?(o(),l("div",be,[x(k)])):(o(),l("div",te,[e("table",se,[oe,e("tbody",null,[(o(!0),l(v,null,B(a.databases,(s,_)=>(o(),l("tr",{class:"tr-body",key:_},[e("td",null,d(_+1),1),e("td",ne,[x(f,{to:`${n(r).params.connectionName}/${s.name}`},{default:C(()=>[R(d(s.name),1)]),_:2},1032,["to"])]),e("td",null,[e("div",re,d(m(s.sizeOnDisk)),1)]),e("td",le,[e("button",{class:"btn-squar btn-blue",onClick:L=>n(g).push({name:"database",params:{connectionName:n(r).params.connectionName,databaseName:s.name}})},de,8,ce),e("button",{class:"btn-squar btn-red",onClick:L=>i(s)},_e,8,ue)])]))),128))])])]))]),a.showAddDialog?(o(),w(J,{key:0,show:a.showAddDialog,onCloseDialog:h,onReload:c[1]||(c[1]=s=>u())},null,8,["show"])):N("",!0)],64)}}});export{ke as default};