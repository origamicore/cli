import{u as B}from"./use-quasar.967395eb.js";import{i as M,_ as Q,a4 as A,r as F,$ as O,o as d,c as R,w as L,a as t,e as D,a9 as j,a5 as s,aC as k,b as c,t as u,g as h,aK as U,aa as K,a8 as C,K as z,a0 as G,a1 as H}from"./index.66a65c15.js";import{Q as J}from"./QSelect.6fdaa0a2.js";import{c as P,a as w}from"./index.esm.3ac0c307.js";import{u as W,a as x}from"./vee-validate.esm.06ebb446.js";import"./QItemLabel.de72d5e0.js";import"./selection.8299b8f1.js";import"./rtl.b51694b1.js";const X={class:"flex flex-col gap-5"},Y={key:0,class:"error"},Z={key:0,class:"error"},ee={key:0,class:"error"},te=M({__name:"add-entity-dialog",props:["show","editingEntity","editingEntityIndex"],emits:["closeDialog","reload"],setup(V,{emit:p}){var $,q,I,T,N,S;const o=V;B();const _=Q(),e=A(),g=F({schema:P({name:w().nullable("Database name is required!").required("Database name is required!"),collection:w().nullable("Database collection is required!").required("Database collection is required!"),classType:w().nullable("Class type is required!").required("Class type is required!")}),types:["string","number","boolean"]}),{handleSubmit:b,errors:n}=W({validationSchema:g.schema,initialValues:{name:(q=($=o.editingEntity)==null?void 0:$.name)!=null?q:void 0,collection:(T=(I=o.editingEntity)==null?void 0:I.collectionName)!=null?T:void 0,classType:(S=(N=o.editingEntity)==null?void 0:N.type)!=null?S:void 0}}),{value:i}=x("name"),{value:r}=x("collection"),{value:l}=x("classType");for(let y of e.project.modules)for(let a of y.models)g.types.push(y.name+"."+a.name);function m(){p("closeDialog")}async function E(){b(async()=>{const y=new U.MongoCollection({name:i.value,type:l.value,collectionName:r.value}),a=e.project.mongoDatabses.find(v=>v.name==_.params.name);a?(o.editingEntity?a.schemas[o.editingEntityIndex]=y:a.schemas.push(y),await K.save(e.project),C.success(`Entity was ${o.editingEntity?"edited":"added"} successfully.`),m()):C.success("Entity was not found!")})()}return(y,a)=>{const v=O("Dialog");return d(),R(v,{show:o.show,title:o.editingEntity?"Edit Entity":"Add Entity",onCloseDialog:m,onConfirmDialog:E},{default:L(()=>[t("div",X,[t("div",null,[D(j,{outlined:"",error:!!s(n).name,modelValue:s(i),"onUpdate:modelValue":a[0]||(a[0]=f=>k(i)?i.value=f:null),"hide-bottom-space":"",dark:s(e).isDark,label:"Entity name",type:"text",class:"mt-2"},null,8,["error","modelValue","dark"]),s(n).name?(d(),c("span",Y,u(s(n).name),1)):h("",!0)]),t("div",null,[D(j,{outlined:"",error:!!s(n).collection,modelValue:s(r),"onUpdate:modelValue":a[1]||(a[1]=f=>k(r)?r.value=f:null),"hide-bottom-space":"",dark:s(e).isDark,label:"Entity collection",type:"text",class:"mt-2"},null,8,["error","modelValue","dark"]),s(n).collection?(d(),c("span",Z,u(s(n).collection),1)):h("",!0)]),t("div",null,[D(J,{outlined:"",error:!!s(n).classType,dark:s(e).isDark,modelValue:s(l),"onUpdate:modelValue":a[2]||(a[2]=f=>k(l)?l.value=f:null),options:g.types,label:"Class Type","hide-bottom-space":""},null,8,["error","dark","modelValue","options"]),s(n).classType?(d(),c("span",ee,u(s(n).classType),1)):h("",!0)])])]),_:1},8,["show","title"])}}}),se={class:"card"},ae={class:"card-header"},oe={class:"title"},ne={key:0,class:"card-body"},ie={class:"table"},le=t("thead",null,[t("tr",{class:"tr-header"},[t("th",{class:"text-left"},"Name"),t("th",{class:"text-left"},"Collection Name"),t("th",{class:"text-left"},"Type"),t("th",{class:"text-right"},"Setting")])],-1),re={class:"font-bold"},de={class:"flex items-center justify-end gap-2"},ce=["onClick"],ue=t("i",{class:"text-md fas fa-pen"},null,-1),me=[ue],ye=["onClick"],pe=t("i",{class:"text-md fas fa-trash-alt"},null,-1),ge=[pe],we=M({__name:"mongo-db-item",setup(V){const p=A(),o=Q(),_=B(),e=F({showEntityDialog:!1,loading:!0,database:new U.MongoDatabase,editingEntity:null,editingEntityIndex:-1});z(()=>{e.loading=!0,e.database=p.project.mongoDatabses.find(i=>i.name==o.params.name),e.loading=!1});function g(i){_.dialog({title:"Remove Entity",message:"Are you sure you would like to remove this entity?",dark:p.isDark,cancel:!0}).onOk(async()=>{e.database.schemas.splice(i,1),await K.save(p.project),C.success("Entity was removed successfully!")})}function b(i,r){e.editingEntity=i,e.editingEntityIndex=r,e.showEntityDialog=!0}function n(){e.showEntityDialog=!1,e.editingEntityIndex=-1,e.editingEntity=null}return(i,r)=>(d(),c("div",se,[t("div",ae,[t("span",oe,"Mongo Database : "+u(s(o).params.name),1),t("button",{class:"btn btn-green",onClick:r[0]||(r[0]=l=>e.showEntityDialog=!0)}," Add Entity ")]),e.loading?h("",!0):(d(),c("div",ne,[t("table",ie,[le,t("tbody",null,[(d(!0),c(G,null,H(e.database.schemas,(l,m)=>(d(),c("tr",{class:"tr-body",key:m},[t("td",re,u(l.name),1),t("td",null,u(l.collectionName),1),t("td",null,u(l.type),1),t("td",de,[t("button",{class:"btn-squar btn-yellow",onClick:E=>b(l,m)},me,8,ce),t("button",{class:"btn-squar btn-red",onClick:E=>g(m)},ge,8,ye)])]))),128))])])])),e.showEntityDialog?(d(),R(te,{key:1,show:e.showEntityDialog,editingEntity:e.editingEntity,editingEntityIndex:e.editingEntityIndex,onCloseDialog:n},null,8,["show","editingEntity","editingEntityIndex"])):h("",!0)]))}});export{we as default};