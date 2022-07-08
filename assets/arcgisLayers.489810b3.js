import{bl as L,r as f,pF as P,t as w,az as T,pG as g,mX as F,bH as C,bt as N}from"./index.80f43001.js";import{a as J}from"./lazyLayerLoader.794958c8.js";async function R(e){var l;const t=(l=e.properties)==null?void 0:l.customParameters,r=await V(e.url,t),a={...e.properties,url:e.url};if(!r.sublayerIds)return r.layerOrTableId!=null&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),new r.Constructor(a);const s=new(await L(()=>import("./GroupLayer.c7b14d07.js"),["assets/GroupLayer.c7b14d07.js","assets/index.80f43001.js","assets/index.2de8b745.css"])).default({title:r.parsedUrl.title});return U(s,r,a),s}function h(e,t){return e?e.find(r=>r.id===t):null}function U(e,t,r){function a(s,l){const o={...r,layerId:s,sublayerTitleMode:"service-name"};return f(l)&&(o.sourceJSON=l),new t.Constructor(o)}t.sublayerIds.forEach(s=>{const l=a(s,h(t.sublayerInfos,s));e.add(l)}),t.tableIds.forEach(s=>{const l=a(s,h(t.tableInfos,s));e.tables.add(l)})}async function V(e,t){var m,I;let r=P(e);if(w(r)&&(r=await _(e,t)),w(r))throw new T("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:s}=r;let l;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":l=s!=null?"FeatureLayer":j(e,t).then(n=>n?"TileLayer":"MapImageLayer");break;case"ImageServer":l=i(e,{customParameters:t}).then(n=>{const c=n.tileInfo&&n.tileInfo.format;return n.tileInfo?(c==null?void 0:c.toUpperCase())!=="LERC"||n.cacheType&&n.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":l=i(r.url.path,{customParameters:t}).then(n=>{var c;if(n){if((n==null?void 0:n.layerType)==="Voxel")return"VoxelLayer";if((n==null?void 0:n.layers)&&Array.isArray(n.layers)&&n.layers.length>0){const b={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},S=(c=n.layers[0])==null?void 0:c.layerType;if(b[S]!=null)return b[S]}}return"SceneLayer"});break;default:l=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},d=a==="FeatureServer",y={parsedUrl:r,Constructor:null,layerOrTableId:d?s:null,sublayerIds:null,tableIds:null},p=await l;if(u[p]&&s==null){const n=await x(e,a,t);d&&(y.sublayerInfos=n.layerInfos,y.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(y.sublayerIds=n.layerIds,y.tableIds=n.tableIds):d&&(y.layerOrTableId=(m=n.layerIds[0])!=null?m:n.tableIds[0],y.sourceJSON=(I=n.layerInfos[0])!=null?I:n.tableInfos[0])}return y.Constructor=await M(p),y}async function _(e,t){var u;const r=await i(e,{customParameters:t});let a=null,s=null;const l=r.type;if(l==="Feature Layer"||l==="Table"?(a="FeatureServer",s=r.id):l==="indexedVector"?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":v(r)?(a="SceneServer",s=r.id):r.hasOwnProperty("layers")&&v((u=r.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=s!=null?g(e):null;return{title:f(o)&&r.name||F(e),serverType:a,sublayer:s,url:{path:f(o)?o.serviceUrl:C(e).path}}}function v(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function x(e,t,r){let a,s=!1;if(t==="FeatureServer"){const u=await E(e,{customParameters:r});s=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await i(e,{customParameters:r});const l=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(l==null?void 0:l.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:s?l:[],tableInfos:s?o:[]}}function O(e){return!e.type||e.type==="Feature Layer"}async function E(e,t){var l,o;let r=await i(e,t);r=r||{},r.layers=((l=r.layers)==null?void 0:l.filter(O))||[];const a={serviceJSON:r};if(r.currentVersion<10.5)return a;const s=await i(e+"/layers",t);return a.layersJSON={layers:((o=s==null?void 0:s.layers)==null?void 0:o.filter(O))||[],tables:(s==null?void 0:s.tables)||[]},a}async function M(e){return(0,J[e])()}async function j(e,t){return(await i(e,{customParameters:t})).tileInfo}async function i(e,t){return(await N(e,{responseType:"json",query:{f:"json",...t==null?void 0:t.customParameters,token:t==null?void 0:t.apiKey}})).data}export{E as fetchFeatureService,R as fromUrl};
