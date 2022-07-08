import{s as U,d as x,a as ge,n as K}from"./arcadeUtils.dfe9d04d.js";import{E as Y,b as oe,e as le,D as we,q as fe,y as he,h as ce,a as Ee,s as Ie,c as Fe,S as X,A as De,I as $e,g as be,v as C,m as Ne,w as H,C as S,d as Q}from"./featureSetUtils.c4bbe9cb.js";import{oV as D,oX as N,oR as $,ps as L,oQ as P,oU as b,pl as z,oI as O,oY as M,oK as Ae,o$ as xe,p0 as Se,p1 as Le,eG as Te,oP as k,ti as ve,di as Z,gi as B,ph as _,t4 as V}from"./index.80f43001.js";import{g as Oe,E as ue}from"./SpatialFilter.68b7274e.js";import{WhereClause as E}from"./WhereClause.0e6b7dc6.js";import"./executeForIds.fc4cbed1.js";import"./geometryEngineAsync.b7a206cb.js";function Re(i,a,d,m){if(m.length===1){if(b(m[0]))return K(i,m[0],-1);if(M(m[0]))return K(i,m[0].toArray(),-1)}return K(i,m,-1)}async function ee(i,a,d){const m=i.getVariables();if(m.length>0){const g=[];for(let n=0;n<m.length;n++){const r={name:m[n]};g.push(await a.evaluateIdentifier(d,r))}const e={};for(let n=0;n<m.length;n++)e[m[n]]=g[n];return i.parameters=e,i}return i}function c(i,a,d=null){for(const m in i)if(m.toLowerCase()===a.toLowerCase())return i[m];return d}function de(i){if(i===null)return null;const a={type:c(i,"type",""),name:c(i,"name","")};if(a.type==="range")a.range=c(i,"range",[]);else{a.codedValues=[];for(const d of c(i,"codedValues",[]))a.codedValues.push({name:c(d,"name",""),code:c(d,"code",null)})}return a}function te(i){if(i===null)return null;const a={},d=c(i,"wkt",null);d!==null&&(a.wkt=d);const m=c(i,"wkid",null);return m!==null&&(a.wkid=m),a}function me(i){if(i===null)return null;const a={hasZ:c(i,"hasz",!1),hasM:c(i,"hasm",!1)},d=c(i,"spatialreference",null);d&&(a.spatialReference=te(d));const m=c(i,"x",null);if(m!==null)return a.x=m,a.y=c(i,"y",null),a;const g=c(i,"rings",null);if(g!==null)return a.rings=g,a;const e=c(i,"paths",null);if(e!==null)return a.paths=e,a;const n=c(i,"points",null);if(n!==null)return a.points=n,a;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const l=c(i,r,null);l!==null&&(a[r]=l)}return a}function Ce(i,a){for(const d of a)if(d===i)return!0;return!1}function Me(i){return!!i.layerDefinition&&!!i.featureSet&&Ce(i.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&i.layerDefinition.objectIdField!==null&&i.layerDefinition.objectIdField!==""&&b(i.layerDefinition.fields)!==!1&&b(i.featureSet.features)!==!1}function _e(i){i.mode==="async"&&(i.functions.getuser=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,1,2);let n=N(e[1],""),r=n===!0;if(n=n===!0||n===!1?"":$(n),e[0]instanceof U){let u=null;a.services&&a.services.portal&&(u=a.services.portal),u=Y(e[0],u);const o=await oe(u,n,r);if(o){const t=JSON.parse(JSON.stringify(o));for(const s of["lastLogin","created","modified"])t[s]!==void 0&&t[s]!==null&&(t[s]=new Date(t[s]));return x.convertObjectToArcadeDictionary(t)}return null}let l=null;if(L(e[0])&&(l=e[0]),l){if(r=!1,n)return null;await l.load();const u=await l.getOwningSystemUrl();if(!u){if(!n){const s=await l.getIdentityUser();return s?x.convertObjectToArcadeDictionary({username:s}):null}return null}let o=null;a.services&&a.services.portal&&(o=a.services.portal),o=Y(new U(u),o);const t=await oe(o,n,r);if(t){const s=JSON.parse(JSON.stringify(t));for(const f of["lastLogin","created","modified"])s[f]!==void 0&&s[f]!==null&&(s[f]=new Date(s[f]));return x.convertObjectToArcadeDictionary(s)}return null}throw new Error("Invalid Parameter")})},i.signatures.push({name:"getuser",min:"1",max:"2"}),i.functions.featuresetbyid=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,2,4),e[0]instanceof le){const n=$(e[1]);let r=N(e[2],null);const l=P(N(e[3],!0));if(r===null&&(r=["*"]),b(r)===!1)throw new Error("Invalid Parameter");return e[0].featureSetById(n,l,r)}throw new Error("Invalid Parameter")})},i.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),i.functions.getfeatureset=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,1,2),z(e[0])){let n=N(e[1],"datasource");return n===null&&(n="datasource"),n=$(n).toLowerCase(),we(e[0].fullSchema(),n,a.lrucache,a.interceptor,a.spatialReference)}throw new Error("Invalid Parameter")})},i.signatures.push({name:"getfeatureset",min:"1",max:"2"}),i.functions.featuresetbyportalitem=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,2,5),e[0]===null)throw new Error("Portal is required");if(e[0]instanceof U){const o=$(e[1]),t=$(e[2]);let s=N(e[3],null);const f=P(N(e[4],!0));if(s===null&&(s=["*"]),b(s)===!1)throw new Error("Invalid Parameter");let w=null;return a.services&&a.services.portal&&(w=a.services.portal),w=Y(e[0],w),fe(o,t,a.spatialReference,s,f,w,a.lrucache,a.interceptor)}if(O(e[0])===!1)throw new Error("Portal is required");const n=$(e[0]),r=$(e[1]);let l=N(e[2],null);const u=P(N(e[3],!0));if(l===null&&(l=["*"]),b(l)===!1)throw new Error("Invalid Parameter");if(a.services&&a.services.portal)return fe(n,r,a.spatialReference,l,u,a.services.portal,a.lrucache,a.interceptor);throw new Error("Portal is required")})},i.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),i.functions.featuresetbyname=function(a,d){return i.standardFunctionAsync(a,d,(m,g,e)=>{if(D(e,2,4),e[0]instanceof le){const n=$(e[1]);let r=N(e[2],null);const l=P(N(e[3],!0));if(r===null&&(r=["*"]),b(r)===!1)throw new Error("Invalid Parameter");return e[0].featureSetByName(n,l,r)}throw new Error("Invalid Parameter")})},i.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),i.functions.featureset=function(a,d){return i.standardFunction(a,d,(m,g,e)=>{D(e,1,1);let n=e[0];const r={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(O(n))n=JSON.parse(n),n.layerDefinition!==void 0?(r.layerDefinition=n.layerDefinition,r.featureSet=n.featureSet,n.layerDefinition.spatialReference&&(r.layerDefinition.spatialReference=n.layerDefinition.spatialReference)):(r.featureSet.features=n.features,r.featureSet.geometryType=n.geometryType,r.layerDefinition.geometryType=r.featureSet.geometryType,r.layerDefinition.objectIdField=n.objectIdFieldName,r.layerDefinition.typeIdField=n.typeIdFieldName,r.layerDefinition.globalIdField=n.globalIdFieldName,r.layerDefinition.fields=n.fields,n.spatialReference&&(r.layerDefinition.spatialReference=n.spatialReference));else{if(!(e[0]instanceof x))throw new Error("Invalid Parameter");{n=JSON.parse(e[0].castToText());const l=c(n,"layerdefinition");if(l!==null){r.layerDefinition.geometryType=c(l,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.globalIdField=c(l,"globalidfield",""),r.layerDefinition.objectIdField=c(l,"objectidfield",""),r.layerDefinition.typeIdField=c(l,"typeidfield","");const u=c(l,"spatialreference",null);u&&(r.layerDefinition.spatialReference=te(u));for(const t of c(l,"fields",[])){const s={name:c(t,"name",""),alias:c(t,"alias",""),type:c(t,"type",""),nullable:c(t,"nullable",!0),editable:c(t,"editable",!0),length:c(t,"length",null),domain:de(c(t,"domain"))};r.layerDefinition.fields.push(s)}const o=c(n,"featureset",null);if(o){const t={};for(const s of r.layerDefinition.fields)t[s.name.toLowerCase()]=s.name;for(const s of c(o,"features",[])){const f={},w=c(s,"attributes",{});for(const F in w)f[t[F.toLowerCase()]]=w[F];r.featureSet.features.push({attributes:f,geometry:me(c(s,"geometry",null))})}}}else{r.layerDefinition.geometryType=c(n,"geometrytype",""),r.featureSet.geometryType=r.layerDefinition.geometryType,r.layerDefinition.objectIdField=c(n,"objectidfieldname",""),r.layerDefinition.typeIdField=c(n,"typeidfieldname","");const u=c(n,"spatialreference",null);u&&(r.layerDefinition.spatialReference=te(u));for(const t of c(n,"fields",[])){const s={name:c(t,"name",""),alias:c(t,"alias",""),type:c(t,"type",""),nullable:c(t,"nullable",!0),editable:c(t,"editable",!0),length:c(t,"length",null),domain:de(c(t,"domain"))};r.layerDefinition.fields.push(s)}const o={};for(const t of r.layerDefinition.fields)o[t.name.toLowerCase()]=t.name;for(const t of c(n,"features",[])){const s={},f=c(t,"attributes",{});for(const w in f)s[o[w.toLowerCase()]]=f[w];r.featureSet.features.push({attributes:s,geometry:me(c(t,"geometry",null))})}}}}if(Me(r)===!1)throw new Error("Invalid Parameter");return he.create(r,a.spatialReference)})},i.signatures.push({name:"featureset",min:"1",max:"1"}),i.functions.filter=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,2,2),b(e[0])||M(e[0])){const n=[];let r=e[0];r instanceof Ae&&(r=r.toArray());let l=null;if(e[1]instanceof xe)l=i.arcadeCustomFunctionHandler(e[1]);else if(e[1]instanceof Se)l=(...u)=>e[1].fn(a,{preparsed:!0,arguments:u});else{if(!(e[1]instanceof Le))throw new Error("Invalid Parameter");l=(...u)=>{if(u.length!==e[1].paramCount)throw new Error("Invalid parameters");return e[1].fn(...u)}}for(const u of r){const o=l(u);Te(o)?await o===!0&&n.push(u):o===!0&&n.push(u)}return n}if(L(e[0])){const n=await e[0].load(),r=E.create(e[1],n.getFieldsIndex()),l=r.getVariables();if(l.length>0){const u=[];for(let t=0;t<l.length;t++){const s={name:l[t]};u.push(await i.evaluateIdentifier(a,s))}const o={};for(let t=0;t<l.length;t++)o[l[t]]=u[t];return r.parameters=o,new ce({parentfeatureset:e[0],whereclause:r})}return new ce({parentfeatureset:e[0],whereclause:r})}throw new Error("Filter cannot accept this parameter type")})},i.signatures.push({name:"filter",min:"2",max:"2"}),i.functions.orderby=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,2,2),L(e[0])){const n=new Ee(e[1]);return new Ie({parentfeatureset:e[0],orderbyclause:n})}throw new Error("Order cannot accept this parameter type")})},i.signatures.push({name:"orderby",min:"2",max:"2"}),i.functions.top=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,2,2),L(e[0]))return new Fe({parentfeatureset:e[0],topnum:e[1]});if(b(e[0]))return k(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,k(e[1]));if(M(e[0]))return k(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,k(e[1]));throw new Error("Top cannot accept this parameter type")})},i.signatures.push({name:"top",min:"2",max:"2"}),i.functions.first=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,1,1),L(e[0])){const n=await e[0].first(m.abortSignal);if(n!==null){const r=ge.createFromGraphicLikeObject(n.geometry,n.attributes,e[0]);return r._underlyingGraphic=n,r}return n}return b(e[0])?e[0].length===0?null:e[0][0]:M(e[0])?e[0].length()===0?null:e[0].get(0):null})},i.signatures.push({name:"first",min:"1",max:"1"}),i.functions.attachments=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,1,2);const n={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof x){if(e[1].hasField("minsize")&&(n.minsize=k(e[1].field("minsize"))),e[1].hasField("metadata")&&(n.returnMetadata=P(e[1].field("metadata"))),e[1].hasField("maxsize")&&(n.maxsize=k(e[1].field("maxsize"))),e[1].hasField("types")){const r=ve(e[1].field("types"),!1);r.length>0&&(n.types=r)}}else if(e[1]!==null)throw new Error("Invalid Parameter")}if(z(e[0])){let r=e[0]._layer;return r instanceof Z&&(r=X(r,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),r===null?[]:L(r)===!1?[]:(await r.load(),r.queryAttachments(e[0].field(r.objectIdField),n.minsize,n.maxsize,n.types,n.returnMetadata))}if(e[0]===null)return[];throw new Error("Invalid Parameter")})},i.signatures.push({name:"attachments",min:"1",max:"2"}),i.functions.featuresetbyrelationshipname=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,2,4);const n=e[0],r=$(e[1]);let l=N(e[2],null);const u=P(N(e[3],!0));if(l===null&&(l=["*"]),b(l)===!1)throw new Error("Invalid Parameter");if(e[0]===null)return null;if(!z(e[0]))throw new Error("Invalid Parameter");let o=n._layer;if(o instanceof Z&&(o=X(o,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),o===null||L(o)===!1)return null;o=await o.load();const t=o.relationshipMetaData().filter(h=>h.name===r);if(t.length===0)return null;if(t[0].relationshipTableId!==void 0&&t[0].relationshipTableId!==null&&t[0].relationshipTableId>-1)return De(o,t[0],n.field(o.objectIdField),o.spatialReference,l,u,a.lrucache,a.interceptor);let s=o.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+t[0].relatedTableId.toString():s+"/"+t[0].relatedTableId.toString();const f=await $e(s,o.spatialReference,l,u,a.lrucache,a.interceptor);await f.load();let w=f.relationshipMetaData();if(w=w.filter(h=>h.id===t[0].id),n.hasField(t[0].keyField)===!1||n.field(t[0].keyField)===null){const h=await o.getFeatureByObjectId(n.field(o.objectIdField),[t[0].keyField]);if(h){const I=E.create(w[0].keyField+"= @id",f.getFieldsIndex());return I.parameters={id:h.attributes[t[0].keyField]},f.filter(I)}return new Oe({parentfeatureset:f})}const F=E.create(w[0].keyField+"= @id",f.getFieldsIndex());return F.parameters={id:n.field(t[0].keyField)},f.filter(F)})},i.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),i.functions.featuresetbyassociation=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{D(e,2,3);const n=e[0],r=$(N(e[1],"")).toLowerCase(),l=O(e[2])?$(e[2]):null;if(e[0]===null)return null;if(!z(e[0]))throw new Error("Invalid Parameter");let u=n._layer;if(u instanceof Z&&(u=X(u,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),u===null||L(u)===!1)return null;await u.load();const o=u.serviceUrl(),t=await be(o,a.spatialReference);let s=null,f=null,w=!1;if(l!==null&&l!==""&&l!==void 0){for(const y of t.terminals)y.terminalName===l&&(f=y.terminalId);f===null&&(w=!0)}const F=t.associations.getFieldsIndex(),h=F.get("TOGLOBALID").name,I=F.get("FROMGLOBALID").name,J=F.get("TOTERMINALID").name,W=F.get("FROMTERMINALID").name,G=F.get("FROMNETWORKSOURCEID").name,j=F.get("TONETWORKSOURCEID").name,R=F.get("ASSOCIATIONTYPE").name,pe=F.get("ISCONTENTVISIBLE").name,ye=F.get("OBJECTID").name;for(const y of u.fields)if(y.type==="global-id"){s=n.field(y.name);break}let T=null,ne=new C(new B({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",t.associations.getFieldsIndex())),ae=new C(new B({name:"side",alias:"side",type:"string"}),E.create("''",t.associations.getFieldsIndex()));const A="globalid",re="globalId",ie={};for(const y in t.lkp)ie[y]=t.lkp[y].sourceId;const v=new Ne(new B({name:"classname",alias:"classname",type:"string"}),null,ie);let p="";switch(r){case"midspan":{p=`((${h}='${s}') OR ( ${I}='${s}')) AND (${R} IN (5))`,v.codefield=E.create(`CASE WHEN (${h}='${s}') THEN ${G} ELSE ${j} END`,t.associations.getFieldsIndex());const y=V(S.findField(t.associations.fields,I));y.name=A,y.alias=A,T=new C(y,E.create(`CASE WHEN (${I}='${s}') THEN ${h} ELSE ${I} END`,t.associations.getFieldsIndex())),ne=t.unVersion>=4?new Q(S.findField(t.associations.fields,F.get("PERCENTALONG").name)):new C(new B({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",t.associations.getFieldsIndex()));break}case"junctionedge":{p=`((${h}='${s}') OR ( ${I}='${s}')) AND (${R} IN (4,6))`,v.codefield=E.create(`CASE WHEN (${h}='${s}') THEN ${G} ELSE ${j} END`,t.associations.getFieldsIndex());const y=V(S.findField(t.associations.fields,I));y.name=A,y.alias=A,T=new C(y,E.create(`CASE WHEN (${I}='${s}') THEN ${h} ELSE ${I} END`,t.associations.getFieldsIndex())),ae=new C(new B({name:"side",alias:"side",type:"string"}),E.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`,t.associations.getFieldsIndex()));break}case"connected":{let y=`${h}='@T'`,se=`${I}='@T'`;f!==null&&(y+=` AND ${J}=@A`,se+=` AND ${W}=@A`),p="(("+y+") OR ("+se+"))",p=_(p,"@T",s),y=_(y,"@T",s),f!==null&&(y=_(y,"@A",f.toString()),p=_(p,"@A",f.toString())),v.codefield=E.create("CASE WHEN "+y+` THEN ${G} ELSE ${j} END`,t.associations.getFieldsIndex());const q=V(S.findField(t.associations.fields,I));q.name=A,q.alias=A,T=new C(q,E.create("CASE WHEN "+y+` THEN ${I} ELSE ${h} END`,t.associations.getFieldsIndex()));break}case"container":p=`${h}='${s}' AND ${R} = 2`,f!==null&&(p+=` AND ${J} = `+f.toString()),v.codefield=G,p="( "+p+" )",T=new H(S.findField(t.associations.fields,I),A,A);case"content":p=`(${I}='${s}' AND ${R} = 2)`,f!==null&&(p+=` AND ${W} = `+f.toString()),v.codefield=j,p="( "+p+" )",T=new H(S.findField(t.associations.fields,h),A,A);break;case"structure":p=`(${h}='${s}' AND ${R} = 3)`,f!==null&&(p+=` AND ${J} = `+f.toString()),v.codefield=G,p="( "+p+" )",T=new H(S.findField(t.associations.fields,I),A,re);break;case"attached":p=`(${I}='${s}' AND ${R} = 3)`,f!==null&&(p+=` AND ${W} = `+f.toString()),v.codefield=j,p="( "+p+" )",T=new H(S.findField(t.associations.fields,h),A,re);break;default:throw new Error("Invalid Parameter")}return w&&(p="1 <> 1"),new S({parentfeatureset:t.associations,adaptedFields:[new Q(S.findField(t.associations.fields,ye)),new Q(S.findField(t.associations.fields,pe)),T,ae,v,ne],extraFilter:p?E.create(p,t.associations.getFieldsIndex()):null})})},i.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),i.functions.groupby=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(D(e,3,3),!L(e[0]))throw new Error("Illegal Value: GroupBy");const n=await e[0].load(),r=[],l=[];let u=!1,o=[];if(O(e[1]))o.push(e[1]);else if(e[1]instanceof x)o.push(e[1]);else if(b(e[1]))o=e[1];else{if(!M(e[1]))throw new Error("Illegal Value: GroupBy");o=e[1].toArray()}for(const t of o)if(O(t)){const s=E.create($(t),n.getFieldsIndex()),f=ue(s)===!0?$(t):"%%%%FIELDNAME";r.push({name:f,expression:s}),f==="%%%%FIELDNAME"&&(u=!0)}else{if(!(t instanceof x))throw new Error("Illegal Value: GroupBy");{const s=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",f=t.hasField("expression")?t.field("expression"):"";if(s==="%%%%FIELDNAME"&&(u=!0),!s)throw new Error("Illegal Value: GroupBy");r.push({name:s,expression:E.create(f||s,n.getFieldsIndex())})}}if(o=[],O(e[2]))o.push(e[2]);else if(b(e[2]))o=e[2];else if(M(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof x))throw new Error("Illegal Value: GroupBy");o.push(e[2])}for(const t of o){if(!(t instanceof x))throw new Error("Illegal Value: GroupBy");{const s=t.hasField("name")?t.field("name"):"",f=t.hasField("statistic")?t.field("statistic"):"",w=t.hasField("expression")?t.field("expression"):"";if(!s||!f||!w)throw new Error("Illegal Value: GroupBy");l.push({name:s,statistic:f.toLowerCase(),expression:E.create(w,n.getFieldsIndex())})}}if(u){const t={};for(const f of n.fields)t[f.name.toLowerCase()]=1;for(const f of r)f.name!=="%%%%FIELDNAME"&&(t[f.name.toLowerCase()]=1);for(const f of l)f.name!=="%%%%FIELDNAME"&&(t[f.name.toLowerCase()]=1);let s=0;for(const f of r)if(f.name==="%%%%FIELDNAME"){for(;t["field_"+s.toString()]===1;)s++;t["field_"+s.toString()]=1,f.name="FIELD_"+s.toString()}}for(const t of r)await ee(t.expression,i,a);for(const t of l)await ee(t.expression,i,a);return e[0].groupby(r,l)})},i.signatures.push({name:"groupby",min:"3",max:"3"}),i.functions.distinct=function(a,d){return i.standardFunctionAsync(a,d,async(m,g,e)=>{if(L(e[0])){D(e,2,2);const n=await e[0].load(),r=[];let l=[];if(O(e[1]))l.push(e[1]);else if(e[1]instanceof x)l.push(e[1]);else if(b(e[1]))l=e[1];else{if(!M(e[1]))throw new Error("Illegal Value: GroupBy");l=e[1].toArray()}let u=!1;for(const o of l)if(O(o)){const t=E.create($(o),n.getFieldsIndex()),s=ue(t)===!0?$(o):"%%%%FIELDNAME";r.push({name:s,expression:t}),s==="%%%%FIELDNAME"&&(u=!0)}else{if(!(o instanceof x))throw new Error("Illegal Value: GroupBy");{const t=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",s=o.hasField("expression")?o.field("expression"):"";if(t==="%%%%FIELDNAME"&&(u=!0),!t)throw new Error("Illegal Value: GroupBy");r.push({name:t,expression:E.create(s||t,n.getFieldsIndex())})}}if(u){const o={};for(const s of n.fields)o[s.name.toLowerCase()]=1;for(const s of r)s.name!=="%%%%FIELDNAME"&&(o[s.name.toLowerCase()]=1);let t=0;for(const s of r)if(s.name==="%%%%FIELDNAME"){for(;o["field_"+t.toString()]===1;)t++;o["field_"+t.toString()]=1,s.name="FIELD_"+t.toString()}}for(const o of r)await ee(o.expression,i,a);return e[0].groupby(r,[])}return Re("distinct",m,g,e)})})}export{_e as registerFunctions};
