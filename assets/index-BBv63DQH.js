(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Gx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qv={exports:{}},$c={},Yv={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),jx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),$x=Symbol.for("react.profiler"),qx=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Jx=Symbol.for("react.suspense"),Zx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Mp=Symbol.iterator;function eS(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jv=Object.assign,Zv={};function So(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Kv}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qv(){}Qv.prototype=So.prototype;function nf(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Kv}var rf=nf.prototype=new Qv;rf.constructor=nf;Jv(rf,So.prototype);rf.isPureReactComponent=!0;var Tp=Array.isArray,e_=Object.prototype.hasOwnProperty,sf={current:null},t_={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e_.call(e,i)&&!t_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:sf.current}}function tS(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function nS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nS(""+t.key):e.toString(36)}function Hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case Wx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wu(o,0):i,Tp(r)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),Hl(r,e,n,"",function(c){return c})):r!=null&&(of(r)&&(r=tS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wu(s,a);o+=Hl(s,e,n,l,r)}else if(l=eS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wu(s,a++),o+=Hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Vl={transition:null},rS={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:sf};function i_(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=So;et.Fragment=jx;et.Profiler=$x;et.PureComponent=nf;et.StrictMode=Xx;et.Suspense=Jx;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;et.act=i_;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e_.call(e,l)&&!t_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};et.createContext=function(t){return t={$$typeof:Yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qx,_context:t},t.Consumer=t};et.createElement=n_;et.createFactory=function(t){var e=n_.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Kx,render:t}};et.isValidElement=of;et.lazy=function(t){return{$$typeof:Qx,_payload:{_status:-1,_result:t},_init:iS}};et.memo=function(t,e){return{$$typeof:Zx,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};et.unstable_act=i_;et.useCallback=function(t,e){return nn.current.useCallback(t,e)};et.useContext=function(t){return nn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};et.useEffect=function(t,e){return nn.current.useEffect(t,e)};et.useId=function(){return nn.current.useId()};et.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return nn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};et.useRef=function(t){return nn.current.useRef(t)};et.useState=function(t){return nn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return nn.current.useTransition()};et.version="18.3.1";Yv.exports=et;var xe=Yv.exports;const sS=Gx(xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=xe,aS=Symbol.for("react.element"),lS=Symbol.for("react.fragment"),cS=Object.prototype.hasOwnProperty,uS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dS={key:!0,ref:!0,__self:!0,__source:!0};function r_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cS.call(e,i)&&!dS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aS,type:t,key:s,ref:o,props:r,_owner:uS.current}}$c.Fragment=lS;$c.jsx=r_;$c.jsxs=r_;qv.exports=$c;var P=qv.exports,Vd={},s_={exports:{}},En={},o_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var W=U.length;U.push(j);e:for(;0<W;){var ee=W-1>>>1,ue=U[ee];if(0<r(ue,j))U[ee]=j,U[W]=ue,W=ee;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],W=U.pop();if(W!==j){U[0]=W;e:for(var ee=0,ue=U.length,oe=ue>>>1;ee<oe;){var O=2*(ee+1)-1,N=U[O],I=O+1,A=U[I];if(0>r(N,W))I<ue&&0>r(A,N)?(U[ee]=A,U[I]=W,ee=I):(U[ee]=N,U[O]=W,ee=O);else if(I<ue&&0>r(A,W))U[ee]=A,U[I]=W,ee=I;else break e}}return j}function r(U,j){var W=U.sortIndex-j.sortIndex;return W!==0?W:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,v=!1,y=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(U){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=U)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function E(U){if(x=!1,m(U),!y)if(n(l)!==null)y=!0,Q(R);else{var j=n(c);j!==null&&ie(E,j.startTime-U)}}function R(U,j){y=!1,x&&(x=!1,u(B),B=-1),v=!0;var W=f;try{for(m(j),h=n(l);h!==null&&(!(h.expirationTime>j)||U&&!te());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var ue=ee(h.expirationTime<=j);j=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(l)&&i(l),m(j)}else i(l);h=n(l)}if(h!==null)var oe=!0;else{var O=n(c);O!==null&&ie(E,O.startTime-j),oe=!1}return oe}finally{h=null,f=W,v=!1}}var w=!1,T=null,B=-1,M=5,b=-1;function te(){return!(t.unstable_now()-b<M)}function $(){if(T!==null){var U=t.unstable_now();b=U;var j=!0;try{j=T(!0,U)}finally{j?me():(w=!1,T=null)}}else w=!1}var me;if(typeof _=="function")me=function(){_($)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,J=z.port2;z.port1.onmessage=$,me=function(){J.postMessage(null)}}else me=function(){p($,0)};function Q(U){T=U,w||(w=!0,me())}function ie(U,j){B=p(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,Q(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var W=f;f=j;try{return U()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=f;f=U;try{return j()}finally{f=W}},t.unstable_scheduleCallback=function(U,j,W){var ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,U){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=W+ue,U={id:d++,callback:j,priorityLevel:U,startTime:W,expirationTime:ue,sortIndex:-1},W>ee?(U.sortIndex=W,e(c,U),n(l)===null&&U===n(c)&&(x?(u(B),B=-1):x=!0,ie(E,W-ee))):(U.sortIndex=ue,e(l,U),y||v||(y=!0,Q(R))),U},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(U){var j=f;return function(){var W=f;f=j;try{return U.apply(this,arguments)}finally{f=W}}}})(a_);o_.exports=a_;var hS=o_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=xe,Sn=hS;function we(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l_=new Set,ua={};function as(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(ua[t]=e,t=0;t<e.length;t++)l_.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,pS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},bp={};function mS(t){return Gd.call(bp,t)?!0:Gd.call(Ap,t)?!1:pS.test(t)?bp[t]=!0:(Ap[t]=!0,!1)}function gS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vS(t,e,n,i){if(e===null||typeof e>"u"||gS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,lf);Bt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,lf);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,lf);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vS(e,n,r,i)&&(n=null),i||r===null?mS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),c_=Symbol.for("react.provider"),u_=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),d_=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Au;function Wo(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var bu=!1;function Cu(t,e){if(!t||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function _S(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Cu(t.type,!1),t;case 11:return t=Cu(t.type.render,!1),t;case 1:return t=Cu(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ns:return"Portal";case Wd:return"Profiler";case uf:return"StrictMode";case jd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u_:return(t.displayName||"Context")+".Consumer";case c_:return(t._context.displayName||"Context")+".Provider";case df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function yS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xS(t){var e=h_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=xS(t))}function f_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=h_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p_(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function Yd(t,e){p_(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kd(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(we(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(we(92));if(jo(n)){if(1<n.length)throw Error(we(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function m_(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,v_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SS=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){SS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function __(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=__(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ES=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(ES[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(we(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(we(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(we(61))}if(e.style!=null&&typeof e.style!="object")throw Error(we(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,Ks=null,Js=null;function Np(t){if(t=Fa(t)){if(typeof nh!="function")throw Error(we(280));var e=t.stateNode;e&&(e=Zc(e),nh(t.stateNode,t.type,e))}}function x_(t){Ks?Js?Js.push(t):Js=[t]:Ks=t}function S_(){if(Ks){var t=Ks,e=Js;if(Js=Ks=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function E_(t,e){return t(e)}function M_(){}var Ru=!1;function T_(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return E_(t,e,n)}finally{Ru=!1,(Ks!==null||Js!==null)&&(M_(),S_())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(we(231,e,typeof n));return n}var ih=!1;if(Pi)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{ih=!1}function MS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Yo=!1,ac=null,lc=!1,rh=null,TS={onError:function(t){Yo=!0,ac=t}};function wS(t,e,n,i,r,s,o,a,l){Yo=!1,ac=null,MS.apply(TS,arguments)}function AS(t,e,n,i,r,s,o,a,l){if(wS.apply(this,arguments),Yo){if(Yo){var c=ac;Yo=!1,ac=null}else throw Error(we(198));lc||(lc=!0,rh=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(ls(t)!==t)throw Error(we(188))}function bS(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(we(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Dp(r),t;if(s===i)return Dp(r),e;s=s.sibling}throw Error(we(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(we(189))}}if(n.alternate!==i)throw Error(we(190))}if(n.tag!==3)throw Error(we(188));return n.stateNode.current===n?t:e}function A_(t){return t=bS(t),t!==null?b_(t):null}function b_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b_(t);if(e!==null)return e;t=t.sibling}return null}var C_=Sn.unstable_scheduleCallback,Up=Sn.unstable_cancelCallback,CS=Sn.unstable_shouldYield,RS=Sn.unstable_requestPaint,Et=Sn.unstable_now,PS=Sn.unstable_getCurrentPriorityLevel,pf=Sn.unstable_ImmediatePriority,R_=Sn.unstable_UserBlockingPriority,cc=Sn.unstable_NormalPriority,IS=Sn.unstable_LowPriority,P_=Sn.unstable_IdlePriority,qc=null,ni=null;function LS(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:US,NS=Math.log,DS=Math.LN2;function US(t){return t>>>=0,t===0?32:31-(NS(t)/DS|0)|0}var Qa=64,el=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Xo(a):(s&=o,s!==0&&(i=Xo(s)))}else o=n&~r,o!==0?i=Xo(o):s!==0&&(i=Xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function OS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=OS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I_(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function FS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function L_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N_,gf,D_,U_,O_,oh=!1,tl=[],or=null,ar=null,lr=null,fa=new Map,pa=new Map,Ji=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function zS(t,e,n,i,r){switch(e){case"focusin":return or=Lo(or,t,e,n,i,r),!0;case"dragenter":return ar=Lo(ar,t,e,n,i,r),!0;case"mouseover":return lr=Lo(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Lo(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Lo(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function k_(t){var e=Hr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=w_(n),e!==null){t.blockedOn=e,O_(t.priority,function(){D_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);th=i,n.target.dispatchEvent(i),th=null}else return e=Fa(n),e!==null&&gf(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){Gl(t)&&n.delete(e)}function HS(){oh=!1,or!==null&&Gl(or)&&(or=null),ar!==null&&Gl(ar)&&(ar=null),lr!==null&&Gl(lr)&&(lr=null),fa.forEach(kp),pa.forEach(kp)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,HS)))}function ma(t){function e(r){return No(r,t)}if(0<tl.length){No(tl[0],t);for(var n=1;n<tl.length;n++){var i=tl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&No(or,t),ar!==null&&No(ar,t),lr!==null&&No(lr,t),fa.forEach(e),pa.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)k_(n),n.blockedOn===null&&Ji.shift()}var Zs=Fi.ReactCurrentBatchConfig,dc=!0;function VS(t,e,n,i){var r=st,s=Zs.transition;Zs.transition=null;try{st=1,vf(t,e,n,i)}finally{st=r,Zs.transition=s}}function GS(t,e,n,i){var r=st,s=Zs.transition;Zs.transition=null;try{st=4,vf(t,e,n,i)}finally{st=r,Zs.transition=s}}function vf(t,e,n,i){if(dc){var r=ah(t,e,n,i);if(r===null)zu(t,e,i,hc,n),Op(t,i);else if(zS(r,t,e,n,i))i.stopPropagation();else if(Op(t,i),e&4&&-1<BS.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&N_(s),s=ah(t,e,n,i),s===null&&zu(t,e,i,hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(t,e,i,null,n)}}var hc=null;function ah(t,e,n,i){if(hc=null,t=ff(i),t=Hr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function F_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PS()){case pf:return 1;case R_:return 4;case cc:case IS:return 16;case P_:return 536870912;default:return 16}default:return 16}}var nr=null,_f=null,Wl=null;function B_(){if(Wl)return Wl;var t,e=_f,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Wl=r.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Fp(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:Fp,this.isPropagationStopped=Fp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=Mn(Eo),ka=vt({},Eo,{view:0,detail:0}),WS=Mn(ka),Iu,Lu,Do,Yc=vt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Iu=t.screenX-Do.screenX,Lu=t.screenY-Do.screenY):Lu=Iu=0,Do=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Bp=Mn(Yc),jS=vt({},Yc,{dataTransfer:0}),XS=Mn(jS),$S=vt({},ka,{relatedTarget:0}),Nu=Mn($S),qS=vt({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=Mn(qS),KS=vt({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JS=Mn(KS),ZS=vt({},Eo,{data:0}),zp=Mn(ZS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tE[t])?!!e[t]:!1}function xf(){return nE}var iE=vt({},ka,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rE=Mn(iE),sE=vt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Mn(sE),oE=vt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),aE=Mn(oE),lE=vt({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cE=Mn(lE),uE=vt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dE=Mn(uE),hE=[9,13,27,32],Sf=Pi&&"CompositionEvent"in window,Ko=null;Pi&&"documentMode"in document&&(Ko=document.documentMode);var fE=Pi&&"TextEvent"in window&&!Ko,z_=Pi&&(!Sf||Ko&&8<Ko&&11>=Ko),Vp=" ",Gp=!1;function H_(t,e){switch(t){case"keyup":return hE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function pE(t,e){switch(t){case"compositionend":return V_(e);case"keypress":return e.which!==32?null:(Gp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Gp?null:t;default:return null}}function mE(t,e){if(Us)return t==="compositionend"||!Sf&&H_(t,e)?(t=B_(),Wl=_f=nr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z_&&e.locale!=="ko"?null:e.data;default:return null}}var gE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gE[t.type]:e==="textarea"}function G_(t,e,n,i){x_(i),e=fc(e,"onChange"),0<e.length&&(n=new yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Jo=null,ga=null;function vE(t){e0(t,0)}function Kc(t){var e=Fs(t);if(f_(e))return t}function _E(t,e){if(t==="change")return e}var W_=!1;if(Pi){var Du;if(Pi){var Uu="oninput"in document;if(!Uu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Uu=typeof jp.oninput=="function"}Du=Uu}else Du=!1;W_=Du&&(!document.documentMode||9<document.documentMode)}function Xp(){Jo&&(Jo.detachEvent("onpropertychange",j_),ga=Jo=null)}function j_(t){if(t.propertyName==="value"&&Kc(ga)){var e=[];G_(e,ga,t,ff(t)),T_(vE,e)}}function yE(t,e,n){t==="focusin"?(Xp(),Jo=e,ga=n,Jo.attachEvent("onpropertychange",j_)):t==="focusout"&&Xp()}function xE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(ga)}function SE(t,e){if(t==="click")return Kc(e)}function EE(t,e){if(t==="input"||t==="change")return Kc(e)}function ME(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:ME;function va(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gd.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=$p(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$p(n)}}function X_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TE(t){var e=$_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X_(n.ownerDocument.documentElement,n)){if(i!==null&&Ef(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qp(n,s);var o=qp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wE=Pi&&"documentMode"in document&&11>=document.documentMode,Os=null,lh=null,Zo=null,ch=!1;function Yp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Os==null||Os!==oc(i)||(i=Os,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zo&&va(Zo,i)||(Zo=i,i=fc(lh,"onSelect"),0<i.length&&(e=new yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Ou={},q_={};Pi&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Jc(t){if(Ou[t])return Ou[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return Ou[t]=e[n];return t}var Y_=Jc("animationend"),K_=Jc("animationiteration"),J_=Jc("animationstart"),Z_=Jc("transitionend"),Q_=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Q_.set(t,e),as(e,[t])}for(var ku=0;ku<Kp.length;ku++){var Fu=Kp[ku],AE=Fu.toLowerCase(),bE=Fu[0].toUpperCase()+Fu.slice(1);Mr(AE,"on"+bE)}Mr(Y_,"onAnimationEnd");Mr(K_,"onAnimationIteration");Mr(J_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Z_,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CE=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,AS(i,e,void 0,t),t.currentTarget=null}function e0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}}}if(lc)throw t=rh,lc=!1,rh=null,t}function ct(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var i=t+"__bubble";n.has(i)||(t0(e,t,2,!1),n.add(i))}function Bu(t,e,n){var i=0;e&&(i|=4),t0(n,t,i,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[rl]){t[rl]=!0,l_.forEach(function(n){n!=="selectionchange"&&(CE.has(n)||Bu(n,!1,t),Bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Bu("selectionchange",!1,e))}}function t0(t,e,n,i){switch(F_(e)){case 1:var r=VS;break;case 4:r=GS;break;default:r=vf}n=r.bind(null,e,n,t),r=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}T_(function(){var c=s,d=ff(n),h=[];e:{var f=Q_.get(t);if(f!==void 0){var v=yf,y=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":v=rE;break;case"focusin":y="focus",v=Nu;break;case"focusout":y="blur",v=Nu;break;case"beforeblur":case"afterblur":v=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=aE;break;case Y_:case K_:case J_:v=YS;break;case Z_:v=cE;break;case"scroll":v=WS;break;case"wheel":v=dE;break;case"copy":case"cut":case"paste":v=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Hp}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,m;_!==null;){m=_;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,u!==null&&(E=ha(_,u),E!=null&&x.push(ya(_,E,m)))),p)break;_=_.return}0<x.length&&(f=new v(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==th&&(y=n.relatedTarget||n.fromElement)&&(Hr(y)||y[Ii]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Hr(y):null,y!==null&&(p=ls(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=Bp,E="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hp,E="onPointerLeave",u="onPointerEnter",_="pointer"),p=v==null?f:Fs(v),m=y==null?f:Fs(y),f=new x(E,_+"leave",v,n,d),f.target=p,f.relatedTarget=m,E=null,Hr(d)===c&&(x=new x(u,_+"enter",y,n,d),x.target=m,x.relatedTarget=p,E=x),p=E,v&&y)t:{for(x=v,u=y,_=0,m=x;m;m=hs(m))_++;for(m=0,E=u;E;E=hs(E))m++;for(;0<_-m;)x=hs(x),_--;for(;0<m-_;)u=hs(u),m--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=hs(x),u=hs(u)}x=null}else x=null;v!==null&&Zp(h,f,v,x,!1),y!==null&&p!==null&&Zp(h,p,y,x,!0)}}e:{if(f=c?Fs(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var R=_E;else if(Wp(f))if(W_)R=EE;else{R=xE;var w=yE}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=SE);if(R&&(R=R(t,c))){G_(h,R,n,d);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Kd(f,"number",f.value)}switch(w=c?Fs(c):window,t){case"focusin":(Wp(w)||w.contentEditable==="true")&&(Os=w,lh=c,Zo=null);break;case"focusout":Zo=lh=Os=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,Yp(h,n,d);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":Yp(h,n,d)}var T;if(Sf)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Us?H_(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(z_&&n.locale!=="ko"&&(Us||B!=="onCompositionStart"?B==="onCompositionEnd"&&Us&&(T=B_()):(nr=d,_f="value"in nr?nr.value:nr.textContent,Us=!0)),w=fc(c,B),0<w.length&&(B=new zp(B,t,null,n,d),h.push({event:B,listeners:w}),T?B.data=T:(T=V_(n),T!==null&&(B.data=T)))),(T=fE?pE(t,n):mE(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(d=new zp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}e0(h,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(n,s),l!=null&&o.unshift(ya(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(RE,`
`).replace(PE,"")}function sl(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(we(425))}function pc(){}var uh=null,dh=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,IE=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(NE)}:fh;function NE(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),ti="__reactFiber$"+Mo,xa="__reactProps$"+Mo,Ii="__reactContainer$"+Mo,ph="__reactEvents$"+Mo,DE="__reactListeners$"+Mo,UE="__reactHandles$"+Mo;function Hr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tm(t);t!==null;){if(n=t[ti])return n;t=tm(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[ti]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(we(33))}function Zc(t){return t[xa]||null}var mh=[],Bs=-1;function Tr(t){return{current:t}}function dt(t){0>Bs||(t.current=mh[Bs],mh[Bs]=null,Bs--)}function lt(t,e){Bs++,mh[Bs]=t.current,t.current=e}var Sr={},qt=Tr(Sr),dn=Tr(!1),Jr=Sr;function lo(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function mc(){dt(dn),dt(qt)}function nm(t,e,n){if(qt.current!==Sr)throw Error(we(168));lt(qt,e),lt(dn,n)}function n0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(we(108,yS(t)||"Unknown",r));return vt({},n,i)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Jr=qt.current,lt(qt,t),lt(dn,dn.current),!0}function im(t,e,n){var i=t.stateNode;if(!i)throw Error(we(169));n?(t=n0(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,dt(dn),dt(qt),lt(qt,t)):dt(dn),lt(dn,n)}var xi=null,Qc=!1,Vu=!1;function i0(t){xi===null?xi=[t]:xi.push(t)}function OE(t){Qc=!0,i0(t)}function wr(){if(!Vu&&xi!==null){Vu=!0;var t=0,e=st;try{var n=xi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Qc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),C_(pf,wr),r}finally{st=e,Vu=!1}}return null}var zs=[],Hs=0,vc=null,_c=0,bn=[],Cn=0,Zr=null,Ei=1,Mi="";function Ur(t,e){zs[Hs++]=_c,zs[Hs++]=vc,vc=t,_c=e}function r0(t,e,n){bn[Cn++]=Ei,bn[Cn++]=Mi,bn[Cn++]=Zr,Zr=t;var i=Ei;t=Mi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-qn(e)+r|n<<r|i,Mi=s+t}else Ei=1<<s|n<<r|i,Mi=t}function Mf(t){t.return!==null&&(Ur(t,1),r0(t,1,0))}function Tf(t){for(;t===vc;)vc=zs[--Hs],zs[Hs]=null,_c=zs[--Hs],zs[Hs]=null;for(;t===Zr;)Zr=bn[--Cn],bn[Cn]=null,Mi=bn[--Cn],bn[Cn]=null,Ei=bn[--Cn],bn[Cn]=null}var xn=null,yn=null,ht=!1,Gn=null;function s0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,yn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Ei,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,yn=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(ht){var e=yn;if(e){var n=e;if(!rm(t,e)){if(gh(t))throw Error(we(418));e=cr(n.nextSibling);var i=xn;e&&rm(t,e)?s0(i,n):(t.flags=t.flags&-4097|2,ht=!1,xn=t)}}else{if(gh(t))throw Error(we(418));t.flags=t.flags&-4097|2,ht=!1,xn=t}}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ol(t){if(t!==xn)return!1;if(!ht)return sm(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=yn)){if(gh(t))throw o0(),Error(we(418));for(;e;)s0(t,e),e=cr(e.nextSibling)}if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(we(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=xn?cr(t.stateNode.nextSibling):null;return!0}function o0(){for(var t=yn;t;)t=cr(t.nextSibling)}function co(){yn=xn=null,ht=!1}function wf(t){Gn===null?Gn=[t]:Gn.push(t)}var kE=Fi.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(we(309));var i=n.stateNode}if(!i)throw Error(we(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(we(284));if(!n._owner)throw Error(we(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(we(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function a0(t){function e(u,_){if(t){var m=u.deletions;m===null?(u.deletions=[_],u.flags|=16):m.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=fr(u,_),u.index=0,u.sibling=null,u}function s(u,_,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<_?(u.flags|=2,_):m):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,m,E){return _===null||_.tag!==6?(_=Yu(m,u.mode,E),_.return=u,_):(_=r(_,m),_.return=u,_)}function l(u,_,m,E){var R=m.type;return R===Ds?d(u,_,m.props.children,E,m.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&om(R)===_.type)?(E=r(_,m.props),E.ref=Uo(u,_,m),E.return=u,E):(E=Zl(m.type,m.key,m.props,null,u.mode,E),E.ref=Uo(u,_,m),E.return=u,E)}function c(u,_,m,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=Ku(m,u.mode,E),_.return=u,_):(_=r(_,m.children||[]),_.return=u,_)}function d(u,_,m,E,R){return _===null||_.tag!==7?(_=Xr(m,u.mode,E,R),_.return=u,_):(_=r(_,m),_.return=u,_)}function h(u,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yu(""+_,u.mode,m),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:return m=Zl(_.type,_.key,_.props,null,u.mode,m),m.ref=Uo(u,null,_),m.return=u,m;case Ns:return _=Ku(_,u.mode,m),_.return=u,_;case qi:var E=_._init;return h(u,E(_._payload),m)}if(jo(_)||Po(_))return _=Xr(_,u.mode,m,null),_.return=u,_;al(u,_)}return null}function f(u,_,m,E){var R=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(u,_,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ka:return m.key===R?l(u,_,m,E):null;case Ns:return m.key===R?c(u,_,m,E):null;case qi:return R=m._init,f(u,_,R(m._payload),E)}if(jo(m)||Po(m))return R!==null?null:d(u,_,m,E,null);al(u,m)}return null}function v(u,_,m,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(m)||null,a(_,u,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ka:return u=u.get(E.key===null?m:E.key)||null,l(_,u,E,R);case Ns:return u=u.get(E.key===null?m:E.key)||null,c(_,u,E,R);case qi:var w=E._init;return v(u,_,m,w(E._payload),R)}if(jo(E)||Po(E))return u=u.get(m)||null,d(_,u,E,R,null);al(_,E)}return null}function y(u,_,m,E){for(var R=null,w=null,T=_,B=_=0,M=null;T!==null&&B<m.length;B++){T.index>B?(M=T,T=null):M=T.sibling;var b=f(u,T,m[B],E);if(b===null){T===null&&(T=M);break}t&&T&&b.alternate===null&&e(u,T),_=s(b,_,B),w===null?R=b:w.sibling=b,w=b,T=M}if(B===m.length)return n(u,T),ht&&Ur(u,B),R;if(T===null){for(;B<m.length;B++)T=h(u,m[B],E),T!==null&&(_=s(T,_,B),w===null?R=T:w.sibling=T,w=T);return ht&&Ur(u,B),R}for(T=i(u,T);B<m.length;B++)M=v(T,u,B,m[B],E),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?B:M.key),_=s(M,_,B),w===null?R=M:w.sibling=M,w=M);return t&&T.forEach(function(te){return e(u,te)}),ht&&Ur(u,B),R}function x(u,_,m,E){var R=Po(m);if(typeof R!="function")throw Error(we(150));if(m=R.call(m),m==null)throw Error(we(151));for(var w=R=null,T=_,B=_=0,M=null,b=m.next();T!==null&&!b.done;B++,b=m.next()){T.index>B?(M=T,T=null):M=T.sibling;var te=f(u,T,b.value,E);if(te===null){T===null&&(T=M);break}t&&T&&te.alternate===null&&e(u,T),_=s(te,_,B),w===null?R=te:w.sibling=te,w=te,T=M}if(b.done)return n(u,T),ht&&Ur(u,B),R;if(T===null){for(;!b.done;B++,b=m.next())b=h(u,b.value,E),b!==null&&(_=s(b,_,B),w===null?R=b:w.sibling=b,w=b);return ht&&Ur(u,B),R}for(T=i(u,T);!b.done;B++,b=m.next())b=v(T,u,B,b.value,E),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?B:b.key),_=s(b,_,B),w===null?R=b:w.sibling=b,w=b);return t&&T.forEach(function($){return e(u,$)}),ht&&Ur(u,B),R}function p(u,_,m,E){if(typeof m=="object"&&m!==null&&m.type===Ds&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ka:e:{for(var R=m.key,w=_;w!==null;){if(w.key===R){if(R=m.type,R===Ds){if(w.tag===7){n(u,w.sibling),_=r(w,m.props.children),_.return=u,u=_;break e}}else if(w.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&om(R)===w.type){n(u,w.sibling),_=r(w,m.props),_.ref=Uo(u,w,m),_.return=u,u=_;break e}n(u,w);break}else e(u,w);w=w.sibling}m.type===Ds?(_=Xr(m.props.children,u.mode,E,m.key),_.return=u,u=_):(E=Zl(m.type,m.key,m.props,null,u.mode,E),E.ref=Uo(u,_,m),E.return=u,u=E)}return o(u);case Ns:e:{for(w=m.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(u,_.sibling),_=r(_,m.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Ku(m,u.mode,E),_.return=u,u=_}return o(u);case qi:return w=m._init,p(u,_,w(m._payload),E)}if(jo(m))return y(u,_,m,E);if(Po(m))return x(u,_,m,E);al(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,m),_.return=u,u=_):(n(u,_),_=Yu(m,u.mode,E),_.return=u,u=_),o(u)):n(u,_)}return p}var uo=a0(!0),l0=a0(!1),yc=Tr(null),xc=null,Vs=null,Af=null;function bf(){Af=Vs=xc=null}function Cf(t){var e=yc.current;dt(yc),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){xc=t,Af=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Af!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(xc===null)throw Error(we(308));Vs=t,xc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Vr=null;function Rf(t){Vr===null?Vr=[t]:Vr.push(t)}function c0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}function am(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sc(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(f=e,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(v,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(v,h,f):y,f==null)break e;h=vt({},h,f);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=h):d=d.next=v,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=h}}function lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(we(191,r));r.call(i)}}}var Ba={},ii=Tr(Ba),Sa=Tr(Ba),Ea=Tr(Ba);function Gr(t){if(t===Ba)throw Error(we(174));return t}function If(t,e){switch(lt(Ea,e),lt(Sa,t),lt(ii,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}dt(ii),lt(ii,e)}function ho(){dt(ii),dt(Sa),dt(Ea)}function d0(t){Gr(Ea.current);var e=Gr(ii.current),n=Zd(e,t.type);e!==n&&(lt(Sa,t),lt(ii,n))}function Lf(t){Sa.current===t&&(dt(ii),dt(Sa))}var pt=Tr(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function Nf(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var $l=Fi.ReactCurrentDispatcher,Wu=Fi.ReactCurrentBatchConfig,Qr=0,gt=null,At=null,Lt=null,Mc=!1,Qo=!1,Ma=0,FE=0;function Ht(){throw Error(we(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Uf(t,e,n,i,r,s){if(Qr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?VE:GE,t=n(i,r),Qo){s=0;do{if(Qo=!1,Ma=0,25<=s)throw Error(we(301));s+=1,Lt=At=null,e.updateQueue=null,$l.current=WE,t=n(i,r)}while(Qo)}if($l.current=Tc,e=At!==null&&At.next!==null,Qr=0,Lt=At=gt=null,Mc=!1,e)throw Error(we(300));return t}function Of(){var t=Ma!==0;return Ma=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function On(){if(At===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?gt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(we(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ta(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=On(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Qr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,gt.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=On(),n=e.queue;if(n===null)throw Error(we(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function h0(){}function f0(t,e){var n=gt,i=On(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,kf(g0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,wa(9,m0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(we(349));Qr&30||p0(n,e,r)}return r}function p0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m0(t,e,n,i){e.value=n,e.getSnapshot=i,v0(e)&&_0(t)}function g0(t,e,n){return n(function(){v0(e)&&_0(t)})}function v0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function _0(t){var e=Li(t,1);e!==null&&Yn(e,t,1,-1)}function cm(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=HE.bind(null,gt,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function y0(){return On().memoizedState}function ql(t,e,n,i){var r=Qn();gt.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=wa(e,n,s,i);return}}gt.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function um(t,e){return ql(8390656,8,t,e)}function kf(t,e){return eu(2048,8,t,e)}function x0(t,e){return eu(4,2,t,e)}function S0(t,e){return eu(4,4,t,e)}function E0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,E0.bind(null,e,t),n)}function Ff(){}function T0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function A0(t,e,n){return Qr&21?(Jn(n,e)||(n=I_(),gt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function BE(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{st=n,Wu.transition=i}}function b0(){return On().memoizedState}function zE(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},C0(t))R0(e,n);else if(n=c0(t,e,n,i),n!==null){var r=Qt();Yn(n,t,i,r),P0(n,e,i)}}function HE(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(C0(t))R0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c0(t,e,r,i),n!==null&&(r=Qt(),Yn(n,t,i,r),P0(n,e,i))}}function C0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function R0(t,e){Qo=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}var Tc={readContext:Un,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},VE={readContext:Un,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,E0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zE.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:cm,useDebugValue:Ff,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=cm(!1),e=t[0];return t=BE.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Qn();if(ht){if(n===void 0)throw Error(we(407));n=n()}else{if(n=e(),Ut===null)throw Error(we(349));Qr&30||p0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,um(g0.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,m0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Ut.identifierPrefix;if(ht){var n=Mi,i=Ei;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GE={readContext:Un,useCallback:T0,useContext:Un,useEffect:kf,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:S0,useMemo:w0,useReducer:ju,useRef:y0,useState:function(){return ju(Ta)},useDebugValue:Ff,useDeferredValue:function(t){var e=On();return A0(e,At.memoizedState,t)},useTransition:function(){var t=ju(Ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:h0,useSyncExternalStore:f0,useId:b0,unstable_isNewReconciler:!1},WE={readContext:Un,useCallback:T0,useContext:Un,useEffect:kf,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:S0,useMemo:w0,useReducer:Xu,useRef:y0,useState:function(){return Xu(Ta)},useDebugValue:Ff,useDeferredValue:function(t){var e=On();return At===null?e.memoizedState=t:A0(e,At.memoizedState,t)},useTransition:function(){var t=Xu(Ta)[0],e=On().memoizedState;return[t,e]},useMutableSource:h0,useSyncExternalStore:f0,useId:b0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=hr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Yn(e,t,r,i),Xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=hr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Yn(e,t,r,i),Xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=hr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(Yn(e,t,i,n),Xl(e,t,i))}};function dm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function I0(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=hn(e)?Jr:qt.current,i=e.contextTypes,s=(i=i!=null)?lo(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function xh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=hn(e)?Jr:qt.current,r.context=lo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e){try{var n="",i=e;do n+=_S(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jE=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ac||(Ac=!0,Ih=i),Sh(t,e)},n}function N0(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sM.bind(null,t,e,n),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var XE=Fi.ReactCurrentOwner,un=!1;function Jt(t,e,n,i){e.child=t===null?l0(e,null,n,i):uo(e,t.child,n,i)}function gm(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Uf(t,e,n,i,s,r),n=Of(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ht&&n&&Mf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function vm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,i,r)):(t=Zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Eh(t,e,n,i,r)}function U0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ws,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ws,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ws,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ws,_n),_n|=i;return Jt(t,e,r,n),e.child}function O0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,i,r){var s=hn(n)?Jr:qt.current;return s=lo(e,s),Qs(e,r),n=Uf(t,e,n,i,s,r),i=Of(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ht&&i&&Mf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function _m(t,e,n,i,r){if(hn(n)){var s=!0;gc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Yl(t,e),I0(e,n,i),xh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=hn(n)?Jr:qt.current,c=lo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&hm(e,o,i,c),Yi=!1;var f=e.memoizedState;o.state=f,Sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||dn.current||Yi?(typeof d=="function"&&(yh(e,n,d,i),l=e.memoizedState),(a=Yi||dm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=hn(n)?Jr:qt.current,l=lo(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&hm(e,o,i,l),Yi=!1,f=e.memoizedState,o.state=f,Sc(e,i,o,r);var y=e.memoizedState;a!==h||f!==y||dn.current||Yi?(typeof v=="function"&&(yh(e,n,v,i),y=e.memoizedState),(c=Yi||dm(e,n,c,i,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Mh(t,e,n,i,s,r)}function Mh(t,e,n,i,r,s){O0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&im(e,n,!1),Ni(t,e,s);i=e.stateNode,XE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&im(e,n,!0),e.child}function k0(t){var e=t.stateNode;e.pendingContext?nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(t,e.context,!1),If(t,e.containerInfo)}function ym(t,e,n,i,r){return co(),wf(r),e.flags|=256,Jt(t,e,n,i),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function F0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(pt,r&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=Th,t):Bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $E(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Th,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bf(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,i){return i!==null&&wf(i),uo(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $E(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(we(422))),ll(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=Th,s);if(!(e.mode&1))return ll(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(we(419)),i=$u(s,i,void 0),ll(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),Yn(i,t,r,-1))}return jf(),i=$u(Error(we(421))),ll(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=cr(r.nextSibling),xn=e,ht=!0,Gn=null,t!==null&&(bn[Cn++]=Ei,bn[Cn++]=Mi,bn[Cn++]=Zr,Ei=t.id,Mi=t.overflow,Zr=e),e=Bf(e,i.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_h(t.return,e,n)}function qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function B0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(we(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qE(t,e,n){switch(e.tag){case 3:k0(e),co();break;case 5:d0(e);break;case 1:hn(e.type)&&gc(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?F0(t,e,n):(lt(pt,pt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);lt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return B0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return Ni(t,e,n)}var z0,Ah,H0,V0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};H0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(ii.current);var s=null;switch(n){case"input":r=qd(t,r),i=qd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Jd(t,r),i=Jd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=pc)}Qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};V0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function YE(t,e,n){var i=e.pendingProps;switch(Tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return hn(e.type)&&mc(),Vt(e),null;case 3:return i=e.stateNode,ho(),dt(dn),dt(qt),Nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Dh(Gn),Gn=null))),Ah(t,e),Vt(e),null;case 5:Lf(e);var r=Gr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)H0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(we(166));return Vt(e),null}if(t=Gr(ii.current),ol(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[xa]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)ct($o[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Rp(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Ip(i,s),ct("invalid",i)}Qd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ja(i),Pp(i,s,!0);break;case"textarea":Ja(i),Lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[xa]=i,z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)ct($o[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Rp(t,i),r=qd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Ip(t,i),r=Jd(t,i),ct("invalid",t);break;default:r=i}Qd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?y_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&cf(t,s,l,o))}switch(n){case"input":Ja(t),Pp(t,i,!1);break;case"textarea":Ja(t),Lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)V0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(we(166));if(n=Gr(Ea.current),Gr(ii.current),ol(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Vt(e),null;case 13:if(dt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&yn!==null&&e.mode&1&&!(e.flags&128))o0(),co(),e.flags|=98560,s=!1;else if(s=ol(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(we(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(we(317));s[ti]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Gn!==null&&(Dh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?bt===0&&(bt=3):jf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return ho(),Ah(t,e),t===null&&_a(e.stateNode.containerInfo),Vt(e),null;case 10:return Cf(e.type._context),Vt(e),null;case 17:return hn(e.type)&&mc(),Vt(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>po&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ec(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Vt(e),null}else 2*Et()-s.renderingStartTime>po&&n!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=pt.current,lt(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(we(156,e.tag))}function KE(t,e){switch(Tf(e),e.tag){case 1:return hn(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),dt(dn),dt(qt),Nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(dt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(we(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(pt),null;case 4:return ho(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var cl=!1,jt=!1,JE=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function bh(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Sm=!1;function ZE(t,e){if(uh=dc,t=$_(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var v;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},dc=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,p=y.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(E){xt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return y=Sm,Sm=!1,y}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bh(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[xa],delete e[ph],delete e[DE],delete e[UE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var Ot=null,Vn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)j0(t,e,n),n=n.sibling}function j0(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:jt||Gs(n,e);case 6:var i=Ot,r=Vn;Ot=null,Hi(t,e,n),Ot=i,Vn=r,Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),ma(t)):Hu(Ot,n.stateNode));break;case 4:i=Ot,r=Vn,Ot=n.stateNode.containerInfo,Vn=!0,Hi(t,e,n),Ot=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!jt&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Hi(t,e,n),jt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JE),e.forEach(function(i){var r=aM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Vn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ot===null)throw Error(we(160));j0(s,o,r),Ot=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X0(e,t),e=e.sibling}function X0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Zn(t),i&4){try{ea(3,t,t.return),nu(3,t)}catch(x){xt(t,t.return,x)}try{ea(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:kn(e,t),Zn(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(kn(e,t),Zn(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p_(r,s),eh(a,o);var c=eh(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?y_(r,h):d==="dangerouslySetInnerHTML"?v_(r,h):d==="children"?da(r,h):cf(r,d,h,c)}switch(a){case"input":Yd(r,s);break;case"textarea":m_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ys(r,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(kn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(we(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(kn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:kn(e,t),Zn(t);break;case 13:kn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vf=Et())),i&4&&Mm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,kn(e,t),jt=c):kn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Oe=t,d=t.child;d!==null;){for(h=Oe=d;Oe!==null;){switch(f=Oe,v=f.child,f.tag){case 0:case 11:case 14:case 15:ea(4,f,f.return);break;case 1:Gs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:Gs(f,f.return);break;case 22:if(f.memoizedState!==null){wm(h);continue}}v!==null?(v.return=f,Oe=v):wm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=__("display",o))}catch(x){xt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){xt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Zn(t),i&4&&Mm(t);break;case 21:break;default:kn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var i=n;break e}n=n.return}throw Error(we(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=Em(t);Ph(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Em(t);Rh(t,a,o);break;default:throw Error(we(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){Oe=t,$0(t)}function $0(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var r=Oe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=cl;var c=jt;if(cl=o,(jt=l)&&!c)for(Oe=r;Oe!==null;)o=Oe,l=o.child,o.tag===22&&o.memoizedState!==null?Am(r):l!==null?(l.return=o,Oe=l):Am(r);for(;s!==null;)Oe=s,$0(s),s=s.sibling;Oe=r,cl=a,jt=c}Tm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Oe=s):Tm(t)}}function Tm(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}jt||e.flags&512&&Ch(e)}catch(f){xt(e,e.return,f)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function wm(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function Am(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Oe=a;break}Oe=e.return}}var eM=Math.ceil,wc=Fi.ReactCurrentDispatcher,zf=Fi.ReactCurrentOwner,Dn=Fi.ReactCurrentBatchConfig,nt=0,Ut=null,Tt=null,Ft=0,_n=0,Ws=Tr(0),bt=0,Aa=null,es=0,iu=0,Hf=0,ta=null,ln=null,Vf=0,po=1/0,yi=null,Ac=!1,Ih=null,dr=null,ul=!1,ir=null,bc=0,na=0,Lh=null,Kl=-1,Jl=0;function Qt(){return nt&6?Et():Kl!==-1?Kl:Kl=Et()}function hr(t){return t.mode&1?nt&2&&Ft!==0?Ft&-Ft:kE.transition!==null?(Jl===0&&(Jl=I_()),Jl):(t=st,t!==0||(t=window.event,t=t===void 0?16:F_(t.type)),t):1}function Yn(t,e,n,i){if(50<na)throw na=0,Lh=null,Error(we(185));Oa(t,n,i),(!(nt&2)||t!==Ut)&&(t===Ut&&(!(nt&2)&&(iu|=n),bt===4&&Zi(t,Ft)),fn(t,i),n===1&&nt===0&&!(e.mode&1)&&(po=Et()+500,Qc&&wr()))}function fn(t,e){var n=t.callbackNode;kS(t,e);var i=uc(t,t===Ut?Ft:0);if(i===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?OE(bm.bind(null,t)):i0(bm.bind(null,t)),LE(function(){!(nt&6)&&wr()}),n=null;else{switch(L_(i)){case 1:n=pf;break;case 4:n=R_;break;case 16:n=cc;break;case 536870912:n=P_;break;default:n=cc}n=ty(n,q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q0(t,e){if(Kl=-1,Jl=0,nt&6)throw Error(we(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=uc(t,t===Ut?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cc(t,i);else{e=i;var r=nt;nt|=2;var s=K0();(Ut!==t||Ft!==e)&&(yi=null,po=Et()+500,jr(t,e));do try{iM();break}catch(a){Y0(t,a)}while(!0);bf(),wc.current=s,nt=r,Tt!==null?e=0:(Ut=null,Ft=0,e=bt)}if(e!==0){if(e===2&&(r=sh(t),r!==0&&(i=r,e=Nh(t,r))),e===1)throw n=Aa,jr(t,0),Zi(t,i),fn(t,Et()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!tM(r)&&(e=Cc(t,i),e===2&&(s=sh(t),s!==0&&(i=s,e=Nh(t,s))),e===1))throw n=Aa,jr(t,0),Zi(t,i),fn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(we(345));case 2:Or(t,ln,yi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Vf+500-Et(),10<e)){if(uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fh(Or.bind(null,t,ln,yi),e);break}Or(t,ln,yi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eM(i/1960))-i,10<i){t.timeoutHandle=fh(Or.bind(null,t,ln,yi),i);break}Or(t,ln,yi);break;case 5:Or(t,ln,yi);break;default:throw Error(we(329))}}}return fn(t,Et()),t.callbackNode===n?q0.bind(null,t):null}function Nh(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=ln,ln=n,e!==null&&Dh(e)),t}function Dh(t){ln===null?ln=t:ln.push.apply(ln,t)}function tM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Hf,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function bm(t){if(nt&6)throw Error(we(327));eo();var e=uc(t,0);if(!(e&1))return fn(t,Et()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var i=sh(t);i!==0&&(e=i,n=Nh(t,i))}if(n===1)throw n=Aa,jr(t,0),Zi(t,e),fn(t,Et()),n;if(n===6)throw Error(we(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,ln,yi),fn(t,Et()),null}function Gf(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(po=Et()+500,Qc&&wr())}}function ts(t){ir!==null&&ir.tag===0&&!(nt&6)&&eo();var e=nt;nt|=1;var n=Dn.transition,i=st;try{if(Dn.transition=null,st=1,t)return t()}finally{st=i,Dn.transition=n,nt=e,!(nt&6)&&wr()}}function Wf(){_n=Ws.current,dt(Ws)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Tf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mc();break;case 3:ho(),dt(dn),dt(qt),Nf();break;case 5:Lf(i);break;case 4:ho();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:Cf(i.type._context);break;case 22:case 23:Wf()}n=n.return}if(Ut=t,Tt=t=fr(t.current,null),Ft=_n=e,bt=0,Aa=null,Hf=iu=es=0,ln=ta=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function Y0(t,e){do{var n=Tt;try{if(bf(),$l.current=Tc,Mc){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Mc=!1}if(Qr=0,Lt=At=gt=null,Qo=!1,Ma=0,zf.current=null,n===null||n.return===null){bt=1,Aa=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=pm(o);if(v!==null){v.flags&=-257,mm(v,o,a,s,e),v.mode&1&&fm(s,c,e),e=v,l=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){fm(s,c,e),jf();break e}l=Error(we(426))}}else if(ht&&a.mode&1){var p=pm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),mm(p,o,a,s,e),wf(fo(l,a));break e}}s=l=fo(l,a),bt!==4&&(bt=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=L0(s,l,e);am(s,u);break e;case 1:a=l;var _=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dr===null||!dr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=N0(s,a,e);am(s,E);break e}}s=s.return}while(s!==null)}Z0(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function K0(){var t=wc.current;return wc.current=Tc,t===null?Tc:t}function jf(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(es&268435455)&&!(iu&268435455)||Zi(Ut,Ft)}function Cc(t,e){var n=nt;nt|=2;var i=K0();(Ut!==t||Ft!==e)&&(yi=null,jr(t,e));do try{nM();break}catch(r){Y0(t,r)}while(!0);if(bf(),nt=n,wc.current=i,Tt!==null)throw Error(we(261));return Ut=null,Ft=0,bt}function nM(){for(;Tt!==null;)J0(Tt)}function iM(){for(;Tt!==null&&!CS();)J0(Tt)}function J0(t){var e=ey(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Z0(t):Tt=e,zf.current=null}function Z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KE(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Tt=null;return}}else if(n=YE(n,e,_n),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);bt===0&&(bt=5)}function Or(t,e,n){var i=st,r=Dn.transition;try{Dn.transition=null,st=1,rM(t,e,n,i)}finally{Dn.transition=r,st=i}return null}function rM(t,e,n,i){do eo();while(ir!==null);if(nt&6)throw Error(we(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(we(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FS(t,s),t===Ut&&(Tt=Ut=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,ty(cc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=st;st=1;var a=nt;nt|=4,zf.current=null,ZE(t,n),X0(n,t),TE(dh),dc=!!uh,dh=uh=null,t.current=n,QE(n),RS(),nt=a,st=o,Dn.transition=s}else t.current=n;if(ul&&(ul=!1,ir=t,bc=r),s=t.pendingLanes,s===0&&(dr=null),LS(n.stateNode),fn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,t=Ih,Ih=null,t;return bc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Lh?na++:(na=0,Lh=t):na=0,wr(),null}function eo(){if(ir!==null){var t=L_(bc),e=Dn.transition,n=st;try{if(Dn.transition=null,st=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,bc=0,nt&6)throw Error(we(331));var r=nt;for(nt|=4,Oe=t.current;Oe!==null;){var s=Oe,o=s.child;if(Oe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Oe=c;Oe!==null;){var d=Oe;switch(d.tag){case 0:case 11:case 15:ea(8,d,s)}var h=d.child;if(h!==null)h.return=d,Oe=h;else for(;Oe!==null;){d=Oe;var f=d.sibling,v=d.return;if(G0(d),d===c){Oe=null;break}if(f!==null){f.return=v,Oe=f;break}Oe=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Oe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Oe=o;else e:for(;Oe!==null;){if(s=Oe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Oe=u;break e}Oe=s.return}}var _=t.current;for(Oe=_;Oe!==null;){o=Oe;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Oe=m;else e:for(o=_;Oe!==null;){if(a=Oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){Oe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Oe=E;break e}Oe=a.return}}if(nt=r,wr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(qc,t)}catch{}i=!0}return i}finally{st=n,Dn.transition=e}}return!1}function Cm(t,e,n){e=fo(n,e),e=L0(t,e,1),t=ur(t,e,1),e=Qt(),t!==null&&(Oa(t,1,e),fn(t,e))}function xt(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=fo(n,t),t=N0(e,t,1),e=ur(e,t,1),t=Qt(),e!==null&&(Oa(e,1,t),fn(e,t));break}}e=e.return}}function sM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ft&n)===n&&(bt===4||bt===3&&(Ft&130023424)===Ft&&500>Et()-Vf?jr(t,0):Hf|=n),fn(t,e)}function Q0(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=Qt();t=Li(t,e),t!==null&&(Oa(t,e,n),fn(t,n))}function oM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Q0(t,n)}function aM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(we(314))}i!==null&&i.delete(e),Q0(t,n)}var ey;ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,qE(t,e,n);un=!!(t.flags&131072)}else un=!1,ht&&e.flags&1048576&&r0(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yl(t,e),t=e.pendingProps;var r=lo(e,qt.current);Qs(e,n),r=Uf(null,e,i,t,r,n);var s=Of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,xh(e,i,t,n),e=Mh(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Mf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cM(i),t=Hn(i,t),r){case 0:e=Eh(null,e,i,t,n);break e;case 1:e=_m(null,e,i,t,n);break e;case 11:e=gm(null,e,i,t,n);break e;case 14:e=vm(null,e,i,Hn(i.type,t),n);break e}throw Error(we(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Eh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),_m(t,e,i,r,n);case 3:e:{if(k0(e),t===null)throw Error(we(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u0(t,e),Sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fo(Error(we(423)),e),e=ym(t,e,i,n,r);break e}else if(i!==r){r=fo(Error(we(424)),e),e=ym(t,e,i,n,r);break e}else for(yn=cr(e.stateNode.containerInfo.firstChild),xn=e,ht=!0,Gn=null,n=l0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),i===r){e=Ni(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return d0(e),t===null&&vh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hh(i,r)?o=null:s!==null&&hh(i,s)&&(e.flags|=32),O0(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return F0(t,e,n);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=uo(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),gm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(yc,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_h(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(we(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Un(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),vm(t,e,i,r,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Yl(t,e),e.tag=1,hn(i)?(t=!0,gc(e)):t=!1,Qs(e,n),I0(e,i,r),xh(e,i,r,n),Mh(null,e,i,!0,t,n);case 19:return B0(t,e,n);case 22:return U0(t,e,n)}throw Error(we(156,e.tag))};function ty(t,e){return C_(t,e)}function lM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new lM(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cM(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===df)return 11;if(t===hf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Xr(n.children,r,s,e);case uf:o=8,r|=8;break;case Wd:return t=Nn(12,n,e,r|2),t.elementType=Wd,t.lanes=s,t;case jd:return t=Nn(13,n,e,r),t.elementType=jd,t.lanes=s,t;case Xd:return t=Nn(19,n,e,r),t.elementType=Xd,t.lanes=s,t;case d_:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c_:o=10;break e;case u_:o=9;break e;case df:o=11;break e;case hf:o=14;break e;case qi:o=16,i=null;break e}throw Error(we(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=d_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pu(0),this.expirationTimes=Pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,i,r,s,o,a,l){return t=new uM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function dM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ny(t){if(!t)return Sr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(we(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(we(171))}if(t.tag===1){var n=t.type;if(hn(n))return n0(t,n,e)}return e}function iy(t,e,n,i,r,s,o,a,l){return t=$f(n,i,!0,t,r,s,o,a,l),t.context=ny(null),n=t.current,i=Qt(),r=hr(n),s=Ri(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,Oa(t,r,i),fn(t,i),t}function su(t,e,n,i){var r=e.current,s=Qt(),o=hr(r);return n=ny(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(Yn(t,r,o,s),Xl(t,r,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Rm(t,e),(t=t.alternate)&&Rm(t,e)}function hM(){return null}var ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}ou.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(we(409));su(t,e,null,null)};ou.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){su(null,t,null,null)}),e[Ii]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=U_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&k_(t)}};function Kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function fM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rc(o);s.call(c)}}var o=iy(e,i,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=o,t[Ii]=o.current,_a(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rc(l);a.call(c)}}var l=$f(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=l,t[Ii]=l.current,_a(t.nodeType===8?t.parentNode:t),ts(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Rc(o);a.call(l)}}su(e,o,t,r)}else o=fM(n,e,t,r,i);return Rc(o)}N_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(mf(e,n|1),fn(e,Et()),!(nt&6)&&(po=Et()+500,wr()))}break;case 13:ts(function(){var i=Li(t,1);if(i!==null){var r=Qt();Yn(i,t,1,r)}}),qf(t,1)}};gf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=Qt();Yn(e,t,134217728,n)}qf(t,134217728)}};D_=function(t){if(t.tag===13){var e=hr(t),n=Li(t,e);if(n!==null){var i=Qt();Yn(n,t,e,i)}qf(t,e)}};U_=function(){return st};O_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};nh=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zc(i);if(!r)throw Error(we(90));f_(i),Yd(i,r)}}}break;case"textarea":m_(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};E_=Gf;M_=ts;var pM={usingClientEntryPoint:!1,Events:[Fa,Fs,Zc,x_,S_,Gf]},ko={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mM={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A_(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||hM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{qc=dl.inject(mM),ni=dl}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pM;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(e))throw Error(we(200));return dM(t,e,null,n)};En.createRoot=function(t,e){if(!Kf(t))throw Error(we(299));var n=!1,i="",r=ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,_a(t.nodeType===8?t.parentNode:t),new Yf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(we(188)):(t=Object.keys(t).join(","),Error(we(268,t)));return t=A_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return ts(t)};En.hydrate=function(t,e,n){if(!au(e))throw Error(we(200));return lu(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Kf(t))throw Error(we(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ry;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iy(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};En.render=function(t,e,n){if(!au(e))throw Error(we(200));return lu(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!au(t))throw Error(we(40));return t._reactRootContainer?(ts(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};En.unstable_batchedUpdates=Gf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!au(n))throw Error(we(200));if(t==null||t._reactInternals===void 0)throw Error(we(38));return lu(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy)}catch(t){console.error(t)}}sy(),s_.exports=En;var gM=s_.exports,Im=gM;Vd.createRoot=Im.createRoot,Vd.hydrateRoot=Im.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="160",fs={ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vM=0,Lm=1,_M=2,oy=1,yM=2,_i=3,Er=0,Xt=1,In=2,pr=0,to=1,ia=2,Nm=3,Dm=4,xM=5,Br=100,SM=101,EM=102,Um=103,Om=104,MM=200,TM=201,wM=202,AM=203,Uh=204,Oh=205,bM=206,CM=207,RM=208,PM=209,IM=210,LM=211,NM=212,DM=213,UM=214,OM=0,kM=1,FM=2,Pc=3,BM=4,zM=5,HM=6,VM=7,ay=0,GM=1,WM=2,mr=0,jM=1,XM=2,$M=3,qM=4,YM=5,KM=6,ly=300,mo=301,go=302,kh=303,Fh=304,cu=306,Bh=1e3,jn=1001,zh=1002,Zt=1003,km=1004,Ju=1005,Rn=1006,JM=1007,ba=1008,gr=1009,ZM=1010,QM=1011,Zf=1012,cy=1013,rr=1014,sr=1015,Ca=1016,uy=1017,dy=1018,$r=1020,eT=1021,Xn=1023,tT=1024,nT=1025,qr=1026,vo=1027,iT=1028,hy=1029,rT=1030,fy=1031,py=1033,Zu=33776,Qu=33777,ed=33778,td=33779,Fm=35840,Bm=35841,zm=35842,Hm=35843,my=36196,Vm=37492,Gm=37496,Wm=37808,jm=37809,Xm=37810,$m=37811,qm=37812,Ym=37813,Km=37814,Jm=37815,Zm=37816,Qm=37817,eg=37818,tg=37819,ng=37820,ig=37821,nd=36492,rg=36494,sg=36495,sT=36283,og=36284,ag=36285,lg=36286,gy=3e3,Yr=3001,oT=3200,aT=3201,vy=0,lT=1,Ln="",Nt="srgb",Di="srgb-linear",Qf="display-p3",uu="display-p3-linear",Ic="linear",ut="srgb",Lc="rec709",Nc="p3",ms=7680,cg=519,cT=512,uT=513,dT=514,_y=515,hT=516,fT=517,pT=518,mT=519,ug=35044,dg="300 es",Hh=1035,Ti=2e3,Dc=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=Math.PI/180,Vh=180/Math.PI;function To(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function gT(t,e){return(t%e+e)%e}function id(t,e,n){return(1-n)*t+n*e}function hg(t){return(t&t-1)===0&&t!==0}function Gh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vT={DEG2RAD:Ql};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],v=i[5],y=i[8],x=r[0],p=r[3],u=r[6],_=r[1],m=r[4],E=r[7],R=r[2],w=r[5],T=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*p+a*m+l*w,s[6]=o*u+a*E+l*T,s[1]=c*x+d*_+h*R,s[4]=c*p+d*m+h*w,s[7]=c*u+d*E+h*T,s[2]=f*x+v*_+y*R,s[5]=f*p+v*m+y*w,s[8]=f*u+v*E+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,v=c*s-o*l,y=n*h+i*f+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=v*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(rd.makeScale(e,n)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new je;function yy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _T(){const t=Uc("canvas");return t.style.display="block",t}const fg={};function ra(t){t in fg||(fg[t]=!0,console.warn(t))}const pg=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mg=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hl={[Di]:{transfer:Ic,primaries:Lc,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:ut,primaries:Lc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[uu]:{transfer:Ic,primaries:Nc,toReference:t=>t.applyMatrix3(mg),fromReference:t=>t.applyMatrix3(pg)},[Qf]:{transfer:ut,primaries:Nc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(mg),fromReference:t=>t.applyMatrix3(pg).convertLinearToSRGB()}},yT=new Set([Di,uu]),ot={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!yT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=hl[e].toReference,r=hl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return hl[t].primaries},getTransfer:function(t){return t===Ln?Ic:hl[t].transfer}};function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function sd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class xy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Uc("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xT=0;class Sy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=To(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(od(r[o].image)):s.push(od(r[o]))}else s=od(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function od(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ST=0;class pn extends cs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=jn,r=jn,s=Rn,o=ba,a=Xn,l=gr,c=pn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=To(),this.name="",this.source=new Sy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Yr?Nt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ly)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Yr:gy}set encoding(e){ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?Nt:Ln}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ly;pn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],v=l[5],y=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(y+p)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,E=(v+1)/2,R=(u+1)/2,w=(d+f)/4,T=(h+x)/4,B=(y+p)/4;return m>E&&m>R?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=w/i,s=T/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=B/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=B/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-y)*(p-y)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(p-y)/_,this.y=(h-x)/_,this.z=(f-d)/_,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ET extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yr?Nt:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends ET{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ey extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MT extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],v=s[o+1],y=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=v,e[n+2]=y,e[n+3]=x;return}if(h!==x||l!==f||c!==v||d!==y){let p=1-a;const u=l*f+c*v+d*y+h*x,_=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const R=Math.sqrt(m),w=Math.atan2(R,u*_);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const E=a*_;if(l=l*p+f*E,c=c*p+v*E,d=d*p+y*E,h=h*p+x*E,p===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],v=s[o+2],y=s[o+3];return e[n]=a*y+d*h+l*v-c*f,e[n+1]=l*y+d*f+c*h-a*v,e[n+2]=c*y+d*v+a*f-l*h,e[n+3]=d*y-a*h-l*f-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),v=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*v*y,this._y=c*v*h-f*d*y,this._z=c*d*y+f*v*h,this._w=c*d*h-f*v*y;break;case"YXZ":this._x=f*d*h+c*v*y,this._y=c*v*h-f*d*y,this._z=c*d*y-f*v*h,this._w=c*d*h+f*v*y;break;case"ZXY":this._x=f*d*h-c*v*y,this._y=c*v*h+f*d*y,this._z=c*d*y+f*v*h,this._w=c*d*h-f*v*y;break;case"ZYX":this._x=f*d*h-c*v*y,this._y=c*v*h+f*d*y,this._z=c*d*y-f*v*h,this._w=c*d*h+f*v*y;break;case"YZX":this._x=f*d*h+c*v*y,this._y=c*v*h+f*d*y,this._z=c*d*y-f*v*h,this._w=c*d*h-f*v*y;break;case"XZY":this._x=f*d*h-c*v*y,this._y=c*v*h-f*d*y,this._z=c*d*y+f*v*h,this._w=c*d*h+f*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>h){const v=2*Math.sqrt(1+i-a-h);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>h){const v=2*Math.sqrt(1+a-i-h);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+h-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new G,gg=new is;class za{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),pl.subVectors(this.max,Bo),vs.subVectors(e.a,Bo),_s.subVectors(e.b,Bo),ys.subVectors(e.c,Bo),Vi.subVectors(_s,vs),Gi.subVectors(ys,_s),Pr.subVectors(vs,ys);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-Pr.z,Pr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,Pr.z,0,-Pr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-Pr.y,Pr.x,0];return!ld(n,vs,_s,ys,pl)||(n=[1,0,0,0,1,0,0,0,1],!ld(n,vs,_s,ys,pl))?!1:(ml.crossVectors(Vi,Gi),n=[ml.x,ml.y,ml.z],ld(n,vs,_s,ys,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new G,new G,new G,new G,new G,new G,new G,new G],Fn=new G,fl=new za,vs=new G,_s=new G,ys=new G,Vi=new G,Gi=new G,Pr=new G,Bo=new G,pl=new G,ml=new G,Ir=new G;function ld(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),d=i.dot(Ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const TT=new za,zo=new G,cd=new G;class ep{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(cd)),this.expandByPoint(zo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new G,ud=new G,gl=new G,Wi=new G,dd=new G,vl=new G,hd=new G;class My{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ud.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(ud);const s=e.distanceTo(n)*.5,o=-this.direction.dot(gl),a=Wi.dot(this.direction),l=-Wi.dot(gl),c=Wi.lengthSq(),d=Math.abs(1-o*o);let h,f,v,y;if(d>0)if(h=o*l-a,f=o*a-l,y=s*d,h>=0)if(f>=-y)if(f<=y){const x=1/d;h*=x,f*=x,v=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),v=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),v=-h*h+f*(f+2*l)+c;else f<=-y?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),v=-h*h+f*(f+2*l)+c):f<=y?(h=0,f=Math.min(Math.max(-s,-l),s),v=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),v=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),v=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ud).addScaledVector(gl,f),v}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){dd.subVectors(n,e),vl.subVectors(i,e),hd.crossVectors(dd,vl);let o=this.direction.dot(hd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(vl.crossVectors(Wi,vl));if(l<0)return null;const c=a*this.direction.dot(dd.cross(Wi));if(c<0||l+c>o)return null;const d=-a*Wi.dot(hd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,v,y,x,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,v,y,x,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,v,y,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=v,u[7]=y,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,v=o*h,y=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=v+y*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=y+v*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,v=l*h,y=c*d,x=c*h;n[0]=f+x*a,n[4]=y*a-v,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=v*a-y,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,v=l*h,y=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=y+v*a,n[1]=v+y*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,v=o*h,y=a*d,x=a*h;n[0]=l*d,n[4]=y*c-v,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=v*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,v=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=y*h+v,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=v*h+y,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,v=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=v*h-y,n[2]=y*h-v,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,AT)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ji.crossVectors(i,gn),ji.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ji.crossVectors(i,gn)),ji.normalize(),_l.crossVectors(gn,ji),r[0]=ji.x,r[4]=_l.x,r[8]=gn.x,r[1]=ji.y,r[5]=_l.y,r[9]=gn.y,r[2]=ji.z,r[6]=_l.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],v=i[13],y=i[2],x=i[6],p=i[10],u=i[14],_=i[3],m=i[7],E=i[11],R=i[15],w=r[0],T=r[4],B=r[8],M=r[12],b=r[1],te=r[5],$=r[9],me=r[13],z=r[2],J=r[6],Q=r[10],ie=r[14],U=r[3],j=r[7],W=r[11],ee=r[15];return s[0]=o*w+a*b+l*z+c*U,s[4]=o*T+a*te+l*J+c*j,s[8]=o*B+a*$+l*Q+c*W,s[12]=o*M+a*me+l*ie+c*ee,s[1]=d*w+h*b+f*z+v*U,s[5]=d*T+h*te+f*J+v*j,s[9]=d*B+h*$+f*Q+v*W,s[13]=d*M+h*me+f*ie+v*ee,s[2]=y*w+x*b+p*z+u*U,s[6]=y*T+x*te+p*J+u*j,s[10]=y*B+x*$+p*Q+u*W,s[14]=y*M+x*me+p*ie+u*ee,s[3]=_*w+m*b+E*z+R*U,s[7]=_*T+m*te+E*J+R*j,s[11]=_*B+m*$+E*Q+R*W,s[15]=_*M+m*me+E*ie+R*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],v=e[14],y=e[3],x=e[7],p=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*v-i*l*v)+x*(+n*l*v-n*c*f+s*o*f-r*o*v+r*c*d-s*l*d)+p*(+n*c*h-n*a*v-s*o*h+i*o*v+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],v=e[11],y=e[12],x=e[13],p=e[14],u=e[15],_=h*p*c-x*f*c+x*l*v-a*p*v-h*l*u+a*f*u,m=y*f*c-d*p*c-y*l*v+o*p*v+d*l*u-o*f*u,E=d*x*c-y*h*c+y*a*v-o*x*v-d*a*u+o*h*u,R=y*h*l-d*x*l-y*a*f+o*x*f+d*a*p-o*h*p,w=n*_+i*m+r*E+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(x*f*s-h*p*s-x*r*v+i*p*v+h*r*u-i*f*u)*T,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*v-i*l*v)*T,e[4]=m*T,e[5]=(d*p*s-y*f*s+y*r*v-n*p*v-d*r*u+n*f*u)*T,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*v+n*l*v)*T,e[8]=E*T,e[9]=(y*h*s-d*x*s-y*i*v+n*x*v+d*i*u-n*h*u)*T,e[10]=(o*x*s-y*a*s+y*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*v-n*a*v)*T,e[12]=R*T,e[13]=(d*x*r-y*h*r+y*i*f-n*x*f-d*i*p+n*h*p)*T,e[14]=(y*a*r-o*x*r-y*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,v=s*d,y=s*h,x=o*d,p=o*h,u=a*h,_=l*c,m=l*d,E=l*h,R=i.x,w=i.y,T=i.z;return r[0]=(1-(x+u))*R,r[1]=(v+E)*R,r[2]=(y-m)*R,r[3]=0,r[4]=(v-E)*w,r[5]=(1-(f+u))*w,r[6]=(p+_)*w,r[7]=0,r[8]=(y+m)*T,r[9]=(p-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const o=xs.set(r[4],r[5],r[6]).length(),a=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let v,y;if(a===Ti)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Dc)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,v=(i+r)*d;let y,x;if(a===Ti)y=(o+s)*h,x=-2*h;else if(a===Dc)y=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new G,Bn=new wt,wT=new G(0,0,0),AT=new G(1,1,1),ji=new G,_l=new G,gn=new G,vg=new wt,_g=new is;class du{constructor(e=0,n=0,i=0,r=du.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}du.DEFAULT_ORDER="XYZ";class Ty{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bT=0;const yg=new G,Ss=new is,pi=new wt,yl=new G,Ho=new G,CT=new G,RT=new is,xg=new G(1,0,0),Sg=new G(0,1,0),Eg=new G(0,0,1),PT={type:"added"},IT={type:"removed"};class $t extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new G,n=new du,i=new is,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(Sg,e)}rotateZ(e){return this.rotateOnAxis(Eg,e)}translateOnAxis(e,n){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(Sg,e)}translateZ(e){return this.translateOnAxis(Eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ho,yl,this.up):pi.lookAt(yl,Ho,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(pi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(PT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,CT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,RT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),v=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new G(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new G,mi=new G,fd=new G,gi=new G,Es=new G,Ms=new G,Mg=new G,pd=new G,md=new G,gd=new G;let xl=!1;class Wn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),mi.subVectors(i,n),fd.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(mi),l=zn.dot(fd),c=mi.dot(mi),d=mi.dot(fd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,v=(c*l-a*d)*f,y=(o*d-a*l)*f;return s.set(1-v-y,y,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,s,o,a,l){return xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),mi.subVectors(e,n),zn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xl=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),Ms.subVectors(s,i),pd.subVectors(e,i);const l=Es.dot(pd),c=Ms.dot(pd);if(l<=0&&c<=0)return n.copy(i);md.subVectors(e,r);const d=Es.dot(md),h=Ms.dot(md);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Es,o);gd.subVectors(e,s);const v=Es.dot(gd),y=Ms.dot(gd);if(y>=0&&v<=y)return n.copy(s);const x=v*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Ms,a);const p=d*y-v*h;if(p<=0&&h-d>=0&&v-y>=0)return Mg.subVectors(s,r),a=(h-d)/(h-d+(v-y)),n.copy(r).addScaledVector(Mg,a);const u=1/(p+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Es,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=gT(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=wy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=sd(e.r),this.g=sd(e.g),this.b=sd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ot.fromWorkingColorSpace(Wt.copy(this),e),Math.round(kt(Wt.r*255,0,255))*65536+Math.round(kt(Wt.g*255,0,255))*256+Math.round(kt(Wt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Nt){ot.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Sl);const i=id(Xi.h,Sl.h,n),r=id(Xi.s,Sl.s,n),s=id(Xi.l,Sl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new tt;tt.NAMES=wy;let LT=0;class Ha extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=To(),this.name="",this.type="Material",this.blending=to,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Oh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sa extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ay,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new G,El=new Me;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ug,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ug&&(e.usage=this.usage),e}}class Ay extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class by extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NT=0;const An=new wt,_d=new $t,Ts=new G,vn=new za,Vo=new za,It=new G;class li extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yy(e)?by:Ay)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(vn.min,Vo.min),vn.expandByPoint(It),It.addVectors(vn.max,Vo.max),vn.expandByPoint(It)):(vn.expandByPoint(Vo.min),vn.expandByPoint(Vo.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)It.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),It.add(Ts)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<a;b++)c[b]=new G,d[b]=new G;const h=new G,f=new G,v=new G,y=new Me,x=new Me,p=new Me,u=new G,_=new G;function m(b,te,$){h.fromArray(r,b*3),f.fromArray(r,te*3),v.fromArray(r,$*3),y.fromArray(o,b*2),x.fromArray(o,te*2),p.fromArray(o,$*2),f.sub(h),v.sub(h),x.sub(y),p.sub(y);const me=1/(x.x*p.y-p.x*x.y);isFinite(me)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(v,-x.y).multiplyScalar(me),_.copy(v).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(me),c[b].add(u),c[te].add(u),c[$].add(u),d[b].add(_),d[te].add(_),d[$].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,te=E.length;b<te;++b){const $=E[b],me=$.start,z=$.count;for(let J=me,Q=me+z;J<Q;J+=3)m(i[J+0],i[J+1],i[J+2])}const R=new G,w=new G,T=new G,B=new G;function M(b){T.fromArray(s,b*3),B.copy(T);const te=c[b];R.copy(te),R.sub(T.multiplyScalar(T.dot(te))).normalize(),w.crossVectors(B,te);const me=w.dot(d[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=me}for(let b=0,te=E.length;b<te;++b){const $=E[b],me=$.start,z=$.count;for(let J=me,Q=me+z;J<Q;J+=3)M(i[J+0]),M(i[J+1]),M(i[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,d=new G,h=new G;if(e)for(let f=0,v=e.count;f<v;f+=3){const y=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,v=n.count;f<v;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let v=0,y=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?v=l[x]*a.data.stride+a.offset:v=l[x]*d;for(let u=0;u<d;u++)f[y++]=c[v++]}return new ri(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],v=e(f,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const v=c[h];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new wt,Lr=new My,Ml=new ep,wg=new G,ws=new G,As=new G,bs=new G,yd=new G,Tl=new G,wl=new Me,Al=new Me,bl=new Me,Ag=new G,bg=new G,Cg=new G,Cl=new G,Rl=new G;class cn extends $t{constructor(e=new li,n=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(yd.fromBufferAttribute(h,e),o?Tl.addScaledVector(yd,d):Tl.addScaledVector(yd.sub(n),d))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ml,wg)===null||Lr.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=f.length;y<x;y++){const p=f[y],u=o[p.materialIndex],_=Math.max(p.start,v.start),m=Math.min(a.count,Math.min(p.start+p.count,v.start+v.count));for(let E=_,R=m;E<R;E+=3){const w=a.getX(E),T=a.getX(E+1),B=a.getX(E+2);r=Pl(this,u,e,i,c,d,h,w,T,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,v.start),x=Math.min(a.count,v.start+v.count);for(let p=y,u=x;p<u;p+=3){const _=a.getX(p),m=a.getX(p+1),E=a.getX(p+2);r=Pl(this,o,e,i,c,d,h,_,m,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=f.length;y<x;y++){const p=f[y],u=o[p.materialIndex],_=Math.max(p.start,v.start),m=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let E=_,R=m;E<R;E+=3){const w=E,T=E+1,B=E+2;r=Pl(this,u,e,i,c,d,h,w,T,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,v.start),x=Math.min(l.count,v.start+v.count);for(let p=y,u=x;p<u;p+=3){const _=p,m=p+1,E=p+2;r=Pl(this,o,e,i,c,d,h,_,m,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function DT(t,e,n,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Er,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Rl);return c<n.near||c>n.far?null:{distance:c,point:Rl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ws),t.getVertexPosition(l,As),t.getVertexPosition(c,bs);const d=DT(t,e,n,i,ws,As,bs,Cl);if(d){r&&(wl.fromBufferAttribute(r,a),Al.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,c),d.uv=Wn.getInterpolation(Cl,ws,As,bs,wl,Al,bl,new Me)),s&&(wl.fromBufferAttribute(s,a),Al.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,c),d.uv1=Wn.getInterpolation(Cl,ws,As,bs,wl,Al,bl,new Me),d.uv2=d.uv1),o&&(Ag.fromBufferAttribute(o,a),bg.fromBufferAttribute(o,l),Cg.fromBufferAttribute(o,c),d.normal=Wn.getInterpolation(Cl,ws,As,bs,Ag,bg,Cg,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};Wn.getNormal(ws,As,bs,h.normal),d.face=h}return d}class Va extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,v=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(h,2));function y(x,p,u,_,m,E,R,w,T,B,M){const b=E/T,te=R/B,$=E/2,me=R/2,z=w/2,J=T+1,Q=B+1;let ie=0,U=0;const j=new G;for(let W=0;W<Q;W++){const ee=W*te-me;for(let ue=0;ue<J;ue++){const oe=ue*b-$;j[x]=oe*_,j[p]=ee*m,j[u]=z,c.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[u]=w>0?1:-1,d.push(j.x,j.y,j.z),h.push(ue/T),h.push(1-W/B),ie+=1}}for(let W=0;W<B;W++)for(let ee=0;ee<T;ee++){const ue=f+ee+J*W,oe=f+ee+J*(W+1),O=f+(ee+1)+J*(W+1),N=f+(ee+1)+J*W;l.push(ue,oe,N),l.push(oe,O,N),U+=6}a.addGroup(v,U,M),v+=U,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=_o(t[n]);for(const r in i)e[r]=i[r]}return e}function UT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cy(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const OT={clone:_o,merge:Kt};var kT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kT,this.fragmentShader=FT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=UT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ry extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends Ry{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ql*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Rs=1;class BT extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Cs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Cs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Cs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Cs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Cs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Cs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,v),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Py extends pn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:mo,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zT extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yr?Nt:Ln),this.texture=new Py(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Va(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:pr});s.uniforms.tEquirect.value=n;const o=new cn(r,s),a=n.minFilter;return n.minFilter===ba&&(n.minFilter=Rn),new BT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xd=new G,HT=new G,VT=new je;class Ki{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xd.subVectors(i,n).cross(HT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VT.getNormalMatrix(e),r=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new ep,Il=new G;class tp{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],v=r[8],y=r[9],x=r[10],p=r[11],u=r[12],_=r[13],m=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,p-v,E-u).normalize(),i[1].setComponents(l+s,f+c,p+v,E+u).normalize(),i[2].setComponents(l+o,f+d,p+y,E+_).normalize(),i[3].setComponents(l-o,f-d,p-y,E-_).normalize(),i[4].setComponents(l-a,f-h,p-x,E-m).normalize(),n===Ti)i[5].setComponents(l+a,f+h,p+x,E+m).normalize();else if(n===Dc)i[5].setComponents(a,h,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GT(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,v=h.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,d,h){const f=d.array,v=d._updateRange,y=d.updateRanges;if(t.bindBuffer(h,c),v.count===-1&&y.length===0&&t.bufferSubData(h,0,f),y.length!==0){for(let x=0,p=y.length;x<p;x++){const u=y[x];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):t.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Ra extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,v=[],y=[],x=[],p=[];for(let u=0;u<d;u++){const _=u*f-o;for(let m=0;m<c;m++){const E=m*h-s;y.push(E,-_,0),x.push(0,0,1),p.push(m/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const m=_+c*u,E=_+c*(u+1),R=_+1+c*(u+1),w=_+1+c*u;v.push(m,E,w),v.push(E,R,w)}this.setIndex(v),this.setAttribute("position",new en(y,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var WT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jT=`#ifdef USE_ALPHAHASH
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
#endif`,XT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,YT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KT=`#ifdef USE_AOMAP
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
#endif`,JT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZT=`#ifdef USE_BATCHING
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
#endif`,QT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iw=`#ifdef USE_IRIDESCENCE
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
#endif`,rw=`#ifdef USE_BUMPMAP
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
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fw=`#define PI 3.141592653589793
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
} // validated`,pw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mw=`vec3 transformedNormal = objectNormal;
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
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sw=`
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
}`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iw=`#ifdef USE_GRADIENTMAP
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
}`,Lw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
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
#endif`,kw=`#ifdef USE_ENVMAP
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
#endif`,Fw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vw=`PhysicalMaterial material;
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
#endif`,Gw=`struct PhysicalMaterial {
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
}`,Ww=`
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e1=`#if defined( USE_POINTS_UV )
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
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
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
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
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
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C1=`float getShadowMask() {
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
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,J1=`#define DISTANCE
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
}`,Z1=`#define DISTANCE
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#define LAMBERT
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
}`,oA=`#define LAMBERT
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
}`,aA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,cA=`#define NORMAL
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
}`,uA=`#define NORMAL
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
}`,dA=`#define PHONG
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
}`,hA=`#define PHONG
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
}`,fA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,vA=`uniform float size;
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
}`,_A=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,xA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
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
}`,EA=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:WT,alphahash_pars_fragment:jT,alphamap_fragment:XT,alphamap_pars_fragment:$T,alphatest_fragment:qT,alphatest_pars_fragment:YT,aomap_fragment:KT,aomap_pars_fragment:JT,batching_pars_vertex:ZT,batching_vertex:QT,begin_vertex:ew,beginnormal_vertex:tw,bsdfs:nw,iridescence_fragment:iw,bumpmap_pars_fragment:rw,clipping_planes_fragment:sw,clipping_planes_pars_fragment:ow,clipping_planes_pars_vertex:aw,clipping_planes_vertex:lw,color_fragment:cw,color_pars_fragment:uw,color_pars_vertex:dw,color_vertex:hw,common:fw,cube_uv_reflection_fragment:pw,defaultnormal_vertex:mw,displacementmap_pars_vertex:gw,displacementmap_vertex:vw,emissivemap_fragment:_w,emissivemap_pars_fragment:yw,colorspace_fragment:xw,colorspace_pars_fragment:Sw,envmap_fragment:Ew,envmap_common_pars_fragment:Mw,envmap_pars_fragment:Tw,envmap_pars_vertex:ww,envmap_physical_pars_fragment:kw,envmap_vertex:Aw,fog_vertex:bw,fog_pars_vertex:Cw,fog_fragment:Rw,fog_pars_fragment:Pw,gradientmap_pars_fragment:Iw,lightmap_fragment:Lw,lightmap_pars_fragment:Nw,lights_lambert_fragment:Dw,lights_lambert_pars_fragment:Uw,lights_pars_begin:Ow,lights_toon_fragment:Fw,lights_toon_pars_fragment:Bw,lights_phong_fragment:zw,lights_phong_pars_fragment:Hw,lights_physical_fragment:Vw,lights_physical_pars_fragment:Gw,lights_fragment_begin:Ww,lights_fragment_maps:jw,lights_fragment_end:Xw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:Kw,map_fragment:Jw,map_pars_fragment:Zw,map_particle_fragment:Qw,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:o1,normal_fragment_begin:a1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:d1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:_1,premultiplied_alpha_fragment:y1,project_vertex:x1,dithering_fragment:S1,dithering_pars_fragment:E1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:w1,shadowmap_pars_vertex:A1,shadowmap_vertex:b1,shadowmask_pars_fragment:C1,skinbase_vertex:R1,skinning_pars_vertex:P1,skinning_vertex:I1,skinnormal_vertex:L1,specularmap_fragment:N1,specularmap_pars_fragment:D1,tonemapping_fragment:U1,tonemapping_pars_fragment:O1,transmission_fragment:k1,transmission_pars_fragment:F1,uv_pars_fragment:B1,uv_pars_vertex:z1,uv_vertex:H1,worldpos_vertex:V1,background_vert:G1,background_frag:W1,backgroundCube_vert:j1,backgroundCube_frag:X1,cube_vert:$1,cube_frag:q1,depth_vert:Y1,depth_frag:K1,distanceRGBA_vert:J1,distanceRGBA_frag:Z1,equirect_vert:Q1,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:rA,meshlambert_vert:sA,meshlambert_frag:oA,meshmatcap_vert:aA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:dA,meshphong_frag:hA,meshphysical_vert:fA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:vA,points_frag:_A,shadow_vert:yA,shadow_frag:xA,sprite_vert:SA,sprite_frag:EA},Ie={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ei={basic:{uniforms:Kt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Kt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Kt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Kt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Kt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Kt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Kt([Ie.points,Ie.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Kt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Kt([Ie.common,Ie.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Kt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Kt([Ie.sprite,Ie.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Kt([Ie.common,Ie.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Kt([Ie.lights,Ie.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ei.physical={uniforms:Kt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ll={r:0,b:0,g:0};function MA(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,d,h=null,f=0,v=null;function y(p,u){let _=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===cu)?(d===void 0&&(d=new cn(new Va(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:_o(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=m,d.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ot.getTransfer(m.colorSpace)!==ut,(h!==m||f!==m.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,h=m,f=m.version,v=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new cn(new Ra(2,2),new Ui({name:"BackgroundMaterial",uniforms:_o(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ot.getTransfer(m.colorSpace)!==ut,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||f!==m.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,f=m.version,v=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(Ll,Cy(t)),i.buffers.color.setClear(Ll.r,Ll.g,Ll.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:y}}function TA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(z,J,Q,ie,U){let j=!1;if(o){const W=x(ie,Q,J);c!==W&&(c=W,v(c.object)),j=u(z,ie,Q,U),j&&_(z,ie,Q,U)}else{const W=J.wireframe===!0;(c.geometry!==ie.id||c.program!==Q.id||c.wireframe!==W)&&(c.geometry=ie.id,c.program=Q.id,c.wireframe=W,j=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,B(z,J,Q,ie),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function y(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function x(z,J,Q){const ie=Q.wireframe===!0;let U=a[z.id];U===void 0&&(U={},a[z.id]=U);let j=U[J.id];j===void 0&&(j={},U[J.id]=j);let W=j[ie];return W===void 0&&(W=p(f()),j[ie]=W),W}function p(z){const J=[],Q=[],ie=[];for(let U=0;U<r;U++)J[U]=0,Q[U]=0,ie[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Q,attributeDivisors:ie,object:z,attributes:{},index:null}}function u(z,J,Q,ie){const U=c.attributes,j=J.attributes;let W=0;const ee=Q.getAttributes();for(const ue in ee)if(ee[ue].location>=0){const O=U[ue];let N=j[ue];if(N===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),O===void 0||O.attribute!==N||N&&O.data!==N.data)return!0;W++}return c.attributesNum!==W||c.index!==ie}function _(z,J,Q,ie){const U={},j=J.attributes;let W=0;const ee=Q.getAttributes();for(const ue in ee)if(ee[ue].location>=0){let O=j[ue];O===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(O=z.instanceColor));const N={};N.attribute=O,O&&O.data&&(N.data=O.data),U[ue]=N,W++}c.attributes=U,c.attributesNum=W,c.index=ie}function m(){const z=c.newAttributes;for(let J=0,Q=z.length;J<Q;J++)z[J]=0}function E(z){R(z,0)}function R(z,J){const Q=c.newAttributes,ie=c.enabledAttributes,U=c.attributeDivisors;Q[z]=1,ie[z]===0&&(t.enableVertexAttribArray(z),ie[z]=1),U[z]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,J),U[z]=J)}function w(){const z=c.newAttributes,J=c.enabledAttributes;for(let Q=0,ie=J.length;Q<ie;Q++)J[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),J[Q]=0)}function T(z,J,Q,ie,U,j,W){W===!0?t.vertexAttribIPointer(z,J,Q,U,j):t.vertexAttribPointer(z,J,Q,ie,U,j)}function B(z,J,Q,ie){if(i.isWebGL2===!1&&(z.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=ie.attributes,j=Q.getAttributes(),W=J.defaultAttributeValues;for(const ee in j){const ue=j[ee];if(ue.location>=0){let oe=U[ee];if(oe===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor)),oe!==void 0){const O=oe.normalized,N=oe.itemSize,I=n.get(oe);if(I===void 0)continue;const A=I.buffer,se=I.type,pe=I.bytesPerElement,q=i.isWebGL2===!0&&(se===t.INT||se===t.UNSIGNED_INT||oe.gpuType===cy);if(oe.isInterleavedBufferAttribute){const _e=oe.data,H=_e.stride,be=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let Z=0;Z<ue.locationSize;Z++)R(ue.location+Z,_e.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Z=0;Z<ue.locationSize;Z++)E(ue.location+Z);t.bindBuffer(t.ARRAY_BUFFER,A);for(let Z=0;Z<ue.locationSize;Z++)T(ue.location+Z,N/ue.locationSize,se,O,H*pe,(be+N/ue.locationSize*Z)*pe,q)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<ue.locationSize;_e++)R(ue.location+_e,oe.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<ue.locationSize;_e++)E(ue.location+_e);t.bindBuffer(t.ARRAY_BUFFER,A);for(let _e=0;_e<ue.locationSize;_e++)T(ue.location+_e,N/ue.locationSize,se,O,N*pe,N/ue.locationSize*_e*pe,q)}}else if(W!==void 0){const O=W[ee];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(ue.location,O);break;case 3:t.vertexAttrib3fv(ue.location,O);break;case 4:t.vertexAttrib4fv(ue.location,O);break;default:t.vertexAttrib1fv(ue.location,O)}}}}w()}function M(){$();for(const z in a){const J=a[z];for(const Q in J){const ie=J[Q];for(const U in ie)y(ie[U].object),delete ie[U];delete J[Q]}delete a[z]}}function b(z){if(a[z.id]===void 0)return;const J=a[z.id];for(const Q in J){const ie=J[Q];for(const U in ie)y(ie[U].object),delete ie[U];delete J[Q]}delete a[z.id]}function te(z){for(const J in a){const Q=a[J];if(Q[z.id]===void 0)continue;const ie=Q[z.id];for(const U in ie)y(ie[U].object),delete ie[U];delete Q[z.id]}}function $(){me(),d=!0,c!==l&&(c=l,v(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:me,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:te,initAttributes:m,enableAttribute:E,disableUnusedAttributes:w}}function wA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let v,y;if(r)v=t,y="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<f;y++)this.render(d[y],h[y]);else{v.multiDrawArraysWEBGL(s,d,0,h,0,f);let y=0;for(let x=0;x<f;x++)y+=h[x];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function AA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,E=o||e.has("OES_texture_float"),R=m&&E,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:m,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:w}}function bA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ki,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||i!==0||r;return r=f,i=h.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,v){const y=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!p)s?d(null):c();else{const _=s?0:i,m=_*4;let E=u.clippingState||null;l.value=E,E=d(y,f,m,v);for(let R=0;R!==m;++R)E[R]=n[R];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,v,y){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,y!==!0||p===null){const u=v+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let m=0,E=v;m!==x;++m,E+=4)o.copy(h[m]).applyMatrix4(_,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function CA(t){let e=new WeakMap;function n(o,a){return a===kh?o.mapping=mo:a===Fh&&(o.mapping=go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kh||a===Fh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zT(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ly extends Ry{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,Rg=[.125,.215,.35,.446,.526,.582],zr=20,Sd=new Ly,Pg=new tt;let Ed=null,Md=0,Td=0;const kr=(1+Math.sqrt(5))/2,Ps=1/kr,Ig=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,kr,Ps),new G(0,kr,-Ps),new G(Ps,0,kr),new G(-Ps,0,kr),new G(kr,Ps,0),new G(-kr,Ps,0)];class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ed=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Md,Td),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ca,format:Xn,colorSpace:Di,depthBuffer:!1},r=Ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RA(s)),this._blurMaterial=PA(s,e,n)}return r}_compileMaterial(e){const n=new cn(this._lodPlanes[0],e);this._renderer.compile(n,Sd)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Pg),d.toneMapping=mr,d.autoClear=!1;const v=new sa({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),y=new cn(new Va,v);let x=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,x=!0):(v.color.copy(Pg),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;Nl(r,_*m,u>2?m:0,m,m),d.setRenderTarget(r),x&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ig[(r-1)%Ig.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new cn(this._lodPlanes[r],c),f=c.uniforms,v=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*zr-1),x=s/y,p=isFinite(s)?1+Math.floor(d*x):zr;p>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zr}`);const u=[];let _=0;for(let T=0;T<zr;++T){const B=T/x,M=Math.exp(-B*B/2);u.push(M),T===0?_+=M:T<p&&(_+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:m}=this;f.dTheta.value=y,f.mipInt.value=m-i;const E=this._sizeLods[r],R=3*E*(r>m-js?r-m+js:0),w=4*(this._cubeSize-E);Nl(n,R,w,3*E,2*E),l.setRenderTarget(n),l.render(h,Sd)}}function RA(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+Rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=Rg[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,y=6,x=3,p=2,u=1,_=new Float32Array(x*y*v),m=new Float32Array(p*y*v),E=new Float32Array(u*y*v);for(let w=0;w<v;w++){const T=w%3*2/3-1,B=w>2?0:-1,M=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];_.set(M,x*y*w),m.set(f,p*y*w);const b=[w,w,w,w,w,w];E.set(b,u*y*w)}const R=new li;R.setAttribute("position",new ri(_,x)),R.setAttribute("uv",new ri(m,p)),R.setAttribute("faceIndex",new ri(E,u)),e.push(R),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ng(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PA(t,e,n){const i=new Float32Array(zr),r=new G(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Dg(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ug(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function np(){return`

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
	`}function IA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kh||l===Fh,d=l===mo||l===go;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Lg(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Lg(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const x=f.morphAttributes[y];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete r[f.id];const v=s.get(f);v&&(e.remove(v),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const v=h.morphAttributes;for(const y in v){const x=v[y];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const f=[],v=h.index,y=h.attributes.position;let x=0;if(v!==null){const _=v.array;x=v.version;for(let m=0,E=_.length;m<E;m+=3){const R=_[m+0],w=_[m+1],T=_[m+2];f.push(R,w,w,T,T,R)}}else if(y!==void 0){const _=y.array;x=y.version;for(let m=0,E=_.length/3-1;m<E;m+=3){const R=m+0,w=m+1,T=m+2;f.push(R,w,w,T,T,R)}}else return;const p=new(yy(f)?by:Ay)(f,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function DA(t,e,n,i){const r=i.isWebGL2;let s;function o(v){s=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function d(v,y){t.drawElements(s,y,a,v*l),n.update(y,s,1)}function h(v,y,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,y,a,v*l,x),n.update(y,s,x)}function f(v,y,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(v[u]/l,y[u]);else{p.multiDrawElementsWEBGL(s,y,0,a,v,0,x);let u=0;for(let _=0;_<x;_++)u+=y[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function UA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OA(t,e){return t[0]-e[0]}function kA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function FA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=y!==void 0?y.length:0;let p=s.get(d);if(p===void 0||p.count!==x){let J=function(){me.dispose(),s.delete(d),d.removeEventListener("dispose",J)};var v=J;p!==void 0&&p.texture.dispose();const m=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let M=0;m===!0&&(M=1),E===!0&&(M=2),R===!0&&(M=3);let b=d.attributes.position.count*M,te=1;b>e.maxTextureSize&&(te=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const $=new Float32Array(b*te*4*x),me=new Ey($,b,te,x);me.type=sr,me.needsUpdate=!0;const z=M*4;for(let Q=0;Q<x;Q++){const ie=w[Q],U=T[Q],j=B[Q],W=b*te*4*Q;for(let ee=0;ee<ie.count;ee++){const ue=ee*z;m===!0&&(o.fromBufferAttribute(ie,ee),$[W+ue+0]=o.x,$[W+ue+1]=o.y,$[W+ue+2]=o.z,$[W+ue+3]=0),E===!0&&(o.fromBufferAttribute(U,ee),$[W+ue+4]=o.x,$[W+ue+5]=o.y,$[W+ue+6]=o.z,$[W+ue+7]=0),R===!0&&(o.fromBufferAttribute(j,ee),$[W+ue+8]=o.x,$[W+ue+9]=o.y,$[W+ue+10]=o.z,$[W+ue+11]=j.itemSize===4?o.w:1)}}p={count:x,texture:me,size:new Me(b,te)},s.set(d,p),d.addEventListener("dispose",J)}let u=0;for(let m=0;m<f.length;m++)u+=f[m];const _=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==y){x=[];for(let E=0;E<y;E++)x[E]=[E,0];i[d.id]=x}for(let E=0;E<y;E++){const R=x[E];R[0]=E,R[1]=f[E]}x.sort(kA);for(let E=0;E<8;E++)E<y&&x[E][1]?(a[E][0]=x[E][0],a[E][1]=x[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(OA);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const R=a[E],w=R[0],T=R[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&d.getAttribute("morphTarget"+E)!==p[w]&&d.setAttribute("morphTarget"+E,p[w]),u&&d.getAttribute("morphNormal"+E)!==u[w]&&d.setAttribute("morphNormal"+E,u[w]),r[E]=T,_+=T):(p&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),u&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const m=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function BA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ny extends pn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:qr,d!==qr&&d!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===qr&&(i=rr),i===void 0&&d===vo&&(i=$r),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Dy=new pn,Uy=new Ny(1,1);Uy.compareFunction=_y;const Oy=new Ey,ky=new MT,Fy=new Py,Og=[],kg=[],Fg=new Float32Array(16),Bg=new Float32Array(9),zg=new Float32Array(4);function wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Og[r];if(s===void 0&&(s=new Float32Array(r),Og[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hu(t,e){let n=kg[e];n===void 0&&(n=new Int32Array(e),kg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function WA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;zg.set(i),t.uniformMatrix2fv(this.addr,!1,zg),Rt(n,i)}}function jA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Bg.set(i),t.uniformMatrix3fv(this.addr,!1,Bg),Rt(n,i)}}function XA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Fg.set(i),t.uniformMatrix4fv(this.addr,!1,Fg),Rt(n,i)}}function $A(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function JA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function QA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Uy:Dy;n.setTexture2D(e||s,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ky,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Fy,r)}function rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Oy,r)}function sb(t){switch(t){case 5126:return zA;case 35664:return HA;case 35665:return VA;case 35666:return GA;case 35674:return WA;case 35675:return jA;case 35676:return XA;case 5124:case 35670:return $A;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return KA;case 5125:return JA;case 36294:return ZA;case 36295:return QA;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(t,e){t.uniform1fv(this.addr,e)}function ab(t,e){const n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function lb(t,e){const n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function cb(t,e){const n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function ub(t,e){const n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function db(t,e){const n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hb(t,e){const n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fb(t,e){t.uniform1iv(this.addr,e)}function pb(t,e){t.uniform2iv(this.addr,e)}function mb(t,e){t.uniform3iv(this.addr,e)}function gb(t,e){t.uniform4iv(this.addr,e)}function vb(t,e){t.uniform1uiv(this.addr,e)}function _b(t,e){t.uniform2uiv(this.addr,e)}function yb(t,e){t.uniform3uiv(this.addr,e)}function xb(t,e){t.uniform4uiv(this.addr,e)}function Sb(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dy,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ky,s[o])}function Mb(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Fy,s[o])}function Tb(t,e,n){const i=this.cache,r=e.length,s=hu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Oy,s[o])}function wb(t){switch(t){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return db;case 35676:return hb;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return _b;case 36295:return yb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Ab{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sb(n.type)}}class bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wb(n.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Hg(t,e){t.seq.push(e),t.map[e.id]=e}function Rb(t,e,n){const i=t.name,r=i.length;for(wd.lastIndex=0;;){const s=wd.exec(i),o=wd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hg(n,c===void 0?new Ab(a,t,e):new bb(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Cb(a),Hg(n,h)),n=h}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Rb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Pb=37297;let Ib=0;function Lb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Nb(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Nc&&n===Lc?i="LinearDisplayP3ToLinearSRGB":e===Lc&&n===Nc&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case uu:return[i,"LinearTransferOETF"];case Nt:case Qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Lb(t.getShaderSource(e),o)}else return r}function Db(t,e){const n=Nb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ub(t,e){let n;switch(e){case jM:n="Linear";break;case XM:n="Reinhard";break;case $M:n="OptimizedCineon";break;case qM:n="ACESFilmic";break;case KM:n="AgX";break;case YM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ob(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function kb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}function Fb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Wg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(t){return t.replace(zb,Vb)}const Hb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vb(t,e){let n=Ye[e];if(n===void 0){const i=Hb.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(n)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(t){return t.replace(Gb,Wb)}function Wb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $g(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===oy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ay:e="ENVMAP_BLENDING_MULTIPLY";break;case GM:e="ENVMAP_BLENDING_MIX";break;case WM:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Kb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jb(n),c=Xb(n),d=$b(n),h=qb(n),f=Yb(n),v=n.isWebGL2?"":Ob(n),y=kb(n),x=Fb(s),p=r.createProgram();let u,_,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xs).join(`
`),u.length>0&&(u+=`
`),_=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xs).join(`
`),_.length>0&&(_+=`
`)):(u=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),_=[v,$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==mr?Ub("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Db("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Wh(o),o=Wg(o,n),o=jg(o,n),a=Wh(a),a=Wg(a,n),a=jg(a,n),o=Xg(o),a=Xg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=m+u+o,R=m+_+a,w=Vg(r,r.VERTEX_SHADER,E),T=Vg(r,r.FRAGMENT_SHADER,R);r.attachShader(p,w),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B($){if(t.debug.checkShaderErrors){const me=r.getProgramInfoLog(p).trim(),z=r.getShaderInfoLog(w).trim(),J=r.getShaderInfoLog(T).trim();let Q=!0,ie=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,w,T);else{const U=Gg(r,w,"vertex"),j=Gg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+U+`
`+j)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(z===""||J==="")&&(ie=!1);ie&&($.diagnostics={runnable:Q,programLog:me,vertexShader:{log:z,prefix:u},fragmentShader:{log:J,prefix:_}})}r.deleteShader(w),r.deleteShader(T),M=new ec(r,p),b=Bb(r,p)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let b;this.getAttributes=function(){return b===void 0&&B(this),b};let te=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=r.getProgramParameter(p,Pb)),te},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ib++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let Jb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Qb(e),n.set(e,i)),i}}class Qb{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function eC(t,e,n,i,r,s,o){const a=new Ty,l=new Zb,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,b,te,$,me){const z=$.fog,J=me.geometry,Q=M.isMeshStandardMaterial?$.environment:null,ie=(M.isMeshStandardMaterial?n:e).get(M.envMap||Q),U=ie&&ie.mapping===cu?ie.image.height:null,j=y[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const W=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ee=W!==void 0?W.length:0;let ue=0;J.morphAttributes.position!==void 0&&(ue=1),J.morphAttributes.normal!==void 0&&(ue=2),J.morphAttributes.color!==void 0&&(ue=3);let oe,O,N,I;if(j){const it=ei[j];oe=it.vertexShader,O=it.fragmentShader}else oe=M.vertexShader,O=M.fragmentShader,l.update(M),N=l.getVertexShaderID(M),I=l.getFragmentShaderID(M);const A=t.getRenderTarget(),se=me.isInstancedMesh===!0,pe=me.isBatchedMesh===!0,q=!!M.map,_e=!!M.matcap,H=!!ie,be=!!M.aoMap,Z=!!M.lightMap,de=!!M.bumpMap,fe=!!M.normalMap,Ae=!!M.displacementMap,V=!!M.emissiveMap,g=!!M.metalnessMap,S=!!M.roughnessMap,L=M.anisotropy>0,X=M.clearcoat>0,Y=M.iridescence>0,ne=M.sheen>0,k=M.transmission>0,re=L&&!!M.anisotropyMap,ge=X&&!!M.clearcoatMap,Te=X&&!!M.clearcoatNormalMap,Ce=X&&!!M.clearcoatRoughnessMap,he=Y&&!!M.iridescenceMap,Fe=Y&&!!M.iridescenceThicknessMap,ke=ne&&!!M.sheenColorMap,Le=ne&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Se=!!M.specularColorMap,D=!!M.specularIntensityMap,ve=k&&!!M.transmissionMap,De=k&&!!M.thicknessMap,Pe=!!M.gradientMap,ye=!!M.alphaMap,F=M.alphaTest>0,Ee=!!M.alphaHash,Re=!!M.extensions,He=!!J.attributes.uv1,Be=!!J.attributes.uv2,Ke=!!J.attributes.uv3;let Je=mr;return M.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Je=t.toneMapping),{isWebGL2:d,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:O,defines:M.defines,customVertexShaderID:N,customFragmentShaderID:I,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:pe,instancing:se,instancingColor:se&&me.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:A===null?t.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Di,map:q,matcap:_e,envMap:H,envMapMode:H&&ie.mapping,envMapCubeUVHeight:U,aoMap:be,lightMap:Z,bumpMap:de,normalMap:fe,displacementMap:f&&Ae,emissiveMap:V,normalMapObjectSpace:fe&&M.normalMapType===lT,normalMapTangentSpace:fe&&M.normalMapType===vy,metalnessMap:g,roughnessMap:S,anisotropy:L,anisotropyMap:re,clearcoat:X,clearcoatMap:ge,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ce,iridescence:Y,iridescenceMap:he,iridescenceThicknessMap:Fe,sheen:ne,sheenColorMap:ke,sheenRoughnessMap:Le,specularMap:Ne,specularColorMap:Se,specularIntensityMap:D,transmission:k,transmissionMap:ve,thicknessMap:De,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===to,alphaMap:ye,alphaTest:F,alphaHash:Ee,combine:M.combine,mapUv:q&&x(M.map.channel),aoMapUv:be&&x(M.aoMap.channel),lightMapUv:Z&&x(M.lightMap.channel),bumpMapUv:de&&x(M.bumpMap.channel),normalMapUv:fe&&x(M.normalMap.channel),displacementMapUv:Ae&&x(M.displacementMap.channel),emissiveMapUv:V&&x(M.emissiveMap.channel),metalnessMapUv:g&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:re&&x(M.anisotropyMap.channel),clearcoatMapUv:ge&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(M.sheenRoughnessMap.channel),specularMapUv:Ne&&x(M.specularMap.channel),specularColorMapUv:Se&&x(M.specularColorMap.channel),specularIntensityMapUv:D&&x(M.specularIntensityMap.channel),transmissionMapUv:ve&&x(M.transmissionMap.channel),thicknessMapUv:De&&x(M.thicknessMap.channel),alphaMapUv:ye&&x(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(fe||L),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:Be,vertexUv3s:Ke,pointsUvs:me.isPoints===!0&&!!J.attributes.uv&&(q||ye),fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:me.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:q&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Re&&M.extensions.derivatives===!0,extensionFragDepth:Re&&M.extensions.fragDepth===!0,extensionDrawBuffers:Re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const te in M.defines)b.push(te),b.push(M.defines[te]);return M.isRawShaderMaterial===!1&&(_(b,M),m(b,M),b.push(t.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function _(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function m(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){const b=y[M.type];let te;if(b){const $=ei[b];te=OT.clone($.uniforms)}else te=M.uniforms;return te}function R(M,b){let te;for(let $=0,me=c.length;$<me;$++){const z=c[$];if(z.cacheKey===b){te=z,++te.usedTimes;break}}return te===void 0&&(te=new Kb(t,b,M,s),c.push(te)),te}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:B}}function tC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,v,y,x,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:v,groupOrder:y,renderOrder:h.renderOrder,z:x,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=v,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function a(h,f,v,y,x,p){const u=o(h,f,v,y,x,p);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(h,f,v,y,x,p){const u=o(h,f,v,y,x,p);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||nC),i.length>1&&i.sort(f||qg),r.length>1&&r.sort(f||qg)}function d(){for(let h=e,f=t.length;h<f;h++){const v=t[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function iC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yg,t.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new tt};break;case"SpotLight":n={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function sC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oC=0;function aC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lC(t,e){const n=new rC,i=sC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new G);const s=new G,o=new wt,a=new wt;function l(d,h){let f=0,v=0,y=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,p=0,u=0,_=0,m=0,E=0,R=0,w=0,T=0,B=0,M=0;d.sort(aC);const b=h===!0?Math.PI:1;for(let $=0,me=d.length;$<me;$++){const z=d[$],J=z.color,Q=z.intensity,ie=z.distance,U=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=J.r*Q*b,v+=J.g*Q*b,y+=J.b*Q*b;else if(z.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(z.sh.coefficients[j],Q);M++}else if(z.isDirectionalLight){const j=n.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*b),z.castShadow){const W=z.shadow,ee=i.get(z);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,r.directionalShadow[x]=ee,r.directionalShadowMap[x]=U,r.directionalShadowMatrix[x]=z.shadow.matrix,E++}r.directional[x]=j,x++}else if(z.isSpotLight){const j=n.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(J).multiplyScalar(Q*b),j.distance=ie,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,r.spot[u]=j;const W=z.shadow;if(z.map&&(r.spotLightMap[T]=z.map,T++,W.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[u]=W.matrix,z.castShadow){const ee=i.get(z);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=U,w++}u++}else if(z.isRectAreaLight){const j=n.get(z);j.color.copy(J).multiplyScalar(Q),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=j,_++}else if(z.isPointLight){const j=n.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*b),j.distance=z.distance,j.decay=z.decay,z.castShadow){const W=z.shadow,ee=i.get(z);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=z.shadow.matrix,R++}r.point[p]=j,p++}else if(z.isHemisphereLight){const j=n.get(z);j.skyColor.copy(z.color).multiplyScalar(Q*b),j.groundColor.copy(z.groundColor).multiplyScalar(Q*b),r.hemi[m]=j,m++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=y;const te=r.hash;(te.directionalLength!==x||te.pointLength!==p||te.spotLength!==u||te.rectAreaLength!==_||te.hemiLength!==m||te.numDirectionalShadows!==E||te.numPointShadows!==R||te.numSpotShadows!==w||te.numSpotMaps!==T||te.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=_,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+T-B,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=M,te.directionalLength=x,te.pointLength=p,te.spotLength=u,te.rectAreaLength=_,te.hemiLength=m,te.numDirectionalShadows=E,te.numPointShadows=R,te.numSpotShadows=w,te.numSpotMaps=T,te.numLightProbes=M,r.version=oC++)}function c(d,h){let f=0,v=0,y=0,x=0,p=0;const u=h.matrixWorldInverse;for(let _=0,m=d.length;_<m;_++){const E=d[_];if(E.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),f++}else if(E.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),y++}else if(E.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),v++}else if(E.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Kg(t,e){const n=new lC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Kg(t,e),n.set(s,[l])):o>=a.length?(l=new Kg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class uC extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dC extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fC=`uniform sampler2D shadow_pass;
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
}`;function pC(t,e,n){let i=new tp;const r=new Me,s=new Me,o=new Dt,a=new uC({depthPacking:aT}),l=new dC,c={},d=n.maxTextureSize,h={[Er]:Xt,[Xt]:Er,[In]:In},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:hC,fragmentShader:fC}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const y=new li;y.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new cn(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oy;let u=this.type;this.render=function(w,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),b=t.getActiveCubeFace(),te=t.getActiveMipmapLevel(),$=t.state;$.setBlending(pr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const me=u!==_i&&this.type===_i,z=u===_i&&this.type!==_i;for(let J=0,Q=w.length;J<Q;J++){const ie=w[J],U=ie.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const j=U.getFrameExtents();if(r.multiply(j),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,U.mapSize.y=s.y)),U.map===null||me===!0||z===!0){const ee=this.type!==_i?{minFilter:Zt,magFilter:Zt}:{};U.map!==null&&U.map.dispose(),U.map=new ns(r.x,r.y,ee),U.map.texture.name=ie.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const W=U.getViewportCount();for(let ee=0;ee<W;ee++){const ue=U.getViewport(ee);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),$.viewport(o),U.updateMatrices(ie,ee),i=U.getFrustum(),E(T,B,U.camera,ie,this.type)}U.isPointLightShadow!==!0&&this.type===_i&&_(U,B),U.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,b,te)};function _(w,T){const B=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,v.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ns(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,B,f,x,null),v.uniforms.shadow_pass.value=w.mapPass.texture,v.uniforms.resolution.value=w.mapSize,v.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,B,v,x,null)}function m(w,T,B,M){let b=null;const te=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(te!==void 0)b=te;else if(b=B.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const $=b.uuid,me=T.uuid;let z=c[$];z===void 0&&(z={},c[$]=z);let J=z[me];J===void 0&&(J=b.clone(),z[me]=J,T.addEventListener("dispose",R)),b=J}if(b.visible=T.visible,b.wireframe=T.wireframe,M===_i?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=t.properties.get(b);$.light=B}return b}function E(w,T,B,M,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===_i)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const me=e.update(w),z=w.material;if(Array.isArray(z)){const J=me.groups;for(let Q=0,ie=J.length;Q<ie;Q++){const U=J[Q],j=z[U.materialIndex];if(j&&j.visible){const W=m(w,j,M,b);w.onBeforeShadow(t,w,T,B,me,W,U),t.renderBufferDirect(B,null,me,W,w,U),w.onAfterShadow(t,w,T,B,me,W,U)}}}else if(z.visible){const J=m(w,z,M,b);w.onBeforeShadow(t,w,T,B,me,J,null),t.renderBufferDirect(B,null,me,J,w,null),w.onAfterShadow(t,w,T,B,me,J,null)}}const $=w.children;for(let me=0,z=$.length;me<z;me++)E($[me],T,B,M,b)}function R(w){w.target.removeEventListener("dispose",R);for(const B in c){const M=c[B],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function mC(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const Ee=new Dt;let Re=null;const He=new Dt(0,0,0,0);return{setMask:function(Be){Re!==Be&&!F&&(t.colorMask(Be,Be,Be,Be),Re=Be)},setLocked:function(Be){F=Be},setClear:function(Be,Ke,Je,rt,it){it===!0&&(Be*=rt,Ke*=rt,Je*=rt),Ee.set(Be,Ke,Je,rt),He.equals(Ee)===!1&&(t.clearColor(Be,Ke,Je,rt),He.copy(Ee))},reset:function(){F=!1,Re=null,He.set(-1,0,0,0)}}}function s(){let F=!1,Ee=null,Re=null,He=null;return{setTest:function(Be){Be?pe(t.DEPTH_TEST):q(t.DEPTH_TEST)},setMask:function(Be){Ee!==Be&&!F&&(t.depthMask(Be),Ee=Be)},setFunc:function(Be){if(Re!==Be){switch(Be){case OM:t.depthFunc(t.NEVER);break;case kM:t.depthFunc(t.ALWAYS);break;case FM:t.depthFunc(t.LESS);break;case Pc:t.depthFunc(t.LEQUAL);break;case BM:t.depthFunc(t.EQUAL);break;case zM:t.depthFunc(t.GEQUAL);break;case HM:t.depthFunc(t.GREATER);break;case VM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=Be}},setLocked:function(Be){F=Be},setClear:function(Be){He!==Be&&(t.clearDepth(Be),He=Be)},reset:function(){F=!1,Ee=null,Re=null,He=null}}}function o(){let F=!1,Ee=null,Re=null,He=null,Be=null,Ke=null,Je=null,rt=null,it=null;return{setTest:function(Xe){F||(Xe?pe(t.STENCIL_TEST):q(t.STENCIL_TEST))},setMask:function(Xe){Ee!==Xe&&!F&&(t.stencilMask(Xe),Ee=Xe)},setFunc:function(Xe,_t,Tn){(Re!==Xe||He!==_t||Be!==Tn)&&(t.stencilFunc(Xe,_t,Tn),Re=Xe,He=_t,Be=Tn)},setOp:function(Xe,_t,Tn){(Ke!==Xe||Je!==_t||rt!==Tn)&&(t.stencilOp(Xe,_t,Tn),Ke=Xe,Je=_t,rt=Tn)},setLocked:function(Xe){F=Xe},setClear:function(Xe){it!==Xe&&(t.clearStencil(Xe),it=Xe)},reset:function(){F=!1,Ee=null,Re=null,He=null,Be=null,Ke=null,Je=null,rt=null,it=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},v={},y=new WeakMap,x=[],p=null,u=!1,_=null,m=null,E=null,R=null,w=null,T=null,B=null,M=new tt(0,0,0),b=0,te=!1,$=null,me=null,z=null,J=null,Q=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,j=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=j>=2);let ee=null,ue={};const oe=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),N=new Dt().fromArray(oe),I=new Dt().fromArray(O);function A(F,Ee,Re,He){const Be=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(F,Ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<Re;Je++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ee,0,t.RGBA,1,1,He,0,t.RGBA,t.UNSIGNED_BYTE,Be):t.texImage2D(Ee+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Be);return Ke}const se={};se[t.TEXTURE_2D]=A(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=A(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=A(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=A(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(Pc),V(!1),g(Lm),pe(t.CULL_FACE),fe(pr);function pe(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function q(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function _e(F,Ee){return v[F]!==Ee?(t.bindFramebuffer(F,Ee),v[F]=Ee,i&&(F===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=Ee),F===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function H(F,Ee){let Re=x,He=!1;if(F)if(Re=y.get(Ee),Re===void 0&&(Re=[],y.set(Ee,Re)),F.isWebGLMultipleRenderTargets){const Be=F.texture;if(Re.length!==Be.length||Re[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Je=Be.length;Ke<Je;Ke++)Re[Ke]=t.COLOR_ATTACHMENT0+Ke;Re.length=Be.length,He=!0}}else Re[0]!==t.COLOR_ATTACHMENT0&&(Re[0]=t.COLOR_ATTACHMENT0,He=!0);else Re[0]!==t.BACK&&(Re[0]=t.BACK,He=!0);He&&(n.isWebGL2?t.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function be(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const Z={[Br]:t.FUNC_ADD,[SM]:t.FUNC_SUBTRACT,[EM]:t.FUNC_REVERSE_SUBTRACT};if(i)Z[Um]=t.MIN,Z[Om]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Z[Um]=F.MIN_EXT,Z[Om]=F.MAX_EXT)}const de={[MM]:t.ZERO,[TM]:t.ONE,[wM]:t.SRC_COLOR,[Uh]:t.SRC_ALPHA,[IM]:t.SRC_ALPHA_SATURATE,[RM]:t.DST_COLOR,[bM]:t.DST_ALPHA,[AM]:t.ONE_MINUS_SRC_COLOR,[Oh]:t.ONE_MINUS_SRC_ALPHA,[PM]:t.ONE_MINUS_DST_COLOR,[CM]:t.ONE_MINUS_DST_ALPHA,[LM]:t.CONSTANT_COLOR,[NM]:t.ONE_MINUS_CONSTANT_COLOR,[DM]:t.CONSTANT_ALPHA,[UM]:t.ONE_MINUS_CONSTANT_ALPHA};function fe(F,Ee,Re,He,Be,Ke,Je,rt,it,Xe){if(F===pr){u===!0&&(q(t.BLEND),u=!1);return}if(u===!1&&(pe(t.BLEND),u=!0),F!==xM){if(F!==_||Xe!==te){if((m!==Br||w!==Br)&&(t.blendEquation(t.FUNC_ADD),m=Br,w=Br),Xe)switch(F){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ia:t.blendFunc(t.ONE,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ia:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,R=null,T=null,B=null,M.set(0,0,0),b=0,_=F,te=Xe}return}Be=Be||Ee,Ke=Ke||Re,Je=Je||He,(Ee!==m||Be!==w)&&(t.blendEquationSeparate(Z[Ee],Z[Be]),m=Ee,w=Be),(Re!==E||He!==R||Ke!==T||Je!==B)&&(t.blendFuncSeparate(de[Re],de[He],de[Ke],de[Je]),E=Re,R=He,T=Ke,B=Je),(rt.equals(M)===!1||it!==b)&&(t.blendColor(rt.r,rt.g,rt.b,it),M.copy(rt),b=it),_=F,te=!1}function Ae(F,Ee){F.side===In?q(t.CULL_FACE):pe(t.CULL_FACE);let Re=F.side===Xt;Ee&&(Re=!Re),V(Re),F.blending===to&&F.transparent===!1?fe(pr):fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const He=F.stencilWrite;c.setTest(He),He&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),L(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):q(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(F){$!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),$=F)}function g(F){F!==vM?(pe(t.CULL_FACE),F!==me&&(F===Lm?t.cullFace(t.BACK):F===_M?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):q(t.CULL_FACE),me=F}function S(F){F!==z&&(U&&t.lineWidth(F),z=F)}function L(F,Ee,Re){F?(pe(t.POLYGON_OFFSET_FILL),(J!==Ee||Q!==Re)&&(t.polygonOffset(Ee,Re),J=Ee,Q=Re)):q(t.POLYGON_OFFSET_FILL)}function X(F){F?pe(t.SCISSOR_TEST):q(t.SCISSOR_TEST)}function Y(F){F===void 0&&(F=t.TEXTURE0+ie-1),ee!==F&&(t.activeTexture(F),ee=F)}function ne(F,Ee,Re){Re===void 0&&(ee===null?Re=t.TEXTURE0+ie-1:Re=ee);let He=ue[Re];He===void 0&&(He={type:void 0,texture:void 0},ue[Re]=He),(He.type!==F||He.texture!==Ee)&&(ee!==Re&&(t.activeTexture(Re),ee=Re),t.bindTexture(F,Ee||se[F]),He.type=F,He.texture=Ee)}function k(){const F=ue[ee];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(F){N.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),N.copy(F))}function ve(F){I.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),I.copy(F))}function De(F,Ee){let Re=h.get(Ee);Re===void 0&&(Re=new WeakMap,h.set(Ee,Re));let He=Re.get(F);He===void 0&&(He=t.getUniformBlockIndex(Ee,F.name),Re.set(F,He))}function Pe(F,Ee){const He=h.get(Ee).get(F);d.get(Ee)!==He&&(t.uniformBlockBinding(Ee,He,F.__bindingPointIndex),d.set(Ee,He))}function ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ee=null,ue={},v={},y=new WeakMap,x=[],p=null,u=!1,_=null,m=null,E=null,R=null,w=null,T=null,B=null,M=new tt(0,0,0),b=0,te=!1,$=null,me=null,z=null,J=null,Q=null,N.set(0,0,t.canvas.width,t.canvas.height),I.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:q,bindFramebuffer:_e,drawBuffers:H,useProgram:be,setBlending:fe,setMaterial:Ae,setFlipSided:V,setCullFace:g,setLineWidth:S,setPolygonOffset:L,setScissorTest:X,activeTexture:Y,bindTexture:ne,unbindTexture:k,compressedTexImage2D:re,compressedTexImage3D:ge,texImage2D:Ne,texImage3D:Se,updateUBOMapping:De,uniformBlockBinding:Pe,texStorage2D:ke,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:Ce,compressedTexSubImage2D:he,compressedTexSubImage3D:Fe,scissor:D,viewport:ve,reset:ye}}function gC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(g,S){return v?new OffscreenCanvas(g,S):Uc("canvas")}function x(g,S,L,X){let Y=1;if((g.width>X||g.height>X)&&(Y=X/Math.max(g.width,g.height)),Y<1||S===!0)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap){const ne=S?Gh:Math.floor,k=ne(Y*g.width),re=ne(Y*g.height);h===void 0&&(h=y(k,re));const ge=L?y(k,re):h;return ge.width=k,ge.height=re,ge.getContext("2d").drawImage(g,0,0,k,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+g.width+"x"+g.height+") to ("+k+"x"+re+")."),ge}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+g.width+"x"+g.height+")."),g;return g}function p(g){return hg(g.width)&&hg(g.height)}function u(g){return a?!1:g.wrapS!==jn||g.wrapT!==jn||g.minFilter!==Zt&&g.minFilter!==Rn}function _(g,S){return g.generateMipmaps&&S&&g.minFilter!==Zt&&g.minFilter!==Rn}function m(g){t.generateMipmap(g)}function E(g,S,L,X,Y=!1){if(a===!1)return S;if(g!==null){if(t[g]!==void 0)return t[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let ne=S;if(S===t.RED&&(L===t.FLOAT&&(ne=t.R32F),L===t.HALF_FLOAT&&(ne=t.R16F),L===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(ne=t.R8UI),L===t.UNSIGNED_SHORT&&(ne=t.R16UI),L===t.UNSIGNED_INT&&(ne=t.R32UI),L===t.BYTE&&(ne=t.R8I),L===t.SHORT&&(ne=t.R16I),L===t.INT&&(ne=t.R32I)),S===t.RG&&(L===t.FLOAT&&(ne=t.RG32F),L===t.HALF_FLOAT&&(ne=t.RG16F),L===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RGBA){const k=Y?Ic:ot.getTransfer(X);L===t.FLOAT&&(ne=t.RGBA32F),L===t.HALF_FLOAT&&(ne=t.RGBA16F),L===t.UNSIGNED_BYTE&&(ne=k===ut?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(g,S,L){return _(g,L)===!0||g.isFramebufferTexture&&g.minFilter!==Zt&&g.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?S.mipmaps.length:1}function w(g){return g===Zt||g===km||g===Ju?t.NEAREST:t.LINEAR}function T(g){const S=g.target;S.removeEventListener("dispose",T),M(S),S.isVideoTexture&&d.delete(S)}function B(g){const S=g.target;S.removeEventListener("dispose",B),te(S)}function M(g){const S=i.get(g);if(S.__webglInit===void 0)return;const L=g.source,X=f.get(L);if(X){const Y=X[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(g),Object.keys(X).length===0&&f.delete(L)}i.remove(g)}function b(g){const S=i.get(g);t.deleteTexture(S.__webglTexture);const L=g.source,X=f.get(L);delete X[S.__cacheKey],o.memory.textures--}function te(g){const S=g.texture,L=i.get(g),X=i.get(S);if(X.__webglTexture!==void 0&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(L.__webglFramebuffer[Y]))for(let ne=0;ne<L.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(L.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(L.__webglFramebuffer[Y]);L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer[Y])}else{if(Array.isArray(L.__webglFramebuffer))for(let Y=0;Y<L.__webglFramebuffer.length;Y++)t.deleteFramebuffer(L.__webglFramebuffer[Y]);else t.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&t.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let Y=0;Y<L.__webglColorRenderbuffer.length;Y++)L.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(L.__webglColorRenderbuffer[Y]);L.__webglDepthRenderbuffer&&t.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(g.isWebGLMultipleRenderTargets)for(let Y=0,ne=S.length;Y<ne;Y++){const k=i.get(S[Y]);k.__webglTexture&&(t.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(S[Y])}i.remove(S),i.remove(g)}let $=0;function me(){$=0}function z(){const g=$;return g>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),$+=1,g}function J(g){const S=[];return S.push(g.wrapS),S.push(g.wrapT),S.push(g.wrapR||0),S.push(g.magFilter),S.push(g.minFilter),S.push(g.anisotropy),S.push(g.internalFormat),S.push(g.format),S.push(g.type),S.push(g.generateMipmaps),S.push(g.premultiplyAlpha),S.push(g.flipY),S.push(g.unpackAlignment),S.push(g.colorSpace),S.join()}function Q(g,S){const L=i.get(g);if(g.isVideoTexture&&Ae(g),g.isRenderTargetTexture===!1&&g.version>0&&L.__version!==g.version){const X=g.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(L,g,S);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+S)}function ie(g,S){const L=i.get(g);if(g.version>0&&L.__version!==g.version){N(L,g,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+S)}function U(g,S){const L=i.get(g);if(g.version>0&&L.__version!==g.version){N(L,g,S);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+S)}function j(g,S){const L=i.get(g);if(g.version>0&&L.__version!==g.version){I(L,g,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+S)}const W={[Bh]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},ee={[Zt]:t.NEAREST,[km]:t.NEAREST_MIPMAP_NEAREST,[Ju]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[JM]:t.LINEAR_MIPMAP_NEAREST,[ba]:t.LINEAR_MIPMAP_LINEAR},ue={[cT]:t.NEVER,[mT]:t.ALWAYS,[uT]:t.LESS,[_y]:t.LEQUAL,[dT]:t.EQUAL,[pT]:t.GEQUAL,[hT]:t.GREATER,[fT]:t.NOTEQUAL};function oe(g,S,L){if(L?(t.texParameteri(g,t.TEXTURE_WRAP_S,W[S.wrapS]),t.texParameteri(g,t.TEXTURE_WRAP_T,W[S.wrapT]),(g===t.TEXTURE_3D||g===t.TEXTURE_2D_ARRAY)&&t.texParameteri(g,t.TEXTURE_WRAP_R,W[S.wrapR]),t.texParameteri(g,t.TEXTURE_MAG_FILTER,ee[S.magFilter]),t.texParameteri(g,t.TEXTURE_MIN_FILTER,ee[S.minFilter])):(t.texParameteri(g,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(g,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(g===t.TEXTURE_3D||g===t.TEXTURE_2D_ARRAY)&&t.texParameteri(g,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==jn||S.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(g,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(g,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Zt&&S.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(g,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(g,t.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Zt||S.minFilter!==Ju&&S.minFilter!==ba||S.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ca&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(g,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function O(g,S){let L=!1;g.__webglInit===void 0&&(g.__webglInit=!0,S.addEventListener("dispose",T));const X=S.source;let Y=f.get(X);Y===void 0&&(Y={},f.set(X,Y));const ne=J(S);if(ne!==g.__cacheKey){Y[ne]===void 0&&(Y[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Y[ne].usedTimes++;const k=Y[g.__cacheKey];k!==void 0&&(Y[g.__cacheKey].usedTimes--,k.usedTimes===0&&b(S)),g.__cacheKey=ne,g.__webglTexture=Y[ne].texture}return L}function N(g,S,L){let X=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=t.TEXTURE_3D);const Y=O(g,S),ne=S.source;n.bindTexture(X,g.__webglTexture,t.TEXTURE0+L);const k=i.get(ne);if(ne.version!==k.__version||Y===!0){n.activeTexture(t.TEXTURE0+L);const re=ot.getPrimaries(ot.workingColorSpace),ge=S.colorSpace===Ln?null:ot.getPrimaries(S.colorSpace),Te=S.colorSpace===Ln||re===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=u(S)&&p(S.image)===!1;let he=x(S.image,Ce,!1,r.maxTextureSize);he=V(S,he);const Fe=p(he)||a,ke=s.convert(S.format,S.colorSpace);let Le=s.convert(S.type),Ne=E(S.internalFormat,ke,Le,S.colorSpace,S.isVideoTexture);oe(X,S,Fe);let Se;const D=S.mipmaps,ve=a&&S.isVideoTexture!==!0&&Ne!==my,De=k.__version===void 0||Y===!0,Pe=R(S,he,Fe);if(S.isDepthTexture)Ne=t.DEPTH_COMPONENT,a?S.type===sr?Ne=t.DEPTH_COMPONENT32F:S.type===rr?Ne=t.DEPTH_COMPONENT24:S.type===$r?Ne=t.DEPTH24_STENCIL8:Ne=t.DEPTH_COMPONENT16:S.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===qr&&Ne===t.DEPTH_COMPONENT&&S.type!==Zf&&S.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=rr,Le=s.convert(S.type)),S.format===vo&&Ne===t.DEPTH_COMPONENT&&(Ne=t.DEPTH_STENCIL,S.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$r,Le=s.convert(S.type))),De&&(ve?n.texStorage2D(t.TEXTURE_2D,1,Ne,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ne,he.width,he.height,0,ke,Le,null));else if(S.isDataTexture)if(D.length>0&&Fe){ve&&De&&n.texStorage2D(t.TEXTURE_2D,Pe,Ne,D[0].width,D[0].height);for(let ye=0,F=D.length;ye<F;ye++)Se=D[ye],ve?n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Se.width,Se.height,ke,Le,Se.data):n.texImage2D(t.TEXTURE_2D,ye,Ne,Se.width,Se.height,0,ke,Le,Se.data);S.generateMipmaps=!1}else ve?(De&&n.texStorage2D(t.TEXTURE_2D,Pe,Ne,he.width,he.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,ke,Le,he.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,he.width,he.height,0,ke,Le,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ve&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ne,D[0].width,D[0].height,he.depth);for(let ye=0,F=D.length;ye<F;ye++)Se=D[ye],S.format!==Xn?ke!==null?ve?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,he.depth,ke,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ye,Ne,Se.width,Se.height,he.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,he.depth,ke,Le,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ye,Ne,Se.width,Se.height,he.depth,0,ke,Le,Se.data)}else{ve&&De&&n.texStorage2D(t.TEXTURE_2D,Pe,Ne,D[0].width,D[0].height);for(let ye=0,F=D.length;ye<F;ye++)Se=D[ye],S.format!==Xn?ke!==null?ve?n.compressedTexSubImage2D(t.TEXTURE_2D,ye,0,0,Se.width,Se.height,ke,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ye,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Se.width,Se.height,ke,Le,Se.data):n.texImage2D(t.TEXTURE_2D,ye,Ne,Se.width,Se.height,0,ke,Le,Se.data)}else if(S.isDataArrayTexture)ve?(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ne,he.width,he.height,he.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ke,Le,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,ke,Le,he.data);else if(S.isData3DTexture)ve?(De&&n.texStorage3D(t.TEXTURE_3D,Pe,Ne,he.width,he.height,he.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ke,Le,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,ke,Le,he.data);else if(S.isFramebufferTexture){if(De)if(ve)n.texStorage2D(t.TEXTURE_2D,Pe,Ne,he.width,he.height);else{let ye=he.width,F=he.height;for(let Ee=0;Ee<Pe;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Ne,ye,F,0,ke,Le,null),ye>>=1,F>>=1}}else if(D.length>0&&Fe){ve&&De&&n.texStorage2D(t.TEXTURE_2D,Pe,Ne,D[0].width,D[0].height);for(let ye=0,F=D.length;ye<F;ye++)Se=D[ye],ve?n.texSubImage2D(t.TEXTURE_2D,ye,0,0,ke,Le,Se):n.texImage2D(t.TEXTURE_2D,ye,Ne,ke,Le,Se);S.generateMipmaps=!1}else ve?(De&&n.texStorage2D(t.TEXTURE_2D,Pe,Ne,he.width,he.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ke,Le,he)):n.texImage2D(t.TEXTURE_2D,0,Ne,ke,Le,he);_(S,Fe)&&m(X),k.__version=ne.version,S.onUpdate&&S.onUpdate(S)}g.__version=S.version}function I(g,S,L){if(S.image.length!==6)return;const X=O(g,S),Y=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,g.__webglTexture,t.TEXTURE0+L);const ne=i.get(Y);if(Y.version!==ne.__version||X===!0){n.activeTexture(t.TEXTURE0+L);const k=ot.getPrimaries(ot.workingColorSpace),re=S.colorSpace===Ln?null:ot.getPrimaries(S.colorSpace),ge=S.colorSpace===Ln||k===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,Ce=S.image[0]&&S.image[0].isDataTexture,he=[];for(let ye=0;ye<6;ye++)!Te&&!Ce?he[ye]=x(S.image[ye],!1,!0,r.maxCubemapSize):he[ye]=Ce?S.image[ye].image:S.image[ye],he[ye]=V(S,he[ye]);const Fe=he[0],ke=p(Fe)||a,Le=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type),Se=E(S.internalFormat,Le,Ne,S.colorSpace),D=a&&S.isVideoTexture!==!0,ve=ne.__version===void 0||X===!0;let De=R(S,Fe,ke);oe(t.TEXTURE_CUBE_MAP,S,ke);let Pe;if(Te){D&&ve&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Se,Fe.width,Fe.height);for(let ye=0;ye<6;ye++){Pe=he[ye].mipmaps;for(let F=0;F<Pe.length;F++){const Ee=Pe[F];S.format!==Xn?Le!==null?D?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F,0,0,Ee.width,Ee.height,Le,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F,Se,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F,0,0,Ee.width,Ee.height,Le,Ne,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F,Se,Ee.width,Ee.height,0,Le,Ne,Ee.data)}}}else{Pe=S.mipmaps,D&&ve&&(Pe.length>0&&De++,n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Se,he[0].width,he[0].height));for(let ye=0;ye<6;ye++)if(Ce){D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,he[ye].width,he[ye].height,Le,Ne,he[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Se,he[ye].width,he[ye].height,0,Le,Ne,he[ye].data);for(let F=0;F<Pe.length;F++){const Re=Pe[F].image[ye].image;D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F+1,0,0,Re.width,Re.height,Le,Ne,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F+1,Se,Re.width,Re.height,0,Le,Ne,Re.data)}}else{D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Le,Ne,he[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Se,Le,Ne,he[ye]);for(let F=0;F<Pe.length;F++){const Ee=Pe[F];D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F+1,0,0,Le,Ne,Ee.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,F+1,Se,Le,Ne,Ee.image[ye])}}}_(S,ke)&&m(t.TEXTURE_CUBE_MAP),ne.__version=Y.version,S.onUpdate&&S.onUpdate(S)}g.__version=S.version}function A(g,S,L,X,Y,ne){const k=s.convert(L.format,L.colorSpace),re=s.convert(L.type),ge=E(L.internalFormat,k,re,L.colorSpace);if(!i.get(S).__hasExternalTextures){const Ce=Math.max(1,S.width>>ne),he=Math.max(1,S.height>>ne);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,ne,ge,Ce,he,S.depth,0,k,re,null):n.texImage2D(Y,ne,ge,Ce,he,0,k,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,g),fe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Y,i.get(L).__webglTexture,0,de(S)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Y,i.get(L).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(g,S,L){if(t.bindRenderbuffer(t.RENDERBUFFER,g),S.depthBuffer&&!S.stencilBuffer){let X=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(L||fe(S)){const Y=S.depthTexture;Y&&Y.isDepthTexture&&(Y.type===sr?X=t.DEPTH_COMPONENT32F:Y.type===rr&&(X=t.DEPTH_COMPONENT24));const ne=de(S);fe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,X,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,X,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,X,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,g)}else if(S.depthBuffer&&S.stencilBuffer){const X=de(S);L&&fe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,X,t.DEPTH24_STENCIL8,S.width,S.height):fe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,g)}else{const X=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0;Y<X.length;Y++){const ne=X[Y],k=s.convert(ne.format,ne.colorSpace),re=s.convert(ne.type),ge=E(ne.internalFormat,k,re,ne.colorSpace),Te=de(S);L&&fe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,ge,S.width,S.height):fe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(g,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,g),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const X=i.get(S.depthTexture).__webglTexture,Y=de(S);if(S.depthTexture.format===qr)fe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(S.depthTexture.format===vo)fe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function q(g){const S=i.get(g),L=g.isWebGLCubeRenderTarget===!0;if(g.depthTexture&&!S.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,g)}else if(L){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]=t.createRenderbuffer(),se(S.__webglDepthbuffer[X],g,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),se(S.__webglDepthbuffer,g,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(g,S,L){const X=i.get(g);S!==void 0&&A(X.__webglFramebuffer,g,g.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&q(g)}function H(g){const S=g.texture,L=i.get(g),X=i.get(S);g.addEventListener("dispose",B),g.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=S.version,o.memory.textures++);const Y=g.isWebGLCubeRenderTarget===!0,ne=g.isWebGLMultipleRenderTargets===!0,k=p(g)||a;if(Y){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let ge=0;ge<S.mipmaps.length;ge++)L.__webglFramebuffer[re][ge]=t.createFramebuffer()}else L.__webglFramebuffer[re]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)L.__webglFramebuffer[re]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const re=g.texture;for(let ge=0,Te=re.length;ge<Te;ge++){const Ce=i.get(re[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&g.samples>0&&fe(g)===!1){const re=ne?S:[S];L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const Te=re[ge];L.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ge]);const Ce=s.convert(Te.format,Te.colorSpace),he=s.convert(Te.type),Fe=E(Te.internalFormat,Ce,he,Te.colorSpace,g.isXRRenderTarget===!0),ke=de(g);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Fe,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,L.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),g.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),se(L.__webglDepthRenderbuffer,g,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S,k);for(let re=0;re<6;re++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)A(L.__webglFramebuffer[re][ge],g,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge);else A(L.__webglFramebuffer[re],g,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(S,k)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const re=g.texture;for(let ge=0,Te=re.length;ge<Te;ge++){const Ce=re[ge],he=i.get(Ce);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),oe(t.TEXTURE_2D,Ce,k),A(L.__webglFramebuffer,g,Ce,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),_(Ce,k)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(a?re=g.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(re,X.__webglTexture),oe(re,S,k),a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)A(L.__webglFramebuffer[ge],g,S,t.COLOR_ATTACHMENT0,re,ge);else A(L.__webglFramebuffer,g,S,t.COLOR_ATTACHMENT0,re,0);_(S,k)&&m(re),n.unbindTexture()}g.depthBuffer&&q(g)}function be(g){const S=p(g)||a,L=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let X=0,Y=L.length;X<Y;X++){const ne=L[X];if(_(ne,S)){const k=g.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,re=i.get(ne).__webglTexture;n.bindTexture(k,re),m(k),n.unbindTexture()}}}function Z(g){if(a&&g.samples>0&&fe(g)===!1){const S=g.isWebGLMultipleRenderTargets?g.texture:[g.texture],L=g.width,X=g.height;let Y=t.COLOR_BUFFER_BIT;const ne=[],k=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=i.get(g),ge=g.isWebGLMultipleRenderTargets===!0;if(ge)for(let Te=0;Te<S.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){ne.push(t.COLOR_ATTACHMENT0+Te),g.depthBuffer&&ne.push(k);const Ce=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ce===!1&&(g.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),g.stencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,re.__webglColorRenderbuffer[Te]),Ce===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[k]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[k])),ge){const he=i.get(S[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,L,X,0,0,L,X,Y,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<S.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,re.__webglColorRenderbuffer[Te]);const Ce=i.get(S[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function de(g){return Math.min(r.maxSamples,g.samples)}function fe(g){const S=i.get(g);return a&&g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(g){const S=o.render.frame;d.get(g)!==S&&(d.set(g,S),g.update())}function V(g,S){const L=g.colorSpace,X=g.format,Y=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||g.format===Hh||L!==Di&&L!==Ln&&(ot.getTransfer(L)===ut?a===!1?e.has("EXT_sRGB")===!0&&X===Xn?(g.format=Hh,g.minFilter=Rn,g.generateMipmaps=!1):S=xy.sRGBToLinear(S):(X!==Xn||Y!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),S}this.allocateTextureUnit=z,this.resetTextureUnits=me,this.setTexture2D=Q,this.setTexture2DArray=ie,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=_e,this.setupRenderTarget=H,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=A,this.useMultisampledRTT=fe}function vC(t,e,n){const i=n.isWebGL2;function r(s,o=Ln){let a;const l=ot.getTransfer(o);if(s===gr)return t.UNSIGNED_BYTE;if(s===uy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===dy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ZM)return t.BYTE;if(s===QM)return t.SHORT;if(s===Zf)return t.UNSIGNED_SHORT;if(s===cy)return t.INT;if(s===rr)return t.UNSIGNED_INT;if(s===sr)return t.FLOAT;if(s===Ca)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===eT)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===tT)return t.LUMINANCE;if(s===nT)return t.LUMINANCE_ALPHA;if(s===qr)return t.DEPTH_COMPONENT;if(s===vo)return t.DEPTH_STENCIL;if(s===Hh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===iT)return t.RED;if(s===hy)return t.RED_INTEGER;if(s===rT)return t.RG;if(s===fy)return t.RG_INTEGER;if(s===py)return t.RGBA_INTEGER;if(s===Zu||s===Qu||s===ed||s===td)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fm||s===Bm||s===zm||s===Hm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===my)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vm||s===Gm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vm)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wm||s===jm||s===Xm||s===$m||s===qm||s===Ym||s===Km||s===Jm||s===Zm||s===Qm||s===eg||s===tg||s===ng||s===ig)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$m)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ym)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Km)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ng)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ig)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nd||s===rg||s===sg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nd)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sT||s===og||s===ag||s===lg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===og)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ag)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class _C extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yC={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,y=.005;c.inputState.pinching&&f>v+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=v-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class xC extends cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,v=null,y=null;const x=n.getContextAttributes();let p=null,u=null;const _=[],m=[],E=new Me;let R=null;const w=new Pn;w.layers.enable(1),w.viewport=new Dt;const T=new Pn;T.layers.enable(2),T.viewport=new Dt;const B=[w,T],M=new _C;M.layers.enable(1),M.layers.enable(2);let b=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let O=_[oe];return O===void 0&&(O=new Ad,_[oe]=O),O.getTargetRaySpace()},this.getControllerGrip=function(oe){let O=_[oe];return O===void 0&&(O=new Ad,_[oe]=O),O.getGripSpace()},this.getHand=function(oe){let O=_[oe];return O===void 0&&(O=new Ad,_[oe]=O),O.getHandSpace()};function $(oe){const O=m.indexOf(oe.inputSource);if(O===-1)return;const N=_[O];N!==void 0&&(N.update(oe.inputSource,oe.frame,c||o),N.dispatchEvent({type:oe.type,data:oe.inputSource}))}function me(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",me),r.removeEventListener("inputsourceschange",z);for(let oe=0;oe<_.length;oe++){const O=m[oe];O!==null&&(m[oe]=null,_[oe].disconnect(O))}b=null,te=null,e.setRenderTarget(p),v=null,f=null,h=null,r=null,u=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",me),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),u=new ns(v.framebufferWidth,v.framebufferHeight,{format:Xn,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let O=null,N=null,I=null;x.depth&&(I=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=x.stencil?vo:qr,N=x.stencil?$r:rr);const A={colorFormat:n.RGBA8,depthFormat:I,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(A),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new ns(f.textureWidth,f.textureHeight,{format:Xn,type:gr,depthTexture:new Ny(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const se=e.properties.get(u);se.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ue.setContext(r),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(oe){for(let O=0;O<oe.removed.length;O++){const N=oe.removed[O],I=m.indexOf(N);I>=0&&(m[I]=null,_[I].disconnect(N))}for(let O=0;O<oe.added.length;O++){const N=oe.added[O];let I=m.indexOf(N);if(I===-1){for(let se=0;se<_.length;se++)if(se>=m.length){m.push(N),I=se;break}else if(m[se]===null){m[se]=N,I=se;break}if(I===-1)break}const A=_[I];A&&A.connect(N)}}const J=new G,Q=new G;function ie(oe,O,N){J.setFromMatrixPosition(O.matrixWorld),Q.setFromMatrixPosition(N.matrixWorld);const I=J.distanceTo(Q),A=O.projectionMatrix.elements,se=N.projectionMatrix.elements,pe=A[14]/(A[10]-1),q=A[14]/(A[10]+1),_e=(A[9]+1)/A[5],H=(A[9]-1)/A[5],be=(A[8]-1)/A[0],Z=(se[8]+1)/se[0],de=pe*be,fe=pe*Z,Ae=I/(-be+Z),V=Ae*-be;O.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(V),oe.translateZ(Ae),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const g=pe+Ae,S=q+Ae,L=de-V,X=fe+(I-V),Y=_e*q/S*g,ne=H*q/S*g;oe.projectionMatrix.makePerspective(L,X,Y,ne,g,S),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function U(oe,O){O===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(O.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;M.near=T.near=w.near=oe.near,M.far=T.far=w.far=oe.far,(b!==M.near||te!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,te=M.far);const O=oe.parent,N=M.cameras;U(M,O);for(let I=0;I<N.length;I++)U(N[I],O);N.length===2?ie(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),j(oe,M,O)};function j(oe,O,N){N===null?oe.matrix.copy(O.matrixWorld):(oe.matrix.copy(N.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(O.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(O.projectionMatrix),oe.projectionMatrixInverse.copy(O.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Vh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&v===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=oe)};let W=null;function ee(oe,O){if(d=O.getViewerPose(c||o),y=O,d!==null){const N=d.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let I=!1;N.length!==M.cameras.length&&(M.cameras.length=0,I=!0);for(let A=0;A<N.length;A++){const se=N[A];let pe=null;if(v!==null)pe=v.getViewport(se);else{const _e=h.getViewSubImage(f,se);pe=_e.viewport,A===0&&(e.setRenderTargetTextures(u,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(u))}let q=B[A];q===void 0&&(q=new Pn,q.layers.enable(A),q.viewport=new Dt,B[A]=q),q.matrix.fromArray(se.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(se.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(pe.x,pe.y,pe.width,pe.height),A===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),I===!0&&M.cameras.push(q)}}for(let N=0;N<_.length;N++){const I=m[N],A=_[N];I!==null&&A!==void 0&&A.update(I,O,c||o)}W&&W(oe,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),y=null}const ue=new Iy;ue.setAnimationLoop(ee),this.setAnimationLoop=function(oe){W=oe},this.dispose=function(){}}}function SC(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Cy(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,m,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&v(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,m):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Xt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Xt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,m){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=m*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function v(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,m){const E=m.program;i.uniformBlockBinding(_,E)}function c(_,m){let E=r[_.id];E===void 0&&(y(_),E=d(_),r[_.id]=E,_.addEventListener("dispose",p));const R=m.program;i.updateUBOMapping(_,R);const w=e.render.frame;s[_.id]!==w&&(f(_),s[_.id]=w)}function d(_){const m=h();_.__bindingPointIndex=m;const E=t.createBuffer(),R=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,E),E}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const m=r[_.id],E=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let w=0,T=E.length;w<T;w++){const B=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,b=B.length;M<b;M++){const te=B[M];if(v(te,w,M,R)===!0){const $=te.__offset,me=Array.isArray(te.value)?te.value:[te.value];let z=0;for(let J=0;J<me.length;J++){const Q=me[J],ie=x(Q);typeof Q=="number"||typeof Q=="boolean"?(te.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,$+z,te.__data)):Q.isMatrix3?(te.__data[0]=Q.elements[0],te.__data[1]=Q.elements[1],te.__data[2]=Q.elements[2],te.__data[3]=0,te.__data[4]=Q.elements[3],te.__data[5]=Q.elements[4],te.__data[6]=Q.elements[5],te.__data[7]=0,te.__data[8]=Q.elements[6],te.__data[9]=Q.elements[7],te.__data[10]=Q.elements[8],te.__data[11]=0):(Q.toArray(te.__data,z),z+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,te.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(_,m,E,R){const w=_.value,T=m+"_"+E;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const B=R[T];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return R[T]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function y(_){const m=_.uniforms;let E=0;const R=16;for(let T=0,B=m.length;T<B;T++){const M=Array.isArray(m[T])?m[T]:[m[T]];for(let b=0,te=M.length;b<te;b++){const $=M[b],me=Array.isArray($.value)?$.value:[$.value];for(let z=0,J=me.length;z<J;z++){const Q=me[z],ie=x(Q),U=E%R;U!==0&&R-U<ie.boundary&&(E+=R-U),$.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=ie.storage}}}const w=E%R;return w>0&&(E+=R-w),_.__size=E,_.__cache={},this}function x(_){const m={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function p(_){const m=_.target;m.removeEventListener("dispose",p);const E=o.indexOf(m.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class By{constructor(e={}){const{canvas:n=_T(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const m=this;let E=!1,R=0,w=0,T=null,B=-1,M=null;const b=new Dt,te=new Dt;let $=null;const me=new tt(0);let z=0,J=n.width,Q=n.height,ie=1,U=null,j=null;const W=new Dt(0,0,J,Q),ee=new Dt(0,0,J,Q);let ue=!1;const oe=new tp;let O=!1,N=!1,I=null;const A=new wt,se=new Me,pe=new G,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?ie:1}let H=i;function be(C,K){for(let ae=0;ae<C.length;ae++){const ce=C[ae],le=n.getContext(ce,K);if(le!==null)return le}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),H===null){const K=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&K.shift(),H=be(K,C),H===null)throw be(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,de,fe,Ae,V,g,S,L,X,Y,ne,k,re,ge,Te,Ce,he,Fe,ke,Le,Ne,Se,D,ve;function De(){Z=new LA(H),de=new AA(H,Z,e),Z.init(de),Se=new vC(H,Z,de),fe=new mC(H,Z,de),Ae=new UA(H),V=new tC,g=new gC(H,Z,fe,V,de,Se,Ae),S=new CA(m),L=new IA(m),X=new GT(H,de),D=new TA(H,Z,X,de),Y=new NA(H,X,Ae,D),ne=new BA(H,Y,X,Ae),ke=new FA(H,de,g),Ce=new bA(V),k=new eC(m,S,L,Z,de,D,Ce),re=new SC(m,V),ge=new iC,Te=new cC(Z,de),Fe=new MA(m,S,L,fe,ne,f,l),he=new pC(m,ne,de),ve=new EC(H,Ae,de,fe),Le=new wA(H,Z,Ae,de),Ne=new DA(H,Z,Ae,de),Ae.programs=k.programs,m.capabilities=de,m.extensions=Z,m.properties=V,m.renderLists=ge,m.shadowMap=he,m.state=fe,m.info=Ae}De();const Pe=new xC(m,H);this.xr=Pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(J,Q,!1))},this.getSize=function(C){return C.set(J,Q)},this.setSize=function(C,K,ae=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,Q=K,n.width=Math.floor(C*ie),n.height=Math.floor(K*ie),ae===!0&&(n.style.width=C+"px",n.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(J*ie,Q*ie).floor()},this.setDrawingBufferSize=function(C,K,ae){J=C,Q=K,ie=ae,n.width=Math.floor(C*ae),n.height=Math.floor(K*ae),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,K,ae,ce){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,K,ae,ce),fe.viewport(b.copy(W).multiplyScalar(ie).floor())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,K,ae,ce){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,K,ae,ce),fe.scissor(te.copy(ee).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){fe.setScissorTest(ue=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,K=!0,ae=!0){let ce=0;if(C){let le=!1;if(T!==null){const Ue=T.texture.format;le=Ue===py||Ue===fy||Ue===hy}if(le){const Ue=T.texture.type,ze=Ue===gr||Ue===rr||Ue===Zf||Ue===$r||Ue===uy||Ue===dy,Ve=Fe.getClearColor(),We=Fe.getClearAlpha(),Ze=Ve.r,$e=Ve.g,qe=Ve.b;ze?(v[0]=Ze,v[1]=$e,v[2]=qe,v[3]=We,H.clearBufferuiv(H.COLOR,0,v)):(y[0]=Ze,y[1]=$e,y[2]=qe,y[3]=We,H.clearBufferiv(H.COLOR,0,y))}else ce|=H.COLOR_BUFFER_BIT}K&&(ce|=H.DEPTH_BUFFER_BIT),ae&&(ce|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ge.dispose(),Te.dispose(),V.dispose(),S.dispose(),L.dispose(),ne.dispose(),D.dispose(),ve.dispose(),k.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",it),Pe.removeEventListener("sessionend",Xe),I&&(I.dispose(),I=null),_t.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Ae.autoReset,K=he.enabled,ae=he.autoUpdate,ce=he.needsUpdate,le=he.type;De(),Ae.autoReset=C,he.enabled=K,he.autoUpdate=ae,he.needsUpdate=ce,he.type=le}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Re(C){const K=C.target;K.removeEventListener("dispose",Re),He(K)}function He(C){Be(C),V.remove(C)}function Be(C){const K=V.get(C).programs;K!==void 0&&(K.forEach(function(ae){k.releaseProgram(ae)}),C.isShaderMaterial&&k.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ae,ce,le,Ue){K===null&&(K=q);const ze=le.isMesh&&le.matrixWorld.determinant()<0,Ve=br(C,K,ae,ce,le);fe.setMaterial(ce,ze);let We=ae.index,Ze=1;if(ce.wireframe===!0){if(We=Y.getWireframeAttribute(ae),We===void 0)return;Ze=2}const $e=ae.drawRange,qe=ae.attributes.position;let St=$e.start*Ze,mn=($e.start+$e.count)*Ze;Ue!==null&&(St=Math.max(St,Ue.start*Ze),mn=Math.min(mn,(Ue.start+Ue.count)*Ze)),We!==null?(St=Math.max(St,0),mn=Math.min(mn,We.count)):qe!=null&&(St=Math.max(St,0),mn=Math.min(mn,qe.count));const Pt=mn-St;if(Pt<0||Pt===1/0)return;D.setup(le,ce,Ve,ae,We);let di,ft=Le;if(We!==null&&(di=X.get(We),ft=Ne,ft.setIndex(di)),le.isMesh)ce.wireframe===!0?(fe.setLineWidth(ce.wireframeLinewidth*_e()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(le.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),fe.setLineWidth(Qe*_e()),le.isLineSegments?ft.setMode(H.LINES):le.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else le.isPoints?ft.setMode(H.POINTS):le.isSprite&&ft.setMode(H.TRIANGLES);if(le.isBatchedMesh)ft.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else if(le.isInstancedMesh)ft.renderInstances(St,Pt,le.count);else if(ae.isInstancedBufferGeometry){const Qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Su=Math.min(ae.instanceCount,Qe);ft.renderInstances(St,Pt,Su)}else ft.render(St,Pt)};function Ke(C,K,ae){C.transparent===!0&&C.side===In&&C.forceSinglePass===!1?(C.side=Xt,C.needsUpdate=!0,Ar(C,K,ae),C.side=Er,C.needsUpdate=!0,Ar(C,K,ae),C.side=In):Ar(C,K,ae)}this.compile=function(C,K,ae=null){ae===null&&(ae=C),p=Te.get(ae),p.init(),_.push(p),ae.traverseVisible(function(le){le.isLight&&le.layers.test(K.layers)&&(p.pushLight(le),le.castShadow&&p.pushShadow(le))}),C!==ae&&C.traverseVisible(function(le){le.isLight&&le.layers.test(K.layers)&&(p.pushLight(le),le.castShadow&&p.pushShadow(le))}),p.setupLights(m._useLegacyLights);const ce=new Set;return C.traverse(function(le){const Ue=le.material;if(Ue)if(Array.isArray(Ue))for(let ze=0;ze<Ue.length;ze++){const Ve=Ue[ze];Ke(Ve,ae,le),ce.add(Ve)}else Ke(Ue,ae,le),ce.add(Ue)}),_.pop(),p=null,ce},this.compileAsync=function(C,K,ae=null){const ce=this.compile(C,K,ae);return new Promise(le=>{function Ue(){if(ce.forEach(function(ze){V.get(ze).currentProgram.isReady()&&ce.delete(ze)}),ce.size===0){le(C);return}setTimeout(Ue,10)}Z.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Je=null;function rt(C){Je&&Je(C)}function it(){_t.stop()}function Xe(){_t.start()}const _t=new Iy;_t.setAnimationLoop(rt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(C){Je=C,Pe.setAnimationLoop(C),C===null?_t.stop():_t.start()},Pe.addEventListener("sessionstart",it),Pe.addEventListener("sessionend",Xe),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(K),K=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,K,T),p=Te.get(C,_.length),p.init(),_.push(p),A.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),oe.setFromProjectionMatrix(A),N=this.localClippingEnabled,O=Ce.init(this.clippingPlanes,N),x=ge.get(C,u.length),x.init(),u.push(x),Tn(C,K,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(U,j),this.info.render.frame++,O===!0&&Ce.beginShadows();const ae=p.state.shadowsArray;if(he.render(ae,C,K),O===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Fe.render(x,C),p.setupLights(m._useLegacyLights),K.isArrayCamera){const ce=K.cameras;for(let le=0,Ue=ce.length;le<Ue;le++){const ze=ce[le];us(x,C,ze,ze.viewport)}}else us(x,C,K);T!==null&&(g.updateMultisampleRenderTarget(T),g.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(m,C,K),D.resetDefaultState(),B=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Tn(C,K,ae,ce){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||oe.intersectsSprite(C)){ce&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(A);const ze=ne.update(C),Ve=C.material;Ve.visible&&x.push(C,ze,Ve,ae,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||oe.intersectsObject(C))){const ze=ne.update(C),Ve=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),pe.copy(ze.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(A)),Array.isArray(Ve)){const We=ze.groups;for(let Ze=0,$e=We.length;Ze<$e;Ze++){const qe=We[Ze],St=Ve[qe.materialIndex];St&&St.visible&&x.push(C,ze,St,ae,pe.z,qe)}}else Ve.visible&&x.push(C,ze,Ve,ae,pe.z,null)}}const Ue=C.children;for(let ze=0,Ve=Ue.length;ze<Ve;ze++)Tn(Ue[ze],K,ae,ce)}function us(C,K,ae,ce){const le=C.opaque,Ue=C.transmissive,ze=C.transparent;p.setupLightsView(ae),O===!0&&Ce.setGlobalState(m.clippingPlanes,ae),Ue.length>0&&qa(le,Ue,K,ae),ce&&fe.viewport(b.copy(ce)),le.length>0&&sn(le,K,ae),Ue.length>0&&sn(Ue,K,ae),ze.length>0&&sn(ze,K,ae),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function qa(C,K,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ue=de.isWebGL2;I===null&&(I=new ns(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Ca:gr,minFilter:ba,samples:Ue?4:0})),m.getDrawingBufferSize(se),Ue?I.setSize(se.x,se.y):I.setSize(Gh(se.x),Gh(se.y));const ze=m.getRenderTarget();m.setRenderTarget(I),m.getClearColor(me),z=m.getClearAlpha(),z<1&&m.setClearColor(16777215,.5),m.clear();const Ve=m.toneMapping;m.toneMapping=mr,sn(C,ae,ce),g.updateMultisampleRenderTarget(I),g.updateRenderTargetMipmap(I);let We=!1;for(let Ze=0,$e=K.length;Ze<$e;Ze++){const qe=K[Ze],St=qe.object,mn=qe.geometry,Pt=qe.material,di=qe.group;if(Pt.side===In&&St.layers.test(ce.layers)){const ft=Pt.side;Pt.side=Xt,Pt.needsUpdate=!0,Co(St,ae,ce,mn,Pt,di),Pt.side=ft,Pt.needsUpdate=!0,We=!0}}We===!0&&(g.updateMultisampleRenderTarget(I),g.updateRenderTargetMipmap(I)),m.setRenderTarget(ze),m.setClearColor(me,z),m.toneMapping=Ve}function sn(C,K,ae){const ce=K.isScene===!0?K.overrideMaterial:null;for(let le=0,Ue=C.length;le<Ue;le++){const ze=C[le],Ve=ze.object,We=ze.geometry,Ze=ce===null?ze.material:ce,$e=ze.group;Ve.layers.test(ae.layers)&&Co(Ve,K,ae,We,Ze,$e)}}function Co(C,K,ae,ce,le,Ue){C.onBeforeRender(m,K,ae,ce,le,Ue),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),le.onBeforeRender(m,K,ae,ce,C,Ue),le.transparent===!0&&le.side===In&&le.forceSinglePass===!1?(le.side=Xt,le.needsUpdate=!0,m.renderBufferDirect(ae,K,ce,le,C,Ue),le.side=Er,le.needsUpdate=!0,m.renderBufferDirect(ae,K,ce,le,C,Ue),le.side=In):m.renderBufferDirect(ae,K,ce,le,C,Ue),C.onAfterRender(m,K,ae,ce,le,Ue)}function Ar(C,K,ae){K.isScene!==!0&&(K=q);const ce=V.get(C),le=p.state.lights,Ue=p.state.shadowsArray,ze=le.state.version,Ve=k.getParameters(C,le.state,Ue,K,ae),We=k.getProgramCacheKey(Ve);let Ze=ce.programs;ce.environment=C.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(C.isMeshStandardMaterial?L:S).get(C.envMap||ce.environment),Ze===void 0&&(C.addEventListener("dispose",Re),Ze=new Map,ce.programs=Ze);let $e=Ze.get(We);if($e!==void 0){if(ce.currentProgram===$e&&ce.lightsStateVersion===ze)return ds(C,Ve),$e}else Ve.uniforms=k.getUniforms(C),C.onBuild(ae,Ve,m),C.onBeforeCompile(Ve,m),$e=k.acquireProgram(Ve,We),Ze.set(We,$e),ce.uniforms=Ve.uniforms;const qe=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Ce.uniform),ds(C,Ve),ce.needsLights=xu(C),ce.lightsStateVersion=ze,ce.needsLights&&(qe.ambientLightColor.value=le.state.ambient,qe.lightProbe.value=le.state.probe,qe.directionalLights.value=le.state.directional,qe.directionalLightShadows.value=le.state.directionalShadow,qe.spotLights.value=le.state.spot,qe.spotLightShadows.value=le.state.spotShadow,qe.rectAreaLights.value=le.state.rectArea,qe.ltc_1.value=le.state.rectAreaLTC1,qe.ltc_2.value=le.state.rectAreaLTC2,qe.pointLights.value=le.state.point,qe.pointLightShadows.value=le.state.pointShadow,qe.hemisphereLights.value=le.state.hemi,qe.directionalShadowMap.value=le.state.directionalShadowMap,qe.directionalShadowMatrix.value=le.state.directionalShadowMatrix,qe.spotShadowMap.value=le.state.spotShadowMap,qe.spotLightMatrix.value=le.state.spotLightMatrix,qe.spotLightMap.value=le.state.spotLightMap,qe.pointShadowMap.value=le.state.pointShadowMap,qe.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.currentProgram=$e,ce.uniformsList=null,$e}function _u(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=ec.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function ds(C,K){const ae=V.get(C);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function br(C,K,ae,ce,le){K.isScene!==!0&&(K=q),g.resetTextureUnits();const Ue=K.fog,ze=ce.isMeshStandardMaterial?K.environment:null,Ve=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Di,We=(ce.isMeshStandardMaterial?L:S).get(ce.envMap||ze),Ze=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,$e=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),qe=!!ae.morphAttributes.position,St=!!ae.morphAttributes.normal,mn=!!ae.morphAttributes.color;let Pt=mr;ce.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=m.toneMapping);const di=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ft=di!==void 0?di.length:0,Qe=V.get(ce),Su=p.state.lights;if(O===!0&&(N===!0||C!==M)){const wn=C===M&&ce.id===B;Ce.setState(ce,C,wn)}let yt=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Su.state.version||Qe.outputColorSpace!==Ve||le.isBatchedMesh&&Qe.batching===!1||!le.isBatchedMesh&&Qe.batching===!0||le.isInstancedMesh&&Qe.instancing===!1||!le.isInstancedMesh&&Qe.instancing===!0||le.isSkinnedMesh&&Qe.skinning===!1||!le.isSkinnedMesh&&Qe.skinning===!0||le.isInstancedMesh&&Qe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Qe.instancingColor===!1&&le.instanceColor!==null||Qe.envMap!==We||ce.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ce.numPlanes||Qe.numIntersection!==Ce.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==St||Qe.morphColors!==mn||Qe.toneMapping!==Pt||de.isWebGL2===!0&&Qe.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,Qe.__version=ce.version);let Cr=Qe.currentProgram;yt===!0&&(Cr=Ar(ce,K,le));let Sp=!1,Ro=!1,Eu=!1;const zt=Cr.getUniforms(),Rr=Qe.uniforms;if(fe.useProgram(Cr.program)&&(Sp=!0,Ro=!0,Eu=!0),ce.id!==B&&(B=ce.id,Ro=!0),Sp||M!==C){zt.setValue(H,"projectionMatrix",C.projectionMatrix),zt.setValue(H,"viewMatrix",C.matrixWorldInverse);const wn=zt.map.cameraPosition;wn!==void 0&&wn.setValue(H,pe.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&zt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ro=!0,Eu=!0)}if(le.isSkinnedMesh){zt.setOptional(H,le,"bindMatrix"),zt.setOptional(H,le,"bindMatrixInverse");const wn=le.skeleton;wn&&(de.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),zt.setValue(H,"boneTexture",wn.boneTexture,g)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}le.isBatchedMesh&&(zt.setOptional(H,le,"batchingTexture"),zt.setValue(H,"batchingTexture",le._matricesTexture,g));const Mu=ae.morphAttributes;if((Mu.position!==void 0||Mu.normal!==void 0||Mu.color!==void 0&&de.isWebGL2===!0)&&ke.update(le,ae,Cr),(Ro||Qe.receiveShadow!==le.receiveShadow)&&(Qe.receiveShadow=le.receiveShadow,zt.setValue(H,"receiveShadow",le.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Rr.envMap.value=We,Rr.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Ro&&(zt.setValue(H,"toneMappingExposure",m.toneMappingExposure),Qe.needsLights&&yu(Rr,Eu),Ue&&ce.fog===!0&&re.refreshFogUniforms(Rr,Ue),re.refreshMaterialUniforms(Rr,ce,ie,Q,I),ec.upload(H,_u(Qe),Rr,g)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ec.upload(H,_u(Qe),Rr,g),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&zt.setValue(H,"center",le.center),zt.setValue(H,"modelViewMatrix",le.modelViewMatrix),zt.setValue(H,"normalMatrix",le.normalMatrix),zt.setValue(H,"modelMatrix",le.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const wn=ce.uniformsGroups;for(let Tu=0,Vx=wn.length;Tu<Vx;Tu++)if(de.isWebGL2){const Ep=wn[Tu];ve.update(Ep,Cr),ve.bind(Ep,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function yu(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function xu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,K,ae){V.get(C.texture).__webglTexture=K,V.get(C.depthTexture).__webglTexture=ae;const ce=V.get(C);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const ae=V.get(C);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ae=0){T=C,R=K,w=ae;let ce=!0,le=null,Ue=!1,ze=!1;if(C){const We=V.get(C);We.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(H.FRAMEBUFFER,null),ce=!1):We.__webglFramebuffer===void 0?g.setupRenderTarget(C):We.__hasExternalTextures&&g.rebindTextures(C,V.get(C.texture).__webglTexture,V.get(C.depthTexture).__webglTexture);const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);const $e=V.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[K])?le=$e[K][ae]:le=$e[K],Ue=!0):de.isWebGL2&&C.samples>0&&g.useMultisampledRTT(C)===!1?le=V.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?le=$e[ae]:le=$e,b.copy(C.viewport),te.copy(C.scissor),$=C.scissorTest}else b.copy(W).multiplyScalar(ie).floor(),te.copy(ee).multiplyScalar(ie).floor(),$=ue;if(fe.bindFramebuffer(H.FRAMEBUFFER,le)&&de.drawBuffers&&ce&&fe.drawBuffers(C,le),fe.viewport(b),fe.scissor(te),fe.setScissorTest($),Ue){const We=V.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,We.__webglTexture,ae)}else if(ze){const We=V.get(C.texture),Ze=K||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.__webglTexture,ae||0,Ze)}B=-1},this.readRenderTargetPixels=function(C,K,ae,ce,le,Ue,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=V.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){fe.bindFramebuffer(H.FRAMEBUFFER,Ve);try{const We=C.texture,Ze=We.format,$e=We.type;if(Ze!==Xn&&Se.convert(Ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=$e===Ca&&(Z.has("EXT_color_buffer_half_float")||de.isWebGL2&&Z.has("EXT_color_buffer_float"));if($e!==gr&&Se.convert($e)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===sr&&(de.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ce&&ae>=0&&ae<=C.height-le&&H.readPixels(K,ae,ce,le,Se.convert(Ze),Se.convert($e),Ue)}finally{const We=T!==null?V.get(T).__webglFramebuffer:null;fe.bindFramebuffer(H.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(C,K,ae=0){const ce=Math.pow(2,-ae),le=Math.floor(K.image.width*ce),Ue=Math.floor(K.image.height*ce);g.setTexture2D(K,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,C.x,C.y,le,Ue),fe.unbindTexture()},this.copyTextureToTexture=function(C,K,ae,ce=0){const le=K.image.width,Ue=K.image.height,ze=Se.convert(ae.format),Ve=Se.convert(ae.type);g.setTexture2D(ae,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ae.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ae.unpackAlignment),K.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ce,C.x,C.y,le,Ue,ze,Ve,K.image.data):K.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ce,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,ze,K.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,ce,C.x,C.y,ze,Ve,K.image),ce===0&&ae.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ae,ce,le=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=C.max.x-C.min.x+1,ze=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,We=Se.convert(ce.format),Ze=Se.convert(ce.type);let $e;if(ce.isData3DTexture)g.setTexture3D(ce,0),$e=H.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)g.setTexture2DArray(ce,0),$e=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ce.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ce.unpackAlignment);const qe=H.getParameter(H.UNPACK_ROW_LENGTH),St=H.getParameter(H.UNPACK_IMAGE_HEIGHT),mn=H.getParameter(H.UNPACK_SKIP_PIXELS),Pt=H.getParameter(H.UNPACK_SKIP_ROWS),di=H.getParameter(H.UNPACK_SKIP_IMAGES),ft=ae.isCompressedTexture?ae.mipmaps[le]:ae.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),ae.isDataTexture||ae.isData3DTexture?H.texSubImage3D($e,le,K.x,K.y,K.z,Ue,ze,Ve,We,Ze,ft.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D($e,le,K.x,K.y,K.z,Ue,ze,Ve,We,ft.data)):H.texSubImage3D($e,le,K.x,K.y,K.z,Ue,ze,Ve,We,Ze,ft),H.pixelStorei(H.UNPACK_ROW_LENGTH,qe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St),H.pixelStorei(H.UNPACK_SKIP_PIXELS,mn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,di),le===0&&ce.generateMipmaps&&H.generateMipmap($e),fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?g.setTextureCube(C,0):C.isData3DTexture?g.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?g.setTexture2DArray(C,0):g.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,fe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qf?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===uu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Yr:gy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?Nt:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MC extends By{}MC.prototype.isWebGL1Renderer=!0;class TC extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Is extends pn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,v=(o-d)/f;return(r+v)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Me:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new G,r=[],s=[],o=[],a=new G,l=new wt;for(let v=0;v<=e;v++){const y=v/e;r[v]=this.getTangentAt(y,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(r[v-1],r[v]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(kt(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(l.makeRotationAxis(a,y))}o[v].crossVectors(r[v],s[v])}if(n===!0){let v=Math.acos(kt(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],v*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ip extends ci{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Me,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,v=c-this.aY;l=f*d-v*h+this.aX,c=f*h+v*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wC extends ip{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,v=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,v*=d,r(o,a,f,v)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Dl=new G,bd=new rp,Cd=new rp,Rd=new rp;class AC extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new G){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Dl.subVectors(r[0],r[1]).add(r[0]),c=Dl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(h),v),x=Math.pow(h.distanceToSquared(f),v),p=Math.pow(f.distanceToSquared(d),v);x<1e-4&&(x=1),y<1e-4&&(y=x),p<1e-4&&(p=x),bd.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,y,x,p),Cd.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,y,x,p),Rd.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,y,x,p)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Cd.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Rd.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(bd.calc(l),Cd.calc(l),Rd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function bC(t,e){const n=1-t;return n*n*e}function CC(t,e){return 2*(1-t)*t*e}function RC(t,e){return t*t*e}function oa(t,e,n,i){return bC(t,e)+CC(t,n)+RC(t,i)}function PC(t,e){const n=1-t;return n*n*n*e}function IC(t,e){const n=1-t;return 3*n*n*t*e}function LC(t,e){return 3*(1-t)*t*t*e}function NC(t,e){return t*t*t*e}function aa(t,e,n,i,r){return PC(t,e)+IC(t,n)+LC(t,i)+NC(t,r)}class zy extends ci{constructor(e=new Me,n=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class DC extends ci{constructor(e=new G,n=new G,i=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new G){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y),aa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hy extends ci{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UC extends ci{constructor(e=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new G){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vy extends ci{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OC extends ci{constructor(e=new G,n=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new G){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y),oa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gy extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Jg(a,l.x,c.x,d.x,h.x),Jg(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Me().fromArray(r))}return this}}var Zg=Object.freeze({__proto__:null,ArcCurve:wC,CatmullRomCurve3:AC,CubicBezierCurve:zy,CubicBezierCurve3:DC,EllipseCurve:ip,LineCurve:Hy,LineCurve3:UC,QuadraticBezierCurve:Vy,QuadraticBezierCurve3:OC,SplineCurve:Gy});class kC extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zg[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Zg[r.type]().fromJSON(r))}return this}}class io extends kC{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Hy(this.currentPoint.clone(),new Me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Vy(this.currentPoint.clone(),new Me(e,n),new Me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new zy(this.currentPoint.clone(),new Me(e,n),new Me(i,r),new Me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Gy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new ip(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class tc extends io{constructor(e){super(e),this.uuid=To(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new io().fromJSON(r))}return this}}const FC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Wy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,h,f,v;if(i&&(s=GC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let y=n;y<r;y+=n)h=t[y],f=t[y+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>d&&(d=f);v=Math.max(c-a,d-l),v=v!==0?32767/v:0}return Pa(s,o,n,a,l,v,0),o}};function Wy(t,e,n,i,r){let s,o;if(r===eR(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Qg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Qg(s,t[s],t[s+1],o);return o&&fu(o,o.next)&&(La(o),o=o.next),o}function rs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(fu(n,n.next)||mt(n.prev,n,n.next)===0)){if(La(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Pa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&qC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?zC(t,i,r,s):BC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),La(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=HC(rs(t),e,n),Pa(t,e,n,i,r,s,2)):o===2&&VC(t,e,n,i,r,s):Pa(rs(t),e,n,i,r,s,1);break}}}function BC(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,v=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=d&&y.x<=f&&y.y>=h&&y.y<=v&&qs(r,a,s,l,o,c,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function zC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,f=o.y,v=a<l?a<c?a:c:l<c?l:c,y=d<h?d<f?d:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,p=d>h?d>f?d:f:h>f?h:f,u=jh(v,y,e,n,i),_=jh(x,p,e,n,i);let m=t.prevZ,E=t.nextZ;for(;m&&m.z>=u&&E&&E.z<=_;){if(m.x>=v&&m.x<=x&&m.y>=y&&m.y<=p&&m!==r&&m!==o&&qs(a,d,l,h,c,f,m.x,m.y)&&mt(m.prev,m,m.next)>=0||(m=m.prevZ,E.x>=v&&E.x<=x&&E.y>=y&&E.y<=p&&E!==r&&E!==o&&qs(a,d,l,h,c,f,E.x,E.y)&&mt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;m&&m.z>=u;){if(m.x>=v&&m.x<=x&&m.y>=y&&m.y<=p&&m!==r&&m!==o&&qs(a,d,l,h,c,f,m.x,m.y)&&mt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;E&&E.z<=_;){if(E.x>=v&&E.x<=x&&E.y>=y&&E.y<=p&&E!==r&&E!==o&&qs(a,d,l,h,c,f,E.x,E.y)&&mt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function HC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!fu(r,s)&&jy(r,i,i.next,s)&&Ia(r,s)&&Ia(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),La(i),La(i.next),i=t=s),i=i.next}while(i!==t);return rs(i)}function VC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&JC(o,a)){let l=Xy(o,a);o=rs(o,o.next),l=rs(l,l.next),Pa(o,e,n,i,r,s,0),Pa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function GC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Wy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(KC(c));for(r.sort(WC),s=0;s<r.length;s++)n=jC(r[s],n);return n}function WC(t,e){return t.x-e.x}function jC(t,e){const n=XC(t,e);if(!n)return e;const i=Xy(n,t);return rs(i,i.next),rs(n,n.next)}function XC(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&qs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Ia(n,t)&&(h<d||h===d&&(n.x>r.x||n.x===r.x&&$C(r,n)))&&(r=n,d=h)),n=n.next;while(n!==a);return r}function $C(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function qC(t,e,n,i){let r=t;do r.z===0&&(r.z=jh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,YC(r)}function YC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function jh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function KC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function qs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function JC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!ZC(t,e)&&(Ia(t,e)&&Ia(e,t)&&QC(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||fu(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function fu(t,e){return t.x===e.x&&t.y===e.y}function jy(t,e,n,i){const r=Ol(mt(t,e,n)),s=Ol(mt(t,e,i)),o=Ol(mt(n,i,t)),a=Ol(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ul(t,n,e)||s===0&&Ul(t,i,e)||o===0&&Ul(n,t,i)||a===0&&Ul(n,e,i))}function Ul(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ol(t){return t>0?1:t<0?-1:0}function ZC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&jy(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ia(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function QC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Xy(t,e){const n=new Xh(t.i,t.x,t.y),i=new Xh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Qg(t,e,n,i){const r=new Xh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function La(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Xh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eR(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class pu{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return pu.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];ev(e),tv(i,e);let o=e.length;n.forEach(ev);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,tv(i,n[l]);const a=FC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ev(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function tv(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class la extends li{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new G,f=new G,v=[],y=[],x=[],p=[];for(let u=0;u<=i;u++){const _=[],m=u/i;let E=0;u===0&&o===0?E=.5/n:u===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const w=R/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+m*a),h.y=e*Math.cos(o+m*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+m*a),y.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(w+E,1-m),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const m=d[u][_+1],E=d[u][_],R=d[u+1][_],w=d[u+1][_+1];(u!==0||o>0)&&v.push(m,E,w),(u!==i-1||l<Math.PI)&&v.push(E,R,w)}this.setIndex(v),this.setAttribute("position",new en(y,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nv extends Ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vy,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const iv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class tR{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const v=c[h],y=c[h+1];if(v.global&&(v.lastIndex=0),v.test(d))return y}return null}}}const nR=new tR;class sp{constructor(e){this.manager=e!==void 0?e:nR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class iR extends Error{constructor(e,n){super(e),this.response=n}}class rR extends sp{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=iv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:n,onProgress:i,onError:r});return}vi[e]=[],vi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=vi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),v=f?parseInt(f):0,y=v!==0;let x=0;const p=new ReadableStream({start(u){_();function _(){h.read().then(({done:m,value:E})=>{if(m)u.close();else{x+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:y,loaded:x,total:v});for(let w=0,T=d.length;w<T;w++){const B=d[w];B.onProgress&&B.onProgress(R)}u.enqueue(E),_()}})}}});return new Response(p)}else throw new iR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,v=new TextDecoder(f);return c.arrayBuffer().then(y=>v.decode(y))}}}).then(c=>{iv.add(e,c);const d=vi[e];delete vi[e];for(let h=0,f=d.length;h<f;h++){const v=d[h];v.onLoad&&v.onLoad(c)}}).catch(c=>{const d=vi[e];if(d===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let h=0,f=d.length;h<f;h++){const v=d[h];v.onError&&v.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $y extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Pd=new wt,rv=new G,sv=new G;class sR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rv.setFromMatrixPosition(e.matrixWorld),n.position.copy(rv),sv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sv),n.updateMatrixWorld(),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oR extends sR{constructor(){super(new Ly(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ov extends $y{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new oR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aR extends $y{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class av{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lv=new Me;class lR{constructor(e=new Me(1/0,1/0),n=new Me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=lv.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Dr{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new io,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(u){const _=[];for(let m=0,E=u.length;m<E;m++){const R=u[m],w=new tc;w.curves=R.curves,_.push(w)}return _}function i(u,_){const m=_.length;let E=!1;for(let R=m-1,w=0;w<m;R=w++){let T=_[R],B=_[w],M=B.x-T.x,b=B.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=_[w],M=-M,B=_[R],b=-b),u.y<T.y||u.y>B.y)continue;if(u.y===T.y){if(u.x===T.x)return!0}else{const te=b*(u.x-T.x)-M*(u.y-T.y);if(te===0)return!0;if(te<0)continue;E=!E}}else{if(u.y!==T.y)continue;if(B.x<=u.x&&u.x<=T.x||T.x<=u.x&&u.x<=B.x)return!0}}return E}const r=pu.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new tc,l.curves=a.curves,c.push(l),c;let d=!r(s[0].getPoints());d=e?!d:d;const h=[],f=[];let v=[],y=0,x;f[y]=void 0,v[y]=[];for(let u=0,_=s.length;u<_;u++)a=s[u],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!d&&f[y]&&y++,f[y]={s:new tc,p:x},f[y].s.curves=a.curves,d&&y++,v[y]=[]):v[y].push({h:a,p:x[0]});if(!f[0])return n(s);if(f.length>1){let u=!1,_=0;for(let m=0,E=f.length;m<E;m++)h[m]=[];for(let m=0,E=f.length;m<E;m++){const R=v[m];for(let w=0;w<R.length;w++){const T=R[w];let B=!0;for(let M=0;M<f.length;M++)i(T.p,f[M].p)&&(m!==M&&_++,B?(B=!1,h[M].push(T)):u=!0);B&&h[m].push(T)}}_>0&&u===!1&&(v=h)}let p;for(let u=0,_=f.length;u<_;u++){l=f[u].s,c.push(l),p=v[u];for(let m=0,E=p.length;m<E;m++)l.holes.push(p[m].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);const cv={type:"change"},Id={type:"start"},uv={type:"end"},kl=new My,dv=new Ki,cR=Math.cos(70*vT.DEG2RAD);class uR extends cs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Te),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cv),i.update(),s=r.NONE},this.update=function(){const D=new G,ve=new is().setFromUnitVectors(e.up,new G(0,1,0)),De=ve.clone().invert(),Pe=new G,ye=new is,F=new G,Ee=2*Math.PI;return function(He=null){const Be=i.object.position;D.copy(Be).sub(i.target),D.applyQuaternion(ve),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&$(b(He)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ke=i.minAzimuthAngle,Je=i.maxAzimuthAngle;isFinite(Ke)&&isFinite(Je)&&(Ke<-Math.PI?Ke+=Ee:Ke>Math.PI&&(Ke-=Ee),Je<-Math.PI?Je+=Ee:Je>Math.PI&&(Je-=Ee),Ke<=Je?a.theta=Math.max(Ke,Math.min(Je,a.theta)):a.theta=a.theta>(Ke+Je)/2?Math.max(Ke,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(De),Be.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let rt=!1;if(i.zoomToCursor&&w){let it=null;if(i.object.isPerspectiveCamera){const Xe=D.length();it=W(Xe*c);const _t=Xe-it;i.object.position.addScaledVector(E,_t),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Xe=new G(R.x,R.y,0);Xe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),rt=!0;const _t=new G(R.x,R.y,0);_t.unproject(i.object),i.object.position.sub(_t).add(Xe),i.object.updateMatrixWorld(),it=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(kl.origin.copy(i.object.position),kl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(kl.direction))<cR?e.lookAt(i.target):(dv.setFromNormalAndCoplanarPoint(i.object.up,i.target),kl.intersectPlane(dv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),rt=!0);return c=1,w=!1,rt||Pe.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||F.distanceToSquared(i.target)>0?(i.dispatchEvent(cv),Pe.copy(i.object.position),ye.copy(i.object.quaternion),F.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Fe),i.domElement.removeEventListener("pointerdown",g),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Te),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new av,l=new av;let c=1;const d=new G,h=new Me,f=new Me,v=new Me,y=new Me,x=new Me,p=new Me,u=new Me,_=new Me,m=new Me,E=new G,R=new Me;let w=!1;const T=[],B={};let M=!1;function b(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function te(D){const ve=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*ve)}function $(D){l.theta-=D}function me(D){l.phi-=D}const z=function(){const D=new G;return function(De,Pe){D.setFromMatrixColumn(Pe,0),D.multiplyScalar(-De),d.add(D)}}(),J=function(){const D=new G;return function(De,Pe){i.screenSpacePanning===!0?D.setFromMatrixColumn(Pe,1):(D.setFromMatrixColumn(Pe,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(De),d.add(D)}}(),Q=function(){const D=new G;return function(De,Pe){const ye=i.domElement;if(i.object.isPerspectiveCamera){const F=i.object.position;D.copy(F).sub(i.target);let Ee=D.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),z(2*De*Ee/ye.clientHeight,i.object.matrix),J(2*Pe*Ee/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(De*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),J(Pe*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(D,ve){if(!i.zoomToCursor)return;w=!0;const De=i.domElement.getBoundingClientRect(),Pe=D-De.left,ye=ve-De.top,F=De.width,Ee=De.height;R.x=Pe/F*2-1,R.y=-(ye/Ee)*2+1,E.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function W(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function ee(D){h.set(D.clientX,D.clientY)}function ue(D){j(D.clientX,D.clientX),u.set(D.clientX,D.clientY)}function oe(D){y.set(D.clientX,D.clientY)}function O(D){f.set(D.clientX,D.clientY),v.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ve=i.domElement;$(2*Math.PI*v.x/ve.clientHeight),me(2*Math.PI*v.y/ve.clientHeight),h.copy(f),i.update()}function N(D){_.set(D.clientX,D.clientY),m.subVectors(_,u),m.y>0?ie(te(m.y)):m.y<0&&U(te(m.y)),u.copy(_),i.update()}function I(D){x.set(D.clientX,D.clientY),p.subVectors(x,y).multiplyScalar(i.panSpeed),Q(p.x,p.y),y.copy(x),i.update()}function A(D){j(D.clientX,D.clientY),D.deltaY<0?U(te(D.deltaY)):D.deltaY>0&&ie(te(D.deltaY)),i.update()}function se(D){let ve=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),ve=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),ve=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),ve=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),ve=!0;break}ve&&(D.preventDefault(),i.update())}function pe(D){if(T.length===1)h.set(D.pageX,D.pageY);else{const ve=Se(D),De=.5*(D.pageX+ve.x),Pe=.5*(D.pageY+ve.y);h.set(De,Pe)}}function q(D){if(T.length===1)y.set(D.pageX,D.pageY);else{const ve=Se(D),De=.5*(D.pageX+ve.x),Pe=.5*(D.pageY+ve.y);y.set(De,Pe)}}function _e(D){const ve=Se(D),De=D.pageX-ve.x,Pe=D.pageY-ve.y,ye=Math.sqrt(De*De+Pe*Pe);u.set(0,ye)}function H(D){i.enableZoom&&_e(D),i.enablePan&&q(D)}function be(D){i.enableZoom&&_e(D),i.enableRotate&&pe(D)}function Z(D){if(T.length==1)f.set(D.pageX,D.pageY);else{const De=Se(D),Pe=.5*(D.pageX+De.x),ye=.5*(D.pageY+De.y);f.set(Pe,ye)}v.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ve=i.domElement;$(2*Math.PI*v.x/ve.clientHeight),me(2*Math.PI*v.y/ve.clientHeight),h.copy(f)}function de(D){if(T.length===1)x.set(D.pageX,D.pageY);else{const ve=Se(D),De=.5*(D.pageX+ve.x),Pe=.5*(D.pageY+ve.y);x.set(De,Pe)}p.subVectors(x,y).multiplyScalar(i.panSpeed),Q(p.x,p.y),y.copy(x)}function fe(D){const ve=Se(D),De=D.pageX-ve.x,Pe=D.pageY-ve.y,ye=Math.sqrt(De*De+Pe*Pe);_.set(0,ye),m.set(0,Math.pow(_.y/u.y,i.zoomSpeed)),ie(m.y),u.copy(_);const F=(D.pageX+ve.x)*.5,Ee=(D.pageY+ve.y)*.5;j(F,Ee)}function Ae(D){i.enableZoom&&fe(D),i.enablePan&&de(D)}function V(D){i.enableZoom&&fe(D),i.enableRotate&&Z(D)}function g(D){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",L)),ke(D),D.pointerType==="touch"?Ce(D):X(D))}function S(D){i.enabled!==!1&&(D.pointerType==="touch"?he(D):Y(D))}function L(D){Le(D),T.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",L)),i.dispatchEvent(uv),s=r.NONE}function X(D){let ve;switch(D.button){case 0:ve=i.mouseButtons.LEFT;break;case 1:ve=i.mouseButtons.MIDDLE;break;case 2:ve=i.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case fs.DOLLY:if(i.enableZoom===!1)return;ue(D),s=r.DOLLY;break;case fs.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;oe(D),s=r.PAN}else{if(i.enableRotate===!1)return;ee(D),s=r.ROTATE}break;case fs.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;ee(D),s=r.ROTATE}else{if(i.enablePan===!1)return;oe(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Id)}function Y(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;O(D);break;case r.DOLLY:if(i.enableZoom===!1)return;N(D);break;case r.PAN:if(i.enablePan===!1)return;I(D);break}}function ne(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Id),A(k(D)),i.dispatchEvent(uv))}function k(D){const ve=D.deltaMode,De={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(ve){case 1:De.deltaY*=16;break;case 2:De.deltaY*=100;break}return D.ctrlKey&&!M&&(De.deltaY*=10),De}function re(D){D.key==="Control"&&(M=!0,document.addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(D){D.key==="Control"&&(M=!1,document.removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function Te(D){i.enabled===!1||i.enablePan===!1||se(D)}function Ce(D){switch(Ne(D),T.length){case 1:switch(i.touches.ONE){case ps.ROTATE:if(i.enableRotate===!1)return;pe(D),s=r.TOUCH_ROTATE;break;case ps.PAN:if(i.enablePan===!1)return;q(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(D),s=r.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Id)}function he(D){switch(Ne(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Z(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;de(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;V(D),i.update();break;default:s=r.NONE}}function Fe(D){i.enabled!==!1&&D.preventDefault()}function ke(D){T.push(D.pointerId)}function Le(D){delete B[D.pointerId];for(let ve=0;ve<T.length;ve++)if(T[ve]==D.pointerId){T.splice(ve,1);return}}function Ne(D){let ve=B[D.pointerId];ve===void 0&&(ve=new Me,B[D.pointerId]=ve),ve.set(D.pageX,D.pageY)}function Se(D){const ve=D.pointerId===T[0]?T[1]:T[0];return B[ve]}i.domElement.addEventListener("contextmenu",Fe),i.domElement.addEventListener("pointerdown",g),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",re,{passive:!0,capture:!0}),this.update()}}const dR=Nt;class Oc extends sp{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new rR(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(O,N){if(O.nodeType!==1)return;const I=E(O);let A=!1,se=null;switch(O.nodeName){case"svg":N=y(O,N);break;case"style":s(O);break;case"g":N=y(O,N);break;case"path":N=y(O,N),O.hasAttribute("d")&&(se=r(O));break;case"rect":N=y(O,N),se=l(O);break;case"polygon":N=y(O,N),se=c(O);break;case"polyline":N=y(O,N),se=d(O);break;case"circle":N=y(O,N),se=h(O);break;case"ellipse":N=y(O,N),se=f(O);break;case"line":N=y(O,N),se=v(O);break;case"defs":A=!0;break;case"use":N=y(O,N);const _e=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),H=O.viewportElement.getElementById(_e);H?i(H,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+_e);break}se&&(N.fill!==void 0&&N.fill!=="none"&&se.color.setStyle(N.fill,dR),w(se,ee),$.push(se),se.userData={node:O,style:N});const pe=O.childNodes;for(let q=0;q<pe.length;q++){const _e=pe[q];A&&_e.nodeName!=="style"&&_e.nodeName!=="defs"||i(_e,N)}I&&(z.pop(),z.length>0?ee.copy(z[z.length-1]):ee.identity())}function r(O){const N=new Dr,I=new Me,A=new Me,se=new Me;let pe=!0,q=!1;const _e=O.getAttribute("d");if(_e===""||_e==="none")return null;const H=_e.match(/[a-df-z][^a-df-z]*/ig);for(let be=0,Z=H.length;be<Z;be++){const de=H[be],fe=de.charAt(0),Ae=de.slice(1).trim();pe===!0&&(q=!0,pe=!1);let V;switch(fe){case"M":V=p(Ae);for(let g=0,S=V.length;g<S;g+=2)I.x=V[g+0],I.y=V[g+1],A.x=I.x,A.y=I.y,g===0?N.moveTo(I.x,I.y):N.lineTo(I.x,I.y),g===0&&se.copy(I);break;case"H":V=p(Ae);for(let g=0,S=V.length;g<S;g++)I.x=V[g],A.x=I.x,A.y=I.y,N.lineTo(I.x,I.y),g===0&&q===!0&&se.copy(I);break;case"V":V=p(Ae);for(let g=0,S=V.length;g<S;g++)I.y=V[g],A.x=I.x,A.y=I.y,N.lineTo(I.x,I.y),g===0&&q===!0&&se.copy(I);break;case"L":V=p(Ae);for(let g=0,S=V.length;g<S;g+=2)I.x=V[g+0],I.y=V[g+1],A.x=I.x,A.y=I.y,N.lineTo(I.x,I.y),g===0&&q===!0&&se.copy(I);break;case"C":V=p(Ae);for(let g=0,S=V.length;g<S;g+=6)N.bezierCurveTo(V[g+0],V[g+1],V[g+2],V[g+3],V[g+4],V[g+5]),A.x=V[g+2],A.y=V[g+3],I.x=V[g+4],I.y=V[g+5],g===0&&q===!0&&se.copy(I);break;case"S":V=p(Ae);for(let g=0,S=V.length;g<S;g+=4)N.bezierCurveTo(x(I.x,A.x),x(I.y,A.y),V[g+0],V[g+1],V[g+2],V[g+3]),A.x=V[g+0],A.y=V[g+1],I.x=V[g+2],I.y=V[g+3],g===0&&q===!0&&se.copy(I);break;case"Q":V=p(Ae);for(let g=0,S=V.length;g<S;g+=4)N.quadraticCurveTo(V[g+0],V[g+1],V[g+2],V[g+3]),A.x=V[g+0],A.y=V[g+1],I.x=V[g+2],I.y=V[g+3],g===0&&q===!0&&se.copy(I);break;case"T":V=p(Ae);for(let g=0,S=V.length;g<S;g+=2){const L=x(I.x,A.x),X=x(I.y,A.y);N.quadraticCurveTo(L,X,V[g+0],V[g+1]),A.x=L,A.y=X,I.x=V[g+0],I.y=V[g+1],g===0&&q===!0&&se.copy(I)}break;case"A":V=p(Ae,[3,4],7);for(let g=0,S=V.length;g<S;g+=7){if(V[g+5]==I.x&&V[g+6]==I.y)continue;const L=I.clone();I.x=V[g+5],I.y=V[g+6],A.x=I.x,A.y=I.y,o(N,V[g],V[g+1],V[g+2],V[g+3],V[g+4],L,I),g===0&&q===!0&&se.copy(I)}break;case"m":V=p(Ae);for(let g=0,S=V.length;g<S;g+=2)I.x+=V[g+0],I.y+=V[g+1],A.x=I.x,A.y=I.y,g===0?N.moveTo(I.x,I.y):N.lineTo(I.x,I.y),g===0&&se.copy(I);break;case"h":V=p(Ae);for(let g=0,S=V.length;g<S;g++)I.x+=V[g],A.x=I.x,A.y=I.y,N.lineTo(I.x,I.y),g===0&&q===!0&&se.copy(I);break;case"v":V=p(Ae);for(let g=0,S=V.length;g<S;g++)I.y+=V[g],A.x=I.x,A.y=I.y,N.lineTo(I.x,I.y),g===0&&q===!0&&se.copy(I);break;case"l":V=p(Ae);for(let g=0,S=V.length;g<S;g+=2)I.x+=V[g+0],I.y+=V[g+1],A.x=I.x,A.y=I.y,N.lineTo(I.x,I.y),g===0&&q===!0&&se.copy(I);break;case"c":V=p(Ae);for(let g=0,S=V.length;g<S;g+=6)N.bezierCurveTo(I.x+V[g+0],I.y+V[g+1],I.x+V[g+2],I.y+V[g+3],I.x+V[g+4],I.y+V[g+5]),A.x=I.x+V[g+2],A.y=I.y+V[g+3],I.x+=V[g+4],I.y+=V[g+5],g===0&&q===!0&&se.copy(I);break;case"s":V=p(Ae);for(let g=0,S=V.length;g<S;g+=4)N.bezierCurveTo(x(I.x,A.x),x(I.y,A.y),I.x+V[g+0],I.y+V[g+1],I.x+V[g+2],I.y+V[g+3]),A.x=I.x+V[g+0],A.y=I.y+V[g+1],I.x+=V[g+2],I.y+=V[g+3],g===0&&q===!0&&se.copy(I);break;case"q":V=p(Ae);for(let g=0,S=V.length;g<S;g+=4)N.quadraticCurveTo(I.x+V[g+0],I.y+V[g+1],I.x+V[g+2],I.y+V[g+3]),A.x=I.x+V[g+0],A.y=I.y+V[g+1],I.x+=V[g+2],I.y+=V[g+3],g===0&&q===!0&&se.copy(I);break;case"t":V=p(Ae);for(let g=0,S=V.length;g<S;g+=2){const L=x(I.x,A.x),X=x(I.y,A.y);N.quadraticCurveTo(L,X,I.x+V[g+0],I.y+V[g+1]),A.x=L,A.y=X,I.x=I.x+V[g+0],I.y=I.y+V[g+1],g===0&&q===!0&&se.copy(I)}break;case"a":V=p(Ae,[3,4],7);for(let g=0,S=V.length;g<S;g+=7){if(V[g+5]==0&&V[g+6]==0)continue;const L=I.clone();I.x+=V[g+5],I.y+=V[g+6],A.x=I.x,A.y=I.y,o(N,V[g],V[g+1],V[g+2],V[g+3],V[g+4],L,I),g===0&&q===!0&&se.copy(I)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(I.copy(se),N.currentPath.currentPoint.copy(I),pe=!0);break;default:console.warn(de)}q=!1}return N}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){const I=O.sheet.cssRules[N];if(I.type!==1)continue;const A=I.selectorText.split(/,/gm).filter(Boolean).map(se=>se.trim());for(let se=0;se<A.length;se++){const pe=Object.fromEntries(Object.entries(I.style).filter(([,q])=>q!==""));me[A[se]]=Object.assign(me[A[se]]||{},pe)}}}function o(O,N,I,A,se,pe,q,_e){if(N==0||I==0){O.lineTo(_e.x,_e.y);return}A=A*Math.PI/180,N=Math.abs(N),I=Math.abs(I);const H=(q.x-_e.x)/2,be=(q.y-_e.y)/2,Z=Math.cos(A)*H+Math.sin(A)*be,de=-Math.sin(A)*H+Math.cos(A)*be;let fe=N*N,Ae=I*I;const V=Z*Z,g=de*de,S=V/fe+g/Ae;if(S>1){const he=Math.sqrt(S);N=he*N,I=he*I,fe=N*N,Ae=I*I}const L=fe*g+Ae*V,X=(fe*Ae-L)/L;let Y=Math.sqrt(Math.max(0,X));se===pe&&(Y=-Y);const ne=Y*N*de/I,k=-Y*I*Z/N,re=Math.cos(A)*ne-Math.sin(A)*k+(q.x+_e.x)/2,ge=Math.sin(A)*ne+Math.cos(A)*k+(q.y+_e.y)/2,Te=a(1,0,(Z-ne)/N,(de-k)/I),Ce=a((Z-ne)/N,(de-k)/I,(-Z-ne)/N,(-de-k)/I)%(Math.PI*2);O.currentPath.absellipse(re,ge,N,I,Te,Te+Ce,pe===0,A)}function a(O,N,I,A){const se=O*I+N*A,pe=Math.sqrt(O*O+N*N)*Math.sqrt(I*I+A*A);let q=Math.acos(Math.max(-1,Math.min(1,se/pe)));return O*A-N*I<0&&(q=-q),q}function l(O){const N=m(O.getAttribute("x")||0),I=m(O.getAttribute("y")||0),A=m(O.getAttribute("rx")||O.getAttribute("ry")||0),se=m(O.getAttribute("ry")||O.getAttribute("rx")||0),pe=m(O.getAttribute("width")),q=m(O.getAttribute("height")),_e=1-.551915024494,H=new Dr;return H.moveTo(N+A,I),H.lineTo(N+pe-A,I),(A!==0||se!==0)&&H.bezierCurveTo(N+pe-A*_e,I,N+pe,I+se*_e,N+pe,I+se),H.lineTo(N+pe,I+q-se),(A!==0||se!==0)&&H.bezierCurveTo(N+pe,I+q-se*_e,N+pe-A*_e,I+q,N+pe-A,I+q),H.lineTo(N+A,I+q),(A!==0||se!==0)&&H.bezierCurveTo(N+A*_e,I+q,N,I+q-se*_e,N,I+q-se),H.lineTo(N,I+se),(A!==0||se!==0)&&H.bezierCurveTo(N,I+se*_e,N+A*_e,I,N+A,I),H}function c(O){function N(pe,q,_e){const H=m(q),be=m(_e);se===0?A.moveTo(H,be):A.lineTo(H,be),se++}const I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Dr;let se=0;return O.getAttribute("points").replace(I,N),A.currentPath.autoClose=!0,A}function d(O){function N(pe,q,_e){const H=m(q),be=m(_e);se===0?A.moveTo(H,be):A.lineTo(H,be),se++}const I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Dr;let se=0;return O.getAttribute("points").replace(I,N),A.currentPath.autoClose=!1,A}function h(O){const N=m(O.getAttribute("cx")||0),I=m(O.getAttribute("cy")||0),A=m(O.getAttribute("r")||0),se=new io;se.absarc(N,I,A,0,Math.PI*2);const pe=new Dr;return pe.subPaths.push(se),pe}function f(O){const N=m(O.getAttribute("cx")||0),I=m(O.getAttribute("cy")||0),A=m(O.getAttribute("rx")||0),se=m(O.getAttribute("ry")||0),pe=new io;pe.absellipse(N,I,A,se,0,Math.PI*2);const q=new Dr;return q.subPaths.push(pe),q}function v(O){const N=m(O.getAttribute("x1")||0),I=m(O.getAttribute("y1")||0),A=m(O.getAttribute("x2")||0),se=m(O.getAttribute("y2")||0),pe=new Dr;return pe.moveTo(N,I),pe.lineTo(A,se),pe.currentPath.autoClose=!1,pe}function y(O,N){N=Object.assign({},N);let I={};if(O.hasAttribute("class")){const q=O.getAttribute("class").split(/\s/).filter(Boolean).map(_e=>_e.trim());for(let _e=0;_e<q.length;_e++)I=Object.assign(I,me["."+q[_e]])}O.hasAttribute("id")&&(I=Object.assign(I,me["#"+O.getAttribute("id")]));function A(q,_e,H){H===void 0&&(H=function(Z){return Z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Z}),O.hasAttribute(q)&&(N[_e]=H(O.getAttribute(q))),I[q]&&(N[_e]=H(I[q])),O.style&&O.style[q]!==""&&(N[_e]=H(O.style[q]))}function se(q){return Math.max(0,Math.min(1,m(q)))}function pe(q){return Math.max(0,m(q))}return A("fill","fill"),A("fill-opacity","fillOpacity",se),A("fill-rule","fillRule"),A("opacity","opacity",se),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",se),A("stroke-width","strokeWidth",pe),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",pe),A("visibility","visibility"),N}function x(O,N){return O-(N-O)}function p(O,N,I){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},se=0,pe=1,q=2,_e=3;let H=se,be=!0,Z="",de="";const fe=[];function Ae(L,X,Y){const ne=new SyntaxError('Unexpected character "'+L+'" at index '+X+".");throw ne.partial=Y,ne}function V(){Z!==""&&(de===""?fe.push(Number(Z)):fe.push(Number(Z)*Math.pow(10,Number(de)))),Z="",de=""}let g;const S=O.length;for(let L=0;L<S;L++){if(g=O[L],Array.isArray(N)&&N.includes(fe.length%I)&&A.FLAGS.test(g)){H=pe,Z=g,V();continue}if(H===se){if(A.WHITESPACE.test(g))continue;if(A.DIGIT.test(g)||A.SIGN.test(g)){H=pe,Z=g;continue}if(A.POINT.test(g)){H=q,Z=g;continue}A.COMMA.test(g)&&(be&&Ae(g,L,fe),be=!0)}if(H===pe){if(A.DIGIT.test(g)){Z+=g;continue}if(A.POINT.test(g)){Z+=g,H=q;continue}if(A.EXP.test(g)){H=_e;continue}A.SIGN.test(g)&&Z.length===1&&A.SIGN.test(Z[0])&&Ae(g,L,fe)}if(H===q){if(A.DIGIT.test(g)){Z+=g;continue}if(A.EXP.test(g)){H=_e;continue}A.POINT.test(g)&&Z[Z.length-1]==="."&&Ae(g,L,fe)}if(H===_e){if(A.DIGIT.test(g)){de+=g;continue}if(A.SIGN.test(g)){if(de===""){de+=g;continue}de.length===1&&A.SIGN.test(de)&&Ae(g,L,fe)}}A.WHITESPACE.test(g)?(V(),H=se,be=!1):A.COMMA.test(g)?(V(),H=se,be=!0):A.SIGN.test(g)?(V(),H=pe,Z=g):A.POINT.test(g)?(V(),H=q,Z=g):Ae(g,L,fe)}return V(),fe}const u=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function m(O){let N="px";if(typeof O=="string"||O instanceof String)for(let A=0,se=u.length;A<se;A++){const pe=u[A];if(O.endsWith(pe)){N=pe,O=O.substring(0,O.length-pe.length);break}}let I;return N==="px"&&n.defaultUnit!=="px"?I=_.in[n.defaultUnit]/n.defaultDPI:(I=_[N][n.defaultUnit],I<0&&(I=_[N].in*n.defaultDPI)),I*parseFloat(O)}function E(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const N=R(O);return z.length>0&&N.premultiply(z[z.length-1]),ee.copy(N),z.push(N),N}function R(O){const N=new je,I=J;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const A=m(O.getAttribute("x")),se=m(O.getAttribute("y"));N.translate(A,se)}if(O.hasAttribute("transform")){const A=O.getAttribute("transform").split(")");for(let se=A.length-1;se>=0;se--){const pe=A[se].trim();if(pe==="")continue;const q=pe.indexOf("("),_e=pe.length;if(q>0&&q<_e){const H=pe.slice(0,q),be=p(pe.slice(q+1));switch(I.identity(),H){case"translate":if(be.length>=1){const Z=be[0];let de=0;be.length>=2&&(de=be[1]),I.translate(Z,de)}break;case"rotate":if(be.length>=1){let Z=0,de=0,fe=0;Z=be[0]*Math.PI/180,be.length>=3&&(de=be[1],fe=be[2]),Q.makeTranslation(-de,-fe),ie.makeRotation(Z),U.multiplyMatrices(ie,Q),Q.makeTranslation(de,fe),I.multiplyMatrices(Q,U)}break;case"scale":if(be.length>=1){const Z=be[0];let de=Z;be.length>=2&&(de=be[1]),I.scale(Z,de)}break;case"skewX":be.length===1&&I.set(1,Math.tan(be[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":be.length===1&&I.set(1,0,0,Math.tan(be[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":be.length===6&&I.set(be[0],be[2],be[4],be[1],be[3],be[5],0,0,1);break}}N.premultiply(I)}}return N}function w(O,N){function I(q){W.set(q.x,q.y,1).applyMatrix3(N),q.set(W.x,W.y)}function A(q){const _e=q.xRadius,H=q.yRadius,be=Math.cos(q.aRotation),Z=Math.sin(q.aRotation),de=new G(_e*be,_e*Z,0),fe=new G(-H*Z,H*be,0),Ae=de.applyMatrix3(N),V=fe.applyMatrix3(N),g=J.set(Ae.x,V.x,0,Ae.y,V.y,0,0,0,1),S=Q.copy(g).invert(),Y=ie.copy(S).transpose().multiply(S).elements,ne=te(Y[0],Y[1],Y[4]),k=Math.sqrt(ne.rt1),re=Math.sqrt(ne.rt2);if(q.xRadius=1/k,q.yRadius=1/re,q.aRotation=Math.atan2(ne.sn,ne.cs),!((q.aEndAngle-q.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Te=Q.set(k,0,0,0,re,0,0,0,1),Ce=ie.set(ne.cs,ne.sn,0,-ne.sn,ne.cs,0,0,0,1),he=Te.multiply(Ce).multiply(g),Fe=ke=>{const{x:Le,y:Ne}=new G(Math.cos(ke),Math.sin(ke),0).applyMatrix3(he);return Math.atan2(Ne,Le)};q.aStartAngle=Fe(q.aStartAngle),q.aEndAngle=Fe(q.aEndAngle),T(N)&&(q.aClockwise=!q.aClockwise)}}function se(q){const _e=M(N),H=b(N);q.xRadius*=_e,q.yRadius*=H;const be=_e>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);q.aRotation+=be,T(N)&&(q.aStartAngle*=-1,q.aEndAngle*=-1,q.aClockwise=!q.aClockwise)}const pe=O.subPaths;for(let q=0,_e=pe.length;q<_e;q++){const be=pe[q].curves;for(let Z=0;Z<be.length;Z++){const de=be[Z];de.isLineCurve?(I(de.v1),I(de.v2)):de.isCubicBezierCurve?(I(de.v0),I(de.v1),I(de.v2),I(de.v3)):de.isQuadraticBezierCurve?(I(de.v0),I(de.v1),I(de.v2)):de.isEllipseCurve&&(j.set(de.aX,de.aY),I(j),de.aX=j.x,de.aY=j.y,B(N)?A(de):se(de))}}}function T(O){const N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function B(O){const N=O.elements,I=N[0]*N[3]+N[1]*N[4];if(I===0)return!1;const A=M(O),se=b(O);return Math.abs(I/(A*se))>Number.EPSILON}function M(O){const N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function b(O){const N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function te(O,N,I){let A,se,pe,q,_e;const H=O+I,be=O-I,Z=Math.sqrt(be*be+4*N*N);return H>0?(A=.5*(H+Z),_e=1/A,se=O*_e*I-N*_e*N):H<0?se=.5*(H-Z):(A=.5*Z,se=-.5*Z),be>0?pe=be+Z:pe=be-Z,Math.abs(pe)>2*Math.abs(N)?(_e=-2*N/pe,q=1/Math.sqrt(1+_e*_e),pe=_e*q):Math.abs(N)===0?(pe=1,q=0):(_e=-.5*pe/N,pe=1/Math.sqrt(1+_e*_e),q=_e*pe),be>0&&(_e=pe,pe=-q,q=_e),{rt1:A,rt2:se,cs:pe,sn:q}}const $=[],me={},z=[],J=new je,Q=new je,ie=new je,U=new je,j=new Me,W=new G,ee=new je,ue=new DOMParser().parseFromString(e,"image/svg+xml");return i(ue.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:$,xml:ue.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(x,p,u,_){const m=x.x,E=p.x,R=u.x,w=_.x,T=x.y,B=p.y,M=u.y,b=_.y,te=(w-R)*(T-M)-(b-M)*(m-R),$=(E-m)*(T-M)-(B-T)*(m-R),me=(b-M)*(E-m)-(w-R)*(B-T),z=te/me,J=$/me;if(me===0&&te!==0||z<=0||z>=1||J<0||J>1)return null;if(te===0&&me===0){for(let Q=0;Q<2;Q++)if(o(Q===0?u:_,x,p),r.loc==i.ORIGIN){const ie=Q===0?u:_;return{x:ie.x,y:ie.y,t:r.t}}else if(r.loc==i.BETWEEN){const ie=+(m+r.t*(E-m)).toPrecision(10),U=+(T+r.t*(B-T)).toPrecision(10);return{x:ie,y:U,t:r.t}}return null}else{for(let U=0;U<2;U++)if(o(U===0?u:_,x,p),r.loc==i.ORIGIN){const j=U===0?u:_;return{x:j.x,y:j.y,t:r.t}}const Q=+(m+z*(E-m)).toPrecision(10),ie=+(T+z*(B-T)).toPrecision(10);return{x:Q,y:ie,t:z}}}function o(x,p,u){const _=u.x-p.x,m=u.y-p.y,E=x.x-p.x,R=x.y-p.y,w=_*R-E*m;if(x.x===p.x&&x.y===p.y){r.loc=i.ORIGIN,r.t=0;return}if(x.x===u.x&&x.y===u.y){r.loc=i.DESTINATION,r.t=1;return}if(w<-Number.EPSILON){r.loc=i.LEFT;return}if(w>Number.EPSILON){r.loc=i.RIGHT;return}if(_*E<0||m*R<0){r.loc=i.BEHIND;return}if(Math.sqrt(_*_+m*m)<Math.sqrt(E*E+R*R)){r.loc=i.BEYOND;return}let T;_!==0?T=E/_:T=R/m,r.loc=i.BETWEEN,r.t=T}function a(x,p){const u=[],_=[];for(let m=1;m<x.length;m++){const E=x[m-1],R=x[m];for(let w=1;w<p.length;w++){const T=p[w-1],B=p[w],M=s(E,R,T,B);M!==null&&u.find(b=>b.t<=M.t+Number.EPSILON&&b.t>=M.t-Number.EPSILON)===void 0&&(u.push(M),_.push(new Me(M.x,M.y)))}}return _}function l(x,p,u){const _=new Me;p.getCenter(_);const m=[];return u.forEach(E=>{E.boundingBox.containsPoint(_)&&a(x,E.points).forEach(w=>{m.push({identifier:E.identifier,isCW:E.isCW,point:w})})}),m.sort((E,R)=>E.point.x-R.point.x),m}function c(x,p,u,_,m){(m==null||m==="")&&(m="nonzero");const E=new Me;x.boundingBox.getCenter(E);const R=[new Me(u,E.y),new Me(_,E.y)],w=l(R,x.boundingBox,p);w.sort(($,me)=>$.point.x-me.point.x);const T=[],B=[];w.forEach($=>{$.identifier===x.identifier?T.push($):B.push($)});const M=T[0].point.x,b=[];let te=0;for(;te<B.length&&B[te].point.x<M;)b.length>0&&b[b.length-1]===B[te].identifier?b.pop():b.push(B[te].identifier),te++;if(b.push(x.identifier),m==="evenodd"){const $=b.length%2===0,me=b[b.length-2];return{identifier:x.identifier,isHole:$,for:me}}else if(m==="nonzero"){let $=!0,me=null,z=null;for(let J=0;J<b.length;J++){const Q=b[J];$?(z=p[Q].isCW,$=!1,me=Q):z!==p[Q].isCW&&(z=p[Q].isCW,$=!0)}return{identifier:x.identifier,isHole:$,for:me}}else console.warn('fill-rule: "'+m+'" is currently not implemented.')}let d=999999999,h=-999999999,f=e.subPaths.map(x=>{const p=x.getPoints();let u=-999999999,_=999999999,m=-999999999,E=999999999;for(let R=0;R<p.length;R++){const w=p[R];w.y>u&&(u=w.y),w.y<_&&(_=w.y),w.x>m&&(m=w.x),w.x<E&&(E=w.x)}return h<=m&&(h=m+1),d>=E&&(d=E-1),{curves:x.curves,points:p,isCW:pu.isClockWise(p),identifier:-1,boundingBox:new lR(new Me(E,_),new Me(m,u))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;const v=f.map(x=>c(x,f,d,h,e.userData?e.userData.style.fillRule:void 0)),y=[];return f.forEach(x=>{if(!v[x.identifier].isHole){const u=new tc;u.curves=x.curves,v.filter(m=>m.isHole&&m.for===x.identifier).forEach(m=>{const E=f[m.identifier],R=new io;R.curves=E.curves,u.holes.push(R)}),y.push(u)}}),y}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Oc.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new li;return l.setAttribute("position",new en(s,3)),l.setAttribute("normal",new en(o,3)),l.setAttribute("uv",new en(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const c=new Me,d=new Me,h=new Me,f=new Me,v=new Me,y=new Me,x=new Me,p=new Me,u=new Me,_=new Me,m=new Me,E=new Me,R=new Me,w=new Me,T=new Me,B=new Me,M=new Me;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=be(e);const b=e.length;if(b<2)return 0;const te=e[0].equals(e[b-1]);let $,me=e[0],z;const J=n.strokeWidth/2,Q=1/(b-1);let ie=0,U,j,W,ee,ue=!1,oe=0,O=l*3,N=l*2;I(e[0],e[1],c).multiplyScalar(J),p.copy(e[0]).sub(c),u.copy(e[0]).add(c),_.copy(p),m.copy(u);for(let Z=1;Z<b;Z++){$=e[Z],Z===b-1?te?z=e[1]:z=void 0:z=e[Z+1];const de=c;if(I(me,$,de),h.copy(de).multiplyScalar(J),E.copy($).sub(h),R.copy($).add(h),U=ie+Q,j=!1,z!==void 0){I($,z,d),h.copy(d).multiplyScalar(J),w.copy($).sub(h),T.copy($).add(h),W=!0,h.subVectors(z,me),de.dot(h)<0&&(W=!1),Z===1&&(ue=W),h.subVectors(z,$),h.normalize();const fe=Math.abs(de.dot(h));if(fe>Number.EPSILON){const Ae=J/fe;h.multiplyScalar(-Ae),f.subVectors($,me),v.copy(f).setLength(Ae).add(h),B.copy(v).negate();const V=v.length(),g=f.length();f.divideScalar(g),y.subVectors(z,$);const S=y.length();switch(y.divideScalar(S),f.dot(B)<g&&y.dot(B)<S&&(j=!0),M.copy(v).add($),B.add($),ee=!1,j?W?(T.copy(B),R.copy(B)):(w.copy(B),E.copy(B)):pe(),n.strokeLineJoin){case"bevel":q(W,j,U);break;case"round":_e(W,j),W?se($,E,w,U,0):se($,T,R,U,1);break;case"miter":case"miter-clip":default:const L=J*n.strokeMiterLimit/V;if(L<1)if(n.strokeLineJoin!=="miter-clip"){q(W,j,U);break}else _e(W,j),W?(y.subVectors(M,E).multiplyScalar(L).add(E),x.subVectors(M,w).multiplyScalar(L).add(w),A(E,U,0),A(y,U,0),A($,U,.5),A($,U,.5),A(y,U,0),A(x,U,0),A($,U,.5),A(x,U,0),A(w,U,0)):(y.subVectors(M,R).multiplyScalar(L).add(R),x.subVectors(M,T).multiplyScalar(L).add(T),A(R,U,1),A(y,U,1),A($,U,.5),A($,U,.5),A(y,U,1),A(x,U,1),A($,U,.5),A(x,U,1),A(T,U,1));else j?(W?(A(u,ie,1),A(p,ie,0),A(M,U,0),A(u,ie,1),A(M,U,0),A(B,U,1)):(A(u,ie,1),A(p,ie,0),A(M,U,1),A(p,ie,0),A(B,U,0),A(M,U,1)),W?w.copy(M):T.copy(M)):W?(A(E,U,0),A(M,U,0),A($,U,.5),A($,U,.5),A(M,U,0),A(w,U,0)):(A(R,U,1),A(M,U,1),A($,U,.5),A($,U,.5),A(M,U,1),A(T,U,1)),ee=!0;break}}else pe()}else pe();!te&&Z===b-1&&H(e[0],_,m,W,!0,ie),ie=U,me=$,p.copy(w),u.copy(T)}if(!te)H($,E,R,W,!1,U);else if(j&&s){let Z=M,de=B;ue!==W&&(Z=B,de=M),W?(ee||ue)&&(de.toArray(s,0*3),de.toArray(s,3*3),ee&&Z.toArray(s,1*3)):(ee||!ue)&&(de.toArray(s,1*3),de.toArray(s,3*3),ee&&Z.toArray(s,0*3))}return oe;function I(Z,de,fe){return fe.subVectors(de,Z),fe.set(-fe.y,fe.x).normalize()}function A(Z,de,fe){s&&(s[O]=Z.x,s[O+1]=Z.y,s[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[N]=de,a[N+1]=fe,N+=2)),oe+=3}function se(Z,de,fe,Ae,V){c.copy(de).sub(Z).normalize(),d.copy(fe).sub(Z).normalize();let g=Math.PI;const S=c.dot(d);Math.abs(S)<1&&(g=Math.abs(Math.acos(S))),g/=i,h.copy(de);for(let L=0,X=i-1;L<X;L++)f.copy(h).rotateAround(Z,g),A(h,Ae,V),A(f,Ae,V),A(Z,Ae,.5),h.copy(f);A(f,Ae,V),A(fe,Ae,V),A(Z,Ae,.5)}function pe(){A(u,ie,1),A(p,ie,0),A(E,U,0),A(u,ie,1),A(E,U,1),A(R,U,0)}function q(Z,de,fe){de?Z?(A(u,ie,1),A(p,ie,0),A(E,U,0),A(u,ie,1),A(E,U,0),A(B,U,1),A(E,fe,0),A(w,fe,0),A(B,fe,.5)):(A(u,ie,1),A(p,ie,0),A(R,U,1),A(p,ie,0),A(B,U,0),A(R,U,1),A(R,fe,1),A(B,fe,0),A(T,fe,1)):Z?(A(E,fe,0),A(w,fe,0),A($,fe,.5)):(A(R,fe,1),A(T,fe,0),A($,fe,.5))}function _e(Z,de){de&&(Z?(A(u,ie,1),A(p,ie,0),A(E,U,0),A(u,ie,1),A(E,U,0),A(B,U,1),A(E,ie,0),A($,U,.5),A(B,U,1),A($,U,.5),A(w,ie,0),A(B,U,1)):(A(u,ie,1),A(p,ie,0),A(R,U,1),A(p,ie,0),A(B,U,0),A(R,U,1),A(R,ie,1),A(B,U,0),A($,U,.5),A($,U,.5),A(B,U,0),A(T,ie,1)))}function H(Z,de,fe,Ae,V,g){switch(n.strokeLineCap){case"round":V?se(Z,fe,de,g,.5):se(Z,de,fe,g,.5);break;case"square":if(V)c.subVectors(de,Z),d.set(c.y,-c.x),h.addVectors(c,d).add(Z),f.subVectors(d,c).add(Z),Ae?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(fe,Z),d.set(c.y,-c.x),h.addVectors(c,d).add(Z),f.subVectors(d,c).add(Z);const S=s.length;Ae?(h.toArray(s,S-1*3),f.toArray(s,S-2*3),f.toArray(s,S-4*3)):(f.toArray(s,S-2*3),h.toArray(s,S-1*3),f.toArray(s,S-4*3))}break}}function be(Z){let de=!1;for(let Ae=1,V=Z.length-1;Ae<V;Ae++)if(Z[Ae].distanceTo(Z[Ae+1])<r){de=!0;break}if(!de)return Z;const fe=[];fe.push(Z[0]);for(let Ae=1,V=Z.length-1;Ae<V;Ae++)Z[Ae].distanceTo(Z[Ae+1])>=r&&fe.push(Z[Ae]);return fe.push(Z[Z.length-1]),fe}}}const Fl=100,Ld=3,Go=7,hv=.5,fv=25,hR=1500,Nd=6,Ls={water:{r:17,g:22,b:41},land:{r:54,g:63,b:84}},Yt="#9333ea";function fR({cards:t,selectedCards:e,autoRotate:n,onMarkerClick:i,onMarkerVisibilityChange:r,onInteraction:s,focusCardId:o,onFocusLost:a,visibleGroups:l}){const c=xe.useRef(null),d=xe.useRef(null),h=xe.useRef(null),f=xe.useRef(null),v=xe.useRef(null),y=xe.useRef(null),x=xe.useRef(null),p=xe.useRef([]),u=xe.useRef(null),_=xe.useRef(0),m=xe.useRef({}),E=xe.useRef({}),R=xe.useRef({}),w=xe.useRef(null),T=xe.useRef(e),B=xe.useRef(r),M=xe.useRef(s),b=xe.useRef(!1),[te,$]=xe.useState(!1),me=xe.useRef(o),z=xe.useRef(null),J=xe.useRef(null),Q=xe.useRef(null),ie=xe.useRef({}),U=xe.useRef(new G),j=xe.useRef(new G),W=xe.useRef(new G),ee=xe.useRef(new G),ue=xe.useRef(new Me);xe.useEffect(()=>{T.current=e},[e]),xe.useEffect(()=>{me.current=o},[o]),xe.useEffect(()=>{B.current=r},[r]),xe.useEffect(()=>{M.current=s},[s]);const oe=xe.useCallback(()=>{const S=document.createElement("canvas");S.width=4096,S.height=4096/2;const L=S.getContext("2d");L.fillStyle="#000003",L.fillRect(0,0,S.width,S.height);for(let X=0;X<2500;X++){const Y=Math.random()*S.width,ne=Math.random()*S.height,k=Math.random()*1.2+.3,re=Math.random();let ge,Te,Ce;const he=Math.random();he<.7?ge=Te=Ce=180+Math.random()*50:he<.85?(ge=160+Math.random()*40,Te=180+Math.random()*40,Ce=220):(ge=220,Te=210+Math.random()*20,Ce=160+Math.random()*40),L.beginPath(),L.arc(Y,ne,k,0,Math.PI*2),L.fillStyle=`rgba(${ge}, ${Te}, ${Ce}, ${(.2+re*.4)*.6})`,L.fill()}return new Is(S)},[]),O=xe.useCallback(g=>{const L=document.createElement("canvas");L.width=2048,L.height=2048/2;const X=L.getContext("2d",{willReadFrequently:!0});X.drawImage(g,0,0,L.width,L.height);const ne=X.getImageData(0,0,L.width,L.height).data,k=document.createElement("canvas");k.width=2048,k.height=2048/2;const re=k.getContext("2d"),ge=re.createImageData(2048,2048/2),Te=ge.data,Ce=document.createElement("canvas");Ce.width=2048,Ce.height=2048/2;const he=Ce.getContext("2d"),Fe=he.createImageData(2048,2048/2),ke=Fe.data;for(let Se=0;Se<ne.length;Se+=4){const ve=ne[Se]>100;Te[Se]=Te[Se+1]=Te[Se+2]=ve?0:255,Te[Se+3]=255,ve?(ke[Se]=Ls.water.r,ke[Se+1]=Ls.water.g,ke[Se+2]=Ls.water.b):(ke[Se]=Ls.land.r,ke[Se+1]=Ls.land.g,ke[Se+2]=Ls.land.b),ke[Se+3]=255}re.putImageData(ge,0,0),he.putImageData(Fe,0,0);const Le=document.createElement("canvas");Le.width=2048,Le.height=2048/2;const Ne=Le.getContext("2d");return Ne.filter="blur(1px)",Ne.drawImage(k,0,0),{colorTexture:new Is(Ce),displacementTexture:new Is(Le)}},[]),N=xe.useCallback((g=Yt)=>{const S=document.createElement("canvas");S.width=128,S.height=128;const L=S.getContext("2d");L.fillStyle=g,L.beginPath();for(let X=0;X<10;X++){const Y=X%2===0?60:25,ne=X*Math.PI/5-Math.PI/2,k=64+Math.cos(ne)*Y,re=64+Math.sin(ne)*Y;X===0?L.moveTo(k,re):L.lineTo(k,re)}return L.closePath(),L.fill(),new Is(S)},[]),I=xe.useCallback((g=Yt)=>new Promise(S=>{if(g===Yt){const L=new Image;L.onload=()=>{const Y=document.createElement("canvas");Y.width=128,Y.height=128,Y.getContext("2d").drawImage(L,0,0,128,128),S(new Is(Y))},L.onerror=()=>{S(N(g))};const X="/anking-globe/";L.src=X+"star.svg"}else S(N(g))}),[N]),A=xe.useCallback((g=Yt)=>{const S=document.createElement("canvas");S.width=128,S.height=128;const L=S.getContext("2d");let X=147,Y=51,ne=234;if(g.startsWith("#")){const re=g.slice(1);X=parseInt(re.slice(0,2),16),Y=parseInt(re.slice(2,4),16),ne=parseInt(re.slice(4,6),16)}const k=L.createRadialGradient(64,64,0,64,64,64);return k.addColorStop(0,`rgba(${X}, ${Y}, ${ne}, 0.5)`),k.addColorStop(.3,`rgba(${X}, ${Y}, ${ne}, 0.2)`),k.addColorStop(.6,`rgba(${X}, ${Y}, ${ne}, 0.05)`),k.addColorStop(1,`rgba(${X}, ${Y}, ${ne}, 0)`),L.fillStyle=k,L.fillRect(0,0,128,128),new Is(S)},[]),se=xe.useCallback(g=>{let S=147,L=51,X=234;if(g.startsWith("#")){const Y=g.slice(1);S=parseInt(Y.slice(0,2),16),L=parseInt(Y.slice(2,4),16),X=parseInt(Y.slice(4,6),16)}return{r:S,g:L,b:X}},[]),pe=xe.useCallback(()=>{const L=new Oc().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z"/></svg>'),Y=Oc.createShapes(L.paths[0])[0],ne=11.04/2,k=11.53/2,re=Math.max(11.04,11.53),ge=Go/re,Ce=Y.getPoints(32).map(ve=>({x:(ve.x-ne)*ge,y:-(ve.y-k)*ge})),he=20,Fe=Ce.length,ke=[],Le=[],Ne=[];for(let ve=0;ve<=he;ve++){const De=ve/he,Pe=De*fv,ye=1+De*1.2;for(let F=0;F<Fe;F++){const Ee=Ce[F];ke.push(Ee.x*ye,Ee.y*ye,Pe),Le.push(F/Fe,De)}ke.push(0,0,Pe),Le.push(.5,De)}const Se=Fe+1;for(let ve=0;ve<he;ve++){const De=ve*Se,Pe=(ve+1)*Se;for(let ye=0;ye<Fe;ye++){const F=De+ye,Ee=De+(ye+1)%Fe,Re=Pe+ye,He=Pe+(ye+1)%Fe;Ne.push(F,Ee,Re),Ne.push(Ee,He,Re)}}const D=new li;return D.setAttribute("position",new en(ke,3)),D.setAttribute("uv",new en(Le,2)),D.setIndex(Ne),D.computeVertexNormals(),D},[]),q=xe.useCallback((g=Yt)=>{const{r:S,g:L,b:X}=se(g),Y=pe(),ne=new Ui({uniforms:{color:{value:new tt(S/255,L/255,X/255)},opacity:{value:.35},rayLength:{value:fv}},vertexShader:`
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
      `,transparent:!0,side:In,depthWrite:!1,blending:ia}),k=new cn(Y,ne);return k.position.z=.3,k.userData={type:"beam"},k},[se,pe]),_e=xe.useCallback((g,S,L,X=[])=>{const Y=new $s,ne=new $s;ne.userData={type:"starContainer"};const k=new cn(new Ra(Go*2.5,Go*2.5),new sa({map:L,transparent:!0,opacity:.3,side:In,depthWrite:!1,blending:ia}));k.position.z=.1,k.userData={type:"glow"};const re=new cn(new Ra(Go,Go),new sa({map:S,transparent:!0,opacity:1,side:In,depthWrite:!1}));re.position.z=.2,re.userData={type:"star"},ne.add(k),ne.add(re),Y.add(ne);const ge=g.starColor||Yt,Te=q(ge);Y.add(Te),ie.current[g.id]=1;let Ce=g.lat,he=g.lng;const Fe=8,ke=2.5;let Le=0;const Ne=8;for(;Le<Ne;){const ve=(90-Ce)*(Math.PI/180),De=(he+180)*(Math.PI/180),Pe=Fl+Ld+hv,ye=new G(-Pe*Math.sin(ve)*Math.cos(De),Pe*Math.cos(ve),Pe*Math.sin(ve)*Math.sin(De));let F=!1;for(const He of X)if(ye.distanceTo(He.position)<Fe){F=!0;break}if(!F){Y.position.copy(ye);break}const Ee=Le*Math.PI/4,Re=ke*(1+Le*.3);Ce=g.lat+Math.sin(Ee)*Re,he=g.lng+Math.cos(Ee)*Re,Le++}if(Le>=Ne){const ve=(90-g.lat)*(Math.PI/180),De=(g.lng+180)*(Math.PI/180),Pe=Fl+Ld+hv;Y.position.set(-Pe*Math.sin(ve)*Math.cos(De),Pe*Math.cos(ve),Pe*Math.sin(ve)*Math.sin(De))}const Se=Y.position.clone().normalize(),D=Y.position.clone().add(Se);return Y.lookAt(D),Y.userData={card:g},E.current[g.id]=1,Y},[q]),H=xe.useCallback((g,S,L)=>{var Te;W.current.subVectors(S,g).normalize(),ee.current.copy(g).normalize();const X=W.current.dot(ee.current),ne=((Te=m.current[L])==null?void 0:Te.visible)??!1?X>-.15:X>0;if(!ne)return{visible:!1,targetOpacity:0,scale:0};let k=1;X<.2&&(k=Math.max(0,(X+.15)/.35));const re=S.distanceTo(g),ge=Math.max(.6,Math.min(1,280/re));return{visible:ne,targetOpacity:k,scale:ge}},[]),be=xe.useCallback(g=>{const S=h.current,L=f.current;if(!S||!L)return;const X=(90-g.lat)*(Math.PI/180),Y=(g.lng+180)*(Math.PI/180),ne=new G(-220*Math.sin(X)*Math.cos(Y),220*Math.cos(X),220*Math.sin(X)*Math.sin(Y)),k=S.position.clone(),re=L.target.clone(),ge=new G(0,0,0),Te=performance.now(),Ce=2e3,he=Fe=>{const ke=Fe-Te;let Le=Math.min(ke/Ce,1);if(Le>=1){S.position.copy(ne),L.target.set(0,0,0),L.update();return}const Ne=Le<.5?16*Le*Le*Le*Le*Le:1-Math.pow(-2*Le+2,5)/2;S.position.lerpVectors(k,ne,Ne),L.target.lerpVectors(re,ge,Ne),L.update(),requestAnimationFrame(he)};requestAnimationFrame(he)},[]),Z=xe.useCallback((g,S,L)=>{W.current.subVectors(L,g);const X=W.current.dot(S);return X<0?1/0:(ee.current.copy(S).multiplyScalar(X).add(g),ee.current.distanceTo(L))},[]),de=xe.useCallback((g,S)=>{const L=h.current,X=c.current,Y=p.current;if(!L||!X||Y.length===0)return null;const ne=X.getBoundingClientRect();ue.current.set((g-ne.left)/ne.width*2-1,-((S-ne.top)/ne.height)*2+1),U.current.copy(L.position),j.current.set(ue.current.x,ue.current.y,.5).unproject(L).sub(U.current).normalize();let k=null,re=Nd;const ge=J.current?Nd*1.2:Nd;if(J.current)for(const Te of Y){const Ce=Te.userData.card;if(Ce&&Ce.id===J.current&&Te.visible){if((E.current[Ce.id]??0)>.3&&Z(U.current,j.current,Te.position)<ge)return Ce;break}}for(const Te of Y){if(!Te.visible)continue;const Ce=Te.userData.card;if(!Ce||(E.current[Ce.id]??0)<.3)continue;const Fe=Z(U.current,j.current,Te.position);Fe<re&&(re=Fe,k=Ce)}return k},[Z]);xe.useEffect(()=>{if(o&&o!==u.current&&t.length>0){u.current=o;const g=parseInt(o.split("-")[0],10),S=t.find(L=>L.id===g);S&&be(S)}},[o,t,be]),xe.useEffect(()=>{if(!c.current||b.current)return;b.current=!0;const g=c.current,S=new TC;S.background=new tt(3),d.current=S;const L=new Pn(45,g.clientWidth/g.clientHeight,1,3e3);L.position.z=320,h.current=L;const X=new By({antialias:!0,powerPreference:"high-performance"});X.setSize(g.clientWidth,g.clientHeight),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.appendChild(X.domElement),v.current=X;const Y=new uR(L,X.domElement);Y.enableDamping=!0,Y.dampingFactor=.05,Y.minDistance=150,Y.maxDistance=600,Y.enablePan=!1,Y.autoRotateSpeed=.5,f.current=Y,Y.addEventListener("start",()=>{M.current&&M.current()});const ne=new MutationObserver(Se=>{for(const D of Se)if(D.type==="attributes"&&D.attributeName==="style"){const ve=D.target;ve.style.cursor&&ve.style.cursor!==""&&(ve.style.cursor="")}});ne.observe(X.domElement,{attributes:!0,attributeFilter:["style"]});const k=new cn(new la(hR,64,32),new sa({map:oe(),side:Xt,transparent:!0,opacity:.7}));S.add(k),y.current=k;const re=new cn(new la(Fl,200,100),new nv({color:1119785}));S.add(re);const ge=new Image;ge.crossOrigin="anonymous",ge.onload=()=>{const{colorTexture:Se,displacementTexture:D}=O(ge);re.material.dispose(),re.material=new nv({map:Se,displacementMap:D,displacementScale:Ld,roughness:.85,metalness:.05})};const Te="/anking-globe/";ge.src=Te+"earth_specular.png",S.add(new cn(new la(Fl+18,32,32),new Ui({vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }",blending:ia,side:Xt,transparent:!0}))),S.add(new aR(10053324,.25));const Ce=new ov(16772829,1);Ce.position.set(300,100,200),S.add(Ce),x.current=Ce,S.add(new ov(9647082,.2).translateX(-200).translateY(-100).translateZ(-200));const he=A(Yt);w.current=he,I(Yt).then(Se=>{R.current[Yt]=Se});const Fe=()=>{L.aspect=g.clientWidth/g.clientHeight,L.updateProjectionMatrix(),X.setSize(g.clientWidth,g.clientHeight)};window.addEventListener("resize",Fe);const ke=new G;let Le;const Ne=Se=>{var Ke,Je;if(Le=requestAnimationFrame(Ne),Y.update(),_.current++,y.current&&(y.current.rotation.y=-L.rotation.y*.1,y.current.rotation.x=-L.rotation.x*.05),x.current){const rt=Se*1e-4;x.current.position.set(Math.cos(rt)*400,Math.sin(rt*.3)*100+50,Math.sin(rt)*400)}const D=1+Math.sin(Se*.002)*.03,ve=.25+Math.sin(Se*.002)*.05,De=.3+Math.sin(Se*.003)*.08,Pe=Se*5e-4,ye=p.current,F=T.current,Ee={},Re=L.position,He=g.clientWidth,Be=g.clientHeight;for(let rt=0;rt<ye.length;rt++){const it=ye[rt],Xe=it.userData.card;if(!Xe)continue;const{visible:_t,targetOpacity:Tn,scale:us}=H(it.position,Re,Xe.id);m.current[Xe.id]={visible:_t};const qa=E.current[Xe.id]??1,sn=qa+(Tn-qa)*.1;E.current[Xe.id]=sn,it.visible=sn>.01;const Co=F==null?void 0:F.includes(Xe.id),Ar=ie.current[Xe.id]??1,ds=Ar+((Co?0:1)-Ar)*.08;ie.current[Xe.id]=ds;let br=null;for(const C of it.children)((Ke=C.userData)==null?void 0:Ke.type)==="starContainer"&&(br=C);Co?(it.scale.setScalar(.7*us),br&&(br.rotation.z=Pe),it.traverse(C=>{var K,ae,ce;((K=C.userData)==null?void 0:K.type)==="star"?C.material.opacity=sn:((ae=C.userData)==null?void 0:ae.type)==="glow"?(C.material.opacity=.6*sn,C.scale.setScalar(1.8)):((ce=C.userData)==null?void 0:ce.type)==="beam"&&C.material.uniforms&&(C.material.uniforms.opacity.value=ds*.35*sn)})):(it.scale.setScalar(D*us),br&&(br.rotation.z=0),it.traverse(C=>{var K,ae,ce;((K=C.userData)==null?void 0:K.type)==="star"?C.material.opacity=sn:((ae=C.userData)==null?void 0:ae.type)==="glow"?(C.material.opacity=ve*sn,C.scale.setScalar(1)):((ce=C.userData)==null?void 0:ce.type)==="beam"&&C.material.uniforms&&(C.material.uniforms.opacity.value=ds*De*sn)})),ke.copy(it.position).project(L);const yu=(ke.x*.5+.5)*He,xu=(-ke.y*.5+.5)*Be;Ee[Xe.id]={visible:it.visible,screenPos:{x:yu,y:xu},scale:us,opacity:sn}}ye.length>0&&_.current%3===0&&((Je=B.current)==null||Je.call(B,Ee)),X.render(S,L)};return Ne(0),()=>{window.removeEventListener("resize",Fe),cancelAnimationFrame(Le),ne.disconnect(),S.traverse(Se=>{Se.geometry&&Se.geometry.dispose(),Se.material&&(Array.isArray(Se.material)?Se.material.forEach(D=>D.dispose()):Se.material.dispose())}),X.dispose(),g&&X.domElement.parentNode===g&&g.removeChild(X.domElement),b.current=!1}},[]),xe.useEffect(()=>()=>{Q.current&&cancelAnimationFrame(Q.current)},[]),xe.useEffect(()=>{if(f.current){const g=n&&!te&&(!e||e.length===0)&&!o;f.current.autoRotate=g}},[n,te,e,o]),xe.useEffect(()=>{if(!(!h.current||!f.current)){if(o){z.current||(z.current=h.current.position.clone());const g=p.current.find(S=>{var L;return((L=S.userData.card)==null?void 0:L.id)===o});if(g){const L=g.position.clone().normalize().multiplyScalar(160),X=h.current.position.clone(),Y=600,ne=Date.now();let k=!1;const re=()=>{if(k||!me.current)return;const ge=Date.now()-ne,Te=Math.min(ge/Y,1),Ce=1-Math.pow(1-Te,3);h.current.position.lerpVectors(X,L,Ce),f.current.update(),Te<1&&requestAnimationFrame(re)};return re(),()=>{k=!0}}}else if(z.current){const g=h.current.position.clone(),S=z.current,L=600,X=Date.now();z.current=null;let Y=!1;const ne=()=>{if(Y)return;const k=Date.now()-X,re=Math.min(k/L,1),ge=1-Math.pow(1-re,3);h.current.position.lerpVectors(g,S,ge),f.current.update(),re<1&&requestAnimationFrame(ne)};return ne(),()=>{Y=!0}}}},[o]),xe.useEffect(()=>{if(!f.current)return;const g=()=>{me.current&&a&&a()},S=f.current;return S.addEventListener("start",g),()=>{S.removeEventListener("start",g)}},[a]),xe.useEffect(()=>{if(!d.current||!w.current||!R.current[Yt])return;p.current.forEach(S=>{S.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&L.material.dispose()}),d.current.remove(S)}),p.current=[],E.current={},ie.current={};let g=t;l&&l.length>0&&!l.includes("all")&&(g=t.filter(S=>!S.groups||S.groups.length===0?!1:S.groups.some(L=>l.includes(L)))),g.forEach(S=>{const L=S.starColor||Yt,X=R.current[L]||R.current[Yt],Y=A(L),ne=_e(S,X,Y,p.current);d.current.add(ne),p.current.push(ne)})},[t,l,_e,A]),xe.useEffect(()=>{const g=setInterval(()=>{if(R.current[Yt]&&d.current&&p.current.length===0&&t.length>0){let S=t;l&&l.length>0&&!l.includes("all")&&(S=t.filter(L=>!L.groups||L.groups.length===0?!1:L.groups.some(X=>l.includes(X)))),S.forEach(L=>{const X=L.starColor||Yt,Y=R.current[X]||R.current[Yt],ne=A(X),k=_e(L,Y,ne,p.current);d.current.add(k),p.current.push(k)}),clearInterval(g)}},100);return()=>clearInterval(g)},[t,l,_e,A]);const fe=xe.useCallback(g=>{const S=de(g.clientX,g.clientY);S&&i(S)},[i,de]),Ae=xe.useCallback(g=>{const S=de(g.clientX,g.clientY),L=(S==null?void 0:S.id)??null;L!==J.current&&(J.current=L,Q.current&&cancelAnimationFrame(Q.current),Q.current=requestAnimationFrame(()=>{$(L!==null),Q.current=null}))},[de]),V=xe.useCallback(()=>{Q.current&&cancelAnimationFrame(Q.current),J.current=null,$(!1)},[]);return P.jsx("div",{ref:c,className:`globe-canvas ${te?"hovering-star":""}`,onClick:fe,onPointerMove:Ae,onPointerLeave:V})}function pR({cards:t=[],selectedCards:e=[],autoRotate:n,onAutoRotateChange:i,onToggleCard:r,onOpenAll:s,onCloseAll:o,onManageClick:a,isEmbedMode:l}){const[c,d]=xe.useState(!1),[h,f]=xe.useState(!1);return l?null:P.jsxs(P.Fragment,{children:[P.jsx("button",{className:"controls-toggle",onClick:()=>d(!c),children:P.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("circle",{cx:"12",cy:"12",r:"3"}),P.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),c&&P.jsxs("div",{className:"controls-panel",children:[P.jsx("h3",{children:"Settings"}),P.jsx("div",{className:"control-item",children:P.jsxs("label",{className:"toggle-label",children:[P.jsx("span",{children:"Auto Rotate"}),P.jsxs("div",{className:"toggle-switch",children:[P.jsx("input",{type:"checkbox",checked:n,onChange:v=>i==null?void 0:i(v.target.checked)}),P.jsx("span",{className:"toggle-slider"})]})]})}),P.jsx("div",{className:"control-divider"}),P.jsxs("div",{className:"control-item dropdown-section",children:[P.jsxs("button",{className:"dropdown-toggle",onClick:()=>f(!h),children:[P.jsxs("span",{children:["Members (",t.length,")"]}),P.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:h?"rotate(180deg)":"none",transition:"transform 0.2s"},children:P.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),h&&P.jsxs("div",{className:"member-dropdown",children:[P.jsxs("div",{className:"dropdown-actions",children:[P.jsxs("button",{className:"dropdown-action-btn",onClick:s,children:[P.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),P.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]}),P.jsxs("button",{className:"dropdown-action-btn",onClick:o,children:[P.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),P.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]})]}),P.jsx("div",{className:"member-list",children:t.map(v=>P.jsxs("button",{className:`member-item ${e.includes(v.id)?"selected":""}`,onClick:()=>r==null?void 0:r(v.id),children:[P.jsx("span",{className:"member-name",children:v.name}),P.jsx("span",{className:"member-location",children:v.location}),e.includes(v.id)&&P.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("polyline",{points:"20 6 9 17 4 12"})})]},v.id))})]})]}),P.jsx("div",{className:"control-divider"}),P.jsxs("button",{className:"manage-btn",onClick:a,children:[P.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),P.jsx("circle",{cx:"9",cy:"7",r:"4"}),P.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),P.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Manage Members"]})]})]})}const an="https://api-efgn5mw6aq-uc.a.run.app";function $h(t){return t?t.startsWith("http")?t:`https://storage.googleapis.com/anking-globe.appspot.com/cards/${t}`:""}async function mR(){const t=await fetch(`${an}/cards`);if(!t.ok)throw new Error("Failed to fetch cards");return t.json()}function gR({card:t,visibilityData:e,onClose:n,onFocus:i,isFocused:r,zIndex:s}){const o=e==null?void 0:e[t.id];if(!o||!o.visible||o.opacity<.05)return null;const{screenPos:a,scale:l,opacity:c}=o,d=.75,h=r?1.2:1,f=l*d*h,v=280;let y=a.x+15,x=a.y-40;y+v*f>window.innerWidth-10&&(y=a.x-v*f-15),y=Math.max(10,y),x=Math.max(10,Math.min(window.innerHeight-100*f,x));const p=r?2e3:s;return P.jsx("div",{className:`popup-card ${r?"focused":""}`,style:{left:y,top:x,transform:`scale(${f})`,transformOrigin:"left top",opacity:c,zIndex:p,pointerEvents:c>.3?"auto":"none"},onClick:u=>{u.stopPropagation(),i(t.id)},children:P.jsx("div",{className:"popup-card-inner",children:P.jsxs("div",{className:"card-horizontal",children:[P.jsx("div",{className:"card-avatar-side",children:P.jsx("img",{src:$h(t.image),alt:t.name,onError:u=>{u.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=9333ea&color=fff`}})}),P.jsxs("div",{className:"card-text-side",children:[P.jsx("div",{className:"card-name",children:t.name}),P.jsxs("div",{className:"card-info-compact",children:[t.title,t.title&&t.university&&" · ",t.university]}),P.jsxs("div",{className:"card-location-compact",children:[P.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),P.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),t.location]})]}),P.jsx("button",{className:"popup-close",onClick:u=>{u.stopPropagation(),n(t.id)},children:P.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#333",strokeWidth:"2",children:[P.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),P.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})})}function vR(){return P.jsx("div",{className:"loading-screen",children:P.jsxs("div",{className:"loading-content",children:[P.jsx("div",{className:"loading-spinner"}),P.jsx("p",{children:"Loading Globe..."})]})})}var pv={};/**
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
 */const qy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_R=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(f=64)),i.push(n[d],n[h],n[f],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_R(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new yR;const f=s<<2|a>>4;if(i.push(f),c!==64){const v=a<<4&240|c>>2;if(i.push(v),h!==64){const y=c<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xR=function(t){const e=qy(t);return Yy.encodeByteArray(e,!0)},kc=function(t){return xR(t).replace(/\./g,"")},Ky=function(t){try{return Yy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ER=()=>SR().__FIREBASE_DEFAULTS__,MR=()=>{if(typeof process>"u"||typeof pv>"u")return;const t=pv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ky(t[1]);return e&&JSON.parse(e)},op=()=>{try{return ER()||MR()||TR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jy=t=>{var e,n;return(n=(e=op())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wR=t=>{const e=Jy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Zy=()=>{var t;return(t=op())===null||t===void 0?void 0:t.config},Qy=t=>{var e;return(e=op())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class AR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function bR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kc(JSON.stringify(n)),kc(JSON.stringify(o)),""].join(".")}/**
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
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function RR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LR(){const t=tn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NR(){try{return typeof indexedDB=="object"}catch{return!1}}function DR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const UR="FirebaseError";class Bi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=UR,Object.setPrototypeOf(this,Bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?OR(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bi(r,a,i)}}function OR(t,e){return t.replace(kR,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const kR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(mv(s)&&mv(o)){if(!Fc(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function mv(t){return t!==null&&typeof t=="object"}/**
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
 */function Wa(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function BR(t,e){const n=new zR(t,e);return n.subscribe.bind(n)}class zR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");HR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Dd),r.error===void 0&&(r.error=Dd),r.complete===void 0&&(r.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
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
 */function zi(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class VR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new AR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WR(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(t){return t===Fr?void 0:t}function WR(t){return t.instantiationMode==="EAGER"}/**
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
 */class jR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(at||(at={}));const XR={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},$R=at.INFO,qR={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},YR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=qR[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ex{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=YR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in at))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...e),this._logHandler(this,at.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...e),this._logHandler(this,at.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,at.INFO,...e),this._logHandler(this,at.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,at.WARN,...e),this._logHandler(this,at.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...e),this._logHandler(this,at.ERROR,...e)}}const KR=(t,e)=>e.some(n=>t instanceof n);let gv,vv;function JR(){return gv||(gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZR(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tx=new WeakMap,qh=new WeakMap,nx=new WeakMap,Ud=new WeakMap,ap=new WeakMap;function QR(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tx.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function eP(t){if(qh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tP(t){Yh=t(Yh)}function nP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Od(this),e,...n);return nx.set(i,e.sort?e.sort():[e]),vr(i)}:ZR().includes(t)?function(...e){return t.apply(Od(this),e),vr(tx.get(this))}:function(...e){return vr(t.apply(Od(this),e))}}function iP(t){return typeof t=="function"?nP(t):(t instanceof IDBTransaction&&eP(t),KR(t,JR())?new Proxy(t,Yh):t)}function vr(t){if(t instanceof IDBRequest)return QR(t);if(Ud.has(t))return Ud.get(t);const e=iP(t);return e!==t&&(Ud.set(t,e),ap.set(e,t)),e}const Od=t=>ap.get(t);function rP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=vr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sP=["get","getKey","getAll","getAllKeys","count"],oP=["put","add","delete","clear"],kd=new Map;function _v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=oP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||sP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return kd.set(e,s),s}tP(t=>({...t,get:(e,n,i)=>_v(e,n)||t.get(e,n,i),has:(e,n)=>!!_v(e,n)||t.has(e,n)}));/**
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
 */class aP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function lP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",yv="0.10.13";/**
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
 */const Oi=new ex("@firebase/app"),cP="@firebase/app-compat",uP="@firebase/analytics-compat",dP="@firebase/analytics",hP="@firebase/app-check-compat",fP="@firebase/app-check",pP="@firebase/auth",mP="@firebase/auth-compat",gP="@firebase/database",vP="@firebase/data-connect",_P="@firebase/database-compat",yP="@firebase/functions",xP="@firebase/functions-compat",SP="@firebase/installations",EP="@firebase/installations-compat",MP="@firebase/messaging",TP="@firebase/messaging-compat",wP="@firebase/performance",AP="@firebase/performance-compat",bP="@firebase/remote-config",CP="@firebase/remote-config-compat",RP="@firebase/storage",PP="@firebase/storage-compat",IP="@firebase/firestore",LP="@firebase/vertexai-preview",NP="@firebase/firestore-compat",DP="firebase",UP="10.14.1";/**
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
 */const Jh="[DEFAULT]",OP={[Kh]:"fire-core",[cP]:"fire-core-compat",[dP]:"fire-analytics",[uP]:"fire-analytics-compat",[fP]:"fire-app-check",[hP]:"fire-app-check-compat",[pP]:"fire-auth",[mP]:"fire-auth-compat",[gP]:"fire-rtdb",[vP]:"fire-data-connect",[_P]:"fire-rtdb-compat",[yP]:"fire-fn",[xP]:"fire-fn-compat",[SP]:"fire-iid",[EP]:"fire-iid-compat",[MP]:"fire-fcm",[TP]:"fire-fcm-compat",[wP]:"fire-perf",[AP]:"fire-perf-compat",[bP]:"fire-rc",[CP]:"fire-rc-compat",[RP]:"fire-gcs",[PP]:"fire-gcs-compat",[IP]:"fire-fst",[NP]:"fire-fst-compat",[LP]:"fire-vertex","fire-js":"fire-js",[DP]:"fire-js-all"};/**
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
 */const Bc=new Map,kP=new Map,Zh=new Map;function xv(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yo(t){const e=t.name;if(Zh.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Bc.values())xv(n,t);for(const n of kP.values())xv(n,t);return!0}function lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wi(t){return t.settings!==void 0}/**
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
 */const FP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new Ga("app","Firebase",FP);/**
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
 */class BP{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=UP;function ix(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw _r.create("bad-app-name",{appName:String(r)});if(n||(n=Zy()),!n)throw _r.create("no-options");const s=Bc.get(r);if(s){if(Fc(n,s.options)&&Fc(i,s.config))return s;throw _r.create("duplicate-app",{appName:r})}const o=new jR(r);for(const l of Zh.values())o.addComponent(l);const a=new BP(n,i,o);return Bc.set(r,a),a}function rx(t=Jh){const e=Bc.get(t);if(!e&&t===Jh&&Zy())return ix();if(!e)throw _r.create("no-app",{appName:t});return e}function yr(t,e,n){var i;let r=(i=OP[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}yo(new ss(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zP="firebase-heartbeat-database",HP=1,Na="firebase-heartbeat-store";let Fd=null;function sx(){return Fd||(Fd=rP(zP,HP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Na)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Fd}async function VP(t){try{const n=(await sx()).transaction(Na),i=await n.objectStore(Na).get(ox(t));return await n.done,i}catch(e){if(e instanceof Bi)Oi.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function Sv(t,e){try{const i=(await sx()).transaction(Na,"readwrite");await i.objectStore(Na).put(e,ox(t)),await i.done}catch(n){if(n instanceof Bi)Oi.warn(n.message);else{const i=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(i.message)}}}function ox(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GP=1024,WP=30*24*60*60*1e3;class jP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $P(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ev();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=WP}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Oi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ev(),{heartbeatsToSend:i,unsentEntries:r}=XP(this._heartbeatsCache.heartbeats),s=kc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Oi.warn(n),""}}}function Ev(){return new Date().toISOString().substring(0,10)}function XP(t,e=GP){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Mv(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class $P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NR()?DR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mv(t){return kc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qP(t){yo(new ss("platform-logger",e=>new aP(e),"PRIVATE")),yo(new ss("heartbeat",e=>new jP(e),"PRIVATE")),yr(Kh,yv,t),yr(Kh,yv,"esm2017"),yr("fire-js","")}qP("");var YP="firebase",KP="10.14.1";/**
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
 */yr(YP,KP,"app");function cp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ax(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=ax,lx=new Ga("auth","Firebase",ax());/**
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
 */const zc=new ex("@firebase/auth");function ZP(t,...e){zc.logLevel<=at.WARN&&zc.warn(`Auth (${Ao}): ${t}`,...e)}function nc(t,...e){zc.logLevel<=at.ERROR&&zc.error(`Auth (${Ao}): ${t}`,...e)}/**
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
 */function oi(t,...e){throw dp(t,...e)}function Kn(t,...e){return dp(t,...e)}function up(t,e,n){const i=Object.assign(Object.assign({},JP()),{[e]:n});return new Ga("auth","Firebase",i).create(e,{appName:t.name})}function Kr(t){return up(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QP(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&oi(t,"argument-error"),up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dp(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return lx.create(t,...e)}function Ge(t,e,...n){if(!t)throw dp(e,...n)}function Ai(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function ki(t,e){t||Ai(e)}/**
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
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function e2(){return Tv()==="http:"||Tv()==="https:"}function Tv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function t2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e2()||PR()||"connection"in navigator)?navigator.onLine:!0}function n2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,ki(n>e,"Short delay should be less than long delay!"),this.isMobile=CR()||IR()}get(){return t2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hp(t,e){ki(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cx{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const i2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r2=new ja(3e4,6e4);function fp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bo(t,e,n,i,r={}){return ux(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Wa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return RR()||(c.referrerPolicy="no-referrer"),cx.fetch()(dx(t,t.config.apiHost,n,a),c)})}async function ux(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},i2),e);try{const r=new o2(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bl(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw up(t,d,c);oi(t,d)}}catch(r){if(r instanceof Bi)throw r;oi(t,"network-request-failed",{message:String(r)})}}async function s2(t,e,n,i,r={}){const s=await bo(t,e,n,i,r);return"mfaPendingCredential"in s&&oi(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dx(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?hp(t.config,r):`${t.config.apiScheme}://${r}`}class o2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Kn(this.auth,"network-request-failed")),r2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Kn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function a2(t,e){return bo(t,"POST","/v1/accounts:delete",e)}async function hx(t,e){return bo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l2(t,e=!1){const n=zi(t),i=await n.getIdToken(e),r=pp(i);Ge(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ca(Bd(r.auth_time)),issuedAtTime:ca(Bd(r.iat)),expirationTime:ca(Bd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function pp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ky(n);return r?JSON.parse(r):(nc("Failed to decode base64 JWT payload"),null)}catch(r){return nc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wv(t){const e=pp(t);return Ge(e,"internal-error"),Ge(typeof e.exp<"u","internal-error"),Ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Da(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Bi&&c2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function c2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class u2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Da(t,hx(n,{idToken:i}));Ge(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fx(s.providerUserInfo):[],a=h2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ef(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function d2(t){const e=zi(t);await Hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h2(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function fx(t){return t.map(e=>{var{providerId:n}=e,i=cp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function f2(t,e){const n=await ux(t,{},async()=>{const i=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=dx(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cx.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p2(t,e){return bo(t,"POST","/v2/accounts:revokeToken",fp(t,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ge(e.idToken,"internal-error"),Ge(typeof e.idToken<"u","internal-error"),Ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ge(e.length!==0,"internal-error");const n=wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await f2(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ro;return i&&(Ge(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Ge(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Ge(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Ai("not implemented")}}/**
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
 */function $i(t,e){Ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bi{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ef(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Da(this,this.stsTokenManager.getToken(this.auth,e));return Ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l2(this,e)}reload(){return d2(this)}_assign(e){this!==e&&(Ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wi(this.auth.app))return Promise.reject(Kr(this.auth));const e=await this.getIdToken();return await Da(this,a2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,u=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:E,isAnonymous:R,providerData:w,stsTokenManager:T}=n;Ge(m&&T,e,"internal-error");const B=ro.fromJSON(this.name,T);Ge(typeof m=="string",e,"internal-error"),$i(h,e.name),$i(f,e.name),Ge(typeof E=="boolean",e,"internal-error"),Ge(typeof R=="boolean",e,"internal-error"),$i(v,e.name),$i(y,e.name),$i(x,e.name),$i(p,e.name),$i(u,e.name),$i(_,e.name);const M=new bi({uid:m,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:R,photoURL:y,phoneNumber:v,tenantId:x,stsTokenManager:B,createdAt:u,lastLoginAt:_});return w&&Array.isArray(w)&&(M.providerData=w.map(b=>Object.assign({},b))),p&&(M._redirectEventId=p),M}static async _fromIdTokenResponse(e,n,i=!1){const r=new ro;r.updateFromServerResponse(n);const s=new bi({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Hc(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];Ge(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?fx(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new ro;a.updateFromIdToken(i);const l=new bi({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ef(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Av=new Map;function Ci(t){ki(t instanceof Function,"Expected a class definition");let e=Av.get(t);return e?(ki(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Av.set(t,e),e)}/**
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
 */class px{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}px.type="NONE";const bv=px;/**
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
 */function ic(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ic(this.userKey,r.apiKey,s),this.fullPersistenceKey=ic("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new so(Ci(bv),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Ci(bv);const o=ic(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=bi._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new so(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new so(s,e,i))}}/**
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
 */function Cv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_x(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xx(e))return"Blackberry";if(Sx(e))return"Webos";if(gx(e))return"Safari";if((e.includes("chrome/")||vx(e))&&!e.includes("edge/"))return"Chrome";if(yx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function mx(t=tn()){return/firefox\//i.test(t)}function gx(t=tn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vx(t=tn()){return/crios\//i.test(t)}function _x(t=tn()){return/iemobile/i.test(t)}function yx(t=tn()){return/android/i.test(t)}function xx(t=tn()){return/blackberry/i.test(t)}function Sx(t=tn()){return/webos/i.test(t)}function mp(t=tn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function m2(t=tn()){var e;return mp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function g2(){return LR()&&document.documentMode===10}function Ex(t=tn()){return mp(t)||yx(t)||Sx(t)||xx(t)||/windows phone/i.test(t)||_x(t)}/**
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
 */function Mx(t,e=[]){let n;switch(t){case"Browser":n=Cv(tn());break;case"Worker":n=`${Cv(tn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${i}`}/**
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
 */class v2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function _2(t,e={}){return bo(t,"GET","/v2/passwordPolicy",fp(t,e))}/**
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
 */const y2=6;class x2{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:y2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class S2{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rv(this),this.idTokenSubscription=new Rv(this),this.beforeStateQueue=new v2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ci(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hx(this,{idToken:e}),i=await bi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wi(this.app))return Promise.reject(Kr(this));const n=e?zi(e):null;return n&&Ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wi(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wi(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ci(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _2(this),n=new x2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await p2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ci(e)||this._popupRedirectResolver;Ge(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Ci(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ge(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mu(t){return zi(t)}class Rv{constructor(e){this.auth=e,this.observer=null,this.addObserver=BR(n=>this.observer=n)}get next(){return Ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E2(t){gp=t}function M2(t){return gp.loadJS(t)}function T2(){return gp.gapiScript}function w2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function A2(t,e){const n=lp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Fc(s,e??{}))return r;oi(r,"already-initialized")}return n.initialize({options:e})}function b2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ci);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function C2(t,e,n){const i=mu(t);Ge(i._canInitEmulator,i,"emulator-config-failed"),Ge(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Tx(e),{host:o,port:a}=R2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),P2()}function Tx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R2(t){const e=Tx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Pv(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Pv(o)}}}function Pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wx{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ai("not implemented")}_getIdTokenResponse(e){return Ai("not implemented")}_linkToIdToken(e,n){return Ai("not implemented")}_getReauthenticationResolver(e){return Ai("not implemented")}}/**
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
 */async function oo(t,e){return s2(t,"POST","/v1/accounts:signInWithIdp",fp(t,e))}/**
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
 */const I2="http://localhost";class os extends wx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):oi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=cp(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new os(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:I2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wa(n)}return e}}/**
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
 */class Xa extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qi extends Xa{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qi.PROVIDER_ID="facebook.com";/**
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
 */class Si extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return os._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Si.credential(n,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class er extends Xa{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends Xa{constructor(){super("twitter.com")}static credential(e,n){return os._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return tr.credential(n,i)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */class xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await bi._fromIdTokenResponse(e,i,r),o=Iv(i);return new xo({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Iv(i);return new xo({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vc extends Bi{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Vc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Vc(e,n,i,r)}}function Ax(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vc._fromErrorAndOperation(t,s,e,i):s})}async function L2(t,e,n=!1){const i=await Da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xo._forOperation(t,"link",i)}/**
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
 */async function N2(t,e,n=!1){const{auth:i}=t;if(wi(i.app))return Promise.reject(Kr(i));const r="reauthenticate";try{const s=await Da(t,Ax(i,r,e,t),n);Ge(s.idToken,i,"internal-error");const o=pp(s.idToken);Ge(o,i,"internal-error");const{sub:a}=o;return Ge(t.uid===a,i,"user-mismatch"),xo._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&oi(i,"user-mismatch"),s}}/**
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
 */async function D2(t,e,n=!1){if(wi(t.app))return Promise.reject(Kr(t));const i="signIn",r=await Ax(t,i,e),s=await xo._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function U2(t,e,n,i){return zi(t).onIdTokenChanged(e,n,i)}function O2(t,e,n){return zi(t).beforeAuthStateChanged(e,n)}function k2(t,e,n,i){return zi(t).onAuthStateChanged(e,n,i)}function F2(t){return zi(t).signOut()}const Gc="__sak";/**
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
 */class bx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const B2=1e3,z2=10;class Cx extends bx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ex(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);g2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,z2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},B2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cx.type="LOCAL";const H2=Cx;/**
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
 */class Rx extends bx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rx.type="SESSION";const Px=Rx;/**
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
 */function V2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new gu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await V2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gu.receivers=[];/**
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
 */class G2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_p("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function si(){return window}function W2(t){si().location.href=t}/**
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
 */function Ix(){return typeof si().WorkerGlobalScope<"u"&&typeof si().importScripts=="function"}async function j2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $2(){return Ix()?self:null}/**
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
 */const Lx="firebaseLocalStorageDb",q2=1,Wc="firebaseLocalStorage",Nx="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vu(t,e){return t.transaction([Wc],e?"readwrite":"readonly").objectStore(Wc)}function Y2(){const t=indexedDB.deleteDatabase(Lx);return new $a(t).toPromise()}function tf(){const t=indexedDB.open(Lx,q2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Wc,{keyPath:Nx})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Wc)?e(i):(i.close(),await Y2(),e(await tf()))})})}async function Lv(t,e,n){const i=vu(t,!0).put({[Nx]:e,value:n});return new $a(i).toPromise()}async function K2(t,e){const n=vu(t,!1).get(e),i=await new $a(n).toPromise();return i===void 0?null:i.value}function Nv(t,e){const n=vu(t,!0).delete(e);return new $a(n).toPromise()}const J2=800,Z2=3;class Dx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Z2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ix()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gu._getInstance($2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j2(),!this.activeServiceWorker)return;this.sender=new G2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await Lv(e,Gc,"1"),await Nv(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>K2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=vu(r,!1).getAll();return new $a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dx.type="LOCAL";const Q2=Dx;new ja(3e4,6e4);/**
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
 */function Ux(t,e){return e?Ci(e):(Ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yp extends wx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eI(t){return D2(t.auth,new yp(t),t.bypassAuthState)}function tI(t){const{auth:e,user:n}=t;return Ge(n,e,"internal-error"),N2(n,new yp(t),t.bypassAuthState)}async function nI(t){const{auth:e,user:n}=t;return Ge(n,e,"internal-error"),L2(n,new yp(t),t.bypassAuthState)}/**
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
 */class Ox{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eI;case"linkViaPopup":case"linkViaRedirect":return nI;case"reauthViaPopup":case"reauthViaRedirect":return tI;default:oi(this.auth,"internal-error")}}resolve(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iI=new ja(2e3,1e4);async function rI(t,e,n){if(wi(t.app))return Promise.reject(Kn(t,"operation-not-supported-in-this-environment"));const i=mu(t);QP(t,e,vp);const r=Ux(i,n);return new Wr(i,"signInViaPopup",e,r).executeNotNull()}class Wr extends Ox{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ge(e,this.auth,"internal-error"),e}async onExecution(){ki(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iI.get())};e()}}Wr.currentPopupAction=null;/**
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
 */const sI="pendingRedirect",rc=new Map;class oI extends Ox{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const i=await aI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aI(t,e){const n=uI(e),i=cI(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function lI(t,e){rc.set(t._key(),e)}function cI(t){return Ci(t._redirectPersistence)}function uI(t){return ic(sI,t.config.apiKey,t.name)}async function dI(t,e,n=!1){if(wi(t.app))return Promise.reject(Kr(t));const i=mu(t),r=Ux(i,e),o=await new oI(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const hI=10*60*1e3;class fI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!kx(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dv(e))}saveEventToCache(e){this.cachedEventUids.add(Dv(e)),this.lastProcessedEventTime=Date.now()}}function Dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kx(t);default:return!1}}/**
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
 */async function mI(t,e={}){return bo(t,"GET","/v1/projects",e)}/**
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
 */const gI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vI=/^https?/;async function _I(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mI(t);for(const n of e)try{if(yI(n))return}catch{}oi(t,"unauthorized-domain")}function yI(t){const e=Qh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!vI.test(n))return!1;if(gI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const xI=new ja(3e4,6e4);function Uv(){const t=si().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SI(t){return new Promise((e,n)=>{var i,r,s;function o(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(Kn(t,"network-request-failed"))},timeout:xI.get()})}if(!((r=(i=si().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=si().gapi)===null||s===void 0)&&s.load)o();else{const a=w2("iframefcb");return si()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},M2(`${T2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sc=null,e})}let sc=null;function EI(t){return sc=sc||SI(t),sc}/**
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
 */const MI=new ja(5e3,15e3),TI="__/auth/iframe",wI="emulator/auth/iframe",AI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CI(t){const e=t.config;Ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,wI):`https://${t.config.authDomain}/${TI}`,i={apiKey:e.apiKey,appName:t.name,v:Ao},r=bI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Wa(i).slice(1)}`}async function RI(t){const e=await EI(t),n=si().gapi;return Ge(n,t,"internal-error"),e.open({where:document.body,url:CI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=si().setTimeout(()=>{s(o)},MI.get());function l(){si().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const PI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},II=500,LI=600,NI="_blank",DI="http://localhost";class Ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(t,e,n,i=II,r=LI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PI),{width:i.toString(),height:r.toString(),top:s,left:o}),c=tn().toLowerCase();n&&(a=vx(c)?NI:n),mx(c)&&(e=e||DI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[v,y])=>`${f}${v}=${y},`,"");if(m2(c)&&a!=="_self")return OI(e||"",a),new Ov(null);const h=window.open(e||"",a,d);Ge(h,t,"popup-blocked");try{h.focus()}catch{}return new Ov(h)}function OI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const kI="__/auth/handler",FI="emulator/auth/handler",BI=encodeURIComponent("fac");async function kv(t,e,n,i,r,s){Ge(t.config.authDomain,t,"auth-domain-config-required"),Ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ao,eventId:r};if(e instanceof vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Xa){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${BI}=${encodeURIComponent(l)}`:"";return`${zI(t)}?${Wa(a).slice(1)}${c}`}function zI({config:t}){return t.emulator?hp(t,FI):`https://${t.authDomain}/${kI}`}/**
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
 */const zd="webStorageSupport";class HI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Px,this._completeRedirectFn=dI,this._overrideRedirectResult=lI}async _openPopup(e,n,i,r){var s;ki((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await kv(e,n,i,Qh(),r);return UI(e,o,_p())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await kv(e,n,i,Qh(),r);return W2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ki(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await RI(e),i=new fI(e);return n.register("authEvent",r=>(Ge(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zd,{type:zd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[zd];o!==void 0&&n(!!o),oi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_I(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ex()||gx()||mp()}}const VI=HI;var Fv="@firebase/auth",Bv="1.7.9";/**
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
 */class GI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jI(t){yo(new ss("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Ge(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mx(t)},c=new S2(i,r,s,l);return b2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),yo(new ss("auth-internal",e=>{const n=mu(e.getProvider("auth").getImmediate());return(i=>new GI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(Fv,Bv,WI(t)),yr(Fv,Bv,"esm2017")}/**
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
 */const XI=5*60,$I=Qy("authIdTokenMaxAge")||XI;let zv=null;const qI=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>$I)return;const r=n==null?void 0:n.token;zv!==r&&(zv=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function YI(t=rx()){const e=lp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A2(t,{popupRedirectResolver:VI,persistence:[Q2,H2,Px]}),i=Qy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=qI(s.toString());O2(n,o,()=>o(n.currentUser)),U2(n,a=>o(a))}}const r=Jy("auth");return r&&C2(n,`http://${r}`),n}function KI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}E2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Kn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",KI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jI("Browser");/**
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
 */const Fx="firebasestorage.googleapis.com",JI="storageBucket",ZI=2*60*1e3,QI=10*60*1e3;/**
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
 */class ui extends Bi{constructor(e,n,i=0){super(Hd(e),`Firebase Storage: ${n} (${Hd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ui.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ai;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ai||(ai={}));function Hd(t){return"storage/"+t}function eL(){const t="An unknown error occurred, please check the error payload for server response.";return new ui(ai.UNKNOWN,t)}function tL(){return new ui(ai.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nL(){return new ui(ai.CANCELED,"User canceled the upload/download.")}function iL(t){return new ui(ai.INVALID_URL,"Invalid URL '"+t+"'.")}function rL(t){return new ui(ai.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hv(t){return new ui(ai.INVALID_ARGUMENT,t)}function Bx(){return new ui(ai.APP_DELETED,"The Firebase app was deleted.")}function sL(t){return new ui(ai.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class $n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=$n.makeFromUrl(e,n)}catch{return new $n(e,"")}if(i.path==="")return i;throw rL(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",v=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),y={bucket:1,path:3},x=n===Fx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",u=new RegExp(`^https?://${x}/${r}/${p}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:v,indices:y,postModify:c},{regex:u,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<m.length;E++){const R=m[E],w=R.regex.exec(e);if(w){const T=w[R.indices.bucket];let B=w[R.indices.path];B||(B=""),i=new $n(T,B),R.postModify(i);break}}if(i==null)throw iL(e);return i}}class oL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aL(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...p){c||(c=!0,e.apply(null,p))}function h(p){r=setTimeout(()=>{r=null,t(v,l())},p)}function f(){s&&clearTimeout(s)}function v(p,...u){if(c){f();return}if(p){f(),d.call(null,p,...u);return}if(l()||o){f(),d.call(null,p,...u);return}i<64&&(i*=2);let m;a===1?(a=2,m=0):m=(i+Math.random())*1e3,h(m)}let y=!1;function x(p){y||(y=!0,f(),!c&&(r!==null?(p||(a=2),clearTimeout(r),h(0)):p||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function lL(t){t(!1)}/**
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
 */function cL(t){return t!==void 0}function Vv(t,e,n,i){if(i<e)throw Hv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Hv(`Invalid value for '${t}'. Expected ${n} or less.`)}function uL(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var jc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jc||(jc={}));/**
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
 */function dL(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class hL{constructor(e,n,i,r,s,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new zl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===jc.NO_ERROR,l=s.getStatus();if(!a||dL(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===jc.ABORT;i(!1,new zl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new zl(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=eL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Bx():nL();o(l)}else{const l=tL();o(l)}};this.canceled_?n(!1,new zl(!1,null,!0)):this.backoffId_=aL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function fL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vL(t,e,n,i,r,s,o=!0){const a=uL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return mL(c,e),fL(c,n),pL(c,s),gL(c,i),new hL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function _L(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Xc{constructor(e,n){this._service=e,n instanceof $n?this._location=n:this._location=$n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xc(e,n)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yL(this._location.path)}get storage(){return this._service}get parent(){const e=_L(this._location.path);if(e===null)return null;const n=new $n(this._location.bucket,e);return new Xc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sL(e)}}function Gv(t,e){const n=e==null?void 0:e[JI];return n==null?null:$n.makeFromBucketSpec(n,t)}function xL(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:bR(r,t.app.options.projectId))}class SL{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Fx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZI,this._maxUploadRetryTime=QI,this._requests=new Set,r!=null?this._bucket=$n.makeFromBucketSpec(r,this._host):this._bucket=Gv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=Gv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new oL(Bx());{const o=vL(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Wv="@firebase/storage",jv="0.13.2";/**
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
 */const zx="storage";function EL(t=rx(),e){t=zi(t);const i=lp(t,zx).getImmediate({identifier:e}),r=wR("storage");return r&&ML(i,...r),i}function ML(t,e,n,i={}){xL(t,e,n,i)}function TL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new SL(n,i,r,e,Ao)}function wL(){yo(new ss(zx,TL,"PUBLIC").setMultipleInstances(!0)),yr(Wv,jv,""),yr(Wv,jv,"esm2017")}wL();const AL={apiKey:"AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",authDomain:"anking-globe.firebaseapp.com",projectId:"anking-globe",storageBucket:"anking-globe.firebasestorage.app",messagingSenderId:"615376842",appId:"1:615376842:web:your_app_id"},Hx=ix(AL),xp=YI(Hx);EL(Hx);const bL=new Si,CL=async()=>{try{const t=await rI(xp,bL),e=await t.user.getIdToken();return{user:t.user,token:e}}catch(t){throw console.error("Google sign-in error:",t),t}},RL=async()=>{await F2(xp)};function Xv(t){if(!t)return"";if(typeof t=="object"){const n=[];return(t.city||t.town||t.village||t.municipality)&&n.push(t.city||t.town||t.village||t.municipality),(t.state||t.region||t.province)&&n.push(t.state||t.region||t.province),t.country&&n.push(t.country),n.join(", ")}const e=t.split(",").map(n=>n.trim());return e.length<=3?t:e.slice(-3).join(", ")}function $v({onBack:t}){const[e,n]=xe.useState("checking"),[i,r]=xe.useState(!1),[s,o]=xe.useState(null),[a,l]=xe.useState(null),[c,d]=xe.useState([]),[h,f]=xe.useState(null),[v,y]=xe.useState(!1),[x,p]=xe.useState(!1),[u,_]=xe.useState({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),[m,E]=xe.useState([]),[R,w]=xe.useState(!1),[T,B]=xe.useState([]),[M,b]=xe.useState([]),[te,$]=xe.useState([]),[me,z]=xe.useState(!1),[J,Q]=xe.useState(!1),[ie,U]=xe.useState(!1),[j,W]=xe.useState(null),ee=xe.useRef(null);xe.useEffect(()=>{const k=k2(xp,async re=>{if(re){const ge=await re.getIdToken();l(ge),o({email:re.email,username:re.displayName||re.email,picture:re.photoURL||""}),ue(ge)}else l(null),o(null),n("none")});return()=>k()},[]);const ue=async k=>{try{const ge=await(await fetch(`${an}/auth/check`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}})).json();if(ge.error){n("none");return}n(ge.status),r(ge.isAdmin||!1)}catch{n("error")}},oe=async()=>{try{const{token:k}=await CL();l(k);const ge=await(await fetch(`${an}/auth/google`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}})).json();n(ge.status),r(ge.isAdmin||!1)}catch(k){console.error("Sign in error:",k),n("error")}},O=async()=>{await RL(),l(null),o(null),n("none"),r(!1)};xe.useEffect(()=>{e==="approved"&&a&&(I(),A(),i&&se())},[e,i,a]);const N=xe.useCallback(()=>a?{Authorization:`Bearer ${a}`}:{},[a]),I=async()=>{try{const k=await fetch(`${an}/cards`);d(await k.json())}catch{}},A=async()=>{try{const k=await fetch(`${an}/images/list`);B(await k.json())}catch{}},se=async()=>{try{const re=await(await fetch(`${an}/auth/pending`,{headers:N()})).json();b(re.pending||[]),$(re.approved||[])}catch{}},pe=async k=>{console.log("approveUser called");try{await fetch(`${an}/auth/approve`,{method:"POST",headers:{"Content-Type":"application/json",...N()},body:JSON.stringify({email:k})}),console.log("Setting notification"),W({type:"success",message:`Approved ${k}`})}catch(re){console.error("Error:",re),W({type:"error",message:"Failed to approve"})}se(),setTimeout(()=>W(null),4e3)},q=async k=>{try{await fetch(`${an}/auth/deny`,{method:"POST",headers:{"Content-Type":"application/json",...N()},body:JSON.stringify({email:k})}),W({type:"success",message:`Denied ${k}`})}catch{W({type:"error",message:"Failed to deny"})}se(),setTimeout(()=>W(null),4e3)},_e=async k=>{window.confirm(`Revoke access for ${k}?`)&&(await fetch(`${an}/auth/revoke`,{method:"POST",headers:{"Content-Type":"application/json",...N()},body:JSON.stringify({email:k})}),se())},H=async k=>{if(!k||k.length<3){E([]);return}w(!0);try{const re=await fetch(`${an}/geocode?q=${encodeURIComponent(k)}`);E(await re.json())}catch{E([])}w(!1)},be=k=>{let re="";(k.type==="university"||k.class==="amenity")&&(re=k.display_name.split(",")[0].trim());const ge=k.address?Xv(k.address):Xv(k.display_name);_(Te=>({...Te,university:re||Te.university,location:ge,lat:k.lat.toFixed(6),lng:k.lng.toFixed(6)})),E([])},Z=(k,re)=>{_(ge=>({...ge,[k]:re})),(k==="university"||k==="location")&&(clearTimeout(window.geocodeTimeout),window.geocodeTimeout=setTimeout(()=>H(re),600))},de=async k=>{const re=k.target.files[0];if(re){if(!re.type.match(/^image\/(png|jpe?g|webp)$/)){alert("Please select a PNG, JPG, or WebP image.");return}if(re.size>5*1024*1024){alert("Image too large. Max 5MB.");return}p(!0);try{const ge=new FileReader;ge.onload=async()=>{const Te=ge.result,Ce=await fetch(`${an}/images/upload`,{method:"POST",headers:{"Content-Type":"application/json",...N()},body:JSON.stringify({filename:re.name,data:Te})});if(Ce.ok){const he=await Ce.json();_(Fe=>({...Fe,image:he.url||he.filename})),await A()}else{const he=await Ce.json();alert(he.error||"Upload failed")}p(!1)},ge.readAsDataURL(re)}catch{alert("Upload failed"),p(!1)}k.target.value=""}},fe=()=>{_({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),f(null),E([])},Ae=k=>{var re,ge;f(k),_({name:k.name||"",title:k.title||"",university:k.university||"",location:k.location||"",lat:((re=k.lat)==null?void 0:re.toString())||"",lng:((ge=k.lng)==null?void 0:ge.toString())||"",image:k.image||""})},V=async k=>{if(k.preventDefault(),!u.name||!u.location||!u.lat||!u.lng){alert("Please fill required fields");return}y(!0);const re={...u,lat:parseFloat(u.lat),lng:parseFloat(u.lng)};try{h?await fetch(`${an}/cards/${h.id}`,{method:"PUT",headers:{"Content-Type":"application/json",...N()},body:JSON.stringify(re)}):await fetch(`${an}/cards`,{method:"POST",headers:{"Content-Type":"application/json",...N()},body:JSON.stringify(re)}),await I(),fe()}catch{alert("Failed to save")}y(!1)},g=async k=>{if(window.confirm("Delete this member?")){y(!0);try{await fetch(`${an}/cards/${k}`,{method:"DELETE",headers:N()}),await I(),(h==null?void 0:h.id)===k&&fe()}catch{alert("Failed to delete")}y(!1)}},[S,L]=xe.useState(500),X=()=>`${window.location.origin+"/anking-globe/"}?embed=true`,Y=()=>`<iframe 
  src="${X()}" 
  width="100%" 
  height="${S}" 
  frameborder="0" 
  allow="accelerometer; gyroscope"
  style="border-radius: 12px; overflow: hidden;"
></iframe>`,ne=()=>{navigator.clipboard.writeText(Y()),U(!0),setTimeout(()=>U(!1),2e3)};return e==="checking"?P.jsx("div",{className:"admin-page",children:P.jsx("div",{className:"admin-auth",children:P.jsx("div",{className:"auth-loading",children:"Checking authentication..."})})}):e==="error"?P.jsx("div",{className:"admin-page",children:P.jsxs("div",{className:"admin-auth",children:[P.jsxs("button",{className:"back-button",onClick:t,children:[P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),P.jsxs("div",{className:"auth-card error",children:[P.jsx("div",{className:"error-icon",children:"❌"}),P.jsx("h1",{children:"Authentication Error"}),P.jsx("button",{onClick:O,children:"Try Again"})]})]})}):e==="none"?P.jsx("div",{className:"admin-page",children:P.jsxs("div",{className:"admin-auth",children:[P.jsxs("button",{className:"back-button",onClick:t,children:[P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),P.jsxs("div",{className:"auth-card",children:[P.jsx("h1",{children:"Admin Access"}),P.jsx("p",{children:"Sign in with Google to request access."}),P.jsxs("button",{className:"google-sign-in-btn",onClick:oe,children:[P.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[P.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),P.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),P.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),P.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),P.jsx("p",{className:"auth-note",children:"Admins will be notified to approve your request."})]})]})}):e==="pending"?P.jsx("div",{className:"admin-page",children:P.jsxs("div",{className:"admin-auth",children:[P.jsxs("button",{className:"back-button",onClick:t,children:[P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),P.jsxs("div",{className:"auth-card pending",children:[P.jsx("div",{className:"pending-icon",children:"⏳"}),P.jsx("h1",{children:"Access Pending"}),s&&P.jsxs("div",{className:"pending-user-info",children:[s.picture&&P.jsx("img",{src:s.picture,alt:"",className:"pending-avatar"}),P.jsx("p",{children:P.jsx("strong",{children:s.username})}),P.jsx("p",{children:s.email})]}),P.jsx("p",{children:"An admin has been notified and will review your request."}),P.jsxs("button",{className:"google-sign-in-btn",onClick:O,children:[P.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),P.jsx("polyline",{points:"16 17 21 12 16 7"}),P.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Use another account"]})]})]})}):P.jsxs("div",{className:"admin-page",children:[P.jsxs("div",{className:"admin-header",children:[P.jsxs("button",{className:"back-button",onClick:t,children:[P.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),P.jsx("h1",{children:"Member Management"}),P.jsxs("div",{className:"admin-user",children:[(s==null?void 0:s.picture)&&P.jsx("img",{src:s.picture,alt:"",className:"user-avatar"}),P.jsx("span",{children:(s==null?void 0:s.username)||(s==null?void 0:s.email)}),i&&P.jsx("span",{className:"admin-badge",children:"Admin"}),i&&P.jsxs("button",{className:`user-mgmt-btn ${me?"active":""}`,onClick:()=>{z(!me),se()},children:[P.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),P.jsx("circle",{cx:"9",cy:"7",r:"4"}),P.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),P.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Users",M.length>0&&P.jsx("span",{className:"pending-count",children:M.length})]}),P.jsxs("button",{className:"embed-btn",onClick:()=>Q(!0),children:[P.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("polyline",{points:"16 18 22 12 16 6"}),P.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"Embed"]}),P.jsx("button",{className:"logout-btn",onClick:O,children:"Sign Out"})]})]}),i&&me&&P.jsxs("div",{className:"user-management-panel",children:[P.jsxs("div",{className:"user-section",children:[P.jsxs("h3",{children:["Pending (",M.length,")"]}),M.length===0?P.jsx("p",{className:"no-users",children:"No pending requests"}):P.jsx("ul",{children:M.map(k=>P.jsxs("li",{children:[P.jsxs("div",{className:"user-info",children:[k.picture&&P.jsx("img",{src:k.picture,alt:"",className:"list-avatar"}),P.jsxs("div",{children:[P.jsx("span",{className:"user-name",children:k.username}),P.jsx("span",{className:"user-email",children:k.email})]})]}),P.jsxs("div",{className:"user-actions",children:[P.jsx("button",{className:"approve",onClick:()=>{console.log("clicked"),pe(k.email)},children:"Approve"}),P.jsx("button",{className:"deny",onClick:()=>q(k.email),children:"Deny"})]})]},k.email))})]}),P.jsxs("div",{className:"user-section",children:[P.jsxs("h3",{children:["Approved (",te.length,")"]}),P.jsx("ul",{children:te.map(k=>P.jsxs("li",{children:[P.jsxs("div",{className:"user-info",children:[k.picture&&P.jsx("img",{src:k.picture,alt:"",className:"list-avatar"}),P.jsxs("div",{children:[P.jsx("span",{className:"user-name",children:k.username||"Unknown"}),P.jsx("span",{className:"user-email",children:k.email})]})]}),P.jsx("button",{className:"revoke",onClick:()=>_e(k.email),children:"Revoke"})]},k.email))})]})]}),J&&P.jsx("div",{className:"embed-modal-overlay",onClick:()=>Q(!1),children:P.jsxs("div",{className:"embed-modal",onClick:k=>k.stopPropagation(),children:[P.jsx("button",{className:"embed-modal-close",onClick:()=>Q(!1),children:"×"}),P.jsx("h2",{children:"🔗 Embed Globe"}),P.jsxs("p",{className:"embed-description",children:["Embed the ",P.jsx("strong",{children:"live globe"})," on any website. It shows real-time data, with a toggle button to show/hide all cards."]}),P.jsxs("div",{className:"embed-setting",children:[P.jsx("label",{children:"Height:"}),P.jsxs("div",{className:"embed-height-input",children:[P.jsx("input",{type:"number",value:S,onChange:k=>L(parseInt(k.target.value)||500),min:"300",max:"1000"}),P.jsx("span",{children:"px"})]})]}),P.jsxs("div",{className:"embed-preview",children:[P.jsx("div",{className:"embed-preview-header",children:P.jsx("span",{children:"iframe Code"})}),P.jsx("pre",{children:Y()})]}),P.jsxs("div",{className:"embed-actions",children:[P.jsx("button",{className:"embed-copy-btn",onClick:ne,children:ie?"✓ Copied!":"📋 Copy Embed Code"}),P.jsx("a",{className:"embed-preview-btn",href:X(),target:"_blank",rel:"noopener noreferrer",children:"👁 Preview Embed"})]}),P.jsxs("div",{className:"embed-instructions",children:[P.jsx("h4",{children:"How to use:"}),P.jsxs("ul",{children:[P.jsxs("li",{children:[P.jsx("strong",{children:"Discourse:"})," Paste in an HTML block"]}),P.jsxs("li",{children:[P.jsx("strong",{children:"Wix:"}),' Add "Embed HTML" element']}),P.jsxs("li",{children:[P.jsx("strong",{children:"WordPress:"}),' Use "Custom HTML" block']})]}),P.jsx("p",{className:"embed-note",children:"✅ Live data - updates automatically!"})]})]})}),P.jsxs("div",{className:"admin-content",children:[P.jsxs("div",{className:"admin-form-panel",children:[P.jsx("h2",{children:h?"Edit Member":"Add New Member"}),P.jsxs("form",{onSubmit:V,children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"Name *"}),P.jsx("input",{type:"text",value:u.name,onChange:k=>Z("name",k.target.value),placeholder:"John Doe",required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"Title / Role"}),P.jsx("input",{type:"text",value:u.title,onChange:k=>Z("title",k.target.value),placeholder:"Medical Student..."})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"University (type to search)"}),P.jsx("input",{type:"text",value:u.university,onChange:k=>Z("university",k.target.value),placeholder:"e.g. Harvard Medical School"}),R&&u.university&&P.jsx("div",{className:"geocode-loading",children:"Searching..."}),m.length>0&&u.university&&P.jsx("ul",{className:"geocode-results",children:m.map((k,re)=>P.jsxs("li",{onClick:()=>be(k),children:[P.jsx("span",{className:"result-name",children:k.display_name}),P.jsxs("span",{className:"result-coords",children:[k.lat.toFixed(4),", ",k.lng.toFixed(4)]})]},re))})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"Location * (City, Region, Country)"}),P.jsx("input",{type:"text",value:u.location,onChange:k=>Z("location",k.target.value),placeholder:"Boston, MA, USA",required:!0}),R&&!u.university&&P.jsx("div",{className:"geocode-loading",children:"Searching..."}),m.length>0&&!u.university&&P.jsx("ul",{className:"geocode-results",children:m.map((k,re)=>P.jsxs("li",{onClick:()=>be(k),children:[P.jsx("span",{className:"result-name",children:k.display_name}),P.jsxs("span",{className:"result-coords",children:[k.lat.toFixed(4),", ",k.lng.toFixed(4)]})]},re))})]}),P.jsxs("div",{className:"form-row",children:[P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"Latitude *"}),P.jsx("input",{type:"number",step:"any",value:u.lat,onChange:k=>Z("lat",k.target.value),placeholder:"42.3601",required:!0})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"Longitude *"}),P.jsx("input",{type:"number",step:"any",value:u.lng,onChange:k=>Z("lng",k.target.value),placeholder:"-71.0589",required:!0})]})]}),P.jsxs("div",{className:"form-group",children:[P.jsx("label",{children:"Profile Image"}),P.jsxs("div",{className:"image-input-row",children:[P.jsxs("select",{value:u.image,onChange:k=>Z("image",k.target.value),children:[P.jsx("option",{value:"",children:"No image"}),T.map(k=>P.jsx("option",{value:k,children:k},k))]}),P.jsx("input",{type:"file",ref:ee,onChange:de,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),P.jsx("button",{type:"button",className:"upload-btn",onClick:()=>{var k;return(k=ee.current)==null?void 0:k.click()},disabled:x,children:x?"Uploading...":"📤 Upload"})]}),u.image&&P.jsx("div",{className:"image-preview",children:P.jsx("img",{src:$h(u.image),alt:"Preview"})})]}),P.jsxs("div",{className:"form-actions",children:[P.jsx("button",{type:"submit",className:"primary",disabled:v,children:v?"Saving...":h?"Update":"Add Member"}),h&&P.jsx("button",{type:"button",className:"secondary",onClick:fe,children:"Cancel"})]})]})]}),P.jsxs("div",{className:"admin-table-panel",children:[P.jsx("div",{className:"table-header",children:P.jsxs("h2",{children:["Members (",c.length,")"]})}),P.jsx("div",{className:"table-container",children:P.jsxs("table",{children:[P.jsx("thead",{children:P.jsxs("tr",{children:[P.jsx("th",{children:"Image"}),P.jsx("th",{children:"Name"}),P.jsx("th",{children:"Title"}),P.jsx("th",{children:"University"}),P.jsx("th",{children:"Location"}),P.jsx("th",{children:"Lat"}),P.jsx("th",{children:"Lng"}),P.jsx("th",{children:"Actions"})]})}),P.jsxs("tbody",{children:[c.map(k=>{var re,ge;return P.jsxs("tr",{className:(h==null?void 0:h.id)===k.id?"selected":"",onClick:()=>Ae(k),children:[P.jsx("td",{className:"img-cell",children:k.image?P.jsx("img",{src:$h(k.image),alt:k.name}):P.jsx("div",{className:"no-image",children:"?"})}),P.jsx("td",{className:"name-cell",children:k.name}),P.jsx("td",{children:k.title||"-"}),P.jsx("td",{className:"uni-cell",children:k.university||"-"}),P.jsx("td",{className:"location-cell",children:k.location}),P.jsx("td",{className:"coord-cell",children:(re=k.lat)==null?void 0:re.toFixed(2)}),P.jsx("td",{className:"coord-cell",children:(ge=k.lng)==null?void 0:ge.toFixed(2)}),P.jsxs("td",{className:"actions-cell",children:[P.jsx("button",{className:"edit-btn",onClick:Te=>{Te.stopPropagation(),Ae(k)},children:"Edit"}),P.jsx("button",{className:"delete-btn",onClick:Te=>{Te.stopPropagation(),g(k.id)},children:"Delete"})]})]},k.id)}),c.length===0&&P.jsx("tr",{children:P.jsx("td",{colSpan:"8",className:"empty-row",children:"No members yet."})})]})]})})]})]}),j&&P.jsxs("div",{className:`toast-notification ${j.type}`,children:[j.type==="success"?"✓":"ℹ"," ",j.message]})]})}function PL(){const[t,e]=xe.useState([]),[n,i]=xe.useState(!0),[r,s]=xe.useState(null),o=xe.useCallback(async()=>{try{i(!0);const a=await mR();e(a),s(null)}catch(a){console.error("Failed to load cards:",a),s(a.message)}finally{i(!1)}},[]);return xe.useEffect(()=>{o()},[o]),{cards:t,loading:n,error:r,refetch:o}}console.log("APP VERSION 2 LOADED");function IL(){const[t,e]=xe.useState("globe"),{cards:n,loading:i,error:r,refetch:s}=PL(),[o,a]=xe.useState([]),[l,c]=xe.useState(null),[d,h]=xe.useState(0),[f,v]=xe.useState(!0),[y,x]=xe.useState({}),p=new URLSearchParams(window.location.search).get("embed")==="true",[u,_]=xe.useState(!1),[m,E]=xe.useState(null),R=xe.useRef(null),w=xe.useRef(Date.now()),T=xe.useCallback(()=>{w.current=Date.now(),v(!1),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{v(!0)},5e3)},[]);xe.useEffect(()=>()=>{R.current&&clearTimeout(R.current)},[]),xe.useEffect(()=>{const ee=()=>{let ue;window.location.hash&&window.location.hash.length>1?ue=new URLSearchParams(window.location.hash.slice(1)):ue=new URLSearchParams(window.location.search);const oe=ue.get("notification"),O=ue.get("message");oe&&O&&(E({type:oe,message:decodeURIComponent(O)}),window.history.replaceState({},"","/anking-globe/"),setTimeout(()=>E(null),4e3))};return ee(),window.addEventListener("hashchange",ee),()=>window.removeEventListener("hashchange",ee)},[]);const B=xe.useCallback(ee=>{if(T(),o.includes(ee.id)){a(ue=>ue.filter(oe=>oe!==ee.id)),l===ee.id&&c(null);return}a(ue=>[...ue,ee.id]),c(ee.id)},[T,l,o]),M=xe.useCallback(ee=>{a(ue=>ue.filter(oe=>oe!==ee)),l===ee&&c(null)},[l]),b=ee=>{c(l===ee?null:ee)},te=xe.useCallback(ee=>{T(),a(ue=>ue.includes(ee)?(l===ee&&c(null),ue.filter(O=>O!==ee)):(n.find(N=>N.id===ee)&&(c(ee),h(N=>N+1)),[...ue,ee]))},[n,l,T]),$=xe.useCallback(()=>{T(),a(n.map(ee=>ee.id))},[n,T]),me=xe.useCallback(()=>{a([]),c(null)},[]),z=xe.useCallback(()=>{u?(a([]),c(null)):a(n.map(ee=>ee.id)),_(!u),T()},[u,n,T]),J=xe.useCallback(ee=>{x(ee)},[]),Q=xe.useCallback(()=>{T()},[T]),ie=xe.useCallback(()=>{c(null)},[]);if(i)return P.jsx(vR,{});if(r)return P.jsxs("div",{className:"error-screen",children:["Error: ",r]});if(t==="admin")return P.jsx($v,{onBack:()=>{e("globe"),s()}});const U=new Set(n.map(ee=>{var ue;return(ue=ee.location.split(",").pop())==null?void 0:ue.trim()})).size,j=n.filter(ee=>o.includes(ee.id)),W=l;return P.jsxs(P.Fragment,{children:[t==="admin"?P.jsx($v,{onBack:()=>{e("globe"),s()}}):P.jsxs("div",{className:`globe-container ${p?"embed-mode":""}`,children:[P.jsx(fR,{cards:n,selectedCards:o,autoRotate:f,onMarkerClick:B,onMarkerVisibilityChange:J,onInteraction:Q,focusCardId:W,onFocusLost:ie}),!p&&P.jsx(pR,{cards:n,selectedCards:o,autoRotate:f,onAutoRotateChange:v,onToggleCard:te,onOpenAll:$,onCloseAll:me,onManageClick:()=>e("admin"),isEmbedMode:p}),j.map((ee,ue)=>P.jsx(gR,{card:ee,visibilityData:y,onClose:M,onFocus:b,isFocused:l===ee.id,zIndex:1e3+ue},ee.id)),P.jsx("div",{className:`globe-logo-container ${p?"embed":""}`,children:P.jsx("img",{src:"/anking-globe/logo.png",alt:"Logo",className:"globe-logo"})}),!p&&P.jsx("div",{className:"globe-footer",children:"AnKing Step Deck Maintainers · 2025"}),P.jsxs("div",{className:"globe-stats",children:[P.jsxs("div",{className:"stat-item",children:[P.jsx("div",{className:"stat-value",children:n.length}),P.jsx("div",{className:"stat-label",children:"Active Members"})]}),P.jsxs("div",{className:"stat-item",children:[P.jsx("div",{className:"stat-value",children:U}),P.jsx("div",{className:"stat-label",children:"Countries"})]})]}),!p&&P.jsxs("div",{className:"instructions",children:[P.jsx("kbd",{children:"Drag"})," to rotate · ",P.jsx("kbd",{children:"Scroll"})," to zoom",P.jsx("br",{}),"Click markers to toggle cards"]}),p&&P.jsxs(P.Fragment,{children:[P.jsx("button",{className:"embed-toggle-btn",onClick:z,children:u?P.jsxs(P.Fragment,{children:[P.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),P.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]}):P.jsxs(P.Fragment,{children:[P.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[P.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),P.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]})}),P.jsx("div",{className:"embed-watermark",children:"AnKing Step Deck Maintainers"})]})]}),m&&P.jsxs("div",{className:`toast-notification ${m.type}`,children:[m.type==="success"?"✓":"ℹ"," ",m.message]})]})}Vd.createRoot(document.getElementById("root")).render(P.jsx(sS.StrictMode,{children:P.jsx(IL,{})}));
