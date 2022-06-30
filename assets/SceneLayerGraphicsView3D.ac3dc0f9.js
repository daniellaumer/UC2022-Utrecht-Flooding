import{dF as z,ag as W,iQ as Z,h as V,r as h,F as J,cd as $,C as K,iR as Y,iS as X,aG as ee,w as y,e1 as te,J as re,t as G,iT as ie,bd as L,iU as se,aS as ae,iV as oe,aT as ne,k as M,dE as R,b2 as de,gG as le,iW as he,be as ue,L as H,g as n,i as d,dd as ce,b_ as pe,n as ge,er as me,ar as _e,ba as ye}from"./vendor.e1f4f720.js";import{s as fe,f as be,t as ve}from"./I3SAttributeOverrides.07cec4b7.js";import{n as xe}from"./LayerView3D.06a9b395.js";import{F as Ee,l as Ie}from"./Graphics3DFeatureProcessor.dac75c60.js";import{c as we,i as Se,a as De,b as Ce,g as Oe}from"./SceneLayerView.48777ba2.js";import{p as Ae}from"./DefinitionExpressionSceneLayerView.85c210d2.js";import{c as Fe}from"./PopupSceneLayerView.0de53e9d.js";import"./I3SNode.2d6b92fe.js";import"./Graphics3DScaleVisibility.85e1e6ca.js";import"./optimizedFeatureQueryEngineAdapter.8623d62e.js";import"./centroid.2b09e2ae.js";import"./PooledRBush.bc06cb61.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.4838adcf.js";import"./floorFilterUtils.69500d62.js";import"./QueryEngine.00853929.js";import"./QueryEngineResult.e001e53c.js";import"./WhereClause.de5a3790.js";import"./utils.b67e6d51.js";import"./ClassBreaksDefinition.ee27788f.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./attributeUtils.99d8ee08.js";import"./LayerView.0c562d60.js";import"./popupUtils.7121c2f0.js";class q extends z{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}const F=W.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),P=Ce();let o=class extends Ae(Fe(xe(Oe))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._nodesAddedToStage=new Map,this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new fe,this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}initialize(){var t,i;const e=this.layer;this.addResolvingPromise(e.indexInfo),this._attributeOverrides=new be(this.layer,(t=this.view.resourceController)==null?void 0:t.memoryController),Z(e,this.view.spatialReference,this.view.viewingMode),this.fieldsHelper=new we({layerView:this}),this.updatingHandles.add(()=>e.rangeInfos,r=>this._rangeInfosChanged(r),V),this.updatingHandles.add(()=>e.renderer,(r,s)=>this._rendererChange(r,s)),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.excludeObjectIdsSorted],()=>this._filterChange()),this.updatingHandles.add(()=>this.view.floors,()=>h(this.processor.filterVisibility)&&this.processor.filterVisibility.filterChanged()),this.handles.add(J(()=>$.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const s=this._controller.crsIndex;import("./I3STreeDebugger.19de962b.js").then(({I3STreeDebugger:a})=>{!this._treeDebugger&&$.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new a({lv:this,view:this.view,nodeSR:s}))})}else r||!this._treeDebugger||$.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},V)),this._set("processor",new Ee({owner:this,preferredUpdatePolicy:K.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,dataExtent:e.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",r=>this._invalidateElevation(r)),this.supportsHeightUnitConversion&&(this._verticalScale=Y("point",e.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.setup()),this._memCache=this.view.resourceController.memoryController.newCache(e.uid),this._controller=new ve({layerView:this,scaleVisibilityEnabled:!1}),X(this.layer.geometryDefinitions)&&(this._worker=new q(r=>this.view.resourceController.schedule(r))),this.handles.add(this.layer.on("apply-edits",r=>this.updatingHandles.addPromise(r.result))),this.handles.add(this.layer.on("edits",r=>this._handleEdits(r))),this.when(()=>{this._queryEngine=new Ie({layerView:this,priority:ee.FEATURE_QUERY_ENGINE}),this.updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,V),this.updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._attributeOverrides=y(this._attributeOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this._nodesAddedToStage.clear(),this.fieldsHelper=y(this.fieldsHelper)}get requiredFields(){var e,t;return(t=(e=this.fieldsHelper)==null?void 0:e.requiredFields)!=null?t:[]}get maximumNumberOfFeatures(){var t,i,r;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(r=e==null?void 0:e.maximumNumberOfFeatures)!=null?r:0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)==null?void 0:e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return te(this.layer,e,this._getObjectIdField(),t,()=>[...this._nodesAddedToStage.values()])}getHit(e){if(!this.loadedGraphics)return null;const t=re(this.loadedGraphics.find(r=>r.uid===e),this.layer),i=this._getObjectIdField();return t&&t.attributes&&t.attributes[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){var e,t,i;return!!(((e=this._controller)==null?void 0:e.updating)||((t=this.processor)==null?void 0:t.updating)||((i=this.fieldsHelper)==null?void 0:i.updating)||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return Se(this.attributeEditingContext,e)}async _extractBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};return G(this._worker)&&(this._worker=new q(r=>this.view.resourceController.schedule(r))),this._worker.invoke(i,t).then(r=>{if(h(r))return{positionData:r.positions,featureIds:r.featureIds};throw new Error("Failed to decompress Draco point data")})}_checkExtent(e,t){e&&!ie(e,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&F.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&F.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)}async addNode(e,t,i){if(!j(t)&&!U(t))throw new Error;if(this._nodesAddedToStage.has(e.index))return void F.error("I3S node "+e.id+" already added");const r=h(this.layer.fullExtent)?Ne(this.layer.fullExtent.clone(),.5):null,s=this._controller.crsVertex,a=[],l={graphics:null,featureIds:null,attributeInfo:t.attributeDataInfo,node:e};if(j(t)?await this._addNodeBinaryPointData(e,l,t,r,a,i):U(t)&&this._addNodeLegacyPointData(e,l,t,r,a),await this._attributeOverrides.apply(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),Q(l),a.length>0&&(this._computeObb(e,a,s),this._controller.updateVisibility(e.index)),this._controller.isGeometryVisible(e)){if(h(this._verticalScale))for(const u of l.graphics)this._verticalScale(u.geometry);this._nodesAddedToStage.set(e.index,l),this.loadedGraphics.addMany(l.graphics),this._controller.updateLoadStatus(e.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}else this._cacheNodeData(l)}_computeObb(e,t,i){const r=this._controller.crsIndex,s=r.isGeographic?this.view.renderSpatialReference:r;L(t,i,0,t,s,0,t.length/3);const a={data:t,size:3};e.serviceObb=se(a),r.isGeographic&&ae(e.serviceObb.center,s,e.serviceObb.center,r)}isNodeLoaded(e){return this._nodesAddedToStage.has(e)}isNodeReloading(){return!1}updateNodeState(){}async _addNodeBinaryPointData(e,t,i,r,s,a){const l=await this._extractBinaryPointData(i,a);if(l==null)throw new Error;const u=this._getObjectIdField(),b=this._controller.crsVertex,D=this.view.spatialReference,C=this.processor.graphicsCore,{positionData:g,featureIds:w}=l,v=3,O=g.length/v,m=new Array;for(let x=0;x<O;x++){const N=h(e.serviceObb)?e.serviceObb.center:[0,0,0],E=x*v,c=oe(g[E+0],g[E+1],g[E+2]);ne(c,c,N),e.serviceObb||s.push(c[0],c[1],c[2]),h(r)&&this._checkExtent(r,c);const I=w[x],T={};I!=null&&(T[u]=I);const A=I==null?M.generateUID():I;L(c,b,0,f,D,0,1);const _=R(f[0],f[1],f[2],D),S=this.loadedGraphics.get(A);if(h(S))S.level<e.level&&(p.property="geometry",p.graphic=S,p.oldValue=de(S.geometry),p.newValue=_,S.geometry=_,C.graphicUpdateHandler(p)),m.push(S);else{const k=M.generateUID();m.push({objectId:A,uid:k,geometry:_,attributes:T,visible:!0,level:e.level})}}t.graphics=m,t.featureIds=Array.from(w)}_addNodeLegacyPointData(e,t,i,r,s){const a=this._getObjectIdField(),l=this._controller.crsVertex,u=this.view.spatialReference,b=[0,0,0],D=new Array,C=new Array;for(const g of i.pointData){const w=g.featureDataPosition,v=w.length,O=g.geometries&&g.geometries[0]||Te[v],m=g.featureIds[0];if(O.params.type!=="points")continue;h(r)&&this._checkExtent(r,w);const x={};m!=null&&(x[a]=m);const N=m==null?M.generateUID():m;let E;O.type==="Embedded"&&(E=O.params.vertexAttributes.position);for(let c=0;c<E.length;c+=v){for(let _=0;_<v;_++)b[_]=w[_]+E[c+_];const I=v===3;e.serviceObb||s.push(b[0],b[1],I?b[2]:0),L(b,l,0,f,u,0,1);const T=R(f[0],f[1],I?f[2]:void 0,u),A=this.loadedGraphics.get(N);h(A)?C.push(A):C.push({objectId:N,uid:M.generateUID(),geometry:T,attributes:x,visible:!0})}D.push(m)}t.graphics=C,t.featureIds=D}_updateNodeMemory(e){e.memory=4096+(h(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>le(r)+i,512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this._nodesAddedToStage.forEach((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._nodesAddedToStage.clear(),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this._nodesAddedToStage.get(e);return t?(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeMany(t.graphics),this._nodesAddedToStage.delete(e),this._treeDebugger&&this._treeDebugger.update(),t):null}async loadCachedNodeData(e){return this._memCache.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this._nodesAddedToStage.has(e.index)?F.error("I3S node "+e.id+" already added"):(this.loadedGraphics.addMany(t.graphics),this._nodesAddedToStage.set(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),await this.updateAttributes(e.index,i,r),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this._nodesAddedToStage.forEach(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this._nodesAddedToStage.forEach(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this._nodesAddedToStage.forEach((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this._nodesAddedToStage.get(e);if(t&&h(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this._nodesAddedToStage.get(e);if(t&&h(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this._nodesAddedToStage.get(e);i&&!G(i.attributeInfo)&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this._nodesAddedToStage.get(e);r&&(await this._attributeOverrides.apply(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if(Q(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||"OBJECTID"}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let s,a;e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],r.clear(),t?(await t.collectRequiredFields(r,i),a=Array.from(r).sort()):a=[],s.length===a.length&&s.every((l,u)=>s[u]===a[u])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&F.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this._nodesAddedToStage.forEach(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this.excludeObjectIdsSorted,r=this._getObjectIdField();for(const s of e.graphics){const a=s.visible,l=!t||this._evaluateClause(t,s),u=G(i)||he(i,s.attributes[r])<0;s.visible=l&&u,a!==s.visible&&(p.graphic=s,p.property="visible",p.oldValue=a,p.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(p))}}_invalidateElevation(e){const t=this._controller.crsIndex;ue(e.extent,e.spatialReference,B,t),this._controller.updateElevationChanged(B,t)}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return h(this.filter)?this.filter.createQuery(e):new H(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(G(e)?this.createQuery():H.from(e))}getUsedMemory(){var e,t,i;return(i=(t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)!=null?i:0}getUnloadedMemory(){var e,t,i,r,s;return .8*(((t=(e=this._controller)==null?void 0:e.unloadedMemoryEstimate)!=null?t:0)+((s=(r=(i=this.processor)==null?void 0:i.graphicsCore)==null?void 0:r.unprocessedMemoryEstimate)!=null?s:0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){De(this.attributeEditingContext,e)}get attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:t=>this._nodesAddedToStage.forEach(i=>t(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:t=>this.getAttributeData(t),setAttributeData:(t,i,r)=>{this._setAttributeData(t,i);const s=this._nodesAddedToStage.get(t);if(h(r)){const a=this.loadedGraphics.get(r.attributes[e]);h(a)&&this.processor.graphicsCore.recreateGraphics([a])}else h(s)&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,loadedGraphics:this.loadedGraphics}}};n([d()],o.prototype,"processor",void 0),n([d({type:ce})],o.prototype,"filter",void 0),n([d()],o.prototype,"loadedGraphics",void 0),n([d({aliasOf:"layer"})],o.prototype,"i3slayer",void 0),n([d()],o.prototype,"_controller",void 0),n([d()],o.prototype,"updating",void 0),n([d()],o.prototype,"suspended",void 0),n([d()],o.prototype,"holeFilling",void 0),n([d(pe)],o.prototype,"updatingProgress",void 0),n([d({aliasOf:"_controller.updatingProgress"})],o.prototype,"updatingProgressValue",void 0),n([d(P.requiredFields)],o.prototype,"requiredFields",null),n([d(P.availableFields)],o.prototype,"availableFields",void 0),n([d()],o.prototype,"fieldsHelper",void 0),n([d({type:Number})],o.prototype,"maximumNumberOfFeatures",null),n([d({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),n([d()],o.prototype,"excludeObjectIdsSorted",null),n([d({readOnly:!0})],o.prototype,"lodFactor",null),n([d({readOnly:!0})],o.prototype,"hasM",null),n([d({readOnly:!0})],o.prototype,"hasZ",null),o=n([ge("esri.views.3d.layers.SceneLayerGraphicsView3D")],o);const st=o;function U(e){return"pointData"in e}function j(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Q(e){const t=e.attributeInfo;for(let i=0;i<e.graphics.length;i++){const r=e.graphics[i];if(r.attributes||(r.attributes={}),h(t)&&h(t.loadedAttributes))for(const{name:s}of t.loadedAttributes)t.attributeData[s]&&(r.attributes[s]=me(t.attributeData[s],i))}}function Ne(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.hasZ&&(e.zmin-=t,e.zmax+=t),e.hasM&&(e.mmin-=t,e.mmax+=t),e}const Te={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},f=_e(),p={graphic:null,property:null,oldValue:null,newValue:null},B=ye();export{st as default};
