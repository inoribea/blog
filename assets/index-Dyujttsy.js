import{r as n,j as x}from"./index-DzXv2h3l.js";import{M as L,u as w,P as $,a as k,L as S}from"./proxy-eQ4Uy79O.js";class A extends n.Component{getSnapshotBeforeUpdate(c){const e=this.props.childRef.current;if(e&&c.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=e.offsetHeight||0,s.width=e.offsetWidth||0,s.top=e.offsetTop,s.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:i,isPresent:c}){const e=n.useId(),s=n.useRef(null),d=n.useRef({width:0,height:0,top:0,left:0}),{nonce:m}=n.useContext(L);return n.useInsertionEffect(()=>{const{width:a,height:t,top:f,left:C}=d.current;if(c||!s.current||!a||!t)return;s.current.dataset.motionPopId=e;const r=document.createElement("style");return m&&(r.nonce=m),document.head.appendChild(r),r.sheet&&r.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${t}px !important;
            top: ${f}px !important;
            left: ${C}px !important;
          }
        `),()=>{document.head.removeChild(r)}},[c]),x.jsx(A,{isPresent:c,childRef:s,sizeRef:d,children:n.cloneElement(i,{ref:s})})}const D=({children:i,initial:c,isPresent:e,onExitComplete:s,custom:d,presenceAffectsLayout:m,mode:a})=>{const t=w(K),f=n.useId(),C=n.useMemo(()=>({id:f,initial:c,isPresent:e,custom:d,onExitComplete:r=>{t.set(r,!0);for(const u of t.values())if(!u)return;s&&s()},register:r=>(t.set(r,!1),()=>t.delete(r))}),m?[Math.random()]:[e]);return n.useMemo(()=>{t.forEach((r,u)=>t.set(u,!1))},[e]),n.useEffect(()=>{!e&&!t.size&&s&&s()},[e]),a==="popLayout"&&(i=x.jsx(B,{isPresent:e,children:i})),x.jsx($.Provider,{value:C,children:i})};function K(){return new Map}const g=i=>i.key||"";function j(i){const c=[];return n.Children.forEach(i,e=>{n.isValidElement(e)&&c.push(e)}),c}const F=({children:i,exitBeforeEnter:c,custom:e,initial:s=!0,onExitComplete:d,presenceAffectsLayout:m=!0,mode:a="sync"})=>{const t=n.useMemo(()=>j(i),[i]),f=t.map(g),C=n.useRef(!0),r=n.useRef(t),u=w(()=>new Map),[P,z]=n.useState(t),[p,v]=n.useState(t);k(()=>{C.current=!1,r.current=t;for(let l=0;l<p.length;l++){const o=g(p[l]);f.includes(o)?u.delete(o):u.get(o)!==!0&&u.set(o,!1)}},[p,f.length,f.join("-")]);const y=[];if(t!==P){let l=[...t];for(let o=0;o<p.length;o++){const h=p[o],R=g(h);f.includes(R)||(l.splice(o,0,h),y.push(h))}a==="wait"&&y.length&&(l=y),v(j(l)),z(t);return}const{forceRender:E}=n.useContext(S);return x.jsx(x.Fragment,{children:p.map(l=>{const o=g(l),h=t===p||f.includes(o),R=()=>{if(u.has(o))u.set(o,!0);else return;let M=!0;u.forEach(I=>{I||(M=!1)}),M&&(E?.(),v(r.current),d&&d())};return x.jsx(D,{isPresent:h,initial:!C.current||s?void 0:!1,custom:h?void 0:e,presenceAffectsLayout:m,mode:a,onExitComplete:h?void 0:R,children:l},o)})})};export{F as A};
