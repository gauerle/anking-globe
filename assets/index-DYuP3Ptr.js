(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tm={exports:{}},zl={},wm={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),Av=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),Dv=Symbol.for("react.forward_ref"),Nv=Symbol.for("react.suspense"),Iv=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),Nh=Symbol.iterator;function Ov(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var Am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cm=Object.assign,Rm={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Rm,this.updater=n||Am}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pm(){}Pm.prototype=zs.prototype;function Rf(t,e,n){this.props=t,this.context=e,this.refs=Rm,this.updater=n||Am}var Pf=Rf.prototype=new Pm;Pf.constructor=Rf;Cm(Pf,zs.prototype);Pf.isPureReactComponent=!0;var Ih=Array.isArray,bm=Object.prototype.hasOwnProperty,bf={current:null},Lm={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bm.call(e,i)&&!Lm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qo,type:t,key:s,ref:o,props:r,_owner:bf.current}}function Fv(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function kv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kv(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case Av:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+dc(o,0):i,Ih(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),ja(r,e,n,"",function(c){return c})):r!=null&&(Lf(r)&&(r=Fv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ih(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+dc(s,a);o+=ja(s,e,n,l,r)}else if(l=Ov(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+dc(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},qa={transition:null},Bv={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:qa,ReactCurrentOwner:bf};function Nm(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=zs;Ze.Fragment=Cv;Ze.Profiler=Pv;Ze.PureComponent=Rf;Ze.StrictMode=Rv;Ze.Suspense=Nv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;Ze.act=Nm;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Cm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bm.call(e,l)&&!Lm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:Lv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bv,_context:t},t.Consumer=t};Ze.createElement=Dm;Ze.createFactory=function(t){var e=Dm.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Dv,render:t}};Ze.isValidElement=Lf;Ze.lazy=function(t){return{$$typeof:Uv,_payload:{_status:-1,_result:t},_init:zv}};Ze.memo=function(t,e){return{$$typeof:Iv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};Ze.unstable_act=Nm;Ze.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ze.useContext=function(t){return Jt.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ze.useId=function(){return Jt.current.useId()};Ze.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ze.useRef=function(t){return Jt.current.useRef(t)};Ze.useState=function(t){return Jt.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return Jt.current.useTransition()};Ze.version="18.3.1";wm.exports=Ze;var Fe=wm.exports;const Hv=wv(Fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=Fe,Gv=Symbol.for("react.element"),Wv=Symbol.for("react.fragment"),Xv=Object.prototype.hasOwnProperty,Yv=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jv={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Xv.call(e,i)&&!jv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gv,type:t,key:s,ref:o,props:r,_owner:Yv.current}}zl.Fragment=Wv;zl.jsx=Im;zl.jsxs=Im;Tm.exports=zl;var Su=Tm.exports,Mu={},Um={exports:{}},vn={},Om={exports:{}},Fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,W){var Y=I.length;I.push(W);e:for(;0<Y;){var fe=Y-1>>>1,pe=I[fe];if(0<r(pe,W))I[fe]=W,I[Y]=pe,Y=fe;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var W=I[0],Y=I.pop();if(Y!==W){I[0]=Y;e:for(var fe=0,pe=I.length,se=pe>>>1;fe<se;){var U=2*(fe+1)-1,N=I[U],R=U+1,w=I[R];if(0>r(N,Y))R<pe&&0>r(w,N)?(I[fe]=w,I[R]=Y,fe=R):(I[fe]=N,I[U]=Y,fe=U);else if(R<pe&&0>r(w,Y))I[fe]=w,I[R]=Y,fe=R;else break e}}return W}function r(I,W){var Y=I.sortIndex-W.sortIndex;return Y!==0?Y:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,v=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=I)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(I){if(y=!1,p(I),!x)if(n(l)!==null)x=!0,K(P);else{var W=n(c);W!==null&&Q(M,W.startTime-I)}}function P(I,W){x=!1,y&&(y=!1,u(H),H=-1),v=!0;var Y=d;try{for(p(W),h=n(l);h!==null&&(!(h.expirationTime>W)||I&&!Z());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,d=h.priorityLevel;var pe=fe(h.expirationTime<=W);W=t.unstable_now(),typeof pe=="function"?h.callback=pe:h===n(l)&&i(l),p(W)}else i(l);h=n(l)}if(h!==null)var se=!0;else{var U=n(c);U!==null&&Q(M,U.startTime-W),se=!1}return se}finally{h=null,d=Y,v=!1}}var C=!1,T=null,H=-1,E=5,A=-1;function Z(){return!(t.unstable_now()-A<E)}function G(){if(T!==null){var I=t.unstable_now();A=I;var W=!0;try{W=T(!0,I)}finally{W?he():(C=!1,T=null)}}else C=!1}var he;if(typeof _=="function")he=function(){_(G)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=G,he=function(){$.postMessage(null)}}else he=function(){g(G,0)};function K(I){T=I,C||(C=!0,he())}function Q(I,W){H=g(function(){I(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,K(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var Y=d;d=W;try{return I()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=d;d=I;try{return W()}finally{d=Y}},t.unstable_scheduleCallback=function(I,W,Y){var fe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,I){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Y+pe,I={id:f++,callback:W,priorityLevel:I,startTime:Y,expirationTime:pe,sortIndex:-1},Y>fe?(I.sortIndex=Y,e(c,I),n(l)===null&&I===n(c)&&(y?(u(H),H=-1):y=!0,Q(M,Y-fe))):(I.sortIndex=pe,e(l,I),x||v||(x=!0,K(P))),I},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(I){var W=d;return function(){var Y=d;d=W;try{return I.apply(this,arguments)}finally{d=Y}}}})(Fm);Om.exports=Fm;var qv=Om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=Fe,gn=qv;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,wo={};function Dr(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(wo[t]=e,t=0;t<e.length;t++)km.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},Fh={};function Zv(t){return Eu.call(Fh,t)?!0:Eu.call(Oh,t)?!1:Kv.test(t)?Fh[t]=!0:(Oh[t]=!0,!1)}function Jv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qv(t,e,n,i){if(e===null||typeof e>"u"||Jv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Df=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Df,Nf);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Df,Nf);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Df,Nf);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function If(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qv(e,n,r,i)&&(n=null),i||r===null?Zv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Ff=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),Hm=Symbol.for("react.offscreen"),kh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,pc;function so(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function e_(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case Tu:return"Profiler";case Uf:return"StrictMode";case wu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bm:return(t.displayName||"Context")+".Consumer";case zm:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ff:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function t_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===Uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n_(t){var e=Vm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=n_(t))}function Gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Vm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wm(t,e){e=e.checked,e!=null&&If(t,"checked",e,!1)}function Pu(t,e){Wm(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&bu(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bu(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(oo(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Xm(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){i_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function $m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var r_=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(r_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uu=null;function kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,ys=null,Ss=null;function Gh(t){if(t=Zo(t)){if(typeof Ou!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=Wl(e),Ou(t.stateNode,t.type,e))}}function Km(t){ys?Ss?Ss.push(t):Ss=[t]:ys=t}function Zm(){if(ys){var t=ys,e=Ss;if(Ss=ys=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function Jm(t,e){return t(e)}function Qm(){}var vc=!1;function eg(t,e,n){if(vc)return t(e,n);vc=!0;try{return Jm(t,e,n)}finally{vc=!1,(ys!==null||Ss!==null)&&(Qm(),Zm())}}function Co(t,e){var n=t.stateNode;if(n===null)return null;var i=Wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var Fu=!1;if(mi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Fu=!1}function s_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var uo=!1,cl=null,ul=!1,ku=null,o_={onError:function(t){uo=!0,cl=t}};function a_(t,e,n,i,r,s,o,a,l){uo=!1,cl=null,s_.apply(o_,arguments)}function l_(t,e,n,i,r,s,o,a,l){if(a_.apply(this,arguments),uo){if(uo){var c=cl;uo=!1,cl=null}else throw Error(ye(198));ul||(ul=!0,ku=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Nr(t)!==t)throw Error(ye(188))}function c_(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function ng(t){return t=c_(t),t!==null?ig(t):null}function ig(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ig(t);if(e!==null)return e;t=t.sibling}return null}var rg=gn.unstable_scheduleCallback,Xh=gn.unstable_cancelCallback,u_=gn.unstable_shouldYield,f_=gn.unstable_requestPaint,xt=gn.unstable_now,h_=gn.unstable_getCurrentPriorityLevel,zf=gn.unstable_ImmediatePriority,sg=gn.unstable_UserBlockingPriority,fl=gn.unstable_NormalPriority,d_=gn.unstable_LowPriority,og=gn.unstable_IdlePriority,Bl=null,Kn=null;function p_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:v_,m_=Math.log,g_=Math.LN2;function v_(t){return t>>>=0,t===0?32:31-(m_(t)/g_|0)|0}var aa=64,la=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ao(a):(s&=o,s!==0&&(i=ao(s)))}else o=n&~r,o!==0?i=ao(o):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function __(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=__(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ag(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function lg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cg,Hf,ug,fg,hg,Bu=!1,ca=[],zi=null,Bi=null,Hi=null,Ro=new Map,Po=new Map,Ni=[],S_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Zo(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M_(t,e,n,i,r){switch(e){case"focusin":return zi=js(zi,t,e,n,i,r),!0;case"dragenter":return Bi=js(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=js(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ro.set(s,js(Ro.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Po.set(s,js(Po.get(s)||null,t,e,n,i,r)),!0}return!1}function dg(t){var e=gr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=tg(n),e!==null){t.blockedOn=e,hg(t.priority,function(){ug(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uu=i,n.target.dispatchEvent(i),Uu=null}else return e=Zo(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function jh(t,e,n){$a(t)&&n.delete(e)}function E_(){Bu=!1,zi!==null&&$a(zi)&&(zi=null),Bi!==null&&$a(Bi)&&(Bi=null),Hi!==null&&$a(Hi)&&(Hi=null),Ro.forEach(jh),Po.forEach(jh)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,E_)))}function bo(t){function e(r){return qs(r,t)}if(0<ca.length){qs(ca[0],t);for(var n=1;n<ca.length;n++){var i=ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&qs(zi,t),Bi!==null&&qs(Bi,t),Hi!==null&&qs(Hi,t),Ro.forEach(e),Po.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)dg(n),n.blockedOn===null&&Ni.shift()}var Ms=Si.ReactCurrentBatchConfig,dl=!0;function T_(t,e,n,i){var r=tt,s=Ms.transition;Ms.transition=null;try{tt=1,Vf(t,e,n,i)}finally{tt=r,Ms.transition=s}}function w_(t,e,n,i){var r=tt,s=Ms.transition;Ms.transition=null;try{tt=4,Vf(t,e,n,i)}finally{tt=r,Ms.transition=s}}function Vf(t,e,n,i){if(dl){var r=Hu(t,e,n,i);if(r===null)Rc(t,e,i,pl,n),Yh(t,i);else if(M_(r,t,e,n,i))i.stopPropagation();else if(Yh(t,i),e&4&&-1<S_.indexOf(t)){for(;r!==null;){var s=Zo(r);if(s!==null&&cg(s),s=Hu(t,e,n,i),s===null&&Rc(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var pl=null;function Hu(t,e,n,i){if(pl=null,t=kf(i),t=gr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h_()){case zf:return 1;case sg:return 4;case fl:case d_:return 16;case og:return 536870912;default:return 16}default:return 16}}var Ui=null,Gf=null,Ka=null;function mg(){if(Ka)return Ka;var t,e=Gf,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ka=r.slice(t,1<i?1-i:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function qh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:qh,this.isPropagationStopped=qh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wf=_n(Bs),Ko=pt({},Bs,{view:0,detail:0}),A_=_n(Ko),xc,yc,$s,Hl=pt({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(xc=t.screenX-$s.screenX,yc=t.screenY-$s.screenY):yc=xc=0,$s=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),$h=_n(Hl),C_=pt({},Hl,{dataTransfer:0}),R_=_n(C_),P_=pt({},Ko,{relatedTarget:0}),Sc=_n(P_),b_=pt({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=_n(b_),D_=pt({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N_=_n(D_),I_=pt({},Bs,{data:0}),Kh=_n(I_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F_[t])?!!e[t]:!1}function Xf(){return k_}var z_=pt({},Ko,{key:function(t){if(t.key){var e=U_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=_n(z_),H_=pt({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=_n(H_),V_=pt({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),G_=_n(V_),W_=pt({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),X_=_n(W_),Y_=pt({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=_n(Y_),q_=[9,13,27,32],Yf=mi&&"CompositionEvent"in window,fo=null;mi&&"documentMode"in document&&(fo=document.documentMode);var $_=mi&&"TextEvent"in window&&!fo,gg=mi&&(!Yf||fo&&8<fo&&11>=fo),Jh=" ",Qh=!1;function vg(t,e){switch(t){case"keyup":return q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function K_(t,e){switch(t){case"compositionend":return _g(e);case"keypress":return e.which!==32?null:(Qh=!0,Jh);case"textInput":return t=e.data,t===Jh&&Qh?null:t;default:return null}}function Z_(t,e){if(ss)return t==="compositionend"||!Yf&&vg(t,e)?(t=mg(),Ka=Gf=Ui=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gg&&e.locale!=="ko"?null:e.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J_[t.type]:e==="textarea"}function xg(t,e,n,i){Km(i),e=ml(e,"onChange"),0<e.length&&(n=new Wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,Lo=null;function Q_(t){bg(t,0)}function Vl(t){var e=ls(t);if(Gm(e))return t}function ex(t,e){if(t==="change")return e}var yg=!1;if(mi){var Mc;if(mi){var Ec="oninput"in document;if(!Ec){var td=document.createElement("div");td.setAttribute("oninput","return;"),Ec=typeof td.oninput=="function"}Mc=Ec}else Mc=!1;yg=Mc&&(!document.documentMode||9<document.documentMode)}function nd(){ho&&(ho.detachEvent("onpropertychange",Sg),Lo=ho=null)}function Sg(t){if(t.propertyName==="value"&&Vl(Lo)){var e=[];xg(e,Lo,t,kf(t)),eg(Q_,e)}}function tx(t,e,n){t==="focusin"?(nd(),ho=e,Lo=n,ho.attachEvent("onpropertychange",Sg)):t==="focusout"&&nd()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Lo)}function ix(t,e){if(t==="click")return Vl(e)}function rx(t,e){if(t==="input"||t==="change")return Vl(e)}function sx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:sx;function Do(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,e){var n=id(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function Mg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Eg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ox(t){var e=Eg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mg(n.ownerDocument.documentElement,n)){if(i!==null&&jf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rd(n,s);var o=rd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ax=mi&&"documentMode"in document&&11>=document.documentMode,os=null,Vu=null,po=null,Gu=!1;function sd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||os==null||os!==ll(i)||(i=os,"selectionStart"in i&&jf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Do(po,i)||(po=i,i=ml(Vu,"onSelect"),0<i.length&&(e=new Wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},Tc={},Tg={};mi&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Gl(t){if(Tc[t])return Tc[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tg)return Tc[t]=e[n];return t}var wg=Gl("animationend"),Ag=Gl("animationiteration"),Cg=Gl("animationstart"),Rg=Gl("transitionend"),Pg=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){Pg.set(t,e),Dr(e,[t])}for(var wc=0;wc<od.length;wc++){var Ac=od[wc],lx=Ac.toLowerCase(),cx=Ac[0].toUpperCase()+Ac.slice(1);Qi(lx,"on"+cx)}Qi(wg,"onAnimationEnd");Qi(Ag,"onAnimationIteration");Qi(Cg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(Rg,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function ad(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,l_(i,e,void 0,t),t.currentTarget=null}function bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ad(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ad(r,a,c),s=l}}}if(ul)throw t=ku,ul=!1,ku=null,t}function rt(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(Lg(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),Lg(n,t,i,e)}var ha="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[ha]){t[ha]=!0,km.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ha]||(e[ha]=!0,Cc("selectionchange",!1,e))}}function Lg(t,e,n,i){switch(pg(e)){case 1:var r=T_;break;case 4:r=w_;break;default:r=Vf}n=r.bind(null,e,n,t),r=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}eg(function(){var c=s,f=kf(n),h=[];e:{var d=Pg.get(t);if(d!==void 0){var v=Wf,x=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":v=B_;break;case"focusin":x="focus",v=Sc;break;case"focusout":x="blur",v=Sc;break;case"beforeblur":case"afterblur":v=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=G_;break;case wg:case Ag:case Cg:v=L_;break;case Rg:v=X_;break;case"scroll":v=A_;break;case"wheel":v=j_;break;case"copy":case"cut":case"paste":v=N_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zh}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var _=c,p;_!==null;){p=_;var M=p.stateNode;if(p.tag===5&&M!==null&&(p=M,u!==null&&(M=Co(_,u),M!=null&&y.push(Io(_,M,p)))),g)break;_=_.return}0<y.length&&(d=new v(d,x,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",d&&n!==Uu&&(x=n.relatedTarget||n.fromElement)&&(gr(x)||x[gi]))break e;if((v||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?gr(x):null,x!==null&&(g=Nr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(y=$h,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zh,M="onPointerLeave",u="onPointerEnter",_="pointer"),g=v==null?d:ls(v),p=x==null?d:ls(x),d=new y(M,_+"leave",v,n,f),d.target=g,d.relatedTarget=p,M=null,gr(f)===c&&(y=new y(u,_+"enter",x,n,f),y.target=p,y.relatedTarget=g,M=y),g=M,v&&x)t:{for(y=v,u=x,_=0,p=y;p;p=Or(p))_++;for(p=0,M=u;M;M=Or(M))p++;for(;0<_-p;)y=Or(y),_--;for(;0<p-_;)u=Or(u),p--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Or(y),u=Or(u)}y=null}else y=null;v!==null&&ld(h,d,v,y,!1),x!==null&&g!==null&&ld(h,g,x,y,!0)}}e:{if(d=c?ls(c):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var P=ex;else if(ed(d))if(yg)P=rx;else{P=nx;var C=tx}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=ix);if(P&&(P=P(t,c))){xg(h,P,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&bu(d,"number",d.value)}switch(C=c?ls(c):window,t){case"focusin":(ed(C)||C.contentEditable==="true")&&(os=C,Vu=c,po=null);break;case"focusout":po=Vu=os=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,sd(h,n,f);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":sd(h,n,f)}var T;if(Yf)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else ss?vg(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(gg&&n.locale!=="ko"&&(ss||H!=="onCompositionStart"?H==="onCompositionEnd"&&ss&&(T=mg()):(Ui=f,Gf="value"in Ui?Ui.value:Ui.textContent,ss=!0)),C=ml(c,H),0<C.length&&(H=new Kh(H,t,null,n,f),h.push({event:H,listeners:C}),T?H.data=T:(T=_g(n),T!==null&&(H.data=T)))),(T=$_?K_(t,n):Z_(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(f=new Kh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}bg(h,e)})}function Io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Co(t,n),s!=null&&i.unshift(Io(t,s,r)),s=Co(t,e),s!=null&&i.push(Io(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ld(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Co(n,s),l!=null&&o.unshift(Io(n,l,a))):r||(l=Co(n,s),l!=null&&o.push(Io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function cd(t){return(typeof t=="string"?t:""+t).replace(fx,`
`).replace(hx,"")}function da(t,e,n){if(e=cd(e),cd(t)!==e&&n)throw Error(ye(425))}function gl(){}var Wu=null,Xu=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(t){return ud.resolve(null).then(t).catch(mx)}:ju;function mx(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),bo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);bo(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Hs,Uo="__reactProps$"+Hs,gi="__reactContainer$"+Hs,qu="__reactEvents$"+Hs,gx="__reactListeners$"+Hs,vx="__reactHandles$"+Hs;function gr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fd(t);t!==null;){if(n=t[$n])return n;t=fd(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[$n]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function Wl(t){return t[Uo]||null}var $u=[],cs=-1;function er(t){return{current:t}}function ot(t){0>cs||(t.current=$u[cs],$u[cs]=null,cs--)}function it(t,e){cs++,$u[cs]=t.current,t.current=e}var Zi={},Xt=er(Zi),sn=er(!1),Tr=Zi;function Ps(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function vl(){ot(sn),ot(Xt)}function hd(t,e,n){if(Xt.current!==Zi)throw Error(ye(168));it(Xt,e),it(sn,n)}function Dg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,t_(t)||"Unknown",r));return pt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Tr=Xt.current,it(Xt,t),it(sn,sn.current),!0}function dd(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=Dg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ot(sn),ot(Xt),it(Xt,t)):ot(sn),it(sn,n)}var ui=null,Xl=!1,bc=!1;function Ng(t){ui===null?ui=[t]:ui.push(t)}function _x(t){Xl=!0,Ng(t)}function tr(){if(!bc&&ui!==null){bc=!0;var t=0,e=tt;try{var n=ui;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,Xl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),rg(zf,tr),r}finally{tt=e,bc=!1}}return null}var us=[],fs=0,xl=null,yl=0,Mn=[],En=0,wr=null,fi=1,hi="";function fr(t,e){us[fs++]=yl,us[fs++]=xl,xl=t,yl=e}function Ig(t,e,n){Mn[En++]=fi,Mn[En++]=hi,Mn[En++]=wr,wr=t;var i=fi;t=hi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Vn(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function qf(t){t.return!==null&&(fr(t,1),Ig(t,1,0))}function $f(t){for(;t===xl;)xl=us[--fs],us[fs]=null,yl=us[--fs],us[fs]=null;for(;t===wr;)wr=Mn[--En],Mn[En]=null,hi=Mn[--En],Mn[En]=null,fi=Mn[--En],Mn[En]=null}var mn=null,pn=null,lt=!1,kn=null;function Ug(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zu(t){if(lt){var e=pn;if(e){var n=e;if(!pd(t,e)){if(Ku(t))throw Error(ye(418));e=Vi(n.nextSibling);var i=mn;e&&pd(t,e)?Ug(i,n):(t.flags=t.flags&-4097|2,lt=!1,mn=t)}}else{if(Ku(t))throw Error(ye(418));t.flags=t.flags&-4097|2,lt=!1,mn=t}}}function md(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function pa(t){if(t!==mn)return!1;if(!lt)return md(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=pn)){if(Ku(t))throw Og(),Error(ye(418));for(;e;)Ug(t,e),e=Vi(e.nextSibling)}if(md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Vi(t.stateNode.nextSibling):null;return!0}function Og(){for(var t=pn;t;)t=Vi(t.nextSibling)}function bs(){pn=mn=null,lt=!1}function Kf(t){kn===null?kn=[t]:kn.push(t)}var xx=Si.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gd(t){var e=t._init;return e(t._payload)}function Fg(t){function e(u,_){if(t){var p=u.deletions;p===null?(u.deletions=[_],u.flags|=16):p.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Yi(u,_),u.index=0,u.sibling=null,u}function s(u,_,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<_?(u.flags|=2,_):p):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,p,M){return _===null||_.tag!==6?(_=Fc(p,u.mode,M),_.return=u,_):(_=r(_,p),_.return=u,_)}function l(u,_,p,M){var P=p.type;return P===rs?f(u,_,p.props.children,M,p.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===bi&&gd(P)===_.type)?(M=r(_,p.props),M.ref=Ks(u,_,p),M.return=u,M):(M=rl(p.type,p.key,p.props,null,u.mode,M),M.ref=Ks(u,_,p),M.return=u,M)}function c(u,_,p,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=kc(p,u.mode,M),_.return=u,_):(_=r(_,p.children||[]),_.return=u,_)}function f(u,_,p,M,P){return _===null||_.tag!==7?(_=yr(p,u.mode,M,P),_.return=u,_):(_=r(_,p),_.return=u,_)}function h(u,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Fc(""+_,u.mode,p),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ra:return p=rl(_.type,_.key,_.props,null,u.mode,p),p.ref=Ks(u,null,_),p.return=u,p;case is:return _=kc(_,u.mode,p),_.return=u,_;case bi:var M=_._init;return h(u,M(_._payload),p)}if(oo(_)||Xs(_))return _=yr(_,u.mode,p,null),_.return=u,_;ma(u,_)}return null}function d(u,_,p,M){var P=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:a(u,_,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ra:return p.key===P?l(u,_,p,M):null;case is:return p.key===P?c(u,_,p,M):null;case bi:return P=p._init,d(u,_,P(p._payload),M)}if(oo(p)||Xs(p))return P!==null?null:f(u,_,p,M,null);ma(u,p)}return null}function v(u,_,p,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(p)||null,a(_,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ra:return u=u.get(M.key===null?p:M.key)||null,l(_,u,M,P);case is:return u=u.get(M.key===null?p:M.key)||null,c(_,u,M,P);case bi:var C=M._init;return v(u,_,p,C(M._payload),P)}if(oo(M)||Xs(M))return u=u.get(p)||null,f(_,u,M,P,null);ma(_,M)}return null}function x(u,_,p,M){for(var P=null,C=null,T=_,H=_=0,E=null;T!==null&&H<p.length;H++){T.index>H?(E=T,T=null):E=T.sibling;var A=d(u,T,p[H],M);if(A===null){T===null&&(T=E);break}t&&T&&A.alternate===null&&e(u,T),_=s(A,_,H),C===null?P=A:C.sibling=A,C=A,T=E}if(H===p.length)return n(u,T),lt&&fr(u,H),P;if(T===null){for(;H<p.length;H++)T=h(u,p[H],M),T!==null&&(_=s(T,_,H),C===null?P=T:C.sibling=T,C=T);return lt&&fr(u,H),P}for(T=i(u,T);H<p.length;H++)E=v(T,u,H,p[H],M),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?H:E.key),_=s(E,_,H),C===null?P=E:C.sibling=E,C=E);return t&&T.forEach(function(Z){return e(u,Z)}),lt&&fr(u,H),P}function y(u,_,p,M){var P=Xs(p);if(typeof P!="function")throw Error(ye(150));if(p=P.call(p),p==null)throw Error(ye(151));for(var C=P=null,T=_,H=_=0,E=null,A=p.next();T!==null&&!A.done;H++,A=p.next()){T.index>H?(E=T,T=null):E=T.sibling;var Z=d(u,T,A.value,M);if(Z===null){T===null&&(T=E);break}t&&T&&Z.alternate===null&&e(u,T),_=s(Z,_,H),C===null?P=Z:C.sibling=Z,C=Z,T=E}if(A.done)return n(u,T),lt&&fr(u,H),P;if(T===null){for(;!A.done;H++,A=p.next())A=h(u,A.value,M),A!==null&&(_=s(A,_,H),C===null?P=A:C.sibling=A,C=A);return lt&&fr(u,H),P}for(T=i(u,T);!A.done;H++,A=p.next())A=v(T,u,H,A.value,M),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?H:A.key),_=s(A,_,H),C===null?P=A:C.sibling=A,C=A);return t&&T.forEach(function(G){return e(u,G)}),lt&&fr(u,H),P}function g(u,_,p,M){if(typeof p=="object"&&p!==null&&p.type===rs&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ra:e:{for(var P=p.key,C=_;C!==null;){if(C.key===P){if(P=p.type,P===rs){if(C.tag===7){n(u,C.sibling),_=r(C,p.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===bi&&gd(P)===C.type){n(u,C.sibling),_=r(C,p.props),_.ref=Ks(u,C,p),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}p.type===rs?(_=yr(p.props.children,u.mode,M,p.key),_.return=u,u=_):(M=rl(p.type,p.key,p.props,null,u.mode,M),M.ref=Ks(u,_,p),M.return=u,u=M)}return o(u);case is:e:{for(C=p.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(u,_.sibling),_=r(_,p.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=kc(p,u.mode,M),_.return=u,u=_}return o(u);case bi:return C=p._init,g(u,_,C(p._payload),M)}if(oo(p))return x(u,_,p,M);if(Xs(p))return y(u,_,p,M);ma(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,p),_.return=u,u=_):(n(u,_),_=Fc(p,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return g}var Ls=Fg(!0),kg=Fg(!1),Sl=er(null),Ml=null,hs=null,Zf=null;function Jf(){Zf=hs=Ml=null}function Qf(t){var e=Sl.current;ot(Sl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){Ml=t,Zf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(Zf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Ml===null)throw Error(ye(308));hs=t,Ml.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var vr=null;function eh(t){vr===null?vr=[t]:vr.push(t)}function zg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bf(t,n)}}function vd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,v=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(d=e,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(v,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(v,h,d):x,d==null)break e;h=pt({},h,d);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else v={eventTime:v,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=v,l=h):f=f.next=v,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=h}}function _d(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var Jo={},Zn=er(Jo),Oo=er(Jo),Fo=er(Jo);function _r(t){if(t===Jo)throw Error(ye(174));return t}function nh(t,e){switch(it(Fo,e),it(Oo,t),it(Zn,Jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Du(e,t)}ot(Zn),it(Zn,e)}function Ds(){ot(Zn),ot(Oo),ot(Fo)}function Hg(t){_r(Fo.current);var e=_r(Zn.current),n=Du(e,t.type);e!==n&&(it(Oo,t),it(Zn,n))}function ih(t){Oo.current===t&&(ot(Zn),ot(Oo))}var ft=er(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function rh(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Qa=Si.ReactCurrentDispatcher,Dc=Si.ReactCurrentBatchConfig,Ar=0,dt=null,Et=null,Pt=null,wl=!1,mo=!1,ko=0,yx=0;function kt(){throw Error(ye(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function oh(t,e,n,i,r,s){if(Ar=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?Tx:wx,t=n(i,r),mo){s=0;do{if(mo=!1,ko=0,25<=s)throw Error(ye(301));s+=1,Pt=Et=null,e.updateQueue=null,Qa.current=Ax,t=n(i,r)}while(mo)}if(Qa.current=Al,e=Et!==null&&Et.next!==null,Ar=0,Pt=Et=dt=null,wl=!1,e)throw Error(ye(300));return t}function ah(){var t=ko!==0;return ko=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Ln(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?dt.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(ye(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function zo(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Ar&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=f,Cr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Vg(){}function Gg(t,e){var n=dt,i=Ln(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,lh(Yg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Bo(9,Xg.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ye(349));Ar&30||Wg(n,e,r)}return r}function Wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xg(t,e,n,i){e.value=n,e.getSnapshot=i,jg(e)&&qg(t)}function Yg(t,e,n){return n(function(){jg(e)&&qg(t)})}function jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function qg(t){var e=vi(t,1);e!==null&&Gn(e,t,1,-1)}function xd(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ex.bind(null,dt,t),[e.memoizedState,t]}function Bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $g(){return Ln().memoizedState}function el(t,e,n,i){var r=jn();dt.flags|=t,r.memoizedState=Bo(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&sh(i,o.deps)){r.memoizedState=Bo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Bo(1|e,n,s,i)}function yd(t,e){return el(8390656,8,t,e)}function lh(t,e){return Yl(2048,8,t,e)}function Kg(t,e){return Yl(4,2,t,e)}function Zg(t,e){return Yl(4,4,t,e)}function Jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qg(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,Jg.bind(null,e,t),n)}function ch(){}function e0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function t0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function n0(t,e,n){return Ar&21?(Wn(n,e)||(n=ag(),dt.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function Sx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{tt=n,Dc.transition=i}}function i0(){return Ln().memoizedState}function Mx(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},r0(t))s0(e,n);else if(n=zg(t,e,n,i),n!==null){var r=Kt();Gn(n,t,i,r),o0(n,e,i)}}function Ex(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(r0(t))s0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=zg(t,e,r,i),n!==null&&(r=Kt(),Gn(n,t,i,r),o0(n,e,i))}}function r0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function s0(t,e){mo=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bf(t,n)}}var Al={readContext:bn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Tx={readContext:bn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:yd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,Jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Mx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:xd,useDebugValue:ch,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=xd(!1),e=t[0];return t=Sx.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=jn();if(lt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),Dt===null)throw Error(ye(349));Ar&30||Wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yd(Yg.bind(null,i,s,t),[t]),i.flags|=2048,Bo(9,Xg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Dt.identifierPrefix;if(lt){var n=hi,i=fi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wx={readContext:bn,useCallback:e0,useContext:bn,useEffect:lh,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:Zg,useMemo:t0,useReducer:Nc,useRef:$g,useState:function(){return Nc(zo)},useDebugValue:ch,useDeferredValue:function(t){var e=Ln();return n0(e,Et.memoizedState,t)},useTransition:function(){var t=Nc(zo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Vg,useSyncExternalStore:Gg,useId:i0,unstable_isNewReconciler:!1},Ax={readContext:bn,useCallback:e0,useContext:bn,useEffect:lh,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:Zg,useMemo:t0,useReducer:Ic,useRef:$g,useState:function(){return Ic(zo)},useDebugValue:ch,useDeferredValue:function(t){var e=Ln();return Et===null?e.memoizedState=t:n0(e,Et.memoizedState,t)},useTransition:function(){var t=Ic(zo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Vg,useSyncExternalStore:Gg,useId:i0,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Xi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Gn(e,t,r,i),Ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Xi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Gn(e,t,r,i),Ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Xi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Gn(e,t,i,n),Ja(e,t,i))}};function Sd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,i)||!Do(r,s):!0}function a0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=on(e)?Tr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Md(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=on(e)?Tr:Xt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=e_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function l0(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,hf=i),tf(t,e)},n}function c0(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){tf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tf(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ed(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Hx.bind(null,t,e,n),e.then(t,t))}function Td(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var Rx=Si.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?kg(e,null,n,i):Ls(e,t.child,n,i)}function Ad(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=oh(t,e,n,i,s,r),n=ah(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(lt&&n&&qf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Cd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,u0(t,e,s,i,r)):(t=rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function u0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Do(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,_i(t,e,r)}return nf(t,e,n,i,r)}function f0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ps,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ps,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ps,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ps,dn),dn|=i;return qt(t,e,r,n),e.child}function h0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nf(t,e,n,i,r){var s=on(n)?Tr:Xt.current;return s=Ps(e,s),Es(e,r),n=oh(t,e,n,i,s,r),i=ah(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(lt&&i&&qf(e),e.flags|=1,qt(t,e,n,r),e.child)}function Rd(t,e,n,i,r){if(on(n)){var s=!0;_l(e)}else s=!1;if(Es(e,r),e.stateNode===null)tl(t,e),a0(e,n,i),ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=on(n)?Tr:Xt.current,c=Ps(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Md(e,o,i,c),Li=!1;var d=e.memoizedState;o.state=d,El(e,i,o,r),l=e.memoizedState,a!==i||d!==l||sn.current||Li?(typeof f=="function"&&(Qu(e,n,f,i),l=e.memoizedState),(a=Li||Sd(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=on(n)?Tr:Xt.current,l=Ps(e,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Md(e,o,i,l),Li=!1,d=e.memoizedState,o.state=d,El(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||sn.current||Li?(typeof v=="function"&&(Qu(e,n,v,i),x=e.memoizedState),(c=Li||Sd(e,n,c,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return rf(t,e,n,i,s,r)}function rf(t,e,n,i,r,s){h0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dd(e,n,!1),_i(t,e,s);i=e.stateNode,Rx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ls(e,t.child,null,s),e.child=Ls(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&dd(e,n,!0),e.child}function d0(t){var e=t.stateNode;e.pendingContext?hd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hd(t,e.context,!1),nh(t,e.containerInfo)}function Pd(t,e,n,i,r){return bs(),Kf(r),e.flags|=256,qt(t,e,n,i),e.child}var sf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function p0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=of(n),e.memoizedState=sf,t):uh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Px(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sf,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function uh(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,i){return i!==null&&Kf(i),Ls(e,t.child,null,n),t=uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Px(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(ye(422))),ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ls(e,t.child,null,o),e.child.memoizedState=of(o),e.memoizedState=sf,s);if(!(e.mode&1))return ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=Uc(s,i,void 0),ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Gn(i,t,r,-1))}return gh(),i=Uc(Error(ye(421))),ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Vx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Vi(r.nextSibling),mn=e,lt=!0,kn=null,t!==null&&(Mn[En++]=fi,Mn[En++]=hi,Mn[En++]=wr,fi=t.id,hi=t.overflow,wr=e),e=uh(e,i.children),e.flags|=4096,e)}function bd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function m0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bd(t,n,e);else if(t.tag===19)bd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:d0(e),bs();break;case 5:Hg(e);break;case 1:on(e.type)&&_l(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?p0(t,e,n):(it(ft,ft.current&1),t=_i(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return m0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,f0(t,e,n)}return _i(t,e,n)}var g0,af,v0,_0;g0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};af=function(){};v0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Zn.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(t,r),i=Lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Nu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Lx(t,e,n){var i=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return on(e.type)&&vl(),zt(e),null;case 3:return i=e.stateNode,Ds(),ot(sn),ot(Xt),rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(mf(kn),kn=null))),af(t,e),zt(e),null;case 5:ih(e);var r=_r(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)v0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return zt(e),null}if(t=_r(Zn.current),pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<lo.length;r++)rt(lo[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":zh(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Hh(i,s),rt("invalid",i)}Nu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",""+a]):wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":sa(i),Bh(i,s,!0);break;case"textarea":sa(i),Vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[Uo]=i,g0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Iu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<lo.length;r++)rt(lo[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":zh(t,i),r=Ru(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Hh(t,i),r=Lu(t,i),rt("invalid",t);break;default:r=i}Nu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$m(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&If(t,s,l,o))}switch(n){case"input":sa(t),Bh(t,i,!1);break;case"textarea":sa(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=_r(Fo.current),_r(Zn.current),pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:da(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return zt(e),null;case 13:if(ot(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&e.mode&1&&!(e.flags&128))Og(),bs(),e.flags|=98560,s=!1;else if(s=pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[$n]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else kn!==null&&(mf(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):gh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ds(),af(t,e),t===null&&No(e.stateNode.containerInfo),zt(e),null;case 10:return Qf(e.type._context),zt(e),null;case 17:return on(e.type)&&vl(),zt(e),null;case 19:if(ot(ft),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zs(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,Zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Is&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return zt(e),null}else 2*xt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return mh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function Dx(t,e){switch($f(e),e.tag){case 1:return on(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),ot(sn),ot(Xt),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(ot(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ft),null;case 4:return Ds(),null;case 10:return Qf(e.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var va=!1,Vt=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function lf(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Ld=!1;function Ix(t,e){if(Wu=dl,t=Eg(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var v;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)d=h,h=v;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(v=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},dl=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(M){vt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return x=Ld,Ld=!1,x}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lf(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x0(t){var e=t.alternate;e!==null&&(t.alternate=null,x0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Uo],delete e[qu],delete e[gx],delete e[vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y0(t){return t.tag===5||t.tag===3||t.tag===4}function Dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}var Nt=null,Fn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Vt||ds(n,e);case 6:var i=Nt,r=Fn;Nt=null,Ti(t,e,n),Nt=i,Fn=r,Nt!==null&&(Fn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Fn?(t=Nt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),bo(t)):Pc(Nt,n.stateNode));break;case 4:i=Nt,r=Fn,Nt=n.stateNode.containerInfo,Fn=!0,Ti(t,e,n),Nt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lf(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Vt&&(ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ti(t,e,n),Vt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Nd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(i){var r=Gx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Fn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Fn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Nt===null)throw Error(ye(160));S0(s,o,r),Nt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)M0(e,t),e=e.sibling}function M0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Yn(t),i&4){try{go(3,t,t.return),ql(3,t)}catch(y){vt(t,t.return,y)}try{go(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Dn(e,t),Yn(t),i&512&&n!==null&&ds(n,n.return);break;case 5:if(Dn(e,t),Yn(t),i&512&&n!==null&&ds(n,n.return),t.flags&32){var r=t.stateNode;try{Ao(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wm(r,s),Iu(a,o);var c=Iu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?$m(r,h):f==="dangerouslySetInnerHTML"?jm(r,h):f==="children"?Ao(r,h):If(r,f,h,c)}switch(a){case"input":Pu(r,s);break;case"textarea":Xm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?xs(r,!!s.multiple,v,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Uo]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Dn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Dn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Dn(e,t),Yn(t);break;case 13:Dn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(dh=xt())),i&4&&Nd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Dn(e,t),Vt=c):Dn(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ue=t,f=t.child;f!==null;){for(h=Ue=f;Ue!==null;){switch(d=Ue,v=d.child,d.tag){case 0:case 11:case 14:case 15:go(4,d,d.return);break;case 1:ds(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:ds(d,d.return);break;case 22:if(d.memoizedState!==null){Ud(h);continue}}v!==null?(v.return=d,Ue=v):Ud(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qm("display",o))}catch(y){vt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){vt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Yn(t),i&4&&Nd(t);break;case 21:break;default:Dn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y0(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ao(r,""),i.flags&=-33);var s=Dd(t);ff(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dd(t);uf(t,a,o);break;default:throw Error(ye(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ux(t,e,n){Ue=t,E0(t)}function E0(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=va;var c=Vt;if(va=o,(Vt=l)&&!c)for(Ue=r;Ue!==null;)o=Ue,l=o.child,o.tag===22&&o.memoizedState!==null?Od(r):l!==null?(l.return=o,Ue=l):Od(r);for(;s!==null;)Ue=s,E0(s),s=s.sibling;Ue=r,va=a,Vt=c}Id(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):Id(t)}}function Id(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_d(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_d(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}Vt||e.flags&512&&cf(e)}catch(d){vt(e,e.return,d)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Ud(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Od(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{cf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{cf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var Ox=Math.ceil,Cl=Si.ReactCurrentDispatcher,fh=Si.ReactCurrentOwner,Pn=Si.ReactCurrentBatchConfig,et=0,Dt=null,St=null,Ut=0,dn=0,ps=er(0),Tt=0,Ho=null,Cr=0,$l=0,hh=0,vo=null,tn=null,dh=0,Is=1/0,ci=null,Rl=!1,hf=null,Wi=null,_a=!1,Oi=null,Pl=0,_o=0,df=null,nl=-1,il=0;function Kt(){return et&6?xt():nl!==-1?nl:nl=xt()}function Xi(t){return t.mode&1?et&2&&Ut!==0?Ut&-Ut:xx.transition!==null?(il===0&&(il=ag()),il):(t=tt,t!==0||(t=window.event,t=t===void 0?16:pg(t.type)),t):1}function Gn(t,e,n,i){if(50<_o)throw _o=0,df=null,Error(ye(185));$o(t,n,i),(!(et&2)||t!==Dt)&&(t===Dt&&(!(et&2)&&($l|=n),Tt===4&&Ii(t,Ut)),an(t,i),n===1&&et===0&&!(e.mode&1)&&(Is=xt()+500,Xl&&tr()))}function an(t,e){var n=t.callbackNode;x_(t,e);var i=hl(t,t===Dt?Ut:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?_x(Fd.bind(null,t)):Ng(Fd.bind(null,t)),px(function(){!(et&6)&&tr()}),n=null;else{switch(lg(i)){case 1:n=zf;break;case 4:n=sg;break;case 16:n=fl;break;case 536870912:n=og;break;default:n=fl}n=L0(n,T0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function T0(t,e){if(nl=-1,il=0,et&6)throw Error(ye(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=hl(t,t===Dt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=et;et|=2;var s=A0();(Dt!==t||Ut!==e)&&(ci=null,Is=xt()+500,xr(t,e));do try{zx();break}catch(a){w0(t,a)}while(!0);Jf(),Cl.current=s,et=r,St!==null?e=0:(Dt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(r=zu(t),r!==0&&(i=r,e=pf(t,r))),e===1)throw n=Ho,xr(t,0),Ii(t,i),an(t,xt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fx(r)&&(e=bl(t,i),e===2&&(s=zu(t),s!==0&&(i=s,e=pf(t,s))),e===1))throw n=Ho,xr(t,0),Ii(t,i),an(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:hr(t,tn,ci);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=dh+500-xt(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(hr.bind(null,t,tn,ci),e);break}hr(t,tn,ci);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ox(i/1960))-i,10<i){t.timeoutHandle=ju(hr.bind(null,t,tn,ci),i);break}hr(t,tn,ci);break;case 5:hr(t,tn,ci);break;default:throw Error(ye(329))}}}return an(t,xt()),t.callbackNode===n?T0.bind(null,t):null}function pf(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=tn,tn=n,e!==null&&mf(e)),t}function mf(t){tn===null?tn=t:tn.push.apply(tn,t)}function Fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~hh,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function Fd(t){if(et&6)throw Error(ye(327));Ts();var e=hl(t,0);if(!(e&1))return an(t,xt()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=zu(t);i!==0&&(e=i,n=pf(t,i))}if(n===1)throw n=Ho,xr(t,0),Ii(t,e),an(t,xt()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,tn,ci),an(t,xt()),null}function ph(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Is=xt()+500,Xl&&tr())}}function Rr(t){Oi!==null&&Oi.tag===0&&!(et&6)&&Ts();var e=et;et|=1;var n=Pn.transition,i=tt;try{if(Pn.transition=null,tt=1,t)return t()}finally{tt=i,Pn.transition=n,et=e,!(et&6)&&tr()}}function mh(){dn=ps.current,ot(ps)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch($f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Ds(),ot(sn),ot(Xt),rh();break;case 5:ih(i);break;case 4:Ds();break;case 13:ot(ft);break;case 19:ot(ft);break;case 10:Qf(i.type._context);break;case 22:case 23:mh()}n=n.return}if(Dt=t,St=t=Yi(t.current,null),Ut=dn=e,Tt=0,Ho=null,hh=$l=Cr=0,tn=vo=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function w0(t,e){do{var n=St;try{if(Jf(),Qa.current=Al,wl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Ar=0,Pt=Et=dt=null,mo=!1,ko=0,fh.current=null,n===null||n.return===null){Tt=1,Ho=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Td(o);if(v!==null){v.flags&=-257,wd(v,o,a,s,e),v.mode&1&&Ed(s,c,e),e=v,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Ed(s,c,e),gh();break e}l=Error(ye(426))}}else if(lt&&a.mode&1){var g=Td(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),wd(g,o,a,s,e),Kf(Ns(l,a));break e}}s=l=Ns(l,a),Tt!==4&&(Tt=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=l0(s,l,e);vd(s,u);break e;case 1:a=l;var _=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wi===null||!Wi.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=c0(s,a,e);vd(s,M);break e}}s=s.return}while(s!==null)}R0(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function A0(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function gh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||!(Cr&268435455)&&!($l&268435455)||Ii(Dt,Ut)}function bl(t,e){var n=et;et|=2;var i=A0();(Dt!==t||Ut!==e)&&(ci=null,xr(t,e));do try{kx();break}catch(r){w0(t,r)}while(!0);if(Jf(),et=n,Cl.current=i,St!==null)throw Error(ye(261));return Dt=null,Ut=0,Tt}function kx(){for(;St!==null;)C0(St)}function zx(){for(;St!==null&&!u_();)C0(St)}function C0(t){var e=b0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?R0(t):St=e,fh.current=null}function R0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Dx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=Lx(n,e,dn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function hr(t,e,n){var i=tt,r=Pn.transition;try{Pn.transition=null,tt=1,Bx(t,e,n,i)}finally{Pn.transition=r,tt=i}return null}function Bx(t,e,n,i){do Ts();while(Oi!==null);if(et&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y_(t,s),t===Dt&&(St=Dt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,L0(fl,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=tt;tt=1;var a=et;et|=4,fh.current=null,Ix(t,n),M0(n,t),ox(Xu),dl=!!Wu,Xu=Wu=null,t.current=n,Ux(n),f_(),et=a,tt=o,Pn.transition=s}else t.current=n;if(_a&&(_a=!1,Oi=t,Pl=r),s=t.pendingLanes,s===0&&(Wi=null),p_(n.stateNode),an(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=hf,hf=null,t;return Pl&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===df?_o++:(_o=0,df=t):_o=0,tr(),null}function Ts(){if(Oi!==null){var t=lg(Pl),e=Pn.transition,n=tt;try{if(Pn.transition=null,tt=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,Pl=0,et&6)throw Error(ye(331));var r=et;for(et|=4,Ue=t.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var f=Ue;switch(f.tag){case 0:case 11:case 15:go(8,f,s)}var h=f.child;if(h!==null)h.return=f,Ue=h;else for(;Ue!==null;){f=Ue;var d=f.sibling,v=f.return;if(x0(f),f===c){Ue=null;break}if(d!==null){d.return=v,Ue=d;break}Ue=v}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ue=u;break e}Ue=s.return}}var _=t.current;for(Ue=_;Ue!==null;){o=Ue;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,Ue=p;else e:for(o=_;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ql(9,a)}}catch(P){vt(a,a.return,P)}if(a===o){Ue=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ue=M;break e}Ue=a.return}}if(et=r,tr(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Bl,t)}catch{}i=!0}return i}finally{tt=n,Pn.transition=e}}return!1}function kd(t,e,n){e=Ns(n,e),e=l0(t,e,1),t=Gi(t,e,1),e=Kt(),t!==null&&($o(t,1,e),an(t,e))}function vt(t,e,n){if(t.tag===3)kd(t,t,n);else for(;e!==null;){if(e.tag===3){kd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=Ns(n,t),t=c0(e,t,1),e=Gi(e,t,1),t=Kt(),e!==null&&($o(e,1,t),an(e,t));break}}e=e.return}}function Hx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ut&n)===n&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>xt()-dh?xr(t,0):hh|=n),an(t,e)}function P0(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=Kt();t=vi(t,e),t!==null&&($o(t,e,n),an(t,n))}function Vx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P0(t,n)}function Gx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),P0(t,n)}var b0;b0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,bx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,lt&&e.flags&1048576&&Ig(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tl(t,e),t=e.pendingProps;var r=Ps(e,Xt.current);Es(e,n),r=oh(null,e,i,t,r,n);var s=ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,th(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,ef(e,i,t,n),e=rf(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&qf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Xx(i),t=On(i,t),r){case 0:e=nf(null,e,i,t,n);break e;case 1:e=Rd(null,e,i,t,n);break e;case 11:e=Ad(null,e,i,t,n);break e;case 14:e=Cd(null,e,i,On(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),nf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Rd(t,e,i,r,n);case 3:e:{if(d0(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bg(t,e),El(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(ye(423)),e),e=Pd(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(ye(424)),e),e=Pd(t,e,i,n,r);break e}else for(pn=Vi(e.stateNode.containerInfo.firstChild),mn=e,lt=!0,kn=null,n=kg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=_i(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return Hg(e),t===null&&Zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yu(i,r)?o=null:s!==null&&Yu(i,s)&&(e.flags|=32),h0(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Zu(e),null;case 13:return p0(t,e,n);case 4:return nh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Ad(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Sl,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!sn.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=bn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),Cd(t,e,i,r,n);case 15:return u0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),tl(t,e),e.tag=1,on(i)?(t=!0,_l(e)):t=!1,Es(e,n),a0(e,i,r),ef(e,i,r,n),rf(null,e,i,!0,t,n);case 19:return m0(t,e,n);case 22:return f0(t,e,n)}throw Error(ye(156,e.tag))};function L0(t,e){return rg(t,e)}function Wx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Wx(t,e,n,i)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xx(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===Ff)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return yr(n.children,r,s,e);case Uf:o=8,r|=8;break;case Tu:return t=Rn(12,n,e,r|2),t.elementType=Tu,t.lanes=s,t;case wu:return t=Rn(13,n,e,r),t.elementType=wu,t.lanes=s,t;case Au:return t=Rn(19,n,e,r),t.elementType=Au,t.lanes=s,t;case Hm:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zm:o=10;break e;case Bm:o=9;break e;case Of:o=11;break e;case Ff:o=14;break e;case bi:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Hm,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,i,r,s,o,a,l){return t=new Yx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(s),t}function jx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function D0(t){if(!t)return Zi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(on(n))return Dg(t,n,e)}return e}function N0(t,e,n,i,r,s,o,a,l){return t=_h(n,i,!0,t,r,s,o,a,l),t.context=D0(null),n=t.current,i=Kt(),r=Xi(n),s=pi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,$o(t,r,i),an(t,i),t}function Zl(t,e,n,i){var r=e.current,s=Kt(),o=Xi(r);return n=D0(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(Gn(t,r,o,s),Ja(t,r,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xh(t,e){zd(t,e),(t=t.alternate)&&zd(t,e)}function qx(){return null}var I0=typeof reportError=="function"?reportError:function(t){console.error(t)};function yh(t){this._internalRoot=t}Jl.prototype.render=yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));Zl(t,e,null,null)};Jl.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Zl(null,t,null,null)}),e[gi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=fg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&dg(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function $x(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ll(o);s.call(c)}}var o=N0(e,i,t,0,null,!1,!1,"",Bd);return t._reactRootContainer=o,t[gi]=o.current,No(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ll(l);a.call(c)}}var l=_h(t,0,!1,null,null,!1,!1,"",Bd);return t._reactRootContainer=l,t[gi]=l.current,No(t.nodeType===8?t.parentNode:t),Rr(function(){Zl(e,l,n,i)}),l}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ll(o);a.call(l)}}Zl(e,o,t,r)}else o=$x(n,e,t,r,i);return Ll(o)}cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Bf(e,n|1),an(e,xt()),!(et&6)&&(Is=xt()+500,tr()))}break;case 13:Rr(function(){var i=vi(t,1);if(i!==null){var r=Kt();Gn(i,t,1,r)}}),xh(t,1)}};Hf=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Kt();Gn(e,t,134217728,n)}xh(t,134217728)}};ug=function(t){if(t.tag===13){var e=Xi(t),n=vi(t,e);if(n!==null){var i=Kt();Gn(n,t,e,i)}xh(t,e)}};fg=function(){return tt};hg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wl(i);if(!r)throw Error(ye(90));Gm(i),Pu(i,r)}}}break;case"textarea":Xm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};Jm=ph;Qm=Rr;var Kx={usingClientEntryPoint:!1,Events:[Zo,ls,Wl,Km,Zm,ph]},Js={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zx={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ng(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{Bl=xa.inject(Zx),Kn=xa}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(ye(200));return jx(t,e,null,n)};vn.createRoot=function(t,e){if(!Sh(t))throw Error(ye(299));var n=!1,i="",r=I0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,No(t.nodeType===8?t.parentNode:t),new yh(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=ng(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Rr(t)};vn.hydrate=function(t,e,n){if(!Ql(e))throw Error(ye(200));return ec(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=I0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=N0(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,No(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Jl(e)};vn.render=function(t,e,n){if(!Ql(e))throw Error(ye(200));return ec(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(ye(40));return t._reactRootContainer?(Rr(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};vn.unstable_batchedUpdates=ph;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return ec(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function U0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0)}catch(t){console.error(t)}}U0(),Um.exports=vn;var Jx=Um.exports,Hd=Jx;Mu.createRoot=Hd.createRoot,Mu.hydrateRoot=Hd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="160",Fr={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qx=0,Vd=1,ey=2,O0=1,ty=2,li=3,Ji=0,Gt=1,An=2,ji=0,ws=1,xo=2,Gd=3,Wd=4,ny=5,pr=100,iy=101,ry=102,Xd=103,Yd=104,sy=200,oy=201,ay=202,ly=203,gf=204,vf=205,cy=206,uy=207,fy=208,hy=209,dy=210,py=211,my=212,gy=213,vy=214,_y=0,xy=1,yy=2,Dl=3,Sy=4,My=5,Ey=6,Ty=7,F0=0,wy=1,Ay=2,qi=0,Cy=1,Ry=2,Py=3,by=4,Ly=5,Dy=6,k0=300,Us=301,Os=302,_f=303,xf=304,tc=306,yf=1e3,Bn=1001,Sf=1002,$t=1003,jd=1004,zc=1005,Tn=1006,Ny=1007,Vo=1008,$i=1009,Iy=1010,Uy=1011,Eh=1012,z0=1013,Fi=1014,ki=1015,Go=1016,B0=1017,H0=1018,Sr=1020,Oy=1021,Hn=1023,Fy=1024,ky=1025,Mr=1026,Fs=1027,zy=1028,V0=1029,By=1030,G0=1031,W0=1033,Bc=33776,Hc=33777,Vc=33778,Gc=33779,qd=35840,$d=35841,Kd=35842,Zd=35843,X0=36196,Jd=37492,Qd=37496,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,op=37814,ap=37815,lp=37816,cp=37817,up=37818,fp=37819,hp=37820,dp=37821,Wc=36492,pp=36494,mp=36495,Hy=36283,gp=36284,vp=36285,_p=36286,Y0=3e3,Er=3001,Vy=3200,Gy=3201,j0=0,Wy=1,Cn="",bt="srgb",xi="srgb-linear",Th="display-p3",nc="display-p3-linear",Nl="linear",st="srgb",Il="rec709",Ul="p3",zr=7680,xp=519,Xy=512,Yy=513,jy=514,q0=515,qy=516,$y=517,Ky=518,Zy=519,yp=35044,Sp="300 es",Mf=1035,di=2e3,Ol=2001;class Ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,Ef=180/Math.PI;function Vs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function It(t,e,n){return Math.max(e,Math.min(n,t))}function Jy(t,e){return(t%e+e)%e}function Xc(t,e,n){return(1-n)*t+n*e}function Mp(t){return(t&t-1)===0&&t!==0}function Tf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Qy={DEG2RAD:sl};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],v=i[5],x=i[8],y=r[0],g=r[3],u=r[6],_=r[1],p=r[4],M=r[7],P=r[2],C=r[5],T=r[8];return s[0]=o*y+a*_+l*P,s[3]=o*g+a*p+l*C,s[6]=o*u+a*M+l*T,s[1]=c*y+f*_+h*P,s[4]=c*g+f*p+h*C,s[7]=c*u+f*M+h*T,s[2]=d*y+v*_+x*P,s[5]=d*g+v*p+x*C,s[8]=d*u+v*M+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,v=c*s-o*l,x=n*h+i*d+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=v*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Ge;function $0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eS(){const t=Fl("canvas");return t.style.display="block",t}const Ep={};function yo(t){t in Ep||(Ep[t]=!0,console.warn(t))}const Tp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ya={[xi]:{transfer:Nl,primaries:Il,toReference:t=>t,fromReference:t=>t},[bt]:{transfer:st,primaries:Il,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[nc]:{transfer:Nl,primaries:Ul,toReference:t=>t.applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Tp)},[Th]:{transfer:st,primaries:Ul,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Tp).convertLinearToSRGB()}},tS=new Set([xi,nc]),nt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!tS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ya[e].toReference,r=ya[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ya[t].primaries},getTransfer:function(t){return t===Cn?Nl:ya[t].transfer}};function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class K0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Fl("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nS=0;class Z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Vs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?K0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;class ln extends Ir{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Bn,r=Bn,s=Tn,o=Vo,a=Hn,l=$i,c=ln.DEFAULT_ANISOTROPY,f=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Vs(),this.name="",this.source=new Z0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Er?bt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Er:Y0}set encoding(e){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Er?bt:Cn}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=k0;ln.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],v=l[5],x=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,M=(v+1)/2,P=(u+1)/2,C=(f+d)/4,T=(h+y)/4,H=(x+g)/4;return p>M&&p>P?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=C/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=H/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=H/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-x)*(g-x)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(h-y)/_,this.z=(d-f)/_,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends Ir{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Er?bt:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Z0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends rS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class J0 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],v=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=v,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==d||c!==v||f!==x){let g=1-a;const u=l*d+c*v+f*x+h*y,_=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const P=Math.sqrt(p),C=Math.atan2(P,u*_);g=Math.sin(g*C)/P,a=Math.sin(a*C)/P}const M=a*_;if(l=l*g+d*M,c=c*g+v*M,f=f*g+x*M,h=h*g+y*M,g===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=P,c*=P,f*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],v=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*v-c*d,e[n+1]=l*x+f*d+c*h-a*v,e[n+2]=c*x+f*v+a*d-l*h,e[n+3]=f*x-a*h-l*d-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),v=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*v*x,this._y=c*v*h-d*f*x,this._z=c*f*x+d*v*h,this._w=c*f*h-d*v*x;break;case"YXZ":this._x=d*f*h+c*v*x,this._y=c*v*h-d*f*x,this._z=c*f*x-d*v*h,this._w=c*f*h+d*v*x;break;case"ZXY":this._x=d*f*h-c*v*x,this._y=c*v*h+d*f*x,this._z=c*f*x+d*v*h,this._w=c*f*h-d*v*x;break;case"ZYX":this._x=d*f*h-c*v*x,this._y=c*v*h+d*f*x,this._z=c*f*x-d*v*h,this._w=c*f*h+d*v*x;break;case"YZX":this._x=d*f*h+c*v*x,this._y=c*v*h+d*f*x,this._z=c*f*x-d*v*h,this._w=c*f*h-d*v*x;break;case"XZY":this._x=d*f*h-c*v*x,this._y=c*v*h-d*f*x,this._z=c*f*x+d*v*h,this._w=c*f*h+d*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const v=.5/Math.sqrt(d+1);this._w=.25/v,this._x=(f-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>h){const v=2*Math.sqrt(1+i-a-h);this._w=(f-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>h){const v=2*Math.sqrt(1+a-i-h);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+h-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new V,Ap=new br;class Qo{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Ma.subVectors(this.max,eo),Hr.subVectors(e.a,eo),Vr.subVectors(e.b,eo),Gr.subVectors(e.c,eo),wi.subVectors(Vr,Hr),Ai.subVectors(Gr,Vr),or.subVectors(Hr,Gr);let n=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-or.z,or.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,or.z,0,-or.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-or.y,or.x,0];return!Kc(n,Hr,Vr,Gr,Ma)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,Hr,Vr,Gr,Ma))?!1:(Ea.crossVectors(wi,Ai),n=[Ea.x,Ea.y,Ea.z],Kc(n,Hr,Vr,Gr,Ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new V,new V,new V,new V,new V,new V,new V,new V],Nn=new V,Sa=new Qo,Hr=new V,Vr=new V,Gr=new V,wi=new V,Ai=new V,or=new V,eo=new V,Ma=new V,Ea=new V,ar=new V;function Kc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ar.fromArray(t,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=n.dot(ar),f=i.dot(ar);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const oS=new Qo,to=new V,Zc=new V;class wh{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const n=to.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Zc)),this.expandByPoint(to.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new V,Jc=new V,Ta=new V,Ci=new V,Qc=new V,wa=new V,eu=new V;class Q0{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Ta.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ta),a=Ci.dot(this.direction),l=-Ci.dot(Ta),c=Ci.lengthSq(),f=Math.abs(1-o*o);let h,d,v,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const y=1/f;h*=y,d*=y,v=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),v=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),v=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),v=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),v=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),v=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),v=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Jc).addScaledVector(Ta,d),v}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Qc.subVectors(n,e),wa.subVectors(i,e),eu.crossVectors(Qc,wa);let o=this.direction.dot(eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Ci,wa));if(l<0)return null;const c=a*this.direction.dot(Qc.cross(Ci));if(c<0||l+c>o)return null;const f=-a*Ci.dot(eu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,v,x,y,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,v,x,y,g)}set(e,n,i,r,s,o,a,l,c,f,h,d,v,x,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=v,u[7]=x,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,v=o*h,x=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=v+x*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=x+v*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,v=l*h,x=c*f,y=c*h;n[0]=d+y*a,n[4]=x*a-v,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=v*a-x,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,v=l*h,x=c*f,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=x+v*a,n[1]=v+x*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,v=o*h,x=a*f,y=a*h;n[0]=l*f,n[4]=x*c-v,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=v*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,v=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=y-d*h,n[8]=x*h+v,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=v*h+x,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,v=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+y,n[5]=o*f,n[9]=v*h-x,n[2]=x*h-v,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ri.crossVectors(i,fn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ri.crossVectors(i,fn)),Ri.normalize(),Aa.crossVectors(fn,Ri),r[0]=Ri.x,r[4]=Aa.x,r[8]=fn.x,r[1]=Ri.y,r[5]=Aa.y,r[9]=fn.y,r[2]=Ri.z,r[6]=Aa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],v=i[13],x=i[2],y=i[6],g=i[10],u=i[14],_=i[3],p=i[7],M=i[11],P=i[15],C=r[0],T=r[4],H=r[8],E=r[12],A=r[1],Z=r[5],G=r[9],he=r[13],z=r[2],$=r[6],K=r[10],Q=r[14],I=r[3],W=r[7],Y=r[11],fe=r[15];return s[0]=o*C+a*A+l*z+c*I,s[4]=o*T+a*Z+l*$+c*W,s[8]=o*H+a*G+l*K+c*Y,s[12]=o*E+a*he+l*Q+c*fe,s[1]=f*C+h*A+d*z+v*I,s[5]=f*T+h*Z+d*$+v*W,s[9]=f*H+h*G+d*K+v*Y,s[13]=f*E+h*he+d*Q+v*fe,s[2]=x*C+y*A+g*z+u*I,s[6]=x*T+y*Z+g*$+u*W,s[10]=x*H+y*G+g*K+u*Y,s[14]=x*E+y*he+g*Q+u*fe,s[3]=_*C+p*A+M*z+P*I,s[7]=_*T+p*Z+M*$+P*W,s[11]=_*H+p*G+M*K+P*Y,s[15]=_*E+p*he+M*Q+P*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],v=e[14],x=e[3],y=e[7],g=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*v-i*l*v)+y*(+n*l*v-n*c*d+s*o*d-r*o*v+r*c*f-s*l*f)+g*(+n*c*h-n*a*v-s*o*h+i*o*v+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],v=e[11],x=e[12],y=e[13],g=e[14],u=e[15],_=h*g*c-y*d*c+y*l*v-a*g*v-h*l*u+a*d*u,p=x*d*c-f*g*c-x*l*v+o*g*v+f*l*u-o*d*u,M=f*y*c-x*h*c+x*a*v-o*y*v-f*a*u+o*h*u,P=x*h*l-f*y*l-x*a*d+o*y*d+f*a*g-o*h*g,C=n*_+i*p+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=_*T,e[1]=(y*d*s-h*g*s-y*r*v+i*g*v+h*r*u-i*d*u)*T,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*v-i*l*v)*T,e[4]=p*T,e[5]=(f*g*s-x*d*s+x*r*v-n*g*v-f*r*u+n*d*u)*T,e[6]=(x*l*s-o*g*s-x*r*c+n*g*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*v+n*l*v)*T,e[8]=M*T,e[9]=(x*h*s-f*y*s-x*i*v+n*y*v+f*i*u-n*h*u)*T,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*v-n*a*v)*T,e[12]=P*T,e[13]=(f*y*r-x*h*r+x*i*d-n*y*d-f*i*g+n*h*g)*T,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*g-n*a*g)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,v=s*f,x=s*h,y=o*f,g=o*h,u=a*h,_=l*c,p=l*f,M=l*h,P=i.x,C=i.y,T=i.z;return r[0]=(1-(y+u))*P,r[1]=(v+M)*P,r[2]=(x-p)*P,r[3]=0,r[4]=(v-M)*C,r[5]=(1-(d+u))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(x+p)*T,r[9]=(g-_)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,f=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=di){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let v,x;if(a===di)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ol)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=di){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,v=(i+r)*f;let x,y;if(a===di)x=(o+s)*h,y=-2*h;else if(a===Ol)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new V,In=new Mt,aS=new V(0,0,0),lS=new V(1,1,1),Ri=new V,Aa=new V,fn=new V,Cp=new Mt,Rp=new br;class ic{constructor(e=0,n=0,i=0,r=ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ic.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Pp=new V,Xr=new br,ri=new Mt,Ca=new V,no=new V,uS=new V,fS=new br,bp=new V(1,0,0),Lp=new V(0,1,0),Dp=new V(0,0,1),hS={type:"added"},dS={type:"removed"};class Wt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new V,n=new ic,i=new br,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ge}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,n){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ca.copy(e):Ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(no,Ca,this.up):ri.lookAt(Ca,no,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(ri),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new V(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new V,si=new V,tu=new V,oi=new V,Yr=new V,jr=new V,Np=new V,nu=new V,iu=new V,ru=new V;let Ra=!1;class zn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),si.subVectors(i,n),tu.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(si),l=Un.dot(tu),c=si.dot(si),f=si.dot(tu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,v=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-v-x,x,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ra=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),si.subVectors(e,n),Un.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ra=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),jr.subVectors(s,i),nu.subVectors(e,i);const l=Yr.dot(nu),c=jr.dot(nu);if(l<=0&&c<=0)return n.copy(i);iu.subVectors(e,r);const f=Yr.dot(iu),h=jr.dot(iu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Yr,o);ru.subVectors(e,s);const v=Yr.dot(ru),x=jr.dot(ru);if(x>=0&&v<=x)return n.copy(s);const y=v*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(jr,a);const g=f*x-v*h;if(g<=0&&h-f>=0&&v-x>=0)return Np.subVectors(s,r),a=(h-f)/(h-f+(v-x)),n.copy(r).addScaledVector(Np,a);const u=1/(g+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(Yr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Jy(e,1),n=It(n,0,1),i=It(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=su(o,s,e+1/3),this.g=su(o,s,e),this.b=su(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bt){const i=tv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return nt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(It(Ht.r*255,0,255))*65536+Math.round(It(Ht.g*255,0,255))*256+Math.round(It(Ht.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=bt){nt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Pa);const i=Xc(Pi.h,Pa.h,n),r=Xc(Pi.s,Pa.s,n),s=Xc(Pi.l,Pa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Qe;Qe.NAMES=tv;let pS=0;class ea extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=ws,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gf&&(i.blendSrc=this.blendSrc),this.blendDst!==vf&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class So extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new V,ba=new _e;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ba.fromBufferAttribute(this,n),ba.applyMatrix3(e),this.setXY(n,ba.x,ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),e}}class nv extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class iv extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zt extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mS=0;const Sn=new Mt,ou=new Wt,qr=new V,hn=new Qo,io=new Qo,Rt=new V;class Qn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?iv:nv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(hn.min,io.min),hn.expandByPoint(Rt),Rt.addVectors(hn.max,io.max),hn.expandByPoint(Rt)):(hn.expandByPoint(io.min),hn.expandByPoint(io.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Rt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Rt.add(qr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let A=0;A<a;A++)c[A]=new V,f[A]=new V;const h=new V,d=new V,v=new V,x=new _e,y=new _e,g=new _e,u=new V,_=new V;function p(A,Z,G){h.fromArray(r,A*3),d.fromArray(r,Z*3),v.fromArray(r,G*3),x.fromArray(o,A*2),y.fromArray(o,Z*2),g.fromArray(o,G*2),d.sub(h),v.sub(h),y.sub(x),g.sub(x);const he=1/(y.x*g.y-g.x*y.y);isFinite(he)&&(u.copy(d).multiplyScalar(g.y).addScaledVector(v,-y.y).multiplyScalar(he),_.copy(v).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(he),c[A].add(u),c[Z].add(u),c[G].add(u),f[A].add(_),f[Z].add(_),f[G].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,Z=M.length;A<Z;++A){const G=M[A],he=G.start,z=G.count;for(let $=he,K=he+z;$<K;$+=3)p(i[$+0],i[$+1],i[$+2])}const P=new V,C=new V,T=new V,H=new V;function E(A){T.fromArray(s,A*3),H.copy(T);const Z=c[A];P.copy(Z),P.sub(T.multiplyScalar(T.dot(Z))).normalize(),C.crossVectors(H,Z);const he=C.dot(f[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=he}for(let A=0,Z=M.length;A<Z;++A){const G=M[A],he=G.start,z=G.count;for(let $=he,K=he+z;$<K;$+=3)E(i[$+0]),E(i[$+1]),E(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,v=i.count;d<v;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let d=0,v=e.count;d<v;d+=3){const x=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,v=n.count;d<v;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let v=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*f;for(let u=0;u<f;u++)d[x++]=c[v++]}return new Jn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],v=e(d,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const v=c[h];f.push(v.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,v=h.length;d<v;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ip=new Mt,lr=new Q0,La=new wh,Up=new V,$r=new V,Kr=new V,Zr=new V,au=new V,Da=new V,Na=new _e,Ia=new _e,Ua=new _e,Op=new V,Fp=new V,kp=new V,Oa=new V,Fa=new V;class nn extends Wt{constructor(e=new Qn,n=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(au.fromBufferAttribute(h,e),o?Da.addScaledVector(au,f):Da.addScaledVector(au.sub(n),f))}n.add(Da)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(La.containsPoint(lr.origin)===!1&&(lr.intersectSphere(La,Up)===null||lr.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Ip),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const g=d[x],u=o[g.materialIndex],_=Math.max(g.start,v.start),p=Math.min(a.count,Math.min(g.start+g.count,v.start+v.count));for(let M=_,P=p;M<P;M+=3){const C=a.getX(M),T=a.getX(M+1),H=a.getX(M+2);r=ka(this,u,e,i,c,f,h,C,T,H),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let g=x,u=y;g<u;g+=3){const _=a.getX(g),p=a.getX(g+1),M=a.getX(g+2);r=ka(this,o,e,i,c,f,h,_,p,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const g=d[x],u=o[g.materialIndex],_=Math.max(g.start,v.start),p=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let M=_,P=p;M<P;M+=3){const C=M,T=M+1,H=M+2;r=ka(this,u,e,i,c,f,h,C,T,H),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let g=x,u=y;g<u;g+=3){const _=g,p=g+1,M=g+2;r=ka(this,o,e,i,c,f,h,_,p,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function gS(t,e,n,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;Fa.copy(a),Fa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fa);return c<n.near||c>n.far?null:{distance:c,point:Fa.clone(),object:t}}function ka(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,$r),t.getVertexPosition(l,Kr),t.getVertexPosition(c,Zr);const f=gS(t,e,n,i,$r,Kr,Zr,Oa);if(f){r&&(Na.fromBufferAttribute(r,a),Ia.fromBufferAttribute(r,l),Ua.fromBufferAttribute(r,c),f.uv=zn.getInterpolation(Oa,$r,Kr,Zr,Na,Ia,Ua,new _e)),s&&(Na.fromBufferAttribute(s,a),Ia.fromBufferAttribute(s,l),Ua.fromBufferAttribute(s,c),f.uv1=zn.getInterpolation(Oa,$r,Kr,Zr,Na,Ia,Ua,new _e),f.uv2=f.uv1),o&&(Op.fromBufferAttribute(o,a),Fp.fromBufferAttribute(o,l),kp.fromBufferAttribute(o,c),f.normal=zn.getInterpolation(Oa,$r,Kr,Zr,Op,Fp,kp,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};zn.getNormal($r,Kr,Zr,h.normal),f.face=h}return f}class ta extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,v=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(h,2));function x(y,g,u,_,p,M,P,C,T,H,E){const A=M/T,Z=P/H,G=M/2,he=P/2,z=C/2,$=T+1,K=H+1;let Q=0,I=0;const W=new V;for(let Y=0;Y<K;Y++){const fe=Y*Z-he;for(let pe=0;pe<$;pe++){const se=pe*A-G;W[y]=se*_,W[g]=fe*p,W[u]=z,c.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[u]=C>0?1:-1,f.push(W.x,W.y,W.z),h.push(pe/T),h.push(1-Y/H),Q+=1}}for(let Y=0;Y<H;Y++)for(let fe=0;fe<T;fe++){const pe=d+fe+$*Y,se=d+fe+$*(Y+1),U=d+(fe+1)+$*(Y+1),N=d+(fe+1)+$*Y;l.push(pe,se,N),l.push(se,U,N),I+=6}a.addGroup(v,I,E),v+=I,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function vS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rv(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const _S={clone:ks,merge:jt};var xS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xS,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=vS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ef*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,Qr=1;class SS extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Jr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Jr,Qr,e,n);s.layers=this.layers,this.add(s);const o=new wn(Jr,Qr,e,n);o.layers=this.layers,this.add(o);const a=new wn(Jr,Qr,e,n);a.layers=this.layers,this.add(a);const l=new wn(Jr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new wn(Jr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,v),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ov extends ln{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MS extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Er?bt:Cn),this.texture=new ov(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ta(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ji});s.uniforms.tEquirect.value=n;const o=new nn(r,s),a=n.minFilter;return n.minFilter===Vo&&(n.minFilter=Tn),new SS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const lu=new V,ES=new V,TS=new Ge;class Di{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(ES.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TS.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new wh,za=new V;class Ah{constructor(e=new Di,n=new Di,i=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],v=r[8],x=r[9],y=r[10],g=r[11],u=r[12],_=r[13],p=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,g-v,M-u).normalize(),i[1].setComponents(l+s,d+c,g+v,M+u).normalize(),i[2].setComponents(l+o,d+f,g+x,M+_).normalize(),i[3].setComponents(l-o,d-f,g-x,M-_).normalize(),i[4].setComponents(l-a,d-h,g-y,M-p).normalize(),n===di)i[5].setComponents(l+a,d+h,g+y,M+p).normalize();else if(n===Ol)i[5].setComponents(a,h,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function av(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,v=h.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,f,h){const d=f.array,v=f._updateRange,x=f.updateRanges;if(t.bindBuffer(h,c),v.count===-1&&x.length===0&&t.bufferSubData(h,0,d),x.length!==0){for(let y=0,g=x.length;y<g;y++){const u=x[y];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(h,v.offset*d.BYTES_PER_ELEMENT,d,v.offset,v.count):t.bufferSubData(h,v.offset*d.BYTES_PER_ELEMENT,d.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class Wo extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,v=[],x=[],y=[],g=[];for(let u=0;u<f;u++){const _=u*d-o;for(let p=0;p<c;p++){const M=p*h-s;x.push(M,-_,0),y.push(0,0,1),g.push(p/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const p=_+c*u,M=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;v.push(p,M,C),v.push(M,P,C)}this.setIndex(v),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var AS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CS=`#ifdef USE_ALPHAHASH
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
#endif`,RS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,LS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
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
#endif`,NS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IS=`#ifdef USE_BATCHING
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
#endif`,US=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,OS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zS=`#ifdef USE_IRIDESCENCE
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
#endif`,BS=`#ifdef USE_BUMPMAP
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$S=`#define PI 3.141592653589793
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
} // validated`,KS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZS=`vec3 transformedNormal = objectNormal;
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
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`
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
}`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,pM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,wM=`struct PhysicalMaterial {
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
}`,AM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
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
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uE=`float getShadowMask() {
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
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pE=`#ifdef USE_SKINNING
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
#endif`,mE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AE=`uniform sampler2D t2D;
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
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
}`,DE=`#if DEPTH_PACKING == 3200
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
}`,NE=`#define DISTANCE
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
}`,IE=`#define DISTANCE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
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
}`,kE=`uniform vec3 diffuse;
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
}`,zE=`#include <common>
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
}`,BE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,VE=`#define LAMBERT
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
}`,GE=`#define MATCAP
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
}`,WE=`#define MATCAP
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
}`,XE=`#define NORMAL
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
}`,YE=`#define NORMAL
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
}`,jE=`#define PHONG
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
}`,qE=`#define PHONG
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
}`,$E=`#define STANDARD
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
}`,KE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,JE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 color;
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
}`,iT=`uniform float rotation;
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
}`,rT=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:AS,alphahash_pars_fragment:CS,alphamap_fragment:RS,alphamap_pars_fragment:PS,alphatest_fragment:bS,alphatest_pars_fragment:LS,aomap_fragment:DS,aomap_pars_fragment:NS,batching_pars_vertex:IS,batching_vertex:US,begin_vertex:OS,beginnormal_vertex:FS,bsdfs:kS,iridescence_fragment:zS,bumpmap_pars_fragment:BS,clipping_planes_fragment:HS,clipping_planes_pars_fragment:VS,clipping_planes_pars_vertex:GS,clipping_planes_vertex:WS,color_fragment:XS,color_pars_fragment:YS,color_pars_vertex:jS,color_vertex:qS,common:$S,cube_uv_reflection_fragment:KS,defaultnormal_vertex:ZS,displacementmap_pars_vertex:JS,displacementmap_vertex:QS,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:sM,envmap_pars_fragment:oM,envmap_pars_vertex:aM,envmap_physical_pars_fragment:xM,envmap_vertex:lM,fog_vertex:cM,fog_pars_vertex:uM,fog_fragment:fM,fog_pars_fragment:hM,gradientmap_pars_fragment:dM,lightmap_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:vM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:SM,lights_phong_fragment:MM,lights_phong_pars_fragment:EM,lights_physical_fragment:TM,lights_physical_pars_fragment:wM,lights_fragment_begin:AM,lights_fragment_maps:CM,lights_fragment_end:RM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:DM,map_fragment:NM,map_pars_fragment:IM,map_particle_fragment:UM,map_particle_pars_fragment:OM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:kM,morphcolor_vertex:zM,morphnormal_vertex:BM,morphtarget_pars_vertex:HM,morphtarget_vertex:VM,normal_fragment_begin:GM,normal_fragment_maps:WM,normal_pars_fragment:XM,normal_pars_vertex:YM,normal_vertex:jM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:JM,opaque_fragment:QM,packing:eE,premultiplied_alpha_fragment:tE,project_vertex:nE,dithering_fragment:iE,dithering_pars_fragment:rE,roughnessmap_fragment:sE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:lE,shadowmap_vertex:cE,shadowmask_pars_fragment:uE,skinbase_vertex:fE,skinning_pars_vertex:hE,skinning_vertex:dE,skinnormal_vertex:pE,specularmap_fragment:mE,specularmap_pars_fragment:gE,tonemapping_fragment:vE,tonemapping_pars_fragment:_E,transmission_fragment:xE,transmission_pars_fragment:yE,uv_pars_fragment:SE,uv_pars_vertex:ME,uv_vertex:EE,worldpos_vertex:TE,background_vert:wE,background_frag:AE,backgroundCube_vert:CE,backgroundCube_frag:RE,cube_vert:PE,cube_frag:bE,depth_vert:LE,depth_frag:DE,distanceRGBA_vert:NE,distanceRGBA_frag:IE,equirect_vert:UE,equirect_frag:OE,linedashed_vert:FE,linedashed_frag:kE,meshbasic_vert:zE,meshbasic_frag:BE,meshlambert_vert:HE,meshlambert_frag:VE,meshmatcap_vert:GE,meshmatcap_frag:WE,meshnormal_vert:XE,meshnormal_frag:YE,meshphong_vert:jE,meshphong_frag:qE,meshphysical_vert:$E,meshphysical_frag:KE,meshtoon_vert:ZE,meshtoon_frag:JE,points_vert:QE,points_frag:eT,shadow_vert:tT,shadow_frag:nT,sprite_vert:iT,sprite_frag:rT},Re={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qn={basic:{uniforms:jt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:jt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:jt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:jt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:jt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:jt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:jt([Re.points,Re.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:jt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:jt([Re.common,Re.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:jt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:jt([Re.sprite,Re.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:jt([Re.common,Re.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:jt([Re.lights,Re.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};qn.physical={uniforms:jt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ba={r:0,b:0,g:0};function sT(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,f,h=null,d=0,v=null;function x(g,u){let _=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===tc)?(f===void 0&&(f=new nn(new ta(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ks(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=p,f.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=nt.getTransfer(p.colorSpace)!==st,(h!==p||d!==p.version||v!==t.toneMapping)&&(f.material.needsUpdate=!0,h=p,d=p.version,v=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new nn(new Wo(2,2),new yi({name:"BackgroundMaterial",uniforms:ks(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(p.colorSpace)!==st,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||d!==p.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,h=p,d=p.version,v=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,u){g.getRGB(Ba,rv(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(g,u=1){a.set(g),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:x}}function oT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,f=!1;function h(z,$,K,Q,I){let W=!1;if(o){const Y=y(Q,K,$);c!==Y&&(c=Y,v(c.object)),W=u(z,Q,K,I),W&&_(z,Q,K,I)}else{const Y=$.wireframe===!0;(c.geometry!==Q.id||c.program!==K.id||c.wireframe!==Y)&&(c.geometry=Q.id,c.program=K.id,c.wireframe=Y,W=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(W||f)&&(f=!1,H(z,$,K,Q),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function y(z,$,K){const Q=K.wireframe===!0;let I=a[z.id];I===void 0&&(I={},a[z.id]=I);let W=I[$.id];W===void 0&&(W={},I[$.id]=W);let Y=W[Q];return Y===void 0&&(Y=g(d()),W[Q]=Y),Y}function g(z){const $=[],K=[],Q=[];for(let I=0;I<r;I++)$[I]=0,K[I]=0,Q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:K,attributeDivisors:Q,object:z,attributes:{},index:null}}function u(z,$,K,Q){const I=c.attributes,W=$.attributes;let Y=0;const fe=K.getAttributes();for(const pe in fe)if(fe[pe].location>=0){const U=I[pe];let N=W[pe];if(N===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),U===void 0||U.attribute!==N||N&&U.data!==N.data)return!0;Y++}return c.attributesNum!==Y||c.index!==Q}function _(z,$,K,Q){const I={},W=$.attributes;let Y=0;const fe=K.getAttributes();for(const pe in fe)if(fe[pe].location>=0){let U=W[pe];U===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(U=z.instanceColor));const N={};N.attribute=U,U&&U.data&&(N.data=U.data),I[pe]=N,Y++}c.attributes=I,c.attributesNum=Y,c.index=Q}function p(){const z=c.newAttributes;for(let $=0,K=z.length;$<K;$++)z[$]=0}function M(z){P(z,0)}function P(z,$){const K=c.newAttributes,Q=c.enabledAttributes,I=c.attributeDivisors;K[z]=1,Q[z]===0&&(t.enableVertexAttribArray(z),Q[z]=1),I[z]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),I[z]=$)}function C(){const z=c.newAttributes,$=c.enabledAttributes;for(let K=0,Q=$.length;K<Q;K++)$[K]!==z[K]&&(t.disableVertexAttribArray(K),$[K]=0)}function T(z,$,K,Q,I,W,Y){Y===!0?t.vertexAttribIPointer(z,$,K,I,W):t.vertexAttribPointer(z,$,K,Q,I,W)}function H(z,$,K,Q){if(i.isWebGL2===!1&&(z.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const I=Q.attributes,W=K.getAttributes(),Y=$.defaultAttributeValues;for(const fe in W){const pe=W[fe];if(pe.location>=0){let se=I[fe];if(se===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),se!==void 0){const U=se.normalized,N=se.itemSize,R=n.get(se);if(R===void 0)continue;const w=R.buffer,te=R.type,ue=R.bytesPerElement,X=i.isWebGL2===!0&&(te===t.INT||te===t.UNSIGNED_INT||se.gpuType===z0);if(se.isInterleavedBufferAttribute){const de=se.data,k=de.stride,Ce=se.offset;if(de.isInstancedInterleavedBuffer){for(let J=0;J<pe.locationSize;J++)P(pe.location+J,de.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let J=0;J<pe.locationSize;J++)M(pe.location+J);t.bindBuffer(t.ARRAY_BUFFER,w);for(let J=0;J<pe.locationSize;J++)T(pe.location+J,N/pe.locationSize,te,U,k*ue,(Ce+N/pe.locationSize*J)*ue,X)}else{if(se.isInstancedBufferAttribute){for(let de=0;de<pe.locationSize;de++)P(pe.location+de,se.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let de=0;de<pe.locationSize;de++)M(pe.location+de);t.bindBuffer(t.ARRAY_BUFFER,w);for(let de=0;de<pe.locationSize;de++)T(pe.location+de,N/pe.locationSize,te,U,N*ue,N/pe.locationSize*de*ue,X)}}else if(Y!==void 0){const U=Y[fe];if(U!==void 0)switch(U.length){case 2:t.vertexAttrib2fv(pe.location,U);break;case 3:t.vertexAttrib3fv(pe.location,U);break;case 4:t.vertexAttrib4fv(pe.location,U);break;default:t.vertexAttrib1fv(pe.location,U)}}}}C()}function E(){G();for(const z in a){const $=a[z];for(const K in $){const Q=$[K];for(const I in Q)x(Q[I].object),delete Q[I];delete $[K]}delete a[z]}}function A(z){if(a[z.id]===void 0)return;const $=a[z.id];for(const K in $){const Q=$[K];for(const I in Q)x(Q[I].object),delete Q[I];delete $[K]}delete a[z.id]}function Z(z){for(const $ in a){const K=a[$];if(K[z.id]===void 0)continue;const Q=K[z.id];for(const I in Q)x(Q[I].object),delete Q[I];delete K[z.id]}}function G(){he(),f=!0,c!==l&&(c=l,v(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:he,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:Z,initAttributes:p,enableAttribute:M,disableUnusedAttributes:C}}function aT(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let v,x;if(r)v=t,x="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<d;x++)this.render(f[x],h[x]);else{v.multiDrawArraysWEBGL(s,f,0,h,0,d);let x=0;for(let y=0;y<d;y++)x+=h[y];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function lT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=d>0,M=o||e.has("OES_texture_float"),P=p&&M,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:p,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:C}}function cT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Di,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const v=h.length!==0||d||i!==0||r;return r=d,i=h.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,v){const x=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const _=s?0:i,p=_*4;let M=u.clippingState||null;l.value=M,M=f(x,d,p,v);for(let P=0;P!==p;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,v,x){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const u=v+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let p=0,M=v;p!==y;++p,M+=4)o.copy(h[p]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function uT(t){let e=new WeakMap;function n(o,a){return a===_f?o.mapping=Us:a===xf&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_f||a===xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new MS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lv extends sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ms=4,zp=[.125,.215,.35,.446,.526,.582],mr=20,cu=new lv,Bp=new Qe;let uu=null,fu=0,hu=0;const dr=(1+Math.sqrt(5))/2,es=1/dr,Hp=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,dr,es),new V(0,dr,-es),new V(es,0,dr),new V(-es,0,dr),new V(dr,es,0),new V(-dr,es,0)];class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,fu,hu),e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Go,format:Hn,colorSpace:xi,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(s)),this._blurMaterial=hT(s,e,n)}return r}_compileMaterial(e){const n=new nn(this._lodPlanes[0],e);this._renderer.compile(n,cu)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Bp),f.toneMapping=qi,f.autoClear=!1;const v=new So({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new nn(new ta,v);let y=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,y=!0):(v.color.copy(Bp),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;Ha(r,_*p,u>2?p:0,p,p),f.setRenderTarget(r),y&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hp[(r-1)%Hp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new nn(this._lodPlanes[r],c),d=c.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*mr-1),y=s/x,g=isFinite(s)?1+Math.floor(f*y):mr;g>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mr}`);const u=[];let _=0;for(let T=0;T<mr;++T){const H=T/y,E=Math.exp(-H*H/2);u.push(E),T===0?_+=E:T<g&&(_+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:p}=this;d.dTheta.value=x,d.mipInt.value=p-i;const M=this._sizeLods[r],P=3*M*(r>p-ms?r-p+ms:0),C=4*(this._cubeSize-M);Ha(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(h,cu)}}function fT(t){const e=[],n=[],i=[];let r=t;const s=t-ms+1+zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ms?l=zp[o-t+ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,x=6,y=3,g=2,u=1,_=new Float32Array(y*x*v),p=new Float32Array(g*x*v),M=new Float32Array(u*x*v);for(let C=0;C<v;C++){const T=C%3*2/3-1,H=C>2?0:-1,E=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];_.set(E,y*x*C),p.set(d,g*x*C);const A=[C,C,C,C,C,C];M.set(A,u*x*C)}const P=new Qn;P.setAttribute("position",new Jn(_,y)),P.setAttribute("uv",new Jn(p,g)),P.setAttribute("faceIndex",new Jn(M,u)),e.push(P),r>ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hT(t,e,n){const i=new Float32Array(mr),r=new V(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Wp(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Xp(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function dT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_f||l===xf,f=l===Us||l===Os;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Vp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Vp(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const y=d.morphAttributes[x];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}d.removeEventListener("dispose",o),delete r[d.id];const v=s.get(d);v&&(e.remove(v),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const v=h.morphAttributes;for(const x in v){const y=v[x];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(h){const d=[],v=h.index,x=h.attributes.position;let y=0;if(v!==null){const _=v.array;y=v.version;for(let p=0,M=_.length;p<M;p+=3){const P=_[p+0],C=_[p+1],T=_[p+2];d.push(P,C,C,T,T,P)}}else if(x!==void 0){const _=x.array;y=x.version;for(let p=0,M=_.length/3-1;p<M;p+=3){const P=p+0,C=p+1,T=p+2;d.push(P,C,C,T,T,P)}}else return;const g=new($0(d)?iv:nv)(d,1);g.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const v=h.index;v!==null&&d.version<v.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function gT(t,e,n,i){const r=i.isWebGL2;let s;function o(v){s=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function f(v,x){t.drawElements(s,x,a,v*l),n.update(x,s,1)}function h(v,x,y){if(y===0)return;let g,u;if(r)g=t,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](s,x,a,v*l,y),n.update(x,s,y)}function d(v,x,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<y;u++)this.render(v[u]/l,x[u]);else{g.multiDrawElementsWEBGL(s,x,0,a,v,0,y);let u=0;for(let _=0;_<y;_++)u+=x[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e){return t[0]-e[0]}function xT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function yT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0;let g=s.get(f);if(g===void 0||g.count!==y){let $=function(){he.dispose(),s.delete(f),f.removeEventListener("dispose",$)};var v=$;g!==void 0&&g.texture.dispose();const p=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],H=f.morphAttributes.color||[];let E=0;p===!0&&(E=1),M===!0&&(E=2),P===!0&&(E=3);let A=f.attributes.position.count*E,Z=1;A>e.maxTextureSize&&(Z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*Z*4*y),he=new J0(G,A,Z,y);he.type=ki,he.needsUpdate=!0;const z=E*4;for(let K=0;K<y;K++){const Q=C[K],I=T[K],W=H[K],Y=A*Z*4*K;for(let fe=0;fe<Q.count;fe++){const pe=fe*z;p===!0&&(o.fromBufferAttribute(Q,fe),G[Y+pe+0]=o.x,G[Y+pe+1]=o.y,G[Y+pe+2]=o.z,G[Y+pe+3]=0),M===!0&&(o.fromBufferAttribute(I,fe),G[Y+pe+4]=o.x,G[Y+pe+5]=o.y,G[Y+pe+6]=o.z,G[Y+pe+7]=0),P===!0&&(o.fromBufferAttribute(W,fe),G[Y+pe+8]=o.x,G[Y+pe+9]=o.y,G[Y+pe+10]=o.z,G[Y+pe+11]=W.itemSize===4?o.w:1)}}g={count:y,texture:he,size:new _e(A,Z)},s.set(f,g),f.addEventListener("dispose",$)}let u=0;for(let p=0;p<d.length;p++)u+=d[p];const _=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const x=d===void 0?0:d.length;let y=i[f.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];i[f.id]=y}for(let M=0;M<x;M++){const P=y[M];P[0]=M,P[1]=d[M]}y.sort(xT);for(let M=0;M<8;M++)M<x&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(_T);const g=f.morphAttributes.position,u=f.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const P=a[M],C=P[0],T=P[1];C!==Number.MAX_SAFE_INTEGER&&T?(g&&f.getAttribute("morphTarget"+M)!==g[C]&&f.setAttribute("morphTarget"+M,g[C]),u&&f.getAttribute("morphNormal"+M)!==u[C]&&f.setAttribute("morphNormal"+M,u[C]),r[M]=T,_+=T):(g&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const p=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ST(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class cv extends ln{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Mr,f!==Mr&&f!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Mr&&(i=Fi),i===void 0&&f===Fs&&(i=Sr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const uv=new ln,fv=new cv(1,1);fv.compareFunction=q0;const hv=new J0,dv=new sS,pv=new ov,Yp=[],jp=[],qp=new Float32Array(16),$p=new Float32Array(9),Kp=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Yp[r];if(s===void 0&&(s=new Float32Array(r),Yp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;Kp.set(i),t.uniformMatrix2fv(this.addr,!1,Kp),At(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;$p.set(i),t.uniformMatrix3fv(this.addr,!1,$p),At(n,i)}}function RT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;qp.set(i),t.uniformMatrix4fv(this.addr,!1,qp),At(n,i)}}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?fv:uv;n.setTexture2D(e||s,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dv,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pv,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hv,r)}function HT(t){switch(t){case 5126:return MT;case 35664:return ET;case 35665:return TT;case 35666:return wT;case 35674:return AT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return bT;case 35668:case 35672:return LT;case 35669:case 35673:return DT;case 5125:return NT;case 36294:return IT;case 36295:return UT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return BT}}function VT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function WT(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function XT(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function YT(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jT(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qT(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $T(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function JT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function e1(t,e){t.uniform2uiv(this.addr,e)}function t1(t,e){t.uniform3uiv(this.addr,e)}function n1(t,e){t.uniform4uiv(this.addr,e)}function i1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||uv,s[o])}function r1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dv,s[o])}function s1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||pv,s[o])}function o1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hv,s[o])}function a1(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return YT;case 35675:return jT;case 35676:return qT;case 5124:case 35670:return $T;case 35667:case 35671:return KT;case 35668:case 35672:return ZT;case 35669:case 35673:return JT;case 5125:return QT;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}class l1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HT(n.type)}}class c1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a1(n.type)}}class u1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Zp(t,e){t.seq.push(e),t.map[e.id]=e}function f1(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),o=du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zp(n,c===void 0?new l1(a,t,e):new c1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new u1(a),Zp(n,h)),n=h}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);f1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const h1=37297;let d1=0;function p1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function m1(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Ul&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Ul&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case nc:return[i,"LinearTransferOETF"];case bt:case Th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+p1(t.getShaderSource(e),o)}else return r}function g1(t,e){const n=m1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function v1(t,e){let n;switch(e){case Cy:n="Linear";break;case Ry:n="Reinhard";break;case Py:n="OptimizedCineon";break;case by:n="ACESFilmic";break;case Dy:n="AgX";break;case Ly:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function x1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gs).join(`
`)}function y1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function S1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function gs(t){return t!==""}function em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(t){return t.replace(M1,T1)}const E1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T1(t,e){let n=Ye[e];if(n===void 0){const i=E1.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wf(n)}const w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(t){return t.replace(w1,A1)}function A1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function im(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ty?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function R1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Os:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function b1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F0:e="ENVMAP_BLENDING_MULTIPLY";break;case wy:e="ENVMAP_BLENDING_MIX";break;case Ay:e="ENVMAP_BLENDING_ADD";break}return e}function L1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function D1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=C1(n),c=R1(n),f=P1(n),h=b1(n),d=L1(n),v=n.isWebGL2?"":_1(n),x=x1(n),y=y1(s),g=r.createProgram();let u,_,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gs).join(`
`),u.length>0&&(u+=`
`),_=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(gs).join(`
`),_.length>0&&(_+=`
`)):(u=[im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),_=[v,im(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==qi?v1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,g1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),o=wf(o),o=em(o,n),o=tm(o,n),a=wf(a),a=em(a,n),a=tm(a,n),o=nm(o),a=nm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=p+u+o,P=p+_+a,C=Jp(r,r.VERTEX_SHADER,M),T=Jp(r,r.FRAGMENT_SHADER,P);r.attachShader(g,C),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function H(G){if(t.debug.checkShaderErrors){const he=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(T).trim();let K=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,C,T);else{const I=Qp(r,C,"vertex"),W=Qp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+I+`
`+W)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(z===""||$==="")&&(Q=!1);Q&&(G.diagnostics={runnable:K,programLog:he,vertexShader:{log:z,prefix:u},fragmentShader:{log:$,prefix:_}})}r.deleteShader(C),r.deleteShader(T),E=new ol(r,g),A=S1(r,g)}let E;this.getUniforms=function(){return E===void 0&&H(this),E};let A;this.getAttributes=function(){return A===void 0&&H(this),A};let Z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=r.getProgramParameter(g,h1)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let N1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new U1(e),n.set(e,i)),i}}class U1{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}}function O1(t,e,n,i,r,s,o){const a=new ev,l=new I1,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,A,Z,G,he){const z=G.fog,$=he.geometry,K=E.isMeshStandardMaterial?G.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||K),I=Q&&Q.mapping===tc?Q.image.height:null,W=x[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const Y=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fe=Y!==void 0?Y.length:0;let pe=0;$.morphAttributes.position!==void 0&&(pe=1),$.morphAttributes.normal!==void 0&&(pe=2),$.morphAttributes.color!==void 0&&(pe=3);let se,U,N,R;if(W){const ct=qn[W];se=ct.vertexShader,U=ct.fragmentShader}else se=E.vertexShader,U=E.fragmentShader,l.update(E),N=l.getVertexShaderID(E),R=l.getFragmentShaderID(E);const w=t.getRenderTarget(),te=he.isInstancedMesh===!0,ue=he.isBatchedMesh===!0,X=!!E.map,de=!!E.matcap,k=!!Q,Ce=!!E.aoMap,J=!!E.lightMap,le=!!E.bumpMap,B=!!E.normalMap,j=!!E.displacementMap,L=!!E.emissiveMap,m=!!E.metalnessMap,S=!!E.roughnessMap,O=E.anisotropy>0,ee=E.clearcoat>0,ne=E.iridescence>0,ie=E.sheen>0,xe=E.transmission>0,ge=O&&!!E.anisotropyMap,Me=ee&&!!E.clearcoatMap,Pe=ee&&!!E.clearcoatNormalMap,Ne=ee&&!!E.clearcoatRoughnessMap,ce=ne&&!!E.iridescenceMap,Be=ne&&!!E.iridescenceThicknessMap,Ee=ie&&!!E.sheenColorMap,De=ie&&!!E.sheenRoughnessMap,Te=!!E.specularMap,Ae=!!E.specularColorMap,D=!!E.specularIntensityMap,me=xe&&!!E.transmissionMap,Le=xe&&!!E.thicknessMap,be=!!E.gradientMap,ve=!!E.alphaMap,F=E.alphaTest>0,Se=!!E.alphaHash,we=!!E.extensions,ke=!!$.attributes.uv1,Oe=!!$.attributes.uv2,je=!!$.attributes.uv3;let $e=qi;return E.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&($e=t.toneMapping),{isWebGL2:f,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:U,defines:E.defines,customVertexShaderID:N,customFragmentShaderID:R,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:ue,instancing:te,instancingColor:te&&he.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:w===null?t.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xi,map:X,matcap:de,envMap:k,envMapMode:k&&Q.mapping,envMapCubeUVHeight:I,aoMap:Ce,lightMap:J,bumpMap:le,normalMap:B,displacementMap:d&&j,emissiveMap:L,normalMapObjectSpace:B&&E.normalMapType===Wy,normalMapTangentSpace:B&&E.normalMapType===j0,metalnessMap:m,roughnessMap:S,anisotropy:O,anisotropyMap:ge,clearcoat:ee,clearcoatMap:Me,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ne,iridescence:ne,iridescenceMap:ce,iridescenceThicknessMap:Be,sheen:ie,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Te,specularColorMap:Ae,specularIntensityMap:D,transmission:xe,transmissionMap:me,thicknessMap:Le,gradientMap:be,opaque:E.transparent===!1&&E.blending===ws,alphaMap:ve,alphaTest:F,alphaHash:Se,combine:E.combine,mapUv:X&&y(E.map.channel),aoMapUv:Ce&&y(E.aoMap.channel),lightMapUv:J&&y(E.lightMap.channel),bumpMapUv:le&&y(E.bumpMap.channel),normalMapUv:B&&y(E.normalMap.channel),displacementMapUv:j&&y(E.displacementMap.channel),emissiveMapUv:L&&y(E.emissiveMap.channel),metalnessMapUv:m&&y(E.metalnessMap.channel),roughnessMapUv:S&&y(E.roughnessMap.channel),anisotropyMapUv:ge&&y(E.anisotropyMap.channel),clearcoatMapUv:Me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(E.sheenRoughnessMap.channel),specularMapUv:Te&&y(E.specularMap.channel),specularColorMapUv:Ae&&y(E.specularColorMap.channel),specularIntensityMapUv:D&&y(E.specularIntensityMap.channel),transmissionMapUv:me&&y(E.transmissionMap.channel),thicknessMapUv:Le&&y(E.thicknessMap.channel),alphaMapUv:ve&&y(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(B||O),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Oe,vertexUv3s:je,pointsUvs:he.isPoints===!0&&!!$.attributes.uv&&(X||ve),fog:!!z,useFog:E.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:he.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:pe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:X&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===Gt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:we&&E.extensions.derivatives===!0,extensionFragDepth:we&&E.extensions.fragDepth===!0,extensionDrawBuffers:we&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)A.push(Z),A.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(_(A,E),p(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function _(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function p(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){const A=x[E.type];let Z;if(A){const G=qn[A];Z=_S.clone(G.uniforms)}else Z=E.uniforms;return Z}function P(E,A){let Z;for(let G=0,he=c.length;G<he;G++){const z=c[G];if(z.cacheKey===A){Z=z,++Z.usedTimes;break}}return Z===void 0&&(Z=new D1(t,A,E,s),c.push(Z)),Z}function C(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function H(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:H}}function F1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function k1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,v,x,y,g){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:v,groupOrder:x,renderOrder:h.renderOrder,z:y,group:g},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=v,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=y,u.group=g),e++,u}function a(h,d,v,x,y,g){const u=o(h,d,v,x,y,g);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(h,d,v,x,y,g){const u=o(h,d,v,x,y,g);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||k1),i.length>1&&i.sort(d||rm),r.length>1&&r.sort(d||rm)}function f(){for(let h=e,d=t.length;h<d;h++){const v=t[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function z1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new sm,t.set(i,[o])):r>=s.length?(o=new sm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function B1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Qe};break;case"SpotLight":n={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function H1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let V1=0;function G1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function W1(t,e){const n=new B1,i=H1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const s=new V,o=new Mt,a=new Mt;function l(f,h){let d=0,v=0,x=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let y=0,g=0,u=0,_=0,p=0,M=0,P=0,C=0,T=0,H=0,E=0;f.sort(G1);const A=h===!0?Math.PI:1;for(let G=0,he=f.length;G<he;G++){const z=f[G],$=z.color,K=z.intensity,Q=z.distance,I=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=$.r*K*A,v+=$.g*K*A,x+=$.b*K*A;else if(z.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(z.sh.coefficients[W],K);E++}else if(z.isDirectionalLight){const W=n.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const Y=z.shadow,fe=i.get(z);fe.shadowBias=Y.bias,fe.shadowNormalBias=Y.normalBias,fe.shadowRadius=Y.radius,fe.shadowMapSize=Y.mapSize,r.directionalShadow[y]=fe,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=z.shadow.matrix,M++}r.directional[y]=W,y++}else if(z.isSpotLight){const W=n.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy($).multiplyScalar(K*A),W.distance=Q,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,r.spot[u]=W;const Y=z.shadow;if(z.map&&(r.spotLightMap[T]=z.map,T++,Y.updateMatrices(z),z.castShadow&&H++),r.spotLightMatrix[u]=Y.matrix,z.castShadow){const fe=i.get(z);fe.shadowBias=Y.bias,fe.shadowNormalBias=Y.normalBias,fe.shadowRadius=Y.radius,fe.shadowMapSize=Y.mapSize,r.spotShadow[u]=fe,r.spotShadowMap[u]=I,C++}u++}else if(z.isRectAreaLight){const W=n.get(z);W.color.copy($).multiplyScalar(K),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=W,_++}else if(z.isPointLight){const W=n.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*A),W.distance=z.distance,W.decay=z.decay,z.castShadow){const Y=z.shadow,fe=i.get(z);fe.shadowBias=Y.bias,fe.shadowNormalBias=Y.normalBias,fe.shadowRadius=Y.radius,fe.shadowMapSize=Y.mapSize,fe.shadowCameraNear=Y.camera.near,fe.shadowCameraFar=Y.camera.far,r.pointShadow[g]=fe,r.pointShadowMap[g]=I,r.pointShadowMatrix[g]=z.shadow.matrix,P++}r.point[g]=W,g++}else if(z.isHemisphereLight){const W=n.get(z);W.skyColor.copy(z.color).multiplyScalar(K*A),W.groundColor.copy(z.groundColor).multiplyScalar(K*A),r.hemi[p]=W,p++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==y||Z.pointLength!==g||Z.spotLength!==u||Z.rectAreaLength!==_||Z.hemiLength!==p||Z.numDirectionalShadows!==M||Z.numPointShadows!==P||Z.numSpotShadows!==C||Z.numSpotMaps!==T||Z.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=_,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+T-H,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=E,Z.directionalLength=y,Z.pointLength=g,Z.spotLength=u,Z.rectAreaLength=_,Z.hemiLength=p,Z.numDirectionalShadows=M,Z.numPointShadows=P,Z.numSpotShadows=C,Z.numSpotMaps=T,Z.numLightProbes=E,r.version=V1++)}function c(f,h){let d=0,v=0,x=0,y=0,g=0;const u=h.matrixWorldInverse;for(let _=0,p=f.length;_<p;_++){const M=f[_];if(M.isDirectionalLight){const P=r.directional[d];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),d++}else if(M.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),x++}else if(M.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(u),v++}else if(M.isHemisphereLight){const P=r.hemi[g];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:r}}function om(t,e){const n=new W1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function X1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new om(t,e),n.set(s,[l])):o>=a.length?(l=new om(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Y1 extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j1 extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function K1(t,e,n){let i=new Ah;const r=new _e,s=new _e,o=new Lt,a=new Y1({depthPacking:Gy}),l=new j1,c={},f=n.maxTextureSize,h={[Ji]:Gt,[Gt]:Ji,[An]:An},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:q1,fragmentShader:$1}),v=d.clone();v.defines.HORIZONTAL_PASS=1;const x=new Qn;x.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let u=this.type;this.render=function(C,T,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),A=t.getActiveCubeFace(),Z=t.getActiveMipmapLevel(),G=t.state;G.setBlending(ji),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const he=u!==li&&this.type===li,z=u===li&&this.type!==li;for(let $=0,K=C.length;$<K;$++){const Q=C[$],I=Q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();if(r.multiply(W),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null||he===!0||z===!0){const fe=this.type!==li?{minFilter:$t,magFilter:$t}:{};I.map!==null&&I.map.dispose(),I.map=new Pr(r.x,r.y,fe),I.map.texture.name=Q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Y=I.getViewportCount();for(let fe=0;fe<Y;fe++){const pe=I.getViewport(fe);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),G.viewport(o),I.updateMatrices(Q,fe),i=I.getFrustum(),M(T,H,I.camera,Q,this.type)}I.isPointLightShadow!==!0&&this.type===li&&_(I,H),I.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,A,Z)};function _(C,T){const H=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,H,d,y,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,H,v,y,null)}function p(C,T,H,E){let A=null;const Z=H.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Z!==void 0)A=Z;else if(A=H.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=A.uuid,he=T.uuid;let z=c[G];z===void 0&&(z={},c[G]=z);let $=z[he];$===void 0&&($=A.clone(),z[he]=$,T.addEventListener("dispose",P)),A=$}if(A.visible=T.visible,A.wireframe=T.wireframe,E===li?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:h[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=t.properties.get(A);G.light=H}return A}function M(C,T,H,E,A){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld);const he=e.update(C),z=C.material;if(Array.isArray(z)){const $=he.groups;for(let K=0,Q=$.length;K<Q;K++){const I=$[K],W=z[I.materialIndex];if(W&&W.visible){const Y=p(C,W,E,A);C.onBeforeShadow(t,C,T,H,he,Y,I),t.renderBufferDirect(H,null,he,Y,C,I),C.onAfterShadow(t,C,T,H,he,Y,I)}}}else if(z.visible){const $=p(C,z,E,A);C.onBeforeShadow(t,C,T,H,he,$,null),t.renderBufferDirect(H,null,he,$,C,null),C.onAfterShadow(t,C,T,H,he,$,null)}}const G=C.children;for(let he=0,z=G.length;he<z;he++)M(G[he],T,H,E,A)}function P(C){C.target.removeEventListener("dispose",P);for(const H in c){const E=c[H],A=C.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Z1(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const Se=new Lt;let we=null;const ke=new Lt(0,0,0,0);return{setMask:function(Oe){we!==Oe&&!F&&(t.colorMask(Oe,Oe,Oe,Oe),we=Oe)},setLocked:function(Oe){F=Oe},setClear:function(Oe,je,$e,at,ct){ct===!0&&(Oe*=at,je*=at,$e*=at),Se.set(Oe,je,$e,at),ke.equals(Se)===!1&&(t.clearColor(Oe,je,$e,at),ke.copy(Se))},reset:function(){F=!1,we=null,ke.set(-1,0,0,0)}}}function s(){let F=!1,Se=null,we=null,ke=null;return{setTest:function(Oe){Oe?ue(t.DEPTH_TEST):X(t.DEPTH_TEST)},setMask:function(Oe){Se!==Oe&&!F&&(t.depthMask(Oe),Se=Oe)},setFunc:function(Oe){if(we!==Oe){switch(Oe){case _y:t.depthFunc(t.NEVER);break;case xy:t.depthFunc(t.ALWAYS);break;case yy:t.depthFunc(t.LESS);break;case Dl:t.depthFunc(t.LEQUAL);break;case Sy:t.depthFunc(t.EQUAL);break;case My:t.depthFunc(t.GEQUAL);break;case Ey:t.depthFunc(t.GREATER);break;case Ty:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}we=Oe}},setLocked:function(Oe){F=Oe},setClear:function(Oe){ke!==Oe&&(t.clearDepth(Oe),ke=Oe)},reset:function(){F=!1,Se=null,we=null,ke=null}}}function o(){let F=!1,Se=null,we=null,ke=null,Oe=null,je=null,$e=null,at=null,ct=null;return{setTest:function(Je){F||(Je?ue(t.STENCIL_TEST):X(t.STENCIL_TEST))},setMask:function(Je){Se!==Je&&!F&&(t.stencilMask(Je),Se=Je)},setFunc:function(Je,mt,cn){(we!==Je||ke!==mt||Oe!==cn)&&(t.stencilFunc(Je,mt,cn),we=Je,ke=mt,Oe=cn)},setOp:function(Je,mt,cn){(je!==Je||$e!==mt||at!==cn)&&(t.stencilOp(Je,mt,cn),je=Je,$e=mt,at=cn)},setLocked:function(Je){F=Je},setClear:function(Je){ct!==Je&&(t.clearStencil(Je),ct=Je)},reset:function(){F=!1,Se=null,we=null,ke=null,Oe=null,je=null,$e=null,at=null,ct=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},v={},x=new WeakMap,y=[],g=null,u=!1,_=null,p=null,M=null,P=null,C=null,T=null,H=null,E=new Qe(0,0,0),A=0,Z=!1,G=null,he=null,z=null,$=null,K=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=W>=2);let fe=null,pe={};const se=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),N=new Lt().fromArray(se),R=new Lt().fromArray(U);function w(F,Se,we,ke){const Oe=new Uint8Array(4),je=t.createTexture();t.bindTexture(F,je),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<we;$e++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,Oe):t.texImage2D(Se+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Oe);return je}const te={};te[t.TEXTURE_2D]=w(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=w(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(te[t.TEXTURE_2D_ARRAY]=w(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=w(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(t.DEPTH_TEST),l.setFunc(Dl),L(!1),m(Vd),ue(t.CULL_FACE),B(ji);function ue(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function X(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function de(F,Se){return v[F]!==Se?(t.bindFramebuffer(F,Se),v[F]=Se,i&&(F===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=Se),F===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function k(F,Se){let we=y,ke=!1;if(F)if(we=x.get(Se),we===void 0&&(we=[],x.set(Se,we)),F.isWebGLMultipleRenderTargets){const Oe=F.texture;if(we.length!==Oe.length||we[0]!==t.COLOR_ATTACHMENT0){for(let je=0,$e=Oe.length;je<$e;je++)we[je]=t.COLOR_ATTACHMENT0+je;we.length=Oe.length,ke=!0}}else we[0]!==t.COLOR_ATTACHMENT0&&(we[0]=t.COLOR_ATTACHMENT0,ke=!0);else we[0]!==t.BACK&&(we[0]=t.BACK,ke=!0);ke&&(n.isWebGL2?t.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Ce(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const J={[pr]:t.FUNC_ADD,[iy]:t.FUNC_SUBTRACT,[ry]:t.FUNC_REVERSE_SUBTRACT};if(i)J[Xd]=t.MIN,J[Yd]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(J[Xd]=F.MIN_EXT,J[Yd]=F.MAX_EXT)}const le={[sy]:t.ZERO,[oy]:t.ONE,[ay]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[dy]:t.SRC_ALPHA_SATURATE,[fy]:t.DST_COLOR,[cy]:t.DST_ALPHA,[ly]:t.ONE_MINUS_SRC_COLOR,[vf]:t.ONE_MINUS_SRC_ALPHA,[hy]:t.ONE_MINUS_DST_COLOR,[uy]:t.ONE_MINUS_DST_ALPHA,[py]:t.CONSTANT_COLOR,[my]:t.ONE_MINUS_CONSTANT_COLOR,[gy]:t.CONSTANT_ALPHA,[vy]:t.ONE_MINUS_CONSTANT_ALPHA};function B(F,Se,we,ke,Oe,je,$e,at,ct,Je){if(F===ji){u===!0&&(X(t.BLEND),u=!1);return}if(u===!1&&(ue(t.BLEND),u=!0),F!==ny){if(F!==_||Je!==Z){if((p!==pr||C!==pr)&&(t.blendEquation(t.FUNC_ADD),p=pr,C=pr),Je)switch(F){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xo:t.blendFunc(t.ONE,t.ONE);break;case Gd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xo:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,P=null,T=null,H=null,E.set(0,0,0),A=0,_=F,Z=Je}return}Oe=Oe||Se,je=je||we,$e=$e||ke,(Se!==p||Oe!==C)&&(t.blendEquationSeparate(J[Se],J[Oe]),p=Se,C=Oe),(we!==M||ke!==P||je!==T||$e!==H)&&(t.blendFuncSeparate(le[we],le[ke],le[je],le[$e]),M=we,P=ke,T=je,H=$e),(at.equals(E)===!1||ct!==A)&&(t.blendColor(at.r,at.g,at.b,ct),E.copy(at),A=ct),_=F,Z=!1}function j(F,Se){F.side===An?X(t.CULL_FACE):ue(t.CULL_FACE);let we=F.side===Gt;Se&&(we=!we),L(we),F.blending===ws&&F.transparent===!1?B(ji):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ke=F.stencilWrite;c.setTest(ke),ke&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),O(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):X(t.SAMPLE_ALPHA_TO_COVERAGE)}function L(F){G!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),G=F)}function m(F){F!==Qx?(ue(t.CULL_FACE),F!==he&&(F===Vd?t.cullFace(t.BACK):F===ey?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):X(t.CULL_FACE),he=F}function S(F){F!==z&&(I&&t.lineWidth(F),z=F)}function O(F,Se,we){F?(ue(t.POLYGON_OFFSET_FILL),($!==Se||K!==we)&&(t.polygonOffset(Se,we),$=Se,K=we)):X(t.POLYGON_OFFSET_FILL)}function ee(F){F?ue(t.SCISSOR_TEST):X(t.SCISSOR_TEST)}function ne(F){F===void 0&&(F=t.TEXTURE0+Q-1),fe!==F&&(t.activeTexture(F),fe=F)}function ie(F,Se,we){we===void 0&&(fe===null?we=t.TEXTURE0+Q-1:we=fe);let ke=pe[we];ke===void 0&&(ke={type:void 0,texture:void 0},pe[we]=ke),(ke.type!==F||ke.texture!==Se)&&(fe!==we&&(t.activeTexture(we),fe=we),t.bindTexture(F,Se||te[F]),ke.type=F,ke.texture=Se)}function xe(){const F=pe[fe];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(F){N.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),N.copy(F))}function me(F){R.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),R.copy(F))}function Le(F,Se){let we=h.get(Se);we===void 0&&(we=new WeakMap,h.set(Se,we));let ke=we.get(F);ke===void 0&&(ke=t.getUniformBlockIndex(Se,F.name),we.set(F,ke))}function be(F,Se){const ke=h.get(Se).get(F);f.get(Se)!==ke&&(t.uniformBlockBinding(Se,ke,F.__bindingPointIndex),f.set(Se,ke))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},fe=null,pe={},v={},x=new WeakMap,y=[],g=null,u=!1,_=null,p=null,M=null,P=null,C=null,T=null,H=null,E=new Qe(0,0,0),A=0,Z=!1,G=null,he=null,z=null,$=null,K=null,N.set(0,0,t.canvas.width,t.canvas.height),R.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:X,bindFramebuffer:de,drawBuffers:k,useProgram:Ce,setBlending:B,setMaterial:j,setFlipSided:L,setCullFace:m,setLineWidth:S,setPolygonOffset:O,setScissorTest:ee,activeTexture:ne,bindTexture:ie,unbindTexture:xe,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:Te,texImage3D:Ae,updateUBOMapping:Le,uniformBlockBinding:be,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Pe,texSubImage3D:Ne,compressedTexSubImage2D:ce,compressedTexSubImage3D:Be,scissor:D,viewport:me,reset:ve}}function J1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(m,S){return v?new OffscreenCanvas(m,S):Fl("canvas")}function y(m,S,O,ee){let ne=1;if((m.width>ee||m.height>ee)&&(ne=ee/Math.max(m.width,m.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap){const ie=S?Tf:Math.floor,xe=ie(ne*m.width),ge=ie(ne*m.height);h===void 0&&(h=x(xe,ge));const Me=O?x(xe,ge):h;return Me.width=xe,Me.height=ge,Me.getContext("2d").drawImage(m,0,0,xe,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+m.width+"x"+m.height+") to ("+xe+"x"+ge+")."),Me}else return"data"in m&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+m.width+"x"+m.height+")."),m;return m}function g(m){return Mp(m.width)&&Mp(m.height)}function u(m){return a?!1:m.wrapS!==Bn||m.wrapT!==Bn||m.minFilter!==$t&&m.minFilter!==Tn}function _(m,S){return m.generateMipmaps&&S&&m.minFilter!==$t&&m.minFilter!==Tn}function p(m){t.generateMipmap(m)}function M(m,S,O,ee,ne=!1){if(a===!1)return S;if(m!==null){if(t[m]!==void 0)return t[m];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+m+"'")}let ie=S;if(S===t.RED&&(O===t.FLOAT&&(ie=t.R32F),O===t.HALF_FLOAT&&(ie=t.R16F),O===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(ie=t.R8UI),O===t.UNSIGNED_SHORT&&(ie=t.R16UI),O===t.UNSIGNED_INT&&(ie=t.R32UI),O===t.BYTE&&(ie=t.R8I),O===t.SHORT&&(ie=t.R16I),O===t.INT&&(ie=t.R32I)),S===t.RG&&(O===t.FLOAT&&(ie=t.RG32F),O===t.HALF_FLOAT&&(ie=t.RG16F),O===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RGBA){const xe=ne?Nl:nt.getTransfer(ee);O===t.FLOAT&&(ie=t.RGBA32F),O===t.HALF_FLOAT&&(ie=t.RGBA16F),O===t.UNSIGNED_BYTE&&(ie=xe===st?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(m,S,O){return _(m,O)===!0||m.isFramebufferTexture&&m.minFilter!==$t&&m.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:m.mipmaps!==void 0&&m.mipmaps.length>0?m.mipmaps.length:m.isCompressedTexture&&Array.isArray(m.image)?S.mipmaps.length:1}function C(m){return m===$t||m===jd||m===zc?t.NEAREST:t.LINEAR}function T(m){const S=m.target;S.removeEventListener("dispose",T),E(S),S.isVideoTexture&&f.delete(S)}function H(m){const S=m.target;S.removeEventListener("dispose",H),Z(S)}function E(m){const S=i.get(m);if(S.__webglInit===void 0)return;const O=m.source,ee=d.get(O);if(ee){const ne=ee[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(m),Object.keys(ee).length===0&&d.delete(O)}i.remove(m)}function A(m){const S=i.get(m);t.deleteTexture(S.__webglTexture);const O=m.source,ee=d.get(O);delete ee[S.__cacheKey],o.memory.textures--}function Z(m){const S=m.texture,O=i.get(m),ee=i.get(S);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),m.depthTexture&&m.depthTexture.dispose(),m.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(O.__webglFramebuffer[ne]))for(let ie=0;ie<O.__webglFramebuffer[ne].length;ie++)t.deleteFramebuffer(O.__webglFramebuffer[ne][ie]);else t.deleteFramebuffer(O.__webglFramebuffer[ne]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[ne])}else{if(Array.isArray(O.__webglFramebuffer))for(let ne=0;ne<O.__webglFramebuffer.length;ne++)t.deleteFramebuffer(O.__webglFramebuffer[ne]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ne=0;ne<O.__webglColorRenderbuffer.length;ne++)O.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(m.isWebGLMultipleRenderTargets)for(let ne=0,ie=S.length;ne<ie;ne++){const xe=i.get(S[ne]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(m)}let G=0;function he(){G=0}function z(){const m=G;return m>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+m+" texture units while this GPU supports only "+r.maxTextures),G+=1,m}function $(m){const S=[];return S.push(m.wrapS),S.push(m.wrapT),S.push(m.wrapR||0),S.push(m.magFilter),S.push(m.minFilter),S.push(m.anisotropy),S.push(m.internalFormat),S.push(m.format),S.push(m.type),S.push(m.generateMipmaps),S.push(m.premultiplyAlpha),S.push(m.flipY),S.push(m.unpackAlignment),S.push(m.colorSpace),S.join()}function K(m,S){const O=i.get(m);if(m.isVideoTexture&&j(m),m.isRenderTargetTexture===!1&&m.version>0&&O.__version!==m.version){const ee=m.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(O,m,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Q(m,S){const O=i.get(m);if(m.version>0&&O.__version!==m.version){N(O,m,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function I(m,S){const O=i.get(m);if(m.version>0&&O.__version!==m.version){N(O,m,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function W(m,S){const O=i.get(m);if(m.version>0&&O.__version!==m.version){R(O,m,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const Y={[yf]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},fe={[$t]:t.NEAREST,[jd]:t.NEAREST_MIPMAP_NEAREST,[zc]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[Ny]:t.LINEAR_MIPMAP_NEAREST,[Vo]:t.LINEAR_MIPMAP_LINEAR},pe={[Xy]:t.NEVER,[Zy]:t.ALWAYS,[Yy]:t.LESS,[q0]:t.LEQUAL,[jy]:t.EQUAL,[Ky]:t.GEQUAL,[qy]:t.GREATER,[$y]:t.NOTEQUAL};function se(m,S,O){if(O?(t.texParameteri(m,t.TEXTURE_WRAP_S,Y[S.wrapS]),t.texParameteri(m,t.TEXTURE_WRAP_T,Y[S.wrapT]),(m===t.TEXTURE_3D||m===t.TEXTURE_2D_ARRAY)&&t.texParameteri(m,t.TEXTURE_WRAP_R,Y[S.wrapR]),t.texParameteri(m,t.TEXTURE_MAG_FILTER,fe[S.magFilter]),t.texParameteri(m,t.TEXTURE_MIN_FILTER,fe[S.minFilter])):(t.texParameteri(m,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(m,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(m===t.TEXTURE_3D||m===t.TEXTURE_2D_ARRAY)&&t.texParameteri(m,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Bn||S.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(m,t.TEXTURE_MAG_FILTER,C(S.magFilter)),t.texParameteri(m,t.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==$t&&S.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(m,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(m,t.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===$t||S.minFilter!==zc&&S.minFilter!==Vo||S.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Go&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(m,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function U(m,S){let O=!1;m.__webglInit===void 0&&(m.__webglInit=!0,S.addEventListener("dispose",T));const ee=S.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const ie=$(S);if(ie!==m.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[ie].usedTimes++;const xe=ne[m.__cacheKey];xe!==void 0&&(ne[m.__cacheKey].usedTimes--,xe.usedTimes===0&&A(S)),m.__cacheKey=ie,m.__webglTexture=ne[ie].texture}return O}function N(m,S,O){let ee=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=U(m,S),ie=S.source;n.bindTexture(ee,m.__webglTexture,t.TEXTURE0+O);const xe=i.get(ie);if(ie.version!==xe.__version||ne===!0){n.activeTexture(t.TEXTURE0+O);const ge=nt.getPrimaries(nt.workingColorSpace),Me=S.colorSpace===Cn?null:nt.getPrimaries(S.colorSpace),Pe=S.colorSpace===Cn||ge===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ne=u(S)&&g(S.image)===!1;let ce=y(S.image,Ne,!1,r.maxTextureSize);ce=L(S,ce);const Be=g(ce)||a,Ee=s.convert(S.format,S.colorSpace);let De=s.convert(S.type),Te=M(S.internalFormat,Ee,De,S.colorSpace,S.isVideoTexture);se(ee,S,Be);let Ae;const D=S.mipmaps,me=a&&S.isVideoTexture!==!0&&Te!==X0,Le=xe.__version===void 0||ne===!0,be=P(S,ce,Be);if(S.isDepthTexture)Te=t.DEPTH_COMPONENT,a?S.type===ki?Te=t.DEPTH_COMPONENT32F:S.type===Fi?Te=t.DEPTH_COMPONENT24:S.type===Sr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:S.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Mr&&Te===t.DEPTH_COMPONENT&&S.type!==Eh&&S.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Fi,De=s.convert(S.type)),S.format===Fs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,S.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Sr,De=s.convert(S.type))),Le&&(me?n.texStorage2D(t.TEXTURE_2D,1,Te,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Te,ce.width,ce.height,0,Ee,De,null));else if(S.isDataTexture)if(D.length>0&&Be){me&&Le&&n.texStorage2D(t.TEXTURE_2D,be,Te,D[0].width,D[0].height);for(let ve=0,F=D.length;ve<F;ve++)Ae=D[ve],me?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Ee,De,Ae.data):n.texImage2D(t.TEXTURE_2D,ve,Te,Ae.width,Ae.height,0,Ee,De,Ae.data);S.generateMipmaps=!1}else me?(Le&&n.texStorage2D(t.TEXTURE_2D,be,Te,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Ee,De,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ce.width,ce.height,0,Ee,De,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){me&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Te,D[0].width,D[0].height,ce.depth);for(let ve=0,F=D.length;ve<F;ve++)Ae=D[ve],S.format!==Hn?Ee!==null?me?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,ce.depth,Ee,Ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Te,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,ce.depth,Ee,De,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Te,Ae.width,Ae.height,ce.depth,0,Ee,De,Ae.data)}else{me&&Le&&n.texStorage2D(t.TEXTURE_2D,be,Te,D[0].width,D[0].height);for(let ve=0,F=D.length;ve<F;ve++)Ae=D[ve],S.format!==Hn?Ee!==null?me?n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Ee,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Te,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Ee,De,Ae.data):n.texImage2D(t.TEXTURE_2D,ve,Te,Ae.width,Ae.height,0,Ee,De,Ae.data)}else if(S.isDataArrayTexture)me?(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Te,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ee,De,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,Ee,De,ce.data);else if(S.isData3DTexture)me?(Le&&n.texStorage3D(t.TEXTURE_3D,be,Te,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ee,De,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,Ee,De,ce.data);else if(S.isFramebufferTexture){if(Le)if(me)n.texStorage2D(t.TEXTURE_2D,be,Te,ce.width,ce.height);else{let ve=ce.width,F=ce.height;for(let Se=0;Se<be;Se++)n.texImage2D(t.TEXTURE_2D,Se,Te,ve,F,0,Ee,De,null),ve>>=1,F>>=1}}else if(D.length>0&&Be){me&&Le&&n.texStorage2D(t.TEXTURE_2D,be,Te,D[0].width,D[0].height);for(let ve=0,F=D.length;ve<F;ve++)Ae=D[ve],me?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ee,De,Ae):n.texImage2D(t.TEXTURE_2D,ve,Te,Ee,De,Ae);S.generateMipmaps=!1}else me?(Le&&n.texStorage2D(t.TEXTURE_2D,be,Te,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,De,ce)):n.texImage2D(t.TEXTURE_2D,0,Te,Ee,De,ce);_(S,Be)&&p(ee),xe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}m.__version=S.version}function R(m,S,O){if(S.image.length!==6)return;const ee=U(m,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,m.__webglTexture,t.TEXTURE0+O);const ie=i.get(ne);if(ne.version!==ie.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const xe=nt.getPrimaries(nt.workingColorSpace),ge=S.colorSpace===Cn?null:nt.getPrimaries(S.colorSpace),Me=S.colorSpace===Cn||xe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ne=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let ve=0;ve<6;ve++)!Pe&&!Ne?ce[ve]=y(S.image[ve],!1,!0,r.maxCubemapSize):ce[ve]=Ne?S.image[ve].image:S.image[ve],ce[ve]=L(S,ce[ve]);const Be=ce[0],Ee=g(Be)||a,De=s.convert(S.format,S.colorSpace),Te=s.convert(S.type),Ae=M(S.internalFormat,De,Te,S.colorSpace),D=a&&S.isVideoTexture!==!0,me=ie.__version===void 0||ee===!0;let Le=P(S,Be,Ee);se(t.TEXTURE_CUBE_MAP,S,Ee);let be;if(Pe){D&&me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Ae,Be.width,Be.height);for(let ve=0;ve<6;ve++){be=ce[ve].mipmaps;for(let F=0;F<be.length;F++){const Se=be[F];S.format!==Hn?De!==null?D?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,Se.width,Se.height,De,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,0,0,Se.width,Se.height,De,Te,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F,Ae,Se.width,Se.height,0,De,Te,Se.data)}}}else{be=S.mipmaps,D&&me&&(be.length>0&&Le++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Ae,ce[0].width,ce[0].height));for(let ve=0;ve<6;ve++)if(Ne){D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce[ve].width,ce[ve].height,De,Te,ce[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ae,ce[ve].width,ce[ve].height,0,De,Te,ce[ve].data);for(let F=0;F<be.length;F++){const we=be[F].image[ve].image;D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,we.width,we.height,De,Te,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Ae,we.width,we.height,0,De,Te,we.data)}}else{D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De,Te,ce[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ae,De,Te,ce[ve]);for(let F=0;F<be.length;F++){const Se=be[F];D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,0,0,De,Te,Se.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,F+1,Ae,De,Te,Se.image[ve])}}}_(S,Ee)&&p(t.TEXTURE_CUBE_MAP),ie.__version=ne.version,S.onUpdate&&S.onUpdate(S)}m.__version=S.version}function w(m,S,O,ee,ne,ie){const xe=s.convert(O.format,O.colorSpace),ge=s.convert(O.type),Me=M(O.internalFormat,xe,ge,O.colorSpace);if(!i.get(S).__hasExternalTextures){const Ne=Math.max(1,S.width>>ie),ce=Math.max(1,S.height>>ie);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ie,Me,Ne,ce,S.depth,0,xe,ge,null):n.texImage2D(ne,ie,Me,Ne,ce,0,xe,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,m),B(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(O).__webglTexture,0,le(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(O).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(m,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,m),S.depthBuffer&&!S.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||B(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ki?ee=t.DEPTH_COMPONENT32F:ne.type===Fi&&(ee=t.DEPTH_COMPONENT24));const ie=le(S);B(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ee,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ee,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,m)}else if(S.depthBuffer&&S.stencilBuffer){const ee=le(S);O&&B(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,S.width,S.height):B(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,m)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<ee.length;ne++){const ie=ee[ne],xe=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),Me=M(ie.internalFormat,xe,ge,ie.colorSpace),Pe=le(S);O&&B(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Me,S.width,S.height):B(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(m,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,m),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const ee=i.get(S.depthTexture).__webglTexture,ne=le(S);if(S.depthTexture.format===Mr)B(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Fs)B(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function X(m){const S=i.get(m),O=m.isWebGLCubeRenderTarget===!0;if(m.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,m)}else if(O){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=t.createRenderbuffer(),te(S.__webglDepthbuffer[ee],m,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),te(S.__webglDepthbuffer,m,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(m,S,O){const ee=i.get(m);S!==void 0&&w(ee.__webglFramebuffer,m,m.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&X(m)}function k(m){const S=m.texture,O=i.get(m),ee=i.get(S);m.addEventListener("dispose",H),m.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=S.version,o.memory.textures++);const ne=m.isWebGLCubeRenderTarget===!0,ie=m.isWebGLMultipleRenderTargets===!0,xe=g(m)||a;if(ne){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let Me=0;Me<S.mipmaps.length;Me++)O.__webglFramebuffer[ge][Me]=t.createFramebuffer()}else O.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)O.__webglFramebuffer[ge]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ge=m.texture;for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ne=i.get(ge[Me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&m.samples>0&&B(m)===!1){const ge=ie?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){const Pe=ge[Me];O.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Me]);const Ne=s.convert(Pe.format,Pe.colorSpace),ce=s.convert(Pe.type),Be=M(Pe.internalFormat,Ne,ce,Pe.colorSpace,m.isXRRenderTarget===!0),Ee=le(m);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Be,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,O.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),m.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),te(O.__webglDepthRenderbuffer,m,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),se(t.TEXTURE_CUBE_MAP,S,xe);for(let ge=0;ge<6;ge++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)w(O.__webglFramebuffer[ge][Me],m,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else w(O.__webglFramebuffer[ge],m,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(S,xe)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ge=m.texture;for(let Me=0,Pe=ge.length;Me<Pe;Me++){const Ne=ge[Me],ce=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),se(t.TEXTURE_2D,Ne,xe),w(O.__webglFramebuffer,m,Ne,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),_(Ne,xe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(a?ge=m.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,ee.__webglTexture),se(ge,S,xe),a&&S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)w(O.__webglFramebuffer[Me],m,S,t.COLOR_ATTACHMENT0,ge,Me);else w(O.__webglFramebuffer,m,S,t.COLOR_ATTACHMENT0,ge,0);_(S,xe)&&p(ge),n.unbindTexture()}m.depthBuffer&&X(m)}function Ce(m){const S=g(m)||a,O=m.isWebGLMultipleRenderTargets===!0?m.texture:[m.texture];for(let ee=0,ne=O.length;ee<ne;ee++){const ie=O[ee];if(_(ie,S)){const xe=m.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(ie).__webglTexture;n.bindTexture(xe,ge),p(xe),n.unbindTexture()}}}function J(m){if(a&&m.samples>0&&B(m)===!1){const S=m.isWebGLMultipleRenderTargets?m.texture:[m.texture],O=m.width,ee=m.height;let ne=t.COLOR_BUFFER_BIT;const ie=[],xe=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(m),Me=m.isWebGLMultipleRenderTargets===!0;if(Me)for(let Pe=0;Pe<S.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){ie.push(t.COLOR_ATTACHMENT0+Pe),m.depthBuffer&&ie.push(xe);const Ne=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ne===!1&&(m.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),m.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Pe]),Ne===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),Me){const ce=i.get(S[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,O,ee,0,0,O,ee,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Pe=0;Pe<S.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Pe]);const Ne=i.get(S[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function le(m){return Math.min(r.maxSamples,m.samples)}function B(m){const S=i.get(m);return a&&m.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function j(m){const S=o.render.frame;f.get(m)!==S&&(f.set(m,S),m.update())}function L(m,S){const O=m.colorSpace,ee=m.format,ne=m.type;return m.isCompressedTexture===!0||m.isVideoTexture===!0||m.format===Mf||O!==xi&&O!==Cn&&(nt.getTransfer(O)===st?a===!1?e.has("EXT_sRGB")===!0&&ee===Hn?(m.format=Mf,m.minFilter=Tn,m.generateMipmaps=!1):S=K0.sRGBToLinear(S):(ee!==Hn||ne!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=z,this.resetTextureUnits=he,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=I,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=w,this.useMultisampledRTT=B}function Q1(t,e,n){const i=n.isWebGL2;function r(s,o=Cn){let a;const l=nt.getTransfer(o);if(s===$i)return t.UNSIGNED_BYTE;if(s===B0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===H0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Iy)return t.BYTE;if(s===Uy)return t.SHORT;if(s===Eh)return t.UNSIGNED_SHORT;if(s===z0)return t.INT;if(s===Fi)return t.UNSIGNED_INT;if(s===ki)return t.FLOAT;if(s===Go)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Oy)return t.ALPHA;if(s===Hn)return t.RGBA;if(s===Fy)return t.LUMINANCE;if(s===ky)return t.LUMINANCE_ALPHA;if(s===Mr)return t.DEPTH_COMPONENT;if(s===Fs)return t.DEPTH_STENCIL;if(s===Mf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zy)return t.RED;if(s===V0)return t.RED_INTEGER;if(s===By)return t.RG;if(s===G0)return t.RG_INTEGER;if(s===W0)return t.RGBA_INTEGER;if(s===Bc||s===Hc||s===Vc||s===Gc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===$d||s===Kd||s===Zd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===X0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jd||s===Qd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jd)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qd)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===fp||s===hp||s===dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ep)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===op)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ap)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===up)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wc||s===pp||s===mp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hy||s===gp||s===vp||s===_p)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_p)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ew extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),v=.02,x=.005;c.inputState.pinching&&d>v+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=v-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nw extends Ir{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,v=null,x=null;const y=n.getContextAttributes();let g=null,u=null;const _=[],p=[],M=new _e;let P=null;const C=new wn;C.layers.enable(1),C.viewport=new Lt;const T=new wn;T.layers.enable(2),T.viewport=new Lt;const H=[C,T],E=new ew;E.layers.enable(1),E.layers.enable(2);let A=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let U=_[se];return U===void 0&&(U=new pu,_[se]=U),U.getTargetRaySpace()},this.getControllerGrip=function(se){let U=_[se];return U===void 0&&(U=new pu,_[se]=U),U.getGripSpace()},this.getHand=function(se){let U=_[se];return U===void 0&&(U=new pu,_[se]=U),U.getHandSpace()};function G(se){const U=p.indexOf(se.inputSource);if(U===-1)return;const N=_[U];N!==void 0&&(N.update(se.inputSource,se.frame,c||o),N.dispatchEvent({type:se.type,data:se.inputSource}))}function he(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",z);for(let se=0;se<_.length;se++){const U=p[se];U!==null&&(p[se]=null,_[se].disconnect(U))}A=null,Z=null,e.setRenderTarget(g),v=null,d=null,h=null,r=null,u=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:v},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",he),r.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),u=new Pr(v.framebufferWidth,v.framebufferHeight,{format:Hn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let U=null,N=null,R=null;y.depth&&(R=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=y.stencil?Fs:Mr,N=y.stencil?Sr:Fi);const w={colorFormat:n.RGBA8,depthFormat:R,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(w),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Pr(d.textureWidth,d.textureHeight,{format:Hn,type:$i,depthTexture:new cv(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const te=e.properties.get(u);te.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(se){for(let U=0;U<se.removed.length;U++){const N=se.removed[U],R=p.indexOf(N);R>=0&&(p[R]=null,_[R].disconnect(N))}for(let U=0;U<se.added.length;U++){const N=se.added[U];let R=p.indexOf(N);if(R===-1){for(let te=0;te<_.length;te++)if(te>=p.length){p.push(N),R=te;break}else if(p[te]===null){p[te]=N,R=te;break}if(R===-1)break}const w=_[R];w&&w.connect(N)}}const $=new V,K=new V;function Q(se,U,N){$.setFromMatrixPosition(U.matrixWorld),K.setFromMatrixPosition(N.matrixWorld);const R=$.distanceTo(K),w=U.projectionMatrix.elements,te=N.projectionMatrix.elements,ue=w[14]/(w[10]-1),X=w[14]/(w[10]+1),de=(w[9]+1)/w[5],k=(w[9]-1)/w[5],Ce=(w[8]-1)/w[0],J=(te[8]+1)/te[0],le=ue*Ce,B=ue*J,j=R/(-Ce+J),L=j*-Ce;U.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(L),se.translateZ(j),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const m=ue+j,S=X+j,O=le-L,ee=B+(R-L),ne=de*X/S*m,ie=k*X/S*m;se.projectionMatrix.makePerspective(O,ee,ne,ie,m,S),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function I(se,U){U===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(U.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;E.near=T.near=C.near=se.near,E.far=T.far=C.far=se.far,(A!==E.near||Z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,Z=E.far);const U=se.parent,N=E.cameras;I(E,U);for(let R=0;R<N.length;R++)I(N[R],U);N.length===2?Q(E,C,T):E.projectionMatrix.copy(C.projectionMatrix),W(se,E,U)};function W(se,U,N){N===null?se.matrix.copy(U.matrixWorld):(se.matrix.copy(N.matrixWorld),se.matrix.invert(),se.matrix.multiply(U.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(U.projectionMatrix),se.projectionMatrixInverse.copy(U.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ef*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&v===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=se)};let Y=null;function fe(se,U){if(f=U.getViewerPose(c||o),x=U,f!==null){const N=f.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let R=!1;N.length!==E.cameras.length&&(E.cameras.length=0,R=!0);for(let w=0;w<N.length;w++){const te=N[w];let ue=null;if(v!==null)ue=v.getViewport(te);else{const de=h.getViewSubImage(d,te);ue=de.viewport,w===0&&(e.setRenderTargetTextures(u,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(u))}let X=H[w];X===void 0&&(X=new wn,X.layers.enable(w),X.viewport=new Lt,H[w]=X),X.matrix.fromArray(te.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(te.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ue.x,ue.y,ue.width,ue.height),w===0&&(E.matrix.copy(X.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),R===!0&&E.cameras.push(X)}}for(let N=0;N<_.length;N++){const R=p[N],w=_[N];R!==null&&w!==void 0&&w.update(R,U,c||o)}Y&&Y(se,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),x=null}const pe=new av;pe.setAnimationLoop(fe),this.setAnimationLoop=function(se){Y=se},this.dispose=function(){}}}function iw(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,rv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,_,p,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&v(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),x(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,_,p):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Gt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Gt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,_,p){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=p*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function v(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Gt&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,p){const M=p.program;i.uniformBlockBinding(_,M)}function c(_,p){let M=r[_.id];M===void 0&&(x(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",g));const P=p.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const p=h();_.__bindingPointIndex=p;const M=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const p=r[_.id],M=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let C=0,T=M.length;C<T;C++){const H=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,A=H.length;E<A;E++){const Z=H[E];if(v(Z,C,E,P)===!0){const G=Z.__offset,he=Array.isArray(Z.value)?Z.value:[Z.value];let z=0;for(let $=0;$<he.length;$++){const K=he[$],Q=y(K);typeof K=="number"||typeof K=="boolean"?(Z.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,G+z,Z.__data)):K.isMatrix3?(Z.__data[0]=K.elements[0],Z.__data[1]=K.elements[1],Z.__data[2]=K.elements[2],Z.__data[3]=0,Z.__data[4]=K.elements[3],Z.__data[5]=K.elements[4],Z.__data[6]=K.elements[5],Z.__data[7]=0,Z.__data[8]=K.elements[6],Z.__data[9]=K.elements[7],Z.__data[10]=K.elements[8],Z.__data[11]=0):(K.toArray(Z.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,Z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(_,p,M,P){const C=_.value,T=p+"_"+M;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{const H=P[T];if(typeof C=="number"||typeof C=="boolean"){if(H!==C)return P[T]=C,!0}else if(H.equals(C)===!1)return H.copy(C),!0}return!1}function x(_){const p=_.uniforms;let M=0;const P=16;for(let T=0,H=p.length;T<H;T++){const E=Array.isArray(p[T])?p[T]:[p[T]];for(let A=0,Z=E.length;A<Z;A++){const G=E[A],he=Array.isArray(G.value)?G.value:[G.value];for(let z=0,$=he.length;z<$;z++){const K=he[z],Q=y(K),I=M%P;I!==0&&P-I<Q.boundary&&(M+=P-I),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=Q.storage}}}const C=M%P;return C>0&&(M+=P-C),_.__size=M,_.__cache={},this}function y(_){const p={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(p.boundary=4,p.storage=4):_.isVector2?(p.boundary=8,p.storage=8):_.isVector3||_.isColor?(p.boundary=16,p.storage=12):_.isVector4?(p.boundary=16,p.storage=16):_.isMatrix3?(p.boundary=48,p.storage=48):_.isMatrix4?(p.boundary=64,p.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),p}function g(_){const p=_.target;p.removeEventListener("dispose",g);const M=o.indexOf(p.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class mv{constructor(e={}){const{canvas:n=eS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const v=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const p=this;let M=!1,P=0,C=0,T=null,H=-1,E=null;const A=new Lt,Z=new Lt;let G=null;const he=new Qe(0);let z=0,$=n.width,K=n.height,Q=1,I=null,W=null;const Y=new Lt(0,0,$,K),fe=new Lt(0,0,$,K);let pe=!1;const se=new Ah;let U=!1,N=!1,R=null;const w=new Mt,te=new _e,ue=new V,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return T===null?Q:1}let k=i;function Ce(b,q){for(let oe=0;oe<b.length;oe++){const ae=b[oe],re=n.getContext(ae,q);if(re!==null)return re}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mh}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Se,!1),k===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),k=Ce(q,b),k===null)throw Ce(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,le,B,j,L,m,S,O,ee,ne,ie,xe,ge,Me,Pe,Ne,ce,Be,Ee,De,Te,Ae,D,me;function Le(){J=new pT(k),le=new lT(k,J,e),J.init(le),Ae=new Q1(k,J,le),B=new Z1(k,J,le),j=new vT(k),L=new F1,m=new J1(k,J,B,L,le,Ae,j),S=new uT(p),O=new dT(p),ee=new wS(k,le),D=new oT(k,J,ee,le),ne=new mT(k,ee,j,D),ie=new ST(k,ne,ee,j),Ee=new yT(k,le,m),Ne=new cT(L),xe=new O1(p,S,O,J,le,D,Ne),ge=new iw(p,L),Me=new z1,Pe=new X1(J,le),Be=new sT(p,S,O,B,ie,d,l),ce=new K1(p,ie,le),me=new rw(k,j,le,B),De=new aT(k,J,j,le),Te=new gT(k,J,j,le),j.programs=xe.programs,p.capabilities=le,p.extensions=J,p.properties=L,p.renderLists=Me,p.shadowMap=ce,p.state=B,p.info=j}Le();const be=new nw(p,k);this.xr=be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize($,K,!1))},this.getSize=function(b){return b.set($,K)},this.setSize=function(b,q,oe=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,K=q,n.width=Math.floor(b*Q),n.height=Math.floor(q*Q),oe===!0&&(n.style.width=b+"px",n.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set($*Q,K*Q).floor()},this.setDrawingBufferSize=function(b,q,oe){$=b,K=q,Q=oe,n.width=Math.floor(b*oe),n.height=Math.floor(q*oe),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,q,oe,ae){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,q,oe,ae),B.viewport(A.copy(Y).multiplyScalar(Q).floor())},this.getScissor=function(b){return b.copy(fe)},this.setScissor=function(b,q,oe,ae){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,q,oe,ae),B.scissor(Z.copy(fe).multiplyScalar(Q).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){B.setScissorTest(pe=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(b=!0,q=!0,oe=!0){let ae=0;if(b){let re=!1;if(T!==null){const Ie=T.texture.format;re=Ie===W0||Ie===G0||Ie===V0}if(re){const Ie=T.texture.type,ze=Ie===$i||Ie===Fi||Ie===Eh||Ie===Sr||Ie===B0||Ie===H0,He=Be.getClearColor(),Ve=Be.getClearAlpha(),qe=He.r,We=He.g,Xe=He.b;ze?(v[0]=qe,v[1]=We,v[2]=Xe,v[3]=Ve,k.clearBufferuiv(k.COLOR,0,v)):(x[0]=qe,x[1]=We,x[2]=Xe,x[3]=Ve,k.clearBufferiv(k.COLOR,0,x))}else ae|=k.COLOR_BUFFER_BIT}q&&(ae|=k.DEPTH_BUFFER_BIT),oe&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Me.dispose(),Pe.dispose(),L.dispose(),S.dispose(),O.dispose(),ie.dispose(),D.dispose(),me.dispose(),xe.dispose(),be.dispose(),be.removeEventListener("sessionstart",ct),be.removeEventListener("sessionend",Je),R&&(R.dispose(),R=null),mt.stop()};function ve(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=j.autoReset,q=ce.enabled,oe=ce.autoUpdate,ae=ce.needsUpdate,re=ce.type;Le(),j.autoReset=b,ce.enabled=q,ce.autoUpdate=oe,ce.needsUpdate=ae,ce.type=re}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function we(b){const q=b.target;q.removeEventListener("dispose",we),ke(q)}function ke(b){Oe(b),L.remove(b)}function Oe(b){const q=L.get(b).programs;q!==void 0&&(q.forEach(function(oe){xe.releaseProgram(oe)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,oe,ae,re,Ie){q===null&&(q=X);const ze=re.isMesh&&re.matrixWorld.determinant()<0,He=Ei(b,q,oe,ae,re);B.setMaterial(ae,ze);let Ve=oe.index,qe=1;if(ae.wireframe===!0){if(Ve=ne.getWireframeAttribute(oe),Ve===void 0)return;qe=2}const We=oe.drawRange,Xe=oe.attributes.position;let _t=We.start*qe,un=(We.start+We.count)*qe;Ie!==null&&(_t=Math.max(_t,Ie.start*qe),un=Math.min(un,(Ie.start+Ie.count)*qe)),Ve!==null?(_t=Math.max(_t,0),un=Math.min(un,Ve.count)):Xe!=null&&(_t=Math.max(_t,0),un=Math.min(un,Xe.count));const Ct=un-_t;if(Ct<0||Ct===1/0)return;D.setup(re,ae,He,oe,Ve);let ti,ut=De;if(Ve!==null&&(ti=ee.get(Ve),ut=Te,ut.setIndex(ti)),re.isMesh)ae.wireframe===!0?(B.setLineWidth(ae.wireframeLinewidth*de()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(re.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),B.setLineWidth(Ke*de()),re.isLineSegments?ut.setMode(k.LINES):re.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else re.isPoints?ut.setMode(k.POINTS):re.isSprite&&ut.setMode(k.TRIANGLES);if(re.isBatchedMesh)ut.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)ut.renderInstances(_t,Ct,re.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,cc=Math.min(oe.instanceCount,Ke);ut.renderInstances(_t,Ct,cc)}else ut.render(_t,Ct)};function je(b,q,oe){b.transparent===!0&&b.side===An&&b.forceSinglePass===!1?(b.side=Gt,b.needsUpdate=!0,Mi(b,q,oe),b.side=Ji,b.needsUpdate=!0,Mi(b,q,oe),b.side=An):Mi(b,q,oe)}this.compile=function(b,q,oe=null){oe===null&&(oe=b),g=Pe.get(oe),g.init(),_.push(g),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(g.pushLight(re),re.castShadow&&g.pushShadow(re))}),b!==oe&&b.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(g.pushLight(re),re.castShadow&&g.pushShadow(re))}),g.setupLights(p._useLegacyLights);const ae=new Set;return b.traverse(function(re){const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let ze=0;ze<Ie.length;ze++){const He=Ie[ze];je(He,oe,re),ae.add(He)}else je(Ie,oe,re),ae.add(Ie)}),_.pop(),g=null,ae},this.compileAsync=function(b,q,oe=null){const ae=this.compile(b,q,oe);return new Promise(re=>{function Ie(){if(ae.forEach(function(ze){L.get(ze).currentProgram.isReady()&&ae.delete(ze)}),ae.size===0){re(b);return}setTimeout(Ie,10)}J.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let $e=null;function at(b){$e&&$e(b)}function ct(){mt.stop()}function Je(){mt.start()}const mt=new av;mt.setAnimationLoop(at),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(b){$e=b,be.setAnimationLoop(b),b===null?mt.stop():mt.start()},be.addEventListener("sessionstart",ct),be.addEventListener("sessionend",Je),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(q),q=be.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,q,T),g=Pe.get(b,_.length),g.init(),_.push(g),w.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),se.setFromProjectionMatrix(w),N=this.localClippingEnabled,U=Ne.init(this.clippingPlanes,N),y=Me.get(b,u.length),y.init(),u.push(y),cn(b,q,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(I,W),this.info.render.frame++,U===!0&&Ne.beginShadows();const oe=g.state.shadowsArray;if(ce.render(oe,b,q),U===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(y,b),g.setupLights(p._useLegacyLights),q.isArrayCamera){const ae=q.cameras;for(let re=0,Ie=ae.length;re<Ie;re++){const ze=ae[re];xn(y,b,ze,ze.viewport)}}else xn(y,b,q);T!==null&&(m.updateMultisampleRenderTarget(T),m.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(p,b,q),D.resetDefaultState(),H=-1,E=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function cn(b,q,oe,ae){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){ae&&ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(w);const ze=ie.update(b),He=b.material;He.visible&&y.push(b,ze,He,oe,ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||se.intersectsObject(b))){const ze=ie.update(b),He=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ue.copy(b.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ue.copy(ze.boundingSphere.center)),ue.applyMatrix4(b.matrixWorld).applyMatrix4(w)),Array.isArray(He)){const Ve=ze.groups;for(let qe=0,We=Ve.length;qe<We;qe++){const Xe=Ve[qe],_t=He[Xe.materialIndex];_t&&_t.visible&&y.push(b,ze,_t,oe,ue.z,Xe)}}else He.visible&&y.push(b,ze,He,oe,ue.z,null)}}const Ie=b.children;for(let ze=0,He=Ie.length;ze<He;ze++)cn(Ie[ze],q,oe,ae)}function xn(b,q,oe,ae){const re=b.opaque,Ie=b.transmissive,ze=b.transparent;g.setupLightsView(oe),U===!0&&Ne.setGlobalState(p.clippingPlanes,oe),Ie.length>0&&na(re,Ie,q,oe),ae&&B.viewport(A.copy(ae)),re.length>0&&nr(re,q,oe),Ie.length>0&&nr(Ie,q,oe),ze.length>0&&nr(ze,q,oe),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function na(b,q,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;const Ie=le.isWebGL2;R===null&&(R=new Pr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Go:$i,minFilter:Vo,samples:Ie?4:0})),p.getDrawingBufferSize(te),Ie?R.setSize(te.x,te.y):R.setSize(Tf(te.x),Tf(te.y));const ze=p.getRenderTarget();p.setRenderTarget(R),p.getClearColor(he),z=p.getClearAlpha(),z<1&&p.setClearColor(16777215,.5),p.clear();const He=p.toneMapping;p.toneMapping=qi,nr(b,oe,ae),m.updateMultisampleRenderTarget(R),m.updateRenderTargetMipmap(R);let Ve=!1;for(let qe=0,We=q.length;qe<We;qe++){const Xe=q[qe],_t=Xe.object,un=Xe.geometry,Ct=Xe.material,ti=Xe.group;if(Ct.side===An&&_t.layers.test(ae.layers)){const ut=Ct.side;Ct.side=Gt,Ct.needsUpdate=!0,ac(_t,oe,ae,un,Ct,ti),Ct.side=ut,Ct.needsUpdate=!0,Ve=!0}}Ve===!0&&(m.updateMultisampleRenderTarget(R),m.updateRenderTargetMipmap(R)),p.setRenderTarget(ze),p.setClearColor(he,z),p.toneMapping=He}function nr(b,q,oe){const ae=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Ie=b.length;re<Ie;re++){const ze=b[re],He=ze.object,Ve=ze.geometry,qe=ae===null?ze.material:ae,We=ze.group;He.layers.test(oe.layers)&&ac(He,q,oe,Ve,qe,We)}}function ac(b,q,oe,ae,re,Ie){b.onBeforeRender(p,q,oe,ae,re,Ie),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),re.onBeforeRender(p,q,oe,ae,b,Ie),re.transparent===!0&&re.side===An&&re.forceSinglePass===!1?(re.side=Gt,re.needsUpdate=!0,p.renderBufferDirect(oe,q,ae,re,b,Ie),re.side=Ji,re.needsUpdate=!0,p.renderBufferDirect(oe,q,ae,re,b,Ie),re.side=An):p.renderBufferDirect(oe,q,ae,re,b,Ie),b.onAfterRender(p,q,oe,ae,re,Ie)}function Mi(b,q,oe){q.isScene!==!0&&(q=X);const ae=L.get(b),re=g.state.lights,Ie=g.state.shadowsArray,ze=re.state.version,He=xe.getParameters(b,re.state,Ie,q,oe),Ve=xe.getProgramCacheKey(He);let qe=ae.programs;ae.environment=b.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(b.isMeshStandardMaterial?O:S).get(b.envMap||ae.environment),qe===void 0&&(b.addEventListener("dispose",we),qe=new Map,ae.programs=qe);let We=qe.get(Ve);if(We!==void 0){if(ae.currentProgram===We&&ae.lightsStateVersion===ze)return ir(b,He),We}else He.uniforms=xe.getUniforms(b),b.onBuild(oe,He,p),b.onBeforeCompile(He,p),We=xe.acquireProgram(He,Ve),qe.set(Ve,We),ae.uniforms=He.uniforms;const Xe=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=Ne.uniform),ir(b,He),ae.needsLights=lc(b),ae.lightsStateVersion=ze,ae.needsLights&&(Xe.ambientLightColor.value=re.state.ambient,Xe.lightProbe.value=re.state.probe,Xe.directionalLights.value=re.state.directional,Xe.directionalLightShadows.value=re.state.directionalShadow,Xe.spotLights.value=re.state.spot,Xe.spotLightShadows.value=re.state.spotShadow,Xe.rectAreaLights.value=re.state.rectArea,Xe.ltc_1.value=re.state.rectAreaLTC1,Xe.ltc_2.value=re.state.rectAreaLTC2,Xe.pointLights.value=re.state.point,Xe.pointLightShadows.value=re.state.pointShadow,Xe.hemisphereLights.value=re.state.hemi,Xe.directionalShadowMap.value=re.state.directionalShadowMap,Xe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Xe.spotShadowMap.value=re.state.spotShadowMap,Xe.spotLightMatrix.value=re.state.spotLightMatrix,Xe.spotLightMap.value=re.state.spotLightMap,Xe.pointShadowMap.value=re.state.pointShadowMap,Xe.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.currentProgram=We,ae.uniformsList=null,We}function Ur(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=ol.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function ir(b,q){const oe=L.get(b);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function Ei(b,q,oe,ae,re){q.isScene!==!0&&(q=X),m.resetTextureUnits();const Ie=q.fog,ze=ae.isMeshStandardMaterial?q.environment:null,He=T===null?p.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xi,Ve=(ae.isMeshStandardMaterial?O:S).get(ae.envMap||ze),qe=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,We=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!oe.morphAttributes.position,_t=!!oe.morphAttributes.normal,un=!!oe.morphAttributes.color;let Ct=qi;ae.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=p.toneMapping);const ti=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ut=ti!==void 0?ti.length:0,Ke=L.get(ae),cc=g.state.lights;if(U===!0&&(N===!0||b!==E)){const yn=b===E&&ae.id===H;Ne.setState(ae,b,yn)}let gt=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==cc.state.version||Ke.outputColorSpace!==He||re.isBatchedMesh&&Ke.batching===!1||!re.isBatchedMesh&&Ke.batching===!0||re.isInstancedMesh&&Ke.instancing===!1||!re.isInstancedMesh&&Ke.instancing===!0||re.isSkinnedMesh&&Ke.skinning===!1||!re.isSkinnedMesh&&Ke.skinning===!0||re.isInstancedMesh&&Ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ke.instancingColor===!1&&re.instanceColor!==null||Ke.envMap!==Ve||ae.fog===!0&&Ke.fog!==Ie||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ne.numPlanes||Ke.numIntersection!==Ne.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==We||Ke.morphTargets!==Xe||Ke.morphNormals!==_t||Ke.morphColors!==un||Ke.toneMapping!==Ct||le.isWebGL2===!0&&Ke.morphTargetsCount!==ut)&&(gt=!0):(gt=!0,Ke.__version=ae.version);let rr=Ke.currentProgram;gt===!0&&(rr=Mi(ae,q,re));let Lh=!1,Ws=!1,uc=!1;const Ft=rr.getUniforms(),sr=Ke.uniforms;if(B.useProgram(rr.program)&&(Lh=!0,Ws=!0,uc=!0),ae.id!==H&&(H=ae.id,Ws=!0),Lh||E!==b){Ft.setValue(k,"projectionMatrix",b.projectionMatrix),Ft.setValue(k,"viewMatrix",b.matrixWorldInverse);const yn=Ft.map.cameraPosition;yn!==void 0&&yn.setValue(k,ue.setFromMatrixPosition(b.matrixWorld)),le.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Ws=!0,uc=!0)}if(re.isSkinnedMesh){Ft.setOptional(k,re,"bindMatrix"),Ft.setOptional(k,re,"bindMatrixInverse");const yn=re.skeleton;yn&&(le.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ft.setValue(k,"boneTexture",yn.boneTexture,m)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Ft.setOptional(k,re,"batchingTexture"),Ft.setValue(k,"batchingTexture",re._matricesTexture,m));const fc=oe.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&le.isWebGL2===!0)&&Ee.update(re,oe,rr),(Ws||Ke.receiveShadow!==re.receiveShadow)&&(Ke.receiveShadow=re.receiveShadow,Ft.setValue(k,"receiveShadow",re.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(sr.envMap.value=Ve,sr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Ws&&(Ft.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&Xn(sr,uc),Ie&&ae.fog===!0&&ge.refreshFogUniforms(sr,Ie),ge.refreshMaterialUniforms(sr,ae,Q,K,R),ol.upload(k,Ur(Ke),sr,m)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ol.upload(k,Ur(Ke),sr,m),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(k,"center",re.center),Ft.setValue(k,"modelViewMatrix",re.modelViewMatrix),Ft.setValue(k,"normalMatrix",re.normalMatrix),Ft.setValue(k,"modelMatrix",re.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const yn=ae.uniformsGroups;for(let hc=0,Tv=yn.length;hc<Tv;hc++)if(le.isWebGL2){const Dh=yn[hc];me.update(Dh,rr),me.bind(Dh,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function Xn(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function lc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,q,oe){L.get(b.texture).__webglTexture=q,L.get(b.depthTexture).__webglTexture=oe;const ae=L.get(b);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,q){const oe=L.get(b);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,oe=0){T=b,P=q,C=oe;let ae=!0,re=null,Ie=!1,ze=!1;if(b){const Ve=L.get(b);Ve.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(k.FRAMEBUFFER,null),ae=!1):Ve.__webglFramebuffer===void 0?m.setupRenderTarget(b):Ve.__hasExternalTextures&&m.rebindTextures(b,L.get(b.texture).__webglTexture,L.get(b.depthTexture).__webglTexture);const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const We=L.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[q])?re=We[q][oe]:re=We[q],Ie=!0):le.isWebGL2&&b.samples>0&&m.useMultisampledRTT(b)===!1?re=L.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?re=We[oe]:re=We,A.copy(b.viewport),Z.copy(b.scissor),G=b.scissorTest}else A.copy(Y).multiplyScalar(Q).floor(),Z.copy(fe).multiplyScalar(Q).floor(),G=pe;if(B.bindFramebuffer(k.FRAMEBUFFER,re)&&le.drawBuffers&&ae&&B.drawBuffers(b,re),B.viewport(A),B.scissor(Z),B.setScissorTest(G),Ie){const Ve=L.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ve.__webglTexture,oe)}else if(ze){const Ve=L.get(b.texture),qe=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.__webglTexture,oe||0,qe)}H=-1},this.readRenderTargetPixels=function(b,q,oe,ae,re,Ie,ze){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=L.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){B.bindFramebuffer(k.FRAMEBUFFER,He);try{const Ve=b.texture,qe=Ve.format,We=Ve.type;if(qe!==Hn&&Ae.convert(qe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Go&&(J.has("EXT_color_buffer_half_float")||le.isWebGL2&&J.has("EXT_color_buffer_float"));if(We!==$i&&Ae.convert(We)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===ki&&(le.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ae&&oe>=0&&oe<=b.height-re&&k.readPixels(q,oe,ae,re,Ae.convert(qe),Ae.convert(We),Ie)}finally{const Ve=T!==null?L.get(T).__webglFramebuffer:null;B.bindFramebuffer(k.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(b,q,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(q.image.width*ae),Ie=Math.floor(q.image.height*ae);m.setTexture2D(q,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,b.x,b.y,re,Ie),B.unbindTexture()},this.copyTextureToTexture=function(b,q,oe,ae=0){const re=q.image.width,Ie=q.image.height,ze=Ae.convert(oe.format),He=Ae.convert(oe.type);m.setTexture2D(oe,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,oe.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,oe.unpackAlignment),q.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ae,b.x,b.y,re,Ie,ze,He,q.image.data):q.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ae,b.x,b.y,q.mipmaps[0].width,q.mipmaps[0].height,ze,q.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,ae,b.x,b.y,ze,He,q.image),ae===0&&oe.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(b,q,oe,ae,re=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=b.max.x-b.min.x+1,ze=b.max.y-b.min.y+1,He=b.max.z-b.min.z+1,Ve=Ae.convert(ae.format),qe=Ae.convert(ae.type);let We;if(ae.isData3DTexture)m.setTexture3D(ae,0),We=k.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)m.setTexture2DArray(ae,0),We=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ae.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ae.unpackAlignment);const Xe=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),un=k.getParameter(k.UNPACK_SKIP_PIXELS),Ct=k.getParameter(k.UNPACK_SKIP_ROWS),ti=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=oe.isCompressedTexture?oe.mipmaps[re]:oe.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),oe.isDataTexture||oe.isData3DTexture?k.texSubImage3D(We,re,q.x,q.y,q.z,Ie,ze,He,Ve,qe,ut.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(We,re,q.x,q.y,q.z,Ie,ze,He,Ve,ut.data)):k.texSubImage3D(We,re,q.x,q.y,q.z,Ie,ze,He,Ve,qe,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,Xe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,un),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ti),re===0&&ae.generateMipmaps&&k.generateMipmap(We),B.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?m.setTextureCube(b,0):b.isData3DTexture?m.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?m.setTexture2DArray(b,0):m.setTexture2D(b,0),B.unbindTexture()},this.resetState=function(){P=0,C=0,T=null,B.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Th?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Er:Y0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Er?bt:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sw extends mv{}sw.prototype.isWebGL1Renderer=!0;class ow extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ts extends ln{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],d=i[r+1]-f,v=(o-f)/d;return(r+v)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new _e:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new V,r=[],s=[],o=[],a=new V,l=new Mt;for(let v=0;v<=e;v++){const x=v/e;r[v]=this.getTangentAt(x,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(r[v-1],r[v]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(It(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(l.makeRotationAxis(a,x))}o[v].crossVectors(r[v],s[v])}if(n===!0){let v=Math.acos(It(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(v=-v);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],v*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rh extends ei{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new _e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,v=c-this.aY;l=d*f-v*h+this.aX,c=d*h+v*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aw extends Rh{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ph(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,v=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,v*=f,r(o,a,d,v)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Va=new V,mu=new Ph,gu=new Ph,vu=new Ph;class lw extends ei{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new V){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Va.subVectors(r[0],r[1]).add(r[0]),c=Va);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Va.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Va),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),v),y=Math.pow(h.distanceToSquared(d),v),g=Math.pow(d.distanceToSquared(f),v);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),mu.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,x,y,g),gu.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,x,y,g),vu.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,x,y,g)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),gu.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),vu.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return i.set(mu.calc(l),gu.calc(l),vu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function am(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function cw(t,e){const n=1-t;return n*n*e}function uw(t,e){return 2*(1-t)*t*e}function fw(t,e){return t*t*e}function Mo(t,e,n,i){return cw(t,e)+uw(t,n)+fw(t,i)}function hw(t,e){const n=1-t;return n*n*n*e}function dw(t,e){const n=1-t;return 3*n*n*t*e}function pw(t,e){return 3*(1-t)*t*t*e}function mw(t,e){return t*t*t*e}function Eo(t,e,n,i,r){return hw(t,e)+dw(t,n)+pw(t,i)+mw(t,r)}class gv extends ei{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Eo(e,r.x,s.x,o.x,a.x),Eo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gw extends ei{constructor(e=new V,n=new V,i=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new V){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Eo(e,r.x,s.x,o.x,a.x),Eo(e,r.y,s.y,o.y,a.y),Eo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vv extends ei{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vw extends ei{constructor(e=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new V){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _v extends ei{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Mo(e,r.x,s.x,o.x),Mo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _w extends ei{constructor(e=new V,n=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new V){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Mo(e,r.x,s.x,o.x),Mo(e,r.y,s.y,o.y),Mo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xv extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(am(a,l.x,c.x,f.x,h.x),am(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var lm=Object.freeze({__proto__:null,ArcCurve:aw,CatmullRomCurve3:lw,CubicBezierCurve:gv,CubicBezierCurve3:gw,EllipseCurve:Rh,LineCurve:vv,LineCurve3:vw,QuadraticBezierCurve:_v,QuadraticBezierCurve3:_w,SplineCurve:xv});class xw extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lm[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new lm[r.type]().fromJSON(r))}return this}}class Cs extends xw{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new vv(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new _v(this.currentPoint.clone(),new _e(e,n),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new gv(this.currentPoint.clone(),new _e(e,n),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new xv(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Rh(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class al extends Cs{constructor(e){super(e),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Cs().fromJSON(r))}return this}}const yw={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=yv(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,f,h,d,v;if(i&&(s=ww(t,e,s,n)),t.length>80*n){a=c=t[0],l=f=t[1];for(let x=n;x<r;x+=n)h=t[x],d=t[x+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>f&&(f=d);v=Math.max(c-a,f-l),v=v!==0?32767/v:0}return Xo(s,o,n,a,l,v,0),o}};function yv(t,e,n,i,r){let s,o;if(r===Ow(t,e,n,i)>0)for(s=e;s<n;s+=i)o=cm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=cm(s,t[s],t[s+1],o);return o&&sc(o,o.next)&&(jo(o),o=o.next),o}function Lr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(sc(n,n.next)||ht(n.prev,n,n.next)===0)){if(jo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Xo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&bw(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?Mw(t,i,r,s):Sw(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),jo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Ew(Lr(t),e,n),Xo(t,e,n,i,r,s,2)):o===2&&Tw(t,e,n,i,r,s):Xo(Lr(t),e,n,i,r,s,1);break}}}function Sw(t){const e=t.prev,n=t,i=t.next;if(ht(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,f=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,v=a>l?a>c?a:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=f&&x.x<=d&&x.y>=h&&x.y<=v&&_s(r,a,s,l,o,c,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Mw(t,e,n,i){const r=t.prev,s=t,o=t.next;if(ht(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,f=r.y,h=s.y,d=o.y,v=a<l?a<c?a:c:l<c?l:c,x=f<h?f<d?f:d:h<d?h:d,y=a>l?a>c?a:c:l>c?l:c,g=f>h?f>d?f:d:h>d?h:d,u=Af(v,x,e,n,i),_=Af(y,g,e,n,i);let p=t.prevZ,M=t.nextZ;for(;p&&p.z>=u&&M&&M.z<=_;){if(p.x>=v&&p.x<=y&&p.y>=x&&p.y<=g&&p!==r&&p!==o&&_s(a,f,l,h,c,d,p.x,p.y)&&ht(p.prev,p,p.next)>=0||(p=p.prevZ,M.x>=v&&M.x<=y&&M.y>=x&&M.y<=g&&M!==r&&M!==o&&_s(a,f,l,h,c,d,M.x,M.y)&&ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;p&&p.z>=u;){if(p.x>=v&&p.x<=y&&p.y>=x&&p.y<=g&&p!==r&&p!==o&&_s(a,f,l,h,c,d,p.x,p.y)&&ht(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;M&&M.z<=_;){if(M.x>=v&&M.x<=y&&M.y>=x&&M.y<=g&&M!==r&&M!==o&&_s(a,f,l,h,c,d,M.x,M.y)&&ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ew(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!sc(r,s)&&Sv(r,i,i.next,s)&&Yo(r,s)&&Yo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),jo(i),jo(i.next),i=t=s),i=i.next}while(i!==t);return Lr(i)}function Tw(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nw(o,a)){let l=Mv(o,a);o=Lr(o,o.next),l=Lr(l,l.next),Xo(o,e,n,i,r,s,0),Xo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function ww(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=yv(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Dw(c));for(r.sort(Aw),s=0;s<r.length;s++)n=Cw(r[s],n);return n}function Aw(t,e){return t.x-e.x}function Cw(t,e){const n=Rw(t,e);if(!n)return e;const i=Mv(n,t);return Lr(i,i.next),Lr(n,n.next)}function Rw(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let f=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&_s(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Yo(n,t)&&(h<f||h===f&&(n.x>r.x||n.x===r.x&&Pw(r,n)))&&(r=n,f=h)),n=n.next;while(n!==a);return r}function Pw(t,e){return ht(t.prev,t,e.prev)<0&&ht(e.next,t,t.next)<0}function bw(t,e,n,i){let r=t;do r.z===0&&(r.z=Af(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Lw(r)}function Lw(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Af(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Dw(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function _s(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Nw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Iw(t,e)&&(Yo(t,e)&&Yo(e,t)&&Uw(t,e)&&(ht(t.prev,t,e.prev)||ht(t,e.prev,e))||sc(t,e)&&ht(t.prev,t,t.next)>0&&ht(e.prev,e,e.next)>0)}function ht(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function sc(t,e){return t.x===e.x&&t.y===e.y}function Sv(t,e,n,i){const r=Wa(ht(t,e,n)),s=Wa(ht(t,e,i)),o=Wa(ht(n,i,t)),a=Wa(ht(n,i,e));return!!(r!==s&&o!==a||r===0&&Ga(t,n,e)||s===0&&Ga(t,i,e)||o===0&&Ga(n,t,i)||a===0&&Ga(n,e,i))}function Ga(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Wa(t){return t>0?1:t<0?-1:0}function Iw(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Sv(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Yo(t,e){return ht(t.prev,t,t.next)<0?ht(t,e,t.next)>=0&&ht(t,t.prev,e)>=0:ht(t,e,t.prev)<0||ht(t,t.next,e)<0}function Uw(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Mv(t,e){const n=new Cf(t.i,t.x,t.y),i=new Cf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function cm(t,e,n,i){const r=new Cf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Cf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ow(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class oc{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return oc.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];um(e),fm(i,e);let o=e.length;n.forEach(um);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,fm(i,n[l]);const a=yw.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function um(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function fm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class To extends Qn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new V,d=new V,v=[],x=[],y=[],g=[];for(let u=0;u<=i;u++){const _=[],p=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const C=P/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+p*a),h.y=e*Math.cos(o+p*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+p*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(C+M,1-p),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const p=f[u][_+1],M=f[u][_],P=f[u+1][_],C=f[u+1][_+1];(u!==0||o>0)&&v.push(p,M,C),(u!==i-1||l<Math.PI)&&v.push(M,P,C)}this.setIndex(v),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hm extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const dm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Fw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const v=c[h],x=c[h+1];if(v.global&&(v.lastIndex=0),v.test(f))return x}return null}}}const kw=new Fw;class bh{constructor(e){this.manager=e!==void 0?e:kw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class zw extends Error{constructor(e,n){super(e),this.response=n}}class Bw extends bh{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dm.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(ai[e]!==void 0){ai[e].push({onLoad:n,onProgress:i,onError:r});return}ai[e]=[],ai[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=ai[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),v=d?parseInt(d):0,x=v!==0;let y=0;const g=new ReadableStream({start(u){_();function _(){h.read().then(({done:p,value:M})=>{if(p)u.close();else{y+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:v});for(let C=0,T=f.length;C<T;C++){const H=f[C];H.onProgress&&H.onProgress(P)}u.enqueue(M),_()}})}}});return new Response(g)}else throw new zw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,v=new TextDecoder(d);return c.arrayBuffer().then(x=>v.decode(x))}}}).then(c=>{dm.add(e,c);const f=ai[e];delete ai[e];for(let h=0,d=f.length;h<d;h++){const v=f[h];v.onLoad&&v.onLoad(c)}}).catch(c=>{const f=ai[e];if(f===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,d=f.length;h<d;h++){const v=f[h];v.onError&&v.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ev extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const _u=new Mt,pm=new V,mm=new V;class Hw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),_u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vw extends Hw{constructor(){super(new lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gm extends Ev{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Vw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gw extends Ev{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _m=new _e;class Ww{constructor(e=new _e(1/0,1/0),n=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_m.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_m).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ur{constructor(){this.type="ShapePath",this.color=new Qe,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new Cs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(u){const _=[];for(let p=0,M=u.length;p<M;p++){const P=u[p],C=new al;C.curves=P.curves,_.push(C)}return _}function i(u,_){const p=_.length;let M=!1;for(let P=p-1,C=0;C<p;P=C++){let T=_[P],H=_[C],E=H.x-T.x,A=H.y-T.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(T=_[C],E=-E,H=_[P],A=-A),u.y<T.y||u.y>H.y)continue;if(u.y===T.y){if(u.x===T.x)return!0}else{const Z=A*(u.x-T.x)-E*(u.y-T.y);if(Z===0)return!0;if(Z<0)continue;M=!M}}else{if(u.y!==T.y)continue;if(H.x<=u.x&&u.x<=T.x||T.x<=u.x&&u.x<=H.x)return!0}}return M}const r=oc.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new al,l.curves=a.curves,c.push(l),c;let f=!r(s[0].getPoints());f=e?!f:f;const h=[],d=[];let v=[],x=0,y;d[x]=void 0,v[x]=[];for(let u=0,_=s.length;u<_;u++)a=s[u],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!f&&d[x]&&x++,d[x]={s:new al,p:y},d[x].s.curves=a.curves,f&&x++,v[x]=[]):v[x].push({h:a,p:y[0]});if(!d[0])return n(s);if(d.length>1){let u=!1,_=0;for(let p=0,M=d.length;p<M;p++)h[p]=[];for(let p=0,M=d.length;p<M;p++){const P=v[p];for(let C=0;C<P.length;C++){const T=P[C];let H=!0;for(let E=0;E<d.length;E++)i(T.p,d[E].p)&&(p!==E&&_++,H?(H=!1,h[E].push(T)):u=!0);H&&h[p].push(T)}}_>0&&u===!1&&(v=h)}let g;for(let u=0,_=d.length;u<_;u++){l=d[u].s,c.push(l),g=v[u];for(let p=0,M=g.length;p<M;p++)l.holes.push(g[p].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);const xm={type:"change"},xu={type:"start"},ym={type:"end"},Xa=new Q0,Sm=new Di,Xw=Math.cos(70*Qy.DEG2RAD);class Yw extends Ir{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Pe),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(xm),i.update(),s=r.NONE},this.update=function(){const D=new V,me=new br().setFromUnitVectors(e.up,new V(0,1,0)),Le=me.clone().invert(),be=new V,ve=new br,F=new V,Se=2*Math.PI;return function(ke=null){const Oe=i.object.position;D.copy(Oe).sub(i.target),D.applyQuaternion(me),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&G(A(ke)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let je=i.minAzimuthAngle,$e=i.maxAzimuthAngle;isFinite(je)&&isFinite($e)&&(je<-Math.PI?je+=Se:je>Math.PI&&(je-=Se),$e<-Math.PI?$e+=Se:$e>Math.PI&&($e-=Se),je<=$e?a.theta=Math.max(je,Math.min($e,a.theta)):a.theta=a.theta>(je+$e)/2?Math.max(je,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Le),Oe.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let at=!1;if(i.zoomToCursor&&C){let ct=null;if(i.object.isPerspectiveCamera){const Je=D.length();ct=Y(Je*c);const mt=Je-ct;i.object.position.addScaledVector(M,mt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Je=new V(P.x,P.y,0);Je.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),at=!0;const mt=new V(P.x,P.y,0);mt.unproject(i.object),i.object.position.sub(mt).add(Je),i.object.updateMatrixWorld(),ct=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ct).add(i.object.position):(Xa.origin.copy(i.object.position),Xa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Xa.direction))<Xw?e.lookAt(i.target):(Sm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Xa.intersectPlane(Sm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),at=!0);return c=1,C=!1,at||be.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o||F.distanceToSquared(i.target)>0?(i.dispatchEvent(xm),be.copy(i.object.position),ve.copy(i.object.quaternion),F.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Be),i.domElement.removeEventListener("pointerdown",m),i.domElement.removeEventListener("pointercancel",O),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",O),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Pe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new vm,l=new vm;let c=1;const f=new V,h=new _e,d=new _e,v=new _e,x=new _e,y=new _e,g=new _e,u=new _e,_=new _e,p=new _e,M=new V,P=new _e;let C=!1;const T=[],H={};let E=!1;function A(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function Z(D){const me=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*me)}function G(D){l.theta-=D}function he(D){l.phi-=D}const z=function(){const D=new V;return function(Le,be){D.setFromMatrixColumn(be,0),D.multiplyScalar(-Le),f.add(D)}}(),$=function(){const D=new V;return function(Le,be){i.screenSpacePanning===!0?D.setFromMatrixColumn(be,1):(D.setFromMatrixColumn(be,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Le),f.add(D)}}(),K=function(){const D=new V;return function(Le,be){const ve=i.domElement;if(i.object.isPerspectiveCamera){const F=i.object.position;D.copy(F).sub(i.target);let Se=D.length();Se*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Le*Se/ve.clientHeight,i.object.matrix),$(2*be*Se/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Le*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),$(be*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(D,me){if(!i.zoomToCursor)return;C=!0;const Le=i.domElement.getBoundingClientRect(),be=D-Le.left,ve=me-Le.top,F=Le.width,Se=Le.height;P.x=be/F*2-1,P.y=-(ve/Se)*2+1,M.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function fe(D){h.set(D.clientX,D.clientY)}function pe(D){W(D.clientX,D.clientX),u.set(D.clientX,D.clientY)}function se(D){x.set(D.clientX,D.clientY)}function U(D){d.set(D.clientX,D.clientY),v.subVectors(d,h).multiplyScalar(i.rotateSpeed);const me=i.domElement;G(2*Math.PI*v.x/me.clientHeight),he(2*Math.PI*v.y/me.clientHeight),h.copy(d),i.update()}function N(D){_.set(D.clientX,D.clientY),p.subVectors(_,u),p.y>0?Q(Z(p.y)):p.y<0&&I(Z(p.y)),u.copy(_),i.update()}function R(D){y.set(D.clientX,D.clientY),g.subVectors(y,x).multiplyScalar(i.panSpeed),K(g.x,g.y),x.copy(y),i.update()}function w(D){W(D.clientX,D.clientY),D.deltaY<0?I(Z(D.deltaY)):D.deltaY>0&&Q(Z(D.deltaY)),i.update()}function te(D){let me=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),me=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),me=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),me=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),me=!0;break}me&&(D.preventDefault(),i.update())}function ue(D){if(T.length===1)h.set(D.pageX,D.pageY);else{const me=Ae(D),Le=.5*(D.pageX+me.x),be=.5*(D.pageY+me.y);h.set(Le,be)}}function X(D){if(T.length===1)x.set(D.pageX,D.pageY);else{const me=Ae(D),Le=.5*(D.pageX+me.x),be=.5*(D.pageY+me.y);x.set(Le,be)}}function de(D){const me=Ae(D),Le=D.pageX-me.x,be=D.pageY-me.y,ve=Math.sqrt(Le*Le+be*be);u.set(0,ve)}function k(D){i.enableZoom&&de(D),i.enablePan&&X(D)}function Ce(D){i.enableZoom&&de(D),i.enableRotate&&ue(D)}function J(D){if(T.length==1)d.set(D.pageX,D.pageY);else{const Le=Ae(D),be=.5*(D.pageX+Le.x),ve=.5*(D.pageY+Le.y);d.set(be,ve)}v.subVectors(d,h).multiplyScalar(i.rotateSpeed);const me=i.domElement;G(2*Math.PI*v.x/me.clientHeight),he(2*Math.PI*v.y/me.clientHeight),h.copy(d)}function le(D){if(T.length===1)y.set(D.pageX,D.pageY);else{const me=Ae(D),Le=.5*(D.pageX+me.x),be=.5*(D.pageY+me.y);y.set(Le,be)}g.subVectors(y,x).multiplyScalar(i.panSpeed),K(g.x,g.y),x.copy(y)}function B(D){const me=Ae(D),Le=D.pageX-me.x,be=D.pageY-me.y,ve=Math.sqrt(Le*Le+be*be);_.set(0,ve),p.set(0,Math.pow(_.y/u.y,i.zoomSpeed)),Q(p.y),u.copy(_);const F=(D.pageX+me.x)*.5,Se=(D.pageY+me.y)*.5;W(F,Se)}function j(D){i.enableZoom&&B(D),i.enablePan&&le(D)}function L(D){i.enableZoom&&B(D),i.enableRotate&&J(D)}function m(D){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",O)),Ee(D),D.pointerType==="touch"?Ne(D):ee(D))}function S(D){i.enabled!==!1&&(D.pointerType==="touch"?ce(D):ne(D))}function O(D){De(D),T.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",O)),i.dispatchEvent(ym),s=r.NONE}function ee(D){let me;switch(D.button){case 0:me=i.mouseButtons.LEFT;break;case 1:me=i.mouseButtons.MIDDLE;break;case 2:me=i.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Fr.DOLLY:if(i.enableZoom===!1)return;pe(D),s=r.DOLLY;break;case Fr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;se(D),s=r.PAN}else{if(i.enableRotate===!1)return;fe(D),s=r.ROTATE}break;case Fr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;fe(D),s=r.ROTATE}else{if(i.enablePan===!1)return;se(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(xu)}function ne(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;U(D);break;case r.DOLLY:if(i.enableZoom===!1)return;N(D);break;case r.PAN:if(i.enablePan===!1)return;R(D);break}}function ie(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(xu),w(xe(D)),i.dispatchEvent(ym))}function xe(D){const me=D.deltaMode,Le={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(me){case 1:Le.deltaY*=16;break;case 2:Le.deltaY*=100;break}return D.ctrlKey&&!E&&(Le.deltaY*=10),Le}function ge(D){D.key==="Control"&&(E=!0,document.addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(D){D.key==="Control"&&(E=!1,document.removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function Pe(D){i.enabled===!1||i.enablePan===!1||te(D)}function Ne(D){switch(Te(D),T.length){case 1:switch(i.touches.ONE){case kr.ROTATE:if(i.enableRotate===!1)return;ue(D),s=r.TOUCH_ROTATE;break;case kr.PAN:if(i.enablePan===!1)return;X(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case kr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(D),s=r.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(xu)}function ce(D){switch(Te(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;J(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(D),i.update();break;default:s=r.NONE}}function Be(D){i.enabled!==!1&&D.preventDefault()}function Ee(D){T.push(D.pointerId)}function De(D){delete H[D.pointerId];for(let me=0;me<T.length;me++)if(T[me]==D.pointerId){T.splice(me,1);return}}function Te(D){let me=H[D.pointerId];me===void 0&&(me=new _e,H[D.pointerId]=me),me.set(D.pageX,D.pageY)}function Ae(D){const me=D.pointerId===T[0]?T[1]:T[0];return H[me]}i.domElement.addEventListener("contextmenu",Be),i.domElement.addEventListener("pointerdown",m),i.domElement.addEventListener("pointercancel",O),i.domElement.addEventListener("wheel",ie,{passive:!1}),document.addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}const jw=bt;class kl extends bh{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new Bw(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(U,N){if(U.nodeType!==1)return;const R=M(U);let w=!1,te=null;switch(U.nodeName){case"svg":N=x(U,N);break;case"style":s(U);break;case"g":N=x(U,N);break;case"path":N=x(U,N),U.hasAttribute("d")&&(te=r(U));break;case"rect":N=x(U,N),te=l(U);break;case"polygon":N=x(U,N),te=c(U);break;case"polyline":N=x(U,N),te=f(U);break;case"circle":N=x(U,N),te=h(U);break;case"ellipse":N=x(U,N),te=d(U);break;case"line":N=x(U,N),te=v(U);break;case"defs":w=!0;break;case"use":N=x(U,N);const de=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),k=U.viewportElement.getElementById(de);k?i(k,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}te&&(N.fill!==void 0&&N.fill!=="none"&&te.color.setStyle(N.fill,jw),C(te,fe),G.push(te),te.userData={node:U,style:N});const ue=U.childNodes;for(let X=0;X<ue.length;X++){const de=ue[X];w&&de.nodeName!=="style"&&de.nodeName!=="defs"||i(de,N)}R&&(z.pop(),z.length>0?fe.copy(z[z.length-1]):fe.identity())}function r(U){const N=new ur,R=new _e,w=new _e,te=new _e;let ue=!0,X=!1;const de=U.getAttribute("d");if(de===""||de==="none")return null;const k=de.match(/[a-df-z][^a-df-z]*/ig);for(let Ce=0,J=k.length;Ce<J;Ce++){const le=k[Ce],B=le.charAt(0),j=le.slice(1).trim();ue===!0&&(X=!0,ue=!1);let L;switch(B){case"M":L=g(j);for(let m=0,S=L.length;m<S;m+=2)R.x=L[m+0],R.y=L[m+1],w.x=R.x,w.y=R.y,m===0?N.moveTo(R.x,R.y):N.lineTo(R.x,R.y),m===0&&te.copy(R);break;case"H":L=g(j);for(let m=0,S=L.length;m<S;m++)R.x=L[m],w.x=R.x,w.y=R.y,N.lineTo(R.x,R.y),m===0&&X===!0&&te.copy(R);break;case"V":L=g(j);for(let m=0,S=L.length;m<S;m++)R.y=L[m],w.x=R.x,w.y=R.y,N.lineTo(R.x,R.y),m===0&&X===!0&&te.copy(R);break;case"L":L=g(j);for(let m=0,S=L.length;m<S;m+=2)R.x=L[m+0],R.y=L[m+1],w.x=R.x,w.y=R.y,N.lineTo(R.x,R.y),m===0&&X===!0&&te.copy(R);break;case"C":L=g(j);for(let m=0,S=L.length;m<S;m+=6)N.bezierCurveTo(L[m+0],L[m+1],L[m+2],L[m+3],L[m+4],L[m+5]),w.x=L[m+2],w.y=L[m+3],R.x=L[m+4],R.y=L[m+5],m===0&&X===!0&&te.copy(R);break;case"S":L=g(j);for(let m=0,S=L.length;m<S;m+=4)N.bezierCurveTo(y(R.x,w.x),y(R.y,w.y),L[m+0],L[m+1],L[m+2],L[m+3]),w.x=L[m+0],w.y=L[m+1],R.x=L[m+2],R.y=L[m+3],m===0&&X===!0&&te.copy(R);break;case"Q":L=g(j);for(let m=0,S=L.length;m<S;m+=4)N.quadraticCurveTo(L[m+0],L[m+1],L[m+2],L[m+3]),w.x=L[m+0],w.y=L[m+1],R.x=L[m+2],R.y=L[m+3],m===0&&X===!0&&te.copy(R);break;case"T":L=g(j);for(let m=0,S=L.length;m<S;m+=2){const O=y(R.x,w.x),ee=y(R.y,w.y);N.quadraticCurveTo(O,ee,L[m+0],L[m+1]),w.x=O,w.y=ee,R.x=L[m+0],R.y=L[m+1],m===0&&X===!0&&te.copy(R)}break;case"A":L=g(j,[3,4],7);for(let m=0,S=L.length;m<S;m+=7){if(L[m+5]==R.x&&L[m+6]==R.y)continue;const O=R.clone();R.x=L[m+5],R.y=L[m+6],w.x=R.x,w.y=R.y,o(N,L[m],L[m+1],L[m+2],L[m+3],L[m+4],O,R),m===0&&X===!0&&te.copy(R)}break;case"m":L=g(j);for(let m=0,S=L.length;m<S;m+=2)R.x+=L[m+0],R.y+=L[m+1],w.x=R.x,w.y=R.y,m===0?N.moveTo(R.x,R.y):N.lineTo(R.x,R.y),m===0&&te.copy(R);break;case"h":L=g(j);for(let m=0,S=L.length;m<S;m++)R.x+=L[m],w.x=R.x,w.y=R.y,N.lineTo(R.x,R.y),m===0&&X===!0&&te.copy(R);break;case"v":L=g(j);for(let m=0,S=L.length;m<S;m++)R.y+=L[m],w.x=R.x,w.y=R.y,N.lineTo(R.x,R.y),m===0&&X===!0&&te.copy(R);break;case"l":L=g(j);for(let m=0,S=L.length;m<S;m+=2)R.x+=L[m+0],R.y+=L[m+1],w.x=R.x,w.y=R.y,N.lineTo(R.x,R.y),m===0&&X===!0&&te.copy(R);break;case"c":L=g(j);for(let m=0,S=L.length;m<S;m+=6)N.bezierCurveTo(R.x+L[m+0],R.y+L[m+1],R.x+L[m+2],R.y+L[m+3],R.x+L[m+4],R.y+L[m+5]),w.x=R.x+L[m+2],w.y=R.y+L[m+3],R.x+=L[m+4],R.y+=L[m+5],m===0&&X===!0&&te.copy(R);break;case"s":L=g(j);for(let m=0,S=L.length;m<S;m+=4)N.bezierCurveTo(y(R.x,w.x),y(R.y,w.y),R.x+L[m+0],R.y+L[m+1],R.x+L[m+2],R.y+L[m+3]),w.x=R.x+L[m+0],w.y=R.y+L[m+1],R.x+=L[m+2],R.y+=L[m+3],m===0&&X===!0&&te.copy(R);break;case"q":L=g(j);for(let m=0,S=L.length;m<S;m+=4)N.quadraticCurveTo(R.x+L[m+0],R.y+L[m+1],R.x+L[m+2],R.y+L[m+3]),w.x=R.x+L[m+0],w.y=R.y+L[m+1],R.x+=L[m+2],R.y+=L[m+3],m===0&&X===!0&&te.copy(R);break;case"t":L=g(j);for(let m=0,S=L.length;m<S;m+=2){const O=y(R.x,w.x),ee=y(R.y,w.y);N.quadraticCurveTo(O,ee,R.x+L[m+0],R.y+L[m+1]),w.x=O,w.y=ee,R.x=R.x+L[m+0],R.y=R.y+L[m+1],m===0&&X===!0&&te.copy(R)}break;case"a":L=g(j,[3,4],7);for(let m=0,S=L.length;m<S;m+=7){if(L[m+5]==0&&L[m+6]==0)continue;const O=R.clone();R.x+=L[m+5],R.y+=L[m+6],w.x=R.x,w.y=R.y,o(N,L[m],L[m+1],L[m+2],L[m+3],L[m+4],O,R),m===0&&X===!0&&te.copy(R)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(R.copy(te),N.currentPath.currentPoint.copy(R),ue=!0);break;default:console.warn(le)}X=!1}return N}function s(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let N=0;N<U.sheet.cssRules.length;N++){const R=U.sheet.cssRules[N];if(R.type!==1)continue;const w=R.selectorText.split(/,/gm).filter(Boolean).map(te=>te.trim());for(let te=0;te<w.length;te++){const ue=Object.fromEntries(Object.entries(R.style).filter(([,X])=>X!==""));he[w[te]]=Object.assign(he[w[te]]||{},ue)}}}function o(U,N,R,w,te,ue,X,de){if(N==0||R==0){U.lineTo(de.x,de.y);return}w=w*Math.PI/180,N=Math.abs(N),R=Math.abs(R);const k=(X.x-de.x)/2,Ce=(X.y-de.y)/2,J=Math.cos(w)*k+Math.sin(w)*Ce,le=-Math.sin(w)*k+Math.cos(w)*Ce;let B=N*N,j=R*R;const L=J*J,m=le*le,S=L/B+m/j;if(S>1){const ce=Math.sqrt(S);N=ce*N,R=ce*R,B=N*N,j=R*R}const O=B*m+j*L,ee=(B*j-O)/O;let ne=Math.sqrt(Math.max(0,ee));te===ue&&(ne=-ne);const ie=ne*N*le/R,xe=-ne*R*J/N,ge=Math.cos(w)*ie-Math.sin(w)*xe+(X.x+de.x)/2,Me=Math.sin(w)*ie+Math.cos(w)*xe+(X.y+de.y)/2,Pe=a(1,0,(J-ie)/N,(le-xe)/R),Ne=a((J-ie)/N,(le-xe)/R,(-J-ie)/N,(-le-xe)/R)%(Math.PI*2);U.currentPath.absellipse(ge,Me,N,R,Pe,Pe+Ne,ue===0,w)}function a(U,N,R,w){const te=U*R+N*w,ue=Math.sqrt(U*U+N*N)*Math.sqrt(R*R+w*w);let X=Math.acos(Math.max(-1,Math.min(1,te/ue)));return U*w-N*R<0&&(X=-X),X}function l(U){const N=p(U.getAttribute("x")||0),R=p(U.getAttribute("y")||0),w=p(U.getAttribute("rx")||U.getAttribute("ry")||0),te=p(U.getAttribute("ry")||U.getAttribute("rx")||0),ue=p(U.getAttribute("width")),X=p(U.getAttribute("height")),de=1-.551915024494,k=new ur;return k.moveTo(N+w,R),k.lineTo(N+ue-w,R),(w!==0||te!==0)&&k.bezierCurveTo(N+ue-w*de,R,N+ue,R+te*de,N+ue,R+te),k.lineTo(N+ue,R+X-te),(w!==0||te!==0)&&k.bezierCurveTo(N+ue,R+X-te*de,N+ue-w*de,R+X,N+ue-w,R+X),k.lineTo(N+w,R+X),(w!==0||te!==0)&&k.bezierCurveTo(N+w*de,R+X,N,R+X-te*de,N,R+X-te),k.lineTo(N,R+te),(w!==0||te!==0)&&k.bezierCurveTo(N,R+te*de,N+w*de,R,N+w,R),k}function c(U){function N(ue,X,de){const k=p(X),Ce=p(de);te===0?w.moveTo(k,Ce):w.lineTo(k,Ce),te++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new ur;let te=0;return U.getAttribute("points").replace(R,N),w.currentPath.autoClose=!0,w}function f(U){function N(ue,X,de){const k=p(X),Ce=p(de);te===0?w.moveTo(k,Ce):w.lineTo(k,Ce),te++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new ur;let te=0;return U.getAttribute("points").replace(R,N),w.currentPath.autoClose=!1,w}function h(U){const N=p(U.getAttribute("cx")||0),R=p(U.getAttribute("cy")||0),w=p(U.getAttribute("r")||0),te=new Cs;te.absarc(N,R,w,0,Math.PI*2);const ue=new ur;return ue.subPaths.push(te),ue}function d(U){const N=p(U.getAttribute("cx")||0),R=p(U.getAttribute("cy")||0),w=p(U.getAttribute("rx")||0),te=p(U.getAttribute("ry")||0),ue=new Cs;ue.absellipse(N,R,w,te,0,Math.PI*2);const X=new ur;return X.subPaths.push(ue),X}function v(U){const N=p(U.getAttribute("x1")||0),R=p(U.getAttribute("y1")||0),w=p(U.getAttribute("x2")||0),te=p(U.getAttribute("y2")||0),ue=new ur;return ue.moveTo(N,R),ue.lineTo(w,te),ue.currentPath.autoClose=!1,ue}function x(U,N){N=Object.assign({},N);let R={};if(U.hasAttribute("class")){const X=U.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<X.length;de++)R=Object.assign(R,he["."+X[de]])}U.hasAttribute("id")&&(R=Object.assign(R,he["#"+U.getAttribute("id")]));function w(X,de,k){k===void 0&&(k=function(J){return J.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),J}),U.hasAttribute(X)&&(N[de]=k(U.getAttribute(X))),R[X]&&(N[de]=k(R[X])),U.style&&U.style[X]!==""&&(N[de]=k(U.style[X]))}function te(X){return Math.max(0,Math.min(1,p(X)))}function ue(X){return Math.max(0,p(X))}return w("fill","fill"),w("fill-opacity","fillOpacity",te),w("fill-rule","fillRule"),w("opacity","opacity",te),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",te),w("stroke-width","strokeWidth",ue),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ue),w("visibility","visibility"),N}function y(U,N){return U-(N-U)}function g(U,N,R){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);const w={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},te=0,ue=1,X=2,de=3;let k=te,Ce=!0,J="",le="";const B=[];function j(O,ee,ne){const ie=new SyntaxError('Unexpected character "'+O+'" at index '+ee+".");throw ie.partial=ne,ie}function L(){J!==""&&(le===""?B.push(Number(J)):B.push(Number(J)*Math.pow(10,Number(le)))),J="",le=""}let m;const S=U.length;for(let O=0;O<S;O++){if(m=U[O],Array.isArray(N)&&N.includes(B.length%R)&&w.FLAGS.test(m)){k=ue,J=m,L();continue}if(k===te){if(w.WHITESPACE.test(m))continue;if(w.DIGIT.test(m)||w.SIGN.test(m)){k=ue,J=m;continue}if(w.POINT.test(m)){k=X,J=m;continue}w.COMMA.test(m)&&(Ce&&j(m,O,B),Ce=!0)}if(k===ue){if(w.DIGIT.test(m)){J+=m;continue}if(w.POINT.test(m)){J+=m,k=X;continue}if(w.EXP.test(m)){k=de;continue}w.SIGN.test(m)&&J.length===1&&w.SIGN.test(J[0])&&j(m,O,B)}if(k===X){if(w.DIGIT.test(m)){J+=m;continue}if(w.EXP.test(m)){k=de;continue}w.POINT.test(m)&&J[J.length-1]==="."&&j(m,O,B)}if(k===de){if(w.DIGIT.test(m)){le+=m;continue}if(w.SIGN.test(m)){if(le===""){le+=m;continue}le.length===1&&w.SIGN.test(le)&&j(m,O,B)}}w.WHITESPACE.test(m)?(L(),k=te,Ce=!1):w.COMMA.test(m)?(L(),k=te,Ce=!0):w.SIGN.test(m)?(L(),k=ue,J=m):w.POINT.test(m)?(L(),k=X,J=m):j(m,O,B)}return L(),B}const u=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function p(U){let N="px";if(typeof U=="string"||U instanceof String)for(let w=0,te=u.length;w<te;w++){const ue=u[w];if(U.endsWith(ue)){N=ue,U=U.substring(0,U.length-ue.length);break}}let R;return N==="px"&&n.defaultUnit!=="px"?R=_.in[n.defaultUnit]/n.defaultDPI:(R=_[N][n.defaultUnit],R<0&&(R=_[N].in*n.defaultDPI)),R*parseFloat(U)}function M(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;const N=P(U);return z.length>0&&N.premultiply(z[z.length-1]),fe.copy(N),z.push(N),N}function P(U){const N=new Ge,R=$;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){const w=p(U.getAttribute("x")),te=p(U.getAttribute("y"));N.translate(w,te)}if(U.hasAttribute("transform")){const w=U.getAttribute("transform").split(")");for(let te=w.length-1;te>=0;te--){const ue=w[te].trim();if(ue==="")continue;const X=ue.indexOf("("),de=ue.length;if(X>0&&X<de){const k=ue.slice(0,X),Ce=g(ue.slice(X+1));switch(R.identity(),k){case"translate":if(Ce.length>=1){const J=Ce[0];let le=0;Ce.length>=2&&(le=Ce[1]),R.translate(J,le)}break;case"rotate":if(Ce.length>=1){let J=0,le=0,B=0;J=Ce[0]*Math.PI/180,Ce.length>=3&&(le=Ce[1],B=Ce[2]),K.makeTranslation(-le,-B),Q.makeRotation(J),I.multiplyMatrices(Q,K),K.makeTranslation(le,B),R.multiplyMatrices(K,I)}break;case"scale":if(Ce.length>=1){const J=Ce[0];let le=J;Ce.length>=2&&(le=Ce[1]),R.scale(J,le)}break;case"skewX":Ce.length===1&&R.set(1,Math.tan(Ce[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Ce.length===1&&R.set(1,0,0,Math.tan(Ce[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Ce.length===6&&R.set(Ce[0],Ce[2],Ce[4],Ce[1],Ce[3],Ce[5],0,0,1);break}}N.premultiply(R)}}return N}function C(U,N){function R(X){Y.set(X.x,X.y,1).applyMatrix3(N),X.set(Y.x,Y.y)}function w(X){const de=X.xRadius,k=X.yRadius,Ce=Math.cos(X.aRotation),J=Math.sin(X.aRotation),le=new V(de*Ce,de*J,0),B=new V(-k*J,k*Ce,0),j=le.applyMatrix3(N),L=B.applyMatrix3(N),m=$.set(j.x,L.x,0,j.y,L.y,0,0,0,1),S=K.copy(m).invert(),ne=Q.copy(S).transpose().multiply(S).elements,ie=Z(ne[0],ne[1],ne[4]),xe=Math.sqrt(ie.rt1),ge=Math.sqrt(ie.rt2);if(X.xRadius=1/xe,X.yRadius=1/ge,X.aRotation=Math.atan2(ie.sn,ie.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Pe=K.set(xe,0,0,0,ge,0,0,0,1),Ne=Q.set(ie.cs,ie.sn,0,-ie.sn,ie.cs,0,0,0,1),ce=Pe.multiply(Ne).multiply(m),Be=Ee=>{const{x:De,y:Te}=new V(Math.cos(Ee),Math.sin(Ee),0).applyMatrix3(ce);return Math.atan2(Te,De)};X.aStartAngle=Be(X.aStartAngle),X.aEndAngle=Be(X.aEndAngle),T(N)&&(X.aClockwise=!X.aClockwise)}}function te(X){const de=E(N),k=A(N);X.xRadius*=de,X.yRadius*=k;const Ce=de>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);X.aRotation+=Ce,T(N)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ue=U.subPaths;for(let X=0,de=ue.length;X<de;X++){const Ce=ue[X].curves;for(let J=0;J<Ce.length;J++){const le=Ce[J];le.isLineCurve?(R(le.v1),R(le.v2)):le.isCubicBezierCurve?(R(le.v0),R(le.v1),R(le.v2),R(le.v3)):le.isQuadraticBezierCurve?(R(le.v0),R(le.v1),R(le.v2)):le.isEllipseCurve&&(W.set(le.aX,le.aY),R(W),le.aX=W.x,le.aY=W.y,H(N)?w(le):te(le))}}}function T(U){const N=U.elements;return N[0]*N[4]-N[1]*N[3]<0}function H(U){const N=U.elements,R=N[0]*N[3]+N[1]*N[4];if(R===0)return!1;const w=E(U),te=A(U);return Math.abs(R/(w*te))>Number.EPSILON}function E(U){const N=U.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function A(U){const N=U.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function Z(U,N,R){let w,te,ue,X,de;const k=U+R,Ce=U-R,J=Math.sqrt(Ce*Ce+4*N*N);return k>0?(w=.5*(k+J),de=1/w,te=U*de*R-N*de*N):k<0?te=.5*(k-J):(w=.5*J,te=-.5*J),Ce>0?ue=Ce+J:ue=Ce-J,Math.abs(ue)>2*Math.abs(N)?(de=-2*N/ue,X=1/Math.sqrt(1+de*de),ue=de*X):Math.abs(N)===0?(ue=1,X=0):(de=-.5*ue/N,ue=1/Math.sqrt(1+de*de),X=de*ue),Ce>0&&(de=ue,ue=-X,X=de),{rt1:w,rt2:te,cs:ue,sn:X}}const G=[],he={},z=[],$=new Ge,K=new Ge,Q=new Ge,I=new Ge,W=new _e,Y=new V,fe=new Ge,pe=new DOMParser().parseFromString(e,"image/svg+xml");return i(pe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:G,xml:pe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(y,g,u,_){const p=y.x,M=g.x,P=u.x,C=_.x,T=y.y,H=g.y,E=u.y,A=_.y,Z=(C-P)*(T-E)-(A-E)*(p-P),G=(M-p)*(T-E)-(H-T)*(p-P),he=(A-E)*(M-p)-(C-P)*(H-T),z=Z/he,$=G/he;if(he===0&&Z!==0||z<=0||z>=1||$<0||$>1)return null;if(Z===0&&he===0){for(let K=0;K<2;K++)if(o(K===0?u:_,y,g),r.loc==i.ORIGIN){const Q=K===0?u:_;return{x:Q.x,y:Q.y,t:r.t}}else if(r.loc==i.BETWEEN){const Q=+(p+r.t*(M-p)).toPrecision(10),I=+(T+r.t*(H-T)).toPrecision(10);return{x:Q,y:I,t:r.t}}return null}else{for(let I=0;I<2;I++)if(o(I===0?u:_,y,g),r.loc==i.ORIGIN){const W=I===0?u:_;return{x:W.x,y:W.y,t:r.t}}const K=+(p+z*(M-p)).toPrecision(10),Q=+(T+z*(H-T)).toPrecision(10);return{x:K,y:Q,t:z}}}function o(y,g,u){const _=u.x-g.x,p=u.y-g.y,M=y.x-g.x,P=y.y-g.y,C=_*P-M*p;if(y.x===g.x&&y.y===g.y){r.loc=i.ORIGIN,r.t=0;return}if(y.x===u.x&&y.y===u.y){r.loc=i.DESTINATION,r.t=1;return}if(C<-Number.EPSILON){r.loc=i.LEFT;return}if(C>Number.EPSILON){r.loc=i.RIGHT;return}if(_*M<0||p*P<0){r.loc=i.BEHIND;return}if(Math.sqrt(_*_+p*p)<Math.sqrt(M*M+P*P)){r.loc=i.BEYOND;return}let T;_!==0?T=M/_:T=P/p,r.loc=i.BETWEEN,r.t=T}function a(y,g){const u=[],_=[];for(let p=1;p<y.length;p++){const M=y[p-1],P=y[p];for(let C=1;C<g.length;C++){const T=g[C-1],H=g[C],E=s(M,P,T,H);E!==null&&u.find(A=>A.t<=E.t+Number.EPSILON&&A.t>=E.t-Number.EPSILON)===void 0&&(u.push(E),_.push(new _e(E.x,E.y)))}}return _}function l(y,g,u){const _=new _e;g.getCenter(_);const p=[];return u.forEach(M=>{M.boundingBox.containsPoint(_)&&a(y,M.points).forEach(C=>{p.push({identifier:M.identifier,isCW:M.isCW,point:C})})}),p.sort((M,P)=>M.point.x-P.point.x),p}function c(y,g,u,_,p){(p==null||p==="")&&(p="nonzero");const M=new _e;y.boundingBox.getCenter(M);const P=[new _e(u,M.y),new _e(_,M.y)],C=l(P,y.boundingBox,g);C.sort((G,he)=>G.point.x-he.point.x);const T=[],H=[];C.forEach(G=>{G.identifier===y.identifier?T.push(G):H.push(G)});const E=T[0].point.x,A=[];let Z=0;for(;Z<H.length&&H[Z].point.x<E;)A.length>0&&A[A.length-1]===H[Z].identifier?A.pop():A.push(H[Z].identifier),Z++;if(A.push(y.identifier),p==="evenodd"){const G=A.length%2===0,he=A[A.length-2];return{identifier:y.identifier,isHole:G,for:he}}else if(p==="nonzero"){let G=!0,he=null,z=null;for(let $=0;$<A.length;$++){const K=A[$];G?(z=g[K].isCW,G=!1,he=K):z!==g[K].isCW&&(z=g[K].isCW,G=!0)}return{identifier:y.identifier,isHole:G,for:he}}else console.warn('fill-rule: "'+p+'" is currently not implemented.')}let f=999999999,h=-999999999,d=e.subPaths.map(y=>{const g=y.getPoints();let u=-999999999,_=999999999,p=-999999999,M=999999999;for(let P=0;P<g.length;P++){const C=g[P];C.y>u&&(u=C.y),C.y<_&&(_=C.y),C.x>p&&(p=C.x),C.x<M&&(M=C.x)}return h<=p&&(h=p+1),f>=M&&(f=M-1),{curves:y.curves,points:g,isCW:oc.isClockWise(g),identifier:-1,boundingBox:new Ww(new _e(M,_),new _e(p,u))}});d=d.filter(y=>y.points.length>1);for(let y=0;y<d.length;y++)d[y].identifier=y;const v=d.map(y=>c(y,d,f,h,e.userData?e.userData.style.fillRule:void 0)),x=[];return d.forEach(y=>{if(!v[y.identifier].isHole){const u=new al;u.curves=y.curves,v.filter(p=>p.isHole&&p.for===y.identifier).forEach(p=>{const M=d[p.identifier],P=new Cs;P.curves=M.curves,u.holes.push(P)}),x.push(u)}}),x}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(kl.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new Qn;return l.setAttribute("position",new Zt(s,3)),l.setAttribute("normal",new Zt(o,3)),l.setAttribute("uv",new Zt(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const c=new _e,f=new _e,h=new _e,d=new _e,v=new _e,x=new _e,y=new _e,g=new _e,u=new _e,_=new _e,p=new _e,M=new _e,P=new _e,C=new _e,T=new _e,H=new _e,E=new _e;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=Ce(e);const A=e.length;if(A<2)return 0;const Z=e[0].equals(e[A-1]);let G,he=e[0],z;const $=n.strokeWidth/2,K=1/(A-1);let Q=0,I,W,Y,fe,pe=!1,se=0,U=l*3,N=l*2;R(e[0],e[1],c).multiplyScalar($),g.copy(e[0]).sub(c),u.copy(e[0]).add(c),_.copy(g),p.copy(u);for(let J=1;J<A;J++){G=e[J],J===A-1?Z?z=e[1]:z=void 0:z=e[J+1];const le=c;if(R(he,G,le),h.copy(le).multiplyScalar($),M.copy(G).sub(h),P.copy(G).add(h),I=Q+K,W=!1,z!==void 0){R(G,z,f),h.copy(f).multiplyScalar($),C.copy(G).sub(h),T.copy(G).add(h),Y=!0,h.subVectors(z,he),le.dot(h)<0&&(Y=!1),J===1&&(pe=Y),h.subVectors(z,G),h.normalize();const B=Math.abs(le.dot(h));if(B>Number.EPSILON){const j=$/B;h.multiplyScalar(-j),d.subVectors(G,he),v.copy(d).setLength(j).add(h),H.copy(v).negate();const L=v.length(),m=d.length();d.divideScalar(m),x.subVectors(z,G);const S=x.length();switch(x.divideScalar(S),d.dot(H)<m&&x.dot(H)<S&&(W=!0),E.copy(v).add(G),H.add(G),fe=!1,W?Y?(T.copy(H),P.copy(H)):(C.copy(H),M.copy(H)):ue(),n.strokeLineJoin){case"bevel":X(Y,W,I);break;case"round":de(Y,W),Y?te(G,M,C,I,0):te(G,T,P,I,1);break;case"miter":case"miter-clip":default:const O=$*n.strokeMiterLimit/L;if(O<1)if(n.strokeLineJoin!=="miter-clip"){X(Y,W,I);break}else de(Y,W),Y?(x.subVectors(E,M).multiplyScalar(O).add(M),y.subVectors(E,C).multiplyScalar(O).add(C),w(M,I,0),w(x,I,0),w(G,I,.5),w(G,I,.5),w(x,I,0),w(y,I,0),w(G,I,.5),w(y,I,0),w(C,I,0)):(x.subVectors(E,P).multiplyScalar(O).add(P),y.subVectors(E,T).multiplyScalar(O).add(T),w(P,I,1),w(x,I,1),w(G,I,.5),w(G,I,.5),w(x,I,1),w(y,I,1),w(G,I,.5),w(y,I,1),w(T,I,1));else W?(Y?(w(u,Q,1),w(g,Q,0),w(E,I,0),w(u,Q,1),w(E,I,0),w(H,I,1)):(w(u,Q,1),w(g,Q,0),w(E,I,1),w(g,Q,0),w(H,I,0),w(E,I,1)),Y?C.copy(E):T.copy(E)):Y?(w(M,I,0),w(E,I,0),w(G,I,.5),w(G,I,.5),w(E,I,0),w(C,I,0)):(w(P,I,1),w(E,I,1),w(G,I,.5),w(G,I,.5),w(E,I,1),w(T,I,1)),fe=!0;break}}else ue()}else ue();!Z&&J===A-1&&k(e[0],_,p,Y,!0,Q),Q=I,he=G,g.copy(C),u.copy(T)}if(!Z)k(G,M,P,Y,!1,I);else if(W&&s){let J=E,le=H;pe!==Y&&(J=H,le=E),Y?(fe||pe)&&(le.toArray(s,0*3),le.toArray(s,3*3),fe&&J.toArray(s,1*3)):(fe||!pe)&&(le.toArray(s,1*3),le.toArray(s,3*3),fe&&J.toArray(s,0*3))}return se;function R(J,le,B){return B.subVectors(le,J),B.set(-B.y,B.x).normalize()}function w(J,le,B){s&&(s[U]=J.x,s[U+1]=J.y,s[U+2]=0,o&&(o[U]=0,o[U+1]=0,o[U+2]=1),U+=3,a&&(a[N]=le,a[N+1]=B,N+=2)),se+=3}function te(J,le,B,j,L){c.copy(le).sub(J).normalize(),f.copy(B).sub(J).normalize();let m=Math.PI;const S=c.dot(f);Math.abs(S)<1&&(m=Math.abs(Math.acos(S))),m/=i,h.copy(le);for(let O=0,ee=i-1;O<ee;O++)d.copy(h).rotateAround(J,m),w(h,j,L),w(d,j,L),w(J,j,.5),h.copy(d);w(d,j,L),w(B,j,L),w(J,j,.5)}function ue(){w(u,Q,1),w(g,Q,0),w(M,I,0),w(u,Q,1),w(M,I,1),w(P,I,0)}function X(J,le,B){le?J?(w(u,Q,1),w(g,Q,0),w(M,I,0),w(u,Q,1),w(M,I,0),w(H,I,1),w(M,B,0),w(C,B,0),w(H,B,.5)):(w(u,Q,1),w(g,Q,0),w(P,I,1),w(g,Q,0),w(H,I,0),w(P,I,1),w(P,B,1),w(H,B,0),w(T,B,1)):J?(w(M,B,0),w(C,B,0),w(G,B,.5)):(w(P,B,1),w(T,B,0),w(G,B,.5))}function de(J,le){le&&(J?(w(u,Q,1),w(g,Q,0),w(M,I,0),w(u,Q,1),w(M,I,0),w(H,I,1),w(M,Q,0),w(G,I,.5),w(H,I,1),w(G,I,.5),w(C,Q,0),w(H,I,1)):(w(u,Q,1),w(g,Q,0),w(P,I,1),w(g,Q,0),w(H,I,0),w(P,I,1),w(P,Q,1),w(H,I,0),w(G,I,.5),w(G,I,.5),w(H,I,0),w(T,Q,1)))}function k(J,le,B,j,L,m){switch(n.strokeLineCap){case"round":L?te(J,B,le,m,.5):te(J,le,B,m,.5);break;case"square":if(L)c.subVectors(le,J),f.set(c.y,-c.x),h.addVectors(c,f).add(J),d.subVectors(f,c).add(J),j?(h.toArray(s,1*3),d.toArray(s,0*3),d.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),d.toArray(s,0*3));else{c.subVectors(B,J),f.set(c.y,-c.x),h.addVectors(c,f).add(J),d.subVectors(f,c).add(J);const S=s.length;j?(h.toArray(s,S-1*3),d.toArray(s,S-2*3),d.toArray(s,S-4*3)):(d.toArray(s,S-2*3),h.toArray(s,S-1*3),d.toArray(s,S-4*3))}break}}function Ce(J){let le=!1;for(let j=1,L=J.length-1;j<L;j++)if(J[j].distanceTo(J[j+1])<r){le=!0;break}if(!le)return J;const B=[];B.push(J[0]);for(let j=1,L=J.length-1;j<L;j++)J[j].distanceTo(J[j+1])>=r&&B.push(J[j]);return B.push(J[J.length-1]),B}}}const Ya=100,yu=3,ro=7,Mm=.5,Em=25,qw=1500,ns={water:{r:17,g:22,b:41},land:{r:54,g:63,b:84}},Yt="#9333ea";function $w({cards:t,selectedCards:e,autoRotate:n,onMarkerClick:i,onMarkerVisibilityChange:r,onInteraction:s,focusCardId:o,onFocusLost:a,visibleCardIds:l}){const c=Fe.useRef(null),f=Fe.useRef(null),h=Fe.useRef(null),d=Fe.useRef(null),v=Fe.useRef(null),x=Fe.useRef(null),y=Fe.useRef(null),g=Fe.useRef([]),u=Fe.useRef(null),_=Fe.useRef(0),p=Fe.useRef({}),M=Fe.useRef({}),P=Fe.useRef({}),C=Fe.useRef(null),T=Fe.useRef(e),H=Fe.useRef(r),E=Fe.useRef(s),A=Fe.useRef(!1),Z=Fe.useRef(o),[G,he]=Fe.useState(!1),z=Fe.useRef(null),$=Fe.useRef(null),K=Fe.useRef(null),Q=Fe.useRef(l),I=Fe.useRef({});Fe.useRef(new V),Fe.useRef(new V);const W=Fe.useRef(new V),Y=Fe.useRef(new V);Fe.useRef(new _e),Fe.useEffect(()=>{T.current=e},[e]),Fe.useEffect(()=>{Z.current=o},[o]),Fe.useEffect(()=>{H.current=r},[r]),Fe.useEffect(()=>{E.current=s},[s]),Fe.useEffect(()=>{Q.current=l},[l]);const fe=Fe.useCallback(()=>{const j=document.createElement("canvas");j.width=4096,j.height=4096/2;const L=j.getContext("2d");L.fillStyle="#000003",L.fillRect(0,0,j.width,j.height);for(let m=0;m<2500;m++){const S=Math.random()*j.width,O=Math.random()*j.height,ee=Math.random()*1.2+.3,ne=Math.random();let ie,xe,ge;const Me=Math.random();Me<.7?ie=xe=ge=180+Math.random()*50:Me<.85?(ie=160+Math.random()*40,xe=180+Math.random()*40,ge=220):(ie=220,xe=210+Math.random()*20,ge=160+Math.random()*40),L.beginPath(),L.arc(S,O,ee,0,Math.PI*2),L.fillStyle=`rgba(${ie}, ${xe}, ${ge}, ${(.2+ne*.4)*.6})`,L.fill()}return new ts(j)},[]),pe=Fe.useCallback(B=>{const L=document.createElement("canvas");L.width=2048,L.height=2048/2;const m=L.getContext("2d",{willReadFrequently:!0});m.drawImage(B,0,0,L.width,L.height);const O=m.getImageData(0,0,L.width,L.height).data,ee=document.createElement("canvas");ee.width=2048,ee.height=2048/2;const ne=ee.getContext("2d"),ie=ne.createImageData(2048,2048/2),xe=ie.data,ge=document.createElement("canvas");ge.width=2048,ge.height=2048/2;const Me=ge.getContext("2d"),Pe=Me.createImageData(2048,2048/2),Ne=Pe.data;for(let Ee=0;Ee<O.length;Ee+=4){const Te=O[Ee]>100;xe[Ee]=xe[Ee+1]=xe[Ee+2]=Te?0:255,xe[Ee+3]=255,Te?(Ne[Ee]=ns.water.r,Ne[Ee+1]=ns.water.g,Ne[Ee+2]=ns.water.b):(Ne[Ee]=ns.land.r,Ne[Ee+1]=ns.land.g,Ne[Ee+2]=ns.land.b),Ne[Ee+3]=255}ne.putImageData(ie,0,0),Me.putImageData(Pe,0,0);const ce=document.createElement("canvas");ce.width=2048,ce.height=2048/2;const Be=ce.getContext("2d");return Be.filter="blur(1px)",Be.drawImage(ee,0,0),{colorTexture:new ts(ge),displacementTexture:new ts(ce)}},[]),se=Fe.useCallback((B=Yt)=>{const j=document.createElement("canvas");j.width=128,j.height=128;const L=j.getContext("2d");L.fillStyle=B,L.beginPath();for(let m=0;m<10;m++){const S=m%2===0?60:25,O=m*Math.PI/5-Math.PI/2,ee=64+Math.cos(O)*S,ne=64+Math.sin(O)*S;m===0?L.moveTo(ee,ne):L.lineTo(ee,ne)}return L.closePath(),L.fill(),new ts(j)},[]),U=Fe.useCallback((B=Yt)=>new Promise(j=>{if(B===Yt){const L=new Image;L.onload=()=>{const S=document.createElement("canvas");S.width=128,S.height=128,S.getContext("2d").drawImage(L,0,0,128,128),j(new ts(S))},L.onerror=()=>{j(se(B))};const m="/anking-globe/";L.src=m+"star.svg"}else j(se(B))}),[se]),N=Fe.useCallback((B=Yt)=>{const j=document.createElement("canvas");j.width=128,j.height=128;const L=j.getContext("2d");let m=147,S=51,O=234;if(B.startsWith("#")){const ne=B.slice(1);m=parseInt(ne.slice(0,2),16),S=parseInt(ne.slice(2,4),16),O=parseInt(ne.slice(4,6),16)}const ee=L.createRadialGradient(64,64,0,64,64,64);return ee.addColorStop(0,`rgba(${m}, ${S}, ${O}, 0.5)`),ee.addColorStop(.3,`rgba(${m}, ${S}, ${O}, 0.2)`),ee.addColorStop(.6,`rgba(${m}, ${S}, ${O}, 0.05)`),ee.addColorStop(1,`rgba(${m}, ${S}, ${O}, 0)`),L.fillStyle=ee,L.fillRect(0,0,128,128),new ts(j)},[]),R=Fe.useCallback(B=>{let j=147,L=51,m=234;if(B.startsWith("#")){const S=B.slice(1);j=parseInt(S.slice(0,2),16),L=parseInt(S.slice(2,4),16),m=parseInt(S.slice(4,6),16)}return{r:j,g:L,b:m}},[]),w=Fe.useCallback(()=>{const L=new kl().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z"/></svg>'),S=kl.createShapes(L.paths[0])[0],O=11.04/2,ee=11.53/2,ne=Math.max(11.04,11.53),ie=ro/ne,ge=S.getPoints(32).map(Te=>({x:(Te.x-O)*ie,y:-(Te.y-ee)*ie})),Me=20,Pe=ge.length,Ne=[],ce=[],Be=[];for(let Te=0;Te<=Me;Te++){const Ae=Te/Me,D=Ae*Em,me=1+Ae*1.2;for(let Le=0;Le<Pe;Le++){const be=ge[Le];Ne.push(be.x*me,be.y*me,D),ce.push(Le/Pe,Ae)}Ne.push(0,0,D),ce.push(.5,Ae)}const Ee=Pe+1;for(let Te=0;Te<Me;Te++){const Ae=Te*Ee,D=(Te+1)*Ee;for(let me=0;me<Pe;me++){const Le=Ae+me,be=Ae+(me+1)%Pe,ve=D+me,F=D+(me+1)%Pe;Be.push(Le,be,ve),Be.push(be,F,ve)}}const De=new Qn;return De.setAttribute("position",new Zt(Ne,3)),De.setAttribute("uv",new Zt(ce,2)),De.setIndex(Be),De.computeVertexNormals(),De},[]),te=Fe.useCallback((B=Yt)=>{const{r:j,g:L,b:m}=R(B),S=w(),O=new yi({uniforms:{color:{value:new Qe(j/255,L/255,m/255)},opacity:{value:.35},rayLength:{value:Em}},vertexShader:`
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
      `,transparent:!0,side:An,depthWrite:!1,blending:xo}),ee=new nn(S,O);return ee.position.z=.3,ee.userData={type:"beam"},ee},[R,w]),ue=Fe.useCallback((B,j,L,m=[])=>{const S=new vs,O=new vs;let ee=0;for(let D=0;D<B.id.length;D++)ee=(ee<<5)-ee+B.id.charCodeAt(D),ee|=0;const ne=Math.abs(ee)%1e3/1e3*Math.PI*2;O.rotation.z=ne,O.userData={type:"starContainer",baseRotation:ne};const ie=new nn(new Wo(ro*2.5,ro*2.5),new So({map:L,transparent:!0,opacity:.3,side:An,depthWrite:!1,blending:xo}));ie.position.z=.1,ie.userData={type:"glow"};const xe=new nn(new Wo(ro,ro),new So({map:j,transparent:!0,opacity:1,side:An,depthWrite:!1}));xe.position.z=.2,xe.userData={type:"star"},O.add(ie),O.add(xe),S.add(O);const ge=B.starColor||Yt,Me=te(ge);S.add(Me),Me.rotation.z=ne,S.userData={card:B,starContainer:O,starMesh:xe,glowMesh:ie,beam:Me},I.current[B.id]=1;let Pe=B.lat,Ne=B.lng;const ce=8,Be=2.5;let Ee=0;const De=8;for(;Ee<De;){const D=(90-Pe)*(Math.PI/180),me=(Ne+180)*(Math.PI/180),Le=Ya+yu+Mm,be=new V(-Le*Math.sin(D)*Math.cos(me),Le*Math.cos(D),Le*Math.sin(D)*Math.sin(me));let ve=!1;for(const we of m)if(be.distanceTo(we.position)<ce){ve=!0;break}if(!ve){S.position.copy(be);break}const F=Ee*Math.PI/4,Se=Be*(1+Ee*.3);Pe=B.lat+Math.sin(F)*Se,Ne=B.lng+Math.cos(F)*Se,Ee++}if(Ee>=De){const D=(90-B.lat)*(Math.PI/180),me=(B.lng+180)*(Math.PI/180),Le=Ya+yu+Mm;S.position.set(-Le*Math.sin(D)*Math.cos(me),Le*Math.cos(D),Le*Math.sin(D)*Math.sin(me))}const Te=S.position.clone().normalize(),Ae=S.position.clone().add(Te);return S.lookAt(Ae),S.userData={card:B},M.current[B.id]=1,S},[te]),X=Fe.useCallback((B,j,L)=>{var xe;W.current.subVectors(j,B).normalize(),Y.current.copy(B).normalize();const m=W.current.dot(Y.current),O=((xe=p.current[L])==null?void 0:xe.visible)??!1?m>-.15:m>0;if(!O)return{visible:!1,targetOpacity:0,scale:0};let ee=1;m<.2&&(ee=Math.max(0,(m+.15)/.35));const ne=j.distanceTo(B),ie=Math.max(.6,Math.min(1,280/ne));return{visible:O,targetOpacity:ee,scale:ie}},[]),de=Fe.useCallback(B=>{const j=h.current,L=d.current;if(!j||!L)return;const m=(90-B.lat)*(Math.PI/180),S=(B.lng+180)*(Math.PI/180),O=new V(-220*Math.sin(m)*Math.cos(S),220*Math.cos(m),220*Math.sin(m)*Math.sin(S)),ee=j.position.clone(),ne=L.target.clone(),ie=new V(0,0,0),xe=performance.now(),ge=2e3,Me=Pe=>{const Ne=Pe-xe;let ce=Math.min(Ne/ge,1);if(ce>=1){j.position.copy(O),L.target.set(0,0,0),L.update();return}const Be=ce<.5?16*ce*ce*ce*ce*ce:1-Math.pow(-2*ce+2,5)/2;j.position.lerpVectors(ee,O,Be),L.target.lerpVectors(ne,ie,Be),L.update(),requestAnimationFrame(Me)};requestAnimationFrame(Me)},[]);Fe.useCallback((B,j,L)=>{W.current.subVectors(L,B);const m=W.current.dot(j);return m<0?1/0:(Y.current.copy(j).multiplyScalar(m).add(B),Y.current.distanceTo(L))},[]);const k=Fe.useCallback((B,j)=>{const L=h.current,m=c.current,S=g.current;if(!L||!m||S.length===0)return null;const O=m.getBoundingClientRect(),ee=B-O.left,ne=j-O.top;let ie=null,xe=25;const ge=new V;for(const Me of S){if(!Me.visible)continue;const Pe=Me.userData.card;if(!Pe||(M.current[Pe.id]??0)<.3)continue;ge.copy(Me.position).project(L);const ce=(ge.x*.5+.5)*O.width,Be=(-ge.y*.5+.5)*O.height,Ee=ee-ce,De=ne-Be,Te=Math.sqrt(Ee*Ee+De*De);Te<xe&&(xe=Te,ie=Pe)}return ie},[]);Fe.useEffect(()=>{if(o&&o!==u.current&&t.length>0){u.current=o;const B=parseInt(o.split("-")[0],10),j=t.find(L=>L.id===B);j&&de(j)}},[o,t,de]),Fe.useEffect(()=>{if(!c.current||A.current)return;A.current=!0;const B=c.current,j=new ow;j.background=new Qe(3),f.current=j;const L=new wn(45,B.clientWidth/B.clientHeight,1,3e3);L.position.z=320,h.current=L;const m=new mv({antialias:!0,powerPreference:"high-performance"});m.setSize(B.clientWidth,B.clientHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.appendChild(m.domElement),v.current=m;const S=new Yw(L,m.domElement);S.enableDamping=!0,S.dampingFactor=.05,S.minDistance=150,S.maxDistance=600,S.enablePan=!1,S.autoRotateSpeed=.5,d.current=S,S.addEventListener("start",()=>{E.current&&E.current()});const O=new MutationObserver(Ee=>{for(const De of Ee)if(De.type==="attributes"&&De.attributeName==="style"){const Te=De.target;Te.style.cursor&&Te.style.cursor!==""&&(Te.style.cursor="")}});O.observe(m.domElement,{attributes:!0,attributeFilter:["style"]});const ee=new nn(new To(qw,64,32),new So({map:fe(),side:Gt,transparent:!0,opacity:.7}));j.add(ee),x.current=ee;const ne=new nn(new To(Ya,200,100),new hm({color:1119785}));j.add(ne);const ie=new Image;ie.crossOrigin="anonymous",ie.onload=()=>{const{colorTexture:Ee,displacementTexture:De}=pe(ie);ne.material.dispose(),ne.material=new hm({map:Ee,displacementMap:De,displacementScale:yu,roughness:.85,metalness:.05})};const xe="/anking-globe/";ie.src=xe+"earth_specular.png",j.add(new nn(new To(Ya+18,32,32),new yi({vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }",blending:xo,side:Gt,transparent:!0}))),j.add(new Gw(10053324,.25));const ge=new gm(16772829,1);ge.position.set(300,100,200),j.add(ge),y.current=ge,j.add(new gm(9647082,.2).translateX(-200).translateY(-100).translateZ(-200));const Me=N(Yt);C.current=Me,U(Yt).then(Ee=>{P.current[Yt]=Ee});const Pe=()=>{L.aspect=B.clientWidth/B.clientHeight,L.updateProjectionMatrix(),m.setSize(B.clientWidth,B.clientHeight)};window.addEventListener("resize",Pe);const Ne=new V;let ce;const Be=Ee=>{var ve,F,Se;if(ce=requestAnimationFrame(Be),S.update(),_.current++,x.current&&(x.current.rotation.y=-L.rotation.y*.1,x.current.rotation.x=-L.rotation.x*.05),y.current){const we=Ee*1e-4;y.current.position.set(Math.cos(we)*400,Math.sin(we*.3)*100+50,Math.sin(we)*400)}const De=Ee*5e-4,Te=g.current,Ae=T.current,D={},me=L.position,Le=B.clientWidth,be=B.clientHeight;for(let we=0;we<Te.length;we++){const ke=Te[we],Oe=ke.userData.card;if(!Oe)continue;const je=Q.current,$e=je===null||je.has(Oe.id),{visible:at,targetOpacity:ct,scale:Je}=X(ke.position,me,Oe.id);p.current[Oe.id]={visible:at};const mt=$e?ct:0,cn=M.current[Oe.id]??1,xn=cn+(mt-cn)*.1;M.current[Oe.id]=xn,ke.visible=xn>.01;const na=Ae==null?void 0:Ae.includes(Oe.id),nr=I.current[Oe.id]??1,Mi=nr+((na?0:1)-nr)*.08;I.current[Oe.id]=Mi,Oe.id;const{starContainer:Ur,starMesh:ir,glowMesh:Ei,beam:Xn}=ke.userData;if(na){if(ke.scale.setScalar(.7*Je),Ur){const q=Ur.userData.baseRotation||0;Ur.rotation.z=q+De}ir&&(ir.material.opacity=xn),Ei&&(Ei.material.opacity=.6*xn,Ei.scale.setScalar(1.8)),(ve=Xn==null?void 0:Xn.material)!=null&&ve.uniforms&&(Xn.material.uniforms.opacity.value=Mi*.35*xn)}else ke.scale.setScalar(Je),ir&&(ir.material.opacity=xn),Ei&&(Ei.material.opacity=.3*xn,Ei.scale.setScalar(1)),(F=Xn==null?void 0:Xn.material)!=null&&F.uniforms&&(Xn.material.uniforms.opacity.value=Mi*.35*xn);Ne.copy(ke.position).project(L);const lc=(Ne.x*.5+.5)*Le,b=(-Ne.y*.5+.5)*be;D[Oe.id]={visible:ke.visible,screenPos:{x:lc,y:b},scale:Je,opacity:xn}}Te.length>0&&_.current%3===0&&((Se=H.current)==null||Se.call(H,D)),m.render(j,L)};return Be(0),()=>{window.removeEventListener("resize",Pe),cancelAnimationFrame(ce),O.disconnect(),j.traverse(Ee=>{Ee.geometry&&Ee.geometry.dispose(),Ee.material&&(Array.isArray(Ee.material)?Ee.material.forEach(De=>De.dispose()):Ee.material.dispose())}),m.dispose(),B&&m.domElement.parentNode===B&&B.removeChild(m.domElement),A.current=!1}},[]),Fe.useEffect(()=>()=>{K.current&&cancelAnimationFrame(K.current)},[]),Fe.useEffect(()=>{if(d.current){const B=n&&!G&&(!e||e.length===0)&&!o;d.current.autoRotate=B}},[n,G,e,o]),Fe.useEffect(()=>{if(!(!h.current||!d.current)){if(o){z.current||(z.current=h.current.position.clone());const B=g.current.find(j=>{var L;return((L=j.userData.card)==null?void 0:L.id)===o});if(B){const L=B.position.clone().normalize().multiplyScalar(160),m=h.current.position.clone(),S=600,O=Date.now();let ee=!1;const ne=()=>{if(ee||!Z.current)return;const ie=Date.now()-O,xe=Math.min(ie/S,1),ge=1-Math.pow(1-xe,3);h.current.position.lerpVectors(m,L,ge),d.current.update(),xe<1&&requestAnimationFrame(ne)};return ne(),()=>{ee=!0}}}else if(z.current){const B=h.current.position.clone(),j=z.current,L=600,m=Date.now();z.current=null;let S=!1;const O=()=>{if(S)return;const ee=Date.now()-m,ne=Math.min(ee/L,1),ie=1-Math.pow(1-ne,3);h.current.position.lerpVectors(B,j,ie),d.current.update(),ne<1&&requestAnimationFrame(O)};return O(),()=>{S=!0}}}},[o]),Fe.useEffect(()=>{if(!d.current||!c.current)return;let B=null;const j=O=>{B={x:O.clientX,y:O.clientY}},L=O=>{if(!B)return;const ee=O.clientX-B.x,ne=O.clientY-B.y;Math.sqrt(ee*ee+ne*ne)>5&&(Z.current&&a&&a(),B=null)},m=()=>{B=null},S=c.current;return S.addEventListener("mousedown",j),S.addEventListener("mousemove",L),S.addEventListener("mouseup",m),()=>{S.removeEventListener("mousedown",j),S.removeEventListener("mousemove",L),S.removeEventListener("mouseup",m)}},[a]),Fe.useEffect(()=>{!f.current||!C.current||P.current[Yt]&&(g.current.forEach(B=>{B.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&j.material.dispose()}),f.current.remove(B)}),g.current=[],M.current={},I.current={},t.forEach(B=>{const j=B.starColor||Yt,L=P.current[j]||P.current[Yt],m=N(j),S=ue(B,L,m,g.current);f.current.add(S),g.current.push(S)}))},[t,ue,N]),Fe.useEffect(()=>{const B=setInterval(()=>{P.current[Yt]&&f.current&&g.current.length===0&&t.length>0&&(t.forEach(j=>{const L=j.starColor||Yt,m=P.current[L]||P.current[Yt],S=N(L),O=ue(j,m,S,g.current);f.current.add(O),g.current.push(O)}),clearInterval(B))},100);return()=>clearInterval(B)},[t,ue,N]);const Ce=Fe.useCallback(B=>{const j=k(B.clientX,B.clientY);j&&i(j)},[i,k]),J=Fe.useCallback(B=>{const j=k(B.clientX,B.clientY),L=(j==null?void 0:j.id)??null;L!==$.current&&($.current=L,K.current&&cancelAnimationFrame(K.current),K.current=requestAnimationFrame(()=>{he(L!==null),K.current=null}))},[k]),le=Fe.useCallback(()=>{K.current&&cancelAnimationFrame(K.current),$.current=null,he(!1)},[]);return Su.jsx("div",{ref:c,className:`globe-canvas ${G?"hovering-star":""}`,onClick:Ce,onPointerMove:J,onPointerLeave:le})}Mu.createRoot(document.getElementById("root")).render(Su.jsx(Hv.StrictMode,{children:Su.jsx($w,{})}));
