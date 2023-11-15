import{u as y}from"./use-quasar.967395eb.js";import{i as k,bi as $,bk as T,_ as x,a4 as C,r as V,bD as O,$ as I,o as c,c as g,w,e as b,a as n,bj as Q,a5 as m,aa as A,a8 as h,a9 as B,aC as N,b as D,t as E,g as S,aK as F,a0 as L,a1 as P,a3 as U}from"./index.66a65c15.js";import{a as K,Q as j}from"./QTabs.0d47935c.js";import{c as M,a as z}from"./index.esm.3ac0c307.js";import{u as G,a as H}from"./vee-validate.esm.06ebb446.js";import"./QResizeObserver.ae498396.js";import"./rtl.b51694b1.js";const J={class:"mt-5 px-2"},W=k({__name:"service-dialog",props:["show","service"],emits:["closeDialog"],setup(_,{emit:l}){const d=_,u=$(()=>T(()=>import("./decorators.e2b1c924.js"),["assets/decorators.e2b1c924.js","assets/QSelect.6fdaa0a2.js","assets/index.66a65c15.js","assets/index.6d491820.css","assets/QItemLabel.de72d5e0.js","assets/selection.8299b8f1.js","assets/rtl.b51694b1.js","assets/ServicTypes.b727c376.js"])),e=$(()=>T(()=>import("./variables.dcf796e0.js"),["assets/variables.dcf796e0.js","assets/variables.8b5e6335.css","assets/index.66a65c15.js","assets/index.6d491820.css","assets/QSelect.6fdaa0a2.js","assets/QItemLabel.de72d5e0.js","assets/selection.8299b8f1.js","assets/rtl.b51694b1.js","assets/ServicTypes.b727c376.js","assets/plugin-vue_export-helper.21dcd24c.js"]));y();const v=x(),p=C(),r=V({selectedTab:"decorators",service:structuredClone(O(d.service))});function a(){l("closeDialog")}async function i(){const s=p.project.modules.find(o=>o.name==v.params.name);if(s!=null){const o=s==null?void 0:s.services.findIndex(t=>t.name==d.service.name);o!=-1?(s.services[o]=r.service,await A.save(p.project),h.success("Service was updated successfully."),a()):h.error("Service was not found!")}}return(s,o)=>{const t=I("Dialog");return c(),g(t,{show:d.show,title:"Edit Detail",onCloseDialog:a,onConfirmDialog:i},{default:w(()=>[b(K,{modelValue:r.selectedTab,"onUpdate:modelValue":o[0]||(o[0]=f=>r.selectedTab=f),dense:"",class:"bg-gray-300 dark:bg-gray-700 rounded-md","active-color":"primary","indicator-color":"primary",align:"justify"},{default:w(()=>[b(j,{name:"decorators",label:"Decorators"}),b(j,{name:"variables",label:"Variables"})]),_:1},8,["modelValue"]),n("div",J,[(c(),g(Q(r.selectedTab=="decorators"?m(u):m(e)),{service:r.service},null,8,["service"]))])]),_:1},8,["show"])}}}),X={key:0,class:"error"},Y=k({__name:"add-service-dialog",props:["show"],emits:["closeDialog","reload"],setup(_,{emit:l}){const d=_;y();const u=C(),e=x(),v=V({schema:M({name:z().nullable("Service name is required!").required("Service name is required!")}),module:u.project.modules.filter(t=>t.name==e.params.name)[0]}),{handleSubmit:p,errors:r}=G({validationSchema:v.schema}),{value:a}=H("name");function i(){l("closeDialog")}async function s(){v.module.services.push(new F.ServiceModel({name:a.value,decorators:[{name:"OriService",data:{isEvent:!1,method:"Any"}}]})),await A.save(u.project),h.success("Service was added successfully!"),i()}async function o(){p(async()=>{await s()})()}return(t,f)=>{const R=I("Dialog");return c(),g(R,{show:d.show,title:"Add Service",onCloseDialog:i,onConfirmDialog:o},{default:w(()=>[b(B,{outlined:"",error:!!m(r).name,modelValue:m(a),"onUpdate:modelValue":f[0]||(f[0]=q=>N(a)?a.value=q:null),"hide-bottom-space":"",dark:m(u).isDark,label:"Service name",type:"text",class:"mt-3"},null,8,["error","modelValue","dark"]),m(r).name?(c(),D("span",X,E(m(r).name),1)):S("",!0)]),_:1},8,["show"])}}}),Z={class:"px-4 py-2 flex-between rounded-lg bg-gray-300 dark:bg-gray-700"},ee=n("span",null,"Services:",-1),se={class:"flex items-center gap-1"},oe=["onClick"],ae=["onClick"],re=n("i",{class:"text-md fas fa-trash-alt"},null,-1),te=[re],ve=k({__name:"services",setup(_){const l=C(),d=x(),u=y(),e=V({module:l.project.modules.filter(a=>a.name==d.params.name)[0],selectedService:null,showServiceDialog:!1,showAddServiceDialog:!1});function v(a,i){u.dialog({title:"Remove Service",message:"Are you sure you would like to remove this service?",dark:l.isDark,cancel:!0}).onOk(async()=>{var o,t;const s=(o=e.module)==null?void 0:o.services.findIndex(f=>f.name==a.name);s!=-1&&i==s&&((t=e.module)==null||t.services.splice(s,1),await A.save(l.project),h.success("Service was removed successfully!"))})}function p(a,i){e.showServiceDialog=!0,e.selectedService=a}function r(){e.showServiceDialog=!1,e.showAddServiceDialog=!1,e.selectedService=null}return(a,i)=>(c(),D("div",null,[n("div",Z,[ee,n("button",{class:"btn btn-green",onClick:i[0]||(i[0]=s=>e.showAddServiceDialog=!0)}," Add Service ")]),(c(!0),D(L,null,P(e.module.services,(s,o)=>(c(),D("div",{key:o,class:"px-4 py-2 mt-2 flex-between rounded-lg bg-gray-300 dark:bg-gray-700"},[n("span",null,[U("Service name: "),n("b",null,E(s.name),1)]),n("div",se,[n("button",{class:"btn btn-blue",onClick:t=>p(s)}," Detail ",8,oe),n("button",{class:"btn-squar btn-red",onClick:t=>v(s,o)},te,8,ae)])]))),128)),e.showServiceDialog?(c(),g(W,{key:0,show:e.showServiceDialog,service:e.selectedService,onCloseDialog:r},null,8,["show","service"])):S("",!0),e.showAddServiceDialog?(c(),g(Y,{key:1,show:e.showAddServiceDialog,onCloseDialog:r},null,8,["show"])):S("",!0)]))}});export{ve as default};
