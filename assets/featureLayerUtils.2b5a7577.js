import{ag as L,ca as m,r1 as w,bI as F,R as n,r2 as R,r3 as D,dp as U,aJ as _,t as q,r4 as z,bH as B,pU as M,r as $}from"./vendor.e1f4f720.js";import{fetchFeatureService as Y}from"./arcgisLayers.2ca58d4b.js";import{o as v}from"./jsonContext.f681423f.js";import{i as f,a as j,c as g,f as d}from"./portalItemUtils.ef74c483.js";import"./lazyLayerLoader.61c37b60.js";const C=L.getLogger("esri.layers.FeatureLayer"),y="Feature Service";function c(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function N(a,e){if(e.type!==y)throw new n("feature-layer:portal-item-wrong-type",c(a,`should have portal item of type "${y}"`))}async function O(a){if(await a.load(),R(a))throw new n("feature-layer:save",c(a,"using an in-memory source cannot be saved to a portal item"))}function G(a,e){let r=a.messages.filter(({type:t})=>t==="error").map(({name:t,message:s,details:o})=>new n(t,s,o));if((e==null?void 0:e.ignoreUnsupported)&&(r=r.filter(({name:t})=>t!=="layer:unsupported"&&t!=="symbol:unsupported"&&t!=="symbol-layer:unsupported"&&t!=="property:unsupported"&&t!=="url:unsupported")),r.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function b(a,e,r){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const t=a.write({},e);return G(e,r),t}function E(a){const{layer:e,layerJSON:r}=a;return e.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function h(a){f(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,r,t)=>t.indexOf(e)===r))}function H(a){const e=a.portalItem;if(!e)throw C.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",c(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));N(a,e)}async function P(a,e){return/\/\d+\/?$/.test(a.url)?E(e[0]):k(a,e)}async function k(a,e){const{layer:{url:r,customParameters:t,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await Q(o,{url:r,customParameters:t,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)T(l.layer,l.layerJSON,o);return o}async function Q(a,e,r){var t,s;a||(a={}),(t=a).layers||(t.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await Y(o,{customParameters:l,apiKey:i}),I=J(a.layers,u.layers,r),S=J(a.tables,u.tables,r);a.layers=I.itemResources,a.tables=S.itemResources;const x=[...I.added,...S.added],K=p?[...p.layers,...p.tables]:[];return await V(a,x,o,K),a}function J(a,e,r){const t=D(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!t.removed.some(l=>l.id===o.id));const s=t.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!r.includes(o))}}async function V(a,e,r,t){const s=e.map(({id:o})=>new U({url:r,layerId:o,sourceJSON:t.find(({id:l})=>l===o)}));await _(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||q(u)||T(o,{id:l,popupInfo:u.toJSON()},a)})}function T(a,e,r){a.isTable?A(r.tables,e):A(r.layers,e)}function A(a,e){const r=a.findIndex(({id:t})=>t===e.id);r===-1?a.push(e):a[r]=e}function W(a){const{portalItem:e}=a;return z(a)&&!a.dynamicDataSource&&!!(e==null?void 0:e.loaded)&&e.type===y}async function X(a){if(!(a==null?void 0:a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(t=>t.load()));for(const t of a)if(!W(t))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${c(t,"does not conform")}`,{layer:t});const e=a.map(t=>t.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=a.map(t=>t.layerId);if(new Set(r).size!==r.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Z(a,e){var o,l;var r,t;let s=B.from(e);return s.id&&(s=s.clone(),s.id=null),(o=(r=s).type)!=null||(r.type=y),(l=(t=s).portal)!=null||(t.portal=F.getDefault()),N(a,s),s}async function aa(a,e){const{url:r,layerId:t,title:s,fullExtent:o,isTable:l}=a,i=M(r),u=$(i)&&i.serverType==="FeatureServer";e.url=u?r:`${r}/${t}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await j(o)),g(e,d.METADATA),g(e,d.MULTI_LAYER),f(e,d.SINGLE_LAYER),l&&f(e,d.TABLE),h(e)}async function ea(a,e,r){const t=a.portal;await t._signIn(),await t.user.addItem({item:a,data:e,folder:r==null?void 0:r.folder})}const ua=m(ra);async function ra(a,e){await O(a),H(a);const r=a.portalItem,t=v(r),s=await b(a,t,e),o=await P(r,[{layer:a,layerJSON:s}]);return h(r),await r.update({data:o}),w(t),r}const da=m(async(a,e)=>{await X(a);const r=a[0].portalItem,t=v(r),s=await Promise.all(a.map(l=>b(l,t,e))),o=await P(r,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return h(r),await r.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),w(t),r.clone()}),ca=m(ta);async function ta(a,e,r){await O(a);const t=Z(a,e),s=v(t),o=E({layer:a,layerJSON:await b(a,s,r)});return await aa(a,t),await ea(t,o,r),a.portalItem=t,w(s),t}export{ua as save,da as saveAll,ca as saveAs};