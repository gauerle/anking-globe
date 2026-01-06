(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i_={exports:{}},Qc={},r_={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),eS=Symbol.for("react.fragment"),tS=Symbol.for("react.strict_mode"),nS=Symbol.for("react.profiler"),iS=Symbol.for("react.provider"),rS=Symbol.for("react.context"),sS=Symbol.for("react.forward_ref"),oS=Symbol.for("react.suspense"),aS=Symbol.for("react.memo"),lS=Symbol.for("react.lazy"),bp=Symbol.iterator;function cS(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o_=Object.assign,a_={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l_(){}l_.prototype=Mo.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=a_,this.updater=n||s_}var cf=lf.prototype=new l_;cf.constructor=lf;o_(cf,Mo.prototype);cf.isPureReactComponent=!0;var Cp=Array.isArray,c_=Object.prototype.hasOwnProperty,uf={current:null},u_={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c_.call(e,i)&&!u_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ha,type:t,key:s,ref:o,props:r,_owner:uf.current}}function uS(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function dS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dS(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ha:case Qx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,Cp(r)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(df(r)&&(r=uS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=$l(s,e,n,l,r)}else if(l=cS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function hS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},ql={transition:null},fS={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:uf};function h_(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};nt.Component=Mo;nt.Fragment=eS;nt.Profiler=nS;nt.PureComponent=lf;nt.StrictMode=tS;nt.Suspense=oS;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fS;nt.act=h_;nt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)c_.call(e,l)&&!u_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:o}};nt.createContext=function(t){return t={$$typeof:rS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iS,_context:t},t.Consumer=t};nt.createElement=d_;nt.createFactory=function(t){var e=d_.bind(null,t);return e.type=t,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(t){return{$$typeof:sS,render:t}};nt.isValidElement=df;nt.lazy=function(t){return{$$typeof:lS,_payload:{_status:-1,_result:t},_init:hS}};nt.memo=function(t,e){return{$$typeof:aS,type:t,compare:e===void 0?null:e}};nt.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};nt.unstable_act=h_;nt.useCallback=function(t,e){return sn.current.useCallback(t,e)};nt.useContext=function(t){return sn.current.useContext(t)};nt.useDebugValue=function(){};nt.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};nt.useEffect=function(t,e){return sn.current.useEffect(t,e)};nt.useId=function(){return sn.current.useId()};nt.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};nt.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};nt.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};nt.useMemo=function(t,e){return sn.current.useMemo(t,e)};nt.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};nt.useRef=function(t){return sn.current.useRef(t)};nt.useState=function(t){return sn.current.useState(t)};nt.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};nt.useTransition=function(){return sn.current.useTransition()};nt.version="18.3.1";r_.exports=nt;var me=r_.exports;const pS=Zx(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=me,gS=Symbol.for("react.element"),vS=Symbol.for("react.fragment"),_S=Object.prototype.hasOwnProperty,yS=mS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xS={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_S.call(e,i)&&!xS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gS,type:t,key:s,ref:o,props:r,_owner:yS.current}}Qc.Fragment=vS;Qc.jsx=f_;Qc.jsxs=f_;i_.exports=Qc;var T=i_.exports,qd={},p_={exports:{}},Mn={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var K=D.length;D.push(Y);e:for(;0<K;){var ge=K-1>>>1,xe=D[ge];if(0<r(xe,Y))D[ge]=Y,D[K]=xe,K=ge;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],K=D.pop();if(K!==Y){D[0]=K;e:for(var ge=0,xe=D.length,le=xe>>>1;ge<le;){var U=2*(ge+1)-1,N=D[U],P=U+1,M=D[P];if(0>r(N,K))P<xe&&0>r(M,N)?(D[ge]=M,D[P]=K,ge=P):(D[ge]=N,D[U]=K,ge=U);else if(P<xe&&0>r(M,K))D[ge]=M,D[P]=K,ge=P;else break e}}return Y}function r(D,Y){var K=D.sortIndex-Y.sortIndex;return K!==0?K:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(D){if(_=!1,m(D),!x)if(n(l)!==null)x=!0,J(C);else{var Y=n(c);Y!==null&&ie(S,Y.startTime-D)}}function C(D,Y){x=!1,_&&(_=!1,u(B),B=-1),g=!0;var K=f;try{for(m(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||D&&!V());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,f=h.priorityLevel;var xe=ge(h.expirationTime<=Y);Y=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),m(Y)}else i(l);h=n(l)}if(h!==null)var le=!0;else{var U=n(c);U!==null&&ie(S,U.startTime-Y),le=!1}return le}finally{h=null,f=K,g=!1}}var A=!1,b=null,B=-1,w=5,R=-1;function V(){return!(t.unstable_now()-R<w)}function W(){if(b!==null){var D=t.unstable_now();R=D;var Y=!0;try{Y=b(!0,D)}finally{Y?pe():(A=!1,b=null)}}else A=!1}var pe;if(typeof v=="function")pe=function(){v(W)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Q=k.port2;k.port1.onmessage=W,pe=function(){Q.postMessage(null)}}else pe=function(){p(W,0)};function J(D){b=D,A||(A=!0,pe())}function ie(D,Y){B=p(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,J(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var K=f;f=Y;try{return D()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=f;f=D;try{return Y()}finally{f=K}},t.unstable_scheduleCallback=function(D,Y,K){var ge=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ge+K:ge):K=ge,D){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=K+xe,D={id:d++,callback:Y,priorityLevel:D,startTime:K,expirationTime:xe,sortIndex:-1},K>ge?(D.sortIndex=K,e(c,D),n(l)===null&&D===n(c)&&(_?(u(B),B=-1):_=!0,ie(S,K-ge))):(D.sortIndex=xe,e(l,D),x||g||(x=!0,J(C))),D},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(D){var Y=f;return function(){var K=f;f=Y;try{return D.apply(this,arguments)}finally{f=K}}}})(g_);m_.exports=g_;var SS=m_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ES=me,En=SS;function Pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v_=new Set,ma={};function ls(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(ma[t]=e,t=0;t<e.length;t++)v_.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,MS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Ip={};function wS(t){return Yd.call(Ip,t)?!0:Yd.call(Pp,t)?!1:MS.test(t)?Ip[t]=!0:(Pp[t]=!0,!1)}function TS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AS(t,e,n,i){if(e===null||typeof e>"u"||TS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var hf=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hf,ff);Gt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hf,ff);Gt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hf,ff);Gt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AS(e,n,r,i)&&(n=null),i||r===null?wS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=ES.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),y_=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),x_=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Iu;function Yo(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var Lu=!1;function Nu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function bS(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Us:return"Portal";case Kd:return"Profiler";case mf:return"StrictMode";case Jd:return"Suspense";case Zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y_:return(t.displayName||"Context")+".Consumer";case __:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vf:return e=t.displayName||null,e!==null?e:Qd(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Qd(t(e))}catch{}}return null}function CS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RS(t){var e=S_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=RS(t))}function E_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eh(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M_(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function th(t,e){M_(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nh(t,e.type,n):e.hasOwnProperty("defaultValue")&&nh(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nh(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function Js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Pe(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Pe(92));if(Ko(n)){if(1<n.length)throw Error(Pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function w_(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,A_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PS=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){PS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function b_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function C_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=b_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IS=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sh(t,e){if(e){if(IS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Pe(62))}}function oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lh=null,Zs=null,Qs=null;function kp(t){if(t=Wa(t)){if(typeof lh!="function")throw Error(Pe(280));var e=t.stateNode;e&&(e=ru(e),lh(t.stateNode,t.type,e))}}function R_(t){Zs?Qs?Qs.push(t):Qs=[t]:Zs=t}function P_(){if(Zs){var t=Zs,e=Qs;if(Qs=Zs=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function I_(t,e){return t(e)}function L_(){}var Du=!1;function N_(t,e,n){if(Du)return t(e,n);Du=!0;try{return I_(t,e,n)}finally{Du=!1,(Zs!==null||Qs!==null)&&(L_(),P_())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Pe(231,e,typeof n));return n}var ch=!1;if(Li)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{ch=!1}function LS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ea=!1,fc=null,pc=!1,uh=null,NS={onError:function(t){ea=!0,fc=t}};function DS(t,e,n,i,r,s,o,a,l){ea=!1,fc=null,LS.apply(NS,arguments)}function US(t,e,n,i,r,s,o,a,l){if(DS.apply(this,arguments),ea){if(ea){var c=fc;ea=!1,fc=null}else throw Error(Pe(198));pc||(pc=!0,uh=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(cs(t)!==t)throw Error(Pe(188))}function OS(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(Pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fp(r),t;if(s===i)return Fp(r),e;s=s.sibling}throw Error(Pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Pe(189))}}if(n.alternate!==i)throw Error(Pe(190))}if(n.tag!==3)throw Error(Pe(188));return n.stateNode.current===n?t:e}function U_(t){return t=OS(t),t!==null?O_(t):null}function O_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O_(t);if(e!==null)return e;t=t.sibling}return null}var k_=En.unstable_scheduleCallback,Bp=En.unstable_cancelCallback,kS=En.unstable_shouldYield,FS=En.unstable_requestPaint,Mt=En.unstable_now,BS=En.unstable_getCurrentPriorityLevel,yf=En.unstable_ImmediatePriority,F_=En.unstable_UserBlockingPriority,mc=En.unstable_NormalPriority,zS=En.unstable_LowPriority,B_=En.unstable_IdlePriority,eu=null,si=null;function HS(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:WS,VS=Math.log,GS=Math.LN2;function WS(t){return t>>>=0,t===0?32:31-(VS(t)/GS|0)|0}var il=64,rl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Jo(a):(s&=o,s!==0&&(i=Jo(s)))}else o=n&~r,o!==0?i=Jo(o):s!==0&&(i=Jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function jS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=jS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z_(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function $S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function H_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V_,Sf,G_,W_,j_,hh=!1,sl=[],cr=null,ur=null,dr=null,_a=new Map,ya=new Map,er=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function YS(t,e,n,i,r){switch(e){case"focusin":return cr=ko(cr,t,e,n,i,r),!0;case"dragenter":return ur=ko(ur,t,e,n,i,r),!0;case"mouseover":return dr=ko(dr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,ko(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,ko(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function X_(t){var e=Gr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,j_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ah=i,n.target.dispatchEvent(i),ah=null}else return e=Wa(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Yl(t)&&n.delete(e)}function KS(){hh=!1,cr!==null&&Yl(cr)&&(cr=null),ur!==null&&Yl(ur)&&(ur=null),dr!==null&&Yl(dr)&&(dr=null),_a.forEach(Hp),ya.forEach(Hp)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,hh||(hh=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,KS)))}function xa(t){function e(r){return Fo(r,t)}if(0<sl.length){Fo(sl[0],t);for(var n=1;n<sl.length;n++){var i=sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(cr!==null&&Fo(cr,t),ur!==null&&Fo(ur,t),dr!==null&&Fo(dr,t),_a.forEach(e),ya.forEach(e),n=0;n<er.length;n++)i=er[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)X_(n),n.blockedOn===null&&er.shift()}var eo=zi.ReactCurrentBatchConfig,vc=!0;function JS(t,e,n,i){var r=st,s=eo.transition;eo.transition=null;try{st=1,Ef(t,e,n,i)}finally{st=r,eo.transition=s}}function ZS(t,e,n,i){var r=st,s=eo.transition;eo.transition=null;try{st=4,Ef(t,e,n,i)}finally{st=r,eo.transition=s}}function Ef(t,e,n,i){if(vc){var r=fh(t,e,n,i);if(r===null)ju(t,e,i,_c,n),zp(t,i);else if(YS(r,t,e,n,i))i.stopPropagation();else if(zp(t,i),e&4&&-1<qS.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&V_(s),s=fh(t,e,n,i),s===null&&ju(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var _c=null;function fh(t,e,n,i){if(_c=null,t=_f(i),t=Gr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function $_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BS()){case yf:return 1;case F_:return 4;case mc:case zS:return 16;case B_:return 536870912;default:return 16}default:return 16}}var sr=null,Mf=null,Kl=null;function q_(){if(Kl)return Kl;var t,e=Mf,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Vp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:Vp,this.isPropagationStopped=Vp,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=wn(wo),Ga=yt({},wo,{view:0,detail:0}),QS=wn(Ga),Ou,ku,Bo,tu=yt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(Ou=t.screenX-Bo.screenX,ku=t.screenY-Bo.screenY):ku=Ou=0,Bo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),Gp=wn(tu),eE=yt({},tu,{dataTransfer:0}),tE=wn(eE),nE=yt({},Ga,{relatedTarget:0}),Fu=wn(nE),iE=yt({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),rE=wn(iE),sE=yt({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oE=wn(sE),aE=yt({},wo,{data:0}),Wp=wn(aE),lE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uE[t])?!!e[t]:!1}function Tf(){return dE}var hE=yt({},Ga,{key:function(t){if(t.key){var e=lE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fE=wn(hE),pE=yt({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=wn(pE),mE=yt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),gE=wn(mE),vE=yt({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=wn(vE),yE=yt({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xE=wn(yE),SE=[9,13,27,32],Af=Li&&"CompositionEvent"in window,ta=null;Li&&"documentMode"in document&&(ta=document.documentMode);var EE=Li&&"TextEvent"in window&&!ta,Y_=Li&&(!Af||ta&&8<ta&&11>=ta),Xp=" ",$p=!1;function K_(t,e){switch(t){case"keyup":return SE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function ME(t,e){switch(t){case"compositionend":return J_(e);case"keypress":return e.which!==32?null:($p=!0,Xp);case"textInput":return t=e.data,t===Xp&&$p?null:t;default:return null}}function wE(t,e){if(ks)return t==="compositionend"||!Af&&K_(t,e)?(t=q_(),Kl=Mf=sr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y_&&e.locale!=="ko"?null:e.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TE[t.type]:e==="textarea"}function Z_(t,e,n,i){R_(i),e=yc(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,Sa=null;function AE(t){c0(t,0)}function nu(t){var e=zs(t);if(E_(e))return t}function bE(t,e){if(t==="change")return e}var Q_=!1;if(Li){var Bu;if(Li){var zu="oninput"in document;if(!zu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),zu=typeof Yp.oninput=="function"}Bu=zu}else Bu=!1;Q_=Bu&&(!document.documentMode||9<document.documentMode)}function Kp(){na&&(na.detachEvent("onpropertychange",e0),Sa=na=null)}function e0(t){if(t.propertyName==="value"&&nu(Sa)){var e=[];Z_(e,Sa,t,_f(t)),N_(AE,e)}}function CE(t,e,n){t==="focusin"?(Kp(),na=e,Sa=n,na.attachEvent("onpropertychange",e0)):t==="focusout"&&Kp()}function RE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Sa)}function PE(t,e){if(t==="click")return nu(e)}function IE(t,e){if(t==="input"||t==="change")return nu(e)}function LE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:LE;function Ea(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yd.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,e){var n=Jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function t0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n0(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NE(t){var e=n0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t0(n.ownerDocument.documentElement,n)){if(i!==null&&bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zp(n,s);var o=Zp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DE=Li&&"documentMode"in document&&11>=document.documentMode,Fs=null,ph=null,ia=null,mh=!1;function Qp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mh||Fs==null||Fs!==hc(i)||(i=Fs,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&Ea(ia,i)||(ia=i,i=yc(ph,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Hu={},i0={};Li&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function iu(t){if(Hu[t])return Hu[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i0)return Hu[t]=e[n];return t}var r0=iu("animationend"),s0=iu("animationiteration"),o0=iu("animationstart"),a0=iu("transitionend"),l0=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){l0.set(t,e),ls(e,[t])}for(var Vu=0;Vu<em.length;Vu++){var Gu=em[Vu],UE=Gu.toLowerCase(),OE=Gu[0].toUpperCase()+Gu.slice(1);br(UE,"on"+OE)}br(r0,"onAnimationEnd");br(s0,"onAnimationIteration");br(o0,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(a0,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function tm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,US(i,e,void 0,t),t.currentTarget=null}function c0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;tm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;tm(r,a,c),s=l}}}if(pc)throw t=uh,pc=!1,uh=null,t}function ut(t,e){var n=e[xh];n===void 0&&(n=e[xh]=new Set);var i=t+"__bubble";n.has(i)||(u0(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),u0(n,t,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[ll]){t[ll]=!0,v_.forEach(function(n){n!=="selectionchange"&&(kE.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,Wu("selectionchange",!1,e))}}function u0(t,e,n,i){switch($_(e)){case 1:var r=JS;break;case 4:r=ZS;break;default:r=Ef}n=r.bind(null,e,n,t),r=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}N_(function(){var c=s,d=_f(n),h=[];e:{var f=l0.get(t);if(f!==void 0){var g=wf,x=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":g=fE;break;case"focusin":x="focus",g=Fu;break;case"focusout":x="blur",g=Fu;break;case"beforeblur":case"afterblur":g=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gE;break;case r0:case s0:case o0:g=rE;break;case a0:g=_E;break;case"scroll":g=QS;break;case"wheel":g=xE;break;case"copy":case"cut":case"paste":g=oE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jp}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,m;v!==null;){m=v;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,u!==null&&(S=va(v,u),S!=null&&_.push(wa(v,S,m)))),p)break;v=v.return}0<_.length&&(f=new g(f,x,null,n,d),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ah&&(x=n.relatedTarget||n.fromElement)&&(Gr(x)||x[Ni]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Gr(x):null,x!==null&&(p=cs(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(_=Gp,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=jp,S="onPointerLeave",u="onPointerEnter",v="pointer"),p=g==null?f:zs(g),m=x==null?f:zs(x),f=new _(S,v+"leave",g,n,d),f.target=p,f.relatedTarget=m,S=null,Gr(d)===c&&(_=new _(u,v+"enter",x,n,d),_.target=m,_.relatedTarget=p,S=_),p=S,g&&x)t:{for(_=g,u=x,v=0,m=_;m;m=ps(m))v++;for(m=0,S=u;S;S=ps(S))m++;for(;0<v-m;)_=ps(_),v--;for(;0<m-v;)u=ps(u),m--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=ps(_),u=ps(u)}_=null}else _=null;g!==null&&nm(h,f,g,_,!1),x!==null&&p!==null&&nm(h,p,x,_,!0)}}e:{if(f=c?zs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=bE;else if(qp(f))if(Q_)C=IE;else{C=RE;var A=CE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=PE);if(C&&(C=C(t,c))){Z_(h,C,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&nh(f,"number",f.value)}switch(A=c?zs(c):window,t){case"focusin":(qp(A)||A.contentEditable==="true")&&(Fs=A,ph=c,ia=null);break;case"focusout":ia=ph=Fs=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,Qp(h,n,d);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":Qp(h,n,d)}var b;if(Af)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else ks?K_(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Y_&&n.locale!=="ko"&&(ks||B!=="onCompositionStart"?B==="onCompositionEnd"&&ks&&(b=q_()):(sr=d,Mf="value"in sr?sr.value:sr.textContent,ks=!0)),A=yc(c,B),0<A.length&&(B=new Wp(B,t,null,n,d),h.push({event:B,listeners:A}),b?B.data=b:(b=J_(n),b!==null&&(B.data=b)))),(b=EE?ME(t,n):wE(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(d=new Wp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=b))}c0(h,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(wa(t,s,r)),s=va(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=va(n,s),l!=null&&o.unshift(wa(n,l,a))):r||(l=va(n,s),l!=null&&o.push(wa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FE=/\r\n?/g,BE=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(FE,`
`).replace(BE,"")}function cl(t,e,n){if(e=im(e),im(t)!==e&&n)throw Error(Pe(425))}function xc(){}var gh=null,vh=null;function _h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,zE=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(t){return rm.resolve(null).then(t).catch(VE)}:yh;function VE(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xa(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),ri="__reactFiber$"+To,Ta="__reactProps$"+To,Ni="__reactContainer$"+To,xh="__reactEvents$"+To,GE="__reactListeners$"+To,WE="__reactHandles$"+To;function Gr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[ri])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[ri]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Pe(33))}function ru(t){return t[Ta]||null}var Sh=[],Hs=-1;function Cr(t){return{current:t}}function ht(t){0>Hs||(t.current=Sh[Hs],Sh[Hs]=null,Hs--)}function ct(t,e){Hs++,Sh[Hs]=t.current,t.current=e}var wr={},Zt=Cr(wr),hn=Cr(!1),Qr=wr;function uo(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Sc(){ht(hn),ht(Zt)}function om(t,e,n){if(Zt.current!==wr)throw Error(Pe(168));ct(Zt,e),ct(hn,n)}function d0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Pe(108,CS(t)||"Unknown",r));return yt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Qr=Zt.current,ct(Zt,t),ct(hn,hn.current),!0}function am(t,e,n){var i=t.stateNode;if(!i)throw Error(Pe(169));n?(t=d0(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,ht(hn),ht(Zt),ct(Zt,t)):ht(hn),ct(hn,n)}var Ei=null,su=!1,$u=!1;function h0(t){Ei===null?Ei=[t]:Ei.push(t)}function jE(t){su=!0,h0(t)}function Rr(){if(!$u&&Ei!==null){$u=!0;var t=0,e=st;try{var n=Ei;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,su=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),k_(yf,Rr),r}finally{st=e,$u=!1}}return null}var Vs=[],Gs=0,Mc=null,wc=0,bn=[],Cn=0,es=null,wi=1,Ti="";function kr(t,e){Vs[Gs++]=wc,Vs[Gs++]=Mc,Mc=t,wc=e}function f0(t,e,n){bn[Cn++]=wi,bn[Cn++]=Ti,bn[Cn++]=es,es=t;var i=wi;t=Ti;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Yn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Cf(t){t.return!==null&&(kr(t,1),f0(t,1,0))}function Rf(t){for(;t===Mc;)Mc=Vs[--Gs],Vs[Gs]=null,wc=Vs[--Gs],Vs[Gs]=null;for(;t===es;)es=bn[--Cn],bn[Cn]=null,Ti=bn[--Cn],bn[Cn]=null,wi=bn[--Cn],bn[Cn]=null}var Sn=null,xn=null,ft=!1,Wn=null;function p0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function Eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(ft){var e=xn;if(e){var n=e;if(!lm(t,e)){if(Eh(t))throw Error(Pe(418));e=hr(n.nextSibling);var i=Sn;e&&lm(t,e)?p0(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(Eh(t))throw Error(Pe(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ul(t){if(t!==Sn)return!1;if(!ft)return cm(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_h(t.type,t.memoizedProps)),e&&(e=xn)){if(Eh(t))throw m0(),Error(Pe(418));for(;e;)p0(t,e),e=hr(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?hr(t.stateNode.nextSibling):null;return!0}function m0(){for(var t=xn;t;)t=hr(t.nextSibling)}function ho(){xn=Sn=null,ft=!1}function Pf(t){Wn===null?Wn=[t]:Wn.push(t)}var XE=zi.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Pe(309));var i=n.stateNode}if(!i)throw Error(Pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Pe(284));if(!n._owner)throw Error(Pe(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(Pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function um(t){var e=t._init;return e(t._payload)}function g0(t){function e(u,v){if(t){var m=u.deletions;m===null?(u.deletions=[v],u.flags|=16):m.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=gr(u,v),u.index=0,u.sibling=null,u}function s(u,v,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<v?(u.flags|=2,v):m):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,m,S){return v===null||v.tag!==6?(v=ed(m,u.mode,S),v.return=u,v):(v=r(v,m),v.return=u,v)}function l(u,v,m,S){var C=m.type;return C===Os?d(u,v,m.props.children,S,m.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ji&&um(C)===v.type)?(S=r(v,m.props),S.ref=zo(u,v,m),S.return=u,S):(S=rc(m.type,m.key,m.props,null,u.mode,S),S.ref=zo(u,v,m),S.return=u,S)}function c(u,v,m,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=td(m,u.mode,S),v.return=u,v):(v=r(v,m.children||[]),v.return=u,v)}function d(u,v,m,S,C){return v===null||v.tag!==7?(v=qr(m,u.mode,S,C),v.return=u,v):(v=r(v,m),v.return=u,v)}function h(u,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ed(""+v,u.mode,m),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return m=rc(v.type,v.key,v.props,null,u.mode,m),m.ref=zo(u,null,v),m.return=u,m;case Us:return v=td(v,u.mode,m),v.return=u,v;case Ji:var S=v._init;return h(u,S(v._payload),m)}if(Ko(v)||Uo(v))return v=qr(v,u.mode,m,null),v.return=u,v;dl(u,v)}return null}function f(u,v,m,S){var C=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(u,v,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case el:return m.key===C?l(u,v,m,S):null;case Us:return m.key===C?c(u,v,m,S):null;case Ji:return C=m._init,f(u,v,C(m._payload),S)}if(Ko(m)||Uo(m))return C!==null?null:d(u,v,m,S,null);dl(u,m)}return null}function g(u,v,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(m)||null,a(v,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case el:return u=u.get(S.key===null?m:S.key)||null,l(v,u,S,C);case Us:return u=u.get(S.key===null?m:S.key)||null,c(v,u,S,C);case Ji:var A=S._init;return g(u,v,m,A(S._payload),C)}if(Ko(S)||Uo(S))return u=u.get(m)||null,d(v,u,S,C,null);dl(v,S)}return null}function x(u,v,m,S){for(var C=null,A=null,b=v,B=v=0,w=null;b!==null&&B<m.length;B++){b.index>B?(w=b,b=null):w=b.sibling;var R=f(u,b,m[B],S);if(R===null){b===null&&(b=w);break}t&&b&&R.alternate===null&&e(u,b),v=s(R,v,B),A===null?C=R:A.sibling=R,A=R,b=w}if(B===m.length)return n(u,b),ft&&kr(u,B),C;if(b===null){for(;B<m.length;B++)b=h(u,m[B],S),b!==null&&(v=s(b,v,B),A===null?C=b:A.sibling=b,A=b);return ft&&kr(u,B),C}for(b=i(u,b);B<m.length;B++)w=g(b,u,B,m[B],S),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?B:w.key),v=s(w,v,B),A===null?C=w:A.sibling=w,A=w);return t&&b.forEach(function(V){return e(u,V)}),ft&&kr(u,B),C}function _(u,v,m,S){var C=Uo(m);if(typeof C!="function")throw Error(Pe(150));if(m=C.call(m),m==null)throw Error(Pe(151));for(var A=C=null,b=v,B=v=0,w=null,R=m.next();b!==null&&!R.done;B++,R=m.next()){b.index>B?(w=b,b=null):w=b.sibling;var V=f(u,b,R.value,S);if(V===null){b===null&&(b=w);break}t&&b&&V.alternate===null&&e(u,b),v=s(V,v,B),A===null?C=V:A.sibling=V,A=V,b=w}if(R.done)return n(u,b),ft&&kr(u,B),C;if(b===null){for(;!R.done;B++,R=m.next())R=h(u,R.value,S),R!==null&&(v=s(R,v,B),A===null?C=R:A.sibling=R,A=R);return ft&&kr(u,B),C}for(b=i(u,b);!R.done;B++,R=m.next())R=g(b,u,B,R.value,S),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?B:R.key),v=s(R,v,B),A===null?C=R:A.sibling=R,A=R);return t&&b.forEach(function(W){return e(u,W)}),ft&&kr(u,B),C}function p(u,v,m,S){if(typeof m=="object"&&m!==null&&m.type===Os&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case el:e:{for(var C=m.key,A=v;A!==null;){if(A.key===C){if(C=m.type,C===Os){if(A.tag===7){n(u,A.sibling),v=r(A,m.props.children),v.return=u,u=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ji&&um(C)===A.type){n(u,A.sibling),v=r(A,m.props),v.ref=zo(u,A,m),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}m.type===Os?(v=qr(m.props.children,u.mode,S,m.key),v.return=u,u=v):(S=rc(m.type,m.key,m.props,null,u.mode,S),S.ref=zo(u,v,m),S.return=u,u=S)}return o(u);case Us:e:{for(A=m.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(u,v.sibling),v=r(v,m.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=td(m,u.mode,S),v.return=u,u=v}return o(u);case Ji:return A=m._init,p(u,v,A(m._payload),S)}if(Ko(m))return x(u,v,m,S);if(Uo(m))return _(u,v,m,S);dl(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,m),v.return=u,u=v):(n(u,v),v=ed(m,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return p}var fo=g0(!0),v0=g0(!1),Tc=Cr(null),Ac=null,Ws=null,If=null;function Lf(){If=Ws=Ac=null}function Nf(t){var e=Tc.current;ht(Tc),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function to(t,e){Ac=t,If=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(If!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Ac===null)throw Error(Pe(308));Ws=t,Ac.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Wr=null;function Df(t){Wr===null?Wr=[t]:Wr.push(t)}function _0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Df(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}function dm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(f=e,g=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(g,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(g,h,f):x,f==null)break e;h=yt({},h,f);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=h}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Pe(191,r));r.call(i)}}}var ja={},oi=Cr(ja),Aa=Cr(ja),ba=Cr(ja);function jr(t){if(t===ja)throw Error(Pe(174));return t}function Of(t,e){switch(ct(ba,e),ct(Aa,t),ct(oi,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rh(e,t)}ht(oi),ct(oi,e)}function po(){ht(oi),ht(Aa),ht(ba)}function x0(t){jr(ba.current);var e=jr(oi.current),n=rh(e,t.type);e!==n&&(ct(Aa,t),ct(oi,n))}function kf(t){Aa.current===t&&(ht(oi),ht(Aa))}var mt=Cr(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function Ff(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var Ql=zi.ReactCurrentDispatcher,Yu=zi.ReactCurrentBatchConfig,ts=0,vt=null,Ct=null,Dt=null,Rc=!1,ra=!1,Ca=0,$E=0;function jt(){throw Error(Pe(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function zf(t,e,n,i,r,s){if(ts=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?JE:ZE,t=n(i,r),ra){s=0;do{if(ra=!1,Ca=0,25<=s)throw Error(Pe(301));s+=1,Dt=Ct=null,e.updateQueue=null,Ql.current=QE,t=n(i,r)}while(ra)}if(Ql.current=Pc,e=Ct!==null&&Ct.next!==null,ts=0,Dt=Ct=vt=null,Rc=!1,e)throw Error(Pe(300));return t}function Hf(){var t=Ca!==0;return Ca=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function On(){if(Ct===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?vt.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(Pe(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?vt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Ra(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=On(),n=e.queue;if(n===null)throw Error(Pe(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=On(),n=e.queue;if(n===null)throw Error(Pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function S0(){}function E0(t,e){var n=vt,i=On(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Vf(T0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,w0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(Pe(349));ts&30||M0(n,e,r)}return r}function M0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,i){e.value=n,e.getSnapshot=i,A0(e)&&b0(t)}function T0(t,e,n){return n(function(){A0(e)&&b0(t)})}function A0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function b0(t){var e=Di(t,1);e!==null&&Kn(e,t,1,-1)}function fm(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=KE.bind(null,vt,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function C0(){return On().memoizedState}function ec(t,e,n,i){var r=ni();vt.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Bf(i,o.deps)){r.memoizedState=Pa(e,n,s,i);return}}vt.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function pm(t,e){return ec(8390656,8,t,e)}function Vf(t,e){return ou(2048,8,t,e)}function R0(t,e){return ou(4,2,t,e)}function P0(t,e){return ou(4,4,t,e)}function I0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L0(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,I0.bind(null,e,t),n)}function Gf(){}function N0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function U0(t,e,n){return ts&21?(Qn(n,e)||(n=z_(),vt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function qE(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Yu.transition;Yu.transition={};try{t(!1),e()}finally{st=n,Yu.transition=i}}function O0(){return On().memoizedState}function YE(t,e,n){var i=mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))F0(e,n);else if(n=_0(t,e,n,i),n!==null){var r=nn();Kn(n,t,i,r),B0(n,e,i)}}function KE(t,e,n){var i=mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))F0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=_0(t,e,r,i),n!==null&&(r=nn(),Kn(n,t,i,r),B0(n,e,i))}}function k0(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function F0(t,e){ra=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}var Pc={readContext:Un,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},JE={readContext:Un,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,I0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=YE.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:Gf,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=qE.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ni();if(ft){if(n===void 0)throw Error(Pe(407));n=n()}else{if(n=e(),kt===null)throw Error(Pe(349));ts&30||M0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,pm(T0.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,w0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=kt.identifierPrefix;if(ft){var n=Ti,i=wi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$E++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZE={readContext:Un,useCallback:N0,useContext:Un,useEffect:Vf,useImperativeHandle:L0,useInsertionEffect:R0,useLayoutEffect:P0,useMemo:D0,useReducer:Ku,useRef:C0,useState:function(){return Ku(Ra)},useDebugValue:Gf,useDeferredValue:function(t){var e=On();return U0(e,Ct.memoizedState,t)},useTransition:function(){var t=Ku(Ra)[0],e=On().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},QE={readContext:Un,useCallback:N0,useContext:Un,useEffect:Vf,useImperativeHandle:L0,useInsertionEffect:R0,useLayoutEffect:P0,useMemo:D0,useReducer:Ju,useRef:C0,useState:function(){return Ju(Ra)},useDebugValue:Gf,useDeferredValue:function(t){var e=On();return Ct===null?e.memoizedState=t:U0(e,Ct.memoizedState,t)},useTransition:function(){var t=Ju(Ra)[0],e=On().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Th(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=mr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Kn(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=mr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Kn(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=mr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(Kn(e,t,i,n),Zl(e,t,i))}};function mm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function z0(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Qr:Zt.current,i=e.contextTypes,s=(i=i!=null)?uo(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Ah(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Qr:Zt.current,r.context=uo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Th(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e){try{var n="",i=e;do n+=bS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eM=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,kh=i),bh(t,e)},n}function V0(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new eM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pM.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var tM=zi.ReactCurrentOwner,dn=!1;function en(t,e,n,i){e.child=t===null?v0(e,null,n,i):fo(e,t.child,n,i)}function xm(t,e,n,i,r){n=n.render;var s=e.ref;return to(e,r),i=zf(t,e,n,i,s,r),n=Hf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&n&&Cf(e),e.flags|=1,en(t,e,i,r),e.child)}function Sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G0(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=gr(s,i),t.ref=e.ref,t.return=e,e.child=t}function G0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Ch(t,e,n,i,r)}function W0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Xs,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Xs,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Xs,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Xs,yn),yn|=i;return en(t,e,r,n),e.child}function j0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ch(t,e,n,i,r){var s=fn(n)?Qr:Zt.current;return s=uo(e,s),to(e,r),n=zf(t,e,n,i,s,r),i=Hf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&i&&Cf(e),e.flags|=1,en(t,e,n,r),e.child)}function Em(t,e,n,i,r){if(fn(n)){var s=!0;Ec(e)}else s=!1;if(to(e,r),e.stateNode===null)tc(t,e),z0(e,n,i),Ah(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?Qr:Zt.current,c=uo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&gm(e,o,i,c),Zi=!1;var f=e.memoizedState;o.state=f,bc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||hn.current||Zi?(typeof d=="function"&&(Th(e,n,d,i),l=e.memoizedState),(a=Zi||mm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,y0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Qr:Zt.current,l=uo(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&gm(e,o,i,l),Zi=!1,f=e.memoizedState,o.state=f,bc(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||hn.current||Zi?(typeof g=="function"&&(Th(e,n,g,i),x=e.memoizedState),(c=Zi||mm(e,n,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Rh(t,e,n,i,s,r)}function Rh(t,e,n,i,r,s){j0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&am(e,n,!1),Ui(t,e,s);i=e.stateNode,tM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fo(e,t.child,null,s),e.child=fo(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&am(e,n,!0),e.child}function X0(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Of(t,e.containerInfo)}function Mm(t,e,n,i,r){return ho(),Pf(r),e.flags|=256,en(t,e,n,i),e.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(mt,r&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uu(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ih(n),e.memoizedState=Ph,t):Wf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ph,i}return s=t.child,t=s.sibling,i=gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wf(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&Pf(i),fo(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(Pe(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uu({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fo(e,t.child,null,o),e.child.memoizedState=Ih(o),e.memoizedState=Ph,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Pe(419)),i=Zu(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Kn(i,t,r,-1))}return Kf(),i=Zu(Error(Pe(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=hr(r.nextSibling),Sn=e,ft=!0,Wn=null,t!==null&&(bn[Cn++]=wi,bn[Cn++]=Ti,bn[Cn++]=es,wi=t.id,Ti=t.overflow,es=e),e=Wf(e,i.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wh(t.return,e,n)}function Qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Pe(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iM(t,e,n){switch(e.tag){case 3:X0(e),ho();break;case 5:x0(e);break;case 1:fn(e.type)&&Ec(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(ct(mt,mt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ct(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,W0(t,e,n)}return Ui(t,e,n)}var Y0,Lh,K0,J0;Y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};K0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(oi.current);var s=null;switch(n){case"input":r=eh(t,r),i=eh(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=ih(t,r),i=ih(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xc)}sh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ho(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rM(t,e,n){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&Sc(),Xt(e),null;case 3:return i=e.stateNode,po(),ht(hn),ht(Zt),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(zh(Wn),Wn=null))),Lh(t,e),Xt(e),null;case 5:kf(e);var r=jr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)K0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Pe(166));return Xt(e),null}if(t=jr(oi.current),ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Zo.length;r++)ut(Zo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Np(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Up(i,s),ut("invalid",i)}sh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":tl(i),Dp(i,s,!0);break;case"textarea":tl(i),Op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[Ta]=i,Y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=oh(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Zo.length;r++)ut(Zo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Np(t,i),r=eh(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Up(t,i),r=ih(t,i),ut("invalid",t);break;default:r=i}sh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?C_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&A_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&pf(t,s,l,o))}switch(n){case"input":tl(t),Dp(t,i,!1);break;case"textarea":tl(t),Op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Js(t,!!i.multiple,s,!1):i.defaultValue!=null&&Js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)J0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Pe(166));if(n=jr(ba.current),jr(oi.current),ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Xt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))m0(),ho(),e.flags|=98560,s=!1;else if(s=ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Pe(317));s[ri]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Wn!==null&&(zh(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Kf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return po(),Lh(t,e),t===null&&Ma(e.stateNode.containerInfo),Xt(e),null;case 10:return Nf(e.type._context),Xt(e),null;case 17:return fn(e.type)&&Sc(),Xt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ho(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>go&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Xt(e),null}else 2*Mt()-s.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,ct(mt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(Pe(156,e.tag))}function sM(t,e){switch(Rf(e),e.tag){case 1:return fn(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return po(),ht(hn),ht(Zt),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Pe(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return po(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var fl=!1,Yt=!1,oM=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Nh(t,e,n){try{n()}catch(i){St(t,e,i)}}var Tm=!1;function aM(t,e){if(gh=vc,t=n0(),bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:t,selectionRange:n},vc=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){e=Ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vn(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Pe(163))}}catch(S){St(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}return x=Tm,Tm=!1,x}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nh(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Z0(t){var e=t.alternate;e!==null&&(t.alternate=null,Z0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Ta],delete e[xh],delete e[GE],delete e[WE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xc));else if(i!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}function Oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var zt=null,Gn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)ey(t,e,n),n=n.sibling}function ey(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:Yt||js(n,e);case 6:var i=zt,r=Gn;zt=null,Wi(t,e,n),zt=i,Gn=r,zt!==null&&(Gn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Gn?(t=zt,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),xa(t)):Xu(zt,n.stateNode));break;case 4:i=zt,r=Gn,zt=n.stateNode.containerInfo,Gn=!0,Wi(t,e,n),zt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!Yt&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Wi(t,e,n),Yt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oM),e.forEach(function(i){var r=gM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Gn=!1;break e;case 3:zt=a.stateNode.containerInfo,Gn=!0;break e;case 4:zt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(zt===null)throw Error(Pe(160));ey(s,o,r),zt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ty(e,t),e=e.sibling}function ty(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ei(t),i&4){try{sa(3,t,t.return),lu(3,t)}catch(_){St(t,t.return,_)}try{sa(5,t,t.return)}catch(_){St(t,t.return,_)}}break;case 1:Fn(e,t),ei(t),i&512&&n!==null&&js(n,n.return);break;case 5:if(Fn(e,t),ei(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(_){St(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M_(r,s),oh(a,o);var c=oh(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?C_(r,h):d==="dangerouslySetInnerHTML"?A_(r,h):d==="children"?ga(r,h):pf(r,d,h,c)}switch(a){case"input":th(r,s);break;case"textarea":w_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Js(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Js(r,!!s.multiple,s.defaultValue,!0):Js(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(_){St(t,t.return,_)}}break;case 6:if(Fn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(Pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){St(t,t.return,_)}}break;case 3:if(Fn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(_){St(t,t.return,_)}break;case 4:Fn(e,t),ei(t);break;case 13:Fn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=Mt())),i&4&&bm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||d,Fn(e,t),Yt=c):Fn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ge=t,d=t.child;d!==null;){for(h=Ge=d;Ge!==null;){switch(f=Ge,g=f.child,f.tag){case 0:case 11:case 14:case 15:sa(4,f,f.return);break;case 1:js(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){St(i,n,_)}}break;case 5:js(f,f.return);break;case 22:if(f.memoizedState!==null){Rm(h);continue}}g!==null?(g.return=f,Ge=g):Rm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=b_("display",o))}catch(_){St(t,t.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){St(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fn(e,t),ei(t),i&4&&bm(t);break;case 21:break;default:Fn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var i=n;break e}n=n.return}throw Error(Pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=Am(t);Oh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Am(t);Uh(t,a,o);break;default:throw Error(Pe(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lM(t,e,n){Ge=t,ny(t)}function ny(t,e,n){for(var i=(t.mode&1)!==0;Ge!==null;){var r=Ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||fl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=fl;var c=Yt;if(fl=o,(Yt=l)&&!c)for(Ge=r;Ge!==null;)o=Ge,l=o.child,o.tag===22&&o.memoizedState!==null?Pm(r):l!==null?(l.return=o,Ge=l):Pm(r);for(;s!==null;)Ge=s,ny(s),s=s.sibling;Ge=r,fl=a,Yt=c}Cm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ge=s):Cm(t)}}function Cm(t){for(;Ge!==null;){var e=Ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Pe(163))}Yt||e.flags&512&&Dh(e)}catch(f){St(e,e.return,f)}}if(e===t){Ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Rm(t){for(;Ge!==null;){var e=Ge;if(e===t){Ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ge=n;break}Ge=e.return}}function Pm(t){for(;Ge!==null;){var e=Ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Dh(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Dh(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){Ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ge=a;break}Ge=e.return}}var cM=Math.ceil,Ic=zi.ReactCurrentDispatcher,jf=zi.ReactCurrentOwner,Dn=zi.ReactCurrentBatchConfig,rt=0,kt=null,At=null,Vt=0,yn=0,Xs=Cr(0),Rt=0,Ia=null,ns=0,cu=0,Xf=0,oa=null,cn=null,$f=0,go=1/0,Si=null,Lc=!1,kh=null,pr=null,pl=!1,or=null,Nc=0,aa=0,Fh=null,nc=-1,ic=0;function nn(){return rt&6?Mt():nc!==-1?nc:nc=Mt()}function mr(t){return t.mode&1?rt&2&&Vt!==0?Vt&-Vt:XE.transition!==null?(ic===0&&(ic=z_()),ic):(t=st,t!==0||(t=window.event,t=t===void 0?16:$_(t.type)),t):1}function Kn(t,e,n,i){if(50<aa)throw aa=0,Fh=null,Error(Pe(185));Va(t,n,i),(!(rt&2)||t!==kt)&&(t===kt&&(!(rt&2)&&(cu|=n),Rt===4&&tr(t,Vt)),pn(t,i),n===1&&rt===0&&!(e.mode&1)&&(go=Mt()+500,su&&Rr()))}function pn(t,e){var n=t.callbackNode;XS(t,e);var i=gc(t,t===kt?Vt:0);if(i===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?jE(Im.bind(null,t)):h0(Im.bind(null,t)),HE(function(){!(rt&6)&&Rr()}),n=null;else{switch(H_(i)){case 1:n=yf;break;case 4:n=F_;break;case 16:n=mc;break;case 536870912:n=B_;break;default:n=mc}n=uy(n,iy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iy(t,e){if(nc=-1,ic=0,rt&6)throw Error(Pe(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var i=gc(t,t===kt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=rt;rt|=2;var s=sy();(kt!==t||Vt!==e)&&(Si=null,go=Mt()+500,$r(t,e));do try{hM();break}catch(a){ry(t,a)}while(!0);Lf(),Ic.current=s,rt=r,At!==null?e=0:(kt=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=dh(t),r!==0&&(i=r,e=Bh(t,r))),e===1)throw n=Ia,$r(t,0),tr(t,i),pn(t,Mt()),n;if(e===6)tr(t,i);else{if(r=t.current.alternate,!(i&30)&&!uM(r)&&(e=Dc(t,i),e===2&&(s=dh(t),s!==0&&(i=s,e=Bh(t,s))),e===1))throw n=Ia,$r(t,0),tr(t,i),pn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Pe(345));case 2:Fr(t,cn,Si);break;case 3:if(tr(t,i),(i&130023424)===i&&(e=$f+500-Mt(),10<e)){if(gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yh(Fr.bind(null,t,cn,Si),e);break}Fr(t,cn,Si);break;case 4:if(tr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cM(i/1960))-i,10<i){t.timeoutHandle=yh(Fr.bind(null,t,cn,Si),i);break}Fr(t,cn,Si);break;case 5:Fr(t,cn,Si);break;default:throw Error(Pe(329))}}}return pn(t,Mt()),t.callbackNode===n?iy.bind(null,t):null}function Bh(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=cn,cn=n,e!==null&&zh(e)),t}function zh(t){cn===null?cn=t:cn.push.apply(cn,t)}function uM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Xf,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Im(t){if(rt&6)throw Error(Pe(327));no();var e=gc(t,0);if(!(e&1))return pn(t,Mt()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=dh(t);i!==0&&(e=i,n=Bh(t,i))}if(n===1)throw n=Ia,$r(t,0),tr(t,e),pn(t,Mt()),n;if(n===6)throw Error(Pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,cn,Si),pn(t,Mt()),null}function qf(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(go=Mt()+500,su&&Rr())}}function is(t){or!==null&&or.tag===0&&!(rt&6)&&no();var e=rt;rt|=1;var n=Dn.transition,i=st;try{if(Dn.transition=null,st=1,t)return t()}finally{st=i,Dn.transition=n,rt=e,!(rt&6)&&Rr()}}function Yf(){yn=Xs.current,ht(Xs)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zE(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:po(),ht(hn),ht(Zt),Ff();break;case 5:kf(i);break;case 4:po();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Nf(i.type._context);break;case 22:case 23:Yf()}n=n.return}if(kt=t,At=t=gr(t.current,null),Vt=yn=e,Rt=0,Ia=null,Xf=cu=ns=0,cn=oa=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function ry(t,e){do{var n=At;try{if(Lf(),Ql.current=Pc,Rc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(ts=0,Dt=Ct=vt=null,ra=!1,Ca=0,jf.current=null,n===null||n.return===null){Rt=1,Ia=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=_m(o);if(g!==null){g.flags&=-257,ym(g,o,a,s,e),g.mode&1&&vm(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){vm(s,c,e),Kf();break e}l=Error(Pe(426))}}else if(ft&&a.mode&1){var p=_m(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ym(p,o,a,s,e),Pf(mo(l,a));break e}}s=l=mo(l,a),Rt!==4&&(Rt=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=H0(s,l,e);dm(s,u);break e;case 1:a=l;var v=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pr===null||!pr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=V0(s,a,e);dm(s,S);break e}}s=s.return}while(s!==null)}ay(n)}catch(C){e=C,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function sy(){var t=Ic.current;return Ic.current=Pc,t===null?Pc:t}function Kf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),kt===null||!(ns&268435455)&&!(cu&268435455)||tr(kt,Vt)}function Dc(t,e){var n=rt;rt|=2;var i=sy();(kt!==t||Vt!==e)&&(Si=null,$r(t,e));do try{dM();break}catch(r){ry(t,r)}while(!0);if(Lf(),rt=n,Ic.current=i,At!==null)throw Error(Pe(261));return kt=null,Vt=0,Rt}function dM(){for(;At!==null;)oy(At)}function hM(){for(;At!==null&&!kS();)oy(At)}function oy(t){var e=cy(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?ay(t):At=e,jf.current=null}function ay(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sM(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=rM(n,e,yn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Fr(t,e,n){var i=st,r=Dn.transition;try{Dn.transition=null,st=1,fM(t,e,n,i)}finally{Dn.transition=r,st=i}return null}function fM(t,e,n,i){do no();while(or!==null);if(rt&6)throw Error(Pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($S(t,s),t===kt&&(At=kt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,uy(mc,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=st;st=1;var a=rt;rt|=4,jf.current=null,aM(t,n),ty(n,t),NE(vh),vc=!!gh,vh=gh=null,t.current=n,lM(n),FS(),rt=a,st=o,Dn.transition=s}else t.current=n;if(pl&&(pl=!1,or=t,Nc=r),s=t.pendingLanes,s===0&&(pr=null),HS(n.stateNode),pn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=kh,kh=null,t;return Nc&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===Fh?aa++:(aa=0,Fh=t):aa=0,Rr(),null}function no(){if(or!==null){var t=H_(Nc),e=Dn.transition,n=st;try{if(Dn.transition=null,st=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,Nc=0,rt&6)throw Error(Pe(331));var r=rt;for(rt|=4,Ge=t.current;Ge!==null;){var s=Ge,o=s.child;if(Ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ge=c;Ge!==null;){var d=Ge;switch(d.tag){case 0:case 11:case 15:sa(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ge=h;else for(;Ge!==null;){d=Ge;var f=d.sibling,g=d.return;if(Z0(d),d===c){Ge=null;break}if(f!==null){f.return=g,Ge=f;break}Ge=g}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ge=o;else e:for(;Ge!==null;){if(s=Ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ge=u;break e}Ge=s.return}}var v=t.current;for(Ge=v;Ge!==null;){o=Ge;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Ge=m;else e:for(o=v;Ge!==null;){if(a=Ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(C){St(a,a.return,C)}if(a===o){Ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ge=S;break e}Ge=a.return}}if(rt=r,Rr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{st=n,Dn.transition=e}}return!1}function Lm(t,e,n){e=mo(n,e),e=H0(t,e,1),t=fr(t,e,1),e=nn(),t!==null&&(Va(t,1,e),pn(t,e))}function St(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){t=mo(n,t),t=V0(e,t,1),e=fr(e,t,1),t=nn(),e!==null&&(Va(e,1,t),pn(e,t));break}}e=e.return}}function pM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Vt&n)===n&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>Mt()-$f?$r(t,0):Xf|=n),pn(t,e)}function ly(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=nn();t=Di(t,e),t!==null&&(Va(t,e,n),pn(t,n))}function mM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ly(t,n)}function gM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Pe(314))}i!==null&&i.delete(e),ly(t,n)}var cy;cy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,iM(t,e,n);dn=!!(t.flags&131072)}else dn=!1,ft&&e.flags&1048576&&f0(e,wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=uo(e,Zt.current);to(e,n),r=zf(null,e,i,t,r,n);var s=Hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=au,e.stateNode=r,r._reactInternals=e,Ah(e,i,t,n),e=Rh(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Cf(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_M(i),t=Vn(i,t),r){case 0:e=Ch(null,e,i,t,n);break e;case 1:e=Em(null,e,i,t,n);break e;case 11:e=xm(null,e,i,t,n);break e;case 14:e=Sm(null,e,i,Vn(i.type,t),n);break e}throw Error(Pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Ch(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Em(t,e,i,r,n);case 3:e:{if(X0(e),t===null)throw Error(Pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y0(t,e),bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=mo(Error(Pe(423)),e),e=Mm(t,e,i,n,r);break e}else if(i!==r){r=mo(Error(Pe(424)),e),e=Mm(t,e,i,n,r);break e}else for(xn=hr(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Wn=null,n=v0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=Ui(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return x0(e),t===null&&Mh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_h(i,r)?o=null:s!==null&&_h(i,s)&&(e.flags|=32),j0(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return $0(t,e,n);case 4:return Of(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fo(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),xm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(Tc,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!hn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,to(e,n),r=Un(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Sm(t,e,i,r,n);case 15:return G0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),tc(t,e),e.tag=1,fn(i)?(t=!0,Ec(e)):t=!1,to(e,n),z0(e,i,r),Ah(e,i,r,n),Rh(null,e,i,!0,t,n);case 19:return q0(t,e,n);case 22:return W0(t,e,n)}throw Error(Pe(156,e.tag))};function uy(t,e){return k_(t,e)}function vM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new vM(t,e,n,i)}function Jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _M(t){if(typeof t=="function")return Jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===vf)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return qr(n.children,r,s,e);case mf:o=8,r|=8;break;case Kd:return t=Nn(12,n,e,r|2),t.elementType=Kd,t.lanes=s,t;case Jd:return t=Nn(13,n,e,r),t.elementType=Jd,t.lanes=s,t;case Zd:return t=Nn(19,n,e,r),t.elementType=Zd,t.lanes=s,t;case x_:return uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case __:o=10;break e;case y_:o=9;break e;case gf:o=11;break e;case vf:o=14;break e;case Ji:o=16,i=null;break e}throw Error(Pe(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function uu(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=x_,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(t,e,n,i,r,s,o,a,l){return t=new yM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function xM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dy(t){if(!t)return wr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(Pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Pe(171))}if(t.tag===1){var n=t.type;if(fn(n))return d0(t,n,e)}return e}function hy(t,e,n,i,r,s,o,a,l){return t=Zf(n,i,!0,t,r,s,o,a,l),t.context=dy(null),n=t.current,i=nn(),r=mr(n),s=Ii(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,Va(t,r,i),pn(t,i),t}function du(t,e,n,i){var r=e.current,s=nn(),o=mr(r);return n=dy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(Kn(t,r,o,s),Zl(t,r,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Nm(t,e),(t=t.alternate)&&Nm(t,e)}function SM(){return null}var fy=typeof reportError=="function"?reportError:function(t){console.error(t)};function ep(t){this._internalRoot=t}hu.prototype.render=ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Pe(409));du(t,e,null,null)};hu.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){du(null,t,null,null)}),e[Ni]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=W_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&X_(t)}};function tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function EM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Uc(o);s.call(c)}}var o=hy(e,i,t,0,null,!1,!1,"",Dm);return t._reactRootContainer=o,t[Ni]=o.current,Ma(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Uc(l);a.call(c)}}var l=Zf(t,0,!1,null,null,!1,!1,"",Dm);return t._reactRootContainer=l,t[Ni]=l.current,Ma(t.nodeType===8?t.parentNode:t),is(function(){du(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uc(o);a.call(l)}}du(e,o,t,r)}else o=EM(n,e,t,r,i);return Uc(o)}V_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(xf(e,n|1),pn(e,Mt()),!(rt&6)&&(go=Mt()+500,Rr()))}break;case 13:is(function(){var i=Di(t,1);if(i!==null){var r=nn();Kn(i,t,1,r)}}),Qf(t,1)}};Sf=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=nn();Kn(e,t,134217728,n)}Qf(t,134217728)}};G_=function(t){if(t.tag===13){var e=mr(t),n=Di(t,e);if(n!==null){var i=nn();Kn(n,t,e,i)}Qf(t,e)}};W_=function(){return st};j_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};lh=function(t,e,n){switch(e){case"input":if(th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(Pe(90));E_(i),th(i,r)}}}break;case"textarea":w_(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};I_=qf;L_=is;var MM={usingClientEntryPoint:!1,Events:[Wa,zs,ru,R_,P_,qf]},Vo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wM={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U_(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||SM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{eu=ml.inject(wM),si=ml}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MM;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(Pe(200));return xM(t,e,null,n)};Mn.createRoot=function(t,e){if(!tp(t))throw Error(Pe(299));var n=!1,i="",r=fy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Ma(t.nodeType===8?t.parentNode:t),new ep(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Pe(188)):(t=Object.keys(t).join(","),Error(Pe(268,t)));return t=U_(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return is(t)};Mn.hydrate=function(t,e,n){if(!fu(e))throw Error(Pe(200));return pu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!tp(t))throw Error(Pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hy(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,Ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hu(e)};Mn.render=function(t,e,n){if(!fu(e))throw Error(Pe(200));return pu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!fu(t))throw Error(Pe(40));return t._reactRootContainer?(is(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Mn.unstable_batchedUpdates=qf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(Pe(200));if(t==null||t._reactInternals===void 0)throw Error(Pe(38));return pu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(py)}catch(t){console.error(t)}}py(),p_.exports=Mn;var TM=p_.exports,Um=TM;qd.createRoot=Um.createRoot,qd.hydrateRoot=Um.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="160",ms={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AM=0,Om=1,bM=2,my=1,CM=2,xi=3,Tr=0,Kt=1,In=2,vr=0,io=1,la=2,km=3,Fm=4,RM=5,Hr=100,PM=101,IM=102,Bm=103,zm=104,LM=200,NM=201,DM=202,UM=203,Hh=204,Vh=205,OM=206,kM=207,FM=208,BM=209,zM=210,HM=211,VM=212,GM=213,WM=214,jM=0,XM=1,$M=2,Oc=3,qM=4,YM=5,KM=6,JM=7,gy=0,ZM=1,QM=2,_r=0,ew=1,tw=2,nw=3,iw=4,rw=5,sw=6,vy=300,vo=301,_o=302,Gh=303,Wh=304,mu=306,jh=1e3,Xn=1001,Xh=1002,tn=1003,Hm=1004,nd=1005,Rn=1006,ow=1007,La=1008,yr=1009,aw=1010,lw=1011,ip=1012,_y=1013,ar=1014,lr=1015,Na=1016,yy=1017,xy=1018,Yr=1020,cw=1021,$n=1023,uw=1024,dw=1025,Kr=1026,yo=1027,hw=1028,Sy=1029,fw=1030,Ey=1031,My=1033,id=33776,rd=33777,sd=33778,od=33779,Vm=35840,Gm=35841,Wm=35842,jm=35843,wy=36196,Xm=37492,$m=37496,qm=37808,Ym=37809,Km=37810,Jm=37811,Zm=37812,Qm=37813,eg=37814,tg=37815,ng=37816,ig=37817,rg=37818,sg=37819,og=37820,ag=37821,ad=36492,lg=36494,cg=36495,pw=36283,ug=36284,dg=36285,hg=36286,Ty=3e3,Jr=3001,mw=3200,gw=3201,Ay=0,vw=1,Ln="",Ut="srgb",Oi="srgb-linear",rp="display-p3",gu="display-p3-linear",kc="linear",dt="srgb",Fc="rec709",Bc="p3",vs=7680,fg=519,_w=512,yw=513,xw=514,by=515,Sw=516,Ew=517,Mw=518,ww=519,pg=35044,mg="300 es",$h=1035,Ai=2e3,zc=2001;class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,qh=180/Math.PI;function Ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Ht(t,e,n){return Math.max(e,Math.min(n,t))}function Tw(t,e){return(t%e+e)%e}function ld(t,e,n){return(1-n)*t+n*e}function gg(t){return(t&t-1)===0&&t!==0}function Yh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Go(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Aw={DEG2RAD:sc};class Re{constructor(e=0,n=0){Re.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],x=i[8],_=r[0],p=r[3],u=r[6],v=r[1],m=r[4],S=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*p+a*m+l*A,s[6]=o*u+a*S+l*b,s[1]=c*_+d*v+h*C,s[4]=c*p+d*m+h*A,s[7]=c*u+d*S+h*b,s[2]=f*_+g*v+x*C,s[5]=f*p+g*m+x*A,s[8]=f*u+g*S+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,x=n*h+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cd.makeScale(e,n)),this}rotate(e){return this.premultiply(cd.makeRotation(-e)),this}translate(e,n){return this.premultiply(cd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new Ke;function Cy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bw(){const t=Hc("canvas");return t.style.display="block",t}const vg={};function ca(t){t in vg||(vg[t]=!0,console.warn(t))}const _g=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yg=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gl={[Oi]:{transfer:kc,primaries:Fc,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:dt,primaries:Fc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gu]:{transfer:kc,primaries:Bc,toReference:t=>t.applyMatrix3(yg),fromReference:t=>t.applyMatrix3(_g)},[rp]:{transfer:dt,primaries:Bc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(yg),fromReference:t=>t.applyMatrix3(_g).convertLinearToSRGB()}},Cw=new Set([Oi,gu]),ot={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Cw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=gl[e].toReference,r=gl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return gl[t].primaries},getTransfer:function(t){return t===Ln?kc:gl[t].transfer}};function ro(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ud(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _s;class Ry{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_s===void 0&&(_s=Hc("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_s}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ro(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ro(n[i]/255)*255):n[i]=ro(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rw=0;class Py{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=Ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dd(r[o].image)):s.push(dd(r[o]))}else s=dd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ry.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pw=0;class mn extends us{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Xn,r=Xn,s=Rn,o=La,a=$n,l=yr,c=mn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Ao(),this.name="",this.source=new Py(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Jr?Ut:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Jr:Ty}set encoding(e){ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?Ut:Ln}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=vy;mn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,S=(g+1)/2,C=(u+1)/2,A=(d+f)/4,b=(h+_)/4,B=(x+p)/4;return m>S&&m>C?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=b/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=B/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=B/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-_)/v,this.z=(f-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iw extends us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ca("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jr?Ut:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Py(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends Iw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Iy extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lw extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==f||c!==g||d!==x){let p=1-a;const u=l*f+c*g+d*x+h*_,v=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const C=Math.sqrt(m),A=Math.atan2(C,u*v);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const S=a*v;if(l=l*p+f*S,c=c*p+g*S,d=d*p+x*S,h=h*p+_*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*g-c*f,e[n+1]=l*x+d*f+c*h-a*g,e[n+2]=c*x+d*g+a*f-l*h,e[n+3]=d*x-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"YXZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"ZXY":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"ZYX":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"YZX":this._x=f*d*h+c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h-f*g*x;break;case"XZY":this._x=f*d*h-c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new j,xg=new Ar;class Xa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),_l.subVectors(this.max,Wo),ys.subVectors(e.a,Wo),xs.subVectors(e.b,Wo),Ss.subVectors(e.c,Wo),ji.subVectors(xs,ys),Xi.subVectors(Ss,xs),Lr.subVectors(ys,Ss);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Lr.z,Lr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Lr.z,0,-Lr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Lr.y,Lr.x,0];return!fd(n,ys,xs,Ss,_l)||(n=[1,0,0,0,1,0,0,0,1],!fd(n,ys,xs,Ss,_l))?!1:(yl.crossVectors(ji,Xi),n=[yl.x,yl.y,yl.z],fd(n,ys,xs,Ss,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new j,new j,new j,new j,new j,new j,new j,new j],Bn=new j,vl=new Xa,ys=new j,xs=new j,Ss=new j,ji=new j,Xi=new j,Lr=new j,Wo=new j,_l=new j,yl=new j,Nr=new j;function fd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),d=i.dot(Nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Nw=new Xa,jo=new j,pd=new j;class vu{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Nw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(pd)),this.expandByPoint(jo.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new j,md=new j,xl=new j,$i=new j,gd=new j,Sl=new j,vd=new j;class sp{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){md.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(md);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xl),a=$i.dot(this.direction),l=-$i.dot(xl),c=$i.lengthSq(),d=Math.abs(1-o*o);let h,f,g,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const _=1/d;h*=_,f*=_,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(md).addScaledVector(xl,f),g}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){gd.subVectors(n,e),Sl.subVectors(i,e),vd.crossVectors(gd,Sl);let o=this.direction.dot(vd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors($i,Sl));if(l<0)return null;const c=a*this.direction.dot(gd.cross($i));if(c<0||l+c>o)return null;const d=-a*$i.dot(vd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,x,_,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,x,_,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,x,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,x=a*d,_=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+x*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,x=c*d,_=c*h;n[0]=f+_*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,x=c*d,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,x=a*d,_=a*h;n[0]=l*d,n[4]=x*c-g,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=_-f*h,n[8]=x*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+x,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,g=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+_,n[5]=o*d,n[9]=g*h-x,n[2]=x*h-g,n[6]=a*d,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dw,e,Uw)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),qi.crossVectors(i,vn),qi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),qi.crossVectors(i,vn)),qi.normalize(),El.crossVectors(vn,qi),r[0]=qi.x,r[4]=El.x,r[8]=vn.x,r[1]=qi.y,r[5]=El.y,r[9]=vn.y,r[2]=qi.z,r[6]=El.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],x=i[2],_=i[6],p=i[10],u=i[14],v=i[3],m=i[7],S=i[11],C=i[15],A=r[0],b=r[4],B=r[8],w=r[12],R=r[1],V=r[5],W=r[9],pe=r[13],k=r[2],Q=r[6],J=r[10],ie=r[14],D=r[3],Y=r[7],K=r[11],ge=r[15];return s[0]=o*A+a*R+l*k+c*D,s[4]=o*b+a*V+l*Q+c*Y,s[8]=o*B+a*W+l*J+c*K,s[12]=o*w+a*pe+l*ie+c*ge,s[1]=d*A+h*R+f*k+g*D,s[5]=d*b+h*V+f*Q+g*Y,s[9]=d*B+h*W+f*J+g*K,s[13]=d*w+h*pe+f*ie+g*ge,s[2]=x*A+_*R+p*k+u*D,s[6]=x*b+_*V+p*Q+u*Y,s[10]=x*B+_*W+p*J+u*K,s[14]=x*w+_*pe+p*ie+u*ge,s[3]=v*A+m*R+S*k+C*D,s[7]=v*b+m*V+S*Q+C*Y,s[11]=v*B+m*W+S*J+C*K,s[15]=v*w+m*pe+S*ie+C*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+_*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+p*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],x=e[12],_=e[13],p=e[14],u=e[15],v=h*p*c-_*f*c+_*l*g-a*p*g-h*l*u+a*f*u,m=x*f*c-d*p*c-x*l*g+o*p*g+d*l*u-o*f*u,S=d*_*c-x*h*c+x*a*g-o*_*g-d*a*u+o*h*u,C=x*h*l-d*_*l-x*a*f+o*_*f+d*a*p-o*h*p,A=n*v+i*m+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(_*f*s-h*p*s-_*r*g+i*p*g+h*r*u-i*f*u)*b,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*b,e[4]=m*b,e[5]=(d*p*s-x*f*s+x*r*g-n*p*g-d*r*u+n*f*u)*b,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*b,e[8]=S*b,e[9]=(x*h*s-d*_*s-x*i*g+n*_*g+d*i*u-n*h*u)*b,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*u+n*a*u)*b,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*b,e[12]=C*b,e[13]=(d*_*r-x*h*r+x*i*f-n*_*f-d*i*p+n*h*p)*b,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*b,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,x=s*h,_=o*d,p=o*h,u=a*h,v=l*c,m=l*d,S=l*h,C=i.x,A=i.y,b=i.z;return r[0]=(1-(_+u))*C,r[1]=(g+S)*C,r[2]=(x-m)*C,r[3]=0,r[4]=(g-S)*A,r[5]=(1-(f+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(x+m)*b,r[9]=(p-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Es.set(r[0],r[1],r[2]).length();const o=Es.set(r[4],r[5],r[6]).length(),a=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,d=1/o,h=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,x;if(a===Ai)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===zc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let x,_;if(a===Ai)x=(o+s)*h,_=-2*h;else if(a===zc)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Es=new j,zn=new _t,Dw=new j(0,0,0),Uw=new j(1,1,1),qi=new j,El=new j,vn=new j,Sg=new _t,Eg=new Ar;class _u{constructor(e=0,n=0,i=0,r=_u.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_u.DEFAULT_ORDER="XYZ";class Ly{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ow=0;const Mg=new j,Ms=new Ar,gi=new _t,Ml=new j,Xo=new j,kw=new j,Fw=new Ar,wg=new j(1,0,0),Tg=new j(0,1,0),Ag=new j(0,0,1),Bw={type:"added"},zw={type:"removed"};class Ft extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new j,n=new _u,i=new Ar,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ml.copy(e):Ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Xo,Ml,this.up):gi.lookAt(Ml,Xo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(gi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,kw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Fw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new j(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new j,vi=new j,_d=new j,_i=new j,ws=new j,Ts=new j,bg=new j,yd=new j,xd=new j,Sd=new j;let wl=!1;class jn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),vi.subVectors(i,n),_d.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(vi),l=Hn.dot(_d),c=vi.dot(vi),d=vi.dot(_d),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,n,i,r,s,o,a,l){return wl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),vi.subVectors(e,n),Hn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return wl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wl=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Ts.subVectors(s,i),yd.subVectors(e,i);const l=ws.dot(yd),c=Ts.dot(yd);if(l<=0&&c<=0)return n.copy(i);xd.subVectors(e,r);const d=ws.dot(xd),h=Ts.dot(xd);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ws,o);Sd.subVectors(e,s);const g=ws.dot(Sd),x=Ts.dot(Sd);if(x>=0&&g<=x)return n.copy(s);const _=g*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ts,a);const p=d*x-g*h;if(p<=0&&h-d>=0&&g-x>=0)return bg.subVectors(s,r),a=(h-d)/(h-d+(g-x)),n.copy(r).addScaledVector(bg,a);const u=1/(p+_+f);return o=_*u,a=f*u,n.copy(i).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ny={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=Tw(e,1),n=Ht(n,0,1),i=Ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ed(o,s,e+1/3),this.g=Ed(o,s,e),this.b=Ed(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=Ny[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=ud(e.r),this.g=ud(e.g),this.b=ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ot.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ht(qt.r*255,0,255))*65536+Math.round(Ht(qt.g*255,0,255))*256+Math.round(Ht(qt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ut){ot.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Tl);const i=ld(Yi.h,Tl.h,n),r=ld(Yi.s,Tl.s,n),s=ld(Yi.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new it;it.NAMES=Ny;let Hw=0;class bo extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hw++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=io,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Vh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ua extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,Al=new Re;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Al.fromBufferAttribute(this,n),Al.applyMatrix3(e),this.setXY(n,Al.x,Al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Go(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Go(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Go(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Go(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pg&&(e.usage=this.usage),e}}class Dy extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uy extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Vw=0;const An=new _t,Md=new Ft,As=new j,_n=new Xa,$o=new Xa,Nt=new j;class kn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cy(e)?Uy:Dy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(_n.min,$o.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,$o.max),_n.expandByPoint(Nt)):(_n.expandByPoint($o.min),_n.expandByPoint($o.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Nt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Nt.add(As)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let R=0;R<a;R++)c[R]=new j,d[R]=new j;const h=new j,f=new j,g=new j,x=new Re,_=new Re,p=new Re,u=new j,v=new j;function m(R,V,W){h.fromArray(r,R*3),f.fromArray(r,V*3),g.fromArray(r,W*3),x.fromArray(o,R*2),_.fromArray(o,V*2),p.fromArray(o,W*2),f.sub(h),g.sub(h),_.sub(x),p.sub(x);const pe=1/(_.x*p.y-p.x*_.y);isFinite(pe)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(pe),v.copy(g).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(pe),c[R].add(u),c[V].add(u),c[W].add(u),d[R].add(v),d[V].add(v),d[W].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,V=S.length;R<V;++R){const W=S[R],pe=W.start,k=W.count;for(let Q=pe,J=pe+k;Q<J;Q+=3)m(i[Q+0],i[Q+1],i[Q+2])}const C=new j,A=new j,b=new j,B=new j;function w(R){b.fromArray(s,R*3),B.copy(b);const V=c[R];C.copy(V),C.sub(b.multiplyScalar(b.dot(V))).normalize(),A.crossVectors(B,V);const pe=A.dot(d[R])<0?-1:1;l[R*4]=C.x,l[R*4+1]=C.y,l[R*4+2]=C.z,l[R*4+3]=pe}for(let R=0,V=S.length;R<V;++R){const W=S[R],pe=W.start,k=W.count;for(let Q=pe,J=pe+k;Q<J;Q+=3)w(i[Q+0]),w(i[Q+1]),w(i[Q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,h=new j;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*d;for(let u=0;u<d;u++)f[x++]=c[g++]}return new Jn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new _t,Dr=new sp,bl=new vu,Rg=new j,bs=new j,Cs=new j,Rs=new j,wd=new j,Cl=new j,Rl=new Re,Pl=new Re,Il=new Re,Pg=new j,Ig=new j,Lg=new j,Ll=new j,Nl=new j;class un extends Ft{constructor(e=new kn,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(wd.fromBufferAttribute(h,e),o?Cl.addScaledVector(wd,d):Cl.addScaledVector(wd.sub(n),d))}n.add(Cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(bl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(bl,Rg)===null||Dr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const p=f[x],u=o[p.materialIndex],v=Math.max(p.start,g.start),m=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=v,C=m;S<C;S+=3){const A=a.getX(S),b=a.getX(S+1),B=a.getX(S+2);r=Dl(this,u,e,i,c,d,h,A,b,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=x,u=_;p<u;p+=3){const v=a.getX(p),m=a.getX(p+1),S=a.getX(p+2);r=Dl(this,o,e,i,c,d,h,v,m,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const p=f[x],u=o[p.materialIndex],v=Math.max(p.start,g.start),m=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=v,C=m;S<C;S+=3){const A=S,b=S+1,B=S+2;r=Dl(this,u,e,i,c,d,h,A,b,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=x,u=_;p<u;p+=3){const v=p,m=p+1,S=p+2;r=Dl(this,o,e,i,c,d,h,v,m,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Gw(t,e,n,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;Nl.copy(a),Nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Nl);return c<n.near||c>n.far?null:{distance:c,point:Nl.clone(),object:t}}function Dl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,bs),t.getVertexPosition(l,Cs),t.getVertexPosition(c,Rs);const d=Gw(t,e,n,i,bs,Cs,Rs,Ll);if(d){r&&(Rl.fromBufferAttribute(r,a),Pl.fromBufferAttribute(r,l),Il.fromBufferAttribute(r,c),d.uv=jn.getInterpolation(Ll,bs,Cs,Rs,Rl,Pl,Il,new Re)),s&&(Rl.fromBufferAttribute(s,a),Pl.fromBufferAttribute(s,l),Il.fromBufferAttribute(s,c),d.uv1=jn.getInterpolation(Ll,bs,Cs,Rs,Rl,Pl,Il,new Re),d.uv2=d.uv1),o&&(Pg.fromBufferAttribute(o,a),Ig.fromBufferAttribute(o,l),Lg.fromBufferAttribute(o,c),d.normal=jn.getInterpolation(Ll,bs,Cs,Rs,Pg,Ig,Lg,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};jn.getNormal(bs,Cs,Rs,h.normal),d.face=h}return d}class $a extends kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(h,2));function x(_,p,u,v,m,S,C,A,b,B,w){const R=S/b,V=C/B,W=S/2,pe=C/2,k=A/2,Q=b+1,J=B+1;let ie=0,D=0;const Y=new j;for(let K=0;K<J;K++){const ge=K*V-pe;for(let xe=0;xe<Q;xe++){const le=xe*R-W;Y[_]=le*v,Y[p]=ge*m,Y[u]=k,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[u]=A>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(xe/b),h.push(1-K/B),ie+=1}}for(let K=0;K<B;K++)for(let ge=0;ge<b;ge++){const xe=f+ge+Q*K,le=f+ge+Q*(K+1),U=f+(ge+1)+Q*(K+1),N=f+(ge+1)+Q*K;l.push(xe,le,N),l.push(le,U,N),D+=6}a.addGroup(g,D,w),g+=D,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function Ww(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Oy(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const jw={clone:xo,merge:Qt};var Xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$w=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xw,this.fragmentShader=$w,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ky extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends ky{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Is=1;class qw extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Ps,Is,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Ps,Is,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Ps,Is,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Ps,Is,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Ps,Is,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Ps,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Fy extends mn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:vo,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yw extends rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ca("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jr?Ut:Ln),this.texture=new Fy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $a(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:vr});s.uniforms.tEquirect.value=n;const o=new un(r,s),a=n.minFilter;return n.minFilter===La&&(n.minFilter=Rn),new qw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Td=new j,Kw=new j,Jw=new Ke;class Qi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Td.subVectors(i,n).cross(Kw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Td),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Jw.getNormalMatrix(e),r=this.coplanarPoint(Td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new vu,Ul=new j;class op{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],_=r[10],p=r[11],u=r[12],v=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-g,S-u).normalize(),i[1].setComponents(l+s,f+c,p+g,S+u).normalize(),i[2].setComponents(l+o,f+d,p+x,S+v).normalize(),i[3].setComponents(l-o,f-d,p-x,S-v).normalize(),i[4].setComponents(l-a,f-h,p-_,S-m).normalize(),n===Ai)i[5].setComponents(l+a,f+h,p+_,S+m).normalize();else if(n===zc)i[5].setComponents(a,h,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function By(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Zw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,g=h.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,h){const f=d.array,g=d._updateRange,x=d.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&x.length===0&&t.bufferSubData(h,0,f),x.length!==0){for(let _=0,p=x.length;_<p;_++){const u=x[_];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Da extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],x=[],_=[],p=[];for(let u=0;u<d;u++){const v=u*f-o;for(let m=0;m<c;m++){const S=m*h-s;x.push(S,-v,0),_.push(0,0,1),p.push(m/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const m=v+c*u,S=v+c*(u+1),C=v+1+c*(u+1),A=v+1+c*u;g.push(m,S,A),g.push(S,C,A)}this.setIndex(g),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
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
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sT=`#ifdef USE_AOMAP
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
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
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
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hT=`#ifdef USE_IRIDESCENCE
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
#endif`,fT=`#ifdef USE_BUMPMAP
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ET=`#define PI 3.141592653589793
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
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wT=`vec3 transformedNormal = objectNormal;
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
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`
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
}`,IT=`#ifdef USE_ENVMAP
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
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zT=`#ifdef USE_GRADIENTMAP
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
}`,HT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jT=`uniform bool receiveShadow;
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
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,$T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JT=`PhysicalMaterial material;
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
#endif`,ZT=`struct PhysicalMaterial {
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
}`,QT=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c1=`#if defined( USE_POINTS_UV )
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
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
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
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
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
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k1=`float getShadowMask() {
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
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B1=`#ifdef USE_SKINNING
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
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,sA=`#if DEPTH_PACKING == 3200
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
}`,oA=`#define DISTANCE
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
}`,aA=`#define DISTANCE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,fA=`uniform vec3 diffuse;
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define MATCAP
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
}`,vA=`#define MATCAP
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
}`,_A=`#define NORMAL
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
}`,yA=`#define NORMAL
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
}`,xA=`#define PHONG
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
}`,SA=`#define PHONG
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
}`,EA=`#define STANDARD
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
}`,MA=`#define STANDARD
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
}`,wA=`#define TOON
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
}`,TA=`#define TOON
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
}`,AA=`uniform float size;
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
}`,bA=`uniform vec3 diffuse;
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
}`,CA=`#include <common>
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
}`,RA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Qw,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:rT,aomap_fragment:sT,aomap_pars_fragment:oT,batching_pars_vertex:aT,batching_vertex:lT,begin_vertex:cT,beginnormal_vertex:uT,bsdfs:dT,iridescence_fragment:hT,bumpmap_pars_fragment:fT,clipping_planes_fragment:pT,clipping_planes_pars_fragment:mT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:vT,color_fragment:_T,color_pars_fragment:yT,color_pars_vertex:xT,color_vertex:ST,common:ET,cube_uv_reflection_fragment:MT,defaultnormal_vertex:wT,displacementmap_pars_vertex:TT,displacementmap_vertex:AT,emissivemap_fragment:bT,emissivemap_pars_fragment:CT,colorspace_fragment:RT,colorspace_pars_fragment:PT,envmap_fragment:IT,envmap_common_pars_fragment:LT,envmap_pars_fragment:NT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:XT,envmap_vertex:UT,fog_vertex:OT,fog_pars_vertex:kT,fog_fragment:FT,fog_pars_fragment:BT,gradientmap_pars_fragment:zT,lightmap_fragment:HT,lightmap_pars_fragment:VT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:WT,lights_pars_begin:jT,lights_toon_fragment:$T,lights_toon_pars_fragment:qT,lights_phong_fragment:YT,lights_phong_pars_fragment:KT,lights_physical_fragment:JT,lights_physical_pars_fragment:ZT,lights_fragment_begin:QT,lights_fragment_maps:e1,lights_fragment_end:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:a1,map_particle_fragment:l1,map_particle_pars_fragment:c1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:d1,morphcolor_vertex:h1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:v1,normal_pars_fragment:_1,normal_pars_vertex:y1,normal_vertex:x1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:T1,opaque_fragment:A1,packing:b1,premultiplied_alpha_fragment:C1,project_vertex:R1,dithering_fragment:P1,dithering_pars_fragment:I1,roughnessmap_fragment:L1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:D1,shadowmap_pars_vertex:U1,shadowmap_vertex:O1,shadowmask_pars_fragment:k1,skinbase_vertex:F1,skinning_pars_vertex:B1,skinning_vertex:z1,skinnormal_vertex:H1,specularmap_fragment:V1,specularmap_pars_fragment:G1,tonemapping_fragment:W1,tonemapping_pars_fragment:j1,transmission_fragment:X1,transmission_pars_fragment:$1,uv_pars_fragment:q1,uv_pars_vertex:Y1,uv_vertex:K1,worldpos_vertex:J1,background_vert:Z1,background_frag:Q1,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:rA,depth_frag:sA,distanceRGBA_vert:oA,distanceRGBA_frag:aA,equirect_vert:lA,equirect_frag:cA,linedashed_vert:uA,linedashed_frag:dA,meshbasic_vert:hA,meshbasic_frag:fA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:vA,meshnormal_vert:_A,meshnormal_frag:yA,meshphong_vert:xA,meshphong_frag:SA,meshphysical_vert:EA,meshphysical_frag:MA,meshtoon_vert:wA,meshtoon_frag:TA,points_vert:AA,points_frag:bA,shadow_vert:CA,shadow_frag:RA,sprite_vert:PA,sprite_frag:IA},Fe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ii={basic:{uniforms:Qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Qt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Qt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Qt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Qt([Fe.points,Fe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Qt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Qt([Fe.common,Fe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Qt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Qt([Fe.sprite,Fe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Qt([Fe.common,Fe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Qt([Fe.lights,Fe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ii.physical={uniforms:Qt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ol={r:0,b:0,g:0};function LA(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function x(p,u){let v=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?_(a,l):m&&m.isColor&&(_(m,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===mu)?(d===void 0&&(d=new un(new $a(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:xo(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=m,d.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ot.getTransfer(m.colorSpace)!==dt,(h!==m||f!==m.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=m,f=m.version,g=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new un(new Da(2,2),new ki({name:"BackgroundMaterial",uniforms:xo(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ot.getTransfer(m.colorSpace)!==dt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||f!==m.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,f=m.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(Ol,Oy(t)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function NA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(k,Q,J,ie,D){let Y=!1;if(o){const K=_(ie,J,Q);c!==K&&(c=K,g(c.object)),Y=u(k,ie,J,D),Y&&v(k,ie,J,D)}else{const K=Q.wireframe===!0;(c.geometry!==ie.id||c.program!==J.id||c.wireframe!==K)&&(c.geometry=ie.id,c.program=J.id,c.wireframe=K,Y=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,B(k,Q,J,ie),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function _(k,Q,J){const ie=J.wireframe===!0;let D=a[k.id];D===void 0&&(D={},a[k.id]=D);let Y=D[Q.id];Y===void 0&&(Y={},D[Q.id]=Y);let K=Y[ie];return K===void 0&&(K=p(f()),Y[ie]=K),K}function p(k){const Q=[],J=[],ie=[];for(let D=0;D<r;D++)Q[D]=0,J[D]=0,ie[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:J,attributeDivisors:ie,object:k,attributes:{},index:null}}function u(k,Q,J,ie){const D=c.attributes,Y=Q.attributes;let K=0;const ge=J.getAttributes();for(const xe in ge)if(ge[xe].location>=0){const U=D[xe];let N=Y[xe];if(N===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(N=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(N=k.instanceColor)),U===void 0||U.attribute!==N||N&&U.data!==N.data)return!0;K++}return c.attributesNum!==K||c.index!==ie}function v(k,Q,J,ie){const D={},Y=Q.attributes;let K=0;const ge=J.getAttributes();for(const xe in ge)if(ge[xe].location>=0){let U=Y[xe];U===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const N={};N.attribute=U,U&&U.data&&(N.data=U.data),D[xe]=N,K++}c.attributes=D,c.attributesNum=K,c.index=ie}function m(){const k=c.newAttributes;for(let Q=0,J=k.length;Q<J;Q++)k[Q]=0}function S(k){C(k,0)}function C(k,Q){const J=c.newAttributes,ie=c.enabledAttributes,D=c.attributeDivisors;J[k]=1,ie[k]===0&&(t.enableVertexAttribArray(k),ie[k]=1),D[k]!==Q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Q),D[k]=Q)}function A(){const k=c.newAttributes,Q=c.enabledAttributes;for(let J=0,ie=Q.length;J<ie;J++)Q[J]!==k[J]&&(t.disableVertexAttribArray(J),Q[J]=0)}function b(k,Q,J,ie,D,Y,K){K===!0?t.vertexAttribIPointer(k,Q,J,D,Y):t.vertexAttribPointer(k,Q,J,ie,D,Y)}function B(k,Q,J,ie){if(i.isWebGL2===!1&&(k.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const D=ie.attributes,Y=J.getAttributes(),K=Q.defaultAttributeValues;for(const ge in Y){const xe=Y[ge];if(xe.location>=0){let le=D[ge];if(le===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(le=k.instanceColor)),le!==void 0){const U=le.normalized,N=le.itemSize,P=n.get(le);if(P===void 0)continue;const M=P.buffer,q=P.type,oe=P.bytesPerElement,$=i.isWebGL2===!0&&(q===t.INT||q===t.UNSIGNED_INT||le.gpuType===_y);if(le.isInterleavedBufferAttribute){const ve=le.data,z=ve.stride,Ue=le.offset;if(ve.isInstancedInterleavedBuffer){for(let ne=0;ne<xe.locationSize;ne++)C(xe.location+ne,ve.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ne=0;ne<xe.locationSize;ne++)S(xe.location+ne);t.bindBuffer(t.ARRAY_BUFFER,M);for(let ne=0;ne<xe.locationSize;ne++)b(xe.location+ne,N/xe.locationSize,q,U,z*oe,(Ue+N/xe.locationSize*ne)*oe,$)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<xe.locationSize;ve++)C(xe.location+ve,le.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<xe.locationSize;ve++)S(xe.location+ve);t.bindBuffer(t.ARRAY_BUFFER,M);for(let ve=0;ve<xe.locationSize;ve++)b(xe.location+ve,N/xe.locationSize,q,U,N*oe,N/xe.locationSize*ve*oe,$)}}else if(K!==void 0){const U=K[ge];if(U!==void 0)switch(U.length){case 2:t.vertexAttrib2fv(xe.location,U);break;case 3:t.vertexAttrib3fv(xe.location,U);break;case 4:t.vertexAttrib4fv(xe.location,U);break;default:t.vertexAttrib1fv(xe.location,U)}}}}A()}function w(){W();for(const k in a){const Q=a[k];for(const J in Q){const ie=Q[J];for(const D in ie)x(ie[D].object),delete ie[D];delete Q[J]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;const Q=a[k.id];for(const J in Q){const ie=Q[J];for(const D in ie)x(ie[D].object),delete ie[D];delete Q[J]}delete a[k.id]}function V(k){for(const Q in a){const J=a[Q];if(J[k.id]===void 0)continue;const ie=J[k.id];for(const D in ie)x(ie[D].object),delete ie[D];delete J[k.id]}}function W(){pe(),d=!0,c!==l&&(c=l,g(c.object))}function pe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:pe,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:V,initAttributes:m,enableAttribute:S,disableUnusedAttributes:A}}function DA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let g,x;if(r)g=t,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<f;x++)this.render(d[x],h[x]);else{g.multiDrawArraysWEBGL(s,d,0,h,0,f);let x=0;for(let _=0;_<f;_++)x+=h[_];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function UA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,S=o||e.has("OES_texture_float"),C=m&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function OA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,m=v*4;let S=u.clippingState||null;l.value=S,S=d(x,f,m,g);for(let C=0;C!==m;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,x){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=g+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let m=0,S=g;m!==_;++m,S+=4)o.copy(h[m]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function kA(t){let e=new WeakMap;function n(o,a){return a===Gh?o.mapping=vo:a===Wh&&(o.mapping=_o),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gh||a===Wh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yw(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zy extends ky{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $s=4,Ng=[.125,.215,.35,.446,.526,.582],Vr=20,Ad=new zy,Dg=new it;let bd=null,Cd=0,Rd=0;const Br=(1+Math.sqrt(5))/2,Ls=1/Br,Ug=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Br,Ls),new j(0,Br,-Ls),new j(Ls,0,Br),new j(-Ls,0,Br),new j(Br,Ls,0),new j(-Br,Ls,0)];class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Cd,Rd),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Na,format:$n,colorSpace:Oi,depthBuffer:!1},r=kg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FA(s)),this._blurMaterial=BA(s,e,n)}return r}_compileMaterial(e){const n=new un(this._lodPlanes[0],e);this._renderer.compile(n,Ad)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Dg),d.toneMapping=_r,d.autoClear=!1;const g=new ua({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),x=new un(new $a,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(Dg),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;kl(r,v*m,u>2?m:0,m,m),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vo||e.mapping===_o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ug[(r-1)%Ug.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new un(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Vr-1),_=s/x,p=isFinite(s)?1+Math.floor(d*_):Vr;p>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);const u=[];let v=0;for(let b=0;b<Vr;++b){const B=b/_,w=Math.exp(-B*B/2);u.push(w),b===0?v+=w:b<p&&(v+=2*w)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=x,f.mipInt.value=m-i;const S=this._sizeLods[r],C=3*S*(r>m-$s?r-m+$s:0),A=4*(this._cubeSize-S);kl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Ad)}}function FA(t){const e=[],n=[],i=[];let r=t;const s=t-$s+1+Ng.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-$s?l=Ng[o-t+$s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,x=6,_=3,p=2,u=1,v=new Float32Array(_*x*g),m=new Float32Array(p*x*g),S=new Float32Array(u*x*g);for(let A=0;A<g;A++){const b=A%3*2/3-1,B=A>2?0:-1,w=[b,B,0,b+2/3,B,0,b+2/3,B+1,0,b,B,0,b+2/3,B+1,0,b,B+1,0];v.set(w,_*x*A),m.set(f,p*x*A);const R=[A,A,A,A,A,A];S.set(R,u*x*A)}const C=new kn;C.setAttribute("position",new Jn(v,_)),C.setAttribute("uv",new Jn(m,p)),C.setAttribute("faceIndex",new Jn(S,u)),e.push(C),r>$s&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kg(t,e,n){const i=new rs(t,e,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BA(t,e,n){const i=new Float32Array(Vr),r=new j(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ap(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Fg(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Bg(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function ap(){return`

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
	`}function zA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gh||l===Wh,d=l===vo||l===_o;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Og(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Og(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const _=g[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,x=h.attributes.position;let _=0;if(g!==null){const v=g.array;_=g.version;for(let m=0,S=v.length;m<S;m+=3){const C=v[m+0],A=v[m+1],b=v[m+2];f.push(C,A,A,b,b,C)}}else if(x!==void 0){const v=x.array;_=x.version;for(let m=0,S=v.length/3-1;m<S;m+=3){const C=m+0,A=m+1,b=m+2;f.push(C,A,A,b,b,C)}}else return;const p=new(Cy(f)?Uy:Dy)(f,1);p.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function GA(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,x){t.drawElements(s,x,a,g*l),n.update(x,s,1)}function h(g,x,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,g*l,_),n.update(x,s,_)}function f(g,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(g[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,g,0,_);let u=0;for(let v=0;v<_;v++)u+=x[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function WA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jA(t,e){return t[0]-e[0]}function XA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $A(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let Q=function(){pe.dispose(),s.delete(d),d.removeEventListener("dispose",Q)};var g=Q;p!==void 0&&p.texture.dispose();const m=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let w=0;m===!0&&(w=1),S===!0&&(w=2),C===!0&&(w=3);let R=d.attributes.position.count*w,V=1;R>e.maxTextureSize&&(V=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const W=new Float32Array(R*V*4*_),pe=new Iy(W,R,V,_);pe.type=lr,pe.needsUpdate=!0;const k=w*4;for(let J=0;J<_;J++){const ie=A[J],D=b[J],Y=B[J],K=R*V*4*J;for(let ge=0;ge<ie.count;ge++){const xe=ge*k;m===!0&&(o.fromBufferAttribute(ie,ge),W[K+xe+0]=o.x,W[K+xe+1]=o.y,W[K+xe+2]=o.z,W[K+xe+3]=0),S===!0&&(o.fromBufferAttribute(D,ge),W[K+xe+4]=o.x,W[K+xe+5]=o.y,W[K+xe+6]=o.z,W[K+xe+7]=0),C===!0&&(o.fromBufferAttribute(Y,ge),W[K+xe+8]=o.x,W[K+xe+9]=o.y,W[K+xe+10]=o.z,W[K+xe+11]=Y.itemSize===4?o.w:1)}}p={count:_,texture:pe,size:new Re(R,V)},s.set(d,p),d.addEventListener("dispose",Q)}let u=0;for(let m=0;m<f.length;m++)u+=f[m];const v=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let S=0;S<x;S++)_[S]=[S,0];i[d.id]=_}for(let S=0;S<x;S++){const C=_[S];C[0]=S,C[1]=f[S]}_.sort(XA);for(let S=0;S<8;S++)S<x&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(jA);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const C=a[S],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&d.getAttribute("morphTarget"+S)!==p[A]&&d.setAttribute("morphTarget"+S,p[A]),u&&d.getAttribute("morphNormal"+S)!==u[A]&&d.setAttribute("morphNormal"+S,u[A]),r[S]=b,v+=b):(p&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const m=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function qA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Hy extends mn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Kr,d!==Kr&&d!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Kr&&(i=ar),i===void 0&&d===yo&&(i=Yr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Vy=new mn,Gy=new Hy(1,1);Gy.compareFunction=by;const Wy=new Iy,jy=new Lw,Xy=new Fy,zg=[],Hg=[],Vg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function Co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zg[r];if(s===void 0&&(s=new Float32Array(r),zg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yu(t,e){let n=Hg[e];n===void 0&&(n=new Int32Array(e),Hg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function JA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function QA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Wg.set(i),t.uniformMatrix2fv(this.addr,!1,Wg),It(n,i)}}function eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Gg.set(i),t.uniformMatrix3fv(this.addr,!1,Gg),It(n,i)}}function tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Vg.set(i),t.uniformMatrix4fv(this.addr,!1,Vg),It(n,i)}}function nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function ob(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Gy:Vy;n.setTexture2D(e||s,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jy,r)}function hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xy,r)}function fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wy,r)}function pb(t){switch(t){case 5126:return YA;case 35664:return KA;case 35665:return JA;case 35666:return ZA;case 35674:return QA;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return fb}}function mb(t,e){t.uniform1fv(this.addr,e)}function gb(t,e){const n=Co(e,this.size,2);t.uniform2fv(this.addr,n)}function vb(t,e){const n=Co(e,this.size,3);t.uniform3fv(this.addr,n)}function _b(t,e){const n=Co(e,this.size,4);t.uniform4fv(this.addr,n)}function yb(t,e){const n=Co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xb(t,e){const n=Co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Sb(t,e){const n=Co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Eb(t,e){t.uniform1iv(this.addr,e)}function Mb(t,e){t.uniform2iv(this.addr,e)}function wb(t,e){t.uniform3iv(this.addr,e)}function Tb(t,e){t.uniform4iv(this.addr,e)}function Ab(t,e){t.uniform1uiv(this.addr,e)}function bb(t,e){t.uniform2uiv(this.addr,e)}function Cb(t,e){t.uniform3uiv(this.addr,e)}function Rb(t,e){t.uniform4uiv(this.addr,e)}function Pb(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Vy,s[o])}function Ib(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||jy,s[o])}function Lb(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Xy,s[o])}function Nb(t,e,n){const i=this.cache,r=e.length,s=yu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Wy,s[o])}function Db(t){switch(t){case 5126:return mb;case 35664:return gb;case 35665:return vb;case 35666:return _b;case 35674:return yb;case 35675:return xb;case 35676:return Sb;case 5124:case 35670:return Eb;case 35667:case 35671:return Mb;case 35668:case 35672:return wb;case 35669:case 35673:return Tb;case 5125:return Ab;case 36294:return bb;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pb(n.type)}}class Ob{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Db(n.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function jg(t,e){t.seq.push(e),t.map[e.id]=e}function Fb(t,e,n){const i=t.name,r=i.length;for(Pd.lastIndex=0;;){const s=Pd.exec(i),o=Pd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){jg(n,c===void 0?new Ub(a,t,e):new Ob(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new kb(a),jg(n,h)),n=h}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Fb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Bb=37297;let zb=0;function Hb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Vb(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Bc&&n===Fc?i="LinearDisplayP3ToLinearSRGB":e===Fc&&n===Bc&&(i="LinearSRGBToLinearDisplayP3"),t){case Oi:case gu:return[i,"LinearTransferOETF"];case Ut:case rp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function $g(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Hb(t.getShaderSource(e),o)}else return r}function Gb(t,e){const n=Vb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Wb(t,e){let n;switch(e){case ew:n="Linear";break;case tw:n="Reinhard";break;case nw:n="OptimizedCineon";break;case iw:n="ACESFilmic";break;case sw:n="AgX";break;case rw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function jb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function Xb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qs).join(`
`)}function $b(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function qs(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(Yb,Jb)}const Kb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jb(t,e){let n=Qe[e];if(n===void 0){const i=Kb.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kh(n)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(t){return t.replace(Zb,Qb)}function Qb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===my?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function tC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vo:case _o:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function iC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case gy:e="ENVMAP_BLENDING_MULTIPLY";break;case ZM:e="ENVMAP_BLENDING_MIX";break;case QM:e="ENVMAP_BLENDING_ADD";break}return e}function rC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eC(n),c=tC(n),d=nC(n),h=iC(n),f=rC(n),g=n.isWebGL2?"":jb(n),x=Xb(n),_=$b(s),p=r.createProgram();let u,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(qs).join(`
`),u.length>0&&(u+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(qs).join(`
`),v.length>0&&(v+=`
`)):(u=[Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),v=[g,Jg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Qe.tonemapping_pars_fragment:"",n.toneMapping!==_r?Wb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Gb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),o=Kh(o),o=qg(o,n),o=Yg(o,n),a=Kh(a),a=qg(a,n),a=Yg(a,n),o=Kg(o),a=Kg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=m+u+o,C=m+v+a,A=Xg(r,r.VERTEX_SHADER,S),b=Xg(r,r.FRAGMENT_SHADER,C);r.attachShader(p,A),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B(W){if(t.debug.checkShaderErrors){const pe=r.getProgramInfoLog(p).trim(),k=r.getShaderInfoLog(A).trim(),Q=r.getShaderInfoLog(b).trim();let J=!0,ie=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,b);else{const D=$g(r,A,"vertex"),Y=$g(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+pe+`
`+D+`
`+Y)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(k===""||Q==="")&&(ie=!1);ie&&(W.diagnostics={runnable:J,programLog:pe,vertexShader:{log:k,prefix:u},fragmentShader:{log:Q,prefix:v}})}r.deleteShader(A),r.deleteShader(b),w=new oc(r,p),R=qb(r,p)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(p,Bb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let oC=0;class aC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lC(e),n.set(e,i)),i}}class lC{constructor(e){this.id=oC++,this.code=e,this.usedTimes=0}}function cC(t,e,n,i,r,s,o){const a=new Ly,l=new aC,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function p(w,R,V,W,pe){const k=W.fog,Q=pe.geometry,J=w.isMeshStandardMaterial?W.environment:null,ie=(w.isMeshStandardMaterial?n:e).get(w.envMap||J),D=ie&&ie.mapping===mu?ie.image.height:null,Y=x[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const K=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ge=K!==void 0?K.length:0;let xe=0;Q.morphAttributes.position!==void 0&&(xe=1),Q.morphAttributes.normal!==void 0&&(xe=2),Q.morphAttributes.color!==void 0&&(xe=3);let le,U,N,P;if(Y){const je=ii[Y];le=je.vertexShader,U=je.fragmentShader}else le=w.vertexShader,U=w.fragmentShader,l.update(w),N=l.getVertexShaderID(w),P=l.getFragmentShaderID(w);const M=t.getRenderTarget(),q=pe.isInstancedMesh===!0,oe=pe.isBatchedMesh===!0,$=!!w.map,ve=!!w.matcap,z=!!ie,Ue=!!w.aoMap,ne=!!w.lightMap,ue=!!w.bumpMap,ye=!!w.normalMap,Ie=!!w.displacementMap,G=!!w.emissiveMap,y=!!w.metalnessMap,E=!!w.roughnessMap,X=w.anisotropy>0,Te=w.clearcoat>0,Me=w.iridescence>0,H=w.sheen>0,re=w.transmission>0,ae=X&&!!w.anisotropyMap,de=Te&&!!w.clearcoatMap,_e=Te&&!!w.clearcoatNormalMap,we=Te&&!!w.clearcoatRoughnessMap,ee=Me&&!!w.iridescenceMap,ke=Me&&!!w.iridescenceThicknessMap,Be=H&&!!w.sheenColorMap,Ne=H&&!!w.sheenRoughnessMap,Le=!!w.specularMap,Ce=!!w.specularColorMap,L=!!w.specularIntensityMap,Se=re&&!!w.transmissionMap,Oe=re&&!!w.thicknessMap,be=!!w.gradientMap,ce=!!w.alphaMap,F=w.alphaTest>0,Ee=!!w.alphaHash,Ae=!!w.extensions,O=!!Q.attributes.uv1,fe=!!Q.attributes.uv2,De=!!Q.attributes.uv3;let ze=_r;return w.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ze=t.toneMapping),{isWebGL2:d,shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:le,fragmentShader:U,defines:w.defines,customVertexShaderID:N,customFragmentShaderID:P,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:oe,instancing:q,instancingColor:q&&pe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:M===null?t.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Oi,map:$,matcap:ve,envMap:z,envMapMode:z&&ie.mapping,envMapCubeUVHeight:D,aoMap:Ue,lightMap:ne,bumpMap:ue,normalMap:ye,displacementMap:f&&Ie,emissiveMap:G,normalMapObjectSpace:ye&&w.normalMapType===vw,normalMapTangentSpace:ye&&w.normalMapType===Ay,metalnessMap:y,roughnessMap:E,anisotropy:X,anisotropyMap:ae,clearcoat:Te,clearcoatMap:de,clearcoatNormalMap:_e,clearcoatRoughnessMap:we,iridescence:Me,iridescenceMap:ee,iridescenceThicknessMap:ke,sheen:H,sheenColorMap:Be,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Ce,specularIntensityMap:L,transmission:re,transmissionMap:Se,thicknessMap:Oe,gradientMap:be,opaque:w.transparent===!1&&w.blending===io,alphaMap:ce,alphaTest:F,alphaHash:Ee,combine:w.combine,mapUv:$&&_(w.map.channel),aoMapUv:Ue&&_(w.aoMap.channel),lightMapUv:ne&&_(w.lightMap.channel),bumpMapUv:ue&&_(w.bumpMap.channel),normalMapUv:ye&&_(w.normalMap.channel),displacementMapUv:Ie&&_(w.displacementMap.channel),emissiveMapUv:G&&_(w.emissiveMap.channel),metalnessMapUv:y&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:ae&&_(w.anisotropyMap.channel),clearcoatMapUv:de&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(w.sheenRoughnessMap.channel),specularMapUv:Le&&_(w.specularMap.channel),specularColorMapUv:Ce&&_(w.specularColorMap.channel),specularIntensityMapUv:L&&_(w.specularIntensityMap.channel),transmissionMapUv:Se&&_(w.transmissionMap.channel),thicknessMapUv:Oe&&_(w.thicknessMap.channel),alphaMapUv:ce&&_(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ye||X),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:O,vertexUv2s:fe,vertexUv3s:De,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&($||ce),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:xe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===Kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ae&&w.extensions.derivatives===!0,extensionFragDepth:Ae&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function u(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(v(R,w),m(R,w),R.push(t.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function v(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function m(w,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),w.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function S(w){const R=x[w.type];let V;if(R){const W=ii[R];V=jw.clone(W.uniforms)}else V=w.uniforms;return V}function C(w,R){let V;for(let W=0,pe=c.length;W<pe;W++){const k=c[W];if(k.cacheKey===R){V=k,++V.usedTimes;break}}return V===void 0&&(V=new sC(t,R,w,s),c.push(V)),V}function A(w){if(--w.usedTimes===0){const R=c.indexOf(w);c[R]=c[c.length-1],c.pop(),w.destroy()}}function b(w){l.remove(w)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:B}}function uC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function dC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,x,_,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:x,renderOrder:h.renderOrder,z:_,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function a(h,f,g,x,_,p){const u=o(h,f,g,x,_,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,x,_,p){const u=o(h,f,g,x,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||dC),i.length>1&&i.sort(f||Zg),r.length>1&&r.sort(f||Zg)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function hC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qg,t.set(i,[o])):r>=s.length?(o=new Qg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new it};break;case"SpotLight":n={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function pC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mC=0;function gC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vC(t,e){const n=new fC,i=pC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new j);const s=new j,o=new _t,a=new _t;function l(d,h){let f=0,g=0,x=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let _=0,p=0,u=0,v=0,m=0,S=0,C=0,A=0,b=0,B=0,w=0;d.sort(gC);const R=h===!0?Math.PI:1;for(let W=0,pe=d.length;W<pe;W++){const k=d[W],Q=k.color,J=k.intensity,ie=k.distance,D=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=Q.r*J*R,g+=Q.g*J*R,x+=Q.b*J*R;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(k.sh.coefficients[Y],J);w++}else if(k.isDirectionalLight){const Y=n.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity*R),k.castShadow){const K=k.shadow,ge=i.get(k);ge.shadowBias=K.bias,ge.shadowNormalBias=K.normalBias,ge.shadowRadius=K.radius,ge.shadowMapSize=K.mapSize,r.directionalShadow[_]=ge,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=k.shadow.matrix,S++}r.directional[_]=Y,_++}else if(k.isSpotLight){const Y=n.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(Q).multiplyScalar(J*R),Y.distance=ie,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,r.spot[u]=Y;const K=k.shadow;if(k.map&&(r.spotLightMap[b]=k.map,b++,K.updateMatrices(k),k.castShadow&&B++),r.spotLightMatrix[u]=K.matrix,k.castShadow){const ge=i.get(k);ge.shadowBias=K.bias,ge.shadowNormalBias=K.normalBias,ge.shadowRadius=K.radius,ge.shadowMapSize=K.mapSize,r.spotShadow[u]=ge,r.spotShadowMap[u]=D,A++}u++}else if(k.isRectAreaLight){const Y=n.get(k);Y.color.copy(Q).multiplyScalar(J),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=Y,v++}else if(k.isPointLight){const Y=n.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity*R),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const K=k.shadow,ge=i.get(k);ge.shadowBias=K.bias,ge.shadowNormalBias=K.normalBias,ge.shadowRadius=K.radius,ge.shadowMapSize=K.mapSize,ge.shadowCameraNear=K.camera.near,ge.shadowCameraFar=K.camera.far,r.pointShadow[p]=ge,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=k.shadow.matrix,C++}r.point[p]=Y,p++}else if(k.isHemisphereLight){const Y=n.get(k);Y.skyColor.copy(k.color).multiplyScalar(J*R),Y.groundColor.copy(k.groundColor).multiplyScalar(J*R),r.hemi[m]=Y,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==v||V.hemiLength!==m||V.numDirectionalShadows!==S||V.numPointShadows!==C||V.numSpotShadows!==A||V.numSpotMaps!==b||V.numLightProbes!==w)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+b-B,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=w,V.directionalLength=_,V.pointLength=p,V.spotLength=u,V.rectAreaLength=v,V.hemiLength=m,V.numDirectionalShadows=S,V.numPointShadows=C,V.numSpotShadows=A,V.numSpotMaps=b,V.numLightProbes=w,r.version=mC++)}function c(d,h){let f=0,g=0,x=0,_=0,p=0;const u=h.matrixWorldInverse;for(let v=0,m=d.length;v<m;v++){const S=d[v];if(S.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),f++}else if(S.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ev(t,e){const n=new vC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _C(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new ev(t,e),n.set(s,[l])):o>=a.length?(l=new ev(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class yC extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xC extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EC=`uniform sampler2D shadow_pass;
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
}`;function MC(t,e,n){let i=new op;const r=new Re,s=new Re,o=new Ot,a=new yC({depthPacking:gw}),l=new xC,c={},d=n.maxTextureSize,h={[Tr]:Kt,[Kt]:Tr,[In]:In},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:SC,fragmentShader:EC}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new kn;x.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new un(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=my;let u=this.type;this.render=function(A,b,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),R=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),W=t.state;W.setBlending(vr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const pe=u!==xi&&this.type===xi,k=u===xi&&this.type!==xi;for(let Q=0,J=A.length;Q<J;Q++){const ie=A[Q],D=ie.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||pe===!0||k===!0){const ge=this.type!==xi?{minFilter:tn,magFilter:tn}:{};D.map!==null&&D.map.dispose(),D.map=new rs(r.x,r.y,ge),D.map.texture.name=ie.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const K=D.getViewportCount();for(let ge=0;ge<K;ge++){const xe=D.getViewport(ge);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),W.viewport(o),D.updateMatrices(ie,ge),i=D.getFrustum(),S(b,B,D.camera,ie,this.type)}D.isPointLightShadow!==!0&&this.type===xi&&v(D,B),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(w,R,V)};function v(A,b){const B=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new rs(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,B,f,_,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,B,g,_,null)}function m(A,b,B,w){let R=null;const V=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)R=V;else if(R=B.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=R.uuid,pe=b.uuid;let k=c[W];k===void 0&&(k={},c[W]=k);let Q=k[pe];Q===void 0&&(Q=R.clone(),k[pe]=Q,b.addEventListener("dispose",C)),R=Q}if(R.visible=b.visible,R.wireframe=b.wireframe,w===xi?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const W=t.properties.get(R);W.light=B}return R}function S(A,b,B,w,R){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);const pe=e.update(A),k=A.material;if(Array.isArray(k)){const Q=pe.groups;for(let J=0,ie=Q.length;J<ie;J++){const D=Q[J],Y=k[D.materialIndex];if(Y&&Y.visible){const K=m(A,Y,w,R);A.onBeforeShadow(t,A,b,B,pe,K,D),t.renderBufferDirect(B,null,pe,K,A,D),A.onAfterShadow(t,A,b,B,pe,K,D)}}}else if(k.visible){const Q=m(A,k,w,R);A.onBeforeShadow(t,A,b,B,pe,Q,null),t.renderBufferDirect(B,null,pe,Q,A,null),A.onAfterShadow(t,A,b,B,pe,Q,null)}}const W=A.children;for(let pe=0,k=W.length;pe<k;pe++)S(W[pe],b,B,w,R)}function C(A){A.target.removeEventListener("dispose",C);for(const B in c){const w=c[B],R=A.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function wC(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const Ee=new Ot;let Ae=null;const O=new Ot(0,0,0,0);return{setMask:function(fe){Ae!==fe&&!F&&(t.colorMask(fe,fe,fe,fe),Ae=fe)},setLocked:function(fe){F=fe},setClear:function(fe,De,ze,He,je){je===!0&&(fe*=He,De*=He,ze*=He),Ee.set(fe,De,ze,He),O.equals(Ee)===!1&&(t.clearColor(fe,De,ze,He),O.copy(Ee))},reset:function(){F=!1,Ae=null,O.set(-1,0,0,0)}}}function s(){let F=!1,Ee=null,Ae=null,O=null;return{setTest:function(fe){fe?oe(t.DEPTH_TEST):$(t.DEPTH_TEST)},setMask:function(fe){Ee!==fe&&!F&&(t.depthMask(fe),Ee=fe)},setFunc:function(fe){if(Ae!==fe){switch(fe){case jM:t.depthFunc(t.NEVER);break;case XM:t.depthFunc(t.ALWAYS);break;case $M:t.depthFunc(t.LESS);break;case Oc:t.depthFunc(t.LEQUAL);break;case qM:t.depthFunc(t.EQUAL);break;case YM:t.depthFunc(t.GEQUAL);break;case KM:t.depthFunc(t.GREATER);break;case JM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ae=fe}},setLocked:function(fe){F=fe},setClear:function(fe){O!==fe&&(t.clearDepth(fe),O=fe)},reset:function(){F=!1,Ee=null,Ae=null,O=null}}}function o(){let F=!1,Ee=null,Ae=null,O=null,fe=null,De=null,ze=null,He=null,je=null;return{setTest:function(qe){F||(qe?oe(t.STENCIL_TEST):$(t.STENCIL_TEST))},setMask:function(qe){Ee!==qe&&!F&&(t.stencilMask(qe),Ee=qe)},setFunc:function(qe,lt,bt){(Ae!==qe||O!==lt||fe!==bt)&&(t.stencilFunc(qe,lt,bt),Ae=qe,O=lt,fe=bt)},setOp:function(qe,lt,bt){(De!==qe||ze!==lt||He!==bt)&&(t.stencilOp(qe,lt,bt),De=qe,ze=lt,He=bt)},setLocked:function(qe){F=qe},setClear:function(qe){je!==qe&&(t.clearStencil(qe),je=qe)},reset:function(){F=!1,Ee=null,Ae=null,O=null,fe=null,De=null,ze=null,He=null,je=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},g={},x=new WeakMap,_=[],p=null,u=!1,v=null,m=null,S=null,C=null,A=null,b=null,B=null,w=new it(0,0,0),R=0,V=!1,W=null,pe=null,k=null,Q=null,J=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,Y=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),D=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),D=Y>=2);let ge=null,xe={};const le=t.getParameter(t.SCISSOR_BOX),U=t.getParameter(t.VIEWPORT),N=new Ot().fromArray(le),P=new Ot().fromArray(U);function M(F,Ee,Ae,O){const fe=new Uint8Array(4),De=t.createTexture();t.bindTexture(F,De),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<Ae;ze++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ee,0,t.RGBA,1,1,O,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(Ee+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return De}const q={};q[t.TEXTURE_2D]=M(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=M(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(q[t.TEXTURE_2D_ARRAY]=M(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=M(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(t.DEPTH_TEST),l.setFunc(Oc),G(!1),y(Om),oe(t.CULL_FACE),ye(vr);function oe(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function $(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function ve(F,Ee){return g[F]!==Ee?(t.bindFramebuffer(F,Ee),g[F]=Ee,i&&(F===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=Ee),F===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function z(F,Ee){let Ae=_,O=!1;if(F)if(Ae=x.get(Ee),Ae===void 0&&(Ae=[],x.set(Ee,Ae)),F.isWebGLMultipleRenderTargets){const fe=F.texture;if(Ae.length!==fe.length||Ae[0]!==t.COLOR_ATTACHMENT0){for(let De=0,ze=fe.length;De<ze;De++)Ae[De]=t.COLOR_ATTACHMENT0+De;Ae.length=fe.length,O=!0}}else Ae[0]!==t.COLOR_ATTACHMENT0&&(Ae[0]=t.COLOR_ATTACHMENT0,O=!0);else Ae[0]!==t.BACK&&(Ae[0]=t.BACK,O=!0);O&&(n.isWebGL2?t.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function Ue(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const ne={[Hr]:t.FUNC_ADD,[PM]:t.FUNC_SUBTRACT,[IM]:t.FUNC_REVERSE_SUBTRACT};if(i)ne[Bm]=t.MIN,ne[zm]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(ne[Bm]=F.MIN_EXT,ne[zm]=F.MAX_EXT)}const ue={[LM]:t.ZERO,[NM]:t.ONE,[DM]:t.SRC_COLOR,[Hh]:t.SRC_ALPHA,[zM]:t.SRC_ALPHA_SATURATE,[FM]:t.DST_COLOR,[OM]:t.DST_ALPHA,[UM]:t.ONE_MINUS_SRC_COLOR,[Vh]:t.ONE_MINUS_SRC_ALPHA,[BM]:t.ONE_MINUS_DST_COLOR,[kM]:t.ONE_MINUS_DST_ALPHA,[HM]:t.CONSTANT_COLOR,[VM]:t.ONE_MINUS_CONSTANT_COLOR,[GM]:t.CONSTANT_ALPHA,[WM]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(F,Ee,Ae,O,fe,De,ze,He,je,qe){if(F===vr){u===!0&&($(t.BLEND),u=!1);return}if(u===!1&&(oe(t.BLEND),u=!0),F!==RM){if(F!==v||qe!==V){if((m!==Hr||A!==Hr)&&(t.blendEquation(t.FUNC_ADD),m=Hr,A=Hr),qe)switch(F){case io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case la:t.blendFunc(t.ONE,t.ONE);break;case km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case la:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,C=null,b=null,B=null,w.set(0,0,0),R=0,v=F,V=qe}return}fe=fe||Ee,De=De||Ae,ze=ze||O,(Ee!==m||fe!==A)&&(t.blendEquationSeparate(ne[Ee],ne[fe]),m=Ee,A=fe),(Ae!==S||O!==C||De!==b||ze!==B)&&(t.blendFuncSeparate(ue[Ae],ue[O],ue[De],ue[ze]),S=Ae,C=O,b=De,B=ze),(He.equals(w)===!1||je!==R)&&(t.blendColor(He.r,He.g,He.b,je),w.copy(He),R=je),v=F,V=!1}function Ie(F,Ee){F.side===In?$(t.CULL_FACE):oe(t.CULL_FACE);let Ae=F.side===Kt;Ee&&(Ae=!Ae),G(Ae),F.blending===io&&F.transparent===!1?ye(vr):ye(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const O=F.stencilWrite;c.setTest(O),O&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),X(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):$(t.SAMPLE_ALPHA_TO_COVERAGE)}function G(F){W!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),W=F)}function y(F){F!==AM?(oe(t.CULL_FACE),F!==pe&&(F===Om?t.cullFace(t.BACK):F===bM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$(t.CULL_FACE),pe=F}function E(F){F!==k&&(D&&t.lineWidth(F),k=F)}function X(F,Ee,Ae){F?(oe(t.POLYGON_OFFSET_FILL),(Q!==Ee||J!==Ae)&&(t.polygonOffset(Ee,Ae),Q=Ee,J=Ae)):$(t.POLYGON_OFFSET_FILL)}function Te(F){F?oe(t.SCISSOR_TEST):$(t.SCISSOR_TEST)}function Me(F){F===void 0&&(F=t.TEXTURE0+ie-1),ge!==F&&(t.activeTexture(F),ge=F)}function H(F,Ee,Ae){Ae===void 0&&(ge===null?Ae=t.TEXTURE0+ie-1:Ae=ge);let O=xe[Ae];O===void 0&&(O={type:void 0,texture:void 0},xe[Ae]=O),(O.type!==F||O.texture!==Ee)&&(ge!==Ae&&(t.activeTexture(Ae),ge=Ae),t.bindTexture(F,Ee||q[F]),O.type=F,O.texture=Ee)}function re(){const F=xe[ge];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(F){N.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),N.copy(F))}function Se(F){P.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),P.copy(F))}function Oe(F,Ee){let Ae=h.get(Ee);Ae===void 0&&(Ae=new WeakMap,h.set(Ee,Ae));let O=Ae.get(F);O===void 0&&(O=t.getUniformBlockIndex(Ee,F.name),Ae.set(F,O))}function be(F,Ee){const O=h.get(Ee).get(F);d.get(Ee)!==O&&(t.uniformBlockBinding(Ee,O,F.__bindingPointIndex),d.set(Ee,O))}function ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ge=null,xe={},g={},x=new WeakMap,_=[],p=null,u=!1,v=null,m=null,S=null,C=null,A=null,b=null,B=null,w=new it(0,0,0),R=0,V=!1,W=null,pe=null,k=null,Q=null,J=null,N.set(0,0,t.canvas.width,t.canvas.height),P.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:oe,disable:$,bindFramebuffer:ve,drawBuffers:z,useProgram:Ue,setBlending:ye,setMaterial:Ie,setFlipSided:G,setCullFace:y,setLineWidth:E,setPolygonOffset:X,setScissorTest:Te,activeTexture:Me,bindTexture:H,unbindTexture:re,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:Le,texImage3D:Ce,updateUBOMapping:Oe,uniformBlockBinding:be,texStorage2D:Be,texStorage3D:Ne,texSubImage2D:_e,texSubImage3D:we,compressedTexSubImage2D:ee,compressedTexSubImage3D:ke,scissor:L,viewport:Se,reset:ce}}function TC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,E){return g?new OffscreenCanvas(y,E):Hc("canvas")}function _(y,E,X,Te){let Me=1;if((y.width>Te||y.height>Te)&&(Me=Te/Math.max(y.width,y.height)),Me<1||E===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const H=E?Yh:Math.floor,re=H(Me*y.width),ae=H(Me*y.height);h===void 0&&(h=x(re,ae));const de=X?x(re,ae):h;return de.width=re,de.height=ae,de.getContext("2d").drawImage(y,0,0,re,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+re+"x"+ae+")."),de}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return gg(y.width)&&gg(y.height)}function u(y){return a?!1:y.wrapS!==Xn||y.wrapT!==Xn||y.minFilter!==tn&&y.minFilter!==Rn}function v(y,E){return y.generateMipmaps&&E&&y.minFilter!==tn&&y.minFilter!==Rn}function m(y){t.generateMipmap(y)}function S(y,E,X,Te,Me=!1){if(a===!1)return E;if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let H=E;if(E===t.RED&&(X===t.FLOAT&&(H=t.R32F),X===t.HALF_FLOAT&&(H=t.R16F),X===t.UNSIGNED_BYTE&&(H=t.R8)),E===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(H=t.R8UI),X===t.UNSIGNED_SHORT&&(H=t.R16UI),X===t.UNSIGNED_INT&&(H=t.R32UI),X===t.BYTE&&(H=t.R8I),X===t.SHORT&&(H=t.R16I),X===t.INT&&(H=t.R32I)),E===t.RG&&(X===t.FLOAT&&(H=t.RG32F),X===t.HALF_FLOAT&&(H=t.RG16F),X===t.UNSIGNED_BYTE&&(H=t.RG8)),E===t.RGBA){const re=Me?kc:ot.getTransfer(Te);X===t.FLOAT&&(H=t.RGBA32F),X===t.HALF_FLOAT&&(H=t.RGBA16F),X===t.UNSIGNED_BYTE&&(H=re===dt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function C(y,E,X){return v(y,X)===!0||y.isFramebufferTexture&&y.minFilter!==tn&&y.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?E.mipmaps.length:1}function A(y){return y===tn||y===Hm||y===nd?t.NEAREST:t.LINEAR}function b(y){const E=y.target;E.removeEventListener("dispose",b),w(E),E.isVideoTexture&&d.delete(E)}function B(y){const E=y.target;E.removeEventListener("dispose",B),V(E)}function w(y){const E=i.get(y);if(E.__webglInit===void 0)return;const X=y.source,Te=f.get(X);if(Te){const Me=Te[E.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&R(y),Object.keys(Te).length===0&&f.delete(X)}i.remove(y)}function R(y){const E=i.get(y);t.deleteTexture(E.__webglTexture);const X=y.source,Te=f.get(X);delete Te[E.__cacheKey],o.memory.textures--}function V(y){const E=y.texture,X=i.get(y),Te=i.get(E);if(Te.__webglTexture!==void 0&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(X.__webglFramebuffer[Me]))for(let H=0;H<X.__webglFramebuffer[Me].length;H++)t.deleteFramebuffer(X.__webglFramebuffer[Me][H]);else t.deleteFramebuffer(X.__webglFramebuffer[Me]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[Me])}else{if(Array.isArray(X.__webglFramebuffer))for(let Me=0;Me<X.__webglFramebuffer.length;Me++)t.deleteFramebuffer(X.__webglFramebuffer[Me]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let Me=0;Me<X.__webglColorRenderbuffer.length;Me++)X.__webglColorRenderbuffer[Me]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[Me]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Me=0,H=E.length;Me<H;Me++){const re=i.get(E[Me]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(E[Me])}i.remove(E),i.remove(y)}let W=0;function pe(){W=0}function k(){const y=W;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),W+=1,y}function Q(y){const E=[];return E.push(y.wrapS),E.push(y.wrapT),E.push(y.wrapR||0),E.push(y.magFilter),E.push(y.minFilter),E.push(y.anisotropy),E.push(y.internalFormat),E.push(y.format),E.push(y.type),E.push(y.generateMipmaps),E.push(y.premultiplyAlpha),E.push(y.flipY),E.push(y.unpackAlignment),E.push(y.colorSpace),E.join()}function J(y,E){const X=i.get(y);if(y.isVideoTexture&&Ie(y),y.isRenderTargetTexture===!1&&y.version>0&&X.__version!==y.version){const Te=y.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(X,y,E);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+E)}function ie(y,E){const X=i.get(y);if(y.version>0&&X.__version!==y.version){N(X,y,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+E)}function D(y,E){const X=i.get(y);if(y.version>0&&X.__version!==y.version){N(X,y,E);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+E)}function Y(y,E){const X=i.get(y);if(y.version>0&&X.__version!==y.version){P(X,y,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+E)}const K={[jh]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Xh]:t.MIRRORED_REPEAT},ge={[tn]:t.NEAREST,[Hm]:t.NEAREST_MIPMAP_NEAREST,[nd]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[ow]:t.LINEAR_MIPMAP_NEAREST,[La]:t.LINEAR_MIPMAP_LINEAR},xe={[_w]:t.NEVER,[ww]:t.ALWAYS,[yw]:t.LESS,[by]:t.LEQUAL,[xw]:t.EQUAL,[Mw]:t.GEQUAL,[Sw]:t.GREATER,[Ew]:t.NOTEQUAL};function le(y,E,X){if(X?(t.texParameteri(y,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,K[E.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,ge[E.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,ge[E.minFilter])):(t.texParameteri(y,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(y,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(y,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(y,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==tn&&E.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===tn||E.minFilter!==nd&&E.minFilter!==La||E.type===lr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Na&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(y,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function U(y,E){let X=!1;y.__webglInit===void 0&&(y.__webglInit=!0,E.addEventListener("dispose",b));const Te=E.source;let Me=f.get(Te);Me===void 0&&(Me={},f.set(Te,Me));const H=Q(E);if(H!==y.__cacheKey){Me[H]===void 0&&(Me[H]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Me[H].usedTimes++;const re=Me[y.__cacheKey];re!==void 0&&(Me[y.__cacheKey].usedTimes--,re.usedTimes===0&&R(E)),y.__cacheKey=H,y.__webglTexture=Me[H].texture}return X}function N(y,E,X){let Te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Te=t.TEXTURE_3D);const Me=U(y,E),H=E.source;n.bindTexture(Te,y.__webglTexture,t.TEXTURE0+X);const re=i.get(H);if(H.version!==re.__version||Me===!0){n.activeTexture(t.TEXTURE0+X);const ae=ot.getPrimaries(ot.workingColorSpace),de=E.colorSpace===Ln?null:ot.getPrimaries(E.colorSpace),_e=E.colorSpace===Ln||ae===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const we=u(E)&&p(E.image)===!1;let ee=_(E.image,we,!1,r.maxTextureSize);ee=G(E,ee);const ke=p(ee)||a,Be=s.convert(E.format,E.colorSpace);let Ne=s.convert(E.type),Le=S(E.internalFormat,Be,Ne,E.colorSpace,E.isVideoTexture);le(Te,E,ke);let Ce;const L=E.mipmaps,Se=a&&E.isVideoTexture!==!0&&Le!==wy,Oe=re.__version===void 0||Me===!0,be=C(E,ee,ke);if(E.isDepthTexture)Le=t.DEPTH_COMPONENT,a?E.type===lr?Le=t.DEPTH_COMPONENT32F:E.type===ar?Le=t.DEPTH_COMPONENT24:E.type===Yr?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:E.type===lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kr&&Le===t.DEPTH_COMPONENT&&E.type!==ip&&E.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ar,Ne=s.convert(E.type)),E.format===yo&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,E.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Yr,Ne=s.convert(E.type))),Oe&&(Se?n.texStorage2D(t.TEXTURE_2D,1,Le,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Le,ee.width,ee.height,0,Be,Ne,null));else if(E.isDataTexture)if(L.length>0&&ke){Se&&Oe&&n.texStorage2D(t.TEXTURE_2D,be,Le,L[0].width,L[0].height);for(let ce=0,F=L.length;ce<F;ce++)Ce=L[ce],Se?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ce.width,Ce.height,Be,Ne,Ce.data):n.texImage2D(t.TEXTURE_2D,ce,Le,Ce.width,Ce.height,0,Be,Ne,Ce.data);E.generateMipmaps=!1}else Se?(Oe&&n.texStorage2D(t.TEXTURE_2D,be,Le,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Be,Ne,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ee.width,ee.height,0,Be,Ne,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Se&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Le,L[0].width,L[0].height,ee.depth);for(let ce=0,F=L.length;ce<F;ce++)Ce=L[ce],E.format!==$n?Be!==null?Se?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ce.width,Ce.height,ee.depth,Be,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,Le,Ce.width,Ce.height,ee.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ce.width,Ce.height,ee.depth,Be,Ne,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,Le,Ce.width,Ce.height,ee.depth,0,Be,Ne,Ce.data)}else{Se&&Oe&&n.texStorage2D(t.TEXTURE_2D,be,Le,L[0].width,L[0].height);for(let ce=0,F=L.length;ce<F;ce++)Ce=L[ce],E.format!==$n?Be!==null?Se?n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Ce.width,Ce.height,Be,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ce.width,Ce.height,Be,Ne,Ce.data):n.texImage2D(t.TEXTURE_2D,ce,Le,Ce.width,Ce.height,0,Be,Ne,Ce.data)}else if(E.isDataArrayTexture)Se?(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Le,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Be,Ne,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ee.width,ee.height,ee.depth,0,Be,Ne,ee.data);else if(E.isData3DTexture)Se?(Oe&&n.texStorage3D(t.TEXTURE_3D,be,Le,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Be,Ne,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ee.width,ee.height,ee.depth,0,Be,Ne,ee.data);else if(E.isFramebufferTexture){if(Oe)if(Se)n.texStorage2D(t.TEXTURE_2D,be,Le,ee.width,ee.height);else{let ce=ee.width,F=ee.height;for(let Ee=0;Ee<be;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Le,ce,F,0,Be,Ne,null),ce>>=1,F>>=1}}else if(L.length>0&&ke){Se&&Oe&&n.texStorage2D(t.TEXTURE_2D,be,Le,L[0].width,L[0].height);for(let ce=0,F=L.length;ce<F;ce++)Ce=L[ce],Se?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Be,Ne,Ce):n.texImage2D(t.TEXTURE_2D,ce,Le,Be,Ne,Ce);E.generateMipmaps=!1}else Se?(Oe&&n.texStorage2D(t.TEXTURE_2D,be,Le,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,Ne,ee)):n.texImage2D(t.TEXTURE_2D,0,Le,Be,Ne,ee);v(E,ke)&&m(Te),re.__version=H.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function P(y,E,X){if(E.image.length!==6)return;const Te=U(y,E),Me=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+X);const H=i.get(Me);if(Me.version!==H.__version||Te===!0){n.activeTexture(t.TEXTURE0+X);const re=ot.getPrimaries(ot.workingColorSpace),ae=E.colorSpace===Ln?null:ot.getPrimaries(E.colorSpace),de=E.colorSpace===Ln||re===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,we=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let ce=0;ce<6;ce++)!_e&&!we?ee[ce]=_(E.image[ce],!1,!0,r.maxCubemapSize):ee[ce]=we?E.image[ce].image:E.image[ce],ee[ce]=G(E,ee[ce]);const ke=ee[0],Be=p(ke)||a,Ne=s.convert(E.format,E.colorSpace),Le=s.convert(E.type),Ce=S(E.internalFormat,Ne,Le,E.colorSpace),L=a&&E.isVideoTexture!==!0,Se=H.__version===void 0||Te===!0;let Oe=C(E,ke,Be);le(t.TEXTURE_CUBE_MAP,E,Be);let be;if(_e){L&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Ce,ke.width,ke.height);for(let ce=0;ce<6;ce++){be=ee[ce].mipmaps;for(let F=0;F<be.length;F++){const Ee=be[F];E.format!==$n?Ne!==null?L?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,0,0,Ee.width,Ee.height,Ne,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,0,0,Ee.width,Ee.height,Ne,Le,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F,Ce,Ee.width,Ee.height,0,Ne,Le,Ee.data)}}}else{be=E.mipmaps,L&&Se&&(be.length>0&&Oe++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Ce,ee[0].width,ee[0].height));for(let ce=0;ce<6;ce++)if(we){L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ee[ce].width,ee[ce].height,Ne,Le,ee[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ce,ee[ce].width,ee[ce].height,0,Ne,Le,ee[ce].data);for(let F=0;F<be.length;F++){const Ae=be[F].image[ce].image;L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,0,0,Ae.width,Ae.height,Ne,Le,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,Ce,Ae.width,Ae.height,0,Ne,Le,Ae.data)}}else{L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ne,Le,ee[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ce,Ne,Le,ee[ce]);for(let F=0;F<be.length;F++){const Ee=be[F];L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,0,0,Ne,Le,Ee.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,F+1,Ce,Ne,Le,Ee.image[ce])}}}v(E,Be)&&m(t.TEXTURE_CUBE_MAP),H.__version=Me.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function M(y,E,X,Te,Me,H){const re=s.convert(X.format,X.colorSpace),ae=s.convert(X.type),de=S(X.internalFormat,re,ae,X.colorSpace);if(!i.get(E).__hasExternalTextures){const we=Math.max(1,E.width>>H),ee=Math.max(1,E.height>>H);Me===t.TEXTURE_3D||Me===t.TEXTURE_2D_ARRAY?n.texImage3D(Me,H,de,we,ee,E.depth,0,re,ae,null):n.texImage2D(Me,H,de,we,ee,0,re,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,Me,i.get(X).__webglTexture,0,ue(E)):(Me===t.TEXTURE_2D||Me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Te,Me,i.get(X).__webglTexture,H),n.bindFramebuffer(t.FRAMEBUFFER,null)}function q(y,E,X){if(t.bindRenderbuffer(t.RENDERBUFFER,y),E.depthBuffer&&!E.stencilBuffer){let Te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(X||ye(E)){const Me=E.depthTexture;Me&&Me.isDepthTexture&&(Me.type===lr?Te=t.DEPTH_COMPONENT32F:Me.type===ar&&(Te=t.DEPTH_COMPONENT24));const H=ue(E);ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,H,Te,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,H,Te,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,Te,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,y)}else if(E.depthBuffer&&E.stencilBuffer){const Te=ue(E);X&&ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,t.DEPTH24_STENCIL8,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,y)}else{const Te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Me=0;Me<Te.length;Me++){const H=Te[Me],re=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),de=S(H.internalFormat,re,ae,H.colorSpace),_e=ue(E);X&&ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,de,E.width,E.height):ye(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,de,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(y,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const Te=i.get(E.depthTexture).__webglTexture,Me=ue(E);if(E.depthTexture.format===Kr)ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Te,0,Me):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Te,0);else if(E.depthTexture.format===yo)ye(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Te,0,Me):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function $(y){const E=i.get(y),X=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,y)}else if(X){E.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Te]),E.__webglDepthbuffer[Te]=t.createRenderbuffer(),q(E.__webglDepthbuffer[Te],y,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),q(E.__webglDepthbuffer,y,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(y,E,X){const Te=i.get(y);E!==void 0&&M(Te.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&$(y)}function z(y){const E=y.texture,X=i.get(y),Te=i.get(E);y.addEventListener("dispose",B),y.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture()),Te.__version=E.version,o.memory.textures++);const Me=y.isWebGLCubeRenderTarget===!0,H=y.isWebGLMultipleRenderTargets===!0,re=p(y)||a;if(Me){X.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ae]=[];for(let de=0;de<E.mipmaps.length;de++)X.__webglFramebuffer[ae][de]=t.createFramebuffer()}else X.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)X.__webglFramebuffer[ae]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(H)if(r.drawBuffers){const ae=y.texture;for(let de=0,_e=ae.length;de<_e;de++){const we=i.get(ae[de]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ye(y)===!1){const ae=H?E:[E];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const _e=ae[de];X.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[de]);const we=s.convert(_e.format,_e.colorSpace),ee=s.convert(_e.type),ke=S(_e.internalFormat,we,ee,_e.colorSpace,y.isXRRenderTarget===!0),Be=ue(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ke,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,X.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),q(X.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Me){n.bindTexture(t.TEXTURE_CUBE_MAP,Te.__webglTexture),le(t.TEXTURE_CUBE_MAP,E,re);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)M(X.__webglFramebuffer[ae][de],y,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else M(X.__webglFramebuffer[ae],y,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);v(E,re)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(H){const ae=y.texture;for(let de=0,_e=ae.length;de<_e;de++){const we=ae[de],ee=i.get(we);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),le(t.TEXTURE_2D,we,re),M(X.__webglFramebuffer,y,we,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),v(we,re)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ae=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,Te.__webglTexture),le(ae,E,re),a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)M(X.__webglFramebuffer[de],y,E,t.COLOR_ATTACHMENT0,ae,de);else M(X.__webglFramebuffer,y,E,t.COLOR_ATTACHMENT0,ae,0);v(E,re)&&m(ae),n.unbindTexture()}y.depthBuffer&&$(y)}function Ue(y){const E=p(y)||a,X=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Te=0,Me=X.length;Te<Me;Te++){const H=X[Te];if(v(H,E)){const re=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(H).__webglTexture;n.bindTexture(re,ae),m(re),n.unbindTexture()}}}function ne(y){if(a&&y.samples>0&&ye(y)===!1){const E=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],X=y.width,Te=y.height;let Me=t.COLOR_BUFFER_BIT;const H=[],re=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(y),de=y.isWebGLMultipleRenderTargets===!0;if(de)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){H.push(t.COLOR_ATTACHMENT0+_e),y.depthBuffer&&H.push(re);const we=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(we===!1&&(y.depthBuffer&&(Me|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Me|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]),we===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[re]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[re])),de){const ee=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,X,Te,0,0,X,Te,Me,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,H)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,ae.__webglColorRenderbuffer[_e]);const we=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function ue(y){return Math.min(r.maxSamples,y.samples)}function ye(y){const E=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(y){const E=o.render.frame;d.get(y)!==E&&(d.set(y,E),y.update())}function G(y,E){const X=y.colorSpace,Te=y.format,Me=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===$h||X!==Oi&&X!==Ln&&(ot.getTransfer(X)===dt?a===!1?e.has("EXT_sRGB")===!0&&Te===$n?(y.format=$h,y.minFilter=Rn,y.generateMipmaps=!1):E=Ry.sRGBToLinear(E):(Te!==$n||Me!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=k,this.resetTextureUnits=pe,this.setTexture2D=J,this.setTexture2DArray=ie,this.setTexture3D=D,this.setTextureCube=Y,this.rebindTextures=ve,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=M,this.useMultisampledRTT=ye}function AC(t,e,n){const i=n.isWebGL2;function r(s,o=Ln){let a;const l=ot.getTransfer(o);if(s===yr)return t.UNSIGNED_BYTE;if(s===yy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===xy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===aw)return t.BYTE;if(s===lw)return t.SHORT;if(s===ip)return t.UNSIGNED_SHORT;if(s===_y)return t.INT;if(s===ar)return t.UNSIGNED_INT;if(s===lr)return t.FLOAT;if(s===Na)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cw)return t.ALPHA;if(s===$n)return t.RGBA;if(s===uw)return t.LUMINANCE;if(s===dw)return t.LUMINANCE_ALPHA;if(s===Kr)return t.DEPTH_COMPONENT;if(s===yo)return t.DEPTH_STENCIL;if(s===$h)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hw)return t.RED;if(s===Sy)return t.RED_INTEGER;if(s===fw)return t.RG;if(s===Ey)return t.RG_INTEGER;if(s===My)return t.RGBA_INTEGER;if(s===id||s===rd||s===sd||s===od)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===id)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===od)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===id)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===od)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vm||s===Gm||s===Wm||s===jm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Vm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xm||s===$m)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xm)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$m)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qm||s===Ym||s===Km||s===Jm||s===Zm||s===Qm||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ym)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Km)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qm)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eg)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tg)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ng)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ig)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rg)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sg)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===og)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ag)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ad||s===lg||s===cg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ad)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pw||s===ug||s===dg||s===hg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ad)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ug)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class bC extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ys extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CC={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class RC extends us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,x=null;const _=n.getContextAttributes();let p=null,u=null;const v=[],m=[],S=new Re;let C=null;const A=new Pn;A.layers.enable(1),A.viewport=new Ot;const b=new Pn;b.layers.enable(2),b.viewport=new Ot;const B=[A,b],w=new bC;w.layers.enable(1),w.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let U=v[le];return U===void 0&&(U=new Id,v[le]=U),U.getTargetRaySpace()},this.getControllerGrip=function(le){let U=v[le];return U===void 0&&(U=new Id,v[le]=U),U.getGripSpace()},this.getHand=function(le){let U=v[le];return U===void 0&&(U=new Id,v[le]=U),U.getHandSpace()};function W(le){const U=m.indexOf(le.inputSource);if(U===-1)return;const N=v[U];N!==void 0&&(N.update(le.inputSource,le.frame,c||o),N.dispatchEvent({type:le.type,data:le.inputSource}))}function pe(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",k);for(let le=0;le<v.length;le++){const U=m[le];U!==null&&(m[le]=null,v[le].disconnect(U))}R=null,V=null,e.setRenderTarget(p),g=null,f=null,h=null,r=null,u=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new rs(g.framebufferWidth,g.framebufferHeight,{format:$n,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let U=null,N=null,P=null;_.depth&&(P=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=_.stencil?yo:Kr,N=_.stencil?Yr:ar);const M={colorFormat:n.RGBA8,depthFormat:P,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(M),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new rs(f.textureWidth,f.textureHeight,{format:$n,type:yr,depthTexture:new Hy(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const q=e.properties.get(u);q.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(le){for(let U=0;U<le.removed.length;U++){const N=le.removed[U],P=m.indexOf(N);P>=0&&(m[P]=null,v[P].disconnect(N))}for(let U=0;U<le.added.length;U++){const N=le.added[U];let P=m.indexOf(N);if(P===-1){for(let q=0;q<v.length;q++)if(q>=m.length){m.push(N),P=q;break}else if(m[q]===null){m[q]=N,P=q;break}if(P===-1)break}const M=v[P];M&&M.connect(N)}}const Q=new j,J=new j;function ie(le,U,N){Q.setFromMatrixPosition(U.matrixWorld),J.setFromMatrixPosition(N.matrixWorld);const P=Q.distanceTo(J),M=U.projectionMatrix.elements,q=N.projectionMatrix.elements,oe=M[14]/(M[10]-1),$=M[14]/(M[10]+1),ve=(M[9]+1)/M[5],z=(M[9]-1)/M[5],Ue=(M[8]-1)/M[0],ne=(q[8]+1)/q[0],ue=oe*Ue,ye=oe*ne,Ie=P/(-Ue+ne),G=Ie*-Ue;U.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(G),le.translateZ(Ie),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();const y=oe+Ie,E=$+Ie,X=ue-G,Te=ye+(P-G),Me=ve*$/E*y,H=z*$/E*y;le.projectionMatrix.makePerspective(X,Te,Me,H,y,E),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}function D(le,U){U===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(U.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;w.near=b.near=A.near=le.near,w.far=b.far=A.far=le.far,(R!==w.near||V!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,V=w.far);const U=le.parent,N=w.cameras;D(w,U);for(let P=0;P<N.length;P++)D(N[P],U);N.length===2?ie(w,A,b):w.projectionMatrix.copy(A.projectionMatrix),Y(le,w,U)};function Y(le,U,N){N===null?le.matrix.copy(U.matrixWorld):(le.matrix.copy(N.matrixWorld),le.matrix.invert(),le.matrix.multiply(U.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(U.projectionMatrix),le.projectionMatrixInverse.copy(U.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=qh*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=le)};let K=null;function ge(le,U){if(d=U.getViewerPose(c||o),x=U,d!==null){const N=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let P=!1;N.length!==w.cameras.length&&(w.cameras.length=0,P=!0);for(let M=0;M<N.length;M++){const q=N[M];let oe=null;if(g!==null)oe=g.getViewport(q);else{const ve=h.getViewSubImage(f,q);oe=ve.viewport,M===0&&(e.setRenderTargetTextures(u,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(u))}let $=B[M];$===void 0&&($=new Pn,$.layers.enable(M),$.viewport=new Ot,B[M]=$),$.matrix.fromArray(q.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(q.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(oe.x,oe.y,oe.width,oe.height),M===0&&(w.matrix.copy($.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),P===!0&&w.cameras.push($)}}for(let N=0;N<v.length;N++){const P=m[N],M=v[N];P!==null&&M!==void 0&&M.update(P,U,c||o)}K&&K(le,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),x=null}const xe=new By;xe.setAnimationLoop(ge),this.setAnimationLoop=function(le){K=le},this.dispose=function(){}}}function PC(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Oy(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,m,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,m):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Kt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Kt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,m){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=m*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const S=m.program;i.uniformBlockBinding(v,S)}function c(v,m){let S=r[v.id];S===void 0&&(x(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",p));const C=m.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function d(v){const m=h();v.__bindingPointIndex=m;const S=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const m=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,b=S.length;A<b;A++){const B=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,R=B.length;w<R;w++){const V=B[w];if(g(V,A,w,C)===!0){const W=V.__offset,pe=Array.isArray(V.value)?V.value:[V.value];let k=0;for(let Q=0;Q<pe.length;Q++){const J=pe[Q],ie=_(J);typeof J=="number"||typeof J=="boolean"?(V.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,W+k,V.__data)):J.isMatrix3?(V.__data[0]=J.elements[0],V.__data[1]=J.elements[1],V.__data[2]=J.elements[2],V.__data[3]=0,V.__data[4]=J.elements[3],V.__data[5]=J.elements[4],V.__data[6]=J.elements[5],V.__data[7]=0,V.__data[8]=J.elements[6],V.__data[9]=J.elements[7],V.__data[10]=J.elements[8],V.__data[11]=0):(J.toArray(V.__data,k),k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,m,S,C){const A=v.value,b=m+"_"+S;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const B=C[b];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return C[b]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function x(v){const m=v.uniforms;let S=0;const C=16;for(let b=0,B=m.length;b<B;b++){const w=Array.isArray(m[b])?m[b]:[m[b]];for(let R=0,V=w.length;R<V;R++){const W=w[R],pe=Array.isArray(W.value)?W.value:[W.value];for(let k=0,Q=pe.length;k<Q;k++){const J=pe[k],ie=_(J),D=S%C;D!==0&&C-D<ie.boundary&&(S+=C-D),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=ie.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function _(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function p(v){const m=v.target;m.removeEventListener("dispose",p);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class $y{constructor(e={}){const{canvas:n=bw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const m=this;let S=!1,C=0,A=0,b=null,B=-1,w=null;const R=new Ot,V=new Ot;let W=null;const pe=new it(0);let k=0,Q=n.width,J=n.height,ie=1,D=null,Y=null;const K=new Ot(0,0,Q,J),ge=new Ot(0,0,Q,J);let xe=!1;const le=new op;let U=!1,N=!1,P=null;const M=new _t,q=new Re,oe=new j,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return b===null?ie:1}let z=i;function Ue(I,Z){for(let te=0;te<I.length;te++){const he=I[te],se=n.getContext(he,Z);if(se!==null)return se}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),z===null){const Z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&Z.shift(),z=Ue(Z,I),z===null)throw Ue(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ne,ue,ye,Ie,G,y,E,X,Te,Me,H,re,ae,de,_e,we,ee,ke,Be,Ne,Le,Ce,L,Se;function Oe(){ne=new HA(z),ue=new UA(z,ne,e),ne.init(ue),Ce=new AC(z,ne,ue),ye=new wC(z,ne,ue),Ie=new WA(z),G=new uC,y=new TC(z,ne,ye,G,ue,Ce,Ie),E=new kA(m),X=new zA(m),Te=new Zw(z,ue),L=new NA(z,ne,Te,ue),Me=new VA(z,Te,Ie,L),H=new qA(z,Me,Te,Ie),Be=new $A(z,ue,y),we=new OA(G),re=new cC(m,E,X,ne,ue,L,we),ae=new PC(m,G),de=new hC,_e=new _C(ne,ue),ke=new LA(m,E,X,ye,H,f,l),ee=new MC(m,H,ue),Se=new IC(z,Ie,ue,ye),Ne=new DA(z,ne,Ie,ue),Le=new GA(z,ne,Ie,ue),Ie.programs=re.programs,m.capabilities=ue,m.extensions=ne,m.properties=G,m.renderLists=de,m.shadowMap=ee,m.state=ye,m.info=Ie}Oe();const be=new RC(m,z);this.xr=be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=ne.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ne.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(I){I!==void 0&&(ie=I,this.setSize(Q,J,!1))},this.getSize=function(I){return I.set(Q,J)},this.setSize=function(I,Z,te=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=I,J=Z,n.width=Math.floor(I*ie),n.height=Math.floor(Z*ie),te===!0&&(n.style.width=I+"px",n.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(Q*ie,J*ie).floor()},this.setDrawingBufferSize=function(I,Z,te){Q=I,J=Z,ie=te,n.width=Math.floor(I*te),n.height=Math.floor(Z*te),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(K)},this.setViewport=function(I,Z,te,he){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,Z,te,he),ye.viewport(R.copy(K).multiplyScalar(ie).floor())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,Z,te,he){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,Z,te,he),ye.scissor(V.copy(ge).multiplyScalar(ie).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(I){ye.setScissorTest(xe=I)},this.setOpaqueSort=function(I){D=I},this.setTransparentSort=function(I){Y=I},this.getClearColor=function(I){return I.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(I=!0,Z=!0,te=!0){let he=0;if(I){let se=!1;if(b!==null){const Ve=b.texture.format;se=Ve===My||Ve===Ey||Ve===Sy}if(se){const Ve=b.texture.type,We=Ve===yr||Ve===ar||Ve===ip||Ve===Yr||Ve===yy||Ve===xy,Xe=ke.getClearColor(),Ye=ke.getClearAlpha(),et=Xe.r,Je=Xe.g,Ze=Xe.b;We?(g[0]=et,g[1]=Je,g[2]=Ze,g[3]=Ye,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=et,x[1]=Je,x[2]=Ze,x[3]=Ye,z.clearBufferiv(z.COLOR,0,x))}else he|=z.COLOR_BUFFER_BIT}Z&&(he|=z.DEPTH_BUFFER_BIT),te&&(he|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),de.dispose(),_e.dispose(),G.dispose(),E.dispose(),X.dispose(),H.dispose(),L.dispose(),Se.dispose(),re.dispose(),be.dispose(),be.removeEventListener("sessionstart",je),be.removeEventListener("sessionend",qe),P&&(P.dispose(),P=null),lt.stop()};function ce(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const I=Ie.autoReset,Z=ee.enabled,te=ee.autoUpdate,he=ee.needsUpdate,se=ee.type;Oe(),Ie.autoReset=I,ee.enabled=Z,ee.autoUpdate=te,ee.needsUpdate=he,ee.type=se}function Ee(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ae(I){const Z=I.target;Z.removeEventListener("dispose",Ae),O(Z)}function O(I){fe(I),G.remove(I)}function fe(I){const Z=G.get(I).programs;Z!==void 0&&(Z.forEach(function(te){re.releaseProgram(te)}),I.isShaderMaterial&&re.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,te,he,se,Ve){Z===null&&(Z=$);const We=se.isMesh&&se.matrixWorld.determinant()<0,Xe=Tu(I,Z,te,he,se);ye.setMaterial(he,We);let Ye=te.index,et=1;if(he.wireframe===!0){if(Ye=Me.getWireframeAttribute(te),Ye===void 0)return;et=2}const Je=te.drawRange,Ze=te.attributes.position;let Et=Je.start*et,gn=(Je.start+Je.count)*et;Ve!==null&&(Et=Math.max(Et,Ve.start*et),gn=Math.min(gn,(Ve.start+Ve.count)*et)),Ye!==null?(Et=Math.max(Et,0),gn=Math.min(gn,Ye.count)):Ze!=null&&(Et=Math.max(Et,0),gn=Math.min(gn,Ze.count));const Lt=gn-Et;if(Lt<0||Lt===1/0)return;L.setup(se,he,Xe,te,Ye);let fi,pt=Ne;if(Ye!==null&&(fi=Te.get(Ye),pt=Le,pt.setIndex(fi)),se.isMesh)he.wireframe===!0?(ye.setLineWidth(he.wireframeLinewidth*ve()),pt.setMode(z.LINES)):pt.setMode(z.TRIANGLES);else if(se.isLine){let tt=he.linewidth;tt===void 0&&(tt=1),ye.setLineWidth(tt*ve()),se.isLineSegments?pt.setMode(z.LINES):se.isLineLoop?pt.setMode(z.LINE_LOOP):pt.setMode(z.LINE_STRIP)}else se.isPoints?pt.setMode(z.POINTS):se.isSprite&&pt.setMode(z.TRIANGLES);if(se.isBatchedMesh)pt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else if(se.isInstancedMesh)pt.renderInstances(Et,Lt,se.count);else if(te.isInstancedBufferGeometry){const tt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Au=Math.min(te.instanceCount,tt);pt.renderInstances(Et,Lt,Au)}else pt.render(Et,Lt)};function De(I,Z,te){I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=Kt,I.needsUpdate=!0,an(I,Z,te),I.side=Tr,I.needsUpdate=!0,an(I,Z,te),I.side=In):an(I,Z,te)}this.compile=function(I,Z,te=null){te===null&&(te=I),p=_e.get(te),p.init(),v.push(p),te.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(p.pushLight(se),se.castShadow&&p.pushShadow(se))}),I!==te&&I.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(p.pushLight(se),se.castShadow&&p.pushShadow(se))}),p.setupLights(m._useLegacyLights);const he=new Set;return I.traverse(function(se){const Ve=se.material;if(Ve)if(Array.isArray(Ve))for(let We=0;We<Ve.length;We++){const Xe=Ve[We];De(Xe,te,se),he.add(Xe)}else De(Ve,te,se),he.add(Ve)}),v.pop(),p=null,he},this.compileAsync=function(I,Z,te=null){const he=this.compile(I,Z,te);return new Promise(se=>{function Ve(){if(he.forEach(function(We){G.get(We).currentProgram.isReady()&&he.delete(We)}),he.size===0){se(I);return}setTimeout(Ve,10)}ne.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let ze=null;function He(I){ze&&ze(I)}function je(){lt.stop()}function qe(){lt.start()}const lt=new By;lt.setAnimationLoop(He),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(I){ze=I,be.setAnimationLoop(I),I===null?lt.stop():lt.start()},be.addEventListener("sessionstart",je),be.addEventListener("sessionend",qe),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(Z),Z=be.getCamera()),I.isScene===!0&&I.onBeforeRender(m,I,Z,b),p=_e.get(I,v.length),p.init(),v.push(p),M.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),le.setFromProjectionMatrix(M),N=this.localClippingEnabled,U=we.init(this.clippingPlanes,N),_=de.get(I,u.length),_.init(),u.push(_),bt(I,Z,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(D,Y),this.info.render.frame++,U===!0&&we.beginShadows();const te=p.state.shadowsArray;if(ee.render(te,I,Z),U===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(_,I),p.setupLights(m._useLegacyLights),Z.isArrayCamera){const he=Z.cameras;for(let se=0,Ve=he.length;se<Ve;se++){const We=he[se];Gi(_,I,We,We.viewport)}}else Gi(_,I,Z);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(m,I,Z),L.resetDefaultState(),B=-1,w=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function bt(I,Z,te,he){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)te=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||le.intersectsSprite(I)){he&&oe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(M);const We=H.update(I),Xe=I.material;Xe.visible&&_.push(I,We,Xe,te,oe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||le.intersectsObject(I))){const We=H.update(I),Xe=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),oe.copy(I.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),oe.copy(We.boundingSphere.center)),oe.applyMatrix4(I.matrixWorld).applyMatrix4(M)),Array.isArray(Xe)){const Ye=We.groups;for(let et=0,Je=Ye.length;et<Je;et++){const Ze=Ye[et],Et=Xe[Ze.materialIndex];Et&&Et.visible&&_.push(I,We,Et,te,oe.z,Ze)}}else Xe.visible&&_.push(I,We,Xe,te,oe.z,null)}}const Ve=I.children;for(let We=0,Xe=Ve.length;We<Xe;We++)bt(Ve[We],Z,te,he)}function Gi(I,Z,te,he){const se=I.opaque,Ve=I.transmissive,We=I.transparent;p.setupLightsView(te),U===!0&&we.setGlobalState(m.clippingPlanes,te),Ve.length>0&&hi(se,Ve,Z,te),he&&ye.viewport(R.copy(he)),se.length>0&&ds(se,Z,te),Ve.length>0&&ds(Ve,Z,te),We.length>0&&ds(We,Z,te),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function hi(I,Z,te,he){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;const Ve=ue.isWebGL2;P===null&&(P=new rs(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Na:yr,minFilter:La,samples:Ve?4:0})),m.getDrawingBufferSize(q),Ve?P.setSize(q.x,q.y):P.setSize(Yh(q.x),Yh(q.y));const We=m.getRenderTarget();m.setRenderTarget(P),m.getClearColor(pe),k=m.getClearAlpha(),k<1&&m.setClearColor(16777215,.5),m.clear();const Xe=m.toneMapping;m.toneMapping=_r,ds(I,te,he),y.updateMultisampleRenderTarget(P),y.updateRenderTargetMipmap(P);let Ye=!1;for(let et=0,Je=Z.length;et<Je;et++){const Ze=Z[et],Et=Ze.object,gn=Ze.geometry,Lt=Ze.material,fi=Ze.group;if(Lt.side===In&&Et.layers.test(he.layers)){const pt=Lt.side;Lt.side=Kt,Lt.needsUpdate=!0,Io(Et,te,he,gn,Lt,fi),Lt.side=pt,Lt.needsUpdate=!0,Ye=!0}}Ye===!0&&(y.updateMultisampleRenderTarget(P),y.updateRenderTargetMipmap(P)),m.setRenderTarget(We),m.setClearColor(pe,k),m.toneMapping=Xe}function ds(I,Z,te){const he=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ve=I.length;se<Ve;se++){const We=I[se],Xe=We.object,Ye=We.geometry,et=he===null?We.material:he,Je=We.group;Xe.layers.test(te.layers)&&Io(Xe,Z,te,Ye,et,Je)}}function Io(I,Z,te,he,se,Ve){I.onBeforeRender(m,Z,te,he,se,Ve),I.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),se.onBeforeRender(m,Z,te,he,I,Ve),se.transparent===!0&&se.side===In&&se.forceSinglePass===!1?(se.side=Kt,se.needsUpdate=!0,m.renderBufferDirect(te,Z,he,se,I,Ve),se.side=Tr,se.needsUpdate=!0,m.renderBufferDirect(te,Z,he,se,I,Ve),se.side=In):m.renderBufferDirect(te,Z,he,se,I,Ve),I.onAfterRender(m,Z,te,he,se,Ve)}function an(I,Z,te){Z.isScene!==!0&&(Z=$);const he=G.get(I),se=p.state.lights,Ve=p.state.shadowsArray,We=se.state.version,Xe=re.getParameters(I,se.state,Ve,Z,te),Ye=re.getProgramCacheKey(Xe);let et=he.programs;he.environment=I.isMeshStandardMaterial?Z.environment:null,he.fog=Z.fog,he.envMap=(I.isMeshStandardMaterial?X:E).get(I.envMap||he.environment),et===void 0&&(I.addEventListener("dispose",Ae),et=new Map,he.programs=et);let Je=et.get(Ye);if(Je!==void 0){if(he.currentProgram===Je&&he.lightsStateVersion===We)return No(I,Xe),Je}else Xe.uniforms=re.getUniforms(I),I.onBuild(te,Xe,m),I.onBeforeCompile(Xe,m),Je=re.acquireProgram(Xe,Ye),et.set(Ye,Je),he.uniforms=Xe.uniforms;const Ze=he.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ze.clippingPlanes=we.uniform),No(I,Xe),he.needsLights=fs(I),he.lightsStateVersion=We,he.needsLights&&(Ze.ambientLightColor.value=se.state.ambient,Ze.lightProbe.value=se.state.probe,Ze.directionalLights.value=se.state.directional,Ze.directionalLightShadows.value=se.state.directionalShadow,Ze.spotLights.value=se.state.spot,Ze.spotLightShadows.value=se.state.spotShadow,Ze.rectAreaLights.value=se.state.rectArea,Ze.ltc_1.value=se.state.rectAreaLTC1,Ze.ltc_2.value=se.state.rectAreaLTC2,Ze.pointLights.value=se.state.point,Ze.pointLightShadows.value=se.state.pointShadow,Ze.hemisphereLights.value=se.state.hemi,Ze.directionalShadowMap.value=se.state.directionalShadowMap,Ze.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ze.spotShadowMap.value=se.state.spotShadowMap,Ze.spotLightMatrix.value=se.state.spotLightMatrix,Ze.spotLightMap.value=se.state.spotLightMap,Ze.pointShadowMap.value=se.state.pointShadowMap,Ze.pointShadowMatrix.value=se.state.pointShadowMatrix),he.currentProgram=Je,he.uniformsList=null,Je}function Lo(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=oc.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function No(I,Z){const te=G.get(I);te.outputColorSpace=Z.outputColorSpace,te.batching=Z.batching,te.instancing=Z.instancing,te.instancingColor=Z.instancingColor,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}function Tu(I,Z,te,he,se){Z.isScene!==!0&&(Z=$),y.resetTextureUnits();const Ve=Z.fog,We=he.isMeshStandardMaterial?Z.environment:null,Xe=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Oi,Ye=(he.isMeshStandardMaterial?X:E).get(he.envMap||We),et=he.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Je=!!te.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Ze=!!te.morphAttributes.position,Et=!!te.morphAttributes.normal,gn=!!te.morphAttributes.color;let Lt=_r;he.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Lt=m.toneMapping);const fi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,pt=fi!==void 0?fi.length:0,tt=G.get(he),Au=p.state.lights;if(U===!0&&(N===!0||I!==w)){const Tn=I===w&&he.id===B;we.setState(he,I,Tn)}let xt=!1;he.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Au.state.version||tt.outputColorSpace!==Xe||se.isBatchedMesh&&tt.batching===!1||!se.isBatchedMesh&&tt.batching===!0||se.isInstancedMesh&&tt.instancing===!1||!se.isInstancedMesh&&tt.instancing===!0||se.isSkinnedMesh&&tt.skinning===!1||!se.isSkinnedMesh&&tt.skinning===!0||se.isInstancedMesh&&tt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&tt.instancingColor===!1&&se.instanceColor!==null||tt.envMap!==Ye||he.fog===!0&&tt.fog!==Ve||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==we.numPlanes||tt.numIntersection!==we.numIntersection)||tt.vertexAlphas!==et||tt.vertexTangents!==Je||tt.morphTargets!==Ze||tt.morphNormals!==Et||tt.morphColors!==gn||tt.toneMapping!==Lt||ue.isWebGL2===!0&&tt.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,tt.__version=he.version);let Pr=tt.currentProgram;xt===!0&&(Pr=an(he,Z,se));let Tp=!1,Do=!1,bu=!1;const Wt=Pr.getUniforms(),Ir=tt.uniforms;if(ye.useProgram(Pr.program)&&(Tp=!0,Do=!0,bu=!0),he.id!==B&&(B=he.id,Do=!0),Tp||w!==I){Wt.setValue(z,"projectionMatrix",I.projectionMatrix),Wt.setValue(z,"viewMatrix",I.matrixWorldInverse);const Tn=Wt.map.cameraPosition;Tn!==void 0&&Tn.setValue(z,oe.setFromMatrixPosition(I.matrixWorld)),ue.logarithmicDepthBuffer&&Wt.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Wt.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),w!==I&&(w=I,Do=!0,bu=!0)}if(se.isSkinnedMesh){Wt.setOptional(z,se,"bindMatrix"),Wt.setOptional(z,se,"bindMatrixInverse");const Tn=se.skeleton;Tn&&(ue.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Wt.setValue(z,"boneTexture",Tn.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}se.isBatchedMesh&&(Wt.setOptional(z,se,"batchingTexture"),Wt.setValue(z,"batchingTexture",se._matricesTexture,y));const Cu=te.morphAttributes;if((Cu.position!==void 0||Cu.normal!==void 0||Cu.color!==void 0&&ue.isWebGL2===!0)&&Be.update(se,te,Pr),(Do||tt.receiveShadow!==se.receiveShadow)&&(tt.receiveShadow=se.receiveShadow,Wt.setValue(z,"receiveShadow",se.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Ir.envMap.value=Ye,Ir.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Do&&(Wt.setValue(z,"toneMappingExposure",m.toneMappingExposure),tt.needsLights&&hs(Ir,bu),Ve&&he.fog===!0&&ae.refreshFogUniforms(Ir,Ve),ae.refreshMaterialUniforms(Ir,he,ie,J,P),oc.upload(z,Lo(tt),Ir,y)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(oc.upload(z,Lo(tt),Ir,y),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Wt.setValue(z,"center",se.center),Wt.setValue(z,"modelViewMatrix",se.modelViewMatrix),Wt.setValue(z,"normalMatrix",se.normalMatrix),Wt.setValue(z,"modelMatrix",se.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Tn=he.uniformsGroups;for(let Ru=0,Jx=Tn.length;Ru<Jx;Ru++)if(ue.isWebGL2){const Ap=Tn[Ru];Se.update(Ap,Pr),Se.bind(Ap,Pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pr}function hs(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function fs(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,Z,te){G.get(I.texture).__webglTexture=Z,G.get(I.depthTexture).__webglTexture=te;const he=G.get(I);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=te===void 0,he.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,Z){const te=G.get(I);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,te=0){b=I,C=Z,A=te;let he=!0,se=null,Ve=!1,We=!1;if(I){const Ye=G.get(I);Ye.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(z.FRAMEBUFFER,null),he=!1):Ye.__webglFramebuffer===void 0?y.setupRenderTarget(I):Ye.__hasExternalTextures&&y.rebindTextures(I,G.get(I.texture).__webglTexture,G.get(I.depthTexture).__webglTexture);const et=I.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);const Je=G.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Je[Z])?se=Je[Z][te]:se=Je[Z],Ve=!0):ue.isWebGL2&&I.samples>0&&y.useMultisampledRTT(I)===!1?se=G.get(I).__webglMultisampledFramebuffer:Array.isArray(Je)?se=Je[te]:se=Je,R.copy(I.viewport),V.copy(I.scissor),W=I.scissorTest}else R.copy(K).multiplyScalar(ie).floor(),V.copy(ge).multiplyScalar(ie).floor(),W=xe;if(ye.bindFramebuffer(z.FRAMEBUFFER,se)&&ue.drawBuffers&&he&&ye.drawBuffers(I,se),ye.viewport(R),ye.scissor(V),ye.setScissorTest(W),Ve){const Ye=G.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ye.__webglTexture,te)}else if(We){const Ye=G.get(I.texture),et=Z||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ye.__webglTexture,te||0,et)}B=-1},this.readRenderTargetPixels=function(I,Z,te,he,se,Ve,We){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=G.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&We!==void 0&&(Xe=Xe[We]),Xe){ye.bindFramebuffer(z.FRAMEBUFFER,Xe);try{const Ye=I.texture,et=Ye.format,Je=Ye.type;if(et!==$n&&Ce.convert(et)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Je===Na&&(ne.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Je!==yr&&Ce.convert(Je)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===lr&&(ue.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-he&&te>=0&&te<=I.height-se&&z.readPixels(Z,te,he,se,Ce.convert(et),Ce.convert(Je),Ve)}finally{const Ye=b!==null?G.get(b).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(I,Z,te=0){const he=Math.pow(2,-te),se=Math.floor(Z.image.width*he),Ve=Math.floor(Z.image.height*he);y.setTexture2D(Z,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,I.x,I.y,se,Ve),ye.unbindTexture()},this.copyTextureToTexture=function(I,Z,te,he=0){const se=Z.image.width,Ve=Z.image.height,We=Ce.convert(te.format),Xe=Ce.convert(te.type);y.setTexture2D(te,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,te.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,te.unpackAlignment),Z.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,he,I.x,I.y,se,Ve,We,Xe,Z.image.data):Z.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,he,I.x,I.y,Z.mipmaps[0].width,Z.mipmaps[0].height,We,Z.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,he,I.x,I.y,We,Xe,Z.image),he===0&&te.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,te,he,se=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=I.max.x-I.min.x+1,We=I.max.y-I.min.y+1,Xe=I.max.z-I.min.z+1,Ye=Ce.convert(he.format),et=Ce.convert(he.type);let Je;if(he.isData3DTexture)y.setTexture3D(he,0),Je=z.TEXTURE_3D;else if(he.isDataArrayTexture||he.isCompressedArrayTexture)y.setTexture2DArray(he,0),Je=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,he.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,he.unpackAlignment);const Ze=z.getParameter(z.UNPACK_ROW_LENGTH),Et=z.getParameter(z.UNPACK_IMAGE_HEIGHT),gn=z.getParameter(z.UNPACK_SKIP_PIXELS),Lt=z.getParameter(z.UNPACK_SKIP_ROWS),fi=z.getParameter(z.UNPACK_SKIP_IMAGES),pt=te.isCompressedTexture?te.mipmaps[se]:te.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),te.isDataTexture||te.isData3DTexture?z.texSubImage3D(Je,se,Z.x,Z.y,Z.z,Ve,We,Xe,Ye,et,pt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Je,se,Z.x,Z.y,Z.z,Ve,We,Xe,Ye,pt.data)):z.texSubImage3D(Je,se,Z.x,Z.y,Z.z,Ve,We,Xe,Ye,et,pt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ze),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),z.pixelStorei(z.UNPACK_SKIP_PIXELS,gn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Lt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,fi),se===0&&he.generateMipmaps&&z.generateMipmap(Je),ye.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?y.setTextureCube(I,0):I.isData3DTexture?y.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?y.setTexture2DArray(I,0):y.setTexture2D(I,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rp?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===gu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Jr:Ty}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?Ut:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LC extends $y{}LC.prototype.isWebGL1Renderer=!0;class tv extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class qy extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nv=new j,iv=new j,rv=new _t,Ld=new sp,Fl=new vu;class NC extends Ft{constructor(e=new kn,n=new qy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)nv.fromBufferAttribute(n,r-1),iv.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=nv.distanceTo(iv);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;rv.copy(r).invert(),Ld.copy(e.ray).applyMatrix4(rv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new j,d=new j,h=new j,f=new j,g=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let m=u,S=v-1;m<S;m+=g){const C=x.getX(m),A=x.getX(m+1);if(c.fromBufferAttribute(p,C),d.fromBufferAttribute(p,A),Ld.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||n.push({distance:B,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let m=u,S=v-1;m<S;m+=g){if(c.fromBufferAttribute(p,m),d.fromBufferAttribute(p,m+1),Ld.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Ns extends mn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,g=(o-d)/f;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Re:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new j,r=[],s=[],o=[],a=new j,l=new _t;for(let g=0;g<=e;g++){const x=g/e;r[g]=this.getTangentAt(x,new j)}s[0]=new j,o[0]=new j;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Ht(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,x))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Ht(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],g*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lp extends ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Re,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*d-g*h+this.aX,c=f*h+g*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class DC extends lp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,g*=d,r(o,a,f,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Bl=new j,Nd=new cp,Dd=new cp,Ud=new cp;class UC extends ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new j){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Bl.subVectors(r[0],r[1]).add(r[0]),c=Bl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),g),_=Math.pow(h.distanceToSquared(f),g),p=Math.pow(f.distanceToSquared(d),g);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),Nd.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,x,_,p),Dd.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,x,_,p),Ud.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,x,_,p)}else this.curveType==="catmullrom"&&(Nd.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Dd.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Ud.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Nd.calc(l),Dd.calc(l),Ud.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new j().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sv(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function OC(t,e){const n=1-t;return n*n*e}function kC(t,e){return 2*(1-t)*t*e}function FC(t,e){return t*t*e}function da(t,e,n,i){return OC(t,e)+kC(t,n)+FC(t,i)}function BC(t,e){const n=1-t;return n*n*n*e}function zC(t,e){const n=1-t;return 3*n*n*t*e}function HC(t,e){return 3*(1-t)*t*t*e}function VC(t,e){return t*t*t*e}function ha(t,e,n,i,r){return BC(t,e)+zC(t,n)+HC(t,i)+VC(t,r)}class Yy extends ui{constructor(e=new Re,n=new Re,i=new Re,r=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Re){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ha(e,r.x,s.x,o.x,a.x),ha(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GC extends ui{constructor(e=new j,n=new j,i=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new j){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ha(e,r.x,s.x,o.x,a.x),ha(e,r.y,s.y,o.y,a.y),ha(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ky extends ui{constructor(e=new Re,n=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Re){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Re){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WC extends ui{constructor(e=new j,n=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new j){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new j){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jy extends ui{constructor(e=new Re,n=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Re){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(da(e,r.x,s.x,o.x),da(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jC extends ui{constructor(e=new j,n=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new j){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(da(e,r.x,s.x,o.x),da(e,r.y,s.y,o.y),da(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zy extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Re){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(sv(a,l.x,c.x,d.x,h.x),sv(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Re().fromArray(r))}return this}}var ov=Object.freeze({__proto__:null,ArcCurve:DC,CatmullRomCurve3:UC,CubicBezierCurve:Yy,CubicBezierCurve3:GC,EllipseCurve:lp,LineCurve:Ky,LineCurve3:WC,QuadraticBezierCurve:Jy,QuadraticBezierCurve3:jC,SplineCurve:Zy});class XC extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ov[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new ov[r.type]().fromJSON(r))}return this}}class so extends XC{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Ky(this.currentPoint.clone(),new Re(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Jy(this.currentPoint.clone(),new Re(e,n),new Re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Yy(this.currentPoint.clone(),new Re(e,n),new Re(i,r),new Re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Zy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new lp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ac extends so{constructor(e){super(e),this.uuid=Ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new so().fromJSON(r))}return this}}const $C={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Qy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,h,f,g;if(i&&(s=ZC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let x=n;x<r;x+=n)h=t[x],f=t[x+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>d&&(d=f);g=Math.max(c-a,d-l),g=g!==0?32767/g:0}return Ua(s,o,n,a,l,g,0),o}};function Qy(t,e,n,i,r){let s,o;if(r===cR(t,e,n,i)>0)for(s=e;s<n;s+=i)o=av(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=av(s,t[s],t[s+1],o);return o&&xu(o,o.next)&&(ka(o),o=o.next),o}function ss(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(xu(n,n.next)||gt(n.prev,n,n.next)===0)){if(ka(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ua(t,e,n,i,r,s,o){if(!t)return;!o&&s&&iR(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?YC(t,i,r,s):qC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ka(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=KC(ss(t),e,n),Ua(t,e,n,i,r,s,2)):o===2&&JC(t,e,n,i,r,s):Ua(ss(t),e,n,i,r,s,1);break}}}function qC(t){const e=t.prev,n=t,i=t.next;if(gt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,g=a>l?a>c?a:c:l>c?l:c;let x=i.next;for(;x!==e;){if(x.x>=d&&x.x<=f&&x.y>=h&&x.y<=g&&Ks(r,a,s,l,o,c,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function YC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,f=o.y,g=a<l?a<c?a:c:l<c?l:c,x=d<h?d<f?d:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=d>h?d>f?d:f:h>f?h:f,u=Jh(g,x,e,n,i),v=Jh(_,p,e,n,i);let m=t.prevZ,S=t.nextZ;for(;m&&m.z>=u&&S&&S.z<=v;){if(m.x>=g&&m.x<=_&&m.y>=x&&m.y<=p&&m!==r&&m!==o&&Ks(a,d,l,h,c,f,m.x,m.y)&&gt(m.prev,m,m.next)>=0||(m=m.prevZ,S.x>=g&&S.x<=_&&S.y>=x&&S.y<=p&&S!==r&&S!==o&&Ks(a,d,l,h,c,f,S.x,S.y)&&gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;m&&m.z>=u;){if(m.x>=g&&m.x<=_&&m.y>=x&&m.y<=p&&m!==r&&m!==o&&Ks(a,d,l,h,c,f,m.x,m.y)&&gt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;S&&S.z<=v;){if(S.x>=g&&S.x<=_&&S.y>=x&&S.y<=p&&S!==r&&S!==o&&Ks(a,d,l,h,c,f,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function KC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!xu(r,s)&&ex(r,i,i.next,s)&&Oa(r,s)&&Oa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ka(i),ka(i.next),i=t=s),i=i.next}while(i!==t);return ss(i)}function JC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oR(o,a)){let l=tx(o,a);o=ss(o,o.next),l=ss(l,l.next),Ua(o,e,n,i,r,s,0),Ua(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function ZC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Qy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(sR(c));for(r.sort(QC),s=0;s<r.length;s++)n=eR(r[s],n);return n}function QC(t,e){return t.x-e.x}function eR(t,e){const n=tR(t,e);if(!n)return e;const i=tx(n,t);return ss(i,i.next),ss(n,n.next)}function tR(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ks(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Oa(n,t)&&(h<d||h===d&&(n.x>r.x||n.x===r.x&&nR(r,n)))&&(r=n,d=h)),n=n.next;while(n!==a);return r}function nR(t,e){return gt(t.prev,t,e.prev)<0&&gt(e.next,t,t.next)<0}function iR(t,e,n,i){let r=t;do r.z===0&&(r.z=Jh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,rR(r)}function rR(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Jh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function sR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ks(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function oR(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!aR(t,e)&&(Oa(t,e)&&Oa(e,t)&&lR(t,e)&&(gt(t.prev,t,e.prev)||gt(t,e.prev,e))||xu(t,e)&&gt(t.prev,t,t.next)>0&&gt(e.prev,e,e.next)>0)}function gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function xu(t,e){return t.x===e.x&&t.y===e.y}function ex(t,e,n,i){const r=Hl(gt(t,e,n)),s=Hl(gt(t,e,i)),o=Hl(gt(n,i,t)),a=Hl(gt(n,i,e));return!!(r!==s&&o!==a||r===0&&zl(t,n,e)||s===0&&zl(t,i,e)||o===0&&zl(n,t,i)||a===0&&zl(n,e,i))}function zl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Hl(t){return t>0?1:t<0?-1:0}function aR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ex(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Oa(t,e){return gt(t.prev,t,t.next)<0?gt(t,e,t.next)>=0&&gt(t,t.prev,e)>=0:gt(t,e,t.prev)<0||gt(t,t.next,e)<0}function lR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function tx(t,e){const n=new Zh(t.i,t.x,t.y),i=new Zh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function av(t,e,n,i){const r=new Zh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ka(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Zh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cR(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Su{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Su.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];lv(e),cv(i,e);let o=e.length;n.forEach(lv);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,cv(i,n[l]);const a=$C.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function lv(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function cv(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class fa extends kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new j,f=new j,g=[],x=[],_=[],p=[];for(let u=0;u<=i;u++){const v=[],m=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+m*a),h.y=e*Math.cos(o+m*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+m*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(A+S,1-m),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const m=d[u][v+1],S=d[u][v],C=d[u+1][v],A=d[u+1][v+1];(u!==0||o>0)&&g.push(m,S,A),(u!==i-1||l<Math.PI)&&g.push(S,C,A)}this.setIndex(g),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uv extends bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ay,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const dv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class uR{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const g=c[h],x=c[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return x}return null}}}const dR=new uR;class up{constructor(e){this.manager=e!==void 0?e:dR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class hR extends Error{constructor(e,n){super(e),this.response=n}}class fR extends up{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(yi[e]!==void 0){yi[e].push({onLoad:n,onProgress:i,onError:r});return}yi[e]=[],yi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=yi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=f?parseInt(f):0,x=g!==0;let _=0;const p=new ReadableStream({start(u){v();function v(){h.read().then(({done:m,value:S})=>{if(m)u.close();else{_+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:g});for(let A=0,b=d.length;A<b;A++){const B=d[A];B.onProgress&&B.onProgress(C)}u.enqueue(S),v()}})}}});return new Response(p)}else throw new hR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(x=>g.decode(x))}}}).then(c=>{dv.add(e,c);const d=yi[e];delete yi[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{const d=yi[e];if(d===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nx extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Od=new _t,hv=new j,fv=new j;class pR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hv.setFromMatrixPosition(e.matrixWorld),n.position.copy(hv),fv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),Od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mR extends pR{constructor(){super(new zy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pv extends nx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new mR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gR extends nx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gv=new Re;class vR{constructor(e=new Re(1/0,1/0),n=new Re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gv.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Or{constructor(){this.type="ShapePath",this.color=new it,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new so,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(u){const v=[];for(let m=0,S=u.length;m<S;m++){const C=u[m],A=new ac;A.curves=C.curves,v.push(A)}return v}function i(u,v){const m=v.length;let S=!1;for(let C=m-1,A=0;A<m;C=A++){let b=v[C],B=v[A],w=B.x-b.x,R=B.y-b.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(b=v[A],w=-w,B=v[C],R=-R),u.y<b.y||u.y>B.y)continue;if(u.y===b.y){if(u.x===b.x)return!0}else{const V=R*(u.x-b.x)-w*(u.y-b.y);if(V===0)return!0;if(V<0)continue;S=!S}}else{if(u.y!==b.y)continue;if(B.x<=u.x&&u.x<=b.x||b.x<=u.x&&u.x<=B.x)return!0}}return S}const r=Su.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ac,l.curves=a.curves,c.push(l),c;let d=!r(s[0].getPoints());d=e?!d:d;const h=[],f=[];let g=[],x=0,_;f[x]=void 0,g[x]=[];for(let u=0,v=s.length;u<v;u++)a=s[u],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!d&&f[x]&&x++,f[x]={s:new ac,p:_},f[x].s.curves=a.curves,d&&x++,g[x]=[]):g[x].push({h:a,p:_[0]});if(!f[0])return n(s);if(f.length>1){let u=!1,v=0;for(let m=0,S=f.length;m<S;m++)h[m]=[];for(let m=0,S=f.length;m<S;m++){const C=g[m];for(let A=0;A<C.length;A++){const b=C[A];let B=!0;for(let w=0;w<f.length;w++)i(b.p,f[w].p)&&(m!==w&&v++,B?(B=!1,h[w].push(b)):u=!0);B&&h[m].push(b)}}v>0&&u===!1&&(g=h)}let p;for(let u=0,v=f.length;u<v;u++){l=f[u].s,c.push(l),p=g[u];for(let m=0,S=p.length;m<S;m++)l.holes.push(p[m].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const vv={type:"change"},kd={type:"start"},_v={type:"end"},Vl=new sp,yv=new Qi,_R=Math.cos(70*Aw.DEG2RAD);class yR extends us{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",_e),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vv),i.update(),s=r.NONE},this.update=function(){const L=new j,Se=new Ar().setFromUnitVectors(e.up,new j(0,1,0)),Oe=Se.clone().invert(),be=new j,ce=new Ar,F=new j,Ee=2*Math.PI;return function(O=null){const fe=i.object.position;L.copy(fe).sub(i.target),L.applyQuaternion(Se),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&W(R(O)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=i.minAzimuthAngle,ze=i.maxAzimuthAngle;isFinite(De)&&isFinite(ze)&&(De<-Math.PI?De+=Ee:De>Math.PI&&(De-=Ee),ze<-Math.PI?ze+=Ee:ze>Math.PI&&(ze-=Ee),De<=ze?a.theta=Math.max(De,Math.min(ze,a.theta)):a.theta=a.theta>(De+ze)/2?Math.max(De,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(Oe),fe.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let He=!1;if(i.zoomToCursor&&A){let je=null;if(i.object.isPerspectiveCamera){const qe=L.length();je=K(qe*c);const lt=qe-je;i.object.position.addScaledVector(S,lt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const qe=new j(C.x,C.y,0);qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),He=!0;const lt=new j(C.x,C.y,0);lt.unproject(i.object),i.object.position.sub(lt).add(qe),i.object.updateMatrixWorld(),je=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;je!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(je).add(i.object.position):(Vl.origin.copy(i.object.position),Vl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Vl.direction))<_R?e.lookAt(i.target):(yv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Vl.intersectPlane(yv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),He=!0);return c=1,A=!1,He||be.distanceToSquared(i.object.position)>o||8*(1-ce.dot(i.object.quaternion))>o||F.distanceToSquared(i.target)>0?(i.dispatchEvent(vv),be.copy(i.object.position),ce.copy(i.object.quaternion),F.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ke),i.domElement.removeEventListener("pointerdown",y),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",H),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",X),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_e),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new mv,l=new mv;let c=1;const d=new j,h=new Re,f=new Re,g=new Re,x=new Re,_=new Re,p=new Re,u=new Re,v=new Re,m=new Re,S=new j,C=new Re;let A=!1;const b=[],B={};let w=!1;function R(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function V(L){const Se=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*Se)}function W(L){l.theta-=L}function pe(L){l.phi-=L}const k=function(){const L=new j;return function(Oe,be){L.setFromMatrixColumn(be,0),L.multiplyScalar(-Oe),d.add(L)}}(),Q=function(){const L=new j;return function(Oe,be){i.screenSpacePanning===!0?L.setFromMatrixColumn(be,1):(L.setFromMatrixColumn(be,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Oe),d.add(L)}}(),J=function(){const L=new j;return function(Oe,be){const ce=i.domElement;if(i.object.isPerspectiveCamera){const F=i.object.position;L.copy(F).sub(i.target);let Ee=L.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),k(2*Oe*Ee/ce.clientHeight,i.object.matrix),Q(2*be*Ee/ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(Oe*(i.object.right-i.object.left)/i.object.zoom/ce.clientWidth,i.object.matrix),Q(be*(i.object.top-i.object.bottom)/i.object.zoom/ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(L,Se){if(!i.zoomToCursor)return;A=!0;const Oe=i.domElement.getBoundingClientRect(),be=L-Oe.left,ce=Se-Oe.top,F=Oe.width,Ee=Oe.height;C.x=be/F*2-1,C.y=-(ce/Ee)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ge(L){h.set(L.clientX,L.clientY)}function xe(L){Y(L.clientX,L.clientX),u.set(L.clientX,L.clientY)}function le(L){x.set(L.clientX,L.clientY)}function U(L){f.set(L.clientX,L.clientY),g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Se=i.domElement;W(2*Math.PI*g.x/Se.clientHeight),pe(2*Math.PI*g.y/Se.clientHeight),h.copy(f),i.update()}function N(L){v.set(L.clientX,L.clientY),m.subVectors(v,u),m.y>0?ie(V(m.y)):m.y<0&&D(V(m.y)),u.copy(v),i.update()}function P(L){_.set(L.clientX,L.clientY),p.subVectors(_,x).multiplyScalar(i.panSpeed),J(p.x,p.y),x.copy(_),i.update()}function M(L){Y(L.clientX,L.clientY),L.deltaY<0?D(V(L.deltaY)):L.deltaY>0&&ie(V(L.deltaY)),i.update()}function q(L){let Se=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?pe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,i.keyPanSpeed),Se=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?pe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,-i.keyPanSpeed),Se=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(i.keyPanSpeed,0),Se=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(-i.keyPanSpeed,0),Se=!0;break}Se&&(L.preventDefault(),i.update())}function oe(L){if(b.length===1)h.set(L.pageX,L.pageY);else{const Se=Ce(L),Oe=.5*(L.pageX+Se.x),be=.5*(L.pageY+Se.y);h.set(Oe,be)}}function $(L){if(b.length===1)x.set(L.pageX,L.pageY);else{const Se=Ce(L),Oe=.5*(L.pageX+Se.x),be=.5*(L.pageY+Se.y);x.set(Oe,be)}}function ve(L){const Se=Ce(L),Oe=L.pageX-Se.x,be=L.pageY-Se.y,ce=Math.sqrt(Oe*Oe+be*be);u.set(0,ce)}function z(L){i.enableZoom&&ve(L),i.enablePan&&$(L)}function Ue(L){i.enableZoom&&ve(L),i.enableRotate&&oe(L)}function ne(L){if(b.length==1)f.set(L.pageX,L.pageY);else{const Oe=Ce(L),be=.5*(L.pageX+Oe.x),ce=.5*(L.pageY+Oe.y);f.set(be,ce)}g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Se=i.domElement;W(2*Math.PI*g.x/Se.clientHeight),pe(2*Math.PI*g.y/Se.clientHeight),h.copy(f)}function ue(L){if(b.length===1)_.set(L.pageX,L.pageY);else{const Se=Ce(L),Oe=.5*(L.pageX+Se.x),be=.5*(L.pageY+Se.y);_.set(Oe,be)}p.subVectors(_,x).multiplyScalar(i.panSpeed),J(p.x,p.y),x.copy(_)}function ye(L){const Se=Ce(L),Oe=L.pageX-Se.x,be=L.pageY-Se.y,ce=Math.sqrt(Oe*Oe+be*be);v.set(0,ce),m.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),ie(m.y),u.copy(v);const F=(L.pageX+Se.x)*.5,Ee=(L.pageY+Se.y)*.5;Y(F,Ee)}function Ie(L){i.enableZoom&&ye(L),i.enablePan&&ue(L)}function G(L){i.enableZoom&&ye(L),i.enableRotate&&ne(L)}function y(L){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",X)),Be(L),L.pointerType==="touch"?we(L):Te(L))}function E(L){i.enabled!==!1&&(L.pointerType==="touch"?ee(L):Me(L))}function X(L){Ne(L),b.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",X)),i.dispatchEvent(_v),s=r.NONE}function Te(L){let Se;switch(L.button){case 0:Se=i.mouseButtons.LEFT;break;case 1:Se=i.mouseButtons.MIDDLE;break;case 2:Se=i.mouseButtons.RIGHT;break;default:Se=-1}switch(Se){case ms.DOLLY:if(i.enableZoom===!1)return;xe(L),s=r.DOLLY;break;case ms.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;le(L),s=r.PAN}else{if(i.enableRotate===!1)return;ge(L),s=r.ROTATE}break;case ms.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ge(L),s=r.ROTATE}else{if(i.enablePan===!1)return;le(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kd)}function Me(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;U(L);break;case r.DOLLY:if(i.enableZoom===!1)return;N(L);break;case r.PAN:if(i.enablePan===!1)return;P(L);break}}function H(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(kd),M(re(L)),i.dispatchEvent(_v))}function re(L){const Se=L.deltaMode,Oe={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(Se){case 1:Oe.deltaY*=16;break;case 2:Oe.deltaY*=100;break}return L.ctrlKey&&!w&&(Oe.deltaY*=10),Oe}function ae(L){L.key==="Control"&&(w=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(L){L.key==="Control"&&(w=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function _e(L){i.enabled===!1||i.enablePan===!1||q(L)}function we(L){switch(Le(L),b.length){case 1:switch(i.touches.ONE){case gs.ROTATE:if(i.enableRotate===!1)return;oe(L),s=r.TOUCH_ROTATE;break;case gs.PAN:if(i.enablePan===!1)return;$(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case gs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(L),s=r.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kd)}function ee(L){switch(Le(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ne(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ue(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(L),i.update();break;default:s=r.NONE}}function ke(L){i.enabled!==!1&&L.preventDefault()}function Be(L){b.push(L.pointerId)}function Ne(L){delete B[L.pointerId];for(let Se=0;Se<b.length;Se++)if(b[Se]==L.pointerId){b.splice(Se,1);return}}function Le(L){let Se=B[L.pointerId];Se===void 0&&(Se=new Re,B[L.pointerId]=Se),Se.set(L.pageX,L.pageY)}function Ce(L){const Se=L.pointerId===b[0]?b[1]:b[0];return B[Se]}i.domElement.addEventListener("contextmenu",ke),i.domElement.addEventListener("pointerdown",y),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",H,{passive:!1}),document.addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}}const xv=new j,xR=new Ar,Sv=new j;class SR extends Ft{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this}}const ti=new _t,ER=new _t;class MR{constructor(e={}){const n=this;let i,r,s,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const d=document.createElement("div");d.style.transformStyle="preserve-3d",c.appendChild(d),this.getSize=function(){return{width:i,height:r}},this.render=function(_,p){const u=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(r/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let v,m;p.isOrthographicCamera&&(v=-(p.right+p.left)/2,m=(p.top+p.bottom)/2);const S=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,C=p.isOrthographicCamera?`scale( ${S} )scale(`+u+")translate("+h(v)+"px,"+h(m)+"px)"+f(p.matrixWorldInverse):`scale( ${S} )translateZ(`+u+"px)"+f(p.matrixWorldInverse),b=(p.isPerspectiveCamera?"perspective("+u+"px) ":"")+C+"translate("+s+"px,"+o+"px)";a.camera.style!==b&&(d.style.transform=b,a.camera.style=b),x(_,_,p)},this.setSize=function(_,p){i=_,r=p,s=i/2,o=r/2,l.style.width=_+"px",l.style.height=p+"px",c.style.width=_+"px",c.style.height=p+"px",d.style.width=_+"px",d.style.height=p+"px"};function h(_){return Math.abs(_)<1e-10?0:_}function f(_){const p=_.elements;return"matrix3d("+h(p[0])+","+h(-p[1])+","+h(p[2])+","+h(p[3])+","+h(p[4])+","+h(-p[5])+","+h(p[6])+","+h(p[7])+","+h(p[8])+","+h(-p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(-p[13])+","+h(p[14])+","+h(p[15])+")"}function g(_){const p=_.elements;return"translate(-50%,-50%)"+("matrix3d("+h(p[0])+","+h(p[1])+","+h(p[2])+","+h(p[3])+","+h(-p[4])+","+h(-p[5])+","+h(-p[6])+","+h(-p[7])+","+h(p[8])+","+h(p[9])+","+h(p[10])+","+h(p[11])+","+h(p[12])+","+h(p[13])+","+h(p[14])+","+h(p[15])+")")}function x(_,p,u,v){if(_.isCSS3DObject){const m=_.visible===!0&&_.layers.test(u.layers)===!0;if(_.element.style.display=m===!0?"":"none",m===!0){_.onBeforeRender(n,p,u);let S;_.isCSS3DSprite?(ti.copy(u.matrixWorldInverse),ti.transpose(),_.rotation2D!==0&&ti.multiply(ER.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(xv,xR,Sv),ti.setPosition(xv),ti.scale(Sv),ti.elements[3]=0,ti.elements[7]=0,ti.elements[11]=0,ti.elements[15]=1,S=g(ti)):S=g(_.matrixWorld);const C=_.element,A=a.objects.get(_);if(A===void 0||A.style!==S){C.style.transform=S;const b={style:S};a.objects.set(_,b)}C.parentNode!==d&&d.appendChild(C),_.onAfterRender(n,p,u)}}for(let m=0,S=_.children.length;m<S;m++)x(_.children[m],p,u)}}}const wR=Ut;class Vc extends up{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new fR(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(U,N){if(U.nodeType!==1)return;const P=S(U);let M=!1,q=null;switch(U.nodeName){case"svg":N=x(U,N);break;case"style":s(U);break;case"g":N=x(U,N);break;case"path":N=x(U,N),U.hasAttribute("d")&&(q=r(U));break;case"rect":N=x(U,N),q=l(U);break;case"polygon":N=x(U,N),q=c(U);break;case"polyline":N=x(U,N),q=d(U);break;case"circle":N=x(U,N),q=h(U);break;case"ellipse":N=x(U,N),q=f(U);break;case"line":N=x(U,N),q=g(U);break;case"defs":M=!0;break;case"use":N=x(U,N);const ve=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),z=U.viewportElement.getElementById(ve);z?i(z,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+ve);break}q&&(N.fill!==void 0&&N.fill!=="none"&&q.color.setStyle(N.fill,wR),A(q,ge),W.push(q),q.userData={node:U,style:N});const oe=U.childNodes;for(let $=0;$<oe.length;$++){const ve=oe[$];M&&ve.nodeName!=="style"&&ve.nodeName!=="defs"||i(ve,N)}P&&(k.pop(),k.length>0?ge.copy(k[k.length-1]):ge.identity())}function r(U){const N=new Or,P=new Re,M=new Re,q=new Re;let oe=!0,$=!1;const ve=U.getAttribute("d");if(ve===""||ve==="none")return null;const z=ve.match(/[a-df-z][^a-df-z]*/ig);for(let Ue=0,ne=z.length;Ue<ne;Ue++){const ue=z[Ue],ye=ue.charAt(0),Ie=ue.slice(1).trim();oe===!0&&($=!0,oe=!1);let G;switch(ye){case"M":G=p(Ie);for(let y=0,E=G.length;y<E;y+=2)P.x=G[y+0],P.y=G[y+1],M.x=P.x,M.y=P.y,y===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),y===0&&q.copy(P);break;case"H":G=p(Ie);for(let y=0,E=G.length;y<E;y++)P.x=G[y],M.x=P.x,M.y=P.y,N.lineTo(P.x,P.y),y===0&&$===!0&&q.copy(P);break;case"V":G=p(Ie);for(let y=0,E=G.length;y<E;y++)P.y=G[y],M.x=P.x,M.y=P.y,N.lineTo(P.x,P.y),y===0&&$===!0&&q.copy(P);break;case"L":G=p(Ie);for(let y=0,E=G.length;y<E;y+=2)P.x=G[y+0],P.y=G[y+1],M.x=P.x,M.y=P.y,N.lineTo(P.x,P.y),y===0&&$===!0&&q.copy(P);break;case"C":G=p(Ie);for(let y=0,E=G.length;y<E;y+=6)N.bezierCurveTo(G[y+0],G[y+1],G[y+2],G[y+3],G[y+4],G[y+5]),M.x=G[y+2],M.y=G[y+3],P.x=G[y+4],P.y=G[y+5],y===0&&$===!0&&q.copy(P);break;case"S":G=p(Ie);for(let y=0,E=G.length;y<E;y+=4)N.bezierCurveTo(_(P.x,M.x),_(P.y,M.y),G[y+0],G[y+1],G[y+2],G[y+3]),M.x=G[y+0],M.y=G[y+1],P.x=G[y+2],P.y=G[y+3],y===0&&$===!0&&q.copy(P);break;case"Q":G=p(Ie);for(let y=0,E=G.length;y<E;y+=4)N.quadraticCurveTo(G[y+0],G[y+1],G[y+2],G[y+3]),M.x=G[y+0],M.y=G[y+1],P.x=G[y+2],P.y=G[y+3],y===0&&$===!0&&q.copy(P);break;case"T":G=p(Ie);for(let y=0,E=G.length;y<E;y+=2){const X=_(P.x,M.x),Te=_(P.y,M.y);N.quadraticCurveTo(X,Te,G[y+0],G[y+1]),M.x=X,M.y=Te,P.x=G[y+0],P.y=G[y+1],y===0&&$===!0&&q.copy(P)}break;case"A":G=p(Ie,[3,4],7);for(let y=0,E=G.length;y<E;y+=7){if(G[y+5]==P.x&&G[y+6]==P.y)continue;const X=P.clone();P.x=G[y+5],P.y=G[y+6],M.x=P.x,M.y=P.y,o(N,G[y],G[y+1],G[y+2],G[y+3],G[y+4],X,P),y===0&&$===!0&&q.copy(P)}break;case"m":G=p(Ie);for(let y=0,E=G.length;y<E;y+=2)P.x+=G[y+0],P.y+=G[y+1],M.x=P.x,M.y=P.y,y===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),y===0&&q.copy(P);break;case"h":G=p(Ie);for(let y=0,E=G.length;y<E;y++)P.x+=G[y],M.x=P.x,M.y=P.y,N.lineTo(P.x,P.y),y===0&&$===!0&&q.copy(P);break;case"v":G=p(Ie);for(let y=0,E=G.length;y<E;y++)P.y+=G[y],M.x=P.x,M.y=P.y,N.lineTo(P.x,P.y),y===0&&$===!0&&q.copy(P);break;case"l":G=p(Ie);for(let y=0,E=G.length;y<E;y+=2)P.x+=G[y+0],P.y+=G[y+1],M.x=P.x,M.y=P.y,N.lineTo(P.x,P.y),y===0&&$===!0&&q.copy(P);break;case"c":G=p(Ie);for(let y=0,E=G.length;y<E;y+=6)N.bezierCurveTo(P.x+G[y+0],P.y+G[y+1],P.x+G[y+2],P.y+G[y+3],P.x+G[y+4],P.y+G[y+5]),M.x=P.x+G[y+2],M.y=P.y+G[y+3],P.x+=G[y+4],P.y+=G[y+5],y===0&&$===!0&&q.copy(P);break;case"s":G=p(Ie);for(let y=0,E=G.length;y<E;y+=4)N.bezierCurveTo(_(P.x,M.x),_(P.y,M.y),P.x+G[y+0],P.y+G[y+1],P.x+G[y+2],P.y+G[y+3]),M.x=P.x+G[y+0],M.y=P.y+G[y+1],P.x+=G[y+2],P.y+=G[y+3],y===0&&$===!0&&q.copy(P);break;case"q":G=p(Ie);for(let y=0,E=G.length;y<E;y+=4)N.quadraticCurveTo(P.x+G[y+0],P.y+G[y+1],P.x+G[y+2],P.y+G[y+3]),M.x=P.x+G[y+0],M.y=P.y+G[y+1],P.x+=G[y+2],P.y+=G[y+3],y===0&&$===!0&&q.copy(P);break;case"t":G=p(Ie);for(let y=0,E=G.length;y<E;y+=2){const X=_(P.x,M.x),Te=_(P.y,M.y);N.quadraticCurveTo(X,Te,P.x+G[y+0],P.y+G[y+1]),M.x=X,M.y=Te,P.x=P.x+G[y+0],P.y=P.y+G[y+1],y===0&&$===!0&&q.copy(P)}break;case"a":G=p(Ie,[3,4],7);for(let y=0,E=G.length;y<E;y+=7){if(G[y+5]==0&&G[y+6]==0)continue;const X=P.clone();P.x+=G[y+5],P.y+=G[y+6],M.x=P.x,M.y=P.y,o(N,G[y],G[y+1],G[y+2],G[y+3],G[y+4],X,P),y===0&&$===!0&&q.copy(P)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(P.copy(q),N.currentPath.currentPoint.copy(P),oe=!0);break;default:console.warn(ue)}$=!1}return N}function s(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let N=0;N<U.sheet.cssRules.length;N++){const P=U.sheet.cssRules[N];if(P.type!==1)continue;const M=P.selectorText.split(/,/gm).filter(Boolean).map(q=>q.trim());for(let q=0;q<M.length;q++){const oe=Object.fromEntries(Object.entries(P.style).filter(([,$])=>$!==""));pe[M[q]]=Object.assign(pe[M[q]]||{},oe)}}}function o(U,N,P,M,q,oe,$,ve){if(N==0||P==0){U.lineTo(ve.x,ve.y);return}M=M*Math.PI/180,N=Math.abs(N),P=Math.abs(P);const z=($.x-ve.x)/2,Ue=($.y-ve.y)/2,ne=Math.cos(M)*z+Math.sin(M)*Ue,ue=-Math.sin(M)*z+Math.cos(M)*Ue;let ye=N*N,Ie=P*P;const G=ne*ne,y=ue*ue,E=G/ye+y/Ie;if(E>1){const ee=Math.sqrt(E);N=ee*N,P=ee*P,ye=N*N,Ie=P*P}const X=ye*y+Ie*G,Te=(ye*Ie-X)/X;let Me=Math.sqrt(Math.max(0,Te));q===oe&&(Me=-Me);const H=Me*N*ue/P,re=-Me*P*ne/N,ae=Math.cos(M)*H-Math.sin(M)*re+($.x+ve.x)/2,de=Math.sin(M)*H+Math.cos(M)*re+($.y+ve.y)/2,_e=a(1,0,(ne-H)/N,(ue-re)/P),we=a((ne-H)/N,(ue-re)/P,(-ne-H)/N,(-ue-re)/P)%(Math.PI*2);U.currentPath.absellipse(ae,de,N,P,_e,_e+we,oe===0,M)}function a(U,N,P,M){const q=U*P+N*M,oe=Math.sqrt(U*U+N*N)*Math.sqrt(P*P+M*M);let $=Math.acos(Math.max(-1,Math.min(1,q/oe)));return U*M-N*P<0&&($=-$),$}function l(U){const N=m(U.getAttribute("x")||0),P=m(U.getAttribute("y")||0),M=m(U.getAttribute("rx")||U.getAttribute("ry")||0),q=m(U.getAttribute("ry")||U.getAttribute("rx")||0),oe=m(U.getAttribute("width")),$=m(U.getAttribute("height")),ve=1-.551915024494,z=new Or;return z.moveTo(N+M,P),z.lineTo(N+oe-M,P),(M!==0||q!==0)&&z.bezierCurveTo(N+oe-M*ve,P,N+oe,P+q*ve,N+oe,P+q),z.lineTo(N+oe,P+$-q),(M!==0||q!==0)&&z.bezierCurveTo(N+oe,P+$-q*ve,N+oe-M*ve,P+$,N+oe-M,P+$),z.lineTo(N+M,P+$),(M!==0||q!==0)&&z.bezierCurveTo(N+M*ve,P+$,N,P+$-q*ve,N,P+$-q),z.lineTo(N,P+q),(M!==0||q!==0)&&z.bezierCurveTo(N,P+q*ve,N+M*ve,P,N+M,P),z}function c(U){function N(oe,$,ve){const z=m($),Ue=m(ve);q===0?M.moveTo(z,Ue):M.lineTo(z,Ue),q++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,M=new Or;let q=0;return U.getAttribute("points").replace(P,N),M.currentPath.autoClose=!0,M}function d(U){function N(oe,$,ve){const z=m($),Ue=m(ve);q===0?M.moveTo(z,Ue):M.lineTo(z,Ue),q++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,M=new Or;let q=0;return U.getAttribute("points").replace(P,N),M.currentPath.autoClose=!1,M}function h(U){const N=m(U.getAttribute("cx")||0),P=m(U.getAttribute("cy")||0),M=m(U.getAttribute("r")||0),q=new so;q.absarc(N,P,M,0,Math.PI*2);const oe=new Or;return oe.subPaths.push(q),oe}function f(U){const N=m(U.getAttribute("cx")||0),P=m(U.getAttribute("cy")||0),M=m(U.getAttribute("rx")||0),q=m(U.getAttribute("ry")||0),oe=new so;oe.absellipse(N,P,M,q,0,Math.PI*2);const $=new Or;return $.subPaths.push(oe),$}function g(U){const N=m(U.getAttribute("x1")||0),P=m(U.getAttribute("y1")||0),M=m(U.getAttribute("x2")||0),q=m(U.getAttribute("y2")||0),oe=new Or;return oe.moveTo(N,P),oe.lineTo(M,q),oe.currentPath.autoClose=!1,oe}function x(U,N){N=Object.assign({},N);let P={};if(U.hasAttribute("class")){const $=U.getAttribute("class").split(/\s/).filter(Boolean).map(ve=>ve.trim());for(let ve=0;ve<$.length;ve++)P=Object.assign(P,pe["."+$[ve]])}U.hasAttribute("id")&&(P=Object.assign(P,pe["#"+U.getAttribute("id")]));function M($,ve,z){z===void 0&&(z=function(ne){return ne.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),ne}),U.hasAttribute($)&&(N[ve]=z(U.getAttribute($))),P[$]&&(N[ve]=z(P[$])),U.style&&U.style[$]!==""&&(N[ve]=z(U.style[$]))}function q($){return Math.max(0,Math.min(1,m($)))}function oe($){return Math.max(0,m($))}return M("fill","fill"),M("fill-opacity","fillOpacity",q),M("fill-rule","fillRule"),M("opacity","opacity",q),M("stroke","stroke"),M("stroke-opacity","strokeOpacity",q),M("stroke-width","strokeWidth",oe),M("stroke-linejoin","strokeLineJoin"),M("stroke-linecap","strokeLineCap"),M("stroke-miterlimit","strokeMiterLimit",oe),M("visibility","visibility"),N}function _(U,N){return U-(N-U)}function p(U,N,P){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);const M={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},q=0,oe=1,$=2,ve=3;let z=q,Ue=!0,ne="",ue="";const ye=[];function Ie(X,Te,Me){const H=new SyntaxError('Unexpected character "'+X+'" at index '+Te+".");throw H.partial=Me,H}function G(){ne!==""&&(ue===""?ye.push(Number(ne)):ye.push(Number(ne)*Math.pow(10,Number(ue)))),ne="",ue=""}let y;const E=U.length;for(let X=0;X<E;X++){if(y=U[X],Array.isArray(N)&&N.includes(ye.length%P)&&M.FLAGS.test(y)){z=oe,ne=y,G();continue}if(z===q){if(M.WHITESPACE.test(y))continue;if(M.DIGIT.test(y)||M.SIGN.test(y)){z=oe,ne=y;continue}if(M.POINT.test(y)){z=$,ne=y;continue}M.COMMA.test(y)&&(Ue&&Ie(y,X,ye),Ue=!0)}if(z===oe){if(M.DIGIT.test(y)){ne+=y;continue}if(M.POINT.test(y)){ne+=y,z=$;continue}if(M.EXP.test(y)){z=ve;continue}M.SIGN.test(y)&&ne.length===1&&M.SIGN.test(ne[0])&&Ie(y,X,ye)}if(z===$){if(M.DIGIT.test(y)){ne+=y;continue}if(M.EXP.test(y)){z=ve;continue}M.POINT.test(y)&&ne[ne.length-1]==="."&&Ie(y,X,ye)}if(z===ve){if(M.DIGIT.test(y)){ue+=y;continue}if(M.SIGN.test(y)){if(ue===""){ue+=y;continue}ue.length===1&&M.SIGN.test(ue)&&Ie(y,X,ye)}}M.WHITESPACE.test(y)?(G(),z=q,Ue=!1):M.COMMA.test(y)?(G(),z=q,Ue=!0):M.SIGN.test(y)?(G(),z=oe,ne=y):M.POINT.test(y)?(G(),z=$,ne=y):Ie(y,X,ye)}return G(),ye}const u=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function m(U){let N="px";if(typeof U=="string"||U instanceof String)for(let M=0,q=u.length;M<q;M++){const oe=u[M];if(U.endsWith(oe)){N=oe,U=U.substring(0,U.length-oe.length);break}}let P;return N==="px"&&n.defaultUnit!=="px"?P=v.in[n.defaultUnit]/n.defaultDPI:(P=v[N][n.defaultUnit],P<0&&(P=v[N].in*n.defaultDPI)),P*parseFloat(U)}function S(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;const N=C(U);return k.length>0&&N.premultiply(k[k.length-1]),ge.copy(N),k.push(N),N}function C(U){const N=new Ke,P=Q;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){const M=m(U.getAttribute("x")),q=m(U.getAttribute("y"));N.translate(M,q)}if(U.hasAttribute("transform")){const M=U.getAttribute("transform").split(")");for(let q=M.length-1;q>=0;q--){const oe=M[q].trim();if(oe==="")continue;const $=oe.indexOf("("),ve=oe.length;if($>0&&$<ve){const z=oe.slice(0,$),Ue=p(oe.slice($+1));switch(P.identity(),z){case"translate":if(Ue.length>=1){const ne=Ue[0];let ue=0;Ue.length>=2&&(ue=Ue[1]),P.translate(ne,ue)}break;case"rotate":if(Ue.length>=1){let ne=0,ue=0,ye=0;ne=Ue[0]*Math.PI/180,Ue.length>=3&&(ue=Ue[1],ye=Ue[2]),J.makeTranslation(-ue,-ye),ie.makeRotation(ne),D.multiplyMatrices(ie,J),J.makeTranslation(ue,ye),P.multiplyMatrices(J,D)}break;case"scale":if(Ue.length>=1){const ne=Ue[0];let ue=ne;Ue.length>=2&&(ue=Ue[1]),P.scale(ne,ue)}break;case"skewX":Ue.length===1&&P.set(1,Math.tan(Ue[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Ue.length===1&&P.set(1,0,0,Math.tan(Ue[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Ue.length===6&&P.set(Ue[0],Ue[2],Ue[4],Ue[1],Ue[3],Ue[5],0,0,1);break}}N.premultiply(P)}}return N}function A(U,N){function P($){K.set($.x,$.y,1).applyMatrix3(N),$.set(K.x,K.y)}function M($){const ve=$.xRadius,z=$.yRadius,Ue=Math.cos($.aRotation),ne=Math.sin($.aRotation),ue=new j(ve*Ue,ve*ne,0),ye=new j(-z*ne,z*Ue,0),Ie=ue.applyMatrix3(N),G=ye.applyMatrix3(N),y=Q.set(Ie.x,G.x,0,Ie.y,G.y,0,0,0,1),E=J.copy(y).invert(),Me=ie.copy(E).transpose().multiply(E).elements,H=V(Me[0],Me[1],Me[4]),re=Math.sqrt(H.rt1),ae=Math.sqrt(H.rt2);if($.xRadius=1/re,$.yRadius=1/ae,$.aRotation=Math.atan2(H.sn,H.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const _e=J.set(re,0,0,0,ae,0,0,0,1),we=ie.set(H.cs,H.sn,0,-H.sn,H.cs,0,0,0,1),ee=_e.multiply(we).multiply(y),ke=Be=>{const{x:Ne,y:Le}=new j(Math.cos(Be),Math.sin(Be),0).applyMatrix3(ee);return Math.atan2(Le,Ne)};$.aStartAngle=ke($.aStartAngle),$.aEndAngle=ke($.aEndAngle),b(N)&&($.aClockwise=!$.aClockwise)}}function q($){const ve=w(N),z=R(N);$.xRadius*=ve,$.yRadius*=z;const Ue=ve>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);$.aRotation+=Ue,b(N)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const oe=U.subPaths;for(let $=0,ve=oe.length;$<ve;$++){const Ue=oe[$].curves;for(let ne=0;ne<Ue.length;ne++){const ue=Ue[ne];ue.isLineCurve?(P(ue.v1),P(ue.v2)):ue.isCubicBezierCurve?(P(ue.v0),P(ue.v1),P(ue.v2),P(ue.v3)):ue.isQuadraticBezierCurve?(P(ue.v0),P(ue.v1),P(ue.v2)):ue.isEllipseCurve&&(Y.set(ue.aX,ue.aY),P(Y),ue.aX=Y.x,ue.aY=Y.y,B(N)?M(ue):q(ue))}}}function b(U){const N=U.elements;return N[0]*N[4]-N[1]*N[3]<0}function B(U){const N=U.elements,P=N[0]*N[3]+N[1]*N[4];if(P===0)return!1;const M=w(U),q=R(U);return Math.abs(P/(M*q))>Number.EPSILON}function w(U){const N=U.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function R(U){const N=U.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function V(U,N,P){let M,q,oe,$,ve;const z=U+P,Ue=U-P,ne=Math.sqrt(Ue*Ue+4*N*N);return z>0?(M=.5*(z+ne),ve=1/M,q=U*ve*P-N*ve*N):z<0?q=.5*(z-ne):(M=.5*ne,q=-.5*ne),Ue>0?oe=Ue+ne:oe=Ue-ne,Math.abs(oe)>2*Math.abs(N)?(ve=-2*N/oe,$=1/Math.sqrt(1+ve*ve),oe=ve*$):Math.abs(N)===0?(oe=1,$=0):(ve=-.5*oe/N,oe=1/Math.sqrt(1+ve*ve),$=ve*oe),Ue>0&&(ve=oe,oe=-$,$=ve),{rt1:M,rt2:q,cs:oe,sn:$}}const W=[],pe={},k=[],Q=new Ke,J=new Ke,ie=new Ke,D=new Ke,Y=new Re,K=new j,ge=new Ke,xe=new DOMParser().parseFromString(e,"image/svg+xml");return i(xe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:xe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(_,p,u,v){const m=_.x,S=p.x,C=u.x,A=v.x,b=_.y,B=p.y,w=u.y,R=v.y,V=(A-C)*(b-w)-(R-w)*(m-C),W=(S-m)*(b-w)-(B-b)*(m-C),pe=(R-w)*(S-m)-(A-C)*(B-b),k=V/pe,Q=W/pe;if(pe===0&&V!==0||k<=0||k>=1||Q<0||Q>1)return null;if(V===0&&pe===0){for(let J=0;J<2;J++)if(o(J===0?u:v,_,p),r.loc==i.ORIGIN){const ie=J===0?u:v;return{x:ie.x,y:ie.y,t:r.t}}else if(r.loc==i.BETWEEN){const ie=+(m+r.t*(S-m)).toPrecision(10),D=+(b+r.t*(B-b)).toPrecision(10);return{x:ie,y:D,t:r.t}}return null}else{for(let D=0;D<2;D++)if(o(D===0?u:v,_,p),r.loc==i.ORIGIN){const Y=D===0?u:v;return{x:Y.x,y:Y.y,t:r.t}}const J=+(m+k*(S-m)).toPrecision(10),ie=+(b+k*(B-b)).toPrecision(10);return{x:J,y:ie,t:k}}}function o(_,p,u){const v=u.x-p.x,m=u.y-p.y,S=_.x-p.x,C=_.y-p.y,A=v*C-S*m;if(_.x===p.x&&_.y===p.y){r.loc=i.ORIGIN,r.t=0;return}if(_.x===u.x&&_.y===u.y){r.loc=i.DESTINATION,r.t=1;return}if(A<-Number.EPSILON){r.loc=i.LEFT;return}if(A>Number.EPSILON){r.loc=i.RIGHT;return}if(v*S<0||m*C<0){r.loc=i.BEHIND;return}if(Math.sqrt(v*v+m*m)<Math.sqrt(S*S+C*C)){r.loc=i.BEYOND;return}let b;v!==0?b=S/v:b=C/m,r.loc=i.BETWEEN,r.t=b}function a(_,p){const u=[],v=[];for(let m=1;m<_.length;m++){const S=_[m-1],C=_[m];for(let A=1;A<p.length;A++){const b=p[A-1],B=p[A],w=s(S,C,b,B);w!==null&&u.find(R=>R.t<=w.t+Number.EPSILON&&R.t>=w.t-Number.EPSILON)===void 0&&(u.push(w),v.push(new Re(w.x,w.y)))}}return v}function l(_,p,u){const v=new Re;p.getCenter(v);const m=[];return u.forEach(S=>{S.boundingBox.containsPoint(v)&&a(_,S.points).forEach(A=>{m.push({identifier:S.identifier,isCW:S.isCW,point:A})})}),m.sort((S,C)=>S.point.x-C.point.x),m}function c(_,p,u,v,m){(m==null||m==="")&&(m="nonzero");const S=new Re;_.boundingBox.getCenter(S);const C=[new Re(u,S.y),new Re(v,S.y)],A=l(C,_.boundingBox,p);A.sort((W,pe)=>W.point.x-pe.point.x);const b=[],B=[];A.forEach(W=>{W.identifier===_.identifier?b.push(W):B.push(W)});const w=b[0].point.x,R=[];let V=0;for(;V<B.length&&B[V].point.x<w;)R.length>0&&R[R.length-1]===B[V].identifier?R.pop():R.push(B[V].identifier),V++;if(R.push(_.identifier),m==="evenodd"){const W=R.length%2===0,pe=R[R.length-2];return{identifier:_.identifier,isHole:W,for:pe}}else if(m==="nonzero"){let W=!0,pe=null,k=null;for(let Q=0;Q<R.length;Q++){const J=R[Q];W?(k=p[J].isCW,W=!1,pe=J):k!==p[J].isCW&&(k=p[J].isCW,W=!0)}return{identifier:_.identifier,isHole:W,for:pe}}else console.warn('fill-rule: "'+m+'" is currently not implemented.')}let d=999999999,h=-999999999,f=e.subPaths.map(_=>{const p=_.getPoints();let u=-999999999,v=999999999,m=-999999999,S=999999999;for(let C=0;C<p.length;C++){const A=p[C];A.y>u&&(u=A.y),A.y<v&&(v=A.y),A.x>m&&(m=A.x),A.x<S&&(S=A.x)}return h<=m&&(h=m+1),d>=S&&(d=S-1),{curves:_.curves,points:p,isCW:Su.isClockWise(p),identifier:-1,boundingBox:new vR(new Re(S,v),new Re(m,u))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const g=f.map(_=>c(_,f,d,h,e.userData?e.userData.style.fillRule:void 0)),x=[];return f.forEach(_=>{if(!g[_.identifier].isHole){const u=new ac;u.curves=_.curves,g.filter(m=>m.isHole&&m.for===_.identifier).forEach(m=>{const S=f[m.identifier],C=new so;C.curves=S.curves,u.holes.push(C)}),x.push(u)}}),x}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Vc.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new kn;return l.setAttribute("position",new Jt(s,3)),l.setAttribute("normal",new Jt(o,3)),l.setAttribute("uv",new Jt(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const c=new Re,d=new Re,h=new Re,f=new Re,g=new Re,x=new Re,_=new Re,p=new Re,u=new Re,v=new Re,m=new Re,S=new Re,C=new Re,A=new Re,b=new Re,B=new Re,w=new Re;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=Ue(e);const R=e.length;if(R<2)return 0;const V=e[0].equals(e[R-1]);let W,pe=e[0],k;const Q=n.strokeWidth/2,J=1/(R-1);let ie=0,D,Y,K,ge,xe=!1,le=0,U=l*3,N=l*2;P(e[0],e[1],c).multiplyScalar(Q),p.copy(e[0]).sub(c),u.copy(e[0]).add(c),v.copy(p),m.copy(u);for(let ne=1;ne<R;ne++){W=e[ne],ne===R-1?V?k=e[1]:k=void 0:k=e[ne+1];const ue=c;if(P(pe,W,ue),h.copy(ue).multiplyScalar(Q),S.copy(W).sub(h),C.copy(W).add(h),D=ie+J,Y=!1,k!==void 0){P(W,k,d),h.copy(d).multiplyScalar(Q),A.copy(W).sub(h),b.copy(W).add(h),K=!0,h.subVectors(k,pe),ue.dot(h)<0&&(K=!1),ne===1&&(xe=K),h.subVectors(k,W),h.normalize();const ye=Math.abs(ue.dot(h));if(ye>Number.EPSILON){const Ie=Q/ye;h.multiplyScalar(-Ie),f.subVectors(W,pe),g.copy(f).setLength(Ie).add(h),B.copy(g).negate();const G=g.length(),y=f.length();f.divideScalar(y),x.subVectors(k,W);const E=x.length();switch(x.divideScalar(E),f.dot(B)<y&&x.dot(B)<E&&(Y=!0),w.copy(g).add(W),B.add(W),ge=!1,Y?K?(b.copy(B),C.copy(B)):(A.copy(B),S.copy(B)):oe(),n.strokeLineJoin){case"bevel":$(K,Y,D);break;case"round":ve(K,Y),K?q(W,S,A,D,0):q(W,b,C,D,1);break;case"miter":case"miter-clip":default:const X=Q*n.strokeMiterLimit/G;if(X<1)if(n.strokeLineJoin!=="miter-clip"){$(K,Y,D);break}else ve(K,Y),K?(x.subVectors(w,S).multiplyScalar(X).add(S),_.subVectors(w,A).multiplyScalar(X).add(A),M(S,D,0),M(x,D,0),M(W,D,.5),M(W,D,.5),M(x,D,0),M(_,D,0),M(W,D,.5),M(_,D,0),M(A,D,0)):(x.subVectors(w,C).multiplyScalar(X).add(C),_.subVectors(w,b).multiplyScalar(X).add(b),M(C,D,1),M(x,D,1),M(W,D,.5),M(W,D,.5),M(x,D,1),M(_,D,1),M(W,D,.5),M(_,D,1),M(b,D,1));else Y?(K?(M(u,ie,1),M(p,ie,0),M(w,D,0),M(u,ie,1),M(w,D,0),M(B,D,1)):(M(u,ie,1),M(p,ie,0),M(w,D,1),M(p,ie,0),M(B,D,0),M(w,D,1)),K?A.copy(w):b.copy(w)):K?(M(S,D,0),M(w,D,0),M(W,D,.5),M(W,D,.5),M(w,D,0),M(A,D,0)):(M(C,D,1),M(w,D,1),M(W,D,.5),M(W,D,.5),M(w,D,1),M(b,D,1)),ge=!0;break}}else oe()}else oe();!V&&ne===R-1&&z(e[0],v,m,K,!0,ie),ie=D,pe=W,p.copy(A),u.copy(b)}if(!V)z(W,S,C,K,!1,D);else if(Y&&s){let ne=w,ue=B;xe!==K&&(ne=B,ue=w),K?(ge||xe)&&(ue.toArray(s,0*3),ue.toArray(s,3*3),ge&&ne.toArray(s,1*3)):(ge||!xe)&&(ue.toArray(s,1*3),ue.toArray(s,3*3),ge&&ne.toArray(s,0*3))}return le;function P(ne,ue,ye){return ye.subVectors(ue,ne),ye.set(-ye.y,ye.x).normalize()}function M(ne,ue,ye){s&&(s[U]=ne.x,s[U+1]=ne.y,s[U+2]=0,o&&(o[U]=0,o[U+1]=0,o[U+2]=1),U+=3,a&&(a[N]=ue,a[N+1]=ye,N+=2)),le+=3}function q(ne,ue,ye,Ie,G){c.copy(ue).sub(ne).normalize(),d.copy(ye).sub(ne).normalize();let y=Math.PI;const E=c.dot(d);Math.abs(E)<1&&(y=Math.abs(Math.acos(E))),y/=i,h.copy(ue);for(let X=0,Te=i-1;X<Te;X++)f.copy(h).rotateAround(ne,y),M(h,Ie,G),M(f,Ie,G),M(ne,Ie,.5),h.copy(f);M(f,Ie,G),M(ye,Ie,G),M(ne,Ie,.5)}function oe(){M(u,ie,1),M(p,ie,0),M(S,D,0),M(u,ie,1),M(S,D,1),M(C,D,0)}function $(ne,ue,ye){ue?ne?(M(u,ie,1),M(p,ie,0),M(S,D,0),M(u,ie,1),M(S,D,0),M(B,D,1),M(S,ye,0),M(A,ye,0),M(B,ye,.5)):(M(u,ie,1),M(p,ie,0),M(C,D,1),M(p,ie,0),M(B,D,0),M(C,D,1),M(C,ye,1),M(B,ye,0),M(b,ye,1)):ne?(M(S,ye,0),M(A,ye,0),M(W,ye,.5)):(M(C,ye,1),M(b,ye,0),M(W,ye,.5))}function ve(ne,ue){ue&&(ne?(M(u,ie,1),M(p,ie,0),M(S,D,0),M(u,ie,1),M(S,D,0),M(B,D,1),M(S,ie,0),M(W,D,.5),M(B,D,1),M(W,D,.5),M(A,ie,0),M(B,D,1)):(M(u,ie,1),M(p,ie,0),M(C,D,1),M(p,ie,0),M(B,D,0),M(C,D,1),M(C,ie,1),M(B,D,0),M(W,D,.5),M(W,D,.5),M(B,D,0),M(b,ie,1)))}function z(ne,ue,ye,Ie,G,y){switch(n.strokeLineCap){case"round":G?q(ne,ye,ue,y,.5):q(ne,ue,ye,y,.5);break;case"square":if(G)c.subVectors(ue,ne),d.set(c.y,-c.x),h.addVectors(c,d).add(ne),f.subVectors(d,c).add(ne),Ie?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(ye,ne),d.set(c.y,-c.x),h.addVectors(c,d).add(ne),f.subVectors(d,c).add(ne);const E=s.length;Ie?(h.toArray(s,E-1*3),f.toArray(s,E-2*3),f.toArray(s,E-4*3)):(f.toArray(s,E-2*3),h.toArray(s,E-1*3),f.toArray(s,E-4*3))}break}}function Ue(ne){let ue=!1;for(let Ie=1,G=ne.length-1;Ie<G;Ie++)if(ne[Ie].distanceTo(ne[Ie+1])<r){ue=!0;break}if(!ue)return ne;const ye=[];ye.push(ne[0]);for(let Ie=1,G=ne.length-1;Ie<G;Ie++)ne[Ie].distanceTo(ne[Ie+1])>=r&&ye.push(ne[Ie]);return ye.push(ne[ne.length-1]),ye}}}const Gl=100,Fd=3,qo=2.8,Ev=.3,Mv=8,TR=1500,Wl=18,Bd=.13,Ds={water:{r:17,g:22,b:41},land:{r:54,g:63,b:84}},Bt="#9333ea";function AR({cards:t,selectedCards:e,autoRotate:n,onMarkerClick:i,onMarkerVisibilityChange:r,onInteraction:s,focusCardId:o,onFocusLost:a,visibleCardIds:l,onCloseCard:c,onFocusCard:d}){const h=me.useRef(null),f=me.useRef(null),g=me.useRef(null),x=me.useRef(null),_=me.useRef(null),p=me.useRef(null),u=me.useRef(null),v=me.useRef(null),m=me.useRef(null),S=me.useRef([]),C=me.useRef({}),A=me.useRef({});me.useRef(null);const b=me.useRef(0),B=me.useRef({}),w=me.useRef({}),R=me.useRef({}),V=me.useRef(null),W=me.useRef(e),pe=me.useRef(r),k=me.useRef(s),Q=me.useRef(c),J=me.useRef(d),ie=me.useRef(!1),D=me.useRef(o),[Y,K]=me.useState(!1);me.useRef(null);const ge=me.useRef(null),xe=me.useRef(null),le=me.useRef(l),U=me.useRef({}),N=me.useRef(new j),P=me.useRef(new j);me.useEffect(()=>{W.current=e},[e]),me.useEffect(()=>{D.current=o},[o]),me.useEffect(()=>{pe.current=r},[r]),me.useEffect(()=>{k.current=s},[s]),me.useEffect(()=>{le.current=l},[l]),me.useEffect(()=>{Q.current=c},[c]),me.useEffect(()=>{J.current=d},[d]);const M=me.useCallback(()=>{const re=document.createElement("canvas");re.width=4096,re.height=4096/2;const ae=re.getContext("2d");ae.fillStyle="#000003",ae.fillRect(0,0,re.width,re.height);for(let de=0;de<2500;de++){const _e=Math.random()*re.width,we=Math.random()*re.height,ee=Math.random()*1.2+.3,ke=Math.random();let Be,Ne,Le;const Ce=Math.random();Ce<.7?Be=Ne=Le=180+Math.random()*50:Ce<.85?(Be=160+Math.random()*40,Ne=180+Math.random()*40,Le=220):(Be=220,Ne=210+Math.random()*20,Le=160+Math.random()*40),ae.beginPath(),ae.arc(_e,we,ee,0,Math.PI*2),ae.fillStyle=`rgba(${Be}, ${Ne}, ${Le}, ${(.2+ke*.4)*.6})`,ae.fill()}return new Ns(re)},[]),q=me.useCallback(H=>{const ae=document.createElement("canvas");ae.width=2048,ae.height=2048/2;const de=ae.getContext("2d",{willReadFrequently:!0});de.drawImage(H,0,0,ae.width,ae.height);const we=de.getImageData(0,0,ae.width,ae.height).data,ee=document.createElement("canvas");ee.width=2048,ee.height=2048/2;const ke=ee.getContext("2d"),Be=ke.createImageData(2048,2048/2),Ne=Be.data,Le=document.createElement("canvas");Le.width=2048,Le.height=2048/2;const Ce=Le.getContext("2d"),L=Ce.createImageData(2048,2048/2),Se=L.data;for(let ce=0;ce<we.length;ce+=4){const Ee=we[ce]>100;Ne[ce]=Ne[ce+1]=Ne[ce+2]=Ee?0:255,Ne[ce+3]=255,Ee?(Se[ce]=Ds.water.r,Se[ce+1]=Ds.water.g,Se[ce+2]=Ds.water.b):(Se[ce]=Ds.land.r,Se[ce+1]=Ds.land.g,Se[ce+2]=Ds.land.b),Se[ce+3]=255}ke.putImageData(Be,0,0),Ce.putImageData(L,0,0);const Oe=document.createElement("canvas");Oe.width=2048,Oe.height=2048/2;const be=Oe.getContext("2d");return be.filter="blur(1px)",be.drawImage(ee,0,0),{colorTexture:new Ns(Le),displacementTexture:new Ns(Oe)}},[]),oe=me.useCallback((H=Bt)=>{const re=document.createElement("canvas");re.width=128,re.height=128;const ae=re.getContext("2d");ae.fillStyle=H,ae.beginPath();for(let de=0;de<10;de++){const _e=de%2===0?60:25,we=de*Math.PI/5-Math.PI/2,ee=64+Math.cos(we)*_e,ke=64+Math.sin(we)*_e;de===0?ae.moveTo(ee,ke):ae.lineTo(ee,ke)}return ae.closePath(),ae.fill(),new Ns(re)},[]),$=me.useCallback((H=Bt)=>new Promise(re=>{if(H===Bt){const ae=new Image;ae.onload=()=>{const de=document.createElement("canvas");de.width=128,de.height=128,de.getContext("2d").drawImage(ae,0,0,128,128),re(new Ns(de))},ae.onerror=()=>re(oe(H)),ae.src="/anking-globe/star.svg"}else re(oe(H))}),[oe]),ve=me.useCallback((H=Bt)=>{const re=document.createElement("canvas");re.width=128,re.height=128;const ae=re.getContext("2d");let de=147,_e=51,we=234;if(H.startsWith("#")){const ke=H.slice(1);de=parseInt(ke.slice(0,2),16),_e=parseInt(ke.slice(2,4),16),we=parseInt(ke.slice(4,6),16)}const ee=ae.createRadialGradient(64,64,0,64,64,64);return ee.addColorStop(0,`rgba(${de}, ${_e}, ${we}, 0.5)`),ee.addColorStop(.3,`rgba(${de}, ${_e}, ${we}, 0.2)`),ee.addColorStop(.6,`rgba(${de}, ${_e}, ${we}, 0.05)`),ee.addColorStop(1,`rgba(${de}, ${_e}, ${we}, 0)`),ae.fillStyle=ee,ae.fillRect(0,0,128,128),new Ns(re)},[]),z=me.useCallback(H=>{let re=147,ae=51,de=234;if(H.startsWith("#")){const _e=H.slice(1);re=parseInt(_e.slice(0,2),16),ae=parseInt(_e.slice(2,4),16),de=parseInt(_e.slice(4,6),16)}return{r:re,g:ae,b:de}},[]),Ue=me.useCallback(()=>{const ae=new Vc().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z"/></svg>'),_e=Vc.createShapes(ae.paths[0])[0],we=11.04/2,ee=11.53/2,ke=Math.max(11.04,11.53),Be=qo/ke,Le=_e.getPoints(32).map(Ee=>({x:(Ee.x-we)*Be,y:-(Ee.y-ee)*Be})),Ce=20,L=Le.length,Se=[],Oe=[],be=[];for(let Ee=0;Ee<=Ce;Ee++){const Ae=Ee/Ce,O=Ae*Mv,fe=1+Ae*1.2;for(let De=0;De<L;De++){const ze=Le[De];Se.push(ze.x*fe,ze.y*fe,O),Oe.push(De/L,Ae)}Se.push(0,0,O),Oe.push(.5,Ae)}const ce=L+1;for(let Ee=0;Ee<Ce;Ee++){const Ae=Ee*ce,O=(Ee+1)*ce;for(let fe=0;fe<L;fe++){const De=Ae+fe,ze=Ae+(fe+1)%L,He=O+fe,je=O+(fe+1)%L;be.push(De,ze,He),be.push(ze,je,He)}}const F=new kn;return F.setAttribute("position",new Jt(Se,3)),F.setAttribute("uv",new Jt(Oe,2)),F.setIndex(be),F.computeVertexNormals(),F},[]),ne=me.useCallback((H=Bt)=>{const{r:re,g:ae,b:de}=z(H),_e=Ue(),we=new ki({uniforms:{color:{value:new it(re/255,ae/255,de/255)},opacity:{value:.35},rayLength:{value:Mv}},vertexShader:"varying float vDistance; uniform float rayLength; void main() { vDistance = position.z / rayLength; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float vDistance; void main() { float fade = 1.0 - vDistance; fade = fade * fade * fade; float alpha = fade * opacity; gl_FragColor = vec4(color, alpha); }",transparent:!0,side:In,depthWrite:!1,blending:la}),ee=new un(_e,we);return ee.position.z=.3,ee.userData={type:"beam"},ee},[z,Ue]),ue=me.useCallback((H,re,ae,de=[])=>{const _e=new Ys,we=new Ys;let ee=0;for(let Ae=0;Ae<H.id.length;Ae++)ee=(ee<<5)-ee+H.id.charCodeAt(Ae),ee|=0;const ke=Math.abs(ee)%1e3/1e3*Math.PI*2;we.rotation.z=ke,we.userData={type:"starContainer",baseRotation:ke};const Be=new un(new Da(qo*1.5,qo*1.5),new ua({map:ae,transparent:!0,opacity:.3,side:In,depthWrite:!1,blending:la}));Be.position.z=.1,Be.userData={type:"glow"};const Ne=new un(new Da(qo,qo),new ua({map:re,transparent:!0,opacity:1,side:In,depthWrite:!1}));Ne.position.z=.2,Ne.userData={type:"star"},we.add(Be),we.add(Ne),_e.add(we);const Le=H.starColor||Bt,Ce=ne(Le);_e.add(Ce),Ce.rotation.z=ke,_e.userData.beam=Ce,_e.userData.starContainer=we,_e.userData.baseRotation=ke,U.current[H.id]=1;let L=H.lat,Se=H.lng;const Oe=5,be=1.5;let ce=0;const F=8;for(;ce<F;){const Ae=(90-L)*(Math.PI/180),O=(Se+180)*(Math.PI/180),fe=Gl+Fd+Ev,De=new j(-fe*Math.sin(Ae)*Math.cos(O),fe*Math.cos(Ae),fe*Math.sin(Ae)*Math.sin(O));let ze=!1;for(const qe of de)if(De.distanceTo(qe.position)<Oe){ze=!0;break}if(!ze){_e.position.copy(De);break}const He=ce*Math.PI/4,je=be*(1+ce*.3);L=H.lat+Math.sin(He)*je,Se=H.lng+Math.cos(He)*je,ce++}if(ce>=F){const Ae=(90-H.lat)*(Math.PI/180),O=(H.lng+180)*(Math.PI/180),fe=Gl+Fd+Ev;_e.position.set(-fe*Math.sin(Ae)*Math.cos(O),fe*Math.cos(Ae),fe*Math.sin(Ae)*Math.sin(O))}const Ee=_e.position.clone().normalize();return _e.lookAt(_e.position.clone().add(Ee)),_e.userData.card=H,w.current[H.id]=1,_e},[ne]),ye=me.useCallback((H,re,ae)=>{var Ne;N.current.subVectors(re,H).normalize(),P.current.copy(H).normalize();const de=N.current.dot(P.current),we=((Ne=B.current[ae])==null?void 0:Ne.visible)??!1?de>-.15:de>0;if(!we)return{visible:!1,targetOpacity:0,scale:0};let ee=1;de<.2&&(ee=Math.max(0,(de+.15)/.35));const ke=re.distanceTo(H),Be=Math.max(.5,Math.min(.85,220/ke));return{visible:we,targetOpacity:ee,scale:Be}},[]),Ie=me.useCallback((H,re)=>{const ae=g.current,de=h.current,_e=S.current;if(!ae||!de||_e.length===0)return null;const we=de.getBoundingClientRect(),ee=H-we.left,ke=re-we.top;let Be=null,Ne=25;const Le=new j;for(const Ce of _e){if(!Ce.visible)continue;const L=Ce.userData.card;if(!L||(w.current[L.id]??0)<.3)continue;Le.copy(Ce.position).project(ae);const Oe=(Le.x*.5+.5)*we.width,be=(-Le.y*.5+.5)*we.height,ce=ee-Oe,F=ke-be,Ee=Math.sqrt(ce*ce+F*F);Ee<Ne&&(Ne=Ee,Be=L)}return Be},[]),G=me.useCallback(H=>{const re=document.createElement("div");re.className="card-3d-wrapper",re.dataset.cardId=H.id;const ae=H.image||`https://ui-avatars.com/api/?name=${encodeURIComponent(H.name)}&background=9333ea&color=fff`,de=[H.title,H.university].filter(Boolean).join(" · ");return re.innerHTML=`
      <div class="card-3d">
        <div class="card-3d-inner">
          <div class="card-3d-image">
            <img src="${ae}" alt="${H.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(H.name)}&background=9333ea&color=fff'"/>
          </div>
          <div class="card-3d-content">
            <p class="card-3d-name">${H.name}</p>
            <p class="card-3d-info">${de}</p>
            <p class="card-3d-location">📍 ${H.location||""}</p>
          </div>
          <button class="card-3d-close" data-card-id="${H.id}">✕</button>
        </div>
      </div>
    `,re.querySelector(".card-3d-close").addEventListener("click",_e=>{_e.stopPropagation(),Q.current&&Q.current(H.id)}),re.addEventListener("click",_e=>{!_e.target.closest(".card-3d-close")&&J.current&&J.current(H.id)}),re},[]),y=me.useCallback((H=Bt)=>{const{r:re,g:ae,b:de}=z(H),_e=new kn;_e.setAttribute("position",new Jn(new Float32Array(6),3));const we=new qy({color:new it(re/255,ae/255,de/255),transparent:!0,opacity:.5});return new NC(_e,we)},[z]),E=me.useCallback((H,re,ae)=>{const de=H.clone().normalize(),_e=new j(0,1,0),we=new j().crossVectors(_e,de).normalize();we.length()<.1&&we.set(1,0,0);const ee=new j().crossVectors(de,we).normalize();let ke=0,Be=Wl,Ne=Wl*.5;if(ae>1){const Le=Math.PI*.6,Ce=Le/(ae-1),L=-Le/2+Ce*re;ke=Math.sin(L)*Wl,Be=Math.cos(L)*Wl+5}return H.clone().add(de.clone().multiplyScalar(Ne)).add(we.clone().multiplyScalar(ke)).add(ee.clone().multiplyScalar(Be))},[]);me.useEffect(()=>{if(!h.current||ie.current)return;ie.current=!0;const H=h.current,re=new tv;re.background=new it(3),f.current=re;const ae=new tv;u.current=ae;const de=new Pn(45,H.clientWidth/H.clientHeight,1,3e3);de.position.z=320,g.current=de;const _e=new $y({antialias:!0,powerPreference:"high-performance"});_e.setSize(H.clientWidth,H.clientHeight),_e.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.appendChild(_e.domElement),_.current=_e;const we=new MR;we.setSize(H.clientWidth,H.clientHeight),we.domElement.style.position="absolute",we.domElement.style.top="0",we.domElement.style.left="0",we.domElement.style.pointerEvents="none",H.appendChild(we.domElement),p.current=we;const ee=new yR(de,_e.domElement);ee.enableDamping=!0,ee.dampingFactor=.05,ee.minDistance=150,ee.maxDistance=600,ee.enablePan=!1,ee.autoRotateSpeed=.5,x.current=ee,ee.addEventListener("start",()=>{k.current&&k.current()});const ke=new un(new fa(TR,64,32),new ua({map:M(),side:Kt,transparent:!0,opacity:.7}));re.add(ke),v.current=ke;const Be=new un(new fa(Gl,200,100),new uv({color:1119785}));re.add(Be);const Ne=new Image;Ne.crossOrigin="anonymous",Ne.onload=()=>{const{colorTexture:be,displacementTexture:ce}=q(Ne);Be.material.dispose(),Be.material=new uv({map:be,displacementMap:ce,displacementScale:Fd,roughness:.85,metalness:.05})},Ne.src="/anking-globe/earth_specular.png",re.add(new un(new fa(Gl+18,32,32),new ki({vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }",blending:la,side:Kt,transparent:!0}))),re.add(new gR(10053324,.25));const Le=new pv(16772829,1);Le.position.set(300,100,200),re.add(Le),m.current=Le,re.add(new pv(9647082,.2).translateX(-200).translateY(-100).translateZ(-200)),V.current=ve(Bt),$(Bt).then(be=>{R.current[Bt]=be});const Ce=()=>{de.aspect=H.clientWidth/H.clientHeight,de.updateProjectionMatrix(),_e.setSize(H.clientWidth,H.clientHeight),we.setSize(H.clientWidth,H.clientHeight)};window.addEventListener("resize",Ce);const L=new j;let Se;const Oe=be=>{var De;if(Se=requestAnimationFrame(Oe),ee.update(),b.current++,v.current&&(v.current.rotation.y=-de.rotation.y*.1,v.current.rotation.x=-de.rotation.x*.05),m.current){const ze=be*1e-4;m.current.position.set(Math.cos(ze)*400,Math.sin(ze*.3)*100+50,Math.sin(ze)*400)}const ce=S.current,F=W.current,Ee={},Ae=de.position,O=H.clientWidth,fe=H.clientHeight;for(let ze=0;ze<ce.length;ze++){const He=ce[ze],je=He.userData.card;if(!je)continue;const qe=le.current,lt=qe===null||qe.has(je.id),{visible:bt,targetOpacity:Gi,scale:hi}=ye(He.position,Ae,je.id);B.current[je.id]={visible:bt};const ds=lt?Gi:0,Io=w.current[je.id]??1,an=Io+(ds-Io)*.1;w.current[je.id]=an,He.visible=an>.01;const Lo=F==null?void 0:F.includes(je.id),No=U.current[je.id]??1,Tu=Lo?0:1;U.current[je.id]=No+(Tu-No)*.08;const hs=He.userData.starContainer,fs=He.userData.beam,I=He.userData.baseRotation||0;if(He.userData.currentRotationOffset===void 0&&(He.userData.currentRotationOffset=0),Lo){He.scale.setScalar(.7*hi),He.userData.currentRotationOffset+=.02;const Z=I+He.userData.currentRotationOffset;hs&&(hs.rotation.z=Z),fs&&(fs.rotation.z=Z),He.traverse(te=>{var he,se,Ve;((he=te.userData)==null?void 0:he.type)==="star"?te.material.opacity=an:((se=te.userData)==null?void 0:se.type)==="glow"?(te.material.opacity=.6*an,te.scale.setScalar(1.8)):((Ve=te.userData)==null?void 0:Ve.type)==="beam"&&te.material.uniforms&&(te.material.uniforms.opacity.value=U.current[je.id]*.35*an)})}else{if(He.scale.setScalar(hi),He.userData.currentRotationOffset!==0){const se=Math.round(He.userData.currentRotationOffset/(Math.PI*2))*Math.PI*2-He.userData.currentRotationOffset;He.userData.currentRotationOffset=Math.abs(se)<.01?0:He.userData.currentRotationOffset+se*.1}const Z=I+He.userData.currentRotationOffset;hs&&(hs.rotation.z=Z),fs&&(fs.rotation.z=Z),He.traverse(te=>{var he,se,Ve;((he=te.userData)==null?void 0:he.type)==="star"?te.material.opacity=an:((se=te.userData)==null?void 0:se.type)==="glow"?(te.material.opacity=.3*an,te.scale.setScalar(1)):((Ve=te.userData)==null?void 0:Ve.type)==="beam"&&te.material.uniforms&&(te.material.uniforms.opacity.value=U.current[je.id]*.35*an)})}L.copy(He.position).project(de),Ee[je.id]={visible:He.visible,screenPos:{x:(L.x*.5+.5)*O,y:(-L.y*.5+.5)*fe},scale:hi,opacity:an,distance:Ae.distanceTo(He.position)}}for(const ze of Object.keys(C.current)){const He=C.current[ze],je=A.current[ze],qe=Ee[ze];if(He&&qe){const lt=qe.visible&&qe.opacity>.1;if(He.visible=lt,He.element&&(He.element.style.opacity=qe.opacity,He.element.style.pointerEvents=lt?"auto":"none"),je&&He.userData.starPos){const bt=je.geometry.attributes.position.array,Gi=He.userData.starPos,hi=He.position;bt[0]=Gi.x,bt[1]=Gi.y,bt[2]=Gi.z,bt[3]=hi.x,bt[4]=hi.y,bt[5]=hi.z,je.geometry.attributes.position.needsUpdate=!0,je.visible=lt,je.material.opacity=qe.opacity*.5}}}ce.length>0&&((De=pe.current)==null||De.call(pe,Ee)),_e.render(re,de),we.render(ae,de)};return Oe(0),()=>{window.removeEventListener("resize",Ce),cancelAnimationFrame(Se);for(const be of Object.keys(C.current)){const ce=C.current[be];ce!=null&&ce.element&&ce.element.remove()}C.current={};for(const be of Object.keys(A.current)){const ce=A.current[be];ce&&(re.remove(ce),ce.geometry.dispose(),ce.material.dispose())}A.current={},re.traverse(be=>{be.geometry&&be.geometry.dispose(),be.material&&(Array.isArray(be.material)?be.material.forEach(ce=>ce.dispose()):be.material.dispose())}),_e.dispose(),H&&_e.domElement.parentNode===H&&H.removeChild(_e.domElement),p.current&&p.current.domElement.parentNode===H&&H.removeChild(p.current.domElement),ie.current=!1}},[M,q,ve,$,ye]),me.useEffect(()=>{const H=f.current,re=u.current;if(!H||!re||!t)return;const ae=new Set(e||[]),de=new Set(Object.keys(C.current));for(const we of de)if(!ae.has(we)){const ee=C.current[we];ee&&(re.remove(ee),ee.element&&ee.element.remove()),delete C.current[we];const ke=A.current[we];ke&&(H.remove(ke),ke.geometry.dispose(),ke.material.dispose()),delete A.current[we]}const _e={};for(const we of ae){const ee=S.current.find(ke=>{var Be;return((Be=ke.userData.card)==null?void 0:Be.id)===we});if(ee){const ke=`${ee.position.x.toFixed(2)}_${ee.position.y.toFixed(2)}_${ee.position.z.toFixed(2)}`;_e[ke]||(_e[ke]={marker:ee,cardIds:[]}),_e[ke].cardIds.push(we)}}for(const we of Object.keys(_e)){const{marker:ee,cardIds:ke}=_e[we],Be=ee.position.clone();ke.forEach((Ne,Le)=>{if(de.has(Ne))return;const Ce=t.find(ce=>ce.id===Ne);if(!Ce)return;const L=G(Ce),Se=new SR(L);Se.scale.set(Bd,Bd,Bd);const Oe=E(Be,Le,ke.length);Se.position.copy(Oe),Se.lookAt(Oe.clone().normalize().multiplyScalar(500)),Se.userData={starPos:Be.clone(),cardId:Ne},re.add(Se),C.current[Ne]=Se;const be=y(Ce.starColor||Bt);H.add(be),A.current[Ne]=be})}},[e,t,G,y,E]),me.useEffect(()=>{x.current&&(x.current.autoRotate=n&&!Y&&(!e||e.length===0)&&!o)},[n,Y,e,o]),me.useEffect(()=>{!f.current||!V.current||!R.current[Bt]||!t||t.length===0||(S.current.forEach(H=>{H.traverse(re=>{re.geometry&&re.geometry.dispose(),re.material&&re.material.dispose()}),f.current.remove(H)}),S.current=[],w.current={},U.current={},t.forEach(H=>{const re=H.starColor||Bt,ae=R.current[re]||R.current[Bt],de=ve(re),_e=ue(H,ae,de,S.current);f.current.add(_e),S.current.push(_e)}))},[t,ue,ve]),me.useEffect(()=>{const H=setInterval(()=>{R.current[Bt]&&f.current&&S.current.length===0&&t&&t.length>0&&(t.forEach(re=>{const ae=re.starColor||Bt,de=ue(re,R.current[ae]||R.current[Bt],ve(ae),S.current);f.current.add(de),S.current.push(de)}),clearInterval(H))},100);return()=>clearInterval(H)},[t,ue,ve]);const X=me.useCallback(H=>{if(H.target.closest(".card-3d-wrapper"))return;const re=Ie(H.clientX,H.clientY);re&&i(re)},[i,Ie]),Te=me.useCallback(H=>{if(H.target.closest(".card-3d-wrapper")){Y||K(!0);return}const re=Ie(H.clientX,H.clientY),ae=(re==null?void 0:re.id)??null;ae!==ge.current&&(ge.current=ae,xe.current&&cancelAnimationFrame(xe.current),xe.current=requestAnimationFrame(()=>{K(ae!==null),xe.current=null}))},[Ie,Y]),Me=me.useCallback(()=>{xe.current&&cancelAnimationFrame(xe.current),ge.current=null,K(!1)},[]);return T.jsx("div",{ref:h,className:`globe-canvas ${Y?"hovering-star":""}`,onClick:X,onPointerMove:Te,onPointerLeave:Me})}function bR({cards:t=[],groups:e=[],selectedCards:n=[],visibleCardIds:i=null,autoRotate:r,onAutoRotateChange:s,onToggleCard:o,onToggleCardVisibility:a,onOpenAll:l,onCloseAll:c,onManageClick:d,isEmbedMode:h}){const[f,g]=me.useState(!1),[x,_]=me.useState({}),[p,u]=me.useState(!1),v=me.useMemo(()=>i===null?new Set(t.map(V=>V.id)):i,[i,t]),m=me.useMemo(()=>t.length>0&&t.every(V=>v.has(V.id)),[t,v]),S=me.useMemo(()=>{const V=t.filter(W=>v.has(W.id)).length;return V>0&&V<t.length},[t,v]),C=V=>t.filter(W=>{var pe;return(pe=V.memberIds)==null?void 0:pe.includes(W.id)}),A=V=>{const W=C(V);return W.length>0&&W.every(pe=>v.has(pe.id))},b=V=>{const W=C(V),pe=W.filter(k=>v.has(k.id)).length;return pe>0&&pe<W.length},B=V=>{_(W=>({...W,[V]:!W[V]}))},w=()=>{const V=m;t.forEach(W=>{V?v.has(W.id)&&(a==null||a(W.id)):v.has(W.id)||a==null||a(W.id)})},R=V=>{const W=C(V),pe=A(V);!pe&&m&&t.forEach(k=>{v.has(k.id)&&(a==null||a(k.id))}),W.forEach(k=>{pe?v.has(k.id)&&(a==null||a(k.id)):v.has(k.id)||a==null||a(k.id)})};return h?null:T.jsxs(T.Fragment,{children:[T.jsx("button",{className:"controls-toggle",onClick:()=>g(!f),children:T.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("circle",{cx:"12",cy:"12",r:"3"}),T.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),f&&T.jsxs("div",{className:"controls-panel",children:[T.jsx("h3",{children:"Settings"}),T.jsx("div",{className:"control-item",children:T.jsxs("label",{className:"toggle-label",children:[T.jsx("span",{children:"Auto Rotate"}),T.jsxs("div",{className:"toggle-switch",children:[T.jsx("input",{type:"checkbox",checked:r,onChange:V=>s==null?void 0:s(V.target.checked)}),T.jsx("span",{className:"toggle-slider"})]})]})}),T.jsx("div",{className:"control-divider"}),T.jsxs("div",{className:"dropdown-actions",style:{marginBottom:"12px"},children:[T.jsxs("button",{className:"dropdown-action-btn",onClick:l,children:[T.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),T.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show Cards"]}),T.jsxs("button",{className:"dropdown-action-btn",onClick:c,children:[T.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),T.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide Cards"]})]}),T.jsx("div",{className:"control-divider"}),T.jsxs("div",{className:"groups-section",children:[T.jsx("div",{className:"section-label",children:"Groups"}),T.jsxs("div",{className:"group-dropdown",children:[T.jsxs("div",{className:"group-header",onClick:()=>u(!p),children:[T.jsx("div",{className:"group-checkbox-wrapper",onClick:V=>V.stopPropagation(),children:T.jsx("input",{type:"checkbox",checked:m,ref:V=>{V&&(V.indeterminate=S)},onChange:w})}),T.jsx("span",{className:"group-label-text",children:"All Members"}),T.jsxs("span",{className:"group-count",children:["(",t.length,")"]}),T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:p?"rotate(180deg)":"none",transition:"transform 0.2s",marginLeft:"auto"},children:T.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),p&&T.jsx("div",{className:"group-members",children:t.map(V=>T.jsxs("label",{className:"member-checkbox-item",children:[T.jsx("input",{type:"checkbox",checked:v.has(V.id),onChange:()=>a==null?void 0:a(V.id)}),T.jsx("span",{className:"member-label-text",children:V.name}),n.includes(V.id)&&T.jsx("span",{className:"card-open-indicator",children:"●"})]},V.id))})]}),e.map(V=>{const W=C(V),pe=x[V.id],k=A(V),Q=b(V);return T.jsxs("div",{className:"group-dropdown",children:[T.jsxs("div",{className:"group-header",onClick:()=>B(V.id),children:[T.jsx("div",{className:"group-checkbox-wrapper",onClick:J=>J.stopPropagation(),children:T.jsx("input",{type:"checkbox",checked:k,ref:J=>{J&&(J.indeterminate=Q)},onChange:()=>R(V)})}),T.jsx("span",{className:"group-label-text",children:V.name}),T.jsxs("span",{className:"group-count",children:["(",W.length,")"]}),T.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:pe?"rotate(180deg)":"none",transition:"transform 0.2s",marginLeft:"auto"},children:T.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),pe&&T.jsx("div",{className:"group-members",children:W.length===0?T.jsx("div",{className:"empty-group",children:"No members"}):W.map(J=>T.jsxs("label",{className:"member-checkbox-item",children:[T.jsx("input",{type:"checkbox",checked:v.has(J.id),onChange:()=>a==null?void 0:a(J.id)}),T.jsx("span",{className:"member-label-text",children:J.name}),n.includes(J.id)&&T.jsx("span",{className:"card-open-indicator",children:"●"})]},J.id))})]},V.id)})]}),T.jsx("div",{className:"control-divider"}),T.jsxs("button",{className:"manage-btn",onClick:d,children:[T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),T.jsx("circle",{cx:"9",cy:"7",r:"4"}),T.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),T.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Manage Members"]})]})]})}function CR(){return T.jsx("div",{className:"loading-screen",children:T.jsxs("div",{className:"loading-content",children:[T.jsx("div",{className:"loading-spinner"}),T.jsx("p",{children:"Loading..."})]})})}var wv={};/**
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
 */const ix=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},RR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[d],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ix(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new PR;const f=s<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const x=c<<6&192|h;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IR=function(t){const e=ix(t);return rx.encodeByteArray(e,!0)},Gc=function(t){return IR(t).replace(/\./g,"")},sx=function(t){try{return rx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NR=()=>LR().__FIREBASE_DEFAULTS__,DR=()=>{if(typeof process>"u"||typeof wv>"u")return;const t=wv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sx(t[1]);return e&&JSON.parse(e)},dp=()=>{try{return NR()||DR()||UR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ox=t=>{var e,n;return(n=(e=dp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OR=t=>{const e=ox(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ax=()=>{var t;return(t=dp())===null||t===void 0?void 0:t.config},lx=t=>{var e;return(e=dp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function FR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gc(JSON.stringify(n)),Gc(JSON.stringify(o)),""].join(".")}/**
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
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function zR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GR(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WR(){try{return typeof indexedDB=="object"}catch{return!1}}function jR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const XR="FirebaseError";class Hi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=XR,Object.setPrototypeOf(this,Hi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?$R(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Hi(r,a,i)}}function $R(t,e){return t.replace(qR,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const qR=/\{\$([^}]+)}/g;function YR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Tv(s)&&Tv(o)){if(!Wc(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Tv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ya(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function KR(t,e){const n=new JR(t,e);return n.subscribe.bind(n)}class JR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ZR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=zd),r.error===void 0&&(r.error=zd),r.complete===void 0&&(r.complete=zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zd(){}/**
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
 */function Vi(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class QR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new kR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tP(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:eP(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eP(t){return t===zr?void 0:t}function tP(t){return t.instantiationMode==="EAGER"}/**
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
 */class nP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(at||(at={}));const iP={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},rP=at.INFO,sP={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},oP=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=sP[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cx{constructor(e){this.name=e,this._logLevel=rP,this._logHandler=oP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in at))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...e),this._logHandler(this,at.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...e),this._logHandler(this,at.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,at.INFO,...e),this._logHandler(this,at.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,at.WARN,...e),this._logHandler(this,at.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...e),this._logHandler(this,at.ERROR,...e)}}const aP=(t,e)=>e.some(n=>t instanceof n);let Av,bv;function lP(){return Av||(Av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cP(){return bv||(bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ux=new WeakMap,Qh=new WeakMap,dx=new WeakMap,Hd=new WeakMap,hp=new WeakMap;function uP(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ux.set(n,t)}).catch(()=>{}),hp.set(e,t),e}function dP(t){if(Qh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hP(t){ef=t(ef)}function fP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Vd(this),e,...n);return dx.set(i,e.sort?e.sort():[e]),xr(i)}:cP().includes(t)?function(...e){return t.apply(Vd(this),e),xr(ux.get(this))}:function(...e){return xr(t.apply(Vd(this),e))}}function pP(t){return typeof t=="function"?fP(t):(t instanceof IDBTransaction&&dP(t),aP(t,lP())?new Proxy(t,ef):t)}function xr(t){if(t instanceof IDBRequest)return uP(t);if(Hd.has(t))return Hd.get(t);const e=pP(t);return e!==t&&(Hd.set(t,e),hp.set(e,t)),e}const Vd=t=>hp.get(t);function mP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gP=["get","getKey","getAll","getAllKeys","count"],vP=["put","add","delete","clear"],Gd=new Map;function Cv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=vP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Gd.set(e,s),s}hP(t=>({...t,get:(e,n,i)=>Cv(e,n)||t.get(e,n,i),has:(e,n)=>!!Cv(e,n)||t.has(e,n)}));/**
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
 */class _P{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function yP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tf="@firebase/app",Rv="0.10.13";/**
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
 */const Fi=new cx("@firebase/app"),xP="@firebase/app-compat",SP="@firebase/analytics-compat",EP="@firebase/analytics",MP="@firebase/app-check-compat",wP="@firebase/app-check",TP="@firebase/auth",AP="@firebase/auth-compat",bP="@firebase/database",CP="@firebase/data-connect",RP="@firebase/database-compat",PP="@firebase/functions",IP="@firebase/functions-compat",LP="@firebase/installations",NP="@firebase/installations-compat",DP="@firebase/messaging",UP="@firebase/messaging-compat",OP="@firebase/performance",kP="@firebase/performance-compat",FP="@firebase/remote-config",BP="@firebase/remote-config-compat",zP="@firebase/storage",HP="@firebase/storage-compat",VP="@firebase/firestore",GP="@firebase/vertexai-preview",WP="@firebase/firestore-compat",jP="firebase",XP="10.14.1";/**
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
 */const nf="[DEFAULT]",$P={[tf]:"fire-core",[xP]:"fire-core-compat",[EP]:"fire-analytics",[SP]:"fire-analytics-compat",[wP]:"fire-app-check",[MP]:"fire-app-check-compat",[TP]:"fire-auth",[AP]:"fire-auth-compat",[bP]:"fire-rtdb",[CP]:"fire-data-connect",[RP]:"fire-rtdb-compat",[PP]:"fire-fn",[IP]:"fire-fn-compat",[LP]:"fire-iid",[NP]:"fire-iid-compat",[DP]:"fire-fcm",[UP]:"fire-fcm-compat",[OP]:"fire-perf",[kP]:"fire-perf-compat",[FP]:"fire-rc",[BP]:"fire-rc-compat",[zP]:"fire-gcs",[HP]:"fire-gcs-compat",[VP]:"fire-fst",[WP]:"fire-fst-compat",[GP]:"fire-vertex","fire-js":"fire-js",[jP]:"fire-js-all"};/**
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
 */const jc=new Map,qP=new Map,rf=new Map;function Pv(t,e){try{t.container.addComponent(e)}catch(n){Fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function So(t){const e=t.name;if(rf.has(e))return Fi.debug(`There were multiple attempts to register component ${e}.`),!1;rf.set(e,t);for(const n of jc.values())Pv(n,t);for(const n of qP.values())Pv(n,t);return!0}function fp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bi(t){return t.settings!==void 0}/**
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
 */const YP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new qa("app","Firebase",YP);/**
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
 */class KP{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ro=XP;function hx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:nf,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Sr.create("bad-app-name",{appName:String(r)});if(n||(n=ax()),!n)throw Sr.create("no-options");const s=jc.get(r);if(s){if(Wc(n,s.options)&&Wc(i,s.config))return s;throw Sr.create("duplicate-app",{appName:r})}const o=new nP(r);for(const l of rf.values())o.addComponent(l);const a=new KP(n,i,o);return jc.set(r,a),a}function fx(t=nf){const e=jc.get(t);if(!e&&t===nf&&ax())return hx();if(!e)throw Sr.create("no-app",{appName:t});return e}function Er(t,e,n){var i;let r=(i=$P[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fi.warn(a.join(" "));return}So(new os(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const JP="firebase-heartbeat-database",ZP=1,Fa="firebase-heartbeat-store";let Wd=null;function px(){return Wd||(Wd=mP(JP,ZP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Wd}async function QP(t){try{const n=(await px()).transaction(Fa),i=await n.objectStore(Fa).get(mx(t));return await n.done,i}catch(e){if(e instanceof Hi)Fi.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fi.warn(n.message)}}}async function Iv(t,e){try{const i=(await px()).transaction(Fa,"readwrite");await i.objectStore(Fa).put(e,mx(t)),await i.done}catch(n){if(n instanceof Hi)Fi.warn(n.message);else{const i=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fi.warn(i.message)}}}function mx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const e2=1024,t2=30*24*60*60*1e3;class n2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new r2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=t2}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Fi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lv(),{heartbeatsToSend:i,unsentEntries:r}=i2(this._heartbeatsCache.heartbeats),s=Gc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fi.warn(n),""}}}function Lv(){return new Date().toISOString().substring(0,10)}function i2(t,e=e2){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Nv(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Nv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class r2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WR()?jR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nv(t){return Gc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function s2(t){So(new os("platform-logger",e=>new _P(e),"PRIVATE")),So(new os("heartbeat",e=>new n2(e),"PRIVATE")),Er(tf,Rv,t),Er(tf,Rv,"esm2017"),Er("fire-js","")}s2("");var o2="firebase",a2="10.14.1";/**
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
 */Er(o2,a2,"app");function pp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function gx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l2=gx,vx=new qa("auth","Firebase",gx());/**
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
 */const Xc=new cx("@firebase/auth");function c2(t,...e){Xc.logLevel<=at.WARN&&Xc.warn(`Auth (${Ro}): ${t}`,...e)}function lc(t,...e){Xc.logLevel<=at.ERROR&&Xc.error(`Auth (${Ro}): ${t}`,...e)}/**
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
 */function li(t,...e){throw gp(t,...e)}function Zn(t,...e){return gp(t,...e)}function mp(t,e,n){const i=Object.assign(Object.assign({},l2()),{[e]:n});return new qa("auth","Firebase",i).create(e,{appName:t.name})}function Zr(t){return mp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function u2(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&li(t,"argument-error"),mp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gp(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return vx.create(t,...e)}function $e(t,e,...n){if(!t)throw gp(e,...n)}function Ci(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function Bi(t,e){t||Ci(e)}/**
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
 */function sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function d2(){return Dv()==="http:"||Dv()==="https:"}function Dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function h2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d2()||HR()||"connection"in navigator)?navigator.onLine:!0}function f2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bi(n>e,"Short delay should be less than long delay!"),this.isMobile=BR()||VR()}get(){return h2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vp(t,e){Bi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _x{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const m2=new Ka(3e4,6e4);function _p(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Po(t,e,n,i,r={}){return yx(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ya(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return zR()||(c.referrerPolicy="no-referrer"),_x.fetch()(xx(t,t.config.apiHost,n,a),c)})}async function yx(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},p2),e);try{const r=new v2(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jl(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mp(t,d,c);li(t,d)}}catch(r){if(r instanceof Hi)throw r;li(t,"network-request-failed",{message:String(r)})}}async function g2(t,e,n,i,r={}){const s=await Po(t,e,n,i,r);return"mfaPendingCredential"in s&&li(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xx(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?vp(t.config,r):`${t.config.apiScheme}://${r}`}class v2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Zn(this.auth,"network-request-failed")),m2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Zn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function _2(t,e){return Po(t,"POST","/v1/accounts:delete",e)}async function Sx(t,e){return Po(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y2(t,e=!1){const n=Vi(t),i=await n.getIdToken(e),r=yp(i);$e(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:pa(jd(r.auth_time)),issuedAtTime:pa(jd(r.iat)),expirationTime:pa(jd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jd(t){return Number(t)*1e3}function yp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const r=sx(n);return r?JSON.parse(r):(lc("Failed to decode base64 JWT payload"),null)}catch(r){return lc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Uv(t){const e=yp(t);return $e(e,"internal-error"),$e(typeof e.exp<"u","internal-error"),$e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ba(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Hi&&x2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function x2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class S2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class of{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $c(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ba(t,Sx(n,{idToken:i}));$e(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ex(s.providerUserInfo):[],a=M2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new of(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function E2(t){const e=Vi(t);await $c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M2(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Ex(t){return t.map(e=>{var{providerId:n}=e,i=pp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function w2(t,e){const n=await yx(t,{},async()=>{const i=Ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=xx(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_x.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function T2(t,e){return Po(t,"POST","/v2/accounts:revokeToken",_p(t,e))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$e(e.idToken,"internal-error"),$e(typeof e.idToken<"u","internal-error"),$e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$e(e.length!==0,"internal-error");const n=Uv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await w2(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new oo;return i&&($e(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&($e(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&($e(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
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
 */function Ki(t,e){$e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new of(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return $e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y2(this,e)}reload(){return E2(this)}_assign(e){this!==e&&($e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bi(this.auth.app))return Promise.reject(Zr(this.auth));const e=await this.getIdToken();return await Ba(this,_2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,u=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:S,isAnonymous:C,providerData:A,stsTokenManager:b}=n;$e(m&&b,e,"internal-error");const B=oo.fromJSON(this.name,b);$e(typeof m=="string",e,"internal-error"),Ki(h,e.name),Ki(f,e.name),$e(typeof S=="boolean",e,"internal-error"),$e(typeof C=="boolean",e,"internal-error"),Ki(g,e.name),Ki(x,e.name),Ki(_,e.name),Ki(p,e.name),Ki(u,e.name),Ki(v,e.name);const w=new Ri({uid:m,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:C,photoURL:x,phoneNumber:g,tenantId:_,stsTokenManager:B,createdAt:u,lastLoginAt:v});return A&&Array.isArray(A)&&(w.providerData=A.map(R=>Object.assign({},R))),p&&(w._redirectEventId=p),w}static async _fromIdTokenResponse(e,n,i=!1){const r=new oo;r.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await $c(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];$e(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Ex(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new oo;a.updateFromIdToken(i);const l=new Ri({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new of(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Ov=new Map;function Pi(t){Bi(t instanceof Function,"Expected a class definition");let e=Ov.get(t);return e?(Bi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ov.set(t,e),e)}/**
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
 */class Mx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mx.type="NONE";const kv=Mx;/**
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
 */function cc(t,e,n){return`firebase:${t}:${e}:${n}`}class ao{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=cc(this.userKey,r.apiKey,s),this.fullPersistenceKey=cc("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ao(Pi(kv),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Pi(kv);const o=cc(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Ri._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ao(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ao(s,e,i))}}/**
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
 */function Fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rx(e))return"Blackberry";if(Px(e))return"Webos";if(Tx(e))return"Safari";if((e.includes("chrome/")||Ax(e))&&!e.includes("edge/"))return"Chrome";if(Cx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function wx(t=rn()){return/firefox\//i.test(t)}function Tx(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ax(t=rn()){return/crios\//i.test(t)}function bx(t=rn()){return/iemobile/i.test(t)}function Cx(t=rn()){return/android/i.test(t)}function Rx(t=rn()){return/blackberry/i.test(t)}function Px(t=rn()){return/webos/i.test(t)}function xp(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A2(t=rn()){var e;return xp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b2(){return GR()&&document.documentMode===10}function Ix(t=rn()){return xp(t)||Cx(t)||Px(t)||Rx(t)||/windows phone/i.test(t)||bx(t)}/**
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
 */function Lx(t,e=[]){let n;switch(t){case"Browser":n=Fv(rn());break;case"Worker":n=`${Fv(rn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ro}/${i}`}/**
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
 */class C2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function R2(t,e={}){return Po(t,"GET","/v2/passwordPolicy",_p(t,e))}/**
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
 */const P2=6;class I2{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:P2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class L2{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bv(this),this.idTokenSubscription=new Bv(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sx(this,{idToken:e}),i=await Ri._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $c(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bi(this.app))return Promise.reject(Zr(this));const n=e?Vi(e):null;return n&&$e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bi(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bi(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R2(this),n=new I2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await T2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pi(e)||this._popupRedirectResolver;$e(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($e(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Eu(t){return Vi(t)}class Bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=KR(n=>this.observer=n)}get next(){return $e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N2(t){Sp=t}function D2(t){return Sp.loadJS(t)}function U2(){return Sp.gapiScript}function O2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function k2(t,e){const n=fp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Wc(s,e??{}))return r;li(r,"already-initialized")}return n.initialize({options:e})}function F2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Pi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function B2(t,e,n){const i=Eu(t);$e(i._canInitEmulator,i,"emulator-config-failed"),$e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Nx(e),{host:o,port:a}=z2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),H2()}function Nx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function z2(t){const e=Nx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:zv(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:zv(o)}}}function zv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function H2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dx{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,n){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}/**
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
 */async function lo(t,e){return g2(t,"POST","/v1/accounts:signInWithIdp",_p(t,e))}/**
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
 */const V2="http://localhost";class as extends Dx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):li("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=pp(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new as(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,lo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lo(e,n)}buildRequest(){const e={requestUri:V2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ya(n)}return e}}/**
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
 */class Ep{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ja extends Ep{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends Ja{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class Mi extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mi.credential(n,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
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
 */class ir extends Ja{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class rr extends Ja{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return rr.credential(n,i)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class Eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ri._fromIdTokenResponse(e,i,r),o=Hv(i);return new Eo({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Hv(i);return new Eo({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Hv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qc extends Hi{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new qc(e,n,i,r)}}function Ux(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,i):s})}async function G2(t,e,n=!1){const i=await Ba(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Eo._forOperation(t,"link",i)}/**
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
 */async function W2(t,e,n=!1){const{auth:i}=t;if(bi(i.app))return Promise.reject(Zr(i));const r="reauthenticate";try{const s=await Ba(t,Ux(i,r,e,t),n);$e(s.idToken,i,"internal-error");const o=yp(s.idToken);$e(o,i,"internal-error");const{sub:a}=o;return $e(t.uid===a,i,"user-mismatch"),Eo._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&li(i,"user-mismatch"),s}}/**
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
 */async function j2(t,e,n=!1){if(bi(t.app))return Promise.reject(Zr(t));const i="signIn",r=await Ux(t,i,e),s=await Eo._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function X2(t,e,n,i){return Vi(t).onIdTokenChanged(e,n,i)}function $2(t,e,n){return Vi(t).beforeAuthStateChanged(e,n)}function q2(t,e,n,i){return Vi(t).onAuthStateChanged(e,n,i)}function Y2(t){return Vi(t).signOut()}const Yc="__sak";/**
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
 */class Ox{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const K2=1e3,J2=10;class kx extends Ox{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ix(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);b2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,J2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kx.type="LOCAL";const Z2=kx;/**
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
 */class Fx extends Ox{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fx.type="SESSION";const Bx=Fx;/**
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
 */function Q2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Mu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Q2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
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
 */function Mp(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Mp("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ai(){return window}function tI(t){ai().location.href=t}/**
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
 */function zx(){return typeof ai().WorkerGlobalScope<"u"&&typeof ai().importScripts=="function"}async function nI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rI(){return zx()?self:null}/**
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
 */const Hx="firebaseLocalStorageDb",sI=1,Kc="firebaseLocalStorage",Vx="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function oI(){const t=indexedDB.deleteDatabase(Hx);return new Za(t).toPromise()}function af(){const t=indexedDB.open(Hx,sI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Kc,{keyPath:Vx})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Kc)?e(i):(i.close(),await oI(),e(await af()))})})}async function Vv(t,e,n){const i=wu(t,!0).put({[Vx]:e,value:n});return new Za(i).toPromise()}async function aI(t,e){const n=wu(t,!1).get(e),i=await new Za(n).toPromise();return i===void 0?null:i.value}function Gv(t,e){const n=wu(t,!0).delete(e);return new Za(n).toPromise()}const lI=800,cI=3;class Gx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>cI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(rI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nI(),!this.activeServiceWorker)return;this.sender=new eI(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await Vv(e,Yc,"1"),await Gv(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>aI(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=wu(r,!1).getAll();return new Za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gx.type="LOCAL";const uI=Gx;new Ka(3e4,6e4);/**
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
 */function Wx(t,e){return e?Pi(e):($e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wp extends Dx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dI(t){return j2(t.auth,new wp(t),t.bypassAuthState)}function hI(t){const{auth:e,user:n}=t;return $e(n,e,"internal-error"),W2(n,new wp(t),t.bypassAuthState)}async function fI(t){const{auth:e,user:n}=t;return $e(n,e,"internal-error"),G2(n,new wp(t),t.bypassAuthState)}/**
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
 */class jx{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:li(this.auth,"internal-error")}}resolve(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pI=new Ka(2e3,1e4);async function mI(t,e,n){if(bi(t.app))return Promise.reject(Zn(t,"operation-not-supported-in-this-environment"));const i=Eu(t);u2(t,e,Ep);const r=Wx(i,n);return new Xr(i,"signInViaPopup",e,r).executeNotNull()}class Xr extends jx{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $e(e,this.auth,"internal-error"),e}async onExecution(){Bi(this.filter.length===1,"Popup operations only handle one event");const e=Mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pI.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const gI="pendingRedirect",uc=new Map;class vI extends jx{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const i=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(t,e){const n=SI(e),i=xI(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function yI(t,e){uc.set(t._key(),e)}function xI(t){return Pi(t._redirectPersistence)}function SI(t){return cc(gI,t.config.apiKey,t.name)}async function EI(t,e,n=!1){if(bi(t.app))return Promise.reject(Zr(t));const i=Eu(t),r=Wx(i,e),o=await new vI(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const MI=10*60*1e3;class wI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Xx(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Zn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wv(e))}saveEventToCache(e){this.cachedEventUids.add(Wv(e)),this.lastProcessedEventTime=Date.now()}}function Wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xx(t);default:return!1}}/**
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
 */async function AI(t,e={}){return Po(t,"GET","/v1/projects",e)}/**
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
 */const bI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function RI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AI(t);for(const n of e)try{if(PI(n))return}catch{}li(t,"unauthorized-domain")}function PI(t){const e=sf(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!CI.test(n))return!1;if(bI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const II=new Ka(3e4,6e4);function jv(){const t=ai().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LI(t){return new Promise((e,n)=>{var i,r,s;function o(){jv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jv(),n(Zn(t,"network-request-failed"))},timeout:II.get()})}if(!((r=(i=ai().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ai().gapi)===null||s===void 0)&&s.load)o();else{const a=O2("iframefcb");return ai()[a]=()=>{gapi.load?o():n(Zn(t,"network-request-failed"))},D2(`${U2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dc=null,e})}let dc=null;function NI(t){return dc=dc||LI(t),dc}/**
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
 */const DI=new Ka(5e3,15e3),UI="__/auth/iframe",OI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BI(t){const e=t.config;$e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vp(e,OI):`https://${t.config.authDomain}/${UI}`,i={apiKey:e.apiKey,appName:t.name,v:Ro},r=FI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Ya(i).slice(1)}`}async function zI(t){const e=await NI(t),n=ai().gapi;return $e(n,t,"internal-error"),e.open({where:document.body,url:BI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Zn(t,"network-request-failed"),a=ai().setTimeout(()=>{s(o)},DI.get());function l(){ai().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VI=500,GI=600,WI="_blank",jI="http://localhost";class Xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XI(t,e,n,i=VI,r=GI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HI),{width:i.toString(),height:r.toString(),top:s,left:o}),c=rn().toLowerCase();n&&(a=Ax(c)?WI:n),wx(c)&&(e=e||jI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,x])=>`${f}${g}=${x},`,"");if(A2(c)&&a!=="_self")return $I(e||"",a),new Xv(null);const h=window.open(e||"",a,d);$e(h,t,"popup-blocked");try{h.focus()}catch{}return new Xv(h)}function $I(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const qI="__/auth/handler",YI="emulator/auth/handler",KI=encodeURIComponent("fac");async function $v(t,e,n,i,r,s){$e(t.config.authDomain,t,"auth-domain-config-required"),$e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ro,eventId:r};if(e instanceof Ep){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Ja){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${KI}=${encodeURIComponent(l)}`:"";return`${JI(t)}?${Ya(a).slice(1)}${c}`}function JI({config:t}){return t.emulator?vp(t,YI):`https://${t.authDomain}/${qI}`}/**
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
 */const Xd="webStorageSupport";class ZI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bx,this._completeRedirectFn=EI,this._overrideRedirectResult=yI}async _openPopup(e,n,i,r){var s;Bi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $v(e,n,i,sf(),r);return XI(e,o,Mp())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await $v(e,n,i,sf(),r);return tI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Bi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await zI(e),i=new wI(e);return n.register("authEvent",r=>($e(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),li(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ix()||Tx()||xp()}}const QI=ZI;var qv="@firebase/auth",Yv="1.7.9";/**
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
 */class eL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nL(t){So(new os("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;$e(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lx(t)},c=new L2(i,r,s,l);return F2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),So(new os("auth-internal",e=>{const n=Eu(e.getProvider("auth").getImmediate());return(i=>new eL(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(qv,Yv,tL(t)),Er(qv,Yv,"esm2017")}/**
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
 */const iL=5*60,rL=lx("authIdTokenMaxAge")||iL;let Kv=null;const sL=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>rL)return;const r=n==null?void 0:n.token;Kv!==r&&(Kv=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function oL(t=fx()){const e=fp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k2(t,{popupRedirectResolver:QI,persistence:[uI,Z2,Bx]}),i=lx("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=sL(s.toString());$2(n,o,()=>o(n.currentUser)),X2(n,a=>o(a))}}const r=ox("auth");return r&&B2(n,`http://${r}`),n}function aL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}N2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Zn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",aL().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nL("Browser");/**
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
 */const $x="firebasestorage.googleapis.com",lL="storageBucket",cL=2*60*1e3,uL=10*60*1e3;/**
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
 */class di extends Hi{constructor(e,n,i=0){super($d(e),`Firebase Storage: ${n} (${$d(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,di.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ci;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ci||(ci={}));function $d(t){return"storage/"+t}function dL(){const t="An unknown error occurred, please check the error payload for server response.";return new di(ci.UNKNOWN,t)}function hL(){return new di(ci.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fL(){return new di(ci.CANCELED,"User canceled the upload/download.")}function pL(t){return new di(ci.INVALID_URL,"Invalid URL '"+t+"'.")}function mL(t){return new di(ci.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jv(t){return new di(ci.INVALID_ARGUMENT,t)}function qx(){return new di(ci.APP_DELETED,"The Firebase app was deleted.")}function gL(t){return new di(ci.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class qn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=qn.makeFromUrl(e,n)}catch{return new qn(e,"")}if(i.path==="")return i;throw mL(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),x={bucket:1,path:3},_=n===$x?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",u=new RegExp(`^https?://${_}/${r}/${p}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:x,postModify:c},{regex:u,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<m.length;S++){const C=m[S],A=C.regex.exec(e);if(A){const b=A[C.indices.bucket];let B=A[C.indices.path];B||(B=""),i=new qn(b,B),C.postModify(i);break}}if(i==null)throw pL(e);return i}}class vL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _L(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...p){c||(c=!0,e.apply(null,p))}function h(p){r=setTimeout(()=>{r=null,t(g,l())},p)}function f(){s&&clearTimeout(s)}function g(p,...u){if(c){f();return}if(p){f(),d.call(null,p,...u);return}if(l()||o){f(),d.call(null,p,...u);return}i<64&&(i*=2);let m;a===1?(a=2,m=0):m=(i+Math.random())*1e3,h(m)}let x=!1;function _(p){x||(x=!0,f(),!c&&(r!==null?(p||(a=2),clearTimeout(r),h(0)):p||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function yL(t){t(!1)}/**
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
 */function xL(t){return t!==void 0}function Zv(t,e,n,i){if(i<e)throw Jv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Jv(`Invalid value for '${t}'. Expected ${n} or less.`)}function SL(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Jc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jc||(Jc={}));/**
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
 */function EL(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class ML{constructor(e,n,i,r,s,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,x)=>{this.resolve_=g,this.reject_=x,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Xl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Jc.NO_ERROR,l=s.getStatus();if(!a||EL(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Jc.ABORT;i(!1,new Xl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Xl(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());xL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=dL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?qx():fL();o(l)}else{const l=hL();o(l)}};this.canceled_?n(!1,new Xl(!1,null,!0)):this.backoffId_=_L(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function wL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function TL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CL(t,e,n,i,r,s,o=!0){const a=SL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return AL(c,e),wL(c,n),TL(c,s),bL(c,i),new ML(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function RL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function PL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Zc{constructor(e,n){this._service=e,n instanceof qn?this._location=n:this._location=qn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zc(e,n)}get root(){const e=new qn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return PL(this._location.path)}get storage(){return this._service}get parent(){const e=RL(this._location.path);if(e===null)return null;const n=new qn(this._location.bucket,e);return new Zc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gL(e)}}function Qv(t,e){const n=e==null?void 0:e[lL];return n==null?null:qn.makeFromBucketSpec(n,t)}function IL(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:FR(r,t.app.options.projectId))}class LL{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=$x,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cL,this._maxUploadRetryTime=uL,this._requests=new Set,r!=null?this._bucket=qn.makeFromBucketSpec(r,this._host):this._bucket=Qv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qn.makeFromBucketSpec(this._url,e):this._bucket=Qv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new vL(qx());{const o=CL(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const e_="@firebase/storage",t_="0.13.2";/**
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
 */const Yx="storage";function NL(t=fx(),e){t=Vi(t);const i=fp(t,Yx).getImmediate({identifier:e}),r=OR("storage");return r&&DL(i,...r),i}function DL(t,e,n,i={}){IL(t,e,n,i)}function UL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new LL(n,i,r,e,Ro)}function OL(){So(new os(Yx,UL,"PUBLIC").setMultipleInstances(!0)),Er(e_,t_,""),Er(e_,t_,"esm2017")}OL();const kL={apiKey:"AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",authDomain:"anking-globe.firebaseapp.com",projectId:"anking-globe",storageBucket:"anking-globe.firebasestorage.app",messagingSenderId:"615376842",appId:"1:615376842:web:your_app_id"},Kx=hx(kL),za=oL(Kx);NL(Kx);const FL=new Mi,BL=async()=>{try{const t=await mI(za,FL),e=await t.user.getIdToken();return{user:t.user,token:e}}catch(t){throw console.error("Google sign-in error:",t),t}},zL=async()=>{await Y2(za)},HL=async()=>za.currentUser?await za.currentUser.getIdToken():null,Tt="https://api-efgn5mw6aq-uc.a.run.app";function n_(t){return t?t.startsWith("http")?t:`https://storage.googleapis.com/anking-globe.appspot.com/cards/${t}`:""}async function VL(){const t=await fetch(`${Tt}/cards`);if(!t.ok)throw new Error("Failed to fetch cards");return t.json()}function GL(t){if(!t)return"";if(typeof t=="object"){const n=[];return(t.city||t.town||t.village||t.municipality)&&n.push(t.city||t.town||t.village||t.municipality),(t.state||t.region||t.province)&&n.push(t.state||t.region||t.province),t.country&&n.push(t.country),n.join(", ")}const e=t.split(",").map(n=>n.trim());return e.length<=3?t:e.slice(-3).join(", ")}function WL({onBack:t}){const[e,n]=me.useState("checking"),[i,r]=me.useState(!1),[s,o]=me.useState(null),[a,l]=me.useState(null),[c,d]=me.useState("members"),[h,f]=me.useState([]),[g,x]=me.useState(null),[_,p]=me.useState(!1),[u,v]=me.useState(!1),[m,S]=me.useState({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),[C,A]=me.useState([]),[b,B]=me.useState(!1),[w,R]=me.useState([]),[V,W]=me.useState([]),[pe,k]=me.useState([]),[Q,J]=me.useState(!1),[ie,D]=me.useState(!1),[Y,K]=me.useState(!1),[ge,xe]=me.useState(500),[le,U]=me.useState(null),[N,P]=me.useState([]),[M,q]=me.useState(null),[oe,$]=me.useState({name:"",color:"#9333ea",memberIds:[]}),[ve,z]=me.useState(!1),Ue=me.useRef(null);me.useEffect(()=>{const O=q2(za,async fe=>{if(fe){const De=await fe.getIdToken();l(De),o({email:fe.email,username:fe.displayName||fe.email,picture:fe.photoURL||""}),ne(De)}else l(null),o(null),n("none")});return()=>O()},[]);const ne=async O=>{try{const De=await(await fetch(`${Tt}/auth/check`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`}})).json();if(De.error){n("none");return}n(De.status),r(De.isAdmin||!1),(De.status==="approved"||De.isAdmin)&&(G(),y(),E())}catch(fe){console.error("Auth check error:",fe),n("error")}},ue=()=>a?{Authorization:`Bearer ${a}`}:{},ye=async()=>{try{await BL();const O=await HL();if(O){l(O);const De=await(await fetch(`${Tt}/auth/request`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`}})).json();n(De.status),r(De.isAdmin||!1),(De.status==="approved"||De.isAdmin)&&(G(),y(),E())}}catch(O){console.error("Sign in error:",O)}},Ie=async()=>{try{await zL(),l(null),o(null),n("none")}catch(O){console.error("Sign out error:",O)}},G=async()=>{try{const fe=await(await fetch(`${Tt}/cards`)).json();f(fe)}catch(O){console.error("Load cards error:",O)}},y=async()=>{try{const fe=await(await fetch(`${Tt}/images`,{headers:ue()})).json();R(fe)}catch(O){console.error("Load images error:",O)}},E=async()=>{try{const fe=await(await fetch(`${Tt}/groups`)).json();P(fe)}catch(O){console.error("Load groups error:",O)}},X=async()=>{if(i)try{const[O,fe]=await Promise.all([fetch(`${Tt}/users/pending`,{headers:ue()}),fetch(`${Tt}/users/approved`,{headers:ue()})]);W(await O.json()),k(await fe.json())}catch(O){console.error("Load users error:",O)}},Te=async O=>{try{(await fetch(`${Tt}/users/${encodeURIComponent(O)}/approve`,{method:"POST",headers:ue()})).ok&&(U({type:"success",message:`Approved ${O}`}),setTimeout(()=>U(null),3e3),X())}catch(fe){console.error("Approve error:",fe)}},Me=async O=>{try{await fetch(`${Tt}/users/${encodeURIComponent(O)}`,{method:"DELETE",headers:ue()}),U({type:"success",message:`Denied ${O}`}),setTimeout(()=>U(null),3e3),X()}catch(fe){console.error("Deny error:",fe)}},H=async O=>{if(confirm(`Revoke access for ${O}?`))try{await fetch(`${Tt}/users/${encodeURIComponent(O)}/revoke`,{method:"POST",headers:ue()}),X()}catch(fe){console.error("Revoke error:",fe)}},re=async O=>{if(!O||O.length<3){A([]);return}B(!0);try{const De=await(await fetch(`${Tt}/geocode?q=${encodeURIComponent(O)}`)).json();A(De.slice(0,5))}catch{A([])}B(!1)},ae=O=>{S(fe=>({...fe,location:GL(O.address)||O.display_name,lat:O.lat.toString(),lng:O.lng.toString()})),A([])},de=(O,fe)=>{S(De=>({...De,[O]:fe})),(O==="university"||O==="location")&&(clearTimeout(window.geocodeTimeout),window.geocodeTimeout=setTimeout(()=>re(fe),600))},_e=async O=>{const fe=O.target.files[0];if(fe){if(!fe.type.match(/^image\/(png|jpe?g|webp)$/)){alert("Please select a PNG, JPG, or WebP image.");return}if(fe.size>5*1024*1024){alert("Image too large. Max 5MB.");return}v(!0);try{const De=new FileReader;De.onload=async()=>{const ze=De.result,He=await fetch(`${Tt}/images/upload`,{method:"POST",headers:{"Content-Type":"application/json",...ue()},body:JSON.stringify({filename:fe.name,data:ze})});if(He.ok){const je=await He.json();S(qe=>({...qe,image:je.url||je.filename})),await y()}else{const je=await He.json();alert(je.error||"Upload failed")}v(!1)},De.readAsDataURL(fe)}catch{alert("Upload failed"),v(!1)}O.target.value=""}},we=()=>{S({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),x(null),A([])},ee=O=>{var fe,De;x(O),S({name:O.name||"",title:O.title||"",university:O.university||"",location:O.location||"",lat:((fe=O.lat)==null?void 0:fe.toString())||"",lng:((De=O.lng)==null?void 0:De.toString())||"",image:O.image||""})},ke=async O=>{if(O.preventDefault(),!m.name||!m.location||!m.lat||!m.lng){alert("Please fill required fields");return}p(!0);const fe={...m,lat:parseFloat(m.lat),lng:parseFloat(m.lng)};try{const De=g?`${Tt}/cards/${g.id}`:`${Tt}/cards`,He=await fetch(De,{method:g?"PUT":"POST",headers:{"Content-Type":"application/json",...ue()},body:JSON.stringify(fe)});if(He.ok)we(),G();else{const je=await He.json();alert(je.error||"Save failed")}}catch{alert("Save failed")}p(!1)},Be=async O=>{if(confirm("Delete this member?"))try{await fetch(`${Tt}/cards/${O}`,{method:"DELETE",headers:ue()}),G(),(g==null?void 0:g.id)===O&&we()}catch{alert("Delete failed")}},Ne=()=>{$({name:"",color:"#9333ea",memberIds:[]}),q(null)},Le=O=>{q(O),$({name:O.name||"",color:O.color||"#9333ea",memberIds:O.memberIds||[]})},Ce=O=>{$(fe=>{const De=fe.memberIds.includes(O)?fe.memberIds.filter(ze=>ze!==O):[...fe.memberIds,O];return{...fe,memberIds:De}})},L=async O=>{if(O.preventDefault(),!oe.name){alert("Please enter a group name");return}z(!0);try{const fe=M?`${Tt}/groups/${M.id}`:`${Tt}/groups`,ze=await fetch(fe,{method:M?"PUT":"POST",headers:{"Content-Type":"application/json",...ue()},body:JSON.stringify(oe)});if(ze.ok)Ne(),E(),U({type:"success",message:M?"Group updated":"Group created"}),setTimeout(()=>U(null),3e3);else{const He=await ze.json();alert(He.error||"Save failed")}}catch{alert("Save failed")}z(!1)},Se=async O=>{if(confirm("Delete this group?"))try{await fetch(`${Tt}/groups/${O}`,{method:"DELETE",headers:ue()}),E(),(M==null?void 0:M.id)===O&&Ne(),U({type:"success",message:"Group deleted"}),setTimeout(()=>U(null),3e3)}catch{alert("Delete failed")}},[Oe,be]=me.useState("all"),ce=()=>{const O=window.location.origin+"/anking-globe/",fe=new URLSearchParams({embed:"true"});return Oe&&Oe!=="all"&&fe.set("group",Oe),`${O}?${fe.toString()}`},F=()=>{if(Oe==="all")return"All Members";const O=N.find(fe=>fe.id===Oe);return O?O.name:"All Members"},Ee=()=>`<iframe 
  src="${ce()}" 
  width="100%" 
  height="${ge}" 
  frameborder="0" 
  allow="accelerometer; gyroscope"
  style="border-radius: 12px; overflow: hidden;"
></iframe>`,Ae=()=>{navigator.clipboard.writeText(Ee()),K(!0),setTimeout(()=>K(!1),2e3)};return e==="checking"?T.jsx("div",{className:"admin-page",children:T.jsx("div",{className:"admin-auth",children:T.jsx("div",{className:"auth-loading",children:"Checking authentication..."})})}):e==="error"?T.jsx("div",{className:"admin-page",children:T.jsxs("div",{className:"admin-auth",children:[T.jsxs("button",{className:"back-button",onClick:t,children:[T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),T.jsxs("div",{className:"auth-card error",children:[T.jsx("div",{className:"error-icon",children:"❌"}),T.jsx("h1",{children:"Authentication Error"}),T.jsx("button",{onClick:Ie,children:"Try Again"})]})]})}):e==="none"?T.jsx("div",{className:"admin-page",children:T.jsxs("div",{className:"admin-auth",children:[T.jsxs("button",{className:"back-button",onClick:t,children:[T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),T.jsxs("div",{className:"auth-card",children:[T.jsx("h1",{children:"Admin Access"}),T.jsx("p",{children:"Sign in with Google to request access."}),T.jsxs("button",{className:"google-sign-in-btn",onClick:ye,children:[T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[T.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),T.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),T.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),T.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),T.jsx("p",{className:"auth-note",children:"Admins will be notified to approve your request."})]})]})}):e==="pending"?T.jsx("div",{className:"admin-page",children:T.jsxs("div",{className:"admin-auth",children:[T.jsxs("button",{className:"back-button",onClick:t,children:[T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),T.jsxs("div",{className:"auth-card pending",children:[T.jsx("div",{className:"pending-icon",children:"⏳"}),T.jsx("h1",{children:"Access Pending"}),s&&T.jsxs("div",{className:"pending-user-info",children:[s.picture&&T.jsx("img",{src:s.picture,alt:"",className:"pending-avatar"}),T.jsx("p",{children:T.jsx("strong",{children:s.username})}),T.jsx("p",{children:s.email})]}),T.jsx("p",{children:"An admin has been notified and will review your request."}),T.jsxs("button",{className:"google-sign-in-btn",onClick:Ie,children:[T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),T.jsx("polyline",{points:"16 17 21 12 16 7"}),T.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Use another account"]})]})]})}):T.jsxs("div",{className:"admin-page",children:[T.jsxs("div",{className:"admin-header",children:[T.jsxs("button",{className:"back-button",onClick:t,children:[T.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:T.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),T.jsx("h1",{children:"Member Management"}),T.jsxs("div",{className:"admin-user",children:[(s==null?void 0:s.picture)&&T.jsx("img",{src:s.picture,alt:"",className:"user-avatar"}),T.jsx("span",{children:(s==null?void 0:s.username)||(s==null?void 0:s.email)}),i&&T.jsx("span",{className:"admin-badge",children:"Admin"}),i&&T.jsxs("button",{className:`user-mgmt-btn ${Q?"active":""}`,onClick:()=>{J(!Q),X()},children:[T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),T.jsx("circle",{cx:"9",cy:"7",r:"4"}),T.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),T.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Users",V.length>0&&T.jsx("span",{className:"pending-count",children:V.length})]}),T.jsxs("button",{className:"embed-btn",onClick:()=>D(!0),children:[T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("polyline",{points:"16 18 22 12 16 6"}),T.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"Embed"]}),T.jsx("button",{className:"logout-btn",onClick:Ie,children:"Sign Out"})]})]}),i&&Q&&T.jsxs("div",{className:"user-management-panel",children:[T.jsxs("div",{className:"user-section",children:[T.jsxs("h3",{children:["Pending (",V.length,")"]}),V.length===0?T.jsx("p",{className:"no-users",children:"No pending requests"}):T.jsx("ul",{children:V.map(O=>T.jsxs("li",{children:[T.jsxs("div",{className:"user-info",children:[O.picture&&T.jsx("img",{src:O.picture,alt:"",className:"list-avatar"}),T.jsxs("div",{children:[T.jsx("span",{className:"user-name",children:O.username}),T.jsx("span",{className:"user-email",children:O.email})]})]}),T.jsxs("div",{className:"user-actions",children:[T.jsx("button",{className:"approve",onClick:()=>{console.log("clicked"),Te(O.email)},children:"Approve"}),T.jsx("button",{className:"deny",onClick:()=>Me(O.email),children:"Deny"})]})]},O.email))})]}),T.jsxs("div",{className:"user-section",children:[T.jsxs("h3",{children:["Approved (",pe.length,")"]}),T.jsx("ul",{children:pe.map(O=>T.jsxs("li",{children:[T.jsxs("div",{className:"user-info",children:[O.picture&&T.jsx("img",{src:O.picture,alt:"",className:"list-avatar"}),T.jsxs("div",{children:[T.jsx("span",{className:"user-name",children:O.username||"Unknown"}),T.jsx("span",{className:"user-email",children:O.email})]})]}),T.jsx("button",{className:"revoke",onClick:()=>H(O.email),children:"Revoke"})]},O.email))})]})]}),ie&&T.jsx("div",{className:"embed-modal-overlay",onClick:()=>D(!1),children:T.jsxs("div",{className:"embed-modal",onClick:O=>O.stopPropagation(),children:[T.jsx("button",{className:"embed-modal-close",onClick:()=>D(!1),children:"×"}),T.jsx("h2",{children:"🔗 Embed Globe"}),T.jsxs("p",{className:"embed-description",children:["Embed the ",T.jsx("strong",{children:"live globe"})," on any website. It shows real-time data, with a toggle button to show/hide all cards."]}),T.jsxs("div",{className:"embed-setting",children:[T.jsx("label",{children:"Group to display:"}),T.jsxs("select",{value:Oe,onChange:O=>be(O.target.value),className:"embed-group-select",children:[T.jsx("option",{value:"all",children:"All Members"}),N.map(O=>T.jsx("option",{value:O.id,children:O.name},O.id))]})]}),T.jsxs("div",{className:"embed-setting",children:[T.jsx("label",{children:"Height:"}),T.jsxs("div",{className:"embed-height-input",children:[T.jsx("input",{type:"number",value:ge,onChange:O=>xe(parseInt(O.target.value)||500),min:"300",max:"1000"}),T.jsx("span",{children:"px"})]})]}),T.jsx("div",{className:"embed-info",children:T.jsxs("span",{children:["📍 Footer will show: ",T.jsx("strong",{children:F()})]})}),T.jsxs("div",{className:"embed-preview",children:[T.jsx("div",{className:"embed-preview-header",children:T.jsx("span",{children:"iframe Code"})}),T.jsx("pre",{children:Ee()})]}),T.jsxs("div",{className:"embed-actions",children:[T.jsx("button",{className:"embed-copy-btn",onClick:Ae,children:Y?"✓ Copied!":"📋 Copy Embed Code"}),T.jsx("a",{className:"embed-preview-btn",href:ce(),target:"_blank",rel:"noopener noreferrer",children:"👁 Preview Embed"})]}),T.jsxs("div",{className:"embed-instructions",children:[T.jsx("h4",{children:"How to use:"}),T.jsxs("ul",{children:[T.jsxs("li",{children:[T.jsx("strong",{children:"Discourse:"})," Paste in an HTML block"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Wix:"}),' Add "Embed HTML" element']}),T.jsxs("li",{children:[T.jsx("strong",{children:"WordPress:"}),' Use "Custom HTML" block']})]}),T.jsx("p",{className:"embed-note",children:"✅ Live data - updates automatically!"})]})]})}),T.jsxs("div",{className:"admin-tabs",children:[T.jsxs("button",{className:`admin-tab ${c==="members"?"active":""}`,onClick:()=>d("members"),children:[T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),T.jsx("circle",{cx:"9",cy:"7",r:"4"}),T.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),T.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Add Members"]}),T.jsxs("button",{className:`admin-tab ${c==="groups"?"active":""}`,onClick:()=>d("groups"),children:[T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),T.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Subgroups"]})]}),c==="members"&&T.jsxs("div",{className:"admin-content",children:[T.jsxs("div",{className:"admin-form-panel",children:[T.jsx("h2",{children:g?"Edit Member":"Add New Member"}),T.jsxs("form",{onSubmit:ke,children:[T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Name *"}),T.jsx("input",{type:"text",value:m.name,onChange:O=>de("name",O.target.value),placeholder:"John Doe",required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Title / Role"}),T.jsx("input",{type:"text",value:m.title,onChange:O=>de("title",O.target.value),placeholder:"Medical Student..."})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"University (type to search)"}),T.jsx("input",{type:"text",value:m.university,onChange:O=>de("university",O.target.value),placeholder:"e.g. Harvard Medical School"}),b&&m.university&&T.jsx("div",{className:"geocode-loading",children:"Searching..."}),C.length>0&&m.university&&T.jsx("ul",{className:"geocode-results",children:C.map((O,fe)=>T.jsxs("li",{onClick:()=>ae(O),children:[T.jsx("span",{className:"result-name",children:O.display_name}),T.jsxs("span",{className:"result-coords",children:[O.lat.toFixed(4),", ",O.lng.toFixed(4)]})]},fe))})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Location * (City, Region, Country)"}),T.jsx("input",{type:"text",value:m.location,onChange:O=>de("location",O.target.value),placeholder:"Boston, MA, USA",required:!0}),b&&!m.university&&T.jsx("div",{className:"geocode-loading",children:"Searching..."}),C.length>0&&!m.university&&T.jsx("ul",{className:"geocode-results",children:C.map((O,fe)=>T.jsxs("li",{onClick:()=>ae(O),children:[T.jsx("span",{className:"result-name",children:O.display_name}),T.jsxs("span",{className:"result-coords",children:[O.lat.toFixed(4),", ",O.lng.toFixed(4)]})]},fe))})]}),T.jsxs("div",{className:"form-row",children:[T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Latitude *"}),T.jsx("input",{type:"number",step:"any",value:m.lat,onChange:O=>de("lat",O.target.value),placeholder:"42.3601",required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Longitude *"}),T.jsx("input",{type:"number",step:"any",value:m.lng,onChange:O=>de("lng",O.target.value),placeholder:"-71.0589",required:!0})]})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Profile Image"}),T.jsxs("div",{className:"image-input-row",children:[T.jsxs("select",{value:m.image,onChange:O=>de("image",O.target.value),children:[T.jsx("option",{value:"",children:"No image"}),w.map(O=>T.jsx("option",{value:O,children:O},O))]}),T.jsx("input",{type:"file",ref:Ue,onChange:_e,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),T.jsx("button",{type:"button",className:"upload-btn",onClick:()=>{var O;return(O=Ue.current)==null?void 0:O.click()},disabled:u,children:u?"Uploading...":"📤 Upload"})]}),m.image&&T.jsx("div",{className:"image-preview",children:T.jsx("img",{src:n_(m.image),alt:"Preview"})})]}),T.jsxs("div",{className:"form-actions",children:[T.jsx("button",{type:"submit",className:"primary",disabled:_,children:_?"Saving...":g?"Update":"Add Member"}),g&&T.jsx("button",{type:"button",className:"secondary",onClick:we,children:"Cancel"})]})]})]}),T.jsxs("div",{className:"admin-table-panel",children:[T.jsx("div",{className:"table-header",children:T.jsxs("h2",{children:["Members (",h.length,")"]})}),T.jsx("div",{className:"table-container",children:T.jsxs("table",{children:[T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx("th",{children:"Image"}),T.jsx("th",{children:"Name"}),T.jsx("th",{children:"Title"}),T.jsx("th",{children:"University"}),T.jsx("th",{children:"Location"}),T.jsx("th",{children:"Lat"}),T.jsx("th",{children:"Lng"}),T.jsx("th",{children:"Actions"})]})}),T.jsxs("tbody",{children:[h.map(O=>{var fe,De;return T.jsxs("tr",{className:(g==null?void 0:g.id)===O.id?"selected":"",onClick:()=>ee(O),children:[T.jsx("td",{className:"img-cell",children:O.image?T.jsx("img",{src:n_(O.image),alt:O.name}):T.jsx("div",{className:"no-image",children:"?"})}),T.jsx("td",{className:"name-cell",children:O.name}),T.jsx("td",{children:O.title||"-"}),T.jsx("td",{className:"uni-cell",children:O.university||"-"}),T.jsx("td",{className:"location-cell",children:O.location}),T.jsx("td",{className:"coord-cell",children:(fe=O.lat)==null?void 0:fe.toFixed(2)}),T.jsx("td",{className:"coord-cell",children:(De=O.lng)==null?void 0:De.toFixed(2)}),T.jsxs("td",{className:"actions-cell",children:[T.jsx("button",{className:"edit-btn",onClick:ze=>{ze.stopPropagation(),ee(O)},children:"Edit"}),T.jsx("button",{className:"delete-btn",onClick:ze=>{ze.stopPropagation(),Be(O.id)},children:"Delete"})]})]},O.id)}),h.length===0&&T.jsx("tr",{children:T.jsx("td",{colSpan:"8",className:"empty-row",children:"No members yet."})})]})]})})]})]}),c==="groups"&&T.jsxs("div",{className:"admin-content",children:[T.jsxs("div",{className:"admin-form-panel",children:[T.jsx("h2",{children:M?"Edit Subgroup":"Create Subgroup"}),T.jsxs("form",{onSubmit:L,children:[T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Group Name *"}),T.jsx("input",{type:"text",value:oe.name,onChange:O=>$(fe=>({...fe,name:O.target.value})),placeholder:"e.g. Editors, Reviewers, US Team",required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsxs("label",{children:["Members (",oe.memberIds.length," selected)"]}),T.jsxs("div",{className:"member-select-list",children:[h.map(O=>T.jsxs("label",{className:"member-select-item",children:[T.jsx("input",{type:"checkbox",checked:oe.memberIds.includes(O.id),onChange:()=>Ce(O.id)}),T.jsx("span",{className:"member-select-name",children:O.name}),T.jsx("span",{className:"member-select-location",children:O.location})]},O.id)),h.length===0&&T.jsx("p",{className:"no-members",children:"No members available. Add members first."})]})]}),T.jsxs("div",{className:"form-actions",children:[T.jsx("button",{type:"submit",className:"primary",disabled:ve,children:ve?"Saving...":M?"Update Group":"Create Group"}),M&&T.jsx("button",{type:"button",className:"secondary",onClick:Ne,children:"Cancel"})]})]})]}),T.jsxs("div",{className:"admin-table-panel",children:[T.jsx("div",{className:"table-header",children:T.jsxs("h2",{children:["Subgroups (",N.length,")"]})}),T.jsx("div",{className:"table-container",children:T.jsxs("table",{children:[T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx("th",{children:"Name"}),T.jsx("th",{children:"Members"}),T.jsx("th",{children:"Actions"})]})}),T.jsxs("tbody",{children:[N.map(O=>{var fe,De;return T.jsxs("tr",{className:(M==null?void 0:M.id)===O.id?"selected":"",onClick:()=>Le(O),children:[T.jsx("td",{className:"name-cell",children:O.name}),T.jsxs("td",{children:[T.jsx("span",{className:"member-count",children:((fe=O.memberIds)==null?void 0:fe.length)||0}),((De=O.memberIds)==null?void 0:De.length)>0&&T.jsxs("span",{className:"member-preview",children:[O.memberIds.slice(0,3).map(ze=>{const He=h.find(je=>je.id===ze);return He?He.name.split(" ")[0]:""}).filter(Boolean).join(", "),O.memberIds.length>3&&` +${O.memberIds.length-3}`]})]}),T.jsxs("td",{className:"actions-cell",children:[T.jsx("button",{className:"edit-btn",onClick:ze=>{ze.stopPropagation(),Le(O)},children:"Edit"}),T.jsx("button",{className:"delete-btn",onClick:ze=>{ze.stopPropagation(),Se(O.id)},children:"Delete"})]})]},O.id)}),N.length===0&&T.jsx("tr",{children:T.jsx("td",{colSpan:"3",className:"empty-row",children:"No subgroups yet. Create one to organize members."})})]})]})})]})]}),le&&T.jsxs("div",{className:`toast-notification ${le.type}`,children:[le.type==="success"?"✓":"ℹ"," ",le.message]})]})}function jL(){const[t,e]=me.useState([]),[n,i]=me.useState(!0),[r,s]=me.useState(null),o=me.useCallback(async()=>{try{i(!0);const a=await VL();e(a),s(null)}catch(a){console.error("Failed to load cards:",a),s(a.message)}finally{i(!1)}},[]);return me.useEffect(()=>{o()},[o]),{cards:t,loading:n,error:r,refetch:o}}function XL(){const[t,e]=me.useState([]),[n,i]=me.useState(!0),[r,s]=me.useState(null),o=me.useCallback(async()=>{try{i(!0);const a=await fetch(`${Tt}/groups`);if(!a.ok)throw new Error("Failed to fetch groups");const l=await a.json();e(l),s(null)}catch(a){s(a.message)}finally{i(!1)}},[]);return me.useEffect(()=>{o()},[o]),{groups:t,loading:n,error:r,refetch:o}}console.log("APP VERSION 34 LOADED - 3D CARDS");function $L(){const[t,e]=me.useState("globe"),{cards:n,loading:i,error:r,refetch:s}=jL(),{groups:o,refetch:a}=XL(),[l,c]=me.useState([]),[d,h]=me.useState(null),[f,g]=me.useState(!0),[x,_]=me.useState({}),[p,u]=me.useState(null),v=me.useMemo(()=>new URLSearchParams(window.location.search),[]),m=v.get("embed")==="true",S=v.get("group"),C=me.useMemo(()=>!S||S==="all"?null:o.find(M=>M.id===S),[S,o]),A=me.useMemo(()=>!S||S==="all"?"All Members":(C==null?void 0:C.name)||"All Members",[S,C]),[b,B]=me.useState(!1),[w,R]=me.useState(null),[V,W]=me.useState(!1),pe=me.useRef(null),k=me.useCallback(()=>{g(!1),pe.current&&clearTimeout(pe.current),pe.current=setTimeout(()=>g(!0),5e3)},[]);me.useEffect(()=>()=>{pe.current&&clearTimeout(pe.current)},[]),me.useEffect(()=>{if(!m||V||!n||n.length===0)return;let M=S&&S!=="all"&&C?n.filter(q=>{var oe;return(oe=C.memberIds)==null?void 0:oe.includes(q.id)}):n;u(new Set(M.map(q=>q.id))),W(!0)},[m,V,n,S,C]),me.useEffect(()=>{const M=()=>{var ve;let q=((ve=window.location.hash)==null?void 0:ve.length)>1?new URLSearchParams(window.location.hash.slice(1)):new URLSearchParams(window.location.search);const oe=q.get("notification"),$=q.get("message");oe&&$&&(R({type:oe,message:decodeURIComponent($)}),window.history.replaceState({},"","/anking-globe/"),setTimeout(()=>R(null),4e3))};return M(),window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[]);const Q=me.useCallback(M=>{u(q=>{if(q===null){const $=new Set(n.map(ve=>ve.id));return $.delete(M),$}const oe=new Set(q);return oe.has(M)?(oe.delete(M),c($=>$.filter(ve=>ve!==M)),d===M&&h(null)):oe.add(M),oe.size===n.length?null:oe})},[n,d]),J=me.useCallback(M=>{k(),c(q=>q.includes(M.id)?(d===M.id&&h(null),q.filter(oe=>oe!==M.id)):(h(M.id),[...q,M.id]))},[k,d]),ie=me.useCallback(M=>{c(q=>q.filter(oe=>oe!==M)),d===M&&h(null)},[d]),D=me.useCallback(M=>{h(q=>q===M?null:M)},[]),Y=me.useCallback(M=>{k(),c(q=>q.includes(M)?(d===M&&h(null),q.filter(oe=>oe!==M)):(h(M),[...q,M]))},[d,k]),K=me.useCallback(()=>{k();const M=p===null?n.map(q=>q.id):Array.from(p);c(M)},[n,p,k]),ge=me.useCallback(()=>{c([]),h(null)},[]),xe=me.useCallback(()=>{b?(c([]),h(null)):c(n.map(M=>M.id)),B(!b),k()},[b,n,k]),le=me.useCallback(M=>{_(M)},[]),U=me.useCallback(()=>{k()},[k]),N=me.useCallback(()=>{h(null)},[]);if(i)return T.jsx(CR,{});if(r)return T.jsxs("div",{className:"error-screen",children:["Error: ",r]});if(t==="admin")return T.jsx(WL,{onBack:()=>{e("globe"),s(),a()}});const P=n?new Set(n.map(M=>{var q,oe;return(oe=(q=M.location)==null?void 0:q.split(",").pop())==null?void 0:oe.trim()})).size:0;return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:`globe-container ${m?"embed-mode":""}`,children:[T.jsx(AR,{cards:n||[],selectedCards:l,autoRotate:f,onMarkerClick:J,onMarkerVisibilityChange:le,onInteraction:U,focusCardId:d,onFocusLost:N,visibleCardIds:p,onCloseCard:ie,onFocusCard:D}),!m&&T.jsx(bR,{cards:n,groups:o,selectedCards:l,visibleCardIds:p,autoRotate:f,onAutoRotateChange:g,onToggleCard:Y,onToggleCardVisibility:Q,onOpenAll:K,onCloseAll:ge,onManageClick:()=>e("admin"),isEmbedMode:m}),T.jsx("div",{className:`globe-logo-container ${m?"embed":""}`,children:T.jsx("img",{src:"/anking-globe/logo.png",alt:"Logo",className:"globe-logo"})}),T.jsx("div",{className:"globe-footer",children:m?A:"AnKing Step Deck Maintainers · 2025"}),T.jsxs("div",{className:"globe-stats",children:[T.jsxs("div",{className:"stat-item",children:[T.jsx("div",{className:"stat-value",children:m?(p==null?void 0:p.size)??((n==null?void 0:n.length)||0):(n==null?void 0:n.length)||0}),T.jsx("div",{className:"stat-label",children:"Active Members"})]}),T.jsxs("div",{className:"stat-item",children:[T.jsx("div",{className:"stat-value",children:P}),T.jsx("div",{className:"stat-label",children:"Countries"})]})]}),T.jsxs("div",{className:"instructions",children:[T.jsx("kbd",{children:"Drag"})," to rotate · ",T.jsx("kbd",{children:"Scroll"})," to zoom",T.jsx("br",{}),"Click markers to toggle cards"]}),m&&T.jsx("button",{className:"embed-toggle-btn",onClick:xe,children:b?T.jsxs(T.Fragment,{children:[T.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),T.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]}):T.jsxs(T.Fragment,{children:[T.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),T.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]})})]}),w&&T.jsxs("div",{className:`toast-notification ${w.type}`,children:[w.type==="success"?"✓":"ℹ"," ",w.message]})]})}qd.createRoot(document.getElementById("root")).render(T.jsx(pS.StrictMode,{children:T.jsx($L,{})}));
