(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $v={exports:{}},Kc={},qv={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),qx=Symbol.for("react.context"),Yx=Symbol.for("react.forward_ref"),Kx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),Mp=Symbol.iterator;function Qx(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kv=Object.assign,Jv={};function So(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Yv}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zv(){}Zv.prototype=So.prototype;function nf(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Yv}var rf=nf.prototype=new Zv;rf.constructor=nf;Kv(rf,So.prototype);rf.isPureReactComponent=!0;var Tp=Array.isArray,Qv=Object.prototype.hasOwnProperty,sf={current:null},e_={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qv.call(e,i)&&!e_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oa,type:t,key:s,ref:o,props:r,_owner:sf.current}}function eS(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function tS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tS(""+t.key):e.toString(36)}function Wl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case Gx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wu(o,0):i,Tp(r)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),Wl(r,e,n,"",function(c){return c})):r!=null&&(of(r)&&(r=eS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wu(s,a);o+=Wl(s,e,n,l,r)}else if(l=Qx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wu(s,a++),o+=Wl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Wl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function nS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},jl={transition:null},iS={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:jl,ReactCurrentOwner:sf};function n_(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=So;Qe.Fragment=Wx;Qe.Profiler=Xx;Qe.PureComponent=nf;Qe.StrictMode=jx;Qe.Suspense=Kx;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;Qe.act=n_;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Kv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qv.call(e,l)&&!e_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$x,_context:t},t.Consumer=t};Qe.createElement=t_;Qe.createFactory=function(t){var e=t_.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:Yx,render:t}};Qe.isValidElement=of;Qe.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:nS}};Qe.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};Qe.unstable_act=n_;Qe.useCallback=function(t,e){return sn.current.useCallback(t,e)};Qe.useContext=function(t){return sn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return sn.current.useEffect(t,e)};Qe.useId=function(){return sn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return sn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Qe.useRef=function(t){return sn.current.useRef(t)};Qe.useState=function(t){return sn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return sn.current.useTransition()};Qe.version="18.3.1";qv.exports=Qe;var ye=qv.exports;const rS=Vx(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=ye,oS=Symbol.for("react.element"),aS=Symbol.for("react.fragment"),lS=Object.prototype.hasOwnProperty,cS=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)lS.call(e,i)&&!uS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oS,type:t,key:s,ref:o,props:r,_owner:cS.current}}Kc.Fragment=aS;Kc.jsx=i_;Kc.jsxs=i_;$v.exports=Kc;var I=$v.exports,Vd={},r_={exports:{}},Mn={},s_={exports:{}},o_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var q=L.length;L.push(W);e:for(;0<q;){var he=q-1>>>1,pe=L[he];if(0<r(pe,W))L[he]=W,L[q]=pe,q=he;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],q=L.pop();if(q!==W){L[0]=q;e:for(var he=0,pe=L.length,se=pe>>>1;he<se;){var k=2*(he+1)-1,U=L[k],R=k+1,b=L[R];if(0>r(U,q))R<pe&&0>r(b,U)?(L[he]=b,L[R]=q,he=R):(L[he]=U,L[k]=q,he=k);else if(R<pe&&0>r(b,q))L[he]=b,L[R]=q,he=R;else break e}}return W}function r(L,W){var q=L.sortIndex-W.sortIndex;return q!==0?q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,y=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=L)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function S(L){if(x=!1,p(L),!y)if(n(l)!==null)y=!0,ee(C);else{var W=n(c);W!==null&&ne(S,W.startTime-L)}}function C(L,W){y=!1,x&&(x=!1,u(z),z=-1),g=!0;var q=f;try{for(p(W),h=n(l);h!==null&&(!(h.expirationTime>W)||L&&!Q());){var he=h.callback;if(typeof he=="function"){h.callback=null,f=h.priorityLevel;var pe=he(h.expirationTime<=W);W=t.unstable_now(),typeof pe=="function"?h.callback=pe:h===n(l)&&i(l),p(W)}else i(l);h=n(l)}if(h!==null)var se=!0;else{var k=n(c);k!==null&&ne(S,k.startTime-W),se=!1}return se}finally{h=null,f=q,g=!1}}var w=!1,T=null,z=-1,M=5,A=-1;function Q(){return!(t.unstable_now()-A<M)}function X(){if(T!==null){var L=t.unstable_now();A=L;var W=!0;try{W=T(!0,L)}finally{W?de():(w=!1,T=null)}}else w=!1}var de;if(typeof _=="function")de=function(){_(X)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=X,de=function(){J.postMessage(null)}}else de=function(){m(X,0)};function ee(L){T=L,w||(w=!0,de())}function ne(L,W){z=m(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,ee(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return L()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=f;f=L;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(L,W,q){var he=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?he+q:he):q=he,L){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=q+pe,L={id:d++,callback:W,priorityLevel:L,startTime:q,expirationTime:pe,sortIndex:-1},q>he?(L.sortIndex=q,e(c,L),n(l)===null&&L===n(c)&&(x?(u(z),z=-1):x=!0,ne(S,q-he))):(L.sortIndex=pe,e(l,L),y||g||(y=!0,ee(C))),L},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(L){var W=f;return function(){var q=f;f=W;try{return L.apply(this,arguments)}finally{f=q}}}})(o_);s_.exports=o_;var dS=s_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hS=ye,En=dS;function Ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a_=new Set,da={};function ls(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(da[t]=e,t=0;t<e.length;t++)a_.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,fS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},bp={};function pS(t){return Gd.call(bp,t)?!0:Gd.call(Ap,t)?!1:fS.test(t)?bp[t]=!0:(Ap[t]=!0,!1)}function mS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gS(t,e,n,i){if(e===null||typeof e>"u"||mS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,lf);Ht[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,lf);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,lf);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gS(e,n,r,i)&&(n=null),i||r===null?pS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=hS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),u_=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Au;function jo(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var bu=!1;function Cu(t,e){if(!t||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function vS(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=Cu(t.type,!1),t;case 11:return t=Cu(t.type.render,!1),t;case 1:return t=Cu(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ns:return"Portal";case Wd:return"Profiler";case uf:return"StrictMode";case jd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c_:return(t.displayName||"Context")+".Consumer";case l_:return(t._context.displayName||"Context")+".Provider";case df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function _S(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yS(t){var e=d_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=yS(t))}function h_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=d_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f_(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function Yd(t,e){f_(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kd(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kd(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ee(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ee(92));if(Xo(n)){if(1<n.length)throw Error(Ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function p_(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,g_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xS=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){xS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function v_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function __(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=v_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var SS=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(SS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ee(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,Ks=null,Js=null;function Np(t){if(t=Ba(t)){if(typeof nh!="function")throw Error(Ee(280));var e=t.stateNode;e&&(e=tu(e),nh(t.stateNode,t.type,e))}}function y_(t){Ks?Js?Js.push(t):Js=[t]:Ks=t}function x_(){if(Ks){var t=Ks,e=Js;if(Js=Ks=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function S_(t,e){return t(e)}function E_(){}var Ru=!1;function M_(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return S_(t,e,n)}finally{Ru=!1,(Ks!==null||Js!==null)&&(E_(),x_())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=tu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ee(231,e,typeof n));return n}var ih=!1;if(Ii)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{ih=!1}function ES(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ko=!1,uc=null,dc=!1,rh=null,MS={onError:function(t){Ko=!0,uc=t}};function TS(t,e,n,i,r,s,o,a,l){Ko=!1,uc=null,ES.apply(MS,arguments)}function wS(t,e,n,i,r,s,o,a,l){if(TS.apply(this,arguments),Ko){if(Ko){var c=uc;Ko=!1,uc=null}else throw Error(Ee(198));dc||(dc=!0,rh=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(cs(t)!==t)throw Error(Ee(188))}function AS(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(Ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Dp(r),t;if(s===i)return Dp(r),e;s=s.sibling}throw Error(Ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ee(189))}}if(n.alternate!==i)throw Error(Ee(190))}if(n.tag!==3)throw Error(Ee(188));return n.stateNode.current===n?t:e}function w_(t){return t=AS(t),t!==null?A_(t):null}function A_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A_(t);if(e!==null)return e;t=t.sibling}return null}var b_=En.unstable_scheduleCallback,Up=En.unstable_cancelCallback,bS=En.unstable_shouldYield,CS=En.unstable_requestPaint,Mt=En.unstable_now,RS=En.unstable_getCurrentPriorityLevel,pf=En.unstable_ImmediatePriority,C_=En.unstable_UserBlockingPriority,hc=En.unstable_NormalPriority,PS=En.unstable_LowPriority,R_=En.unstable_IdlePriority,Jc=null,ii=null;function IS(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Jc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:DS,LS=Math.log,NS=Math.LN2;function DS(t){return t>>>=0,t===0?32:31-(LS(t)/NS|0)|0}var nl=64,il=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$o(a):(s&=o,s!==0&&(i=$o(s)))}else o=n&~r,o!==0?i=$o(o):s!==0&&(i=$o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function US(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=US(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P_(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function Pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function kS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function I_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var L_,gf,N_,D_,U_,oh=!1,rl=[],ar=null,lr=null,cr=null,pa=new Map,ma=new Map,Zi=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function No(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function BS(t,e,n,i,r){switch(e){case"focusin":return ar=No(ar,t,e,n,i,r),!0;case"dragenter":return lr=No(lr,t,e,n,i,r),!0;case"mouseover":return cr=No(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,No(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,No(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function O_(t){var e=Vr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=T_(n),e!==null){t.blockedOn=e,U_(t.priority,function(){N_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);th=i,n.target.dispatchEvent(i),th=null}else return e=Ba(n),e!==null&&gf(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){Xl(t)&&n.delete(e)}function zS(){oh=!1,ar!==null&&Xl(ar)&&(ar=null),lr!==null&&Xl(lr)&&(lr=null),cr!==null&&Xl(cr)&&(cr=null),pa.forEach(kp),ma.forEach(kp)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,zS)))}function ga(t){function e(r){return Do(r,t)}if(0<rl.length){Do(rl[0],t);for(var n=1;n<rl.length;n++){var i=rl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&Do(ar,t),lr!==null&&Do(lr,t),cr!==null&&Do(cr,t),pa.forEach(e),ma.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)O_(n),n.blockedOn===null&&Zi.shift()}var Zs=Bi.ReactCurrentBatchConfig,pc=!0;function HS(t,e,n,i){var r=it,s=Zs.transition;Zs.transition=null;try{it=1,vf(t,e,n,i)}finally{it=r,Zs.transition=s}}function VS(t,e,n,i){var r=it,s=Zs.transition;Zs.transition=null;try{it=4,vf(t,e,n,i)}finally{it=r,Zs.transition=s}}function vf(t,e,n,i){if(pc){var r=ah(t,e,n,i);if(r===null)zu(t,e,i,mc,n),Op(t,i);else if(BS(r,t,e,n,i))i.stopPropagation();else if(Op(t,i),e&4&&-1<FS.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&L_(s),s=ah(t,e,n,i),s===null&&zu(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(t,e,i,null,n)}}var mc=null;function ah(t,e,n,i){if(mc=null,t=ff(i),t=Vr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function k_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RS()){case pf:return 1;case C_:return 4;case hc:case PS:return 16;case R_:return 536870912;default:return 16}default:return 16}}var ir=null,_f=null,$l=null;function F_(){if($l)return $l;var t,e=_f,n=e.length,i,r="value"in ir?ir.value:ir.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $l=r.slice(t,1<i?1-i:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function Fp(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:Fp,this.isPropagationStopped=Fp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=Tn(Eo),Fa=_t({},Eo,{view:0,detail:0}),GS=Tn(Fa),Iu,Lu,Uo,Zc=_t({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(Iu=t.screenX-Uo.screenX,Lu=t.screenY-Uo.screenY):Lu=Iu=0,Uo=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Bp=Tn(Zc),WS=_t({},Zc,{dataTransfer:0}),jS=Tn(WS),XS=_t({},Fa,{relatedTarget:0}),Nu=Tn(XS),$S=_t({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=Tn($S),YS=_t({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KS=Tn(YS),JS=_t({},Eo,{data:0}),zp=Tn(JS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eE[t])?!!e[t]:!1}function xf(){return tE}var nE=_t({},Fa,{key:function(t){if(t.key){var e=ZS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iE=Tn(nE),rE=_t({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Tn(rE),sE=_t({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),oE=Tn(sE),aE=_t({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lE=Tn(aE),cE=_t({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uE=Tn(cE),dE=[9,13,27,32],Sf=Ii&&"CompositionEvent"in window,Jo=null;Ii&&"documentMode"in document&&(Jo=document.documentMode);var hE=Ii&&"TextEvent"in window&&!Jo,B_=Ii&&(!Sf||Jo&&8<Jo&&11>=Jo),Vp=" ",Gp=!1;function z_(t,e){switch(t){case"keyup":return dE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function fE(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(Gp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Gp?null:t;default:return null}}function pE(t,e){if(Us)return t==="compositionend"||!Sf&&z_(t,e)?(t=F_(),$l=_f=ir=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B_&&e.locale!=="ko"?null:e.data;default:return null}}var mE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mE[t.type]:e==="textarea"}function V_(t,e,n,i){y_(i),e=gc(e,"onChange"),0<e.length&&(n=new yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,va=null;function gE(t){Q_(t,0)}function Qc(t){var e=Fs(t);if(h_(e))return t}function vE(t,e){if(t==="change")return e}var G_=!1;if(Ii){var Du;if(Ii){var Uu="oninput"in document;if(!Uu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Uu=typeof jp.oninput=="function"}Du=Uu}else Du=!1;G_=Du&&(!document.documentMode||9<document.documentMode)}function Xp(){Zo&&(Zo.detachEvent("onpropertychange",W_),va=Zo=null)}function W_(t){if(t.propertyName==="value"&&Qc(va)){var e=[];V_(e,va,t,ff(t)),M_(gE,e)}}function _E(t,e,n){t==="focusin"?(Xp(),Zo=e,va=n,Zo.attachEvent("onpropertychange",W_)):t==="focusout"&&Xp()}function yE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(va)}function xE(t,e){if(t==="click")return Qc(e)}function SE(t,e){if(t==="input"||t==="change")return Qc(e)}function EE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:EE;function _a(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gd.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=$p(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$p(n)}}function j_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X_(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ME(t){var e=X_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&j_(n.ownerDocument.documentElement,n)){if(i!==null&&Ef(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qp(n,s);var o=qp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TE=Ii&&"documentMode"in document&&11>=document.documentMode,Os=null,lh=null,Qo=null,ch=!1;function Yp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Os==null||Os!==cc(i)||(i=Os,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&_a(Qo,i)||(Qo=i,i=gc(lh,"onSelect"),0<i.length&&(e=new yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Ou={},$_={};Ii&&($_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function eu(t){if(Ou[t])return Ou[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $_)return Ou[t]=e[n];return t}var q_=eu("animationend"),Y_=eu("animationiteration"),K_=eu("animationstart"),J_=eu("transitionend"),Z_=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){Z_.set(t,e),ls(e,[t])}for(var ku=0;ku<Kp.length;ku++){var Fu=Kp[ku],wE=Fu.toLowerCase(),AE=Fu[0].toUpperCase()+Fu.slice(1);Tr(wE,"on"+AE)}Tr(q_,"onAnimationEnd");Tr(Y_,"onAnimationIteration");Tr(K_,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(J_,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bE=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wS(i,e,void 0,t),t.currentTarget=null}function Q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}}}if(dc)throw t=rh,dc=!1,rh=null,t}function at(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var i=t+"__bubble";n.has(i)||(e0(e,t,2,!1),n.add(i))}function Bu(t,e,n){var i=0;e&&(i|=4),e0(n,t,i,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[al]){t[al]=!0,a_.forEach(function(n){n!=="selectionchange"&&(bE.has(n)||Bu(n,!1,t),Bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Bu("selectionchange",!1,e))}}function e0(t,e,n,i){switch(k_(e)){case 1:var r=HS;break;case 4:r=VS;break;default:r=vf}n=r.bind(null,e,n,t),r=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}M_(function(){var c=s,d=ff(n),h=[];e:{var f=Z_.get(t);if(f!==void 0){var g=yf,y=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":g=iE;break;case"focusin":y="focus",g=Nu;break;case"focusout":y="blur",g=Nu;break;case"beforeblur":case"afterblur":g=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=oE;break;case q_:case Y_:case K_:g=qS;break;case J_:g=lE;break;case"scroll":g=GS;break;case"wheel":g=uE;break;case"copy":case"cut":case"paste":g=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hp}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,p;_!==null;){p=_;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,u!==null&&(S=fa(_,u),S!=null&&x.push(xa(_,S,p)))),m)break;_=_.return}0<x.length&&(f=new g(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==th&&(y=n.relatedTarget||n.fromElement)&&(Vr(y)||y[Li]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Vr(y):null,y!==null&&(m=cs(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=Bp,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hp,S="onPointerLeave",u="onPointerEnter",_="pointer"),m=g==null?f:Fs(g),p=y==null?f:Fs(y),f=new x(S,_+"leave",g,n,d),f.target=m,f.relatedTarget=p,S=null,Vr(d)===c&&(x=new x(u,_+"enter",y,n,d),x.target=p,x.relatedTarget=m,S=x),m=S,g&&y)t:{for(x=g,u=y,_=0,p=x;p;p=hs(p))_++;for(p=0,S=u;S;S=hs(S))p++;for(;0<_-p;)x=hs(x),_--;for(;0<p-_;)u=hs(u),p--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=hs(x),u=hs(u)}x=null}else x=null;g!==null&&Zp(h,f,g,x,!1),y!==null&&m!==null&&Zp(h,m,y,x,!0)}}e:{if(f=c?Fs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=vE;else if(Wp(f))if(G_)C=SE;else{C=yE;var w=_E}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=xE);if(C&&(C=C(t,c))){V_(h,C,n,d);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Kd(f,"number",f.value)}switch(w=c?Fs(c):window,t){case"focusin":(Wp(w)||w.contentEditable==="true")&&(Os=w,lh=c,Qo=null);break;case"focusout":Qo=lh=Os=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,Yp(h,n,d);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Yp(h,n,d)}var T;if(Sf)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Us?z_(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(B_&&n.locale!=="ko"&&(Us||z!=="onCompositionStart"?z==="onCompositionEnd"&&Us&&(T=F_()):(ir=d,_f="value"in ir?ir.value:ir.textContent,Us=!0)),w=gc(c,z),0<w.length&&(z=new zp(z,t,null,n,d),h.push({event:z,listeners:w}),T?z.data=T:(T=H_(n),T!==null&&(z.data=T)))),(T=hE?fE(t,n):pE(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(d=new zp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}Q_(h,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(xa(t,s,r)),s=fa(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=fa(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=fa(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(CE,`
`).replace(RE,"")}function ll(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(Ee(425))}function vc(){}var uh=null,dh=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,PE=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,IE=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(LE)}:fh;function LE(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),ni="__reactFiber$"+Mo,Sa="__reactProps$"+Mo,Li="__reactContainer$"+Mo,ph="__reactEvents$"+Mo,NE="__reactListeners$"+Mo,DE="__reactHandles$"+Mo;function Vr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[ni])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[ni]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ee(33))}function tu(t){return t[Sa]||null}var mh=[],Bs=-1;function wr(t){return{current:t}}function ct(t){0>Bs||(t.current=mh[Bs],mh[Bs]=null,Bs--)}function ot(t,e){Bs++,mh[Bs]=t.current,t.current=e}var Er={},Kt=wr(Er),hn=wr(!1),Zr=Er;function lo(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function _c(){ct(hn),ct(Kt)}function nm(t,e,n){if(Kt.current!==Er)throw Error(Ee(168));ot(Kt,e),ot(hn,n)}function t0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ee(108,_S(t)||"Unknown",r));return _t({},n,i)}function yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Zr=Kt.current,ot(Kt,t),ot(hn,hn.current),!0}function im(t,e,n){var i=t.stateNode;if(!i)throw Error(Ee(169));n?(t=t0(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,ct(hn),ct(Kt),ot(Kt,t)):ct(hn),ot(hn,n)}var Si=null,nu=!1,Vu=!1;function n0(t){Si===null?Si=[t]:Si.push(t)}function UE(t){nu=!0,n0(t)}function Ar(){if(!Vu&&Si!==null){Vu=!0;var t=0,e=it;try{var n=Si;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,nu=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),b_(pf,Ar),r}finally{it=e,Vu=!1}}return null}var zs=[],Hs=0,xc=null,Sc=0,bn=[],Cn=0,Qr=null,Mi=1,Ti="";function Or(t,e){zs[Hs++]=Sc,zs[Hs++]=xc,xc=t,Sc=e}function i0(t,e,n){bn[Cn++]=Mi,bn[Cn++]=Ti,bn[Cn++]=Qr,Qr=t;var i=Mi;t=Ti;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-qn(e)+r|n<<r|i,Ti=s+t}else Mi=1<<s|n<<r|i,Ti=t}function Mf(t){t.return!==null&&(Or(t,1),i0(t,1,0))}function Tf(t){for(;t===xc;)xc=zs[--Hs],zs[Hs]=null,Sc=zs[--Hs],zs[Hs]=null;for(;t===Qr;)Qr=bn[--Cn],bn[Cn]=null,Ti=bn[--Cn],bn[Cn]=null,Mi=bn[--Cn],bn[Cn]=null}var Sn=null,xn=null,dt=!1,Gn=null;function r0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Mi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(dt){var e=xn;if(e){var n=e;if(!rm(t,e)){if(gh(t))throw Error(Ee(418));e=ur(n.nextSibling);var i=Sn;e&&rm(t,e)?r0(i,n):(t.flags=t.flags&-4097|2,dt=!1,Sn=t)}}else{if(gh(t))throw Error(Ee(418));t.flags=t.flags&-4097|2,dt=!1,Sn=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function cl(t){if(t!==Sn)return!1;if(!dt)return sm(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=xn)){if(gh(t))throw s0(),Error(Ee(418));for(;e;)r0(t,e),e=ur(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?ur(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=xn;t;)t=ur(t.nextSibling)}function co(){xn=Sn=null,dt=!1}function wf(t){Gn===null?Gn=[t]:Gn.push(t)}var OE=Bi.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ee(309));var i=n.stateNode}if(!i)throw Error(Ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ee(284));if(!n._owner)throw Error(Ee(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(Ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function o0(t){function e(u,_){if(t){var p=u.deletions;p===null?(u.deletions=[_],u.flags|=16):p.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=pr(u,_),u.index=0,u.sibling=null,u}function s(u,_,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<_?(u.flags|=2,_):p):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,p,S){return _===null||_.tag!==6?(_=Yu(p,u.mode,S),_.return=u,_):(_=r(_,p),_.return=u,_)}function l(u,_,p,S){var C=p.type;return C===Ds?d(u,_,p.props.children,S,p.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yi&&om(C)===_.type)?(S=r(_,p.props),S.ref=Oo(u,_,p),S.return=u,S):(S=tc(p.type,p.key,p.props,null,u.mode,S),S.ref=Oo(u,_,p),S.return=u,S)}function c(u,_,p,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=Ku(p,u.mode,S),_.return=u,_):(_=r(_,p.children||[]),_.return=u,_)}function d(u,_,p,S,C){return _===null||_.tag!==7?(_=$r(p,u.mode,S,C),_.return=u,_):(_=r(_,p),_.return=u,_)}function h(u,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yu(""+_,u.mode,p),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qa:return p=tc(_.type,_.key,_.props,null,u.mode,p),p.ref=Oo(u,null,_),p.return=u,p;case Ns:return _=Ku(_,u.mode,p),_.return=u,_;case Yi:var S=_._init;return h(u,S(_._payload),p)}if(Xo(_)||Io(_))return _=$r(_,u.mode,p,null),_.return=u,_;ul(u,_)}return null}function f(u,_,p,S){var C=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(u,_,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qa:return p.key===C?l(u,_,p,S):null;case Ns:return p.key===C?c(u,_,p,S):null;case Yi:return C=p._init,f(u,_,C(p._payload),S)}if(Xo(p)||Io(p))return C!==null?null:d(u,_,p,S,null);ul(u,p)}return null}function g(u,_,p,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(p)||null,a(_,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qa:return u=u.get(S.key===null?p:S.key)||null,l(_,u,S,C);case Ns:return u=u.get(S.key===null?p:S.key)||null,c(_,u,S,C);case Yi:var w=S._init;return g(u,_,p,w(S._payload),C)}if(Xo(S)||Io(S))return u=u.get(p)||null,d(_,u,S,C,null);ul(_,S)}return null}function y(u,_,p,S){for(var C=null,w=null,T=_,z=_=0,M=null;T!==null&&z<p.length;z++){T.index>z?(M=T,T=null):M=T.sibling;var A=f(u,T,p[z],S);if(A===null){T===null&&(T=M);break}t&&T&&A.alternate===null&&e(u,T),_=s(A,_,z),w===null?C=A:w.sibling=A,w=A,T=M}if(z===p.length)return n(u,T),dt&&Or(u,z),C;if(T===null){for(;z<p.length;z++)T=h(u,p[z],S),T!==null&&(_=s(T,_,z),w===null?C=T:w.sibling=T,w=T);return dt&&Or(u,z),C}for(T=i(u,T);z<p.length;z++)M=g(T,u,z,p[z],S),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?z:M.key),_=s(M,_,z),w===null?C=M:w.sibling=M,w=M);return t&&T.forEach(function(Q){return e(u,Q)}),dt&&Or(u,z),C}function x(u,_,p,S){var C=Io(p);if(typeof C!="function")throw Error(Ee(150));if(p=C.call(p),p==null)throw Error(Ee(151));for(var w=C=null,T=_,z=_=0,M=null,A=p.next();T!==null&&!A.done;z++,A=p.next()){T.index>z?(M=T,T=null):M=T.sibling;var Q=f(u,T,A.value,S);if(Q===null){T===null&&(T=M);break}t&&T&&Q.alternate===null&&e(u,T),_=s(Q,_,z),w===null?C=Q:w.sibling=Q,w=Q,T=M}if(A.done)return n(u,T),dt&&Or(u,z),C;if(T===null){for(;!A.done;z++,A=p.next())A=h(u,A.value,S),A!==null&&(_=s(A,_,z),w===null?C=A:w.sibling=A,w=A);return dt&&Or(u,z),C}for(T=i(u,T);!A.done;z++,A=p.next())A=g(T,u,z,A.value,S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?z:A.key),_=s(A,_,z),w===null?C=A:w.sibling=A,w=A);return t&&T.forEach(function(X){return e(u,X)}),dt&&Or(u,z),C}function m(u,_,p,S){if(typeof p=="object"&&p!==null&&p.type===Ds&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qa:e:{for(var C=p.key,w=_;w!==null;){if(w.key===C){if(C=p.type,C===Ds){if(w.tag===7){n(u,w.sibling),_=r(w,p.props.children),_.return=u,u=_;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yi&&om(C)===w.type){n(u,w.sibling),_=r(w,p.props),_.ref=Oo(u,w,p),_.return=u,u=_;break e}n(u,w);break}else e(u,w);w=w.sibling}p.type===Ds?(_=$r(p.props.children,u.mode,S,p.key),_.return=u,u=_):(S=tc(p.type,p.key,p.props,null,u.mode,S),S.ref=Oo(u,_,p),S.return=u,u=S)}return o(u);case Ns:e:{for(w=p.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(u,_.sibling),_=r(_,p.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Ku(p,u.mode,S),_.return=u,u=_}return o(u);case Yi:return w=p._init,m(u,_,w(p._payload),S)}if(Xo(p))return y(u,_,p,S);if(Io(p))return x(u,_,p,S);ul(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,p),_.return=u,u=_):(n(u,_),_=Yu(p,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return m}var uo=o0(!0),a0=o0(!1),Ec=wr(null),Mc=null,Vs=null,Af=null;function bf(){Af=Vs=Mc=null}function Cf(t){var e=Ec.current;ct(Ec),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Mc=t,Af=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Af!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Mc===null)throw Error(Ee(308));Vs=t,Mc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Gr=null;function Rf(t){Gr===null?Gr=[t]:Gr.push(t)}function l0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}function am(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(f=e,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=_t({},h,f);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=h}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ee(191,r));r.call(i)}}}var za={},ri=wr(za),Ea=wr(za),Ma=wr(za);function Wr(t){if(t===za)throw Error(Ee(174));return t}function If(t,e){switch(ot(Ma,e),ot(Ea,t),ot(ri,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}ct(ri),ot(ri,e)}function ho(){ct(ri),ct(Ea),ct(Ma)}function u0(t){Wr(Ma.current);var e=Wr(ri.current),n=Zd(e,t.type);e!==n&&(ot(Ea,t),ot(ri,n))}function Lf(t){Ea.current===t&&(ct(ri),ct(Ea))}var mt=wr(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function Nf(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var Kl=Bi.ReactCurrentDispatcher,Wu=Bi.ReactCurrentBatchConfig,es=0,vt=null,Ct=null,Dt=null,Ac=!1,ea=!1,Ta=0,kE=0;function Gt(){throw Error(Ee(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Uf(t,e,n,i,r,s){if(es=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?HE:VE,t=n(i,r),ea){s=0;do{if(ea=!1,Ta=0,25<=s)throw Error(Ee(301));s+=1,Dt=Ct=null,e.updateQueue=null,Kl.current=GE,t=n(i,r)}while(ea)}if(Kl.current=bc,e=Ct!==null&&Ct.next!==null,es=0,Dt=Ct=vt=null,Ac=!1,e)throw Error(Ee(300));return t}function Of(){var t=Ta!==0;return Ta=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function On(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?vt.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(Ee(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function wa(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=On(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((es&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=d,ts|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=On(),n=e.queue;if(n===null)throw Error(Ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function d0(){}function h0(t,e){var n=vt,i=On(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,kf(m0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Aa(9,p0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(Ee(349));es&30||f0(n,e,r)}return r}function f0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function p0(t,e,n,i){e.value=n,e.getSnapshot=i,g0(e)&&v0(t)}function m0(t,e,n){return n(function(){g0(e)&&v0(t)})}function g0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function v0(t){var e=Ni(t,1);e!==null&&Yn(e,t,1,-1)}function cm(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=zE.bind(null,vt,t),[e.memoizedState,t]}function Aa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _0(){return On().memoizedState}function Jl(t,e,n,i){var r=ei();vt.flags|=t,r.memoizedState=Aa(1|e,n,void 0,i===void 0?null:i)}function iu(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=Aa(e,n,s,i);return}}vt.flags|=t,r.memoizedState=Aa(1|e,n,s,i)}function um(t,e){return Jl(8390656,8,t,e)}function kf(t,e){return iu(2048,8,t,e)}function y0(t,e){return iu(4,2,t,e)}function x0(t,e){return iu(4,4,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E0(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,S0.bind(null,e,t),n)}function Ff(){}function M0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function w0(t,e,n){return es&21?(Jn(n,e)||(n=P_(),vt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function FE(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{it=n,Wu.transition=i}}function A0(){return On().memoizedState}function BE(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},b0(t))C0(e,n);else if(n=l0(t,e,n,i),n!==null){var r=tn();Yn(n,t,i,r),R0(n,e,i)}}function zE(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(t))C0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=l0(t,e,r,i),n!==null&&(r=tn(),Yn(n,t,i,r),R0(n,e,i))}}function b0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function C0(t,e){ea=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}var bc={readContext:Un,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},HE={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=BE.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:cm,useDebugValue:Ff,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=cm(!1),e=t[0];return t=FE.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ei();if(dt){if(n===void 0)throw Error(Ee(407));n=n()}else{if(n=e(),kt===null)throw Error(Ee(349));es&30||f0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,um(m0.bind(null,i,s,t),[t]),i.flags|=2048,Aa(9,p0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=kt.identifierPrefix;if(dt){var n=Ti,i=Mi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VE={readContext:Un,useCallback:M0,useContext:Un,useEffect:kf,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:x0,useMemo:T0,useReducer:ju,useRef:_0,useState:function(){return ju(wa)},useDebugValue:Ff,useDeferredValue:function(t){var e=On();return w0(e,Ct.memoizedState,t)},useTransition:function(){var t=ju(wa)[0],e=On().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:h0,useId:A0,unstable_isNewReconciler:!1},GE={readContext:Un,useCallback:M0,useContext:Un,useEffect:kf,useImperativeHandle:E0,useInsertionEffect:y0,useLayoutEffect:x0,useMemo:T0,useReducer:Xu,useRef:_0,useState:function(){return Xu(wa)},useDebugValue:Ff,useDeferredValue:function(t){var e=On();return Ct===null?e.memoizedState=t:w0(e,Ct.memoizedState,t)},useTransition:function(){var t=Xu(wa)[0],e=On().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:h0,useId:A0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=fr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(Yn(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=fr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(Yn(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=fr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(Yn(e,t,i,n),Yl(e,t,i))}};function dm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function P0(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Zr:Kt.current,i=e.contextTypes,s=(i=i!=null)?lo(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function xh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Zr:Kt.current,r.context=lo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ru.enqueueReplaceState(r,r.state,null),Tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e){try{var n="",i=e;do n+=vS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WE=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rc||(Rc=!0,Ih=i),Sh(t,e)},n}function L0(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new WE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rM.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var jE=Bi.ReactCurrentOwner,dn=!1;function Qt(t,e,n,i){e.child=t===null?a0(e,null,n,i):uo(e,t.child,n,i)}function gm(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Uf(t,e,n,i,s,r),n=Of(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(dt&&n&&Mf(e),e.flags|=1,Qt(t,e,i,r),e.child)}function vm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N0(t,e,s,i,r)):(t=tc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function N0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return Eh(t,e,n,i,r)}function D0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ws,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Ws,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Ws,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Ws,yn),yn|=i;return Qt(t,e,r,n),e.child}function U0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,i,r){var s=fn(n)?Zr:Kt.current;return s=lo(e,s),Qs(e,r),n=Uf(t,e,n,i,s,r),i=Of(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(dt&&i&&Mf(e),e.flags|=1,Qt(t,e,n,r),e.child)}function _m(t,e,n,i,r){if(fn(n)){var s=!0;yc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Zl(t,e),P0(e,n,i),xh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?Zr:Kt.current,c=lo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&hm(e,o,i,c),Ki=!1;var f=e.memoizedState;o.state=f,Tc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||hn.current||Ki?(typeof d=="function"&&(yh(e,n,d,i),l=e.memoizedState),(a=Ki||dm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,c0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Zr:Kt.current,l=lo(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&hm(e,o,i,l),Ki=!1,f=e.memoizedState,o.state=f,Tc(e,i,o,r);var y=e.memoizedState;a!==h||f!==y||hn.current||Ki?(typeof g=="function"&&(yh(e,n,g,i),y=e.memoizedState),(c=Ki||dm(e,n,c,i,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Mh(t,e,n,i,s,r)}function Mh(t,e,n,i,r,s){U0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&im(e,n,!1),Di(t,e,s);i=e.stateNode,jE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&im(e,n,!0),e.child}function O0(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),If(t,e.containerInfo)}function ym(t,e,n,i,r){return co(),wf(r),e.flags|=256,Qt(t,e,n,i),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(mt,r&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=au(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=Th,t):Bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return XE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Th,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bf(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dl(t,e,n,i){return i!==null&&wf(i),uo(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(Ee(422))),dl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=au({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=Th,s);if(!(e.mode&1))return dl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ee(419)),i=$u(s,i,void 0),dl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),Yn(i,t,r,-1))}return jf(),i=$u(Error(Ee(421))),dl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=ur(r.nextSibling),Sn=e,dt=!0,Gn=null,t!==null&&(bn[Cn++]=Mi,bn[Cn++]=Ti,bn[Cn++]=Qr,Mi=t.id,Ti=t.overflow,Qr=e),e=Bf(e,i.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_h(t.return,e,n)}function qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function F0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ee(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $E(t,e,n){switch(e.tag){case 3:O0(e),co();break;case 5:u0(e);break;case 1:fn(e.type)&&yc(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(ot(mt,mt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ot(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return F0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,D0(t,e,n)}return Di(t,e,n)}var B0,Ah,z0,H0;B0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(ri.current);var s=null;switch(n){case"input":r=qd(t,r),i=qd(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Jd(t,r),i=Jd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}Qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};H0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qE(t,e,n){var i=e.pendingProps;switch(Tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return fn(e.type)&&_c(),Wt(e),null;case 3:return i=e.stateNode,ho(),ct(hn),ct(Kt),Nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Dh(Gn),Gn=null))),Ah(t,e),Wt(e),null;case 5:Lf(e);var r=Wr(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ee(166));return Wt(e),null}if(t=Wr(ri.current),cl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)at(qo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Rp(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Ip(i,s),at("invalid",i)}Qd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(i.textContent,a,t),r=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":el(i),Pp(i,s,!0);break;case"textarea":el(i),Lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Sa]=i,B0(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)at(qo[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Rp(t,i),r=qd(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),at("invalid",t);break;case"textarea":Ip(t,i),r=Jd(t,i),at("invalid",t);break;default:r=i}Qd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?__(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&cf(t,s,l,o))}switch(n){case"input":el(t),Pp(t,i,!1);break;case"textarea":el(t),Lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)H0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ee(166));if(n=Wr(Ma.current),Wr(ri.current),cl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Wt(e),null;case 13:if(ct(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&xn!==null&&e.mode&1&&!(e.flags&128))s0(),co(),e.flags|=98560,s=!1;else if(s=cl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ee(317));s[ni]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Gn!==null&&(Dh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):jf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return ho(),Ah(t,e),t===null&&ya(e.stateNode.containerInfo),Wt(e),null;case 10:return Cf(e.type._context),Wt(e),null;case 17:return fn(e.type)&&_c(),Wt(e),null;case 19:if(ct(mt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ko(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wc(t),o!==null){for(e.flags|=128,ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>po&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Wt(e),null}else 2*Mt()-s.renderingStartTime>po&&n!==1073741824&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,ot(mt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(Ee(156,e.tag))}function YE(t,e){switch(Tf(e),e.tag){case 1:return fn(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),ct(hn),ct(Kt),Nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(ct(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ee(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(mt),null;case 4:return ho(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var hl=!1,$t=!1,KE=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function bh(t,e,n){try{n()}catch(i){St(t,e,i)}}var Sm=!1;function JE(t,e){if(uh=pc,t=X_(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},pc=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){e=ke;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,m=y.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ee(163))}}catch(S){St(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}return y=Sm,Sm=!1,y}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bh(e,n,s)}r=r.next}while(r!==i)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V0(t){var e=t.alternate;e!==null&&(t.alternate=null,V0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Sa],delete e[ph],delete e[NE],delete e[DE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G0(t){return t.tag===5||t.tag===3||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var Ft=null,Vn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)W0(t,e,n),n=n.sibling}function W0(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Jc,n)}catch{}switch(n.tag){case 5:$t||Gs(n,e);case 6:var i=Ft,r=Vn;Ft=null,Vi(t,e,n),Ft=i,Vn=r,Ft!==null&&(Vn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Vn?(t=Ft,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),ga(t)):Hu(Ft,n.stateNode));break;case 4:i=Ft,r=Vn,Ft=n.stateNode.containerInfo,Vn=!0,Vi(t,e,n),Ft=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!$t&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Vi(t,e,n),$t=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KE),e.forEach(function(i){var r=oM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Vn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ft===null)throw Error(Ee(160));W0(s,o,r),Ft=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j0(e,t),e=e.sibling}function j0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Qn(t),i&4){try{ta(3,t,t.return),su(3,t)}catch(x){St(t,t.return,x)}try{ta(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:kn(e,t),Qn(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(kn(e,t),Qn(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ha(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f_(r,s),eh(a,o);var c=eh(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?__(r,h):d==="dangerouslySetInnerHTML"?g_(r,h):d==="children"?ha(r,h):cf(r,d,h,c)}switch(a){case"input":Yd(r,s);break;case"textarea":p_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ys(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(x){St(t,t.return,x)}}break;case 6:if(kn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(Ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(kn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:kn(e,t),Qn(t);break;case 13:kn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vf=Mt())),i&4&&Mm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,kn(e,t),$t=c):kn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ke=t,d=t.child;d!==null;){for(h=ke=d;ke!==null;){switch(f=ke,g=f.child,f.tag){case 0:case 11:case 14:case 15:ta(4,f,f.return);break;case 1:Gs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Gs(f,f.return);break;case 22:if(f.memoizedState!==null){wm(h);continue}}g!==null?(g.return=f,ke=g):wm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=v_("display",o))}catch(x){St(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){St(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Qn(t),i&4&&Mm(t);break;case 21:break;default:kn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G0(n)){var i=n;break e}n=n.return}throw Error(Ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ha(r,""),i.flags&=-33);var s=Em(t);Ph(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Em(t);Rh(t,a,o);break;default:throw Error(Ee(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZE(t,e,n){ke=t,X0(t)}function X0(t,e,n){for(var i=(t.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=hl;var c=$t;if(hl=o,($t=l)&&!c)for(ke=r;ke!==null;)o=ke,l=o.child,o.tag===22&&o.memoizedState!==null?Am(r):l!==null?(l.return=o,ke=l):Am(r);for(;s!==null;)ke=s,X0(s),s=s.sibling;ke=r,hl=a,$t=c}Tm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):Tm(t)}}function Tm(t){for(;ke!==null;){var e=ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ee(163))}$t||e.flags&512&&Ch(e)}catch(f){St(e,e.return,f)}}if(e===t){ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}}function wm(t){for(;ke!==null;){var e=ke;if(e===t){ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ke=n;break}ke=e.return}}function Am(t){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ke=a;break}ke=e.return}}var QE=Math.ceil,Cc=Bi.ReactCurrentDispatcher,zf=Bi.ReactCurrentOwner,Dn=Bi.ReactCurrentBatchConfig,nt=0,kt=null,At=null,zt=0,yn=0,Ws=wr(0),Rt=0,ba=null,ts=0,ou=0,Hf=0,na=null,cn=null,Vf=0,po=1/0,xi=null,Rc=!1,Ih=null,hr=null,fl=!1,rr=null,Pc=0,ia=0,Lh=null,Ql=-1,ec=0;function tn(){return nt&6?Mt():Ql!==-1?Ql:Ql=Mt()}function fr(t){return t.mode&1?nt&2&&zt!==0?zt&-zt:OE.transition!==null?(ec===0&&(ec=P_()),ec):(t=it,t!==0||(t=window.event,t=t===void 0?16:k_(t.type)),t):1}function Yn(t,e,n,i){if(50<ia)throw ia=0,Lh=null,Error(Ee(185));ka(t,n,i),(!(nt&2)||t!==kt)&&(t===kt&&(!(nt&2)&&(ou|=n),Rt===4&&Qi(t,zt)),pn(t,i),n===1&&nt===0&&!(e.mode&1)&&(po=Mt()+500,nu&&Ar()))}function pn(t,e){var n=t.callbackNode;OS(t,e);var i=fc(t,t===kt?zt:0);if(i===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?UE(bm.bind(null,t)):n0(bm.bind(null,t)),IE(function(){!(nt&6)&&Ar()}),n=null;else{switch(I_(i)){case 1:n=pf;break;case 4:n=C_;break;case 16:n=hc;break;case 536870912:n=R_;break;default:n=hc}n=ey(n,$0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $0(t,e){if(Ql=-1,ec=0,nt&6)throw Error(Ee(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=fc(t,t===kt?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ic(t,i);else{e=i;var r=nt;nt|=2;var s=Y0();(kt!==t||zt!==e)&&(xi=null,po=Mt()+500,Xr(t,e));do try{nM();break}catch(a){q0(t,a)}while(!0);bf(),Cc.current=s,nt=r,At!==null?e=0:(kt=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=sh(t),r!==0&&(i=r,e=Nh(t,r))),e===1)throw n=ba,Xr(t,0),Qi(t,i),pn(t,Mt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!eM(r)&&(e=Ic(t,i),e===2&&(s=sh(t),s!==0&&(i=s,e=Nh(t,s))),e===1))throw n=ba,Xr(t,0),Qi(t,i),pn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ee(345));case 2:kr(t,cn,xi);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=Vf+500-Mt(),10<e)){if(fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fh(kr.bind(null,t,cn,xi),e);break}kr(t,cn,xi);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QE(i/1960))-i,10<i){t.timeoutHandle=fh(kr.bind(null,t,cn,xi),i);break}kr(t,cn,xi);break;case 5:kr(t,cn,xi);break;default:throw Error(Ee(329))}}}return pn(t,Mt()),t.callbackNode===n?$0.bind(null,t):null}function Nh(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=cn,cn=n,e!==null&&Dh(e)),t}function Dh(t){cn===null?cn=t:cn.push.apply(cn,t)}function eM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~Hf,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function bm(t){if(nt&6)throw Error(Ee(327));eo();var e=fc(t,0);if(!(e&1))return pn(t,Mt()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var i=sh(t);i!==0&&(e=i,n=Nh(t,i))}if(n===1)throw n=ba,Xr(t,0),Qi(t,e),pn(t,Mt()),n;if(n===6)throw Error(Ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,cn,xi),pn(t,Mt()),null}function Gf(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(po=Mt()+500,nu&&Ar())}}function ns(t){rr!==null&&rr.tag===0&&!(nt&6)&&eo();var e=nt;nt|=1;var n=Dn.transition,i=it;try{if(Dn.transition=null,it=1,t)return t()}finally{it=i,Dn.transition=n,nt=e,!(nt&6)&&Ar()}}function Wf(){yn=Ws.current,ct(Ws)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PE(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Tf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_c();break;case 3:ho(),ct(hn),ct(Kt),Nf();break;case 5:Lf(i);break;case 4:ho();break;case 13:ct(mt);break;case 19:ct(mt);break;case 10:Cf(i.type._context);break;case 22:case 23:Wf()}n=n.return}if(kt=t,At=t=pr(t.current,null),zt=yn=e,Rt=0,ba=null,Hf=ou=ts=0,cn=na=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gr=null}return t}function q0(t,e){do{var n=At;try{if(bf(),Kl.current=bc,Ac){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ac=!1}if(es=0,Dt=Ct=vt=null,ea=!1,Ta=0,zf.current=null,n===null||n.return===null){Rt=1,ba=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=pm(o);if(g!==null){g.flags&=-257,mm(g,o,a,s,e),g.mode&1&&fm(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){fm(s,c,e),jf();break e}l=Error(Ee(426))}}else if(dt&&a.mode&1){var m=pm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mm(m,o,a,s,e),wf(fo(l,a));break e}}s=l=fo(l,a),Rt!==4&&(Rt=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=I0(s,l,e);am(s,u);break e;case 1:a=l;var _=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(hr===null||!hr.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=L0(s,a,e);am(s,S);break e}}s=s.return}while(s!==null)}J0(n)}catch(C){e=C,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function Y0(){var t=Cc.current;return Cc.current=bc,t===null?bc:t}function jf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),kt===null||!(ts&268435455)&&!(ou&268435455)||Qi(kt,zt)}function Ic(t,e){var n=nt;nt|=2;var i=Y0();(kt!==t||zt!==e)&&(xi=null,Xr(t,e));do try{tM();break}catch(r){q0(t,r)}while(!0);if(bf(),nt=n,Cc.current=i,At!==null)throw Error(Ee(261));return kt=null,zt=0,Rt}function tM(){for(;At!==null;)K0(At)}function nM(){for(;At!==null&&!bS();)K0(At)}function K0(t){var e=Q0(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?J0(t):At=e,zf.current=null}function J0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YE(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=qE(n,e,yn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function kr(t,e,n){var i=it,r=Dn.transition;try{Dn.transition=null,it=1,iM(t,e,n,i)}finally{Dn.transition=r,it=i}return null}function iM(t,e,n,i){do eo();while(rr!==null);if(nt&6)throw Error(Ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kS(t,s),t===kt&&(At=kt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,ey(hc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=it;it=1;var a=nt;nt|=4,zf.current=null,JE(t,n),j0(n,t),ME(dh),pc=!!uh,dh=uh=null,t.current=n,ZE(n),CS(),nt=a,it=o,Dn.transition=s}else t.current=n;if(fl&&(fl=!1,rr=t,Pc=r),s=t.pendingLanes,s===0&&(hr=null),IS(n.stateNode),pn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rc)throw Rc=!1,t=Ih,Ih=null,t;return Pc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Lh?ia++:(ia=0,Lh=t):ia=0,Ar(),null}function eo(){if(rr!==null){var t=I_(Pc),e=Dn.transition,n=it;try{if(Dn.transition=null,it=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,Pc=0,nt&6)throw Error(Ee(331));var r=nt;for(nt|=4,ke=t.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ke=c;ke!==null;){var d=ke;switch(d.tag){case 0:case 11:case 15:ta(8,d,s)}var h=d.child;if(h!==null)h.return=d,ke=h;else for(;ke!==null;){d=ke;var f=d.sibling,g=d.return;if(V0(d),d===c){ke=null;break}if(f!==null){f.return=g,ke=f;break}ke=g}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ke=u;break e}ke=s.return}}var _=t.current;for(ke=_;ke!==null;){o=ke;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,ke=p;else e:for(o=_;ke!==null;){if(a=ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:su(9,a)}}catch(C){St(a,a.return,C)}if(a===o){ke=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ke=S;break e}ke=a.return}}if(nt=r,Ar(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Jc,t)}catch{}i=!0}return i}finally{it=n,Dn.transition=e}}return!1}function Cm(t,e,n){e=fo(n,e),e=I0(t,e,1),t=dr(t,e,1),e=tn(),t!==null&&(ka(t,1,e),pn(t,e))}function St(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=fo(n,t),t=L0(e,t,1),e=dr(e,t,1),t=tn(),e!==null&&(ka(e,1,t),pn(e,t));break}}e=e.return}}function rM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>Mt()-Vf?Xr(t,0):Hf|=n),pn(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=tn();t=Ni(t,e),t!==null&&(ka(t,e,n),pn(t,n))}function sM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function oM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ee(314))}i!==null&&i.delete(e),Z0(t,n)}var Q0;Q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,$E(t,e,n);dn=!!(t.flags&131072)}else dn=!1,dt&&e.flags&1048576&&i0(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zl(t,e),t=e.pendingProps;var r=lo(e,Kt.current);Qs(e,n),r=Uf(null,e,i,t,r,n);var s=Of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,yc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=ru,e.stateNode=r,r._reactInternals=e,xh(e,i,t,n),e=Mh(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Mf(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lM(i),t=Hn(i,t),r){case 0:e=Eh(null,e,i,t,n);break e;case 1:e=_m(null,e,i,t,n);break e;case 11:e=gm(null,e,i,t,n);break e;case 14:e=vm(null,e,i,Hn(i.type,t),n);break e}throw Error(Ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Eh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),_m(t,e,i,r,n);case 3:e:{if(O0(e),t===null)throw Error(Ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,c0(t,e),Tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fo(Error(Ee(423)),e),e=ym(t,e,i,n,r);break e}else if(i!==r){r=fo(Error(Ee(424)),e),e=ym(t,e,i,n,r);break e}else for(xn=ur(e.stateNode.containerInfo.firstChild),Sn=e,dt=!0,Gn=null,n=a0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),i===r){e=Di(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return u0(e),t===null&&vh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hh(i,r)?o=null:s!==null&&hh(i,s)&&(e.flags|=32),U0(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return k0(t,e,n);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=uo(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),gm(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Ec,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!hn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_h(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Un(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),vm(t,e,i,r,n);case 15:return N0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Zl(t,e),e.tag=1,fn(i)?(t=!0,yc(e)):t=!1,Qs(e,n),P0(e,i,r),xh(e,i,r,n),Mh(null,e,i,!0,t,n);case 19:return F0(t,e,n);case 22:return D0(t,e,n)}throw Error(Ee(156,e.tag))};function ey(t,e){return b_(t,e)}function aM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new aM(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lM(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===df)return 11;if(t===hf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return $r(n.children,r,s,e);case uf:o=8,r|=8;break;case Wd:return t=Nn(12,n,e,r|2),t.elementType=Wd,t.lanes=s,t;case jd:return t=Nn(13,n,e,r),t.elementType=jd,t.lanes=s,t;case Xd:return t=Nn(19,n,e,r),t.elementType=Xd,t.lanes=s,t;case u_:return au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l_:o=10;break e;case c_:o=9;break e;case df:o=11;break e;case hf:o=14;break e;case Yi:o=16,i=null;break e}throw Error(Ee(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function au(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=u_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pu(0),this.expirationTimes=Pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,i,r,s,o,a,l){return t=new cM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function uM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ty(t){if(!t)return Er;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(Ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ee(171))}if(t.tag===1){var n=t.type;if(fn(n))return t0(t,n,e)}return e}function ny(t,e,n,i,r,s,o,a,l){return t=$f(n,i,!0,t,r,s,o,a,l),t.context=ty(null),n=t.current,i=tn(),r=fr(n),s=Pi(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,ka(t,r,i),pn(t,i),t}function lu(t,e,n,i){var r=e.current,s=tn(),o=fr(r);return n=ty(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,o),t!==null&&(Yn(t,r,o,s),Yl(t,r,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Rm(t,e),(t=t.alternate)&&Rm(t,e)}function dM(){return null}var iy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}cu.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ee(409));lu(t,e,null,null)};cu.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){lu(null,t,null,null)}),e[Li]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=D_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&O_(t)}};function Kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function hM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Lc(o);s.call(c)}}var o=ny(e,i,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=o,t[Li]=o.current,ya(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Lc(l);a.call(c)}}var l=$f(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=l,t[Li]=l.current,ya(t.nodeType===8?t.parentNode:t),ns(function(){lu(e,l,n,i)}),l}function du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lc(o);a.call(l)}}lu(e,o,t,r)}else o=hM(n,e,t,r,i);return Lc(o)}L_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(mf(e,n|1),pn(e,Mt()),!(nt&6)&&(po=Mt()+500,Ar()))}break;case 13:ns(function(){var i=Ni(t,1);if(i!==null){var r=tn();Yn(i,t,1,r)}}),qf(t,1)}};gf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=tn();Yn(e,t,134217728,n)}qf(t,134217728)}};N_=function(t){if(t.tag===13){var e=fr(t),n=Ni(t,e);if(n!==null){var i=tn();Yn(n,t,e,i)}qf(t,e)}};D_=function(){return it};U_=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};nh=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tu(i);if(!r)throw Error(Ee(90));h_(i),Yd(i,r)}}}break;case"textarea":p_(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};S_=Gf;E_=ns;var fM={usingClientEntryPoint:!1,Events:[Ba,Fs,tu,y_,x_,Gf]},Fo={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pM={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w_(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||dM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Jc=pl.inject(pM),ii=pl}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fM;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(e))throw Error(Ee(200));return uM(t,e,null,n)};Mn.createRoot=function(t,e){if(!Kf(t))throw Error(Ee(299));var n=!1,i="",r=iy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,ya(t.nodeType===8?t.parentNode:t),new Yf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ee(188)):(t=Object.keys(t).join(","),Error(Ee(268,t)));return t=w_(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return ns(t)};Mn.hydrate=function(t,e,n){if(!uu(e))throw Error(Ee(200));return du(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Kf(t))throw Error(Ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=iy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ny(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cu(e)};Mn.render=function(t,e,n){if(!uu(e))throw Error(Ee(200));return du(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!uu(t))throw Error(Ee(40));return t._reactRootContainer?(ns(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Mn.unstable_batchedUpdates=Gf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uu(n))throw Error(Ee(200));if(t==null||t._reactInternals===void 0)throw Error(Ee(38));return du(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ry)}catch(t){console.error(t)}}ry(),r_.exports=Mn;var mM=r_.exports,Im=mM;Vd.createRoot=Im.createRoot,Vd.hydrateRoot=Im.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="160",fs={ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gM=0,Lm=1,vM=2,sy=1,_M=2,yi=3,Mr=0,qt=1,In=2,mr=0,to=1,ra=2,Nm=3,Dm=4,yM=5,zr=100,xM=101,SM=102,Um=103,Om=104,EM=200,MM=201,TM=202,wM=203,Uh=204,Oh=205,AM=206,bM=207,CM=208,RM=209,PM=210,IM=211,LM=212,NM=213,DM=214,UM=0,OM=1,kM=2,Nc=3,FM=4,BM=5,zM=6,HM=7,oy=0,VM=1,GM=2,gr=0,WM=1,jM=2,XM=3,$M=4,qM=5,YM=6,ay=300,mo=301,go=302,kh=303,Fh=304,hu=306,Bh=1e3,jn=1001,zh=1002,en=1003,km=1004,Ju=1005,Rn=1006,KM=1007,Ca=1008,vr=1009,JM=1010,ZM=1011,Zf=1012,ly=1013,sr=1014,or=1015,Ra=1016,cy=1017,uy=1018,qr=1020,QM=1021,Xn=1023,eT=1024,tT=1025,Yr=1026,vo=1027,nT=1028,dy=1029,iT=1030,hy=1031,fy=1033,Zu=33776,Qu=33777,ed=33778,td=33779,Fm=35840,Bm=35841,zm=35842,Hm=35843,py=36196,Vm=37492,Gm=37496,Wm=37808,jm=37809,Xm=37810,$m=37811,qm=37812,Ym=37813,Km=37814,Jm=37815,Zm=37816,Qm=37817,eg=37818,tg=37819,ng=37820,ig=37821,nd=36492,rg=36494,sg=36495,rT=36283,og=36284,ag=36285,lg=36286,my=3e3,Kr=3001,sT=3200,oT=3201,gy=0,aT=1,Ln="",Ut="srgb",Ui="srgb-linear",Qf="display-p3",fu="display-p3-linear",Dc="linear",lt="srgb",Uc="rec709",Oc="p3",ms=7680,cg=519,lT=512,cT=513,uT=514,vy=515,dT=516,hT=517,fT=518,pT=519,ug=35044,dg="300 es",Hh=1035,wi=2e3,kc=2001;class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nc=Math.PI/180,Vh=180/Math.PI;function To(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function mT(t,e){return(t%e+e)%e}function id(t,e,n){return(1-n)*t+n*e}function hg(t){return(t&t-1)===0&&t!==0}function Gh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const gT={DEG2RAD:nc};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],y=i[8],x=r[0],m=r[3],u=r[6],_=r[1],p=r[4],S=r[7],C=r[2],w=r[5],T=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*p+l*w,s[6]=o*u+a*S+l*T,s[1]=c*x+d*_+h*C,s[4]=c*m+d*p+h*w,s[7]=c*u+d*S+h*T,s[2]=f*x+g*_+y*C,s[5]=f*m+g*p+y*w,s[8]=f*u+g*S+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,y=n*h+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=g*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(rd.makeScale(e,n)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new $e;function _y(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vT(){const t=Fc("canvas");return t.style.display="block",t}const fg={};function sa(t){t in fg||(fg[t]=!0,console.warn(t))}const pg=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mg=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ml={[Ui]:{transfer:Dc,primaries:Uc,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:lt,primaries:Uc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fu]:{transfer:Dc,primaries:Oc,toReference:t=>t.applyMatrix3(mg),fromReference:t=>t.applyMatrix3(pg)},[Qf]:{transfer:lt,primaries:Oc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(mg),fromReference:t=>t.applyMatrix3(pg).convertLinearToSRGB()}},_T=new Set([Ui,fu]),rt={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_T.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ml[e].toReference,r=ml[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ml[t].primaries},getTransfer:function(t){return t===Ln?Dc:ml[t].transfer}};function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Fc("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yT=0;class xy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=To(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(od(r[o].image)):s.push(od(r[o]))}else s=od(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function od(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xT=0;class mn extends us{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=jn,r=jn,s=Rn,o=Ca,a=Xn,l=vr,c=mn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=To(),this.name="",this.source=new xy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Kr?Ut:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ay)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Kr:my}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kr?Ut:Ln}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ay;mn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],y=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,S=(g+1)/2,C=(u+1)/2,w=(d+f)/4,T=(h+x)/4,z=(y+m)/4;return p>S&&p>C?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=w/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=z/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-y)*(m-y)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-y)/_,this.y=(h-x)/_,this.z=(f-d)/_,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ST extends us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kr?Ut:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends ST{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sy extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ET extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],y=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=y,e[n+3]=x;return}if(h!==x||l!==f||c!==g||d!==y){let m=1-a;const u=l*f+c*g+d*y+h*x,_=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const C=Math.sqrt(p),w=Math.atan2(C,u*_);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*_;if(l=l*m+f*S,c=c*m+g*S,d=d*m+y*S,h=h*m+x*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+d*h+l*g-c*f,e[n+1]=l*y+d*f+c*h-a*g,e[n+2]=c*y+d*g+a*f-l*h,e[n+3]=d*y-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h-f*g*y;break;case"YXZ":this._x=f*d*h+c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h+f*g*y;break;case"ZXY":this._x=f*d*h-c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h-f*g*y;break;case"ZYX":this._x=f*d*h-c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h+f*g*y;break;case"YZX":this._x=f*d*h+c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h-f*g*y;break;case"XZY":this._x=f*d*h-c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new j,gg=new rs;class Ha{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),vl.subVectors(this.max,zo),vs.subVectors(e.a,zo),_s.subVectors(e.b,zo),ys.subVectors(e.c,zo),Gi.subVectors(_s,vs),Wi.subVectors(ys,_s),Ir.subVectors(vs,ys);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Ir.z,Ir.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Ir.z,0,-Ir.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Ir.y,Ir.x,0];return!ld(n,vs,_s,ys,vl)||(n=[1,0,0,0,1,0,0,0,1],!ld(n,vs,_s,ys,vl))?!1:(_l.crossVectors(Gi,Wi),n=[_l.x,_l.y,_l.z],ld(n,vs,_s,ys,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new j,new j,new j,new j,new j,new j,new j,new j],Fn=new j,gl=new Ha,vs=new j,_s=new j,ys=new j,Gi=new j,Wi=new j,Ir=new j,zo=new j,vl=new j,_l=new j,Lr=new j;function ld(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),d=i.dot(Lr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const MT=new Ha,Ho=new j,cd=new j;class ep{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(cd)),this.expandByPoint(Ho.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new j,ud=new j,yl=new j,ji=new j,dd=new j,xl=new j,hd=new j;class Ey{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ud.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(ud);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yl),a=ji.dot(this.direction),l=-ji.dot(yl),c=ji.lengthSq(),d=Math.abs(1-o*o);let h,f,g,y;if(d>0)if(h=o*l-a,f=o*a-l,y=s*d,h>=0)if(f>=-y)if(f<=y){const x=1/d;h*=x,f*=x,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-y?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=y?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ud).addScaledVector(yl,f),g}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){dd.subVectors(n,e),xl.subVectors(i,e),hd.crossVectors(dd,xl);let o=this.direction.dot(hd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(xl.crossVectors(ji,xl));if(l<0)return null;const c=a*this.direction.dot(dd.cross(ji));if(c<0||l+c>o)return null;const d=-a*ji.dot(hd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,y,x,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,y,x,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,y,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=y,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,y=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+y*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,y=c*d,x=c*h;n[0]=f+x*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-y,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,y=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,y=a*d,x=a*h;n[0]=l*d,n[4]=y*c-g,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=y*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+y,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,g=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=g*h-y,n[2]=y*h-g,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TT,e,wT)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Xi.crossVectors(i,vn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Xi.crossVectors(i,vn)),Xi.normalize(),Sl.crossVectors(vn,Xi),r[0]=Xi.x,r[4]=Sl.x,r[8]=vn.x,r[1]=Xi.y,r[5]=Sl.y,r[9]=vn.y,r[2]=Xi.z,r[6]=Sl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],y=i[2],x=i[6],m=i[10],u=i[14],_=i[3],p=i[7],S=i[11],C=i[15],w=r[0],T=r[4],z=r[8],M=r[12],A=r[1],Q=r[5],X=r[9],de=r[13],H=r[2],J=r[6],ee=r[10],ne=r[14],L=r[3],W=r[7],q=r[11],he=r[15];return s[0]=o*w+a*A+l*H+c*L,s[4]=o*T+a*Q+l*J+c*W,s[8]=o*z+a*X+l*ee+c*q,s[12]=o*M+a*de+l*ne+c*he,s[1]=d*w+h*A+f*H+g*L,s[5]=d*T+h*Q+f*J+g*W,s[9]=d*z+h*X+f*ee+g*q,s[13]=d*M+h*de+f*ne+g*he,s[2]=y*w+x*A+m*H+u*L,s[6]=y*T+x*Q+m*J+u*W,s[10]=y*z+x*X+m*ee+u*q,s[14]=y*M+x*de+m*ne+u*he,s[3]=_*w+p*A+S*H+C*L,s[7]=_*T+p*Q+S*J+C*W,s[11]=_*z+p*X+S*ee+C*q,s[15]=_*M+p*de+S*ne+C*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],y=e[3],x=e[7],m=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+x*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+m*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],y=e[12],x=e[13],m=e[14],u=e[15],_=h*m*c-x*f*c+x*l*g-a*m*g-h*l*u+a*f*u,p=y*f*c-d*m*c-y*l*g+o*m*g+d*l*u-o*f*u,S=d*x*c-y*h*c+y*a*g-o*x*g-d*a*u+o*h*u,C=y*h*l-d*x*l-y*a*f+o*x*f+d*a*m-o*h*m,w=n*_+i*p+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(x*f*s-h*m*s-x*r*g+i*m*g+h*r*u-i*f*u)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*T,e[4]=p*T,e[5]=(d*m*s-y*f*s+y*r*g-n*m*g-d*r*u+n*f*u)*T,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*T,e[8]=S*T,e[9]=(y*h*s-d*x*s-y*i*g+n*x*g+d*i*u-n*h*u)*T,e[10]=(o*x*s-y*a*s+y*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*T,e[12]=C*T,e[13]=(d*x*r-y*h*r+y*i*f-n*x*f-d*i*m+n*h*m)*T,e[14]=(y*a*r-o*x*r-y*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,y=s*h,x=o*d,m=o*h,u=a*h,_=l*c,p=l*d,S=l*h,C=i.x,w=i.y,T=i.z;return r[0]=(1-(x+u))*C,r[1]=(g+S)*C,r[2]=(y-p)*C,r[3]=0,r[4]=(g-S)*w,r[5]=(1-(f+u))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(y+p)*T,r[9]=(m-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,y;if(a===wi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===kc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let y,x;if(a===wi)y=(o+s)*h,x=-2*h;else if(a===kc)y=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new j,Bn=new bt,TT=new j(0,0,0),wT=new j(1,1,1),Xi=new j,Sl=new j,vn=new j,vg=new bt,_g=new rs;class pu{constructor(e=0,n=0,i=0,r=pu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pu.DEFAULT_ORDER="XYZ";class My{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AT=0;const yg=new j,Ss=new rs,mi=new bt,El=new j,Vo=new j,bT=new j,CT=new rs,xg=new j(1,0,0),Sg=new j(0,1,0),Eg=new j(0,0,1),RT={type:"added"},PT={type:"removed"};class Yt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new j,n=new pu,i=new rs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new $e}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new My,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(Sg,e)}rotateZ(e){return this.rotateOnAxis(Eg,e)}translateOnAxis(e,n){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(Sg,e)}translateZ(e){return this.translateOnAxis(Eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Vo,El,this.up):mi.lookAt(El,Vo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(mi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(RT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(PT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,bT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,CT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new j(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new j,gi=new j,fd=new j,vi=new j,Es=new j,Ms=new j,Mg=new j,pd=new j,md=new j,gd=new j;let Ml=!1;class Wn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),gi.subVectors(i,n),fd.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(gi),l=zn.dot(fd),c=gi.dot(gi),d=gi.dot(fd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,y=(o*d-a*l)*f;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ml=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),gi.subVectors(e,n),zn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ml=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),Ms.subVectors(s,i),pd.subVectors(e,i);const l=Es.dot(pd),c=Ms.dot(pd);if(l<=0&&c<=0)return n.copy(i);md.subVectors(e,r);const d=Es.dot(md),h=Ms.dot(md);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Es,o);gd.subVectors(e,s);const g=Es.dot(gd),y=Ms.dot(gd);if(y>=0&&g<=y)return n.copy(s);const x=g*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Ms,a);const m=d*y-g*h;if(m<=0&&h-d>=0&&g-y>=0)return Mg.subVectors(s,r),a=(h-d)/(h-d+(g-y)),n.copy(r).addScaledVector(Mg,a);const u=1/(m+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Es,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=mT(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=Ty[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=sd(e.r),this.g=sd(e.g),this.b=sd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return rt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Bt(Xt.r*255,0,255))*65536+Math.round(Bt(Xt.g*255,0,255))*256+Math.round(Bt(Xt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ut){rt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Tl);const i=id($i.h,Tl.h,n),r=id($i.s,Tl.s,n),s=id($i.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new tt;tt.NAMES=Ty;let IT=0;class Va extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=To(),this.name="",this.type="Material",this.blending=to,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Oh,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oa extends Va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,wl=new Se;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ug,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ug&&(e.usage=this.usage),e}}class wy extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ay extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nn extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LT=0;const An=new bt,_d=new Yt,Ts=new j,_n=new Ha,Go=new Ha,Nt=new j;class ci extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_y(e)?Ay:wy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(_n.min,Go.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,Go.max),_n.expandByPoint(Nt)):(_n.expandByPoint(Go.min),_n.expandByPoint(Go.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Nt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Nt.add(Ts)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<a;A++)c[A]=new j,d[A]=new j;const h=new j,f=new j,g=new j,y=new Se,x=new Se,m=new Se,u=new j,_=new j;function p(A,Q,X){h.fromArray(r,A*3),f.fromArray(r,Q*3),g.fromArray(r,X*3),y.fromArray(o,A*2),x.fromArray(o,Q*2),m.fromArray(o,X*2),f.sub(h),g.sub(h),x.sub(y),m.sub(y);const de=1/(x.x*m.y-m.x*x.y);isFinite(de)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(de),_.copy(g).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(de),c[A].add(u),c[Q].add(u),c[X].add(u),d[A].add(_),d[Q].add(_),d[X].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,Q=S.length;A<Q;++A){const X=S[A],de=X.start,H=X.count;for(let J=de,ee=de+H;J<ee;J+=3)p(i[J+0],i[J+1],i[J+2])}const C=new j,w=new j,T=new j,z=new j;function M(A){T.fromArray(s,A*3),z.copy(T);const Q=c[A];C.copy(Q),C.sub(T.multiplyScalar(T.dot(Q))).normalize(),w.crossVectors(z,Q);const de=w.dot(d[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=de}for(let A=0,Q=S.length;A<Q;++A){const X=S[A],de=X.start,H=X.count;for(let J=de,ee=de+H;J<ee;J+=3)M(i[J+0]),M(i[J+1]),M(i[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,h=new j;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,y=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*d;for(let u=0;u<d;u++)f[y++]=c[g++]}return new si(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new bt,Nr=new Ey,Al=new ep,wg=new j,ws=new j,As=new j,bs=new j,yd=new j,bl=new j,Cl=new Se,Rl=new Se,Pl=new Se,Ag=new j,bg=new j,Cg=new j,Il=new j,Ll=new j;class un extends Yt{constructor(e=new ci,n=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(yd.fromBufferAttribute(h,e),o?bl.addScaledVector(yd,d):bl.addScaledVector(yd.sub(n),d))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(Al.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Al,wg)===null||Nr.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=f.length;y<x;y++){const m=f[y],u=o[m.materialIndex],_=Math.max(m.start,g.start),p=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,C=p;S<C;S+=3){const w=a.getX(S),T=a.getX(S+1),z=a.getX(S+2);r=Nl(this,u,e,i,c,d,h,w,T,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=y,u=x;m<u;m+=3){const _=a.getX(m),p=a.getX(m+1),S=a.getX(m+2);r=Nl(this,o,e,i,c,d,h,_,p,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=f.length;y<x;y++){const m=f[y],u=o[m.materialIndex],_=Math.max(m.start,g.start),p=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,C=p;S<C;S+=3){const w=S,T=S+1,z=S+2;r=Nl(this,u,e,i,c,d,h,w,T,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=y,u=x;m<u;m+=3){const _=m,p=m+1,S=m+2;r=Nl(this,o,e,i,c,d,h,_,p,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function NT(t,e,n,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;Ll.copy(a),Ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ll);return c<n.near||c>n.far?null:{distance:c,point:Ll.clone(),object:t}}function Nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ws),t.getVertexPosition(l,As),t.getVertexPosition(c,bs);const d=NT(t,e,n,i,ws,As,bs,Il);if(d){r&&(Cl.fromBufferAttribute(r,a),Rl.fromBufferAttribute(r,l),Pl.fromBufferAttribute(r,c),d.uv=Wn.getInterpolation(Il,ws,As,bs,Cl,Rl,Pl,new Se)),s&&(Cl.fromBufferAttribute(s,a),Rl.fromBufferAttribute(s,l),Pl.fromBufferAttribute(s,c),d.uv1=Wn.getInterpolation(Il,ws,As,bs,Cl,Rl,Pl,new Se),d.uv2=d.uv1),o&&(Ag.fromBufferAttribute(o,a),bg.fromBufferAttribute(o,l),Cg.fromBufferAttribute(o,c),d.normal=Wn.getInterpolation(Il,ws,As,bs,Ag,bg,Cg,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};Wn.getNormal(ws,As,bs,h.normal),d.face=h}return d}class Ga extends ci{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(d,3)),this.setAttribute("uv",new nn(h,2));function y(x,m,u,_,p,S,C,w,T,z,M){const A=S/T,Q=C/z,X=S/2,de=C/2,H=w/2,J=T+1,ee=z+1;let ne=0,L=0;const W=new j;for(let q=0;q<ee;q++){const he=q*Q-de;for(let pe=0;pe<J;pe++){const se=pe*A-X;W[x]=se*_,W[m]=he*p,W[u]=H,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[u]=w>0?1:-1,d.push(W.x,W.y,W.z),h.push(pe/T),h.push(1-q/z),ne+=1}}for(let q=0;q<z;q++)for(let he=0;he<T;he++){const pe=f+he+J*q,se=f+he+J*(q+1),k=f+(he+1)+J*(q+1),U=f+(he+1)+J*q;l.push(pe,se,U),l.push(se,k,U),L+=6}a.addGroup(g,L,M),g+=L,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=_o(t[n]);for(const r in i)e[r]=i[r]}return e}function DT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function by(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const UT={clone:_o,merge:Zt};var OT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OT,this.fragmentShader=kT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=DT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cy extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends Cy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Rs=1;class FT extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Cs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Cs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ry extends mn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:mo,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BT extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kr?Ut:Ln),this.texture=new Ry(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ga(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:mr});s.uniforms.tEquirect.value=n;const o=new un(r,s),a=n.minFilter;return n.minFilter===Ca&&(n.minFilter=Rn),new FT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xd=new j,zT=new j,HT=new $e;class Ji{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xd.subVectors(i,n).cross(zT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HT.getNormalMatrix(e),r=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new ep,Dl=new j;class tp{constructor(e=new Ji,n=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],x=r[10],m=r[11],u=r[12],_=r[13],p=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-g,S-u).normalize(),i[1].setComponents(l+s,f+c,m+g,S+u).normalize(),i[2].setComponents(l+o,f+d,m+y,S+_).normalize(),i[3].setComponents(l-o,f-d,m-y,S-_).normalize(),i[4].setComponents(l-a,f-h,m-x,S-p).normalize(),n===wi)i[5].setComponents(l+a,f+h,m+x,S+p).normalize();else if(n===kc)i[5].setComponents(a,h,x,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Py(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function VT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,g=h.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,h){const f=d.array,g=d._updateRange,y=d.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&y.length===0&&t.bufferSubData(h,0,f),y.length!==0){for(let x=0,m=y.length;x<m;x++){const u=y[x];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Pa extends ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],y=[],x=[],m=[];for(let u=0;u<d;u++){const _=u*f-o;for(let p=0;p<c;p++){const S=p*h-s;y.push(S,-_,0),x.push(0,0,1),m.push(p/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const p=_+c*u,S=_+c*(u+1),C=_+1+c*(u+1),w=_+1+c*u;g.push(p,S,w),g.push(S,C,w)}this.setIndex(g),this.setAttribute("position",new nn(y,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var GT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,QT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ow=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,r1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:GT,alphahash_pars_fragment:WT,alphamap_fragment:jT,alphamap_pars_fragment:XT,alphatest_fragment:$T,alphatest_pars_fragment:qT,aomap_fragment:YT,aomap_pars_fragment:KT,batching_pars_vertex:JT,batching_vertex:ZT,begin_vertex:QT,beginnormal_vertex:ew,bsdfs:tw,iridescence_fragment:nw,bumpmap_pars_fragment:iw,clipping_planes_fragment:rw,clipping_planes_pars_fragment:sw,clipping_planes_pars_vertex:ow,clipping_planes_vertex:aw,color_fragment:lw,color_pars_fragment:cw,color_pars_vertex:uw,color_vertex:dw,common:hw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:pw,displacementmap_pars_vertex:mw,displacementmap_vertex:gw,emissivemap_fragment:vw,emissivemap_pars_fragment:_w,colorspace_fragment:yw,colorspace_pars_fragment:xw,envmap_fragment:Sw,envmap_common_pars_fragment:Ew,envmap_pars_fragment:Mw,envmap_pars_vertex:Tw,envmap_physical_pars_fragment:Ow,envmap_vertex:ww,fog_vertex:Aw,fog_pars_vertex:bw,fog_fragment:Cw,fog_pars_fragment:Rw,gradientmap_pars_fragment:Pw,lightmap_fragment:Iw,lightmap_pars_fragment:Lw,lights_lambert_fragment:Nw,lights_lambert_pars_fragment:Dw,lights_pars_begin:Uw,lights_toon_fragment:kw,lights_toon_pars_fragment:Fw,lights_phong_fragment:Bw,lights_phong_pars_fragment:zw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Vw,lights_fragment_begin:Gw,lights_fragment_maps:Ww,lights_fragment_end:jw,logdepthbuf_fragment:Xw,logdepthbuf_pars_fragment:$w,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:Yw,map_fragment:Kw,map_pars_fragment:Jw,map_particle_fragment:Zw,map_particle_pars_fragment:Qw,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:r1,morphtarget_vertex:s1,normal_fragment_begin:o1,normal_fragment_maps:a1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:u1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:y1,dithering_fragment:x1,dithering_pars_fragment:S1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:w1,shadowmap_vertex:A1,shadowmask_pars_fragment:b1,skinbase_vertex:C1,skinning_pars_vertex:R1,skinning_vertex:P1,skinnormal_vertex:I1,specularmap_fragment:L1,specularmap_pars_fragment:N1,tonemapping_fragment:D1,tonemapping_pars_fragment:U1,transmission_fragment:O1,transmission_pars_fragment:k1,uv_pars_fragment:F1,uv_pars_vertex:B1,uv_vertex:z1,worldpos_vertex:H1,background_vert:V1,background_frag:G1,backgroundCube_vert:W1,backgroundCube_frag:j1,cube_vert:X1,cube_frag:$1,depth_vert:q1,depth_frag:Y1,distanceRGBA_vert:K1,distanceRGBA_frag:J1,equirect_vert:Z1,equirect_frag:Q1,linedashed_vert:eA,linedashed_frag:tA,meshbasic_vert:nA,meshbasic_frag:iA,meshlambert_vert:rA,meshlambert_frag:sA,meshmatcap_vert:oA,meshmatcap_frag:aA,meshnormal_vert:lA,meshnormal_frag:cA,meshphong_vert:uA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:fA,meshtoon_vert:pA,meshtoon_frag:mA,points_vert:gA,points_frag:vA,shadow_vert:_A,shadow_frag:yA,sprite_vert:xA,sprite_frag:SA},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ti={basic:{uniforms:Zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([Pe.points,Pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([Pe.common,Pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([Pe.sprite,Pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Zt([Pe.common,Pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Zt([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ti.physical={uniforms:Zt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ul={r:0,b:0,g:0};function EA(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function y(m,u){let _=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?x(a,l):p&&p.isColor&&(x(p,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===hu)?(d===void 0&&(d=new un(new Ga(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:_o(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=rt.getTransfer(p.colorSpace)!==lt,(h!==p||f!==p.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new un(new Pa(2,2),new Oi({name:"BackgroundMaterial",uniforms:_o(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=rt.getTransfer(p.colorSpace)!==lt,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||f!==p.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(Ul,by(t)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:y}}function MA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(H,J,ee,ne,L){let W=!1;if(o){const q=x(ne,ee,J);c!==q&&(c=q,g(c.object)),W=u(H,ne,ee,L),W&&_(H,ne,ee,L)}else{const q=J.wireframe===!0;(c.geometry!==ne.id||c.program!==ee.id||c.wireframe!==q)&&(c.geometry=ne.id,c.program=ee.id,c.wireframe=q,W=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,z(H,J,ee,ne),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function y(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function x(H,J,ee){const ne=ee.wireframe===!0;let L=a[H.id];L===void 0&&(L={},a[H.id]=L);let W=L[J.id];W===void 0&&(W={},L[J.id]=W);let q=W[ne];return q===void 0&&(q=m(f()),W[ne]=q),q}function m(H){const J=[],ee=[],ne=[];for(let L=0;L<r;L++)J[L]=0,ee[L]=0,ne[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ee,attributeDivisors:ne,object:H,attributes:{},index:null}}function u(H,J,ee,ne){const L=c.attributes,W=J.attributes;let q=0;const he=ee.getAttributes();for(const pe in he)if(he[pe].location>=0){const k=L[pe];let U=W[pe];if(U===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(U=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(U=H.instanceColor)),k===void 0||k.attribute!==U||U&&k.data!==U.data)return!0;q++}return c.attributesNum!==q||c.index!==ne}function _(H,J,ee,ne){const L={},W=J.attributes;let q=0;const he=ee.getAttributes();for(const pe in he)if(he[pe].location>=0){let k=W[pe];k===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(k=H.instanceColor));const U={};U.attribute=k,k&&k.data&&(U.data=k.data),L[pe]=U,q++}c.attributes=L,c.attributesNum=q,c.index=ne}function p(){const H=c.newAttributes;for(let J=0,ee=H.length;J<ee;J++)H[J]=0}function S(H){C(H,0)}function C(H,J){const ee=c.newAttributes,ne=c.enabledAttributes,L=c.attributeDivisors;ee[H]=1,ne[H]===0&&(t.enableVertexAttribArray(H),ne[H]=1),L[H]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,J),L[H]=J)}function w(){const H=c.newAttributes,J=c.enabledAttributes;for(let ee=0,ne=J.length;ee<ne;ee++)J[ee]!==H[ee]&&(t.disableVertexAttribArray(ee),J[ee]=0)}function T(H,J,ee,ne,L,W,q){q===!0?t.vertexAttribIPointer(H,J,ee,L,W):t.vertexAttribPointer(H,J,ee,ne,L,W)}function z(H,J,ee,ne){if(i.isWebGL2===!1&&(H.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const L=ne.attributes,W=ee.getAttributes(),q=J.defaultAttributeValues;for(const he in W){const pe=W[he];if(pe.location>=0){let se=L[he];if(se===void 0&&(he==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),he==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){const k=se.normalized,U=se.itemSize,R=n.get(se);if(R===void 0)continue;const b=R.buffer,ie=R.type,fe=R.bytesPerElement,$=i.isWebGL2===!0&&(ie===t.INT||ie===t.UNSIGNED_INT||se.gpuType===ly);if(se.isInterleavedBufferAttribute){const ve=se.data,B=ve.stride,be=se.offset;if(ve.isInstancedInterleavedBuffer){for(let te=0;te<pe.locationSize;te++)C(pe.location+te,ve.meshPerAttribute);H.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let te=0;te<pe.locationSize;te++)S(pe.location+te);t.bindBuffer(t.ARRAY_BUFFER,b);for(let te=0;te<pe.locationSize;te++)T(pe.location+te,U/pe.locationSize,ie,k,B*fe,(be+U/pe.locationSize*te)*fe,$)}else{if(se.isInstancedBufferAttribute){for(let ve=0;ve<pe.locationSize;ve++)C(pe.location+ve,se.meshPerAttribute);H.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<pe.locationSize;ve++)S(pe.location+ve);t.bindBuffer(t.ARRAY_BUFFER,b);for(let ve=0;ve<pe.locationSize;ve++)T(pe.location+ve,U/pe.locationSize,ie,k,U*fe,U/pe.locationSize*ve*fe,$)}}else if(q!==void 0){const k=q[he];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(pe.location,k);break;case 3:t.vertexAttrib3fv(pe.location,k);break;case 4:t.vertexAttrib4fv(pe.location,k);break;default:t.vertexAttrib1fv(pe.location,k)}}}}w()}function M(){X();for(const H in a){const J=a[H];for(const ee in J){const ne=J[ee];for(const L in ne)y(ne[L].object),delete ne[L];delete J[ee]}delete a[H]}}function A(H){if(a[H.id]===void 0)return;const J=a[H.id];for(const ee in J){const ne=J[ee];for(const L in ne)y(ne[L].object),delete ne[L];delete J[ee]}delete a[H.id]}function Q(H){for(const J in a){const ee=a[J];if(ee[H.id]===void 0)continue;const ne=ee[H.id];for(const L in ne)y(ne[L].object),delete ne[L];delete ee[H.id]}}function X(){de(),d=!0,c!==l&&(c=l,g(c.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:de,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:Q,initAttributes:p,enableAttribute:S,disableUnusedAttributes:w}}function TA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<f;y++)this.render(d[y],h[y]);else{g.multiDrawArraysWEBGL(s,d,0,h,0,f);let y=0;for(let x=0;x<f;x++)y+=h[x];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function wA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=f>0,S=o||e.has("OES_texture_float"),C=p&&S,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:p,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:w}}function AA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ji,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const y=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,p=_*4;let S=u.clippingState||null;l.value=S,S=d(y,f,p,g);for(let C=0;C!==p;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,y){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,y!==!0||m===null){const u=g+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let p=0,S=g;p!==x;++p,S+=4)o.copy(h[p]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bA(t){let e=new WeakMap;function n(o,a){return a===kh?o.mapping=mo:a===Fh&&(o.mapping=go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kh||a===Fh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new BT(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Iy extends Cy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,Rg=[.125,.215,.35,.446,.526,.582],Hr=20,Sd=new Iy,Pg=new tt;let Ed=null,Md=0,Td=0;const Fr=(1+Math.sqrt(5))/2,Ps=1/Fr,Ig=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Fr,Ps),new j(0,Fr,-Ps),new j(Ps,0,Fr),new j(-Ps,0,Fr),new j(Fr,Ps,0),new j(-Fr,Ps,0)];class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ed=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Md,Td),e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ra,format:Xn,colorSpace:Ui,depthBuffer:!1},r=Ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CA(s)),this._blurMaterial=RA(s,e,n)}return r}_compileMaterial(e){const n=new un(this._lodPlanes[0],e);this._renderer.compile(n,Sd)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pg),d.toneMapping=gr,d.autoClear=!1;const g=new oa({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),y=new un(new Ga,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Pg),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;Ol(r,_*p,u>2?p:0,p,p),d.setRenderTarget(r),x&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ig[(r-1)%Ig.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new un(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Hr-1),x=s/y,m=isFinite(s)?1+Math.floor(d*x):Hr;m>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const u=[];let _=0;for(let T=0;T<Hr;++T){const z=T/x,M=Math.exp(-z*z/2);u.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=y,f.mipInt.value=p-i;const S=this._sizeLods[r],C=3*S*(r>p-js?r-p+js:0),w=4*(this._cubeSize-S);Ol(n,C,w,3*S,2*S),l.setRenderTarget(n),l.render(h,Sd)}}function CA(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+Rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=Rg[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,y=6,x=3,m=2,u=1,_=new Float32Array(x*y*g),p=new Float32Array(m*y*g),S=new Float32Array(u*y*g);for(let w=0;w<g;w++){const T=w%3*2/3-1,z=w>2?0:-1,M=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];_.set(M,x*y*w),p.set(f,m*y*w);const A=[w,w,w,w,w,w];S.set(A,u*y*w)}const C=new ci;C.setAttribute("position",new si(_,x)),C.setAttribute("uv",new si(p,m)),C.setAttribute("faceIndex",new si(S,u)),e.push(C),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ng(t,e,n){const i=new is(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RA(t,e,n){const i=new Float32Array(Hr),r=new j(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Dg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Ug(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kh||l===Fh,d=l===mo||l===go;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Lg(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Lg(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function IA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const x=f.morphAttributes[y];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const x=g[y];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,y=h.attributes.position;let x=0;if(g!==null){const _=g.array;x=g.version;for(let p=0,S=_.length;p<S;p+=3){const C=_[p+0],w=_[p+1],T=_[p+2];f.push(C,w,w,T,T,C)}}else if(y!==void 0){const _=y.array;x=y.version;for(let p=0,S=_.length/3-1;p<S;p+=3){const C=p+0,w=p+1,T=p+2;f.push(C,w,w,T,T,C)}}else return;const m=new(_y(f)?Ay:wy)(f,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function NA(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function h(g,y,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,y,a,g*l,x),n.update(y,s,x)}function f(g,y,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(g[u]/l,y[u]);else{m.multiDrawElementsWEBGL(s,y,0,a,g,0,x);let u=0;for(let _=0;_<x;_++)u+=y[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function DA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UA(t,e){return t[0]-e[0]}function OA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function kA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=y!==void 0?y.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let J=function(){de.dispose(),s.delete(d),d.removeEventListener("dispose",J)};var g=J;m!==void 0&&m.texture.dispose();const p=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let M=0;p===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let A=d.attributes.position.count*M,Q=1;A>e.maxTextureSize&&(Q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const X=new Float32Array(A*Q*4*x),de=new Sy(X,A,Q,x);de.type=or,de.needsUpdate=!0;const H=M*4;for(let ee=0;ee<x;ee++){const ne=w[ee],L=T[ee],W=z[ee],q=A*Q*4*ee;for(let he=0;he<ne.count;he++){const pe=he*H;p===!0&&(o.fromBufferAttribute(ne,he),X[q+pe+0]=o.x,X[q+pe+1]=o.y,X[q+pe+2]=o.z,X[q+pe+3]=0),S===!0&&(o.fromBufferAttribute(L,he),X[q+pe+4]=o.x,X[q+pe+5]=o.y,X[q+pe+6]=o.z,X[q+pe+7]=0),C===!0&&(o.fromBufferAttribute(W,he),X[q+pe+8]=o.x,X[q+pe+9]=o.y,X[q+pe+10]=o.z,X[q+pe+11]=W.itemSize===4?o.w:1)}}m={count:x,texture:de,size:new Se(A,Q)},s.set(d,m),d.addEventListener("dispose",J)}let u=0;for(let p=0;p<f.length;p++)u+=f[p];const _=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==y){x=[];for(let S=0;S<y;S++)x[S]=[S,0];i[d.id]=x}for(let S=0;S<y;S++){const C=x[S];C[0]=S,C[1]=f[S]}x.sort(OA);for(let S=0;S<8;S++)S<y&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(UA);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const C=a[S],w=C[0],T=C[1];w!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+S)!==m[w]&&d.setAttribute("morphTarget"+S,m[w]),u&&d.getAttribute("morphNormal"+S)!==u[w]&&d.setAttribute("morphNormal"+S,u[w]),r[S]=T,_+=T):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const p=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function FA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ly extends mn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Yr,d!==Yr&&d!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Yr&&(i=sr),i===void 0&&d===vo&&(i=qr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ny=new mn,Dy=new Ly(1,1);Dy.compareFunction=vy;const Uy=new Sy,Oy=new ET,ky=new Ry,Og=[],kg=[],Fg=new Float32Array(16),Bg=new Float32Array(9),zg=new Float32Array(4);function wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Og[r];if(s===void 0&&(s=new Float32Array(r),Og[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=kg[e];n===void 0&&(n=new Int32Array(e),kg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function GA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;zg.set(i),t.uniformMatrix2fv(this.addr,!1,zg),It(n,i)}}function WA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Bg.set(i),t.uniformMatrix3fv(this.addr,!1,Bg),It(n,i)}}function jA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Fg.set(i),t.uniformMatrix4fv(this.addr,!1,Fg),It(n,i)}}function XA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function KA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function QA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Dy:Ny;n.setTexture2D(e||s,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Oy,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ky,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Uy,r)}function rb(t){switch(t){case 5126:return BA;case 35664:return zA;case 35665:return HA;case 35666:return VA;case 35674:return GA;case 35675:return WA;case 35676:return jA;case 5124:case 35670:return XA;case 35667:case 35671:return $A;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return KA;case 36294:return JA;case 36295:return ZA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(t,e){t.uniform1fv(this.addr,e)}function ob(t,e){const n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function ab(t,e){const n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function lb(t,e){const n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function cb(t,e){const n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ub(t,e){const n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function db(t,e){const n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hb(t,e){t.uniform1iv(this.addr,e)}function fb(t,e){t.uniform2iv(this.addr,e)}function pb(t,e){t.uniform3iv(this.addr,e)}function mb(t,e){t.uniform4iv(this.addr,e)}function gb(t,e){t.uniform1uiv(this.addr,e)}function vb(t,e){t.uniform2uiv(this.addr,e)}function _b(t,e){t.uniform3uiv(this.addr,e)}function yb(t,e){t.uniform4uiv(this.addr,e)}function xb(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ny,s[o])}function Sb(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Oy,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ky,s[o])}function Mb(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Uy,s[o])}function Tb(t){switch(t){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return hb;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return _b;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Mb}}class wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rb(n.type)}}class Ab{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Tb(n.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Hg(t,e){t.seq.push(e),t.map[e.id]=e}function Cb(t,e,n){const i=t.name,r=i.length;for(wd.lastIndex=0;;){const s=wd.exec(i),o=wd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hg(n,c===void 0?new wb(a,t,e):new Ab(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new bb(a),Hg(n,h)),n=h}}}class ic{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Cb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Rb=37297;let Pb=0;function Ib(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Lb(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Oc&&n===Uc?i="LinearDisplayP3ToLinearSRGB":e===Uc&&n===Oc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ui:case fu:return[i,"LinearTransferOETF"];case Ut:case Qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ib(t.getShaderSource(e),o)}else return r}function Nb(t,e){const n=Lb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Db(t,e){let n;switch(e){case WM:n="Linear";break;case jM:n="Reinhard";break;case XM:n="OptimizedCineon";break;case $M:n="ACESFilmic";break;case YM:n="AgX";break;case qM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ub(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function Ob(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}function kb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Wg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(t){return t.replace(Bb,Hb)}const zb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hb(t,e){let n=Ke[e];if(n===void 0){const i=zb.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(n)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(t){return t.replace(Vb,Gb)}function Gb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $g(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===sy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_M?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function $b(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case oy:e="ENVMAP_BLENDING_MULTIPLY";break;case VM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function qb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Yb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Wb(n),c=jb(n),d=Xb(n),h=$b(n),f=qb(n),g=n.isWebGL2?"":Ub(n),y=Ob(n),x=kb(s),m=r.createProgram();let u,_,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xs).join(`
`),u.length>0&&(u+=`
`),_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xs).join(`
`),_.length>0&&(_+=`
`)):(u=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),_=[g,$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==gr?Db("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Nb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Wh(o),o=Wg(o,n),o=jg(o,n),a=Wh(a),a=Wg(a,n),a=jg(a,n),o=Xg(o),a=Xg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=p+u+o,C=p+_+a,w=Vg(r,r.VERTEX_SHADER,S),T=Vg(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(X){if(t.debug.checkShaderErrors){const de=r.getProgramInfoLog(m).trim(),H=r.getShaderInfoLog(w).trim(),J=r.getShaderInfoLog(T).trim();let ee=!0,ne=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,T);else{const L=Gg(r,w,"vertex"),W=Gg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+L+`
`+W)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(H===""||J==="")&&(ne=!1);ne&&(X.diagnostics={runnable:ee,programLog:de,vertexShader:{log:H,prefix:u},fragmentShader:{log:J,prefix:_}})}r.deleteShader(w),r.deleteShader(T),M=new ic(r,m),A=Fb(r,m)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let Q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=r.getProgramParameter(m,Rb)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let Kb=0;class Jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Zb(e),n.set(e,i)),i}}class Zb{constructor(e){this.id=Kb++,this.code=e,this.usedTimes=0}}function Qb(t,e,n,i,r,s,o){const a=new My,l=new Jb,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,A,Q,X,de){const H=X.fog,J=de.geometry,ee=M.isMeshStandardMaterial?X.environment:null,ne=(M.isMeshStandardMaterial?n:e).get(M.envMap||ee),L=ne&&ne.mapping===hu?ne.image.height:null,W=y[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const q=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,he=q!==void 0?q.length:0;let pe=0;J.morphAttributes.position!==void 0&&(pe=1),J.morphAttributes.normal!==void 0&&(pe=2),J.morphAttributes.color!==void 0&&(pe=3);let se,k,U,R;if(W){const ht=ti[W];se=ht.vertexShader,k=ht.fragmentShader}else se=M.vertexShader,k=M.fragmentShader,l.update(M),U=l.getVertexShaderID(M),R=l.getFragmentShaderID(M);const b=t.getRenderTarget(),ie=de.isInstancedMesh===!0,fe=de.isBatchedMesh===!0,$=!!M.map,ve=!!M.matcap,B=!!ne,be=!!M.aoMap,te=!!M.lightMap,ce=!!M.bumpMap,G=!!M.normalMap,K=!!M.displacementMap,N=!!M.emissiveMap,v=!!M.metalnessMap,E=!!M.roughnessMap,F=M.anisotropy>0,re=M.clearcoat>0,O=M.iridescence>0,Y=M.sheen>0,me=M.transmission>0,ge=F&&!!M.anisotropyMap,Me=re&&!!M.clearcoatMap,Ce=re&&!!M.clearcoatNormalMap,De=re&&!!M.clearcoatRoughnessMap,ue=O&&!!M.iridescenceMap,He=O&&!!M.iridescenceThicknessMap,Re=Y&&!!M.sheenColorMap,Oe=Y&&!!M.sheenRoughnessMap,we=!!M.specularMap,Ae=!!M.specularColorMap,D=!!M.specularIntensityMap,_e=me&&!!M.transmissionMap,Ne=me&&!!M.thicknessMap,Ie=!!M.gradientMap,xe=!!M.alphaMap,V=M.alphaTest>0,Te=!!M.alphaHash,Le=!!M.extensions,ze=!!J.attributes.uv1,Fe=!!J.attributes.uv2,Ge=!!J.attributes.uv3;let We=gr;return M.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(We=t.toneMapping),{isWebGL2:d,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:se,fragmentShader:k,defines:M.defines,customVertexShaderID:U,customFragmentShaderID:R,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:fe,instancing:ie,instancingColor:ie&&de.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:b===null?t.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ui,map:$,matcap:ve,envMap:B,envMapMode:B&&ne.mapping,envMapCubeUVHeight:L,aoMap:be,lightMap:te,bumpMap:ce,normalMap:G,displacementMap:f&&K,emissiveMap:N,normalMapObjectSpace:G&&M.normalMapType===aT,normalMapTangentSpace:G&&M.normalMapType===gy,metalnessMap:v,roughnessMap:E,anisotropy:F,anisotropyMap:ge,clearcoat:re,clearcoatMap:Me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:De,iridescence:O,iridescenceMap:ue,iridescenceThicknessMap:He,sheen:Y,sheenColorMap:Re,sheenRoughnessMap:Oe,specularMap:we,specularColorMap:Ae,specularIntensityMap:D,transmission:me,transmissionMap:_e,thicknessMap:Ne,gradientMap:Ie,opaque:M.transparent===!1&&M.blending===to,alphaMap:xe,alphaTest:V,alphaHash:Te,combine:M.combine,mapUv:$&&x(M.map.channel),aoMapUv:be&&x(M.aoMap.channel),lightMapUv:te&&x(M.lightMap.channel),bumpMapUv:ce&&x(M.bumpMap.channel),normalMapUv:G&&x(M.normalMap.channel),displacementMapUv:K&&x(M.displacementMap.channel),emissiveMapUv:N&&x(M.emissiveMap.channel),metalnessMapUv:v&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ge&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:Ae&&x(M.specularColorMap.channel),specularIntensityMapUv:D&&x(M.specularIntensityMap.channel),transmissionMapUv:_e&&x(M.transmissionMap.channel),thicknessMapUv:Ne&&x(M.thicknessMap.channel),alphaMapUv:xe&&x(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(G||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Fe,vertexUv3s:Ge,pointsUvs:de.isPoints===!0&&!!J.attributes.uv&&($||xe),fog:!!H,useFog:M.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:de.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Le&&M.extensions.derivatives===!0,extensionFragDepth:Le&&M.extensions.fragDepth===!0,extensionDrawBuffers:Le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Q in M.defines)A.push(Q),A.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(_(A,M),p(A,M),A.push(t.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function p(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const A=y[M.type];let Q;if(A){const X=ti[A];Q=UT.clone(X.uniforms)}else Q=M.uniforms;return Q}function C(M,A){let Q;for(let X=0,de=c.length;X<de;X++){const H=c[X];if(H.cacheKey===A){Q=H,++Q.usedTimes;break}}return Q===void 0&&(Q=new Yb(t,A,M,s),c.push(Q)),Q}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:z}}function eC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function tC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,y,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:y,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,f,g,y,x,m){const u=o(h,f,g,y,x,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,y,x,m){const u=o(h,f,g,y,x,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||tC),i.length>1&&i.sort(f||qg),r.length>1&&r.sort(f||qg)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function nC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yg,t.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function iC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new tt};break;case"SpotLight":n={position:new j,direction:new j,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function rC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sC=0;function oC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aC(t,e){const n=new iC,i=rC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new j);const s=new j,o=new bt,a=new bt;function l(d,h){let f=0,g=0,y=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,m=0,u=0,_=0,p=0,S=0,C=0,w=0,T=0,z=0,M=0;d.sort(oC);const A=h===!0?Math.PI:1;for(let X=0,de=d.length;X<de;X++){const H=d[X],J=H.color,ee=H.intensity,ne=H.distance,L=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=J.r*ee*A,g+=J.g*ee*A,y+=J.b*ee*A;else if(H.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],ee);M++}else if(H.isDirectionalLight){const W=n.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*A),H.castShadow){const q=H.shadow,he=i.get(H);he.shadowBias=q.bias,he.shadowNormalBias=q.normalBias,he.shadowRadius=q.radius,he.shadowMapSize=q.mapSize,r.directionalShadow[x]=he,r.directionalShadowMap[x]=L,r.directionalShadowMatrix[x]=H.shadow.matrix,S++}r.directional[x]=W,x++}else if(H.isSpotLight){const W=n.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(J).multiplyScalar(ee*A),W.distance=ne,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[u]=W;const q=H.shadow;if(H.map&&(r.spotLightMap[T]=H.map,T++,q.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[u]=q.matrix,H.castShadow){const he=i.get(H);he.shadowBias=q.bias,he.shadowNormalBias=q.normalBias,he.shadowRadius=q.radius,he.shadowMapSize=q.mapSize,r.spotShadow[u]=he,r.spotShadowMap[u]=L,w++}u++}else if(H.isRectAreaLight){const W=n.get(H);W.color.copy(J).multiplyScalar(ee),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=W,_++}else if(H.isPointLight){const W=n.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*A),W.distance=H.distance,W.decay=H.decay,H.castShadow){const q=H.shadow,he=i.get(H);he.shadowBias=q.bias,he.shadowNormalBias=q.normalBias,he.shadowRadius=q.radius,he.shadowMapSize=q.mapSize,he.shadowCameraNear=q.camera.near,he.shadowCameraFar=q.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=H.shadow.matrix,C++}r.point[m]=W,m++}else if(H.isHemisphereLight){const W=n.get(H);W.skyColor.copy(H.color).multiplyScalar(ee*A),W.groundColor.copy(H.groundColor).multiplyScalar(ee*A),r.hemi[p]=W,p++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==x||Q.pointLength!==m||Q.spotLength!==u||Q.rectAreaLength!==_||Q.hemiLength!==p||Q.numDirectionalShadows!==S||Q.numPointShadows!==C||Q.numSpotShadows!==w||Q.numSpotMaps!==T||Q.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=_,r.point.length=m,r.hemi.length=p,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+T-z,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=M,Q.directionalLength=x,Q.pointLength=m,Q.spotLength=u,Q.rectAreaLength=_,Q.hemiLength=p,Q.numDirectionalShadows=S,Q.numPointShadows=C,Q.numSpotShadows=w,Q.numSpotMaps=T,Q.numLightProbes=M,r.version=sC++)}function c(d,h){let f=0,g=0,y=0,x=0,m=0;const u=h.matrixWorldInverse;for(let _=0,p=d.length;_<p;_++){const S=d[_];if(S.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),f++}else if(S.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),y++}else if(S.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Kg(t,e){const n=new aC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Kg(t,e),n.set(s,[l])):o>=a.length?(l=new Kg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class cC extends Va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uC extends Va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fC(t,e,n){let i=new tp;const r=new Se,s=new Se,o=new Ot,a=new cC({depthPacking:oT}),l=new uC,c={},d=n.maxTextureSize,h={[Mr]:qt,[qt]:Mr,[In]:In},f=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:dC,fragmentShader:hC}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new ci;y.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new un(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sy;let u=this.type;this.render=function(w,T,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),A=t.getActiveCubeFace(),Q=t.getActiveMipmapLevel(),X=t.state;X.setBlending(mr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const de=u!==yi&&this.type===yi,H=u===yi&&this.type!==yi;for(let J=0,ee=w.length;J<ee;J++){const ne=w[J],L=ne.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||de===!0||H===!0){const he=this.type!==yi?{minFilter:en,magFilter:en}:{};L.map!==null&&L.map.dispose(),L.map=new is(r.x,r.y,he),L.map.texture.name=ne.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let he=0;he<q;he++){const pe=L.getViewport(he);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),X.viewport(o),L.updateMatrices(ne,he),i=L.getFrustum(),S(T,z,L.camera,ne,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&_(L,z),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(M,A,Q)};function _(w,T){const z=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,z,f,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,z,g,x,null)}function p(w,T,z,M){let A=null;const Q=z.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(Q!==void 0)A=Q;else if(A=z.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=A.uuid,de=T.uuid;let H=c[X];H===void 0&&(H={},c[X]=H);let J=H[de];J===void 0&&(J=A.clone(),H[de]=J,T.addEventListener("dispose",C)),A=J}if(A.visible=T.visible,A.wireframe=T.wireframe,M===yi?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:h[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const X=t.properties.get(A);X.light=z}return A}function S(w,T,z,M,A){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld);const de=e.update(w),H=w.material;if(Array.isArray(H)){const J=de.groups;for(let ee=0,ne=J.length;ee<ne;ee++){const L=J[ee],W=H[L.materialIndex];if(W&&W.visible){const q=p(w,W,M,A);w.onBeforeShadow(t,w,T,z,de,q,L),t.renderBufferDirect(z,null,de,q,w,L),w.onAfterShadow(t,w,T,z,de,q,L)}}}else if(H.visible){const J=p(w,H,M,A);w.onBeforeShadow(t,w,T,z,de,J,null),t.renderBufferDirect(z,null,de,J,w,null),w.onAfterShadow(t,w,T,z,de,J,null)}}const X=w.children;for(let de=0,H=X.length;de<H;de++)S(X[de],T,z,M,A)}function C(w){w.target.removeEventListener("dispose",C);for(const z in c){const M=c[z],A=w.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function pC(t,e,n){const i=n.isWebGL2;function r(){let V=!1;const Te=new Ot;let Le=null;const ze=new Ot(0,0,0,0);return{setMask:function(Fe){Le!==Fe&&!V&&(t.colorMask(Fe,Fe,Fe,Fe),Le=Fe)},setLocked:function(Fe){V=Fe},setClear:function(Fe,Ge,We,ut,ht){ht===!0&&(Fe*=ut,Ge*=ut,We*=ut),Te.set(Fe,Ge,We,ut),ze.equals(Te)===!1&&(t.clearColor(Fe,Ge,We,ut),ze.copy(Te))},reset:function(){V=!1,Le=null,ze.set(-1,0,0,0)}}}function s(){let V=!1,Te=null,Le=null,ze=null;return{setTest:function(Fe){Fe?fe(t.DEPTH_TEST):$(t.DEPTH_TEST)},setMask:function(Fe){Te!==Fe&&!V&&(t.depthMask(Fe),Te=Fe)},setFunc:function(Fe){if(Le!==Fe){switch(Fe){case UM:t.depthFunc(t.NEVER);break;case OM:t.depthFunc(t.ALWAYS);break;case kM:t.depthFunc(t.LESS);break;case Nc:t.depthFunc(t.LEQUAL);break;case FM:t.depthFunc(t.EQUAL);break;case BM:t.depthFunc(t.GEQUAL);break;case zM:t.depthFunc(t.GREATER);break;case HM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=Fe}},setLocked:function(Fe){V=Fe},setClear:function(Fe){ze!==Fe&&(t.clearDepth(Fe),ze=Fe)},reset:function(){V=!1,Te=null,Le=null,ze=null}}}function o(){let V=!1,Te=null,Le=null,ze=null,Fe=null,Ge=null,We=null,ut=null,ht=null;return{setTest:function(et){V||(et?fe(t.STENCIL_TEST):$(t.STENCIL_TEST))},setMask:function(et){Te!==et&&!V&&(t.stencilMask(et),Te=et)},setFunc:function(et,ft,Tt){(Le!==et||ze!==ft||Fe!==Tt)&&(t.stencilFunc(et,ft,Tt),Le=et,ze=ft,Fe=Tt)},setOp:function(et,ft,Tt){(Ge!==et||We!==ft||ut!==Tt)&&(t.stencilOp(et,ft,Tt),Ge=et,We=ft,ut=Tt)},setLocked:function(et){V=et},setClear:function(et){ht!==et&&(t.clearStencil(et),ht=et)},reset:function(){V=!1,Te=null,Le=null,ze=null,Fe=null,Ge=null,We=null,ut=null,ht=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},g={},y=new WeakMap,x=[],m=null,u=!1,_=null,p=null,S=null,C=null,w=null,T=null,z=null,M=new tt(0,0,0),A=0,Q=!1,X=null,de=null,H=null,J=null,ee=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,W=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=W>=2);let he=null,pe={};const se=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),U=new Ot().fromArray(se),R=new Ot().fromArray(k);function b(V,Te,Le,ze){const Fe=new Uint8Array(4),Ge=t.createTexture();t.bindTexture(V,Ge),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<Le;We++)i&&(V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY)?t.texImage3D(Te,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(Te+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return Ge}const ie={};ie[t.TEXTURE_2D]=b(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=b(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ie[t.TEXTURE_2D_ARRAY]=b(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=b(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(t.DEPTH_TEST),l.setFunc(Nc),N(!1),v(Lm),fe(t.CULL_FACE),G(mr);function fe(V){f[V]!==!0&&(t.enable(V),f[V]=!0)}function $(V){f[V]!==!1&&(t.disable(V),f[V]=!1)}function ve(V,Te){return g[V]!==Te?(t.bindFramebuffer(V,Te),g[V]=Te,i&&(V===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=Te),V===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=Te)),!0):!1}function B(V,Te){let Le=x,ze=!1;if(V)if(Le=y.get(Te),Le===void 0&&(Le=[],y.set(Te,Le)),V.isWebGLMultipleRenderTargets){const Fe=V.texture;if(Le.length!==Fe.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let Ge=0,We=Fe.length;Ge<We;Ge++)Le[Ge]=t.COLOR_ATTACHMENT0+Ge;Le.length=Fe.length,ze=!0}}else Le[0]!==t.COLOR_ATTACHMENT0&&(Le[0]=t.COLOR_ATTACHMENT0,ze=!0);else Le[0]!==t.BACK&&(Le[0]=t.BACK,ze=!0);ze&&(n.isWebGL2?t.drawBuffers(Le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Le))}function be(V){return m!==V?(t.useProgram(V),m=V,!0):!1}const te={[zr]:t.FUNC_ADD,[xM]:t.FUNC_SUBTRACT,[SM]:t.FUNC_REVERSE_SUBTRACT};if(i)te[Um]=t.MIN,te[Om]=t.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(te[Um]=V.MIN_EXT,te[Om]=V.MAX_EXT)}const ce={[EM]:t.ZERO,[MM]:t.ONE,[TM]:t.SRC_COLOR,[Uh]:t.SRC_ALPHA,[PM]:t.SRC_ALPHA_SATURATE,[CM]:t.DST_COLOR,[AM]:t.DST_ALPHA,[wM]:t.ONE_MINUS_SRC_COLOR,[Oh]:t.ONE_MINUS_SRC_ALPHA,[RM]:t.ONE_MINUS_DST_COLOR,[bM]:t.ONE_MINUS_DST_ALPHA,[IM]:t.CONSTANT_COLOR,[LM]:t.ONE_MINUS_CONSTANT_COLOR,[NM]:t.CONSTANT_ALPHA,[DM]:t.ONE_MINUS_CONSTANT_ALPHA};function G(V,Te,Le,ze,Fe,Ge,We,ut,ht,et){if(V===mr){u===!0&&($(t.BLEND),u=!1);return}if(u===!1&&(fe(t.BLEND),u=!0),V!==yM){if(V!==_||et!==Q){if((p!==zr||w!==zr)&&(t.blendEquation(t.FUNC_ADD),p=zr,w=zr),et)switch(V){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ra:t.blendFunc(t.ONE,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ra:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,C=null,T=null,z=null,M.set(0,0,0),A=0,_=V,Q=et}return}Fe=Fe||Te,Ge=Ge||Le,We=We||ze,(Te!==p||Fe!==w)&&(t.blendEquationSeparate(te[Te],te[Fe]),p=Te,w=Fe),(Le!==S||ze!==C||Ge!==T||We!==z)&&(t.blendFuncSeparate(ce[Le],ce[ze],ce[Ge],ce[We]),S=Le,C=ze,T=Ge,z=We),(ut.equals(M)===!1||ht!==A)&&(t.blendColor(ut.r,ut.g,ut.b,ht),M.copy(ut),A=ht),_=V,Q=!1}function K(V,Te){V.side===In?$(t.CULL_FACE):fe(t.CULL_FACE);let Le=V.side===qt;Te&&(Le=!Le),N(Le),V.blending===to&&V.transparent===!1?G(mr):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const ze=V.stencilWrite;c.setTest(ze),ze&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),F(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):$(t.SAMPLE_ALPHA_TO_COVERAGE)}function N(V){X!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),X=V)}function v(V){V!==gM?(fe(t.CULL_FACE),V!==de&&(V===Lm?t.cullFace(t.BACK):V===vM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$(t.CULL_FACE),de=V}function E(V){V!==H&&(L&&t.lineWidth(V),H=V)}function F(V,Te,Le){V?(fe(t.POLYGON_OFFSET_FILL),(J!==Te||ee!==Le)&&(t.polygonOffset(Te,Le),J=Te,ee=Le)):$(t.POLYGON_OFFSET_FILL)}function re(V){V?fe(t.SCISSOR_TEST):$(t.SCISSOR_TEST)}function O(V){V===void 0&&(V=t.TEXTURE0+ne-1),he!==V&&(t.activeTexture(V),he=V)}function Y(V,Te,Le){Le===void 0&&(he===null?Le=t.TEXTURE0+ne-1:Le=he);let ze=pe[Le];ze===void 0&&(ze={type:void 0,texture:void 0},pe[Le]=ze),(ze.type!==V||ze.texture!==Te)&&(he!==Le&&(t.activeTexture(Le),he=Le),t.bindTexture(V,Te||ie[V]),ze.type=V,ze.texture=Te)}function me(){const V=pe[he];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function D(V){U.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),U.copy(V))}function _e(V){R.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),R.copy(V))}function Ne(V,Te){let Le=h.get(Te);Le===void 0&&(Le=new WeakMap,h.set(Te,Le));let ze=Le.get(V);ze===void 0&&(ze=t.getUniformBlockIndex(Te,V.name),Le.set(V,ze))}function Ie(V,Te){const ze=h.get(Te).get(V);d.get(Te)!==ze&&(t.uniformBlockBinding(Te,ze,V.__bindingPointIndex),d.set(Te,ze))}function xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},he=null,pe={},g={},y=new WeakMap,x=[],m=null,u=!1,_=null,p=null,S=null,C=null,w=null,T=null,z=null,M=new tt(0,0,0),A=0,Q=!1,X=null,de=null,H=null,J=null,ee=null,U.set(0,0,t.canvas.width,t.canvas.height),R.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:$,bindFramebuffer:ve,drawBuffers:B,useProgram:be,setBlending:G,setMaterial:K,setFlipSided:N,setCullFace:v,setLineWidth:E,setPolygonOffset:F,setScissorTest:re,activeTexture:O,bindTexture:Y,unbindTexture:me,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:we,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:De,compressedTexSubImage2D:ue,compressedTexSubImage3D:He,scissor:D,viewport:_e,reset:xe}}function mC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(v,E){return g?new OffscreenCanvas(v,E):Fc("canvas")}function x(v,E,F,re){let O=1;if((v.width>re||v.height>re)&&(O=re/Math.max(v.width,v.height)),O<1||E===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const Y=E?Gh:Math.floor,me=Y(O*v.width),ge=Y(O*v.height);h===void 0&&(h=y(me,ge));const Me=F?y(me,ge):h;return Me.width=me,Me.height=ge,Me.getContext("2d").drawImage(v,0,0,me,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+me+"x"+ge+")."),Me}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function m(v){return hg(v.width)&&hg(v.height)}function u(v){return a?!1:v.wrapS!==jn||v.wrapT!==jn||v.minFilter!==en&&v.minFilter!==Rn}function _(v,E){return v.generateMipmaps&&E&&v.minFilter!==en&&v.minFilter!==Rn}function p(v){t.generateMipmap(v)}function S(v,E,F,re,O=!1){if(a===!1)return E;if(v!==null){if(t[v]!==void 0)return t[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let Y=E;if(E===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8)),E===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),E===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8)),E===t.RGBA){const me=O?Dc:rt.getTransfer(re);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=me===lt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(v,E,F){return _(v,F)===!0||v.isFramebufferTexture&&v.minFilter!==en&&v.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?E.mipmaps.length:1}function w(v){return v===en||v===km||v===Ju?t.NEAREST:t.LINEAR}function T(v){const E=v.target;E.removeEventListener("dispose",T),M(E),E.isVideoTexture&&d.delete(E)}function z(v){const E=v.target;E.removeEventListener("dispose",z),Q(E)}function M(v){const E=i.get(v);if(E.__webglInit===void 0)return;const F=v.source,re=f.get(F);if(re){const O=re[E.__cacheKey];O.usedTimes--,O.usedTimes===0&&A(v),Object.keys(re).length===0&&f.delete(F)}i.remove(v)}function A(v){const E=i.get(v);t.deleteTexture(E.__webglTexture);const F=v.source,re=f.get(F);delete re[E.__cacheKey],o.memory.textures--}function Q(v){const E=v.texture,F=i.get(v),re=i.get(E);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(F.__webglFramebuffer[O]))for(let Y=0;Y<F.__webglFramebuffer[O].length;Y++)t.deleteFramebuffer(F.__webglFramebuffer[O][Y]);else t.deleteFramebuffer(F.__webglFramebuffer[O]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[O])}else{if(Array.isArray(F.__webglFramebuffer))for(let O=0;O<F.__webglFramebuffer.length;O++)t.deleteFramebuffer(F.__webglFramebuffer[O]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let O=0;O<F.__webglColorRenderbuffer.length;O++)F.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[O]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let O=0,Y=E.length;O<Y;O++){const me=i.get(E[O]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(E[O])}i.remove(E),i.remove(v)}let X=0;function de(){X=0}function H(){const v=X;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),X+=1,v}function J(v){const E=[];return E.push(v.wrapS),E.push(v.wrapT),E.push(v.wrapR||0),E.push(v.magFilter),E.push(v.minFilter),E.push(v.anisotropy),E.push(v.internalFormat),E.push(v.format),E.push(v.type),E.push(v.generateMipmaps),E.push(v.premultiplyAlpha),E.push(v.flipY),E.push(v.unpackAlignment),E.push(v.colorSpace),E.join()}function ee(v,E){const F=i.get(v);if(v.isVideoTexture&&K(v),v.isRenderTargetTexture===!1&&v.version>0&&F.__version!==v.version){const re=v.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(F,v,E);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+E)}function ne(v,E){const F=i.get(v);if(v.version>0&&F.__version!==v.version){U(F,v,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+E)}function L(v,E){const F=i.get(v);if(v.version>0&&F.__version!==v.version){U(F,v,E);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+E)}function W(v,E){const F=i.get(v);if(v.version>0&&F.__version!==v.version){R(F,v,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+E)}const q={[Bh]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},he={[en]:t.NEAREST,[km]:t.NEAREST_MIPMAP_NEAREST,[Ju]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[KM]:t.LINEAR_MIPMAP_NEAREST,[Ca]:t.LINEAR_MIPMAP_LINEAR},pe={[lT]:t.NEVER,[pT]:t.ALWAYS,[cT]:t.LESS,[vy]:t.LEQUAL,[uT]:t.EQUAL,[fT]:t.GEQUAL,[dT]:t.GREATER,[hT]:t.NOTEQUAL};function se(v,E,F){if(F?(t.texParameteri(v,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(v,t.TEXTURE_WRAP_T,q[E.wrapT]),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(v,t.TEXTURE_MAG_FILTER,he[E.magFilter]),t.texParameteri(v,t.TEXTURE_MIN_FILTER,he[E.minFilter])):(t.texParameteri(v,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(v,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==jn||E.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(v,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(v,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==en&&E.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(v,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(v,t.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===en||E.minFilter!==Ju&&E.minFilter!==Ca||E.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ra&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(v,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function k(v,E){let F=!1;v.__webglInit===void 0&&(v.__webglInit=!0,E.addEventListener("dispose",T));const re=E.source;let O=f.get(re);O===void 0&&(O={},f.set(re,O));const Y=J(E);if(Y!==v.__cacheKey){O[Y]===void 0&&(O[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),O[Y].usedTimes++;const me=O[v.__cacheKey];me!==void 0&&(O[v.__cacheKey].usedTimes--,me.usedTimes===0&&A(E)),v.__cacheKey=Y,v.__webglTexture=O[Y].texture}return F}function U(v,E,F){let re=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=t.TEXTURE_3D);const O=k(v,E),Y=E.source;n.bindTexture(re,v.__webglTexture,t.TEXTURE0+F);const me=i.get(Y);if(Y.version!==me.__version||O===!0){n.activeTexture(t.TEXTURE0+F);const ge=rt.getPrimaries(rt.workingColorSpace),Me=E.colorSpace===Ln?null:rt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Ln||ge===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const De=u(E)&&m(E.image)===!1;let ue=x(E.image,De,!1,r.maxTextureSize);ue=N(E,ue);const He=m(ue)||a,Re=s.convert(E.format,E.colorSpace);let Oe=s.convert(E.type),we=S(E.internalFormat,Re,Oe,E.colorSpace,E.isVideoTexture);se(re,E,He);let Ae;const D=E.mipmaps,_e=a&&E.isVideoTexture!==!0&&we!==py,Ne=me.__version===void 0||O===!0,Ie=C(E,ue,He);if(E.isDepthTexture)we=t.DEPTH_COMPONENT,a?E.type===or?we=t.DEPTH_COMPONENT32F:E.type===sr?we=t.DEPTH_COMPONENT24:E.type===qr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:E.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Yr&&we===t.DEPTH_COMPONENT&&E.type!==Zf&&E.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sr,Oe=s.convert(E.type)),E.format===vo&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,E.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=qr,Oe=s.convert(E.type))),Ne&&(_e?n.texStorage2D(t.TEXTURE_2D,1,we,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,we,ue.width,ue.height,0,Re,Oe,null));else if(E.isDataTexture)if(D.length>0&&He){_e&&Ne&&n.texStorage2D(t.TEXTURE_2D,Ie,we,D[0].width,D[0].height);for(let xe=0,V=D.length;xe<V;xe++)Ae=D[xe],_e?n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Re,Oe,Ae.data):n.texImage2D(t.TEXTURE_2D,xe,we,Ae.width,Ae.height,0,Re,Oe,Ae.data);E.generateMipmaps=!1}else _e?(Ne&&n.texStorage2D(t.TEXTURE_2D,Ie,we,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Re,Oe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,we,ue.width,ue.height,0,Re,Oe,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){_e&&Ne&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,we,D[0].width,D[0].height,ue.depth);for(let xe=0,V=D.length;xe<V;xe++)Ae=D[xe],E.format!==Xn?Re!==null?_e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ue.depth,Re,Ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,xe,we,Ae.width,Ae.height,ue.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ue.depth,Re,Oe,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,xe,we,Ae.width,Ae.height,ue.depth,0,Re,Oe,Ae.data)}else{_e&&Ne&&n.texStorage2D(t.TEXTURE_2D,Ie,we,D[0].width,D[0].height);for(let xe=0,V=D.length;xe<V;xe++)Ae=D[xe],E.format!==Xn?Re!==null?_e?n.compressedTexSubImage2D(t.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,xe,we,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Re,Oe,Ae.data):n.texImage2D(t.TEXTURE_2D,xe,we,Ae.width,Ae.height,0,Re,Oe,Ae.data)}else if(E.isDataArrayTexture)_e?(Ne&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,we,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Oe,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ue.width,ue.height,ue.depth,0,Re,Oe,ue.data);else if(E.isData3DTexture)_e?(Ne&&n.texStorage3D(t.TEXTURE_3D,Ie,we,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Oe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,we,ue.width,ue.height,ue.depth,0,Re,Oe,ue.data);else if(E.isFramebufferTexture){if(Ne)if(_e)n.texStorage2D(t.TEXTURE_2D,Ie,we,ue.width,ue.height);else{let xe=ue.width,V=ue.height;for(let Te=0;Te<Ie;Te++)n.texImage2D(t.TEXTURE_2D,Te,we,xe,V,0,Re,Oe,null),xe>>=1,V>>=1}}else if(D.length>0&&He){_e&&Ne&&n.texStorage2D(t.TEXTURE_2D,Ie,we,D[0].width,D[0].height);for(let xe=0,V=D.length;xe<V;xe++)Ae=D[xe],_e?n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Re,Oe,Ae):n.texImage2D(t.TEXTURE_2D,xe,we,Re,Oe,Ae);E.generateMipmaps=!1}else _e?(Ne&&n.texStorage2D(t.TEXTURE_2D,Ie,we,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Oe,ue)):n.texImage2D(t.TEXTURE_2D,0,we,Re,Oe,ue);_(E,He)&&p(re),me.__version=Y.version,E.onUpdate&&E.onUpdate(E)}v.__version=E.version}function R(v,E,F){if(E.image.length!==6)return;const re=k(v,E),O=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,v.__webglTexture,t.TEXTURE0+F);const Y=i.get(O);if(O.version!==Y.__version||re===!0){n.activeTexture(t.TEXTURE0+F);const me=rt.getPrimaries(rt.workingColorSpace),ge=E.colorSpace===Ln?null:rt.getPrimaries(E.colorSpace),Me=E.colorSpace===Ln||me===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,De=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let xe=0;xe<6;xe++)!Ce&&!De?ue[xe]=x(E.image[xe],!1,!0,r.maxCubemapSize):ue[xe]=De?E.image[xe].image:E.image[xe],ue[xe]=N(E,ue[xe]);const He=ue[0],Re=m(He)||a,Oe=s.convert(E.format,E.colorSpace),we=s.convert(E.type),Ae=S(E.internalFormat,Oe,we,E.colorSpace),D=a&&E.isVideoTexture!==!0,_e=Y.__version===void 0||re===!0;let Ne=C(E,He,Re);se(t.TEXTURE_CUBE_MAP,E,Re);let Ie;if(Ce){D&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,Ae,He.width,He.height);for(let xe=0;xe<6;xe++){Ie=ue[xe].mipmaps;for(let V=0;V<Ie.length;V++){const Te=Ie[V];E.format!==Xn?Oe!==null?D?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V,0,0,Te.width,Te.height,Oe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V,Ae,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V,0,0,Te.width,Te.height,Oe,we,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V,Ae,Te.width,Te.height,0,Oe,we,Te.data)}}}else{Ie=E.mipmaps,D&&_e&&(Ie.length>0&&Ne++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,Ae,ue[0].width,ue[0].height));for(let xe=0;xe<6;xe++)if(De){D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ue[xe].width,ue[xe].height,Oe,we,ue[xe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ae,ue[xe].width,ue[xe].height,0,Oe,we,ue[xe].data);for(let V=0;V<Ie.length;V++){const Le=Ie[V].image[xe].image;D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V+1,0,0,Le.width,Le.height,Oe,we,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V+1,Ae,Le.width,Le.height,0,Oe,we,Le.data)}}else{D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe,we,ue[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ae,Oe,we,ue[xe]);for(let V=0;V<Ie.length;V++){const Te=Ie[V];D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V+1,0,0,Oe,we,Te.image[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,V+1,Ae,Oe,we,Te.image[xe])}}}_(E,Re)&&p(t.TEXTURE_CUBE_MAP),Y.__version=O.version,E.onUpdate&&E.onUpdate(E)}v.__version=E.version}function b(v,E,F,re,O,Y){const me=s.convert(F.format,F.colorSpace),ge=s.convert(F.type),Me=S(F.internalFormat,me,ge,F.colorSpace);if(!i.get(E).__hasExternalTextures){const De=Math.max(1,E.width>>Y),ue=Math.max(1,E.height>>Y);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,Y,Me,De,ue,E.depth,0,me,ge,null):n.texImage2D(O,Y,Me,De,ue,0,me,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,v),G(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,O,i.get(F).__webglTexture,0,ce(E)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,O,i.get(F).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(v,E,F){if(t.bindRenderbuffer(t.RENDERBUFFER,v),E.depthBuffer&&!E.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||G(E)){const O=E.depthTexture;O&&O.isDepthTexture&&(O.type===or?re=t.DEPTH_COMPONENT32F:O.type===sr&&(re=t.DEPTH_COMPONENT24));const Y=ce(E);G(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,re,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,re,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,v)}else if(E.depthBuffer&&E.stencilBuffer){const re=ce(E);F&&G(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,E.width,E.height):G(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,v)}else{const re=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let O=0;O<re.length;O++){const Y=re[O],me=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),Me=S(Y.internalFormat,me,ge,Y.colorSpace),Ce=ce(E);F&&G(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Me,E.width,E.height):G(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(v,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,v),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee(E.depthTexture,0);const re=i.get(E.depthTexture).__webglTexture,O=ce(E);if(E.depthTexture.format===Yr)G(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===vo)G(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $(v){const E=i.get(v),F=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,v)}else if(F){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=t.createRenderbuffer(),ie(E.__webglDepthbuffer[re],v,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ie(E.__webglDepthbuffer,v,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(v,E,F){const re=i.get(v);E!==void 0&&b(re.__webglFramebuffer,v,v.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&$(v)}function B(v){const E=v.texture,F=i.get(v),re=i.get(E);v.addEventListener("dispose",z),v.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=E.version,o.memory.textures++);const O=v.isWebGLCubeRenderTarget===!0,Y=v.isWebGLMultipleRenderTargets===!0,me=m(v)||a;if(O){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let Me=0;Me<E.mipmaps.length;Me++)F.__webglFramebuffer[ge][Me]=t.createFramebuffer()}else F.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)F.__webglFramebuffer[ge]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Y)if(r.drawBuffers){const ge=v.texture;for(let Me=0,Ce=ge.length;Me<Ce;Me++){const De=i.get(ge[Me]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&v.samples>0&&G(v)===!1){const ge=Y?E:[E];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){const Ce=ge[Me];F.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[Me]);const De=s.convert(Ce.format,Ce.colorSpace),ue=s.convert(Ce.type),He=S(Ce.internalFormat,De,ue,Ce.colorSpace,v.isXRRenderTarget===!0),Re=ce(v);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,He,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,F.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),v.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(F.__webglDepthRenderbuffer,v,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(O){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),se(t.TEXTURE_CUBE_MAP,E,me);for(let ge=0;ge<6;ge++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)b(F.__webglFramebuffer[ge][Me],v,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else b(F.__webglFramebuffer[ge],v,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(E,me)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Y){const ge=v.texture;for(let Me=0,Ce=ge.length;Me<Ce;Me++){const De=ge[Me],ue=i.get(De);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),se(t.TEXTURE_2D,De,me),b(F.__webglFramebuffer,v,De,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),_(De,me)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(a?ge=v.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,re.__webglTexture),se(ge,E,me),a&&E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)b(F.__webglFramebuffer[Me],v,E,t.COLOR_ATTACHMENT0,ge,Me);else b(F.__webglFramebuffer,v,E,t.COLOR_ATTACHMENT0,ge,0);_(E,me)&&p(ge),n.unbindTexture()}v.depthBuffer&&$(v)}function be(v){const E=m(v)||a,F=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let re=0,O=F.length;re<O;re++){const Y=F[re];if(_(Y,E)){const me=v.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(Y).__webglTexture;n.bindTexture(me,ge),p(me),n.unbindTexture()}}}function te(v){if(a&&v.samples>0&&G(v)===!1){const E=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],F=v.width,re=v.height;let O=t.COLOR_BUFFER_BIT;const Y=[],me=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(v),Me=v.isWebGLMultipleRenderTargets===!0;if(Me)for(let Ce=0;Ce<E.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){Y.push(t.COLOR_ATTACHMENT0+Ce),v.depthBuffer&&Y.push(me);const De=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(De===!1&&(v.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),v.stencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),Me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),Me){const ue=i.get(E[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,F,re,0,0,F,re,O,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Y)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Ce=0;Ce<E.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const De=i.get(E[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ce(v){return Math.min(r.maxSamples,v.samples)}function G(v){const E=i.get(v);return a&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(v){const E=o.render.frame;d.get(v)!==E&&(d.set(v,E),v.update())}function N(v,E){const F=v.colorSpace,re=v.format,O=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===Hh||F!==Ui&&F!==Ln&&(rt.getTransfer(F)===lt?a===!1?e.has("EXT_sRGB")===!0&&re===Xn?(v.format=Hh,v.minFilter=Rn,v.generateMipmaps=!1):E=yy.sRGBToLinear(E):(re!==Xn||O!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=H,this.resetTextureUnits=de,this.setTexture2D=ee,this.setTexture2DArray=ne,this.setTexture3D=L,this.setTextureCube=W,this.rebindTextures=ve,this.setupRenderTarget=B,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=b,this.useMultisampledRTT=G}function gC(t,e,n){const i=n.isWebGL2;function r(s,o=Ln){let a;const l=rt.getTransfer(o);if(s===vr)return t.UNSIGNED_BYTE;if(s===cy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===uy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===JM)return t.BYTE;if(s===ZM)return t.SHORT;if(s===Zf)return t.UNSIGNED_SHORT;if(s===ly)return t.INT;if(s===sr)return t.UNSIGNED_INT;if(s===or)return t.FLOAT;if(s===Ra)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===QM)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===eT)return t.LUMINANCE;if(s===tT)return t.LUMINANCE_ALPHA;if(s===Yr)return t.DEPTH_COMPONENT;if(s===vo)return t.DEPTH_STENCIL;if(s===Hh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nT)return t.RED;if(s===dy)return t.RED_INTEGER;if(s===iT)return t.RG;if(s===hy)return t.RG_INTEGER;if(s===fy)return t.RGBA_INTEGER;if(s===Zu||s===Qu||s===ed||s===td)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fm||s===Bm||s===zm||s===Hm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===py)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vm||s===Gm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vm)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wm||s===jm||s===Xm||s===$m||s===qm||s===Ym||s===Km||s===Jm||s===Zm||s===Qm||s===eg||s===tg||s===ng||s===ig)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$m)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ym)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Km)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tg)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ng)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ig)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nd||s===rg||s===sg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nd)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rT||s===og||s===ag||s===lg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===og)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ag)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class vC extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _C={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_C)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yC extends us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,y=null;const x=n.getContextAttributes();let m=null,u=null;const _=[],p=[],S=new Se;let C=null;const w=new Pn;w.layers.enable(1),w.viewport=new Ot;const T=new Pn;T.layers.enable(2),T.viewport=new Ot;const z=[w,T],M=new vC;M.layers.enable(1),M.layers.enable(2);let A=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let k=_[se];return k===void 0&&(k=new Ad,_[se]=k),k.getTargetRaySpace()},this.getControllerGrip=function(se){let k=_[se];return k===void 0&&(k=new Ad,_[se]=k),k.getGripSpace()},this.getHand=function(se){let k=_[se];return k===void 0&&(k=new Ad,_[se]=k),k.getHandSpace()};function X(se){const k=p.indexOf(se.inputSource);if(k===-1)return;const U=_[k];U!==void 0&&(U.update(se.inputSource,se.frame,c||o),U.dispatchEvent({type:se.type,data:se.inputSource}))}function de(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",H);for(let se=0;se<_.length;se++){const k=p[se];k!==null&&(p[se]=null,_[se].disconnect(k))}A=null,Q=null,e.setRenderTarget(m),g=null,f=null,h=null,r=null,u=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",de),r.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new is(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let k=null,U=null,R=null;x.depth&&(R=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,k=x.stencil?vo:Yr,U=x.stencil?qr:sr);const b={colorFormat:n.RGBA8,depthFormat:R,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(b),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new is(f.textureWidth,f.textureHeight,{format:Xn,type:vr,depthTexture:new Ly(f.textureWidth,f.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ie=e.properties.get(u);ie.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(se){for(let k=0;k<se.removed.length;k++){const U=se.removed[k],R=p.indexOf(U);R>=0&&(p[R]=null,_[R].disconnect(U))}for(let k=0;k<se.added.length;k++){const U=se.added[k];let R=p.indexOf(U);if(R===-1){for(let ie=0;ie<_.length;ie++)if(ie>=p.length){p.push(U),R=ie;break}else if(p[ie]===null){p[ie]=U,R=ie;break}if(R===-1)break}const b=_[R];b&&b.connect(U)}}const J=new j,ee=new j;function ne(se,k,U){J.setFromMatrixPosition(k.matrixWorld),ee.setFromMatrixPosition(U.matrixWorld);const R=J.distanceTo(ee),b=k.projectionMatrix.elements,ie=U.projectionMatrix.elements,fe=b[14]/(b[10]-1),$=b[14]/(b[10]+1),ve=(b[9]+1)/b[5],B=(b[9]-1)/b[5],be=(b[8]-1)/b[0],te=(ie[8]+1)/ie[0],ce=fe*be,G=fe*te,K=R/(-be+te),N=K*-be;k.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(N),se.translateZ(K),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const v=fe+K,E=$+K,F=ce-N,re=G+(R-N),O=ve*$/E*v,Y=B*$/E*v;se.projectionMatrix.makePerspective(F,re,O,Y,v,E),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function L(se,k){k===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(k.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;M.near=T.near=w.near=se.near,M.far=T.far=w.far=se.far,(A!==M.near||Q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,Q=M.far);const k=se.parent,U=M.cameras;L(M,k);for(let R=0;R<U.length;R++)L(U[R],k);U.length===2?ne(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),W(se,M,k)};function W(se,k,U){U===null?se.matrix.copy(k.matrixWorld):(se.matrix.copy(U.matrixWorld),se.matrix.invert(),se.matrix.multiply(k.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(k.projectionMatrix),se.projectionMatrixInverse.copy(k.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Vh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=se)};let q=null;function he(se,k){if(d=k.getViewerPose(c||o),y=k,d!==null){const U=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let R=!1;U.length!==M.cameras.length&&(M.cameras.length=0,R=!0);for(let b=0;b<U.length;b++){const ie=U[b];let fe=null;if(g!==null)fe=g.getViewport(ie);else{const ve=h.getViewSubImage(f,ie);fe=ve.viewport,b===0&&(e.setRenderTargetTextures(u,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(u))}let $=z[b];$===void 0&&($=new Pn,$.layers.enable(b),$.viewport=new Ot,z[b]=$),$.matrix.fromArray(ie.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ie.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(fe.x,fe.y,fe.width,fe.height),b===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),R===!0&&M.cameras.push($)}}for(let U=0;U<_.length;U++){const R=p[U],b=_[U];R!==null&&b!==void 0&&b.update(R,k,c||o)}q&&q(se,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),y=null}const pe=new Py;pe.setAnimationLoop(he),this.setAnimationLoop=function(se){q=se},this.dispose=function(){}}}function xC(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,by(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,p,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,p):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,p){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=p*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,p){const S=p.program;i.uniformBlockBinding(_,S)}function c(_,p){let S=r[_.id];S===void 0&&(y(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",m));const C=p.program;i.updateUBOMapping(_,C);const w=e.render.frame;s[_.id]!==w&&(f(_),s[_.id]=w)}function d(_){const p=h();_.__bindingPointIndex=p;const S=t.createBuffer(),C=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const p=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let w=0,T=S.length;w<T;w++){const z=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,A=z.length;M<A;M++){const Q=z[M];if(g(Q,w,M,C)===!0){const X=Q.__offset,de=Array.isArray(Q.value)?Q.value:[Q.value];let H=0;for(let J=0;J<de.length;J++){const ee=de[J],ne=x(ee);typeof ee=="number"||typeof ee=="boolean"?(Q.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,X+H,Q.__data)):ee.isMatrix3?(Q.__data[0]=ee.elements[0],Q.__data[1]=ee.elements[1],Q.__data[2]=ee.elements[2],Q.__data[3]=0,Q.__data[4]=ee.elements[3],Q.__data[5]=ee.elements[4],Q.__data[6]=ee.elements[5],Q.__data[7]=0,Q.__data[8]=ee.elements[6],Q.__data[9]=ee.elements[7],Q.__data[10]=ee.elements[8],Q.__data[11]=0):(ee.toArray(Q.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,Q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,p,S,C){const w=_.value,T=p+"_"+S;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const z=C[T];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return C[T]=w,!0}else if(z.equals(w)===!1)return z.copy(w),!0}return!1}function y(_){const p=_.uniforms;let S=0;const C=16;for(let T=0,z=p.length;T<z;T++){const M=Array.isArray(p[T])?p[T]:[p[T]];for(let A=0,Q=M.length;A<Q;A++){const X=M[A],de=Array.isArray(X.value)?X.value:[X.value];for(let H=0,J=de.length;H<J;H++){const ee=de[H],ne=x(ee),L=S%C;L!==0&&C-L<ne.boundary&&(S+=C-L),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=ne.storage}}}const w=S%C;return w>0&&(S+=C-w),_.__size=S,_.__cache={},this}function x(_){const p={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(p.boundary=4,p.storage=4):_.isVector2?(p.boundary=8,p.storage=8):_.isVector3||_.isColor?(p.boundary=16,p.storage=12):_.isVector4?(p.boundary=16,p.storage=16):_.isMatrix3?(p.boundary=48,p.storage=48):_.isMatrix4?(p.boundary=64,p.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),p}function m(_){const p=_.target;p.removeEventListener("dispose",m);const S=o.indexOf(p.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Fy{constructor(e={}){const{canvas:n=vT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;const p=this;let S=!1,C=0,w=0,T=null,z=-1,M=null;const A=new Ot,Q=new Ot;let X=null;const de=new tt(0);let H=0,J=n.width,ee=n.height,ne=1,L=null,W=null;const q=new Ot(0,0,J,ee),he=new Ot(0,0,J,ee);let pe=!1;const se=new tp;let k=!1,U=!1,R=null;const b=new bt,ie=new Se,fe=new j,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return T===null?ne:1}let B=i;function be(P,Z){for(let ae=0;ae<P.length;ae++){const le=P[ae],oe=n.getContext(le,Z);if(oe!==null)return oe}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",Te,!1),B===null){const Z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&Z.shift(),B=be(Z,P),B===null)throw be(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let te,ce,G,K,N,v,E,F,re,O,Y,me,ge,Me,Ce,De,ue,He,Re,Oe,we,Ae,D,_e;function Ne(){te=new IA(B),ce=new wA(B,te,e),te.init(ce),Ae=new gC(B,te,ce),G=new pC(B,te,ce),K=new DA(B),N=new eC,v=new mC(B,te,G,N,ce,Ae,K),E=new bA(p),F=new PA(p),re=new VT(B,ce),D=new MA(B,te,re,ce),O=new LA(B,re,K,D),Y=new FA(B,O,re,K),Re=new kA(B,ce,v),De=new AA(N),me=new Qb(p,E,F,te,ce,D,De),ge=new xC(p,N),Me=new nC,Ce=new lC(te,ce),He=new EA(p,E,F,G,Y,f,l),ue=new fC(p,Y,ce),_e=new SC(B,K,ce,G),Oe=new TA(B,te,K,ce),we=new NA(B,te,K,ce),K.programs=me.programs,p.capabilities=ce,p.extensions=te,p.properties=N,p.renderLists=Me,p.shadowMap=ue,p.state=G,p.info=K}Ne();const Ie=new yC(p,B);this.xr=Ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(P){P!==void 0&&(ne=P,this.setSize(J,ee,!1))},this.getSize=function(P){return P.set(J,ee)},this.setSize=function(P,Z,ae=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=P,ee=Z,n.width=Math.floor(P*ne),n.height=Math.floor(Z*ne),ae===!0&&(n.style.width=P+"px",n.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(J*ne,ee*ne).floor()},this.setDrawingBufferSize=function(P,Z,ae){J=P,ee=Z,ne=ae,n.width=Math.floor(P*ae),n.height=Math.floor(Z*ae),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(q)},this.setViewport=function(P,Z,ae,le){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,Z,ae,le),G.viewport(A.copy(q).multiplyScalar(ne).floor())},this.getScissor=function(P){return P.copy(he)},this.setScissor=function(P,Z,ae,le){P.isVector4?he.set(P.x,P.y,P.z,P.w):he.set(P,Z,ae,le),G.scissor(Q.copy(he).multiplyScalar(ne).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(P){G.setScissorTest(pe=P)},this.setOpaqueSort=function(P){L=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(P=!0,Z=!0,ae=!0){let le=0;if(P){let oe=!1;if(T!==null){const Ue=T.texture.format;oe=Ue===fy||Ue===hy||Ue===dy}if(oe){const Ue=T.texture.type,Be=Ue===vr||Ue===sr||Ue===Zf||Ue===qr||Ue===cy||Ue===uy,Ve=He.getClearColor(),Xe=He.getClearAlpha(),Je=Ve.r,qe=Ve.g,Ye=Ve.b;Be?(g[0]=Je,g[1]=qe,g[2]=Ye,g[3]=Xe,B.clearBufferuiv(B.COLOR,0,g)):(y[0]=Je,y[1]=qe,y[2]=Ye,y[3]=Xe,B.clearBufferiv(B.COLOR,0,y))}else le|=B.COLOR_BUFFER_BIT}Z&&(le|=B.DEPTH_BUFFER_BIT),ae&&(le|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Me.dispose(),Ce.dispose(),N.dispose(),E.dispose(),F.dispose(),Y.dispose(),D.dispose(),_e.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",ht),Ie.removeEventListener("sessionend",et),R&&(R.dispose(),R=null),ft.stop()};function xe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=K.autoReset,Z=ue.enabled,ae=ue.autoUpdate,le=ue.needsUpdate,oe=ue.type;Ne(),K.autoReset=P,ue.enabled=Z,ue.autoUpdate=ae,ue.needsUpdate=le,ue.type=oe}function Te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Le(P){const Z=P.target;Z.removeEventListener("dispose",Le),ze(Z)}function ze(P){Fe(P),N.remove(P)}function Fe(P){const Z=N.get(P).programs;Z!==void 0&&(Z.forEach(function(ae){me.releaseProgram(ae)}),P.isShaderMaterial&&me.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,ae,le,oe,Ue){Z===null&&(Z=$);const Be=oe.isMesh&&oe.matrixWorld.determinant()<0,Ve=yt(P,Z,ae,le,oe);G.setMaterial(le,Be);let Xe=ae.index,Je=1;if(le.wireframe===!0){if(Xe=O.getWireframeAttribute(ae),Xe===void 0)return;Je=2}const qe=ae.drawRange,Ye=ae.attributes.position;let Et=qe.start*Je,gn=(qe.start+qe.count)*Je;Ue!==null&&(Et=Math.max(Et,Ue.start*Je),gn=Math.min(gn,(Ue.start+Ue.count)*Je)),Xe!==null?(Et=Math.max(Et,0),gn=Math.min(gn,Xe.count)):Ye!=null&&(Et=Math.max(Et,0),gn=Math.min(gn,Ye.count));const Lt=gn-Et;if(Lt<0||Lt===1/0)return;D.setup(oe,le,Ve,ae,Xe);let hi,pt=Oe;if(Xe!==null&&(hi=re.get(Xe),pt=we,pt.setIndex(hi)),oe.isMesh)le.wireframe===!0?(G.setLineWidth(le.wireframeLinewidth*ve()),pt.setMode(B.LINES)):pt.setMode(B.TRIANGLES);else if(oe.isLine){let Ze=le.linewidth;Ze===void 0&&(Ze=1),G.setLineWidth(Ze*ve()),oe.isLineSegments?pt.setMode(B.LINES):oe.isLineLoop?pt.setMode(B.LINE_LOOP):pt.setMode(B.LINE_STRIP)}else oe.isPoints?pt.setMode(B.POINTS):oe.isSprite&&pt.setMode(B.TRIANGLES);if(oe.isBatchedMesh)pt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)pt.renderInstances(Et,Lt,oe.count);else if(ae.isInstancedBufferGeometry){const Ze=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Su=Math.min(ae.instanceCount,Ze);pt.renderInstances(Et,Lt,Su)}else pt.render(Et,Lt)};function Ge(P,Z,ae){P.transparent===!0&&P.side===In&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,Zn(P,Z,ae),P.side=Mr,P.needsUpdate=!0,Zn(P,Z,ae),P.side=In):Zn(P,Z,ae)}this.compile=function(P,Z,ae=null){ae===null&&(ae=P),m=Ce.get(ae),m.init(),_.push(m),ae.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),P!==ae&&P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),m.setupLights(p._useLegacyLights);const le=new Set;return P.traverse(function(oe){const Ue=oe.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Ve=Ue[Be];Ge(Ve,ae,oe),le.add(Ve)}else Ge(Ue,ae,oe),le.add(Ue)}),_.pop(),m=null,le},this.compileAsync=function(P,Z,ae=null){const le=this.compile(P,Z,ae);return new Promise(oe=>{function Ue(){if(le.forEach(function(Be){N.get(Be).currentProgram.isReady()&&le.delete(Be)}),le.size===0){oe(P);return}setTimeout(Ue,10)}te.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let We=null;function ut(P){We&&We(P)}function ht(){ft.stop()}function et(){ft.start()}const ft=new Py;ft.setAnimationLoop(ut),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(P){We=P,Ie.setAnimationLoop(P),P===null?ft.stop():ft.start()},Ie.addEventListener("sessionstart",ht),Ie.addEventListener("sessionend",et),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(Z),Z=Ie.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,Z,T),m=Ce.get(P,_.length),m.init(),_.push(m),b.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),se.setFromProjectionMatrix(b),U=this.localClippingEnabled,k=De.init(this.clippingPlanes,U),x=Me.get(P,u.length),x.init(),u.push(x),Tt(P,Z,0,p.sortObjects),x.finish(),p.sortObjects===!0&&x.sort(L,W),this.info.render.frame++,k===!0&&De.beginShadows();const ae=m.state.shadowsArray;if(ue.render(ae,P,Z),k===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(x,P),m.setupLights(p._useLegacyLights),Z.isArrayCamera){const le=Z.cameras;for(let oe=0,Ue=le.length;oe<Ue;oe++){const Be=le[oe];Co(x,P,Be,Be.viewport)}}else Co(x,P,Z);T!==null&&(v.updateMultisampleRenderTarget(T),v.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(p,P,Z),D.resetDefaultState(),z=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Tt(P,Z,ae,le){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||se.intersectsSprite(P)){le&&fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(b);const Be=Y.update(P),Ve=P.material;Ve.visible&&x.push(P,Be,Ve,ae,fe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||se.intersectsObject(P))){const Be=Y.update(P),Ve=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),fe.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),fe.copy(Be.boundingSphere.center)),fe.applyMatrix4(P.matrixWorld).applyMatrix4(b)),Array.isArray(Ve)){const Xe=Be.groups;for(let Je=0,qe=Xe.length;Je<qe;Je++){const Ye=Xe[Je],Et=Ve[Ye.materialIndex];Et&&Et.visible&&x.push(P,Be,Et,ae,fe.z,Ye)}}else Ve.visible&&x.push(P,Be,Ve,ae,fe.z,null)}}const Ue=P.children;for(let Be=0,Ve=Ue.length;Be<Ve;Be++)Tt(Ue[Be],Z,ae,le)}function Co(P,Z,ae,le){const oe=P.opaque,Ue=P.transmissive,Be=P.transparent;m.setupLightsView(ae),k===!0&&De.setGlobalState(p.clippingPlanes,ae),Ue.length>0&&Ya(oe,Ue,Z,ae),le&&G.viewport(A.copy(le)),oe.length>0&&Ro(oe,Z,ae),Ue.length>0&&Ro(Ue,Z,ae),Be.length>0&&Ro(Be,Z,ae),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Ya(P,Z,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ue=ce.isWebGL2;R===null&&(R=new is(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Ra:vr,minFilter:Ca,samples:Ue?4:0})),p.getDrawingBufferSize(ie),Ue?R.setSize(ie.x,ie.y):R.setSize(Gh(ie.x),Gh(ie.y));const Be=p.getRenderTarget();p.setRenderTarget(R),p.getClearColor(de),H=p.getClearAlpha(),H<1&&p.setClearColor(16777215,.5),p.clear();const Ve=p.toneMapping;p.toneMapping=gr,Ro(P,ae,le),v.updateMultisampleRenderTarget(R),v.updateRenderTargetMipmap(R);let Xe=!1;for(let Je=0,qe=Z.length;Je<qe;Je++){const Ye=Z[Je],Et=Ye.object,gn=Ye.geometry,Lt=Ye.material,hi=Ye.group;if(Lt.side===In&&Et.layers.test(le.layers)){const pt=Lt.side;Lt.side=qt,Lt.needsUpdate=!0,ds(Et,ae,le,gn,Lt,hi),Lt.side=pt,Lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(v.updateMultisampleRenderTarget(R),v.updateRenderTargetMipmap(R)),p.setRenderTarget(Be),p.setClearColor(de,H),p.toneMapping=Ve}function Ro(P,Z,ae){const le=Z.isScene===!0?Z.overrideMaterial:null;for(let oe=0,Ue=P.length;oe<Ue;oe++){const Be=P[oe],Ve=Be.object,Xe=Be.geometry,Je=le===null?Be.material:le,qe=Be.group;Ve.layers.test(ae.layers)&&ds(Ve,Z,ae,Xe,Je,qe)}}function ds(P,Z,ae,le,oe,Ue){P.onBeforeRender(p,Z,ae,le,oe,Ue),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(p,Z,ae,le,P,Ue),oe.transparent===!0&&oe.side===In&&oe.forceSinglePass===!1?(oe.side=qt,oe.needsUpdate=!0,p.renderBufferDirect(ae,Z,le,oe,P,Ue),oe.side=Mr,oe.needsUpdate=!0,p.renderBufferDirect(ae,Z,le,oe,P,Ue),oe.side=In):p.renderBufferDirect(ae,Z,le,oe,P,Ue),P.onAfterRender(p,Z,ae,le,oe,Ue)}function Zn(P,Z,ae){Z.isScene!==!0&&(Z=$);const le=N.get(P),oe=m.state.lights,Ue=m.state.shadowsArray,Be=oe.state.version,Ve=me.getParameters(P,oe.state,Ue,Z,ae),Xe=me.getProgramCacheKey(Ve);let Je=le.programs;le.environment=P.isMeshStandardMaterial?Z.environment:null,le.fog=Z.fog,le.envMap=(P.isMeshStandardMaterial?F:E).get(P.envMap||le.environment),Je===void 0&&(P.addEventListener("dispose",Le),Je=new Map,le.programs=Je);let qe=Je.get(Xe);if(qe!==void 0){if(le.currentProgram===qe&&le.lightsStateVersion===Be)return Ja(P,Ve),qe}else Ve.uniforms=me.getUniforms(P),P.onBuild(ae,Ve,p),P.onBeforeCompile(Ve,p),qe=me.acquireProgram(Ve,Xe),Je.set(Xe,qe),le.uniforms=Ve.uniforms;const Ye=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=De.uniform),Ja(P,Ve),le.needsLights=Cr(P),le.lightsStateVersion=Be,le.needsLights&&(Ye.ambientLightColor.value=oe.state.ambient,Ye.lightProbe.value=oe.state.probe,Ye.directionalLights.value=oe.state.directional,Ye.directionalLightShadows.value=oe.state.directionalShadow,Ye.spotLights.value=oe.state.spot,Ye.spotLightShadows.value=oe.state.spotShadow,Ye.rectAreaLights.value=oe.state.rectArea,Ye.ltc_1.value=oe.state.rectAreaLTC1,Ye.ltc_2.value=oe.state.rectAreaLTC2,Ye.pointLights.value=oe.state.point,Ye.pointLightShadows.value=oe.state.pointShadow,Ye.hemisphereLights.value=oe.state.hemi,Ye.directionalShadowMap.value=oe.state.directionalShadowMap,Ye.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ye.spotShadowMap.value=oe.state.spotShadowMap,Ye.spotLightMatrix.value=oe.state.spotLightMatrix,Ye.spotLightMap.value=oe.state.spotLightMap,Ye.pointShadowMap.value=oe.state.pointShadowMap,Ye.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.currentProgram=qe,le.uniformsList=null,qe}function Ka(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=ic.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Ja(P,Z){const ae=N.get(P);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function yt(P,Z,ae,le,oe){Z.isScene!==!0&&(Z=$),v.resetTextureUnits();const Ue=Z.fog,Be=le.isMeshStandardMaterial?Z.environment:null,Ve=T===null?p.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ui,Xe=(le.isMeshStandardMaterial?F:E).get(le.envMap||Be),Je=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,qe=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ye=!!ae.morphAttributes.position,Et=!!ae.morphAttributes.normal,gn=!!ae.morphAttributes.color;let Lt=gr;le.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Lt=p.toneMapping);const hi=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pt=hi!==void 0?hi.length:0,Ze=N.get(le),Su=m.state.lights;if(k===!0&&(U===!0||P!==M)){const wn=P===M&&le.id===z;De.setState(le,P,wn)}let xt=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Su.state.version||Ze.outputColorSpace!==Ve||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||Ze.envMap!==Xe||le.fog===!0&&Ze.fog!==Ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==De.numPlanes||Ze.numIntersection!==De.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==qe||Ze.morphTargets!==Ye||Ze.morphNormals!==Et||Ze.morphColors!==gn||Ze.toneMapping!==Lt||ce.isWebGL2===!0&&Ze.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,Ze.__version=le.version);let Rr=Ze.currentProgram;xt===!0&&(Rr=Zn(le,Z,oe));let Sp=!1,Po=!1,Eu=!1;const Vt=Rr.getUniforms(),Pr=Ze.uniforms;if(G.useProgram(Rr.program)&&(Sp=!0,Po=!0,Eu=!0),le.id!==z&&(z=le.id,Po=!0),Sp||M!==P){Vt.setValue(B,"projectionMatrix",P.projectionMatrix),Vt.setValue(B,"viewMatrix",P.matrixWorldInverse);const wn=Vt.map.cameraPosition;wn!==void 0&&wn.setValue(B,fe.setFromMatrixPosition(P.matrixWorld)),ce.logarithmicDepthBuffer&&Vt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Vt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Po=!0,Eu=!0)}if(oe.isSkinnedMesh){Vt.setOptional(B,oe,"bindMatrix"),Vt.setOptional(B,oe,"bindMatrixInverse");const wn=oe.skeleton;wn&&(ce.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Vt.setValue(B,"boneTexture",wn.boneTexture,v)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}oe.isBatchedMesh&&(Vt.setOptional(B,oe,"batchingTexture"),Vt.setValue(B,"batchingTexture",oe._matricesTexture,v));const Mu=ae.morphAttributes;if((Mu.position!==void 0||Mu.normal!==void 0||Mu.color!==void 0&&ce.isWebGL2===!0)&&Re.update(oe,ae,Rr),(Po||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,Vt.setValue(B,"receiveShadow",oe.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Pr.envMap.value=Xe,Pr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Po&&(Vt.setValue(B,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&br(Pr,Eu),Ue&&le.fog===!0&&ge.refreshFogUniforms(Pr,Ue),ge.refreshMaterialUniforms(Pr,le,ne,ee,R),ic.upload(B,Ka(Ze),Pr,v)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(ic.upload(B,Ka(Ze),Pr,v),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Vt.setValue(B,"center",oe.center),Vt.setValue(B,"modelViewMatrix",oe.modelViewMatrix),Vt.setValue(B,"normalMatrix",oe.normalMatrix),Vt.setValue(B,"modelMatrix",oe.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const wn=le.uniformsGroups;for(let Tu=0,Hx=wn.length;Tu<Hx;Tu++)if(ce.isWebGL2){const Ep=wn[Tu];_e.update(Ep,Rr),_e.bind(Ep,Rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rr}function br(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Cr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,Z,ae){N.get(P.texture).__webglTexture=Z,N.get(P.depthTexture).__webglTexture=ae;const le=N.get(P);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const ae=N.get(P);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,ae=0){T=P,C=Z,w=ae;let le=!0,oe=null,Ue=!1,Be=!1;if(P){const Xe=N.get(P);Xe.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(B.FRAMEBUFFER,null),le=!1):Xe.__webglFramebuffer===void 0?v.setupRenderTarget(P):Xe.__hasExternalTextures&&v.rebindTextures(P,N.get(P.texture).__webglTexture,N.get(P.depthTexture).__webglTexture);const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Be=!0);const qe=N.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[Z])?oe=qe[Z][ae]:oe=qe[Z],Ue=!0):ce.isWebGL2&&P.samples>0&&v.useMultisampledRTT(P)===!1?oe=N.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?oe=qe[ae]:oe=qe,A.copy(P.viewport),Q.copy(P.scissor),X=P.scissorTest}else A.copy(q).multiplyScalar(ne).floor(),Q.copy(he).multiplyScalar(ne).floor(),X=pe;if(G.bindFramebuffer(B.FRAMEBUFFER,oe)&&ce.drawBuffers&&le&&G.drawBuffers(P,oe),G.viewport(A),G.scissor(Q),G.setScissorTest(X),Ue){const Xe=N.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Xe.__webglTexture,ae)}else if(Be){const Xe=N.get(P.texture),Je=Z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.__webglTexture,ae||0,Je)}z=-1},this.readRenderTargetPixels=function(P,Z,ae,le,oe,Ue,Be){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=N.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){G.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const Xe=P.texture,Je=Xe.format,qe=Xe.type;if(Je!==Xn&&Ae.convert(Je)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=qe===Ra&&(te.has("EXT_color_buffer_half_float")||ce.isWebGL2&&te.has("EXT_color_buffer_float"));if(qe!==vr&&Ae.convert(qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===or&&(ce.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-le&&ae>=0&&ae<=P.height-oe&&B.readPixels(Z,ae,le,oe,Ae.convert(Je),Ae.convert(qe),Ue)}finally{const Xe=T!==null?N.get(T).__webglFramebuffer:null;G.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(P,Z,ae=0){const le=Math.pow(2,-ae),oe=Math.floor(Z.image.width*le),Ue=Math.floor(Z.image.height*le);v.setTexture2D(Z,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,P.x,P.y,oe,Ue),G.unbindTexture()},this.copyTextureToTexture=function(P,Z,ae,le=0){const oe=Z.image.width,Ue=Z.image.height,Be=Ae.convert(ae.format),Ve=Ae.convert(ae.type);v.setTexture2D(ae,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ae.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ae.unpackAlignment),Z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,le,P.x,P.y,oe,Ue,Be,Ve,Z.image.data):Z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,le,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Be,Z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,le,P.x,P.y,Be,Ve,Z.image),le===0&&ae.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,ae,le,oe=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=P.max.x-P.min.x+1,Be=P.max.y-P.min.y+1,Ve=P.max.z-P.min.z+1,Xe=Ae.convert(le.format),Je=Ae.convert(le.type);let qe;if(le.isData3DTexture)v.setTexture3D(le,0),qe=B.TEXTURE_3D;else if(le.isDataArrayTexture||le.isCompressedArrayTexture)v.setTexture2DArray(le,0),qe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,le.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,le.unpackAlignment);const Ye=B.getParameter(B.UNPACK_ROW_LENGTH),Et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=B.getParameter(B.UNPACK_SKIP_PIXELS),Lt=B.getParameter(B.UNPACK_SKIP_ROWS),hi=B.getParameter(B.UNPACK_SKIP_IMAGES),pt=ae.isCompressedTexture?ae.mipmaps[oe]:ae.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,P.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,P.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,P.min.z),ae.isDataTexture||ae.isData3DTexture?B.texSubImage3D(qe,oe,Z.x,Z.y,Z.z,Ue,Be,Ve,Xe,Je,pt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(qe,oe,Z.x,Z.y,Z.z,Ue,Be,Ve,Xe,pt.data)):B.texSubImage3D(qe,oe,Z.x,Z.y,Z.z,Ue,Be,Ve,Xe,Je,pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Lt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hi),oe===0&&le.generateMipmaps&&B.generateMipmap(qe),G.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?v.setTextureCube(P,0):P.isData3DTexture?v.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?v.setTexture2DArray(P,0):v.setTexture2D(P,0),G.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,G.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qf?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===fu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Kr:my}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kr?Ut:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class EC extends Fy{}EC.prototype.isWebGL1Renderer=!0;class MC extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Is extends mn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,g=(o-d)/f;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Se:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new j,r=[],s=[],o=[],a=new j,l=new bt;for(let g=0;g<=e;g++){const y=g/e;r[g]=this.getTangentAt(y,new j)}s[0]=new j,o[0]=new j;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Bt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Bt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ip extends ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Se,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*d-g*h+this.aX,c=f*h+g*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class TC extends ip{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,g*=d,r(o,a,f,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const kl=new j,bd=new rp,Cd=new rp,Rd=new rp;class wC extends ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new j){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(kl.subVectors(r[0],r[1]).add(r[0]),c=kl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(kl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=kl),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(h),g),x=Math.pow(h.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(d),g);x<1e-4&&(x=1),y<1e-4&&(y=x),m<1e-4&&(m=x),bd.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,y,x,m),Cd.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,y,x,m),Rd.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,y,x,m)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Cd.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Rd.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(bd.calc(l),Cd.calc(l),Rd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new j().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function AC(t,e){const n=1-t;return n*n*e}function bC(t,e){return 2*(1-t)*t*e}function CC(t,e){return t*t*e}function aa(t,e,n,i){return AC(t,e)+bC(t,n)+CC(t,i)}function RC(t,e){const n=1-t;return n*n*n*e}function PC(t,e){const n=1-t;return 3*n*n*t*e}function IC(t,e){return 3*(1-t)*t*t*e}function LC(t,e){return t*t*t*e}function la(t,e,n,i,r){return RC(t,e)+PC(t,n)+IC(t,i)+LC(t,r)}class By extends ui{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(la(e,r.x,s.x,o.x,a.x),la(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NC extends ui{constructor(e=new j,n=new j,i=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new j){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(la(e,r.x,s.x,o.x,a.x),la(e,r.y,s.y,o.y,a.y),la(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zy extends ui{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DC extends ui{constructor(e=new j,n=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new j){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new j){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hy extends ui{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(aa(e,r.x,s.x,o.x),aa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UC extends ui{constructor(e=new j,n=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new j){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(aa(e,r.x,s.x,o.x),aa(e,r.y,s.y,o.y),aa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vy extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Jg(a,l.x,c.x,d.x,h.x),Jg(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var Zg=Object.freeze({__proto__:null,ArcCurve:TC,CatmullRomCurve3:wC,CubicBezierCurve:By,CubicBezierCurve3:NC,EllipseCurve:ip,LineCurve:zy,LineCurve3:DC,QuadraticBezierCurve:Hy,QuadraticBezierCurve3:UC,SplineCurve:Vy});class OC extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zg[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Zg[r.type]().fromJSON(r))}return this}}class io extends OC{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new zy(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Hy(this.currentPoint.clone(),new Se(e,n),new Se(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new By(this.currentPoint.clone(),new Se(e,n),new Se(i,r),new Se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Vy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new ip(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rc extends io{constructor(e){super(e),this.uuid=To(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new io().fromJSON(r))}return this}}const kC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Gy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,h,f,g;if(i&&(s=VC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let y=n;y<r;y+=n)h=t[y],f=t[y+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>d&&(d=f);g=Math.max(c-a,d-l),g=g!==0?32767/g:0}return Ia(s,o,n,a,l,g,0),o}};function Gy(t,e,n,i,r){let s,o;if(r===QC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Qg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Qg(s,t[s],t[s+1],o);return o&&gu(o,o.next)&&(Na(o),o=o.next),o}function ss(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(gu(n,n.next)||gt(n.prev,n,n.next)===0)){if(Na(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ia(t,e,n,i,r,s,o){if(!t)return;!o&&s&&$C(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?BC(t,i,r,s):FC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Na(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=zC(ss(t),e,n),Ia(t,e,n,i,r,s,2)):o===2&&HC(t,e,n,i,r,s):Ia(ss(t),e,n,i,r,s,1);break}}}function FC(t){const e=t.prev,n=t,i=t.next;if(gt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,g=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=d&&y.x<=f&&y.y>=h&&y.y<=g&&qs(r,a,s,l,o,c,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function BC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,f=o.y,g=a<l?a<c?a:c:l<c?l:c,y=d<h?d<f?d:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=d>h?d>f?d:f:h>f?h:f,u=jh(g,y,e,n,i),_=jh(x,m,e,n,i);let p=t.prevZ,S=t.nextZ;for(;p&&p.z>=u&&S&&S.z<=_;){if(p.x>=g&&p.x<=x&&p.y>=y&&p.y<=m&&p!==r&&p!==o&&qs(a,d,l,h,c,f,p.x,p.y)&&gt(p.prev,p,p.next)>=0||(p=p.prevZ,S.x>=g&&S.x<=x&&S.y>=y&&S.y<=m&&S!==r&&S!==o&&qs(a,d,l,h,c,f,S.x,S.y)&&gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;p&&p.z>=u;){if(p.x>=g&&p.x<=x&&p.y>=y&&p.y<=m&&p!==r&&p!==o&&qs(a,d,l,h,c,f,p.x,p.y)&&gt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;S&&S.z<=_;){if(S.x>=g&&S.x<=x&&S.y>=y&&S.y<=m&&S!==r&&S!==o&&qs(a,d,l,h,c,f,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function zC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!gu(r,s)&&Wy(r,i,i.next,s)&&La(r,s)&&La(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Na(i),Na(i.next),i=t=s),i=i.next}while(i!==t);return ss(i)}function HC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&KC(o,a)){let l=jy(o,a);o=ss(o,o.next),l=ss(l,l.next),Ia(o,e,n,i,r,s,0),Ia(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function VC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Gy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(YC(c));for(r.sort(GC),s=0;s<r.length;s++)n=WC(r[s],n);return n}function GC(t,e){return t.x-e.x}function WC(t,e){const n=jC(t,e);if(!n)return e;const i=jy(n,t);return ss(i,i.next),ss(n,n.next)}function jC(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&qs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),La(n,t)&&(h<d||h===d&&(n.x>r.x||n.x===r.x&&XC(r,n)))&&(r=n,d=h)),n=n.next;while(n!==a);return r}function XC(t,e){return gt(t.prev,t,e.prev)<0&&gt(e.next,t,t.next)<0}function $C(t,e,n,i){let r=t;do r.z===0&&(r.z=jh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,qC(r)}function qC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function jh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function YC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function qs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function KC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!JC(t,e)&&(La(t,e)&&La(e,t)&&ZC(t,e)&&(gt(t.prev,t,e.prev)||gt(t,e.prev,e))||gu(t,e)&&gt(t.prev,t,t.next)>0&&gt(e.prev,e,e.next)>0)}function gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function gu(t,e){return t.x===e.x&&t.y===e.y}function Wy(t,e,n,i){const r=Bl(gt(t,e,n)),s=Bl(gt(t,e,i)),o=Bl(gt(n,i,t)),a=Bl(gt(n,i,e));return!!(r!==s&&o!==a||r===0&&Fl(t,n,e)||s===0&&Fl(t,i,e)||o===0&&Fl(n,t,i)||a===0&&Fl(n,e,i))}function Fl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Bl(t){return t>0?1:t<0?-1:0}function JC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Wy(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function La(t,e){return gt(t.prev,t,t.next)<0?gt(t,e,t.next)>=0&&gt(t,t.prev,e)>=0:gt(t,e,t.prev)<0||gt(t,t.next,e)<0}function ZC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function jy(t,e){const n=new Xh(t.i,t.x,t.y),i=new Xh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Qg(t,e,n,i){const r=new Xh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Na(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Xh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function QC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class vu{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return vu.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];ev(e),tv(i,e);let o=e.length;n.forEach(ev);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,tv(i,n[l]);const a=kC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ev(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function tv(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ca extends ci{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new j,f=new j,g=[],y=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],p=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const w=C/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+p*a),h.y=e*Math.cos(o+p*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+p*a),y.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(w+S,1-p),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const p=d[u][_+1],S=d[u][_],C=d[u+1][_],w=d[u+1][_+1];(u!==0||o>0)&&g.push(p,S,w),(u!==i-1||l<Math.PI)&&g.push(S,C,w)}this.setIndex(g),this.setAttribute("position",new nn(y,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nv extends Va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gy,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const iv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class eR{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const g=c[h],y=c[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return y}return null}}}const tR=new eR;class sp{constructor(e){this.manager=e!==void 0?e:tR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class nR extends Error{constructor(e,n){super(e),this.response=n}}class iR extends sp{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=iv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(_i[e]!==void 0){_i[e].push({onLoad:n,onProgress:i,onError:r});return}_i[e]=[],_i[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=_i[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=f?parseInt(f):0,y=g!==0;let x=0;const m=new ReadableStream({start(u){_();function _(){h.read().then(({done:p,value:S})=>{if(p)u.close();else{x+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:y,loaded:x,total:g});for(let w=0,T=d.length;w<T;w++){const z=d[w];z.onProgress&&z.onProgress(C)}u.enqueue(S),_()}})}}});return new Response(m)}else throw new nR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(y=>g.decode(y))}}}).then(c=>{iv.add(e,c);const d=_i[e];delete _i[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{const d=_i[e];if(d===void 0)throw this.manager.itemError(e),c;delete _i[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xy extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Pd=new bt,rv=new j,sv=new j;class rR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rv.setFromMatrixPosition(e.matrixWorld),n.position.copy(rv),sv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sv),n.updateMatrixWorld(),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sR extends rR{constructor(){super(new Iy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ov extends Xy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new sR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oR extends Xy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class av{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lv=new Se;class aR{constructor(e=new Se(1/0,1/0),n=new Se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=lv.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ur{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new io,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(u){const _=[];for(let p=0,S=u.length;p<S;p++){const C=u[p],w=new rc;w.curves=C.curves,_.push(w)}return _}function i(u,_){const p=_.length;let S=!1;for(let C=p-1,w=0;w<p;C=w++){let T=_[C],z=_[w],M=z.x-T.x,A=z.y-T.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(T=_[w],M=-M,z=_[C],A=-A),u.y<T.y||u.y>z.y)continue;if(u.y===T.y){if(u.x===T.x)return!0}else{const Q=A*(u.x-T.x)-M*(u.y-T.y);if(Q===0)return!0;if(Q<0)continue;S=!S}}else{if(u.y!==T.y)continue;if(z.x<=u.x&&u.x<=T.x||T.x<=u.x&&u.x<=z.x)return!0}}return S}const r=vu.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new rc,l.curves=a.curves,c.push(l),c;let d=!r(s[0].getPoints());d=e?!d:d;const h=[],f=[];let g=[],y=0,x;f[y]=void 0,g[y]=[];for(let u=0,_=s.length;u<_;u++)a=s[u],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!d&&f[y]&&y++,f[y]={s:new rc,p:x},f[y].s.curves=a.curves,d&&y++,g[y]=[]):g[y].push({h:a,p:x[0]});if(!f[0])return n(s);if(f.length>1){let u=!1,_=0;for(let p=0,S=f.length;p<S;p++)h[p]=[];for(let p=0,S=f.length;p<S;p++){const C=g[p];for(let w=0;w<C.length;w++){const T=C[w];let z=!0;for(let M=0;M<f.length;M++)i(T.p,f[M].p)&&(p!==M&&_++,z?(z=!1,h[M].push(T)):u=!0);z&&h[p].push(T)}}_>0&&u===!1&&(g=h)}let m;for(let u=0,_=f.length;u<_;u++){l=f[u].s,c.push(l),m=g[u];for(let p=0,S=m.length;p<S;p++)l.holes.push(m[p].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);const cv={type:"change"},Id={type:"start"},uv={type:"end"},zl=new Ey,dv=new Ji,lR=Math.cos(70*gT.DEG2RAD);class cR extends us{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Ce),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cv),i.update(),s=r.NONE},this.update=function(){const D=new j,_e=new rs().setFromUnitVectors(e.up,new j(0,1,0)),Ne=_e.clone().invert(),Ie=new j,xe=new rs,V=new j,Te=2*Math.PI;return function(ze=null){const Fe=i.object.position;D.copy(Fe).sub(i.target),D.applyQuaternion(_e),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&X(A(ze)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ge=i.minAzimuthAngle,We=i.maxAzimuthAngle;isFinite(Ge)&&isFinite(We)&&(Ge<-Math.PI?Ge+=Te:Ge>Math.PI&&(Ge-=Te),We<-Math.PI?We+=Te:We>Math.PI&&(We-=Te),Ge<=We?a.theta=Math.max(Ge,Math.min(We,a.theta)):a.theta=a.theta>(Ge+We)/2?Math.max(Ge,a.theta):Math.min(We,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Ne),Fe.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let ut=!1;if(i.zoomToCursor&&w){let ht=null;if(i.object.isPerspectiveCamera){const et=D.length();ht=q(et*c);const ft=et-ht;i.object.position.addScaledVector(S,ft),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const et=new j(C.x,C.y,0);et.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ut=!0;const ft=new j(C.x,C.y,0);ft.unproject(i.object),i.object.position.sub(ft).add(et),i.object.updateMatrixWorld(),ht=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ht!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ht).add(i.object.position):(zl.origin.copy(i.object.position),zl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(zl.direction))<lR?e.lookAt(i.target):(dv.setFromNormalAndCoplanarPoint(i.object.up,i.target),zl.intersectPlane(dv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ut=!0);return c=1,w=!1,ut||Ie.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||V.distanceToSquared(i.target)>0?(i.dispatchEvent(cv),Ie.copy(i.object.position),xe.copy(i.object.quaternion),V.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",v),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",Y),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",F),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new av,l=new av;let c=1;const d=new j,h=new Se,f=new Se,g=new Se,y=new Se,x=new Se,m=new Se,u=new Se,_=new Se,p=new Se,S=new j,C=new Se;let w=!1;const T=[],z={};let M=!1;function A(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function Q(D){const _e=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*_e)}function X(D){l.theta-=D}function de(D){l.phi-=D}const H=function(){const D=new j;return function(Ne,Ie){D.setFromMatrixColumn(Ie,0),D.multiplyScalar(-Ne),d.add(D)}}(),J=function(){const D=new j;return function(Ne,Ie){i.screenSpacePanning===!0?D.setFromMatrixColumn(Ie,1):(D.setFromMatrixColumn(Ie,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Ne),d.add(D)}}(),ee=function(){const D=new j;return function(Ne,Ie){const xe=i.domElement;if(i.object.isPerspectiveCamera){const V=i.object.position;D.copy(V).sub(i.target);let Te=D.length();Te*=Math.tan(i.object.fov/2*Math.PI/180),H(2*Ne*Te/xe.clientHeight,i.object.matrix),J(2*Ie*Te/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(Ne*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),J(Ie*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(D,_e){if(!i.zoomToCursor)return;w=!0;const Ne=i.domElement.getBoundingClientRect(),Ie=D-Ne.left,xe=_e-Ne.top,V=Ne.width,Te=Ne.height;C.x=Ie/V*2-1,C.y=-(xe/Te)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function he(D){h.set(D.clientX,D.clientY)}function pe(D){W(D.clientX,D.clientX),u.set(D.clientX,D.clientY)}function se(D){y.set(D.clientX,D.clientY)}function k(D){f.set(D.clientX,D.clientY),g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const _e=i.domElement;X(2*Math.PI*g.x/_e.clientHeight),de(2*Math.PI*g.y/_e.clientHeight),h.copy(f),i.update()}function U(D){_.set(D.clientX,D.clientY),p.subVectors(_,u),p.y>0?ne(Q(p.y)):p.y<0&&L(Q(p.y)),u.copy(_),i.update()}function R(D){x.set(D.clientX,D.clientY),m.subVectors(x,y).multiplyScalar(i.panSpeed),ee(m.x,m.y),y.copy(x),i.update()}function b(D){W(D.clientX,D.clientY),D.deltaY<0?L(Q(D.deltaY)):D.deltaY>0&&ne(Q(D.deltaY)),i.update()}function ie(D){let _e=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?de(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,i.keyPanSpeed),_e=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?de(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(0,-i.keyPanSpeed),_e=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(i.keyPanSpeed,0),_e=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ee(-i.keyPanSpeed,0),_e=!0;break}_e&&(D.preventDefault(),i.update())}function fe(D){if(T.length===1)h.set(D.pageX,D.pageY);else{const _e=Ae(D),Ne=.5*(D.pageX+_e.x),Ie=.5*(D.pageY+_e.y);h.set(Ne,Ie)}}function $(D){if(T.length===1)y.set(D.pageX,D.pageY);else{const _e=Ae(D),Ne=.5*(D.pageX+_e.x),Ie=.5*(D.pageY+_e.y);y.set(Ne,Ie)}}function ve(D){const _e=Ae(D),Ne=D.pageX-_e.x,Ie=D.pageY-_e.y,xe=Math.sqrt(Ne*Ne+Ie*Ie);u.set(0,xe)}function B(D){i.enableZoom&&ve(D),i.enablePan&&$(D)}function be(D){i.enableZoom&&ve(D),i.enableRotate&&fe(D)}function te(D){if(T.length==1)f.set(D.pageX,D.pageY);else{const Ne=Ae(D),Ie=.5*(D.pageX+Ne.x),xe=.5*(D.pageY+Ne.y);f.set(Ie,xe)}g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const _e=i.domElement;X(2*Math.PI*g.x/_e.clientHeight),de(2*Math.PI*g.y/_e.clientHeight),h.copy(f)}function ce(D){if(T.length===1)x.set(D.pageX,D.pageY);else{const _e=Ae(D),Ne=.5*(D.pageX+_e.x),Ie=.5*(D.pageY+_e.y);x.set(Ne,Ie)}m.subVectors(x,y).multiplyScalar(i.panSpeed),ee(m.x,m.y),y.copy(x)}function G(D){const _e=Ae(D),Ne=D.pageX-_e.x,Ie=D.pageY-_e.y,xe=Math.sqrt(Ne*Ne+Ie*Ie);_.set(0,xe),p.set(0,Math.pow(_.y/u.y,i.zoomSpeed)),ne(p.y),u.copy(_);const V=(D.pageX+_e.x)*.5,Te=(D.pageY+_e.y)*.5;W(V,Te)}function K(D){i.enableZoom&&G(D),i.enablePan&&ce(D)}function N(D){i.enableZoom&&G(D),i.enableRotate&&te(D)}function v(D){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",F)),Re(D),D.pointerType==="touch"?De(D):re(D))}function E(D){i.enabled!==!1&&(D.pointerType==="touch"?ue(D):O(D))}function F(D){Oe(D),T.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",F)),i.dispatchEvent(uv),s=r.NONE}function re(D){let _e;switch(D.button){case 0:_e=i.mouseButtons.LEFT;break;case 1:_e=i.mouseButtons.MIDDLE;break;case 2:_e=i.mouseButtons.RIGHT;break;default:_e=-1}switch(_e){case fs.DOLLY:if(i.enableZoom===!1)return;pe(D),s=r.DOLLY;break;case fs.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;se(D),s=r.PAN}else{if(i.enableRotate===!1)return;he(D),s=r.ROTATE}break;case fs.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;he(D),s=r.ROTATE}else{if(i.enablePan===!1)return;se(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Id)}function O(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;k(D);break;case r.DOLLY:if(i.enableZoom===!1)return;U(D);break;case r.PAN:if(i.enablePan===!1)return;R(D);break}}function Y(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Id),b(me(D)),i.dispatchEvent(uv))}function me(D){const _e=D.deltaMode,Ne={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(_e){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return D.ctrlKey&&!M&&(Ne.deltaY*=10),Ne}function ge(D){D.key==="Control"&&(M=!0,document.addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(D){D.key==="Control"&&(M=!1,document.removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function Ce(D){i.enabled===!1||i.enablePan===!1||ie(D)}function De(D){switch(we(D),T.length){case 1:switch(i.touches.ONE){case ps.ROTATE:if(i.enableRotate===!1)return;fe(D),s=r.TOUCH_ROTATE;break;case ps.PAN:if(i.enablePan===!1)return;$(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(D),s=r.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Id)}function ue(D){switch(we(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;te(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(D),i.update();break;default:s=r.NONE}}function He(D){i.enabled!==!1&&D.preventDefault()}function Re(D){T.push(D.pointerId)}function Oe(D){delete z[D.pointerId];for(let _e=0;_e<T.length;_e++)if(T[_e]==D.pointerId){T.splice(_e,1);return}}function we(D){let _e=z[D.pointerId];_e===void 0&&(_e=new Se,z[D.pointerId]=_e),_e.set(D.pageX,D.pageY)}function Ae(D){const _e=D.pointerId===T[0]?T[1]:T[0];return z[_e]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",v),i.domElement.addEventListener("pointercancel",F),i.domElement.addEventListener("wheel",Y,{passive:!1}),document.addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}const uR=Ut;class Bc extends sp{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new iR(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(k,U){if(k.nodeType!==1)return;const R=S(k);let b=!1,ie=null;switch(k.nodeName){case"svg":U=y(k,U);break;case"style":s(k);break;case"g":U=y(k,U);break;case"path":U=y(k,U),k.hasAttribute("d")&&(ie=r(k));break;case"rect":U=y(k,U),ie=l(k);break;case"polygon":U=y(k,U),ie=c(k);break;case"polyline":U=y(k,U),ie=d(k);break;case"circle":U=y(k,U),ie=h(k);break;case"ellipse":U=y(k,U),ie=f(k);break;case"line":U=y(k,U),ie=g(k);break;case"defs":b=!0;break;case"use":U=y(k,U);const ve=(k.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),B=k.viewportElement.getElementById(ve);B?i(B,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+ve);break}ie&&(U.fill!==void 0&&U.fill!=="none"&&ie.color.setStyle(U.fill,uR),w(ie,he),X.push(ie),ie.userData={node:k,style:U});const fe=k.childNodes;for(let $=0;$<fe.length;$++){const ve=fe[$];b&&ve.nodeName!=="style"&&ve.nodeName!=="defs"||i(ve,U)}R&&(H.pop(),H.length>0?he.copy(H[H.length-1]):he.identity())}function r(k){const U=new Ur,R=new Se,b=new Se,ie=new Se;let fe=!0,$=!1;const ve=k.getAttribute("d");if(ve===""||ve==="none")return null;const B=ve.match(/[a-df-z][^a-df-z]*/ig);for(let be=0,te=B.length;be<te;be++){const ce=B[be],G=ce.charAt(0),K=ce.slice(1).trim();fe===!0&&($=!0,fe=!1);let N;switch(G){case"M":N=m(K);for(let v=0,E=N.length;v<E;v+=2)R.x=N[v+0],R.y=N[v+1],b.x=R.x,b.y=R.y,v===0?U.moveTo(R.x,R.y):U.lineTo(R.x,R.y),v===0&&ie.copy(R);break;case"H":N=m(K);for(let v=0,E=N.length;v<E;v++)R.x=N[v],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),v===0&&$===!0&&ie.copy(R);break;case"V":N=m(K);for(let v=0,E=N.length;v<E;v++)R.y=N[v],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),v===0&&$===!0&&ie.copy(R);break;case"L":N=m(K);for(let v=0,E=N.length;v<E;v+=2)R.x=N[v+0],R.y=N[v+1],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),v===0&&$===!0&&ie.copy(R);break;case"C":N=m(K);for(let v=0,E=N.length;v<E;v+=6)U.bezierCurveTo(N[v+0],N[v+1],N[v+2],N[v+3],N[v+4],N[v+5]),b.x=N[v+2],b.y=N[v+3],R.x=N[v+4],R.y=N[v+5],v===0&&$===!0&&ie.copy(R);break;case"S":N=m(K);for(let v=0,E=N.length;v<E;v+=4)U.bezierCurveTo(x(R.x,b.x),x(R.y,b.y),N[v+0],N[v+1],N[v+2],N[v+3]),b.x=N[v+0],b.y=N[v+1],R.x=N[v+2],R.y=N[v+3],v===0&&$===!0&&ie.copy(R);break;case"Q":N=m(K);for(let v=0,E=N.length;v<E;v+=4)U.quadraticCurveTo(N[v+0],N[v+1],N[v+2],N[v+3]),b.x=N[v+0],b.y=N[v+1],R.x=N[v+2],R.y=N[v+3],v===0&&$===!0&&ie.copy(R);break;case"T":N=m(K);for(let v=0,E=N.length;v<E;v+=2){const F=x(R.x,b.x),re=x(R.y,b.y);U.quadraticCurveTo(F,re,N[v+0],N[v+1]),b.x=F,b.y=re,R.x=N[v+0],R.y=N[v+1],v===0&&$===!0&&ie.copy(R)}break;case"A":N=m(K,[3,4],7);for(let v=0,E=N.length;v<E;v+=7){if(N[v+5]==R.x&&N[v+6]==R.y)continue;const F=R.clone();R.x=N[v+5],R.y=N[v+6],b.x=R.x,b.y=R.y,o(U,N[v],N[v+1],N[v+2],N[v+3],N[v+4],F,R),v===0&&$===!0&&ie.copy(R)}break;case"m":N=m(K);for(let v=0,E=N.length;v<E;v+=2)R.x+=N[v+0],R.y+=N[v+1],b.x=R.x,b.y=R.y,v===0?U.moveTo(R.x,R.y):U.lineTo(R.x,R.y),v===0&&ie.copy(R);break;case"h":N=m(K);for(let v=0,E=N.length;v<E;v++)R.x+=N[v],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),v===0&&$===!0&&ie.copy(R);break;case"v":N=m(K);for(let v=0,E=N.length;v<E;v++)R.y+=N[v],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),v===0&&$===!0&&ie.copy(R);break;case"l":N=m(K);for(let v=0,E=N.length;v<E;v+=2)R.x+=N[v+0],R.y+=N[v+1],b.x=R.x,b.y=R.y,U.lineTo(R.x,R.y),v===0&&$===!0&&ie.copy(R);break;case"c":N=m(K);for(let v=0,E=N.length;v<E;v+=6)U.bezierCurveTo(R.x+N[v+0],R.y+N[v+1],R.x+N[v+2],R.y+N[v+3],R.x+N[v+4],R.y+N[v+5]),b.x=R.x+N[v+2],b.y=R.y+N[v+3],R.x+=N[v+4],R.y+=N[v+5],v===0&&$===!0&&ie.copy(R);break;case"s":N=m(K);for(let v=0,E=N.length;v<E;v+=4)U.bezierCurveTo(x(R.x,b.x),x(R.y,b.y),R.x+N[v+0],R.y+N[v+1],R.x+N[v+2],R.y+N[v+3]),b.x=R.x+N[v+0],b.y=R.y+N[v+1],R.x+=N[v+2],R.y+=N[v+3],v===0&&$===!0&&ie.copy(R);break;case"q":N=m(K);for(let v=0,E=N.length;v<E;v+=4)U.quadraticCurveTo(R.x+N[v+0],R.y+N[v+1],R.x+N[v+2],R.y+N[v+3]),b.x=R.x+N[v+0],b.y=R.y+N[v+1],R.x+=N[v+2],R.y+=N[v+3],v===0&&$===!0&&ie.copy(R);break;case"t":N=m(K);for(let v=0,E=N.length;v<E;v+=2){const F=x(R.x,b.x),re=x(R.y,b.y);U.quadraticCurveTo(F,re,R.x+N[v+0],R.y+N[v+1]),b.x=F,b.y=re,R.x=R.x+N[v+0],R.y=R.y+N[v+1],v===0&&$===!0&&ie.copy(R)}break;case"a":N=m(K,[3,4],7);for(let v=0,E=N.length;v<E;v+=7){if(N[v+5]==0&&N[v+6]==0)continue;const F=R.clone();R.x+=N[v+5],R.y+=N[v+6],b.x=R.x,b.y=R.y,o(U,N[v],N[v+1],N[v+2],N[v+3],N[v+4],F,R),v===0&&$===!0&&ie.copy(R)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(R.copy(ie),U.currentPath.currentPoint.copy(R),fe=!0);break;default:console.warn(ce)}$=!1}return U}function s(k){if(!(!k.sheet||!k.sheet.cssRules||!k.sheet.cssRules.length))for(let U=0;U<k.sheet.cssRules.length;U++){const R=k.sheet.cssRules[U];if(R.type!==1)continue;const b=R.selectorText.split(/,/gm).filter(Boolean).map(ie=>ie.trim());for(let ie=0;ie<b.length;ie++){const fe=Object.fromEntries(Object.entries(R.style).filter(([,$])=>$!==""));de[b[ie]]=Object.assign(de[b[ie]]||{},fe)}}}function o(k,U,R,b,ie,fe,$,ve){if(U==0||R==0){k.lineTo(ve.x,ve.y);return}b=b*Math.PI/180,U=Math.abs(U),R=Math.abs(R);const B=($.x-ve.x)/2,be=($.y-ve.y)/2,te=Math.cos(b)*B+Math.sin(b)*be,ce=-Math.sin(b)*B+Math.cos(b)*be;let G=U*U,K=R*R;const N=te*te,v=ce*ce,E=N/G+v/K;if(E>1){const ue=Math.sqrt(E);U=ue*U,R=ue*R,G=U*U,K=R*R}const F=G*v+K*N,re=(G*K-F)/F;let O=Math.sqrt(Math.max(0,re));ie===fe&&(O=-O);const Y=O*U*ce/R,me=-O*R*te/U,ge=Math.cos(b)*Y-Math.sin(b)*me+($.x+ve.x)/2,Me=Math.sin(b)*Y+Math.cos(b)*me+($.y+ve.y)/2,Ce=a(1,0,(te-Y)/U,(ce-me)/R),De=a((te-Y)/U,(ce-me)/R,(-te-Y)/U,(-ce-me)/R)%(Math.PI*2);k.currentPath.absellipse(ge,Me,U,R,Ce,Ce+De,fe===0,b)}function a(k,U,R,b){const ie=k*R+U*b,fe=Math.sqrt(k*k+U*U)*Math.sqrt(R*R+b*b);let $=Math.acos(Math.max(-1,Math.min(1,ie/fe)));return k*b-U*R<0&&($=-$),$}function l(k){const U=p(k.getAttribute("x")||0),R=p(k.getAttribute("y")||0),b=p(k.getAttribute("rx")||k.getAttribute("ry")||0),ie=p(k.getAttribute("ry")||k.getAttribute("rx")||0),fe=p(k.getAttribute("width")),$=p(k.getAttribute("height")),ve=1-.551915024494,B=new Ur;return B.moveTo(U+b,R),B.lineTo(U+fe-b,R),(b!==0||ie!==0)&&B.bezierCurveTo(U+fe-b*ve,R,U+fe,R+ie*ve,U+fe,R+ie),B.lineTo(U+fe,R+$-ie),(b!==0||ie!==0)&&B.bezierCurveTo(U+fe,R+$-ie*ve,U+fe-b*ve,R+$,U+fe-b,R+$),B.lineTo(U+b,R+$),(b!==0||ie!==0)&&B.bezierCurveTo(U+b*ve,R+$,U,R+$-ie*ve,U,R+$-ie),B.lineTo(U,R+ie),(b!==0||ie!==0)&&B.bezierCurveTo(U,R+ie*ve,U+b*ve,R,U+b,R),B}function c(k){function U(fe,$,ve){const B=p($),be=p(ve);ie===0?b.moveTo(B,be):b.lineTo(B,be),ie++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Ur;let ie=0;return k.getAttribute("points").replace(R,U),b.currentPath.autoClose=!0,b}function d(k){function U(fe,$,ve){const B=p($),be=p(ve);ie===0?b.moveTo(B,be):b.lineTo(B,be),ie++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Ur;let ie=0;return k.getAttribute("points").replace(R,U),b.currentPath.autoClose=!1,b}function h(k){const U=p(k.getAttribute("cx")||0),R=p(k.getAttribute("cy")||0),b=p(k.getAttribute("r")||0),ie=new io;ie.absarc(U,R,b,0,Math.PI*2);const fe=new Ur;return fe.subPaths.push(ie),fe}function f(k){const U=p(k.getAttribute("cx")||0),R=p(k.getAttribute("cy")||0),b=p(k.getAttribute("rx")||0),ie=p(k.getAttribute("ry")||0),fe=new io;fe.absellipse(U,R,b,ie,0,Math.PI*2);const $=new Ur;return $.subPaths.push(fe),$}function g(k){const U=p(k.getAttribute("x1")||0),R=p(k.getAttribute("y1")||0),b=p(k.getAttribute("x2")||0),ie=p(k.getAttribute("y2")||0),fe=new Ur;return fe.moveTo(U,R),fe.lineTo(b,ie),fe.currentPath.autoClose=!1,fe}function y(k,U){U=Object.assign({},U);let R={};if(k.hasAttribute("class")){const $=k.getAttribute("class").split(/\s/).filter(Boolean).map(ve=>ve.trim());for(let ve=0;ve<$.length;ve++)R=Object.assign(R,de["."+$[ve]])}k.hasAttribute("id")&&(R=Object.assign(R,de["#"+k.getAttribute("id")]));function b($,ve,B){B===void 0&&(B=function(te){return te.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),te}),k.hasAttribute($)&&(U[ve]=B(k.getAttribute($))),R[$]&&(U[ve]=B(R[$])),k.style&&k.style[$]!==""&&(U[ve]=B(k.style[$]))}function ie($){return Math.max(0,Math.min(1,p($)))}function fe($){return Math.max(0,p($))}return b("fill","fill"),b("fill-opacity","fillOpacity",ie),b("fill-rule","fillRule"),b("opacity","opacity",ie),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",ie),b("stroke-width","strokeWidth",fe),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",fe),b("visibility","visibility"),U}function x(k,U){return k-(U-k)}function m(k,U,R){if(typeof k!="string")throw new TypeError("Invalid input: "+typeof k);const b={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ie=0,fe=1,$=2,ve=3;let B=ie,be=!0,te="",ce="";const G=[];function K(F,re,O){const Y=new SyntaxError('Unexpected character "'+F+'" at index '+re+".");throw Y.partial=O,Y}function N(){te!==""&&(ce===""?G.push(Number(te)):G.push(Number(te)*Math.pow(10,Number(ce)))),te="",ce=""}let v;const E=k.length;for(let F=0;F<E;F++){if(v=k[F],Array.isArray(U)&&U.includes(G.length%R)&&b.FLAGS.test(v)){B=fe,te=v,N();continue}if(B===ie){if(b.WHITESPACE.test(v))continue;if(b.DIGIT.test(v)||b.SIGN.test(v)){B=fe,te=v;continue}if(b.POINT.test(v)){B=$,te=v;continue}b.COMMA.test(v)&&(be&&K(v,F,G),be=!0)}if(B===fe){if(b.DIGIT.test(v)){te+=v;continue}if(b.POINT.test(v)){te+=v,B=$;continue}if(b.EXP.test(v)){B=ve;continue}b.SIGN.test(v)&&te.length===1&&b.SIGN.test(te[0])&&K(v,F,G)}if(B===$){if(b.DIGIT.test(v)){te+=v;continue}if(b.EXP.test(v)){B=ve;continue}b.POINT.test(v)&&te[te.length-1]==="."&&K(v,F,G)}if(B===ve){if(b.DIGIT.test(v)){ce+=v;continue}if(b.SIGN.test(v)){if(ce===""){ce+=v;continue}ce.length===1&&b.SIGN.test(ce)&&K(v,F,G)}}b.WHITESPACE.test(v)?(N(),B=ie,be=!1):b.COMMA.test(v)?(N(),B=ie,be=!0):b.SIGN.test(v)?(N(),B=fe,te=v):b.POINT.test(v)?(N(),B=$,te=v):K(v,F,G)}return N(),G}const u=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function p(k){let U="px";if(typeof k=="string"||k instanceof String)for(let b=0,ie=u.length;b<ie;b++){const fe=u[b];if(k.endsWith(fe)){U=fe,k=k.substring(0,k.length-fe.length);break}}let R;return U==="px"&&n.defaultUnit!=="px"?R=_.in[n.defaultUnit]/n.defaultDPI:(R=_[U][n.defaultUnit],R<0&&(R=_[U].in*n.defaultDPI)),R*parseFloat(k)}function S(k){if(!(k.hasAttribute("transform")||k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))))return null;const U=C(k);return H.length>0&&U.premultiply(H[H.length-1]),he.copy(U),H.push(U),U}function C(k){const U=new $e,R=J;if(k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))){const b=p(k.getAttribute("x")),ie=p(k.getAttribute("y"));U.translate(b,ie)}if(k.hasAttribute("transform")){const b=k.getAttribute("transform").split(")");for(let ie=b.length-1;ie>=0;ie--){const fe=b[ie].trim();if(fe==="")continue;const $=fe.indexOf("("),ve=fe.length;if($>0&&$<ve){const B=fe.slice(0,$),be=m(fe.slice($+1));switch(R.identity(),B){case"translate":if(be.length>=1){const te=be[0];let ce=0;be.length>=2&&(ce=be[1]),R.translate(te,ce)}break;case"rotate":if(be.length>=1){let te=0,ce=0,G=0;te=be[0]*Math.PI/180,be.length>=3&&(ce=be[1],G=be[2]),ee.makeTranslation(-ce,-G),ne.makeRotation(te),L.multiplyMatrices(ne,ee),ee.makeTranslation(ce,G),R.multiplyMatrices(ee,L)}break;case"scale":if(be.length>=1){const te=be[0];let ce=te;be.length>=2&&(ce=be[1]),R.scale(te,ce)}break;case"skewX":be.length===1&&R.set(1,Math.tan(be[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":be.length===1&&R.set(1,0,0,Math.tan(be[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":be.length===6&&R.set(be[0],be[2],be[4],be[1],be[3],be[5],0,0,1);break}}U.premultiply(R)}}return U}function w(k,U){function R($){q.set($.x,$.y,1).applyMatrix3(U),$.set(q.x,q.y)}function b($){const ve=$.xRadius,B=$.yRadius,be=Math.cos($.aRotation),te=Math.sin($.aRotation),ce=new j(ve*be,ve*te,0),G=new j(-B*te,B*be,0),K=ce.applyMatrix3(U),N=G.applyMatrix3(U),v=J.set(K.x,N.x,0,K.y,N.y,0,0,0,1),E=ee.copy(v).invert(),O=ne.copy(E).transpose().multiply(E).elements,Y=Q(O[0],O[1],O[4]),me=Math.sqrt(Y.rt1),ge=Math.sqrt(Y.rt2);if($.xRadius=1/me,$.yRadius=1/ge,$.aRotation=Math.atan2(Y.sn,Y.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ce=ee.set(me,0,0,0,ge,0,0,0,1),De=ne.set(Y.cs,Y.sn,0,-Y.sn,Y.cs,0,0,0,1),ue=Ce.multiply(De).multiply(v),He=Re=>{const{x:Oe,y:we}=new j(Math.cos(Re),Math.sin(Re),0).applyMatrix3(ue);return Math.atan2(we,Oe)};$.aStartAngle=He($.aStartAngle),$.aEndAngle=He($.aEndAngle),T(U)&&($.aClockwise=!$.aClockwise)}}function ie($){const ve=M(U),B=A(U);$.xRadius*=ve,$.yRadius*=B;const be=ve>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);$.aRotation+=be,T(U)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const fe=k.subPaths;for(let $=0,ve=fe.length;$<ve;$++){const be=fe[$].curves;for(let te=0;te<be.length;te++){const ce=be[te];ce.isLineCurve?(R(ce.v1),R(ce.v2)):ce.isCubicBezierCurve?(R(ce.v0),R(ce.v1),R(ce.v2),R(ce.v3)):ce.isQuadraticBezierCurve?(R(ce.v0),R(ce.v1),R(ce.v2)):ce.isEllipseCurve&&(W.set(ce.aX,ce.aY),R(W),ce.aX=W.x,ce.aY=W.y,z(U)?b(ce):ie(ce))}}}function T(k){const U=k.elements;return U[0]*U[4]-U[1]*U[3]<0}function z(k){const U=k.elements,R=U[0]*U[3]+U[1]*U[4];if(R===0)return!1;const b=M(k),ie=A(k);return Math.abs(R/(b*ie))>Number.EPSILON}function M(k){const U=k.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function A(k){const U=k.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function Q(k,U,R){let b,ie,fe,$,ve;const B=k+R,be=k-R,te=Math.sqrt(be*be+4*U*U);return B>0?(b=.5*(B+te),ve=1/b,ie=k*ve*R-U*ve*U):B<0?ie=.5*(B-te):(b=.5*te,ie=-.5*te),be>0?fe=be+te:fe=be-te,Math.abs(fe)>2*Math.abs(U)?(ve=-2*U/fe,$=1/Math.sqrt(1+ve*ve),fe=ve*$):Math.abs(U)===0?(fe=1,$=0):(ve=-.5*fe/U,fe=1/Math.sqrt(1+ve*ve),$=ve*fe),be>0&&(ve=fe,fe=-$,$=ve),{rt1:b,rt2:ie,cs:fe,sn:$}}const X=[],de={},H=[],J=new $e,ee=new $e,ne=new $e,L=new $e,W=new Se,q=new j,he=new $e,pe=new DOMParser().parseFromString(e,"image/svg+xml");return i(pe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:X,xml:pe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(x,m,u,_){const p=x.x,S=m.x,C=u.x,w=_.x,T=x.y,z=m.y,M=u.y,A=_.y,Q=(w-C)*(T-M)-(A-M)*(p-C),X=(S-p)*(T-M)-(z-T)*(p-C),de=(A-M)*(S-p)-(w-C)*(z-T),H=Q/de,J=X/de;if(de===0&&Q!==0||H<=0||H>=1||J<0||J>1)return null;if(Q===0&&de===0){for(let ee=0;ee<2;ee++)if(o(ee===0?u:_,x,m),r.loc==i.ORIGIN){const ne=ee===0?u:_;return{x:ne.x,y:ne.y,t:r.t}}else if(r.loc==i.BETWEEN){const ne=+(p+r.t*(S-p)).toPrecision(10),L=+(T+r.t*(z-T)).toPrecision(10);return{x:ne,y:L,t:r.t}}return null}else{for(let L=0;L<2;L++)if(o(L===0?u:_,x,m),r.loc==i.ORIGIN){const W=L===0?u:_;return{x:W.x,y:W.y,t:r.t}}const ee=+(p+H*(S-p)).toPrecision(10),ne=+(T+H*(z-T)).toPrecision(10);return{x:ee,y:ne,t:H}}}function o(x,m,u){const _=u.x-m.x,p=u.y-m.y,S=x.x-m.x,C=x.y-m.y,w=_*C-S*p;if(x.x===m.x&&x.y===m.y){r.loc=i.ORIGIN,r.t=0;return}if(x.x===u.x&&x.y===u.y){r.loc=i.DESTINATION,r.t=1;return}if(w<-Number.EPSILON){r.loc=i.LEFT;return}if(w>Number.EPSILON){r.loc=i.RIGHT;return}if(_*S<0||p*C<0){r.loc=i.BEHIND;return}if(Math.sqrt(_*_+p*p)<Math.sqrt(S*S+C*C)){r.loc=i.BEYOND;return}let T;_!==0?T=S/_:T=C/p,r.loc=i.BETWEEN,r.t=T}function a(x,m){const u=[],_=[];for(let p=1;p<x.length;p++){const S=x[p-1],C=x[p];for(let w=1;w<m.length;w++){const T=m[w-1],z=m[w],M=s(S,C,T,z);M!==null&&u.find(A=>A.t<=M.t+Number.EPSILON&&A.t>=M.t-Number.EPSILON)===void 0&&(u.push(M),_.push(new Se(M.x,M.y)))}}return _}function l(x,m,u){const _=new Se;m.getCenter(_);const p=[];return u.forEach(S=>{S.boundingBox.containsPoint(_)&&a(x,S.points).forEach(w=>{p.push({identifier:S.identifier,isCW:S.isCW,point:w})})}),p.sort((S,C)=>S.point.x-C.point.x),p}function c(x,m,u,_,p){(p==null||p==="")&&(p="nonzero");const S=new Se;x.boundingBox.getCenter(S);const C=[new Se(u,S.y),new Se(_,S.y)],w=l(C,x.boundingBox,m);w.sort((X,de)=>X.point.x-de.point.x);const T=[],z=[];w.forEach(X=>{X.identifier===x.identifier?T.push(X):z.push(X)});const M=T[0].point.x,A=[];let Q=0;for(;Q<z.length&&z[Q].point.x<M;)A.length>0&&A[A.length-1]===z[Q].identifier?A.pop():A.push(z[Q].identifier),Q++;if(A.push(x.identifier),p==="evenodd"){const X=A.length%2===0,de=A[A.length-2];return{identifier:x.identifier,isHole:X,for:de}}else if(p==="nonzero"){let X=!0,de=null,H=null;for(let J=0;J<A.length;J++){const ee=A[J];X?(H=m[ee].isCW,X=!1,de=ee):H!==m[ee].isCW&&(H=m[ee].isCW,X=!0)}return{identifier:x.identifier,isHole:X,for:de}}else console.warn('fill-rule: "'+p+'" is currently not implemented.')}let d=999999999,h=-999999999,f=e.subPaths.map(x=>{const m=x.getPoints();let u=-999999999,_=999999999,p=-999999999,S=999999999;for(let C=0;C<m.length;C++){const w=m[C];w.y>u&&(u=w.y),w.y<_&&(_=w.y),w.x>p&&(p=w.x),w.x<S&&(S=w.x)}return h<=p&&(h=p+1),d>=S&&(d=S-1),{curves:x.curves,points:m,isCW:vu.isClockWise(m),identifier:-1,boundingBox:new aR(new Se(S,_),new Se(p,u))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;const g=f.map(x=>c(x,f,d,h,e.userData?e.userData.style.fillRule:void 0)),y=[];return f.forEach(x=>{if(!g[x.identifier].isHole){const u=new rc;u.curves=x.curves,g.filter(p=>p.isHole&&p.for===x.identifier).forEach(p=>{const S=f[p.identifier],C=new io;C.curves=S.curves,u.holes.push(C)}),y.push(u)}}),y}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Bc.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new ci;return l.setAttribute("position",new nn(s,3)),l.setAttribute("normal",new nn(o,3)),l.setAttribute("uv",new nn(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const c=new Se,d=new Se,h=new Se,f=new Se,g=new Se,y=new Se,x=new Se,m=new Se,u=new Se,_=new Se,p=new Se,S=new Se,C=new Se,w=new Se,T=new Se,z=new Se,M=new Se;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=be(e);const A=e.length;if(A<2)return 0;const Q=e[0].equals(e[A-1]);let X,de=e[0],H;const J=n.strokeWidth/2,ee=1/(A-1);let ne=0,L,W,q,he,pe=!1,se=0,k=l*3,U=l*2;R(e[0],e[1],c).multiplyScalar(J),m.copy(e[0]).sub(c),u.copy(e[0]).add(c),_.copy(m),p.copy(u);for(let te=1;te<A;te++){X=e[te],te===A-1?Q?H=e[1]:H=void 0:H=e[te+1];const ce=c;if(R(de,X,ce),h.copy(ce).multiplyScalar(J),S.copy(X).sub(h),C.copy(X).add(h),L=ne+ee,W=!1,H!==void 0){R(X,H,d),h.copy(d).multiplyScalar(J),w.copy(X).sub(h),T.copy(X).add(h),q=!0,h.subVectors(H,de),ce.dot(h)<0&&(q=!1),te===1&&(pe=q),h.subVectors(H,X),h.normalize();const G=Math.abs(ce.dot(h));if(G>Number.EPSILON){const K=J/G;h.multiplyScalar(-K),f.subVectors(X,de),g.copy(f).setLength(K).add(h),z.copy(g).negate();const N=g.length(),v=f.length();f.divideScalar(v),y.subVectors(H,X);const E=y.length();switch(y.divideScalar(E),f.dot(z)<v&&y.dot(z)<E&&(W=!0),M.copy(g).add(X),z.add(X),he=!1,W?q?(T.copy(z),C.copy(z)):(w.copy(z),S.copy(z)):fe(),n.strokeLineJoin){case"bevel":$(q,W,L);break;case"round":ve(q,W),q?ie(X,S,w,L,0):ie(X,T,C,L,1);break;case"miter":case"miter-clip":default:const F=J*n.strokeMiterLimit/N;if(F<1)if(n.strokeLineJoin!=="miter-clip"){$(q,W,L);break}else ve(q,W),q?(y.subVectors(M,S).multiplyScalar(F).add(S),x.subVectors(M,w).multiplyScalar(F).add(w),b(S,L,0),b(y,L,0),b(X,L,.5),b(X,L,.5),b(y,L,0),b(x,L,0),b(X,L,.5),b(x,L,0),b(w,L,0)):(y.subVectors(M,C).multiplyScalar(F).add(C),x.subVectors(M,T).multiplyScalar(F).add(T),b(C,L,1),b(y,L,1),b(X,L,.5),b(X,L,.5),b(y,L,1),b(x,L,1),b(X,L,.5),b(x,L,1),b(T,L,1));else W?(q?(b(u,ne,1),b(m,ne,0),b(M,L,0),b(u,ne,1),b(M,L,0),b(z,L,1)):(b(u,ne,1),b(m,ne,0),b(M,L,1),b(m,ne,0),b(z,L,0),b(M,L,1)),q?w.copy(M):T.copy(M)):q?(b(S,L,0),b(M,L,0),b(X,L,.5),b(X,L,.5),b(M,L,0),b(w,L,0)):(b(C,L,1),b(M,L,1),b(X,L,.5),b(X,L,.5),b(M,L,1),b(T,L,1)),he=!0;break}}else fe()}else fe();!Q&&te===A-1&&B(e[0],_,p,q,!0,ne),ne=L,de=X,m.copy(w),u.copy(T)}if(!Q)B(X,S,C,q,!1,L);else if(W&&s){let te=M,ce=z;pe!==q&&(te=z,ce=M),q?(he||pe)&&(ce.toArray(s,0*3),ce.toArray(s,3*3),he&&te.toArray(s,1*3)):(he||!pe)&&(ce.toArray(s,1*3),ce.toArray(s,3*3),he&&te.toArray(s,0*3))}return se;function R(te,ce,G){return G.subVectors(ce,te),G.set(-G.y,G.x).normalize()}function b(te,ce,G){s&&(s[k]=te.x,s[k+1]=te.y,s[k+2]=0,o&&(o[k]=0,o[k+1]=0,o[k+2]=1),k+=3,a&&(a[U]=ce,a[U+1]=G,U+=2)),se+=3}function ie(te,ce,G,K,N){c.copy(ce).sub(te).normalize(),d.copy(G).sub(te).normalize();let v=Math.PI;const E=c.dot(d);Math.abs(E)<1&&(v=Math.abs(Math.acos(E))),v/=i,h.copy(ce);for(let F=0,re=i-1;F<re;F++)f.copy(h).rotateAround(te,v),b(h,K,N),b(f,K,N),b(te,K,.5),h.copy(f);b(f,K,N),b(G,K,N),b(te,K,.5)}function fe(){b(u,ne,1),b(m,ne,0),b(S,L,0),b(u,ne,1),b(S,L,1),b(C,L,0)}function $(te,ce,G){ce?te?(b(u,ne,1),b(m,ne,0),b(S,L,0),b(u,ne,1),b(S,L,0),b(z,L,1),b(S,G,0),b(w,G,0),b(z,G,.5)):(b(u,ne,1),b(m,ne,0),b(C,L,1),b(m,ne,0),b(z,L,0),b(C,L,1),b(C,G,1),b(z,G,0),b(T,G,1)):te?(b(S,G,0),b(w,G,0),b(X,G,.5)):(b(C,G,1),b(T,G,0),b(X,G,.5))}function ve(te,ce){ce&&(te?(b(u,ne,1),b(m,ne,0),b(S,L,0),b(u,ne,1),b(S,L,0),b(z,L,1),b(S,ne,0),b(X,L,.5),b(z,L,1),b(X,L,.5),b(w,ne,0),b(z,L,1)):(b(u,ne,1),b(m,ne,0),b(C,L,1),b(m,ne,0),b(z,L,0),b(C,L,1),b(C,ne,1),b(z,L,0),b(X,L,.5),b(X,L,.5),b(z,L,0),b(T,ne,1)))}function B(te,ce,G,K,N,v){switch(n.strokeLineCap){case"round":N?ie(te,G,ce,v,.5):ie(te,ce,G,v,.5);break;case"square":if(N)c.subVectors(ce,te),d.set(c.y,-c.x),h.addVectors(c,d).add(te),f.subVectors(d,c).add(te),K?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(G,te),d.set(c.y,-c.x),h.addVectors(c,d).add(te),f.subVectors(d,c).add(te);const E=s.length;K?(h.toArray(s,E-1*3),f.toArray(s,E-2*3),f.toArray(s,E-4*3)):(f.toArray(s,E-2*3),h.toArray(s,E-1*3),f.toArray(s,E-4*3))}break}}function be(te){let ce=!1;for(let K=1,N=te.length-1;K<N;K++)if(te[K].distanceTo(te[K+1])<r){ce=!0;break}if(!ce)return te;const G=[];G.push(te[0]);for(let K=1,N=te.length-1;K<N;K++)te[K].distanceTo(te[K+1])>=r&&G.push(te[K]);return G.push(te[te.length-1]),G}}}const Hl=100,Ld=3,Wo=7,hv=.5,fv=25,dR=1500,Nd=6,Ls={water:{r:17,g:22,b:41},land:{r:54,g:63,b:84}},Jt="#9333ea";function hR({cards:t,selectedCards:e,autoRotate:n,onMarkerClick:i,onMarkerVisibilityChange:r,onInteraction:s,focusCardId:o,visibleGroups:a}){const l=ye.useRef(null),c=ye.useRef(null),d=ye.useRef(null),h=ye.useRef(null),f=ye.useRef(null),g=ye.useRef(null),y=ye.useRef(null),x=ye.useRef([]),m=ye.useRef(null),u=ye.useRef(0),_=ye.useRef({}),p=ye.useRef({}),S=ye.useRef({}),C=ye.useRef(null),w=ye.useRef(e),T=ye.useRef(r),z=ye.useRef(s),M=ye.useRef(!1),[A,Q]=ye.useState(!1),X=ye.useRef(null),de=ye.useRef(null),H=ye.useRef({}),J=ye.useRef(new j),ee=ye.useRef(new j),ne=ye.useRef(new j),L=ye.useRef(new j),W=ye.useRef(new Se);ye.useEffect(()=>{w.current=e},[e]),ye.useEffect(()=>{T.current=r},[r]),ye.useEffect(()=>{z.current=s},[s]);const q=ye.useCallback(()=>{const K=document.createElement("canvas");K.width=4096,K.height=4096/2;const N=K.getContext("2d");N.fillStyle="#000003",N.fillRect(0,0,K.width,K.height);for(let v=0;v<2500;v++){const E=Math.random()*K.width,F=Math.random()*K.height,re=Math.random()*1.2+.3,O=Math.random();let Y,me,ge;const Me=Math.random();Me<.7?Y=me=ge=180+Math.random()*50:Me<.85?(Y=160+Math.random()*40,me=180+Math.random()*40,ge=220):(Y=220,me=210+Math.random()*20,ge=160+Math.random()*40),N.beginPath(),N.arc(E,F,re,0,Math.PI*2),N.fillStyle=`rgba(${Y}, ${me}, ${ge}, ${(.2+O*.4)*.6})`,N.fill()}return new Is(K)},[]),he=ye.useCallback(G=>{const N=document.createElement("canvas");N.width=2048,N.height=2048/2;const v=N.getContext("2d",{willReadFrequently:!0});v.drawImage(G,0,0,N.width,N.height);const F=v.getImageData(0,0,N.width,N.height).data,re=document.createElement("canvas");re.width=2048,re.height=2048/2;const O=re.getContext("2d"),Y=O.createImageData(2048,2048/2),me=Y.data,ge=document.createElement("canvas");ge.width=2048,ge.height=2048/2;const Me=ge.getContext("2d"),Ce=Me.createImageData(2048,2048/2),De=Ce.data;for(let Re=0;Re<F.length;Re+=4){const we=F[Re]>100;me[Re]=me[Re+1]=me[Re+2]=we?0:255,me[Re+3]=255,we?(De[Re]=Ls.water.r,De[Re+1]=Ls.water.g,De[Re+2]=Ls.water.b):(De[Re]=Ls.land.r,De[Re+1]=Ls.land.g,De[Re+2]=Ls.land.b),De[Re+3]=255}O.putImageData(Y,0,0),Me.putImageData(Ce,0,0);const ue=document.createElement("canvas");ue.width=2048,ue.height=2048/2;const He=ue.getContext("2d");return He.filter="blur(1px)",He.drawImage(re,0,0),{colorTexture:new Is(ge),displacementTexture:new Is(ue)}},[]),pe=ye.useCallback((G=Jt)=>{const K=document.createElement("canvas");K.width=128,K.height=128;const N=K.getContext("2d");N.fillStyle=G,N.beginPath();for(let v=0;v<10;v++){const E=v%2===0?60:25,F=v*Math.PI/5-Math.PI/2,re=64+Math.cos(F)*E,O=64+Math.sin(F)*E;v===0?N.moveTo(re,O):N.lineTo(re,O)}return N.closePath(),N.fill(),new Is(K)},[]),se=ye.useCallback((G=Jt)=>new Promise(K=>{if(G===Jt){const N=new Image;N.onload=()=>{const E=document.createElement("canvas");E.width=128,E.height=128,E.getContext("2d").drawImage(N,0,0,128,128),K(new Is(E))},N.onerror=()=>{K(pe(G))};const v="/anking-globe/";N.src=v+"star.svg"}else K(pe(G))}),[pe]),k=ye.useCallback((G=Jt)=>{const K=document.createElement("canvas");K.width=128,K.height=128;const N=K.getContext("2d");let v=147,E=51,F=234;if(G.startsWith("#")){const O=G.slice(1);v=parseInt(O.slice(0,2),16),E=parseInt(O.slice(2,4),16),F=parseInt(O.slice(4,6),16)}const re=N.createRadialGradient(64,64,0,64,64,64);return re.addColorStop(0,`rgba(${v}, ${E}, ${F}, 0.5)`),re.addColorStop(.3,`rgba(${v}, ${E}, ${F}, 0.2)`),re.addColorStop(.6,`rgba(${v}, ${E}, ${F}, 0.05)`),re.addColorStop(1,`rgba(${v}, ${E}, ${F}, 0)`),N.fillStyle=re,N.fillRect(0,0,128,128),new Is(K)},[]),U=ye.useCallback(G=>{let K=147,N=51,v=234;if(G.startsWith("#")){const E=G.slice(1);K=parseInt(E.slice(0,2),16),N=parseInt(E.slice(2,4),16),v=parseInt(E.slice(4,6),16)}return{r:K,g:N,b:v}},[]),R=ye.useCallback(()=>{const N=new Bc().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z"/></svg>'),E=Bc.createShapes(N.paths[0])[0],F=11.04/2,re=11.53/2,O=Math.max(11.04,11.53),Y=Wo/O,ge=E.getPoints(32).map(we=>({x:(we.x-F)*Y,y:-(we.y-re)*Y})),Me=20,Ce=ge.length,De=[],ue=[],He=[];for(let we=0;we<=Me;we++){const Ae=we/Me,D=Ae*fv,_e=1+Ae*1.2;for(let Ne=0;Ne<Ce;Ne++){const Ie=ge[Ne];De.push(Ie.x*_e,Ie.y*_e,D),ue.push(Ne/Ce,Ae)}De.push(0,0,D),ue.push(.5,Ae)}const Re=Ce+1;for(let we=0;we<Me;we++){const Ae=we*Re,D=(we+1)*Re;for(let _e=0;_e<Ce;_e++){const Ne=Ae+_e,Ie=Ae+(_e+1)%Ce,xe=D+_e,V=D+(_e+1)%Ce;He.push(Ne,Ie,xe),He.push(Ie,V,xe)}}const Oe=new ci;return Oe.setAttribute("position",new nn(De,3)),Oe.setAttribute("uv",new nn(ue,2)),Oe.setIndex(He),Oe.computeVertexNormals(),Oe},[]),b=ye.useCallback((G=Jt)=>{const{r:K,g:N,b:v}=U(G),E=R(),F=new Oi({uniforms:{color:{value:new tt(K/255,N/255,v/255)},opacity:{value:.35},rayLength:{value:fv}},vertexShader:`
        varying float vDistance;
        uniform float rayLength;
        
        void main() {
          vDistance = position.z / rayLength;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float opacity;
        varying float vDistance;
        
        void main() {
          float fade = 1.0 - vDistance;
          fade = fade * fade * fade;
          float alpha = fade * opacity;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:In,depthWrite:!1,blending:ra}),re=new un(E,F);return re.position.z=.3,re.userData={type:"beam"},re},[U,R]),ie=ye.useCallback((G,K,N,v=[])=>{const E=new $s,F=new $s;F.userData={type:"starContainer"};const re=new un(new Pa(Wo*2.5,Wo*2.5),new oa({map:N,transparent:!0,opacity:.3,side:In,depthWrite:!1,blending:ra}));re.position.z=.1,re.userData={type:"glow"};const O=new un(new Pa(Wo,Wo),new oa({map:K,transparent:!0,opacity:1,side:In,depthWrite:!1}));O.position.z=.2,O.userData={type:"star"},F.add(re),F.add(O),E.add(F);const Y=G.starColor||Jt,me=b(Y);E.add(me),H.current[G.id]=1;let ge=G.lat,Me=G.lng;const Ce=8,De=2.5;let ue=0;const He=8;for(;ue<He;){const we=(90-ge)*(Math.PI/180),Ae=(Me+180)*(Math.PI/180),D=Hl+Ld+hv,_e=new j(-D*Math.sin(we)*Math.cos(Ae),D*Math.cos(we),D*Math.sin(we)*Math.sin(Ae));let Ne=!1;for(const V of v)if(_e.distanceTo(V.position)<Ce){Ne=!0;break}if(!Ne){E.position.copy(_e);break}const Ie=ue*Math.PI/4,xe=De*(1+ue*.3);ge=G.lat+Math.sin(Ie)*xe,Me=G.lng+Math.cos(Ie)*xe,ue++}if(ue>=He){const we=(90-G.lat)*(Math.PI/180),Ae=(G.lng+180)*(Math.PI/180),D=Hl+Ld+hv;E.position.set(-D*Math.sin(we)*Math.cos(Ae),D*Math.cos(we),D*Math.sin(we)*Math.sin(Ae))}const Re=E.position.clone().normalize(),Oe=E.position.clone().add(Re);return E.lookAt(Oe),E.userData={card:G},p.current[G.id]=1,E},[b]),fe=ye.useCallback((G,K,N)=>{var me;ne.current.subVectors(K,G).normalize(),L.current.copy(G).normalize();const v=ne.current.dot(L.current),F=((me=_.current[N])==null?void 0:me.visible)??!1?v>-.15:v>0;if(!F)return{visible:!1,targetOpacity:0,scale:0};let re=1;v<.2&&(re=Math.max(0,(v+.15)/.35));const O=K.distanceTo(G),Y=Math.max(.6,Math.min(1,280/O));return{visible:F,targetOpacity:re,scale:Y}},[]),$=ye.useCallback(G=>{const K=d.current,N=h.current;if(!K||!N)return;const v=(90-G.lat)*(Math.PI/180),E=(G.lng+180)*(Math.PI/180),F=new j(-220*Math.sin(v)*Math.cos(E),220*Math.cos(v),220*Math.sin(v)*Math.sin(E)),re=K.position.clone(),O=N.target.clone(),Y=new j(0,0,0),me=performance.now(),ge=2e3,Me=Ce=>{const De=Ce-me;let ue=Math.min(De/ge,1);if(ue>=1){K.position.copy(F),N.target.set(0,0,0),N.update();return}const He=ue<.5?16*ue*ue*ue*ue*ue:1-Math.pow(-2*ue+2,5)/2;K.position.lerpVectors(re,F,He),N.target.lerpVectors(O,Y,He),N.update(),requestAnimationFrame(Me)};requestAnimationFrame(Me)},[]),ve=ye.useCallback((G,K,N)=>{ne.current.subVectors(N,G);const v=ne.current.dot(K);return v<0?1/0:(L.current.copy(K).multiplyScalar(v).add(G),L.current.distanceTo(N))},[]),B=ye.useCallback((G,K)=>{const N=d.current,v=l.current,E=x.current;if(!N||!v||E.length===0)return null;const F=v.getBoundingClientRect();W.current.set((G-F.left)/F.width*2-1,-((K-F.top)/F.height)*2+1),J.current.copy(N.position),ee.current.set(W.current.x,W.current.y,.5).unproject(N).sub(J.current).normalize();let re=null,O=Nd;const Y=X.current?Nd*1.2:Nd;if(X.current)for(const me of E){const ge=me.userData.card;if(ge&&ge.id===X.current&&me.visible){if((p.current[ge.id]??0)>.3&&ve(J.current,ee.current,me.position)<Y)return ge;break}}for(const me of E){if(!me.visible)continue;const ge=me.userData.card;if(!ge||(p.current[ge.id]??0)<.3)continue;const Ce=ve(J.current,ee.current,me.position);Ce<O&&(O=Ce,re=ge)}return re},[ve]);ye.useEffect(()=>{if(o&&o!==m.current&&t.length>0){m.current=o;const G=parseInt(o.split("-")[0],10),K=t.find(N=>N.id===G);K&&$(K)}},[o,t,$]),ye.useEffect(()=>{if(!l.current||M.current)return;M.current=!0;const G=l.current,K=new MC;K.background=new tt(3),c.current=K;const N=new Pn(45,G.clientWidth/G.clientHeight,1,3e3);N.position.z=320,d.current=N;const v=new Fy({antialias:!0,powerPreference:"high-performance"});v.setSize(G.clientWidth,G.clientHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.appendChild(v.domElement),f.current=v;const E=new cR(N,v.domElement);E.enableDamping=!0,E.dampingFactor=.05,E.minDistance=150,E.maxDistance=600,E.enablePan=!1,E.autoRotateSpeed=.5,h.current=E,E.addEventListener("start",()=>{z.current&&z.current()});const F=new MutationObserver(Re=>{for(const Oe of Re)if(Oe.type==="attributes"&&Oe.attributeName==="style"){const we=Oe.target;we.style.cursor&&we.style.cursor!==""&&(we.style.cursor="")}});F.observe(v.domElement,{attributes:!0,attributeFilter:["style"]});const re=new un(new ca(dR,64,32),new oa({map:q(),side:qt,transparent:!0,opacity:.7}));K.add(re),g.current=re;const O=new un(new ca(Hl,200,100),new nv({color:1119785}));K.add(O);const Y=new Image;Y.crossOrigin="anonymous",Y.onload=()=>{const{colorTexture:Re,displacementTexture:Oe}=he(Y);O.material.dispose(),O.material=new nv({map:Re,displacementMap:Oe,displacementScale:Ld,roughness:.85,metalness:.05})};const me="/anking-globe/";Y.src=me+"earth_specular.png",K.add(new un(new ca(Hl+18,32,32),new Oi({vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }",blending:ra,side:qt,transparent:!0}))),K.add(new oR(10053324,.25));const ge=new ov(16772829,1);ge.position.set(300,100,200),K.add(ge),y.current=ge,K.add(new ov(9647082,.2).translateX(-200).translateY(-100).translateZ(-200));const Me=k(Jt);C.current=Me,se(Jt).then(Re=>{S.current[Jt]=Re});const Ce=()=>{N.aspect=G.clientWidth/G.clientHeight,N.updateProjectionMatrix(),v.setSize(G.clientWidth,G.clientHeight)};window.addEventListener("resize",Ce);const De=new j;let ue;const He=Re=>{var Le,ze;if(ue=requestAnimationFrame(He),E.update(),u.current++,g.current&&(g.current.rotation.y=-N.rotation.y*.1,g.current.rotation.x=-N.rotation.x*.05),y.current){const Fe=Re*1e-4;y.current.position.set(Math.cos(Fe)*400,Math.sin(Fe*.3)*100+50,Math.sin(Fe)*400)}const Oe=1+Math.sin(Re*.002)*.03,we=.25+Math.sin(Re*.002)*.05,Ae=.3+Math.sin(Re*.003)*.08,D=Re*5e-4,_e=x.current,Ne=w.current,Ie={},xe=N.position,V=G.clientWidth,Te=G.clientHeight;for(let Fe=0;Fe<_e.length;Fe++){const Ge=_e[Fe],We=Ge.userData.card;if(!We)continue;const{visible:ut,targetOpacity:ht,scale:et}=fe(Ge.position,xe,We.id);_.current[We.id]={visible:ut};const ft=p.current[We.id]??1,Tt=ft+(ht-ft)*.1;p.current[We.id]=Tt,Ge.visible=Tt>.01;const Co=Ne==null?void 0:Ne.includes(We.id),Ya=H.current[We.id]??1,ds=Ya+((Co?0:1)-Ya)*.08;H.current[We.id]=ds;let Zn=null;for(const yt of Ge.children)((Le=yt.userData)==null?void 0:Le.type)==="starContainer"&&(Zn=yt);Co?(Ge.scale.setScalar(.7*et),Zn&&(Zn.rotation.z=D),Ge.traverse(yt=>{var br,Cr,P;((br=yt.userData)==null?void 0:br.type)==="star"?yt.material.opacity=Tt:((Cr=yt.userData)==null?void 0:Cr.type)==="glow"?(yt.material.opacity=.6*Tt,yt.scale.setScalar(1.8)):((P=yt.userData)==null?void 0:P.type)==="beam"&&yt.material.uniforms&&(yt.material.uniforms.opacity.value=ds*.35*Tt)})):(Ge.scale.setScalar(Oe*et),Zn&&(Zn.rotation.z=0),Ge.traverse(yt=>{var br,Cr,P;((br=yt.userData)==null?void 0:br.type)==="star"?yt.material.opacity=Tt:((Cr=yt.userData)==null?void 0:Cr.type)==="glow"?(yt.material.opacity=we*Tt,yt.scale.setScalar(1)):((P=yt.userData)==null?void 0:P.type)==="beam"&&yt.material.uniforms&&(yt.material.uniforms.opacity.value=ds*Ae*Tt)})),De.copy(Ge.position).project(N);const Ka=(De.x*.5+.5)*V,Ja=(-De.y*.5+.5)*Te;Ie[We.id]={visible:Ge.visible,screenPos:{x:Ka,y:Ja},scale:et,opacity:Tt}}_e.length>0&&u.current%3===0&&((ze=T.current)==null||ze.call(T,Ie)),v.render(K,N)};return He(0),()=>{window.removeEventListener("resize",Ce),cancelAnimationFrame(ue),F.disconnect(),K.traverse(Re=>{Re.geometry&&Re.geometry.dispose(),Re.material&&(Array.isArray(Re.material)?Re.material.forEach(Oe=>Oe.dispose()):Re.material.dispose())}),v.dispose(),G&&v.domElement.parentNode===G&&G.removeChild(v.domElement),M.current=!1}},[]),ye.useEffect(()=>()=>{de.current&&cancelAnimationFrame(de.current)},[]),ye.useEffect(()=>{if(h.current){const G=n&&!A&&(!e||e.length===0);h.current.autoRotate=G}},[n,A,e]),ye.useEffect(()=>{if(!c.current||!C.current||!S.current[Jt])return;x.current.forEach(K=>{K.traverse(N=>{N.geometry&&N.geometry.dispose(),N.material&&N.material.dispose()}),c.current.remove(K)}),x.current=[],p.current={},H.current={};let G=t;a&&a.length>0&&!a.includes("all")&&(G=t.filter(K=>!K.groups||K.groups.length===0?!1:K.groups.some(N=>a.includes(N)))),G.forEach(K=>{const N=K.starColor||Jt,v=S.current[N]||S.current[Jt],E=k(N),F=ie(K,v,E,x.current);c.current.add(F),x.current.push(F)})},[t,a,ie,k]),ye.useEffect(()=>{const G=setInterval(()=>{if(S.current[Jt]&&c.current&&x.current.length===0&&t.length>0){let K=t;a&&a.length>0&&!a.includes("all")&&(K=t.filter(N=>!N.groups||N.groups.length===0?!1:N.groups.some(v=>a.includes(v)))),K.forEach(N=>{const v=N.starColor||Jt,E=S.current[v]||S.current[Jt],F=k(v),re=ie(N,E,F,x.current);c.current.add(re),x.current.push(re)}),clearInterval(G)}},100);return()=>clearInterval(G)},[t,a,ie,k]);const be=ye.useCallback(G=>{const K=B(G.clientX,G.clientY);K&&(i(K),$(K))},[i,B,$]),te=ye.useCallback(G=>{const K=B(G.clientX,G.clientY),N=(K==null?void 0:K.id)??null;N!==X.current&&(X.current=N,de.current&&cancelAnimationFrame(de.current),de.current=requestAnimationFrame(()=>{Q(N!==null),de.current=null}))},[B]),ce=ye.useCallback(()=>{de.current&&cancelAnimationFrame(de.current),X.current=null,Q(!1)},[]);return I.jsx("div",{ref:l,className:`globe-canvas ${A?"hovering-star":""}`,onClick:be,onPointerMove:te,onPointerLeave:ce})}function fR({cards:t=[],selectedCards:e=[],autoRotate:n,onAutoRotateChange:i,onToggleCard:r,onOpenAll:s,onCloseAll:o,onManageClick:a,isEmbedMode:l}){const[c,d]=ye.useState(!1),[h,f]=ye.useState(!1);return l?null:I.jsxs(I.Fragment,{children:[I.jsx("button",{className:"controls-toggle",onClick:()=>d(!c),children:I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("circle",{cx:"12",cy:"12",r:"3"}),I.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),c&&I.jsxs("div",{className:"controls-panel",children:[I.jsx("h3",{children:"Settings"}),I.jsx("div",{className:"control-item",children:I.jsxs("label",{className:"toggle-label",children:[I.jsx("span",{children:"Auto Rotate"}),I.jsxs("div",{className:"toggle-switch",children:[I.jsx("input",{type:"checkbox",checked:n,onChange:g=>i==null?void 0:i(g.target.checked)}),I.jsx("span",{className:"toggle-slider"})]})]})}),I.jsx("div",{className:"control-divider"}),I.jsxs("div",{className:"control-item dropdown-section",children:[I.jsxs("button",{className:"dropdown-toggle",onClick:()=>f(!h),children:[I.jsxs("span",{children:["Members (",t.length,")"]}),I.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:h?"rotate(180deg)":"none",transition:"transform 0.2s"},children:I.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),h&&I.jsxs("div",{className:"member-dropdown",children:[I.jsxs("div",{className:"dropdown-actions",children:[I.jsxs("button",{className:"dropdown-action-btn",onClick:s,children:[I.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),I.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]}),I.jsxs("button",{className:"dropdown-action-btn",onClick:o,children:[I.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),I.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]})]}),I.jsx("div",{className:"member-list",children:t.map(g=>I.jsxs("button",{className:`member-item ${e.includes(g.id)?"selected":""}`,onClick:()=>r==null?void 0:r(g.id),children:[I.jsx("span",{className:"member-name",children:g.name}),I.jsx("span",{className:"member-location",children:g.location}),e.includes(g.id)&&I.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("polyline",{points:"20 6 9 17 4 12"})})]},g.id))})]})]}),I.jsx("div",{className:"control-divider"}),I.jsxs("button",{className:"manage-btn",onClick:a,children:[I.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),I.jsx("circle",{cx:"9",cy:"7",r:"4"}),I.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),I.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Manage Members"]})]})]})}const ln="https://api-efgn5mw6aq-uc.a.run.app";function $h(t){return t?t.startsWith("http")?t:`https://storage.googleapis.com/anking-globe.appspot.com/cards/${t}`:""}async function pR(){const t=await fetch(`${ln}/cards`);if(!t.ok)throw new Error("Failed to fetch cards");return t.json()}function mR({card:t,visibilityData:e,onClose:n,onFocus:i,isFocused:r,zIndex:s}){const[o,a]=ye.useState(!1),l=e==null?void 0:e[t.id];if(!l||!l.visible||l.opacity<.05)return null;const{screenPos:c,scale:d,opacity:h}=l,f=.75,g=r?1.3:1,y=o?1.5:1,x=d*f*g*y,m=280;let u=c.x+15,_=c.y-40;u+m*x>window.innerWidth-10&&(u=c.x-m*x-15),u=Math.max(10,u),_=Math.max(10,Math.min(window.innerHeight-100*x,_));const p=c.x-u,S=c.y-_,C=r?2e3:s;return I.jsx("div",{className:`popup-card ${r?"focused":""}`,style:{left:u,top:_,transform:`scale(${x})`,transformOrigin:`${p}px ${S}px`,opacity:h,zIndex:C,pointerEvents:h>.3?"auto":"none"},onClick:w=>{w.stopPropagation(),i(t.id)},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:I.jsx("div",{className:"popup-card-inner",children:I.jsxs("div",{className:"card-horizontal",children:[I.jsx("div",{className:"card-avatar-side",children:I.jsx("img",{src:$h(t.image),alt:t.name,onError:w=>{w.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=9333ea&color=fff`}})}),I.jsxs("div",{className:"card-text-side",children:[I.jsx("div",{className:"card-name",children:t.name}),I.jsxs("div",{className:"card-info-compact",children:[t.title,t.title&&t.university&&" · ",t.university]}),I.jsxs("div",{className:"card-location-compact",children:[I.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),I.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),t.location]})]}),I.jsx("button",{className:"popup-close",onClick:w=>{w.stopPropagation(),n(t.id)},children:I.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#333",strokeWidth:"2",children:[I.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),I.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})})}function gR(){return I.jsx("div",{className:"loading-screen",children:I.jsxs("div",{className:"loading-content",children:[I.jsx("div",{className:"loading-spinner"}),I.jsx("p",{children:"Loading Globe..."})]})})}var pv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},vR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[d],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new _R;const f=s<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const y=c<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yR=function(t){const e=$y(t);return qy.encodeByteArray(e,!0)},zc=function(t){return yR(t).replace(/\./g,"")},Yy=function(t){try{return qy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=()=>xR().__FIREBASE_DEFAULTS__,ER=()=>{if(typeof process>"u"||typeof pv>"u")return;const t=pv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yy(t[1]);return e&&JSON.parse(e)},op=()=>{try{return SR()||ER()||MR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>{var e,n;return(n=(e=op())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TR=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Jy=()=>{var t;return(t=op())===null||t===void 0?void 0:t.config},Zy=t=>{var e;return(e=op())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zc(JSON.stringify(n)),zc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function CR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IR(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LR(){try{return typeof indexedDB=="object"}catch{return!1}}function NR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="FirebaseError";class zi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=DR,Object.setPrototypeOf(this,zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?UR(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new zi(r,a,i)}}function UR(t,e){return t.replace(OR,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const OR=/\{\$([^}]+)}/g;function kR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(mv(s)&&mv(o)){if(!Hc(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function mv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function FR(t,e){const n=new BR(t,e);return n.subscribe.bind(n)}class BR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Dd),r.error===void 0&&(r.error=Dd),r.complete===void 0&&(r.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GR(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:VR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VR(t){return t===Br?void 0:t}function GR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(st||(st={}));const jR={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},XR=st.INFO,$R={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},qR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=$R[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qy{constructor(e){this.name=e,this._logLevel=XR,this._logHandler=qR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in st))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...e),this._logHandler(this,st.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...e),this._logHandler(this,st.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,st.INFO,...e),this._logHandler(this,st.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,st.WARN,...e),this._logHandler(this,st.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...e),this._logHandler(this,st.ERROR,...e)}}const YR=(t,e)=>e.some(n=>t instanceof n);let gv,vv;function KR(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JR(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ex=new WeakMap,qh=new WeakMap,tx=new WeakMap,Ud=new WeakMap,ap=new WeakMap;function ZR(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ex.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function QR(t){if(qh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eP(t){Yh=t(Yh)}function tP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Od(this),e,...n);return tx.set(i,e.sort?e.sort():[e]),_r(i)}:JR().includes(t)?function(...e){return t.apply(Od(this),e),_r(ex.get(this))}:function(...e){return _r(t.apply(Od(this),e))}}function nP(t){return typeof t=="function"?tP(t):(t instanceof IDBTransaction&&QR(t),YR(t,KR())?new Proxy(t,Yh):t)}function _r(t){if(t instanceof IDBRequest)return ZR(t);if(Ud.has(t))return Ud.get(t);const e=nP(t);return e!==t&&(Ud.set(t,e),ap.set(e,t)),e}const Od=t=>ap.get(t);function iP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=_r(o);return i&&o.addEventListener("upgradeneeded",l=>{i(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const rP=["get","getKey","getAll","getAllKeys","count"],sP=["put","add","delete","clear"],kd=new Map;function _v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=sP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||rP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return kd.set(e,s),s}eP(t=>({...t,get:(e,n,i)=>_v(e,n)||t.get(e,n,i),has:(e,n)=>!!_v(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function aP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",yv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Qy("@firebase/app"),lP="@firebase/app-compat",cP="@firebase/analytics-compat",uP="@firebase/analytics",dP="@firebase/app-check-compat",hP="@firebase/app-check",fP="@firebase/auth",pP="@firebase/auth-compat",mP="@firebase/database",gP="@firebase/data-connect",vP="@firebase/database-compat",_P="@firebase/functions",yP="@firebase/functions-compat",xP="@firebase/installations",SP="@firebase/installations-compat",EP="@firebase/messaging",MP="@firebase/messaging-compat",TP="@firebase/performance",wP="@firebase/performance-compat",AP="@firebase/remote-config",bP="@firebase/remote-config-compat",CP="@firebase/storage",RP="@firebase/storage-compat",PP="@firebase/firestore",IP="@firebase/vertexai-preview",LP="@firebase/firestore-compat",NP="firebase",DP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",UP={[Kh]:"fire-core",[lP]:"fire-core-compat",[uP]:"fire-analytics",[cP]:"fire-analytics-compat",[hP]:"fire-app-check",[dP]:"fire-app-check-compat",[fP]:"fire-auth",[pP]:"fire-auth-compat",[mP]:"fire-rtdb",[gP]:"fire-data-connect",[vP]:"fire-rtdb-compat",[_P]:"fire-fn",[yP]:"fire-fn-compat",[xP]:"fire-iid",[SP]:"fire-iid-compat",[EP]:"fire-fcm",[MP]:"fire-fcm-compat",[TP]:"fire-perf",[wP]:"fire-perf-compat",[AP]:"fire-rc",[bP]:"fire-rc-compat",[CP]:"fire-gcs",[RP]:"fire-gcs-compat",[PP]:"fire-fst",[LP]:"fire-fst-compat",[IP]:"fire-vertex","fire-js":"fire-js",[NP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map,OP=new Map,Zh=new Map;function xv(t,e){try{t.container.addComponent(e)}catch(n){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yo(t){const e=t.name;if(Zh.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Vc.values())xv(n,t);for(const n of OP.values())xv(n,t);return!0}function lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ai(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Wa("app","Firebase",kP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=DP;function nx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw yr.create("bad-app-name",{appName:String(r)});if(n||(n=Jy()),!n)throw yr.create("no-options");const s=Vc.get(r);if(s){if(Hc(n,s.options)&&Hc(i,s.config))return s;throw yr.create("duplicate-app",{appName:r})}const o=new WR(r);for(const l of Zh.values())o.addComponent(l);const a=new FP(n,i,o);return Vc.set(r,a),a}function ix(t=Jh){const e=Vc.get(t);if(!e&&t===Jh&&Jy())return nx();if(!e)throw yr.create("no-app",{appName:t});return e}function xr(t,e,n){var i;let r=(i=UP[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(a.join(" "));return}yo(new os(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="firebase-heartbeat-database",zP=1,Da="firebase-heartbeat-store";let Fd=null;function rx(){return Fd||(Fd=iP(BP,zP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Fd}async function HP(t){try{const n=(await rx()).transaction(Da),i=await n.objectStore(Da).get(sx(t));return await n.done,i}catch(e){if(e instanceof zi)ki.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ki.warn(n.message)}}}async function Sv(t,e){try{const i=(await rx()).transaction(Da,"readwrite");await i.objectStore(Da).put(e,sx(t)),await i.done}catch(n){if(n instanceof zi)ki.warn(n.message);else{const i=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ki.warn(i.message)}}}function sx(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=1024,GP=30*24*60*60*1e3;class WP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XP(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ev();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=GP}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ki.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ev(),{heartbeatsToSend:i,unsentEntries:r}=jP(this._heartbeatsCache.heartbeats),s=zc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ki.warn(n),""}}}function Ev(){return new Date().toISOString().substring(0,10)}function jP(t,e=VP){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Mv(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class XP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LR()?NR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mv(t){return zc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){yo(new os("platform-logger",e=>new oP(e),"PRIVATE")),yo(new os("heartbeat",e=>new WP(e),"PRIVATE")),xr(Kh,yv,t),xr(Kh,yv,"esm2017"),xr("fire-js","")}$P("");var qP="firebase",YP="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr(qP,YP,"app");function cp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ox(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KP=ox,ax=new Wa("auth","Firebase",ox());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Qy("@firebase/auth");function JP(t,...e){Gc.logLevel<=st.WARN&&Gc.warn(`Auth (${Ao}): ${t}`,...e)}function sc(t,...e){Gc.logLevel<=st.ERROR&&Gc.error(`Auth (${Ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,...e){throw dp(t,...e)}function Kn(t,...e){return dp(t,...e)}function up(t,e,n){const i=Object.assign(Object.assign({},KP()),{[e]:n});return new Wa("auth","Firebase",i).create(e,{appName:t.name})}function Jr(t){return up(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZP(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ai(t,"argument-error"),up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dp(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ax.create(t,...e)}function je(t,e,...n){if(!t)throw dp(e,...n)}function bi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function Fi(t,e){t||bi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QP(){return Tv()==="http:"||Tv()==="https:"}function Tv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QP()||RR()||"connection"in navigator)?navigator.onLine:!0}function t2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fi(n>e,"Short delay should be less than long delay!"),this.isMobile=bR()||PR()}get(){return e2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){Fi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new Xa(3e4,6e4);function fp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bo(t,e,n,i,r={}){return cx(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=ja(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return CR()||(c.referrerPolicy="no-referrer"),lx.fetch()(ux(t,t.config.apiHost,n,a),c)})}async function cx(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},n2),e);try{const r=new s2(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vl(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw up(t,d,c);ai(t,d)}}catch(r){if(r instanceof zi)throw r;ai(t,"network-request-failed",{message:String(r)})}}async function r2(t,e,n,i,r={}){const s=await bo(t,e,n,i,r);return"mfaPendingCredential"in s&&ai(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ux(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?hp(t.config,r):`${t.config.apiScheme}://${r}`}class s2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Kn(this.auth,"network-request-failed")),i2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Kn(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(t,e){return bo(t,"POST","/v1/accounts:delete",e)}async function dx(t,e){return bo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a2(t,e=!1){const n=Hi(t),i=await n.getIdToken(e),r=pp(i);je(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ua(Bd(r.auth_time)),issuedAtTime:ua(Bd(r.iat)),expirationTime:ua(Bd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function pp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yy(n);return r?JSON.parse(r):(sc("Failed to decode base64 JWT payload"),null)}catch(r){return sc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wv(t){const e=pp(t);return je(e,"internal-error"),je(typeof e.exp<"u","internal-error"),je(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof zi&&l2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function l2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ua(t,dx(n,{idToken:i}));je(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hx(s.providerUserInfo):[],a=d2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ef(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function u2(t){const e=Hi(t);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d2(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function hx(t){return t.map(e=>{var{providerId:n}=e,i=cp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(t,e){const n=await cx(t,{},async()=>{const i=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=ux(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lx.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f2(t,e){return bo(t,"POST","/v2/accounts:revokeToken",fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(typeof e.idToken<"u","internal-error"),je(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){je(e.length!==0,"internal-error");const n=wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(je(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await h2(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ro;return i&&(je(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(je(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(je(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return bi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){je(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ef(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return je(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a2(this,e)}reload(){return u2(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ai(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await Ua(this,o2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,u=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:S,isAnonymous:C,providerData:w,stsTokenManager:T}=n;je(p&&T,e,"internal-error");const z=ro.fromJSON(this.name,T);je(typeof p=="string",e,"internal-error"),qi(h,e.name),qi(f,e.name),je(typeof S=="boolean",e,"internal-error"),je(typeof C=="boolean",e,"internal-error"),qi(g,e.name),qi(y,e.name),qi(x,e.name),qi(m,e.name),qi(u,e.name),qi(_,e.name);const M=new Ci({uid:p,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:C,photoURL:y,phoneNumber:g,tenantId:x,stsTokenManager:z,createdAt:u,lastLoginAt:_});return w&&Array.isArray(w)&&(M.providerData=w.map(A=>Object.assign({},A))),m&&(M._redirectEventId=m),M}static async _fromIdTokenResponse(e,n,i=!1){const r=new ro;r.updateFromServerResponse(n);const s=new Ci({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Wc(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];je(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?hx(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new ro;a.updateFromIdToken(i);const l=new Ci({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ef(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Map;function Ri(t){Fi(t instanceof Function,"Expected a class definition");let e=Av.get(t);return e?(Fi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Av.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fx.type="NONE";const bv=fx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=oc(this.userKey,r.apiKey,s),this.fullPersistenceKey=oc("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new so(Ri(bv),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Ri(bv);const o=oc(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Ci._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new so(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new so(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(px(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yx(e))return"Blackberry";if(xx(e))return"Webos";if(mx(e))return"Safari";if((e.includes("chrome/")||gx(e))&&!e.includes("edge/"))return"Chrome";if(_x(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function px(t=rn()){return/firefox\//i.test(t)}function mx(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gx(t=rn()){return/crios\//i.test(t)}function vx(t=rn()){return/iemobile/i.test(t)}function _x(t=rn()){return/android/i.test(t)}function yx(t=rn()){return/blackberry/i.test(t)}function xx(t=rn()){return/webos/i.test(t)}function mp(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function p2(t=rn()){var e;return mp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m2(){return IR()&&document.documentMode===10}function Sx(t=rn()){return mp(t)||_x(t)||xx(t)||yx(t)||/windows phone/i.test(t)||vx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e=[]){let n;switch(t){case"Browser":n=Cv(rn());break;case"Worker":n=`${Cv(rn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e={}){return bo(t,"GET","/v2/passwordPolicy",fp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=6;class y2{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new g2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ax,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dx(this,{idToken:e}),i=await Ci._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ai(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ai(this.app))return Promise.reject(Jr(this));const n=e?Hi(e):null;return n&&je(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ai(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ai(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v2(this),n=new y2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await f2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ri(e)||this._popupRedirectResolver;je(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(je(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ex(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _u(t){return Hi(t)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=FR(n=>this.observer=n)}get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S2(t){gp=t}function E2(t){return gp.loadJS(t)}function M2(){return gp.gapiScript}function T2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t,e){const n=lp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Hc(s,e??{}))return r;ai(r,"already-initialized")}return n.initialize({options:e})}function A2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function b2(t,e,n){const i=_u(t);je(i._canInitEmulator,i,"emulator-config-failed"),je(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Mx(e),{host:o,port:a}=C2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),R2()}function Mx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C2(t){const e=Mx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Pv(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Pv(o)}}}function Pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bi("not implemented")}_getIdTokenResponse(e){return bi("not implemented")}_linkToIdToken(e,n){return bi("not implemented")}_getReauthenticationResolver(e){return bi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return r2(t,"POST","/v1/accounts:signInWithIdp",fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class as extends Tx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ai("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=cp(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new as(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends $a{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ei.credential(n,i)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends $a{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends $a{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return nr.credential(n,i)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ci._fromIdTokenResponse(e,i,r),o=Iv(i);return new xo({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Iv(i);return new xo({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends zi{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new jc(e,n,i,r)}}function wx(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(t,s,e,i):s})}async function I2(t,e,n=!1){const i=await Ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xo._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e,n=!1){const{auth:i}=t;if(Ai(i.app))return Promise.reject(Jr(i));const r="reauthenticate";try{const s=await Ua(t,wx(i,r,e,t),n);je(s.idToken,i,"internal-error");const o=pp(s.idToken);je(o,i,"internal-error");const{sub:a}=o;return je(t.uid===a,i,"user-mismatch"),xo._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ai(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e,n=!1){if(Ai(t.app))return Promise.reject(Jr(t));const i="signIn",r=await wx(t,i,e),s=await xo._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function D2(t,e,n,i){return Hi(t).onIdTokenChanged(e,n,i)}function U2(t,e,n){return Hi(t).beforeAuthStateChanged(e,n)}function O2(t,e,n,i){return Hi(t).onAuthStateChanged(e,n,i)}function k2(t){return Hi(t).signOut()}const Xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1e3,B2=10;class bx extends Ax{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);m2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,B2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},F2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bx.type="LOCAL";const z2=bx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx extends Ax{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cx.type="SESSION";const Rx=Cx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new yu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await H2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_p("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return window}function G2(t){oi().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(){return typeof oi().WorkerGlobalScope<"u"&&typeof oi().importScripts=="function"}async function W2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function X2(){return Px()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="firebaseLocalStorageDb",$2=1,$c="firebaseLocalStorage",Lx="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xu(t,e){return t.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function q2(){const t=indexedDB.deleteDatabase(Ix);return new qa(t).toPromise()}function tf(){const t=indexedDB.open(Ix,$2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore($c,{keyPath:Lx})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains($c)?e(i):(i.close(),await q2(),e(await tf()))})})}async function Lv(t,e,n){const i=xu(t,!0).put({[Lx]:e,value:n});return new qa(i).toPromise()}async function Y2(t,e){const n=xu(t,!1).get(e),i=await new qa(n).toPromise();return i===void 0?null:i.value}function Nv(t,e){const n=xu(t,!0).delete(e);return new qa(n).toPromise()}const K2=800,J2=3;class Nx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>J2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Px()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(X2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await W2(),!this.activeServiceWorker)return;this.sender=new V2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await Lv(e,Xc,"1"),await Nv(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Y2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=xu(r,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nx.type="LOCAL";const Z2=Nx;new Xa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t,e){return e?Ri(e):(je(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp extends Tx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q2(t){return N2(t.auth,new yp(t),t.bypassAuthState)}function eI(t){const{auth:e,user:n}=t;return je(n,e,"internal-error"),L2(n,new yp(t),t.bypassAuthState)}async function tI(t){const{auth:e,user:n}=t;return je(n,e,"internal-error"),I2(n,new yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q2;case"linkViaPopup":case"linkViaRedirect":return tI;case"reauthViaPopup":case"reauthViaRedirect":return eI;default:ai(this.auth,"internal-error")}}resolve(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new Xa(2e3,1e4);async function iI(t,e,n){if(Ai(t.app))return Promise.reject(Kn(t,"operation-not-supported-in-this-environment"));const i=_u(t);ZP(t,e,vp);const r=Dx(i,n);return new jr(i,"signInViaPopup",e,r).executeNotNull()}class jr extends Ux{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return je(e,this.auth,"internal-error"),e}async onExecution(){Fi(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nI.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="pendingRedirect",ac=new Map;class sI extends Ux{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ac.get(this.auth._key());if(!e){try{const i=await oI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ac.set(this.auth._key(),e)}return this.bypassAuthState||ac.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oI(t,e){const n=cI(e),i=lI(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function aI(t,e){ac.set(t._key(),e)}function lI(t){return Ri(t._redirectPersistence)}function cI(t){return oc(rI,t.config.apiKey,t.name)}async function uI(t,e,n=!1){if(Ai(t.app))return Promise.reject(Jr(t));const i=_u(t),r=Dx(i,e),o=await new sI(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=10*60*1e3;class hI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ox(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dv(e))}saveEventToCache(e){this.cachedEventUids.add(Dv(e)),this.lastProcessedEventTime=Date.now()}}function Dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ox({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ox(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e={}){return bo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gI=/^https?/;async function vI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pI(t);for(const n of e)try{if(_I(n))return}catch{}ai(t,"unauthorized-domain")}function _I(t){const e=Qh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!gI.test(n))return!1;if(mI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Xa(3e4,6e4);function Uv(){const t=oi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xI(t){return new Promise((e,n)=>{var i,r,s;function o(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(Kn(t,"network-request-failed"))},timeout:yI.get()})}if(!((r=(i=oi().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=oi().gapi)===null||s===void 0)&&s.load)o();else{const a=T2("iframefcb");return oi()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},E2(`${M2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lc=null,e})}let lc=null;function SI(t){return lc=lc||xI(t),lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=new Xa(5e3,15e3),MI="__/auth/iframe",TI="emulator/auth/iframe",wI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bI(t){const e=t.config;je(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,TI):`https://${t.config.authDomain}/${MI}`,i={apiKey:e.apiKey,appName:t.name,v:Ao},r=AI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ja(i).slice(1)}`}async function CI(t){const e=await SI(t),n=oi().gapi;return je(n,t,"internal-error"),e.open({where:document.body,url:bI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=oi().setTimeout(()=>{s(o)},EI.get());function l(){oi().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PI=500,II=600,LI="_blank",NI="http://localhost";class Ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DI(t,e,n,i=PI,r=II){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RI),{width:i.toString(),height:r.toString(),top:s,left:o}),c=rn().toLowerCase();n&&(a=gx(c)?LI:n),px(c)&&(e=e||NI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(p2(c)&&a!=="_self")return UI(e||"",a),new Ov(null);const h=window.open(e||"",a,d);je(h,t,"popup-blocked");try{h.focus()}catch{}return new Ov(h)}function UI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="__/auth/handler",kI="emulator/auth/handler",FI=encodeURIComponent("fac");async function kv(t,e,n,i,r,s){je(t.config.authDomain,t,"auth-domain-config-required"),je(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ao,eventId:r};if(e instanceof vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof $a){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${FI}=${encodeURIComponent(l)}`:"";return`${BI(t)}?${ja(a).slice(1)}${c}`}function BI({config:t}){return t.emulator?hp(t,kI):`https://${t.authDomain}/${OI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="webStorageSupport";class zI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rx,this._completeRedirectFn=uI,this._overrideRedirectResult=aI}async _openPopup(e,n,i,r){var s;Fi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await kv(e,n,i,Qh(),r);return DI(e,o,_p())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await kv(e,n,i,Qh(),r);return G2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Fi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await CI(e),i=new hI(e);return n.register("authEvent",r=>(je(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zd,{type:zd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[zd];o!==void 0&&n(!!o),ai(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sx()||mx()||mp()}}const HI=zI;var Fv="@firebase/auth",Bv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WI(t){yo(new os("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;je(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ex(t)},c=new x2(i,r,s,l);return A2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),yo(new os("auth-internal",e=>{const n=_u(e.getProvider("auth").getImmediate());return(i=>new VI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(Fv,Bv,GI(t)),xr(Fv,Bv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=5*60,XI=Zy("authIdTokenMaxAge")||jI;let zv=null;const $I=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>XI)return;const r=n==null?void 0:n.token;zv!==r&&(zv=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function qI(t=ix()){const e=lp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w2(t,{popupRedirectResolver:HI,persistence:[Z2,z2,Rx]}),i=Zy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=$I(s.toString());U2(n,o,()=>o(n.currentUser)),D2(n,a=>o(a))}}const r=Ky("auth");return r&&b2(n,`http://${r}`),n}function YI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}S2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Kn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",YI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WI("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="firebasestorage.googleapis.com",KI="storageBucket",JI=2*60*1e3,ZI=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends zi{constructor(e,n,i=0){super(Hd(e),`Firebase Storage: ${n} (${Hd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,di.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var li;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(li||(li={}));function Hd(t){return"storage/"+t}function QI(){const t="An unknown error occurred, please check the error payload for server response.";return new di(li.UNKNOWN,t)}function eL(){return new di(li.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tL(){return new di(li.CANCELED,"User canceled the upload/download.")}function nL(t){return new di(li.INVALID_URL,"Invalid URL '"+t+"'.")}function iL(t){return new di(li.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hv(t){return new di(li.INVALID_ARGUMENT,t)}function Fx(){return new di(li.APP_DELETED,"The Firebase app was deleted.")}function rL(t){return new di(li.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=$n.makeFromUrl(e,n)}catch{return new $n(e,"")}if(i.path==="")return i;throw iL(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),y={bucket:1,path:3},x=n===kx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",u=new RegExp(`^https?://${x}/${r}/${m}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:c},{regex:u,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<p.length;S++){const C=p[S],w=C.regex.exec(e);if(w){const T=w[C.indices.bucket];let z=w[C.indices.path];z||(z=""),i=new $n(T,z),C.postModify(i);break}}if(i==null)throw nL(e);return i}}class sL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...m){c||(c=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(g,l())},m)}function f(){s&&clearTimeout(s)}function g(m,...u){if(c){f();return}if(m){f(),d.call(null,m,...u);return}if(l()||o){f(),d.call(null,m,...u);return}i<64&&(i*=2);let p;a===1?(a=2,p=0):p=(i+Math.random())*1e3,h(p)}let y=!1;function x(m){y||(y=!0,f(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function aL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){return t!==void 0}function Vv(t,e,n,i){if(i<e)throw Hv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Hv(`Invalid value for '${t}'. Expected ${n} or less.`)}function cL(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var qc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qc||(qc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n,i,r,s,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Gl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===qc.NO_ERROR,l=s.getStatus();if(!a||uL(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qc.ABORT;i(!1,new Gl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Gl(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=QI();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Fx():tL();o(l)}else{const l=eL();o(l)}};this.canceled_?n(!1,new Gl(!1,null,!0)):this.backoffId_=oL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function hL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gL(t,e,n,i,r,s,o=!0){const a=cL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return pL(c,e),hL(c,n),fL(c,s),mL(c,i),new dL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _L(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this._service=e,n instanceof $n?this._location=n:this._location=$n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yc(e,n)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _L(this._location.path)}get storage(){return this._service}get parent(){const e=vL(this._location.path);if(e===null)return null;const n=new $n(this._location.bucket,e);return new Yc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rL(e)}}function Gv(t,e){const n=e==null?void 0:e[KI];return n==null?null:$n.makeFromBucketSpec(n,t)}function yL(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:AR(r,t.app.options.projectId))}class xL{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=kx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JI,this._maxUploadRetryTime=ZI,this._requests=new Set,r!=null?this._bucket=$n.makeFromBucketSpec(r,this._host):this._bucket=Gv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=Gv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new sL(Fx());{const o=gL(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Wv="@firebase/storage",jv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="storage";function SL(t=ix(),e){t=Hi(t);const i=lp(t,Bx).getImmediate({identifier:e}),r=TR("storage");return r&&EL(i,...r),i}function EL(t,e,n,i={}){yL(t,e,n,i)}function ML(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new xL(n,i,r,e,Ao)}function TL(){yo(new os(Bx,ML,"PUBLIC").setMultipleInstances(!0)),xr(Wv,jv,""),xr(Wv,jv,"esm2017")}TL();const wL={apiKey:"AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",authDomain:"anking-globe.firebaseapp.com",projectId:"anking-globe",storageBucket:"anking-globe.firebasestorage.app",messagingSenderId:"615376842",appId:"1:615376842:web:your_app_id"},zx=nx(wL),xp=qI(zx);SL(zx);const AL=new Ei,bL=async()=>{try{const t=await iI(xp,AL),e=await t.user.getIdToken();return{user:t.user,token:e}}catch(t){throw console.error("Google sign-in error:",t),t}},CL=async()=>{await k2(xp)};function Xv(t){if(!t)return"";if(typeof t=="object"){const n=[];return(t.city||t.town||t.village||t.municipality)&&n.push(t.city||t.town||t.village||t.municipality),(t.state||t.region||t.province)&&n.push(t.state||t.region||t.province),t.country&&n.push(t.country),n.join(", ")}const e=t.split(",").map(n=>n.trim());return e.length<=3?t:e.slice(-3).join(", ")}function RL({onBack:t}){const[e,n]=ye.useState("checking"),[i,r]=ye.useState(!1),[s,o]=ye.useState(null),[a,l]=ye.useState(null),[c,d]=ye.useState([]),[h,f]=ye.useState(null),[g,y]=ye.useState(!1),[x,m]=ye.useState(!1),[u,_]=ye.useState({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),[p,S]=ye.useState([]),[C,w]=ye.useState(!1),[T,z]=ye.useState([]),[M,A]=ye.useState([]),[Q,X]=ye.useState([]),[de,H]=ye.useState(!1),[J,ee]=ye.useState(!1),[ne,L]=ye.useState(!1),W=ye.useRef(null);ye.useEffect(()=>{const O=O2(xp,async Y=>{if(Y){const me=await Y.getIdToken();l(me),o({email:Y.email,username:Y.displayName||Y.email,picture:Y.photoURL||""}),q(me)}else l(null),o(null),n("none")});return()=>O()},[]);const q=async O=>{try{const me=await(await fetch(`${ln}/auth/check`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`}})).json();if(me.error){n("none");return}n(me.status),r(me.isAdmin||!1)}catch{n("error")}},he=async()=>{try{const{token:O}=await bL();l(O);const me=await(await fetch(`${ln}/auth/google`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`}})).json();n(me.status),r(me.isAdmin||!1)}catch(O){console.error("Sign in error:",O),n("error")}},pe=async()=>{await CL(),l(null),o(null),n("none"),r(!1)};ye.useEffect(()=>{e==="approved"&&a&&(k(),U(),i&&R())},[e,i,a]);const se=ye.useCallback(()=>a?{Authorization:`Bearer ${a}`}:{},[a]),k=async()=>{try{const O=await fetch(`${ln}/cards`);d(await O.json())}catch{}},U=async()=>{try{const O=await fetch(`${ln}/images/list`);z(await O.json())}catch{}},R=async()=>{try{const Y=await(await fetch(`${ln}/auth/pending`,{headers:se()})).json();A(Y.pending||[]),X(Y.approved||[])}catch{}},b=async O=>{await fetch(`${ln}/auth/approve`,{method:"POST",headers:{"Content-Type":"application/json",...se()},body:JSON.stringify({email:O})}),R()},ie=async O=>{await fetch(`${ln}/auth/deny`,{method:"POST",headers:{"Content-Type":"application/json",...se()},body:JSON.stringify({email:O})}),R()},fe=async O=>{window.confirm(`Revoke access for ${O}?`)&&(await fetch(`${ln}/auth/revoke`,{method:"POST",headers:{"Content-Type":"application/json",...se()},body:JSON.stringify({email:O})}),R())},$=async O=>{if(!O||O.length<3){S([]);return}w(!0);try{const Y=await fetch(`${ln}/geocode?q=${encodeURIComponent(O)}`);S(await Y.json())}catch{S([])}w(!1)},ve=O=>{let Y="";(O.type==="university"||O.class==="amenity")&&(Y=O.display_name.split(",")[0].trim());const me=O.address?Xv(O.address):Xv(O.display_name);_(ge=>({...ge,university:Y||ge.university,location:me,lat:O.lat.toFixed(6),lng:O.lng.toFixed(6)})),S([])},B=(O,Y)=>{_(me=>({...me,[O]:Y})),(O==="university"||O==="location")&&(clearTimeout(window.geocodeTimeout),window.geocodeTimeout=setTimeout(()=>$(Y),600))},be=async O=>{const Y=O.target.files[0];if(Y){if(!Y.type.match(/^image\/(png|jpe?g|webp)$/)){alert("Please select a PNG, JPG, or WebP image.");return}if(Y.size>5*1024*1024){alert("Image too large. Max 5MB.");return}m(!0);try{const me=new FileReader;me.onload=async()=>{const ge=me.result,Me=await fetch(`${ln}/images/upload`,{method:"POST",headers:{"Content-Type":"application/json",...se()},body:JSON.stringify({filename:Y.name,data:ge})});if(Me.ok){const Ce=await Me.json();_(De=>({...De,image:Ce.url||Ce.filename})),await U()}else{const Ce=await Me.json();alert(Ce.error||"Upload failed")}m(!1)},me.readAsDataURL(Y)}catch{alert("Upload failed"),m(!1)}O.target.value=""}},te=()=>{_({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),f(null),S([])},ce=O=>{var Y,me;f(O),_({name:O.name||"",title:O.title||"",university:O.university||"",location:O.location||"",lat:((Y=O.lat)==null?void 0:Y.toString())||"",lng:((me=O.lng)==null?void 0:me.toString())||"",image:O.image||""})},G=async O=>{if(O.preventDefault(),!u.name||!u.location||!u.lat||!u.lng){alert("Please fill required fields");return}y(!0);const Y={...u,lat:parseFloat(u.lat),lng:parseFloat(u.lng)};try{h?await fetch(`${ln}/cards/${h.id}`,{method:"PUT",headers:{"Content-Type":"application/json",...se()},body:JSON.stringify(Y)}):await fetch(`${ln}/cards`,{method:"POST",headers:{"Content-Type":"application/json",...se()},body:JSON.stringify(Y)}),await k(),te()}catch{alert("Failed to save")}y(!1)},K=async O=>{if(window.confirm("Delete this member?")){y(!0);try{await fetch(`${ln}/cards/${O}`,{method:"DELETE",headers:se()}),await k(),(h==null?void 0:h.id)===O&&te()}catch{alert("Failed to delete")}y(!1)}},[N,v]=ye.useState(500),E=()=>`${window.location.origin+"/anking-globe/"}?embed=true`,F=()=>`<iframe 
  src="${E()}" 
  width="100%" 
  height="${N}" 
  frameborder="0" 
  allow="accelerometer; gyroscope"
  style="border-radius: 12px; overflow: hidden;"
></iframe>`,re=()=>{navigator.clipboard.writeText(F()),L(!0),setTimeout(()=>L(!1),2e3)};return e==="checking"?I.jsx("div",{className:"admin-page",children:I.jsx("div",{className:"admin-auth",children:I.jsx("div",{className:"auth-loading",children:"Checking authentication..."})})}):e==="error"?I.jsx("div",{className:"admin-page",children:I.jsxs("div",{className:"admin-auth",children:[I.jsxs("button",{className:"back-button",onClick:t,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),I.jsxs("div",{className:"auth-card error",children:[I.jsx("div",{className:"error-icon",children:"❌"}),I.jsx("h1",{children:"Authentication Error"}),I.jsx("button",{onClick:pe,children:"Try Again"})]})]})}):e==="none"?I.jsx("div",{className:"admin-page",children:I.jsxs("div",{className:"admin-auth",children:[I.jsxs("button",{className:"back-button",onClick:t,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),I.jsxs("div",{className:"auth-card",children:[I.jsx("h1",{children:"Admin Access"}),I.jsx("p",{children:"Sign in with Google to request access."}),I.jsxs("button",{className:"google-sign-in-btn",onClick:he,children:[I.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[I.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),I.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),I.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),I.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),I.jsx("p",{className:"auth-note",children:"Admins will be notified to approve your request."})]})]})}):e==="pending"?I.jsx("div",{className:"admin-page",children:I.jsxs("div",{className:"admin-auth",children:[I.jsxs("button",{className:"back-button",onClick:t,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),I.jsxs("div",{className:"auth-card pending",children:[I.jsx("div",{className:"pending-icon",children:"⏳"}),I.jsx("h1",{children:"Access Pending"}),s&&I.jsxs("div",{className:"pending-user-info",children:[s.picture&&I.jsx("img",{src:s.picture,alt:"",className:"pending-avatar"}),I.jsx("p",{children:I.jsx("strong",{children:s.username})}),I.jsx("p",{children:s.email})]}),I.jsx("p",{children:"An admin has been notified and will review your request."}),I.jsx("button",{onClick:()=>q(a),children:"Check Status"}),I.jsx("button",{className:"secondary",onClick:pe,children:"Sign Out"})]})]})}):I.jsxs("div",{className:"admin-page",children:[I.jsxs("div",{className:"admin-header",children:[I.jsxs("button",{className:"back-button",onClick:t,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:I.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),I.jsx("h1",{children:"Member Management"}),I.jsxs("div",{className:"admin-user",children:[(s==null?void 0:s.picture)&&I.jsx("img",{src:s.picture,alt:"",className:"user-avatar"}),I.jsx("span",{children:(s==null?void 0:s.username)||(s==null?void 0:s.email)}),i&&I.jsx("span",{className:"admin-badge",children:"Admin"}),i&&I.jsxs("button",{className:`user-mgmt-btn ${de?"active":""}`,onClick:()=>{H(!de),R()},children:[I.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),I.jsx("circle",{cx:"9",cy:"7",r:"4"}),I.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),I.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Users",M.length>0&&I.jsx("span",{className:"pending-count",children:M.length})]}),I.jsxs("button",{className:"embed-btn",onClick:()=>ee(!0),children:[I.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("polyline",{points:"16 18 22 12 16 6"}),I.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"Embed"]}),I.jsx("button",{className:"logout-btn",onClick:pe,children:"Sign Out"})]})]}),i&&de&&I.jsxs("div",{className:"user-management-panel",children:[I.jsxs("div",{className:"user-section",children:[I.jsxs("h3",{children:["Pending (",M.length,")"]}),M.length===0?I.jsx("p",{className:"no-users",children:"No pending requests"}):I.jsx("ul",{children:M.map(O=>I.jsxs("li",{children:[I.jsxs("div",{className:"user-info",children:[O.picture&&I.jsx("img",{src:O.picture,alt:"",className:"list-avatar"}),I.jsxs("div",{children:[I.jsx("span",{className:"user-name",children:O.username}),I.jsx("span",{className:"user-email",children:O.email})]})]}),I.jsxs("div",{className:"user-actions",children:[I.jsx("button",{className:"approve",onClick:()=>b(O.email),children:"Approve"}),I.jsx("button",{className:"deny",onClick:()=>ie(O.email),children:"Deny"})]})]},O.email))})]}),I.jsxs("div",{className:"user-section",children:[I.jsxs("h3",{children:["Approved (",Q.length,")"]}),I.jsx("ul",{children:Q.map(O=>I.jsxs("li",{children:[I.jsxs("div",{className:"user-info",children:[O.picture&&I.jsx("img",{src:O.picture,alt:"",className:"list-avatar"}),I.jsxs("div",{children:[I.jsx("span",{className:"user-name",children:O.username||"Unknown"}),I.jsx("span",{className:"user-email",children:O.email})]})]}),I.jsx("button",{className:"revoke",onClick:()=>fe(O.email),children:"Revoke"})]},O.email))})]})]}),J&&I.jsx("div",{className:"embed-modal-overlay",onClick:()=>ee(!1),children:I.jsxs("div",{className:"embed-modal",onClick:O=>O.stopPropagation(),children:[I.jsx("button",{className:"embed-modal-close",onClick:()=>ee(!1),children:"×"}),I.jsx("h2",{children:"🔗 Embed Globe"}),I.jsxs("p",{className:"embed-description",children:["Embed the ",I.jsx("strong",{children:"live globe"})," on any website. It shows real-time data, with a toggle button to show/hide all cards."]}),I.jsxs("div",{className:"embed-setting",children:[I.jsx("label",{children:"Height:"}),I.jsxs("div",{className:"embed-height-input",children:[I.jsx("input",{type:"number",value:N,onChange:O=>v(parseInt(O.target.value)||500),min:"300",max:"1000"}),I.jsx("span",{children:"px"})]})]}),I.jsxs("div",{className:"embed-preview",children:[I.jsx("div",{className:"embed-preview-header",children:I.jsx("span",{children:"iframe Code"})}),I.jsx("pre",{children:F()})]}),I.jsxs("div",{className:"embed-actions",children:[I.jsx("button",{className:"embed-copy-btn",onClick:re,children:ne?"✓ Copied!":"📋 Copy Embed Code"}),I.jsx("a",{className:"embed-preview-btn",href:E(),target:"_blank",rel:"noopener noreferrer",children:"👁 Preview Embed"})]}),I.jsxs("div",{className:"embed-instructions",children:[I.jsx("h4",{children:"How to use:"}),I.jsxs("ul",{children:[I.jsxs("li",{children:[I.jsx("strong",{children:"Discourse:"})," Paste in an HTML block"]}),I.jsxs("li",{children:[I.jsx("strong",{children:"Wix:"}),' Add "Embed HTML" element']}),I.jsxs("li",{children:[I.jsx("strong",{children:"WordPress:"}),' Use "Custom HTML" block']})]}),I.jsx("p",{className:"embed-note",children:"✅ Live data - updates automatically!"})]})]})}),I.jsxs("div",{className:"admin-content",children:[I.jsxs("div",{className:"admin-form-panel",children:[I.jsx("h2",{children:h?"Edit Member":"Add New Member"}),I.jsxs("form",{onSubmit:G,children:[I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Name *"}),I.jsx("input",{type:"text",value:u.name,onChange:O=>B("name",O.target.value),placeholder:"John Doe",required:!0})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Title / Role"}),I.jsx("input",{type:"text",value:u.title,onChange:O=>B("title",O.target.value),placeholder:"Medical Student..."})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"University (type to search)"}),I.jsx("input",{type:"text",value:u.university,onChange:O=>B("university",O.target.value),placeholder:"e.g. Harvard Medical School"}),C&&u.university&&I.jsx("div",{className:"geocode-loading",children:"Searching..."}),p.length>0&&u.university&&I.jsx("ul",{className:"geocode-results",children:p.map((O,Y)=>I.jsxs("li",{onClick:()=>ve(O),children:[I.jsx("span",{className:"result-name",children:O.display_name}),I.jsxs("span",{className:"result-coords",children:[O.lat.toFixed(4),", ",O.lng.toFixed(4)]})]},Y))})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Location * (City, Region, Country)"}),I.jsx("input",{type:"text",value:u.location,onChange:O=>B("location",O.target.value),placeholder:"Boston, MA, USA",required:!0}),C&&!u.university&&I.jsx("div",{className:"geocode-loading",children:"Searching..."}),p.length>0&&!u.university&&I.jsx("ul",{className:"geocode-results",children:p.map((O,Y)=>I.jsxs("li",{onClick:()=>ve(O),children:[I.jsx("span",{className:"result-name",children:O.display_name}),I.jsxs("span",{className:"result-coords",children:[O.lat.toFixed(4),", ",O.lng.toFixed(4)]})]},Y))})]}),I.jsxs("div",{className:"form-row",children:[I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Latitude *"}),I.jsx("input",{type:"number",step:"any",value:u.lat,onChange:O=>B("lat",O.target.value),placeholder:"42.3601",required:!0})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Longitude *"}),I.jsx("input",{type:"number",step:"any",value:u.lng,onChange:O=>B("lng",O.target.value),placeholder:"-71.0589",required:!0})]})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Profile Image"}),I.jsxs("div",{className:"image-input-row",children:[I.jsxs("select",{value:u.image,onChange:O=>B("image",O.target.value),children:[I.jsx("option",{value:"",children:"No image"}),T.map(O=>I.jsx("option",{value:O,children:O},O))]}),I.jsx("input",{type:"file",ref:W,onChange:be,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),I.jsx("button",{type:"button",className:"upload-btn",onClick:()=>{var O;return(O=W.current)==null?void 0:O.click()},disabled:x,children:x?"Uploading...":"📤 Upload"})]}),u.image&&I.jsx("div",{className:"image-preview",children:I.jsx("img",{src:$h(u.image),alt:"Preview"})})]}),I.jsxs("div",{className:"form-actions",children:[I.jsx("button",{type:"submit",className:"primary",disabled:g,children:g?"Saving...":h?"Update":"Add Member"}),h&&I.jsx("button",{type:"button",className:"secondary",onClick:te,children:"Cancel"})]})]})]}),I.jsxs("div",{className:"admin-table-panel",children:[I.jsx("div",{className:"table-header",children:I.jsxs("h2",{children:["Members (",c.length,")"]})}),I.jsx("div",{className:"table-container",children:I.jsxs("table",{children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx("th",{children:"Image"}),I.jsx("th",{children:"Name"}),I.jsx("th",{children:"Title"}),I.jsx("th",{children:"University"}),I.jsx("th",{children:"Location"}),I.jsx("th",{children:"Lat"}),I.jsx("th",{children:"Lng"}),I.jsx("th",{children:"Actions"})]})}),I.jsxs("tbody",{children:[c.map(O=>{var Y,me;return I.jsxs("tr",{className:(h==null?void 0:h.id)===O.id?"selected":"",onClick:()=>ce(O),children:[I.jsx("td",{className:"img-cell",children:O.image?I.jsx("img",{src:$h(O.image),alt:O.name}):I.jsx("div",{className:"no-image",children:"?"})}),I.jsx("td",{className:"name-cell",children:O.name}),I.jsx("td",{children:O.title||"-"}),I.jsx("td",{className:"uni-cell",children:O.university||"-"}),I.jsx("td",{className:"location-cell",children:O.location}),I.jsx("td",{className:"coord-cell",children:(Y=O.lat)==null?void 0:Y.toFixed(2)}),I.jsx("td",{className:"coord-cell",children:(me=O.lng)==null?void 0:me.toFixed(2)}),I.jsxs("td",{className:"actions-cell",children:[I.jsx("button",{className:"edit-btn",onClick:ge=>{ge.stopPropagation(),ce(O)},children:"Edit"}),I.jsx("button",{className:"delete-btn",onClick:ge=>{ge.stopPropagation(),K(O.id)},children:"Delete"})]})]},O.id)}),c.length===0&&I.jsx("tr",{children:I.jsx("td",{colSpan:"8",className:"empty-row",children:"No members yet."})})]})]})})]})]})]})}function PL(){const[t,e]=ye.useState([]),[n,i]=ye.useState(!0),[r,s]=ye.useState(null),o=ye.useCallback(async()=>{try{i(!0);const a=await pR();e(a),s(null)}catch(a){console.error("Failed to load cards:",a),s(a.message)}finally{i(!1)}},[]);return ye.useEffect(()=>{o()},[o]),{cards:t,loading:n,error:r,refetch:o}}function IL(){const[t,e]=ye.useState("globe"),{cards:n,loading:i,error:r,refetch:s}=PL(),[o,a]=ye.useState([]),[l,c]=ye.useState(null),[d,h]=ye.useState(0),[f,g]=ye.useState(!0),[y,x]=ye.useState({}),m=new URLSearchParams(window.location.search).get("embed")==="true",[u,_]=ye.useState(!1),p=ye.useRef(null),S=ye.useRef(Date.now()),C=ye.useCallback(()=>{S.current=Date.now(),g(!1),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{g(!0)},5e3)},[]);ye.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const w=ye.useCallback(L=>{C(),a(W=>W.includes(L.id)?W.filter(q=>q!==L.id):[...W,L.id]),c(L.id),h(W=>W+1)},[C]),T=ye.useCallback(L=>{a(W=>W.filter(q=>q!==L)),l===L&&c(null)},[l]),z=ye.useCallback(L=>{C(),c(L),h(W=>W+1)},[C]),M=ye.useCallback(L=>{C(),a(W=>W.includes(L)?(l===L&&c(null),W.filter(he=>he!==L)):(n.find(pe=>pe.id===L)&&(c(L),h(pe=>pe+1)),[...W,L]))},[n,l,C]),A=ye.useCallback(()=>{C(),a(n.map(L=>L.id))},[n,C]),Q=ye.useCallback(()=>{a([]),c(null)},[]),X=ye.useCallback(()=>{u?(a([]),c(null)):a(n.map(L=>L.id)),_(!u),C()},[u,n,C]),de=ye.useCallback(L=>{x(L)},[]),H=ye.useCallback(()=>{C()},[C]);if(i)return I.jsx(gR,{});if(r)return I.jsxs("div",{className:"error-screen",children:["Error: ",r]});if(t==="admin")return I.jsx(RL,{onBack:()=>{e("globe"),s()}});const J=new Set(n.map(L=>{var W;return(W=L.location.split(",").pop())==null?void 0:W.trim()})).size,ee=n.filter(L=>o.includes(L.id)),ne=l?`${l}-${d}`:null;return I.jsxs("div",{className:`globe-container ${m?"embed-mode":""}`,children:[I.jsx(hR,{cards:n,selectedCards:o,autoRotate:f,onMarkerClick:w,onMarkerVisibilityChange:de,onInteraction:H,focusCardId:ne}),!m&&I.jsx(fR,{cards:n,selectedCards:o,autoRotate:f,onAutoRotateChange:g,onToggleCard:M,onOpenAll:A,onCloseAll:Q,onManageClick:()=>e("admin"),isEmbedMode:m}),ee.map((L,W)=>I.jsx(mR,{card:L,visibilityData:y,onClose:T,onFocus:z,isFocused:l===L.id,zIndex:1e3+W},L.id)),I.jsx("div",{className:`globe-logo-container ${m?"embed":""}`,children:I.jsx("img",{src:"/anking-globe/logo.png",alt:"Logo",className:"globe-logo"})}),!m&&I.jsx("div",{className:"globe-footer",children:"AnKing Step Deck Maintainers · 2025"}),I.jsxs("div",{className:"globe-stats",children:[I.jsxs("div",{className:"stat-item",children:[I.jsx("div",{className:"stat-value",children:n.length}),I.jsx("div",{className:"stat-label",children:"Active Members"})]}),I.jsxs("div",{className:"stat-item",children:[I.jsx("div",{className:"stat-value",children:J}),I.jsx("div",{className:"stat-label",children:"Countries"})]})]}),!m&&I.jsxs("div",{className:"instructions",children:[I.jsx("kbd",{children:"Drag"})," to rotate · ",I.jsx("kbd",{children:"Scroll"})," to zoom",I.jsx("br",{}),"Click markers to toggle cards"]}),m&&I.jsxs(I.Fragment,{children:[I.jsx("button",{className:"embed-toggle-btn",onClick:X,children:u?I.jsxs(I.Fragment,{children:[I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),I.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]}):I.jsxs(I.Fragment,{children:[I.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),I.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]})}),I.jsx("div",{className:"embed-watermark",children:"AnKing Step Deck Maintainers"})]})]})}Vd.createRoot(document.getElementById("root")).render(I.jsx(rS.StrictMode,{children:I.jsx(IL,{})}));
