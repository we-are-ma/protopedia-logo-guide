import{d as b,L as A,M as O,P as K,h as c,a as N,r as j,N as R,O as S,u as T,E as L,Q as v,R as x,S as B,T as C,U as E,V as I,W as w,X as V,Y as F,Z as q,$ as z,t as M,v as Q,z as U,_ as W}from"./D_Iazx-V.js";const X=b({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const o=e.renderKey,t=e.route,i={};for(const a in e.route)Object.defineProperty(i,a,{get:()=>o===e.renderKey?e.route[a]:t[a],enumerable:!0});return A(K,O(i)),()=>c(e.vnode,{ref:e.vnodeRef})}}),Y=b({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o,slots:t,expose:i}){const a=N(),r=j(),d=R(K,null);let l;i({pageRef:r});const s=R(S,null);let u;const g=a.deferHydration();if(a.isHydrating){const n=a.hooks.hookOnce("app:error",g);T().beforeEach(n)}e.pageKey&&L(()=>e.pageKey,(n,y)=>{n!==y&&a.callHook("page:loading:start")});let m=!1;return()=>c(F,{name:e.name,route:e.route,...o},{default:n=>{const y=$(d,n.route,n.Component),p=d&&d.matched.length===n.route.matched.length;if(!n.Component){if(u&&!p)return u;g();return}if(u&&s&&!s.isCurrent(n.route))return u;if(y&&d&&(!s||s!=null&&s.isCurrent(d)))return p?u:null;const f=v(n,e.pageKey);!a.isHydrating&&!D(d,n.route,n.Component)&&l===f&&(a.callHook("page:loading:end"),m=!0),l=f;const h=!!(e.transition??n.route.meta.pageTransition??x),H=h&&Z([e.transition,n.route.meta.pageTransition,x,{onAfterLeave:()=>{a.callHook("page:transition:finish",n.Component)}}].filter(Boolean)),k=e.keepalive??n.route.meta.keepalive??B;return u=C(h&&H,E(k,c(I,{suspensible:!0,onPending:()=>a.callHook("page:start",n.Component),onResolve:()=>{w(()=>a.callHook("page:finish",n.Component).then(()=>{if(!m)return a.callHook("page:loading:end");m=!1}).finally(g))}},{default:()=>{const _=c(X,{key:f||void 0,vnode:t.default?c(V,void 0,t.default(n)):n.Component,route:n.route,renderKey:f||void 0,trackRootNodes:h,vnodeRef:r});return k&&(_.type.name=n.Component.type.name||n.Component.type.__name||"RouteProvider"),_}}))).default(),u}})}});function Z(e){const o=e.map(t=>({...t,onAfterLeave:t.onAfterLeave?q(t.onAfterLeave):void 0}));return z(...o)}function $(e,o,t){if(!e)return!1;const i=o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(t==null?void 0:t.type)});return!i||i===-1?!1:o.matched.slice(0,i).some((a,r)=>{var d,l,s;return((d=a.components)==null?void 0:d.default)!==((s=(l=e.matched[r])==null?void 0:l.components)==null?void 0:s.default)})||t&&v({route:o,Component:t})!==v({route:e,Component:t})}function D(e,o,t){return e?o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(t==null?void 0:t.type)})<o.matched.length-1:!1}const G={class:"bg-white"};function J(e,o){const t=Y;return Q(),M("main",G,[U(t)])}const P={},ne=W(P,[["render",J]]);export{ne as default};
