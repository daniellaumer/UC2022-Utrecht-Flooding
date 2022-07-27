import{pb as s,oV as g,oJ as l,oS as v,oR as J,oU as p,oY as y,p9 as N,ak as b,bQ as I,ps as O,oX as f,pe as P,pd as Z,pf as k,aO as $,oP as E,v as F,pg as X,oQ as K,bR as j,fF as L,bZ as Y}from"./index.4cc6cf99.js";import{c as m,g as x,h as w,l as B,i as D,j as H,k as S}from"./arcadeUtils.f06b2834.js";import{S as _,g as nn,A as tn,w as en,x as rn,p as un,O as on,d as an,h as sn,k as cn,I as fn,E as ln,j as gn,l as wn,y as hn,W as G,K as V,F as M,M as z,m as dn,P as W,U as q,G as mn,V as An,b as pn,v as yn,q as C,N as Q,J as En}from"./geometryEngineAsync.41417521.js";function T(t){return X.indexOf("4.")===0?F.fromExtent(t):new F({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function A(t){if(g(t,2,2),!(t[0]instanceof l&&t[1]instanceof l)){if(!(t[0]instanceof l&&t[1]===null)){if(!(t[1]instanceof l&&t[0]===null)){if(t[0]!==null||t[1]!==null)throw new Error("Illegal Argument")}}}}async function U(t,r){if(t.type!=="polygon"&&t.type!=="polyline"&&t.type!=="extent")return 0;let i=1;(t.spatialReference.vcsWkid||t.spatialReference.latestVcsWkid)&&(i=H(t.spatialReference)/Y(t.spatialReference));let o=0;if(t.type==="polyline")for(const n of t.paths)for(let e=1;e<n.length;e++)o+=S(n[e],n[e-1],i);else if(t.type==="polygon")for(const n of t.rings){for(let e=1;e<n.length;e++)o+=S(n[e],n[e-1],i);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(o+=S(n[0],n[n.length-1],i))}else t.type==="extent"&&(o+=2*S([t.xmin,t.ymin,0],[t.xmax,t.ymin,0],i),o+=2*S([t.xmin,t.ymin,0],[t.xmin,t.ymax,0],i),o*=2,o+=4*Math.abs(f(t.zmax,0)*i-f(t.zmin,0)*i));const a=new I({hasZ:!1,hasM:!1,spatialReference:t.spatialReference,paths:[[0,0],[0,o]]});return M(a,r)}function bn(t){t.mode==="async"&&(t.functions.disjoint=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]===null||n[1]===null||_(n[0],n[1])})},t.functions.intersects=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&nn(n[0],n[1])})},t.functions.touches=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&tn(n[0],n[1])})},t.functions.crosses=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&en(n[0],n[1])})},t.functions.within=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&rn(n[0],n[1])})},t.functions.contains=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&un(n[0],n[1])})},t.functions.overlaps=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]!==null&&on(n[0],n[1])})},t.functions.equals=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return g(n,2,2),n[0]===n[1]||(n[0]instanceof l&&n[1]instanceof l?an(n[0],n[1]):!(!v(n[0])||!v(n[1]))&&n[0].getTime()===n[1].getTime())})},t.functions.relate=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,3,3),n[0]instanceof l&&n[1]instanceof l)return sn(n[0],n[1],J(n[2]));if(n[0]instanceof l&&n[1]===null||n[1]instanceof l&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new Error("Illegal Argument")})},t.functions.intersection=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]===null||n[1]===null?null:cn(n[0],n[1])})},t.functions.union=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){const e=[];if((n=s(n)).length===0)throw new Error("Function called with wrong number of Parameters");if(n.length===1)if(p(n[0])){const u=s(n[0]);for(let c=0;c<u.length;c++)if(u[c]!==null){if(!(u[c]instanceof l))throw new Error("Illegal Argument");e.push(u[c])}}else{if(!y(n[0])){if(n[0]instanceof l)return N(m(n[0]),r.spatialReference);if(n[0]===null)return null;throw new Error("Illegal Argument")}{const u=s(n[0].toArray());for(let c=0;c<u.length;c++)if(u[c]!==null){if(!(u[c]instanceof l))throw new Error("Illegal Argument");e.push(u[c])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof l))throw new Error("Illegal Argument");e.push(n[u])}return e.length===0?null:fn(e)})},t.functions.difference=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]!==null&&n[1]===null?m(n[0]):n[0]===null?null:ln(n[0],n[1])})},t.functions.symmetricdifference=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){return A(n=s(n)),n[0]===null&&n[1]===null?null:n[0]===null?m(n[1]):n[1]===null?m(n[0]):gn(n[0],n[1])})},t.functions.clip=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,2),!(n[1]instanceof b)&&n[1]!==null)throw new Error("Illegal Argument");if(n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[1]===null?null:wn(n[0],n[1])})},t.functions.cut=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,2),!(n[1]instanceof I)&&n[1]!==null)throw new Error("Illegal Argument");if(n[0]===null)return[];if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[1]===null?[m(n[0])]:hn(n[0],n[1])})},t.functions.area=function(r,i){return t.standardFunctionAsync(r,i,async function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0])){const e=await n[0].sumArea(x(f(n[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e}if(p(n[0])||y(n[0])){const e=P(n[0],r.spatialReference);return e===null?0:G(e,x(f(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return G(n[0],x(f(n[1],-1)))})},t.functions.areageodetic=function(r,i){return t.standardFunctionAsync(r,i,async function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0])){const e=await n[0].sumArea(x(f(n[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e}if(p(n[0])||y(n[0])){const e=P(n[0],r.spatialReference);return e===null?0:V(e,x(f(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return V(n[0],x(f(n[1],-1)))})},t.functions.length=function(r,i){return t.standardFunctionAsync(r,i,async function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0])){const e=await n[0].sumLength(w(f(n[1],-1)),!1,r.abortSignal);if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e}if(p(n[0])||y(n[0])){const e=Z(n[0],r.spatialReference);return e===null?0:M(e,w(f(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return M(n[0],w(f(n[1],-1)))})},t.functions.length3d=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(p(n[0])||y(n[0])){const e=Z(n[0],r.spatialReference);return e===null?0:e.hasZ===!0?U(e,w(f(n[1],-1))):M(e,w(f(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return n[0].hasZ===!0?U(n[0],w(f(n[1],-1))):M(n[0],w(f(n[1],-1)))})},t.functions.lengthgeodetic=function(r,i){return t.standardFunctionAsync(r,i,async function(o,a,n){if(g(n,1,2),(n=s(n))[0]===null)return 0;if(O(n[0])){const e=await n[0].sumLength(w(f(n[1],-1)),!0,r.abortSignal);if(r.abortSignal.aborted)throw new Error("Operation has been cancelled.");return e}if(p(n[0])||y(n[0])){const e=Z(n[0],r.spatialReference);return e===null?0:z(e,w(f(n[1],-1)))}if(!(n[0]instanceof l))throw new Error("Illegal Argument");return z(n[0],w(f(n[1],-1)))})},t.functions.distance=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,2,3);let e=n[0];(p(n[0])||y(n[0]))&&(e=k(n[0],r.spatialReference));let u=n[1];if((p(n[1])||y(n[1]))&&(u=k(n[1],r.spatialReference)),!(e instanceof l))throw new Error("Illegal Argument");if(!(u instanceof l))throw new Error("Illegal Argument");return dn(e,u,w(f(n[2],-1)))})},t.functions.distancegeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,2,3);const e=n[0],u=n[1];if(!(e instanceof $))throw new Error("Illegal Argument");if(!(u instanceof $))throw new Error("Illegal Argument");const c=new I({paths:[],spatialReference:e.spatialReference});return c.addPath([e,u]),z(c,w(f(n[2],-1)))})},t.functions.densify=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return n[0]instanceof F||n[0]instanceof I?W(n[0],e,w(f(n[2],-1))):n[0]instanceof b?W(T(n[0]),e,w(f(n[2],-1))):n[0]})},t.functions.densifygeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");if(e<=0)throw new Error("Illegal Argument");return n[0]instanceof F||n[0]instanceof I?q(n[0],e,w(f(n[2],-1))):n[0]instanceof b?q(T(n[0]),e,w(f(n[2],-1))):n[0]})},t.functions.generalize=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,4),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return mn(n[0],e,K(f(n[2],!0)),w(f(n[3],-1)))})},t.functions.buffer=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return e===0?m(n[0]):An(n[0],e,w(f(n[2],-1)))})},t.functions.buffergeodetic=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,3),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");return e===0?m(n[0]):pn(n[0],e,w(f(n[2],-1)))})},t.functions.offset=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,2,6),n[0]===null)return null;if(!(n[0]instanceof F||n[0]instanceof I))throw new Error("Illegal Argument");const e=E(n[1]);if(isNaN(e))throw new Error("Illegal Argument");const u=E(f(n[4],10));if(isNaN(u))throw new Error("Illegal Argument");const c=E(f(n[5],0));if(isNaN(c))throw new Error("Illegal Argument");return yn(n[0],e,w(f(n[2],-1)),J(f(n[3],"round")).toLowerCase(),u,c)})},t.functions.rotate=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){n=s(n),g(n,2,3);let e=n[0];if(e===null)return null;if(!(e instanceof l))throw new Error("Illegal Argument");e instanceof b&&(e=F.fromExtent(e));const u=E(n[1]);if(isNaN(u))throw new Error("Illegal Argument");const c=f(n[2],null);if(c===null)return C(e,u);if(c instanceof $)return C(e,u,c);throw new Error("Illegal Argument")})},t.functions.centroid=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return null;let e=n[0];if((p(n[0])||y(n[0]))&&(e=k(n[0],r.spatialReference)),e===null)return null;if(!(e instanceof l))throw new Error("Illegal Argument");return e instanceof $?N(m(n[0]),r.spatialReference):e instanceof F?e.centroid:e instanceof I?B(e):e instanceof j?D(e):e instanceof b?e.center:null})},t.functions.multiparttosinglepart=function(r,i){return t.standardFunctionAsync(r,i,async function(o,a,n){n=s(n),g(n,1,1);const e=[];if(n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");if(n[0]instanceof $)return[N(m(n[0]),r.spatialReference)];if(n[0]instanceof b)return[N(m(n[0]),r.spatialReference)];const u=await Q(n[0]);if(u instanceof F){const c=[],d=[];for(let h=0;h<u.rings.length;h++)if(u.isClockwise(u.rings[h])){const R=L({rings:[u.rings[h]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});c.push(R)}else d.push({ring:u.rings[h],pt:u.getPoint(h,0)});for(let h=0;h<d.length;h++)for(let R=0;R<c.length;R++)if(c[R].contains(d[h].pt)){c[R].addRing(d[h].ring);break}return c}if(u instanceof I){const c=[];for(let d=0;d<u.paths.length;d++){const h=L({paths:[u.paths[d]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});c.push(h)}return c}if(n[0]instanceof j){const c=N(m(n[0]),r.spatialReference);for(let d=0;d<c.points.length;d++)e.push(c.getPoint(d));return e}return null})},t.functions.issimple=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return!0;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return En(n[0])})},t.functions.simplify=function(r,i){return t.standardFunctionAsync(r,i,function(o,a,n){if(n=s(n),g(n,1,1),n[0]===null)return null;if(!(n[0]instanceof l))throw new Error("Illegal Argument");return Q(n[0])})})}export{bn as registerFunctions};