import{r as d,e as z,l as pt,j as $,f as wt}from"./index-syAfpUY6.js";function Ct(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...s)=>t(...s);return new Proxy(n,{get:(s,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}function k(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const xt=t=>Array.isArray(t);function O(t){return typeof t=="string"||Array.isArray(t)}function N(t){const e=[{},{}];return t?.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function bt(t,e,n,s){if(typeof e=="function"){const[r,o]=N(s);e=e(n!==void 0?n:t.custom,r,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,o]=N(s);e=e(n!==void 0?n:t.custom,r,o)}return e}const Mt=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vt=["initial",...Mt],T=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],F=new Set(T),Pt={skipAnimations:!1,useManualTiming:!1},St=t=>t;function Vt(t){let e=new Set,n=new Set,s=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function f(i){o.has(i)&&(u.schedule(i),t()),i(a)}const u={schedule:(i,m=!1,g=!1)=>{const y=g&&s?e:n;return m&&o.add(i),y.has(i)||y.add(i),i},cancel:i=>{n.delete(i),o.delete(i)},process:i=>{if(a=i,s){r=!0;return}s=!0,[e,n]=[n,e],n.clear(),e.forEach(f),s=!1,r&&(r=!1,u.process(i))}};return u}const P=["read","resolveKeyframes","update","preRender","render","postRender"],Tt=40;function Z(t,e){let n=!1,s=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=P.reduce((p,w)=>(p[w]=Vt(o),p),{}),{read:f,resolveKeyframes:u,update:i,preRender:m,render:g,postRender:l}=a,y=()=>{const p=Pt.useManualTiming?r.timestamp:performance.now();n=!1,r.delta=s?1e3/60:Math.max(Math.min(p-r.timestamp,Tt),1),r.timestamp=p,r.isProcessing=!0,f.process(r),u.process(r),i.process(r),m.process(r),g.process(r),l.process(r),r.isProcessing=!1,n&&e&&(s=!1,t(y))},h=()=>{n=!0,s=!0,r.isProcessing||t(y)};return{schedule:P.reduce((p,w)=>{const R=a[w];return p[w]=(gt,yt=!1,ht=!1)=>(n||h(),R.schedule(gt,yt,ht)),p},{}),cancel:p=>{for(let w=0;w<P.length;w++)a[P[w]].cancel(p)},state:r,steps:a}}const{schedule:G,cancel:Re,state:Le,steps:ke}=Z(typeof requestAnimationFrame<"u"?requestAnimationFrame:St,!0),K=t=>e=>typeof e=="string"&&e.startsWith(t),At=K("--"),Rt=K("var(--"),Oe=t=>Rt(t)?Lt.test(t.split("/*")[0].trim()):!1,Lt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,kt=(t,e,n)=>n>e?e:n<t?t:n,j={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},W={...j,transform:t=>kt(0,1,t)},S={...j,default:1},v=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),b=v("deg"),L=v("%"),c=v("px"),We=v("vh"),Fe=v("vw"),H={...L,parse:t=>L.parse(t)/100,transform:t=>L.transform(t*100)},Ot={borderWidth:c,borderTopWidth:c,borderRightWidth:c,borderBottomWidth:c,borderLeftWidth:c,borderRadius:c,radius:c,borderTopLeftRadius:c,borderTopRightRadius:c,borderBottomRightRadius:c,borderBottomLeftRadius:c,width:c,maxWidth:c,height:c,maxHeight:c,top:c,right:c,bottom:c,left:c,padding:c,paddingTop:c,paddingRight:c,paddingBottom:c,paddingLeft:c,margin:c,marginTop:c,marginRight:c,marginBottom:c,marginLeft:c,backgroundPositionX:c,backgroundPositionY:c},Wt={rotate:b,rotateX:b,rotateY:b,rotateZ:b,scale:S,scaleX:S,scaleY:S,scaleZ:S,skew:b,skewX:b,skewY:b,distance:c,translateX:c,translateY:c,translateZ:c,x:c,y:c,z:c,perspective:c,transformPerspective:c,opacity:W,originX:H,originY:H,originZ:c},E={...j,transform:Math.round},q={...Ot,...Wt,zIndex:E,size:c,fillOpacity:W,strokeOpacity:W,numOctaves:E},Ft=new Set(["opacity","clipPath","filter","transform"]),jt=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),je=t=>xt(t)?t[t.length-1]||0:t,B=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Bt="framerAppearId",Dt="data-"+B(Bt),M=t=>!!(t&&t.getVelocity);function It(t){if(F.has(t))return"transform";if(Ft.has(t))return B(t)}function U(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const J=d.createContext(null),$t=d.createContext({}),Nt=d.createContext({}),Q={};function Be(t){Object.assign(Q,t)}const{schedule:Gt,cancel:De}=Z(queueMicrotask,!1);function Ht(t){const e=M(t)?t.get():t;return jt(e)?e.toValue():e}const tt=d.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),A=d.createContext({}),et=typeof window<"u",Et=et?d.useLayoutEffect:d.useEffect;function Xt(t,e,n,s,r){var o,a;const{visualElement:f}=d.useContext(A),u=d.useContext(z),i=d.useContext(J),m=d.useContext(tt).reducedMotion,g=d.useRef();s=s||u.renderer,!g.current&&s&&(g.current=s(t,{visualState:e,parent:f,props:n,presenceContext:i,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:m}));const l=g.current,y=d.useContext(Nt);l&&!l.projection&&r&&(l.type==="html"||l.type==="svg")&&Yt(g.current,n,r,y),d.useInsertionEffect(()=>{l&&l.update(n,i)});const h=n[Dt],C=d.useRef(!!h&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,h))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,h)));return Et(()=>{l&&(window.MotionIsMounted=!0,l.updateFeatures(),Gt.render(l.render),C.current&&l.animationState&&l.animationState.animateChanges())}),d.useEffect(()=>{l&&(!C.current&&l.animationState&&l.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,h)}),C.current=!1))}),l}function Yt(t,e,n,s){const{layoutId:r,layout:o,drag:a,dragConstraints:f,layoutScroll:u,layoutRoot:i}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:nt(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!a||f&&U(f),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:s,layoutScroll:u,layoutRoot:i})}function nt(t){if(t)return t.options.allowProjection!==!1?t.projection:nt(t.parent)}function _t(t,e,n){return d.useCallback(s=>{s&&t.mount&&t.mount(s),e&&(s?e.mount(s):e.unmount()),n&&(typeof n=="function"?n(s):U(n)&&(n.current=s))},[e])}function D(t){return k(t.animate)||vt.some(e=>O(t[e]))}function zt(t){return!!(D(t)||t.variants)}function Zt(t,e){if(D(t)){const{initial:n,animate:s}=t;return{initial:n===!1||O(n)?n:void 0,animate:O(s)?s:void 0}}return t.inherit!==!1?e:{}}function Kt(t){const{initial:e,animate:n}=Zt(t,d.useContext(A));return d.useMemo(()=>({initial:e,animate:n}),[X(e),X(n)])}function X(t){return Array.isArray(t)?t.join(" "):t}const qt=Symbol.for("motionComponentSymbol");function Ut({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:s,Component:r}){t&&pt(t);function o(f,u){let i;const m={...d.useContext(tt),...f,layoutId:Jt(f)},{isStatic:g}=m,l=Kt(f),y=s(f,g);if(!g&&et){Qt();const h=te(m);i=h.MeasureLayout,l.visualElement=Xt(r,y,m,e,h.ProjectionNode)}return $.jsxs(A.Provider,{value:l,children:[i&&l.visualElement?$.jsx(i,{visualElement:l.visualElement,...m}):null,n(r,f,_t(y,l.visualElement,u),y,g,l.visualElement)]})}const a=d.forwardRef(o);return a[qt]=r,a}function Jt({layoutId:t}){const e=d.useContext($t).id;return e&&t!==void 0?e+"-"+t:t}function Qt(t,e){d.useContext(z).strict}function te(t){const{drag:e,layout:n}=wt;if(!e&&!n)return{};const s={...e,...n};return{MeasureLayout:e?.isEnabled(t)||n?.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const ee=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function st(t){return typeof t!="string"||t.includes("-")?!1:!!(ee.indexOf(t)>-1||/[A-Z]/u.test(t))}function ne(t,{style:e,vars:n},s,r){Object.assign(t.style,e,r&&r.getProjectionStyles(s));for(const o in n)t.style.setProperty(o,n[o])}const se=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function re(t,e,n,s){ne(t,e,void 0,s);for(const r in e.attrs)t.setAttribute(se.has(r)?r:B(r),e.attrs[r])}function rt(t,{layout:e,layoutId:n}){return F.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Q[t]||t==="opacity")}function ot(t,e,n){var s;const{style:r}=t,o={};for(const a in r)(M(r[a])||e.style&&M(e.style[a])||rt(a,t)||((s=n?.getValue(a))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return n&&r&&typeof r.willChange=="string"&&(n.applyWillChange=!1),o}function oe(t,e,n){const s=ot(t,e,n);for(const r in t)if(M(t[r])||M(e[r])){const o=T.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;s[o]=t[r]}return s}function ae(t){const e=d.useRef(null);return e.current===null&&(e.current=t()),e.current}function ie({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:n,onMount:s},r,o,a,f){const u={latestValues:ce(r,o,a,f?!1:t,e),renderState:n()};return s&&(u.mount=i=>s(r,i,u)),u}const at=t=>(e,n)=>{const s=d.useContext(A),r=d.useContext(J),o=()=>ie(t,e,s,r,n);return n?o():ae(o)};function Y(t,e,n){const s=Array.isArray(e)?e:[e];for(let r=0;r<s.length;r++){const o=bt(t,s[r]);if(o){const{transitionEnd:a,transition:f,...u}=o;n(u,a)}}}function ce(t,e,n,s,r){var o;const a={};let f=s&&((o=t.style)===null||o===void 0?void 0:o.willChange)===void 0;const u=r(t,{});for(const C in u)a[C]=Ht(u[C]);let{initial:i,animate:m}=t;const g=D(t),l=zt(t);e&&l&&!g&&t.inherit!==!1&&(i===void 0&&(i=e.initial),m===void 0&&(m=e.animate));let y=n?n.initial===!1:!1;y=y||i===!1;const h=y?m:i;return h&&typeof h!="boolean"&&!k(h)&&Y(t,h,(C,x)=>{for(const p in C){let w=C[p];if(Array.isArray(w)){const R=y?w.length-1:0;w=w[R]}w!==null&&(a[p]=w)}for(const p in x)a[p]=x[p]}),f&&m&&i!==!1&&!k(m)&&Y(t,m,C=>{for(const x in C)if(It(x)){a.willChange="transform";return}}),a}const I=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),it=()=>({...I(),attrs:{}}),ct=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ue={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},le=T.length;function fe(t,e,n){let s="",r=!0;for(let o=0;o<le;o++){const a=T[o],f=t[a];if(f===void 0)continue;let u=!0;if(typeof f=="number"?u=f===(a.startsWith("scale")?1:0):u=parseFloat(f)===0,!u||n){const i=ct(f,q[a]);if(!u){r=!1;const m=ue[a]||a;s+=`${m}(${i}) `}n&&(e[a]=i)}}return s=s.trim(),n?s=n(e,r?"":s):r&&(s="none"),s}function ut(t,e,n){const{style:s,vars:r,transformOrigin:o}=t;let a=!1,f=!1;for(const u in e){const i=e[u];if(F.has(u)){a=!0;continue}else if(At(u)){r[u]=i;continue}else{const m=ct(i,q[u]);u.startsWith("origin")?(f=!0,o[u]=m):s[u]=m}}if(e.transform||(a||n?s.transform=fe(e,t.transform,n):s.transform&&(s.transform="none")),f){const{originX:u="50%",originY:i="50%",originZ:m=0}=o;s.transformOrigin=`${u} ${i} ${m}`}}function _(t,e,n){return typeof t=="string"?t:c.transform(e+n*t)}function de(t,e,n){const s=_(e,t.x,t.width),r=_(n,t.y,t.height);return`${s} ${r}`}const me={offset:"stroke-dashoffset",array:"stroke-dasharray"},ge={offset:"strokeDashoffset",array:"strokeDasharray"};function ye(t,e,n=1,s=0,r=!0){t.pathLength=1;const o=r?me:ge;t[o.offset]=c.transform(-s);const a=c.transform(e),f=c.transform(n);t[o.array]=`${a} ${f}`}function lt(t,{attrX:e,attrY:n,attrScale:s,originX:r,originY:o,pathLength:a,pathSpacing:f=1,pathOffset:u=0,...i},m,g){if(ut(t,i,g),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:l,style:y,dimensions:h}=t;l.transform&&(h&&(y.transform=l.transform),delete l.transform),h&&(r!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=de(h,r!==void 0?r:.5,o!==void 0?o:.5)),e!==void 0&&(l.x=e),n!==void 0&&(l.y=n),s!==void 0&&(l.scale=s),a!==void 0&&ye(l,a,f,u,!1)}const ft=t=>typeof t=="string"&&t.toLowerCase()==="svg",he={useVisualState:at({scrapeMotionValuesFromProps:oe,createRenderState:it,onMount:(t,e,{renderState:n,latestValues:s})=>{G.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{lt(n,s,ft(e.tagName),t.transformTemplate),re(e,n)})}})},pe={useVisualState:at({applyWillChange:!0,scrapeMotionValuesFromProps:ot,createRenderState:I})};function dt(t,e,n){for(const s in e)!M(e[s])&&!rt(s,n)&&(t[s]=e[s])}function we({transformTemplate:t},e){return d.useMemo(()=>{const n=I();return ut(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Ce(t,e){const n=t.style||{},s={};return dt(s,n,t),Object.assign(s,we(t,e)),s}function xe(t,e){const n={},s=Ce(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const be=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function V(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||be.has(t)}let mt=t=>!V(t);function Me(t){t&&(mt=e=>e.startsWith("on")?!V(e):t(e))}try{Me(require("@emotion/is-prop-valid").default)}catch{}function ve(t,e,n){const s={};for(const r in t)r==="values"&&typeof t.values=="object"||(mt(r)||n===!0&&V(r)||!e&&!V(r)||t.draggable&&r.startsWith("onDrag"))&&(s[r]=t[r]);return s}function Pe(t,e,n,s){const r=d.useMemo(()=>{const o=it();return lt(o,e,ft(s),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};dt(o,t.style,t),r.style={...o,...r.style}}return r}function Se(t=!1){return(n,s,r,{latestValues:o},a)=>{const u=(st(n)?Pe:xe)(s,o,a,n),i=ve(s,typeof n=="string",t),m=n!==d.Fragment?{...i,...u,ref:r}:{},{children:g}=s,l=d.useMemo(()=>M(g)?g.get():g,[g]);return d.createElement(n,{...m,children:l})}}function Ve(t,e){return function(s,{forwardMotionProps:r}={forwardMotionProps:!1}){const a={...st(s)?he:pe,preloadedFeatures:t,useRender:Se(r),createVisualElement:e,Component:s};return Ut(a)}}const Te=Ve(),Ie=Ct(Te);export{Gt as $,Pt as A,Dt as B,ke as C,ve as D,et as E,bt as F,Oe as G,j as H,T as I,L as J,b as K,$t as L,tt as M,Fe as N,We as O,J as P,W as Q,q as R,Nt as S,Ft as T,je as U,O as V,vt as W,k as X,xt as Y,Mt as Z,U as _,Et as a,Q as a0,D as a1,zt as a2,ne as a3,At as a4,ut as a5,ot as a6,se as a7,B as a8,oe as a9,lt as aa,re as ab,ft as ac,st as ad,Ve as b,Re as c,Ct as d,Le as e,G as f,It as g,Ot as h,M as i,qt as j,at as k,Me as l,Ie as m,St as n,Bt as o,A as p,kt as q,Ht as r,P as s,F as t,ae as u,V as v,Ut as w,Be as x,fe as y,c as z};