import{V as c,i,j as d,n as v}from"./vendor.e52053a0.js";import{n as h}from"./LayerView3D.7202286f.js";import{c as f}from"./TiledLayerView3D.b2d7aae3.js";import{u}from"./LayerView.1c64da55.js";let e=class extends f(h(u)){constructor(){super(...arguments),this.type="elevation-3d"}initialize(){var t,o,r,l,n;const a=(o=(t=this.view)==null?void 0:t.map)==null?void 0:o.allLayers,y=a&&a.includes(this.layer),s=(n=(l=(r=this.view)==null?void 0:r.map)==null?void 0:l.ground)==null?void 0:n.layers,m=s&&s.includes(this.layer);if(y&&!m){const p=new c("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(p))}this._addTilingSchemeMatchPromise()}};i([d()],e.prototype,"layer",void 0),i([d({readOnly:!0,aliasOf:"layer.tileInfo"})],e.prototype,"tileInfo",void 0),e=i([v("esri.views.3d.layers.ElevationLayerView3D")],e);const x=e;export{x as default};
