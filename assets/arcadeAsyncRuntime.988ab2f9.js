import{y as we,O as he,N as de,P as Ee,o as ge,r as me,f as ye,S as Ne,p as ve,u as Ie,I as Te,m as Se,b as p,d as v,e as be,s as Oe,a as ie}from"./arcadeUtils.aa89ab23.js";import{p8 as Y,oV as T,pf as A,bK as Re,pN as S,pO as _,pe as D,pc as u,pr as V,oX as g,p7 as C,pb as x,pA as U,pH as se,oW as R,p2 as w,pQ as L,pP as m,oY as $,p4 as b,pJ as Ae,pd as B,pK as Ue,p5 as Ce,aV as xe,v as Me,bW as Fe,bX as Pe,au as De,pI as Le,po as ke,pm as _e,pL as ee}from"./vendor.e1f4f720.js";import{registerFunctions as Ve}from"./geomasync.21e2d5b8.js";import"./geometryEngineAsync.adc63431.js";function re(r){return r&&typeof r.then=="function"}const j=100;async function X(r,e){const n=[];for(let t=0;t<e.arguments.length;t++)n.push(await c(r,e.arguments[t]));return n}async function N(r,e,n){return e.preparsed===!0?n(r,null,e.arguments):n(r,e,await X(r,e))}async function F(r,e,n){if(e.preparsed===!0){const o=n(r,null,e.arguments);return re(o),o}const t=n(r,e,await X(r,e));return re(t),t}async function c(r,e,n){if(e.breakpoint&&n!==!0)return await e.breakpoint(),c(r,e,!0);switch(e.type){case"VariableDeclarator":return er(r,e);case"VariableDeclaration":return le(r,e,0);case"BlockStatement":return Ke(r,e);case"FunctionDeclaration":return $e(r,e);case"ReturnStatement":return Qe(r,e);case"IfStatement":return Je(r,e);case"ExpressionStatement":return Ze(r,e);case"UpdateExpression":return qe(r,e);case"AssignmentExpression":return Xe(r,e);case"ForStatement":return Ge(r,e);case"ForInStatement":return We(r,e);case"BreakStatement":return S;case"EmptyStatement":return u;case"ContinueStatement":return _;case"TemplateElement":return sr(r,e);case"TemplateLiteral":return cr(r,e);case"Identifier":return Z(r,e);case"MemberExpression":return rr(r,e);case"Literal":return e.value;case"CallExpression":return ir(r,e);case"UnaryExpression":return nr(r,e);case"BinaryExpression":return or(r,e);case"LogicalExpression":return ar(r,e);case"ArrayExpression":return tr(r,e);case"ObjectExpression":return je(r,e);case"Property":return Ye(r,e);default:throw new Error(p(e,"RUNTIME","UNREOGNISED"))}}async function je(r,e){const n=[];for(let a=0;a<e.properties.length;a++)n[a]=await c(r,e.properties[a]);const t={};for(let a=0;a<n.length;a++){const i=n[a];if(V(i.value))throw new Error("Illegal Argument");if(g(i.key)===!1)throw new Error("Illegal Argument");i.value===u?t[i.key.toString()]=null:t[i.key.toString()]=i.value}const o=new v(t);return o.immutable=!1,o}async function Ye(r,e){const n=await c(r,e.value);return e.key.type==="Identifier"?{key:e.key.name,value:n}:{key:await c(r,e.key),value:n}}async function ne(r,e,n){const t=await c(r,e.body);return n.lastAction=t,n.lastAction===S||n.lastAction instanceof m?(n.testResult=!1,n):(e.update!==null&&await c(r,e.update),n)}async function Be(r,e,n){if(e.test!==null){const t=await c(r,e.test);if(r.abortSignal.aborted===!0)throw new Error("Cancelled");if(n.testResult=t,n.testResult===!1)return n;if(n.testResult!==!0)throw new Error(p(e,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));return ne(r,e,n)}return ne(r,e,n)}function k(r,e,n,t,o,a){try{Be(r,e,n).then(()=>{try{n.testResult===!0?++a>j?(a=0,setTimeout(()=>{k(r,e,n,t,o,a)},0)):k(r,e,n,t,o,a):n.lastAction instanceof m?t(n.lastAction):t(u)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}function Ge(r,e){try{return e.init!==null?c(r,e.init).then(()=>new Promise((n,t)=>{k(r,e,{testResult:!0,lastAction:u},o=>{n(o)},o=>{t(o)},0)})):new Promise((n,t)=>{k(r,e,{testResult:!0,lastAction:u},o=>{n(o)},o=>{t(o)},0)})}catch(n){return Promise.reject(n)}}function G(r,e,n,t,o,a,i,s,l,f){try{if(t<=a)return void s(u);o.value=i==="k"?n[a]:a,c(r,e.body).then(h=>{try{h instanceof m?s(h):h===S?s(u):++f>j?(f=0,setTimeout(()=>{G(r,e,n,t,o,a+1,i,s,l,f)},0)):G(r,e,n,t,o,a+1,i,s,l,f)}catch(d){l(d)}},h=>{l(h)})}catch(h){l(h)}}function z(r,e,n,t,o,a,i,s,l){try{if(n.length()<=o)return void i(u);t.value=a==="k"?n.get(o):o,c(r,e.body).then(f=>{f instanceof m?i(f):f===S?i(u):++l>j?(l=0,setTimeout(()=>{z(r,e,n,t,o+1,a,i,s,l)},0)):z(r,e,n,t,o+1,a,i,s,l)},f=>{s(f)})}catch(f){s(f)}}function H(r,e,n,t,o,a){try{if(a===void 0&&(a="i"),n.length===0)return void t.resolve(u);G(r,e,n,n.length,o,0,a,i=>{t.resolve(i)},i=>{t.reject(i)},0)}catch(i){t.reject(i)}}function ze(r,e,n,t,o,a){try{if(a===void 0&&(a="i"),n.length===0)return void t.resolve(u);z(r,e,n,o,0,a,i=>{t.resolve(i)},i=>{t.reject(i)},0)}catch(i){t.reject(i)}}function He(r,e,n,t,o){try{H(r,e,n.keys(),t,o,"k")}catch(a){t.reject(a)}}function W(r,e,n,t,o,a,i,s){try{r.next().then(l=>{try{if(l===null)a(u);else{const f=ie.createFromGraphicLikeObject(l.geometry,l.attributes,t);f._underlyingGraphic=l,o.value=f,c(e,n.body).then(h=>{try{h===S?a(u):h instanceof m?a(h):++s>j?(s=0,setTimeout(()=>{W(r,e,n,t,o,a,i,s)},0)):W(r,e,n,t,o,a,i,s)}catch(d){i(d)}},h=>{i(h)})}}catch(f){i(f)}},l=>{i(l)})}catch(l){i(l)}}async function We(r,e){return new Promise((n,t)=>{c(r,e.right).then(o=>{try{let a=null;a=e.left.type==="VariableDeclaration"?c(r,e.left):Promise.resolve(),a.then(()=>{try{let i="";if(e.left.type==="VariableDeclaration"){const l=e.left.declarations[0].id;l.type==="Identifier"&&(i=l.name)}else e.left.type==="Identifier"&&(i=e.left.name);if(!i)throw new Error(p(e,"RUNTIME","INVALIDVARIABLE"));i=i.toLowerCase();let s=null;if(r.localScope!==null&&r.localScope[i]!==void 0&&(s=r.localScope[i]),s===null&&r.globalScope[i]!==void 0&&(s=r.globalScope[i]),s===null)return void t(new Error(p(e,"RUNTIME","VARIABLENOTDECLARED")));C(o)||g(o)?H(r,e,o,{reject:t,resolve:n},s):x(o)?ze(r,e,o,{reject:t,resolve:n},s):o instanceof v||U(o)?He(r,e,o,{reject:t,resolve:n},s):se(o)?W(o.iterator(r.abortSignal),r,e,o,s,l=>{n(l)},l=>{t(l)},0):H(r,e,[],{reject:t,resolve:n},s)}catch(i){t(i)}},t)}catch(a){t(a)}},t)})}async function qe(r,e){const n=e.argument;if(n.type==="MemberExpression"){const a={t:null},i=await c(r,n.object);let s=null;a.t=i,n.computed===!0?s=await c(r,n.property):n.property.type==="Identifier"&&(s=n.property.name);const l=a.t;let f;if(C(l)){if(!R(s))throw new Error("Invalid Parameter");if(s<0&&(s=l.length+s),s<0||s>=l.length)throw new Error("Assignment outside of array bounds");f=w(l[s]),l[s]=e.operator==="++"?f+1:f-1}else if(l instanceof v){if(g(s)===!1)throw new Error("Dictionary accessor must be a string");if(l.hasField(s)!==!0)throw new Error("Invalid Parameter");f=w(l.field(s)),l.setField(s,e.operator==="++"?f+1:f-1)}else{if(!U(l))throw x(l)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(g(s)===!1)throw new Error("Feature accessor must be a string");if(l.hasField(s)!==!0)throw new Error("Invalid Parameter");f=w(l.field(s)),l.setField(s,e.operator==="++"?f+1:f-1)}return e.prefix===!1?f:e.operator==="++"?f+1:f-1}const t=e.argument.type==="Identifier"?e.argument.name.toLowerCase():"";if(!t)throw new Error("Invalid identifier");let o;if(r.localScope!==null&&r.localScope[t]!==void 0)return o=w(r.localScope[t].value),r.localScope[t]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(r.globalScope[t]!==void 0)return o=w(r.globalScope[t].value),r.globalScope[t]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new Error("Variable not recognised")}function I(r,e,n,t){switch(e){case"=":return r===u?null:r;case"/=":return w(n)/w(r);case"*=":return w(n)*w(r);case"-=":return w(n)-w(r);case"+=":return g(n)||g(r)?b(n)+b(r):w(n)+w(r);case"%=":return w(n)%w(r);default:throw new Error(p(t,"RUNTIME","OPERATORNOTRECOGNISED"))}}async function Xe(r,e){const n=e.left;if(n.type==="MemberExpression"){const o=await c(r,e.right),a=await c(r,n.object);let i=null;if(n.computed===!0)i=await c(r,n.property);else{if(n.property.type!=="Identifier")throw new Error("Expected computed or identifier for assignemnt target");i=n.property.name}if(C(a)){if(!R(i))throw new Error("Invalid Parameter");if(i<0&&(i=a.length+i),i<0||i>a.length)throw new Error("Assignment outside of array bounds");if(i===a.length){if(e.operator!=="=")throw new Error("Invalid Parameter");a[i]=I(o,e.operator,a[i],e)}else a[i]=I(o,e.operator,a[i],e)}else if(a instanceof v){if(g(i)===!1)throw new Error("Dictionary accessor must be a string");if(a.hasField(i)===!0)a.setField(i,I(o,e.operator,a.field(i),e));else{if(e.operator!=="=")throw new Error("Invalid Parameter");a.setField(i,I(o,e.operator,null,e))}}else{if(!U(a))throw x(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(g(i)===!1)throw new Error("Feature accessor must be a string");if(a.hasField(i)===!0)a.setField(i,I(o,e.operator,a.field(i),e));else{if(e.operator!=="=")throw new Error("Invalid Parameter");a.setField(i,I(o,e.operator,null,e))}}return u}const t=n.name.toLowerCase();if(r.localScope!==null&&r.localScope[t]!==void 0){const o=await c(r,e.right);return r.localScope[t]={value:I(o,e.operator,r.localScope[t].value,e),valueset:!0,node:e.right},u}if(r.globalScope[t]!==void 0){const o=await c(r,e.right);return r.globalScope[t]={value:I(o,e.operator,r.globalScope[t].value,e),valueset:!0,node:e.right},u}throw new Error("Cannot assign undeclared variable")}async function Ze(r,e){if(e.expression.type==="AssignmentExpression")return c(r,e.expression);if(e.expression.type==="CallExpression"){const t=await c(r,e.expression);return t===u?u:new L(t)}const n=await c(r,e.expression);return n===u?u:new L(n)}async function Je(r,e){if(e.test.type==="AssignmentExpression"||e.test.type==="UpdateExpression")throw new Error(p(e.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const n=await c(r,e.test);if(n===!0)return c(r,e.consequent);if(n===!1)return e.alternate!==null?c(r,e.alternate):u;throw new Error(p(e.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))}async function Ke(r,e){return ce(r,e,0)}async function ce(r,e,n){if(n>=e.body.length)return u;const t=await c(r,e.body[n]);return t instanceof m||t===S||t===_||n===e.body.length-1?t:ce(r,e,n+1)}async function Qe(r,e){if(e.argument===null)return new m(u);const n=await c(r,e.argument);return new m(n)}async function $e(r,e){const n=e.id.name.toLowerCase();return r.globalScope[n]={valueset:!0,node:null,value:new D(e,r)},u}async function le(r,e,n){return n>=e.declarations.length?u:(await c(r,e.declarations[n]),n===e.declarations.length-1||await le(r,e,n+1),u)}async function er(r,e){let n=null;if(n=e.init===null?null:await c(r,e.init),r.localScope!==null){if(n===u&&(n=null),e.id.type!=="Identifier")throw new Error("Can only assign a regular variable");const o=e.id.name.toLowerCase();return r.localScope[o]={value:n,valueset:!0,node:e.init},u}if(e.id.type!=="Identifier")throw new Error("Can only assign a regular variable");const t=e.id.name.toLowerCase();return n===u&&(n=null),r.globalScope[t]={value:n,valueset:!0,node:e.init},u}let y=0;function te(r,e,n,t){let o;switch(e=e.toLowerCase()){case"hasz":{const a=r.hasZ;return a!==void 0&&a}case"hasm":{const a=r.hasM;return a!==void 0&&a}case"spatialreference":{let a=r.spatialReference._arcadeCacheId;if(a===void 0){let s=!0;Object.freeze&&Object.isFrozen(r.spatialReference)&&(s=!1),s&&(y++,r.spatialReference._arcadeCacheId=y,a=y)}const i=new v({wkt:r.spatialReference.wkt,wkid:r.spatialReference.wkid});return a!==void 0&&(i._arcadeCacheId="SPREF"+a.toString()),i}}switch(r.type){case"extent":switch(e){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const a=r[e];return a!==void 0?a:null}case"type":return"Extent"}break;case"polygon":switch(e){case"rings":return o=r.cache._arcadeCacheId,o===void 0&&(y++,o=y,r.cache._arcadeCacheId=o),new ee(r.rings,r.spatialReference,r.hasZ===!0,r.hasM===!0,o);case"type":return"Polygon"}break;case"point":switch(e){case"x":case"y":case"z":case"m":return r[e]!==void 0?r[e]:null;case"type":return"Point"}break;case"polyline":switch(e){case"paths":return o=r.cache._arcadeCacheId,o===void 0&&(y++,o=y,r.cache._arcadeCacheId=o),new ee(r.paths,r.spatialReference,r.hasZ===!0,r.hasM===!0,o);case"type":return"Polyline"}break;case"multipoint":switch(e){case"points":return o=r.cache._arcadeCacheId,o===void 0&&(y++,o=y,r.cache._arcadeCacheId=o),new _e(r.points,r.spatialReference,r.hasZ===!0,r.hasM===!0,o,1);case"type":return"Multipoint"}}throw new Error(p(t,"RUNTIME","PROPERTYNOTFOUND"))}async function rr(r,e){const n=await c(r,e.object);if(n===null)throw new Error(p(e,"RUNTIME","NOTFOUND"));if(e.computed===!1){if(e.property.type==="Identifier"){if(n instanceof v||U(n))return n.field(e.property.name);if(n instanceof $)return te(n,e.property.name,r,e);throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}let t=await c(r,e.property);if(n instanceof v||U(n)){if(g(t))return n.field(t);throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(n instanceof $){if(g(t))return te(n,t,r,e);throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(C(n)){if(R(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=n.length+t),t>=n.length||t<0)throw new Error(p(e,"RUNTIME","OUTOFBOUNDS"));return n[t]}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(x(n)){if(R(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=n.length()+t),t>=n.length()||t<0)throw new Error(p(e,"RUNTIME","OUTOFBOUNDS"));return n.get(t)}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(g(n)){if(R(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=n.length+t),t>=n.length||t<0)throw new Error(p(e,"RUNTIME","OUTOFBOUNDS"));return n[t]}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}async function nr(r,e){const n=await c(r,e.argument);if(T(n)){if(e.operator==="!")return!n;if(e.operator==="-")return-1*w(n);if(e.operator==="+")return 1*w(n);if(e.operator==="~")return~w(n);throw new Error(p(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if(e.operator==="-")return-1*w(n);if(e.operator==="+")return 1*w(n);if(e.operator==="~")return~w(n);throw new Error(p(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}async function tr(r,e){const n=[];for(let t=0;t<e.elements.length;t++)n.push(await c(r,e.elements[t]));for(let t=0;t<n.length;t++){if(V(n[t]))throw new Error(p(e,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));n[t]===u&&(n[t]=null)}return n}async function or(r,e){const n=[];n[0]=await c(r,e.left),n[1]=await c(r,e.right);const t=n[0],o=n[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return Ue(w(t),w(o),e.operator);case"==":return B(t,o);case"!=":return!B(t,o);case"<":case">":case"<=":case">=":return Ae(t,o,e.operator);case"+":return g(t)||g(o)?b(t)+b(o):w(t)+w(o);case"-":return w(t)-w(o);case"*":return w(t)*w(o);case"/":return w(t)/w(o);case"%":return w(t)%w(o);default:throw new Error(p(e,"RUNTIME","OPERATORNOTRECOGNISED"))}}async function ar(r,e){if(e.left.type==="AssignmentExpression"||e.left.type==="UpdateExpression")throw new Error(p(e.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if(e.right.type==="AssignmentExpression"||e.right.type==="UpdateExpression")throw new Error(p(e.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const n=await c(r,e.left);let t=null;if(!T(n))throw new Error(p(e,"RUNTIME","ONLYBOOLEAN"));switch(e.operator){case"||":if(n===!0)return n;if(t=await c(r,e.right),T(t))return t;throw new Error(p(e,"RUNTIME","ONLYORORAND"));case"&&":if(n===!1)return n;if(t=await c(r,e.right),T(t))return t;throw new Error(p(e,"RUNTIME","ONLYORORAND"));default:throw new Error(p(e,"RUNTIME","ONLYORORAND"))}}async function Z(r,e){const n=e.name.toLowerCase();if(r.localScope!==null&&r.localScope[n]!==void 0){const t=r.localScope[n];if(t.valueset===!0)return t.value;if(t.d!==null)return t.d;t.d=c(r,t.node);const o=await t.d;return t.value=o,t.valueset=!0,o}if(r.globalScope[n]!==void 0){const t=r.globalScope[n];if(t.valueset===!0)return t.value;if(t.d!==null)return t.d;t.d=c(r,t.node);const o=await t.d;return t.value=o,t.valueset=!0,o}throw new Error(p(e,"RUNTIME","VARIABLENOTFOUND"))}async function ir(r,e){if(e.callee.type!=="Identifier")throw new Error(p(e,"RUNTIME","ONLYNODESSUPPORTED"));if(r.localScope!==null&&r.localScope[e.callee.name.toLowerCase()]!==void 0){const n=r.localScope[e.callee.name.toLowerCase()];if(n.value instanceof A)return n.value.fn(r,e);if(n.value instanceof D)return ae(r,e,n.value.definition);throw new Error(p(e,"RUNTIME","NOTAFUNCTION"))}if(r.globalScope[e.callee.name.toLowerCase()]!==void 0){const n=r.globalScope[e.callee.name.toLowerCase()];if(n.value instanceof A)return n.value.fn(r,e);if(n.value instanceof D)return ae(r,e,n.value.definition);throw new Error(p(e,"RUNTIME","NOTAFUNCTION"))}throw new Error(p(e,"RUNTIME","NOTFOUND"))}async function sr(r,e){return e.value?e.value.cooked:""}async function cr(r,e){const n=[];for(let a=0;a<e.expressions.length;a++){const i=await c(r,e.expressions[a]);n[a]=b(i)}let t="",o=0;for(const a of e.quasis)t+=a.value?a.value.cooked:"",a.tail===!1&&(t+=n[o]?n[o]:"",o++);return t}const E={};function oe(r){return r===null?"":C(r)||x(r)?"Array":Ce(r)?"Date":g(r)?"String":T(r)?"Boolean":R(r)?"Number":r instanceof be?"Attachment":r instanceof Oe?"Portal":r instanceof v?"Dictionary":U(r)?"Feature":r instanceof xe?"Point":r instanceof Me?"Polygon":r instanceof Fe?"Polyline":r instanceof Pe?"Multipoint":r instanceof De?"Extent":V(r)?"Function":se(r)?"FeatureSet":Le(r)?"FeatureSetCollection":r===u?"":typeof r=="number"&&isNaN(r)?"Number":"Unrecognised Type"}async function ue(r,e,n,t){const o=await c(r,e.arguments[n]);if(B(o,t))return c(r,e.arguments[n+1]);const a=e.arguments.length-n;return a===1?c(r,e.arguments[n]):a===2?null:a===3?c(r,e.arguments[n+2]):ue(r,e,n+2,t)}async function fe(r,e,n,t){if(t===!0)return c(r,e.arguments[n+1]);if(e.arguments.length-n===3)return c(r,e.arguments[n+2]);const o=await c(r,e.arguments[n+2]);if(T(o)===!1)throw new Error("WHEN needs boolean test conditions");return fe(r,e,n+2,o)}async function q(r,e){const n=r.length,t=Math.floor(n/2);if(n===0)return[];if(n===1)return[r[0]];const o=[q(r.slice(0,t),e),q(r.slice(t,n),e)],a=await Promise.all(o);return P(a[0],a[1],e,[])}async function P(r,e,n,t){const o=t;if(!(r.length>0||e.length>0))return t;if(r.length>0&&e.length>0){let a=await n(r[0],e[0]);return isNaN(a)&&(a=1),a<=0?(o.push(r[0]),r=r.slice(1)):(o.push(e[0]),e=e.slice(1)),P(r,e,n,t)}return r.length>0?(o.push(r[0]),P(r=r.slice(1),e,n,t)):e.length>0?(o.push(e[0]),P(r,e=e.slice(1),n,t)):void 0}function O(r,e){const n=r.length,t=Math.floor(n/2);return e||(e=function(o,a){return o<a?-1:o===a?0:1}),n===0?[]:n===1?[r[0]]:lr(O(r.slice(0,t),e),O(r.slice(t,n),e),e)}function lr(r,e,n){const t=[];for(;r.length>0||e.length>0;)if(r.length>0&&e.length>0){let o=n(r[0],e[0]);isNaN(o)&&(o=1),o<=0?(t.push(r[0]),r=r.slice(1)):(t.push(e[0]),e=e.slice(1))}else r.length>0?(t.push(r[0]),r=r.slice(1)):e.length>0&&(t.push(e[0]),e=e.slice(1));return t}async function pe(r,e,n){const t=r.body;if(n.length!==r.params.length)throw new Error("Invalid Parameter calls to function.");for(let a=0;a<n.length;a++){const i=r.params[a];i.type==="Identifier"&&(e.localScope[i.name.toLowerCase()]={d:null,value:n[a],valueset:!0,node:null})}const o=await c(e,t);if(o instanceof m)return o.value;if(o===S)throw new Error("Cannot Break from a Function");if(o===_)throw new Error("Cannot Continue from a Function");return o instanceof L?o.value:o}function ae(r,e,n){return F(r,e,function(t,o,a){const i={spatialReference:r.spatialReference,services:r.services,console:r.console,lrucache:r.lrucache,interceptor:r.interceptor,localScope:{},abortSignal:r.abortSignal,globalScope:r.globalScope,depthCounter:r.depthCounter+1};if(i.depthCounter>64)throw new Error("Exceeded maximum function depth");return pe(n,i,a)})}function J(r){return function(){const n={abortSignal:r.context.abortSignal,spatialReference:r.context.spatialReference,console:r.context.console,lrucache:r.context.lrucache,interceptor:r.context.interceptor,services:r.context.services,localScope:{},globalScope:r.context.globalScope,depthCounter:r.context.depthCounter+1};if(n.depthCounter>64)throw new Error("Exceeded maximum function depth");return pe(r.definition,n,arguments)}}we(E,N),he(E,N),de(E,N),Ee(E,N),ge(E,N),Ve({functions:E,compiled:!1,signatures:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:N,standardFunctionAsync:F}),E.typeof=function(r,e){return N(r,e,function(n,t,o){Y(o,1,1);const a=oe(o[0]);if(a==="Unrecognised Type")throw new Error("Unrecognised Type");return a})},E.iif=async function(r,e){Y(e.arguments===null?[]:e.arguments,3,3);const n=await c(r,e.arguments[0]);if(T(n)===!1)throw new Error("IF Function must have a boolean test condition");const t=[];return t[0]=await c(r,e.arguments[1]),t[1]=await c(r,e.arguments[2]),n?t[0]:t[1]},E.decode=async function(r,e){if(e.arguments.length<2)throw new Error("Missing Parameters");if(e.arguments.length===2)return c(r,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new Error("Must have a default value result.");return ue(r,e,1,await c(r,e.arguments[0]))},E.when=async function(r,e){if(e.arguments.length<3)throw new Error("Missing Parameters");if(e.arguments.length%2==0)throw new Error("Must have a default value result.");const n=await c(r,e.arguments[0]);if(T(n)===!1)throw new Error("WHEN needs boolean test conditions");return fe(r,e,0,n)},E.sort=function(r,e){return F(r,e,async function(n,t,o){Y(o,1,2);let a=o[0];if(x(a)&&(a=a.toArray()),C(a)===!1)throw new Error("Illegal Argument");if(o.length>1){if(V(o[1])===!1)throw new Error("Illegal Argument");return q(a,J(o[1]))}let i=a;if(i.length===0)return[];const s={};for(let h=0;h<i.length;h++){const d=oe(i[h]);d!==""&&(s[d]=!0)}if(s.Array===!0||s.Dictionary===!0||s.Feature===!0||s.Point===!0||s.Polygon===!0||s.Polyline===!0||s.Multipoint===!0||s.Extent===!0||s.Function===!0)return i.slice(0);let l=0,f="";for(const h in s)l++,f=h;return l>1||f==="String"?i=O(i,function(h,d){if(h==null||h===u)return d==null||d===u?0:1;if(d==null||d===u)return-1;const K=b(h),Q=b(d);return K<Q?-1:K===Q?0:1}):f==="Number"?i=O(i,function(h,d){return h-d}):f==="Boolean"?i=O(i,function(h,d){return h===d?0:d?-1:1}):f==="Date"&&(i=O(i,function(h,d){return d-h})),i})};const ur={fixSpatialReference:ke,parseArguments:X,standardFunction:N,standardFunctionAsync:F,evaluateIdentifier:Z,arcadeCustomFunction:J};for(const r in E)E[r]={value:new A(E[r]),valueset:!0,node:null};const M=function(){};function fr(r,e){const n=new M;r==null&&(r={}),e==null&&(e={});const t=new v({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});t.immutable=!1,n.textformatting={value:t,valueset:!0,node:null};for(const o in e)n[o]={value:new A(e[o]),native:!0,valueset:!0,node:null};for(const o in r)r[o]&&r[o].declaredClass==="esri.Graphic"?n[o]={value:ie.createFromGraphic(r[o]),valueset:!0,node:null}:n[o]={value:r[o],valueset:!0,node:null};return n}function pr(r){console.log(r)}M.prototype=E,M.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},M.prototype.pi={value:Math.PI,valueset:!0,node:null};const mr=ur;function wr(r){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:N,standardFunctionAsync:F,evaluateIdentifier:Z,arcadeCustomFunctionHandler:J};for(let n=0;n<r.length;n++)r[n].registerFunctions(e);for(const n in e.functions)E[n]={value:new A(e.functions[n]),valueset:!0,node:null},M.prototype[n]=E[n];for(let n=0;n<e.signatures.length;n++)me(e.signatures[n],"async")}async function yr(r,e){let n=e.spatialReference;n==null&&(n=new Re({wkid:102100}));const t=fr(e.vars,e.customfunctions),o={spatialReference:n,services:e.services,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:t,console:e.console?e.console:pr,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:1};let a=await c(o,r.body[0].body);if(a instanceof m&&(a=a.value),a instanceof L&&(a=a.value),a===u&&(a=null),a===S)throw new Error("Cannot return BREAK");if(a===_)throw new Error("Cannot return CONTINUE");if(a instanceof A)throw new Error("Cannot return FUNCTION");if(a instanceof D)throw new Error("Cannot return FUNCTION");return a}function Nr(r,e){return ye(r)}function vr(r,e){return Ne(r,e,"full")}function Ir(r,e){return ve(r,e)}function Tr(r,e){return Ie(r,e)}function Sr(r){return Te(r)}wr([Se]);export{yr as executeScript,wr as extend,Nr as extractFieldLiterals,Sr as findFunctionCalls,mr as functionHelper,Tr as referencesFunction,Ir as referencesMember,vr as validateScript};
