import{oK as N,oL as S,oM as $,bP as c,oN as w,oO as M,V as U,r as P,bK as D,oP as g,oQ as R,oR as T,oS as f,oT as V,oU as h,oV as d,oW as W}from"./vendor.e52053a0.js";function B(e,t,a,o){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?v(e,t,o):M(e,t,o).then(r=>j(r,e.name,t,a,o)):Promise.reject(new U("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function j(e,t,a,o,r){const u=e.data,m=a&&P(a.portal)?a.portal:D.getDefault(),p={portal:m,url:c(e.baseUrl),origin:"portal-item"},s=u.items.find(n=>n.name===t);if(!s){const n=`The symbol name '${t}' could not be found`;return Promise.reject(new U("symbolstyleutils:symbol-name-not-found",n,{symbolName:t}))}let i=g(R(s,o),p),y=s.thumbnail&&s.thumbnail.href;const b=s.thumbnail&&s.thumbnail.imageData;T()&&(i=f(i),y=f(y));const O={portal:m,url:c(w(i)),origin:"portal-item"};return N(i,r).then(n=>{const E=o==="cimRef"?S(n.data):n.data,l=$(E,O);if(l&&V(l)){if(y){const K=g(y,p);l.thumbnail=new h({url:K})}else b&&(l.thumbnail=new h({url:`data:image/png;base64,${b}`}));e.styleUrl?l.styleOrigin=new d({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(l.styleOrigin=new d({portal:a.portal,styleName:e.styleName,name:t}))}return l})}function v(e,t,a){const o=W.replace(/\{SymbolName\}/gi,e.name),r=P(t.portal)?t.portal:D.getDefault();return N(o,a).then(u=>{const m=S(u.data);return $(m,{portal:r,url:c(w(o)),origin:"portal-item"})})}export{j as fetchSymbolFromStyle,B as resolveWebStyleSymbol};
