import{r as i,t as n,ci as a,cj as c}from"./index.80f43001.js";function f(r){const t=r.view.spatialReference,e=r.layer.fullExtent,o=i(e)&&e.spatialReference;if(n(e)||!o)return Promise.resolve(null);if(o.equals(t))return Promise.resolve(e.clone());const s=a(e,t);return i(s)?Promise.resolve(s):r.view.state.isLocal?c(e,t,r.layer.portalItem).then(l=>!r.destroyed&&l?l:void 0).catch(()=>null):Promise.resolve(null)}export{f as l};
