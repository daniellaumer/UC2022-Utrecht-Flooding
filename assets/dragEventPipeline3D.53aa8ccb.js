var G=Object.defineProperty,H=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var O=(e,n,t)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))M.call(n,t)&&O(e,t,n[t]);if(N)for(var t of N(n))U.call(n,t)&&O(e,t,n[t]);return e},R=(e,n)=>H(e,b(n));import{l2 as h,r as u,t as x,lm as g,lM as D,lN as S,ln as T,lo as y,ar as E,ah as k,ai as q,al as v,lO as I,dN as w,kS as C}from"./vendor.e1f4f720.js";function A(e,n){return P(e,()=>n)}function P(e,n){const t=E(),p=E();let c=!1;return s=>{const i=n(s);if(s.action==="start"){const a=g(s.screenStart,D(S.get())),r=T(e.state.camera,a,$);u(r)&&(c=y(i,r,t))}if(!c)return null;const f=g(s.screenEnd,D(S.get())),l=T(e.state.camera,f,$);return x(l)?null:y(i,l,p)?R(m({},s),{renderStart:t,renderEnd:p,plane:i,ray:l}):null}}var d;function B(e){let n=null;return t=>{switch(t.action){case"start":n=e.disableDisplay();break;case"end":case"cancel":u(n)&&(n.remove(),n=null)}return t}}function F(e,n=null){const t=k(e.state.viewingMode);t.options.selectionMode=!0,t.options.store=q.MIN,t.options.hud=!1;const p=C(),c={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},s=E(),i=v(n,e.spatialReference),f=a=>{e.map.ground&&e.map.ground.opacity<1?c.exclude.add(I):c.exclude.delete(I),e.sceneIntersectionHelper.intersectIntersectorScreen(g(a,p),t,c);const r=t.results.min;let o;if(r.getIntersectionPoint(s))o=r.intersector===w.TERRAIN?d.GROUND:d.OTHER;else{if(!t.results.ground.getIntersectionPoint(s))return null;o=d.GROUND}return{location:e.renderCoordsHelper.fromRenderCoords(s,i),surfaceType:o}};let l;return a=>{if(a.action==="start"){const o=f(a.screenStart);l=u(o)?o.location:null}if(x(l))return null;const r=f(a.screenEnd);return u(r)&&u(r.location)?R(m({},a),{mapStart:l,mapEnd:r.location,surfaceType:r.surfaceType}):null}}(function(e){e[e.GROUND=0]="GROUND",e[e.OTHER=1]="OTHER"})(d||(d={}));const $=h();export{F as B,A as C,B as z};
