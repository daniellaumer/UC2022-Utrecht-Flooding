import{a6 as j,e as r,d as i,n as b,dg as w,c4 as N,r as O,ey as J,ak as I,az as m,t as $,v as R,j2 as q,a4 as P,hq as E,rs as T,rt as k,ru as D,r3 as G,rv as z,r4 as L,r5 as C,mF as Q,mH as Z,B,bE as F,rw as f,rx as V,bH as g,bl as A,dj as M,E as c,ra as U,ry as W,gi as H,rb as K,rz as X,rA as Y,rB as ee,ro as te,rC as re,dm as se,dn as ie,rD as oe,dl as ne,rE as ae,rF as le,rG as ue,mM as de,dr as pe}from"./index.80f43001.js";import{c as he}from"./clientSideDefaults.28c82eda.js";import"./QueryEngineCapabilities.c2e9875c.js";const v=j.getLogger("esri.layers.graphics.sources.GeoJSONSource");let p=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=N(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=O(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>J.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:I.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new m("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],d=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)d.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:d,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:u})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return $(t)?null:t.type==="mesh"||t.type==="extent"?R.fromExtent(t.extent):t}async _startWorker(e){this._connection=await q("GeoJSONSourceWorker",{strategy:P("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:s,hasZ:n,geometryType:d,objectIdField:a,url:l,timeInfo:u,customParameters:S}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",_={url:l,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:E.toJSON(d),hasZ:n,objectIdField:a,timeInfo:u?u.toJSON():null,spatialReference:x?null:s&&s.toJSON()},h=await this._connection.invoke("load",_,{signal:e});for(const y of h.warnings)v.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&v.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=he(this.sourceJSON.hasZ,!0)}};r([i()],p.prototype,"capabilities",void 0),r([i()],p.prototype,"type",void 0),r([i({constructOnly:!0})],p.prototype,"layer",void 0),r([i()],p.prototype,"sourceJSON",void 0),p=r([b("esri.layers.graphics.sources.GeoJSONSource")],p);const ce=pe();let o=class extends T(k(D(G(z(L(C(Q(Z(B))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),f(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?g(this.url):null}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=g(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await A(()=>import("./editingSupport.2663ae75.js"),["assets/editingSupport.2663ae75.js","assets/index.80f43001.js","assets/index.2de8b745.css"]);await this.load();const n=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return M(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){let s,n=!1;const d=t&&t.feature,a=d&&d.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(u=>u.id==l&&(s=u.domains&&u.domains[e],s&&s.type==="inherited"&&(s=this._getLayerDomain(e)),!0))),n||s||(s=this._getLayerDomain(e)),s}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return O(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(s=>(s.name===e&&(t=s.domain),!!t)),t}};r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(U)],o.prototype,"elevationInfo",void 0),r([i(W)],o.prototype,"featureReduction",void 0),r([i({type:[H],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(ce.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:I,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:E.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(K)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(X)],o.prototype,"labelsVisible",void 0),r([i({type:[Y],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(te)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(re)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(se)],o.prototype,"popupEnabled",void 0),r([i({type:ie,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:oe,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ne}}}})],o.prototype,"renderer",null),r([i(ae)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:F})],o.prototype,"spatialReference",void 0),r([i({type:[le]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[ue]})],o.prototype,"types",void 0),r([i(de)],o.prototype,"url",null),o=r([b("esri.layers.GeoJSONLayer")],o);const ge=o;export{ge as default};