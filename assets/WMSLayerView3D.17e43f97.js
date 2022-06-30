import{g as a,i as h,gt as w,n as d,R as m,au as x}from"./vendor.e1f4f720.js";import{q as g}from"./DynamicLayerView3D.05b3d26d.js";import{l as P}from"./ExportWMSImageParameters.33b32b02.js";import"./LayerView3D.06a9b395.js";import"./projectExtentUtils.568d767f.js";import"./ImageMaterial.5844d4d1.js";import"./LayerView.0c562d60.js";import"./RefreshableLayerView.8a32d108.js";const v=r=>{let e=class extends r{initialize(){this.exportImageParameters=new P({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:i}=this;if(!t)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:o}=i;if(!o)return Promise.reject(new m("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const n=this.createFetchPopupFeaturesQuery(t);if(!n)return Promise.resolve([]);const{extent:p,width:s,height:u,x:y,y:f}=n;if(!(p&&s&&u))throw new m("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:s,height:u});const c=i.fetchFeatureInfo(p,s,u,y,f);return Promise.resolve(c?[c]:[])}};return a([h()],e.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],e.prototype,"exportImageVersion",null),a([h()],e.prototype,"layer",void 0),a([h(w)],e.prototype,"timeExtent",void 0),e=a([d("esri.layers.mixins.WMSLayerView")],e),e};let l=class extends v(g){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add(()=>{var r;return(r=this.exportImageParameters)==null?void 0:r.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(r){const e=this.findExtentInfoAt(r),t=e.extent,i=new x(t[0],t[1],t[2],t[3],this._spatialReference),o=e.imageSize,n=o.width,p=o.height,s=i.width/n;return{extent:i,width:n,height:p,x:Math.round((r.x-i.xmin)/s),y:Math.round((i.ymax-r.y)/s)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};l=a([d("esri.views.3d.layers.WMSLayerView3D")],l);const W=l;export{W as default};
