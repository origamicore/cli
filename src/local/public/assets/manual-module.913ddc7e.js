import{m as M,ah as D,r as x,ac as V,o as m,b as C,w as N,h as I,am as S,ai as _,az as O,e as g,t as w,k as A,d as e,al as n,aE as q,an as $,aj as R,ad as B,ae as E,aF as F}from"./index.da47becb.js";import{c as J,a as P}from"./index.esm.5bb29c97.js";import{u as Q,a as T}from"./vee-validate.esm.0261b950.js";import{u as j}from"./use-quasar.015d7623.js";const U=e("label",null,"Module name:",-1),z={key:0,class:"error"},L=M({__name:"add-module-dialog",props:["show","editingItem"],emits:["closeDialog","editedItem"],setup(k,{emit:d}){var p,t;const s=k;j();const u=D(),o=x({schema:J({name:P().nullable("Module name is required!").required("Module name is required!")})}),{handleSubmit:b,errors:h}=Q({validationSchema:o.schema,initialValues:{name:(t=(p=s.editingItem)==null?void 0:p.name)!=null?t:void 0}}),{value:c}=T("name");function i(){d("closeDialog")}async function v(){let l=c.value;if(u.project.modules.filter(f=>f.name==l)[0]){n.error("There is a module with the same name");return}u.project.modules.push(new q.ModuleModel({name:l})),await $.save(u.project),n.success("Module was created successfully."),d("reload"),d("closeDialog")}async function y(){b(async()=>{s.editingItem?(d("editedItem",{oldName:s.editingItem.name,name:c.value}),i()):await v()})()}return(l,a)=>{const f=V("Dialog");return m(),C(f,{show:s.show,title:"Add Module",onCloseDialog:i,onConfirmDialog:y},{default:N(()=>[U,I(S,{outlined:"",error:!!_(h).name,modelValue:_(c),"onUpdate:modelValue":a[0]||(a[0]=r=>O(c)?c.value=r:null),"hide-bottom-space":"",dark:_(u).isDark,label:"Module name",type:"text",class:"mt-3"},null,8,["error","modelValue","dark"]),_(h).name?(m(),g("span",z,w(_(h).name),1)):A("",!0)]),_:1},8,["show"])}}}),G={class:"card"},H={style:{display:"none"}},K={class:"card-header"},W=e("span",{class:"title"},"Manual Module",-1),X={class:"card-body"},Y={class:"table"},Z=e("thead",null,[e("tr",{class:"tr-header"},[e("th",{class:"text-left"},"Module name"),e("th",{class:"text-left"},"status"),e("th",{class:"text-left"},"Action")])],-1),ee={class:"font-bold"},te={class:"flex items-center gap-2"},ae=["onClick"],oe=e("i",{class:"text-md fas fa-trash-alt"},null,-1),se=[oe],le=["onClick"],ne=e("i",{class:"text-md fas fa-pen"},null,-1),de=[ne],me=M({__name:"manual-module",setup(k){const d=j(),s=D(),u=R(),o=x({showAddModule:!1,modules:JSON.parse(JSON.stringify(s.project.modules)),editingItem:null,counter:0});function b(){o.showAddModule=!1,o.editingItem=null}async function h(t){d.dialog({title:t.enable?"Active Module":"Deactive Module",message:`Are you sure you would like to ${t.enable?"Active":"Deactive"} the module?`,dark:s.isDark,cancel:!0}).onOk(async()=>{try{await i(),await s.getProject(),n.success(`The module was ${t.enable?"Activate":"Deactivate"} successfully.`)}catch{n.error(`${t.enable?"Activate":"Deactivate"} of module encountered problem!`),t.enable=!t.enable}}).onCancel(()=>{t.enable=!t.enable})}async function c(t){d.dialog({title:"Remove Module",message:"Are you sure you would like to remove this module?",dark:s.isDark,cancel:!0}).onOk(async()=>{const l=o.modules.findIndex(a=>a.name==t.name);l!=-1&&o.modules.splice(l,1);try{await i(),await s.getProject(),n.success("Module was removed successfully.")}catch{n.success("Removing the module encountered problem.")}})}async function i(){s.project.modules=o.modules,await $.save(s.project)}function v(t){u.push("/edit-manual-module/"+t.name)}async function y(){await s.getProject(),o.modules=JSON.parse(JSON.stringify(s.project.modules)),o.counter++}async function p(t){let l=o.modules.find(a=>a.name==t.oldName);l&&(l.name=t.name);try{await i(),await s.getProject(),n.success("Module was edited successfully.")}catch{n.success("Editing the module encountered problem.")}}return(t,l)=>(m(),g("div",G,[e("div",H,w(o.counter),1),e("div",K,[W,e("button",{class:"btn btn-green",onClick:l[0]||(l[0]=a=>o.showAddModule=!0)},"Add Manual Module")]),e("div",X,[e("table",Y,[Z,e("tbody",null,[(m(!0),g(B,null,E(o.modules,(a,f)=>(m(),g("tr",{class:"tr-body",key:f},[e("td",ee,w(a.name),1),e("td",null,[I(F,{modelValue:a.enable,"onUpdate:modelValue":r=>a.enable=r,label:a.enable?"active":"deactive",color:"green",onClick:r=>h(a)},null,8,["modelValue","onUpdate:modelValue","label","onClick"])]),e("td",te,[e("button",{class:"btn-squar btn-red",onClick:r=>c(a)},se,8,ae),e("button",{class:"btn-squar btn-yellow",onClick:r=>v(a)},de,8,le)])]))),128))])])]),o.showAddModule?(m(),C(L,{key:0,show:o.showAddModule,editingItem:o.editingItem,onCloseDialog:b,onReload:y,onEditedItem:p},null,8,["show","editingItem"])):A("",!0)]))}});export{me as default};
