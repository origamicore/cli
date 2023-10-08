import{v as j,x as ae,y as P,z as ne,A as Me,B as u,C as y,D as oe,E as J,F as Ae,G as p,H as ke,I as le,J as ut,K as st,L as ct,M as dt,N as ft,O as L,P as vt,R as be,r as G,S as ht,T as gt,U as mt,V as Re,W as Fe,X as je,Y as Ee,Z as bt,_ as Ne,$ as yt,a0 as qe,f as We,a1 as Le,a2 as wt,a3 as xt,a4 as _t,a5 as Ue,a6 as $e,a7 as Pe,a8 as St,a9 as Ie,aa as kt,m as pe,ab as pt,ac as ce,o as B,e as Y,h as H,w as D,ad as de,ae as Be,b as X,af as ze,ag as xe,t as _e,d as M,ah as Ke,j as Qe,ai as te,aj as Ct,ak as Oe,al as Tt,am as qt,k as Lt,an as $t}from"./index.da47becb.js";import{Q as Se}from"./QResizeObserver.5dc637a9.js";import{T as ye,Q as Pt}from"./QList.053a2baa.js";import{b as se,Q as It,a as He,c as we}from"./QItemLabel.a4a1797c.js";import{u as Bt}from"./use-quasar.015d7623.js";var zt=j({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:w}){const{proxy:{$q:l}}=J(),a=ae(ne,P);if(a===P)return console.error("QPage needs to be a deep child of QLayout"),P;if(ae(Me,P)===P)return console.error("QPage needs to be child of QPageContainer"),P;const i=u(()=>{const f=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const h=a.isContainer.value===!0?a.containerHeight.value:l.screen.height;return e.styleFn(f,h)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-f+"px":l.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":l.screen.height-f+"px"}}),s=u(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:s.value,style:i.value},oe(w.default))}}),Qt=j({name:"QPageContainer",setup(e,{slots:w}){const{proxy:{$q:l}}=J(),a=ae(ne,P);if(a===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ae(Me,!0);const o=u(()=>{const i={};return a.header.space===!0&&(i.paddingTop=`${a.header.size}px`),a.right.space===!0&&(i[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(i.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(i[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),i});return()=>y("div",{class:"q-page-container",style:o.value},oe(w.default))}});const{passive:De}=ct,Ot=["both","horizontal","vertical"];var Ht=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ot.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:w}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,o,i;p(()=>e.scrollTarget,()=>{h(),f()});function s(){a!==null&&a();const C=Math.max(0,dt(o)),S=ft(o),m={top:C-l.position.top,left:S-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const _=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:C,left:S},l.directionChanged=l.direction!==_,l.delta=m,l.directionChanged===!0&&(l.direction=_,l.inflectionPoint=l.position),w("scroll",{...l})}function f(){o=st(i,e.scrollTarget),o.addEventListener("scroll",x,De),x(!0)}function h(){o!==void 0&&(o.removeEventListener("scroll",x,De),o=void 0)}function x(C){if(C===!0||e.debounce===0||e.debounce==="0")s();else if(a===null){const[S,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];a=()=>{m(S),a=null}}}const{proxy:n}=J();return p(()=>n.$q.lang.rtl,s),ke(()=>{i=n.$el.parentNode,f()}),le(()=>{a!==null&&a(),h()}),Object.assign(n,{trigger:x,getPosition:()=>l}),ut}}),Dt=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:w,emit:l}){const{proxy:{$q:a}}=J(),o=L(null),i=L(a.screen.height),s=L(e.container===!0?0:a.screen.width),f=L({position:0,direction:"down",inflectionPoint:0}),h=L(0),x=L(vt.value===!0?0:be()),n=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=u(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),S=u(()=>x.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${x.value}px`}:null),m=u(()=>x.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${x.value}px`,width:`calc(100% + ${x.value}px)`}:null);function _(g){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=T,e.onScroll!==void 0&&l("scroll",T)}}function c(g){const{height:T,width:$}=g;let A=!1;i.value!==T&&(A=!0,i.value=T,e.onScrollHeight!==void 0&&l("scrollHeight",T),v()),s.value!==$&&(A=!0,s.value=$),A===!0&&e.onResize!==void 0&&l("resize",g)}function k({height:g}){h.value!==g&&(h.value=g,v())}function v(){if(e.container===!0){const g=i.value>h.value?be():0;x.value!==g&&(x.value=g)}}let r=null;const q={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:o,height:i,containerHeight:h,scrollbarWidth:x,totalWidth:u(()=>s.value+x.value),rows:u(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:f,animate(){r!==null?clearTimeout(r):document.body.classList.add("q-body--layout-animate"),r=setTimeout(()=>{r=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,T,$){q[g][T]=$}};if(Ae(ne,q),be()>0){let $=function(){g=null,T.classList.remove("hide-scrollbar")},A=function(){if(g===null){if(T.scrollHeight>a.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout($,300)},E=function(R){g!==null&&R==="remove"&&(clearTimeout(g),$()),window[`${R}EventListener`]("resize",A)},g=null;const T=document.body;p(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),ht(()=>{E("remove")})}return()=>{const g=gt(w.default,[y(Ht,{onScroll:_}),y(Se,{onResize:c})]),T=y("div",{class:n.value,style:C.value,ref:e.container===!0?void 0:o,tabindex:-1},g);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:o},[y(Se,{onResize:k}),y("div",{class:"absolute-full",style:S.value},[y("div",{class:"scroll",style:m.value},[T])])]):T}}}),Vt=j({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:w}){const l=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:l.value,role:"toolbar"},oe(w.default))}}),Mt=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:w,emit:l}){const{proxy:{$q:a}}=J(),o=ae(ne,P);if(o===P)return console.error("QHeader needs to be child of QLayout"),P;const i=L(parseInt(e.heightHint,10)),s=L(!0),f=u(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||a.platform.is.ios&&o.isContainer.value===!0),h=u(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const r=i.value-o.scroll.value.position;return r>0?r:0}),x=u(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),n=u(()=>e.modelValue===!0&&x.value===!0&&e.reveal===!0),C=u(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(x.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=u(()=>{const r=o.rows.value.top,q={};return r[0]==="l"&&o.left.space===!0&&(q[a.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),r[2]==="r"&&o.right.space===!0&&(q[a.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),q});function m(r,q){o.update("header",r,q)}function _(r,q){r.value!==q&&(r.value=q)}function c({height:r}){_(i,r),m("size",r)}function k(r){n.value===!0&&_(s,!0),l("focusin",r)}p(()=>e.modelValue,r=>{m("space",r),_(s,!0),o.animate()}),p(h,r=>{m("offset",r)}),p(()=>e.reveal,r=>{r===!1&&_(s,e.modelValue)}),p(s,r=>{o.animate(),l("reveal",r)}),p(o.scroll,r=>{e.reveal===!0&&_(s,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const v={};return o.instances.header=v,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",h.value),le(()=>{o.instances.header===v&&(o.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const r=mt(w.default,[]);return e.elevated===!0&&r.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(y(Se,{debounce:0,onResize:c})),y("header",{class:C.value,style:S.value,onFocusin:k},r)}}});const Ve=150;var At=j({name:"QDrawer",inheritAttrs:!1,props:{...Re,...Fe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...je,"onLayout","miniState"],setup(e,{slots:w,emit:l,attrs:a}){const o=J(),{proxy:{$q:i}}=o,s=Ee(e,i),{preventBodyScroll:f}=wt(),{registerTimeout:h,removeTimeout:x}=bt(),n=ae(ne,P);if(n===P)return console.error("QDrawer needs to be child of QLayout"),P;let C,S=null,m;const _=L(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),c=u(()=>e.mini===!0&&_.value!==!0),k=u(()=>c.value===!0?e.miniWidth:e.width),v=L(e.showIfAbove===!0&&_.value===!1?!0:e.modelValue===!0),r=u(()=>e.persistent!==!0&&(_.value===!0||fe.value===!0));function q(t,b){if(A(),t!==!1&&n.animate(),Q(0),_.value===!0){const I=n.instances[Z.value];I!==void 0&&I.belowBreakpoint===!0&&I.hide(!1),W(1),n.isContainer.value!==!0&&f(!0)}else W(0),t!==!1&&he(!1);h(()=>{t!==!1&&he(!0),b!==!0&&l("show",t)},Ve)}function g(t,b){E(),t!==!1&&n.animate(),W(0),Q(F.value*k.value),ge(),b!==!0?h(()=>{l("hide",t)},Ve):x()}const{show:T,hide:$}=Ne({showing:v,hideOnRouteChange:r,handleShow:q,handleHide:g}),{addToHistory:A,removeFromHistory:E}=yt(v,$,r),R={belowBreakpoint:_,hide:$},O=u(()=>e.side==="right"),F=u(()=>(i.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),ie=L(0),N=L(!1),ee=L(!1),re=L(k.value*F.value),Z=u(()=>O.value===!0?"left":"right"),d=u(()=>v.value===!0&&_.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),z=u(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(O.value?"R":"L")>-1||i.platform.is.ios===!0&&n.isContainer.value===!0),V=u(()=>e.overlay===!1&&v.value===!0&&_.value===!1),fe=u(()=>e.overlay===!0&&v.value===!0&&_.value===!1),Ge=u(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&N.value===!1?" hidden":"")),Ye=u(()=>({backgroundColor:`rgba(0,0,0,${ie.value*.4})`})),Ce=u(()=>O.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Xe=u(()=>O.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Je=u(()=>{const t={};return n.header.space===!0&&Ce.value===!1&&(z.value===!0?t.top=`${n.header.offset}px`:n.header.space===!0&&(t.top=`${n.header.size}px`)),n.footer.space===!0&&Xe.value===!1&&(z.value===!0?t.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(t.bottom=`${n.footer.size}px`)),t}),Ze=u(()=>{const t={width:`${k.value}px`,transform:`translateX(${re.value}px)`};return _.value===!0?t:Object.assign(t,Je.value)}),et=u(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),tt=u(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${c.value===!0?"mini":"standard"}`+(z.value===!0||V.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ce.value===!0?" q-drawer--top-padding":""))),at=u(()=>{const t=i.lang.rtl===!0?e.side:Z.value;return[[ye,it,void 0,{[t]:!0,mouse:!0}]]}),nt=u(()=>{const t=i.lang.rtl===!0?Z.value:e.side;return[[ye,Te,void 0,{[t]:!0,mouse:!0}]]}),ot=u(()=>{const t=i.lang.rtl===!0?Z.value:e.side;return[[ye,Te,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){rt(_,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}p(_,t=>{t===!0?(C=v.value,v.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(v.value===!0?(Q(0),W(0),ge()):T(!1))}),p(()=>e.side,(t,b)=>{n.instances[b]===R&&(n.instances[b]=void 0,n[b].space=!1,n[b].offset=0),n.instances[t]=R,n[t].size=k.value,n[t].space=V.value,n[t].offset=d.value}),p(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),p(()=>e.behavior+e.breakpoint,ve),p(n.isContainer,t=>{v.value===!0&&f(t!==!0),t===!0&&ve()}),p(n.scrollbarWidth,()=>{Q(v.value===!0?0:void 0)}),p(d,t=>{U("offset",t)}),p(V,t=>{l("onLayout",t),U("space",t)}),p(O,()=>{Q()}),p(k,t=>{Q(),me(e.miniToOverlay,t)}),p(()=>e.miniToOverlay,t=>{me(t,k.value)}),p(()=>i.lang.rtl,()=>{Q()}),p(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(lt(),n.animate())}),p(c,t=>{l("miniState",t)});function Q(t){t===void 0?qe(()=>{t=v.value===!0?0:k.value,Q(F.value*t)}):(n.isContainer.value===!0&&O.value===!0&&(_.value===!0||Math.abs(t)===k.value)&&(t+=F.value*n.scrollbarWidth.value),re.value=t)}function W(t){ie.value=t}function he(t){const b=t===!0?"remove":n.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function lt(){S!==null&&clearTimeout(S),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,S=setTimeout(()=>{S=null,ee.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function it(t){if(v.value!==!1)return;const b=k.value,I=se(t.distance.x,0,b);if(t.isFinal===!0){I>=Math.min(75,b)===!0?T():(n.animate(),W(0),Q(F.value*b)),N.value=!1;return}Q((i.lang.rtl===!0?O.value!==!0:O.value)?Math.max(b-I,0):Math.min(0,I-b)),W(se(I/b,0,1)),t.isFirst===!0&&(N.value=!0)}function Te(t){if(v.value!==!0)return;const b=k.value,I=t.direction===e.side,ue=(i.lang.rtl===!0?I!==!0:I)?se(t.distance.x,0,b):0;if(t.isFinal===!0){Math.abs(ue)<Math.min(75,b)===!0?(n.animate(),W(1),Q(0)):$(),N.value=!1;return}Q(F.value*ue),W(se(1-ue/b,0,1)),t.isFirst===!0&&(N.value=!0)}function ge(){f(!1),he(!0)}function U(t,b){n.update(e.side,t,b)}function rt(t,b){t.value!==b&&(t.value=b)}function me(t,b){U("size",t===!0?e.miniWidth:b)}return n.instances[e.side]=R,me(e.miniToOverlay,k.value),U("space",V.value),U("offset",d.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),ke(()=>{l("onLayout",V.value),l("miniState",c.value),C=e.showIfAbove===!0;const t=()=>{(v.value===!0?q:g)(!1,!0)};if(n.totalWidth.value!==0){qe(t);return}m=p(n.totalWidth,()=>{m(),m=void 0,v.value===!1&&e.showIfAbove===!0&&_.value===!1?T(!1):t()})}),le(()=>{m!==void 0&&m(),S!==null&&(clearTimeout(S),S=null),v.value===!0&&ge(),n.instances[e.side]===R&&(n.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const t=[];_.value===!0&&(e.noSwipeOpen===!1&&t.push(We(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),t.push(Le("div",{ref:"backdrop",class:Ge.value,style:Ye.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>ot.value)));const b=c.value===!0&&w.mini!==void 0,I=[y("div",{...a,key:""+b,class:[et.value,a.class]},b===!0?w.mini():oe(w.default))];return e.elevated===!0&&v.value===!0&&I.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Le("aside",{ref:"content",class:tt.value,style:Ze.value},I,"contentclose",e.noSwipeClose!==!0&&_.value===!0,()=>nt.value)),y("div",{class:"q-drawer-container"},t)}}}),Rt="/assets/logo-min.987e5642.svg",Ft=j({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:w,emit:l}){let a=!1,o,i,s=null,f=null,h,x;function n(){o&&o(),o=null,a=!1,s!==null&&(clearTimeout(s),s=null),f!==null&&(clearTimeout(f),f=null),i!==void 0&&i.removeEventListener("transitionend",h),h=null}function C(c,k,v){k!==void 0&&(c.style.height=`${k}px`),c.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,a=!0,o=v}function S(c,k){c.style.overflowY=null,c.style.height=null,c.style.transition=null,n(),k!==x&&l(k)}function m(c,k){let v=0;i=c,a===!0?(n(),v=c.offsetHeight===c.scrollHeight?0:void 0):(x="hide",c.style.overflowY="hidden"),C(c,v,k),s=setTimeout(()=>{s=null,c.style.height=`${c.scrollHeight}px`,h=r=>{f=null,(Object(r)!==r||r.target===c)&&S(c,"show")},c.addEventListener("transitionend",h),f=setTimeout(h,e.duration*1.1)},100)}function _(c,k){let v;i=c,a===!0?n():(x="show",c.style.overflowY="hidden",v=c.scrollHeight),C(c,v,k),s=setTimeout(()=>{s=null,c.style.height=0,h=r=>{f=null,(Object(r)!==r||r.target===c)&&S(c,"hide")},c.addEventListener("transitionend",h),f=setTimeout(h,e.duration*1.1)},100)}return le(()=>{a===!0&&n()}),()=>y(xt,{css:!1,appear:e.appear,onEnter:m,onLeave:_},w.default)}});const K=_t({}),jt=Object.keys(Ue);var Et=j({name:"QExpansionItem",props:{...Ue,...Re,...Fe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...je,"click","afterShow","afterHide"],setup(e,{slots:w,emit:l}){const{proxy:{$q:a}}=J(),o=Ee(e,a),i=L(e.modelValue!==null?e.modelValue:e.defaultOpened),s=L(null),f=$e(),{show:h,hide:x,toggle:n}=Ne({showing:i});let C,S;const m=u(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),_=u(()=>{if(e.contentInsetLevel===void 0)return null;const d=a.lang.rtl===!0?"Right":"Left";return{["padding"+d]:e.contentInsetLevel*56+"px"}}),c=u(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),k=u(()=>{const d={};return jt.forEach(z=>{d[z]=e[z]}),d}),v=u(()=>c.value===!0||e.expandIconToggle!==!0),r=u(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||a.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),q=u(()=>e.disable!==!0&&(c.value===!0||e.expandIconToggle===!0)),g=u(()=>({expanded:i.value===!0,detailsId:e.targetUid,toggle:n,show:h,hide:x})),T=u(()=>{const d=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:a.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":f,"aria-label":d}});p(()=>e.group,d=>{S!==void 0&&S(),d!==void 0&&F()});function $(d){c.value!==!0&&n(d),l("click",d)}function A(d){d.keyCode===13&&E(d,!0)}function E(d,z){z!==!0&&s.value!==null&&s.value.focus(),n(d),kt(d)}function R(){l("afterShow")}function O(){l("afterHide")}function F(){C===void 0&&(C=$e()),i.value===!0&&(K[e.group]=C);const d=p(i,V=>{V===!0?K[e.group]=C:K[e.group]===C&&delete K[e.group]}),z=p(()=>K[e.group],(V,fe)=>{fe===C&&V!==void 0&&V!==C&&x()});S=()=>{d(),z(),K[e.group]===C&&delete K[e.group],S=void 0}}function ie(){const d={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},z=[y(Ie,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:r.value})];return q.value===!0&&(Object.assign(d,{tabindex:0,...T.value,onClick:E,onKeyup:A}),z.unshift(y("div",{ref:s,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),y(we,d,()=>z)}function N(){let d;return w.header!==void 0?d=[].concat(w.header(g.value)):(d=[y(we,()=>[y(He,{lines:e.labelLines},()=>e.label||""),e.caption?y(He,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&d[e.switchToggleSide===!0?"push":"unshift"](y(we,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>y(Ie,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&d[e.switchToggleSide===!0?"unshift":"push"](ie()),d}function ee(){const d={ref:"item",style:e.headerStyle,class:e.headerClass,dark:o.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return v.value===!0&&(d.clickable=!0,d.onClick=$,Object.assign(d,c.value===!0?k.value:T.value)),y(It,d,N)}function re(){return We(y("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:_.value,id:f},oe(w.default)),[[St,i.value]])}function Z(){const d=[ee(),y(Ft,{duration:e.duration,onShow:R,onHide:O},re)];return e.expandSeparator===!0&&d.push(y(Pe,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:o.value}),y(Pe,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:o.value})),d}return e.group!==void 0&&F(),le(()=>{S!==void 0&&S()}),()=>y("div",{class:m.value},[y("div",{class:"q-expansion-item__container relative-position"},Z())])}});const Nt={class:"px-5 py-10"},Wt={class:"flex flex-col pl-5"},Ut=pe({__name:"menu",setup(e){const w=pt(),l=G({isActive:w.path,menuItems:[{title:"Offline Home Page",link:"/"},{title:"Manual Module",link:"/manual-module"},{title:"Static Module",link:"/static-module"},{title:"Mongo Db",link:"/mongo"}]});return p(()=>w.path,()=>{l.isActive=w.path}),(a,o)=>{const i=ce("router-link");return B(),Y("div",Nt,[H(Pt,{class:"flex flex-col"},{default:D(()=>[(B(!0),Y(de,null,Be(l.menuItems,(s,f)=>(B(),Y(de,{key:f},[s.children?(B(),X(Et,{key:1,class:"menu-item","expand-separator":"",label:s.title},{default:D(()=>[M("div",Wt,[(B(!0),Y(de,null,Be(s.children,(h,x)=>(B(),X(i,{key:x,to:h.link,class:ze(["menu-item menu-child",{"menu-active":l.isActive==h.link}])},{default:D(()=>[xe(_e(h.title),1)]),_:2},1032,["to","class"]))),128))])]),_:2},1032,["label"])):(B(),X(i,{key:0,to:s.link,class:ze(["menu-item",{"menu-active":l.isActive==s.link}])},{default:D(()=>[xe(_e(s.title),1)]),_:2},1032,["to","class"]))],64))),128))]),_:1})])}}});const Kt={class:"flex items-center"},Gt={href:"https://origamicore.com/"},Yt=["src"],Xt={key:1,src:Rt,alt:"logo",class:"w-[40px] ml-2"},Jt={class:"flex items-center gap-4"},Zt=pe({__name:"navbar",setup(e){const w=Bt(),l=Ke(),a=G({showDrawer:!1}),o=u(()=>l.isDark?"fas fa-moon":"fas fa-sun");function i(){a.showDrawer=!a.showDrawer}return(s,f)=>(B(),Y(de,null,[H(Mt,null,{default:D(()=>[H(Vt,{class:"navbar"},{default:D(()=>[M("div",Kt,[H(Qe,{flat:"",padding:"sm",dense:"",icon:"menu","aria-label":"Menu",onClick:i}),M("a",Gt,[te(w).screen.width>600?(B(),Y("img",{key:0,src:te(l).isDark?"logo-dark.svg":"logo.svg",alt:"logo",class:"w-[120px] ml-2"},null,8,Yt)):(B(),Y("img",Xt))])]),M("div",Jt,[H(Qe,{flat:"",padding:"sm",icon:o.value,onClick:te(l).changeTheme},null,8,["icon","onClick"])])]),_:1})]),_:1}),H(At,{modelValue:a.showDrawer,"onUpdate:modelValue":f[0]||(f[0]=h=>a.showDrawer=h),"show-if-above":"",bordered:"",class:"drawer"},{default:D(()=>[H(Ut)]),_:1},8,["modelValue"])],64))}}),ea={class:"card mb-5"},ta={class:"card-header"},aa={class:"text-green-500"},na=M("label",null,"Change the running server Port:",-1),ca=pe({__name:"MainLayout",setup(e){const w=Ke(),l=Ct(),a=G({showChangePort:!1,port:Oe.port,loading:!1});ke(()=>{o()});async function o(){a.loading=!0;try{await w.getProject()}catch{Tt.error("Something went wrong. Maybe you are not connectet to any projects.")}a.loading=!1}function i(){$t.save(w.project)}function s(){a.showChangePort=!1}function f(){window.localStorage.setItem("port",a.port.toString()),a.showChangePort=!1,l.go(0)}return(h,x)=>{const n=ce("router-view"),C=ce("Loading"),S=ce("Dialog");return B(),X(Dt,{view:"hHh Lpr lff"},{default:D(()=>[H(Zt),H(Qt,null,{default:D(()=>[a.loading?(B(),X(C,{key:1})):(B(),X(zt,{key:0,class:"page-container"},{default:D(()=>[M("div",ea,[M("div",ta,[M("span",null,[xe("The project is running on port: "),M("b",aa,_e(te(Oe).port),1)]),M("button",{class:"btn btn-blue",onClick:i},"Save Project")])]),H(n)]),_:1}))]),_:1}),a.showChangePort?(B(),X(S,{key:0,show:a.showChangePort,title:"Change Port",onCloseDialog:s,onConfirmDialog:f},{default:D(()=>[na,H(qt,{outlined:"",modelValue:a.port,"onUpdate:modelValue":x[0]||(x[0]=m=>a.port=m),dark:te(w).isDark,label:"Port",type:"number",class:"mt-3"},null,8,["modelValue","dark"])]),_:1},8,["show"])):Lt("",!0)]),_:1})}}});export{ca as default};