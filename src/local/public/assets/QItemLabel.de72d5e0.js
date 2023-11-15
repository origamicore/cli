import{v,y as L,U as I,A as E,aw as Q,F as f,G as u,N as c,R as S,q as R,Z as K,am as A,P as q}from"./index.66a65c15.js";function P(e,a,l){return l<=a?a:Math.min(l,Math.max(a,e))}function $(e,a,l){if(l<=a)return a;const i=l-a+1;let n=a+(e-a)%i;return n<a&&(n=i+n),n===0?0:n}var j=v({name:"QItem",props:{...L,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:l}){const{proxy:{$q:i}}=S(),n=E(e,i),{hasLink:d,linkAttrs:k,linkClass:h,linkTag:_,navigateOnClick:y}=Q(),o=f(null),r=f(null),m=u(()=>e.clickable===!0||d.value===!0||e.tag==="label"),s=u(()=>e.disable!==!0&&m.value===!0),g=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=u(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function x(t){s.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===o.value?r.value.focus():document.activeElement===r.value&&o.value.focus()),y(t))}function w(t){if(s.value===!0&&R(t,13)===!0){K(t),t.qKeyEvent=!0;const b=new MouseEvent("click",t);b.qKeyEvent=!0,o.value.dispatchEvent(b)}l("keyup",t)}function C(){const t=A(a.default,[]);return s.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:o,class:g.value,style:B.value,role:"listitem",onClick:x,onKeyup:w};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,k.value)):m.value===!0&&(t["aria-disabled"]="true"),c(_.value,t,C())}}}),D=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const l=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:l.value},q(a.default))}}),F=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const l=u(()=>parseInt(e.lines,10)),i=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),n=u(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>c("div",{style:n.value,class:i.value},q(a.default))}});export{j as Q,F as a,P as b,D as c,$ as n};
