import{eW as V,r as S,t as A,d9 as O,da as P,g as a,i as l,n as j,ag as L,iN as G,iO as k,y as z,al as v,A as B,gv as K,gx as Q,bM as W,b1 as H,j as M,iP as J,ez as X}from"./vendor.e1f4f720.js";import{n as q}from"./attributeUtils.99d8ee08.js";import{u as Y}from"./LayerView.0c562d60.js";const Z={setAttribute(){},rollback(){},commit(){}};var w;function ce(t,r){const e=r.attributes[t.objectIdField],n=t.sessions.get(e);if(n)return n;const i=V(r.attributes),s=new Set;if(e==null)return Z;const o=t.attributeOverrides.createInteractiveEditSession(e),c=new Map,E=(u,f)=>{const p=c.get(u);if(p==null){const g=f.indexOf(e);return c.set(u,g),g}return p};let d=w.EDITING;const y={setAttribute(u,f){if(d!==w.EDITING)return;const p=t.fieldsIndex.get(u);if(A(p))return;const g=t.attributeStorageInfo.findIndex(b=>b.name===p.name);if(g<0)return;o.set(g,f);const F=t.attributeStorageInfo[g];let _=!1;s.add(u),t.forEachNode((b,N)=>{const $=E(b,N);if($===-1)return;const x=t.getAttributeData(b.index);if(x){const D=x[F.name];D&&(D[$]=f,t.setAttributeData(b.index,x,r),_=!0)}}),_&&t.clearMemCache()},rollback(){if(d===w.EDITING){for(const u of s)this.setAttribute(u,i[u]);o.rollback(),d=w.ROLLED_BACK,t.sessions.delete(e)}},commit(){d===w.EDITING&&(o.commit(),d=w.COMMITTED,t.sessions.delete(e))}};return t.sessions.set(e,y),y}function pe(t,r){const e=ee(t,r);if(e.size===0)return;const n=new Map;for(let s=0;s<t.attributeStorageInfo.length;s++)n.set(t.attributeStorageInfo[s].name,s);let i=!1;e.forEach((s,o)=>{const c=t.getAttributeData(o);let E=!1;s.forEach((d,y)=>{const u=S(c)?c[y]:null,f=n.get(y);for(const{featureIndex:p,value:g,featureId:F}of d)u&&(u[p]=g,E=!0,i=!0),t.attributeOverrides.updateValue(F,f,g)}),E&&t.setAttributeData(o,c,null)}),i&&t.clearMemCache()}function ee(t,r){const e=r.edits.updateFeatures;if(!e||e.length===0)return new T;const n=ne(r),i=new T,s=new Map;for(let d=0;d<t.attributeStorageInfo.length;d++)s.set(t.attributeStorageInfo[d].name,d);const o=t.fieldsIndex,c=t.objectIdField,E=e.filter(d=>{const y=q(o,d.attributes,c);return n.has(y)});return t.forEachNode((d,y)=>{const u=new Set(y);for(const f of E){const p=q(o,f.attributes,c);if(!u.has(p))continue;const g=y.indexOf(p);for(const F in f.attributes){const _=t.fieldsIndex.normalizeFieldName(F),b=te(i,d.index,_),N=f.attributes[F];b.push({featureIndex:g,featureId:p,value:N})}}}),i}function te(t,r,e){const n=re(t,r),i=n.get(e);if(i)return i;const s=new Array;return n.set(e,s),s}function re(t,r){const e=t.get(r);if(e)return e;const n=new ie;return t.set(r,n),n}function ne(t){const r=new Set;if(!t.updatedFeatures)return r;for(const e of t.updatedFeatures)e.objectId!=null&&e.error==null&&r.add(e.objectId);return r}(function(t){t[t.EDITING=0]="EDITING",t[t.ROLLED_BACK=1]="ROLLED_BACK",t[t.COMMITTED=2]="COMMITTED"})(w||(w={}));const ie=Map,T=Map;function ge(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:t,layer:{fieldsIndex:r},requiredFields:e}=this;return t.outFields?O(r,[...P(r,t.outFields),...e]):O(r,e)}}}}const C=t=>{let r=class extends t{constructor(){super(...arguments),this._numUpdating=0,this.asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(e,n){return se(i=>this._updateAsync(e,i),n)}async _updateAsync(e,n){if(!this._startAsyncUpdate(e)){try{const i=await n();this._set(e,i)}catch{L.getLogger(this.declaredClass).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(e)&&this._updateAsync(e,n)}}_startAsyncUpdate(e){var i;const n=(i=this.asyncUpdateState.get(e))!=null?i:h.None;return n&h.Updating?(this.asyncUpdateState.set(e,n|h.Invalidated),!0):(++this._numUpdating,this.asyncUpdateState.set(e,n|h.Updating),!1)}_endAsyncUpdate(e){var i;--this._numUpdating;const n=((i=this.asyncUpdateState.get(e))!=null?i:h.None)&~h.Updating;return n&h.Invalidated?(this.asyncUpdateState.set(e,n&~h.Invalidated),!0):(this.asyncUpdateState.set(e,n),!1)}};return a([l({readOnly:!0})],r.prototype,"updating",null),a([l()],r.prototype,"_numUpdating",void 0),r=a([j("esri.core.AsyncUpdate")],r),r};var h;function se(t,r){const e=()=>{s&&!o&&t(n)},n=()=>{if(!s||o)return r();s.clear(),o=!0;const c=G(s,r);return o=!1,c},i=()=>{s&&(s.destroy(),s=null)};let s=new k(e),o=!1;return t(n),{remove:i}}(function(t){t[t.None=0]="None",t[t.Updating=1]="Updating",t[t.Invalidated=2]="Invalidated"})(h||(h={}));let R=class extends C(z){};R=a([j("esri.core.AsyncUpdate")],R);const ae=L.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let I=class extends C(B){constructor(t){super(t)}get requiredFields(){const{layerView:{layer:{fieldsIndex:t},definitionExpressionFields:r},rendererFields:e,labelingFields:n,viewFilterFields:i}=this;return O(t,[...v(r,[]),...v(e,[]),...v(n,[]),...v(i,[])])}initialize(){const t=this.layerView.layer;this.layer=t,this.handles.add([this.autoUpdateAsync("rendererFields",()=>{const{fieldsIndex:r,renderer:e}=this.layer;return e?U(n=>e.collectRequiredFields(n,r)):null}),this.autoUpdateAsync("labelingFields",()=>{const{layer:r}=this;return r.labelsVisible?U(e=>K(e,r)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:r,filter:e}=this.layerView;return U(n=>Q(n,r,e))})])}};async function U(t){const r=new Set;try{return await t(r),Array.from(r).sort()}catch(e){return ae.error(e),null}}a([l()],I.prototype,"layerView",void 0),a([l()],I.prototype,"layer",void 0),a([l()],I.prototype,"requiredFields",null),a([l()],I.prototype,"rendererFields",void 0),a([l()],I.prototype,"labelingFields",void 0),a([l()],I.prototype,"viewFilterFields",void 0),I=a([j("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],I);const oe=L.getLogger("esri.views.layers.SceneLayerView");class m extends Y{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(r){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){const r=this.layer.filter;if(A(r)||r.geometries.length<1)return null;const e=this._geometryEngine;if(A(e)||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return null;try{let n=e.simplify(r.geometries.getItemAt(0));const i=n.spatialReference;for(let s=1;s<r.geometries.length;s++){let o=e.simplify(r.geometries.getItemAt(s));o.spatialReference.equals(i)||(o=W(o,i)),n=e.union(n,o)}return{spatialRelationship:r.spatialRelationship,geometry:n}}catch{return oe.warnOncePerTick("Failed to merge scene filter geometries. Layer mask will be ignored."),null}}get _filterNeedsProjectionEngine(){const r=this.layer.filter;if(A(r)||r.geometries.length<=1)return!1;const e=r.geometries.getItemAt(0).spatialReference;return r.geometries.some(({spatialReference:n})=>!n.equals(e)&&!H(n,e))}get layerFilterUpdating(){return S(this.layer.filter)&&this.layer.filter.geometries.length&&(!this._geometryEngine||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)}initialize(){M(()=>!this._geometryEngine&&S(this.layer.filter)&&this.layer.filter.geometries.length).then(async()=>this._geometryEngine=await import("./geometryEngine.060e3400.js")),this._projectionEngineLoaded=J(),M(()=>!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine).then(async()=>{await X(),this._projectionEngineLoaded=!0})}highlight(r){throw new Error("Not implemented")}queryFeatures(r,e){throw new Error("Not implemented")}queryObjectIds(r,e){throw new Error("Not implemented")}queryFeatureCount(r,e){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(r,e){throw new Error("Not implemented")}}a([l()],m.prototype,"layer",void 0),a([l()],m.prototype,"availableFields",null),a([l()],m.prototype,"maximumNumberOfFeatures",null),a([l({readOnly:!0})],m.prototype,"maximumNumberOfFeaturesExceeded",null),a([l()],m.prototype,"filter",void 0),a([l({readOnly:!0})],m.prototype,"layerFilter",null),a([l()],m.prototype,"_geometryEngine",void 0),a([l()],m.prototype,"_projectionEngineLoaded",void 0),a([l()],m.prototype,"_filterNeedsProjectionEngine",null),a([l()],m.prototype,"layerFilterUpdating",null);export{pe as a,ge as b,I as c,m as g,ce as i};
