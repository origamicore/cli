import{i as b,a4 as v,r as V,o as n,b as i,a as s,a0 as k,a1 as f,e as t,a5 as l,a9 as h,aD as y,bE as x,bF as U}from"./index.66a65c15.js";import{Q as u}from"./QSelect.6fdaa0a2.js";import{V as C,a as I}from"./ServicTypes.b727c376.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"./QItemLabel.de72d5e0.js";import"./selection.8299b8f1.js";import"./rtl.b51694b1.js";const D=o=>(x("data-v-eb7a0630"),o=o(),U(),o),S={class:"flex flex-col gap-2 mt-2"},T=["onClick"],q=D(()=>s("i",{class:"text-md fas fa-trash-alt"},null,-1)),w=[q],Q={class:"flex-between gap-2"},R=b({__name:"variables",props:["service"],setup(o){const d=o,r=v();V({});function m(){d.service.variables.push({name:"",decorator:{name:""},isRequired:!1,classType:""})}function _(c){d.service.variables.splice(c,1)}return(c,B)=>(n(),i("div",null,[s("button",{class:"btn btn-green",onClick:m},"Add"),s("div",S,[(n(!0),i(k,null,f(d.service.variables,(e,p)=>(n(),i("div",{class:"variable-card",key:p},[s("button",{class:"variable-card-btn",onClick:a=>_(p)},w,8,T),t(h,{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,outlined:"",label:"Name",dark:l(r).isDark},null,8,["modelValue","onUpdate:modelValue","dark"]),t(y,{modelValue:e.isRequired,"onUpdate:modelValue":a=>e.isRequired=a,label:"isRequired",color:"danger",dark:l(r).isDark},null,8,["modelValue","onUpdate:modelValue","dark"]),s("div",Q,[t(u,{modelValue:e.classType,"onUpdate:modelValue":a=>e.classType=a,options:l(C),outlined:"",label:"Class type",dark:l(r).isDark,class:"w-1/2"},null,8,["modelValue","onUpdate:modelValue","options","dark"]),t(u,{modelValue:e.decorator.name,"onUpdate:modelValue":a=>e.decorator.name=a,options:l(I),outlined:"",label:"Input type",dark:l(r).isDark,class:"w-1/2"},null,8,["modelValue","onUpdate:modelValue","options","dark"])])]))),128))])]))}});var z=g(R,[["__scopeId","data-v-eb7a0630"]]);export{z as default};
