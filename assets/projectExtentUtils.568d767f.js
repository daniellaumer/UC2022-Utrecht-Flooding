import{r as n,t as a,co as i,cp as c}from"./vendor.e1f4f720.js";function f(r){const o=r.view.spatialReference,e=r.layer.fullExtent,t=n(e)&&e.spatialReference;if(a(e)||!t)return Promise.resolve(null);if(t.equals(o))return Promise.resolve(e.clone());const s=i(e,o);return n(s)?Promise.resolve(s):r.view.state.isLocal?c(e,o,r.layer.portalItem).then(l=>!r.destroyed&&l?l:void 0).catch(()=>null):Promise.resolve(null)}export{f as l};