import{i as V,_ as q,a4 as S,r as B,$ as v,o as s,c as y,w as D,e as w,a9 as L,a5 as n,aC as Q,b as l,t as m,g as N,a8 as f,a6 as j,K as E,a as e,a0 as k,a1 as A,a3 as R,bj as I}from"./index.66a65c15.js";import{D as x}from"./DatabaseService.728a8def.js";import{u as K}from"./use-quasar.967395eb.js";import{c as M,a as O}from"./index.esm.3ac0c307.js";import{u as T,a as U}from"./vee-validate.esm.06ebb446.js";const z={key:0,class:"error"},G=V({__name:"CreateCollectionDialog",props:["show"],emits:["closeDialog","reload"],setup($,{emit:h}){const g=$,p=q(),o=S(),a=B({schema:M({name:O().nullable("Collection name is required!").required("Collection name is required!")})}),{handleSubmit:u,errors:_}=T({validationSchema:a.schema}),{value:i}=U("name");function d(){h("closeDialog")}function c(){u(async()=>{try{await x.createCollection(p.params.connectionName,p.params.databaseName,i.value),f.success("Collection was added successfully."),h("reload"),d()}catch{f.error("Adding the Collection encountered problem.")}})()}return(C,b)=>{const t=v("Dialog");return s(),y(t,{show:g.show,title:"Create Collection",onCloseDialog:d,onConfirmDialog:c},{default:D(()=>[w(L,{outlined:"",class:"mt-3",modelValue:n(i),"onUpdate:modelValue":b[0]||(b[0]=r=>Q(i)?i.value=r:null),error:!!n(_).name,dark:n(o).isDark,label:"Name*","hide-bottom-space":""},null,8,["modelValue","error","dark"]),n(_).name?(s(),l("span",z,m(n(_).name),1)):N("",!0)]),_:1},8,["show"])}}}),H={class:"card"},J={class:"card-body"},P={class:"flex-between"},W={class:"flex items-center"},X={key:0,class:"fas fa-angle-right mx-2 text-blue-500"},Y={class:"card mt-5"},Z={class:"card-header flex-col items-start"},ee={class:"title"},oe={class:"title"},ae={key:0,class:"card-body"},te={class:"table"},se=e("thead",null,[e("tr",{class:"tr-header"},[e("th",{class:"text-left"},"Row"),e("th",{class:"text-left"},"Collection"),e("th",{class:"text-left"},"Action")])],-1),ne={class:"font-bold"},le={class:"flex items-center gap-2"},ce=["onClick"],re=e("i",{class:"text-md fas fa-list"},null,-1),ie=[re],de=["onClick"],me=e("i",{class:"text-md fas fa-trash-alt"},null,-1),ue=[me],_e={key:1,class:"card-body"},Ce=V({__name:"Database",setup($){const h=S(),g=K(),p=j(),o=q(),a=B({loading:!0,breadcrumb:[{title:"All Connections",link:"/orimongo/connections"},{title:o.params.connectionName,link:`/orimongo/connections/${o.params.connectionName}`},{title:o.params.databaseName,link:null}],showAddDialog:!1,colletions:[]});E(()=>{u()});async function u(){a.loading=!0;try{a.colletions=await x.getCollections(o.params.connectionName,o.params.databaseName)}catch{}a.loading=!1}function _(){a.showAddDialog=!1}async function i(d){g.dialog({title:"Remove Collection",message:"Are you sure you would like to remove this collection?",dark:h.isDark,cancel:!0}).onOk(async()=>{try{await x.deleteCollection(o.params.connectionName,o.params.databaseName,d),await u(),f.success("Collection was removed successfully.")}catch{f.error("Removing the Collection encountered problem.")}})}return(d,c)=>{const C=v("router-link"),b=v("Loading");return s(),l(k,null,[e("div",H,[e("div",J,[e("div",P,[e("div",W,[(s(!0),l(k,null,A(a.breadcrumb,(t,r)=>(s(),y(I(t.link?"router-link":"span"),{key:r,to:t.link},{default:D(()=>[R(m(t.title),1),a.breadcrumb.length!=r+1?(s(),l("i",X)):N("",!0)]),_:2},1032,["to"]))),128))]),e("button",{class:"btn btn-green",onClick:c[0]||(c[0]=t=>a.showAddDialog=!0)}," New Collection ")])])]),e("div",Y,[e("div",Z,[e("span",ee,"Connection: "+m(n(o).params.connectionName),1),e("span",oe,"Database: "+m(n(o).params.databaseName),1)]),a.loading?(s(),l("div",_e,[w(b)])):(s(),l("div",ae,[e("table",te,[se,e("tbody",null,[(s(!0),l(k,null,A(a.colletions,(t,r)=>(s(),l("tr",{class:"tr-body",key:r},[e("td",null,m(r+1),1),e("td",ne,[w(C,{to:`${n(o).params.connectionName}/${t.name}`},{default:D(()=>[R(m(t.name),1)]),_:2},1032,["to"])]),e("td",le,[e("button",{class:"btn-squar btn-blue",onClick:F=>n(p).push({name:"collection",params:{connectionName:n(o).params.connectionName,databaseName:n(o).params.databaseName,collectionName:t.name}})},ie,8,ce),e("button",{class:"btn-squar btn-red",onClick:F=>i(t.name)},ue,8,de)])]))),128))])])]))]),a.showAddDialog?(s(),y(G,{key:0,show:a.showAddDialog,onCloseDialog:_,onReload:c[1]||(c[1]=t=>u())},null,8,["show"])):N("",!0)],64)}}});export{Ce as default};