import{mg as L,iH as R,b as _,y as z,r,e as t,d as s,n as c,F as b,hv as S,x as m,G as x,t as y,hw as A,d1 as h,aX as F,s3 as M,hM as P,af as q,s4 as T,mF as C,mH as H,B as N}from"./index.80f43001.js";import{f as w,u as O}from"./LineOfSightAnalysisTarget.47bd3e62.js";import{s as k}from"./elevationInfoUtils.05876777.js";import"./persistable.6fe82c3a.js";let B=0,o=class extends L(R(_(z))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${B++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const i=this.parent;if(r(i))switch(i.type){case"line-of-sight":i.removeAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(r)}};t([s({type:String,constructOnly:!0,clonable:!1})],o.prototype,"id",void 0),t([s({type:String})],o.prototype,"title",void 0),t([s({constructOnly:!0})],o.prototype,"type",void 0),t([s({clonable:!1,value:null})],o.prototype,"parent",null),t([s({readOnly:!0})],o.prototype,"extent",void 0),t([s({readOnly:!0})],o.prototype,"isEditable",null),t([s({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",void 0),t([s({readOnly:!0})],o.prototype,"nonEditableMessage",void 0),o=t([c("esri.analysis.Analysis")],o);const D=o,g=b.ofType(w);let a=class extends D{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own(m(()=>this._computeExtent(),e=>{(y(e)||y(e.pending))&&this._set("extent",r(e)?e.extent:null)},x))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",A(e,this.targets,g))}get spatialReference(){return r(this.observer)&&r(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[h(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return r(e)?F(e.pending):null}_computeExtent(){const e=this.spatialReference;if(y(this.observer)||y(this.observer.position)||y(e))return null;const i=p=>k(p.position,p.elevationInfo)==="absolute-height",l=this.observer.position,v=M(l.x,l.y,l.z,l.x,l.y,l.z);for(const p of this.targets)if(r(p.position)){const d=P(p.position,e);if(r(d.pending))return{pending:d.pending,extent:null};if(r(d.geometry)){const{x:E,y:$,z:j}=d.geometry;q(v,[E,$,j])}}const u=T(v,e);return i(this.observer)&&this.targets.every(i)||(u.zmin=null,u.zmax=null),{pending:null,extent:u}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],a.prototype,"type",void 0),t([s({type:O,json:{read:!0,write:!0}})],a.prototype,"observer",void 0),t([s({cast:S,type:g,nonNullable:!0,json:{read:!0,write:!0}})],a.prototype,"targets",null),t([s({value:null,readOnly:!0})],a.prototype,"extent",void 0),t([s({readOnly:!0})],a.prototype,"spatialReference",null),t([s({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),t([s({readOnly:!0})],a.prototype,"nonEditableMessage",void 0),a=t([c("esri.analysis.LineOfSightAnalysis")],a);const f=a,G=b.ofType(w);let n=class extends C(H(N)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new f,this.opacity=1}initialize(){this.own(m(()=>this.analysis,(e,i)=>{r(i)&&i.parent===this&&(i.parent=null),r(e)&&(e.parent=this)},x))}async load(){return r(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return h(this.analysis,e=>e.observer)}set observer(e){h(this.analysis,i=>i.observer=e)}get targets(){return r(this.analysis)?this.analysis.targets:null}set targets(e){h(this.analysis,i=>i.targets=e)}get fullExtent(){return r(this.analysis)?this.analysis.extent:null}get spatialReference(){return r(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new f)}};t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({type:O,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"observer",null),t([s({type:G,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),t([s({readOnly:!0})],n.prototype,"fullExtent",null),t([s({readOnly:!0})],n.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=t([c("esri.layers.LineOfSightLayer")],n);const Q=n;export{Q as default};
