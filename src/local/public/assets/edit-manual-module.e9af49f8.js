import{m as f,ah as y,aj as h,ab as T,bg as t,r as V,B as g,o as d,e as k,d as s,t as C,h as a,w as E,b as j,bh as P,k as S,an as B,bi as o}from"./index.da47becb.js";import{Q as r,a as D}from"./QTabs.c991515f.js";import{u as R}from"./use-quasar.015d7623.js";import"./QResizeObserver.5dc637a9.js";import"./rtl.b51694b1.js";const w={key:0,class:"card"},A={class:"card-header"},O={class:"title"},Q={class:"card-body"},x={class:"mt-5"},q=f({__name:"edit-manual-module",setup(I){R();const n=y();h();const m=T(),c=t(()=>o(()=>import("./services.6b1e57a2.js"),["assets/services.6b1e57a2.js","assets/index.da47becb.js","assets/index.7026ac79.css","assets/use-quasar.015d7623.js","assets/QTabs.c991515f.js","assets/QResizeObserver.5dc637a9.js","assets/rtl.b51694b1.js"])),u=t(()=>o(()=>import("./functions.fa78bfd3.js"),["assets/functions.fa78bfd3.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/index.da47becb.js","assets/index.7026ac79.css"])),_=t(()=>o(()=>import("./models.038650ee.js"),["assets/models.038650ee.js","assets/models.b7c2dda3.css","assets/index.da47becb.js","assets/index.7026ac79.css","assets/use-quasar.015d7623.js","assets/QSelect.f6cc18b0.js","assets/QItemLabel.a4a1797c.js","assets/rtl.b51694b1.js","assets/plugin-vue_export-helper.21dcd24c.js"])),e=V({module:n.project.modules.filter(i=>i.name==m.params.name)[0],selectedTab:"services"}),p=g(()=>{switch(e.selectedTab){case"services":return c;case"functions":return u;case"models":return _;default:return c}});async function v(){await B.save(n.project)}return(i,l)=>e.module?(d(),k("div",w,[s("div",A,[s("span",O,C(e.module.name),1),s("button",{class:"btn btn-green",onClick:v},"Save Project")]),s("div",Q,[a(D,{modelValue:e.selectedTab,"onUpdate:modelValue":l[0]||(l[0]=b=>e.selectedTab=b),dense:"",class:"bg-gray-300 dark:bg-gray-800 rounded-full","active-color":"primary","indicator-color":"primary",align:"justify"},{default:E(()=>[a(r,{name:"services",label:"Services"}),a(r,{name:"functions",label:"Functions"}),a(r,{name:"models",label:"Models"})]),_:1},8,["modelValue"]),s("div",x,[(d(),j(P(p.value)))])])])):S("",!0)}});export{q as default};