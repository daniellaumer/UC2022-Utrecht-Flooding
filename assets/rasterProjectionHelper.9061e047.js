var bt=Object.defineProperty,Pt=Object.defineProperties;var St=Object.getOwnPropertyDescriptors;var ot=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable;var st=(t,n,e)=>n in t?bt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,J=(t,n)=>{for(var e in n||(n={}))Et.call(n,e)&&st(t,e,n[e]);if(ot)for(var e of ot(n))Nt.call(n,e)&&st(t,e,n[e]);return t},K=(t,n)=>Pt(t,St(n));import{iP as Q,ez as Gt,au as Y,bM as O,t as G,r as S,c3 as j,v as kt,aV as E,b1 as Tt,R as vt,i$ as T,j0 as k,j1 as rt,j2 as _t,j3 as Ct,bK as zt,j4 as at}from"./vendor.e1f4f720.js";var H;function pt(t,n,e){return!Tt(t,n,e)}function W(t,n,e){const s=pt(t,n,e);if(s&&!Q())throw new vt("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(H||(H={}));const lt=(t,n,e,s=0)=>{if(e[0]===1)return[0,0];let r=1,i=-1,o=1,f=-1;for(let c=0;c<t.length;c+=2)isNaN(t[c])||(r=r>t[c]?t[c]:r,i=i>t[c]?i:t[c],o=o>t[c+1]?t[c+1]:o,f=f>t[c+1]?f:t[c+1]);const{cols:a,rows:l}=n,u=(i-r)/a/e[0],M=(f-o)/l/e[1],g=2*s;let m=0,x=!1,p=[0,0];for(let c=0;c<a-3;c++){for(let w=0;w<l-3;w++){const y=c*l*2+2*w,h=(t[y]+t[y+4]+t[y+4*l]+t[y+4*l+4])/4,d=(t[y+1]+t[y+5]+t[y+4*l+1]+t[y+4*l+5])/4,R=Math.abs((h-t[y+2*l+2])/u),b=Math.abs((d-t[y+2*l+3])/M);if(R+b>m&&(m=R+b,p=[R,b]),g&&m>g){x=!0;break}}if(x)break}return p},Ot={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},A=32,B=4,X=B,U=new Map,V=new Map;async function Jt(){if(Q())return null;await Gt()}function Kt(t,n,e){return W(t.spatialReference,n)?e?at(n,t.spatialReference,t):at(t.spatialReference,n,t):null}function Xt(t,n,e,s=null){const r=t.spatialReference;if(r.equals(n))return t;W(r,n,s);const i=e.center,o=new Y({xmin:i.x-t.x/2,xmax:i.x+t.x/2,ymin:i.y-t.y/2,ymax:i.y+t.y/2,spatialReference:r}),f=O(o,n,s),a=v(n);let l;if(G(f)||S(a)&&f.width>=a){const u=j(r)/j(n);l={x:t.x*u,y:t.y*u}}else l={x:f.width,y:f.height};return l}function N(t,n=.01){return j(t)?n/j(t):0}function ct(t,n,e=null,s=!0){const r=t.spatialReference;if(r.equals(n))return t;W(r,n,e);const i=O(t,n,e);if(!s||!i)return i;const o=I(r,!0),f=I(n,!0),a=N(r);return a&&S(o)&&S(f)&&(i.x>0&&Math.abs(t.x-o[0])<a?i.x-=f[1]-f[0]:i.x<0&&Math.abs(t.x-o[1])<a&&(i.x+=f[1]-f[0])),i}function Wt(t){const{inSR:n,outSR:e,datumTransformation:s,preferPE:r}=t;if(n.equals(e)){const{points:i}=Z(t,null);return i}if(n.isWebMercator&&e.isWGS84||n.isWGS84&&e.isWebMercator)return jt(t);if(W(n,e,s)&&r){if(n.isGeographic)return ft(t);const i=z(n);if(S(i))return ft(t)}return $t(t)}function $t(t){const{points:n}=Z(t,null),e=n.map(s=>new E(s[0],s[1],t.inSR));return O(e,t.outSR,t.datumTransformation).map(s=>s?[s.x,s.y]:[NaN,NaN])}function ft(t){const{inSR:n,outSR:e,datumTransformation:s}=t,r=z(n),{points:i,mask:o}=Z(t,r);if(!n.isGeographic){const a=n.wkid?T.coordsys(n.wkid):T.fromString(n.isGeographic?k.PE_TYPE_GEOGCS:k.PE_TYPE_PROJCS,n.wkt);rt.projToGeog(a,i.length,i)}if(S(s)&&s.steps.length&&s.steps.forEach(a=>{const l=a.wkid?T.geogtran(a.wkid):T.fromString(k.PE_TYPE_GEOGTRAN,a.wkt);_t.geogToGeog(l,i.length,i,null,a.isInverse?k.PE_TRANSFORM_2_TO_1:k.PE_TRANSFORM_1_TO_2)}),!e.isGeographic){const a=z(e,!0),l=S(a)&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];Lt(i,l);const u=e.wkid?T.coordsys(e.wkid):T.fromString(e.isGeographic?k.PE_TYPE_GEOGCS:k.PE_TYPE_PROJCS,e.wkt);rt.geogToProj(u,i.length,i)}let f=i;if(o&&i.length!==o.length){f=[];for(let a=0,l=0;a<o.length;a++)o[a]?f.push(i[l++]):f.push([NaN,NaN])}return f}function jt(t){const{cols:n,rows:e,xres:s,yres:r,usePixelCenter:i,inSR:o,outSR:f}=t;let{xmin:a,ymax:l}=t;i&&(a+=s/2,l-=r/2);const u=[],M=[],g=Math.max(n,e);for(let x=0;x<g;x++){const p=a+s*Math.min(n,x),c=l-r*Math.min(e,x),w=O(new E({x:p,y:c,spatialReference:o}),f);x<=n&&u.push(w.x),x<=e&&M.push(w.y)}const m=[];for(let x=0;x<n;x++)for(let p=0;p<e;p++)m.push([u[x],M[p]]);return m}function z(t,n=!1){let e=t.wkid||t.wkt;if(!e||t.isGeographic)return null;if(e=String(e),U.has(e)){const o=U.get(e);return n?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const s=t.wkid?T.coordsys(t.wkid):T.fromString(t.isGeographic?k.PE_TYPE_GEOGCS:k.PE_TYPE_PROJCS,t.wkt),r=ut(s,N(t,1e-4)),i=ut(s,0,!0);return U.set(e,{pcs:r,gcs:i}),n?i:r}function ut(t,n=0,e=!1){const s=Ct.generate(t),r=e?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!(r==null?void 0:r.length))return null;let i=!1,o=r.find(c=>c.getInclusive()===1&&c.getKind()===1);if(!o){if(o=r.find(c=>c.getInclusive()===1&&c.getKind()===0),!o)return null;i=!0}const f=e?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),a=s.isPannableRectangle(),l=o.getCoord();if(i)return{isEnvelope:i,isPannable:a,vertices:l,coef:null,bbox:[l[0][0]-n,l[0][1]-n,l[1][0]+n,l[1][1]+n],poleLocation:f};let u=0;const M=[];let[g,m]=l[0],[x,p]=l[0];for(let c=0,w=l.length;c<w;c++){u++,u===w&&(u=0);const[y,h]=l[c],[d,R]=l[u];if(R===h)M.push([y,d,h,R,2]);else{const b=(d-y)/(R-h||1e-4),_=y-b*h;h<R?M.push([b,_,h,R,0]):M.push([b,_,R,h,1])}g=g<y?g:y,m=m<h?m:h,x=x>y?x:y,p=p>h?p:h}return{isEnvelope:!1,isPannable:a,vertices:l,coef:M,bbox:[g,m,x,p],poleLocation:f}}function Z(t,n){const e=[],{cols:s,rows:r,xres:i,yres:o,usePixelCenter:f}=t;let{xmin:a,ymax:l}=t;if(f&&(a+=i/2,l-=o/2),G(n)){for(let m=0;m<s;m++)for(let x=0;x<r;x++)e.push([a+i*m,l-o*x]);return{points:e}}const u=new Uint8Array(s*r);if(n.isEnvelope){const{bbox:[m,x,p,c]}=n;for(let w=0,y=0;w<s;w++){const h=a+i*w,d=n.isPannable||h>=m&&h<=p;for(let R=0;R<r;R++,y++){const b=l-o*R;d&&b>=x&&b<=c&&(e.push([h,b]),u[y]=1)}}return{points:e,mask:u}}const{coef:M}=n,g=[];for(let m=0;m<r;m++){const x=l-o*m,p=[],c=[];for(let y=0;y<M.length;y++){const[h,d,R,b,_]=M[y];if(x===R&&R===b)p.push(h),p.push(d),c.push(2),c.push(2);else if(x>=R&&x<=b){const L=h*x+d;p.push(L),c.push(_)}}let w=p;if(p.length>2){let y=c[0]===2?0:c[0],h=p[0];w=[];for(let d=1;d<c.length;d++)c[d]===2&&d!==c.length-1||(c[d]!==y&&(w.push(y===0?Math.min(h,p[d-1]):Math.max(h,p[d-1])),y=c[d],h=p[d]),d===c.length-1&&w.push(c[d]===0?Math.min(h,p[d]):Math.max(h,p[d])));w.sort((d,R)=>d-R)}else p[0]>p[1]&&(w=[p[1],p[0]]);g.push(w)}for(let m=0,x=0;m<s;m++){const p=a+i*m;for(let c=0;c<r;c++,x++){const w=l-o*c,y=g[c];if(y.length===2)p>=y[0]&&p<=y[1]&&(e.push([p,w]),u[x]=1);else if(y.length>2){let h=!1;for(let d=0;d<y.length;d+=2)if(p>=y[d]&&p<=y[d+1]){h=!0;break}h&&(e.push([p,w]),u[x]=1)}}}return{points:e,mask:u}}function Lt(t,n){const[e,s]=n;for(let r=0;r<t.length;r++){const i=t[r][1];(i<e||i>s)&&(t[r]=[NaN,NaN])}}function gt(t){const n=v(t[0].spatialReference);if(t.length<2||G(n))return t[0];let{xmin:e,xmax:s,ymin:r,ymax:i}=t[0];for(let o=1;o<t.length;o++){const f=t[o];s=f.xmax+n*o,r=Math.min(r,f.ymin),i=Math.max(i,f.ymax)}return new Y({xmin:e,xmax:s,ymin:r,ymax:i,spatialReference:t[0].spatialReference})}function At(t,n,e=null,s=!0){const r=t.spatialReference;if(r.equals(n))return t;const i=It(t),o=v(r,!0),f=v(n);if(i===0||G(o)||G(f)){const l=xt(t,n,e,s);if(G(o)&&S(f)&&Math.abs(l.width-f)<N(n)&&Q()){const u=z(r);if(S(u)&&u.poleLocation===H.None&&t.width<(u.bbox[2]-u.bbox[0])/2)return Bt(t,n)||l}return l}const a=t.clone().normalize();if(a.length===1&&t.xmax<o&&t.xmax-o/2>N(r)){const{xmin:l,xmax:u}=t;for(let M=0;M<=i;M++){const g=M===0?l:-o/2,m=M===i?u-o*M:o/2;a[M]=new Y({xmin:g,xmax:m,ymin:t.ymin,ymax:t.ymax,spatialReference:r})}}return gt(a.map(l=>xt(l,n,e,s)).filter(l=>!!l))}function Bt(t,n){const e=v(n);if(G(e))return null;let{xmin:s,ymin:r,xmax:i,ymax:o}=t;const f=t.spatialReference,a=new kt({spatialReference:f,rings:[[[s,r],[i,r],[i,o],[s,o],[s,r]]]}),l=O(a,n);if(l.rings.length!==2||!l.rings[0].length||!l.rings[1].length)return null;const{rings:u}=l,M=N(f),g=new Y({spatialReference:n});for(let m=0;m<2;m++){s=i=u[m][0][0],r=o=u[m][0][1];for(let x=0;x<u[m].length;x++)s=s>u[m][x][0]?u[m][x][0]:s,i=i<u[m][x][0]?u[m][x][0]:i,r=r>u[m][x][1]?u[m][x][1]:r,o=o<u[m][x][1]?u[m][x][1]:o;if(m===0)g.ymin=r,g.ymax=o,g.xmin=s,g.xmax=i;else if(g.ymin=Math.min(g.ymin,r),g.ymax=Math.max(g.ymax,o),Math.abs(i-e/2)<M)g.xmin=s,g.xmax=g.xmax+e;else{if(!(Math.abs(s+e/2)<M))return null;g.xmax=i+e}}return g}function xt(t,n,e=null,s=!0,r=!0){const i=t.spatialReference;if(i.equals(n))return t;W(i,n,e);const o=O(t,n,e);if(r&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const f=I(i,!0),a=I(n,!0);if(G(f)||G(a))return o;const l=N(i,.001),u=N(i,500),M=N(n,.001);if(Math.abs(o.xmin-a[0])<M&&Math.abs(o.xmax-a[1])<M){const g=Math.abs(t.xmin-f[0]),m=Math.abs(f[1]-t.xmax);if(g<l&&m>u){o.xmin=a[0];const x=[];x.push(new E(t.xmax,t.ymin,i)),x.push(new E(t.xmax,(t.ymin+t.ymax)/2,i)),x.push(new E(t.xmax,t.ymax,i));const p=x.map(c=>ct(c,n,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);o.xmax=Math.max.apply(null,p)}if(m<l&&g>u){o.xmax=a[1];const x=[];x.push(new E(t.xmin,t.ymin,i)),x.push(new E(t.xmin,(t.ymin+t.ymax)/2,i)),x.push(new E(t.xmin,t.ymax,i));const p=x.map(c=>ct(c,n,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);o.xmin=Math.min.apply(null,p)}}else{const g=N(n,.001);Math.abs(o.xmin-a[0])<g&&(o.xmin=a[0]),Math.abs(o.xmax-a[1])<g&&(o.xmax=a[1])}return o}function v(t,n=!1){const e=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*e:t.wkid&&t.isGeographic?360:2*Ot[t.wkid]||null}function I(t,n=!1){if(t.isGeographic)return[-180,180];const e=v(t,n);return S(e)?[-e/2,e/2]:null}function mt(t,n,e,s){let r=(t-n)/e;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function It(t,n=!1){const e=v(t.spatialReference);if(G(e))return 0;const s=n?0:-(e/2),r=N(t.spatialReference),i=!n&&Math.abs(t.xmax-e/2)<r?e/2:t.xmax,o=!n&&Math.abs(t.xmin+e/2)<r?-e/2:t.xmin;return mt(i,s,e,!0)-mt(o,s,e,!1)}function Ut(t){const n=t.storageInfo.origin.x,e=v(t.spatialReference,!0);if(G(e))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const s=e/2,{nativePixelSize:r,storageInfo:i,extent:o}=t,{maximumPyramidLevel:f,blockWidth:a,pyramidScalingFactor:l}=i;let u=r.x;const M=[],g=S(t.transform)&&t.transform.type==="gcs-shift",m=n+(g?0:s),x=g?e-n:s-n;for(let p=0;p<=f;p++){const c=(o.xmax-n)/u/a,w=c-Math.floor(c)==0?c:Math.ceil(c),y=x/u/a,h=y-Math.floor(y)==0?y:Math.ceil(y),d=Math.floor(m/u/a),R=Math.round(m/u)%a,b=(a-Math.round(x/u)%a)%a;M.push({resolutionX:u,blockWidth:a,datsetColumnCount:w,worldColumnCountFromOrigin:h,leftMargin:R,rightPadding:b,originColumnOffset:d}),u*=l}return{originX:n,halfWorldWidth:s,pyramidsInfo:M,hasGCSSShiftTransform:g}}function Yt(t){if(!t||t.isGeographic)return t;const n=String(t.wkid||t.wkt);let e;return V.has(n)?e=V.get(n):(e=(t.wkid?T.coordsys(t.wkid):T.fromString(k.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),V.set(n,e)),new zt({wkid:e})}function Vt(t){const n=t.isAdaptive&&t.spacing==null;let e=t.spacing||[A,A],s=D(t),r={cols:s.size[0]+1,rows:s.size[1]+1};const i=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||n&&i?[0,0]:lt(s.offsets,r,e,X);const f=(o[0]+o[1])/2,a=t.projectedExtent.spatialReference,l=t.srcBufferExtent.spatialReference;if(n&&(i||f>X)&&(pt(a,l,t.datumTransformation)&&(a.isGeographic||S(z(a))),e=[B,B],s=D(K(J({},t),{spacing:e})),r={cols:s.size[0]+1,rows:s.size[1]+1},o=lt(s.offsets,r,e,X)),s.error=o,e[0]>1&&(s.coefficients=ht(s.offsets,r,i)),t.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(l.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:e};else{const u=z(a);if(S(u)&&!u.isEnvelope){const M=Yt(a),g=At(t.projectedExtent,M),{offsets:m}=D(K(J({},t),{srcBufferExtent:g,spacing:e})),x=ht(m,r,i);s.gcsGrid={offsets:m,coefficients:x,spacing:e}}}return s}function D(t){const{projectedExtent:n,srcBufferExtent:e,pixelSize:s,datumTransformation:r,rasterTransform:i}=t,o=n.spatialReference,f=e.spatialReference,a=W(o,f),{xmin:l,ymin:u,xmax:M,ymax:g}=n,m=v(f),x=S(m)&&(t.hasWrapAround||(i==null?void 0:i.type)==="gcs-shift"),p=t.spacing||[A,A],c=p[0]*s.x,w=p[1]*s.y,y=p[0]===1,h=Math.ceil((M-l)/c-.1/p[0])+(y?0:1),d=Math.ceil((g-u)/w-.1/p[1])+(y?0:1),R=Wt({cols:h,rows:d,xmin:l,ymax:g,xres:c,yres:w,inSR:o,outSR:f,datumTransformation:r,preferPE:p[0]<=B,usePixelCenter:y}),b=[];let _,L=0;const tt=y?-1:NaN,{xmin:nt,xmax:F,ymax:yt,width:dt,height:Mt}=e,wt=N(f,500),Rt=S(m)&&nt>0&&F>m/2;let et=!1;if(a){const C=z(o);et=S(C)&&C.poleLocation>0}for(let C=0;C<h;C++){const q=[];for(let $=0;$<d;$++){let P=R[C*d+$];if(x&&P[0]>F&&P[0]>m/2-wt?P[0]-=m:x&&C===0&&P[0]<0&&Rt&&!i&&(P[0]+=m),!P||isNaN(P[0])||isNaN(P[1]))b.push(tt),b.push(tt),q.push(null),L++;else{if(i){const it=i.inverseTransform(new E({x:P[0],y:P[1],spatialReference:f}));P=[it.x,it.y]}q.push(P),C>0&&x&&_[$]&&P[0]<_[$][0]&&(P[0]+=m,et&&P[0]>F&&P[0]>m&&(P[0]-=m)),b.push((P[0]-nt)/dt),b.push((yt-P[1])/Mt)}}_=q}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:L,spacing:p,size:y?[h,d]:[h-1,d-1]}}function ht(t,n,e){const{cols:s,rows:r}=n,i=new Float32Array((s-1)*(r-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<s-1;a++){for(let l=0;l<r-1;l++){let u=a*r*2+2*l;const M=t[u],g=t[u+1],m=t[u+2],x=t[u+3];u+=2*r;const p=t[u],c=t[u+1],w=t[u+2],y=t[u+3];let h=0,d=12*(l*(s-1)+a);for(let R=0;R<3;R++)i[d++]=o[h++]*M+o[h++]*m+o[h++]*w;h=0;for(let R=0;R<3;R++)i[d++]=o[h++]*g+o[h++]*x+o[h++]*y;h=0;for(let R=0;R<3;R++)i[d++]=f[h++]*M+f[h++]*p+f[h++]*w;h=0;for(let R=0;R<3;R++)i[d++]=f[h++]*g+f[h++]*c+f[h++]*y}if(e)for(let l=0;l<i.length;l++)isNaN(i[l])&&(i[l]=-1)}return i}function Dt(t){const n=t.clone().normalize();return n.length===1?n[0]:gt(n)}function Ht(t,n,e){const{storageInfo:s,pixelSize:r}=n;let i,o=!1;const{pyramidResolutions:f}=s;if(S(f)&&f.length){const g=(t.x+t.y)/2,m=f[f.length-1],x=(m.x+m.y)/2,p=(r.x+r.y)/2;if(g<=p)i=0;else if(g>=x)i=f.length,o=g/x>8;else{let w,y=p;for(let h=1;h<=f.length;h++){if(w=(f[h-1].x+f[h-1].y)/2,g<=w){g===w?i=h:e==="down"?(i=h-1,o=g/y>8):i=e==="up"||g-y>w-g||g/y>2?h:h-1;break}y=w}}const c=i===0?r:f[i-1];return o&&Math.min(c.x,c.y)*j(n.spatialReference)>19567&&(o=!1),{pyramidLevel:i,pyramidResolution:new E({x:c.x,y:c.y,spatialReference:n.spatialReference}),excessiveReading:o}}const a=Math.log(t.x/r.x)/Math.LN2,l=Math.log(t.y/r.y)/Math.LN2,u=n.storageInfo.maximumPyramidLevel||0;i=e==="down"?Math.floor(Math.min(a,l)):e==="up"?Math.ceil(Math.max(a,l)):Math.round((a+l)/2),i<0?i=0:i>u&&(o=i>u+3,i=u);const M=2**i;return{pyramidLevel:i,pyramidResolution:new E({x:M*n.nativePixelSize.x,y:M*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:o}}export{It as D,At as F,Ut as H,pt as M,Kt as T,Vt as V,v as X,ct as _,Dt as e,Jt as k,Ht as t,Xt as v};
