import{e,d as r,n as v,eB as w,a6 as S,ru as I,r3 as $,rv as x,r4 as j,r5 as T,mE as R,mF as F,mG as O,mH as P,rt as E,B as D,bE as g,az as p,r as N,mJ as k,rw as u,sm as L,b1 as _,sq as A,dj as J,E as U,bt as G,rx as q,bA as z,dk as C,ry as B,ak as M,hq as m,rz as V,rA as W,rB as H,ro as Q,de as c,sr as X,ss as Y,dm as Z,dn as K,rD as ee,dl as te,dd as h,rE as re,mM as ie,st as se,su as oe,dr as ae}from"./index.80f43001.js";var y;let n=y=class extends w{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([r({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([r({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([r({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([r({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=y=e([v("esri.layers.support.PurgeOptions")],n);const b=n,ne=S.getLogger("esri.layers.StreamLayer"),f=ae();let t=class extends I($(x(j(T(R(F(O(P(E(D)))))))))){constructor(...i){super(...i),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=g.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(i,s){return typeof i=="string"?{url:i,...s}:i}load(i){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=N(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},i).catch(k).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(i){u(i,this.fieldsIndex),this._set("renderer",i)}readRenderer(i,s,o){const a=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(a){const l=L(a,s,o)||void 0;return l||ne.error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),l}if(s.defaultSymbol)return s.types&&s.types.length?new _({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(l=>({id:l.id,symbol:d(l.symbol,l,o)}))}):new A({symbol:d(s.defaultSymbol,s,o)})}createPopupTemplate(i){return J(this,i)}createQuery(){const i=new U;return i.returnGeometry=!0,i.outFields=["*"],i.where=this.definitionExpression||"1=1",i}getFieldDomain(i,s){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===i&&(o=a.domain),!!o)),o}getField(i){return this.fieldsIndex.get(i)}serviceSupportsSpatialReference(i){return!0}async _fetchService(i){var s,o;if(this.webSocketUrl){if(!((s=this.timeInfo)!=null&&s.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await G(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:i});this.sourceJSON=a}return this.sourceJSON={...(o=this.sourceJSON)!=null?o:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),q(this.timeInfo,this.fieldsIndex),z(this,{origin:"service"})}};e([r({type:String})],t.prototype,"copyright",void 0),e([r({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([r({type:String})],t.prototype,"displayField",void 0),e([r({type:C})],t.prototype,"elevationInfo",void 0),e([r(B)],t.prototype,"featureReduction",void 0),e([r(f.fields)],t.prototype,"fields",void 0),e([r(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([r({type:M})],t.prototype,"geometryDefinition",void 0),e([r({type:m.apiValues,json:{read:{reader:m.read}}})],t.prototype,"geometryType",void 0),e([r(V)],t.prototype,"labelsVisible",void 0),e([r({type:[W],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:H},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([r(Q)],t.prototype,"legendEnabled",void 0),e([r({type:["show","hide"]})],t.prototype,"listMode",void 0),e([r({type:c})],t.prototype,"maxReconnectionAttempts",void 0),e([r({type:c})],t.prototype,"maxReconnectionInterval",void 0),e([r(X)],t.prototype,"maxScale",void 0),e([r(Y)],t.prototype,"minScale",void 0),e([r({type:String})],t.prototype,"objectIdField",void 0),e([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([r(Z)],t.prototype,"popupEnabled",void 0),e([r({type:K,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([r({type:b})],t.prototype,"purgeOptions",void 0),e([r({types:ee,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:te,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([h("service","renderer",["drawingInfo.renderer","defaultSymbol"]),h("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([r(re)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([r()],t.prototype,"sourceJSON",void 0),e([r({type:g,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([r({json:{read:!1}})],t.prototype,"type",void 0),e([r(ie)],t.prototype,"url",void 0),e([r({type:Number})],t.prototype,"updateInterval",void 0),e([r({type:String})],t.prototype,"webSocketUrl",void 0),t=e([v("esri.layers.StreamLayer")],t);const d=se({types:oe}),pe=t;export{pe as default};
