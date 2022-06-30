import{aD as p,w as l,r as u,C as h,g as r,i as o,n as d}from"./vendor.e1f4f720.js";import{n as c}from"./LayerView3D.06a9b395.js";import{_ as m}from"./GraphicsProcessor.eb7d8ff1.js";import{l as g}from"./projectExtentUtils.568d767f.js";import{u as y}from"./LayerView.0c562d60.js";import"./Graphics3DScaleVisibility.85e1e6ca.js";import"./optimizedFeatureQueryEngineAdapter.8623d62e.js";import"./centroid.2b09e2ae.js";import"./PooledRBush.bc06cb61.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.4838adcf.js";let i=class extends c(y){constructor(){super(...arguments),this.type="graphics-3d",this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new m({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.setup()),this.handles.add(this.layer.on("graphic-update",e=>this.processor.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(g(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.handles.add(p(()=>{var e,s;return(s=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:s.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",l(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)==null?void 0:e.frustumVisibilitySuspended)}getSuspendInfo(){var s,t,a,n;const e=super.getSuspendInfo();return e.outsideScaleRange=(t=(s=this.processor)==null?void 0:s.scaleVisibilitySuspended)!=null?t:!1,e.outsideOfView=(n=(a=this.processor)==null?void 0:a.frustumVisibilitySuspended)!=null?n:!1,e}async fetchPopupFeatures(e,s){return u(s)?s.clientGraphics:null}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,s){return this.processor.whenGraphicBounds(e,s)}computeAttachmentOrigin(e,s){var t;return(t=this.processor)==null?void 0:t.computeAttachmentOrigin(e,s)}getSymbolLayerSize(e,s){return this.processor.getSymbolLayerSize(e,s)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||h.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)==null?void 0:e.scaleVisibilitySuspended)}isUpdating(){var e,s,t;return!(!((e=this.processor)==null?void 0:e.updating)&&(this.layer.internal||((t=(s=this.view)==null?void 0:s.basemapTerrain)==null?void 0:t.ready)))}get performanceInfo(){var e,s,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:(s=(e=this.processor)==null?void 0:e.elevationAlignment.updating)!=null?s:!1,visibilityFrustum:!((t=this.processor)==null?void 0:t.frustumVisibilitySuspended)}}};r([o()],i.prototype,"loadedGraphics",null),r([o({readOnly:!0})],i.prototype,"legendEnabled",null),r([o()],i.prototype,"layer",void 0),r([o({readOnly:!0})],i.prototype,"processor",void 0),r([o({type:Boolean})],i.prototype,"slicePlaneEnabled",void 0),i=r([d("esri.views.3d.layers.GraphicsLayerView3D")],i);const C=i;export{C as default};
