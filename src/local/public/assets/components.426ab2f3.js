import{r as p,o as i,c as u,w as _,Q as m,a as t,b as c,t as f,d as h,e as g,f as v,g as y,h as w,i as b,n as D,j as C,k as $}from"./index.66a65c15.js";import{C as B}from"./ClosePopup.044fceaa.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const k={class:"global-dialog"},x={key:0,class:"global-dialog-title"},V={class:"global-dialog-body"},L={class:"global-dialog-footer"},Q={__name:"global-dialog",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},hasTitle:{type:Boolean,default:!0},width:{type:String,default:"300px"}},emits:["closeDialog","confirmDialog"],setup(o,{emit:s}){const e=o,l=p({showDialog:e.show});function n(){s("closeDialog")}return(d,a)=>(i(),u(m,{modelValue:l.showDialog,"onUpdate:modelValue":a[1]||(a[1]=r=>l.showDialog=r),width:e.width,onHide:n},{default:_(()=>[t("div",k,[e.hasTitle?(i(),c("div",x,[t("span",null,f(e.title),1),h(g(v,{round:"",flat:"",icon:"close"},null,512),[[B]])])):y("",!0),t("div",V,[w(d.$slots,"default")]),t("div",L,[t("button",{class:"btn btn-green",onClick:a[0]||(a[0]=r=>s("confirmDialog"))},"Confirm")])])]),_:3},8,["modelValue","width"]))}};var N=Q;const j=b({name:"Loading",props:{height:String}});function z(o,s,e,l,n,d){return i(),c("div",{class:"loading radius-md row items-center justify-center w-100 main-padding q-py-md card-body",style:D({height:`${o.height||"75vh"}`})},[g(C,{color:"orange",size:"40"})],4)}var T=S(j,[["render",z],["__scopeId","data-v-e9f0c0d4"]]);var H=async({app:o})=>{o.component("Dialog",N),o.component("Loading",T),o.use($,{autoClose:3e3})};export{H as default};
