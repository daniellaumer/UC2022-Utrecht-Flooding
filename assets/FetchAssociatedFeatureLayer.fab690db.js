import{t as o,r as m,bx as c,ox as f,mO as h,dp as y,bH as g,bI as I}from"./vendor.e1f4f720.js";class _{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=(e=this.portalItem)!=null?e:await this._portalItemFromServiceItemId();if(o(t))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t);return o(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var r;if(!this.urlParts)return null;const t=(r=this.portalItem)!=null?r:await this._portalItemFromServiceItemId();return o(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(m(this.rootDocument))return this.rootDocument;if(o(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},r=`${this.urlParts.root}/SceneServer`;try{const e=await c(r,t);this.rootDocument=e.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){var e;const t=(e=f)==null?void 0:e.findServerInfo(this.parsedUrl.path);if(t==null?void 0:t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await c(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(a)return a}catch(a){h(a)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(r=>r.type==="Feature Service")||null}catch(r){return h(r),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this._findMatchingAssociatedSublayerUrl(t.url);return new y({url:r,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new y({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},a=this.urlParts.layerId,s=this._fetchRootDocument(),p=c(r,e),[u,d]=await Promise.all([p,s]),l=d&&d.layers,i=u.data&&u.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(l)){for(let n=0;n<Math.min(l.length,i.length);n++)if(l[n].id===a)return`${r}/${i[n].id}`}else if(a<i.length)return`${r}/${i[a].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const r=new g({id:t,apiKey:this.apiKey}),e=await this._fetchServiceOwningPortalUrl();m(e)&&(r.portal=new I({url:e}));try{return r.load({signal:this.signal})}catch(a){return h(a),null}}}export{_ as l};
