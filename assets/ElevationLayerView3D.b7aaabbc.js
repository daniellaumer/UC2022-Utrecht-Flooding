import{az as c,e as i,d,n as v}from"./index.80f43001.js";import{n as h}from"./LayerView3D.4e2973f2.js";import{c as f}from"./TiledLayerView3D.6a4c787d.js";import{u}from"./LayerView.253978d9.js";let e=class extends f(h(u)){constructor(){super(...arguments),this.type="elevation-3d"}initialize(){var o,r,s,l,n;const a=(r=(o=this.view)==null?void 0:o.map)==null?void 0:r.allLayers,y=a&&a.includes(this.layer),t=(n=(l=(s=this.view)==null?void 0:s.map)==null?void 0:l.ground)==null?void 0:n.layers,m=t&&t.includes(this.layer);if(y&&!m){const p=new c("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(p))}this._addTilingSchemeMatchPromise()}};i([d()],e.prototype,"layer",void 0),i([d({readOnly:!0,aliasOf:"layer.tileInfo"})],e.prototype,"tileInfo",void 0),e=i([v("esri.views.3d.layers.ElevationLayerView3D")],e);const z=e;export{z as default};
