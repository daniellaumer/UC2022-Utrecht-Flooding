import{e as r,d as i,n as o,az as s}from"./index.80f43001.js";import{w as l}from"./FeatureLayerViewBase3D.9577fcf3.js";import"./FeatureLikeLayerView3D.e179f201.js";import"./dehydratedFeatureComparison.6fd14f99.js";import"./Graphics3DFeatureProcessor.b2a1d7fa.js";import"./Graphics3DScaleVisibility.deb17ee6.js";import"./optimizedFeatureQueryEngineAdapter.f4c0f182.js";import"./centroid.9fac0b20.js";import"./PooledRBush.f3f43766.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.ddcf4268.js";import"./QueryEngine.f07e4dac.js";import"./QueryEngineResult.4fd5dc31.js";import"./WhereClause.0e6b7dc6.js";import"./utils.fba20cb6.js";import"./ClassBreaksDefinition.df7aa87e.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./attributeUtils.99d8ee08.js";import"./FeatureStore.a5aa5fe5.js";import"./projectExtentUtils.0a5b2a0a.js";import"./LayerView3D.4e2973f2.js";import"./EventedSet.3c18ae4e.js";import"./popupUtils.6c10fd57.js";import"./LayerView.253978d9.js";import"./RefreshableLayerView.2c1f157e.js";const m=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends m(l){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const k=t;export{k as default};
