import{c as u,h as r,r as z,o as V,w as X,g as G,s as f,b as M,N as J,O as Y,T as Z,m as p}from"./index-B59M3vIp.js";import{k as O,c as A,u as ee,e as te,a as ne,f as ae,Q as _,d as le,R as ue}from"./Ripple-DS4dd7DX.js";const ie={size:{type:[Number,String],default:"1em"},color:String};function re(e){return{cSize:u(()=>e.size in O?`${O[e.size]}px`:e.size),classes:u(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const se=A({name:"QSpinner",props:{...ie,thickness:{type:Number,default:5}},setup(e){const{cSize:i,classes:v}=re(e);return()=>r("svg",{class:v.value+" q-spinner-mat",width:i.value,height:i.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}}),Q={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},oe=Object.keys(Q),ce={align:{type:String,validator:e=>oe.includes(e)}};function de(e){return u(()=>{const i=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Q[i]}`})}const j={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ve={xs:8,sm:10,md:14,lg:20,xl:24},fe=["button","submit","reset"],be=/[^\s]\/[^\s]/,ge=["flat","outline","push","unelevated"],me=(e,i)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":i,he={...ee,...te,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ge.reduce((e,i)=>(e[i]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ce.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function ye(e){const i=ne(e,ve),v=de(e),{hasRouterLink:x,hasLink:E,linkTag:S,linkAttrs:B,navigateOnClick:C}=ae({fallbackTag:"button"}),T=u(()=>{const a=e.fab===!1&&e.fabMini===!1?i.value:{};return e.padding!==void 0?Object.assign({},a,{padding:e.padding.split(/\s+/).map(d=>d in j?j[d]+"px":d).join(" "),minWidth:"0",minHeight:"0"}):a}),P=u(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=u(()=>e.disable!==!0&&e.loading!==!0),R=u(()=>h.value===!0?e.tabindex||0:-1),n=u(()=>me(e,"standard")),L=u(()=>{const a={tabindex:R.value};return E.value===!0?Object.assign(a,B.value):fe.includes(e.type)===!0&&(a.type=e.type),S.value==="a"?(e.disable===!0?a["aria-disabled"]="true":a.href===void 0&&(a.role="button"),x.value!==!0&&be.test(e.type)===!0&&(a.type=e.type)):e.disable===!0&&(a.disabled="",a["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(a,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),a}),c=u(()=>{let a;e.color!==void 0?e.flat===!0||e.outline===!0?a=`text-${e.textColor||e.color}`:a=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(a=`text-${e.textColor}`);const d=e.round===!0?"round":`rectangle${P.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${d}`+(a!==void 0?" "+a:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),y=u(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:c,style:T,innerClasses:y,attributes:L,hasLink:E,linkTag:S,navigateOnClick:C,isActionable:h}}const{passiveCapture:s}=p;let b=null,g=null,m=null;const xe=A({name:"QBtn",props:{...he,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:i,emit:v}){const{proxy:x}=G(),{classes:E,style:S,innerClasses:B,attributes:C,hasLink:T,linkTag:P,navigateOnClick:h,isActionable:R}=ye(e),n=z(null),L=z(null);let c=null,y,a=null;const d=u(()=>e.label!==void 0&&e.label!==null&&e.label!==""),K=u(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:T.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),N=u(()=>({center:e.round})),D=u(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),I=u(()=>{if(e.loading===!0)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(R.value===!0){const t={onClick:$,onKeydown:F,onMousedown:U};if(x.$q.platform.has.touch===!0){const l=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${l}`]=H}return t}return{onClick:f}}),W=u(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+E.value,style:S.value,...C.value,...I.value}));function $(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const l=document.activeElement;if(e.type==="submit"&&l!==document.body&&n.value.contains(l)===!1&&l.contains(n.value)===!1){n.value.focus();const w=()=>{document.removeEventListener("keydown",f,!0),document.removeEventListener("keyup",w,s),n.value!==null&&n.value.removeEventListener("blur",w,s)};document.addEventListener("keydown",f,!0),document.addEventListener("keyup",w,s),n.value.addEventListener("blur",w,s)}}h(t)}}function F(t){n.value!==null&&(v("keydown",t),M(t,[13,32])===!0&&g!==n.value&&(g!==null&&k(),t.defaultPrevented!==!0&&(n.value.focus(),g=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",o,!0),n.value.addEventListener("blur",o,s)),f(t)))}function H(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(b!==n.value&&(b!==null&&k(),b=n.value,c=t.target,c.addEventListener("touchcancel",o,s),c.addEventListener("touchend",o,s)),y=!0,a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y=!1},200)))}function U(t){n.value!==null&&(t.qSkipRipple=y===!0,v("mousedown",t),t.defaultPrevented!==!0&&m!==n.value&&(m!==null&&k(),m=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",o,s)))}function o(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(g===n.value&&M(t,[13,32])===!0){const l=new MouseEvent("click",t);l.qKeyEvent=!0,t.defaultPrevented===!0&&J(l),t.cancelBubble===!0&&Y(l),n.value.dispatchEvent(l),f(t),t.qKeyEvent=!0}v("keyup",t)}k()}}function k(t){const l=L.value;t!==!0&&(b===n.value||m===n.value)&&l!==null&&l!==document.activeElement&&(l.setAttribute("tabindex",-1),l.focus()),b===n.value&&(c!==null&&(c.removeEventListener("touchcancel",o,s),c.removeEventListener("touchend",o,s)),b=c=null),m===n.value&&(document.removeEventListener("mouseup",o,s),m=null),g===n.value&&(document.removeEventListener("keyup",o,!0),n.value!==null&&n.value.removeEventListener("blur",o,s),g=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function q(t){f(t),t.qSkipRipple=!0}return V(()=>{k(!0)}),Object.assign(x,{click:$}),()=>{let t=[];e.icon!==void 0&&t.push(r(_,{name:e.icon,left:e.stack!==!0&&d.value===!0,role:"img","aria-hidden":"true"})),d.value===!0&&t.push(r("span",{class:"block"},[e.label])),t=le(i.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(r(_,{name:e.iconRight,right:e.stack!==!0&&d.value===!0,role:"img","aria-hidden":"true"}));const l=[r("span",{class:"q-focus-helper",ref:L})];return e.loading===!0&&e.percentage!==void 0&&l.push(r("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[r("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),l.push(r("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+B.value},t)),e.loading!==null&&l.push(r(Z,{name:"q-transition--fade"},()=>e.loading===!0?[r("span",{key:"loading",class:"absolute-full flex flex-center"},i.loading!==void 0?i.loading():[r(se)])]:null)),X(r(P.value,W.value,l),[[ue,K.value,void 0,N.value]])}}});export{xe as Q};
