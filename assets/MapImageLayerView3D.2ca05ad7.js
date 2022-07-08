import{r as O,fz as k,hA as q,hB as z,hC as V,hD as Z,e as i,d as l,hE as H,fF as C,ak as U,bE as K,hF as W,n as F,eB as G,hG as X,g as M,dd as Y,fn as ee,hH as te,hI as re,fE as se,hJ as ae,hK as ie,bt as oe,gn as ne,hL as le,az as A,t as pe,a4 as ue,hg as ye,aB as me,b0 as ce}from"./index.80f43001.js";import{q as de}from"./DynamicLayerView3D.34ad43df.js";import{s as J}from"./clickToleranceUtils.501648d0.js";import{d as he,s as fe}from"./popupUtils.6c10fd57.js";import{a as ge}from"./drapedUtils.9dacd34f.js";import"./LayerView3D.4e2973f2.js";import"./projectExtentUtils.0a5b2a0a.js";import"./ImageMaterial.da123c9d.js";import"./LayerView.253978d9.js";import"./RefreshableLayerView.2c1f157e.js";const _=s=>s.spatialReference.wkid||JSON.stringify(s.spatialReference);function we(s,e){const{dpi:r,gdbVersion:a,geometry:t,geometryPrecision:n,height:h,layerOption:p,mapExtent:o,maxAllowableOffset:c,returnFieldName:y,returnGeometry:d,returnUnformattedValues:g,returnZ:I,spatialReference:P,timeExtent:E,tolerance:u,width:v}=s.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:b}=be(s),j=e&&O(e.geometry)?e.geometry:null,x={geometryPrecision:n,maxAllowableOffset:c,returnFieldName:y,returnGeometry:d,returnUnformattedValues:g,returnZ:I,tolerance:u},N=j&&j.toJSON()||t;if(x.imageDisplay=`${v},${h},${r}`,a&&(x.gdbVersion=a),N&&(delete N.spatialReference,x.geometry=JSON.stringify(N),x.geometryType=k(N)),P?x.sr=P.wkid||JSON.stringify(P):N&&N.spatialReference?x.sr=_(N):o&&o.spatialReference&&(x.sr=_(o)),x.time=E?[E.start,E.end].join(","):null,o){const{xmin:D,ymin:L,xmax:Q,ymax:T}=o;x.mapExtent=`${D},${L},${Q},${T}`}return f&&(x.layerDefs=f),w&&!f&&(x.dynamicLayers=w),x.layers=p==="popup"?"visible":p,b&&!w&&(x.layers+=`:${b.join(",")}`),x}function be(s){var P,E;const{mapExtent:e,floors:r,width:a,sublayers:t,layerIds:n,layerOption:h,gdbVersion:p}=s,o=(E=(P=t==null?void 0:t.find(u=>u.layer!=null))==null?void 0:P.layer)==null?void 0:E.serviceSublayers,c=h==="popup",y={},d=q({extent:e,width:a,spatialReference:e==null?void 0:e.spatialReference}),g=[],I=u=>{const v=d===0,w=u.minScale===0||d<=u.minScale,f=u.maxScale===0||d>=u.maxScale;if(u.visible&&(v||w&&f))if(u.sublayers)u.sublayers.forEach(I);else{if((n==null?void 0:n.includes(u.id))===!1||c&&(!u.popupTemplate||!u.popupEnabled))return;g.unshift(u)}};if(t==null||t.forEach(I),t&&!g.length)y.layerIds=[];else{const u=z(g,o,p),v=g.map(w=>{const f=V(r,w);return w.toExportImageJSON(f)});if(u)y.dynamicLayers=JSON.stringify(v);else{if(t){let f=g.map(({id:b})=>b);n&&(f=f.filter(b=>n.includes(b))),y.layerIds=f}else n!=null&&n.length&&(y.layerIds=n);const w=xe(r,g);if(O(w)&&w.length){const f={};for(const b of w)b.definitionExpression&&(f[b.id]=b.definitionExpression);Object.keys(f).length&&(y.layerDefs=JSON.stringify(f))}}}return y}function xe(s,e){const r=!!(s!=null&&s.length),a=e.filter(t=>t.definitionExpression!=null||r&&t.floorInfo!=null);return a.length?a.map(t=>{const n=V(s,t),h=Z(n,t.definitionExpression);return{id:t.id,definitionExpression:h}}):null}var S;let m=S=class extends G{constructor(s){super(s),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(s){return X(S,s)}};i([l({type:Number,json:{write:!0}})],m.prototype,"dpi",void 0),i([l()],m.prototype,"floors",void 0),i([l({type:String,json:{write:!0}})],m.prototype,"gdbVersion",void 0),i([l({types:H,json:{read:C,write:!0}})],m.prototype,"geometry",void 0),i([l({type:Number,json:{write:!0}})],m.prototype,"geometryPrecision",void 0),i([l({type:Number,json:{write:!0}})],m.prototype,"height",void 0),i([l({type:[Number],json:{write:!0}})],m.prototype,"layerIds",void 0),i([l({type:["top","visible","all","popup"],json:{write:!0}})],m.prototype,"layerOption",void 0),i([l({type:U,json:{write:!0}})],m.prototype,"mapExtent",void 0),i([l({type:Number,json:{write:!0}})],m.prototype,"maxAllowableOffset",void 0),i([l({type:Boolean,json:{write:!0}})],m.prototype,"returnFieldName",void 0),i([l({type:Boolean,json:{write:!0}})],m.prototype,"returnGeometry",void 0),i([l({type:Boolean,json:{write:!0}})],m.prototype,"returnM",void 0),i([l({type:Boolean,json:{write:!0}})],m.prototype,"returnUnformattedValues",void 0),i([l({type:Boolean,json:{write:!0}})],m.prototype,"returnZ",void 0),i([l({type:K,json:{write:!0}})],m.prototype,"spatialReference",void 0),i([l()],m.prototype,"sublayers",void 0),i([l({type:W,json:{write:!0}})],m.prototype,"timeExtent",void 0),i([l({type:Number,json:{write:!0}})],m.prototype,"tolerance",void 0),i([l({type:Number,json:{write:!0}})],m.prototype,"width",void 0),m=S=i([F("esri.rest.support.IdentifyParameters")],m);const B=m;let $=class extends G{constructor(s){super(s),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(s,e){return M.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(s,e){if(!s)return;const{attributes:r,geometry:a}=s;r&&(e.attributes={...r}),O(a)&&(e.geometry=a.toJSON(),e.geometryType=te.toJSON(a.type))}};i([l({type:String,json:{write:!0}})],$.prototype,"displayFieldName",void 0),i([l({type:M})],$.prototype,"feature",void 0),i([Y("feature",["attributes","geometry"])],$.prototype,"readFeature",null),i([ee("feature")],$.prototype,"writeFeature",null),i([l({type:Number,json:{write:!0}})],$.prototype,"layerId",void 0),i([l({type:String,json:{write:!0}})],$.prototype,"layerName",void 0),$=i([F("esri.rest.support.IdentifyResult")],$);const ve=$;async function Pe(s,e,r){const a=(e=Ie(e)).geometry?[e.geometry]:[],t=re(s);return t.path+="/identify",se(a).then(n=>{const h=we(e,{geometry:n&&n[0]}),p=ae({...t.query,f:"json",...h}),o=ie(p,r);return oe(t.path,o).then(Ee).then(c=>$e(c,e.sublayers))})}function Ee(s){const e=s.data;e.results=e.results||[];const r={results:[]};return r.results=e.results.map(a=>ve.fromJSON(a)),r}function Ie(s){return s=B.from(s)}function $e(s,e){if(!(e!=null&&e.length))return s;const r=new Map;function a(t){r.set(t.id,t),t.sublayers&&t.sublayers.forEach(a)}e.forEach(a);for(const t of s.results)t.feature.sourceLayer=r.get(t.layerId);return s}const Ne=s=>{let e=class extends s{initialize(){this.exportImageParameters=new le({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(r,a){var h,p,o,c,y,d;const{layer:t}=this;if(!r)throw new A("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:t});const n=(o=(p=(h=this.layer.capabilities)==null?void 0:h.operations)==null?void 0:p.supportsQuery)!=null?o:!0;if(!(((d=(y=(c=this.layer.capabilities)==null?void 0:c.operations)==null?void 0:y.supportsIdentify)!=null?d:!0)&&this.layer.version>=10.5)&&!n)throw new A("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:t});return n?this._fetchPopupFeaturesUsingQueries(r,a):this._fetchPopupFeaturesUsingIdentify(r,a)}canResume(){var r;return!!super.canResume()&&!((r=this.timeExtent)!=null&&r.isEmpty)}async _fetchPopupFeaturesUsingIdentify(r,a){const t=await this._createIdentifyParameters(r,a);if(pe(t))return[];const{results:n}=await Pe(this.layer.parsedUrl,t);return n.map(h=>h.feature)}async _createIdentifyParameters(r,a){var E,u;const{floors:t,spatialReference:n,scale:h}=this.view,p=O(a)?a.event:null,o=await this._collectPopupProviders(this.layer.sublayers,h,a);if(!o.length)return null;await Promise.all(o.map(({sublayer:v})=>v.load().catch(()=>{})));const c=Math.min(ue("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((v,w)=>w.renderer?J({renderer:w.renderer,event:p}):v,2)),y=this.createFetchPopupFeaturesQueryGeometry(r,c),d=ye(h,n),g=Math.round(y.width/d),I=new U({xmin:y.center.x-d*g,ymin:y.center.y-d*g,xmax:y.center.x+d*g,ymax:y.center.y+d*g,spatialReference:y.spatialReference}),P=((u=(E=this.layer.capabilities)==null?void 0:E.operations)==null?void 0:u.supportsQuery)===!1||await new Promise(v=>{let w=!1;Promise.all(o.map(async({popupTemplate:f})=>{if(f){const b=await this._loadArcadeModules(f);if(w)return;(b==null?void 0:b.arcadeUtils.hasGeometryOperations(f))&&(w=!0,v(!0))}})).finally(()=>v(!1))});return new B({floors:t,gdbVersion:this.layer.gdbVersion,geometry:r,height:g,layerOption:"popup",mapExtent:I,maxAllowableOffset:P?0:d,returnGeometry:!0,spatialReference:n,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:c,width:g})}async _fetchPopupFeaturesUsingQueries(r,a){const t=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,a),n=O(a)?a.event:null,h=t.map(async({sublayer:p,popupTemplate:o})=>{var I,P;await p.load().catch(()=>{});const c=p.createQuery(),y=J({renderer:p.renderer,event:n}),d=this.createFetchPopupFeaturesQueryGeometry(r,y);if(c.geometry=d,c.outFields=await he(p,o),"floors"in this.view){const E=(P=(I=this.view)==null?void 0:I.floors)==null?void 0:P.clone(),u=V(E,p);O(u)&&(c.where=c.where?`(${c.where}) AND (${u})`:u)}const g=await this._loadArcadeModules(o);return g&&g.arcadeUtils.hasGeometryOperations(o)||(c.maxAllowableOffset=d.width/y),(await p.queryFeatures(c)).features});return(await me(h)).reduce((p,o)=>o.value?[...p,...o.value]:p,[]).filter(p=>p!=null)}async _collectPopupProviders(r,a,t){const n=[],h=async o=>{const c=o.minScale===0||a<=o.minScale,y=o.maxScale===0||a>=o.maxScale;if(o.visible&&c&&y){if(o.sublayers)o.sublayers.forEach(h);else if(o.popupEnabled){const d=fe(o,{...t,defaultPopupTemplateEnabled:!1});O(d)&&n.unshift({sublayer:o,popupTemplate:d})}}},p=r.toArray().reverse().map(h);return await Promise.all(p),n}_loadArcadeModules(r){var a;if(((a=r.expressionInfos)==null?void 0:a.length)||Array.isArray(r.content)&&r.content.some(t=>t.type==="expression"))return ce()}};return i([l()],e.prototype,"exportImageParameters",void 0),i([l({readOnly:!0})],e.prototype,"exportImageVersion",null),i([l()],e.prototype,"layer",void 0),i([l()],e.prototype,"suspended",void 0),i([l(ne)],e.prototype,"timeExtent",void 0),e=i([F("esri.views.layers.MapImageLayerView")],e),e};let R=class extends Ne(de){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}createFetchPopupFeaturesQueryGeometry(s,e){return ge(s,e,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};R=i([F("esri.views.3d.layers.MapImageLayerView3D")],R);const Ge=R;export{Ge as default};
