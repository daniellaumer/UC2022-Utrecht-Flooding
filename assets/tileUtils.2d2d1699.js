import{e as o,d as r,n as d,i as u}from"./index.80f43001.js";let t=class extends u{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const s=this.get("tileStore.tileScheme.spatialReference");return s&&s.toJSON()||null}};o([r({readOnly:!0})],t.prototype,"supportsTileUpdates",null),o([r({constructOnly:!0})],t.prototype,"remoteClient",void 0),o([r({constructOnly:!0})],t.prototype,"service",void 0),o([r()],t.prototype,"spatialReference",null),o([r({constructOnly:!0})],t.prototype,"tileInfo",void 0),o([r({constructOnly:!0})],t.prototype,"tileStore",void 0),t=o([d("esri.views.2d.layers.features.processors.BaseProcessor")],t);const f=t;function v(s,c,i,p){const e=s.clone(),n=1<<e.level,l=e.col+c,a=e.row+i;return p&&l<0?(e.col=l+n,e.world-=1):l>=n?(e.col=l-n,e.world+=1):e.col=l,e.row=a,e}export{v as l,f as p};
