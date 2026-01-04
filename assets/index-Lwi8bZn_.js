(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Hx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xv={exports:{}},Yc={},$v={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),Vx=Symbol.for("react.portal"),Gx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),jx=Symbol.for("react.profiler"),Xx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),qx=Symbol.for("react.forward_ref"),Yx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),Ep=Symbol.iterator;function Jx(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yv=Object.assign,Kv={};function xo(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||qv}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zv(){}Zv.prototype=xo.prototype;function nf(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||qv}var rf=nf.prototype=new Zv;rf.constructor=nf;Yv(rf,xo.prototype);rf.isPureReactComponent=!0;var Mp=Array.isArray,Jv=Object.prototype.hasOwnProperty,sf={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function e_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jv.call(e,i)&&!Qv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oa,type:t,key:s,ref:o,props:r,_owner:sf.current}}function Qx(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function eS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function Au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eS(""+t.key):e.toString(36)}function Gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case Vx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Au(o,0):i,Mp(r)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),Gl(r,e,n,"",function(c){return c})):r!=null&&(of(r)&&(r=Qx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Au(s,a);o+=Gl(s,e,n,l,r)}else if(l=Jx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Au(s,a++),o+=Gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function tS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Wl={transition:null},nS={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:sf};function t_(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=xo;et.Fragment=Gx;et.Profiler=jx;et.PureComponent=nf;et.StrictMode=Wx;et.Suspense=Yx;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;et.act=t_;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jv.call(e,l)&&!Qv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:o}};et.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xx,_context:t},t.Consumer=t};et.createElement=e_;et.createFactory=function(t){var e=e_.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:qx,render:t}};et.isValidElement=of;et.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:tS}};et.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};et.unstable_act=t_;et.useCallback=function(t,e){return rn.current.useCallback(t,e)};et.useContext=function(t){return rn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};et.useEffect=function(t,e){return rn.current.useEffect(t,e)};et.useId=function(){return rn.current.useId()};et.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return rn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};et.useRef=function(t){return rn.current.useRef(t)};et.useState=function(t){return rn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return rn.current.useTransition()};et.version="18.3.1";$v.exports=et;var se=$v.exports;const iS=Hx(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=se,sS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),aS=Object.prototype.hasOwnProperty,lS=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cS={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)aS.call(e,i)&&!cS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sS,type:t,key:s,ref:o,props:r,_owner:lS.current}}Yc.Fragment=oS;Yc.jsx=n_;Yc.jsxs=n_;Xv.exports=Yc;var M=Xv.exports,Vd={},i_={exports:{}},En={},r_={exports:{}},s_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Q){var q=U.length;U.push(Q);e:for(;0<q;){var pe=q-1>>>1,xe=U[pe];if(0<r(xe,Q))U[pe]=Q,U[q]=xe,q=pe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Q=U[0],q=U.pop();if(q!==Q){U[0]=q;e:for(var pe=0,xe=U.length,oe=xe>>>1;pe<oe;){var O=2*(pe+1)-1,D=U[O],P=O+1,b=U[P];if(0>r(D,q))P<xe&&0>r(b,D)?(U[pe]=b,U[P]=q,pe=P):(U[pe]=D,U[O]=q,pe=O);else if(P<xe&&0>r(b,q))U[pe]=b,U[P]=q,pe=P;else break e}}return Q}function r(U,Q){var q=U.sortIndex-Q.sortIndex;return q!==0?q:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,y=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(U){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=U)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function E(U){if(S=!1,p(U),!y)if(n(l)!==null)y=!0,J(R);else{var Q=n(c);Q!==null&&ne(E,Q.startTime-U)}}function R(U,Q){y=!1,S&&(S=!1,u(H),H=-1),g=!0;var q=f;try{for(p(Q),h=n(l);h!==null&&(!(h.expirationTime>Q)||U&&!G());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,f=h.priorityLevel;var xe=pe(h.expirationTime<=Q);Q=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&i(l),p(Q)}else i(l);h=n(l)}if(h!==null)var oe=!0;else{var O=n(c);O!==null&&ne(E,O.startTime-Q),oe=!1}return oe}finally{h=null,f=q,g=!1}}var T=!1,A=null,H=-1,w=5,C=-1;function G(){return!(t.unstable_now()-C<w)}function W(){if(A!==null){var U=t.unstable_now();C=U;var Q=!0;try{Q=A(!0,U)}finally{Q?he():(T=!1,A=null)}}else T=!1}var he;if(typeof v=="function")he=function(){v(W)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,ee=F.port2;F.port1.onmessage=W,he=function(){ee.postMessage(null)}}else he=function(){m(W,0)};function J(U){A=U,T||(T=!0,he())}function ne(U,Q){H=m(function(){U(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,J(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var Q=3;break;default:Q=f}var q=f;f=Q;try{return U()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=f;f=U;try{return Q()}finally{f=q}},t.unstable_scheduleCallback=function(U,Q,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,U){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=q+xe,U={id:d++,callback:Q,priorityLevel:U,startTime:q,expirationTime:xe,sortIndex:-1},q>pe?(U.sortIndex=q,e(c,U),n(l)===null&&U===n(c)&&(S?(u(H),H=-1):S=!0,ne(E,q-pe))):(U.sortIndex=xe,e(l,U),y||g||(y=!0,J(R))),U},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(U){var Q=f;return function(){var q=f;f=Q;try{return U.apply(this,arguments)}finally{f=q}}}})(s_);r_.exports=s_;var uS=r_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=se,Sn=uS;function Ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o_=new Set,ua={};function as(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(ua[t]=e,t=0;t<e.length;t++)o_.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,hS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},Ap={};function fS(t){return Gd.call(Ap,t)?!0:Gd.call(Tp,t)?!1:hS.test(t)?Ap[t]=!0:(Tp[t]=!0,!1)}function pS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mS(t,e,n,i){if(e===null||typeof e>"u"||pS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,lf);zt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,lf);zt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,lf);zt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mS(e,n,r,i)&&(n=null),i||r===null?fS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),a_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),c_=Symbol.for("react.offscreen"),bp=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,bu;function Wo(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function gS(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function $d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ls:return"Portal";case Wd:return"Profiler";case uf:return"StrictMode";case jd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l_:return(t.displayName||"Context")+".Consumer";case a_:return(t._context.displayName||"Context")+".Provider";case df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:$d(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return $d(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function u_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _S(t){var e=u_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=_S(t))}function d_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=u_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h_(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function Yd(t,e){h_(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kd(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ce(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ce(92));if(jo(n)){if(1<n.length)throw Error(Ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function f_(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,m_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yS=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){yS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function g_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function v_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=g_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var xS=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(xS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ce(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,Ys=null,Ks=null;function Lp(t){if(t=Ba(t)){if(typeof nh!="function")throw Error(Ce(280));var e=t.stateNode;e&&(e=eu(e),nh(t.stateNode,t.type,e))}}function __(t){Ys?Ks?Ks.push(t):Ks=[t]:Ys=t}function y_(){if(Ys){var t=Ys,e=Ks;if(Ks=Ys=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function x_(t,e){return t(e)}function S_(){}var Pu=!1;function E_(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return x_(t,e,n)}finally{Pu=!1,(Ys!==null||Ks!==null)&&(S_(),y_())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ce(231,e,typeof n));return n}var ih=!1;if(Pi)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{ih=!1}function SS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Yo=!1,cc=null,uc=!1,rh=null,ES={onError:function(t){Yo=!0,cc=t}};function MS(t,e,n,i,r,s,o,a,l){Yo=!1,cc=null,SS.apply(ES,arguments)}function wS(t,e,n,i,r,s,o,a,l){if(MS.apply(this,arguments),Yo){if(Yo){var c=cc;Yo=!1,cc=null}else throw Error(Ce(198));uc||(uc=!0,rh=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Np(t){if(ls(t)!==t)throw Error(Ce(188))}function TS(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(Ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Np(r),t;if(s===i)return Np(r),e;s=s.sibling}throw Error(Ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ce(189))}}if(n.alternate!==i)throw Error(Ce(190))}if(n.tag!==3)throw Error(Ce(188));return n.stateNode.current===n?t:e}function w_(t){return t=TS(t),t!==null?T_(t):null}function T_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T_(t);if(e!==null)return e;t=t.sibling}return null}var A_=Sn.unstable_scheduleCallback,Dp=Sn.unstable_cancelCallback,AS=Sn.unstable_shouldYield,bS=Sn.unstable_requestPaint,Et=Sn.unstable_now,CS=Sn.unstable_getCurrentPriorityLevel,pf=Sn.unstable_ImmediatePriority,b_=Sn.unstable_UserBlockingPriority,dc=Sn.unstable_NormalPriority,RS=Sn.unstable_LowPriority,C_=Sn.unstable_IdlePriority,Kc=null,ni=null;function PS(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:NS,IS=Math.log,LS=Math.LN2;function NS(t){return t>>>=0,t===0?32:31-(IS(t)/LS|0)|0}var tl=64,nl=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Xo(a):(s&=o,s!==0&&(i=Xo(s)))}else o=n&~r,o!==0?i=Xo(o):s!==0&&(i=Xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function DS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function US(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=DS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R_(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function OS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function P_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I_,gf,L_,N_,D_,oh=!1,il=[],or=null,ar=null,lr=null,fa=new Map,pa=new Map,Zi=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function FS(t,e,n,i,r){switch(e){case"focusin":return or=Lo(or,t,e,n,i,r),!0;case"dragenter":return ar=Lo(ar,t,e,n,i,r),!0;case"mouseover":return lr=Lo(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Lo(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Lo(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function U_(t){var e=Hr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=M_(n),e!==null){t.blockedOn=e,D_(t.priority,function(){L_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);th=i,n.target.dispatchEvent(i),th=null}else return e=Ba(n),e!==null&&gf(e),t.blockedOn=n,!1;e.shift()}return!0}function Op(t,e,n){jl(t)&&n.delete(e)}function BS(){oh=!1,or!==null&&jl(or)&&(or=null),ar!==null&&jl(ar)&&(ar=null),lr!==null&&jl(lr)&&(lr=null),fa.forEach(Op),pa.forEach(Op)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,BS)))}function ma(t){function e(r){return No(r,t)}if(0<il.length){No(il[0],t);for(var n=1;n<il.length;n++){var i=il[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&No(or,t),ar!==null&&No(ar,t),lr!==null&&No(lr,t),fa.forEach(e),pa.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)U_(n),n.blockedOn===null&&Zi.shift()}var Zs=Fi.ReactCurrentBatchConfig,fc=!0;function zS(t,e,n,i){var r=st,s=Zs.transition;Zs.transition=null;try{st=1,vf(t,e,n,i)}finally{st=r,Zs.transition=s}}function HS(t,e,n,i){var r=st,s=Zs.transition;Zs.transition=null;try{st=4,vf(t,e,n,i)}finally{st=r,Zs.transition=s}}function vf(t,e,n,i){if(fc){var r=ah(t,e,n,i);if(r===null)Hu(t,e,i,pc,n),Up(t,i);else if(FS(r,t,e,n,i))i.stopPropagation();else if(Up(t,i),e&4&&-1<kS.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&I_(s),s=ah(t,e,n,i),s===null&&Hu(t,e,i,pc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hu(t,e,i,null,n)}}var pc=null;function ah(t,e,n,i){if(pc=null,t=ff(i),t=Hr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function O_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CS()){case pf:return 1;case b_:return 4;case dc:case RS:return 16;case C_:return 536870912;default:return 16}default:return 16}}var nr=null,_f=null,Xl=null;function k_(){if(Xl)return Xl;var t,e=_f,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xl=r.slice(t,1<i?1-i:void 0)}function $l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function kp(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:kp,this.isPropagationStopped=kp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=Mn(So),Fa=vt({},So,{view:0,detail:0}),VS=Mn(Fa),Lu,Nu,Do,Zc=vt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Lu=t.screenX-Do.screenX,Nu=t.screenY-Do.screenY):Nu=Lu=0,Do=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Fp=Mn(Zc),GS=vt({},Zc,{dataTransfer:0}),WS=Mn(GS),jS=vt({},Fa,{relatedTarget:0}),Du=Mn(jS),XS=vt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=Mn(XS),qS=vt({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YS=Mn(qS),KS=vt({},So,{data:0}),Bp=Mn(KS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QS[t])?!!e[t]:!1}function xf(){return eE}var tE=vt({},Fa,{key:function(t){if(t.key){var e=ZS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nE=Mn(tE),iE=vt({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Mn(iE),rE=vt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),sE=Mn(rE),oE=vt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),aE=Mn(oE),lE=vt({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cE=Mn(lE),uE=[9,13,27,32],Sf=Pi&&"CompositionEvent"in window,Ko=null;Pi&&"documentMode"in document&&(Ko=document.documentMode);var dE=Pi&&"TextEvent"in window&&!Ko,F_=Pi&&(!Sf||Ko&&8<Ko&&11>=Ko),Hp=" ",Vp=!1;function B_(t,e){switch(t){case"keyup":return uE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function hE(t,e){switch(t){case"compositionend":return z_(e);case"keypress":return e.which!==32?null:(Vp=!0,Hp);case"textInput":return t=e.data,t===Hp&&Vp?null:t;default:return null}}function fE(t,e){if(Ds)return t==="compositionend"||!Sf&&B_(t,e)?(t=k_(),Xl=_f=nr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F_&&e.locale!=="ko"?null:e.data;default:return null}}var pE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pE[t.type]:e==="textarea"}function H_(t,e,n,i){__(i),e=mc(e,"onChange"),0<e.length&&(n=new yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zo=null,ga=null;function mE(t){J_(t,0)}function Jc(t){var e=ks(t);if(d_(e))return t}function gE(t,e){if(t==="change")return e}var V_=!1;if(Pi){var Uu;if(Pi){var Ou="oninput"in document;if(!Ou){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Ou=typeof Wp.oninput=="function"}Uu=Ou}else Uu=!1;V_=Uu&&(!document.documentMode||9<document.documentMode)}function jp(){Zo&&(Zo.detachEvent("onpropertychange",G_),ga=Zo=null)}function G_(t){if(t.propertyName==="value"&&Jc(ga)){var e=[];H_(e,ga,t,ff(t)),E_(mE,e)}}function vE(t,e,n){t==="focusin"?(jp(),Zo=e,ga=n,Zo.attachEvent("onpropertychange",G_)):t==="focusout"&&jp()}function _E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(ga)}function yE(t,e){if(t==="click")return Jc(e)}function xE(t,e){if(t==="input"||t==="change")return Jc(e)}function SE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:SE;function va(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gd.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=Xp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xp(n)}}function W_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j_(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EE(t){var e=j_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W_(n.ownerDocument.documentElement,n)){if(i!==null&&Ef(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var o=$p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ME=Pi&&"documentMode"in document&&11>=document.documentMode,Us=null,lh=null,Jo=null,ch=!1;function qp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Us==null||Us!==lc(i)||(i=Us,"selectionStart"in i&&Ef(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jo&&va(Jo,i)||(Jo=i,i=mc(lh,"onSelect"),0<i.length&&(e=new yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},ku={},X_={};Pi&&(X_=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Qc(t){if(ku[t])return ku[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X_)return ku[t]=e[n];return t}var $_=Qc("animationend"),q_=Qc("animationiteration"),Y_=Qc("animationstart"),K_=Qc("transitionend"),Z_=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Z_.set(t,e),as(e,[t])}for(var Fu=0;Fu<Yp.length;Fu++){var Bu=Yp[Fu],wE=Bu.toLowerCase(),TE=Bu[0].toUpperCase()+Bu.slice(1);Mr(wE,"on"+TE)}Mr($_,"onAnimationEnd");Mr(q_,"onAnimationIteration");Mr(Y_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(K_,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AE=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wS(i,e,void 0,t),t.currentTarget=null}function J_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kp(r,a,c),s=l}}}if(uc)throw t=rh,uc=!1,rh=null,t}function ct(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var i=t+"__bubble";n.has(i)||(Q_(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),Q_(n,t,i,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[ol]){t[ol]=!0,o_.forEach(function(n){n!=="selectionchange"&&(AE.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,zu("selectionchange",!1,e))}}function Q_(t,e,n,i){switch(O_(e)){case 1:var r=zS;break;case 4:r=HS;break;default:r=vf}n=r.bind(null,e,n,t),r=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}E_(function(){var c=s,d=ff(n),h=[];e:{var f=Z_.get(t);if(f!==void 0){var g=yf,y=t;switch(t){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":g=nE;break;case"focusin":y="focus",g=Du;break;case"focusout":y="blur",g=Du;break;case"beforeblur":case"afterblur":g=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=sE;break;case $_:case q_:case Y_:g=$S;break;case K_:g=aE;break;case"scroll":g=VS;break;case"wheel":g=cE;break;case"copy":case"cut":case"paste":g=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zp}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?f!==null?f+"Capture":null:f;S=[];for(var v=c,p;v!==null;){p=v;var E=p.stateNode;if(p.tag===5&&E!==null&&(p=E,u!==null&&(E=ha(v,u),E!=null&&S.push(ya(v,E,p)))),m)break;v=v.return}0<S.length&&(f=new g(f,y,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==th&&(y=n.relatedTarget||n.fromElement)&&(Hr(y)||y[Ii]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Hr(y):null,y!==null&&(m=ls(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(S=Fp,E="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=zp,E="onPointerLeave",u="onPointerEnter",v="pointer"),m=g==null?f:ks(g),p=y==null?f:ks(y),f=new S(E,v+"leave",g,n,d),f.target=m,f.relatedTarget=p,E=null,Hr(d)===c&&(S=new S(u,v+"enter",y,n,d),S.target=p,S.relatedTarget=m,E=S),m=E,g&&y)t:{for(S=g,u=y,v=0,p=S;p;p=ds(p))v++;for(p=0,E=u;E;E=ds(E))p++;for(;0<v-p;)S=ds(S),v--;for(;0<p-v;)u=ds(u),p--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=ds(S),u=ds(u)}S=null}else S=null;g!==null&&Zp(h,f,g,S,!1),y!==null&&m!==null&&Zp(h,m,y,S,!0)}}e:{if(f=c?ks(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var R=gE;else if(Gp(f))if(V_)R=xE;else{R=_E;var T=vE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=yE);if(R&&(R=R(t,c))){H_(h,R,n,d);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Kd(f,"number",f.value)}switch(T=c?ks(c):window,t){case"focusin":(Gp(T)||T.contentEditable==="true")&&(Us=T,lh=c,Jo=null);break;case"focusout":Jo=lh=Us=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,qp(h,n,d);break;case"selectionchange":if(ME)break;case"keydown":case"keyup":qp(h,n,d)}var A;if(Sf)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Ds?B_(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(F_&&n.locale!=="ko"&&(Ds||H!=="onCompositionStart"?H==="onCompositionEnd"&&Ds&&(A=k_()):(nr=d,_f="value"in nr?nr.value:nr.textContent,Ds=!0)),T=mc(c,H),0<T.length&&(H=new Bp(H,t,null,n,d),h.push({event:H,listeners:T}),A?H.data=A:(A=z_(n),A!==null&&(H.data=A)))),(A=dE?hE(t,n):fE(t,n))&&(c=mc(c,"onBeforeInput"),0<c.length&&(d=new Bp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}J_(h,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(n,s),l!=null&&o.unshift(ya(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bE=/\r\n?/g,CE=/\u0000|\uFFFD/g;function Jp(t){return(typeof t=="string"?t:""+t).replace(bE,`
`).replace(CE,"")}function al(t,e,n){if(e=Jp(e),Jp(t)!==e&&n)throw Error(Ce(425))}function gc(){}var uh=null,dh=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(t){return Qp.resolve(null).then(t).catch(IE)}:fh;function IE(t){setTimeout(function(){throw t})}function Vu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),ti="__reactFiber$"+Eo,xa="__reactProps$"+Eo,Ii="__reactContainer$"+Eo,ph="__reactEvents$"+Eo,LE="__reactListeners$"+Eo,NE="__reactHandles$"+Eo;function Hr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=em(t);t!==null;){if(n=t[ti])return n;t=em(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[ti]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ce(33))}function eu(t){return t[xa]||null}var mh=[],Fs=-1;function wr(t){return{current:t}}function dt(t){0>Fs||(t.current=mh[Fs],mh[Fs]=null,Fs--)}function lt(t,e){Fs++,mh[Fs]=t.current,t.current=e}var Sr={},Yt=wr(Sr),un=wr(!1),Zr=Sr;function ao(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function vc(){dt(un),dt(Yt)}function tm(t,e,n){if(Yt.current!==Sr)throw Error(Ce(168));lt(Yt,e),lt(un,n)}function e0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ce(108,vS(t)||"Unknown",r));return vt({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Zr=Yt.current,lt(Yt,t),lt(un,un.current),!0}function nm(t,e,n){var i=t.stateNode;if(!i)throw Error(Ce(169));n?(t=e0(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,dt(un),dt(Yt),lt(Yt,t)):dt(un),lt(un,n)}var xi=null,tu=!1,Gu=!1;function t0(t){xi===null?xi=[t]:xi.push(t)}function DE(t){tu=!0,t0(t)}function Tr(){if(!Gu&&xi!==null){Gu=!0;var t=0,e=st;try{var n=xi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,tu=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),A_(pf,Tr),r}finally{st=e,Gu=!1}}return null}var Bs=[],zs=0,yc=null,xc=0,bn=[],Cn=0,Jr=null,Ei=1,Mi="";function Ur(t,e){Bs[zs++]=xc,Bs[zs++]=yc,yc=t,xc=e}function n0(t,e,n){bn[Cn++]=Ei,bn[Cn++]=Mi,bn[Cn++]=Jr,Jr=t;var i=Ei;t=Mi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-qn(e)+r|n<<r|i,Mi=s+t}else Ei=1<<s|n<<r|i,Mi=t}function Mf(t){t.return!==null&&(Ur(t,1),n0(t,1,0))}function wf(t){for(;t===yc;)yc=Bs[--zs],Bs[zs]=null,xc=Bs[--zs],Bs[zs]=null;for(;t===Jr;)Jr=bn[--Cn],bn[Cn]=null,Mi=bn[--Cn],bn[Cn]=null,Ei=bn[--Cn],bn[Cn]=null}var xn=null,yn=null,ht=!1,Gn=null;function i0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,yn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Ei,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,yn=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(ht){var e=yn;if(e){var n=e;if(!im(t,e)){if(gh(t))throw Error(Ce(418));e=cr(n.nextSibling);var i=xn;e&&im(t,e)?i0(i,n):(t.flags=t.flags&-4097|2,ht=!1,xn=t)}}else{if(gh(t))throw Error(Ce(418));t.flags=t.flags&-4097|2,ht=!1,xn=t}}}function rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ll(t){if(t!==xn)return!1;if(!ht)return rm(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=yn)){if(gh(t))throw r0(),Error(Ce(418));for(;e;)i0(t,e),e=cr(e.nextSibling)}if(rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=xn?cr(t.stateNode.nextSibling):null;return!0}function r0(){for(var t=yn;t;)t=cr(t.nextSibling)}function lo(){yn=xn=null,ht=!1}function Tf(t){Gn===null?Gn=[t]:Gn.push(t)}var UE=Fi.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ce(309));var i=n.stateNode}if(!i)throw Error(Ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ce(284));if(!n._owner)throw Error(Ce(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(Ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sm(t){var e=t._init;return e(t._payload)}function s0(t){function e(u,v){if(t){var p=u.deletions;p===null?(u.deletions=[v],u.flags|=16):p.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=fr(u,v),u.index=0,u.sibling=null,u}function s(u,v,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<v?(u.flags|=2,v):p):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,p,E){return v===null||v.tag!==6?(v=Ku(p,u.mode,E),v.return=u,v):(v=r(v,p),v.return=u,v)}function l(u,v,p,E){var R=p.type;return R===Ns?d(u,v,p.props.children,E,p.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&sm(R)===v.type)?(E=r(v,p.props),E.ref=Uo(u,v,p),E.return=u,E):(E=ec(p.type,p.key,p.props,null,u.mode,E),E.ref=Uo(u,v,p),E.return=u,E)}function c(u,v,p,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=Zu(p,u.mode,E),v.return=u,v):(v=r(v,p.children||[]),v.return=u,v)}function d(u,v,p,E,R){return v===null||v.tag!==7?(v=Xr(p,u.mode,E,R),v.return=u,v):(v=r(v,p),v.return=u,v)}function h(u,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ku(""+v,u.mode,p),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:return p=ec(v.type,v.key,v.props,null,u.mode,p),p.ref=Uo(u,null,v),p.return=u,p;case Ls:return v=Zu(v,u.mode,p),v.return=u,v;case qi:var E=v._init;return h(u,E(v._payload),p)}if(jo(v)||Po(v))return v=Xr(v,u.mode,p,null),v.return=u,v;cl(u,v)}return null}function f(u,v,p,E){var R=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return R!==null?null:a(u,v,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ja:return p.key===R?l(u,v,p,E):null;case Ls:return p.key===R?c(u,v,p,E):null;case qi:return R=p._init,f(u,v,R(p._payload),E)}if(jo(p)||Po(p))return R!==null?null:d(u,v,p,E,null);cl(u,p)}return null}function g(u,v,p,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(p)||null,a(v,u,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:return u=u.get(E.key===null?p:E.key)||null,l(v,u,E,R);case Ls:return u=u.get(E.key===null?p:E.key)||null,c(v,u,E,R);case qi:var T=E._init;return g(u,v,p,T(E._payload),R)}if(jo(E)||Po(E))return u=u.get(p)||null,d(v,u,E,R,null);cl(v,E)}return null}function y(u,v,p,E){for(var R=null,T=null,A=v,H=v=0,w=null;A!==null&&H<p.length;H++){A.index>H?(w=A,A=null):w=A.sibling;var C=f(u,A,p[H],E);if(C===null){A===null&&(A=w);break}t&&A&&C.alternate===null&&e(u,A),v=s(C,v,H),T===null?R=C:T.sibling=C,T=C,A=w}if(H===p.length)return n(u,A),ht&&Ur(u,H),R;if(A===null){for(;H<p.length;H++)A=h(u,p[H],E),A!==null&&(v=s(A,v,H),T===null?R=A:T.sibling=A,T=A);return ht&&Ur(u,H),R}for(A=i(u,A);H<p.length;H++)w=g(A,u,H,p[H],E),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?H:w.key),v=s(w,v,H),T===null?R=w:T.sibling=w,T=w);return t&&A.forEach(function(G){return e(u,G)}),ht&&Ur(u,H),R}function S(u,v,p,E){var R=Po(p);if(typeof R!="function")throw Error(Ce(150));if(p=R.call(p),p==null)throw Error(Ce(151));for(var T=R=null,A=v,H=v=0,w=null,C=p.next();A!==null&&!C.done;H++,C=p.next()){A.index>H?(w=A,A=null):w=A.sibling;var G=f(u,A,C.value,E);if(G===null){A===null&&(A=w);break}t&&A&&G.alternate===null&&e(u,A),v=s(G,v,H),T===null?R=G:T.sibling=G,T=G,A=w}if(C.done)return n(u,A),ht&&Ur(u,H),R;if(A===null){for(;!C.done;H++,C=p.next())C=h(u,C.value,E),C!==null&&(v=s(C,v,H),T===null?R=C:T.sibling=C,T=C);return ht&&Ur(u,H),R}for(A=i(u,A);!C.done;H++,C=p.next())C=g(A,u,H,C.value,E),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?H:C.key),v=s(C,v,H),T===null?R=C:T.sibling=C,T=C);return t&&A.forEach(function(W){return e(u,W)}),ht&&Ur(u,H),R}function m(u,v,p,E){if(typeof p=="object"&&p!==null&&p.type===Ns&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ja:e:{for(var R=p.key,T=v;T!==null;){if(T.key===R){if(R=p.type,R===Ns){if(T.tag===7){n(u,T.sibling),v=r(T,p.props.children),v.return=u,u=v;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&sm(R)===T.type){n(u,T.sibling),v=r(T,p.props),v.ref=Uo(u,T,p),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}p.type===Ns?(v=Xr(p.props.children,u.mode,E,p.key),v.return=u,u=v):(E=ec(p.type,p.key,p.props,null,u.mode,E),E.ref=Uo(u,v,p),E.return=u,u=E)}return o(u);case Ls:e:{for(T=p.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(u,v.sibling),v=r(v,p.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Zu(p,u.mode,E),v.return=u,u=v}return o(u);case qi:return T=p._init,m(u,v,T(p._payload),E)}if(jo(p))return y(u,v,p,E);if(Po(p))return S(u,v,p,E);cl(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,p),v.return=u,u=v):(n(u,v),v=Ku(p,u.mode,E),v.return=u,u=v),o(u)):n(u,v)}return m}var co=s0(!0),o0=s0(!1),Sc=wr(null),Ec=null,Hs=null,Af=null;function bf(){Af=Hs=Ec=null}function Cf(t){var e=Sc.current;dt(Sc),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Ec=t,Af=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Af!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Ec===null)throw Error(Ce(308));Hs=t,Ec.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Vr=null;function Rf(t){Vr===null?Vr=[t]:Vr.push(t)}function a0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}function om(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,S=a;switch(f=e,g=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=vt({},h,f);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=h}}function am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ce(191,r));r.call(i)}}}var za={},ii=wr(za),Sa=wr(za),Ea=wr(za);function Gr(t){if(t===za)throw Error(Ce(174));return t}function If(t,e){switch(lt(Ea,e),lt(Sa,t),lt(ii,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jd(e,t)}dt(ii),lt(ii,e)}function uo(){dt(ii),dt(Sa),dt(Ea)}function c0(t){Gr(Ea.current);var e=Gr(ii.current),n=Jd(e,t.type);e!==n&&(lt(Sa,t),lt(ii,n))}function Lf(t){Sa.current===t&&(dt(ii),dt(Sa))}var pt=wr(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wu=[];function Nf(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var Yl=Fi.ReactCurrentDispatcher,ju=Fi.ReactCurrentBatchConfig,Qr=0,gt=null,bt=null,Nt=null,Tc=!1,Qo=!1,Ma=0,OE=0;function Vt(){throw Error(Ce(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Uf(t,e,n,i,r,s){if(Qr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?zE:HE,t=n(i,r),Qo){s=0;do{if(Qo=!1,Ma=0,25<=s)throw Error(Ce(301));s+=1,Nt=bt=null,e.updateQueue=null,Yl.current=VE,t=n(i,r)}while(Qo)}if(Yl.current=Ac,e=bt!==null&&bt.next!==null,Qr=0,Nt=bt=gt=null,Tc=!1,e)throw Error(Ce(300));return t}function Of(){var t=Ma!==0;return Ma=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function On(){if(bt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Nt===null?gt.memoizedState:Nt.next;if(e!==null)Nt=e,bt=t;else{if(t===null)throw Error(Ce(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function wa(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=On(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Qr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,gt.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $u(t){var e=On(),n=e.queue;if(n===null)throw Error(Ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function u0(){}function d0(t,e){var n=gt,i=On(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,kf(p0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ta(9,f0.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(Ce(349));Qr&30||h0(n,e,r)}return r}function h0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f0(t,e,n,i){e.value=n,e.getSnapshot=i,m0(e)&&g0(t)}function p0(t,e,n){return n(function(){m0(e)&&g0(t)})}function m0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function g0(t){var e=Li(t,1);e!==null&&Yn(e,t,1,-1)}function lm(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=BE.bind(null,gt,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function v0(){return On().memoizedState}function Kl(t,e,n,i){var r=Qn();gt.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=Ta(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function cm(t,e){return Kl(8390656,8,t,e)}function kf(t,e){return nu(2048,8,t,e)}function _0(t,e){return nu(4,2,t,e)}function y0(t,e){return nu(4,4,t,e)}function x0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S0(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,x0.bind(null,e,t),n)}function Ff(){}function E0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function w0(t,e,n){return Qr&21?(Zn(n,e)||(n=R_(),gt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function kE(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=ju.transition;ju.transition={};try{t(!1),e()}finally{st=n,ju.transition=i}}function T0(){return On().memoizedState}function FE(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A0(t))b0(e,n);else if(n=a0(t,e,n,i),n!==null){var r=en();Yn(n,t,i,r),C0(n,e,i)}}function BE(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A0(t))b0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a0(t,e,r,i),n!==null&&(r=en(),Yn(n,t,i,r),C0(n,e,i))}}function A0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function b0(t,e){Qo=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mf(t,n)}}var Ac={readContext:Un,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},zE={readContext:Un,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4194308,4,x0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=FE.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:lm,useDebugValue:Ff,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=lm(!1),e=t[0];return t=kE.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Qn();if(ht){if(n===void 0)throw Error(Ce(407));n=n()}else{if(n=e(),Ot===null)throw Error(Ce(349));Qr&30||h0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cm(p0.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,f0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Ot.identifierPrefix;if(ht){var n=Mi,i=Ei;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HE={readContext:Un,useCallback:E0,useContext:Un,useEffect:kf,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:M0,useReducer:Xu,useRef:v0,useState:function(){return Xu(wa)},useDebugValue:Ff,useDeferredValue:function(t){var e=On();return w0(e,bt.memoizedState,t)},useTransition:function(){var t=Xu(wa)[0],e=On().memoizedState;return[t,e]},useMutableSource:u0,useSyncExternalStore:d0,useId:T0,unstable_isNewReconciler:!1},VE={readContext:Un,useCallback:E0,useContext:Un,useEffect:kf,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:M0,useReducer:$u,useRef:v0,useState:function(){return $u(wa)},useDebugValue:Ff,useDeferredValue:function(t){var e=On();return bt===null?e.memoizedState=t:w0(e,bt.memoizedState,t)},useTransition:function(){var t=$u(wa)[0],e=On().memoizedState;return[t,e]},useMutableSource:u0,useSyncExternalStore:d0,useId:T0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=hr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Yn(e,t,r,i),ql(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=hr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Yn(e,t,r,i),ql(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=hr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(Yn(e,t,i,n),ql(e,t,i))}};function um(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function R0(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=dn(e)?Zr:Yt.current,i=e.contextTypes,s=(i=i!=null)?ao(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function xh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=dn(e)?Zr:Yt.current,r.context=ao(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e){try{var n="",i=e;do n+=gS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function P0(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,Ih=i),Sh(t,e)},n}function I0(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iM.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var WE=Fi.ReactCurrentOwner,cn=!1;function Jt(t,e,n,i){e.child=t===null?o0(e,null,n,i):co(e,t.child,n,i)}function mm(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=Uf(t,e,n,i,s,r),n=Of(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ht&&n&&Mf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function gm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L0(t,e,s,i,r)):(t=ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function L0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Eh(t,e,n,i,r)}function N0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Gs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Gs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Gs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Gs,_n),_n|=i;return Jt(t,e,r,n),e.child}function D0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eh(t,e,n,i,r){var s=dn(n)?Zr:Yt.current;return s=ao(e,s),Js(e,r),n=Uf(t,e,n,i,s,r),i=Of(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ht&&i&&Mf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function vm(t,e,n,i,r){if(dn(n)){var s=!0;_c(e)}else s=!1;if(Js(e,r),e.stateNode===null)Zl(t,e),R0(e,n,i),xh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=dn(n)?Zr:Yt.current,c=ao(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&dm(e,o,i,c),Yi=!1;var f=e.memoizedState;o.state=f,Mc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||un.current||Yi?(typeof d=="function"&&(yh(e,n,d,i),l=e.memoizedState),(a=Yi||um(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=dn(n)?Zr:Yt.current,l=ao(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&dm(e,o,i,l),Yi=!1,f=e.memoizedState,o.state=f,Mc(e,i,o,r);var y=e.memoizedState;a!==h||f!==y||un.current||Yi?(typeof g=="function"&&(yh(e,n,g,i),y=e.memoizedState),(c=Yi||um(e,n,c,i,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Mh(t,e,n,i,s,r)}function Mh(t,e,n,i,r,s){D0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&nm(e,n,!1),Ni(t,e,s);i=e.stateNode,WE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=co(e,t.child,null,s),e.child=co(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&nm(e,n,!0),e.child}function U0(t){var e=t.stateNode;e.pendingContext?tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tm(t,e.context,!1),If(t,e.containerInfo)}function _m(t,e,n,i,r){return lo(),Tf(r),e.flags|=256,Jt(t,e,n,i),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function O0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(pt,r&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Th(n),e.memoizedState=wh,t):Bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bf(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,i){return i!==null&&Tf(i),co(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=qu(Error(Ce(422))),ul(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&co(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=wh,s);if(!(e.mode&1))return ul(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ce(419)),i=qu(s,i,void 0),ul(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),Yn(i,t,r,-1))}return jf(),i=qu(Error(Ce(421))),ul(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=cr(r.nextSibling),xn=e,ht=!0,Gn=null,t!==null&&(bn[Cn++]=Ei,bn[Cn++]=Mi,bn[Cn++]=Jr,Ei=t.id,Mi=t.overflow,Jr=e),e=Bf(e,i.children),e.flags|=4096,e)}function ym(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_h(t.return,e,n)}function Yu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function k0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,n,e);else if(t.tag===19)ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ce(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XE(t,e,n){switch(e.tag){case 3:U0(e),lo();break;case 5:c0(e);break;case 1:dn(e.type)&&_c(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?O0(t,e,n):(lt(pt,pt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);lt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return k0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,N0(t,e,n)}return Ni(t,e,n)}var F0,Ah,B0,z0;F0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};B0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(ii.current);var s=null;switch(n){case"input":r=qd(t,r),i=qd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Zd(t,r),i=Zd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gc)}Qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};z0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $E(t,e,n){var i=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return dn(e.type)&&vc(),Gt(e),null;case 3:return i=e.stateNode,uo(),dt(un),dt(Yt),Nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Dh(Gn),Gn=null))),Ah(t,e),Gt(e),null;case 5:Lf(e);var r=Gr(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)B0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ce(166));return Gt(e),null}if(t=Gr(ii.current),ll(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[xa]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)ct($o[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Cp(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Pp(i,s),ct("invalid",i)}Qd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&al(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&al(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Qa(i),Rp(i,s,!0);break;case"textarea":Qa(i),Ip(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[xa]=i,F0(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)ct($o[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Cp(t,i),r=qd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Pp(t,i),r=Zd(t,i),ct("invalid",t);break;default:r=i}Qd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&m_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&cf(t,s,l,o))}switch(n){case"input":Qa(t),Rp(t,i,!1);break;case"textarea":Qa(t),Ip(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ce(166));if(n=Gr(Ea.current),Gr(ii.current),ll(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:al(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Gt(e),null;case 13:if(dt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&yn!==null&&e.mode&1&&!(e.flags&128))r0(),lo(),e.flags|=98560,s=!1;else if(s=ll(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ce(317));s[ti]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Gn!==null&&(Dh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):jf())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return uo(),Ah(t,e),t===null&&_a(e.stateNode.containerInfo),Gt(e),null;case 10:return Cf(e.type._context),Gt(e),null;case 17:return dn(e.type)&&vc(),Gt(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wc(t),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>fo&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Gt(e),null}else 2*Et()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=pt.current,lt(pt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(Ce(156,e.tag))}function qE(t,e){switch(wf(e),e.tag){case 1:return dn(e.type)&&vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),dt(un),dt(Yt),Nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(dt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ce(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(pt),null;case 4:return uo(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var dl=!1,Xt=!1,YE=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function bh(t,e,n){try{n()}catch(i){xt(t,e,i)}}var xm=!1;function KE(t,e){if(uh=fc,t=j_(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},fc=!1,Be=e;Be!==null;)if(e=Be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Be=t;else for(;Be!==null;){e=Be;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,m=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Hn(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ce(163))}}catch(E){xt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Be=t;break}Be=e.return}return y=xm,xm=!1,y}function ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bh(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[xa],delete e[ph],delete e[LE],delete e[NE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V0(t){return t.tag===5||t.tag===3||t.tag===4}function Sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var kt=null,Vn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)G0(t,e,n),n=n.sibling}function G0(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:Xt||Vs(n,e);case 6:var i=kt,r=Vn;kt=null,Hi(t,e,n),kt=i,Vn=r,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?Vu(t.parentNode,n):t.nodeType===1&&Vu(t,n),ma(t)):Vu(kt,n.stateNode));break;case 4:i=kt,r=Vn,kt=n.stateNode.containerInfo,Vn=!0,Hi(t,e,n),kt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Xt&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Hi(t,e,n),Xt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YE),e.forEach(function(i){var r=sM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Vn=!1;break e;case 3:kt=a.stateNode.containerInfo,Vn=!0;break e;case 4:kt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(kt===null)throw Error(Ce(160));G0(s,o,r),kt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W0(e,t),e=e.sibling}function W0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Jn(t),i&4){try{ea(3,t,t.return),ru(3,t)}catch(S){xt(t,t.return,S)}try{ea(5,t,t.return)}catch(S){xt(t,t.return,S)}}break;case 1:kn(e,t),Jn(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(kn(e,t),Jn(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(S){xt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&h_(r,s),eh(a,o);var c=eh(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?v_(r,h):d==="dangerouslySetInnerHTML"?m_(r,h):d==="children"?da(r,h):cf(r,d,h,c)}switch(a){case"input":Yd(r,s);break;case"textarea":f_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(S){xt(t,t.return,S)}}break;case 6:if(kn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(Ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){xt(t,t.return,S)}}break;case 3:if(kn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(S){xt(t,t.return,S)}break;case 4:kn(e,t),Jn(t);break;case 13:kn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vf=Et())),i&4&&Em(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||d,kn(e,t),Xt=c):kn(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Be=t,d=t.child;d!==null;){for(h=Be=d;Be!==null;){switch(f=Be,g=f.child,f.tag){case 0:case 11:case 14:case 15:ea(4,f,f.return);break;case 1:Vs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(S){xt(i,n,S)}}break;case 5:Vs(f,f.return);break;case 22:if(f.memoizedState!==null){wm(h);continue}}g!==null?(g.return=f,Be=g):wm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=g_("display",o))}catch(S){xt(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){xt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Jn(t),i&4&&Em(t);break;case 21:break;default:kn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V0(n)){var i=n;break e}n=n.return}throw Error(Ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=Sm(t);Ph(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sm(t);Rh(t,a,o);break;default:throw Error(Ce(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZE(t,e,n){Be=t,j0(t)}function j0(t,e,n){for(var i=(t.mode&1)!==0;Be!==null;){var r=Be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=dl;var c=Xt;if(dl=o,(Xt=l)&&!c)for(Be=r;Be!==null;)o=Be,l=o.child,o.tag===22&&o.memoizedState!==null?Tm(r):l!==null?(l.return=o,Be=l):Tm(r);for(;s!==null;)Be=s,j0(s),s=s.sibling;Be=r,dl=a,Xt=c}Mm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Be=s):Mm(t)}}function Mm(t){for(;Be!==null;){var e=Be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&am(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}am(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ce(163))}Xt||e.flags&512&&Ch(e)}catch(f){xt(e,e.return,f)}}if(e===t){Be=null;break}if(n=e.sibling,n!==null){n.return=e.return,Be=n;break}Be=e.return}}function wm(t){for(;Be!==null;){var e=Be;if(e===t){Be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Be=n;break}Be=e.return}}function Tm(t){for(;Be!==null;){var e=Be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Be=a;break}Be=e.return}}var JE=Math.ceil,bc=Fi.ReactCurrentDispatcher,zf=Fi.ReactCurrentOwner,Dn=Fi.ReactCurrentBatchConfig,rt=0,Ot=null,Tt=null,Bt=0,_n=0,Gs=wr(0),Ct=0,Aa=null,es=0,su=0,Hf=0,ta=null,an=null,Vf=0,fo=1/0,yi=null,Cc=!1,Ih=null,dr=null,hl=!1,ir=null,Rc=0,na=0,Lh=null,Jl=-1,Ql=0;function en(){return rt&6?Et():Jl!==-1?Jl:Jl=Et()}function hr(t){return t.mode&1?rt&2&&Bt!==0?Bt&-Bt:UE.transition!==null?(Ql===0&&(Ql=R_()),Ql):(t=st,t!==0||(t=window.event,t=t===void 0?16:O_(t.type)),t):1}function Yn(t,e,n,i){if(50<na)throw na=0,Lh=null,Error(Ce(185));ka(t,n,i),(!(rt&2)||t!==Ot)&&(t===Ot&&(!(rt&2)&&(su|=n),Ct===4&&Ji(t,Bt)),hn(t,i),n===1&&rt===0&&!(e.mode&1)&&(fo=Et()+500,tu&&Tr()))}function hn(t,e){var n=t.callbackNode;US(t,e);var i=hc(t,t===Ot?Bt:0);if(i===0)n!==null&&Dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dp(n),e===1)t.tag===0?DE(Am.bind(null,t)):t0(Am.bind(null,t)),PE(function(){!(rt&6)&&Tr()}),n=null;else{switch(P_(i)){case 1:n=pf;break;case 4:n=b_;break;case 16:n=dc;break;case 536870912:n=C_;break;default:n=dc}n=Q0(n,X0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X0(t,e){if(Jl=-1,Ql=0,rt&6)throw Error(Ce(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=hc(t,t===Ot?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pc(t,i);else{e=i;var r=rt;rt|=2;var s=q0();(Ot!==t||Bt!==e)&&(yi=null,fo=Et()+500,jr(t,e));do try{tM();break}catch(a){$0(t,a)}while(!0);bf(),bc.current=s,rt=r,Tt!==null?e=0:(Ot=null,Bt=0,e=Ct)}if(e!==0){if(e===2&&(r=sh(t),r!==0&&(i=r,e=Nh(t,r))),e===1)throw n=Aa,jr(t,0),Ji(t,i),hn(t,Et()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!QE(r)&&(e=Pc(t,i),e===2&&(s=sh(t),s!==0&&(i=s,e=Nh(t,s))),e===1))throw n=Aa,jr(t,0),Ji(t,i),hn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ce(345));case 2:Or(t,an,yi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Vf+500-Et(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fh(Or.bind(null,t,an,yi),e);break}Or(t,an,yi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*JE(i/1960))-i,10<i){t.timeoutHandle=fh(Or.bind(null,t,an,yi),i);break}Or(t,an,yi);break;case 5:Or(t,an,yi);break;default:throw Error(Ce(329))}}}return hn(t,Et()),t.callbackNode===n?X0.bind(null,t):null}function Nh(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Pc(t,e),t!==2&&(e=an,an=n,e!==null&&Dh(e)),t}function Dh(t){an===null?an=t:an.push.apply(an,t)}function QE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Hf,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Am(t){if(rt&6)throw Error(Ce(327));Qs();var e=hc(t,0);if(!(e&1))return hn(t,Et()),null;var n=Pc(t,e);if(t.tag!==0&&n===2){var i=sh(t);i!==0&&(e=i,n=Nh(t,i))}if(n===1)throw n=Aa,jr(t,0),Ji(t,e),hn(t,Et()),n;if(n===6)throw Error(Ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,an,yi),hn(t,Et()),null}function Gf(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(fo=Et()+500,tu&&Tr())}}function ts(t){ir!==null&&ir.tag===0&&!(rt&6)&&Qs();var e=rt;rt|=1;var n=Dn.transition,i=st;try{if(Dn.transition=null,st=1,t)return t()}finally{st=i,Dn.transition=n,rt=e,!(rt&6)&&Tr()}}function Wf(){_n=Gs.current,dt(Gs)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vc();break;case 3:uo(),dt(un),dt(Yt),Nf();break;case 5:Lf(i);break;case 4:uo();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:Cf(i.type._context);break;case 22:case 23:Wf()}n=n.return}if(Ot=t,Tt=t=fr(t.current,null),Bt=_n=e,Ct=0,Aa=null,Hf=su=es=0,an=ta=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function $0(t,e){do{var n=Tt;try{if(bf(),Yl.current=Ac,Tc){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tc=!1}if(Qr=0,Nt=bt=gt=null,Qo=!1,Ma=0,zf.current=null,n===null||n.return===null){Ct=1,Aa=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=fm(o);if(g!==null){g.flags&=-257,pm(g,o,a,s,e),g.mode&1&&hm(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var S=new Set;S.add(l),e.updateQueue=S}else y.add(l);break e}else{if(!(e&1)){hm(s,c,e),jf();break e}l=Error(Ce(426))}}else if(ht&&a.mode&1){var m=fm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),pm(m,o,a,s,e),Tf(ho(l,a));break e}}s=l=ho(l,a),Ct!==4&&(Ct=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=P0(s,l,e);om(s,u);break e;case 1:a=l;var v=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dr===null||!dr.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=I0(s,a,e);om(s,E);break e}}s=s.return}while(s!==null)}K0(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function q0(){var t=bc.current;return bc.current=Ac,t===null?Ac:t}function jf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ot===null||!(es&268435455)&&!(su&268435455)||Ji(Ot,Bt)}function Pc(t,e){var n=rt;rt|=2;var i=q0();(Ot!==t||Bt!==e)&&(yi=null,jr(t,e));do try{eM();break}catch(r){$0(t,r)}while(!0);if(bf(),rt=n,bc.current=i,Tt!==null)throw Error(Ce(261));return Ot=null,Bt=0,Ct}function eM(){for(;Tt!==null;)Y0(Tt)}function tM(){for(;Tt!==null&&!AS();)Y0(Tt)}function Y0(t){var e=J0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?K0(t):Tt=e,zf.current=null}function K0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qE(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=$E(n,e,_n),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Or(t,e,n){var i=st,r=Dn.transition;try{Dn.transition=null,st=1,nM(t,e,n,i)}finally{Dn.transition=r,st=i}return null}function nM(t,e,n,i){do Qs();while(ir!==null);if(rt&6)throw Error(Ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OS(t,s),t===Ot&&(Tt=Ot=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Q0(dc,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=st;st=1;var a=rt;rt|=4,zf.current=null,KE(t,n),W0(n,t),EE(dh),fc=!!uh,dh=uh=null,t.current=n,ZE(n),bS(),rt=a,st=o,Dn.transition=s}else t.current=n;if(hl&&(hl=!1,ir=t,Rc=r),s=t.pendingLanes,s===0&&(dr=null),PS(n.stateNode),hn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=Ih,Ih=null,t;return Rc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Lh?na++:(na=0,Lh=t):na=0,Tr(),null}function Qs(){if(ir!==null){var t=P_(Rc),e=Dn.transition,n=st;try{if(Dn.transition=null,st=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Rc=0,rt&6)throw Error(Ce(331));var r=rt;for(rt|=4,Be=t.current;Be!==null;){var s=Be,o=s.child;if(Be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Be=c;Be!==null;){var d=Be;switch(d.tag){case 0:case 11:case 15:ea(8,d,s)}var h=d.child;if(h!==null)h.return=d,Be=h;else for(;Be!==null;){d=Be;var f=d.sibling,g=d.return;if(H0(d),d===c){Be=null;break}if(f!==null){f.return=g,Be=f;break}Be=g}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Be=o;else e:for(;Be!==null;){if(s=Be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Be=u;break e}Be=s.return}}var v=t.current;for(Be=v;Be!==null;){o=Be;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,Be=p;else e:for(o=v;Be!==null;){if(a=Be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){Be=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Be=E;break e}Be=a.return}}if(rt=r,Tr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Kc,t)}catch{}i=!0}return i}finally{st=n,Dn.transition=e}}return!1}function bm(t,e,n){e=ho(n,e),e=P0(t,e,1),t=ur(t,e,1),e=en(),t!==null&&(ka(t,1,e),hn(t,e))}function xt(t,e,n){if(t.tag===3)bm(t,t,n);else for(;e!==null;){if(e.tag===3){bm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=ho(n,t),t=I0(e,t,1),e=ur(e,t,1),t=en(),e!==null&&(ka(e,1,t),hn(e,t));break}}e=e.return}}function iM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Bt&n)===n&&(Ct===4||Ct===3&&(Bt&130023424)===Bt&&500>Et()-Vf?jr(t,0):Hf|=n),hn(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=en();t=Li(t,e),t!==null&&(ka(t,e,n),hn(t,n))}function rM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function sM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ce(314))}i!==null&&i.delete(e),Z0(t,n)}var J0;J0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,XE(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ht&&e.flags&1048576&&n0(e,xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zl(t,e),t=e.pendingProps;var r=ao(e,Yt.current);Js(e,n),r=Uf(null,e,i,t,r,n);var s=Of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,xh(e,i,t,n),e=Mh(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Mf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aM(i),t=Hn(i,t),r){case 0:e=Eh(null,e,i,t,n);break e;case 1:e=vm(null,e,i,t,n);break e;case 11:e=mm(null,e,i,t,n);break e;case 14:e=gm(null,e,i,Hn(i.type,t),n);break e}throw Error(Ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Eh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),vm(t,e,i,r,n);case 3:e:{if(U0(e),t===null)throw Error(Ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,l0(t,e),Mc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ho(Error(Ce(423)),e),e=_m(t,e,i,n,r);break e}else if(i!==r){r=ho(Error(Ce(424)),e),e=_m(t,e,i,n,r);break e}else for(yn=cr(e.stateNode.containerInfo.firstChild),xn=e,ht=!0,Gn=null,n=o0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),i===r){e=Ni(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return c0(e),t===null&&vh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hh(i,r)?o=null:s!==null&&hh(i,s)&&(e.flags|=32),D0(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return O0(t,e,n);case 4:return If(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=co(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),mm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Sc,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!un.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_h(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=Un(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),gm(t,e,i,r,n);case 15:return L0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Zl(t,e),e.tag=1,dn(i)?(t=!0,_c(e)):t=!1,Js(e,n),R0(e,i,r),xh(e,i,r,n),Mh(null,e,i,!0,t,n);case 19:return k0(t,e,n);case 22:return N0(t,e,n)}throw Error(Ce(156,e.tag))};function Q0(t,e){return A_(t,e)}function oM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new oM(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aM(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===df)return 11;if(t===hf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Xr(n.children,r,s,e);case uf:o=8,r|=8;break;case Wd:return t=Nn(12,n,e,r|2),t.elementType=Wd,t.lanes=s,t;case jd:return t=Nn(13,n,e,r),t.elementType=jd,t.lanes=s,t;case Xd:return t=Nn(19,n,e,r),t.elementType=Xd,t.lanes=s,t;case c_:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a_:o=10;break e;case l_:o=9;break e;case df:o=11;break e;case hf:o=14;break e;case qi:o=16,i=null;break e}throw Error(Ce(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=c_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,i,r,s,o,a,l){return t=new lM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function cM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ey(t){if(!t)return Sr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(Ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ce(171))}if(t.tag===1){var n=t.type;if(dn(n))return e0(t,n,e)}return e}function ty(t,e,n,i,r,s,o,a,l){return t=$f(n,i,!0,t,r,s,o,a,l),t.context=ey(null),n=t.current,i=en(),r=hr(n),s=Ri(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,ka(t,r,i),hn(t,i),t}function au(t,e,n,i){var r=e.current,s=en(),o=hr(r);return n=ey(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,o),t!==null&&(Yn(t,r,o,s),ql(t,r,o)),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function uM(){return null}var ny=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}lu.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ce(409));au(t,e,null,null)};lu.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){au(null,t,null,null)}),e[Ii]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=N_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&U_(t)}};function Kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function dM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ic(o);s.call(c)}}var o=ty(e,i,t,0,null,!1,!1,"",Rm);return t._reactRootContainer=o,t[Ii]=o.current,_a(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ic(l);a.call(c)}}var l=$f(t,0,!1,null,null,!1,!1,"",Rm);return t._reactRootContainer=l,t[Ii]=l.current,_a(t.nodeType===8?t.parentNode:t),ts(function(){au(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ic(o);a.call(l)}}au(e,o,t,r)}else o=dM(n,e,t,r,i);return Ic(o)}I_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(mf(e,n|1),hn(e,Et()),!(rt&6)&&(fo=Et()+500,Tr()))}break;case 13:ts(function(){var i=Li(t,1);if(i!==null){var r=en();Yn(i,t,1,r)}}),qf(t,1)}};gf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=en();Yn(e,t,134217728,n)}qf(t,134217728)}};L_=function(t){if(t.tag===13){var e=hr(t),n=Li(t,e);if(n!==null){var i=en();Yn(n,t,e,i)}qf(t,e)}};N_=function(){return st};D_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};nh=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(Ce(90));d_(i),Yd(i,r)}}}break;case"textarea":f_(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};x_=Gf;S_=ts;var hM={usingClientEntryPoint:!1,Events:[Ba,ks,eu,__,y_,Gf]},ko={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fM={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w_(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||uM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Kc=fl.inject(fM),ni=fl}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hM;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(e))throw Error(Ce(200));return cM(t,e,null,n)};En.createRoot=function(t,e){if(!Kf(t))throw Error(Ce(299));var n=!1,i="",r=ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,_a(t.nodeType===8?t.parentNode:t),new Yf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ce(188)):(t=Object.keys(t).join(","),Error(Ce(268,t)));return t=w_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return ts(t)};En.hydrate=function(t,e,n){if(!cu(e))throw Error(Ce(200));return uu(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Kf(t))throw Error(Ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ny;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ty(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};En.render=function(t,e,n){if(!cu(e))throw Error(Ce(200));return uu(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!cu(t))throw Error(Ce(40));return t._reactRootContainer?(ts(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};En.unstable_batchedUpdates=Gf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(Ce(200));if(t==null||t._reactInternals===void 0)throw Error(Ce(38));return uu(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(t){console.error(t)}}iy(),i_.exports=En;var pM=i_.exports,Pm=pM;Vd.createRoot=Pm.createRoot,Vd.hydrateRoot=Pm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="160",hs={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mM=0,Im=1,gM=2,ry=1,vM=2,_i=3,Er=0,$t=1,In=2,pr=0,eo=1,ia=2,Lm=3,Nm=4,_M=5,Br=100,yM=101,xM=102,Dm=103,Um=104,SM=200,EM=201,MM=202,wM=203,Uh=204,Oh=205,TM=206,AM=207,bM=208,CM=209,RM=210,PM=211,IM=212,LM=213,NM=214,DM=0,UM=1,OM=2,Lc=3,kM=4,FM=5,BM=6,zM=7,sy=0,HM=1,VM=2,mr=0,GM=1,WM=2,jM=3,XM=4,$M=5,qM=6,oy=300,po=301,mo=302,kh=303,Fh=304,du=306,Bh=1e3,jn=1001,zh=1002,Qt=1003,Om=1004,Ju=1005,Rn=1006,YM=1007,ba=1008,gr=1009,KM=1010,ZM=1011,Jf=1012,ay=1013,rr=1014,sr=1015,Ca=1016,ly=1017,cy=1018,$r=1020,JM=1021,Xn=1023,QM=1024,ew=1025,qr=1026,go=1027,tw=1028,uy=1029,nw=1030,dy=1031,hy=1033,Qu=33776,ed=33777,td=33778,nd=33779,km=35840,Fm=35841,Bm=35842,zm=35843,fy=36196,Hm=37492,Vm=37496,Gm=37808,Wm=37809,jm=37810,Xm=37811,$m=37812,qm=37813,Ym=37814,Km=37815,Zm=37816,Jm=37817,Qm=37818,eg=37819,tg=37820,ng=37821,id=36492,ig=36494,rg=36495,iw=36283,sg=36284,og=36285,ag=36286,py=3e3,Yr=3001,rw=3200,sw=3201,my=0,ow=1,Ln="",Dt="srgb",Di="srgb-linear",Qf="display-p3",hu="display-p3-linear",Nc="linear",ut="srgb",Dc="rec709",Uc="p3",ps=7680,lg=519,aw=512,lw=513,cw=514,gy=515,uw=516,dw=517,hw=518,fw=519,cg=35044,ug="300 es",Hh=1035,wi=2e3,Oc=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,Vh=180/Math.PI;function Mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ft(t,e,n){return Math.max(e,Math.min(n,t))}function pw(t,e){return(t%e+e)%e}function rd(t,e,n){return(1-n)*t+n*e}function dg(t){return(t&t-1)===0&&t!==0}function Gh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const mw={DEG2RAD:tc};class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],y=i[8],S=r[0],m=r[3],u=r[6],v=r[1],p=r[4],E=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*S+a*v+l*R,s[3]=o*m+a*p+l*T,s[6]=o*u+a*E+l*A,s[1]=c*S+d*v+h*R,s[4]=c*m+d*p+h*T,s[7]=c*u+d*E+h*A,s[2]=f*S+g*v+y*R,s[5]=f*m+g*p+y*T,s[8]=f*u+g*E+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,y=n*h+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*c-d*i)*S,e[2]=(a*i-r*o)*S,e[3]=f*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(sd.makeScale(e,n)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,n){return this.premultiply(sd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new qe;function vy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gw(){const t=kc("canvas");return t.style.display="block",t}const hg={};function ra(t){t in hg||(hg[t]=!0,console.warn(t))}const fg=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pg=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pl={[Di]:{transfer:Nc,primaries:Dc,toReference:t=>t,fromReference:t=>t},[Dt]:{transfer:ut,primaries:Dc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hu]:{transfer:Nc,primaries:Uc,toReference:t=>t.applyMatrix3(pg),fromReference:t=>t.applyMatrix3(fg)},[Qf]:{transfer:ut,primaries:Uc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pg),fromReference:t=>t.applyMatrix3(fg).convertLinearToSRGB()}},vw=new Set([Di,hu]),ot={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=pl[e].toReference,r=pl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return pl[t].primaries},getTransfer:function(t){return t===Ln?Nc:pl[t].transfer}};function to(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function od(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class _y{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=kc("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=to(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(to(n[i]/255)*255):n[i]=to(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class yy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Mo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ad(r[o].image)):s.push(ad(r[o]))}else s=ad(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ad(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_y.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yw=0;class fn extends cs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=jn,r=jn,s=Rn,o=ba,a=Xn,l=gr,c=fn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Mo(),this.name="",this.source=new yy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Yr?Dt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Yr:py}set encoding(e){ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?Dt:Ln}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=oy;fn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],y=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,E=(g+1)/2,R=(u+1)/2,T=(d+f)/4,A=(h+S)/4,H=(y+m)/4;return p>E&&p>R?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=T/i,s=A/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=H/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=H/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-S)/v,this.z=(f-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xw extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yr?Dt:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends xw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xy extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sw extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],y=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=y,e[n+3]=S;return}if(h!==S||l!==f||c!==g||d!==y){let m=1-a;const u=l*f+c*g+d*y+h*S,v=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const R=Math.sqrt(p),T=Math.atan2(R,u*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const E=a*v;if(l=l*m+f*E,c=c*m+g*E,d=d*m+y*E,h=h*m+S*E,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+d*h+l*g-c*f,e[n+1]=l*y+d*f+c*h-a*g,e[n+2]=c*y+d*g+a*f-l*h,e[n+3]=d*y-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h-f*g*y;break;case"YXZ":this._x=f*d*h+c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h+f*g*y;break;case"ZXY":this._x=f*d*h-c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h-f*g*y;break;case"ZYX":this._x=f*d*h-c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h+f*g*y;break;case"YZX":this._x=f*d*h+c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h-f*g*y;break;case"XZY":this._x=f*d*h-c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new X,mg=new is;class Ha{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),gl.subVectors(this.max,Bo),gs.subVectors(e.a,Bo),vs.subVectors(e.b,Bo),_s.subVectors(e.c,Bo),Vi.subVectors(vs,gs),Gi.subVectors(_s,vs),Pr.subVectors(gs,_s);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-Pr.z,Pr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,Pr.z,0,-Pr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-Pr.y,Pr.x,0];return!cd(n,gs,vs,_s,gl)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,gs,vs,_s,gl))?!1:(vl.crossVectors(Vi,Gi),n=[vl.x,vl.y,vl.z],cd(n,gs,vs,_s,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new X,new X,new X,new X,new X,new X,new X,new X],Fn=new X,ml=new Ha,gs=new X,vs=new X,_s=new X,Vi=new X,Gi=new X,Pr=new X,Bo=new X,gl=new X,vl=new X,Ir=new X;function cd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),d=i.dot(Ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ew=new Ha,zo=new X,ud=new X;class ep{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ew.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(ud)),this.expandByPoint(zo.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new X,dd=new X,_l=new X,Wi=new X,hd=new X,yl=new X,fd=new X;class Sy{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dd.copy(e).add(n).multiplyScalar(.5),_l.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(dd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(_l),a=Wi.dot(this.direction),l=-Wi.dot(_l),c=Wi.lengthSq(),d=Math.abs(1-o*o);let h,f,g,y;if(d>0)if(h=o*l-a,f=o*a-l,y=s*d,h>=0)if(f>=-y)if(f<=y){const S=1/d;h*=S,f*=S,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-y?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=y?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(dd).addScaledVector(_l,f),g}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){hd.subVectors(n,e),yl.subVectors(i,e),fd.crossVectors(hd,yl);let o=this.direction.dot(fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(yl.crossVectors(Wi,yl));if(l<0)return null;const c=a*this.direction.dot(hd.cross(Wi));if(c<0||l+c>o)return null;const d=-a*Wi.dot(fd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,y,S,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,y,S,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,y,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=y,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,y=a*d,S=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+y*c,n[5]=f-S*c,n[9]=-a*l,n[2]=S-f*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,y=c*d,S=c*h;n[0]=f+S*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-y,n[6]=S+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,y=c*d,S=c*h;n[0]=f-S*a,n[4]=-o*h,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*d,n[9]=S-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,y=a*d,S=a*h;n[0]=l*d,n[4]=y*c-g,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,y=a*l,S=a*c;n[0]=l*d,n[4]=S-f*h,n[8]=y*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+y,n[10]=f-S*h}else if(e.order==="XZY"){const f=o*l,g=o*c,y=a*l,S=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+S,n[5]=o*d,n[9]=g*h-y,n[2]=y*h-g,n[6]=a*d,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,ww)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ji.crossVectors(i,gn),ji.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ji.crossVectors(i,gn)),ji.normalize(),xl.crossVectors(gn,ji),r[0]=ji.x,r[4]=xl.x,r[8]=gn.x,r[1]=ji.y,r[5]=xl.y,r[9]=gn.y,r[2]=ji.z,r[6]=xl.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],y=i[2],S=i[6],m=i[10],u=i[14],v=i[3],p=i[7],E=i[11],R=i[15],T=r[0],A=r[4],H=r[8],w=r[12],C=r[1],G=r[5],W=r[9],he=r[13],F=r[2],ee=r[6],J=r[10],ne=r[14],U=r[3],Q=r[7],q=r[11],pe=r[15];return s[0]=o*T+a*C+l*F+c*U,s[4]=o*A+a*G+l*ee+c*Q,s[8]=o*H+a*W+l*J+c*q,s[12]=o*w+a*he+l*ne+c*pe,s[1]=d*T+h*C+f*F+g*U,s[5]=d*A+h*G+f*ee+g*Q,s[9]=d*H+h*W+f*J+g*q,s[13]=d*w+h*he+f*ne+g*pe,s[2]=y*T+S*C+m*F+u*U,s[6]=y*A+S*G+m*ee+u*Q,s[10]=y*H+S*W+m*J+u*q,s[14]=y*w+S*he+m*ne+u*pe,s[3]=v*T+p*C+E*F+R*U,s[7]=v*A+p*G+E*ee+R*Q,s[11]=v*H+p*W+E*J+R*q,s[15]=v*w+p*he+E*ne+R*pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],y=e[3],S=e[7],m=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+S*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+m*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],y=e[12],S=e[13],m=e[14],u=e[15],v=h*m*c-S*f*c+S*l*g-a*m*g-h*l*u+a*f*u,p=y*f*c-d*m*c-y*l*g+o*m*g+d*l*u-o*f*u,E=d*S*c-y*h*c+y*a*g-o*S*g-d*a*u+o*h*u,R=y*h*l-d*S*l-y*a*f+o*S*f+d*a*m-o*h*m,T=n*v+i*p+r*E+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(S*f*s-h*m*s-S*r*g+i*m*g+h*r*u-i*f*u)*A,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*A,e[4]=p*A,e[5]=(d*m*s-y*f*s+y*r*g-n*m*g-d*r*u+n*f*u)*A,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*A,e[8]=E*A,e[9]=(y*h*s-d*S*s-y*i*g+n*S*g+d*i*u-n*h*u)*A,e[10]=(o*S*s-y*a*s+y*i*c-n*S*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*A,e[12]=R*A,e[13]=(d*S*r-y*h*r+y*i*f-n*S*f-d*i*m+n*h*m)*A,e[14]=(y*a*r-o*S*r-y*i*l+n*S*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,y=s*h,S=o*d,m=o*h,u=a*h,v=l*c,p=l*d,E=l*h,R=i.x,T=i.y,A=i.z;return r[0]=(1-(S+u))*R,r[1]=(g+E)*R,r[2]=(y-p)*R,r[3]=0,r[4]=(g-E)*T,r[5]=(1-(f+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(y+p)*A,r[9]=(m-v)*A,r[10]=(1-(f+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,y;if(a===wi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Oc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let y,S;if(a===wi)y=(o+s)*h,S=-2*h;else if(a===Oc)y=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new X,Bn=new At,Mw=new X(0,0,0),ww=new X(1,1,1),ji=new X,xl=new X,gn=new X,gg=new At,vg=new is;class fu{constructor(e=0,n=0,i=0,r=fu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fu.DEFAULT_ORDER="XYZ";class Ey{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tw=0;const _g=new X,xs=new is,pi=new At,Sl=new X,Ho=new X,Aw=new X,bw=new is,yg=new X(1,0,0),xg=new X(0,1,0),Sg=new X(0,0,1),Cw={type:"added"},Rw={type:"removed"};class qt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new X,n=new fu,i=new is,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new qe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,n){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ho,Sl,this.up):pi.lookAt(Sl,Ho,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(pi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Rw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,Aw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new X(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new X,mi=new X,pd=new X,gi=new X,Ss=new X,Es=new X,Eg=new X,md=new X,gd=new X,vd=new X;let El=!1;class Wn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),mi.subVectors(i,n),pd.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(mi),l=zn.dot(pd),c=mi.dot(mi),d=mi.dot(pd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,y=(o*d-a*l)*f;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,s,o,a,l){return El===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),El=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),mi.subVectors(e,n),zn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return El===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),El=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Es.subVectors(s,i),md.subVectors(e,i);const l=Ss.dot(md),c=Es.dot(md);if(l<=0&&c<=0)return n.copy(i);gd.subVectors(e,r);const d=Ss.dot(gd),h=Es.dot(gd);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ss,o);vd.subVectors(e,s);const g=Ss.dot(vd),y=Es.dot(vd);if(y>=0&&g<=y)return n.copy(s);const S=g*c-l*y;if(S<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Es,a);const m=d*y-g*h;if(m<=0&&h-d>=0&&g-y>=0)return Eg.subVectors(s,r),a=(h-d)/(h-d+(g-y)),n.copy(r).addScaledVector(Eg,a);const u=1/(m+S+f);return o=S*u,a=f*u,n.copy(i).addScaledVector(Ss,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const My={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function _d(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=pw(e,1),n=Ft(n,0,1),i=Ft(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_d(o,s,e+1/3),this.g=_d(o,s,e),this.b=_d(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dt){const i=My[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=od(e.r),this.g=od(e.g),this.b=od(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ot.fromWorkingColorSpace(jt.copy(this),e),Math.round(Ft(jt.r*255,0,255))*65536+Math.round(Ft(jt.g*255,0,255))*256+Math.round(Ft(jt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Dt){ot.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Dt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Ml);const i=rd(Xi.h,Ml.h,n),r=rd(Xi.s,Ml.s,n),s=rd(Xi.l,Ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new nt;nt.NAMES=My;let Pw=0;class Va extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=eo,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Oh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sa extends Va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new X,wl=new Ae;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cg&&(e.usage=this.usage),e}}class wy extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ty extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tn extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Iw=0;const An=new At,yd=new qt,Ms=new X,vn=new Ha,Vo=new Ha,Lt=new X;class li extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vy(e)?Ty:wy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(vn.min,Vo.min),vn.expandByPoint(Lt),Lt.addVectors(vn.max,Vo.max),vn.expandByPoint(Lt)):(vn.expandByPoint(Vo.min),vn.expandByPoint(Vo.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Lt.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),Lt.add(Ms)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let C=0;C<a;C++)c[C]=new X,d[C]=new X;const h=new X,f=new X,g=new X,y=new Ae,S=new Ae,m=new Ae,u=new X,v=new X;function p(C,G,W){h.fromArray(r,C*3),f.fromArray(r,G*3),g.fromArray(r,W*3),y.fromArray(o,C*2),S.fromArray(o,G*2),m.fromArray(o,W*2),f.sub(h),g.sub(h),S.sub(y),m.sub(y);const he=1/(S.x*m.y-m.x*S.y);isFinite(he)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(g,-S.y).multiplyScalar(he),v.copy(g).multiplyScalar(S.x).addScaledVector(f,-m.x).multiplyScalar(he),c[C].add(u),c[G].add(u),c[W].add(u),d[C].add(v),d[G].add(v),d[W].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let C=0,G=E.length;C<G;++C){const W=E[C],he=W.start,F=W.count;for(let ee=he,J=he+F;ee<J;ee+=3)p(i[ee+0],i[ee+1],i[ee+2])}const R=new X,T=new X,A=new X,H=new X;function w(C){A.fromArray(s,C*3),H.copy(A);const G=c[C];R.copy(G),R.sub(A.multiplyScalar(A.dot(G))).normalize(),T.crossVectors(H,G);const he=T.dot(d[C])<0?-1:1;l[C*4]=R.x,l[C*4+1]=R.y,l[C*4+2]=R.z,l[C*4+3]=he}for(let C=0,G=E.length;C<G;++C){const W=E[C],he=W.start,F=W.count;for(let ee=he,J=he+F;ee<J;ee+=3)w(i[ee+0]),w(i[ee+1]),w(i[ee+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,d=new X,h=new X;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,y=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*d;for(let u=0;u<d;u++)f[y++]=c[g++]}return new ri(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new At,Lr=new Sy,Tl=new ep,wg=new X,ws=new X,Ts=new X,As=new X,xd=new X,Al=new X,bl=new Ae,Cl=new Ae,Rl=new Ae,Tg=new X,Ag=new X,bg=new X,Pl=new X,Il=new X;class ln extends qt{constructor(e=new li,n=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(xd.fromBufferAttribute(h,e),o?Al.addScaledVector(xd,d):Al.addScaledVector(xd.sub(n),d))}n.add(Al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Tl,wg)===null||Lr.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Mg.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Mg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,S=f.length;y<S;y++){const m=f[y],u=o[m.materialIndex],v=Math.max(m.start,g.start),p=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let E=v,R=p;E<R;E+=3){const T=a.getX(E),A=a.getX(E+1),H=a.getX(E+2);r=Ll(this,u,e,i,c,d,h,T,A,H),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let m=y,u=S;m<u;m+=3){const v=a.getX(m),p=a.getX(m+1),E=a.getX(m+2);r=Ll(this,o,e,i,c,d,h,v,p,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,S=f.length;y<S;y++){const m=f[y],u=o[m.materialIndex],v=Math.max(m.start,g.start),p=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=v,R=p;E<R;E+=3){const T=E,A=E+1,H=E+2;r=Ll(this,u,e,i,c,d,h,T,A,H),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=y,u=S;m<u;m+=3){const v=m,p=m+1,E=m+2;r=Ll(this,o,e,i,c,d,h,v,p,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Lw(t,e,n,i,r,s,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Er,a),l===null)return null;Il.copy(a),Il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:t}}function Ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ws),t.getVertexPosition(l,Ts),t.getVertexPosition(c,As);const d=Lw(t,e,n,i,ws,Ts,As,Pl);if(d){r&&(bl.fromBufferAttribute(r,a),Cl.fromBufferAttribute(r,l),Rl.fromBufferAttribute(r,c),d.uv=Wn.getInterpolation(Pl,ws,Ts,As,bl,Cl,Rl,new Ae)),s&&(bl.fromBufferAttribute(s,a),Cl.fromBufferAttribute(s,l),Rl.fromBufferAttribute(s,c),d.uv1=Wn.getInterpolation(Pl,ws,Ts,As,bl,Cl,Rl,new Ae),d.uv2=d.uv1),o&&(Tg.fromBufferAttribute(o,a),Ag.fromBufferAttribute(o,l),bg.fromBufferAttribute(o,c),d.normal=Wn.getInterpolation(Pl,ws,Ts,As,Tg,Ag,bg,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};Wn.getNormal(ws,Ts,As,h.normal),d.face=h}return d}class Ga extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2));function y(S,m,u,v,p,E,R,T,A,H,w){const C=E/A,G=R/H,W=E/2,he=R/2,F=T/2,ee=A+1,J=H+1;let ne=0,U=0;const Q=new X;for(let q=0;q<J;q++){const pe=q*G-he;for(let xe=0;xe<ee;xe++){const oe=xe*C-W;Q[S]=oe*v,Q[m]=pe*p,Q[u]=F,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[m]=0,Q[u]=T>0?1:-1,d.push(Q.x,Q.y,Q.z),h.push(xe/A),h.push(1-q/H),ne+=1}}for(let q=0;q<H;q++)for(let pe=0;pe<A;pe++){const xe=f+pe+ee*q,oe=f+pe+ee*(q+1),O=f+(pe+1)+ee*(q+1),D=f+(pe+1)+ee*q;l.push(xe,oe,D),l.push(oe,O,D),U+=6}a.addGroup(g,U,w),g+=U,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=vo(t[n]);for(const r in i)e[r]=i[r]}return e}function Nw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ay(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const Dw={clone:vo,merge:Zt};var Uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uw,this.fragmentShader=Ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=Nw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class by extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends by{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Cs=1;class kw extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(bs,Cs,e,n);r.layers=this.layers,this.add(r);const s=new Pn(bs,Cs,e,n);s.layers=this.layers,this.add(s);const o=new Pn(bs,Cs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(bs,Cs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(bs,Cs,e,n);l.layers=this.layers,this.add(l);const c=new Pn(bs,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Cy extends fn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:po,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fw extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yr?Dt:Ln),this.texture=new Cy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:pr});s.uniforms.tEquirect.value=n;const o=new ln(r,s),a=n.minFilter;return n.minFilter===ba&&(n.minFilter=Rn),new kw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Sd=new X,Bw=new X,zw=new qe;class Ki{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sd.subVectors(i,n).cross(Bw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zw.getNormalMatrix(e),r=this.coplanarPoint(Sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new ep,Nl=new X;class tp{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],S=r[10],m=r[11],u=r[12],v=r[13],p=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,m-g,E-u).normalize(),i[1].setComponents(l+s,f+c,m+g,E+u).normalize(),i[2].setComponents(l+o,f+d,m+y,E+v).normalize(),i[3].setComponents(l-o,f-d,m-y,E-v).normalize(),i[4].setComponents(l-a,f-h,m-S,E-p).normalize(),n===wi)i[5].setComponents(l+a,f+h,m+S,E+p).normalize();else if(n===Oc)i[5].setComponents(a,h,S,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nl.x=r.normal.x>0?e.max.x:e.min.x,Nl.y=r.normal.y>0?e.max.y:e.min.y,Nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ry(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,g=h.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,h,f),c.onUploadCallback();let S;if(h instanceof Float32Array)S=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)S=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=t.SHORT;else if(h instanceof Uint32Array)S=t.UNSIGNED_INT;else if(h instanceof Int32Array)S=t.INT;else if(h instanceof Int8Array)S=t.BYTE;else if(h instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,h){const f=d.array,g=d._updateRange,y=d.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&y.length===0&&t.bufferSubData(h,0,f),y.length!==0){for(let S=0,m=y.length;S<m;S++){const u=y[S];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Ra extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],y=[],S=[],m=[];for(let u=0;u<d;u++){const v=u*f-o;for(let p=0;p<c;p++){const E=p*h-s;y.push(E,-v,0),S.push(0,0,1),m.push(p/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const p=v+c*u,E=v+c*(u+1),R=v+1+c*(u+1),T=v+1+c*u;g.push(p,E,T),g.push(E,R,T)}this.setIndex(g),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gw=`#ifdef USE_ALPHAHASH
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
#endif`,Ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$w=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qw=`#ifdef USE_AOMAP
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
#endif`,Yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kw=`#ifdef USE_BATCHING
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
#endif`,Zw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tT=`#ifdef USE_IRIDESCENCE
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
#endif`,nT=`#ifdef USE_BUMPMAP
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
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dT=`#define PI 3.141592653589793
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
} // validated`,hT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fT=`vec3 transformedNormal = objectNormal;
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
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`
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
}`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
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
}`,PT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
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
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,OT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zT=`PhysicalMaterial material;
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
#endif`,HT=`struct PhysicalMaterial {
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
}`,VT=`
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
#endif`,GT=`#if defined( RE_IndirectDiffuse )
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JT=`#if defined( USE_POINTS_UV )
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
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
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
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A1=`float getShadowMask() {
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,Y1=`#define DISTANCE
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
}`,K1=`#define DISTANCE
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
}`,J1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,eA=`uniform vec3 diffuse;
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
}`,tA=`#include <common>
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#define LAMBERT
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
}`,rA=`#define LAMBERT
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
}`,sA=`#define MATCAP
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
}`,oA=`#define MATCAP
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
}`,aA=`#define NORMAL
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
}`,lA=`#define NORMAL
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
}`,cA=`#define PHONG
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
}`,uA=`#define PHONG
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
}`,dA=`#define STANDARD
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
}`,hA=`#define STANDARD
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
}`,fA=`#define TOON
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
}`,pA=`#define TOON
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
}`,mA=`uniform float size;
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
}`,gA=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,_A=`uniform vec3 color;
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
}`,yA=`uniform float rotation;
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
}`,xA=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Vw,alphahash_pars_fragment:Gw,alphamap_fragment:Ww,alphamap_pars_fragment:jw,alphatest_fragment:Xw,alphatest_pars_fragment:$w,aomap_fragment:qw,aomap_pars_fragment:Yw,batching_pars_vertex:Kw,batching_vertex:Zw,begin_vertex:Jw,beginnormal_vertex:Qw,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:oT,color_fragment:aT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:uT,common:dT,cube_uv_reflection_fragment:hT,defaultnormal_vertex:fT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:vT,colorspace_fragment:_T,colorspace_pars_fragment:yT,envmap_fragment:xT,envmap_common_pars_fragment:ST,envmap_pars_fragment:ET,envmap_pars_vertex:MT,envmap_physical_pars_fragment:UT,envmap_vertex:wT,fog_vertex:TT,fog_pars_vertex:AT,fog_fragment:bT,fog_pars_fragment:CT,gradientmap_pars_fragment:RT,lightmap_fragment:PT,lightmap_pars_fragment:IT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:NT,lights_pars_begin:DT,lights_toon_fragment:OT,lights_toon_pars_fragment:kT,lights_phong_fragment:FT,lights_phong_pars_fragment:BT,lights_physical_fragment:zT,lights_physical_pars_fragment:HT,lights_fragment_begin:VT,lights_fragment_maps:GT,lights_fragment_end:WT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:XT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:qT,map_fragment:YT,map_pars_fragment:KT,map_particle_fragment:ZT,map_particle_pars_fragment:JT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:e1,morphcolor_vertex:t1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:r1,normal_fragment_begin:s1,normal_fragment_maps:o1,normal_pars_fragment:a1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:h1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:v1,project_vertex:_1,dithering_fragment:y1,dithering_pars_fragment:x1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:E1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:w1,shadowmap_vertex:T1,shadowmask_pars_fragment:A1,skinbase_vertex:b1,skinning_pars_vertex:C1,skinning_vertex:R1,skinnormal_vertex:P1,specularmap_fragment:I1,specularmap_pars_fragment:L1,tonemapping_fragment:N1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:O1,uv_pars_fragment:k1,uv_pars_vertex:F1,uv_vertex:B1,worldpos_vertex:z1,background_vert:H1,background_frag:V1,backgroundCube_vert:G1,backgroundCube_frag:W1,cube_vert:j1,cube_frag:X1,depth_vert:$1,depth_frag:q1,distanceRGBA_vert:Y1,distanceRGBA_frag:K1,equirect_vert:Z1,equirect_frag:J1,linedashed_vert:Q1,linedashed_frag:eA,meshbasic_vert:tA,meshbasic_frag:nA,meshlambert_vert:iA,meshlambert_frag:rA,meshmatcap_vert:sA,meshmatcap_frag:oA,meshnormal_vert:aA,meshnormal_frag:lA,meshphong_vert:cA,meshphong_frag:uA,meshphysical_vert:dA,meshphysical_frag:hA,meshtoon_vert:fA,meshtoon_frag:pA,points_vert:mA,points_frag:gA,shadow_vert:vA,shadow_frag:_A,sprite_vert:yA,sprite_frag:xA},Ue={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ei={basic:{uniforms:Zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([Ue.points,Ue.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([Ue.common,Ue.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([Ue.sprite,Ue.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Zt([Ue.common,Ue.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Zt([Ue.lights,Ue.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ei.physical={uniforms:Zt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Dl={r:0,b:0,g:0};function SA(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function y(m,u){let v=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?S(a,l):p&&p.isColor&&(S(p,1),v=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===du)?(d===void 0&&(d=new ln(new Ga(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:vo(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ot.getTransfer(p.colorSpace)!==ut,(h!==p||f!==p.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new ln(new Ra(2,2),new Ui({name:"BackgroundMaterial",uniforms:vo(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ot.getTransfer(p.colorSpace)!==ut,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||f!==p.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function S(m,u){m.getRGB(Dl,Ay(t)),i.buffers.color.setClear(Dl.r,Dl.g,Dl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:y}}function EA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(F,ee,J,ne,U){let Q=!1;if(o){const q=S(ne,J,ee);c!==q&&(c=q,g(c.object)),Q=u(F,ne,J,U),Q&&v(F,ne,J,U)}else{const q=ee.wireframe===!0;(c.geometry!==ne.id||c.program!==J.id||c.wireframe!==q)&&(c.geometry=ne.id,c.program=J.id,c.wireframe=q,Q=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,H(F,ee,J,ne),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function y(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function S(F,ee,J){const ne=J.wireframe===!0;let U=a[F.id];U===void 0&&(U={},a[F.id]=U);let Q=U[ee.id];Q===void 0&&(Q={},U[ee.id]=Q);let q=Q[ne];return q===void 0&&(q=m(f()),Q[ne]=q),q}function m(F){const ee=[],J=[],ne=[];for(let U=0;U<r;U++)ee[U]=0,J[U]=0,ne[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:J,attributeDivisors:ne,object:F,attributes:{},index:null}}function u(F,ee,J,ne){const U=c.attributes,Q=ee.attributes;let q=0;const pe=J.getAttributes();for(const xe in pe)if(pe[xe].location>=0){const O=U[xe];let D=Q[xe];if(D===void 0&&(xe==="instanceMatrix"&&F.instanceMatrix&&(D=F.instanceMatrix),xe==="instanceColor"&&F.instanceColor&&(D=F.instanceColor)),O===void 0||O.attribute!==D||D&&O.data!==D.data)return!0;q++}return c.attributesNum!==q||c.index!==ne}function v(F,ee,J,ne){const U={},Q=ee.attributes;let q=0;const pe=J.getAttributes();for(const xe in pe)if(pe[xe].location>=0){let O=Q[xe];O===void 0&&(xe==="instanceMatrix"&&F.instanceMatrix&&(O=F.instanceMatrix),xe==="instanceColor"&&F.instanceColor&&(O=F.instanceColor));const D={};D.attribute=O,O&&O.data&&(D.data=O.data),U[xe]=D,q++}c.attributes=U,c.attributesNum=q,c.index=ne}function p(){const F=c.newAttributes;for(let ee=0,J=F.length;ee<J;ee++)F[ee]=0}function E(F){R(F,0)}function R(F,ee){const J=c.newAttributes,ne=c.enabledAttributes,U=c.attributeDivisors;J[F]=1,ne[F]===0&&(t.enableVertexAttribArray(F),ne[F]=1),U[F]!==ee&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,ee),U[F]=ee)}function T(){const F=c.newAttributes,ee=c.enabledAttributes;for(let J=0,ne=ee.length;J<ne;J++)ee[J]!==F[J]&&(t.disableVertexAttribArray(J),ee[J]=0)}function A(F,ee,J,ne,U,Q,q){q===!0?t.vertexAttribIPointer(F,ee,J,U,Q):t.vertexAttribPointer(F,ee,J,ne,U,Q)}function H(F,ee,J,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const U=ne.attributes,Q=J.getAttributes(),q=ee.defaultAttributeValues;for(const pe in Q){const xe=Q[pe];if(xe.location>=0){let oe=U[pe];if(oe===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),oe!==void 0){const O=oe.normalized,D=oe.itemSize,P=n.get(oe);if(P===void 0)continue;const b=P.buffer,re=P.type,de=P.bytesPerElement,Y=i.isWebGL2===!0&&(re===t.INT||re===t.UNSIGNED_INT||oe.gpuType===ay);if(oe.isInterleavedBufferAttribute){const Se=oe.data,V=Se.stride,Ie=oe.offset;if(Se.isInstancedInterleavedBuffer){for(let ie=0;ie<xe.locationSize;ie++)R(xe.location+ie,Se.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ie=0;ie<xe.locationSize;ie++)E(xe.location+ie);t.bindBuffer(t.ARRAY_BUFFER,b);for(let ie=0;ie<xe.locationSize;ie++)A(xe.location+ie,D/xe.locationSize,re,O,V*de,(Ie+D/xe.locationSize*ie)*de,Y)}else{if(oe.isInstancedBufferAttribute){for(let Se=0;Se<xe.locationSize;Se++)R(xe.location+Se,oe.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<xe.locationSize;Se++)E(xe.location+Se);t.bindBuffer(t.ARRAY_BUFFER,b);for(let Se=0;Se<xe.locationSize;Se++)A(xe.location+Se,D/xe.locationSize,re,O,D*de,D/xe.locationSize*Se*de,Y)}}else if(q!==void 0){const O=q[pe];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(xe.location,O);break;case 3:t.vertexAttrib3fv(xe.location,O);break;case 4:t.vertexAttrib4fv(xe.location,O);break;default:t.vertexAttrib1fv(xe.location,O)}}}}T()}function w(){W();for(const F in a){const ee=a[F];for(const J in ee){const ne=ee[J];for(const U in ne)y(ne[U].object),delete ne[U];delete ee[J]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;const ee=a[F.id];for(const J in ee){const ne=ee[J];for(const U in ne)y(ne[U].object),delete ne[U];delete ee[J]}delete a[F.id]}function G(F){for(const ee in a){const J=a[ee];if(J[F.id]===void 0)continue;const ne=J[F.id];for(const U in ne)y(ne[U].object),delete ne[U];delete J[F.id]}}function W(){he(),d=!0,c!==l&&(c=l,g(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:he,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:G,initAttributes:p,enableAttribute:E,disableUnusedAttributes:T}}function MA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<f;y++)this.render(d[y],h[y]);else{g.multiDrawArraysWEBGL(s,d,0,h,0,f);let y=0;for(let S=0;S<f;S++)y+=h[S];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function wA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=f>0,E=o||e.has("OES_texture_float"),R=p&&E,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:p,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:T}}function TA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ki,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const y=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,p=v*4;let E=u.clippingState||null;l.value=E,E=d(y,f,p,g);for(let R=0;R!==p;++R)E[R]=n[R];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,y){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,y!==!0||m===null){const u=g+S*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let p=0,E=g;p!==S;++p,E+=4)o.copy(h[p]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function AA(t){let e=new WeakMap;function n(o,a){return a===kh?o.mapping=po:a===Fh&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kh||a===Fh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fw(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Py extends by{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=4,Cg=[.125,.215,.35,.446,.526,.582],zr=20,Ed=new Py,Rg=new nt;let Md=null,wd=0,Td=0;const kr=(1+Math.sqrt(5))/2,Rs=1/kr,Pg=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,kr,Rs),new X(0,kr,-Rs),new X(Rs,0,kr),new X(-Rs,0,kr),new X(kr,Rs,0),new X(-kr,Rs,0)];class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Md=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,wd,Td),e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ca,format:Xn,colorSpace:Di,depthBuffer:!1},r=Lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bA(s)),this._blurMaterial=CA(s,e,n)}return r}_compileMaterial(e){const n=new ln(this._lodPlanes[0],e);this._renderer.compile(n,Ed)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Rg),d.toneMapping=mr,d.autoClear=!1;const g=new sa({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),y=new ln(new Ga,g);let S=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,S=!0):(g.color.copy(Rg),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;Ul(r,v*p,u>2?p:0,p,p),d.setRenderTarget(r),S&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===po||e.mapping===mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pg[(r-1)%Pg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ln(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*zr-1),S=s/y,m=isFinite(s)?1+Math.floor(d*S):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const u=[];let v=0;for(let A=0;A<zr;++A){const H=A/S,w=Math.exp(-H*H/2);u.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=y,f.mipInt.value=p-i;const E=this._sizeLods[r],R=3*E*(r>p-Ws?r-p+Ws:0),T=4*(this._cubeSize-E);Ul(n,R,T,3*E,2*E),l.setRenderTarget(n),l.render(h,Ed)}}function bA(t){const e=[],n=[],i=[];let r=t;const s=t-Ws+1+Cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ws?l=Cg[o-t+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,y=6,S=3,m=2,u=1,v=new Float32Array(S*y*g),p=new Float32Array(m*y*g),E=new Float32Array(u*y*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,H=T>2?0:-1,w=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];v.set(w,S*y*T),p.set(f,m*y*T);const C=[T,T,T,T,T,T];E.set(C,u*y*T)}const R=new li;R.setAttribute("position",new ri(v,S)),R.setAttribute("uv",new ri(p,m)),R.setAttribute("faceIndex",new ri(E,u)),e.push(R),r>Ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lg(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CA(t,e,n){const i=new Float32Array(zr),r=new X(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:np(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ng(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Dg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

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
	`}function RA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kh||l===Fh,d=l===po||l===mo;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Ig(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Ig(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const S=f.morphAttributes[y];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const S=g[y];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,y=h.attributes.position;let S=0;if(g!==null){const v=g.array;S=g.version;for(let p=0,E=v.length;p<E;p+=3){const R=v[p+0],T=v[p+1],A=v[p+2];f.push(R,T,T,A,A,R)}}else if(y!==void 0){const v=y.array;S=y.version;for(let p=0,E=v.length/3-1;p<E;p+=3){const R=p+0,T=p+1,A=p+2;f.push(R,T,T,A,A,R)}}else return;const m=new(vy(f)?Ty:wy)(f,1);m.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function LA(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function h(g,y,S){if(S===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,y,a,g*l,S),n.update(y,s,S)}function f(g,y,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<S;u++)this.render(g[u]/l,y[u]);else{m.multiDrawElementsWEBGL(s,y,0,a,g,0,S);let u=0;for(let v=0;v<S;v++)u+=y[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function NA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DA(t,e){return t[0]-e[0]}function UA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function OA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=y!==void 0?y.length:0;let m=s.get(d);if(m===void 0||m.count!==S){let ee=function(){he.dispose(),s.delete(d),d.removeEventListener("dispose",ee)};var g=ee;m!==void 0&&m.texture.dispose();const p=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let w=0;p===!0&&(w=1),E===!0&&(w=2),R===!0&&(w=3);let C=d.attributes.position.count*w,G=1;C>e.maxTextureSize&&(G=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const W=new Float32Array(C*G*4*S),he=new xy(W,C,G,S);he.type=sr,he.needsUpdate=!0;const F=w*4;for(let J=0;J<S;J++){const ne=T[J],U=A[J],Q=H[J],q=C*G*4*J;for(let pe=0;pe<ne.count;pe++){const xe=pe*F;p===!0&&(o.fromBufferAttribute(ne,pe),W[q+xe+0]=o.x,W[q+xe+1]=o.y,W[q+xe+2]=o.z,W[q+xe+3]=0),E===!0&&(o.fromBufferAttribute(U,pe),W[q+xe+4]=o.x,W[q+xe+5]=o.y,W[q+xe+6]=o.z,W[q+xe+7]=0),R===!0&&(o.fromBufferAttribute(Q,pe),W[q+xe+8]=o.x,W[q+xe+9]=o.y,W[q+xe+10]=o.z,W[q+xe+11]=Q.itemSize===4?o.w:1)}}m={count:S,texture:he,size:new Ae(C,G)},s.set(d,m),d.addEventListener("dispose",ee)}let u=0;for(let p=0;p<f.length;p++)u+=f[p];const v=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=f===void 0?0:f.length;let S=i[d.id];if(S===void 0||S.length!==y){S=[];for(let E=0;E<y;E++)S[E]=[E,0];i[d.id]=S}for(let E=0;E<y;E++){const R=S[E];R[0]=E,R[1]=f[E]}S.sort(UA);for(let E=0;E<8;E++)E<y&&S[E][1]?(a[E][0]=S[E][0],a[E][1]=S[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(DA);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const R=a[E],T=R[0],A=R[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+E)!==m[T]&&d.setAttribute("morphTarget"+E,m[T]),u&&d.getAttribute("morphNormal"+E)!==u[T]&&d.setAttribute("morphNormal"+E,u[T]),r[E]=A,v+=A):(m&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),u&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const p=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function kA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Iy extends fn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:qr,d!==qr&&d!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===qr&&(i=rr),i===void 0&&d===go&&(i=$r),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ly=new fn,Ny=new Iy(1,1);Ny.compareFunction=gy;const Dy=new xy,Uy=new Sw,Oy=new Cy,Ug=[],Og=[],kg=new Float32Array(16),Fg=new Float32Array(9),Bg=new Float32Array(4);function wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ug[r];if(s===void 0&&(s=new Float32Array(r),Ug[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pu(t,e){let n=Og[e];n===void 0&&(n=new Int32Array(e),Og[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function VA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Bg.set(i),t.uniformMatrix2fv(this.addr,!1,Bg),Pt(n,i)}}function GA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Fg.set(i),t.uniformMatrix3fv(this.addr,!1,Fg),Pt(n,i)}}function WA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;kg.set(i),t.uniformMatrix4fv(this.addr,!1,kg),Pt(n,i)}}function jA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function YA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function JA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function QA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ny:Ly;n.setTexture2D(e||s,r)}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uy,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Oy,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dy,r)}function ib(t){switch(t){case 5126:return FA;case 35664:return BA;case 35665:return zA;case 35666:return HA;case 35674:return VA;case 35675:return GA;case 35676:return WA;case 5124:case 35670:return jA;case 35667:case 35671:return XA;case 35668:case 35672:return $A;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return KA;case 36295:return ZA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(t,e){t.uniform1fv(this.addr,e)}function sb(t,e){const n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function ob(t,e){const n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function ab(t,e){const n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function lb(t,e){const n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cb(t,e){const n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ub(t,e){const n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function db(t,e){t.uniform1iv(this.addr,e)}function hb(t,e){t.uniform2iv(this.addr,e)}function fb(t,e){t.uniform3iv(this.addr,e)}function pb(t,e){t.uniform4iv(this.addr,e)}function mb(t,e){t.uniform1uiv(this.addr,e)}function gb(t,e){t.uniform2uiv(this.addr,e)}function vb(t,e){t.uniform3uiv(this.addr,e)}function _b(t,e){t.uniform4uiv(this.addr,e)}function yb(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ly,s[o])}function xb(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Uy,s[o])}function Sb(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Oy,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Dy,s[o])}function Mb(t){switch(t){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return ab;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return db;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}class wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ib(n.type)}}class Tb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mb(n.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function zg(t,e){t.seq.push(e),t.map[e.id]=e}function bb(t,e,n){const i=t.name,r=i.length;for(Ad.lastIndex=0;;){const s=Ad.exec(i),o=Ad.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zg(n,c===void 0?new wb(a,t,e):new Tb(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Ab(a),zg(n,h)),n=h}}}class nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);bb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Cb=37297;let Rb=0;function Pb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Ib(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Uc&&n===Dc?i="LinearDisplayP3ToLinearSRGB":e===Dc&&n===Uc&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case hu:return[i,"LinearTransferOETF"];case Dt:case Qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Pb(t.getShaderSource(e),o)}else return r}function Lb(t,e){const n=Ib(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Nb(t,e){let n;switch(e){case GM:n="Linear";break;case WM:n="Reinhard";break;case jM:n="OptimizedCineon";break;case XM:n="ACESFilmic";break;case qM:n="AgX";break;case $M:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Db(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function Ub(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(js).join(`
`)}function Ob(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function js(t){return t!==""}function Gg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(t){return t.replace(Fb,zb)}const Bb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zb(t,e){let n=Ze[e];if(n===void 0){const i=Bb.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(n)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(t){return t.replace(Hb,Vb)}function Vb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ry?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Xb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sy:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case VM:e="ENVMAP_BLENDING_ADD";break}return e}function $b(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Gb(n),c=Wb(n),d=jb(n),h=Xb(n),f=$b(n),g=n.isWebGL2?"":Db(n),y=Ub(n),S=Ob(s),m=r.createProgram();let u,v,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(js).join(`
`),u.length>0&&(u+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(js).join(`
`),v.length>0&&(v+=`
`)):(u=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),v=[g,Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?Ze.tonemapping_pars_fragment:"",n.toneMapping!==mr?Nb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Lb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),o=Wh(o),o=Gg(o,n),o=Wg(o,n),a=Wh(a),a=Gg(a,n),a=Wg(a,n),o=jg(o),a=jg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=p+u+o,R=p+v+a,T=Hg(r,r.VERTEX_SHADER,E),A=Hg(r,r.FRAGMENT_SHADER,R);r.attachShader(m,T),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function H(W){if(t.debug.checkShaderErrors){const he=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(T).trim(),ee=r.getShaderInfoLog(A).trim();let J=!0,ne=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,T,A);else{const U=Vg(r,T,"vertex"),Q=Vg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+U+`
`+Q)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(F===""||ee==="")&&(ne=!1);ne&&(W.diagnostics={runnable:J,programLog:he,vertexShader:{log:F,prefix:u},fragmentShader:{log:ee,prefix:v}})}r.deleteShader(T),r.deleteShader(A),w=new nc(r,m),C=kb(r,m)}let w;this.getUniforms=function(){return w===void 0&&H(this),w};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(m,Cb)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let Yb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Zb(e),n.set(e,i)),i}}class Zb{constructor(e){this.id=Yb++,this.code=e,this.usedTimes=0}}function Jb(t,e,n,i,r,s,o){const a=new Ey,l=new Kb,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return w===0?"uv":`uv${w}`}function m(w,C,G,W,he){const F=W.fog,ee=he.geometry,J=w.isMeshStandardMaterial?W.environment:null,ne=(w.isMeshStandardMaterial?n:e).get(w.envMap||J),U=ne&&ne.mapping===du?ne.image.height:null,Q=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const q=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,pe=q!==void 0?q.length:0;let xe=0;ee.morphAttributes.position!==void 0&&(xe=1),ee.morphAttributes.normal!==void 0&&(xe=2),ee.morphAttributes.color!==void 0&&(xe=3);let oe,O,D,P;if(Q){const it=ei[Q];oe=it.vertexShader,O=it.fragmentShader}else oe=w.vertexShader,O=w.fragmentShader,l.update(w),D=l.getVertexShaderID(w),P=l.getFragmentShaderID(w);const b=t.getRenderTarget(),re=he.isInstancedMesh===!0,de=he.isBatchedMesh===!0,Y=!!w.map,Se=!!w.matcap,V=!!ne,Ie=!!w.aoMap,ie=!!w.lightMap,le=!!w.bumpMap,K=!!w.normalMap,_e=!!w.displacementMap,z=!!w.emissiveMap,_=!!w.metalnessMap,x=!!w.roughnessMap,N=w.anisotropy>0,j=w.clearcoat>0,Z=w.iridescence>0,$=w.sheen>0,ve=w.transmission>0,me=N&&!!w.anisotropyMap,Ee=j&&!!w.clearcoatMap,Pe=j&&!!w.clearcoatNormalMap,Oe=j&&!!w.clearcoatRoughnessMap,fe=Z&&!!w.iridescenceMap,Ve=Z&&!!w.iridescenceThicknessMap,He=$&&!!w.sheenColorMap,ke=$&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Te=!!w.specularColorMap,L=!!w.specularIntensityMap,Me=ve&&!!w.transmissionMap,De=ve&&!!w.thicknessMap,Re=!!w.gradientMap,ye=!!w.alphaMap,B=w.alphaTest>0,we=!!w.alphaHash,Le=!!w.extensions,k=!!ee.attributes.uv1,ge=!!ee.attributes.uv2,be=!!ee.attributes.uv3;let ze=mr;return w.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ze=t.toneMapping),{isWebGL2:d,shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:oe,fragmentShader:O,defines:w.defines,customVertexShaderID:D,customFragmentShaderID:P,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:de,instancing:re,instancingColor:re&&he.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:b===null?t.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Di,map:Y,matcap:Se,envMap:V,envMapMode:V&&ne.mapping,envMapCubeUVHeight:U,aoMap:Ie,lightMap:ie,bumpMap:le,normalMap:K,displacementMap:f&&_e,emissiveMap:z,normalMapObjectSpace:K&&w.normalMapType===ow,normalMapTangentSpace:K&&w.normalMapType===my,metalnessMap:_,roughnessMap:x,anisotropy:N,anisotropyMap:me,clearcoat:j,clearcoatMap:Ee,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Oe,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Ve,sheen:$,sheenColorMap:He,sheenRoughnessMap:ke,specularMap:Ne,specularColorMap:Te,specularIntensityMap:L,transmission:ve,transmissionMap:Me,thicknessMap:De,gradientMap:Re,opaque:w.transparent===!1&&w.blending===eo,alphaMap:ye,alphaTest:B,alphaHash:we,combine:w.combine,mapUv:Y&&S(w.map.channel),aoMapUv:Ie&&S(w.aoMap.channel),lightMapUv:ie&&S(w.lightMap.channel),bumpMapUv:le&&S(w.bumpMap.channel),normalMapUv:K&&S(w.normalMap.channel),displacementMapUv:_e&&S(w.displacementMap.channel),emissiveMapUv:z&&S(w.emissiveMap.channel),metalnessMapUv:_&&S(w.metalnessMap.channel),roughnessMapUv:x&&S(w.roughnessMap.channel),anisotropyMapUv:me&&S(w.anisotropyMap.channel),clearcoatMapUv:Ee&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:He&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&S(w.sheenRoughnessMap.channel),specularMapUv:Ne&&S(w.specularMap.channel),specularColorMapUv:Te&&S(w.specularColorMap.channel),specularIntensityMapUv:L&&S(w.specularIntensityMap.channel),transmissionMapUv:Me&&S(w.transmissionMap.channel),thicknessMapUv:De&&S(w.thicknessMap.channel),alphaMapUv:ye&&S(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(K||N),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:ge,vertexUv3s:be,pointsUvs:he.isPoints===!0&&!!ee.attributes.uv&&(Y||ye),fog:!!F,useFog:w.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:he.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Y&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Le&&w.extensions.derivatives===!0,extensionFragDepth:Le&&w.extensions.fragDepth===!0,extensionDrawBuffers:Le&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function u(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(v(C,w),p(C,w),C.push(t.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function v(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function p(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),w.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function E(w){const C=y[w.type];let G;if(C){const W=ei[C];G=Dw.clone(W.uniforms)}else G=w.uniforms;return G}function R(w,C){let G;for(let W=0,he=c.length;W<he;W++){const F=c[W];if(F.cacheKey===C){G=F,++G.usedTimes;break}}return G===void 0&&(G=new qb(t,C,w,s),c.push(G)),G}function T(w){if(--w.usedTimes===0){const C=c.indexOf(w);c[C]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:H}}function Qb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function eC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,y,S,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:y,renderOrder:h.renderOrder,z:S,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=S,u.group=m),e++,u}function a(h,f,g,y,S,m){const u=o(h,f,g,y,S,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,y,S,m){const u=o(h,f,g,y,S,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||eC),i.length>1&&i.sort(f||$g),r.length>1&&r.sort(f||$g)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function tC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qg,t.set(i,[o])):r>=s.length?(o=new qg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function nC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new nt};break;case"SpotLight":n={position:new X,direction:new X,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function iC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rC=0;function sC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oC(t,e){const n=new nC,i=iC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new X);const s=new X,o=new At,a=new At;function l(d,h){let f=0,g=0,y=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let S=0,m=0,u=0,v=0,p=0,E=0,R=0,T=0,A=0,H=0,w=0;d.sort(sC);const C=h===!0?Math.PI:1;for(let W=0,he=d.length;W<he;W++){const F=d[W],ee=F.color,J=F.intensity,ne=F.distance,U=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=ee.r*J*C,g+=ee.g*J*C,y+=ee.b*J*C;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(F.sh.coefficients[Q],J);w++}else if(F.isDirectionalLight){const Q=n.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const q=F.shadow,pe=i.get(F);pe.shadowBias=q.bias,pe.shadowNormalBias=q.normalBias,pe.shadowRadius=q.radius,pe.shadowMapSize=q.mapSize,r.directionalShadow[S]=pe,r.directionalShadowMap[S]=U,r.directionalShadowMatrix[S]=F.shadow.matrix,E++}r.directional[S]=Q,S++}else if(F.isSpotLight){const Q=n.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(ee).multiplyScalar(J*C),Q.distance=ne,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,r.spot[u]=Q;const q=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,q.updateMatrices(F),F.castShadow&&H++),r.spotLightMatrix[u]=q.matrix,F.castShadow){const pe=i.get(F);pe.shadowBias=q.bias,pe.shadowNormalBias=q.normalBias,pe.shadowRadius=q.radius,pe.shadowMapSize=q.mapSize,r.spotShadow[u]=pe,r.spotShadowMap[u]=U,T++}u++}else if(F.isRectAreaLight){const Q=n.get(F);Q.color.copy(ee).multiplyScalar(J),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=Q,v++}else if(F.isPointLight){const Q=n.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity*C),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const q=F.shadow,pe=i.get(F);pe.shadowBias=q.bias,pe.shadowNormalBias=q.normalBias,pe.shadowRadius=q.radius,pe.shadowMapSize=q.mapSize,pe.shadowCameraNear=q.camera.near,pe.shadowCameraFar=q.camera.far,r.pointShadow[m]=pe,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=F.shadow.matrix,R++}r.point[m]=Q,m++}else if(F.isHemisphereLight){const Q=n.get(F);Q.skyColor.copy(F.color).multiplyScalar(J*C),Q.groundColor.copy(F.groundColor).multiplyScalar(J*C),r.hemi[p]=Q,p++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==m||G.spotLength!==u||G.rectAreaLength!==v||G.hemiLength!==p||G.numDirectionalShadows!==E||G.numPointShadows!==R||G.numSpotShadows!==T||G.numSpotMaps!==A||G.numLightProbes!==w)&&(r.directional.length=S,r.spot.length=u,r.rectArea.length=v,r.point.length=m,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+A-H,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=w,G.directionalLength=S,G.pointLength=m,G.spotLength=u,G.rectAreaLength=v,G.hemiLength=p,G.numDirectionalShadows=E,G.numPointShadows=R,G.numSpotShadows=T,G.numSpotMaps=A,G.numLightProbes=w,r.version=rC++)}function c(d,h){let f=0,g=0,y=0,S=0,m=0;const u=h.matrixWorldInverse;for(let v=0,p=d.length;v<p;v++){const E=d[v];if(E.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),f++}else if(E.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),y++}else if(E.isRectAreaLight){const R=r.rectArea[S];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),g++}else if(E.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Yg(t,e){const n=new oC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Yg(t,e),n.set(s,[l])):o>=a.length?(l=new Yg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class lC extends Va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cC extends Va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dC=`uniform sampler2D shadow_pass;
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
}`;function hC(t,e,n){let i=new tp;const r=new Ae,s=new Ae,o=new Ut,a=new lC({depthPacking:sw}),l=new cC,c={},d=n.maxTextureSize,h={[Er]:$t,[$t]:Er,[In]:In},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:uC,fragmentShader:dC}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new li;y.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ln(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ry;let u=this.type;this.render=function(T,A,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),C=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),W=t.state;W.setBlending(pr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const he=u!==_i&&this.type===_i,F=u===_i&&this.type!==_i;for(let ee=0,J=T.length;ee<J;ee++){const ne=T[ee],U=ne.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Q=U.getFrameExtents();if(r.multiply(Q),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,U.mapSize.y=s.y)),U.map===null||he===!0||F===!0){const pe=this.type!==_i?{minFilter:Qt,magFilter:Qt}:{};U.map!==null&&U.map.dispose(),U.map=new ns(r.x,r.y,pe),U.map.texture.name=ne.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const q=U.getViewportCount();for(let pe=0;pe<q;pe++){const xe=U.getViewport(pe);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),W.viewport(o),U.updateMatrices(ne,pe),i=U.getFrustum(),E(A,H,U.camera,ne,this.type)}U.isPointLightShadow!==!0&&this.type===_i&&v(U,H),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,C,G)};function v(T,A){const H=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ns(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,H,f,S,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,H,g,S,null)}function p(T,A,H,w){let C=null;const G=H.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)C=G;else if(C=H.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=C.uuid,he=A.uuid;let F=c[W];F===void 0&&(F={},c[W]=F);let ee=F[he];ee===void 0&&(ee=C.clone(),F[he]=ee,A.addEventListener("dispose",R)),C=ee}if(C.visible=A.visible,C.wireframe=A.wireframe,w===_i?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const W=t.properties.get(C);W.light=H}return C}function E(T,A,H,w,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===_i)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld);const he=e.update(T),F=T.material;if(Array.isArray(F)){const ee=he.groups;for(let J=0,ne=ee.length;J<ne;J++){const U=ee[J],Q=F[U.materialIndex];if(Q&&Q.visible){const q=p(T,Q,w,C);T.onBeforeShadow(t,T,A,H,he,q,U),t.renderBufferDirect(H,null,he,q,T,U),T.onAfterShadow(t,T,A,H,he,q,U)}}}else if(F.visible){const ee=p(T,F,w,C);T.onBeforeShadow(t,T,A,H,he,ee,null),t.renderBufferDirect(H,null,he,ee,T,null),T.onAfterShadow(t,T,A,H,he,ee,null)}}const W=T.children;for(let he=0,F=W.length;he<F;he++)E(W[he],A,H,w,C)}function R(T){T.target.removeEventListener("dispose",R);for(const H in c){const w=c[H],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function fC(t,e,n){const i=n.isWebGL2;function r(){let B=!1;const we=new Ut;let Le=null;const k=new Ut(0,0,0,0);return{setMask:function(ge){Le!==ge&&!B&&(t.colorMask(ge,ge,ge,ge),Le=ge)},setLocked:function(ge){B=ge},setClear:function(ge,be,ze,We,it){it===!0&&(ge*=We,be*=We,ze*=We),we.set(ge,be,ze,We),k.equals(we)===!1&&(t.clearColor(ge,be,ze,We),k.copy(we))},reset:function(){B=!1,Le=null,k.set(-1,0,0,0)}}}function s(){let B=!1,we=null,Le=null,k=null;return{setTest:function(ge){ge?de(t.DEPTH_TEST):Y(t.DEPTH_TEST)},setMask:function(ge){we!==ge&&!B&&(t.depthMask(ge),we=ge)},setFunc:function(ge){if(Le!==ge){switch(ge){case DM:t.depthFunc(t.NEVER);break;case UM:t.depthFunc(t.ALWAYS);break;case OM:t.depthFunc(t.LESS);break;case Lc:t.depthFunc(t.LEQUAL);break;case kM:t.depthFunc(t.EQUAL);break;case FM:t.depthFunc(t.GEQUAL);break;case BM:t.depthFunc(t.GREATER);break;case zM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=ge}},setLocked:function(ge){B=ge},setClear:function(ge){k!==ge&&(t.clearDepth(ge),k=ge)},reset:function(){B=!1,we=null,Le=null,k=null}}}function o(){let B=!1,we=null,Le=null,k=null,ge=null,be=null,ze=null,We=null,it=null;return{setTest:function(tt){B||(tt?de(t.STENCIL_TEST):Y(t.STENCIL_TEST))},setMask:function(tt){we!==tt&&!B&&(t.stencilMask(tt),we=tt)},setFunc:function(tt,_t,wn){(Le!==tt||k!==_t||ge!==wn)&&(t.stencilFunc(tt,_t,wn),Le=tt,k=_t,ge=wn)},setOp:function(tt,_t,wn){(be!==tt||ze!==_t||We!==wn)&&(t.stencilOp(tt,_t,wn),be=tt,ze=_t,We=wn)},setLocked:function(tt){B=tt},setClear:function(tt){it!==tt&&(t.clearStencil(tt),it=tt)},reset:function(){B=!1,we=null,Le=null,k=null,ge=null,be=null,ze=null,We=null,it=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},g={},y=new WeakMap,S=[],m=null,u=!1,v=null,p=null,E=null,R=null,T=null,A=null,H=null,w=new nt(0,0,0),C=0,G=!1,W=null,he=null,F=null,ee=null,J=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Q=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=Q>=2);let pe=null,xe={};const oe=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),D=new Ut().fromArray(oe),P=new Ut().fromArray(O);function b(B,we,Le,k){const ge=new Uint8Array(4),be=t.createTexture();t.bindTexture(B,be),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<Le;ze++)i&&(B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY)?t.texImage3D(we,0,t.RGBA,1,1,k,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(we+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return be}const re={};re[t.TEXTURE_2D]=b(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=b(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(re[t.TEXTURE_2D_ARRAY]=b(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=b(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(t.DEPTH_TEST),l.setFunc(Lc),z(!1),_(Im),de(t.CULL_FACE),K(pr);function de(B){f[B]!==!0&&(t.enable(B),f[B]=!0)}function Y(B){f[B]!==!1&&(t.disable(B),f[B]=!1)}function Se(B,we){return g[B]!==we?(t.bindFramebuffer(B,we),g[B]=we,i&&(B===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=we),B===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=we)),!0):!1}function V(B,we){let Le=S,k=!1;if(B)if(Le=y.get(we),Le===void 0&&(Le=[],y.set(we,Le)),B.isWebGLMultipleRenderTargets){const ge=B.texture;if(Le.length!==ge.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let be=0,ze=ge.length;be<ze;be++)Le[be]=t.COLOR_ATTACHMENT0+be;Le.length=ge.length,k=!0}}else Le[0]!==t.COLOR_ATTACHMENT0&&(Le[0]=t.COLOR_ATTACHMENT0,k=!0);else Le[0]!==t.BACK&&(Le[0]=t.BACK,k=!0);k&&(n.isWebGL2?t.drawBuffers(Le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Le))}function Ie(B){return m!==B?(t.useProgram(B),m=B,!0):!1}const ie={[Br]:t.FUNC_ADD,[yM]:t.FUNC_SUBTRACT,[xM]:t.FUNC_REVERSE_SUBTRACT};if(i)ie[Dm]=t.MIN,ie[Um]=t.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(ie[Dm]=B.MIN_EXT,ie[Um]=B.MAX_EXT)}const le={[SM]:t.ZERO,[EM]:t.ONE,[MM]:t.SRC_COLOR,[Uh]:t.SRC_ALPHA,[RM]:t.SRC_ALPHA_SATURATE,[bM]:t.DST_COLOR,[TM]:t.DST_ALPHA,[wM]:t.ONE_MINUS_SRC_COLOR,[Oh]:t.ONE_MINUS_SRC_ALPHA,[CM]:t.ONE_MINUS_DST_COLOR,[AM]:t.ONE_MINUS_DST_ALPHA,[PM]:t.CONSTANT_COLOR,[IM]:t.ONE_MINUS_CONSTANT_COLOR,[LM]:t.CONSTANT_ALPHA,[NM]:t.ONE_MINUS_CONSTANT_ALPHA};function K(B,we,Le,k,ge,be,ze,We,it,tt){if(B===pr){u===!0&&(Y(t.BLEND),u=!1);return}if(u===!1&&(de(t.BLEND),u=!0),B!==_M){if(B!==v||tt!==G){if((p!==Br||T!==Br)&&(t.blendEquation(t.FUNC_ADD),p=Br,T=Br),tt)switch(B){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ia:t.blendFunc(t.ONE,t.ONE);break;case Lm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ia:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,R=null,A=null,H=null,w.set(0,0,0),C=0,v=B,G=tt}return}ge=ge||we,be=be||Le,ze=ze||k,(we!==p||ge!==T)&&(t.blendEquationSeparate(ie[we],ie[ge]),p=we,T=ge),(Le!==E||k!==R||be!==A||ze!==H)&&(t.blendFuncSeparate(le[Le],le[k],le[be],le[ze]),E=Le,R=k,A=be,H=ze),(We.equals(w)===!1||it!==C)&&(t.blendColor(We.r,We.g,We.b,it),w.copy(We),C=it),v=B,G=!1}function _e(B,we){B.side===In?Y(t.CULL_FACE):de(t.CULL_FACE);let Le=B.side===$t;we&&(Le=!Le),z(Le),B.blending===eo&&B.transparent===!1?K(pr):K(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const k=B.stencilWrite;c.setTest(k),k&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),N(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Y(t.SAMPLE_ALPHA_TO_COVERAGE)}function z(B){W!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),W=B)}function _(B){B!==mM?(de(t.CULL_FACE),B!==he&&(B===Im?t.cullFace(t.BACK):B===gM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Y(t.CULL_FACE),he=B}function x(B){B!==F&&(U&&t.lineWidth(B),F=B)}function N(B,we,Le){B?(de(t.POLYGON_OFFSET_FILL),(ee!==we||J!==Le)&&(t.polygonOffset(we,Le),ee=we,J=Le)):Y(t.POLYGON_OFFSET_FILL)}function j(B){B?de(t.SCISSOR_TEST):Y(t.SCISSOR_TEST)}function Z(B){B===void 0&&(B=t.TEXTURE0+ne-1),pe!==B&&(t.activeTexture(B),pe=B)}function $(B,we,Le){Le===void 0&&(pe===null?Le=t.TEXTURE0+ne-1:Le=pe);let k=xe[Le];k===void 0&&(k={type:void 0,texture:void 0},xe[Le]=k),(k.type!==B||k.texture!==we)&&(pe!==Le&&(t.activeTexture(Le),pe=Le),t.bindTexture(B,we||re[B]),k.type=B,k.texture=we)}function ve(){const B=xe[pe];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function me(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(B){D.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),D.copy(B))}function Me(B){P.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),P.copy(B))}function De(B,we){let Le=h.get(we);Le===void 0&&(Le=new WeakMap,h.set(we,Le));let k=Le.get(B);k===void 0&&(k=t.getUniformBlockIndex(we,B.name),Le.set(B,k))}function Re(B,we){const k=h.get(we).get(B);d.get(we)!==k&&(t.uniformBlockBinding(we,k,B.__bindingPointIndex),d.set(we,k))}function ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},pe=null,xe={},g={},y=new WeakMap,S=[],m=null,u=!1,v=null,p=null,E=null,R=null,T=null,A=null,H=null,w=new nt(0,0,0),C=0,G=!1,W=null,he=null,F=null,ee=null,J=null,D.set(0,0,t.canvas.width,t.canvas.height),P.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:Y,bindFramebuffer:Se,drawBuffers:V,useProgram:Ie,setBlending:K,setMaterial:_e,setFlipSided:z,setCullFace:_,setLineWidth:x,setPolygonOffset:N,setScissorTest:j,activeTexture:Z,bindTexture:$,unbindTexture:ve,compressedTexImage2D:me,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:Te,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:He,texStorage3D:ke,texSubImage2D:Pe,texSubImage3D:Oe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ve,scissor:L,viewport:Me,reset:ye}}function pC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(_,x){return g?new OffscreenCanvas(_,x):kc("canvas")}function S(_,x,N,j){let Z=1;if((_.width>j||_.height>j)&&(Z=j/Math.max(_.width,_.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const $=x?Gh:Math.floor,ve=$(Z*_.width),me=$(Z*_.height);h===void 0&&(h=y(ve,me));const Ee=N?y(ve,me):h;return Ee.width=ve,Ee.height=me,Ee.getContext("2d").drawImage(_,0,0,ve,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+ve+"x"+me+")."),Ee}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function m(_){return dg(_.width)&&dg(_.height)}function u(_){return a?!1:_.wrapS!==jn||_.wrapT!==jn||_.minFilter!==Qt&&_.minFilter!==Rn}function v(_,x){return _.generateMipmaps&&x&&_.minFilter!==Qt&&_.minFilter!==Rn}function p(_){t.generateMipmap(_)}function E(_,x,N,j,Z=!1){if(a===!1)return x;if(_!==null){if(t[_]!==void 0)return t[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let $=x;if(x===t.RED&&(N===t.FLOAT&&($=t.R32F),N===t.HALF_FLOAT&&($=t.R16F),N===t.UNSIGNED_BYTE&&($=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.R8UI),N===t.UNSIGNED_SHORT&&($=t.R16UI),N===t.UNSIGNED_INT&&($=t.R32UI),N===t.BYTE&&($=t.R8I),N===t.SHORT&&($=t.R16I),N===t.INT&&($=t.R32I)),x===t.RG&&(N===t.FLOAT&&($=t.RG32F),N===t.HALF_FLOAT&&($=t.RG16F),N===t.UNSIGNED_BYTE&&($=t.RG8)),x===t.RGBA){const ve=Z?Nc:ot.getTransfer(j);N===t.FLOAT&&($=t.RGBA32F),N===t.HALF_FLOAT&&($=t.RGBA16F),N===t.UNSIGNED_BYTE&&($=ve===ut?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function R(_,x,N){return v(_,N)===!0||_.isFramebufferTexture&&_.minFilter!==Qt&&_.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?x.mipmaps.length:1}function T(_){return _===Qt||_===Om||_===Ju?t.NEAREST:t.LINEAR}function A(_){const x=_.target;x.removeEventListener("dispose",A),w(x),x.isVideoTexture&&d.delete(x)}function H(_){const x=_.target;x.removeEventListener("dispose",H),G(x)}function w(_){const x=i.get(_);if(x.__webglInit===void 0)return;const N=_.source,j=f.get(N);if(j){const Z=j[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(_),Object.keys(j).length===0&&f.delete(N)}i.remove(_)}function C(_){const x=i.get(_);t.deleteTexture(x.__webglTexture);const N=_.source,j=f.get(N);delete j[x.__cacheKey],o.memory.textures--}function G(_){const x=_.texture,N=i.get(_),j=i.get(x);if(j.__webglTexture!==void 0&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let $=0;$<N.__webglFramebuffer[Z].length;$++)t.deleteFramebuffer(N.__webglFramebuffer[Z][$]);else t.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)t.deleteFramebuffer(N.__webglFramebuffer[Z]);else t.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let Z=0,$=x.length;Z<$;Z++){const ve=i.get(x[Z]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(_)}let W=0;function he(){W=0}function F(){const _=W;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),W+=1,_}function ee(_){const x=[];return x.push(_.wrapS),x.push(_.wrapT),x.push(_.wrapR||0),x.push(_.magFilter),x.push(_.minFilter),x.push(_.anisotropy),x.push(_.internalFormat),x.push(_.format),x.push(_.type),x.push(_.generateMipmaps),x.push(_.premultiplyAlpha),x.push(_.flipY),x.push(_.unpackAlignment),x.push(_.colorSpace),x.join()}function J(_,x){const N=i.get(_);if(_.isVideoTexture&&_e(_),_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){const j=_.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(N,_,x);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function ne(_,x){const N=i.get(_);if(_.version>0&&N.__version!==_.version){D(N,_,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function U(_,x){const N=i.get(_);if(_.version>0&&N.__version!==_.version){D(N,_,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function Q(_,x){const N=i.get(_);if(_.version>0&&N.__version!==_.version){P(N,_,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const q={[Bh]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},pe={[Qt]:t.NEAREST,[Om]:t.NEAREST_MIPMAP_NEAREST,[Ju]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[YM]:t.LINEAR_MIPMAP_NEAREST,[ba]:t.LINEAR_MIPMAP_LINEAR},xe={[aw]:t.NEVER,[fw]:t.ALWAYS,[lw]:t.LESS,[gy]:t.LEQUAL,[cw]:t.EQUAL,[hw]:t.GEQUAL,[uw]:t.GREATER,[dw]:t.NOTEQUAL};function oe(_,x,N){if(N?(t.texParameteri(_,t.TEXTURE_WRAP_S,q[x.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,q[x.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,q[x.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,pe[x.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,pe[x.minFilter])):(t.texParameteri(_,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(_,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==jn||x.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(_,t.TEXTURE_MAG_FILTER,T(x.magFilter)),t.texParameteri(_,t.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Qt&&x.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Qt||x.minFilter!==Ju&&x.minFilter!==ba||x.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ca&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(_,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function O(_,x){let N=!1;_.__webglInit===void 0&&(_.__webglInit=!0,x.addEventListener("dispose",A));const j=x.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const $=ee(x);if($!==_.__cacheKey){Z[$]===void 0&&(Z[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Z[$].usedTimes++;const ve=Z[_.__cacheKey];ve!==void 0&&(Z[_.__cacheKey].usedTimes--,ve.usedTimes===0&&C(x)),_.__cacheKey=$,_.__webglTexture=Z[$].texture}return N}function D(_,x,N){let j=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=t.TEXTURE_3D);const Z=O(_,x),$=x.source;n.bindTexture(j,_.__webglTexture,t.TEXTURE0+N);const ve=i.get($);if($.version!==ve.__version||Z===!0){n.activeTexture(t.TEXTURE0+N);const me=ot.getPrimaries(ot.workingColorSpace),Ee=x.colorSpace===Ln?null:ot.getPrimaries(x.colorSpace),Pe=x.colorSpace===Ln||me===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Oe=u(x)&&m(x.image)===!1;let fe=S(x.image,Oe,!1,r.maxTextureSize);fe=z(x,fe);const Ve=m(fe)||a,He=s.convert(x.format,x.colorSpace);let ke=s.convert(x.type),Ne=E(x.internalFormat,He,ke,x.colorSpace,x.isVideoTexture);oe(j,x,Ve);let Te;const L=x.mipmaps,Me=a&&x.isVideoTexture!==!0&&Ne!==fy,De=ve.__version===void 0||Z===!0,Re=R(x,fe,Ve);if(x.isDepthTexture)Ne=t.DEPTH_COMPONENT,a?x.type===sr?Ne=t.DEPTH_COMPONENT32F:x.type===rr?Ne=t.DEPTH_COMPONENT24:x.type===$r?Ne=t.DEPTH24_STENCIL8:Ne=t.DEPTH_COMPONENT16:x.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===qr&&Ne===t.DEPTH_COMPONENT&&x.type!==Jf&&x.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=rr,ke=s.convert(x.type)),x.format===go&&Ne===t.DEPTH_COMPONENT&&(Ne=t.DEPTH_STENCIL,x.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=$r,ke=s.convert(x.type))),De&&(Me?n.texStorage2D(t.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,He,ke,null));else if(x.isDataTexture)if(L.length>0&&Ve){Me&&De&&n.texStorage2D(t.TEXTURE_2D,Re,Ne,L[0].width,L[0].height);for(let ye=0,B=L.length;ye<B;ye++)Te=L[ye],Me?n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Te.width,Te.height,He,ke,Te.data):n.texImage2D(t.TEXTURE_2D,ye,Ne,Te.width,Te.height,0,He,ke,Te.data);x.generateMipmaps=!1}else Me?(De&&n.texStorage2D(t.TEXTURE_2D,Re,Ne,fe.width,fe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,He,ke,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,He,ke,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Me&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,Ne,L[0].width,L[0].height,fe.depth);for(let ye=0,B=L.length;ye<B;ye++)Te=L[ye],x.format!==Xn?He!==null?Me?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,fe.depth,He,Te.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ye,Ne,Te.width,Te.height,fe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,fe.depth,He,ke,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ye,Ne,Te.width,Te.height,fe.depth,0,He,ke,Te.data)}else{Me&&De&&n.texStorage2D(t.TEXTURE_2D,Re,Ne,L[0].width,L[0].height);for(let ye=0,B=L.length;ye<B;ye++)Te=L[ye],x.format!==Xn?He!==null?Me?n.compressedTexSubImage2D(t.TEXTURE_2D,ye,0,0,Te.width,Te.height,He,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,ye,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?n.texSubImage2D(t.TEXTURE_2D,ye,0,0,Te.width,Te.height,He,ke,Te.data):n.texImage2D(t.TEXTURE_2D,ye,Ne,Te.width,Te.height,0,He,ke,Te.data)}else if(x.isDataArrayTexture)Me?(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,Ne,fe.width,fe.height,fe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,He,ke,fe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,He,ke,fe.data);else if(x.isData3DTexture)Me?(De&&n.texStorage3D(t.TEXTURE_3D,Re,Ne,fe.width,fe.height,fe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,He,ke,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,He,ke,fe.data);else if(x.isFramebufferTexture){if(De)if(Me)n.texStorage2D(t.TEXTURE_2D,Re,Ne,fe.width,fe.height);else{let ye=fe.width,B=fe.height;for(let we=0;we<Re;we++)n.texImage2D(t.TEXTURE_2D,we,Ne,ye,B,0,He,ke,null),ye>>=1,B>>=1}}else if(L.length>0&&Ve){Me&&De&&n.texStorage2D(t.TEXTURE_2D,Re,Ne,L[0].width,L[0].height);for(let ye=0,B=L.length;ye<B;ye++)Te=L[ye],Me?n.texSubImage2D(t.TEXTURE_2D,ye,0,0,He,ke,Te):n.texImage2D(t.TEXTURE_2D,ye,Ne,He,ke,Te);x.generateMipmaps=!1}else Me?(De&&n.texStorage2D(t.TEXTURE_2D,Re,Ne,fe.width,fe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,ke,fe)):n.texImage2D(t.TEXTURE_2D,0,Ne,He,ke,fe);v(x,Ve)&&p(j),ve.__version=$.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function P(_,x,N){if(x.image.length!==6)return;const j=O(_,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+N);const $=i.get(Z);if(Z.version!==$.__version||j===!0){n.activeTexture(t.TEXTURE0+N);const ve=ot.getPrimaries(ot.workingColorSpace),me=x.colorSpace===Ln?null:ot.getPrimaries(x.colorSpace),Ee=x.colorSpace===Ln||ve===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Oe=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let ye=0;ye<6;ye++)!Pe&&!Oe?fe[ye]=S(x.image[ye],!1,!0,r.maxCubemapSize):fe[ye]=Oe?x.image[ye].image:x.image[ye],fe[ye]=z(x,fe[ye]);const Ve=fe[0],He=m(Ve)||a,ke=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type),Te=E(x.internalFormat,ke,Ne,x.colorSpace),L=a&&x.isVideoTexture!==!0,Me=$.__version===void 0||j===!0;let De=R(x,Ve,He);oe(t.TEXTURE_CUBE_MAP,x,He);let Re;if(Pe){L&&Me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Te,Ve.width,Ve.height);for(let ye=0;ye<6;ye++){Re=fe[ye].mipmaps;for(let B=0;B<Re.length;B++){const we=Re[B];x.format!==Xn?ke!==null?L?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,0,0,we.width,we.height,ke,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,Te,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,0,0,we.width,we.height,ke,Ne,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,Te,we.width,we.height,0,ke,Ne,we.data)}}}else{Re=x.mipmaps,L&&Me&&(Re.length>0&&De++,n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Te,fe[0].width,fe[0].height));for(let ye=0;ye<6;ye++)if(Oe){L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe[ye].width,fe[ye].height,ke,Ne,fe[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Te,fe[ye].width,fe[ye].height,0,ke,Ne,fe[ye].data);for(let B=0;B<Re.length;B++){const Le=Re[B].image[ye].image;L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,0,0,Le.width,Le.height,ke,Ne,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,Te,Le.width,Le.height,0,ke,Ne,Le.data)}}else{L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ke,Ne,fe[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Te,ke,Ne,fe[ye]);for(let B=0;B<Re.length;B++){const we=Re[B];L?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,0,0,ke,Ne,we.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,Te,ke,Ne,we.image[ye])}}}v(x,He)&&p(t.TEXTURE_CUBE_MAP),$.__version=Z.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function b(_,x,N,j,Z,$){const ve=s.convert(N.format,N.colorSpace),me=s.convert(N.type),Ee=E(N.internalFormat,ve,me,N.colorSpace);if(!i.get(x).__hasExternalTextures){const Oe=Math.max(1,x.width>>$),fe=Math.max(1,x.height>>$);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,$,Ee,Oe,fe,x.depth,0,ve,me,null):n.texImage2D(Z,$,Ee,Oe,fe,0,ve,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,_),K(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,i.get(N).__webglTexture,0,le(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,i.get(N).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(_,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,_),x.depthBuffer&&!x.stencilBuffer){let j=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(N||K(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===sr?j=t.DEPTH_COMPONENT32F:Z.type===rr&&(j=t.DEPTH_COMPONENT24));const $=le(x);K(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$,j,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,$,j,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,j,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,_)}else if(x.depthBuffer&&x.stencilBuffer){const j=le(x);N&&K(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,x.width,x.height):K(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,_)}else{const j=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<j.length;Z++){const $=j[Z],ve=s.convert($.format,$.colorSpace),me=s.convert($.type),Ee=E($.internalFormat,ve,me,$.colorSpace),Pe=le(x);N&&K(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Ee,x.width,x.height):K(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Ee,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(_,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,_),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const j=i.get(x.depthTexture).__webglTexture,Z=le(x);if(x.depthTexture.format===qr)K(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(x.depthTexture.format===go)K(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Y(_){const x=i.get(_),N=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");de(x.__webglFramebuffer,_)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=t.createRenderbuffer(),re(x.__webglDepthbuffer[j],_,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),re(x.__webglDepthbuffer,_,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(_,x,N){const j=i.get(_);x!==void 0&&b(j.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Y(_)}function V(_){const x=_.texture,N=i.get(_),j=i.get(x);_.addEventListener("dispose",H),_.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=x.version,o.memory.textures++);const Z=_.isWebGLCubeRenderTarget===!0,$=_.isWebGLMultipleRenderTargets===!0,ve=m(_)||a;if(Z){N.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[me]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)N.__webglFramebuffer[me][Ee]=t.createFramebuffer()}else N.__webglFramebuffer[me]=t.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)N.__webglFramebuffer[me]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if($)if(r.drawBuffers){const me=_.texture;for(let Ee=0,Pe=me.length;Ee<Pe;Ee++){const Oe=i.get(me[Ee]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&_.samples>0&&K(_)===!1){const me=$?x:[x];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const Pe=me[Ee];N.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Ee]);const Oe=s.convert(Pe.format,Pe.colorSpace),fe=s.convert(Pe.type),Ve=E(Pe.internalFormat,Oe,fe,Pe.colorSpace,_.isXRRenderTarget===!0),He=le(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ve,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,N.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),re(N.__webglDepthRenderbuffer,_,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),oe(t.TEXTURE_CUBE_MAP,x,ve);for(let me=0;me<6;me++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)b(N.__webglFramebuffer[me][Ee],_,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee);else b(N.__webglFramebuffer[me],_,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(x,ve)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($){const me=_.texture;for(let Ee=0,Pe=me.length;Ee<Pe;Ee++){const Oe=me[Ee],fe=i.get(Oe);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),oe(t.TEXTURE_2D,Oe,ve),b(N.__webglFramebuffer,_,Oe,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),v(Oe,ve)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(a?me=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,j.__webglTexture),oe(me,x,ve),a&&x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)b(N.__webglFramebuffer[Ee],_,x,t.COLOR_ATTACHMENT0,me,Ee);else b(N.__webglFramebuffer,_,x,t.COLOR_ATTACHMENT0,me,0);v(x,ve)&&p(me),n.unbindTexture()}_.depthBuffer&&Y(_)}function Ie(_){const x=m(_)||a,N=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0,Z=N.length;j<Z;j++){const $=N[j];if(v($,x)){const ve=_.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get($).__webglTexture;n.bindTexture(ve,me),p(ve),n.unbindTexture()}}}function ie(_){if(a&&_.samples>0&&K(_)===!1){const x=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],N=_.width,j=_.height;let Z=t.COLOR_BUFFER_BIT;const $=[],ve=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(_),Ee=_.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Pe=0;Pe<x.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){$.push(t.COLOR_ATTACHMENT0+Pe),_.depthBuffer&&$.push(ve);const Oe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Oe===!1&&(_.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),Ee){const fe=i.get(x[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,N,j,0,0,N,j,Z,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let Pe=0;Pe<x.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const Oe=i.get(x[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function le(_){return Math.min(r.maxSamples,_.samples)}function K(_){const x=i.get(_);return a&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(_){const x=o.render.frame;d.get(_)!==x&&(d.set(_,x),_.update())}function z(_,x){const N=_.colorSpace,j=_.format,Z=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Hh||N!==Di&&N!==Ln&&(ot.getTransfer(N)===ut?a===!1?e.has("EXT_sRGB")===!0&&j===Xn?(_.format=Hh,_.minFilter=Rn,_.generateMipmaps=!1):x=_y.sRGBToLinear(x):(j!==Xn||Z!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=F,this.resetTextureUnits=he,this.setTexture2D=J,this.setTexture2DArray=ne,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=Se,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=b,this.useMultisampledRTT=K}function mC(t,e,n){const i=n.isWebGL2;function r(s,o=Ln){let a;const l=ot.getTransfer(o);if(s===gr)return t.UNSIGNED_BYTE;if(s===ly)return t.UNSIGNED_SHORT_4_4_4_4;if(s===cy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===KM)return t.BYTE;if(s===ZM)return t.SHORT;if(s===Jf)return t.UNSIGNED_SHORT;if(s===ay)return t.INT;if(s===rr)return t.UNSIGNED_INT;if(s===sr)return t.FLOAT;if(s===Ca)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===JM)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===QM)return t.LUMINANCE;if(s===ew)return t.LUMINANCE_ALPHA;if(s===qr)return t.DEPTH_COMPONENT;if(s===go)return t.DEPTH_STENCIL;if(s===Hh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tw)return t.RED;if(s===uy)return t.RED_INTEGER;if(s===nw)return t.RG;if(s===dy)return t.RG_INTEGER;if(s===hy)return t.RGBA_INTEGER;if(s===Qu||s===ed||s===td||s===nd)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ed)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===td)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===km||s===Fm||s===Bm||s===zm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===km)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hm||s===Vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hm)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gm||s===Wm||s===jm||s===Xm||s===$m||s===qm||s===Ym||s===Km||s===Zm||s===Jm||s===Qm||s===eg||s===tg||s===ng)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$m)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ym)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Km)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===eg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ng)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===id||s===ig||s===rg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===id)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ig)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===iw||s===sg||s===og||s===ag)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===id)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===og)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ag)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class gC extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vC={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class _C extends cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,y=null;const S=n.getContextAttributes();let m=null,u=null;const v=[],p=[],E=new Ae;let R=null;const T=new Pn;T.layers.enable(1),T.viewport=new Ut;const A=new Pn;A.layers.enable(2),A.viewport=new Ut;const H=[T,A],w=new gC;w.layers.enable(1),w.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let O=v[oe];return O===void 0&&(O=new bd,v[oe]=O),O.getTargetRaySpace()},this.getControllerGrip=function(oe){let O=v[oe];return O===void 0&&(O=new bd,v[oe]=O),O.getGripSpace()},this.getHand=function(oe){let O=v[oe];return O===void 0&&(O=new bd,v[oe]=O),O.getHandSpace()};function W(oe){const O=p.indexOf(oe.inputSource);if(O===-1)return;const D=v[O];D!==void 0&&(D.update(oe.inputSource,oe.frame,c||o),D.dispatchEvent({type:oe.type,data:oe.inputSource}))}function he(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",F);for(let oe=0;oe<v.length;oe++){const O=p[oe];O!==null&&(p[oe]=null,v[oe].disconnect(O))}C=null,G=null,e.setRenderTarget(m),g=null,f=null,h=null,r=null,u=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",he),r.addEventListener("inputsourceschange",F),S.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new ns(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let O=null,D=null,P=null;S.depth&&(P=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=S.stencil?go:qr,D=S.stencil?$r:rr);const b={colorFormat:n.RGBA8,depthFormat:P,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(b),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new ns(f.textureWidth,f.textureHeight,{format:Xn,type:gr,depthTexture:new Iy(f.textureWidth,f.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const re=e.properties.get(u);re.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(oe){for(let O=0;O<oe.removed.length;O++){const D=oe.removed[O],P=p.indexOf(D);P>=0&&(p[P]=null,v[P].disconnect(D))}for(let O=0;O<oe.added.length;O++){const D=oe.added[O];let P=p.indexOf(D);if(P===-1){for(let re=0;re<v.length;re++)if(re>=p.length){p.push(D),P=re;break}else if(p[re]===null){p[re]=D,P=re;break}if(P===-1)break}const b=v[P];b&&b.connect(D)}}const ee=new X,J=new X;function ne(oe,O,D){ee.setFromMatrixPosition(O.matrixWorld),J.setFromMatrixPosition(D.matrixWorld);const P=ee.distanceTo(J),b=O.projectionMatrix.elements,re=D.projectionMatrix.elements,de=b[14]/(b[10]-1),Y=b[14]/(b[10]+1),Se=(b[9]+1)/b[5],V=(b[9]-1)/b[5],Ie=(b[8]-1)/b[0],ie=(re[8]+1)/re[0],le=de*Ie,K=de*ie,_e=P/(-Ie+ie),z=_e*-Ie;O.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(z),oe.translateZ(_e),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const _=de+_e,x=Y+_e,N=le-z,j=K+(P-z),Z=Se*Y/x*_,$=V*Y/x*_;oe.projectionMatrix.makePerspective(N,j,Z,$,_,x),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function U(oe,O){O===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(O.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;w.near=A.near=T.near=oe.near,w.far=A.far=T.far=oe.far,(C!==w.near||G!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,G=w.far);const O=oe.parent,D=w.cameras;U(w,O);for(let P=0;P<D.length;P++)U(D[P],O);D.length===2?ne(w,T,A):w.projectionMatrix.copy(T.projectionMatrix),Q(oe,w,O)};function Q(oe,O,D){D===null?oe.matrix.copy(O.matrixWorld):(oe.matrix.copy(D.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(O.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(O.projectionMatrix),oe.projectionMatrixInverse.copy(O.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Vh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=oe)};let q=null;function pe(oe,O){if(d=O.getViewerPose(c||o),y=O,d!==null){const D=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let P=!1;D.length!==w.cameras.length&&(w.cameras.length=0,P=!0);for(let b=0;b<D.length;b++){const re=D[b];let de=null;if(g!==null)de=g.getViewport(re);else{const Se=h.getViewSubImage(f,re);de=Se.viewport,b===0&&(e.setRenderTargetTextures(u,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(u))}let Y=H[b];Y===void 0&&(Y=new Pn,Y.layers.enable(b),Y.viewport=new Ut,H[b]=Y),Y.matrix.fromArray(re.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(re.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(de.x,de.y,de.width,de.height),b===0&&(w.matrix.copy(Y.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),P===!0&&w.cameras.push(Y)}}for(let D=0;D<v.length;D++){const P=p[D],b=v[D];P!==null&&b!==void 0&&b.update(P,O,c||o)}q&&q(oe,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),y=null}const xe=new Ry;xe.setAnimationLoop(pe),this.setAnimationLoop=function(oe){q=oe},this.dispose=function(){}}}function yC(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ay(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,p,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,p):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$t&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$t&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,p){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=p*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$t&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,p){const E=p.program;i.uniformBlockBinding(v,E)}function c(v,p){let E=r[v.id];E===void 0&&(y(v),E=d(v),r[v.id]=E,v.addEventListener("dispose",m));const R=p.program;i.updateUBOMapping(v,R);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function d(v){const p=h();v.__bindingPointIndex=p;const E=t.createBuffer(),R=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,E),E}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const p=r[v.id],E=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let T=0,A=E.length;T<A;T++){const H=Array.isArray(E[T])?E[T]:[E[T]];for(let w=0,C=H.length;w<C;w++){const G=H[w];if(g(G,T,w,R)===!0){const W=G.__offset,he=Array.isArray(G.value)?G.value:[G.value];let F=0;for(let ee=0;ee<he.length;ee++){const J=he[ee],ne=S(J);typeof J=="number"||typeof J=="boolean"?(G.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,W+F,G.__data)):J.isMatrix3?(G.__data[0]=J.elements[0],G.__data[1]=J.elements[1],G.__data[2]=J.elements[2],G.__data[3]=0,G.__data[4]=J.elements[3],G.__data[5]=J.elements[4],G.__data[6]=J.elements[5],G.__data[7]=0,G.__data[8]=J.elements[6],G.__data[9]=J.elements[7],G.__data[10]=J.elements[8],G.__data[11]=0):(J.toArray(G.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,p,E,R){const T=v.value,A=p+"_"+E;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const H=R[A];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return R[A]=T,!0}else if(H.equals(T)===!1)return H.copy(T),!0}return!1}function y(v){const p=v.uniforms;let E=0;const R=16;for(let A=0,H=p.length;A<H;A++){const w=Array.isArray(p[A])?p[A]:[p[A]];for(let C=0,G=w.length;C<G;C++){const W=w[C],he=Array.isArray(W.value)?W.value:[W.value];for(let F=0,ee=he.length;F<ee;F++){const J=he[F],ne=S(J),U=E%R;U!==0&&R-U<ne.boundary&&(E+=R-U),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=ne.storage}}}const T=E%R;return T>0&&(E+=R-T),v.__size=E,v.__cache={},this}function S(v){const p={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(p.boundary=4,p.storage=4):v.isVector2?(p.boundary=8,p.storage=8):v.isVector3||v.isColor?(p.boundary=16,p.storage=12):v.isVector4?(p.boundary=16,p.storage=16):v.isMatrix3?(p.boundary=48,p.storage=48):v.isMatrix4?(p.boundary=64,p.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),p}function m(v){const p=v.target;p.removeEventListener("dispose",m);const E=o.indexOf(p.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class ky{constructor(e={}){const{canvas:n=gw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),y=new Int32Array(4);let S=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const p=this;let E=!1,R=0,T=0,A=null,H=-1,w=null;const C=new Ut,G=new Ut;let W=null;const he=new nt(0);let F=0,ee=n.width,J=n.height,ne=1,U=null,Q=null;const q=new Ut(0,0,ee,J),pe=new Ut(0,0,ee,J);let xe=!1;const oe=new tp;let O=!1,D=!1,P=null;const b=new At,re=new Ae,de=new X,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return A===null?ne:1}let V=i;function Ie(I,te){for(let ce=0;ce<I.length;ce++){const ue=I[ce],ae=n.getContext(ue,te);if(ae!==null)return ae}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",B,!1),n.addEventListener("webglcontextcreationerror",we,!1),V===null){const te=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&te.shift(),V=Ie(te,I),V===null)throw Ie(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ie,le,K,_e,z,_,x,N,j,Z,$,ve,me,Ee,Pe,Oe,fe,Ve,He,ke,Ne,Te,L,Me;function De(){ie=new PA(V),le=new wA(V,ie,e),ie.init(le),Te=new mC(V,ie,le),K=new fC(V,ie,le),_e=new NA(V),z=new Qb,_=new pC(V,ie,K,z,le,Te,_e),x=new AA(p),N=new RA(p),j=new Hw(V,le),L=new EA(V,ie,j,le),Z=new IA(V,j,_e,L),$=new kA(V,Z,j,_e),He=new OA(V,le,_),Oe=new TA(z),ve=new Jb(p,x,N,ie,le,L,Oe),me=new yC(p,z),Ee=new tC,Pe=new aC(ie,le),Ve=new SA(p,x,N,K,$,f,l),fe=new hC(p,$,le),Me=new xC(V,_e,le,K),ke=new MA(V,ie,_e,le),Ne=new LA(V,ie,_e,le),_e.programs=ve.programs,p.capabilities=le,p.extensions=ie,p.properties=z,p.renderLists=Ee,p.shadowMap=fe,p.state=K,p.info=_e}De();const Re=new _C(p,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const I=ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(I){I!==void 0&&(ne=I,this.setSize(ee,J,!1))},this.getSize=function(I){return I.set(ee,J)},this.setSize=function(I,te,ce=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=I,J=te,n.width=Math.floor(I*ne),n.height=Math.floor(te*ne),ce===!0&&(n.style.width=I+"px",n.style.height=te+"px"),this.setViewport(0,0,I,te)},this.getDrawingBufferSize=function(I){return I.set(ee*ne,J*ne).floor()},this.setDrawingBufferSize=function(I,te,ce){ee=I,J=te,ne=ce,n.width=Math.floor(I*ce),n.height=Math.floor(te*ce),this.setViewport(0,0,I,te)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(q)},this.setViewport=function(I,te,ce,ue){I.isVector4?q.set(I.x,I.y,I.z,I.w):q.set(I,te,ce,ue),K.viewport(C.copy(q).multiplyScalar(ne).floor())},this.getScissor=function(I){return I.copy(pe)},this.setScissor=function(I,te,ce,ue){I.isVector4?pe.set(I.x,I.y,I.z,I.w):pe.set(I,te,ce,ue),K.scissor(G.copy(pe).multiplyScalar(ne).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(I){K.setScissorTest(xe=I)},this.setOpaqueSort=function(I){U=I},this.setTransparentSort=function(I){Q=I},this.getClearColor=function(I){return I.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(I=!0,te=!0,ce=!0){let ue=0;if(I){let ae=!1;if(A!==null){const Fe=A.texture.format;ae=Fe===hy||Fe===dy||Fe===uy}if(ae){const Fe=A.texture.type,Ge=Fe===gr||Fe===rr||Fe===Jf||Fe===$r||Fe===ly||Fe===cy,je=Ve.getClearColor(),$e=Ve.getClearAlpha(),Je=je.r,Ye=je.g,Ke=je.b;Ge?(g[0]=Je,g[1]=Ye,g[2]=Ke,g[3]=$e,V.clearBufferuiv(V.COLOR,0,g)):(y[0]=Je,y[1]=Ye,y[2]=Ke,y[3]=$e,V.clearBufferiv(V.COLOR,0,y))}else ue|=V.COLOR_BUFFER_BIT}te&&(ue|=V.DEPTH_BUFFER_BIT),ce&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",B,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ee.dispose(),Pe.dispose(),z.dispose(),x.dispose(),N.dispose(),$.dispose(),L.dispose(),Me.dispose(),ve.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",it),Re.removeEventListener("sessionend",tt),P&&(P.dispose(),P=null),_t.stop()};function ye(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=_e.autoReset,te=fe.enabled,ce=fe.autoUpdate,ue=fe.needsUpdate,ae=fe.type;De(),_e.autoReset=I,fe.enabled=te,fe.autoUpdate=ce,fe.needsUpdate=ue,fe.type=ae}function we(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Le(I){const te=I.target;te.removeEventListener("dispose",Le),k(te)}function k(I){ge(I),z.remove(I)}function ge(I){const te=z.get(I).programs;te!==void 0&&(te.forEach(function(ce){ve.releaseProgram(ce)}),I.isShaderMaterial&&ve.releaseShaderCache(I))}this.renderBufferDirect=function(I,te,ce,ue,ae,Fe){te===null&&(te=Y);const Ge=ae.isMesh&&ae.matrixWorld.determinant()<0,je=Co(I,te,ce,ue,ae);K.setMaterial(ue,Ge);let $e=ce.index,Je=1;if(ue.wireframe===!0){if($e=Z.getWireframeAttribute(ce),$e===void 0)return;Je=2}const Ye=ce.drawRange,Ke=ce.attributes.position;let St=Ye.start*Je,mn=(Ye.start+Ye.count)*Je;Fe!==null&&(St=Math.max(St,Fe.start*Je),mn=Math.min(mn,(Fe.start+Fe.count)*Je)),$e!==null?(St=Math.max(St,0),mn=Math.min(mn,$e.count)):Ke!=null&&(St=Math.max(St,0),mn=Math.min(mn,Ke.count));const It=mn-St;if(It<0||It===1/0)return;L.setup(ae,ue,je,ce,$e);let di,ft=ke;if($e!==null&&(di=j.get($e),ft=Ne,ft.setIndex(di)),ae.isMesh)ue.wireframe===!0?(K.setLineWidth(ue.wireframeLinewidth*Se()),ft.setMode(V.LINES)):ft.setMode(V.TRIANGLES);else if(ae.isLine){let Qe=ue.linewidth;Qe===void 0&&(Qe=1),K.setLineWidth(Qe*Se()),ae.isLineSegments?ft.setMode(V.LINES):ae.isLineLoop?ft.setMode(V.LINE_LOOP):ft.setMode(V.LINE_STRIP)}else ae.isPoints?ft.setMode(V.POINTS):ae.isSprite&&ft.setMode(V.TRIANGLES);if(ae.isBatchedMesh)ft.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)ft.renderInstances(St,It,ae.count);else if(ce.isInstancedBufferGeometry){const Qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Eu=Math.min(ce.instanceCount,Qe);ft.renderInstances(St,It,Eu)}else ft.render(St,It)};function be(I,te,ce){I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=$t,I.needsUpdate=!0,br(I,te,ce),I.side=Er,I.needsUpdate=!0,br(I,te,ce),I.side=In):br(I,te,ce)}this.compile=function(I,te,ce=null){ce===null&&(ce=I),m=Pe.get(ce),m.init(),v.push(m),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),I!==ce&&I.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),m.setupLights(p._useLegacyLights);const ue=new Set;return I.traverse(function(ae){const Fe=ae.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const je=Fe[Ge];be(je,ce,ae),ue.add(je)}else be(Fe,ce,ae),ue.add(Fe)}),v.pop(),m=null,ue},this.compileAsync=function(I,te,ce=null){const ue=this.compile(I,te,ce);return new Promise(ae=>{function Fe(){if(ue.forEach(function(Ge){z.get(Ge).currentProgram.isReady()&&ue.delete(Ge)}),ue.size===0){ae(I);return}setTimeout(Fe,10)}ie.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ze=null;function We(I){ze&&ze(I)}function it(){_t.stop()}function tt(){_t.start()}const _t=new Ry;_t.setAnimationLoop(We),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(I){ze=I,Re.setAnimationLoop(I),I===null?_t.stop():_t.start()},Re.addEventListener("sessionstart",it),Re.addEventListener("sessionend",tt),this.render=function(I,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(te),te=Re.getCamera()),I.isScene===!0&&I.onBeforeRender(p,I,te,A),m=Pe.get(I,v.length),m.init(),v.push(m),b.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),oe.setFromProjectionMatrix(b),D=this.localClippingEnabled,O=Oe.init(this.clippingPlanes,D),S=Ee.get(I,u.length),S.init(),u.push(S),wn(I,te,0,p.sortObjects),S.finish(),p.sortObjects===!0&&S.sort(U,Q),this.info.render.frame++,O===!0&&Oe.beginShadows();const ce=m.state.shadowsArray;if(fe.render(ce,I,te),O===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(S,I),m.setupLights(p._useLegacyLights),te.isArrayCamera){const ue=te.cameras;for(let ae=0,Fe=ue.length;ae<Fe;ae++){const Ge=ue[ae];us(S,I,Ge,Ge.viewport)}}else us(S,I,te);A!==null&&(_.updateMultisampleRenderTarget(A),_.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(p,I,te),L.resetDefaultState(),H=-1,w=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function wn(I,te,ce,ue){if(I.visible===!1)return;if(I.layers.test(te.layers)){if(I.isGroup)ce=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(te);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||oe.intersectsSprite(I)){ue&&de.setFromMatrixPosition(I.matrixWorld).applyMatrix4(b);const Ge=$.update(I),je=I.material;je.visible&&S.push(I,Ge,je,ce,de.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||oe.intersectsObject(I))){const Ge=$.update(I),je=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),de.copy(I.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),de.copy(Ge.boundingSphere.center)),de.applyMatrix4(I.matrixWorld).applyMatrix4(b)),Array.isArray(je)){const $e=Ge.groups;for(let Je=0,Ye=$e.length;Je<Ye;Je++){const Ke=$e[Je],St=je[Ke.materialIndex];St&&St.visible&&S.push(I,Ge,St,ce,de.z,Ke)}}else je.visible&&S.push(I,Ge,je,ce,de.z,null)}}const Fe=I.children;for(let Ge=0,je=Fe.length;Ge<je;Ge++)wn(Fe[Ge],te,ce,ue)}function us(I,te,ce,ue){const ae=I.opaque,Fe=I.transmissive,Ge=I.transparent;m.setupLightsView(ce),O===!0&&Oe.setGlobalState(p.clippingPlanes,ce),Fe.length>0&&xu(ae,Fe,te,ce),ue&&K.viewport(C.copy(ue)),ae.length>0&&Ar(ae,te,ce),Fe.length>0&&Ar(Fe,te,ce),Ge.length>0&&Ar(Ge,te,ce),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function xu(I,te,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;const Fe=le.isWebGL2;P===null&&(P=new ns(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?Ca:gr,minFilter:ba,samples:Fe?4:0})),p.getDrawingBufferSize(re),Fe?P.setSize(re.x,re.y):P.setSize(Gh(re.x),Gh(re.y));const Ge=p.getRenderTarget();p.setRenderTarget(P),p.getClearColor(he),F=p.getClearAlpha(),F<1&&p.setClearColor(16777215,.5),p.clear();const je=p.toneMapping;p.toneMapping=mr,Ar(I,ce,ue),_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P);let $e=!1;for(let Je=0,Ye=te.length;Je<Ye;Je++){const Ke=te[Je],St=Ke.object,mn=Ke.geometry,It=Ke.material,di=Ke.group;if(It.side===In&&St.layers.test(ue.layers)){const ft=It.side;It.side=$t,It.needsUpdate=!0,pn(St,ce,ue,mn,It,di),It.side=ft,It.needsUpdate=!0,$e=!0}}$e===!0&&(_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P)),p.setRenderTarget(Ge),p.setClearColor(he,F),p.toneMapping=je}function Ar(I,te,ce){const ue=te.isScene===!0?te.overrideMaterial:null;for(let ae=0,Fe=I.length;ae<Fe;ae++){const Ge=I[ae],je=Ge.object,$e=Ge.geometry,Je=ue===null?Ge.material:ue,Ye=Ge.group;je.layers.test(ce.layers)&&pn(je,te,ce,$e,Je,Ye)}}function pn(I,te,ce,ue,ae,Fe){I.onBeforeRender(p,te,ce,ue,ae,Fe),I.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ae.onBeforeRender(p,te,ce,ue,I,Fe),ae.transparent===!0&&ae.side===In&&ae.forceSinglePass===!1?(ae.side=$t,ae.needsUpdate=!0,p.renderBufferDirect(ce,te,ue,ae,I,Fe),ae.side=Er,ae.needsUpdate=!0,p.renderBufferDirect(ce,te,ue,ae,I,Fe),ae.side=In):p.renderBufferDirect(ce,te,ue,ae,I,Fe),I.onAfterRender(p,te,ce,ue,ae,Fe)}function br(I,te,ce){te.isScene!==!0&&(te=Y);const ue=z.get(I),ae=m.state.lights,Fe=m.state.shadowsArray,Ge=ae.state.version,je=ve.getParameters(I,ae.state,Fe,te,ce),$e=ve.getProgramCacheKey(je);let Je=ue.programs;ue.environment=I.isMeshStandardMaterial?te.environment:null,ue.fog=te.fog,ue.envMap=(I.isMeshStandardMaterial?N:x).get(I.envMap||ue.environment),Je===void 0&&(I.addEventListener("dispose",Le),Je=new Map,ue.programs=Je);let Ye=Je.get($e);if(Ye!==void 0){if(ue.currentProgram===Ye&&ue.lightsStateVersion===Ge)return Su(I,je),Ye}else je.uniforms=ve.getUniforms(I),I.onBuild(ce,je,p),I.onBeforeCompile(je,p),Ye=ve.acquireProgram(je,$e),Je.set($e,Ye),ue.uniforms=je.uniforms;const Ke=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=Oe.uniform),Su(I,je),ue.needsLights=Ka(I),ue.lightsStateVersion=Ge,ue.needsLights&&(Ke.ambientLightColor.value=ae.state.ambient,Ke.lightProbe.value=ae.state.probe,Ke.directionalLights.value=ae.state.directional,Ke.directionalLightShadows.value=ae.state.directionalShadow,Ke.spotLights.value=ae.state.spot,Ke.spotLightShadows.value=ae.state.spotShadow,Ke.rectAreaLights.value=ae.state.rectArea,Ke.ltc_1.value=ae.state.rectAreaLTC1,Ke.ltc_2.value=ae.state.rectAreaLTC2,Ke.pointLights.value=ae.state.point,Ke.pointLightShadows.value=ae.state.pointShadow,Ke.hemisphereLights.value=ae.state.hemi,Ke.directionalShadowMap.value=ae.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ke.spotShadowMap.value=ae.state.spotShadowMap,Ke.spotLightMatrix.value=ae.state.spotLightMatrix,Ke.spotLightMap.value=ae.state.spotLightMap,Ke.pointShadowMap.value=ae.state.pointShadowMap,Ke.pointShadowMatrix.value=ae.state.pointShadowMatrix),ue.currentProgram=Ye,ue.uniformsList=null,Ye}function bo(I){if(I.uniformsList===null){const te=I.currentProgram.getUniforms();I.uniformsList=nc.seqWithValue(te.seq,I.uniforms)}return I.uniformsList}function Su(I,te){const ce=z.get(I);ce.outputColorSpace=te.outputColorSpace,ce.batching=te.batching,ce.instancing=te.instancing,ce.instancingColor=te.instancingColor,ce.skinning=te.skinning,ce.morphTargets=te.morphTargets,ce.morphNormals=te.morphNormals,ce.morphColors=te.morphColors,ce.morphTargetsCount=te.morphTargetsCount,ce.numClippingPlanes=te.numClippingPlanes,ce.numIntersection=te.numClipIntersection,ce.vertexAlphas=te.vertexAlphas,ce.vertexTangents=te.vertexTangents,ce.toneMapping=te.toneMapping}function Co(I,te,ce,ue,ae){te.isScene!==!0&&(te=Y),_.resetTextureUnits();const Fe=te.fog,Ge=ue.isMeshStandardMaterial?te.environment:null,je=A===null?p.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Di,$e=(ue.isMeshStandardMaterial?N:x).get(ue.envMap||Ge),Je=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ye=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ke=!!ce.morphAttributes.position,St=!!ce.morphAttributes.normal,mn=!!ce.morphAttributes.color;let It=mr;ue.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(It=p.toneMapping);const di=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ft=di!==void 0?di.length:0,Qe=z.get(ue),Eu=m.state.lights;if(O===!0&&(D===!0||I!==w)){const Tn=I===w&&ue.id===H;Oe.setState(ue,I,Tn)}let yt=!1;ue.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Eu.state.version||Qe.outputColorSpace!==je||ae.isBatchedMesh&&Qe.batching===!1||!ae.isBatchedMesh&&Qe.batching===!0||ae.isInstancedMesh&&Qe.instancing===!1||!ae.isInstancedMesh&&Qe.instancing===!0||ae.isSkinnedMesh&&Qe.skinning===!1||!ae.isSkinnedMesh&&Qe.skinning===!0||ae.isInstancedMesh&&Qe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Qe.instancingColor===!1&&ae.instanceColor!==null||Qe.envMap!==$e||ue.fog===!0&&Qe.fog!==Fe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Oe.numPlanes||Qe.numIntersection!==Oe.numIntersection)||Qe.vertexAlphas!==Je||Qe.vertexTangents!==Ye||Qe.morphTargets!==Ke||Qe.morphNormals!==St||Qe.morphColors!==mn||Qe.toneMapping!==It||le.isWebGL2===!0&&Qe.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,Qe.__version=ue.version);let Cr=Qe.currentProgram;yt===!0&&(Cr=br(ue,te,ae));let xp=!1,Ro=!1,Mu=!1;const Ht=Cr.getUniforms(),Rr=Qe.uniforms;if(K.useProgram(Cr.program)&&(xp=!0,Ro=!0,Mu=!0),ue.id!==H&&(H=ue.id,Ro=!0),xp||w!==I){Ht.setValue(V,"projectionMatrix",I.projectionMatrix),Ht.setValue(V,"viewMatrix",I.matrixWorldInverse);const Tn=Ht.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,de.setFromMatrixPosition(I.matrixWorld)),le.logarithmicDepthBuffer&&Ht.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ht.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),w!==I&&(w=I,Ro=!0,Mu=!0)}if(ae.isSkinnedMesh){Ht.setOptional(V,ae,"bindMatrix"),Ht.setOptional(V,ae,"bindMatrixInverse");const Tn=ae.skeleton;Tn&&(le.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ht.setValue(V,"boneTexture",Tn.boneTexture,_)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ae.isBatchedMesh&&(Ht.setOptional(V,ae,"batchingTexture"),Ht.setValue(V,"batchingTexture",ae._matricesTexture,_));const wu=ce.morphAttributes;if((wu.position!==void 0||wu.normal!==void 0||wu.color!==void 0&&le.isWebGL2===!0)&&He.update(ae,ce,Cr),(Ro||Qe.receiveShadow!==ae.receiveShadow)&&(Qe.receiveShadow=ae.receiveShadow,Ht.setValue(V,"receiveShadow",ae.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Rr.envMap.value=$e,Rr.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Ro&&(Ht.setValue(V,"toneMappingExposure",p.toneMappingExposure),Qe.needsLights&&Ya(Rr,Mu),Fe&&ue.fog===!0&&me.refreshFogUniforms(Rr,Fe),me.refreshMaterialUniforms(Rr,ue,ne,J,P),nc.upload(V,bo(Qe),Rr,_)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(nc.upload(V,bo(Qe),Rr,_),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ht.setValue(V,"center",ae.center),Ht.setValue(V,"modelViewMatrix",ae.modelViewMatrix),Ht.setValue(V,"normalMatrix",ae.normalMatrix),Ht.setValue(V,"modelMatrix",ae.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Tn=ue.uniformsGroups;for(let Tu=0,zx=Tn.length;Tu<zx;Tu++)if(le.isWebGL2){const Sp=Tn[Tu];Me.update(Sp,Cr),Me.bind(Sp,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function Ya(I,te){I.ambientLightColor.needsUpdate=te,I.lightProbe.needsUpdate=te,I.directionalLights.needsUpdate=te,I.directionalLightShadows.needsUpdate=te,I.pointLights.needsUpdate=te,I.pointLightShadows.needsUpdate=te,I.spotLights.needsUpdate=te,I.spotLightShadows.needsUpdate=te,I.rectAreaLights.needsUpdate=te,I.hemisphereLights.needsUpdate=te}function Ka(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,te,ce){z.get(I.texture).__webglTexture=te,z.get(I.depthTexture).__webglTexture=ce;const ue=z.get(I);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,te){const ce=z.get(I);ce.__webglFramebuffer=te,ce.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(I,te=0,ce=0){A=I,R=te,T=ce;let ue=!0,ae=null,Fe=!1,Ge=!1;if(I){const $e=z.get(I);$e.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1):$e.__webglFramebuffer===void 0?_.setupRenderTarget(I):$e.__hasExternalTextures&&_.rebindTextures(I,z.get(I.texture).__webglTexture,z.get(I.depthTexture).__webglTexture);const Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ge=!0);const Ye=z.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ye[te])?ae=Ye[te][ce]:ae=Ye[te],Fe=!0):le.isWebGL2&&I.samples>0&&_.useMultisampledRTT(I)===!1?ae=z.get(I).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[ce]:ae=Ye,C.copy(I.viewport),G.copy(I.scissor),W=I.scissorTest}else C.copy(q).multiplyScalar(ne).floor(),G.copy(pe).multiplyScalar(ne).floor(),W=xe;if(K.bindFramebuffer(V.FRAMEBUFFER,ae)&&le.drawBuffers&&ue&&K.drawBuffers(I,ae),K.viewport(C),K.scissor(G),K.setScissorTest(W),Fe){const $e=z.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+te,$e.__webglTexture,ce)}else if(Ge){const $e=z.get(I.texture),Je=te||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.__webglTexture,ce||0,Je)}H=-1},this.readRenderTargetPixels=function(I,te,ce,ue,ae,Fe,Ge){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=z.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ge!==void 0&&(je=je[Ge]),je){K.bindFramebuffer(V.FRAMEBUFFER,je);try{const $e=I.texture,Je=$e.format,Ye=$e.type;if(Je!==Xn&&Te.convert(Je)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ye===Ca&&(ie.has("EXT_color_buffer_half_float")||le.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Ye!==gr&&Te.convert(Ye)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===sr&&(le.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=I.width-ue&&ce>=0&&ce<=I.height-ae&&V.readPixels(te,ce,ue,ae,Te.convert(Je),Te.convert(Ye),Fe)}finally{const $e=A!==null?z.get(A).__webglFramebuffer:null;K.bindFramebuffer(V.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(I,te,ce=0){const ue=Math.pow(2,-ce),ae=Math.floor(te.image.width*ue),Fe=Math.floor(te.image.height*ue);_.setTexture2D(te,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,I.x,I.y,ae,Fe),K.unbindTexture()},this.copyTextureToTexture=function(I,te,ce,ue=0){const ae=te.image.width,Fe=te.image.height,Ge=Te.convert(ce.format),je=Te.convert(ce.type);_.setTexture2D(ce,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ce.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ce.unpackAlignment),te.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ue,I.x,I.y,ae,Fe,Ge,je,te.image.data):te.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ue,I.x,I.y,te.mipmaps[0].width,te.mipmaps[0].height,Ge,te.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,ue,I.x,I.y,Ge,je,te.image),ue===0&&ce.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(I,te,ce,ue,ae=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=I.max.x-I.min.x+1,Ge=I.max.y-I.min.y+1,je=I.max.z-I.min.z+1,$e=Te.convert(ue.format),Je=Te.convert(ue.type);let Ye;if(ue.isData3DTexture)_.setTexture3D(ue,0),Ye=V.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)_.setTexture2DArray(ue,0),Ye=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ue.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ue.unpackAlignment);const Ke=V.getParameter(V.UNPACK_ROW_LENGTH),St=V.getParameter(V.UNPACK_IMAGE_HEIGHT),mn=V.getParameter(V.UNPACK_SKIP_PIXELS),It=V.getParameter(V.UNPACK_SKIP_ROWS),di=V.getParameter(V.UNPACK_SKIP_IMAGES),ft=ce.isCompressedTexture?ce.mipmaps[ae]:ce.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,I.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,I.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,I.min.z),ce.isDataTexture||ce.isData3DTexture?V.texSubImage3D(Ye,ae,te.x,te.y,te.z,Fe,Ge,je,$e,Je,ft.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ye,ae,te.x,te.y,te.z,Fe,Ge,je,$e,ft.data)):V.texSubImage3D(Ye,ae,te.x,te.y,te.z,Fe,Ge,je,$e,Je,ft),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St),V.pixelStorei(V.UNPACK_SKIP_PIXELS,mn),V.pixelStorei(V.UNPACK_SKIP_ROWS,It),V.pixelStorei(V.UNPACK_SKIP_IMAGES,di),ae===0&&ue.generateMipmaps&&V.generateMipmap(Ye),K.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?_.setTextureCube(I,0):I.isData3DTexture?_.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?_.setTexture2DArray(I,0):_.setTexture2D(I,0),K.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,K.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qf?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===hu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Yr:py}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?Dt:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class SC extends ky{}SC.prototype.isWebGL1Renderer=!0;class EC extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ps extends fn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,g=(o-d)/f;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ae:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new X,r=[],s=[],o=[],a=new X,l=new At;for(let g=0;g<=e;g++){const y=g/e;r[g]=this.getTangentAt(y,new X)}s[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(Ft(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Ft(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ip extends ci{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Ae,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*d-g*h+this.aX,c=f*h+g*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class MC extends ip{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,g*=d,r(o,a,f,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Ol=new X,Cd=new rp,Rd=new rp,Pd=new rp;class wC extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new X){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Ol.subVectors(r[0],r[1]).add(r[0]),c=Ol);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Ol.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ol),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(h),g),S=Math.pow(h.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(d),g);S<1e-4&&(S=1),y<1e-4&&(y=S),m<1e-4&&(m=S),Cd.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,y,S,m),Rd.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,y,S,m),Pd.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,y,S,m)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Rd.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Pd.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Cd.calc(l),Rd.calc(l),Pd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new X().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function TC(t,e){const n=1-t;return n*n*e}function AC(t,e){return 2*(1-t)*t*e}function bC(t,e){return t*t*e}function oa(t,e,n,i){return TC(t,e)+AC(t,n)+bC(t,i)}function CC(t,e){const n=1-t;return n*n*n*e}function RC(t,e){const n=1-t;return 3*n*n*t*e}function PC(t,e){return 3*(1-t)*t*t*e}function IC(t,e){return t*t*t*e}function aa(t,e,n,i,r){return CC(t,e)+RC(t,n)+PC(t,i)+IC(t,r)}class Fy extends ci{constructor(e=new Ae,n=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ae){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LC extends ci{constructor(e=new X,n=new X,i=new X,r=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new X){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(aa(e,r.x,s.x,o.x,a.x),aa(e,r.y,s.y,o.y,a.y),aa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class By extends ci{constructor(e=new Ae,n=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ae){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ae){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class NC extends ci{constructor(e=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new X){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zy extends ci{constructor(e=new Ae,n=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ae){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DC extends ci{constructor(e=new X,n=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new X){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oa(e,r.x,s.x,o.x),oa(e,r.y,s.y,o.y),oa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hy extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ae){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Kg(a,l.x,c.x,d.x,h.x),Kg(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ae().fromArray(r))}return this}}var Zg=Object.freeze({__proto__:null,ArcCurve:MC,CatmullRomCurve3:wC,CubicBezierCurve:Fy,CubicBezierCurve3:LC,EllipseCurve:ip,LineCurve:By,LineCurve3:NC,QuadraticBezierCurve:zy,QuadraticBezierCurve3:DC,SplineCurve:Hy});class UC extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zg[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Zg[r.type]().fromJSON(r))}return this}}class no extends UC{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new By(this.currentPoint.clone(),new Ae(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new zy(this.currentPoint.clone(),new Ae(e,n),new Ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Fy(this.currentPoint.clone(),new Ae(e,n),new Ae(i,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Hy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new ip(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ic extends no{constructor(e){super(e),this.uuid=Mo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new no().fromJSON(r))}return this}}const OC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Vy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,h,f,g;if(i&&(s=HC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let y=n;y<r;y+=n)h=t[y],f=t[y+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>d&&(d=f);g=Math.max(c-a,d-l),g=g!==0?32767/g:0}return Pa(s,o,n,a,l,g,0),o}};function Vy(t,e,n,i,r){let s,o;if(r===JC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Jg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Jg(s,t[s],t[s+1],o);return o&&mu(o,o.next)&&(La(o),o=o.next),o}function rs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(mu(n,n.next)||mt(n.prev,n,n.next)===0)){if(La(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Pa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&XC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?FC(t,i,r,s):kC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),La(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=BC(rs(t),e,n),Pa(t,e,n,i,r,s,2)):o===2&&zC(t,e,n,i,r,s):Pa(rs(t),e,n,i,r,s,1);break}}}function kC(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,g=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=d&&y.x<=f&&y.y>=h&&y.y<=g&&$s(r,a,s,l,o,c,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function FC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,f=o.y,g=a<l?a<c?a:c:l<c?l:c,y=d<h?d<f?d:f:h<f?h:f,S=a>l?a>c?a:c:l>c?l:c,m=d>h?d>f?d:f:h>f?h:f,u=jh(g,y,e,n,i),v=jh(S,m,e,n,i);let p=t.prevZ,E=t.nextZ;for(;p&&p.z>=u&&E&&E.z<=v;){if(p.x>=g&&p.x<=S&&p.y>=y&&p.y<=m&&p!==r&&p!==o&&$s(a,d,l,h,c,f,p.x,p.y)&&mt(p.prev,p,p.next)>=0||(p=p.prevZ,E.x>=g&&E.x<=S&&E.y>=y&&E.y<=m&&E!==r&&E!==o&&$s(a,d,l,h,c,f,E.x,E.y)&&mt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;p&&p.z>=u;){if(p.x>=g&&p.x<=S&&p.y>=y&&p.y<=m&&p!==r&&p!==o&&$s(a,d,l,h,c,f,p.x,p.y)&&mt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;E&&E.z<=v;){if(E.x>=g&&E.x<=S&&E.y>=y&&E.y<=m&&E!==r&&E!==o&&$s(a,d,l,h,c,f,E.x,E.y)&&mt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function BC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!mu(r,s)&&Gy(r,i,i.next,s)&&Ia(r,s)&&Ia(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),La(i),La(i.next),i=t=s),i=i.next}while(i!==t);return rs(i)}function zC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&YC(o,a)){let l=Wy(o,a);o=rs(o,o.next),l=rs(l,l.next),Pa(o,e,n,i,r,s,0),Pa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function HC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Vy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(qC(c));for(r.sort(VC),s=0;s<r.length;s++)n=GC(r[s],n);return n}function VC(t,e){return t.x-e.x}function GC(t,e){const n=WC(t,e);if(!n)return e;const i=Wy(n,t);return rs(i,i.next),rs(n,n.next)}function WC(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&$s(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Ia(n,t)&&(h<d||h===d&&(n.x>r.x||n.x===r.x&&jC(r,n)))&&(r=n,d=h)),n=n.next;while(n!==a);return r}function jC(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function XC(t,e,n,i){let r=t;do r.z===0&&(r.z=jh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,$C(r)}function $C(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function jh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function qC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function $s(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function YC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!KC(t,e)&&(Ia(t,e)&&Ia(e,t)&&ZC(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||mu(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function mu(t,e){return t.x===e.x&&t.y===e.y}function Gy(t,e,n,i){const r=Fl(mt(t,e,n)),s=Fl(mt(t,e,i)),o=Fl(mt(n,i,t)),a=Fl(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&kl(t,n,e)||s===0&&kl(t,i,e)||o===0&&kl(n,t,i)||a===0&&kl(n,e,i))}function kl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Fl(t){return t>0?1:t<0?-1:0}function KC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Gy(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ia(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function ZC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Wy(t,e){const n=new Xh(t.i,t.x,t.y),i=new Xh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Jg(t,e,n,i){const r=new Xh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function La(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Xh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class gu{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return gu.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Qg(e),ev(i,e);let o=e.length;n.forEach(Qg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,ev(i,n[l]);const a=OC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Qg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ev(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class la extends li{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new X,f=new X,g=[],y=[],S=[],m=[];for(let u=0;u<=i;u++){const v=[],p=u/i;let E=0;u===0&&o===0?E=.5/n:u===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const T=R/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+p*a),h.y=e*Math.cos(o+p*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+p*a),y.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),m.push(T+E,1-p),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const p=d[u][v+1],E=d[u][v],R=d[u+1][v],T=d[u+1][v+1];(u!==0||o>0)&&g.push(p,E,T),(u!==i-1||l<Math.PI)&&g.push(E,R,T)}this.setIndex(g),this.setAttribute("position",new tn(y,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tv extends Va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=my,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const nv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class QC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const g=c[h],y=c[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return y}return null}}}const eR=new QC;class sp{constructor(e){this.manager=e!==void 0?e:eR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class tR extends Error{constructor(e,n){super(e),this.response=n}}class nR extends sp{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:n,onProgress:i,onError:r});return}vi[e]=[],vi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=vi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=f?parseInt(f):0,y=g!==0;let S=0;const m=new ReadableStream({start(u){v();function v(){h.read().then(({done:p,value:E})=>{if(p)u.close();else{S+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:y,loaded:S,total:g});for(let T=0,A=d.length;T<A;T++){const H=d[T];H.onProgress&&H.onProgress(R)}u.enqueue(E),v()}})}}});return new Response(m)}else throw new tR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(y=>g.decode(y))}}}).then(c=>{nv.add(e,c);const d=vi[e];delete vi[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{const d=vi[e];if(d===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jy extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Id=new At,iv=new X,rv=new X;class iR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;iv.setFromMatrixPosition(e.matrixWorld),n.position.copy(iv),rv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rv),n.updateMatrixWorld(),Id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rR extends iR{constructor(){super(new Py(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends jy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new rR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sR extends jy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ov{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const av=new Ae;class oR{constructor(e=new Ae(1/0,1/0),n=new Ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=av.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,av).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Dr{constructor(){this.type="ShapePath",this.color=new nt,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new no,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(u){const v=[];for(let p=0,E=u.length;p<E;p++){const R=u[p],T=new ic;T.curves=R.curves,v.push(T)}return v}function i(u,v){const p=v.length;let E=!1;for(let R=p-1,T=0;T<p;R=T++){let A=v[R],H=v[T],w=H.x-A.x,C=H.y-A.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(A=v[T],w=-w,H=v[R],C=-C),u.y<A.y||u.y>H.y)continue;if(u.y===A.y){if(u.x===A.x)return!0}else{const G=C*(u.x-A.x)-w*(u.y-A.y);if(G===0)return!0;if(G<0)continue;E=!E}}else{if(u.y!==A.y)continue;if(H.x<=u.x&&u.x<=A.x||A.x<=u.x&&u.x<=H.x)return!0}}return E}const r=gu.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ic,l.curves=a.curves,c.push(l),c;let d=!r(s[0].getPoints());d=e?!d:d;const h=[],f=[];let g=[],y=0,S;f[y]=void 0,g[y]=[];for(let u=0,v=s.length;u<v;u++)a=s[u],S=a.getPoints(),o=r(S),o=e?!o:o,o?(!d&&f[y]&&y++,f[y]={s:new ic,p:S},f[y].s.curves=a.curves,d&&y++,g[y]=[]):g[y].push({h:a,p:S[0]});if(!f[0])return n(s);if(f.length>1){let u=!1,v=0;for(let p=0,E=f.length;p<E;p++)h[p]=[];for(let p=0,E=f.length;p<E;p++){const R=g[p];for(let T=0;T<R.length;T++){const A=R[T];let H=!0;for(let w=0;w<f.length;w++)i(A.p,f[w].p)&&(p!==w&&v++,H?(H=!1,h[w].push(A)):u=!0);H&&h[p].push(A)}}v>0&&u===!1&&(g=h)}let m;for(let u=0,v=f.length;u<v;u++){l=f[u].s,c.push(l),m=g[u];for(let p=0,E=m.length;p<E;p++)l.holes.push(m[p].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);const lv={type:"change"},Ld={type:"start"},cv={type:"end"},Bl=new Sy,uv=new Ki,aR=Math.cos(70*mw.DEG2RAD);class lR extends cs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Pe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(lv),i.update(),s=r.NONE},this.update=function(){const L=new X,Me=new is().setFromUnitVectors(e.up,new X(0,1,0)),De=Me.clone().invert(),Re=new X,ye=new is,B=new X,we=2*Math.PI;return function(k=null){const ge=i.object.position;L.copy(ge).sub(i.target),L.applyQuaternion(Me),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&W(C(k)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let be=i.minAzimuthAngle,ze=i.maxAzimuthAngle;isFinite(be)&&isFinite(ze)&&(be<-Math.PI?be+=we:be>Math.PI&&(be-=we),ze<-Math.PI?ze+=we:ze>Math.PI&&(ze-=we),be<=ze?a.theta=Math.max(be,Math.min(ze,a.theta)):a.theta=a.theta>(be+ze)/2?Math.max(be,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(De),ge.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let We=!1;if(i.zoomToCursor&&T){let it=null;if(i.object.isPerspectiveCamera){const tt=L.length();it=q(tt*c);const _t=tt-it;i.object.position.addScaledVector(E,_t),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const tt=new X(R.x,R.y,0);tt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),We=!0;const _t=new X(R.x,R.y,0);_t.unproject(i.object),i.object.position.sub(_t).add(tt),i.object.updateMatrixWorld(),it=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(Bl.origin.copy(i.object.position),Bl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Bl.direction))<aR?e.lookAt(i.target):(uv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Bl.intersectPlane(uv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),We=!0);return c=1,T=!1,We||Re.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||B.distanceToSquared(i.target)>0?(i.dispatchEvent(lv),Re.copy(i.object.position),ye.copy(i.object.quaternion),B.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ve),i.domElement.removeEventListener("pointerdown",_),i.domElement.removeEventListener("pointercancel",N),i.domElement.removeEventListener("wheel",$),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",N),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Pe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ov,l=new ov;let c=1;const d=new X,h=new Ae,f=new Ae,g=new Ae,y=new Ae,S=new Ae,m=new Ae,u=new Ae,v=new Ae,p=new Ae,E=new X,R=new Ae;let T=!1;const A=[],H={};let w=!1;function C(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function G(L){const Me=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*Me)}function W(L){l.theta-=L}function he(L){l.phi-=L}const F=function(){const L=new X;return function(De,Re){L.setFromMatrixColumn(Re,0),L.multiplyScalar(-De),d.add(L)}}(),ee=function(){const L=new X;return function(De,Re){i.screenSpacePanning===!0?L.setFromMatrixColumn(Re,1):(L.setFromMatrixColumn(Re,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(De),d.add(L)}}(),J=function(){const L=new X;return function(De,Re){const ye=i.domElement;if(i.object.isPerspectiveCamera){const B=i.object.position;L.copy(B).sub(i.target);let we=L.length();we*=Math.tan(i.object.fov/2*Math.PI/180),F(2*De*we/ye.clientHeight,i.object.matrix),ee(2*Re*we/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(De*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),ee(Re*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(L,Me){if(!i.zoomToCursor)return;T=!0;const De=i.domElement.getBoundingClientRect(),Re=L-De.left,ye=Me-De.top,B=De.width,we=De.height;R.x=Re/B*2-1,R.y=-(ye/we)*2+1,E.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function pe(L){h.set(L.clientX,L.clientY)}function xe(L){Q(L.clientX,L.clientX),u.set(L.clientX,L.clientY)}function oe(L){y.set(L.clientX,L.clientY)}function O(L){f.set(L.clientX,L.clientY),g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Me=i.domElement;W(2*Math.PI*g.x/Me.clientHeight),he(2*Math.PI*g.y/Me.clientHeight),h.copy(f),i.update()}function D(L){v.set(L.clientX,L.clientY),p.subVectors(v,u),p.y>0?ne(G(p.y)):p.y<0&&U(G(p.y)),u.copy(v),i.update()}function P(L){S.set(L.clientX,L.clientY),m.subVectors(S,y).multiplyScalar(i.panSpeed),J(m.x,m.y),y.copy(S),i.update()}function b(L){Q(L.clientX,L.clientY),L.deltaY<0?U(G(L.deltaY)):L.deltaY>0&&ne(G(L.deltaY)),i.update()}function re(L){let Me=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,i.keyPanSpeed),Me=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,-i.keyPanSpeed),Me=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(i.keyPanSpeed,0),Me=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(-i.keyPanSpeed,0),Me=!0;break}Me&&(L.preventDefault(),i.update())}function de(L){if(A.length===1)h.set(L.pageX,L.pageY);else{const Me=Te(L),De=.5*(L.pageX+Me.x),Re=.5*(L.pageY+Me.y);h.set(De,Re)}}function Y(L){if(A.length===1)y.set(L.pageX,L.pageY);else{const Me=Te(L),De=.5*(L.pageX+Me.x),Re=.5*(L.pageY+Me.y);y.set(De,Re)}}function Se(L){const Me=Te(L),De=L.pageX-Me.x,Re=L.pageY-Me.y,ye=Math.sqrt(De*De+Re*Re);u.set(0,ye)}function V(L){i.enableZoom&&Se(L),i.enablePan&&Y(L)}function Ie(L){i.enableZoom&&Se(L),i.enableRotate&&de(L)}function ie(L){if(A.length==1)f.set(L.pageX,L.pageY);else{const De=Te(L),Re=.5*(L.pageX+De.x),ye=.5*(L.pageY+De.y);f.set(Re,ye)}g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const Me=i.domElement;W(2*Math.PI*g.x/Me.clientHeight),he(2*Math.PI*g.y/Me.clientHeight),h.copy(f)}function le(L){if(A.length===1)S.set(L.pageX,L.pageY);else{const Me=Te(L),De=.5*(L.pageX+Me.x),Re=.5*(L.pageY+Me.y);S.set(De,Re)}m.subVectors(S,y).multiplyScalar(i.panSpeed),J(m.x,m.y),y.copy(S)}function K(L){const Me=Te(L),De=L.pageX-Me.x,Re=L.pageY-Me.y,ye=Math.sqrt(De*De+Re*Re);v.set(0,ye),p.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),ne(p.y),u.copy(v);const B=(L.pageX+Me.x)*.5,we=(L.pageY+Me.y)*.5;Q(B,we)}function _e(L){i.enableZoom&&K(L),i.enablePan&&le(L)}function z(L){i.enableZoom&&K(L),i.enableRotate&&ie(L)}function _(L){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",N)),He(L),L.pointerType==="touch"?Oe(L):j(L))}function x(L){i.enabled!==!1&&(L.pointerType==="touch"?fe(L):Z(L))}function N(L){ke(L),A.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",N)),i.dispatchEvent(cv),s=r.NONE}function j(L){let Me;switch(L.button){case 0:Me=i.mouseButtons.LEFT;break;case 1:Me=i.mouseButtons.MIDDLE;break;case 2:Me=i.mouseButtons.RIGHT;break;default:Me=-1}switch(Me){case hs.DOLLY:if(i.enableZoom===!1)return;xe(L),s=r.DOLLY;break;case hs.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;oe(L),s=r.PAN}else{if(i.enableRotate===!1)return;pe(L),s=r.ROTATE}break;case hs.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;pe(L),s=r.ROTATE}else{if(i.enablePan===!1)return;oe(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ld)}function Z(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;O(L);break;case r.DOLLY:if(i.enableZoom===!1)return;D(L);break;case r.PAN:if(i.enablePan===!1)return;P(L);break}}function $(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Ld),b(ve(L)),i.dispatchEvent(cv))}function ve(L){const Me=L.deltaMode,De={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(Me){case 1:De.deltaY*=16;break;case 2:De.deltaY*=100;break}return L.ctrlKey&&!w&&(De.deltaY*=10),De}function me(L){L.key==="Control"&&(w=!0,document.addEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ee(L){L.key==="Control"&&(w=!1,document.removeEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Pe(L){i.enabled===!1||i.enablePan===!1||re(L)}function Oe(L){switch(Ne(L),A.length){case 1:switch(i.touches.ONE){case fs.ROTATE:if(i.enableRotate===!1)return;de(L),s=r.TOUCH_ROTATE;break;case fs.PAN:if(i.enablePan===!1)return;Y(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case fs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(L),s=r.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ie(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ld)}function fe(L){switch(Ne(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ie(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(L),i.update();break;default:s=r.NONE}}function Ve(L){i.enabled!==!1&&L.preventDefault()}function He(L){A.push(L.pointerId)}function ke(L){delete H[L.pointerId];for(let Me=0;Me<A.length;Me++)if(A[Me]==L.pointerId){A.splice(Me,1);return}}function Ne(L){let Me=H[L.pointerId];Me===void 0&&(Me=new Ae,H[L.pointerId]=Me),Me.set(L.pageX,L.pageY)}function Te(L){const Me=L.pointerId===A[0]?A[1]:A[0];return H[Me]}i.domElement.addEventListener("contextmenu",Ve),i.domElement.addEventListener("pointerdown",_),i.domElement.addEventListener("pointercancel",N),i.domElement.addEventListener("wheel",$,{passive:!1}),document.addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}const cR=Dt;class Fc extends sp{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new nR(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(O,D){if(O.nodeType!==1)return;const P=E(O);let b=!1,re=null;switch(O.nodeName){case"svg":D=y(O,D);break;case"style":s(O);break;case"g":D=y(O,D);break;case"path":D=y(O,D),O.hasAttribute("d")&&(re=r(O));break;case"rect":D=y(O,D),re=l(O);break;case"polygon":D=y(O,D),re=c(O);break;case"polyline":D=y(O,D),re=d(O);break;case"circle":D=y(O,D),re=h(O);break;case"ellipse":D=y(O,D),re=f(O);break;case"line":D=y(O,D),re=g(O);break;case"defs":b=!0;break;case"use":D=y(O,D);const Se=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),V=O.viewportElement.getElementById(Se);V?i(V,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+Se);break}re&&(D.fill!==void 0&&D.fill!=="none"&&re.color.setStyle(D.fill,cR),T(re,pe),W.push(re),re.userData={node:O,style:D});const de=O.childNodes;for(let Y=0;Y<de.length;Y++){const Se=de[Y];b&&Se.nodeName!=="style"&&Se.nodeName!=="defs"||i(Se,D)}P&&(F.pop(),F.length>0?pe.copy(F[F.length-1]):pe.identity())}function r(O){const D=new Dr,P=new Ae,b=new Ae,re=new Ae;let de=!0,Y=!1;const Se=O.getAttribute("d");if(Se===""||Se==="none")return null;const V=Se.match(/[a-df-z][^a-df-z]*/ig);for(let Ie=0,ie=V.length;Ie<ie;Ie++){const le=V[Ie],K=le.charAt(0),_e=le.slice(1).trim();de===!0&&(Y=!0,de=!1);let z;switch(K){case"M":z=m(_e);for(let _=0,x=z.length;_<x;_+=2)P.x=z[_+0],P.y=z[_+1],b.x=P.x,b.y=P.y,_===0?D.moveTo(P.x,P.y):D.lineTo(P.x,P.y),_===0&&re.copy(P);break;case"H":z=m(_e);for(let _=0,x=z.length;_<x;_++)P.x=z[_],b.x=P.x,b.y=P.y,D.lineTo(P.x,P.y),_===0&&Y===!0&&re.copy(P);break;case"V":z=m(_e);for(let _=0,x=z.length;_<x;_++)P.y=z[_],b.x=P.x,b.y=P.y,D.lineTo(P.x,P.y),_===0&&Y===!0&&re.copy(P);break;case"L":z=m(_e);for(let _=0,x=z.length;_<x;_+=2)P.x=z[_+0],P.y=z[_+1],b.x=P.x,b.y=P.y,D.lineTo(P.x,P.y),_===0&&Y===!0&&re.copy(P);break;case"C":z=m(_e);for(let _=0,x=z.length;_<x;_+=6)D.bezierCurveTo(z[_+0],z[_+1],z[_+2],z[_+3],z[_+4],z[_+5]),b.x=z[_+2],b.y=z[_+3],P.x=z[_+4],P.y=z[_+5],_===0&&Y===!0&&re.copy(P);break;case"S":z=m(_e);for(let _=0,x=z.length;_<x;_+=4)D.bezierCurveTo(S(P.x,b.x),S(P.y,b.y),z[_+0],z[_+1],z[_+2],z[_+3]),b.x=z[_+0],b.y=z[_+1],P.x=z[_+2],P.y=z[_+3],_===0&&Y===!0&&re.copy(P);break;case"Q":z=m(_e);for(let _=0,x=z.length;_<x;_+=4)D.quadraticCurveTo(z[_+0],z[_+1],z[_+2],z[_+3]),b.x=z[_+0],b.y=z[_+1],P.x=z[_+2],P.y=z[_+3],_===0&&Y===!0&&re.copy(P);break;case"T":z=m(_e);for(let _=0,x=z.length;_<x;_+=2){const N=S(P.x,b.x),j=S(P.y,b.y);D.quadraticCurveTo(N,j,z[_+0],z[_+1]),b.x=N,b.y=j,P.x=z[_+0],P.y=z[_+1],_===0&&Y===!0&&re.copy(P)}break;case"A":z=m(_e,[3,4],7);for(let _=0,x=z.length;_<x;_+=7){if(z[_+5]==P.x&&z[_+6]==P.y)continue;const N=P.clone();P.x=z[_+5],P.y=z[_+6],b.x=P.x,b.y=P.y,o(D,z[_],z[_+1],z[_+2],z[_+3],z[_+4],N,P),_===0&&Y===!0&&re.copy(P)}break;case"m":z=m(_e);for(let _=0,x=z.length;_<x;_+=2)P.x+=z[_+0],P.y+=z[_+1],b.x=P.x,b.y=P.y,_===0?D.moveTo(P.x,P.y):D.lineTo(P.x,P.y),_===0&&re.copy(P);break;case"h":z=m(_e);for(let _=0,x=z.length;_<x;_++)P.x+=z[_],b.x=P.x,b.y=P.y,D.lineTo(P.x,P.y),_===0&&Y===!0&&re.copy(P);break;case"v":z=m(_e);for(let _=0,x=z.length;_<x;_++)P.y+=z[_],b.x=P.x,b.y=P.y,D.lineTo(P.x,P.y),_===0&&Y===!0&&re.copy(P);break;case"l":z=m(_e);for(let _=0,x=z.length;_<x;_+=2)P.x+=z[_+0],P.y+=z[_+1],b.x=P.x,b.y=P.y,D.lineTo(P.x,P.y),_===0&&Y===!0&&re.copy(P);break;case"c":z=m(_e);for(let _=0,x=z.length;_<x;_+=6)D.bezierCurveTo(P.x+z[_+0],P.y+z[_+1],P.x+z[_+2],P.y+z[_+3],P.x+z[_+4],P.y+z[_+5]),b.x=P.x+z[_+2],b.y=P.y+z[_+3],P.x+=z[_+4],P.y+=z[_+5],_===0&&Y===!0&&re.copy(P);break;case"s":z=m(_e);for(let _=0,x=z.length;_<x;_+=4)D.bezierCurveTo(S(P.x,b.x),S(P.y,b.y),P.x+z[_+0],P.y+z[_+1],P.x+z[_+2],P.y+z[_+3]),b.x=P.x+z[_+0],b.y=P.y+z[_+1],P.x+=z[_+2],P.y+=z[_+3],_===0&&Y===!0&&re.copy(P);break;case"q":z=m(_e);for(let _=0,x=z.length;_<x;_+=4)D.quadraticCurveTo(P.x+z[_+0],P.y+z[_+1],P.x+z[_+2],P.y+z[_+3]),b.x=P.x+z[_+0],b.y=P.y+z[_+1],P.x+=z[_+2],P.y+=z[_+3],_===0&&Y===!0&&re.copy(P);break;case"t":z=m(_e);for(let _=0,x=z.length;_<x;_+=2){const N=S(P.x,b.x),j=S(P.y,b.y);D.quadraticCurveTo(N,j,P.x+z[_+0],P.y+z[_+1]),b.x=N,b.y=j,P.x=P.x+z[_+0],P.y=P.y+z[_+1],_===0&&Y===!0&&re.copy(P)}break;case"a":z=m(_e,[3,4],7);for(let _=0,x=z.length;_<x;_+=7){if(z[_+5]==0&&z[_+6]==0)continue;const N=P.clone();P.x+=z[_+5],P.y+=z[_+6],b.x=P.x,b.y=P.y,o(D,z[_],z[_+1],z[_+2],z[_+3],z[_+4],N,P),_===0&&Y===!0&&re.copy(P)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(P.copy(re),D.currentPath.currentPoint.copy(P),de=!0);break;default:console.warn(le)}Y=!1}return D}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let D=0;D<O.sheet.cssRules.length;D++){const P=O.sheet.cssRules[D];if(P.type!==1)continue;const b=P.selectorText.split(/,/gm).filter(Boolean).map(re=>re.trim());for(let re=0;re<b.length;re++){const de=Object.fromEntries(Object.entries(P.style).filter(([,Y])=>Y!==""));he[b[re]]=Object.assign(he[b[re]]||{},de)}}}function o(O,D,P,b,re,de,Y,Se){if(D==0||P==0){O.lineTo(Se.x,Se.y);return}b=b*Math.PI/180,D=Math.abs(D),P=Math.abs(P);const V=(Y.x-Se.x)/2,Ie=(Y.y-Se.y)/2,ie=Math.cos(b)*V+Math.sin(b)*Ie,le=-Math.sin(b)*V+Math.cos(b)*Ie;let K=D*D,_e=P*P;const z=ie*ie,_=le*le,x=z/K+_/_e;if(x>1){const fe=Math.sqrt(x);D=fe*D,P=fe*P,K=D*D,_e=P*P}const N=K*_+_e*z,j=(K*_e-N)/N;let Z=Math.sqrt(Math.max(0,j));re===de&&(Z=-Z);const $=Z*D*le/P,ve=-Z*P*ie/D,me=Math.cos(b)*$-Math.sin(b)*ve+(Y.x+Se.x)/2,Ee=Math.sin(b)*$+Math.cos(b)*ve+(Y.y+Se.y)/2,Pe=a(1,0,(ie-$)/D,(le-ve)/P),Oe=a((ie-$)/D,(le-ve)/P,(-ie-$)/D,(-le-ve)/P)%(Math.PI*2);O.currentPath.absellipse(me,Ee,D,P,Pe,Pe+Oe,de===0,b)}function a(O,D,P,b){const re=O*P+D*b,de=Math.sqrt(O*O+D*D)*Math.sqrt(P*P+b*b);let Y=Math.acos(Math.max(-1,Math.min(1,re/de)));return O*b-D*P<0&&(Y=-Y),Y}function l(O){const D=p(O.getAttribute("x")||0),P=p(O.getAttribute("y")||0),b=p(O.getAttribute("rx")||O.getAttribute("ry")||0),re=p(O.getAttribute("ry")||O.getAttribute("rx")||0),de=p(O.getAttribute("width")),Y=p(O.getAttribute("height")),Se=1-.551915024494,V=new Dr;return V.moveTo(D+b,P),V.lineTo(D+de-b,P),(b!==0||re!==0)&&V.bezierCurveTo(D+de-b*Se,P,D+de,P+re*Se,D+de,P+re),V.lineTo(D+de,P+Y-re),(b!==0||re!==0)&&V.bezierCurveTo(D+de,P+Y-re*Se,D+de-b*Se,P+Y,D+de-b,P+Y),V.lineTo(D+b,P+Y),(b!==0||re!==0)&&V.bezierCurveTo(D+b*Se,P+Y,D,P+Y-re*Se,D,P+Y-re),V.lineTo(D,P+re),(b!==0||re!==0)&&V.bezierCurveTo(D,P+re*Se,D+b*Se,P,D+b,P),V}function c(O){function D(de,Y,Se){const V=p(Y),Ie=p(Se);re===0?b.moveTo(V,Ie):b.lineTo(V,Ie),re++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Dr;let re=0;return O.getAttribute("points").replace(P,D),b.currentPath.autoClose=!0,b}function d(O){function D(de,Y,Se){const V=p(Y),Ie=p(Se);re===0?b.moveTo(V,Ie):b.lineTo(V,Ie),re++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Dr;let re=0;return O.getAttribute("points").replace(P,D),b.currentPath.autoClose=!1,b}function h(O){const D=p(O.getAttribute("cx")||0),P=p(O.getAttribute("cy")||0),b=p(O.getAttribute("r")||0),re=new no;re.absarc(D,P,b,0,Math.PI*2);const de=new Dr;return de.subPaths.push(re),de}function f(O){const D=p(O.getAttribute("cx")||0),P=p(O.getAttribute("cy")||0),b=p(O.getAttribute("rx")||0),re=p(O.getAttribute("ry")||0),de=new no;de.absellipse(D,P,b,re,0,Math.PI*2);const Y=new Dr;return Y.subPaths.push(de),Y}function g(O){const D=p(O.getAttribute("x1")||0),P=p(O.getAttribute("y1")||0),b=p(O.getAttribute("x2")||0),re=p(O.getAttribute("y2")||0),de=new Dr;return de.moveTo(D,P),de.lineTo(b,re),de.currentPath.autoClose=!1,de}function y(O,D){D=Object.assign({},D);let P={};if(O.hasAttribute("class")){const Y=O.getAttribute("class").split(/\s/).filter(Boolean).map(Se=>Se.trim());for(let Se=0;Se<Y.length;Se++)P=Object.assign(P,he["."+Y[Se]])}O.hasAttribute("id")&&(P=Object.assign(P,he["#"+O.getAttribute("id")]));function b(Y,Se,V){V===void 0&&(V=function(ie){return ie.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),ie}),O.hasAttribute(Y)&&(D[Se]=V(O.getAttribute(Y))),P[Y]&&(D[Se]=V(P[Y])),O.style&&O.style[Y]!==""&&(D[Se]=V(O.style[Y]))}function re(Y){return Math.max(0,Math.min(1,p(Y)))}function de(Y){return Math.max(0,p(Y))}return b("fill","fill"),b("fill-opacity","fillOpacity",re),b("fill-rule","fillRule"),b("opacity","opacity",re),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",re),b("stroke-width","strokeWidth",de),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",de),b("visibility","visibility"),D}function S(O,D){return O-(D-O)}function m(O,D,P){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const b={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},re=0,de=1,Y=2,Se=3;let V=re,Ie=!0,ie="",le="";const K=[];function _e(N,j,Z){const $=new SyntaxError('Unexpected character "'+N+'" at index '+j+".");throw $.partial=Z,$}function z(){ie!==""&&(le===""?K.push(Number(ie)):K.push(Number(ie)*Math.pow(10,Number(le)))),ie="",le=""}let _;const x=O.length;for(let N=0;N<x;N++){if(_=O[N],Array.isArray(D)&&D.includes(K.length%P)&&b.FLAGS.test(_)){V=de,ie=_,z();continue}if(V===re){if(b.WHITESPACE.test(_))continue;if(b.DIGIT.test(_)||b.SIGN.test(_)){V=de,ie=_;continue}if(b.POINT.test(_)){V=Y,ie=_;continue}b.COMMA.test(_)&&(Ie&&_e(_,N,K),Ie=!0)}if(V===de){if(b.DIGIT.test(_)){ie+=_;continue}if(b.POINT.test(_)){ie+=_,V=Y;continue}if(b.EXP.test(_)){V=Se;continue}b.SIGN.test(_)&&ie.length===1&&b.SIGN.test(ie[0])&&_e(_,N,K)}if(V===Y){if(b.DIGIT.test(_)){ie+=_;continue}if(b.EXP.test(_)){V=Se;continue}b.POINT.test(_)&&ie[ie.length-1]==="."&&_e(_,N,K)}if(V===Se){if(b.DIGIT.test(_)){le+=_;continue}if(b.SIGN.test(_)){if(le===""){le+=_;continue}le.length===1&&b.SIGN.test(le)&&_e(_,N,K)}}b.WHITESPACE.test(_)?(z(),V=re,Ie=!1):b.COMMA.test(_)?(z(),V=re,Ie=!0):b.SIGN.test(_)?(z(),V=de,ie=_):b.POINT.test(_)?(z(),V=Y,ie=_):_e(_,N,K)}return z(),K}const u=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function p(O){let D="px";if(typeof O=="string"||O instanceof String)for(let b=0,re=u.length;b<re;b++){const de=u[b];if(O.endsWith(de)){D=de,O=O.substring(0,O.length-de.length);break}}let P;return D==="px"&&n.defaultUnit!=="px"?P=v.in[n.defaultUnit]/n.defaultDPI:(P=v[D][n.defaultUnit],P<0&&(P=v[D].in*n.defaultDPI)),P*parseFloat(O)}function E(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const D=R(O);return F.length>0&&D.premultiply(F[F.length-1]),pe.copy(D),F.push(D),D}function R(O){const D=new qe,P=ee;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const b=p(O.getAttribute("x")),re=p(O.getAttribute("y"));D.translate(b,re)}if(O.hasAttribute("transform")){const b=O.getAttribute("transform").split(")");for(let re=b.length-1;re>=0;re--){const de=b[re].trim();if(de==="")continue;const Y=de.indexOf("("),Se=de.length;if(Y>0&&Y<Se){const V=de.slice(0,Y),Ie=m(de.slice(Y+1));switch(P.identity(),V){case"translate":if(Ie.length>=1){const ie=Ie[0];let le=0;Ie.length>=2&&(le=Ie[1]),P.translate(ie,le)}break;case"rotate":if(Ie.length>=1){let ie=0,le=0,K=0;ie=Ie[0]*Math.PI/180,Ie.length>=3&&(le=Ie[1],K=Ie[2]),J.makeTranslation(-le,-K),ne.makeRotation(ie),U.multiplyMatrices(ne,J),J.makeTranslation(le,K),P.multiplyMatrices(J,U)}break;case"scale":if(Ie.length>=1){const ie=Ie[0];let le=ie;Ie.length>=2&&(le=Ie[1]),P.scale(ie,le)}break;case"skewX":Ie.length===1&&P.set(1,Math.tan(Ie[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Ie.length===1&&P.set(1,0,0,Math.tan(Ie[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Ie.length===6&&P.set(Ie[0],Ie[2],Ie[4],Ie[1],Ie[3],Ie[5],0,0,1);break}}D.premultiply(P)}}return D}function T(O,D){function P(Y){q.set(Y.x,Y.y,1).applyMatrix3(D),Y.set(q.x,q.y)}function b(Y){const Se=Y.xRadius,V=Y.yRadius,Ie=Math.cos(Y.aRotation),ie=Math.sin(Y.aRotation),le=new X(Se*Ie,Se*ie,0),K=new X(-V*ie,V*Ie,0),_e=le.applyMatrix3(D),z=K.applyMatrix3(D),_=ee.set(_e.x,z.x,0,_e.y,z.y,0,0,0,1),x=J.copy(_).invert(),Z=ne.copy(x).transpose().multiply(x).elements,$=G(Z[0],Z[1],Z[4]),ve=Math.sqrt($.rt1),me=Math.sqrt($.rt2);if(Y.xRadius=1/ve,Y.yRadius=1/me,Y.aRotation=Math.atan2($.sn,$.cs),!((Y.aEndAngle-Y.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Pe=J.set(ve,0,0,0,me,0,0,0,1),Oe=ne.set($.cs,$.sn,0,-$.sn,$.cs,0,0,0,1),fe=Pe.multiply(Oe).multiply(_),Ve=He=>{const{x:ke,y:Ne}=new X(Math.cos(He),Math.sin(He),0).applyMatrix3(fe);return Math.atan2(Ne,ke)};Y.aStartAngle=Ve(Y.aStartAngle),Y.aEndAngle=Ve(Y.aEndAngle),A(D)&&(Y.aClockwise=!Y.aClockwise)}}function re(Y){const Se=w(D),V=C(D);Y.xRadius*=Se,Y.yRadius*=V;const Ie=Se>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);Y.aRotation+=Ie,A(D)&&(Y.aStartAngle*=-1,Y.aEndAngle*=-1,Y.aClockwise=!Y.aClockwise)}const de=O.subPaths;for(let Y=0,Se=de.length;Y<Se;Y++){const Ie=de[Y].curves;for(let ie=0;ie<Ie.length;ie++){const le=Ie[ie];le.isLineCurve?(P(le.v1),P(le.v2)):le.isCubicBezierCurve?(P(le.v0),P(le.v1),P(le.v2),P(le.v3)):le.isQuadraticBezierCurve?(P(le.v0),P(le.v1),P(le.v2)):le.isEllipseCurve&&(Q.set(le.aX,le.aY),P(Q),le.aX=Q.x,le.aY=Q.y,H(D)?b(le):re(le))}}}function A(O){const D=O.elements;return D[0]*D[4]-D[1]*D[3]<0}function H(O){const D=O.elements,P=D[0]*D[3]+D[1]*D[4];if(P===0)return!1;const b=w(O),re=C(O);return Math.abs(P/(b*re))>Number.EPSILON}function w(O){const D=O.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function C(O){const D=O.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function G(O,D,P){let b,re,de,Y,Se;const V=O+P,Ie=O-P,ie=Math.sqrt(Ie*Ie+4*D*D);return V>0?(b=.5*(V+ie),Se=1/b,re=O*Se*P-D*Se*D):V<0?re=.5*(V-ie):(b=.5*ie,re=-.5*ie),Ie>0?de=Ie+ie:de=Ie-ie,Math.abs(de)>2*Math.abs(D)?(Se=-2*D/de,Y=1/Math.sqrt(1+Se*Se),de=Se*Y):Math.abs(D)===0?(de=1,Y=0):(Se=-.5*de/D,de=1/Math.sqrt(1+Se*Se),Y=Se*de),Ie>0&&(Se=de,de=-Y,Y=Se),{rt1:b,rt2:re,cs:de,sn:Y}}const W=[],he={},F=[],ee=new qe,J=new qe,ne=new qe,U=new qe,Q=new Ae,q=new X,pe=new qe,xe=new DOMParser().parseFromString(e,"image/svg+xml");return i(xe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:xe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(S,m,u,v){const p=S.x,E=m.x,R=u.x,T=v.x,A=S.y,H=m.y,w=u.y,C=v.y,G=(T-R)*(A-w)-(C-w)*(p-R),W=(E-p)*(A-w)-(H-A)*(p-R),he=(C-w)*(E-p)-(T-R)*(H-A),F=G/he,ee=W/he;if(he===0&&G!==0||F<=0||F>=1||ee<0||ee>1)return null;if(G===0&&he===0){for(let J=0;J<2;J++)if(o(J===0?u:v,S,m),r.loc==i.ORIGIN){const ne=J===0?u:v;return{x:ne.x,y:ne.y,t:r.t}}else if(r.loc==i.BETWEEN){const ne=+(p+r.t*(E-p)).toPrecision(10),U=+(A+r.t*(H-A)).toPrecision(10);return{x:ne,y:U,t:r.t}}return null}else{for(let U=0;U<2;U++)if(o(U===0?u:v,S,m),r.loc==i.ORIGIN){const Q=U===0?u:v;return{x:Q.x,y:Q.y,t:r.t}}const J=+(p+F*(E-p)).toPrecision(10),ne=+(A+F*(H-A)).toPrecision(10);return{x:J,y:ne,t:F}}}function o(S,m,u){const v=u.x-m.x,p=u.y-m.y,E=S.x-m.x,R=S.y-m.y,T=v*R-E*p;if(S.x===m.x&&S.y===m.y){r.loc=i.ORIGIN,r.t=0;return}if(S.x===u.x&&S.y===u.y){r.loc=i.DESTINATION,r.t=1;return}if(T<-Number.EPSILON){r.loc=i.LEFT;return}if(T>Number.EPSILON){r.loc=i.RIGHT;return}if(v*E<0||p*R<0){r.loc=i.BEHIND;return}if(Math.sqrt(v*v+p*p)<Math.sqrt(E*E+R*R)){r.loc=i.BEYOND;return}let A;v!==0?A=E/v:A=R/p,r.loc=i.BETWEEN,r.t=A}function a(S,m){const u=[],v=[];for(let p=1;p<S.length;p++){const E=S[p-1],R=S[p];for(let T=1;T<m.length;T++){const A=m[T-1],H=m[T],w=s(E,R,A,H);w!==null&&u.find(C=>C.t<=w.t+Number.EPSILON&&C.t>=w.t-Number.EPSILON)===void 0&&(u.push(w),v.push(new Ae(w.x,w.y)))}}return v}function l(S,m,u){const v=new Ae;m.getCenter(v);const p=[];return u.forEach(E=>{E.boundingBox.containsPoint(v)&&a(S,E.points).forEach(T=>{p.push({identifier:E.identifier,isCW:E.isCW,point:T})})}),p.sort((E,R)=>E.point.x-R.point.x),p}function c(S,m,u,v,p){(p==null||p==="")&&(p="nonzero");const E=new Ae;S.boundingBox.getCenter(E);const R=[new Ae(u,E.y),new Ae(v,E.y)],T=l(R,S.boundingBox,m);T.sort((W,he)=>W.point.x-he.point.x);const A=[],H=[];T.forEach(W=>{W.identifier===S.identifier?A.push(W):H.push(W)});const w=A[0].point.x,C=[];let G=0;for(;G<H.length&&H[G].point.x<w;)C.length>0&&C[C.length-1]===H[G].identifier?C.pop():C.push(H[G].identifier),G++;if(C.push(S.identifier),p==="evenodd"){const W=C.length%2===0,he=C[C.length-2];return{identifier:S.identifier,isHole:W,for:he}}else if(p==="nonzero"){let W=!0,he=null,F=null;for(let ee=0;ee<C.length;ee++){const J=C[ee];W?(F=m[J].isCW,W=!1,he=J):F!==m[J].isCW&&(F=m[J].isCW,W=!0)}return{identifier:S.identifier,isHole:W,for:he}}else console.warn('fill-rule: "'+p+'" is currently not implemented.')}let d=999999999,h=-999999999,f=e.subPaths.map(S=>{const m=S.getPoints();let u=-999999999,v=999999999,p=-999999999,E=999999999;for(let R=0;R<m.length;R++){const T=m[R];T.y>u&&(u=T.y),T.y<v&&(v=T.y),T.x>p&&(p=T.x),T.x<E&&(E=T.x)}return h<=p&&(h=p+1),d>=E&&(d=E-1),{curves:S.curves,points:m,isCW:gu.isClockWise(m),identifier:-1,boundingBox:new oR(new Ae(E,v),new Ae(p,u))}});f=f.filter(S=>S.points.length>1);for(let S=0;S<f.length;S++)f[S].identifier=S;const g=f.map(S=>c(S,f,d,h,e.userData?e.userData.style.fillRule:void 0)),y=[];return f.forEach(S=>{if(!g[S.identifier].isHole){const u=new ic;u.curves=S.curves,g.filter(p=>p.isHole&&p.for===S.identifier).forEach(p=>{const E=f[p.identifier],R=new no;R.curves=E.curves,u.holes.push(R)}),y.push(u)}}),y}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Fc.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new li;return l.setAttribute("position",new tn(s,3)),l.setAttribute("normal",new tn(o,3)),l.setAttribute("uv",new tn(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const c=new Ae,d=new Ae,h=new Ae,f=new Ae,g=new Ae,y=new Ae,S=new Ae,m=new Ae,u=new Ae,v=new Ae,p=new Ae,E=new Ae,R=new Ae,T=new Ae,A=new Ae,H=new Ae,w=new Ae;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=Ie(e);const C=e.length;if(C<2)return 0;const G=e[0].equals(e[C-1]);let W,he=e[0],F;const ee=n.strokeWidth/2,J=1/(C-1);let ne=0,U,Q,q,pe,xe=!1,oe=0,O=l*3,D=l*2;P(e[0],e[1],c).multiplyScalar(ee),m.copy(e[0]).sub(c),u.copy(e[0]).add(c),v.copy(m),p.copy(u);for(let ie=1;ie<C;ie++){W=e[ie],ie===C-1?G?F=e[1]:F=void 0:F=e[ie+1];const le=c;if(P(he,W,le),h.copy(le).multiplyScalar(ee),E.copy(W).sub(h),R.copy(W).add(h),U=ne+J,Q=!1,F!==void 0){P(W,F,d),h.copy(d).multiplyScalar(ee),T.copy(W).sub(h),A.copy(W).add(h),q=!0,h.subVectors(F,he),le.dot(h)<0&&(q=!1),ie===1&&(xe=q),h.subVectors(F,W),h.normalize();const K=Math.abs(le.dot(h));if(K>Number.EPSILON){const _e=ee/K;h.multiplyScalar(-_e),f.subVectors(W,he),g.copy(f).setLength(_e).add(h),H.copy(g).negate();const z=g.length(),_=f.length();f.divideScalar(_),y.subVectors(F,W);const x=y.length();switch(y.divideScalar(x),f.dot(H)<_&&y.dot(H)<x&&(Q=!0),w.copy(g).add(W),H.add(W),pe=!1,Q?q?(A.copy(H),R.copy(H)):(T.copy(H),E.copy(H)):de(),n.strokeLineJoin){case"bevel":Y(q,Q,U);break;case"round":Se(q,Q),q?re(W,E,T,U,0):re(W,A,R,U,1);break;case"miter":case"miter-clip":default:const N=ee*n.strokeMiterLimit/z;if(N<1)if(n.strokeLineJoin!=="miter-clip"){Y(q,Q,U);break}else Se(q,Q),q?(y.subVectors(w,E).multiplyScalar(N).add(E),S.subVectors(w,T).multiplyScalar(N).add(T),b(E,U,0),b(y,U,0),b(W,U,.5),b(W,U,.5),b(y,U,0),b(S,U,0),b(W,U,.5),b(S,U,0),b(T,U,0)):(y.subVectors(w,R).multiplyScalar(N).add(R),S.subVectors(w,A).multiplyScalar(N).add(A),b(R,U,1),b(y,U,1),b(W,U,.5),b(W,U,.5),b(y,U,1),b(S,U,1),b(W,U,.5),b(S,U,1),b(A,U,1));else Q?(q?(b(u,ne,1),b(m,ne,0),b(w,U,0),b(u,ne,1),b(w,U,0),b(H,U,1)):(b(u,ne,1),b(m,ne,0),b(w,U,1),b(m,ne,0),b(H,U,0),b(w,U,1)),q?T.copy(w):A.copy(w)):q?(b(E,U,0),b(w,U,0),b(W,U,.5),b(W,U,.5),b(w,U,0),b(T,U,0)):(b(R,U,1),b(w,U,1),b(W,U,.5),b(W,U,.5),b(w,U,1),b(A,U,1)),pe=!0;break}}else de()}else de();!G&&ie===C-1&&V(e[0],v,p,q,!0,ne),ne=U,he=W,m.copy(T),u.copy(A)}if(!G)V(W,E,R,q,!1,U);else if(Q&&s){let ie=w,le=H;xe!==q&&(ie=H,le=w),q?(pe||xe)&&(le.toArray(s,0*3),le.toArray(s,3*3),pe&&ie.toArray(s,1*3)):(pe||!xe)&&(le.toArray(s,1*3),le.toArray(s,3*3),pe&&ie.toArray(s,0*3))}return oe;function P(ie,le,K){return K.subVectors(le,ie),K.set(-K.y,K.x).normalize()}function b(ie,le,K){s&&(s[O]=ie.x,s[O+1]=ie.y,s[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[D]=le,a[D+1]=K,D+=2)),oe+=3}function re(ie,le,K,_e,z){c.copy(le).sub(ie).normalize(),d.copy(K).sub(ie).normalize();let _=Math.PI;const x=c.dot(d);Math.abs(x)<1&&(_=Math.abs(Math.acos(x))),_/=i,h.copy(le);for(let N=0,j=i-1;N<j;N++)f.copy(h).rotateAround(ie,_),b(h,_e,z),b(f,_e,z),b(ie,_e,.5),h.copy(f);b(f,_e,z),b(K,_e,z),b(ie,_e,.5)}function de(){b(u,ne,1),b(m,ne,0),b(E,U,0),b(u,ne,1),b(E,U,1),b(R,U,0)}function Y(ie,le,K){le?ie?(b(u,ne,1),b(m,ne,0),b(E,U,0),b(u,ne,1),b(E,U,0),b(H,U,1),b(E,K,0),b(T,K,0),b(H,K,.5)):(b(u,ne,1),b(m,ne,0),b(R,U,1),b(m,ne,0),b(H,U,0),b(R,U,1),b(R,K,1),b(H,K,0),b(A,K,1)):ie?(b(E,K,0),b(T,K,0),b(W,K,.5)):(b(R,K,1),b(A,K,0),b(W,K,.5))}function Se(ie,le){le&&(ie?(b(u,ne,1),b(m,ne,0),b(E,U,0),b(u,ne,1),b(E,U,0),b(H,U,1),b(E,ne,0),b(W,U,.5),b(H,U,1),b(W,U,.5),b(T,ne,0),b(H,U,1)):(b(u,ne,1),b(m,ne,0),b(R,U,1),b(m,ne,0),b(H,U,0),b(R,U,1),b(R,ne,1),b(H,U,0),b(W,U,.5),b(W,U,.5),b(H,U,0),b(A,ne,1)))}function V(ie,le,K,_e,z,_){switch(n.strokeLineCap){case"round":z?re(ie,K,le,_,.5):re(ie,le,K,_,.5);break;case"square":if(z)c.subVectors(le,ie),d.set(c.y,-c.x),h.addVectors(c,d).add(ie),f.subVectors(d,c).add(ie),_e?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(K,ie),d.set(c.y,-c.x),h.addVectors(c,d).add(ie),f.subVectors(d,c).add(ie);const x=s.length;_e?(h.toArray(s,x-1*3),f.toArray(s,x-2*3),f.toArray(s,x-4*3)):(f.toArray(s,x-2*3),h.toArray(s,x-1*3),f.toArray(s,x-4*3))}break}}function Ie(ie){let le=!1;for(let _e=1,z=ie.length-1;_e<z;_e++)if(ie[_e].distanceTo(ie[_e+1])<r){le=!0;break}if(!le)return ie;const K=[];K.push(ie[0]);for(let _e=1,z=ie.length-1;_e<z;_e++)ie[_e].distanceTo(ie[_e+1])>=r&&K.push(ie[_e]);return K.push(ie[ie.length-1]),K}}}const zl=100,Nd=3,Go=7,dv=.5,hv=25,uR=1500,dR=2,hR=.15,fR=.12,Is={water:{r:17,g:22,b:41},land:{r:54,g:63,b:84}},Kt="#9333ea";function pR({cards:t,selectedCards:e,autoRotate:n,onMarkerClick:i,onMarkerVisibilityChange:r,onInteraction:s,focusCardId:o,onFocusLost:a,visibleCardIds:l}){const c=se.useRef(null),d=se.useRef(null),h=se.useRef(null),f=se.useRef(null),g=se.useRef(null),y=se.useRef(null),S=se.useRef(null),m=se.useRef([]),u=se.useRef(null),v=se.useRef(0),p=se.useRef({}),E=se.useRef({}),R=se.useRef({}),T=se.useRef(null),A=se.useRef(e),H=se.useRef(r),w=se.useRef(s),C=se.useRef(!1),G=se.useRef(o),[W,he]=se.useState(!1),F=se.useRef(null),ee=se.useRef(null),J=se.useRef(null),ne=se.useRef(l),U=se.useRef(new Map),Q=se.useRef({}),q=se.useRef({}),pe=se.useRef({});se.useRef(new X),se.useRef(new X);const xe=se.useRef(new X),oe=se.useRef(new X);se.useRef(new Ae);const O=se.useRef(new X);se.useEffect(()=>{A.current=e},[e]),se.useEffect(()=>{G.current=o},[o]),se.useEffect(()=>{H.current=r},[r]),se.useEffect(()=>{w.current=s},[s]),se.useEffect(()=>{ne.current=l},[l]);const D=se.useCallback(()=>{const N=document.createElement("canvas");N.width=4096,N.height=4096/2;const j=N.getContext("2d");j.fillStyle="#000003",j.fillRect(0,0,N.width,N.height);for(let Z=0;Z<2500;Z++){const $=Math.random()*N.width,ve=Math.random()*N.height,me=Math.random()*1.2+.3,Ee=Math.random();let Pe,Oe,fe;const Ve=Math.random();Ve<.7?Pe=Oe=fe=180+Math.random()*50:Ve<.85?(Pe=160+Math.random()*40,Oe=180+Math.random()*40,fe=220):(Pe=220,Oe=210+Math.random()*20,fe=160+Math.random()*40),j.beginPath(),j.arc($,ve,me,0,Math.PI*2),j.fillStyle=`rgba(${Pe}, ${Oe}, ${fe}, ${(.2+Ee*.4)*.6})`,j.fill()}return new Ps(N)},[]),P=se.useCallback(x=>{const j=document.createElement("canvas");j.width=2048,j.height=2048/2;const Z=j.getContext("2d",{willReadFrequently:!0});Z.drawImage(x,0,0,j.width,j.height);const ve=Z.getImageData(0,0,j.width,j.height).data,me=document.createElement("canvas");me.width=2048,me.height=2048/2;const Ee=me.getContext("2d"),Pe=Ee.createImageData(2048,2048/2),Oe=Pe.data,fe=document.createElement("canvas");fe.width=2048,fe.height=2048/2;const Ve=fe.getContext("2d"),He=Ve.createImageData(2048,2048/2),ke=He.data;for(let L=0;L<ve.length;L+=4){const De=ve[L]>100;Oe[L]=Oe[L+1]=Oe[L+2]=De?0:255,Oe[L+3]=255,De?(ke[L]=Is.water.r,ke[L+1]=Is.water.g,ke[L+2]=Is.water.b):(ke[L]=Is.land.r,ke[L+1]=Is.land.g,ke[L+2]=Is.land.b),ke[L+3]=255}Ee.putImageData(Pe,0,0),Ve.putImageData(He,0,0);const Ne=document.createElement("canvas");Ne.width=2048,Ne.height=2048/2;const Te=Ne.getContext("2d");return Te.filter="blur(1px)",Te.drawImage(me,0,0),{colorTexture:new Ps(fe),displacementTexture:new Ps(Ne)}},[]),b=se.useCallback((x=Kt)=>{const N=document.createElement("canvas");N.width=128,N.height=128;const j=N.getContext("2d");j.fillStyle=x,j.beginPath();for(let Z=0;Z<10;Z++){const $=Z%2===0?60:25,ve=Z*Math.PI/5-Math.PI/2,me=64+Math.cos(ve)*$,Ee=64+Math.sin(ve)*$;Z===0?j.moveTo(me,Ee):j.lineTo(me,Ee)}return j.closePath(),j.fill(),new Ps(N)},[]),re=se.useCallback((x=Kt)=>new Promise(N=>{if(x===Kt){const j=new Image;j.onload=()=>{const $=document.createElement("canvas");$.width=128,$.height=128,$.getContext("2d").drawImage(j,0,0,128,128),N(new Ps($))},j.onerror=()=>{N(b(x))};const Z="/anking-globe/";j.src=Z+"star.svg"}else N(b(x))}),[b]),de=se.useCallback((x=Kt)=>{const N=document.createElement("canvas");N.width=128,N.height=128;const j=N.getContext("2d");let Z=147,$=51,ve=234;if(x.startsWith("#")){const Ee=x.slice(1);Z=parseInt(Ee.slice(0,2),16),$=parseInt(Ee.slice(2,4),16),ve=parseInt(Ee.slice(4,6),16)}const me=j.createRadialGradient(64,64,0,64,64,64);return me.addColorStop(0,`rgba(${Z}, ${$}, ${ve}, 0.5)`),me.addColorStop(.3,`rgba(${Z}, ${$}, ${ve}, 0.2)`),me.addColorStop(.6,`rgba(${Z}, ${$}, ${ve}, 0.05)`),me.addColorStop(1,`rgba(${Z}, ${$}, ${ve}, 0)`),j.fillStyle=me,j.fillRect(0,0,128,128),new Ps(N)},[]),Y=se.useCallback(x=>{let N=147,j=51,Z=234;if(x.startsWith("#")){const $=x.slice(1);N=parseInt($.slice(0,2),16),j=parseInt($.slice(2,4),16),Z=parseInt($.slice(4,6),16)}return{r:N,g:j,b:Z}},[]),Se=se.useCallback(()=>{const j=new Fc().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z"/></svg>'),$=Fc.createShapes(j.paths[0])[0],ve=11.04/2,me=11.53/2,Ee=Math.max(11.04,11.53),Pe=Go/Ee,fe=$.getPoints(32).map(De=>({x:(De.x-ve)*Pe,y:-(De.y-me)*Pe})),Ve=20,He=fe.length,ke=[],Ne=[],Te=[];for(let De=0;De<=Ve;De++){const Re=De/Ve,ye=Re*hv,B=1+Re*1.2;for(let we=0;we<He;we++){const Le=fe[we];ke.push(Le.x*B,Le.y*B,ye),Ne.push(we/He,Re)}ke.push(0,0,ye),Ne.push(.5,Re)}const L=He+1;for(let De=0;De<Ve;De++){const Re=De*L,ye=(De+1)*L;for(let B=0;B<He;B++){const we=Re+B,Le=Re+(B+1)%He,k=ye+B,ge=ye+(B+1)%He;Te.push(we,Le,k),Te.push(Le,ge,k)}}const Me=new li;return Me.setAttribute("position",new tn(ke,3)),Me.setAttribute("uv",new tn(Ne,2)),Me.setIndex(Te),Me.computeVertexNormals(),Me},[]),V=se.useCallback((x=Kt)=>{const{r:N,g:j,b:Z}=Y(x),$=Se(),ve=new Ui({uniforms:{color:{value:new nt(N/255,j/255,Z/255)},opacity:{value:.35},rayLength:{value:hv}},vertexShader:`
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
      `,transparent:!0,side:In,depthWrite:!1,blending:ia}),me=new ln($,ve);return me.position.z=.3,me.userData={type:"beam"},me},[Y,Se]),Ie=se.useCallback((x,N,j,Z=[])=>{const $=new Xs,ve=new Xs;let me=0;for(let ye=0;ye<x.id.length;ye++)me=(me<<5)-me+x.id.charCodeAt(ye),me|=0;const Ee=Math.abs(me)%1e3/1e3*Math.PI*2;ve.rotation.z=Ee,ve.userData={type:"starContainer",baseRotation:Ee};const Pe=new ln(new Ra(Go*2.5,Go*2.5),new sa({map:j,transparent:!0,opacity:.3,side:In,depthWrite:!1,blending:ia}));Pe.position.z=.1,Pe.userData={type:"glow"};const Oe=new ln(new Ra(Go,Go),new sa({map:N,transparent:!0,opacity:1,side:In,depthWrite:!1}));Oe.position.z=.2,Oe.userData={type:"star"},ve.add(Pe),ve.add(Oe),$.add(ve);const fe=x.starColor||Kt,Ve=V(fe);$.add(Ve),Ve.rotation.z=Ee,pe.current[x.id]=1;let He=x.lat,ke=x.lng;const Ne=8,Te=2.5;let L=0;const Me=8;for(;L<Me;){const ye=(90-He)*(Math.PI/180),B=(ke+180)*(Math.PI/180),we=zl+Nd+dv,Le=new X(-we*Math.sin(ye)*Math.cos(B),we*Math.cos(ye),we*Math.sin(ye)*Math.sin(B));let k=!1;for(const ze of Z)if(Le.distanceTo(ze.position)<Ne){k=!0;break}if(!k){$.position.copy(Le);break}const ge=L*Math.PI/4,be=Te*(1+L*.3);He=x.lat+Math.sin(ge)*be,ke=x.lng+Math.cos(ge)*be,L++}if(L>=Me){const ye=(90-x.lat)*(Math.PI/180),B=(x.lng+180)*(Math.PI/180),we=zl+Nd+dv;$.position.set(-we*Math.sin(ye)*Math.cos(B),we*Math.cos(ye),we*Math.sin(ye)*Math.sin(B))}const De=$.position.clone().normalize(),Re=$.position.clone().add(De);return $.lookAt(Re),$.userData={card:x},E.current[x.id]=1,U.current.set(x.id,{starContainer:ve,starMesh:Oe,glowMesh:Pe,beam:Ve}),$},[V]),ie=se.useCallback((x,N,j)=>{var Oe;xe.current.subVectors(N,x).normalize(),oe.current.copy(x).normalize();const Z=xe.current.dot(oe.current),ve=((Oe=p.current[j])==null?void 0:Oe.visible)??!1?Z>-.15:Z>0;if(!ve)return{visible:!1,targetOpacity:0,scale:0};let me=1;Z<.2&&(me=Math.max(0,(Z+.15)/.35));const Ee=N.distanceTo(x),Pe=Math.max(.6,Math.min(1,280/Ee));return{visible:ve,targetOpacity:me,scale:Pe}},[]),le=se.useCallback(x=>{const N=h.current,j=f.current;if(!N||!j)return;const Z=(90-x.lat)*(Math.PI/180),$=(x.lng+180)*(Math.PI/180),ve=new X(-220*Math.sin(Z)*Math.cos($),220*Math.cos(Z),220*Math.sin(Z)*Math.sin($)),me=N.position.clone(),Ee=j.target.clone(),Pe=new X(0,0,0),Oe=performance.now(),fe=2e3,Ve=He=>{const ke=He-Oe;let Ne=Math.min(ke/fe,1);if(Ne>=1){N.position.copy(ve),j.target.set(0,0,0),j.update();return}const Te=Ne<.5?16*Ne*Ne*Ne*Ne*Ne:1-Math.pow(-2*Ne+2,5)/2;N.position.lerpVectors(me,ve,Te),j.target.lerpVectors(Ee,Pe,Te),j.update(),requestAnimationFrame(Ve)};requestAnimationFrame(Ve)},[]);se.useCallback((x,N,j)=>{xe.current.subVectors(j,x);const Z=xe.current.dot(N);return Z<0?1/0:(oe.current.copy(N).multiplyScalar(Z).add(x),oe.current.distanceTo(j))},[]);const K=se.useCallback((x,N)=>{const j=h.current,Z=c.current,$=m.current;if(!j||!Z||$.length===0)return null;const ve=Z.getBoundingClientRect(),me=x-ve.left,Ee=N-ve.top;let Pe=null,Oe=25;for(const fe of $){if(!fe.visible)continue;const Ve=fe.userData.card;if(!Ve||(E.current[Ve.id]??0)<.3)continue;O.current.copy(fe.position).project(j);const ke=(O.current.x*.5+.5)*ve.width,Ne=(-O.current.y*.5+.5)*ve.height,Te=me-ke,L=Ee-Ne,Me=Math.sqrt(Te*Te+L*L);Me<Oe&&(Oe=Me,Pe=Ve)}return Pe},[]);se.useEffect(()=>{if(o&&o!==u.current&&t.length>0){u.current=o;const x=parseInt(o.split("-")[0],10),N=t.find(j=>j.id===x);N&&le(N)}},[o,t,le]),se.useEffect(()=>{if(!c.current||C.current)return;C.current=!0;const x=c.current,N=new EC;N.background=new nt(3),d.current=N;const j=new Pn(45,x.clientWidth/x.clientHeight,1,3e3);j.position.z=320,h.current=j;const Z=new ky({antialias:!0,powerPreference:"high-performance"});Z.setSize(x.clientWidth,x.clientHeight),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.appendChild(Z.domElement),g.current=Z;const $=new lR(j,Z.domElement);$.enableDamping=!0,$.dampingFactor=.05,$.minDistance=150,$.maxDistance=600,$.enablePan=!1,$.autoRotateSpeed=.5,f.current=$,$.addEventListener("start",()=>{w.current&&w.current()});const ve=new MutationObserver(Te=>{for(const L of Te)if(L.type==="attributes"&&L.attributeName==="style"){const Me=L.target;Me.style.cursor&&Me.style.cursor!==""&&(Me.style.cursor="")}});ve.observe(Z.domElement,{attributes:!0,attributeFilter:["style"]});const me=new ln(new la(uR,64,32),new sa({map:D(),side:$t,transparent:!0,opacity:.7}));N.add(me),y.current=me;const Ee=new ln(new la(zl,200,100),new tv({color:1119785}));N.add(Ee);const Pe=new Image;Pe.crossOrigin="anonymous",Pe.onload=()=>{const{colorTexture:Te,displacementTexture:L}=P(Pe);Ee.material.dispose(),Ee.material=new tv({map:Te,displacementMap:L,displacementScale:Nd,roughness:.85,metalness:.05})};const Oe="/anking-globe/";Pe.src=Oe+"earth_specular.png",N.add(new ln(new la(zl+18,32,32),new Ui({vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }",blending:ia,side:$t,transparent:!0}))),N.add(new sR(10053324,.25));const fe=new sv(16772829,1);fe.position.set(300,100,200),N.add(fe),S.current=fe,N.add(new sv(9647082,.2).translateX(-200).translateY(-100).translateZ(-200));const Ve=de(Kt);T.current=Ve,re(Kt).then(Te=>{R.current[Kt]=Te});const He=()=>{j.aspect=x.clientWidth/x.clientHeight,j.updateProjectionMatrix(),Z.setSize(x.clientWidth,x.clientHeight)};window.addEventListener("resize",He);let ke;const Ne=Te=>{var ge;if(ke=requestAnimationFrame(Ne),$.update(),v.current++,y.current&&(y.current.rotation.y=-j.rotation.y*.1,y.current.rotation.x=-j.rotation.x*.05),S.current){const be=Te*1e-4;S.current.position.set(Math.cos(be)*400,Math.sin(be*.3)*100+50,Math.sin(be)*400)}const L=Te*5e-4,Me=m.current,De=A.current,Re=Q.current,ye=j.position,B=x.clientWidth,we=x.clientHeight;let Le=!1;const k=2;for(let be=0;be<Me.length;be++){const ze=Me[be],We=ze.userData.card;if(!We)continue;const it=ne.current,tt=it===null||it.has(We.id),{visible:_t,targetOpacity:wn,scale:us}=ie(ze.position,ye,We.id);p.current[We.id]={visible:_t};const xu=tt?wn:0,Ar=E.current[We.id]??1,pn=Ar+(xu-Ar)*hR;E.current[We.id]=pn,ze.visible=pn>.01;const br=De==null?void 0:De.includes(We.id),bo=pe.current[We.id]??1,Co=bo+((br?0:1)-bo)*fR;pe.current[We.id]=Co;const Ya=U.current.get(We.id);if(Ya){const{starContainer:ce,starMesh:ue,glowMesh:ae,beam:Fe}=Ya;if(br){if(ze.scale.setScalar(.7*us),ce){const Ge=ce.userData.baseRotation||0;ce.rotation.z=Ge+L}ue.material.opacity=pn,ae.material.opacity=.6*pn,ae.scale.setScalar(1.8),Fe.material.uniforms&&(Fe.material.uniforms.opacity.value=Co*.35*pn)}else ze.scale.setScalar(us),ue.material.opacity=pn,ae.material.opacity=.3*pn,ae.scale.setScalar(1),Fe.material.uniforms&&(Fe.material.uniforms.opacity.value=Co*.35*pn)}O.current.copy(ze.position).project(j);const Ka=(O.current.x*.5+.5)*B,I=(-O.current.y*.5+.5)*we,te=q.current[We.id];(!te||Math.abs(te.screenPos.x-Ka)>k||Math.abs(te.screenPos.y-I)>k||Math.abs(te.opacity-pn)>.02||te.visible!==ze.visible)&&(Le=!0),Re[We.id]||(Re[We.id]={visible:!1,screenPos:{x:0,y:0},scale:1,opacity:0}),Re[We.id].visible=ze.visible,Re[We.id].screenPos.x=Ka,Re[We.id].screenPos.y=I,Re[We.id].scale=us,Re[We.id].opacity=pn}if(Me.length>0&&v.current%dR===0&&Le){for(const be in Re)q.current[be]||(q.current[be]={screenPos:{x:0,y:0},opacity:0,visible:!1}),q.current[be].screenPos.x=Re[be].screenPos.x,q.current[be].screenPos.y=Re[be].screenPos.y,q.current[be].opacity=Re[be].opacity,q.current[be].visible=Re[be].visible;(ge=H.current)==null||ge.call(H,{...Re})}Z.render(N,j)};return Ne(0),()=>{window.removeEventListener("resize",He),cancelAnimationFrame(ke),ve.disconnect(),N.traverse(Te=>{Te.geometry&&Te.geometry.dispose(),Te.material&&(Array.isArray(Te.material)?Te.material.forEach(L=>L.dispose()):Te.material.dispose())}),Z.dispose(),x&&Z.domElement.parentNode===x&&x.removeChild(Z.domElement),U.current.clear(),C.current=!1}},[]),se.useEffect(()=>()=>{J.current&&cancelAnimationFrame(J.current)},[]),se.useEffect(()=>{if(f.current){const x=n&&!W&&(!e||e.length===0)&&!o;f.current.autoRotate=x}},[n,W,e,o]),se.useEffect(()=>{if(!(!h.current||!f.current)){if(o){F.current||(F.current=h.current.position.clone());const x=m.current.find(N=>{var j;return((j=N.userData.card)==null?void 0:j.id)===o});if(x){const j=x.position.clone().normalize().multiplyScalar(160),Z=h.current.position.clone(),$=600,ve=Date.now();let me=!1;const Ee=()=>{if(me||!G.current)return;const Pe=Date.now()-ve,Oe=Math.min(Pe/$,1),fe=1-Math.pow(1-Oe,3);h.current.position.lerpVectors(Z,j,fe),f.current.update(),Oe<1&&requestAnimationFrame(Ee)};return Ee(),()=>{me=!0}}}else if(F.current){const x=h.current.position.clone(),N=F.current,j=600,Z=Date.now();F.current=null;let $=!1;const ve=()=>{if($)return;const me=Date.now()-Z,Ee=Math.min(me/j,1),Pe=1-Math.pow(1-Ee,3);h.current.position.lerpVectors(x,N,Pe),f.current.update(),Ee<1&&requestAnimationFrame(ve)};return ve(),()=>{$=!0}}}},[o]),se.useEffect(()=>{if(!f.current||!c.current)return;let x=null;const N=ve=>{x={x:ve.clientX,y:ve.clientY}},j=ve=>{if(!x)return;const me=ve.clientX-x.x,Ee=ve.clientY-x.y;Math.sqrt(me*me+Ee*Ee)>5&&(G.current&&a&&a(),x=null)},Z=()=>{x=null},$=c.current;return $.addEventListener("mousedown",N),$.addEventListener("mousemove",j),$.addEventListener("mouseup",Z),()=>{$.removeEventListener("mousedown",N),$.removeEventListener("mousemove",j),$.removeEventListener("mouseup",Z)}},[a]),se.useEffect(()=>{!d.current||!T.current||R.current[Kt]&&(m.current.forEach(x=>{x.traverse(N=>{N.geometry&&N.geometry.dispose(),N.material&&N.material.dispose()}),d.current.remove(x)}),m.current=[],E.current={},pe.current={},U.current.clear(),Q.current={},q.current={},t.forEach(x=>{const N=x.starColor||Kt,j=R.current[N]||R.current[Kt],Z=de(N),$=Ie(x,j,Z,m.current);d.current.add($),m.current.push($)}))},[t,Ie,de]),se.useEffect(()=>{const x=setInterval(()=>{R.current[Kt]&&d.current&&m.current.length===0&&t.length>0&&(t.forEach(N=>{const j=N.starColor||Kt,Z=R.current[j]||R.current[Kt],$=de(j),ve=Ie(N,Z,$,m.current);d.current.add(ve),m.current.push(ve)}),clearInterval(x))},100);return()=>clearInterval(x)},[t,Ie,de]);const _e=se.useCallback(x=>{const N=K(x.clientX,x.clientY);N&&i(N)},[i,K]),z=se.useCallback(x=>{const N=K(x.clientX,x.clientY),j=(N==null?void 0:N.id)??null;j!==ee.current&&(ee.current=j,J.current&&cancelAnimationFrame(J.current),J.current=requestAnimationFrame(()=>{he(j!==null),J.current=null}))},[K]),_=se.useCallback(()=>{J.current&&cancelAnimationFrame(J.current),ee.current=null,he(!1)},[]);return M.jsx("div",{ref:c,className:`globe-canvas ${W?"hovering-star":""}`,onClick:_e,onPointerMove:z,onPointerLeave:_})}function mR({cards:t=[],groups:e=[],selectedCards:n=[],visibleCardIds:i=null,autoRotate:r,onAutoRotateChange:s,onToggleCard:o,onToggleCardVisibility:a,onOpenAll:l,onCloseAll:c,onManageClick:d,isEmbedMode:h}){const[f,g]=se.useState(!1),[y,S]=se.useState({}),[m,u]=se.useState(!1),v=se.useMemo(()=>i===null?new Set(t.map(G=>G.id)):i,[i,t]),p=se.useMemo(()=>t.length>0&&t.every(G=>v.has(G.id)),[t,v]),E=se.useMemo(()=>{const G=t.filter(W=>v.has(W.id)).length;return G>0&&G<t.length},[t,v]),R=G=>t.filter(W=>{var he;return(he=G.memberIds)==null?void 0:he.includes(W.id)}),T=G=>{const W=R(G);return W.length>0&&W.every(he=>v.has(he.id))},A=G=>{const W=R(G),he=W.filter(F=>v.has(F.id)).length;return he>0&&he<W.length},H=G=>{S(W=>({...W,[G]:!W[G]}))},w=()=>{const G=p;t.forEach(W=>{G?v.has(W.id)&&(a==null||a(W.id)):v.has(W.id)||a==null||a(W.id)})},C=G=>{const W=R(G),he=T(G);!he&&p&&t.forEach(F=>{v.has(F.id)&&(a==null||a(F.id))}),W.forEach(F=>{he?v.has(F.id)&&(a==null||a(F.id)):v.has(F.id)||a==null||a(F.id)})};return h?null:M.jsxs(M.Fragment,{children:[M.jsx("button",{className:"controls-toggle",onClick:()=>g(!f),children:M.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("circle",{cx:"12",cy:"12",r:"3"}),M.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),f&&M.jsxs("div",{className:"controls-panel",children:[M.jsx("h3",{children:"Settings"}),M.jsx("div",{className:"control-item",children:M.jsxs("label",{className:"toggle-label",children:[M.jsx("span",{children:"Auto Rotate"}),M.jsxs("div",{className:"toggle-switch",children:[M.jsx("input",{type:"checkbox",checked:r,onChange:G=>s==null?void 0:s(G.target.checked)}),M.jsx("span",{className:"toggle-slider"})]})]})}),M.jsx("div",{className:"control-divider"}),M.jsxs("div",{className:"dropdown-actions",style:{marginBottom:"12px"},children:[M.jsxs("button",{className:"dropdown-action-btn",onClick:l,children:[M.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),M.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show Cards"]}),M.jsxs("button",{className:"dropdown-action-btn",onClick:c,children:[M.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),M.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide Cards"]})]}),M.jsx("div",{className:"control-divider"}),M.jsxs("div",{className:"groups-section",children:[M.jsx("div",{className:"section-label",children:"Groups"}),M.jsxs("div",{className:"group-dropdown",children:[M.jsxs("div",{className:"group-header",onClick:()=>u(!m),children:[M.jsx("div",{className:"group-checkbox-wrapper",onClick:G=>G.stopPropagation(),children:M.jsx("input",{type:"checkbox",checked:p,ref:G=>{G&&(G.indeterminate=E)},onChange:w})}),M.jsx("span",{className:"group-label-text",children:"All Members"}),M.jsxs("span",{className:"group-count",children:["(",t.length,")"]}),M.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:m?"rotate(180deg)":"none",transition:"transform 0.2s",marginLeft:"auto"},children:M.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),m&&M.jsx("div",{className:"group-members",children:t.map(G=>M.jsxs("label",{className:"member-checkbox-item",children:[M.jsx("input",{type:"checkbox",checked:v.has(G.id),onChange:()=>a==null?void 0:a(G.id)}),M.jsx("span",{className:"member-label-text",children:G.name}),n.includes(G.id)&&M.jsx("span",{className:"card-open-indicator",children:"●"})]},G.id))})]}),e.map(G=>{const W=R(G),he=y[G.id],F=T(G),ee=A(G);return M.jsxs("div",{className:"group-dropdown",children:[M.jsxs("div",{className:"group-header",onClick:()=>H(G.id),children:[M.jsx("div",{className:"group-checkbox-wrapper",onClick:J=>J.stopPropagation(),children:M.jsx("input",{type:"checkbox",checked:F,ref:J=>{J&&(J.indeterminate=ee)},onChange:()=>C(G)})}),M.jsx("span",{className:"group-label-text",children:G.name}),M.jsxs("span",{className:"group-count",children:["(",W.length,")"]}),M.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:he?"rotate(180deg)":"none",transition:"transform 0.2s",marginLeft:"auto"},children:M.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),he&&M.jsx("div",{className:"group-members",children:W.length===0?M.jsx("div",{className:"empty-group",children:"No members"}):W.map(J=>M.jsxs("label",{className:"member-checkbox-item",children:[M.jsx("input",{type:"checkbox",checked:v.has(J.id),onChange:()=>a==null?void 0:a(J.id)}),M.jsx("span",{className:"member-label-text",children:J.name}),n.includes(J.id)&&M.jsx("span",{className:"card-open-indicator",children:"●"})]},J.id))})]},G.id)})]}),M.jsx("div",{className:"control-divider"}),M.jsxs("button",{className:"manage-btn",onClick:d,children:[M.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),M.jsx("circle",{cx:"9",cy:"7",r:"4"}),M.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),M.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Manage Members"]})]})]})}const wt="https://api-efgn5mw6aq-uc.a.run.app";function $h(t){return t?t.startsWith("http")?t:`https://storage.googleapis.com/anking-globe.appspot.com/cards/${t}`:""}async function gR(){const t=await fetch(`${wt}/cards`);if(!t.ok)throw new Error("Failed to fetch cards");return t.json()}const vR=se.memo(function({card:e,visibilityData:n,onClose:i,onFocus:r,isFocused:s,zIndex:o}){const a=n==null?void 0:n[e.id],l=se.useMemo(()=>{if(!a||!a.visible||a.opacity<.05)return null;const{screenPos:c,scale:d,opacity:h}=a,f=.75,g=s?1.2:1,y=d*f*g,S=280;let m=c.x+15,u=c.y-40;m+S*y>window.innerWidth-10&&(m=c.x-S*y-15),m=Math.max(10,m),u=Math.max(10,Math.min(window.innerHeight-100*y,u));const v=s?2e3:o;return{transform:`translate3d(${m}px, ${u}px, 0) scale(${y})`,transformOrigin:"left top",opacity:h,zIndex:v,pointerEvents:h>.3?"auto":"none"}},[a,s,o]);return l?M.jsx("div",{className:`popup-card ${s?"focused":""}`,style:l,onClick:c=>{c.stopPropagation(),r(e.id)},children:M.jsx("div",{className:"popup-card-inner",children:M.jsxs("div",{className:"card-horizontal",children:[M.jsx("div",{className:"card-avatar-side",children:M.jsx("img",{src:$h(e.image),alt:e.name,loading:"lazy",onError:c=>{c.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(e.name)}&background=9333ea&color=fff`}})}),M.jsxs("div",{className:"card-text-side",children:[M.jsx("div",{className:"card-name",children:e.name}),M.jsxs("div",{className:"card-info-compact",children:[e.title,e.title&&e.university&&" · ",e.university]}),M.jsxs("div",{className:"card-location-compact",children:[M.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),M.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),e.location]})]}),M.jsx("button",{className:"popup-close",onClick:c=>{c.stopPropagation(),i(e.id)},children:M.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#333",strokeWidth:"2",children:[M.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})}):null},(t,e)=>{var o,a;if(t.isFocused!==e.isFocused||t.zIndex!==e.zIndex||t.card.id!==e.card.id)return!1;const n=(o=t.visibilityData)==null?void 0:o[t.card.id],i=(a=e.visibilityData)==null?void 0:a[e.card.id];if(!n&&!i)return!0;if(!n||!i)return!1;const r=1,s=.02;return!(Math.abs(n.screenPos.x-i.screenPos.x)>r||Math.abs(n.screenPos.y-i.screenPos.y)>r||Math.abs(n.opacity-i.opacity)>s||n.visible!==i.visible||Math.abs(n.scale-i.scale)>.01)});function _R(){return M.jsx("div",{className:"loading-screen",children:M.jsxs("div",{className:"loading-content",children:[M.jsx("div",{className:"loading-spinner"}),M.jsx("p",{children:"Loading Globe..."})]})})}var fv={};/**
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
 */const Xy=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},yR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[d],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new xR;const f=s<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const y=c<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SR=function(t){const e=Xy(t);return $y.encodeByteArray(e,!0)},Bc=function(t){return SR(t).replace(/\./g,"")},qy=function(t){try{return $y.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ER(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MR=()=>ER().__FIREBASE_DEFAULTS__,wR=()=>{if(typeof process>"u"||typeof fv>"u")return;const t=fv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qy(t[1]);return e&&JSON.parse(e)},op=()=>{try{return MR()||wR()||TR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yy=t=>{var e,n;return(n=(e=op())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AR=t=>{const e=Yy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ky=()=>{var t;return(t=op())===null||t===void 0?void 0:t.config},Zy=t=>{var e;return(e=op())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function CR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bc(JSON.stringify(n)),Bc(JSON.stringify(o)),""].join(".")}/**
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function PR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NR(){const t=nn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DR(){try{return typeof indexedDB=="object"}catch{return!1}}function UR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const OR="FirebaseError";class Bi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=OR,Object.setPrototypeOf(this,Bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?kR(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bi(r,a,i)}}function kR(t,e){return t.replace(FR,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const FR=/\{\$([^}]+)}/g;function BR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(pv(s)&&pv(o)){if(!zc(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function pv(t){return t!==null&&typeof t=="object"}/**
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
 */function ja(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zR(t,e){const n=new HR(t,e);return n.subscribe.bind(n)}class HR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");VR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Dd),r.error===void 0&&(r.error=Dd),r.complete===void 0&&(r.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
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
 */class GR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new bR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:WR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WR(t){return t===Fr?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
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
 */class XR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(at||(at={}));const $R={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},qR=at.INFO,YR={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},KR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=YR[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jy{constructor(e){this.name=e,this._logLevel=qR,this._logHandler=KR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in at))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$R[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...e),this._logHandler(this,at.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...e),this._logHandler(this,at.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,at.INFO,...e),this._logHandler(this,at.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,at.WARN,...e),this._logHandler(this,at.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...e),this._logHandler(this,at.ERROR,...e)}}const ZR=(t,e)=>e.some(n=>t instanceof n);let mv,gv;function JR(){return mv||(mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QR(){return gv||(gv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qy=new WeakMap,qh=new WeakMap,ex=new WeakMap,Ud=new WeakMap,ap=new WeakMap;function eP(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qy.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function tP(t){if(qh.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ex.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nP(t){Yh=t(Yh)}function iP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Od(this),e,...n);return ex.set(i,e.sort?e.sort():[e]),vr(i)}:QR().includes(t)?function(...e){return t.apply(Od(this),e),vr(Qy.get(this))}:function(...e){return vr(t.apply(Od(this),e))}}function rP(t){return typeof t=="function"?iP(t):(t instanceof IDBTransaction&&tP(t),ZR(t,JR())?new Proxy(t,Yh):t)}function vr(t){if(t instanceof IDBRequest)return eP(t);if(Ud.has(t))return Ud.get(t);const e=rP(t);return e!==t&&(Ud.set(t,e),ap.set(e,t)),e}const Od=t=>ap.get(t);function sP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=vr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const oP=["get","getKey","getAll","getAllKeys","count"],aP=["put","add","delete","clear"],kd=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=aP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||oP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return kd.set(e,s),s}nP(t=>({...t,get:(e,n,i)=>vv(e,n)||t.get(e,n,i),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
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
 */class lP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function cP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kh="@firebase/app",_v="0.10.13";/**
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
 */const Oi=new Jy("@firebase/app"),uP="@firebase/app-compat",dP="@firebase/analytics-compat",hP="@firebase/analytics",fP="@firebase/app-check-compat",pP="@firebase/app-check",mP="@firebase/auth",gP="@firebase/auth-compat",vP="@firebase/database",_P="@firebase/data-connect",yP="@firebase/database-compat",xP="@firebase/functions",SP="@firebase/functions-compat",EP="@firebase/installations",MP="@firebase/installations-compat",wP="@firebase/messaging",TP="@firebase/messaging-compat",AP="@firebase/performance",bP="@firebase/performance-compat",CP="@firebase/remote-config",RP="@firebase/remote-config-compat",PP="@firebase/storage",IP="@firebase/storage-compat",LP="@firebase/firestore",NP="@firebase/vertexai-preview",DP="@firebase/firestore-compat",UP="firebase",OP="10.14.1";/**
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
 */const Zh="[DEFAULT]",kP={[Kh]:"fire-core",[uP]:"fire-core-compat",[hP]:"fire-analytics",[dP]:"fire-analytics-compat",[pP]:"fire-app-check",[fP]:"fire-app-check-compat",[mP]:"fire-auth",[gP]:"fire-auth-compat",[vP]:"fire-rtdb",[_P]:"fire-data-connect",[yP]:"fire-rtdb-compat",[xP]:"fire-fn",[SP]:"fire-fn-compat",[EP]:"fire-iid",[MP]:"fire-iid-compat",[wP]:"fire-fcm",[TP]:"fire-fcm-compat",[AP]:"fire-perf",[bP]:"fire-perf-compat",[CP]:"fire-rc",[RP]:"fire-rc-compat",[PP]:"fire-gcs",[IP]:"fire-gcs-compat",[LP]:"fire-fst",[DP]:"fire-fst-compat",[NP]:"fire-vertex","fire-js":"fire-js",[UP]:"fire-js-all"};/**
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
 */const Hc=new Map,FP=new Map,Jh=new Map;function yv(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _o(t){const e=t.name;if(Jh.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,t);for(const n of Hc.values())yv(n,t);for(const n of FP.values())yv(n,t);return!0}function lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ti(t){return t.settings!==void 0}/**
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
 */const BP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new Wa("app","Firebase",BP);/**
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
 */class zP{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const To=OP;function tx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw _r.create("bad-app-name",{appName:String(r)});if(n||(n=Ky()),!n)throw _r.create("no-options");const s=Hc.get(r);if(s){if(zc(n,s.options)&&zc(i,s.config))return s;throw _r.create("duplicate-app",{appName:r})}const o=new XR(r);for(const l of Jh.values())o.addComponent(l);const a=new zP(n,i,o);return Hc.set(r,a),a}function nx(t=Zh){const e=Hc.get(t);if(!e&&t===Zh&&Ky())return tx();if(!e)throw _r.create("no-app",{appName:t});return e}function yr(t,e,n){var i;let r=(i=kP[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}_o(new ss(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const HP="firebase-heartbeat-database",VP=1,Na="firebase-heartbeat-store";let Fd=null;function ix(){return Fd||(Fd=sP(HP,VP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Na)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Fd}async function GP(t){try{const n=(await ix()).transaction(Na),i=await n.objectStore(Na).get(rx(t));return await n.done,i}catch(e){if(e instanceof Bi)Oi.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function xv(t,e){try{const i=(await ix()).transaction(Na,"readwrite");await i.objectStore(Na).put(e,rx(t)),await i.done}catch(n){if(n instanceof Bi)Oi.warn(n.message);else{const i=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(i.message)}}}function rx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WP=1024,jP=30*24*60*60*1e3;class XP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qP(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jP}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Oi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sv(),{heartbeatsToSend:i,unsentEntries:r}=$P(this._heartbeatsCache.heartbeats),s=Bc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Oi.warn(n),""}}}function Sv(){return new Date().toISOString().substring(0,10)}function $P(t,e=WP){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Ev(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ev(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class qP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DR()?UR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ev(t){return Bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YP(t){_o(new ss("platform-logger",e=>new lP(e),"PRIVATE")),_o(new ss("heartbeat",e=>new XP(e),"PRIVATE")),yr(Kh,_v,t),yr(Kh,_v,"esm2017"),yr("fire-js","")}YP("");var KP="firebase",ZP="10.14.1";/**
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
 */yr(KP,ZP,"app");function cp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function sx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=sx,ox=new Wa("auth","Firebase",sx());/**
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
 */const Vc=new Jy("@firebase/auth");function QP(t,...e){Vc.logLevel<=at.WARN&&Vc.warn(`Auth (${To}): ${t}`,...e)}function rc(t,...e){Vc.logLevel<=at.ERROR&&Vc.error(`Auth (${To}): ${t}`,...e)}/**
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
 */function oi(t,...e){throw dp(t,...e)}function Kn(t,...e){return dp(t,...e)}function up(t,e,n){const i=Object.assign(Object.assign({},JP()),{[e]:n});return new Wa("auth","Firebase",i).create(e,{appName:t.name})}function Kr(t){return up(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function e2(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&oi(t,"argument-error"),up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dp(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ox.create(t,...e)}function Xe(t,e,...n){if(!t)throw dp(e,...n)}function Ai(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rc(e),new Error(e)}function ki(t,e){t||Ai(e)}/**
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
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function t2(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function n2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t2()||IR()||"connection"in navigator)?navigator.onLine:!0}function i2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ki(n>e,"Short delay should be less than long delay!"),this.isMobile=RR()||LR()}get(){return n2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class ax{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const r2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const s2=new Xa(3e4,6e4);function fp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ao(t,e,n,i,r={}){return lx(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=ja(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return PR()||(c.referrerPolicy="no-referrer"),ax.fetch()(cx(t,t.config.apiHost,n,a),c)})}async function lx(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},r2),e);try{const r=new a2(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hl(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw up(t,d,c);oi(t,d)}}catch(r){if(r instanceof Bi)throw r;oi(t,"network-request-failed",{message:String(r)})}}async function o2(t,e,n,i,r={}){const s=await Ao(t,e,n,i,r);return"mfaPendingCredential"in s&&oi(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cx(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?hp(t.config,r):`${t.config.apiScheme}://${r}`}class a2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Kn(this.auth,"network-request-failed")),s2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Kn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function l2(t,e){return Ao(t,"POST","/v1/accounts:delete",e)}async function ux(t,e){return Ao(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c2(t,e=!1){const n=zi(t),i=await n.getIdToken(e),r=pp(i);Xe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ca(Bd(r.auth_time)),issuedAtTime:ca(Bd(r.iat)),expirationTime:ca(Bd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bd(t){return Number(t)*1e3}function pp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const r=qy(n);return r?JSON.parse(r):(rc("Failed to decode base64 JWT payload"),null)}catch(r){return rc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wv(t){const e=pp(t);return Xe(e,"internal-error"),Xe(typeof e.exp<"u","internal-error"),Xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Da(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Bi&&u2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function u2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class d2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Gc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Da(t,ux(n,{idToken:i}));Xe(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dx(s.providerUserInfo):[],a=f2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ef(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function h2(t){const e=zi(t);await Gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f2(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function dx(t){return t.map(e=>{var{providerId:n}=e,i=cp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function p2(t,e){const n=await lx(t,{},async()=>{const i=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=cx(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ax.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m2(t,e){return Ao(t,"POST","/v2/accounts:revokeToken",fp(t,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Xe(e.idToken,"internal-error"),Xe(typeof e.idToken<"u","internal-error"),Xe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Xe(e.length!==0,"internal-error");const n=wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await p2(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new io;return i&&(Xe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Xe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Xe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Ai("not implemented")}}/**
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
 */function $i(t,e){Xe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bi{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ef(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Da(this,this.stsTokenManager.getToken(this.auth,e));return Xe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c2(this,e)}reload(){return h2(this)}_assign(e){this!==e&&(Xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Gc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ti(this.auth.app))return Promise.reject(Kr(this.auth));const e=await this.getIdToken();return await Da(this,l2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,u=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:E,isAnonymous:R,providerData:T,stsTokenManager:A}=n;Xe(p&&A,e,"internal-error");const H=io.fromJSON(this.name,A);Xe(typeof p=="string",e,"internal-error"),$i(h,e.name),$i(f,e.name),Xe(typeof E=="boolean",e,"internal-error"),Xe(typeof R=="boolean",e,"internal-error"),$i(g,e.name),$i(y,e.name),$i(S,e.name),$i(m,e.name),$i(u,e.name),$i(v,e.name);const w=new bi({uid:p,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:R,photoURL:y,phoneNumber:g,tenantId:S,stsTokenManager:H,createdAt:u,lastLoginAt:v});return T&&Array.isArray(T)&&(w.providerData=T.map(C=>Object.assign({},C))),m&&(w._redirectEventId=m),w}static async _fromIdTokenResponse(e,n,i=!1){const r=new io;r.updateFromServerResponse(n);const s=new bi({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Gc(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];Xe(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?dx(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new io;a.updateFromIdToken(i);const l=new bi({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ef(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Tv=new Map;function Ci(t){ki(t instanceof Function,"Expected a class definition");let e=Tv.get(t);return e?(ki(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tv.set(t,e),e)}/**
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
 */class hx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hx.type="NONE";const Av=hx;/**
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
 */function sc(t,e,n){return`firebase:${t}:${e}:${n}`}class ro{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=sc(this.userKey,r.apiKey,s),this.fullPersistenceKey=sc("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ro(Ci(Av),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Ci(Av);const o=sc(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=bi._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ro(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ro(s,e,i))}}/**
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
 */function bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_x(e))return"Blackberry";if(yx(e))return"Webos";if(px(e))return"Safari";if((e.includes("chrome/")||mx(e))&&!e.includes("edge/"))return"Chrome";if(vx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fx(t=nn()){return/firefox\//i.test(t)}function px(t=nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mx(t=nn()){return/crios\//i.test(t)}function gx(t=nn()){return/iemobile/i.test(t)}function vx(t=nn()){return/android/i.test(t)}function _x(t=nn()){return/blackberry/i.test(t)}function yx(t=nn()){return/webos/i.test(t)}function mp(t=nn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g2(t=nn()){var e;return mp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v2(){return NR()&&document.documentMode===10}function xx(t=nn()){return mp(t)||vx(t)||yx(t)||_x(t)||/windows phone/i.test(t)||gx(t)}/**
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
 */function Sx(t,e=[]){let n;switch(t){case"Browser":n=bv(nn());break;case"Worker":n=`${bv(nn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${To}/${i}`}/**
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
 */class _2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function y2(t,e={}){return Ao(t,"GET","/v2/passwordPolicy",fp(t,e))}/**
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
 */const x2=6;class S2{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:x2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class E2{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cv(this),this.idTokenSubscription=new Cv(this),this.beforeStateQueue=new _2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ox,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ci(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ux(this,{idToken:e}),i=await bi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ti(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ti(this.app))return Promise.reject(Kr(this));const n=e?zi(e):null;return n&&Xe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ti(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ti(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ci(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y2(this),n=new S2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await m2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ci(e)||this._popupRedirectResolver;Xe(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[Ci(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Xe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vu(t){return zi(t)}class Cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=zR(n=>this.observer=n)}get next(){return Xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M2(t){gp=t}function w2(t){return gp.loadJS(t)}function T2(){return gp.gapiScript}function A2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function b2(t,e){const n=lp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(zc(s,e??{}))return r;oi(r,"already-initialized")}return n.initialize({options:e})}function C2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ci);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function R2(t,e,n){const i=vu(t);Xe(i._canInitEmulator,i,"emulator-config-failed"),Xe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Ex(e),{host:o,port:a}=P2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),I2()}function Ex(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P2(t){const e=Ex(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Rv(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Rv(o)}}}function Rv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Mx{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ai("not implemented")}_getIdTokenResponse(e){return Ai("not implemented")}_linkToIdToken(e,n){return Ai("not implemented")}_getReauthenticationResolver(e){return Ai("not implemented")}}/**
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
 */async function so(t,e){return o2(t,"POST","/v1/accounts:signInWithIdp",fp(t,e))}/**
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
 */const L2="http://localhost";class os extends Mx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):oi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=cp(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new os(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return so(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,so(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,so(e,n)}buildRequest(){const e={requestUri:L2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
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
 */class Qi extends $a{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qi.PROVIDER_ID="facebook.com";/**
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
 */class Si extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return os._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Si.credential(n,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class er extends $a{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends $a{constructor(){super("twitter.com")}static credential(e,n){return os._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return tr.credential(n,i)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await bi._fromIdTokenResponse(e,i,r),o=Pv(i);return new yo({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Pv(i);return new yo({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Pv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wc extends Bi{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Wc(e,n,i,r)}}function wx(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(t,s,e,i):s})}async function N2(t,e,n=!1){const i=await Da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yo._forOperation(t,"link",i)}/**
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
 */async function D2(t,e,n=!1){const{auth:i}=t;if(Ti(i.app))return Promise.reject(Kr(i));const r="reauthenticate";try{const s=await Da(t,wx(i,r,e,t),n);Xe(s.idToken,i,"internal-error");const o=pp(s.idToken);Xe(o,i,"internal-error");const{sub:a}=o;return Xe(t.uid===a,i,"user-mismatch"),yo._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&oi(i,"user-mismatch"),s}}/**
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
 */async function U2(t,e,n=!1){if(Ti(t.app))return Promise.reject(Kr(t));const i="signIn",r=await wx(t,i,e),s=await yo._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function O2(t,e,n,i){return zi(t).onIdTokenChanged(e,n,i)}function k2(t,e,n){return zi(t).beforeAuthStateChanged(e,n)}function F2(t,e,n,i){return zi(t).onAuthStateChanged(e,n,i)}function B2(t){return zi(t).signOut()}const jc="__sak";/**
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
 */class Tx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const z2=1e3,H2=10;class Ax extends Tx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);v2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,H2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ax.type="LOCAL";const V2=Ax;/**
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
 */class bx extends Tx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bx.type="SESSION";const Cx=bx;/**
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
 */function G2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new _u(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await G2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_u.receivers=[];/**
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
 */class W2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_p("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function si(){return window}function j2(t){si().location.href=t}/**
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
 */function Rx(){return typeof si().WorkerGlobalScope<"u"&&typeof si().importScripts=="function"}async function X2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q2(){return Rx()?self:null}/**
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
 */const Px="firebaseLocalStorageDb",Y2=1,Xc="firebaseLocalStorage",Ix="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yu(t,e){return t.transaction([Xc],e?"readwrite":"readonly").objectStore(Xc)}function K2(){const t=indexedDB.deleteDatabase(Px);return new qa(t).toPromise()}function tf(){const t=indexedDB.open(Px,Y2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Xc,{keyPath:Ix})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Xc)?e(i):(i.close(),await K2(),e(await tf()))})})}async function Iv(t,e,n){const i=yu(t,!0).put({[Ix]:e,value:n});return new qa(i).toPromise()}async function Z2(t,e){const n=yu(t,!1).get(e),i=await new qa(n).toPromise();return i===void 0?null:i.value}function Lv(t,e){const n=yu(t,!0).delete(e);return new qa(n).toPromise()}const J2=800,Q2=3;class Lx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Q2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_u._getInstance(q2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X2(),!this.activeServiceWorker)return;this.sender=new W2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await Iv(e,jc,"1"),await Lv(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Iv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Z2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=yu(r,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lx.type="LOCAL";const eI=Lx;new Xa(3e4,6e4);/**
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
 */function Nx(t,e){return e?Ci(e):(Xe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yp extends Mx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,n){return so(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tI(t){return U2(t.auth,new yp(t),t.bypassAuthState)}function nI(t){const{auth:e,user:n}=t;return Xe(n,e,"internal-error"),D2(n,new yp(t),t.bypassAuthState)}async function iI(t){const{auth:e,user:n}=t;return Xe(n,e,"internal-error"),N2(n,new yp(t),t.bypassAuthState)}/**
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
 */class Dx{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return nI;default:oi(this.auth,"internal-error")}}resolve(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rI=new Xa(2e3,1e4);async function sI(t,e,n){if(Ti(t.app))return Promise.reject(Kn(t,"operation-not-supported-in-this-environment"));const i=vu(t);e2(t,e,vp);const r=Nx(i,n);return new Wr(i,"signInViaPopup",e,r).executeNotNull()}class Wr extends Dx{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Xe(e,this.auth,"internal-error"),e}async onExecution(){ki(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rI.get())};e()}}Wr.currentPopupAction=null;/**
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
 */const oI="pendingRedirect",oc=new Map;class aI extends Dx{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await lI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lI(t,e){const n=dI(e),i=uI(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function cI(t,e){oc.set(t._key(),e)}function uI(t){return Ci(t._redirectPersistence)}function dI(t){return sc(oI,t.config.apiKey,t.name)}async function hI(t,e,n=!1){if(Ti(t.app))return Promise.reject(Kr(t));const i=vu(t),r=Nx(i,e),o=await new aI(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const fI=10*60*1e3;class pI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ux(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nv(e))}saveEventToCache(e){this.cachedEventUids.add(Nv(e)),this.lastProcessedEventTime=Date.now()}}function Nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ux({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ux(t);default:return!1}}/**
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
 */async function gI(t,e={}){return Ao(t,"GET","/v1/projects",e)}/**
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
 */const vI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_I=/^https?/;async function yI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gI(t);for(const n of e)try{if(xI(n))return}catch{}oi(t,"unauthorized-domain")}function xI(t){const e=Qh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!_I.test(n))return!1;if(vI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const SI=new Xa(3e4,6e4);function Dv(){const t=si().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EI(t){return new Promise((e,n)=>{var i,r,s;function o(){Dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dv(),n(Kn(t,"network-request-failed"))},timeout:SI.get()})}if(!((r=(i=si().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=si().gapi)===null||s===void 0)&&s.load)o();else{const a=A2("iframefcb");return si()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},w2(`${T2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ac=null,e})}let ac=null;function MI(t){return ac=ac||EI(t),ac}/**
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
 */const wI=new Xa(5e3,15e3),TI="__/auth/iframe",AI="emulator/auth/iframe",bI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RI(t){const e=t.config;Xe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,AI):`https://${t.config.authDomain}/${TI}`,i={apiKey:e.apiKey,appName:t.name,v:To},r=CI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ja(i).slice(1)}`}async function PI(t){const e=await MI(t),n=si().gapi;return Xe(n,t,"internal-error"),e.open({where:document.body,url:RI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=si().setTimeout(()=>{s(o)},wI.get());function l(){si().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const II={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,NI=600,DI="_blank",UI="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OI(t,e,n,i=LI,r=NI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},II),{width:i.toString(),height:r.toString(),top:s,left:o}),c=nn().toLowerCase();n&&(a=mx(c)?DI:n),fx(c)&&(e=e||UI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(g2(c)&&a!=="_self")return kI(e||"",a),new Uv(null);const h=window.open(e||"",a,d);Xe(h,t,"popup-blocked");try{h.focus()}catch{}return new Uv(h)}function kI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const FI="__/auth/handler",BI="emulator/auth/handler",zI=encodeURIComponent("fac");async function Ov(t,e,n,i,r,s){Xe(t.config.authDomain,t,"auth-domain-config-required"),Xe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:To,eventId:r};if(e instanceof vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof $a){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${zI}=${encodeURIComponent(l)}`:"";return`${HI(t)}?${ja(a).slice(1)}${c}`}function HI({config:t}){return t.emulator?hp(t,BI):`https://${t.authDomain}/${FI}`}/**
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
 */const zd="webStorageSupport";class VI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cx,this._completeRedirectFn=hI,this._overrideRedirectResult=cI}async _openPopup(e,n,i,r){var s;ki((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ov(e,n,i,Qh(),r);return OI(e,o,_p())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Ov(e,n,i,Qh(),r);return j2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ki(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await PI(e),i=new pI(e);return n.register("authEvent",r=>(Xe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zd,{type:zd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[zd];o!==void 0&&n(!!o),oi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xx()||px()||mp()}}const GI=VI;var kv="@firebase/auth",Fv="1.7.9";/**
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
 */class WI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(t){_o(new ss("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Xe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sx(t)},c=new E2(i,r,s,l);return C2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_o(new ss("auth-internal",e=>{const n=vu(e.getProvider("auth").getImmediate());return(i=>new WI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(kv,Fv,jI(t)),yr(kv,Fv,"esm2017")}/**
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
 */const $I=5*60,qI=Zy("authIdTokenMaxAge")||$I;let Bv=null;const YI=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>qI)return;const r=n==null?void 0:n.token;Bv!==r&&(Bv=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function KI(t=nx()){const e=lp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=b2(t,{popupRedirectResolver:GI,persistence:[eI,V2,Cx]}),i=Zy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=YI(s.toString());k2(n,o,()=>o(n.currentUser)),O2(n,a=>o(a))}}const r=Yy("auth");return r&&R2(n,`http://${r}`),n}function ZI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}M2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Kn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",ZI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");/**
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
 */const Ox="firebasestorage.googleapis.com",JI="storageBucket",QI=2*60*1e3,eL=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ai;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ai||(ai={}));function Hd(t){return"storage/"+t}function tL(){const t="An unknown error occurred, please check the error payload for server response.";return new ui(ai.UNKNOWN,t)}function nL(){return new ui(ai.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iL(){return new ui(ai.CANCELED,"User canceled the upload/download.")}function rL(t){return new ui(ai.INVALID_URL,"Invalid URL '"+t+"'.")}function sL(t){return new ui(ai.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zv(t){return new ui(ai.INVALID_ARGUMENT,t)}function kx(){return new ui(ai.APP_DELETED,"The Firebase app was deleted.")}function oL(t){return new ui(ai.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class $n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=$n.makeFromUrl(e,n)}catch{return new $n(e,"")}if(i.path==="")return i;throw sL(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),y={bucket:1,path:3},S=n===Ox?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",u=new RegExp(`^https?://${S}/${r}/${m}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:c},{regex:u,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<p.length;E++){const R=p[E],T=R.regex.exec(e);if(T){const A=T[R.indices.bucket];let H=T[R.indices.path];H||(H=""),i=new $n(A,H),R.postModify(i);break}}if(i==null)throw rL(e);return i}}class aL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lL(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...m){c||(c=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(g,l())},m)}function f(){s&&clearTimeout(s)}function g(m,...u){if(c){f();return}if(m){f(),d.call(null,m,...u);return}if(l()||o){f(),d.call(null,m,...u);return}i<64&&(i*=2);let p;a===1?(a=2,p=0):p=(i+Math.random())*1e3,h(p)}let y=!1;function S(m){y||(y=!0,f(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function cL(t){t(!1)}/**
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
 */function uL(t){return t!==void 0}function Hv(t,e,n,i){if(i<e)throw zv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw zv(`Invalid value for '${t}'. Expected ${n} or less.`)}function dL(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var $c;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($c||($c={}));/**
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
 */function hL(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class fL{constructor(e,n,i,r,s,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Vl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===$c.NO_ERROR,l=s.getStatus();if(!a||hL(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===$c.ABORT;i(!1,new Vl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Vl(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=tL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?kx():iL();o(l)}else{const l=nL();o(l)}};this.canceled_?n(!1,new Vl(!1,null,!0)):this.backoffId_=lL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function pL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _L(t,e,n,i,r,s,o=!0){const a=dL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gL(c,e),pL(c,n),mL(c,s),vL(c,i),new fL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function yL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class qc{constructor(e,n){this._service=e,n instanceof $n?this._location=n:this._location=$n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qc(e,n)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xL(this._location.path)}get storage(){return this._service}get parent(){const e=yL(this._location.path);if(e===null)return null;const n=new $n(this._location.bucket,e);return new qc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oL(e)}}function Vv(t,e){const n=e==null?void 0:e[JI];return n==null?null:$n.makeFromBucketSpec(n,t)}function SL(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:CR(r,t.app.options.projectId))}class EL{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Ox,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QI,this._maxUploadRetryTime=eL,this._requests=new Set,r!=null?this._bucket=$n.makeFromBucketSpec(r,this._host):this._bucket=Vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=Vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new aL(kx());{const o=_L(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Gv="@firebase/storage",Wv="0.13.2";/**
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
 */const Fx="storage";function ML(t=nx(),e){t=zi(t);const i=lp(t,Fx).getImmediate({identifier:e}),r=AR("storage");return r&&wL(i,...r),i}function wL(t,e,n,i={}){SL(t,e,n,i)}function TL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new EL(n,i,r,e,To)}function AL(){_o(new ss(Fx,TL,"PUBLIC").setMultipleInstances(!0)),yr(Gv,Wv,""),yr(Gv,Wv,"esm2017")}AL();const bL={apiKey:"AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",authDomain:"anking-globe.firebaseapp.com",projectId:"anking-globe",storageBucket:"anking-globe.firebasestorage.app",messagingSenderId:"615376842",appId:"1:615376842:web:your_app_id"},Bx=tx(bL),Ua=KI(Bx);ML(Bx);const CL=new Si,RL=async()=>{try{const t=await sI(Ua,CL),e=await t.user.getIdToken();return{user:t.user,token:e}}catch(t){throw console.error("Google sign-in error:",t),t}},PL=async()=>{await B2(Ua)},IL=async()=>Ua.currentUser?await Ua.currentUser.getIdToken():null;function LL(t){if(!t)return"";if(typeof t=="object"){const n=[];return(t.city||t.town||t.village||t.municipality)&&n.push(t.city||t.town||t.village||t.municipality),(t.state||t.region||t.province)&&n.push(t.state||t.region||t.province),t.country&&n.push(t.country),n.join(", ")}const e=t.split(",").map(n=>n.trim());return e.length<=3?t:e.slice(-3).join(", ")}function jv({onBack:t}){const[e,n]=se.useState("checking"),[i,r]=se.useState(!1),[s,o]=se.useState(null),[a,l]=se.useState(null),[c,d]=se.useState("members"),[h,f]=se.useState([]),[g,y]=se.useState(null),[S,m]=se.useState(!1),[u,v]=se.useState(!1),[p,E]=se.useState({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),[R,T]=se.useState([]),[A,H]=se.useState(!1),[w,C]=se.useState([]),[G,W]=se.useState([]),[he,F]=se.useState([]),[ee,J]=se.useState(!1),[ne,U]=se.useState(!1),[Q,q]=se.useState(!1),[pe,xe]=se.useState(500),[oe,O]=se.useState(null),[D,P]=se.useState([]),[b,re]=se.useState(null),[de,Y]=se.useState({name:"",color:"#9333ea",memberIds:[]}),[Se,V]=se.useState(!1),Ie=se.useRef(null);se.useEffect(()=>{const k=F2(Ua,async ge=>{if(ge){const be=await ge.getIdToken();l(be),o({email:ge.email,username:ge.displayName||ge.email,picture:ge.photoURL||""}),ie(be)}else l(null),o(null),n("none")});return()=>k()},[]);const ie=async k=>{try{const be=await(await fetch(`${wt}/auth/check`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}})).json();if(be.error){n("none");return}n(be.status),r(be.isAdmin||!1),(be.status==="approved"||be.isAdmin)&&(z(),_(),x())}catch(ge){console.error("Auth check error:",ge),n("error")}},le=()=>a?{Authorization:`Bearer ${a}`}:{},K=async()=>{try{await RL();const k=await IL();if(k){l(k);const be=await(await fetch(`${wt}/auth/request`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${k}`}})).json();n(be.status),r(be.isAdmin||!1),(be.status==="approved"||be.isAdmin)&&(z(),_(),x())}}catch(k){console.error("Sign in error:",k)}},_e=async()=>{try{await PL(),l(null),o(null),n("none")}catch(k){console.error("Sign out error:",k)}},z=async()=>{try{const ge=await(await fetch(`${wt}/cards`)).json();f(ge)}catch(k){console.error("Load cards error:",k)}},_=async()=>{try{const ge=await(await fetch(`${wt}/images`,{headers:le()})).json();C(ge)}catch(k){console.error("Load images error:",k)}},x=async()=>{try{const ge=await(await fetch(`${wt}/groups`)).json();P(ge)}catch(k){console.error("Load groups error:",k)}},N=async()=>{if(i)try{const[k,ge]=await Promise.all([fetch(`${wt}/users/pending`,{headers:le()}),fetch(`${wt}/users/approved`,{headers:le()})]);W(await k.json()),F(await ge.json())}catch(k){console.error("Load users error:",k)}},j=async k=>{try{(await fetch(`${wt}/users/${encodeURIComponent(k)}/approve`,{method:"POST",headers:le()})).ok&&(O({type:"success",message:`Approved ${k}`}),setTimeout(()=>O(null),3e3),N())}catch(ge){console.error("Approve error:",ge)}},Z=async k=>{try{await fetch(`${wt}/users/${encodeURIComponent(k)}`,{method:"DELETE",headers:le()}),O({type:"success",message:`Denied ${k}`}),setTimeout(()=>O(null),3e3),N()}catch(ge){console.error("Deny error:",ge)}},$=async k=>{if(confirm(`Revoke access for ${k}?`))try{await fetch(`${wt}/users/${encodeURIComponent(k)}/revoke`,{method:"POST",headers:le()}),N()}catch(ge){console.error("Revoke error:",ge)}},ve=async k=>{if(!k||k.length<3){T([]);return}H(!0);try{const be=await(await fetch(`${wt}/geocode?q=${encodeURIComponent(k)}`)).json();T(be.slice(0,5))}catch{T([])}H(!1)},me=k=>{E(ge=>({...ge,location:LL(k.address)||k.display_name,lat:k.lat.toString(),lng:k.lng.toString()})),T([])},Ee=(k,ge)=>{E(be=>({...be,[k]:ge})),(k==="university"||k==="location")&&(clearTimeout(window.geocodeTimeout),window.geocodeTimeout=setTimeout(()=>ve(ge),600))},Pe=async k=>{const ge=k.target.files[0];if(ge){if(!ge.type.match(/^image\/(png|jpe?g|webp)$/)){alert("Please select a PNG, JPG, or WebP image.");return}if(ge.size>5*1024*1024){alert("Image too large. Max 5MB.");return}v(!0);try{const be=new FileReader;be.onload=async()=>{const ze=be.result,We=await fetch(`${wt}/images/upload`,{method:"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify({filename:ge.name,data:ze})});if(We.ok){const it=await We.json();E(tt=>({...tt,image:it.url||it.filename})),await _()}else{const it=await We.json();alert(it.error||"Upload failed")}v(!1)},be.readAsDataURL(ge)}catch{alert("Upload failed"),v(!1)}k.target.value=""}},Oe=()=>{E({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),y(null),T([])},fe=k=>{var ge,be;y(k),E({name:k.name||"",title:k.title||"",university:k.university||"",location:k.location||"",lat:((ge=k.lat)==null?void 0:ge.toString())||"",lng:((be=k.lng)==null?void 0:be.toString())||"",image:k.image||""})},Ve=async k=>{if(k.preventDefault(),!p.name||!p.location||!p.lat||!p.lng){alert("Please fill required fields");return}m(!0);const ge={...p,lat:parseFloat(p.lat),lng:parseFloat(p.lng)};try{const be=g?`${wt}/cards/${g.id}`:`${wt}/cards`,We=await fetch(be,{method:g?"PUT":"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify(ge)});if(We.ok)Oe(),z();else{const it=await We.json();alert(it.error||"Save failed")}}catch{alert("Save failed")}m(!1)},He=async k=>{if(confirm("Delete this member?"))try{await fetch(`${wt}/cards/${k}`,{method:"DELETE",headers:le()}),z(),(g==null?void 0:g.id)===k&&Oe()}catch{alert("Delete failed")}},ke=()=>{Y({name:"",color:"#9333ea",memberIds:[]}),re(null)},Ne=k=>{re(k),Y({name:k.name||"",color:k.color||"#9333ea",memberIds:k.memberIds||[]})},Te=k=>{Y(ge=>{const be=ge.memberIds.includes(k)?ge.memberIds.filter(ze=>ze!==k):[...ge.memberIds,k];return{...ge,memberIds:be}})},L=async k=>{if(k.preventDefault(),!de.name){alert("Please enter a group name");return}V(!0);try{const ge=b?`${wt}/groups/${b.id}`:`${wt}/groups`,ze=await fetch(ge,{method:b?"PUT":"POST",headers:{"Content-Type":"application/json",...le()},body:JSON.stringify(de)});if(ze.ok)ke(),x(),O({type:"success",message:b?"Group updated":"Group created"}),setTimeout(()=>O(null),3e3);else{const We=await ze.json();alert(We.error||"Save failed")}}catch{alert("Save failed")}V(!1)},Me=async k=>{if(confirm("Delete this group?"))try{await fetch(`${wt}/groups/${k}`,{method:"DELETE",headers:le()}),x(),(b==null?void 0:b.id)===k&&ke(),O({type:"success",message:"Group deleted"}),setTimeout(()=>O(null),3e3)}catch{alert("Delete failed")}},[De,Re]=se.useState("all"),ye=()=>{const k=window.location.origin+"/anking-globe/",ge=new URLSearchParams({embed:"true"});return De&&De!=="all"&&ge.set("group",De),`${k}?${ge.toString()}`},B=()=>{if(De==="all")return"All Members";const k=D.find(ge=>ge.id===De);return k?k.name:"All Members"},we=()=>`<iframe 
  src="${ye()}" 
  width="100%" 
  height="${pe}" 
  frameborder="0" 
  allow="accelerometer; gyroscope"
  style="border-radius: 12px; overflow: hidden;"
></iframe>`,Le=()=>{navigator.clipboard.writeText(we()),q(!0),setTimeout(()=>q(!1),2e3)};return e==="checking"?M.jsx("div",{className:"admin-page",children:M.jsx("div",{className:"admin-auth",children:M.jsx("div",{className:"auth-loading",children:"Checking authentication..."})})}):e==="error"?M.jsx("div",{className:"admin-page",children:M.jsxs("div",{className:"admin-auth",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsxs("div",{className:"auth-card error",children:[M.jsx("div",{className:"error-icon",children:"❌"}),M.jsx("h1",{children:"Authentication Error"}),M.jsx("button",{onClick:_e,children:"Try Again"})]})]})}):e==="none"?M.jsx("div",{className:"admin-page",children:M.jsxs("div",{className:"admin-auth",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsxs("div",{className:"auth-card",children:[M.jsx("h1",{children:"Admin Access"}),M.jsx("p",{children:"Sign in with Google to request access."}),M.jsxs("button",{className:"google-sign-in-btn",onClick:K,children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[M.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),M.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),M.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),M.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),M.jsx("p",{className:"auth-note",children:"Admins will be notified to approve your request."})]})]})}):e==="pending"?M.jsx("div",{className:"admin-page",children:M.jsxs("div",{className:"admin-auth",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsxs("div",{className:"auth-card pending",children:[M.jsx("div",{className:"pending-icon",children:"⏳"}),M.jsx("h1",{children:"Access Pending"}),s&&M.jsxs("div",{className:"pending-user-info",children:[s.picture&&M.jsx("img",{src:s.picture,alt:"",className:"pending-avatar"}),M.jsx("p",{children:M.jsx("strong",{children:s.username})}),M.jsx("p",{children:s.email})]}),M.jsx("p",{children:"An admin has been notified and will review your request."}),M.jsxs("button",{className:"google-sign-in-btn",onClick:_e,children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),M.jsx("polyline",{points:"16 17 21 12 16 7"}),M.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Use another account"]})]})]})}):M.jsxs("div",{className:"admin-page",children:[M.jsxs("div",{className:"admin-header",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsx("h1",{children:"Member Management"}),M.jsxs("div",{className:"admin-user",children:[(s==null?void 0:s.picture)&&M.jsx("img",{src:s.picture,alt:"",className:"user-avatar"}),M.jsx("span",{children:(s==null?void 0:s.username)||(s==null?void 0:s.email)}),i&&M.jsx("span",{className:"admin-badge",children:"Admin"}),i&&M.jsxs("button",{className:`user-mgmt-btn ${ee?"active":""}`,onClick:()=>{J(!ee),N()},children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),M.jsx("circle",{cx:"9",cy:"7",r:"4"}),M.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),M.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Users",G.length>0&&M.jsx("span",{className:"pending-count",children:G.length})]}),M.jsxs("button",{className:"embed-btn",onClick:()=>U(!0),children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("polyline",{points:"16 18 22 12 16 6"}),M.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"Embed"]}),M.jsx("button",{className:"logout-btn",onClick:_e,children:"Sign Out"})]})]}),i&&ee&&M.jsxs("div",{className:"user-management-panel",children:[M.jsxs("div",{className:"user-section",children:[M.jsxs("h3",{children:["Pending (",G.length,")"]}),G.length===0?M.jsx("p",{className:"no-users",children:"No pending requests"}):M.jsx("ul",{children:G.map(k=>M.jsxs("li",{children:[M.jsxs("div",{className:"user-info",children:[k.picture&&M.jsx("img",{src:k.picture,alt:"",className:"list-avatar"}),M.jsxs("div",{children:[M.jsx("span",{className:"user-name",children:k.username}),M.jsx("span",{className:"user-email",children:k.email})]})]}),M.jsxs("div",{className:"user-actions",children:[M.jsx("button",{className:"approve",onClick:()=>{console.log("clicked"),j(k.email)},children:"Approve"}),M.jsx("button",{className:"deny",onClick:()=>Z(k.email),children:"Deny"})]})]},k.email))})]}),M.jsxs("div",{className:"user-section",children:[M.jsxs("h3",{children:["Approved (",he.length,")"]}),M.jsx("ul",{children:he.map(k=>M.jsxs("li",{children:[M.jsxs("div",{className:"user-info",children:[k.picture&&M.jsx("img",{src:k.picture,alt:"",className:"list-avatar"}),M.jsxs("div",{children:[M.jsx("span",{className:"user-name",children:k.username||"Unknown"}),M.jsx("span",{className:"user-email",children:k.email})]})]}),M.jsx("button",{className:"revoke",onClick:()=>$(k.email),children:"Revoke"})]},k.email))})]})]}),ne&&M.jsx("div",{className:"embed-modal-overlay",onClick:()=>U(!1),children:M.jsxs("div",{className:"embed-modal",onClick:k=>k.stopPropagation(),children:[M.jsx("button",{className:"embed-modal-close",onClick:()=>U(!1),children:"×"}),M.jsx("h2",{children:"🔗 Embed Globe"}),M.jsxs("p",{className:"embed-description",children:["Embed the ",M.jsx("strong",{children:"live globe"})," on any website. It shows real-time data, with a toggle button to show/hide all cards."]}),M.jsxs("div",{className:"embed-setting",children:[M.jsx("label",{children:"Group to display:"}),M.jsxs("select",{value:De,onChange:k=>Re(k.target.value),className:"embed-group-select",children:[M.jsx("option",{value:"all",children:"All Members"}),D.map(k=>M.jsx("option",{value:k.id,children:k.name},k.id))]})]}),M.jsxs("div",{className:"embed-setting",children:[M.jsx("label",{children:"Height:"}),M.jsxs("div",{className:"embed-height-input",children:[M.jsx("input",{type:"number",value:pe,onChange:k=>xe(parseInt(k.target.value)||500),min:"300",max:"1000"}),M.jsx("span",{children:"px"})]})]}),M.jsx("div",{className:"embed-info",children:M.jsxs("span",{children:["📍 Footer will show: ",M.jsx("strong",{children:B()})]})}),M.jsxs("div",{className:"embed-preview",children:[M.jsx("div",{className:"embed-preview-header",children:M.jsx("span",{children:"iframe Code"})}),M.jsx("pre",{children:we()})]}),M.jsxs("div",{className:"embed-actions",children:[M.jsx("button",{className:"embed-copy-btn",onClick:Le,children:Q?"✓ Copied!":"📋 Copy Embed Code"}),M.jsx("a",{className:"embed-preview-btn",href:ye(),target:"_blank",rel:"noopener noreferrer",children:"👁 Preview Embed"})]}),M.jsxs("div",{className:"embed-instructions",children:[M.jsx("h4",{children:"How to use:"}),M.jsxs("ul",{children:[M.jsxs("li",{children:[M.jsx("strong",{children:"Discourse:"})," Paste in an HTML block"]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Wix:"}),' Add "Embed HTML" element']}),M.jsxs("li",{children:[M.jsx("strong",{children:"WordPress:"}),' Use "Custom HTML" block']})]}),M.jsx("p",{className:"embed-note",children:"✅ Live data - updates automatically!"})]})]})}),M.jsxs("div",{className:"admin-tabs",children:[M.jsxs("button",{className:`admin-tab ${c==="members"?"active":""}`,onClick:()=>d("members"),children:[M.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),M.jsx("circle",{cx:"9",cy:"7",r:"4"}),M.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),M.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Add Members"]}),M.jsxs("button",{className:`admin-tab ${c==="groups"?"active":""}`,onClick:()=>d("groups"),children:[M.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),M.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),M.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),M.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Subgroups"]})]}),c==="members"&&M.jsxs("div",{className:"admin-content",children:[M.jsxs("div",{className:"admin-form-panel",children:[M.jsx("h2",{children:g?"Edit Member":"Add New Member"}),M.jsxs("form",{onSubmit:Ve,children:[M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Name *"}),M.jsx("input",{type:"text",value:p.name,onChange:k=>Ee("name",k.target.value),placeholder:"John Doe",required:!0})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Title / Role"}),M.jsx("input",{type:"text",value:p.title,onChange:k=>Ee("title",k.target.value),placeholder:"Medical Student..."})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"University (type to search)"}),M.jsx("input",{type:"text",value:p.university,onChange:k=>Ee("university",k.target.value),placeholder:"e.g. Harvard Medical School"}),A&&p.university&&M.jsx("div",{className:"geocode-loading",children:"Searching..."}),R.length>0&&p.university&&M.jsx("ul",{className:"geocode-results",children:R.map((k,ge)=>M.jsxs("li",{onClick:()=>me(k),children:[M.jsx("span",{className:"result-name",children:k.display_name}),M.jsxs("span",{className:"result-coords",children:[k.lat.toFixed(4),", ",k.lng.toFixed(4)]})]},ge))})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Location * (City, Region, Country)"}),M.jsx("input",{type:"text",value:p.location,onChange:k=>Ee("location",k.target.value),placeholder:"Boston, MA, USA",required:!0}),A&&!p.university&&M.jsx("div",{className:"geocode-loading",children:"Searching..."}),R.length>0&&!p.university&&M.jsx("ul",{className:"geocode-results",children:R.map((k,ge)=>M.jsxs("li",{onClick:()=>me(k),children:[M.jsx("span",{className:"result-name",children:k.display_name}),M.jsxs("span",{className:"result-coords",children:[k.lat.toFixed(4),", ",k.lng.toFixed(4)]})]},ge))})]}),M.jsxs("div",{className:"form-row",children:[M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Latitude *"}),M.jsx("input",{type:"number",step:"any",value:p.lat,onChange:k=>Ee("lat",k.target.value),placeholder:"42.3601",required:!0})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Longitude *"}),M.jsx("input",{type:"number",step:"any",value:p.lng,onChange:k=>Ee("lng",k.target.value),placeholder:"-71.0589",required:!0})]})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Profile Image"}),M.jsxs("div",{className:"image-input-row",children:[M.jsxs("select",{value:p.image,onChange:k=>Ee("image",k.target.value),children:[M.jsx("option",{value:"",children:"No image"}),w.map(k=>M.jsx("option",{value:k,children:k},k))]}),M.jsx("input",{type:"file",ref:Ie,onChange:Pe,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),M.jsx("button",{type:"button",className:"upload-btn",onClick:()=>{var k;return(k=Ie.current)==null?void 0:k.click()},disabled:u,children:u?"Uploading...":"📤 Upload"})]}),p.image&&M.jsx("div",{className:"image-preview",children:M.jsx("img",{src:$h(p.image),alt:"Preview"})})]}),M.jsxs("div",{className:"form-actions",children:[M.jsx("button",{type:"submit",className:"primary",disabled:S,children:S?"Saving...":g?"Update":"Add Member"}),g&&M.jsx("button",{type:"button",className:"secondary",onClick:Oe,children:"Cancel"})]})]})]}),M.jsxs("div",{className:"admin-table-panel",children:[M.jsx("div",{className:"table-header",children:M.jsxs("h2",{children:["Members (",h.length,")"]})}),M.jsx("div",{className:"table-container",children:M.jsxs("table",{children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{children:"Image"}),M.jsx("th",{children:"Name"}),M.jsx("th",{children:"Title"}),M.jsx("th",{children:"University"}),M.jsx("th",{children:"Location"}),M.jsx("th",{children:"Lat"}),M.jsx("th",{children:"Lng"}),M.jsx("th",{children:"Actions"})]})}),M.jsxs("tbody",{children:[h.map(k=>{var ge,be;return M.jsxs("tr",{className:(g==null?void 0:g.id)===k.id?"selected":"",onClick:()=>fe(k),children:[M.jsx("td",{className:"img-cell",children:k.image?M.jsx("img",{src:$h(k.image),alt:k.name}):M.jsx("div",{className:"no-image",children:"?"})}),M.jsx("td",{className:"name-cell",children:k.name}),M.jsx("td",{children:k.title||"-"}),M.jsx("td",{className:"uni-cell",children:k.university||"-"}),M.jsx("td",{className:"location-cell",children:k.location}),M.jsx("td",{className:"coord-cell",children:(ge=k.lat)==null?void 0:ge.toFixed(2)}),M.jsx("td",{className:"coord-cell",children:(be=k.lng)==null?void 0:be.toFixed(2)}),M.jsxs("td",{className:"actions-cell",children:[M.jsx("button",{className:"edit-btn",onClick:ze=>{ze.stopPropagation(),fe(k)},children:"Edit"}),M.jsx("button",{className:"delete-btn",onClick:ze=>{ze.stopPropagation(),He(k.id)},children:"Delete"})]})]},k.id)}),h.length===0&&M.jsx("tr",{children:M.jsx("td",{colSpan:"8",className:"empty-row",children:"No members yet."})})]})]})})]})]}),c==="groups"&&M.jsxs("div",{className:"admin-content",children:[M.jsxs("div",{className:"admin-form-panel",children:[M.jsx("h2",{children:b?"Edit Subgroup":"Create Subgroup"}),M.jsxs("form",{onSubmit:L,children:[M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Group Name *"}),M.jsx("input",{type:"text",value:de.name,onChange:k=>Y(ge=>({...ge,name:k.target.value})),placeholder:"e.g. Editors, Reviewers, US Team",required:!0})]}),M.jsxs("div",{className:"form-group",children:[M.jsxs("label",{children:["Members (",de.memberIds.length," selected)"]}),M.jsxs("div",{className:"member-select-list",children:[h.map(k=>M.jsxs("label",{className:"member-select-item",children:[M.jsx("input",{type:"checkbox",checked:de.memberIds.includes(k.id),onChange:()=>Te(k.id)}),M.jsx("span",{className:"member-select-name",children:k.name}),M.jsx("span",{className:"member-select-location",children:k.location})]},k.id)),h.length===0&&M.jsx("p",{className:"no-members",children:"No members available. Add members first."})]})]}),M.jsxs("div",{className:"form-actions",children:[M.jsx("button",{type:"submit",className:"primary",disabled:Se,children:Se?"Saving...":b?"Update Group":"Create Group"}),b&&M.jsx("button",{type:"button",className:"secondary",onClick:ke,children:"Cancel"})]})]})]}),M.jsxs("div",{className:"admin-table-panel",children:[M.jsx("div",{className:"table-header",children:M.jsxs("h2",{children:["Subgroups (",D.length,")"]})}),M.jsx("div",{className:"table-container",children:M.jsxs("table",{children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{children:"Name"}),M.jsx("th",{children:"Members"}),M.jsx("th",{children:"Actions"})]})}),M.jsxs("tbody",{children:[D.map(k=>{var ge,be;return M.jsxs("tr",{className:(b==null?void 0:b.id)===k.id?"selected":"",onClick:()=>Ne(k),children:[M.jsx("td",{className:"name-cell",children:k.name}),M.jsxs("td",{children:[M.jsx("span",{className:"member-count",children:((ge=k.memberIds)==null?void 0:ge.length)||0}),((be=k.memberIds)==null?void 0:be.length)>0&&M.jsxs("span",{className:"member-preview",children:[k.memberIds.slice(0,3).map(ze=>{const We=h.find(it=>it.id===ze);return We?We.name.split(" ")[0]:""}).filter(Boolean).join(", "),k.memberIds.length>3&&` +${k.memberIds.length-3}`]})]}),M.jsxs("td",{className:"actions-cell",children:[M.jsx("button",{className:"edit-btn",onClick:ze=>{ze.stopPropagation(),Ne(k)},children:"Edit"}),M.jsx("button",{className:"delete-btn",onClick:ze=>{ze.stopPropagation(),Me(k.id)},children:"Delete"})]})]},k.id)}),D.length===0&&M.jsx("tr",{children:M.jsx("td",{colSpan:"3",className:"empty-row",children:"No subgroups yet. Create one to organize members."})})]})]})})]})]}),oe&&M.jsxs("div",{className:`toast-notification ${oe.type}`,children:[oe.type==="success"?"✓":"ℹ"," ",oe.message]})]})}function NL(){const[t,e]=se.useState([]),[n,i]=se.useState(!0),[r,s]=se.useState(null),o=se.useCallback(async()=>{try{i(!0);const a=await gR();e(a),s(null)}catch(a){console.error("Failed to load cards:",a),s(a.message)}finally{i(!1)}},[]);return se.useEffect(()=>{o()},[o]),{cards:t,loading:n,error:r,refetch:o}}function DL(){const[t,e]=se.useState([]),[n,i]=se.useState(!0),[r,s]=se.useState(null),o=se.useCallback(async()=>{try{i(!0);const a=await fetch(`${wt}/groups`);if(!a.ok)throw new Error("Failed to fetch groups");const l=await a.json();e(l),s(null)}catch(a){s(a.message)}finally{i(!1)}},[]);return se.useEffect(()=>{o()},[o]),{groups:t,loading:n,error:r,refetch:o}}console.log("APP VERSION 5 LOADED - OPTIMIZED");function UL(){const[t,e]=se.useState("globe"),{cards:n,loading:i,error:r,refetch:s}=NL(),{groups:o,refetch:a}=DL(),[l,c]=se.useState([]),[d,h]=se.useState(null),[f,g]=se.useState(0),[y,S]=se.useState(!0),[m,u]=se.useState({}),[v,p]=se.useState(null),E=se.useMemo(()=>new URLSearchParams(window.location.search),[]),R=E.get("embed")==="true",T=E.get("group"),A=se.useMemo(()=>!T||T==="all"?null:o.find(K=>K.id===T),[T,o]),H=se.useMemo(()=>!T||T==="all"?"All Members":(A==null?void 0:A.name)||"All Members",[T,A]),[w,C]=se.useState(!1),[G,W]=se.useState(null),[he,F]=se.useState(!1),ee=se.useRef(null),J=se.useRef(Date.now()),ne=se.useCallback(()=>{J.current=Date.now(),S(!1),ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>{S(!0)},5e3)},[]);se.useEffect(()=>()=>{ee.current&&clearTimeout(ee.current)},[]),se.useEffect(()=>{if(!R||he||n.length===0)return;let K;T&&T!=="all"&&A?K=n.filter(z=>{var _;return(_=A.memberIds)==null?void 0:_.includes(z.id)}):K=n;const _e=new Set(K.map(z=>z.id));p(_e),F(!0)},[R,he,n,T,A]),se.useEffect(()=>{const K=()=>{let _e;window.location.hash&&window.location.hash.length>1?_e=new URLSearchParams(window.location.hash.slice(1)):_e=new URLSearchParams(window.location.search);const z=_e.get("notification"),_=_e.get("message");z&&_&&(W({type:z,message:decodeURIComponent(_)}),window.history.replaceState({},"","/anking-globe/"),setTimeout(()=>W(null),4e3))};return K(),window.addEventListener("hashchange",K),()=>window.removeEventListener("hashchange",K)},[]);const U=se.useCallback(K=>{p(_e=>{if(_e===null){const _=new Set(n.map(x=>x.id));return _.delete(K),_}const z=new Set(_e);return z.has(K)?(z.delete(K),c(_=>_.filter(x=>x!==K)),d===K&&h(null)):z.add(K),z.size===n.length?null:z})},[n,d]),Q=se.useCallback(K=>{if(ne(),d===K.id){c(_e=>_e.filter(z=>z!==K.id)),h(null);return}c(_e=>_e.includes(K.id)?_e:[..._e,K.id]),h(K.id)},[ne,d]),q=se.useCallback(K=>{c(_e=>_e.filter(z=>z!==K)),d===K&&h(null)},[d]),pe=se.useCallback(K=>{h(d===K?null:K)},[d]),xe=se.useCallback(K=>{ne(),c(_e=>_e.includes(K)?(d===K&&h(null),_e.filter(_=>_!==K)):(n.find(x=>x.id===K)&&(h(K),g(x=>x+1)),[..._e,K]))},[n,d,ne]),oe=se.useCallback(()=>{ne();const K=v===null?n.map(_e=>_e.id):Array.from(v);c(K)},[n,v,ne]),O=se.useCallback(()=>{c([]),h(null)},[]),D=se.useCallback(()=>{w?(c([]),h(null)):c(n.map(K=>K.id)),C(!w),ne()},[w,n,ne]),P=se.useRef(m);P.current=m;const b=se.useRef(0),re=se.useRef(null),de=se.useRef(null),Y=se.useCallback(K=>{const _e=performance.now();if(re.current=K,_e-b.current<33){de.current||(de.current=requestAnimationFrame(()=>{re.current&&(u(re.current),b.current=performance.now()),de.current=null}));return}u(K),b.current=_e},[]);se.useEffect(()=>()=>{de.current&&cancelAnimationFrame(de.current)},[]);const Se=se.useCallback(()=>{ne()},[ne]),V=se.useCallback(()=>{h(null)},[]),Ie=se.useMemo(()=>n.filter(K=>l.includes(K.id)),[n,l]),ie=se.useMemo(()=>new Set(n.map(K=>{var _e;return(_e=K.location.split(",").pop())==null?void 0:_e.trim()})).size,[n]);if(i)return M.jsx(_R,{});if(r)return M.jsxs("div",{className:"error-screen",children:["Error: ",r]});if(t==="admin")return M.jsx(jv,{onBack:()=>{e("globe"),s(),a()}});const le=d;return M.jsxs(M.Fragment,{children:[t==="admin"?M.jsx(jv,{onBack:()=>{e("globe"),s(),a()}}):M.jsxs("div",{className:`globe-container ${R?"embed-mode":""}`,children:[M.jsx(pR,{cards:n,selectedCards:l,autoRotate:y,onMarkerClick:Q,onMarkerVisibilityChange:Y,onInteraction:Se,focusCardId:le,onFocusLost:V,visibleCardIds:v}),!R&&M.jsx(mR,{cards:n,groups:o,selectedCards:l,visibleCardIds:v,autoRotate:y,onAutoRotateChange:S,onToggleCard:xe,onToggleCardVisibility:U,onOpenAll:oe,onCloseAll:O,onManageClick:()=>e("admin"),isEmbedMode:R}),Ie.map((K,_e)=>M.jsx(vR,{card:K,visibilityData:m,onClose:q,onFocus:pe,isFocused:d===K.id,zIndex:1e3+_e},K.id)),M.jsx("div",{className:`globe-logo-container ${R?"embed":""}`,children:M.jsx("img",{src:"/anking-globe/logo.png",alt:"Logo",className:"globe-logo"})}),M.jsx("div",{className:"globe-footer",children:R?H:"AnKing Step Deck Maintainers · 2025"}),M.jsxs("div",{className:"globe-stats",children:[M.jsxs("div",{className:"stat-item",children:[M.jsx("div",{className:"stat-value",children:R?(v==null?void 0:v.size)||0:n.length}),M.jsx("div",{className:"stat-label",children:"Active Members"})]}),M.jsxs("div",{className:"stat-item",children:[M.jsx("div",{className:"stat-value",children:ie}),M.jsx("div",{className:"stat-label",children:"Countries"})]})]}),M.jsxs("div",{className:"instructions",children:[M.jsx("kbd",{children:"Drag"})," to rotate · ",M.jsx("kbd",{children:"Scroll"})," to zoom",M.jsx("br",{}),"Click markers to toggle cards"]}),R&&M.jsx(M.Fragment,{children:M.jsx("button",{className:"embed-toggle-btn",onClick:D,children:w?M.jsxs(M.Fragment,{children:[M.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),M.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]}):M.jsxs(M.Fragment,{children:[M.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),M.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]})})})]}),G&&M.jsxs("div",{className:`toast-notification ${G.type}`,children:[G.type==="success"?"✓":"ℹ"," ",G.message]})]})}Vd.createRoot(document.getElementById("root")).render(M.jsx(iS.StrictMode,{children:M.jsx(UL,{})}));
