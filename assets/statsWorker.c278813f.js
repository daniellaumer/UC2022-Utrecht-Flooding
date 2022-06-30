var j=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var M=(n,a,e)=>a in n?j(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,g=(n,a)=>{for(var e in a||(a={}))O.call(a,e)&&M(n,e,a[e]);if(E)for(var e of E(a))Y.call(a,e)&&M(n,e,a[e]);return n},b=(n,a)=>A(n,B(a));import{aV as k,b2 as q,mW as G,mX as Z,hT as _,hj as K,b6 as U,bK as W,mY as X,mZ as H}from"./vendor.e1f4f720.js";import{T as J,s as L,m as Q,c as aa,V as na,g as ea,h as ia,y as ta,D as oa,z as sa}from"./utils.b67e6d51.js";import"./ClassBreaksDefinition.ee27788f.js";let I=null;function la(n,a,e){return n.x<0?n.x+=a:n.x>e&&(n.x-=a),n}function ra(n,a,e,o){const t=Z(e)?_(e):null,r=t?Math.round((t.valid[1]-t.valid[0])/a.scale[0]):null;return n.map(l=>{const i=new k(q(l.geometry));return G(a,i,i,i.hasZ,i.hasM),l.geometry=t?la(i,r,o[0]):i,l})}function ma(n,a=18,e,o,t,r){const l=new Float64Array(t*r);a=Math.round(K(a));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,m=0,u=0,d=0,f=0;const c=X(o,e);for(const{geometry:v,attributes:z}of n){const{x:y,y:V}=v,P=Math.max(0,y-a),$=Math.max(0,V-a),D=Math.min(r,V+a),N=Math.min(t,y+a),C=+c(z);for(let x=$;x<D;x++)for(let T=P;T<N;T++){const F=x*t+T,S=H(T-y,x-V,a),R=l[F];m=l[F]+=S*C;const w=m-R;u+=w,d+=w*w,m<i&&(i=m),m>s&&(s=m),f++}}if(!f)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const p=(s-i)/2;return{mean:u/f,stdDev:Math.sqrt((d-u*u/f)/f),min:i,max:s,mid:p,count:f}}async function h(n,a){if(!a)return[];const e=n.field,o=n.valueExpression,t=n.normalizationType,r=n.normalizationField,l=n.normalizationTotal,i=[],s=n.viewInfoParams;let m=null,u=null;if(o){if(!I){const{arcadeUtils:c}=await U();I=c}m=I.createFunction(o),u=s&&I.getViewInfo({viewingMode:s.viewingMode,scale:s.scale,spatialReference:new W(s.spatialReference)})}const d=n.fieldInfos,f=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&d?{fields:d}:null;return a.forEach(c=>{const p=c.attributes;let v;if(o){const z=f?b(g({},c),{layer:f}):c,y=I.createExecContext(z,u);v=I.executeFunction(m,y)}else p&&(v=p[e]);if(t&&isFinite(v)){const z=p&&parseFloat(p[r]);v=J(v,t,z,l)}i.push(v)}),i}async function pa(n){const{attribute:a,features:e}=n,{normalizationType:o,normalizationField:t,minValue:r,maxValue:l,fieldType:i}=a,s=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},e),m=L({normalizationType:o,normalizationField:t,minValue:r,maxValue:l}),u={value:.5,fieldType:i},d=i==="esriFieldTypeString"?Q({values:s,supportsNullCount:m,percentileParams:u}):aa({values:s,minValue:r,maxValue:l,useSampleStdDev:!o,supportsNullCount:m,percentileParams:u});return na(d,i==="esriFieldTypeDate")}async function va(n){const{attribute:a,features:e}=n,o=await h({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},e),t=ea(o);return ia(t,a.domain,a.returnAllCodedValues)}async function Ia(n){const{attribute:a,features:e}=n,{field:o,normalizationType:t,normalizationField:r,normalizationTotal:l,classificationMethod:i}=a,s=await h({field:o,valueExpression:a.valueExpression,normalizationType:t,normalizationField:r,normalizationTotal:l,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},e),m=ta(s,{field:o,normalizationType:t,normalizationField:r,normalizationTotal:l,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return oa(m,i)}async function za(n){const{attribute:a,features:e}=n,{field:o,normalizationType:t,normalizationField:r,normalizationTotal:l,classificationMethod:i}=a,s=await h({field:o,valueExpression:a.valueExpression,normalizationType:t,normalizationField:r,normalizationTotal:l,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},e);return sa(s,{field:o,normalizationType:t,normalizationField:r,normalizationTotal:l,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ya(n){const{attribute:a,features:e}=n,{field:o,radius:t,fieldOffset:r,transform:l,spatialReference:i,size:s}=a,m=ra(e,l,i,s),{count:u,min:d,max:f,mean:c,stdDev:p}=ma(m,t,r,o,s[0],s[1]);return{count:u,min:d,max:f,avg:c,stddev:p}}export{Ia as classBreaks,ya as heatmapStatistics,za as histogram,pa as summaryStatistics,va as uniqueValues};