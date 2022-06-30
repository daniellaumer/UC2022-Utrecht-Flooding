import{tw as P,bx as D,r as c,tx as _,ty as V,ts as j,b2 as h,d7 as b,tz as w,tk as k,tt as S,n9 as z,lF as N,tA as O,tB as G,tC as U,l as R,ef as W,tD as q,iV as K,tl as Q,nb as X,nh as M,ly as B,ni as H,tE as F,tF as J,tG as Y,tH as Z,tI as tt,tJ as E,tK as et,tL as nt,tM as ot,tN as rt,tO as st,tP as at,tQ as I,tR as it,ne as ct,tS as lt,tT as ut,gW as T,tU as ft,tV as pt,tW as mt,cj as C,t as dt,tX as gt}from"./vendor.e1f4f720.js";import{k as xt}from"./georeference.ce3df450.js";async function It(t,e,o){const s=new P($t(o)),n=(await _(s,e,o,!0)).model,p=n.lods.shift(),u=new Map,l=new Map;n.textures.forEach(($,A)=>u.set(A,wt($))),n.materials.forEach(($,A)=>l.set(A,yt($,u)));const i=bt(p);for(const $ of i.parts)vt(i,$,l);const{position:d,normal:f,tangent:r,color:a,texCoord0:m}=i.vertexAttributes,x={position:d.typedBuffer,normal:c(f)?f.typedBuffer:null,tangent:c(r)?r.typedBuffer:null,uv:c(m)?m.typedBuffer:null,color:c(a)?a.typedBuffer:null},v=xt(x,t,o);return{transform:v.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new k({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function $t(t){return(t==null?void 0:t.resolveFile)?{busy:!1,request:async(e,o,s)=>{const n=t.resolveFile(e);return(await D(n,{responseType:o==="image"?"image":o==="binary"?"array-buffer":"json",signal:c(s)?s.signal:null})).data}}:null}function y(t,e){if(dt(t))return"-";const o=t.typedBuffer;return`${S(e,o.buffer,()=>e.size)}/${o.byteOffset}/${o.byteLength}`}function ht(t){return c(t)?t.toString():"-"}function bt(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,p=[];for(const u of t.parts){const{attributes:{position:l,normal:i,color:d,tangent:f,texCoord0:r}}=u,a=`
      ${y(l,s)}/
      ${y(i,s)}/
      ${y(d,s)}/
      ${y(f,s)}/
      ${y(r,s)}/
      ${ht(u.transform)}
    `;let m=!1;const x=S(n,a,()=>(m=!0,{start:e,length:l.count}));m&&(e+=l.count),i&&(o.normal=!0),d&&(o.color=!0),f&&(o.tangent=!0),r&&(o.texCoord0=!0),p.push({gltf:u,writeVertices:m,region:x})}return{vertexAttributes:{position:w(z,e),normal:o.normal?w(N,e):null,tangent:o.tangent?w(O,e):null,color:o.color?w(G,e):null,texCoord0:o.texCoord0?w(U,e):null},parts:p,components:[]}}function wt(t){return new V({data:t.data,wrap:Ct(t.parameters.wrap)})}function yt(t,e){const o=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new j({color:o,colorTexture:h(b(t.textureColor,n=>e.get(n))),normalTexture:h(b(t.textureNormal,n=>e.get(n))),emissiveColor:s,emissiveTexture:h(b(t.textureEmissive,n=>e.get(n))),occlusionTexture:h(b(t.textureOcclusion,n=>e.get(n))),alphaMode:Tt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(b(t.textureMetallicRoughness,n=>e.get(n)))})}function vt(t,e,o){e.writeVertices&&At(t,e);const s=e.gltf,n=Et(s.indices||s.attributes.position.count,s.primitiveType),p=e.region.start;if(p)for(let u=0;u<n.length;u++)n[u]+=p;t.components.push(new Q({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function At(t,e){const{position:o,normal:s,tangent:n,color:p,texCoord0:u}=t.vertexAttributes,l=e.region.start,{attributes:i,transform:d}=e.gltf,f=i.position.count;if(X(o.slice(l,f),i.position,d),c(i.normal)&&c(s)){const r=M(B(),d),a=s.slice(l,f);H(a,i.normal,r),F(r)&&J(a,a)}else c(s)&&Y(s,0,0,1,{dstIndex:l,count:f});if(c(i.tangent)&&c(n)){const r=M(B(),d),a=n.slice(l,f);Z(a,i.tangent,r),F(r)&&tt(a,a)}else c(n)&&E(n,0,0,1,1,{dstIndex:l,count:f});if(c(i.texCoord0)&&c(u)?et(u.slice(l,f),i.texCoord0):c(u)&&nt(u,0,0,{dstIndex:l,count:f}),c(i.color)&&c(p)){const r=i.color,a=p.slice(l,f);if(r.elementCount===4)r instanceof O?ot(a,r,255):r instanceof G?rt(a,r):r instanceof st&&at(a,r,8);else{E(a,255,255,255,255);const m=I.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof N?it(m,r,255):r instanceof I?ct(m,r):r instanceof lt&&ut(m,r,8)}}else c(p)&&E(p.slice(l,f),255,255,255,255)}function Et(t,e){switch(e){case T.TRIANGLES:return mt(t,gt);case T.TRIANGLE_STRIP:return pt(t);case T.TRIANGLE_FAN:return ft(t)}}function Tt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:L(t.s),vertical:L(t.t)}}function L(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function g(t){return t**(1/q)*255}function Rt(t,e){return W(g(t[0]),g(t[1]),g(t[2]),e)}function Mt(t){return K(g(t[0]),g(t[1]),g(t[2]))}export{It as loadGLTFMesh};