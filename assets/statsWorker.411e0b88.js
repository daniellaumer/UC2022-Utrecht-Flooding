import{aO as N,aX as C,mR as S,mS as R,hP as O,b0 as A,bE as B,hd as j,mT as k,mU as q}from"./index.4cc6cf99.js";import{T as G,s as U,m as Y,c as _,V as X,g as Z,h as H,y as J,D as K,z as L}from"./utils.a192fe9b.js";import"./ClassBreaksDefinition.b5093feb.js";let I=null;function Q(n,a,l){return n.x<0?n.x+=a:n.x>l&&(n.x-=a),n}function W(n,a,l,t){const i=R(l)?O(l):null,r=i?Math.round((i.valid[1]-i.valid[0])/a.scale[0]):null;return n.map(s=>{const e=new N(C(s.geometry));return S(a,e,e,e.hasZ,e.hasM),s.geometry=i?Q(e,r,t[0]):e,s})}function aa(n,a=18,l,t,i,r){const s=new Float64Array(i*r);a=Math.round(j(a));let e=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,m=0,u=0,d=0,f=0;const c=k(t,l);for(const{geometry:v,attributes:z}of n){const{x:y,y:w}=v,E=Math.max(0,y-a),M=Math.max(0,w-a),g=Math.min(r,w+a),P=Math.min(i,y+a),$=+c(z);for(let x=M;x<g;x++)for(let T=E;T<P;T++){const F=x*i+T,b=q(T-y,x-w,a),D=s[F];m=s[F]+=b*$;const V=m-D;u+=V,d+=V*V,m<e&&(e=m),m>o&&(o=m),f++}}if(!f)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const p=(o-e)/2;return{mean:u/f,stdDev:Math.sqrt((d-u*u/f)/f),min:e,max:o,mid:p,count:f}}async function h(n,a){if(!a)return[];const l=n.field,t=n.valueExpression,i=n.normalizationType,r=n.normalizationField,s=n.normalizationTotal,e=[],o=n.viewInfoParams;let m=null,u=null;if(t){if(!I){const{arcadeUtils:c}=await A();I=c}m=I.createFunction(t),u=o&&I.getViewInfo({viewingMode:o.viewingMode,scale:o.scale,spatialReference:new B(o.spatialReference)})}const d=n.fieldInfos,f=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&d?{fields:d}:null;return a.forEach(c=>{const p=c.attributes;let v;if(t){const z=f?{...c,layer:f}:c,y=I.createExecContext(z,u);v=I.executeFunction(m,y)}else p&&(v=p[l]);if(i&&isFinite(v)){const z=p&&parseFloat(p[r]);v=G(v,i,z,s)}e.push(v)}),e}async function ta(n){const{attribute:a,features:l}=n,{normalizationType:t,normalizationField:i,minValue:r,maxValue:s,fieldType:e}=a,o=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:t,normalizationField:i,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),m=U({normalizationType:t,normalizationField:i,minValue:r,maxValue:s}),u={value:.5,fieldType:e},d=e==="esriFieldTypeString"?Y({values:o,supportsNullCount:m,percentileParams:u}):_({values:o,minValue:r,maxValue:s,useSampleStdDev:!t,supportsNullCount:m,percentileParams:u});return X(d,e==="esriFieldTypeDate")}async function oa(n){const{attribute:a,features:l}=n,t=await h({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),i=Z(t);return H(i,a.domain,a.returnAllCodedValues)}async function sa(n){const{attribute:a,features:l}=n,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:e}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:s,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),m=J(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return K(m,e)}async function la(n){const{attribute:a,features:l}=n,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:e}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:s,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l);return L(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:s,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ra(n){const{attribute:a,features:l}=n,{field:t,radius:i,fieldOffset:r,transform:s,spatialReference:e,size:o}=a,m=W(l,s,e,o),{count:u,min:d,max:f,mean:c,stdDev:p}=aa(m,i,r,t,o[0],o[1]);return{count:u,min:d,max:f,avg:c,stddev:p}}export{sa as classBreaks,ra as heatmapStatistics,la as histogram,ta as summaryStatistics,oa as uniqueValues};