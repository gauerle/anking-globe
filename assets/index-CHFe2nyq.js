(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Jx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qv={exports:{}},tu={},e_={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Zx=Symbol.for("react.portal"),Qx=Symbol.for("react.fragment"),eS=Symbol.for("react.strict_mode"),tS=Symbol.for("react.profiler"),nS=Symbol.for("react.provider"),iS=Symbol.for("react.context"),rS=Symbol.for("react.forward_ref"),sS=Symbol.for("react.suspense"),oS=Symbol.for("react.memo"),aS=Symbol.for("react.lazy"),Rp=Symbol.iterator;function lS(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var t_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n_=Object.assign,i_={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=i_,this.updater=n||t_}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r_(){}r_.prototype=Eo.prototype;function uf(t,e,n){this.props=t,this.context=e,this.refs=i_,this.updater=n||t_}var df=uf.prototype=new r_;df.constructor=uf;n_(df,Eo.prototype);df.isPureReactComponent=!0;var Pp=Array.isArray,s_=Object.prototype.hasOwnProperty,hf={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s_.call(e,i)&&!o_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ba,type:t,key:s,ref:o,props:r,_owner:hf.current}}function cS(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function uS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uS(""+t.key):e.toString(36)}function $l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case Zx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,Pp(r)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),$l(r,e,n,"",function(c){return c})):r!=null&&(ff(r)&&(r=cS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ip,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=$l(s,e,n,l,r)}else if(l=lS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=$l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var i=[],r=0;return $l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},ql={transition:null},hS={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:ql,ReactCurrentOwner:hf};function l_(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Eo;Qe.Fragment=Qx;Qe.Profiler=tS;Qe.PureComponent=uf;Qe.StrictMode=eS;Qe.Suspense=sS;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hS;Qe.act=l_;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=n_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)s_.call(e,l)&&!o_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:iS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nS,_context:t},t.Consumer=t};Qe.createElement=a_;Qe.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:rS,render:t}};Qe.isValidElement=ff;Qe.lazy=function(t){return{$$typeof:aS,_payload:{_status:-1,_result:t},_init:dS}};Qe.memo=function(t,e){return{$$typeof:oS,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};Qe.unstable_act=l_;Qe.useCallback=function(t,e){return on.current.useCallback(t,e)};Qe.useContext=function(t){return on.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return on.current.useEffect(t,e)};Qe.useId=function(){return on.current.useId()};Qe.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return on.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Qe.useRef=function(t){return on.current.useRef(t)};Qe.useState=function(t){return on.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return on.current.useTransition()};Qe.version="18.3.1";e_.exports=Qe;var de=e_.exports;const fS=Jx(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pS=de,mS=Symbol.for("react.element"),gS=Symbol.for("react.fragment"),vS=Object.prototype.hasOwnProperty,_S=pS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vS.call(e,i)&&!yS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mS,type:t,key:s,ref:o,props:r,_owner:_S.current}}tu.Fragment=gS;tu.jsx=c_;tu.jsxs=c_;Qv.exports=tu;var M=Qv.exports,qd={},u_={exports:{}},Mn={},d_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var K=U.length;U.push(Y);e:for(;0<K;){var ge=K-1>>>1,_e=U[ge];if(0<r(_e,Y))U[ge]=Y,U[K]=_e,K=ge;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Y=U[0],K=U.pop();if(K!==Y){U[0]=K;e:for(var ge=0,_e=U.length,re=_e>>>1;ge<re;){var O=2*(ge+1)-1,N=U[O],P=O+1,b=U[P];if(0>r(N,K))P<_e&&0>r(b,N)?(U[ge]=b,U[P]=K,ge=P):(U[ge]=N,U[O]=K,ge=O);else if(P<_e&&0>r(b,K))U[ge]=b,U[P]=K,ge=P;else break e}}return Y}function r(U,Y){var K=U.sortIndex-Y.sortIndex;return K!==0?K:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,y=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(U){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=U)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function E(U){if(x=!1,p(U),!y)if(n(l)!==null)y=!0,q(R);else{var Y=n(c);Y!==null&&te(E,Y.startTime-U)}}function R(U,Y){y=!1,x&&(x=!1,u(z),z=-1),g=!0;var K=f;try{for(p(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||U&&!W());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,f=h.priorityLevel;var _e=ge(h.expirationTime<=Y);Y=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&i(l),p(Y)}else i(l);h=n(l)}if(h!==null)var re=!0;else{var O=n(c);O!==null&&te(E,O.startTime-Y),re=!1}return re}finally{h=null,f=K,g=!1}}var A=!1,T=null,z=-1,w=5,C=-1;function W(){return!(t.unstable_now()-C<w)}function X(){if(T!==null){var U=t.unstable_now();C=U;var Y=!0;try{Y=T(!0,U)}finally{Y?fe():(A=!1,T=null)}}else A=!1}var fe;if(typeof _=="function")fe=function(){_(X)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=X,fe=function(){J.postMessage(null)}}else fe=function(){m(X,0)};function q(U){T=U,A||(A=!0,fe())}function te(U,Y){z=m(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,q(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var K=f;f=Y;try{return U()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var K=f;f=U;try{return Y()}finally{f=K}},t.unstable_scheduleCallback=function(U,Y,K){var ge=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ge+K:ge):K=ge,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=K+_e,U={id:d++,callback:Y,priorityLevel:U,startTime:K,expirationTime:_e,sortIndex:-1},K>ge?(U.sortIndex=K,e(c,U),n(l)===null&&U===n(c)&&(x?(u(z),z=-1):x=!0,te(E,K-ge))):(U.sortIndex=_e,e(l,U),y||g||(y=!0,q(R))),U},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(U){var Y=f;return function(){var K=f;f=Y;try{return U.apply(this,arguments)}finally{f=K}}}})(h_);d_.exports=h_;var xS=d_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=de,En=xS;function Ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f_=new Set,fa={};function cs(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(fa[t]=e,t=0;t<e.length;t++)f_.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,ES=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Np={};function MS(t){return Yd.call(Np,t)?!0:Yd.call(Lp,t)?!1:ES.test(t)?Np[t]=!0:(Lp[t]=!0,!1)}function wS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TS(t,e,n,i){if(e===null||typeof e>"u"||wS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Vt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TS(e,n,r,i)&&(n=null),i||r===null?MS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Iu;function Xo(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var Lu=!1;function Nu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function AS(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Ds:return"Portal";case Kd:return"Profiler";case vf:return"StrictMode";case Jd:return"Suspense";case Zd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m_:return(t.displayName||"Context")+".Consumer";case p_:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:Qd(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Qd(t(e))}catch{}}return null}function bS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CS(t){var e=v_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=CS(t))}function __(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=v_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eh(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function y_(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function th(t,e){y_(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nh(t,e.type,n):e.hasOwnProperty("defaultValue")&&nh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nh(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Ae(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Ae(92));if($o(n)){if(1<n.length)throw Error(Ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function x_(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,E_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RS=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){RS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function M_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function w_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=M_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var PS=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sh(t,e){if(e){if(PS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Ae(62))}}function oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ah=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lh=null,Js=null,Zs=null;function Bp(t){if(t=Va(t)){if(typeof lh!="function")throw Error(Ae(280));var e=t.stateNode;e&&(e=ou(e),lh(t.stateNode,t.type,e))}}function T_(t){Js?Zs?Zs.push(t):Zs=[t]:Js=t}function A_(){if(Js){var t=Js,e=Zs;if(Zs=Js=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function b_(t,e){return t(e)}function C_(){}var Du=!1;function R_(t,e,n){if(Du)return t(e,n);Du=!0;try{return b_(t,e,n)}finally{Du=!1,(Js!==null||Zs!==null)&&(C_(),A_())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Ae(231,e,typeof n));return n}var ch=!1;if(Li)try{var No={};Object.defineProperty(No,"passive",{get:function(){ch=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{ch=!1}function IS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Zo=!1,fc=null,pc=!1,uh=null,LS={onError:function(t){Zo=!0,fc=t}};function NS(t,e,n,i,r,s,o,a,l){Zo=!1,fc=null,IS.apply(LS,arguments)}function DS(t,e,n,i,r,s,o,a,l){if(NS.apply(this,arguments),Zo){if(Zo){var c=fc;Zo=!1,fc=null}else throw Error(Ae(198));pc||(pc=!0,uh=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(us(t)!==t)throw Error(Ae(188))}function US(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(Ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zp(r),t;if(s===i)return zp(r),e;s=s.sibling}throw Error(Ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Ae(189))}}if(n.alternate!==i)throw Error(Ae(190))}if(n.tag!==3)throw Error(Ae(188));return n.stateNode.current===n?t:e}function I_(t){return t=US(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var N_=En.unstable_scheduleCallback,Hp=En.unstable_cancelCallback,OS=En.unstable_shouldYield,kS=En.unstable_requestPaint,Mt=En.unstable_now,FS=En.unstable_getCurrentPriorityLevel,Sf=En.unstable_ImmediatePriority,D_=En.unstable_UserBlockingPriority,mc=En.unstable_NormalPriority,BS=En.unstable_LowPriority,U_=En.unstable_IdlePriority,nu=null,ii=null;function zS(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:GS,HS=Math.log,VS=Math.LN2;function GS(t){return t>>>=0,t===0?32:31-(HS(t)/VS|0)|0}var sl=64,ol=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qo(a):(s&=o,s!==0&&(i=qo(s)))}else o=n&~r,o!==0?i=qo(o):s!==0&&(i=qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function WS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=WS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O_(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function XS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function k_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var F_,Mf,B_,z_,H_,hh=!1,al=[],lr=null,cr=null,ur=null,ga=new Map,va=new Map,Qi=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Do(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&Mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qS(t,e,n,i,r){switch(e){case"focusin":return lr=Do(lr,t,e,n,i,r),!0;case"dragenter":return cr=Do(cr,t,e,n,i,r),!0;case"mouseover":return ur=Do(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Do(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,Do(va.get(s)||null,t,e,n,i,r)),!0}return!1}function V_(t){var e=Gr(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=P_(n),e!==null){t.blockedOn=e,H_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ah=i,n.target.dispatchEvent(i),ah=null}else return e=Va(n),e!==null&&Mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Yl(t)&&n.delete(e)}function YS(){hh=!1,lr!==null&&Yl(lr)&&(lr=null),cr!==null&&Yl(cr)&&(cr=null),ur!==null&&Yl(ur)&&(ur=null),ga.forEach(Gp),va.forEach(Gp)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,hh||(hh=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,YS)))}function _a(t){function e(r){return Uo(r,t)}if(0<al.length){Uo(al[0],t);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&Uo(lr,t),cr!==null&&Uo(cr,t),ur!==null&&Uo(ur,t),ga.forEach(e),va.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)V_(n),n.blockedOn===null&&Qi.shift()}var Qs=zi.ReactCurrentBatchConfig,vc=!0;function KS(t,e,n,i){var r=st,s=Qs.transition;Qs.transition=null;try{st=1,wf(t,e,n,i)}finally{st=r,Qs.transition=s}}function JS(t,e,n,i){var r=st,s=Qs.transition;Qs.transition=null;try{st=4,wf(t,e,n,i)}finally{st=r,Qs.transition=s}}function wf(t,e,n,i){if(vc){var r=fh(t,e,n,i);if(r===null)ju(t,e,i,_c,n),Vp(t,i);else if(qS(r,t,e,n,i))i.stopPropagation();else if(Vp(t,i),e&4&&-1<$S.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&F_(s),s=fh(t,e,n,i),s===null&&ju(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var _c=null;function fh(t,e,n,i){if(_c=null,t=xf(i),t=Gr(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function G_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FS()){case Sf:return 1;case D_:return 4;case mc:case BS:return 16;case U_:return 536870912;default:return 16}default:return 16}}var rr=null,Tf=null,Kl=null;function W_(){if(Kl)return Kl;var t,e=Tf,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function Jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Wp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:Wp,this.isPropagationStopped=Wp,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=wn(Mo),Ha=yt({},Mo,{view:0,detail:0}),ZS=wn(Ha),Ou,ku,Oo,iu=yt({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Ou=t.screenX-Oo.screenX,ku=t.screenY-Oo.screenY):ku=Ou=0,Oo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),jp=wn(iu),QS=yt({},iu,{dataTransfer:0}),eE=wn(QS),tE=yt({},Ha,{relatedTarget:0}),Fu=wn(tE),nE=yt({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),iE=wn(nE),rE=yt({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sE=wn(rE),oE=yt({},Mo,{data:0}),Xp=wn(oE),aE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cE[t])?!!e[t]:!1}function bf(){return uE}var dE=yt({},Ha,{key:function(t){if(t.key){var e=aE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?Jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hE=wn(dE),fE=yt({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=wn(fE),pE=yt({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),mE=wn(pE),gE=yt({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),vE=wn(gE),_E=yt({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yE=wn(_E),xE=[9,13,27,32],Cf=Li&&"CompositionEvent"in window,Qo=null;Li&&"documentMode"in document&&(Qo=document.documentMode);var SE=Li&&"TextEvent"in window&&!Qo,j_=Li&&(!Cf||Qo&&8<Qo&&11>=Qo),qp=" ",Yp=!1;function X_(t,e){switch(t){case"keyup":return xE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function EE(t,e){switch(t){case"compositionend":return $_(e);case"keypress":return e.which!==32?null:(Yp=!0,qp);case"textInput":return t=e.data,t===qp&&Yp?null:t;default:return null}}function ME(t,e){if(Os)return t==="compositionend"||!Cf&&X_(t,e)?(t=W_(),Kl=Tf=rr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return j_&&e.locale!=="ko"?null:e.data;default:return null}}var wE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wE[t.type]:e==="textarea"}function q_(t,e,n,i){T_(i),e=yc(e,"onChange"),0<e.length&&(n=new Af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ea=null,ya=null;function TE(t){s0(t,0)}function ru(t){var e=Bs(t);if(__(e))return t}function AE(t,e){if(t==="change")return e}var Y_=!1;if(Li){var Bu;if(Li){var zu="oninput"in document;if(!zu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),zu=typeof Jp.oninput=="function"}Bu=zu}else Bu=!1;Y_=Bu&&(!document.documentMode||9<document.documentMode)}function Zp(){ea&&(ea.detachEvent("onpropertychange",K_),ya=ea=null)}function K_(t){if(t.propertyName==="value"&&ru(ya)){var e=[];q_(e,ya,t,xf(t)),R_(TE,e)}}function bE(t,e,n){t==="focusin"?(Zp(),ea=e,ya=n,ea.attachEvent("onpropertychange",K_)):t==="focusout"&&Zp()}function CE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(ya)}function RE(t,e){if(t==="click")return ru(e)}function PE(t,e){if(t==="input"||t==="change")return ru(e)}function IE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:IE;function xa(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yd.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LE(t){var e=Z_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(i!==null&&Rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=em(n,s);var o=em(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NE=Li&&"documentMode"in document&&11>=document.documentMode,ks=null,ph=null,ta=null,mh=!1;function tm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mh||ks==null||ks!==hc(i)||(i=ks,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&xa(ta,i)||(ta=i,i=yc(ph,"onSelect"),0<i.length&&(e=new Af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Hu={},Q_={};Li&&(Q_=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function su(t){if(Hu[t])return Hu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q_)return Hu[t]=e[n];return t}var e0=su("animationend"),t0=su("animationiteration"),n0=su("animationstart"),i0=su("transitionend"),r0=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){r0.set(t,e),cs(e,[t])}for(var Vu=0;Vu<nm.length;Vu++){var Gu=nm[Vu],DE=Gu.toLowerCase(),UE=Gu[0].toUpperCase()+Gu.slice(1);Tr(DE,"on"+UE)}Tr(e0,"onAnimationEnd");Tr(t0,"onAnimationIteration");Tr(n0,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(i0,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function im(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,DS(i,e,void 0,t),t.currentTarget=null}function s0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}}}if(pc)throw t=uh,pc=!1,uh=null,t}function ct(t,e){var n=e[xh];n===void 0&&(n=e[xh]=new Set);var i=t+"__bubble";n.has(i)||(o0(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),o0(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[ul]){t[ul]=!0,f_.forEach(function(n){n!=="selectionchange"&&(OE.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Wu("selectionchange",!1,e))}}function o0(t,e,n,i){switch(G_(e)){case 1:var r=KS;break;case 4:r=JS;break;default:r=wf}n=r.bind(null,e,n,t),r=void 0,!ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}R_(function(){var c=s,d=xf(n),h=[];e:{var f=r0.get(t);if(f!==void 0){var g=Af,y=t;switch(t){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":g=hE;break;case"focusin":y="focus",g=Fu;break;case"focusout":y="blur",g=Fu;break;case"beforeblur":case"afterblur":g=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mE;break;case e0:case t0:case n0:g=iE;break;case i0:g=vE;break;case"scroll":g=ZS;break;case"wheel":g=yE;break;case"copy":case"cut":case"paste":g=sE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$p}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,p;_!==null;){p=_;var E=p.stateNode;if(p.tag===5&&E!==null&&(p=E,u!==null&&(E=ma(_,u),E!=null&&x.push(Ea(_,E,p)))),m)break;_=_.return}0<x.length&&(f=new g(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ah&&(y=n.relatedTarget||n.fromElement)&&(Gr(y)||y[Ni]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Gr(y):null,y!==null&&(m=us(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=jp,E="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=$p,E="onPointerLeave",u="onPointerEnter",_="pointer"),m=g==null?f:Bs(g),p=y==null?f:Bs(y),f=new x(E,_+"leave",g,n,d),f.target=m,f.relatedTarget=p,E=null,Gr(d)===c&&(x=new x(u,_+"enter",y,n,d),x.target=p,x.relatedTarget=m,E=x),m=E,g&&y)t:{for(x=g,u=y,_=0,p=x;p;p=fs(p))_++;for(p=0,E=u;E;E=fs(E))p++;for(;0<_-p;)x=fs(x),_--;for(;0<p-_;)u=fs(u),p--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=fs(x),u=fs(u)}x=null}else x=null;g!==null&&rm(h,f,g,x,!1),y!==null&&m!==null&&rm(h,m,y,x,!0)}}e:{if(f=c?Bs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var R=AE;else if(Kp(f))if(Y_)R=PE;else{R=CE;var A=bE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=RE);if(R&&(R=R(t,c))){q_(h,R,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&nh(f,"number",f.value)}switch(A=c?Bs(c):window,t){case"focusin":(Kp(A)||A.contentEditable==="true")&&(ks=A,ph=c,ta=null);break;case"focusout":ta=ph=ks=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,tm(h,n,d);break;case"selectionchange":if(NE)break;case"keydown":case"keyup":tm(h,n,d)}var T;if(Cf)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Os?X_(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(j_&&n.locale!=="ko"&&(Os||z!=="onCompositionStart"?z==="onCompositionEnd"&&Os&&(T=W_()):(rr=d,Tf="value"in rr?rr.value:rr.textContent,Os=!0)),A=yc(c,z),0<A.length&&(z=new Xp(z,t,null,n,d),h.push({event:z,listeners:A}),T?z.data=T:(T=$_(n),T!==null&&(z.data=T)))),(T=SE?EE(t,n):ME(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(d=new Xp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}s0(h,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=ma(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ma(n,s),l!=null&&o.unshift(Ea(n,l,a))):r||(l=ma(n,s),l!=null&&o.push(Ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kE=/\r\n?/g,FE=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(kE,`
`).replace(FE,"")}function dl(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(Ae(425))}function xc(){}var gh=null,vh=null;function _h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,BE=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,zE=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(HE)}:yh;function HE(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),ni="__reactFiber$"+wo,Ma="__reactProps$"+wo,Ni="__reactContainer$"+wo,xh="__reactEvents$"+wo,VE="__reactListeners$"+wo,GE="__reactHandles$"+wo;function Gr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[ni])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[ni]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Ae(33))}function ou(t){return t[Ma]||null}var Sh=[],zs=-1;function Ar(t){return{current:t}}function dt(t){0>zs||(t.current=Sh[zs],Sh[zs]=null,zs--)}function lt(t,e){zs++,Sh[zs]=t.current,t.current=e}var Mr={},Jt=Ar(Mr),hn=Ar(!1),Qr=Mr;function co(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Sc(){dt(hn),dt(Jt)}function lm(t,e,n){if(Jt.current!==Mr)throw Error(Ae(168));lt(Jt,e),lt(hn,n)}function a0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Ae(108,bS(t)||"Unknown",r));return yt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Qr=Jt.current,lt(Jt,t),lt(hn,hn.current),!0}function cm(t,e,n){var i=t.stateNode;if(!i)throw Error(Ae(169));n?(t=a0(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,dt(hn),dt(Jt),lt(Jt,t)):dt(hn),lt(hn,n)}var Ei=null,au=!1,$u=!1;function l0(t){Ei===null?Ei=[t]:Ei.push(t)}function WE(t){au=!0,l0(t)}function br(){if(!$u&&Ei!==null){$u=!0;var t=0,e=st;try{var n=Ei;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,au=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),N_(Sf,br),r}finally{st=e,$u=!1}}return null}var Hs=[],Vs=0,Mc=null,wc=0,bn=[],Cn=0,es=null,wi=1,Ti="";function kr(t,e){Hs[Vs++]=wc,Hs[Vs++]=Mc,Mc=t,wc=e}function c0(t,e,n){bn[Cn++]=wi,bn[Cn++]=Ti,bn[Cn++]=es,es=t;var i=wi;t=Ti;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-qn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Pf(t){t.return!==null&&(kr(t,1),c0(t,1,0))}function If(t){for(;t===Mc;)Mc=Hs[--Vs],Hs[Vs]=null,wc=Hs[--Vs],Hs[Vs]=null;for(;t===es;)es=bn[--Cn],bn[Cn]=null,Ti=bn[--Cn],bn[Cn]=null,wi=bn[--Cn],bn[Cn]=null}var Sn=null,xn=null,ft=!1,Gn=null;function u0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function Eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(ft){var e=xn;if(e){var n=e;if(!um(t,e)){if(Eh(t))throw Error(Ae(418));e=dr(n.nextSibling);var i=Sn;e&&um(t,e)?u0(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(Eh(t))throw Error(Ae(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function hl(t){if(t!==Sn)return!1;if(!ft)return dm(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_h(t.type,t.memoizedProps)),e&&(e=xn)){if(Eh(t))throw d0(),Error(Ae(418));for(;e;)u0(t,e),e=dr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?dr(t.stateNode.nextSibling):null;return!0}function d0(){for(var t=xn;t;)t=dr(t.nextSibling)}function uo(){xn=Sn=null,ft=!1}function Lf(t){Gn===null?Gn=[t]:Gn.push(t)}var jE=zi.ReactCurrentBatchConfig;function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Ae(309));var i=n.stateNode}if(!i)throw Error(Ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Ae(284));if(!n._owner)throw Error(Ae(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(Ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function h0(t){function e(u,_){if(t){var p=u.deletions;p===null?(u.deletions=[_],u.flags|=16):p.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=mr(u,_),u.index=0,u.sibling=null,u}function s(u,_,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<_?(u.flags|=2,_):p):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,p,E){return _===null||_.tag!==6?(_=ed(p,u.mode,E),_.return=u,_):(_=r(_,p),_.return=u,_)}function l(u,_,p,E){var R=p.type;return R===Us?d(u,_,p.props.children,E,p.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ki&&hm(R)===_.type)?(E=r(_,p.props),E.ref=ko(u,_,p),E.return=u,E):(E=rc(p.type,p.key,p.props,null,u.mode,E),E.ref=ko(u,_,p),E.return=u,E)}function c(u,_,p,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=td(p,u.mode,E),_.return=u,_):(_=r(_,p.children||[]),_.return=u,_)}function d(u,_,p,E,R){return _===null||_.tag!==7?(_=qr(p,u.mode,E,R),_.return=u,_):(_=r(_,p),_.return=u,_)}function h(u,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ed(""+_,u.mode,p),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:return p=rc(_.type,_.key,_.props,null,u.mode,p),p.ref=ko(u,null,_),p.return=u,p;case Ds:return _=td(_,u.mode,p),_.return=u,_;case Ki:var E=_._init;return h(u,E(_._payload),p)}if($o(_)||Lo(_))return _=qr(_,u.mode,p,null),_.return=u,_;fl(u,_)}return null}function f(u,_,p,E){var R=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return R!==null?null:a(u,_,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nl:return p.key===R?l(u,_,p,E):null;case Ds:return p.key===R?c(u,_,p,E):null;case Ki:return R=p._init,f(u,_,R(p._payload),E)}if($o(p)||Lo(p))return R!==null?null:d(u,_,p,E,null);fl(u,p)}return null}function g(u,_,p,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(p)||null,a(_,u,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case nl:return u=u.get(E.key===null?p:E.key)||null,l(_,u,E,R);case Ds:return u=u.get(E.key===null?p:E.key)||null,c(_,u,E,R);case Ki:var A=E._init;return g(u,_,p,A(E._payload),R)}if($o(E)||Lo(E))return u=u.get(p)||null,d(_,u,E,R,null);fl(_,E)}return null}function y(u,_,p,E){for(var R=null,A=null,T=_,z=_=0,w=null;T!==null&&z<p.length;z++){T.index>z?(w=T,T=null):w=T.sibling;var C=f(u,T,p[z],E);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(u,T),_=s(C,_,z),A===null?R=C:A.sibling=C,A=C,T=w}if(z===p.length)return n(u,T),ft&&kr(u,z),R;if(T===null){for(;z<p.length;z++)T=h(u,p[z],E),T!==null&&(_=s(T,_,z),A===null?R=T:A.sibling=T,A=T);return ft&&kr(u,z),R}for(T=i(u,T);z<p.length;z++)w=g(T,u,z,p[z],E),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?z:w.key),_=s(w,_,z),A===null?R=w:A.sibling=w,A=w);return t&&T.forEach(function(W){return e(u,W)}),ft&&kr(u,z),R}function x(u,_,p,E){var R=Lo(p);if(typeof R!="function")throw Error(Ae(150));if(p=R.call(p),p==null)throw Error(Ae(151));for(var A=R=null,T=_,z=_=0,w=null,C=p.next();T!==null&&!C.done;z++,C=p.next()){T.index>z?(w=T,T=null):w=T.sibling;var W=f(u,T,C.value,E);if(W===null){T===null&&(T=w);break}t&&T&&W.alternate===null&&e(u,T),_=s(W,_,z),A===null?R=W:A.sibling=W,A=W,T=w}if(C.done)return n(u,T),ft&&kr(u,z),R;if(T===null){for(;!C.done;z++,C=p.next())C=h(u,C.value,E),C!==null&&(_=s(C,_,z),A===null?R=C:A.sibling=C,A=C);return ft&&kr(u,z),R}for(T=i(u,T);!C.done;z++,C=p.next())C=g(T,u,z,C.value,E),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?z:C.key),_=s(C,_,z),A===null?R=C:A.sibling=C,A=C);return t&&T.forEach(function(X){return e(u,X)}),ft&&kr(u,z),R}function m(u,_,p,E){if(typeof p=="object"&&p!==null&&p.type===Us&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case nl:e:{for(var R=p.key,A=_;A!==null;){if(A.key===R){if(R=p.type,R===Us){if(A.tag===7){n(u,A.sibling),_=r(A,p.props.children),_.return=u,u=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ki&&hm(R)===A.type){n(u,A.sibling),_=r(A,p.props),_.ref=ko(u,A,p),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}p.type===Us?(_=qr(p.props.children,u.mode,E,p.key),_.return=u,u=_):(E=rc(p.type,p.key,p.props,null,u.mode,E),E.ref=ko(u,_,p),E.return=u,u=E)}return o(u);case Ds:e:{for(A=p.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(u,_.sibling),_=r(_,p.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=td(p,u.mode,E),_.return=u,u=_}return o(u);case Ki:return A=p._init,m(u,_,A(p._payload),E)}if($o(p))return y(u,_,p,E);if(Lo(p))return x(u,_,p,E);fl(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,p),_.return=u,u=_):(n(u,_),_=ed(p,u.mode,E),_.return=u,u=_),o(u)):n(u,_)}return m}var ho=h0(!0),f0=h0(!1),Tc=Ar(null),Ac=null,Gs=null,Nf=null;function Df(){Nf=Gs=Ac=null}function Uf(t){var e=Tc.current;dt(Tc),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){Ac=t,Nf=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Nf!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Ac===null)throw Error(Ae(308));Gs=t,Ac.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Wr=null;function Of(t){Wr===null?Wr=[t]:Wr.push(t)}function p0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Of(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Of(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ef(t,n)}}function fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(f=e,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=yt({},h,f);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=h}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Ae(191,r));r.call(i)}}}var Ga={},ri=Ar(Ga),wa=Ar(Ga),Ta=Ar(Ga);function jr(t){if(t===Ga)throw Error(Ae(174));return t}function Ff(t,e){switch(lt(Ta,e),lt(wa,t),lt(ri,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rh(e,t)}dt(ri),lt(ri,e)}function fo(){dt(ri),dt(wa),dt(Ta)}function g0(t){jr(Ta.current);var e=jr(ri.current),n=rh(e,t.type);e!==n&&(lt(wa,t),lt(ri,n))}function Bf(t){wa.current===t&&(dt(ri),dt(wa))}var gt=Ar(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function zf(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var Ql=zi.ReactCurrentDispatcher,Yu=zi.ReactCurrentBatchConfig,ts=0,_t=null,Rt=null,Ut=null,Rc=!1,na=!1,Aa=0,XE=0;function Wt(){throw Error(Ae(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Vf(t,e,n,i,r,s){if(ts=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?KE:JE,t=n(i,r),na){s=0;do{if(na=!1,Aa=0,25<=s)throw Error(Ae(301));s+=1,Ut=Rt=null,e.updateQueue=null,Ql.current=ZE,t=n(i,r)}while(na)}if(Ql.current=Pc,e=Rt!==null&&Rt.next!==null,ts=0,Ut=Rt=_t=null,Rc=!1,e)throw Error(Ae(300));return t}function Gf(){var t=Aa!==0;return Aa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function On(){if(Rt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(Ae(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ba(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=On(),n=e.queue;if(n===null)throw Error(Ae(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,_t.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=On(),n=e.queue;if(n===null)throw Error(Ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function v0(){}function _0(t,e){var n=_t,i=On(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Wf(S0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Ca(9,x0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(Ae(349));ts&30||y0(n,e,r)}return r}function y0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x0(t,e,n,i){e.value=n,e.getSnapshot=i,E0(e)&&M0(t)}function S0(t,e,n){return n(function(){E0(e)&&M0(t)})}function E0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function M0(t){var e=Di(t,1);e!==null&&Yn(e,t,1,-1)}function mm(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=YE.bind(null,_t,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function w0(){return On().memoizedState}function ec(t,e,n,i){var r=ei();_t.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function lu(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Hf(i,o.deps)){r.memoizedState=Ca(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function gm(t,e){return ec(8390656,8,t,e)}function Wf(t,e){return lu(2048,8,t,e)}function T0(t,e){return lu(4,2,t,e)}function A0(t,e){return lu(4,4,t,e)}function b0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,b0.bind(null,e,t),n)}function jf(){}function R0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function P0(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function I0(t,e,n){return ts&21?(Jn(n,e)||(n=O_(),_t.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function $E(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Yu.transition;Yu.transition={};try{t(!1),e()}finally{st=n,Yu.transition=i}}function L0(){return On().memoizedState}function qE(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},N0(t))D0(e,n);else if(n=p0(t,e,n,i),n!==null){var r=nn();Yn(n,t,i,r),U0(n,e,i)}}function YE(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(N0(t))D0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Of(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=p0(t,e,r,i),n!==null&&(r=nn(),Yn(n,t,i,r),U0(n,e,i))}}function N0(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function D0(t,e){na=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ef(t,n)}}var Pc={readContext:Un,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},KE={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,b0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qE.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:jf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=$E.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=ei();if(ft){if(n===void 0)throw Error(Ae(407));n=n()}else{if(n=e(),Ft===null)throw Error(Ae(349));ts&30||y0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gm(S0.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,x0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Ft.identifierPrefix;if(ft){var n=Ti,i=wi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JE={readContext:Un,useCallback:R0,useContext:Un,useEffect:Wf,useImperativeHandle:C0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:P0,useReducer:Ku,useRef:w0,useState:function(){return Ku(ba)},useDebugValue:jf,useDeferredValue:function(t){var e=On();return I0(e,Rt.memoizedState,t)},useTransition:function(){var t=Ku(ba)[0],e=On().memoizedState;return[t,e]},useMutableSource:v0,useSyncExternalStore:_0,useId:L0,unstable_isNewReconciler:!1},ZE={readContext:Un,useCallback:R0,useContext:Un,useEffect:Wf,useImperativeHandle:C0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:P0,useReducer:Ju,useRef:w0,useState:function(){return Ju(ba)},useDebugValue:jf,useDeferredValue:function(t){var e=On();return Rt===null?e.memoizedState=t:I0(e,Rt.memoizedState,t)},useTransition:function(){var t=Ju(ba)[0],e=On().memoizedState;return[t,e]},useMutableSource:v0,useSyncExternalStore:_0,useId:L0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Th(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=pr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(Yn(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=pr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(Yn(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=pr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(Yn(e,t,i,n),Zl(e,t,i))}};function vm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function O0(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Qr:Jt.current,i=e.contextTypes,s=(i=i!=null)?co(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Ah(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Qr:Jt.current,r.context=co(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Th(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e){try{var n="",i=e;do n+=AS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,kh=i),bh(t,e)},n}function F0(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new QE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fM.bind(null,t,e,n),e.then(t,t))}function xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var eM=zi.ReactCurrentOwner,dn=!1;function en(t,e,n,i){e.child=t===null?f0(e,null,n,i):ho(e,t.child,n,i)}function Em(t,e,n,i,r){n=n.render;var s=e.ref;return eo(e,r),i=Vf(t,e,n,i,s,r),n=Gf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&n&&Pf(e),e.flags|=1,en(t,e,i,r),e.child)}function Mm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,B0(t,e,s,i,r)):(t=rc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function B0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Ch(t,e,n,i,r)}function z0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(js,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(js,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(js,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(js,yn),yn|=i;return en(t,e,r,n),e.child}function H0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ch(t,e,n,i,r){var s=fn(n)?Qr:Jt.current;return s=co(e,s),eo(e,r),n=Vf(t,e,n,i,s,r),i=Gf(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&i&&Pf(e),e.flags|=1,en(t,e,n,r),e.child)}function wm(t,e,n,i,r){if(fn(n)){var s=!0;Ec(e)}else s=!1;if(eo(e,r),e.stateNode===null)tc(t,e),O0(e,n,i),Ah(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?Qr:Jt.current,c=co(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_m(e,o,i,c),Ji=!1;var f=e.memoizedState;o.state=f,bc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||hn.current||Ji?(typeof d=="function"&&(Th(e,n,d,i),l=e.memoizedState),(a=Ji||vm(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,m0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Qr:Jt.current,l=co(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&_m(e,o,i,l),Ji=!1,f=e.memoizedState,o.state=f,bc(e,i,o,r);var y=e.memoizedState;a!==h||f!==y||hn.current||Ji?(typeof g=="function"&&(Th(e,n,g,i),y=e.memoizedState),(c=Ji||vm(e,n,c,i,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Rh(t,e,n,i,s,r)}function Rh(t,e,n,i,r,s){H0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cm(e,n,!1),Ui(t,e,s);i=e.stateNode,eM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&cm(e,n,!0),e.child}function V0(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),Ff(t,e.containerInfo)}function Tm(t,e,n,i,r){return uo(),Lf(r),e.flags|=256,en(t,e,n,i),e.child}var Ph={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function G0(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ih(n),e.memoizedState=Ph,t):Xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ph,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xf(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,i){return i!==null&&Lf(i),ho(e,t.child,null,n),t=Xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(Ae(422))),pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hu({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=Ih(o),e.memoizedState=Ph,s);if(!(e.mode&1))return pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Ae(419)),i=Zu(s,i,void 0),pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Yn(i,t,r,-1))}return Zf(),i=Zu(Error(Ae(421))),pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=pM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=dr(r.nextSibling),Sn=e,ft=!0,Gn=null,t!==null&&(bn[Cn++]=wi,bn[Cn++]=Ti,bn[Cn++]=es,wi=t.id,Ti=t.overflow,es=e),e=Xf(e,i.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wh(t.return,e,n)}function Qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function W0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Ae(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nM(t,e,n){switch(e.tag){case 3:V0(e),uo();break;case 5:g0(e);break;case 1:fn(e.type)&&Ec(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?G0(t,e,n):(lt(gt,gt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return W0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,z0(t,e,n)}return Ui(t,e,n)}var j0,Lh,X0,$0;j0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};X0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(ri.current);var s=null;switch(n){case"input":r=eh(t,r),i=eh(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=ih(t,r),i=ih(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xc)}sh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iM(t,e,n){var i=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&Sc(),jt(e),null;case 3:return i=e.stateNode,fo(),dt(hn),dt(Jt),zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(zh(Gn),Gn=null))),Lh(t,e),jt(e),null;case 5:Bf(e);var r=jr(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)X0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Ae(166));return jt(e),null}if(t=jr(ri.current),hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Yo.length;r++)ct(Yo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Up(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":kp(i,s),ct("invalid",i)}sh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,a,t),r=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":il(i),Op(i,s,!0);break;case"textarea":il(i),Fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Ma]=i,j0(t,e,!1,!1),e.stateNode=t;e:{switch(o=oh(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Yo.length;r++)ct(Yo[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Up(t,i),r=eh(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":kp(t,i),r=ih(t,i),ct("invalid",t);break;default:r=i}sh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?w_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&E_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&gf(t,s,l,o))}switch(n){case"input":il(t),Op(t,i,!1);break;case"textarea":il(t),Fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)$0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Ae(166));if(n=jr(Ta.current),jr(ri.current),hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return jt(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))d0(),uo(),e.flags|=98560,s=!1;else if(s=hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Ae(317));s[ni]=e}else uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Gn!==null&&(zh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Pt===0&&(Pt=3):Zf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return fo(),Lh(t,e),t===null&&Sa(e.stateNode.containerInfo),jt(e),null;case 10:return Uf(e.type._context),jt(e),null;case 17:return fn(e.type)&&Sc(),jt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fo(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>mo&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return jt(e),null}else 2*Mt()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(Ae(156,e.tag))}function rM(t,e){switch(If(e),e.tag){case 1:return fn(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),dt(hn),dt(Jt),zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Ae(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return fo(),null;case 10:return Uf(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var ml=!1,qt=!1,sM=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Nh(t,e,n){try{n()}catch(i){St(t,e,i)}}var bm=!1;function oM(t,e){if(gh=vc,t=Z_(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vh={focusedElem:t,selectionRange:n},vc=!1,ze=e;ze!==null;)if(e=ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ze=t;else for(;ze!==null;){e=ze;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,m=y.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Ae(163))}}catch(E){St(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}return y=bm,bm=!1,y}function ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nh(e,n,s)}r=r.next}while(r!==i)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q0(t){var e=t.alternate;e!==null&&(t.alternate=null,q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ma],delete e[xh],delete e[VE],delete e[GE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y0(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xc));else if(i!==4&&(t=t.child,t!==null))for(Uh(t,e,n),t=t.sibling;t!==null;)Uh(t,e,n),t=t.sibling}function Oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var Bt=null,Vn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)K0(t,e,n),n=n.sibling}function K0(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:qt||Ws(n,e);case 6:var i=Bt,r=Vn;Bt=null,Gi(t,e,n),Bt=i,Vn=r,Bt!==null&&(Vn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Vn?(t=Bt,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),_a(t)):Xu(Bt,n.stateNode));break;case 4:i=Bt,r=Vn,Bt=n.stateNode.containerInfo,Vn=!0,Gi(t,e,n),Bt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!qt&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Gi(t,e,n),qt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sM),e.forEach(function(i){var r=mM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Vn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Vn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Bt===null)throw Error(Ae(160));K0(s,o,r),Bt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J0(e,t),e=e.sibling}function J0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Zn(t),i&4){try{ia(3,t,t.return),uu(3,t)}catch(x){St(t,t.return,x)}try{ia(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:kn(e,t),Zn(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if(kn(e,t),Zn(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&y_(r,s),oh(a,o);var c=oh(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?w_(r,h):d==="dangerouslySetInnerHTML"?E_(r,h):d==="children"?pa(r,h):gf(r,d,h,c)}switch(a){case"input":th(r,s);break;case"textarea":x_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ks(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(x){St(t,t.return,x)}}break;case 6:if(kn(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(Ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(kn(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:kn(e,t),Zn(t);break;case 13:kn(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yf=Mt())),i&4&&Rm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||d,kn(e,t),qt=c):kn(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ze=t,d=t.child;d!==null;){for(h=ze=d;ze!==null;){switch(f=ze,g=f.child,f.tag){case 0:case 11:case 14:case 15:ia(4,f,f.return);break;case 1:Ws(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Ws(f,f.return);break;case 22:if(f.memoizedState!==null){Im(h);continue}}g!==null?(g.return=f,ze=g):Im(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=M_("display",o))}catch(x){St(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){St(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),Zn(t),i&4&&Rm(t);break;case 21:break;default:kn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Y0(n)){var i=n;break e}n=n.return}throw Error(Ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=Cm(t);Oh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cm(t);Uh(t,a,o);break;default:throw Error(Ae(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aM(t,e,n){ze=t,Z0(t)}function Z0(t,e,n){for(var i=(t.mode&1)!==0;ze!==null;){var r=ze,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=ml;var c=qt;if(ml=o,(qt=l)&&!c)for(ze=r;ze!==null;)o=ze,l=o.child,o.tag===22&&o.memoizedState!==null?Lm(r):l!==null?(l.return=o,ze=l):Lm(r);for(;s!==null;)ze=s,Z0(s),s=s.sibling;ze=r,ml=a,qt=c}Pm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ze=s):Pm(t)}}function Pm(t){for(;ze!==null;){var e=ze;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&_a(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Ae(163))}qt||e.flags&512&&Dh(e)}catch(f){St(e,e.return,f)}}if(e===t){ze=null;break}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Im(t){for(;ze!==null;){var e=ze;if(e===t){ze=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Lm(t){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Dh(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Dh(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){ze=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ze=a;break}ze=e.return}}var lM=Math.ceil,Ic=zi.ReactCurrentDispatcher,$f=zi.ReactCurrentOwner,Dn=zi.ReactCurrentBatchConfig,rt=0,Ft=null,bt=null,Ht=0,yn=0,js=Ar(0),Pt=0,Ra=null,ns=0,du=0,qf=0,ra=null,cn=null,Yf=0,mo=1/0,Si=null,Lc=!1,kh=null,fr=null,gl=!1,sr=null,Nc=0,sa=0,Fh=null,nc=-1,ic=0;function nn(){return rt&6?Mt():nc!==-1?nc:nc=Mt()}function pr(t){return t.mode&1?rt&2&&Ht!==0?Ht&-Ht:jE.transition!==null?(ic===0&&(ic=O_()),ic):(t=st,t!==0||(t=window.event,t=t===void 0?16:G_(t.type)),t):1}function Yn(t,e,n,i){if(50<sa)throw sa=0,Fh=null,Error(Ae(185));za(t,n,i),(!(rt&2)||t!==Ft)&&(t===Ft&&(!(rt&2)&&(du|=n),Pt===4&&er(t,Ht)),pn(t,i),n===1&&rt===0&&!(e.mode&1)&&(mo=Mt()+500,au&&br()))}function pn(t,e){var n=t.callbackNode;jS(t,e);var i=gc(t,t===Ft?Ht:0);if(i===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?WE(Nm.bind(null,t)):l0(Nm.bind(null,t)),zE(function(){!(rt&6)&&br()}),n=null;else{switch(k_(i)){case 1:n=Sf;break;case 4:n=D_;break;case 16:n=mc;break;case 536870912:n=U_;break;default:n=mc}n=oy(n,Q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q0(t,e){if(nc=-1,ic=0,rt&6)throw Error(Ae(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var i=gc(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=rt;rt|=2;var s=ty();(Ft!==t||Ht!==e)&&(Si=null,mo=Mt()+500,$r(t,e));do try{dM();break}catch(a){ey(t,a)}while(!0);Df(),Ic.current=s,rt=r,bt!==null?e=0:(Ft=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=dh(t),r!==0&&(i=r,e=Bh(t,r))),e===1)throw n=Ra,$r(t,0),er(t,i),pn(t,Mt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!cM(r)&&(e=Dc(t,i),e===2&&(s=dh(t),s!==0&&(i=s,e=Bh(t,s))),e===1))throw n=Ra,$r(t,0),er(t,i),pn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Ae(345));case 2:Fr(t,cn,Si);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Yf+500-Mt(),10<e)){if(gc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yh(Fr.bind(null,t,cn,Si),e);break}Fr(t,cn,Si);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lM(i/1960))-i,10<i){t.timeoutHandle=yh(Fr.bind(null,t,cn,Si),i);break}Fr(t,cn,Si);break;case 5:Fr(t,cn,Si);break;default:throw Error(Ae(329))}}}return pn(t,Mt()),t.callbackNode===n?Q0.bind(null,t):null}function Bh(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=cn,cn=n,e!==null&&zh(e)),t}function zh(t){cn===null?cn=t:cn.push.apply(cn,t)}function cM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~qf,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Nm(t){if(rt&6)throw Error(Ae(327));to();var e=gc(t,0);if(!(e&1))return pn(t,Mt()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=dh(t);i!==0&&(e=i,n=Bh(t,i))}if(n===1)throw n=Ra,$r(t,0),er(t,e),pn(t,Mt()),n;if(n===6)throw Error(Ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,cn,Si),pn(t,Mt()),null}function Kf(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(mo=Mt()+500,au&&br())}}function is(t){sr!==null&&sr.tag===0&&!(rt&6)&&to();var e=rt;rt|=1;var n=Dn.transition,i=st;try{if(Dn.transition=null,st=1,t)return t()}finally{st=i,Dn.transition=n,rt=e,!(rt&6)&&br()}}function Jf(){yn=js.current,dt(js)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BE(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(If(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:fo(),dt(hn),dt(Jt),zf();break;case 5:Bf(i);break;case 4:fo();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:Uf(i.type._context);break;case 22:case 23:Jf()}n=n.return}if(Ft=t,bt=t=mr(t.current,null),Ht=yn=e,Pt=0,Ra=null,qf=du=ns=0,cn=ra=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function ey(t,e){do{var n=bt;try{if(Df(),Ql.current=Pc,Rc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(ts=0,Ut=Rt=_t=null,na=!1,Aa=0,$f.current=null,n===null||n.return===null){Pt=1,Ra=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=xm(o);if(g!==null){g.flags&=-257,Sm(g,o,a,s,e),g.mode&1&&ym(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){ym(s,c,e),Zf();break e}l=Error(Ae(426))}}else if(ft&&a.mode&1){var m=xm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sm(m,o,a,s,e),Lf(po(l,a));break e}}s=l=po(l,a),Pt!==4&&(Pt=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=k0(s,l,e);fm(s,u);break e;case 1:a=l;var _=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fr===null||!fr.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=F0(s,a,e);fm(s,E);break e}}s=s.return}while(s!==null)}iy(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function ty(){var t=Ic.current;return Ic.current=Pc,t===null?Pc:t}function Zf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(ns&268435455)&&!(du&268435455)||er(Ft,Ht)}function Dc(t,e){var n=rt;rt|=2;var i=ty();(Ft!==t||Ht!==e)&&(Si=null,$r(t,e));do try{uM();break}catch(r){ey(t,r)}while(!0);if(Df(),rt=n,Ic.current=i,bt!==null)throw Error(Ae(261));return Ft=null,Ht=0,Pt}function uM(){for(;bt!==null;)ny(bt)}function dM(){for(;bt!==null&&!OS();)ny(bt)}function ny(t){var e=sy(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?iy(t):bt=e,$f.current=null}function iy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rM(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,bt=null;return}}else if(n=iM(n,e,yn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Pt===0&&(Pt=5)}function Fr(t,e,n){var i=st,r=Dn.transition;try{Dn.transition=null,st=1,hM(t,e,n,i)}finally{Dn.transition=r,st=i}return null}function hM(t,e,n,i){do to();while(sr!==null);if(rt&6)throw Error(Ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XS(t,s),t===Ft&&(bt=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,oy(mc,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=st;st=1;var a=rt;rt|=4,$f.current=null,oM(t,n),J0(n,t),LE(vh),vc=!!gh,vh=gh=null,t.current=n,aM(n),kS(),rt=a,st=o,Dn.transition=s}else t.current=n;if(gl&&(gl=!1,sr=t,Nc=r),s=t.pendingLanes,s===0&&(fr=null),zS(n.stateNode),pn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=kh,kh=null,t;return Nc&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===Fh?sa++:(sa=0,Fh=t):sa=0,br(),null}function to(){if(sr!==null){var t=k_(Nc),e=Dn.transition,n=st;try{if(Dn.transition=null,st=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,Nc=0,rt&6)throw Error(Ae(331));var r=rt;for(rt|=4,ze=t.current;ze!==null;){var s=ze,o=s.child;if(ze.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ze=c;ze!==null;){var d=ze;switch(d.tag){case 0:case 11:case 15:ia(8,d,s)}var h=d.child;if(h!==null)h.return=d,ze=h;else for(;ze!==null;){d=ze;var f=d.sibling,g=d.return;if(q0(d),d===c){ze=null;break}if(f!==null){f.return=g,ze=f;break}ze=g}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ze=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ze=o;else e:for(;ze!==null;){if(s=ze,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ze=u;break e}ze=s.return}}var _=t.current;for(ze=_;ze!==null;){o=ze;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,ze=p;else e:for(o=_;ze!==null;){if(a=ze,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(R){St(a,a.return,R)}if(a===o){ze=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ze=E;break e}ze=a.return}}if(rt=r,br(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(nu,t)}catch{}i=!0}return i}finally{st=n,Dn.transition=e}}return!1}function Dm(t,e,n){e=po(n,e),e=k0(t,e,1),t=hr(t,e,1),e=nn(),t!==null&&(za(t,1,e),pn(t,e))}function St(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=po(n,t),t=F0(e,t,1),e=hr(e,t,1),t=nn(),e!==null&&(za(e,1,t),pn(e,t));break}}e=e.return}}function fM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>Mt()-Yf?$r(t,0):qf|=n),pn(t,e)}function ry(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=nn();t=Di(t,e),t!==null&&(za(t,e,n),pn(t,n))}function pM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ry(t,n)}function mM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Ae(314))}i!==null&&i.delete(e),ry(t,n)}var sy;sy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,nM(t,e,n);dn=!!(t.flags&131072)}else dn=!1,ft&&e.flags&1048576&&c0(e,wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(t,e),t=e.pendingProps;var r=co(e,Jt.current);eo(e,n),r=Vf(null,e,i,t,r,n);var s=Gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kf(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,Ah(e,i,t,n),e=Rh(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Pf(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vM(i),t=Hn(i,t),r){case 0:e=Ch(null,e,i,t,n);break e;case 1:e=wm(null,e,i,t,n);break e;case 11:e=Em(null,e,i,t,n);break e;case 14:e=Mm(null,e,i,Hn(i.type,t),n);break e}throw Error(Ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ch(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),wm(t,e,i,r,n);case 3:e:{if(V0(e),t===null)throw Error(Ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,m0(t,e),bc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=po(Error(Ae(423)),e),e=Tm(t,e,i,n,r);break e}else if(i!==r){r=po(Error(Ae(424)),e),e=Tm(t,e,i,n,r);break e}else for(xn=dr(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Gn=null,n=f0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),i===r){e=Ui(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return g0(e),t===null&&Mh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_h(i,r)?o=null:s!==null&&_h(i,s)&&(e.flags|=32),H0(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return G0(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ho(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Em(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Tc,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!hn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,eo(e,n),r=Un(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Mm(t,e,i,r,n);case 15:return B0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),tc(t,e),e.tag=1,fn(i)?(t=!0,Ec(e)):t=!1,eo(e,n),O0(e,i,r),Ah(e,i,r,n),Rh(null,e,i,!0,t,n);case 19:return W0(t,e,n);case 22:return z0(t,e,n)}throw Error(Ae(156,e.tag))};function oy(t,e){return N_(t,e)}function gM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new gM(t,e,n,i)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vM(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===yf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Us:return qr(n.children,r,s,e);case vf:o=8,r|=8;break;case Kd:return t=Nn(12,n,e,r|2),t.elementType=Kd,t.lanes=s,t;case Jd:return t=Nn(13,n,e,r),t.elementType=Jd,t.lanes=s,t;case Zd:return t=Nn(19,n,e,r),t.elementType=Zd,t.lanes=s,t;case g_:return hu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p_:o=10;break e;case m_:o=9;break e;case _f:o=11;break e;case yf:o=14;break e;case Ki:o=16,i=null;break e}throw Error(Ae(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function hu(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=g_,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _M(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ep(t,e,n,i,r,s,o,a,l){return t=new _M(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(s),t}function yM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ay(t){if(!t)return Mr;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(Ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Ae(171))}if(t.tag===1){var n=t.type;if(fn(n))return a0(t,n,e)}return e}function ly(t,e,n,i,r,s,o,a,l){return t=ep(n,i,!0,t,r,s,o,a,l),t.context=ay(null),n=t.current,i=nn(),r=pr(n),s=Ii(i,r),s.callback=e??null,hr(n,s,r),t.current.lanes=r,za(t,r,i),pn(t,i),t}function fu(t,e,n,i){var r=e.current,s=nn(),o=pr(r);return n=ay(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(Yn(t,r,o,s),Zl(t,r,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tp(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function xM(){return null}var cy=typeof reportError=="function"?reportError:function(t){console.error(t)};function np(t){this._internalRoot=t}pu.prototype.render=np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Ae(409));fu(t,e,null,null)};pu.prototype.unmount=np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){fu(null,t,null,null)}),e[Ni]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&V_(t)}};function ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Om(){}function SM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Uc(o);s.call(c)}}var o=ly(e,i,t,0,null,!1,!1,"",Om);return t._reactRootContainer=o,t[Ni]=o.current,Sa(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Uc(l);a.call(c)}}var l=ep(t,0,!1,null,null,!1,!1,"",Om);return t._reactRootContainer=l,t[Ni]=l.current,Sa(t.nodeType===8?t.parentNode:t),is(function(){fu(e,l,n,i)}),l}function gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uc(o);a.call(l)}}fu(e,o,t,r)}else o=SM(n,e,t,r,i);return Uc(o)}F_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(Ef(e,n|1),pn(e,Mt()),!(rt&6)&&(mo=Mt()+500,br()))}break;case 13:is(function(){var i=Di(t,1);if(i!==null){var r=nn();Yn(i,t,1,r)}}),tp(t,1)}};Mf=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=nn();Yn(e,t,134217728,n)}tp(t,134217728)}};B_=function(t){if(t.tag===13){var e=pr(t),n=Di(t,e);if(n!==null){var i=nn();Yn(n,t,e,i)}tp(t,e)}};z_=function(){return st};H_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};lh=function(t,e,n){switch(e){case"input":if(th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ou(i);if(!r)throw Error(Ae(90));__(i),th(i,r)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};b_=Kf;C_=is;var EM={usingClientEntryPoint:!1,Events:[Va,Bs,ou,T_,A_,Kf]},Bo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MM={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I_(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||xM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{nu=vl.inject(MM),ii=vl}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(e))throw Error(Ae(200));return yM(t,e,null,n)};Mn.createRoot=function(t,e){if(!ip(t))throw Error(Ae(299));var n=!1,i="",r=cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ep(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Sa(t.nodeType===8?t.parentNode:t),new np(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Ae(188)):(t=Object.keys(t).join(","),Error(Ae(268,t)));return t=I_(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return is(t)};Mn.hydrate=function(t,e,n){if(!mu(e))throw Error(Ae(200));return gu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!ip(t))throw Error(Ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=cy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ly(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,Sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pu(e)};Mn.render=function(t,e,n){if(!mu(e))throw Error(Ae(200));return gu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!mu(t))throw Error(Ae(40));return t._reactRootContainer?(is(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Mn.unstable_batchedUpdates=Kf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mu(n))throw Error(Ae(200));if(t==null||t._reactInternals===void 0)throw Error(Ae(38));return gu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uy)}catch(t){console.error(t)}}uy(),u_.exports=Mn;var wM=u_.exports,km=wM;qd.createRoot=km.createRoot,qd.hydrateRoot=km.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="160",ps={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TM=0,Fm=1,AM=2,dy=1,bM=2,xi=3,wr=0,Yt=1,In=2,gr=0,no=1,oa=2,Bm=3,zm=4,CM=5,Hr=100,RM=101,PM=102,Hm=103,Vm=104,IM=200,LM=201,NM=202,DM=203,Hh=204,Vh=205,UM=206,OM=207,kM=208,FM=209,BM=210,zM=211,HM=212,VM=213,GM=214,WM=0,jM=1,XM=2,Oc=3,$M=4,qM=5,YM=6,KM=7,hy=0,JM=1,ZM=2,vr=0,QM=1,ew=2,tw=3,nw=4,iw=5,rw=6,fy=300,go=301,vo=302,Gh=303,Wh=304,vu=306,jh=1e3,jn=1001,Xh=1002,tn=1003,Gm=1004,nd=1005,Rn=1006,sw=1007,Pa=1008,_r=1009,ow=1010,aw=1011,sp=1012,py=1013,or=1014,ar=1015,Ia=1016,my=1017,gy=1018,Yr=1020,lw=1021,Xn=1023,cw=1024,uw=1025,Kr=1026,_o=1027,dw=1028,vy=1029,hw=1030,_y=1031,yy=1033,id=33776,rd=33777,sd=33778,od=33779,Wm=35840,jm=35841,Xm=35842,$m=35843,xy=36196,qm=37492,Ym=37496,Km=37808,Jm=37809,Zm=37810,Qm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,cg=37821,ad=36492,ug=36494,dg=36495,fw=36283,hg=36284,fg=36285,pg=36286,Sy=3e3,Jr=3001,pw=3200,mw=3201,Ey=0,gw=1,Ln="",Ot="srgb",Oi="srgb-linear",op="display-p3",_u="display-p3-linear",kc="linear",ut="srgb",Fc="rec709",Bc="p3",gs=7680,mg=519,vw=512,_w=513,yw=514,My=515,xw=516,Sw=517,Ew=518,Mw=519,gg=35044,vg="300 es",$h=1035,Ai=2e3,zc=2001;class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sc=Math.PI/180,qh=180/Math.PI;function To(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function ww(t,e){return(t%e+e)%e}function ld(t,e,n){return(1-n)*t+n*e}function _g(t){return(t&t-1)===0&&t!==0}function Yh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Tw={DEG2RAD:sc};class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],y=i[8],x=r[0],m=r[3],u=r[6],_=r[1],p=r[4],E=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*p+l*A,s[6]=o*u+a*E+l*T,s[1]=c*x+d*_+h*R,s[4]=c*m+d*p+h*A,s[7]=c*u+d*E+h*T,s[2]=f*x+g*_+y*R,s[5]=f*m+g*p+y*A,s[8]=f*u+g*E+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,y=n*h+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=g*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cd.makeScale(e,n)),this}rotate(e){return this.premultiply(cd.makeRotation(-e)),this}translate(e,n){return this.premultiply(cd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new $e;function wy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Aw(){const t=Hc("canvas");return t.style.display="block",t}const yg={};function aa(t){t in yg||(yg[t]=!0,console.warn(t))}const xg=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sg=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_l={[Oi]:{transfer:kc,primaries:Fc,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:ut,primaries:Fc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[_u]:{transfer:kc,primaries:Bc,toReference:t=>t.applyMatrix3(Sg),fromReference:t=>t.applyMatrix3(xg)},[op]:{transfer:ut,primaries:Bc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sg),fromReference:t=>t.applyMatrix3(xg).convertLinearToSRGB()}},bw=new Set([Oi,_u]),ot={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!bw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_l[e].toReference,r=_l[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return _l[t].primaries},getTransfer:function(t){return t===Ln?kc:_l[t].transfer}};function io(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ud(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class Ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Hc("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=io(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(io(n[i]/255)*255):n[i]=io(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cw=0;class Ay{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=To(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dd(r[o].image)):s.push(dd(r[o]))}else s=dd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ty.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rw=0;class mn extends ds{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=jn,r=jn,s=Rn,o=Pa,a=Xn,l=_r,c=mn.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=To(),this.name="",this.source=new Ay(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Jr?Ot:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Jr:Sy}set encoding(e){aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?Ot:Ln}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=fy;mn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],y=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,E=(g+1)/2,R=(u+1)/2,A=(d+f)/4,T=(h+x)/4,z=(y+m)/4;return p>E&&p>R?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=A/i,s=T/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=z/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=z/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-y)*(m-y)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-y)/_,this.y=(h-x)/_,this.z=(f-d)/_,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pw extends ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jr?Ot:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ay(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends Pw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class by extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Iw extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],y=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=y,e[n+3]=x;return}if(h!==x||l!==f||c!==g||d!==y){let m=1-a;const u=l*f+c*g+d*y+h*x,_=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const R=Math.sqrt(p),A=Math.atan2(R,u*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const E=a*_;if(l=l*m+f*E,c=c*m+g*E,d=d*m+y*E,h=h*m+x*E,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+d*h+l*g-c*f,e[n+1]=l*y+d*f+c*h-a*g,e[n+2]=c*y+d*g+a*f-l*h,e[n+3]=d*y-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h-f*g*y;break;case"YXZ":this._x=f*d*h+c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h+f*g*y;break;case"ZXY":this._x=f*d*h-c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h-f*g*y;break;case"ZYX":this._x=f*d*h-c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h+f*g*y;break;case"YZX":this._x=f*d*h+c*g*y,this._y=c*g*h+f*d*y,this._z=c*d*y-f*g*h,this._w=c*d*h-f*g*y;break;case"XZY":this._x=f*d*h-c*g*y,this._y=c*g*h-f*d*y,this._z=c*d*y+f*g*h,this._w=c*d*h+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Eg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Eg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new $,Eg=new ss;class Wa{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),xl.subVectors(this.max,Ho),_s.subVectors(e.a,Ho),ys.subVectors(e.b,Ho),xs.subVectors(e.c,Ho),Wi.subVectors(ys,_s),ji.subVectors(xs,ys),Lr.subVectors(_s,xs);let n=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-Lr.z,Lr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,Lr.z,0,-Lr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-Lr.y,Lr.x,0];return!fd(n,_s,ys,xs,xl)||(n=[1,0,0,0,1,0,0,0,1],!fd(n,_s,ys,xs,xl))?!1:(Sl.crossVectors(Wi,ji),n=[Sl.x,Sl.y,Sl.z],fd(n,_s,ys,xs,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new $,new $,new $,new $,new $,new $,new $,new $],Fn=new $,yl=new Wa,_s=new $,ys=new $,xs=new $,Wi=new $,ji=new $,Lr=new $,Ho=new $,xl=new $,Sl=new $,Nr=new $;function fd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),d=i.dot(Nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Lw=new Wa,Vo=new $,pd=new $;class ap{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Lw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(pd)),this.expandByPoint(Vo.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new $,md=new $,El=new $,Xi=new $,gd=new $,Ml=new $,vd=new $;class Cy{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){md.copy(e).add(n).multiplyScalar(.5),El.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(md);const s=e.distanceTo(n)*.5,o=-this.direction.dot(El),a=Xi.dot(this.direction),l=-Xi.dot(El),c=Xi.lengthSq(),d=Math.abs(1-o*o);let h,f,g,y;if(d>0)if(h=o*l-a,f=o*a-l,y=s*d,h>=0)if(f>=-y)if(f<=y){const x=1/d;h*=x,f*=x,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-y?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=y?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(md).addScaledVector(El,f),g}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){gd.subVectors(n,e),Ml.subVectors(i,e),vd.crossVectors(gd,Ml);let o=this.direction.dot(vd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(Ml.crossVectors(Xi,Ml));if(l<0)return null;const c=a*this.direction.dot(gd.cross(Xi));if(c<0||l+c>o)return null;const d=-a*Xi.dot(vd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,y,x,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,y,x,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,y,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=y,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,y=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+y*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,y=c*d,x=c*h;n[0]=f+x*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-y,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,y=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,y=a*d,x=a*h;n[0]=l*d,n[4]=y*c-g,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=y*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+y,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,g=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=g*h-y,n[2]=y*h-g,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nw,e,Dw)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),$i.crossVectors(i,vn),$i.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),$i.crossVectors(i,vn)),$i.normalize(),wl.crossVectors(vn,$i),r[0]=$i.x,r[4]=wl.x,r[8]=vn.x,r[1]=$i.y,r[5]=wl.y,r[9]=vn.y,r[2]=$i.z,r[6]=wl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],y=i[2],x=i[6],m=i[10],u=i[14],_=i[3],p=i[7],E=i[11],R=i[15],A=r[0],T=r[4],z=r[8],w=r[12],C=r[1],W=r[5],X=r[9],fe=r[13],H=r[2],J=r[6],q=r[10],te=r[14],U=r[3],Y=r[7],K=r[11],ge=r[15];return s[0]=o*A+a*C+l*H+c*U,s[4]=o*T+a*W+l*J+c*Y,s[8]=o*z+a*X+l*q+c*K,s[12]=o*w+a*fe+l*te+c*ge,s[1]=d*A+h*C+f*H+g*U,s[5]=d*T+h*W+f*J+g*Y,s[9]=d*z+h*X+f*q+g*K,s[13]=d*w+h*fe+f*te+g*ge,s[2]=y*A+x*C+m*H+u*U,s[6]=y*T+x*W+m*J+u*Y,s[10]=y*z+x*X+m*q+u*K,s[14]=y*w+x*fe+m*te+u*ge,s[3]=_*A+p*C+E*H+R*U,s[7]=_*T+p*W+E*J+R*Y,s[11]=_*z+p*X+E*q+R*K,s[15]=_*w+p*fe+E*te+R*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],y=e[3],x=e[7],m=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+x*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+m*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],y=e[12],x=e[13],m=e[14],u=e[15],_=h*m*c-x*f*c+x*l*g-a*m*g-h*l*u+a*f*u,p=y*f*c-d*m*c-y*l*g+o*m*g+d*l*u-o*f*u,E=d*x*c-y*h*c+y*a*g-o*x*g-d*a*u+o*h*u,R=y*h*l-d*x*l-y*a*f+o*x*f+d*a*m-o*h*m,A=n*_+i*p+r*E+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*f*s-h*m*s-x*r*g+i*m*g+h*r*u-i*f*u)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*T,e[4]=p*T,e[5]=(d*m*s-y*f*s+y*r*g-n*m*g-d*r*u+n*f*u)*T,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*T,e[8]=E*T,e[9]=(y*h*s-d*x*s-y*i*g+n*x*g+d*i*u-n*h*u)*T,e[10]=(o*x*s-y*a*s+y*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*T,e[12]=R*T,e[13]=(d*x*r-y*h*r+y*i*f-n*x*f-d*i*m+n*h*m)*T,e[14]=(y*a*r-o*x*r-y*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,y=s*h,x=o*d,m=o*h,u=a*h,_=l*c,p=l*d,E=l*h,R=i.x,A=i.y,T=i.z;return r[0]=(1-(x+u))*R,r[1]=(g+E)*R,r[2]=(y-p)*R,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(f+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(y+p)*T,r[9]=(m-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ss.set(r[0],r[1],r[2]).length();const o=Ss.set(r[4],r[5],r[6]).length(),a=Ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,y;if(a===Ai)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===zc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let y,x;if(a===Ai)y=(o+s)*h,x=-2*h;else if(a===zc)y=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ss=new $,Bn=new Ct,Nw=new $(0,0,0),Dw=new $(1,1,1),$i=new $,wl=new $,vn=new $,Mg=new Ct,wg=new ss;class yu{constructor(e=0,n=0,i=0,r=yu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wg.setFromEuler(this),this.setFromQuaternion(wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yu.DEFAULT_ORDER="XYZ";class Ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uw=0;const Tg=new $,Es=new ss,gi=new Ct,Tl=new $,Go=new $,Ow=new $,kw=new ss,Ag=new $(1,0,0),bg=new $(0,1,0),Cg=new $(0,0,1),Fw={type:"added"},Bw={type:"removed"};class Kt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new $,n=new yu,i=new ss,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new $e}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,n){return Tg.copy(e).applyQuaternion(this.quaternion),this.position.add(Tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Tl.copy(e):Tl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Go,Tl,this.up):gi.lookAt(Tl,Go,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(gi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Bw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Ow),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,kw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new $(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new $,vi=new $,_d=new $,_i=new $,Ms=new $,ws=new $,Rg=new $,yd=new $,xd=new $,Sd=new $;let Al=!1;class Wn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),vi.subVectors(i,n),_d.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(vi),l=zn.dot(_d),c=vi.dot(vi),d=vi.dot(_d),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,y=(o*d-a*l)*f;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,n,i,r,s,o,a,l){return Al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Al=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),vi.subVectors(e,n),zn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Al=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),ws.subVectors(s,i),yd.subVectors(e,i);const l=Ms.dot(yd),c=ws.dot(yd);if(l<=0&&c<=0)return n.copy(i);xd.subVectors(e,r);const d=Ms.dot(xd),h=ws.dot(xd);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ms,o);Sd.subVectors(e,s);const g=Ms.dot(Sd),y=ws.dot(Sd);if(y>=0&&g<=y)return n.copy(s);const x=g*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(ws,a);const m=d*y-g*h;if(m<=0&&h-d>=0&&g-y>=0)return Rg.subVectors(s,r),a=(h-d)/(h-d+(g-y)),n.copy(r).addScaledVector(Rg,a);const u=1/(m+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Ms,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=ww(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ed(o,s,e+1/3),this.g=Ed(o,s,e),this.b=Ed(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Py[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=ud(e.r),this.g=ud(e.g),this.b=ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ot.fromWorkingColorSpace($t.copy(this),e),Math.round(zt($t.r*255,0,255))*65536+Math.round(zt($t.g*255,0,255))*256+Math.round(zt($t.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ot){ot.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(bl);const i=ld(qi.h,bl.h,n),r=ld(qi.s,bl.s,n),s=ld(qi.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new it;it.NAMES=Py;let zw=0;class ja extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=To(),this.name="",this.type="Material",this.blending=no,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Vh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class la extends ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new $,Cl=new Me;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cl.fromBufferAttribute(this,n),Cl.applyMatrix3(e),this.setXY(n,Cl.x,Cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),e}}class Iy extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ly extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class rn extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Hw=0;const An=new Ct,Md=new Kt,Ts=new $,_n=new Wa,Wo=new Wa,Dt=new $;class ci extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hw++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wy(e)?Ly:Iy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(_n.min,Wo.min),_n.expandByPoint(Dt),Dt.addVectors(_n.max,Wo.max),_n.expandByPoint(Dt)):(_n.expandByPoint(Wo.min),_n.expandByPoint(Wo.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Dt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Dt.add(Ts)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let C=0;C<a;C++)c[C]=new $,d[C]=new $;const h=new $,f=new $,g=new $,y=new Me,x=new Me,m=new Me,u=new $,_=new $;function p(C,W,X){h.fromArray(r,C*3),f.fromArray(r,W*3),g.fromArray(r,X*3),y.fromArray(o,C*2),x.fromArray(o,W*2),m.fromArray(o,X*2),f.sub(h),g.sub(h),x.sub(y),m.sub(y);const fe=1/(x.x*m.y-m.x*x.y);isFinite(fe)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(fe),_.copy(g).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(fe),c[C].add(u),c[W].add(u),c[X].add(u),d[C].add(_),d[W].add(_),d[X].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let C=0,W=E.length;C<W;++C){const X=E[C],fe=X.start,H=X.count;for(let J=fe,q=fe+H;J<q;J+=3)p(i[J+0],i[J+1],i[J+2])}const R=new $,A=new $,T=new $,z=new $;function w(C){T.fromArray(s,C*3),z.copy(T);const W=c[C];R.copy(W),R.sub(T.multiplyScalar(T.dot(W))).normalize(),A.crossVectors(z,W);const fe=A.dot(d[C])<0?-1:1;l[C*4]=R.x,l[C*4+1]=R.y,l[C*4+2]=R.z,l[C*4+3]=fe}for(let C=0,W=E.length;C<W;++C){const X=E[C],fe=X.start,H=X.count;for(let J=fe,q=fe+H;J<q;J+=3)w(i[J+0]),w(i[J+1]),w(i[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,d=new $,h=new $;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,y=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*d;for(let u=0;u<d;u++)f[y++]=c[g++]}return new si(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new Ct,Dr=new Cy,Rl=new ap,Ig=new $,As=new $,bs=new $,Cs=new $,wd=new $,Pl=new $,Il=new Me,Ll=new Me,Nl=new Me,Lg=new $,Ng=new $,Dg=new $,Dl=new $,Ul=new $;class un extends Kt{constructor(e=new ci,n=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(wd.fromBufferAttribute(h,e),o?Pl.addScaledVector(wd,d):Pl.addScaledVector(wd.sub(n),d))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Rl,Ig)===null||Dr.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Pg.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=f.length;y<x;y++){const m=f[y],u=o[m.materialIndex],_=Math.max(m.start,g.start),p=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let E=_,R=p;E<R;E+=3){const A=a.getX(E),T=a.getX(E+1),z=a.getX(E+2);r=Ol(this,u,e,i,c,d,h,A,T,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=y,u=x;m<u;m+=3){const _=a.getX(m),p=a.getX(m+1),E=a.getX(m+2);r=Ol(this,o,e,i,c,d,h,_,p,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=f.length;y<x;y++){const m=f[y],u=o[m.materialIndex],_=Math.max(m.start,g.start),p=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=_,R=p;E<R;E+=3){const A=E,T=E+1,z=E+2;r=Ol(this,u,e,i,c,d,h,A,T,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=y,u=x;m<u;m+=3){const _=m,p=m+1,E=m+2;r=Ol(this,o,e,i,c,d,h,_,p,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Vw(t,e,n,i,r,s,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ul);return c<n.near||c>n.far?null:{distance:c,point:Ul.clone(),object:t}}function Ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,As),t.getVertexPosition(l,bs),t.getVertexPosition(c,Cs);const d=Vw(t,e,n,i,As,bs,Cs,Dl);if(d){r&&(Il.fromBufferAttribute(r,a),Ll.fromBufferAttribute(r,l),Nl.fromBufferAttribute(r,c),d.uv=Wn.getInterpolation(Dl,As,bs,Cs,Il,Ll,Nl,new Me)),s&&(Il.fromBufferAttribute(s,a),Ll.fromBufferAttribute(s,l),Nl.fromBufferAttribute(s,c),d.uv1=Wn.getInterpolation(Dl,As,bs,Cs,Il,Ll,Nl,new Me),d.uv2=d.uv1),o&&(Lg.fromBufferAttribute(o,a),Ng.fromBufferAttribute(o,l),Dg.fromBufferAttribute(o,c),d.normal=Wn.getInterpolation(Dl,As,bs,Cs,Lg,Ng,Dg,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Wn.getNormal(As,bs,Cs,h.normal),d.face=h}return d}class Xa extends ci{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(d,3)),this.setAttribute("uv",new rn(h,2));function y(x,m,u,_,p,E,R,A,T,z,w){const C=E/T,W=R/z,X=E/2,fe=R/2,H=A/2,J=T+1,q=z+1;let te=0,U=0;const Y=new $;for(let K=0;K<q;K++){const ge=K*W-fe;for(let _e=0;_e<J;_e++){const re=_e*C-X;Y[x]=re*_,Y[m]=ge*p,Y[u]=H,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[u]=A>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(_e/T),h.push(1-K/z),te+=1}}for(let K=0;K<z;K++)for(let ge=0;ge<T;ge++){const _e=f+ge+J*K,re=f+ge+J*(K+1),O=f+(ge+1)+J*(K+1),N=f+(ge+1)+J*K;l.push(_e,re,N),l.push(re,O,N),U+=6}a.addGroup(g,U,w),g+=U,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=yo(t[n]);for(const r in i)e[r]=i[r]}return e}function Gw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ny(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const Ww={clone:yo,merge:Qt};var jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=Xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Gw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dy extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends Dy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,Ps=1;class $w extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Rs,Ps,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Rs,Ps,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Rs,Ps,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Rs,Ps,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Rs,Ps,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Rs,Ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Uy extends mn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:go,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qw extends rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jr?Ot:Ln),this.texture=new Uy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xa(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:gr});s.uniforms.tEquirect.value=n;const o=new un(r,s),a=n.minFilter;return n.minFilter===Pa&&(n.minFilter=Rn),new $w(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Td=new $,Yw=new $,Kw=new $e;class Zi{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Td.subVectors(i,n).cross(Yw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Td),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Kw.getNormalMatrix(e),r=this.coplanarPoint(Td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ap,kl=new $;class lp{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],x=r[10],m=r[11],u=r[12],_=r[13],p=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,m-g,E-u).normalize(),i[1].setComponents(l+s,f+c,m+g,E+u).normalize(),i[2].setComponents(l+o,f+d,m+y,E+_).normalize(),i[3].setComponents(l-o,f-d,m-y,E-_).normalize(),i[4].setComponents(l-a,f-h,m-x,E-p).normalize(),n===Ai)i[5].setComponents(l+a,f+h,m+x,E+p).normalize();else if(n===zc)i[5].setComponents(a,h,x,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(kl.x=r.normal.x>0?e.max.x:e.min.x,kl.y=r.normal.y>0?e.max.y:e.min.y,kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Jw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,g=h.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,h,f),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,h){const f=d.array,g=d._updateRange,y=d.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&y.length===0&&t.bufferSubData(h,0,f),y.length!==0){for(let x=0,m=y.length;x<m;x++){const u=y[x];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class La extends ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],y=[],x=[],m=[];for(let u=0;u<d;u++){const _=u*f-o;for(let p=0;p<c;p++){const E=p*h-s;y.push(E,-_,0),x.push(0,0,1),m.push(p/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const p=_+c*u,E=_+c*(u+1),R=_+1+c*(u+1),A=_+1+c*u;g.push(p,E,A),g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new rn(y,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qw=`#ifdef USE_ALPHAHASH
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
#endif`,eT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
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
#endif`,sT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oT=`#ifdef USE_BATCHING
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
#endif`,aT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dT=`#ifdef USE_IRIDESCENCE
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
#endif`,hT=`#ifdef USE_BUMPMAP
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
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ST=`#define PI 3.141592653589793
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
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MT=`vec3 transformedNormal = objectNormal;
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`
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
}`,PT=`#ifdef USE_ENVMAP
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
#endif`,IT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,NT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
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
}`,zT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,XT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
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
#endif`,JT=`struct PhysicalMaterial {
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
}`,ZT=`
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
#endif`,QT=`#if defined( RE_IndirectDiffuse )
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
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
#endif`,f1=`#ifdef USE_MORPHTARGETS
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
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
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
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O1=`float getShadowMask() {
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
}`,k1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
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
#endif`,H1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,X1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z1=`uniform sampler2D t2D;
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
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
}`,rA=`#if DEPTH_PACKING == 3200
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
}`,sA=`#define DISTANCE
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
}`,oA=`#define DISTANCE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
}`,uA=`uniform vec3 diffuse;
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
}`,dA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
}`,fA=`#define LAMBERT
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define MATCAP
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
}`,gA=`#define MATCAP
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
}`,vA=`#define NORMAL
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
}`,_A=`#define NORMAL
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
}`,yA=`#define PHONG
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
}`,xA=`#define PHONG
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
}`,SA=`#define STANDARD
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
}`,EA=`#define STANDARD
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
}`,MA=`#define TOON
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
}`,wA=`#define TOON
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
}`,TA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
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
}`,bA=`#include <common>
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
}`,CA=`uniform vec3 color;
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
}`,RA=`uniform float rotation;
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
}`,PA=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Zw,alphahash_pars_fragment:Qw,alphamap_fragment:eT,alphamap_pars_fragment:tT,alphatest_fragment:nT,alphatest_pars_fragment:iT,aomap_fragment:rT,aomap_pars_fragment:sT,batching_pars_vertex:oT,batching_vertex:aT,begin_vertex:lT,beginnormal_vertex:cT,bsdfs:uT,iridescence_fragment:dT,bumpmap_pars_fragment:hT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:gT,color_fragment:vT,color_pars_fragment:_T,color_pars_vertex:yT,color_vertex:xT,common:ST,cube_uv_reflection_fragment:ET,defaultnormal_vertex:MT,displacementmap_pars_vertex:wT,displacementmap_vertex:TT,emissivemap_fragment:AT,emissivemap_pars_fragment:bT,colorspace_fragment:CT,colorspace_pars_fragment:RT,envmap_fragment:PT,envmap_common_pars_fragment:IT,envmap_pars_fragment:LT,envmap_pars_vertex:NT,envmap_physical_pars_fragment:jT,envmap_vertex:DT,fog_vertex:UT,fog_pars_vertex:OT,fog_fragment:kT,fog_pars_fragment:FT,gradientmap_pars_fragment:BT,lightmap_fragment:zT,lightmap_pars_fragment:HT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:GT,lights_pars_begin:WT,lights_toon_fragment:XT,lights_toon_pars_fragment:$T,lights_phong_fragment:qT,lights_phong_pars_fragment:YT,lights_physical_fragment:KT,lights_physical_pars_fragment:JT,lights_fragment_begin:ZT,lights_fragment_maps:QT,lights_fragment_end:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:r1,map_fragment:s1,map_pars_fragment:o1,map_particle_fragment:a1,map_particle_pars_fragment:l1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:u1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:f1,morphtarget_vertex:p1,normal_fragment_begin:m1,normal_fragment_maps:g1,normal_pars_fragment:v1,normal_pars_vertex:_1,normal_vertex:y1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:w1,opaque_fragment:T1,packing:A1,premultiplied_alpha_fragment:b1,project_vertex:C1,dithering_fragment:R1,dithering_pars_fragment:P1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:L1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:O1,skinbase_vertex:k1,skinning_pars_vertex:F1,skinning_vertex:B1,skinnormal_vertex:z1,specularmap_fragment:H1,specularmap_pars_fragment:V1,tonemapping_fragment:G1,tonemapping_pars_fragment:W1,transmission_fragment:j1,transmission_pars_fragment:X1,uv_pars_fragment:$1,uv_pars_vertex:q1,uv_vertex:Y1,worldpos_vertex:K1,background_vert:J1,background_frag:Z1,backgroundCube_vert:Q1,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:aA,equirect_frag:lA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:dA,meshbasic_frag:hA,meshlambert_vert:fA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:vA,meshnormal_frag:_A,meshphong_vert:yA,meshphong_frag:xA,meshphysical_vert:SA,meshphysical_frag:EA,meshtoon_vert:MA,meshtoon_frag:wA,points_vert:TA,points_frag:AA,shadow_vert:bA,shadow_frag:CA,sprite_vert:RA,sprite_frag:PA},De={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ti={basic:{uniforms:Qt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Qt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Qt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Qt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Qt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Qt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Qt([De.points,De.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Qt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Qt([De.common,De.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Qt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Qt([De.sprite,De.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Qt([De.common,De.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Qt([De.lights,De.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ti.physical={uniforms:Qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Fl={r:0,b:0,g:0};function IA(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function y(m,u){let _=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?x(a,l):p&&p.isColor&&(x(p,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===vu)?(d===void 0&&(d=new un(new Xa(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:yo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ot.getTransfer(p.colorSpace)!==ut,(h!==p||f!==p.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new un(new La(2,2),new ki({name:"BackgroundMaterial",uniforms:yo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ot.getTransfer(p.colorSpace)!==ut,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||f!==p.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(Fl,Ny(t)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:y}}function LA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(H,J,q,te,U){let Y=!1;if(o){const K=x(te,q,J);c!==K&&(c=K,g(c.object)),Y=u(H,te,q,U),Y&&_(H,te,q,U)}else{const K=J.wireframe===!0;(c.geometry!==te.id||c.program!==q.id||c.wireframe!==K)&&(c.geometry=te.id,c.program=q.id,c.wireframe=K,Y=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,z(H,J,q,te),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(H){return i.isWebGL2?t.bindVertexArray(H):s.bindVertexArrayOES(H)}function y(H){return i.isWebGL2?t.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function x(H,J,q){const te=q.wireframe===!0;let U=a[H.id];U===void 0&&(U={},a[H.id]=U);let Y=U[J.id];Y===void 0&&(Y={},U[J.id]=Y);let K=Y[te];return K===void 0&&(K=m(f()),Y[te]=K),K}function m(H){const J=[],q=[],te=[];for(let U=0;U<r;U++)J[U]=0,q[U]=0,te[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:q,attributeDivisors:te,object:H,attributes:{},index:null}}function u(H,J,q,te){const U=c.attributes,Y=J.attributes;let K=0;const ge=q.getAttributes();for(const _e in ge)if(ge[_e].location>=0){const O=U[_e];let N=Y[_e];if(N===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(N=H.instanceColor)),O===void 0||O.attribute!==N||N&&O.data!==N.data)return!0;K++}return c.attributesNum!==K||c.index!==te}function _(H,J,q,te){const U={},Y=J.attributes;let K=0;const ge=q.getAttributes();for(const _e in ge)if(ge[_e].location>=0){let O=Y[_e];O===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const N={};N.attribute=O,O&&O.data&&(N.data=O.data),U[_e]=N,K++}c.attributes=U,c.attributesNum=K,c.index=te}function p(){const H=c.newAttributes;for(let J=0,q=H.length;J<q;J++)H[J]=0}function E(H){R(H,0)}function R(H,J){const q=c.newAttributes,te=c.enabledAttributes,U=c.attributeDivisors;q[H]=1,te[H]===0&&(t.enableVertexAttribArray(H),te[H]=1),U[H]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,J),U[H]=J)}function A(){const H=c.newAttributes,J=c.enabledAttributes;for(let q=0,te=J.length;q<te;q++)J[q]!==H[q]&&(t.disableVertexAttribArray(q),J[q]=0)}function T(H,J,q,te,U,Y,K){K===!0?t.vertexAttribIPointer(H,J,q,U,Y):t.vertexAttribPointer(H,J,q,te,U,Y)}function z(H,J,q,te){if(i.isWebGL2===!1&&(H.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const U=te.attributes,Y=q.getAttributes(),K=J.defaultAttributeValues;for(const ge in Y){const _e=Y[ge];if(_e.location>=0){let re=U[ge];if(re===void 0&&(ge==="instanceMatrix"&&H.instanceMatrix&&(re=H.instanceMatrix),ge==="instanceColor"&&H.instanceColor&&(re=H.instanceColor)),re!==void 0){const O=re.normalized,N=re.itemSize,P=n.get(re);if(P===void 0)continue;const b=P.buffer,ne=P.type,pe=P.bytesPerElement,V=i.isWebGL2===!0&&(ne===t.INT||ne===t.UNSIGNED_INT||re.gpuType===py);if(re.isInterleavedBufferAttribute){const se=re.data,k=se.stride,be=re.offset;if(se.isInstancedInterleavedBuffer){for(let Q=0;Q<_e.locationSize;Q++)R(_e.location+Q,se.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Q=0;Q<_e.locationSize;Q++)E(_e.location+Q);t.bindBuffer(t.ARRAY_BUFFER,b);for(let Q=0;Q<_e.locationSize;Q++)T(_e.location+Q,N/_e.locationSize,ne,O,k*pe,(be+N/_e.locationSize*Q)*pe,V)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<_e.locationSize;se++)R(_e.location+se,re.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<_e.locationSize;se++)E(_e.location+se);t.bindBuffer(t.ARRAY_BUFFER,b);for(let se=0;se<_e.locationSize;se++)T(_e.location+se,N/_e.locationSize,ne,O,N*pe,N/_e.locationSize*se*pe,V)}}else if(K!==void 0){const O=K[ge];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(_e.location,O);break;case 3:t.vertexAttrib3fv(_e.location,O);break;case 4:t.vertexAttrib4fv(_e.location,O);break;default:t.vertexAttrib1fv(_e.location,O)}}}}A()}function w(){X();for(const H in a){const J=a[H];for(const q in J){const te=J[q];for(const U in te)y(te[U].object),delete te[U];delete J[q]}delete a[H]}}function C(H){if(a[H.id]===void 0)return;const J=a[H.id];for(const q in J){const te=J[q];for(const U in te)y(te[U].object),delete te[U];delete J[q]}delete a[H.id]}function W(H){for(const J in a){const q=a[J];if(q[H.id]===void 0)continue;const te=q[H.id];for(const U in te)y(te[U].object),delete te[U];delete q[H.id]}}function X(){fe(),d=!0,c!==l&&(c=l,g(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:fe,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:W,initAttributes:p,enableAttribute:E,disableUnusedAttributes:A}}function NA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<f;y++)this.render(d[y],h[y]);else{g.multiDrawArraysWEBGL(s,d,0,h,0,f);let y=0;for(let x=0;x<f;x++)y+=h[x];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function DA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=f>0,E=o||e.has("OES_texture_float"),R=p&&E,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:p,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:A}}function UA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const y=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,p=_*4;let E=u.clippingState||null;l.value=E,E=d(y,f,p,g);for(let R=0;R!==p;++R)E[R]=n[R];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,y){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,y!==!0||m===null){const u=g+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let p=0,E=g;p!==x;++p,E+=4)o.copy(h[p]).applyMatrix4(_,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function OA(t){let e=new WeakMap;function n(o,a){return a===Gh?o.mapping=go:a===Wh&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gh||a===Wh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qw(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ky extends Dy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,Ug=[.125,.215,.35,.446,.526,.582],Vr=20,Ad=new ky,Og=new it;let bd=null,Cd=0,Rd=0;const Br=(1+Math.sqrt(5))/2,Is=1/Br,kg=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,Br,Is),new $(0,Br,-Is),new $(Is,0,Br),new $(-Is,0,Br),new $(Br,Is,0),new $(-Br,Is,0)];class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Cd,Rd),e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===go||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ia,format:Xn,colorSpace:Oi,depthBuffer:!1},r=Bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kA(s)),this._blurMaterial=FA(s,e,n)}return r}_compileMaterial(e){const n=new un(this._lodPlanes[0],e);this._renderer.compile(n,Ad)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Og),d.toneMapping=vr,d.autoClear=!1;const g=new la({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),y=new un(new Xa,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Og),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;Bl(r,_*p,u>2?p:0,p,p),d.setRenderTarget(r),x&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===go||e.mapping===vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kg[(r-1)%kg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new un(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Vr-1),x=s/y,m=isFinite(s)?1+Math.floor(d*x):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const u=[];let _=0;for(let T=0;T<Vr;++T){const z=T/x,w=Math.exp(-z*z/2);u.push(w),T===0?_+=w:T<m&&(_+=2*w)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=y,f.mipInt.value=p-i;const E=this._sizeLods[r],R=3*E*(r>p-Xs?r-p+Xs:0),A=4*(this._cubeSize-E);Bl(n,R,A,3*E,2*E),l.setRenderTarget(n),l.render(h,Ad)}}function kA(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+Ug.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=Ug[o-t+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,y=6,x=3,m=2,u=1,_=new Float32Array(x*y*g),p=new Float32Array(m*y*g),E=new Float32Array(u*y*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,z=A>2?0:-1,w=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];_.set(w,x*y*A),p.set(f,m*y*A);const C=[A,A,A,A,A,A];E.set(C,u*y*A)}const R=new ci;R.setAttribute("position",new si(_,x)),R.setAttribute("uv",new si(p,m)),R.setAttribute("faceIndex",new si(E,u)),e.push(R),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bg(t,e,n){const i=new rs(t,e,n);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function FA(t,e,n){const i=new Float32Array(Vr),r=new $(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function zg(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Hg(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function cp(){return`

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
	`}function BA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gh||l===Wh,d=l===go||l===vo;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Fg(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Fg(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HA(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const x=f.morphAttributes[y];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const x=g[y];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,y=h.attributes.position;let x=0;if(g!==null){const _=g.array;x=g.version;for(let p=0,E=_.length;p<E;p+=3){const R=_[p+0],A=_[p+1],T=_[p+2];f.push(R,A,A,T,T,R)}}else if(y!==void 0){const _=y.array;x=y.version;for(let p=0,E=_.length/3-1;p<E;p+=3){const R=p+0,A=p+1,T=p+2;f.push(R,A,A,T,T,R)}}else return;const m=new(wy(f)?Ly:Iy)(f,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function VA(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function h(g,y,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,y,a,g*l,x),n.update(y,s,x)}function f(g,y,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(g[u]/l,y[u]);else{m.multiDrawElementsWEBGL(s,y,0,a,g,0,x);let u=0;for(let _=0;_<x;_++)u+=y[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function GA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WA(t,e){return t[0]-e[0]}function jA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function XA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new kt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=y!==void 0?y.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let J=function(){fe.dispose(),s.delete(d),d.removeEventListener("dispose",J)};var g=J;m!==void 0&&m.texture.dispose();const p=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let w=0;p===!0&&(w=1),E===!0&&(w=2),R===!0&&(w=3);let C=d.attributes.position.count*w,W=1;C>e.maxTextureSize&&(W=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const X=new Float32Array(C*W*4*x),fe=new by(X,C,W,x);fe.type=ar,fe.needsUpdate=!0;const H=w*4;for(let q=0;q<x;q++){const te=A[q],U=T[q],Y=z[q],K=C*W*4*q;for(let ge=0;ge<te.count;ge++){const _e=ge*H;p===!0&&(o.fromBufferAttribute(te,ge),X[K+_e+0]=o.x,X[K+_e+1]=o.y,X[K+_e+2]=o.z,X[K+_e+3]=0),E===!0&&(o.fromBufferAttribute(U,ge),X[K+_e+4]=o.x,X[K+_e+5]=o.y,X[K+_e+6]=o.z,X[K+_e+7]=0),R===!0&&(o.fromBufferAttribute(Y,ge),X[K+_e+8]=o.x,X[K+_e+9]=o.y,X[K+_e+10]=o.z,X[K+_e+11]=Y.itemSize===4?o.w:1)}}m={count:x,texture:fe,size:new Me(C,W)},s.set(d,m),d.addEventListener("dispose",J)}let u=0;for(let p=0;p<f.length;p++)u+=f[p];const _=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==y){x=[];for(let E=0;E<y;E++)x[E]=[E,0];i[d.id]=x}for(let E=0;E<y;E++){const R=x[E];R[0]=E,R[1]=f[E]}x.sort(jA);for(let E=0;E<8;E++)E<y&&x[E][1]?(a[E][0]=x[E][0],a[E][1]=x[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(WA);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const R=a[E],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+E)!==m[A]&&d.setAttribute("morphTarget"+E,m[A]),u&&d.getAttribute("morphNormal"+E)!==u[A]&&d.setAttribute("morphNormal"+E,u[A]),r[E]=T,_+=T):(m&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),u&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const p=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $A(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Fy extends mn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Kr,d!==Kr&&d!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Kr&&(i=or),i===void 0&&d===_o&&(i=Yr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const By=new mn,zy=new Fy(1,1);zy.compareFunction=My;const Hy=new by,Vy=new Iw,Gy=new Uy,Vg=[],Gg=[],Wg=new Float32Array(16),jg=new Float32Array(9),Xg=new Float32Array(4);function Ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vg[r];if(s===void 0&&(s=new Float32Array(r),Vg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xu(t,e){let n=Gg[e];n===void 0&&(n=new Int32Array(e),Gg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function JA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function ZA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Xg.set(i),t.uniformMatrix2fv(this.addr,!1,Xg),Lt(n,i)}}function QA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;jg.set(i),t.uniformMatrix3fv(this.addr,!1,jg),Lt(n,i)}}function eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;Wg.set(i),t.uniformMatrix4fv(this.addr,!1,Wg),Lt(n,i)}}function tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?zy:By;n.setTexture2D(e||s,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vy,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gy,r)}function hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hy,r)}function fb(t){switch(t){case 5126:return qA;case 35664:return YA;case 35665:return KA;case 35666:return JA;case 35674:return ZA;case 35675:return QA;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return hb}}function pb(t,e){t.uniform1fv(this.addr,e)}function mb(t,e){const n=Ao(e,this.size,2);t.uniform2fv(this.addr,n)}function gb(t,e){const n=Ao(e,this.size,3);t.uniform3fv(this.addr,n)}function vb(t,e){const n=Ao(e,this.size,4);t.uniform4fv(this.addr,n)}function _b(t,e){const n=Ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yb(t,e){const n=Ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xb(t,e){const n=Ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sb(t,e){t.uniform1iv(this.addr,e)}function Eb(t,e){t.uniform2iv(this.addr,e)}function Mb(t,e){t.uniform3iv(this.addr,e)}function wb(t,e){t.uniform4iv(this.addr,e)}function Tb(t,e){t.uniform1uiv(this.addr,e)}function Ab(t,e){t.uniform2uiv(this.addr,e)}function bb(t,e){t.uniform3uiv(this.addr,e)}function Cb(t,e){t.uniform4uiv(this.addr,e)}function Rb(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||By,s[o])}function Pb(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vy,s[o])}function Ib(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gy,s[o])}function Lb(t,e,n){const i=this.cache,r=e.length,s=xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hy,s[o])}function Nb(t){switch(t){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return _b;case 35675:return yb;case 35676:return xb;case 5124:case 35670:return Sb;case 35667:case 35671:return Eb;case 35668:case 35672:return Mb;case 35669:case 35673:return wb;case 5125:return Tb;case 36294:return Ab;case 36295:return bb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Lb}}class Db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fb(n.type)}}class Ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Nb(n.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function $g(t,e){t.seq.push(e),t.map[e.id]=e}function kb(t,e,n){const i=t.name,r=i.length;for(Pd.lastIndex=0;;){const s=Pd.exec(i),o=Pd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$g(n,c===void 0?new Db(a,t,e):new Ub(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Ob(a),$g(n,h)),n=h}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);kb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Fb=37297;let Bb=0;function zb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Hb(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Bc&&n===Fc?i="LinearDisplayP3ToLinearSRGB":e===Fc&&n===Bc&&(i="LinearSRGBToLinearDisplayP3"),t){case Oi:case _u:return[i,"LinearTransferOETF"];case Ot:case op:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zb(t.getShaderSource(e),o)}else return r}function Vb(t,e){const n=Hb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Gb(t,e){let n;switch(e){case QM:n="Linear";break;case ew:n="Reinhard";break;case tw:n="OptimizedCineon";break;case nw:n="ACESFilmic";break;case rw:n="AgX";break;case iw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Wb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function jb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($s).join(`
`)}function Xb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $b(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $s(t){return t!==""}function Kg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(qb,Kb)}const Yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kb(t,e){let n=Ke[e];if(n===void 0){const i=Yb.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kh(n)}const Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(t){return t.replace(Jb,Zb)}function Zb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function eC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case go:case vo:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function nC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hy:e="ENVMAP_BLENDING_MULTIPLY";break;case JM:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function iC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Qb(n),c=eC(n),d=tC(n),h=nC(n),f=iC(n),g=n.isWebGL2?"":Wb(n),y=jb(n),x=Xb(s),m=r.createProgram();let u,_,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter($s).join(`
`),u.length>0&&(u+=`
`),_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter($s).join(`
`),_.length>0&&(_+=`
`)):(u=[Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),_=[g,Qg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==vr?Gb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Vb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),o=Kh(o),o=Kg(o,n),o=Jg(o,n),a=Kh(a),a=Kg(a,n),a=Jg(a,n),o=Zg(o),a=Zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=p+u+o,R=p+_+a,A=qg(r,r.VERTEX_SHADER,E),T=qg(r,r.FRAGMENT_SHADER,R);r.attachShader(m,A),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(X){if(t.debug.checkShaderErrors){const fe=r.getProgramInfoLog(m).trim(),H=r.getShaderInfoLog(A).trim(),J=r.getShaderInfoLog(T).trim();let q=!0,te=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,T);else{const U=Yg(r,A,"vertex"),Y=Yg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+U+`
`+Y)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(H===""||J==="")&&(te=!1);te&&(X.diagnostics={runnable:q,programLog:fe,vertexShader:{log:H,prefix:u},fragmentShader:{log:J,prefix:_}})}r.deleteShader(A),r.deleteShader(T),w=new oc(r,m),C=$b(r,m)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,Fb)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let sC=0;class oC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aC(e),n.set(e,i)),i}}class aC{constructor(e){this.id=sC++,this.code=e,this.usedTimes=0}}function lC(t,e,n,i,r,s,o){const a=new Ry,l=new oC,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function m(w,C,W,X,fe){const H=X.fog,J=fe.geometry,q=w.isMeshStandardMaterial?X.environment:null,te=(w.isMeshStandardMaterial?n:e).get(w.envMap||q),U=te&&te.mapping===vu?te.image.height:null,Y=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const K=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ge=K!==void 0?K.length:0;let _e=0;J.morphAttributes.position!==void 0&&(_e=1),J.morphAttributes.normal!==void 0&&(_e=2),J.morphAttributes.color!==void 0&&(_e=3);let re,O,N,P;if(Y){const nt=ti[Y];re=nt.vertexShader,O=nt.fragmentShader}else re=w.vertexShader,O=w.fragmentShader,l.update(w),N=l.getVertexShaderID(w),P=l.getFragmentShaderID(w);const b=t.getRenderTarget(),ne=fe.isInstancedMesh===!0,pe=fe.isBatchedMesh===!0,V=!!w.map,se=!!w.matcap,k=!!te,be=!!w.aoMap,Q=!!w.lightMap,ce=!!w.bumpMap,j=!!w.normalMap,Z=!!w.displacementMap,L=!!w.emissiveMap,v=!!w.metalnessMap,S=!!w.roughnessMap,F=w.anisotropy>0,ie=w.clearcoat>0,oe=w.iridescence>0,ae=w.sheen>0,Te=w.transmission>0,ye=F&&!!w.anisotropyMap,we=ie&&!!w.clearcoatMap,Le=ie&&!!w.clearcoatNormalMap,Fe=ie&&!!w.clearcoatRoughnessMap,me=oe&&!!w.iridescenceMap,Ge=oe&&!!w.iridescenceThicknessMap,Re=ae&&!!w.sheenColorMap,Oe=ae&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Ie=!!w.specularColorMap,D=!!w.specularIntensityMap,xe=Te&&!!w.transmissionMap,Ne=Te&&!!w.thicknessMap,Ue=!!w.gradientMap,Se=!!w.alphaMap,G=w.alphaTest>0,Ee=!!w.alphaHash,Ce=!!w.extensions,B=!!J.attributes.uv1,ve=!!J.attributes.uv2,ke=!!J.attributes.uv3;let He=vr;return w.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(He=t.toneMapping),{isWebGL2:d,shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:re,fragmentShader:O,defines:w.defines,customVertexShaderID:N,customFragmentShaderID:P,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:pe,instancing:ne,instancingColor:ne&&fe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:b===null?t.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Oi,map:V,matcap:se,envMap:k,envMapMode:k&&te.mapping,envMapCubeUVHeight:U,aoMap:be,lightMap:Q,bumpMap:ce,normalMap:j,displacementMap:f&&Z,emissiveMap:L,normalMapObjectSpace:j&&w.normalMapType===gw,normalMapTangentSpace:j&&w.normalMapType===Ey,metalnessMap:v,roughnessMap:S,anisotropy:F,anisotropyMap:ye,clearcoat:ie,clearcoatMap:we,clearcoatNormalMap:Le,clearcoatRoughnessMap:Fe,iridescence:oe,iridescenceMap:me,iridescenceThicknessMap:Ge,sheen:ae,sheenColorMap:Re,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:Ie,specularIntensityMap:D,transmission:Te,transmissionMap:xe,thicknessMap:Ne,gradientMap:Ue,opaque:w.transparent===!1&&w.blending===no,alphaMap:Se,alphaTest:G,alphaHash:Ee,combine:w.combine,mapUv:V&&x(w.map.channel),aoMapUv:be&&x(w.aoMap.channel),lightMapUv:Q&&x(w.lightMap.channel),bumpMapUv:ce&&x(w.bumpMap.channel),normalMapUv:j&&x(w.normalMap.channel),displacementMapUv:Z&&x(w.displacementMap.channel),emissiveMapUv:L&&x(w.emissiveMap.channel),metalnessMapUv:v&&x(w.metalnessMap.channel),roughnessMapUv:S&&x(w.roughnessMap.channel),anisotropyMapUv:ye&&x(w.anisotropyMap.channel),clearcoatMapUv:we&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(w.sheenRoughnessMap.channel),specularMapUv:Pe&&x(w.specularMap.channel),specularColorMapUv:Ie&&x(w.specularColorMap.channel),specularIntensityMapUv:D&&x(w.specularIntensityMap.channel),transmissionMapUv:xe&&x(w.transmissionMap.channel),thicknessMapUv:Ne&&x(w.thicknessMap.channel),alphaMapUv:Se&&x(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(j||F),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:B,vertexUv2s:ve,vertexUv3s:ke,pointsUvs:fe.isPoints===!0&&!!J.attributes.uv&&(V||Se),fog:!!H,useFog:w.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:fe.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:He,useLegacyLights:t._useLegacyLights,decodeVideoTexture:V&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===Yt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ce&&w.extensions.derivatives===!0,extensionFragDepth:Ce&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function u(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const W in w.defines)C.push(W),C.push(w.defines[W]);return w.isRawShaderMaterial===!1&&(_(C,w),p(C,w),C.push(t.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function _(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function p(w,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),w.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function E(w){const C=y[w.type];let W;if(C){const X=ti[C];W=Ww.clone(X.uniforms)}else W=w.uniforms;return W}function R(w,C){let W;for(let X=0,fe=c.length;X<fe;X++){const H=c[X];if(H.cacheKey===C){W=H,++W.usedTimes;break}}return W===void 0&&(W=new rC(t,C,w,s),c.push(W)),W}function A(w){if(--w.usedTimes===0){const C=c.indexOf(w);c[C]=c[c.length-1],c.pop(),w.destroy()}}function T(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:z}}function cC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function uC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ev(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,y,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:y,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,f,g,y,x,m){const u=o(h,f,g,y,x,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,y,x,m){const u=o(h,f,g,y,x,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||uC),i.length>1&&i.sort(f||ev),r.length>1&&r.sort(f||ev)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function dC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new tv,t.set(i,[o])):r>=s.length?(o=new tv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new it};break;case"SpotLight":n={position:new $,direction:new $,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function fC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pC=0;function mC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gC(t,e){const n=new hC,i=fC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new $);const s=new $,o=new Ct,a=new Ct;function l(d,h){let f=0,g=0,y=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,m=0,u=0,_=0,p=0,E=0,R=0,A=0,T=0,z=0,w=0;d.sort(mC);const C=h===!0?Math.PI:1;for(let X=0,fe=d.length;X<fe;X++){const H=d[X],J=H.color,q=H.intensity,te=H.distance,U=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=J.r*q*C,g+=J.g*q*C,y+=J.b*q*C;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(H.sh.coefficients[Y],q);w++}else if(H.isDirectionalLight){const Y=n.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity*C),H.castShadow){const K=H.shadow,ge=i.get(H);ge.shadowBias=K.bias,ge.shadowNormalBias=K.normalBias,ge.shadowRadius=K.radius,ge.shadowMapSize=K.mapSize,r.directionalShadow[x]=ge,r.directionalShadowMap[x]=U,r.directionalShadowMatrix[x]=H.shadow.matrix,E++}r.directional[x]=Y,x++}else if(H.isSpotLight){const Y=n.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(J).multiplyScalar(q*C),Y.distance=te,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,r.spot[u]=Y;const K=H.shadow;if(H.map&&(r.spotLightMap[T]=H.map,T++,K.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[u]=K.matrix,H.castShadow){const ge=i.get(H);ge.shadowBias=K.bias,ge.shadowNormalBias=K.normalBias,ge.shadowRadius=K.radius,ge.shadowMapSize=K.mapSize,r.spotShadow[u]=ge,r.spotShadowMap[u]=U,A++}u++}else if(H.isRectAreaLight){const Y=n.get(H);Y.color.copy(J).multiplyScalar(q),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=Y,_++}else if(H.isPointLight){const Y=n.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity*C),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const K=H.shadow,ge=i.get(H);ge.shadowBias=K.bias,ge.shadowNormalBias=K.normalBias,ge.shadowRadius=K.radius,ge.shadowMapSize=K.mapSize,ge.shadowCameraNear=K.camera.near,ge.shadowCameraFar=K.camera.far,r.pointShadow[m]=ge,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=H.shadow.matrix,R++}r.point[m]=Y,m++}else if(H.isHemisphereLight){const Y=n.get(H);Y.skyColor.copy(H.color).multiplyScalar(q*C),Y.groundColor.copy(H.groundColor).multiplyScalar(q*C),r.hemi[p]=Y,p++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==x||W.pointLength!==m||W.spotLength!==u||W.rectAreaLength!==_||W.hemiLength!==p||W.numDirectionalShadows!==E||W.numPointShadows!==R||W.numSpotShadows!==A||W.numSpotMaps!==T||W.numLightProbes!==w)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=_,r.point.length=m,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+T-z,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=w,W.directionalLength=x,W.pointLength=m,W.spotLength=u,W.rectAreaLength=_,W.hemiLength=p,W.numDirectionalShadows=E,W.numPointShadows=R,W.numSpotShadows=A,W.numSpotMaps=T,W.numLightProbes=w,r.version=pC++)}function c(d,h){let f=0,g=0,y=0,x=0,m=0;const u=h.matrixWorldInverse;for(let _=0,p=d.length;_<p;_++){const E=d[_];if(E.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),f++}else if(E.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),y++}else if(E.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),g++}else if(E.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function nv(t,e){const n=new gC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new nv(t,e),n.set(s,[l])):o>=a.length?(l=new nv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class _C extends ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yC extends ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SC=`uniform sampler2D shadow_pass;
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
}`;function EC(t,e,n){let i=new lp;const r=new Me,s=new Me,o=new kt,a=new _C({depthPacking:mw}),l=new yC,c={},d=n.maxTextureSize,h={[wr]:Yt,[Yt]:wr,[In]:In},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:xC,fragmentShader:SC}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new ci;y.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new un(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dy;let u=this.type;this.render=function(A,T,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),C=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),X=t.state;X.setBlending(gr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const fe=u!==xi&&this.type===xi,H=u===xi&&this.type!==xi;for(let J=0,q=A.length;J<q;J++){const te=A[J],U=te.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Y=U.getFrameExtents();if(r.multiply(Y),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,U.mapSize.y=s.y)),U.map===null||fe===!0||H===!0){const ge=this.type!==xi?{minFilter:tn,magFilter:tn}:{};U.map!==null&&U.map.dispose(),U.map=new rs(r.x,r.y,ge),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const K=U.getViewportCount();for(let ge=0;ge<K;ge++){const _e=U.getViewport(ge);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),X.viewport(o),U.updateMatrices(te,ge),i=U.getFrustum(),E(T,z,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===xi&&_(U,z),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,C,W)};function _(A,T){const z=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new rs(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,z,f,x,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,z,g,x,null)}function p(A,T,z,w){let C=null;const W=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(W!==void 0)C=W;else if(C=z.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=C.uuid,fe=T.uuid;let H=c[X];H===void 0&&(H={},c[X]=H);let J=H[fe];J===void 0&&(J=C.clone(),H[fe]=J,T.addEventListener("dispose",R)),C=J}if(C.visible=T.visible,C.wireframe=T.wireframe,w===xi?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const X=t.properties.get(C);X.light=z}return C}function E(A,T,z,w,C){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const fe=e.update(A),H=A.material;if(Array.isArray(H)){const J=fe.groups;for(let q=0,te=J.length;q<te;q++){const U=J[q],Y=H[U.materialIndex];if(Y&&Y.visible){const K=p(A,Y,w,C);A.onBeforeShadow(t,A,T,z,fe,K,U),t.renderBufferDirect(z,null,fe,K,A,U),A.onAfterShadow(t,A,T,z,fe,K,U)}}}else if(H.visible){const J=p(A,H,w,C);A.onBeforeShadow(t,A,T,z,fe,J,null),t.renderBufferDirect(z,null,fe,J,A,null),A.onAfterShadow(t,A,T,z,fe,J,null)}}const X=A.children;for(let fe=0,H=X.length;fe<H;fe++)E(X[fe],T,z,w,C)}function R(A){A.target.removeEventListener("dispose",R);for(const z in c){const w=c[z],C=A.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function MC(t,e,n){const i=n.isWebGL2;function r(){let G=!1;const Ee=new kt;let Ce=null;const B=new kt(0,0,0,0);return{setMask:function(ve){Ce!==ve&&!G&&(t.colorMask(ve,ve,ve,ve),Ce=ve)},setLocked:function(ve){G=ve},setClear:function(ve,ke,He,et,nt){nt===!0&&(ve*=et,ke*=et,He*=et),Ee.set(ve,ke,He,et),B.equals(Ee)===!1&&(t.clearColor(ve,ke,He,et),B.copy(Ee))},reset:function(){G=!1,Ce=null,B.set(-1,0,0,0)}}}function s(){let G=!1,Ee=null,Ce=null,B=null;return{setTest:function(ve){ve?pe(t.DEPTH_TEST):V(t.DEPTH_TEST)},setMask:function(ve){Ee!==ve&&!G&&(t.depthMask(ve),Ee=ve)},setFunc:function(ve){if(Ce!==ve){switch(ve){case WM:t.depthFunc(t.NEVER);break;case jM:t.depthFunc(t.ALWAYS);break;case XM:t.depthFunc(t.LESS);break;case Oc:t.depthFunc(t.LEQUAL);break;case $M:t.depthFunc(t.EQUAL);break;case qM:t.depthFunc(t.GEQUAL);break;case YM:t.depthFunc(t.GREATER);break;case KM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ce=ve}},setLocked:function(ve){G=ve},setClear:function(ve){B!==ve&&(t.clearDepth(ve),B=ve)},reset:function(){G=!1,Ee=null,Ce=null,B=null}}}function o(){let G=!1,Ee=null,Ce=null,B=null,ve=null,ke=null,He=null,et=null,nt=null;return{setTest:function(tt){G||(tt?pe(t.STENCIL_TEST):V(t.STENCIL_TEST))},setMask:function(tt){Ee!==tt&&!G&&(t.stencilMask(tt),Ee=tt)},setFunc:function(tt,pt,wt){(Ce!==tt||B!==pt||ve!==wt)&&(t.stencilFunc(tt,pt,wt),Ce=tt,B=pt,ve=wt)},setOp:function(tt,pt,wt){(ke!==tt||He!==pt||et!==wt)&&(t.stencilOp(tt,pt,wt),ke=tt,He=pt,et=wt)},setLocked:function(tt){G=tt},setClear:function(tt){nt!==tt&&(t.clearStencil(tt),nt=tt)},reset:function(){G=!1,Ee=null,Ce=null,B=null,ve=null,ke=null,He=null,et=null,nt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},g={},y=new WeakMap,x=[],m=null,u=!1,_=null,p=null,E=null,R=null,A=null,T=null,z=null,w=new it(0,0,0),C=0,W=!1,X=null,fe=null,H=null,J=null,q=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),U=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),U=Y>=2);let ge=null,_e={};const re=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),N=new kt().fromArray(re),P=new kt().fromArray(O);function b(G,Ee,Ce,B){const ve=new Uint8Array(4),ke=t.createTexture();t.bindTexture(G,ke),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<Ce;He++)i&&(G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY)?t.texImage3D(Ee,0,t.RGBA,1,1,B,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(Ee+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ke}const ne={};ne[t.TEXTURE_2D]=b(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=b(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ne[t.TEXTURE_2D_ARRAY]=b(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=b(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(Oc),L(!1),v(Fm),pe(t.CULL_FACE),j(gr);function pe(G){f[G]!==!0&&(t.enable(G),f[G]=!0)}function V(G){f[G]!==!1&&(t.disable(G),f[G]=!1)}function se(G,Ee){return g[G]!==Ee?(t.bindFramebuffer(G,Ee),g[G]=Ee,i&&(G===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=Ee),G===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function k(G,Ee){let Ce=x,B=!1;if(G)if(Ce=y.get(Ee),Ce===void 0&&(Ce=[],y.set(Ee,Ce)),G.isWebGLMultipleRenderTargets){const ve=G.texture;if(Ce.length!==ve.length||Ce[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,He=ve.length;ke<He;ke++)Ce[ke]=t.COLOR_ATTACHMENT0+ke;Ce.length=ve.length,B=!0}}else Ce[0]!==t.COLOR_ATTACHMENT0&&(Ce[0]=t.COLOR_ATTACHMENT0,B=!0);else Ce[0]!==t.BACK&&(Ce[0]=t.BACK,B=!0);B&&(n.isWebGL2?t.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function be(G){return m!==G?(t.useProgram(G),m=G,!0):!1}const Q={[Hr]:t.FUNC_ADD,[RM]:t.FUNC_SUBTRACT,[PM]:t.FUNC_REVERSE_SUBTRACT};if(i)Q[Hm]=t.MIN,Q[Vm]=t.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Q[Hm]=G.MIN_EXT,Q[Vm]=G.MAX_EXT)}const ce={[IM]:t.ZERO,[LM]:t.ONE,[NM]:t.SRC_COLOR,[Hh]:t.SRC_ALPHA,[BM]:t.SRC_ALPHA_SATURATE,[kM]:t.DST_COLOR,[UM]:t.DST_ALPHA,[DM]:t.ONE_MINUS_SRC_COLOR,[Vh]:t.ONE_MINUS_SRC_ALPHA,[FM]:t.ONE_MINUS_DST_COLOR,[OM]:t.ONE_MINUS_DST_ALPHA,[zM]:t.CONSTANT_COLOR,[HM]:t.ONE_MINUS_CONSTANT_COLOR,[VM]:t.CONSTANT_ALPHA,[GM]:t.ONE_MINUS_CONSTANT_ALPHA};function j(G,Ee,Ce,B,ve,ke,He,et,nt,tt){if(G===gr){u===!0&&(V(t.BLEND),u=!1);return}if(u===!1&&(pe(t.BLEND),u=!0),G!==CM){if(G!==_||tt!==W){if((p!==Hr||A!==Hr)&&(t.blendEquation(t.FUNC_ADD),p=Hr,A=Hr),tt)switch(G){case no:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oa:t.blendFunc(t.ONE,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case no:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oa:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}E=null,R=null,T=null,z=null,w.set(0,0,0),C=0,_=G,W=tt}return}ve=ve||Ee,ke=ke||Ce,He=He||B,(Ee!==p||ve!==A)&&(t.blendEquationSeparate(Q[Ee],Q[ve]),p=Ee,A=ve),(Ce!==E||B!==R||ke!==T||He!==z)&&(t.blendFuncSeparate(ce[Ce],ce[B],ce[ke],ce[He]),E=Ce,R=B,T=ke,z=He),(et.equals(w)===!1||nt!==C)&&(t.blendColor(et.r,et.g,et.b,nt),w.copy(et),C=nt),_=G,W=!1}function Z(G,Ee){G.side===In?V(t.CULL_FACE):pe(t.CULL_FACE);let Ce=G.side===Yt;Ee&&(Ce=!Ce),L(Ce),G.blending===no&&G.transparent===!1?j(gr):j(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const B=G.stencilWrite;c.setTest(B),B&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),F(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):V(t.SAMPLE_ALPHA_TO_COVERAGE)}function L(G){X!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),X=G)}function v(G){G!==TM?(pe(t.CULL_FACE),G!==fe&&(G===Fm?t.cullFace(t.BACK):G===AM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):V(t.CULL_FACE),fe=G}function S(G){G!==H&&(U&&t.lineWidth(G),H=G)}function F(G,Ee,Ce){G?(pe(t.POLYGON_OFFSET_FILL),(J!==Ee||q!==Ce)&&(t.polygonOffset(Ee,Ce),J=Ee,q=Ce)):V(t.POLYGON_OFFSET_FILL)}function ie(G){G?pe(t.SCISSOR_TEST):V(t.SCISSOR_TEST)}function oe(G){G===void 0&&(G=t.TEXTURE0+te-1),ge!==G&&(t.activeTexture(G),ge=G)}function ae(G,Ee,Ce){Ce===void 0&&(ge===null?Ce=t.TEXTURE0+te-1:Ce=ge);let B=_e[Ce];B===void 0&&(B={type:void 0,texture:void 0},_e[Ce]=B),(B.type!==G||B.texture!==Ee)&&(ge!==Ce&&(t.activeTexture(Ce),ge=Ce),t.bindTexture(G,Ee||ne[G]),B.type=G,B.texture=Ee)}function Te(){const G=_e[ge];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{t.compressedTexImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{t.texStorage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function D(G){N.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),N.copy(G))}function xe(G){P.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),P.copy(G))}function Ne(G,Ee){let Ce=h.get(Ee);Ce===void 0&&(Ce=new WeakMap,h.set(Ee,Ce));let B=Ce.get(G);B===void 0&&(B=t.getUniformBlockIndex(Ee,G.name),Ce.set(G,B))}function Ue(G,Ee){const B=h.get(Ee).get(G);d.get(Ee)!==B&&(t.uniformBlockBinding(Ee,B,G.__bindingPointIndex),d.set(Ee,B))}function Se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ge=null,_e={},g={},y=new WeakMap,x=[],m=null,u=!1,_=null,p=null,E=null,R=null,A=null,T=null,z=null,w=new it(0,0,0),C=0,W=!1,X=null,fe=null,H=null,J=null,q=null,N.set(0,0,t.canvas.width,t.canvas.height),P.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:V,bindFramebuffer:se,drawBuffers:k,useProgram:be,setBlending:j,setMaterial:Z,setFlipSided:L,setCullFace:v,setLineWidth:S,setPolygonOffset:F,setScissorTest:ie,activeTexture:oe,bindTexture:ae,unbindTexture:Te,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:Pe,texImage3D:Ie,updateUBOMapping:Ne,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:Le,texSubImage3D:Fe,compressedTexSubImage2D:me,compressedTexSubImage3D:Ge,scissor:D,viewport:xe,reset:Se}}function wC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(v,S){return g?new OffscreenCanvas(v,S):Hc("canvas")}function x(v,S,F,ie){let oe=1;if((v.width>ie||v.height>ie)&&(oe=ie/Math.max(v.width,v.height)),oe<1||S===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const ae=S?Yh:Math.floor,Te=ae(oe*v.width),ye=ae(oe*v.height);h===void 0&&(h=y(Te,ye));const we=F?y(Te,ye):h;return we.width=Te,we.height=ye,we.getContext("2d").drawImage(v,0,0,Te,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Te+"x"+ye+")."),we}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function m(v){return _g(v.width)&&_g(v.height)}function u(v){return a?!1:v.wrapS!==jn||v.wrapT!==jn||v.minFilter!==tn&&v.minFilter!==Rn}function _(v,S){return v.generateMipmaps&&S&&v.minFilter!==tn&&v.minFilter!==Rn}function p(v){t.generateMipmap(v)}function E(v,S,F,ie,oe=!1){if(a===!1)return S;if(v!==null){if(t[v]!==void 0)return t[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ae=S;if(S===t.RED&&(F===t.FLOAT&&(ae=t.R32F),F===t.HALF_FLOAT&&(ae=t.R16F),F===t.UNSIGNED_BYTE&&(ae=t.R8)),S===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(ae=t.R8UI),F===t.UNSIGNED_SHORT&&(ae=t.R16UI),F===t.UNSIGNED_INT&&(ae=t.R32UI),F===t.BYTE&&(ae=t.R8I),F===t.SHORT&&(ae=t.R16I),F===t.INT&&(ae=t.R32I)),S===t.RG&&(F===t.FLOAT&&(ae=t.RG32F),F===t.HALF_FLOAT&&(ae=t.RG16F),F===t.UNSIGNED_BYTE&&(ae=t.RG8)),S===t.RGBA){const Te=oe?kc:ot.getTransfer(ie);F===t.FLOAT&&(ae=t.RGBA32F),F===t.HALF_FLOAT&&(ae=t.RGBA16F),F===t.UNSIGNED_BYTE&&(ae=Te===ut?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function R(v,S,F){return _(v,F)===!0||v.isFramebufferTexture&&v.minFilter!==tn&&v.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?S.mipmaps.length:1}function A(v){return v===tn||v===Gm||v===nd?t.NEAREST:t.LINEAR}function T(v){const S=v.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&d.delete(S)}function z(v){const S=v.target;S.removeEventListener("dispose",z),W(S)}function w(v){const S=i.get(v);if(S.__webglInit===void 0)return;const F=v.source,ie=f.get(F);if(ie){const oe=ie[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(v),Object.keys(ie).length===0&&f.delete(F)}i.remove(v)}function C(v){const S=i.get(v);t.deleteTexture(S.__webglTexture);const F=v.source,ie=f.get(F);delete ie[S.__cacheKey],o.memory.textures--}function W(v){const S=v.texture,F=i.get(v),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(F.__webglFramebuffer[oe]))for(let ae=0;ae<F.__webglFramebuffer[oe].length;ae++)t.deleteFramebuffer(F.__webglFramebuffer[oe][ae]);else t.deleteFramebuffer(F.__webglFramebuffer[oe]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[oe])}else{if(Array.isArray(F.__webglFramebuffer))for(let oe=0;oe<F.__webglFramebuffer.length;oe++)t.deleteFramebuffer(F.__webglFramebuffer[oe]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let oe=0;oe<F.__webglColorRenderbuffer.length;oe++)F.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[oe]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let oe=0,ae=S.length;oe<ae;oe++){const Te=i.get(S[oe]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(S[oe])}i.remove(S),i.remove(v)}let X=0;function fe(){X=0}function H(){const v=X;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),X+=1,v}function J(v){const S=[];return S.push(v.wrapS),S.push(v.wrapT),S.push(v.wrapR||0),S.push(v.magFilter),S.push(v.minFilter),S.push(v.anisotropy),S.push(v.internalFormat),S.push(v.format),S.push(v.type),S.push(v.generateMipmaps),S.push(v.premultiplyAlpha),S.push(v.flipY),S.push(v.unpackAlignment),S.push(v.colorSpace),S.join()}function q(v,S){const F=i.get(v);if(v.isVideoTexture&&Z(v),v.isRenderTargetTexture===!1&&v.version>0&&F.__version!==v.version){const ie=v.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(F,v,S);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+S)}function te(v,S){const F=i.get(v);if(v.version>0&&F.__version!==v.version){N(F,v,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+S)}function U(v,S){const F=i.get(v);if(v.version>0&&F.__version!==v.version){N(F,v,S);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+S)}function Y(v,S){const F=i.get(v);if(v.version>0&&F.__version!==v.version){P(F,v,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+S)}const K={[jh]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[Xh]:t.MIRRORED_REPEAT},ge={[tn]:t.NEAREST,[Gm]:t.NEAREST_MIPMAP_NEAREST,[nd]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[sw]:t.LINEAR_MIPMAP_NEAREST,[Pa]:t.LINEAR_MIPMAP_LINEAR},_e={[vw]:t.NEVER,[Mw]:t.ALWAYS,[_w]:t.LESS,[My]:t.LEQUAL,[yw]:t.EQUAL,[Ew]:t.GEQUAL,[xw]:t.GREATER,[Sw]:t.NOTEQUAL};function re(v,S,F){if(F?(t.texParameteri(v,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(v,t.TEXTURE_WRAP_T,K[S.wrapT]),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(v,t.TEXTURE_MAG_FILTER,ge[S.magFilter]),t.texParameteri(v,t.TEXTURE_MIN_FILTER,ge[S.minFilter])):(t.texParameteri(v,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(v,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY)&&t.texParameteri(v,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==jn||S.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(v,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(v,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==tn&&S.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(v,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(v,t.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==nd&&S.minFilter!==Pa||S.type===ar&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ia&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(v,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function O(v,S){let F=!1;v.__webglInit===void 0&&(v.__webglInit=!0,S.addEventListener("dispose",T));const ie=S.source;let oe=f.get(ie);oe===void 0&&(oe={},f.set(ie,oe));const ae=J(S);if(ae!==v.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),oe[ae].usedTimes++;const Te=oe[v.__cacheKey];Te!==void 0&&(oe[v.__cacheKey].usedTimes--,Te.usedTimes===0&&C(S)),v.__cacheKey=ae,v.__webglTexture=oe[ae].texture}return F}function N(v,S,F){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const oe=O(v,S),ae=S.source;n.bindTexture(ie,v.__webglTexture,t.TEXTURE0+F);const Te=i.get(ae);if(ae.version!==Te.__version||oe===!0){n.activeTexture(t.TEXTURE0+F);const ye=ot.getPrimaries(ot.workingColorSpace),we=S.colorSpace===Ln?null:ot.getPrimaries(S.colorSpace),Le=S.colorSpace===Ln||ye===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Fe=u(S)&&m(S.image)===!1;let me=x(S.image,Fe,!1,r.maxTextureSize);me=L(S,me);const Ge=m(me)||a,Re=s.convert(S.format,S.colorSpace);let Oe=s.convert(S.type),Pe=E(S.internalFormat,Re,Oe,S.colorSpace,S.isVideoTexture);re(ie,S,Ge);let Ie;const D=S.mipmaps,xe=a&&S.isVideoTexture!==!0&&Pe!==xy,Ne=Te.__version===void 0||oe===!0,Ue=R(S,me,Ge);if(S.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?S.type===ar?Pe=t.DEPTH_COMPONENT32F:S.type===or?Pe=t.DEPTH_COMPONENT24:S.type===Yr?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:S.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Kr&&Pe===t.DEPTH_COMPONENT&&S.type!==sp&&S.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=or,Oe=s.convert(S.type)),S.format===_o&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,S.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Yr,Oe=s.convert(S.type))),Ne&&(xe?n.texStorage2D(t.TEXTURE_2D,1,Pe,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Pe,me.width,me.height,0,Re,Oe,null));else if(S.isDataTexture)if(D.length>0&&Ge){xe&&Ne&&n.texStorage2D(t.TEXTURE_2D,Ue,Pe,D[0].width,D[0].height);for(let Se=0,G=D.length;Se<G;Se++)Ie=D[Se],xe?n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Re,Oe,Ie.data):n.texImage2D(t.TEXTURE_2D,Se,Pe,Ie.width,Ie.height,0,Re,Oe,Ie.data);S.generateMipmaps=!1}else xe?(Ne&&n.texStorage2D(t.TEXTURE_2D,Ue,Pe,me.width,me.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Re,Oe,me.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,me.width,me.height,0,Re,Oe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xe&&Ne&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Pe,D[0].width,D[0].height,me.depth);for(let Se=0,G=D.length;Se<G;Se++)Ie=D[Se],S.format!==Xn?Re!==null?xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,me.depth,Re,Ie.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Se,Pe,Ie.width,Ie.height,me.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,me.depth,Re,Oe,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Se,Pe,Ie.width,Ie.height,me.depth,0,Re,Oe,Ie.data)}else{xe&&Ne&&n.texStorage2D(t.TEXTURE_2D,Ue,Pe,D[0].width,D[0].height);for(let Se=0,G=D.length;Se<G;Se++)Ie=D[Se],S.format!==Xn?Re!==null?xe?n.compressedTexSubImage2D(t.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Re,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,Se,Pe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Re,Oe,Ie.data):n.texImage2D(t.TEXTURE_2D,Se,Pe,Ie.width,Ie.height,0,Re,Oe,Ie.data)}else if(S.isDataArrayTexture)xe?(Ne&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Pe,me.width,me.height,me.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,Oe,me.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Re,Oe,me.data);else if(S.isData3DTexture)xe?(Ne&&n.texStorage3D(t.TEXTURE_3D,Ue,Pe,me.width,me.height,me.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,Oe,me.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Re,Oe,me.data);else if(S.isFramebufferTexture){if(Ne)if(xe)n.texStorage2D(t.TEXTURE_2D,Ue,Pe,me.width,me.height);else{let Se=me.width,G=me.height;for(let Ee=0;Ee<Ue;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Pe,Se,G,0,Re,Oe,null),Se>>=1,G>>=1}}else if(D.length>0&&Ge){xe&&Ne&&n.texStorage2D(t.TEXTURE_2D,Ue,Pe,D[0].width,D[0].height);for(let Se=0,G=D.length;Se<G;Se++)Ie=D[Se],xe?n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Re,Oe,Ie):n.texImage2D(t.TEXTURE_2D,Se,Pe,Re,Oe,Ie);S.generateMipmaps=!1}else xe?(Ne&&n.texStorage2D(t.TEXTURE_2D,Ue,Pe,me.width,me.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Oe,me)):n.texImage2D(t.TEXTURE_2D,0,Pe,Re,Oe,me);_(S,Ge)&&p(ie),Te.__version=ae.version,S.onUpdate&&S.onUpdate(S)}v.__version=S.version}function P(v,S,F){if(S.image.length!==6)return;const ie=O(v,S),oe=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,v.__webglTexture,t.TEXTURE0+F);const ae=i.get(oe);if(oe.version!==ae.__version||ie===!0){n.activeTexture(t.TEXTURE0+F);const Te=ot.getPrimaries(ot.workingColorSpace),ye=S.colorSpace===Ln?null:ot.getPrimaries(S.colorSpace),we=S.colorSpace===Ln||Te===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Se=0;Se<6;Se++)!Le&&!Fe?me[Se]=x(S.image[Se],!1,!0,r.maxCubemapSize):me[Se]=Fe?S.image[Se].image:S.image[Se],me[Se]=L(S,me[Se]);const Ge=me[0],Re=m(Ge)||a,Oe=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),Ie=E(S.internalFormat,Oe,Pe,S.colorSpace),D=a&&S.isVideoTexture!==!0,xe=ae.__version===void 0||ie===!0;let Ne=R(S,Ge,Re);re(t.TEXTURE_CUBE_MAP,S,Re);let Ue;if(Le){D&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,Ie,Ge.width,Ge.height);for(let Se=0;Se<6;Se++){Ue=me[Se].mipmaps;for(let G=0;G<Ue.length;G++){const Ee=Ue[G];S.format!==Xn?Oe!==null?D?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G,0,0,Ee.width,Ee.height,Oe,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G,Ie,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G,0,0,Ee.width,Ee.height,Oe,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G,Ie,Ee.width,Ee.height,0,Oe,Pe,Ee.data)}}}else{Ue=S.mipmaps,D&&xe&&(Ue.length>0&&Ne++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,Ie,me[0].width,me[0].height));for(let Se=0;Se<6;Se++)if(Fe){D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,me[Se].width,me[Se].height,Oe,Pe,me[Se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ie,me[Se].width,me[Se].height,0,Oe,Pe,me[Se].data);for(let G=0;G<Ue.length;G++){const Ce=Ue[G].image[Se].image;D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G+1,0,0,Ce.width,Ce.height,Oe,Pe,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G+1,Ie,Ce.width,Ce.height,0,Oe,Pe,Ce.data)}}else{D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Oe,Pe,me[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ie,Oe,Pe,me[Se]);for(let G=0;G<Ue.length;G++){const Ee=Ue[G];D?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G+1,0,0,Oe,Pe,Ee.image[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,G+1,Ie,Oe,Pe,Ee.image[Se])}}}_(S,Re)&&p(t.TEXTURE_CUBE_MAP),ae.__version=oe.version,S.onUpdate&&S.onUpdate(S)}v.__version=S.version}function b(v,S,F,ie,oe,ae){const Te=s.convert(F.format,F.colorSpace),ye=s.convert(F.type),we=E(F.internalFormat,Te,ye,F.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>ae),me=Math.max(1,S.height>>ae);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ae,we,Fe,me,S.depth,0,Te,ye,null):n.texImage2D(oe,ae,we,Fe,me,0,Te,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,v),j(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,oe,i.get(F).__webglTexture,0,ce(S)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,oe,i.get(F).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(v,S,F){if(t.bindRenderbuffer(t.RENDERBUFFER,v),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||j(S)){const oe=S.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ar?ie=t.DEPTH_COMPONENT32F:oe.type===or&&(ie=t.DEPTH_COMPONENT24));const ae=ce(S);j(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,v)}else if(S.depthBuffer&&S.stencilBuffer){const ie=ce(S);F&&j(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,v)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let oe=0;oe<ie.length;oe++){const ae=ie[oe],Te=s.convert(ae.format,ae.colorSpace),ye=s.convert(ae.type),we=E(ae.internalFormat,Te,ye,ae.colorSpace),Le=ce(S);F&&j(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,we,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,we,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,we,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(v,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,v),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,oe=ce(S);if(S.depthTexture.format===Kr)j(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===_o)j(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function V(v){const S=i.get(v),F=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,v)}else if(F){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),ne(S.__webglDepthbuffer[ie],v,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),ne(S.__webglDepthbuffer,v,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(v,S,F){const ie=i.get(v);S!==void 0&&b(ie.__webglFramebuffer,v,v.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&V(v)}function k(v){const S=v.texture,F=i.get(v),ie=i.get(S);v.addEventListener("dispose",z),v.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const oe=v.isWebGLCubeRenderTarget===!0,ae=v.isWebGLMultipleRenderTargets===!0,Te=m(v)||a;if(oe){F.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ye]=[];for(let we=0;we<S.mipmaps.length;we++)F.__webglFramebuffer[ye][we]=t.createFramebuffer()}else F.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)F.__webglFramebuffer[ye]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const ye=v.texture;for(let we=0,Le=ye.length;we<Le;we++){const Fe=i.get(ye[we]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&v.samples>0&&j(v)===!1){const ye=ae?S:[S];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Le=ye[we];F.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[we]);const Fe=s.convert(Le.format,Le.colorSpace),me=s.convert(Le.type),Ge=E(Le.internalFormat,Fe,me,Le.colorSpace,v.isXRRenderTarget===!0),Re=ce(v);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Ge,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,F.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),v.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(F.__webglDepthRenderbuffer,v,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),re(t.TEXTURE_CUBE_MAP,S,Te);for(let ye=0;ye<6;ye++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)b(F.__webglFramebuffer[ye][we],v,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else b(F.__webglFramebuffer[ye],v,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);_(S,Te)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const ye=v.texture;for(let we=0,Le=ye.length;we<Le;we++){const Fe=ye[we],me=i.get(Fe);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),re(t.TEXTURE_2D,Fe,Te),b(F.__webglFramebuffer,v,Fe,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),_(Fe,Te)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(a?ye=v.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,ie.__webglTexture),re(ye,S,Te),a&&S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)b(F.__webglFramebuffer[we],v,S,t.COLOR_ATTACHMENT0,ye,we);else b(F.__webglFramebuffer,v,S,t.COLOR_ATTACHMENT0,ye,0);_(S,Te)&&p(ye),n.unbindTexture()}v.depthBuffer&&V(v)}function be(v){const S=m(v)||a,F=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0,oe=F.length;ie<oe;ie++){const ae=F[ie];if(_(ae,S)){const Te=v.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(ae).__webglTexture;n.bindTexture(Te,ye),p(Te),n.unbindTexture()}}}function Q(v){if(a&&v.samples>0&&j(v)===!1){const S=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],F=v.width,ie=v.height;let oe=t.COLOR_BUFFER_BIT;const ae=[],Te=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(v),we=v.isWebGLMultipleRenderTargets===!0;if(we)for(let Le=0;Le<S.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){ae.push(t.COLOR_ATTACHMENT0+Le),v.depthBuffer&&ae.push(Te);const Fe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Fe===!1&&(v.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),v.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),we&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Le]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),we){const me=i.get(S[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,F,ie,0,0,F,ie,oe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let Le=0;Le<S.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Le]);const Fe=i.get(S[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function ce(v){return Math.min(r.maxSamples,v.samples)}function j(v){const S=i.get(v);return a&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Z(v){const S=o.render.frame;d.get(v)!==S&&(d.set(v,S),v.update())}function L(v,S){const F=v.colorSpace,ie=v.format,oe=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===$h||F!==Oi&&F!==Ln&&(ot.getTransfer(F)===ut?a===!1?e.has("EXT_sRGB")===!0&&ie===Xn?(v.format=$h,v.minFilter=Rn,v.generateMipmaps=!1):S=Ty.sRGBToLinear(S):(ie!==Xn||oe!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=H,this.resetTextureUnits=fe,this.setTexture2D=q,this.setTexture2DArray=te,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=se,this.setupRenderTarget=k,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=b,this.useMultisampledRTT=j}function TC(t,e,n){const i=n.isWebGL2;function r(s,o=Ln){let a;const l=ot.getTransfer(o);if(s===_r)return t.UNSIGNED_BYTE;if(s===my)return t.UNSIGNED_SHORT_4_4_4_4;if(s===gy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ow)return t.BYTE;if(s===aw)return t.SHORT;if(s===sp)return t.UNSIGNED_SHORT;if(s===py)return t.INT;if(s===or)return t.UNSIGNED_INT;if(s===ar)return t.FLOAT;if(s===Ia)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lw)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===cw)return t.LUMINANCE;if(s===uw)return t.LUMINANCE_ALPHA;if(s===Kr)return t.DEPTH_COMPONENT;if(s===_o)return t.DEPTH_STENCIL;if(s===$h)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dw)return t.RED;if(s===vy)return t.RED_INTEGER;if(s===hw)return t.RG;if(s===_y)return t.RG_INTEGER;if(s===yy)return t.RGBA_INTEGER;if(s===id||s===rd||s===sd||s===od)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===id)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===od)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===id)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===od)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wm||s===jm||s===Xm||s===$m)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$m)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qm||s===Ym)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qm)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ym)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Km||s===Jm||s===Zm||s===Qm||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===cg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Km)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ng)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ig)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===og)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ag)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ad||s===ug||s===dg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ad)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ug)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fw||s===hg||s===fg||s===pg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ad)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class AC extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qs extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bC={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class CC extends ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,y=null;const x=n.getContextAttributes();let m=null,u=null;const _=[],p=[],E=new Me;let R=null;const A=new Pn;A.layers.enable(1),A.viewport=new kt;const T=new Pn;T.layers.enable(2),T.viewport=new kt;const z=[A,T],w=new AC;w.layers.enable(1),w.layers.enable(2);let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let O=_[re];return O===void 0&&(O=new Id,_[re]=O),O.getTargetRaySpace()},this.getControllerGrip=function(re){let O=_[re];return O===void 0&&(O=new Id,_[re]=O),O.getGripSpace()},this.getHand=function(re){let O=_[re];return O===void 0&&(O=new Id,_[re]=O),O.getHandSpace()};function X(re){const O=p.indexOf(re.inputSource);if(O===-1)return;const N=_[O];N!==void 0&&(N.update(re.inputSource,re.frame,c||o),N.dispatchEvent({type:re.type,data:re.inputSource}))}function fe(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",H);for(let re=0;re<_.length;re++){const O=p[re];O!==null&&(p[re]=null,_[re].disconnect(O))}C=null,W=null,e.setRenderTarget(m),g=null,f=null,h=null,r=null,u=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new rs(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let O=null,N=null,P=null;x.depth&&(P=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=x.stencil?_o:Kr,N=x.stencil?Yr:or);const b={colorFormat:n.RGBA8,depthFormat:P,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(b),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new rs(f.textureWidth,f.textureHeight,{format:Xn,type:_r,depthTexture:new Fy(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ne=e.properties.get(u);ne.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(re){for(let O=0;O<re.removed.length;O++){const N=re.removed[O],P=p.indexOf(N);P>=0&&(p[P]=null,_[P].disconnect(N))}for(let O=0;O<re.added.length;O++){const N=re.added[O];let P=p.indexOf(N);if(P===-1){for(let ne=0;ne<_.length;ne++)if(ne>=p.length){p.push(N),P=ne;break}else if(p[ne]===null){p[ne]=N,P=ne;break}if(P===-1)break}const b=_[P];b&&b.connect(N)}}const J=new $,q=new $;function te(re,O,N){J.setFromMatrixPosition(O.matrixWorld),q.setFromMatrixPosition(N.matrixWorld);const P=J.distanceTo(q),b=O.projectionMatrix.elements,ne=N.projectionMatrix.elements,pe=b[14]/(b[10]-1),V=b[14]/(b[10]+1),se=(b[9]+1)/b[5],k=(b[9]-1)/b[5],be=(b[8]-1)/b[0],Q=(ne[8]+1)/ne[0],ce=pe*be,j=pe*Q,Z=P/(-be+Q),L=Z*-be;O.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(L),re.translateZ(Z),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const v=pe+Z,S=V+Z,F=ce-L,ie=j+(P-L),oe=se*V/S*v,ae=k*V/S*v;re.projectionMatrix.makePerspective(F,ie,oe,ae,v,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function U(re,O){O===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(O.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;w.near=T.near=A.near=re.near,w.far=T.far=A.far=re.far,(C!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,W=w.far);const O=re.parent,N=w.cameras;U(w,O);for(let P=0;P<N.length;P++)U(N[P],O);N.length===2?te(w,A,T):w.projectionMatrix.copy(A.projectionMatrix),Y(re,w,O)};function Y(re,O,N){N===null?re.matrix.copy(O.matrixWorld):(re.matrix.copy(N.matrixWorld),re.matrix.invert(),re.matrix.multiply(O.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(O.projectionMatrix),re.projectionMatrixInverse.copy(O.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=qh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=re)};let K=null;function ge(re,O){if(d=O.getViewerPose(c||o),y=O,d!==null){const N=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let P=!1;N.length!==w.cameras.length&&(w.cameras.length=0,P=!0);for(let b=0;b<N.length;b++){const ne=N[b];let pe=null;if(g!==null)pe=g.getViewport(ne);else{const se=h.getViewSubImage(f,ne);pe=se.viewport,b===0&&(e.setRenderTargetTextures(u,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(u))}let V=z[b];V===void 0&&(V=new Pn,V.layers.enable(b),V.viewport=new kt,z[b]=V),V.matrix.fromArray(ne.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ne.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(pe.x,pe.y,pe.width,pe.height),b===0&&(w.matrix.copy(V.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),P===!0&&w.cameras.push(V)}}for(let N=0;N<_.length;N++){const P=p[N],b=_[N];P!==null&&b!==void 0&&b.update(P,O,c||o)}K&&K(re,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),y=null}const _e=new Oy;_e.setAnimationLoop(ge),this.setAnimationLoop=function(re){K=re},this.dispose=function(){}}}function RC(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ny(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,p,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,p):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,p){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=p*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Yt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,p){const E=p.program;i.uniformBlockBinding(_,E)}function c(_,p){let E=r[_.id];E===void 0&&(y(_),E=d(_),r[_.id]=E,_.addEventListener("dispose",m));const R=p.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function d(_){const p=h();_.__bindingPointIndex=p;const E=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,E),E}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const p=r[_.id],E=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let A=0,T=E.length;A<T;A++){const z=Array.isArray(E[A])?E[A]:[E[A]];for(let w=0,C=z.length;w<C;w++){const W=z[w];if(g(W,A,w,R)===!0){const X=W.__offset,fe=Array.isArray(W.value)?W.value:[W.value];let H=0;for(let J=0;J<fe.length;J++){const q=fe[J],te=x(q);typeof q=="number"||typeof q=="boolean"?(W.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,X+H,W.__data)):q.isMatrix3?(W.__data[0]=q.elements[0],W.__data[1]=q.elements[1],W.__data[2]=q.elements[2],W.__data[3]=0,W.__data[4]=q.elements[3],W.__data[5]=q.elements[4],W.__data[6]=q.elements[5],W.__data[7]=0,W.__data[8]=q.elements[6],W.__data[9]=q.elements[7],W.__data[10]=q.elements[8],W.__data[11]=0):(q.toArray(W.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,p,E,R){const A=_.value,T=p+"_"+E;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const z=R[T];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return R[T]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function y(_){const p=_.uniforms;let E=0;const R=16;for(let T=0,z=p.length;T<z;T++){const w=Array.isArray(p[T])?p[T]:[p[T]];for(let C=0,W=w.length;C<W;C++){const X=w[C],fe=Array.isArray(X.value)?X.value:[X.value];for(let H=0,J=fe.length;H<J;H++){const q=fe[H],te=x(q),U=E%R;U!==0&&R-U<te.boundary&&(E+=R-U),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=te.storage}}}const A=E%R;return A>0&&(E+=R-A),_.__size=E,_.__cache={},this}function x(_){const p={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(p.boundary=4,p.storage=4):_.isVector2?(p.boundary=8,p.storage=8):_.isVector3||_.isColor?(p.boundary=16,p.storage=12):_.isVector4?(p.boundary=16,p.storage=16):_.isMatrix3?(p.boundary=48,p.storage=48):_.isMatrix4?(p.boundary=64,p.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),p}function m(_){const p=_.target;p.removeEventListener("dispose",m);const E=o.indexOf(p.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Wy{constructor(e={}){const{canvas:n=Aw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=vr,this.toneMappingExposure=1;const p=this;let E=!1,R=0,A=0,T=null,z=-1,w=null;const C=new kt,W=new kt;let X=null;const fe=new it(0);let H=0,J=n.width,q=n.height,te=1,U=null,Y=null;const K=new kt(0,0,J,q),ge=new kt(0,0,J,q);let _e=!1;const re=new lp;let O=!1,N=!1,P=null;const b=new Ct,ne=new Me,pe=new $,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return T===null?te:1}let k=i;function be(I,ee){for(let ue=0;ue<I.length;ue++){const he=I[ue],le=n.getContext(he,ee);if(le!==null)return le}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),k===null){const ee=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ee.shift(),k=be(ee,I),k===null)throw be(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Q,ce,j,Z,L,v,S,F,ie,oe,ae,Te,ye,we,Le,Fe,me,Ge,Re,Oe,Pe,Ie,D,xe;function Ne(){Q=new zA(k),ce=new DA(k,Q,e),Q.init(ce),Ie=new TC(k,Q,ce),j=new MC(k,Q,ce),Z=new GA(k),L=new cC,v=new wC(k,Q,j,L,ce,Ie,Z),S=new OA(p),F=new BA(p),ie=new Jw(k,ce),D=new LA(k,Q,ie,ce),oe=new HA(k,ie,Z,D),ae=new $A(k,oe,ie,Z),Re=new XA(k,ce,v),Fe=new UA(L),Te=new lC(p,S,F,Q,ce,D,Fe),ye=new RC(p,L),we=new dC,Le=new vC(Q,ce),Ge=new IA(p,S,F,j,ae,f,l),me=new EC(p,ae,ce),xe=new PC(k,Z,ce,j),Oe=new NA(k,Q,Z,ce),Pe=new VA(k,Q,Z,ce),Z.programs=Te.programs,p.capabilities=ce,p.extensions=Q,p.properties=L,p.renderLists=we,p.shadowMap=me,p.state=j,p.info=Z}Ne();const Ue=new CC(p,k);this.xr=Ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const I=Q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(I){I!==void 0&&(te=I,this.setSize(J,q,!1))},this.getSize=function(I){return I.set(J,q)},this.setSize=function(I,ee,ue=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,q=ee,n.width=Math.floor(I*te),n.height=Math.floor(ee*te),ue===!0&&(n.style.width=I+"px",n.style.height=ee+"px"),this.setViewport(0,0,I,ee)},this.getDrawingBufferSize=function(I){return I.set(J*te,q*te).floor()},this.setDrawingBufferSize=function(I,ee,ue){J=I,q=ee,te=ue,n.width=Math.floor(I*ue),n.height=Math.floor(ee*ue),this.setViewport(0,0,I,ee)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(K)},this.setViewport=function(I,ee,ue,he){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,ee,ue,he),j.viewport(C.copy(K).multiplyScalar(te).floor())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,ee,ue,he){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,ee,ue,he),j.scissor(W.copy(ge).multiplyScalar(te).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(I){j.setScissorTest(_e=I)},this.setOpaqueSort=function(I){U=I},this.setTransparentSort=function(I){Y=I},this.getClearColor=function(I){return I.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(I=!0,ee=!0,ue=!0){let he=0;if(I){let le=!1;if(T!==null){const Be=T.texture.format;le=Be===yy||Be===_y||Be===vy}if(le){const Be=T.texture.type,Ve=Be===_r||Be===or||Be===sp||Be===Yr||Be===my||Be===gy,We=Ge.getClearColor(),Xe=Ge.getClearAlpha(),Je=We.r,qe=We.g,Ye=We.b;Ve?(g[0]=Je,g[1]=qe,g[2]=Ye,g[3]=Xe,k.clearBufferuiv(k.COLOR,0,g)):(y[0]=Je,y[1]=qe,y[2]=Ye,y[3]=Xe,k.clearBufferiv(k.COLOR,0,y))}else he|=k.COLOR_BUFFER_BIT}ee&&(he|=k.DEPTH_BUFFER_BIT),ue&&(he|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),we.dispose(),Le.dispose(),L.dispose(),S.dispose(),F.dispose(),ae.dispose(),D.dispose(),xe.dispose(),Te.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",nt),Ue.removeEventListener("sessionend",tt),P&&(P.dispose(),P=null),pt.stop()};function Se(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=Z.autoReset,ee=me.enabled,ue=me.autoUpdate,he=me.needsUpdate,le=me.type;Ne(),Z.autoReset=I,me.enabled=ee,me.autoUpdate=ue,me.needsUpdate=he,me.type=le}function Ee(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ce(I){const ee=I.target;ee.removeEventListener("dispose",Ce),B(ee)}function B(I){ve(I),L.remove(I)}function ve(I){const ee=L.get(I).programs;ee!==void 0&&(ee.forEach(function(ue){Te.releaseProgram(ue)}),I.isShaderMaterial&&Te.releaseShaderCache(I))}this.renderBufferDirect=function(I,ee,ue,he,le,Be){ee===null&&(ee=V);const Ve=le.isMesh&&le.matrixWorld.determinant()<0,We=ht(I,ee,ue,he,le);j.setMaterial(he,Ve);let Xe=ue.index,Je=1;if(he.wireframe===!0){if(Xe=oe.getWireframeAttribute(ue),Xe===void 0)return;Je=2}const qe=ue.drawRange,Ye=ue.attributes.position;let Et=qe.start*Je,gn=(qe.start+qe.count)*Je;Be!==null&&(Et=Math.max(Et,Be.start*Je),gn=Math.min(gn,(Be.start+Be.count)*Je)),Xe!==null?(Et=Math.max(Et,0),gn=Math.min(gn,Xe.count)):Ye!=null&&(Et=Math.max(Et,0),gn=Math.min(gn,Ye.count));const Nt=gn-Et;if(Nt<0||Nt===1/0)return;D.setup(le,he,We,ue,Xe);let fi,mt=Oe;if(Xe!==null&&(fi=ie.get(Xe),mt=Pe,mt.setIndex(fi)),le.isMesh)he.wireframe===!0?(j.setLineWidth(he.wireframeLinewidth*se()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(le.isLine){let Ze=he.linewidth;Ze===void 0&&(Ze=1),j.setLineWidth(Ze*se()),le.isLineSegments?mt.setMode(k.LINES):le.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else le.isPoints?mt.setMode(k.POINTS):le.isSprite&&mt.setMode(k.TRIANGLES);if(le.isBatchedMesh)mt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else if(le.isInstancedMesh)mt.renderInstances(Et,Nt,le.count);else if(ue.isInstancedBufferGeometry){const Ze=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Au=Math.min(ue.instanceCount,Ze);mt.renderInstances(Et,Nt,Au)}else mt.render(Et,Nt)};function ke(I,ee,ue){I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=Yt,I.needsUpdate=!0,hi(I,ee,ue),I.side=wr,I.needsUpdate=!0,hi(I,ee,ue),I.side=In):hi(I,ee,ue)}this.compile=function(I,ee,ue=null){ue===null&&(ue=I),m=Le.get(ue),m.init(),_.push(m),ue.traverseVisible(function(le){le.isLight&&le.layers.test(ee.layers)&&(m.pushLight(le),le.castShadow&&m.pushShadow(le))}),I!==ue&&I.traverseVisible(function(le){le.isLight&&le.layers.test(ee.layers)&&(m.pushLight(le),le.castShadow&&m.pushShadow(le))}),m.setupLights(p._useLegacyLights);const he=new Set;return I.traverse(function(le){const Be=le.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const We=Be[Ve];ke(We,ue,le),he.add(We)}else ke(Be,ue,le),he.add(Be)}),_.pop(),m=null,he},this.compileAsync=function(I,ee,ue=null){const he=this.compile(I,ee,ue);return new Promise(le=>{function Be(){if(he.forEach(function(Ve){L.get(Ve).currentProgram.isReady()&&he.delete(Ve)}),he.size===0){le(I);return}setTimeout(Be,10)}Q.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let He=null;function et(I){He&&He(I)}function nt(){pt.stop()}function tt(){pt.start()}const pt=new Oy;pt.setAnimationLoop(et),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(I){He=I,Ue.setAnimationLoop(I),I===null?pt.stop():pt.start()},Ue.addEventListener("sessionstart",nt),Ue.addEventListener("sessionend",tt),this.render=function(I,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(ee),ee=Ue.getCamera()),I.isScene===!0&&I.onBeforeRender(p,I,ee,T),m=Le.get(I,_.length),m.init(),_.push(m),b.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),re.setFromProjectionMatrix(b),N=this.localClippingEnabled,O=Fe.init(this.clippingPlanes,N),x=we.get(I,u.length),x.init(),u.push(x),wt(I,ee,0,p.sortObjects),x.finish(),p.sortObjects===!0&&x.sort(U,Y),this.info.render.frame++,O===!0&&Fe.beginShadows();const ue=m.state.shadowsArray;if(me.render(ue,I,ee),O===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(x,I),m.setupLights(p._useLegacyLights),ee.isArrayCamera){const he=ee.cameras;for(let le=0,Be=he.length;le<Be;le++){const Ve=he[le];Ro(x,I,Ve,Ve.viewport)}}else Ro(x,I,ee);T!==null&&(v.updateMultisampleRenderTarget(T),v.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(p,I,ee),D.resetDefaultState(),z=-1,w=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function wt(I,ee,ue,he){if(I.visible===!1)return;if(I.layers.test(ee.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ee);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||re.intersectsSprite(I)){he&&pe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(b);const Ve=ae.update(I),We=I.material;We.visible&&x.push(I,Ve,We,ue,pe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||re.intersectsObject(I))){const Ve=ae.update(I),We=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),pe.copy(I.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),pe.copy(Ve.boundingSphere.center)),pe.applyMatrix4(I.matrixWorld).applyMatrix4(b)),Array.isArray(We)){const Xe=Ve.groups;for(let Je=0,qe=Xe.length;Je<qe;Je++){const Ye=Xe[Je],Et=We[Ye.materialIndex];Et&&Et.visible&&x.push(I,Ve,Et,ue,pe.z,Ye)}}else We.visible&&x.push(I,Ve,We,ue,pe.z,null)}}const Be=I.children;for(let Ve=0,We=Be.length;Ve<We;Ve++)wt(Be[Ve],ee,ue,he)}function Ro(I,ee,ue,he){const le=I.opaque,Be=I.transmissive,Ve=I.transparent;m.setupLightsView(ue),O===!0&&Fe.setGlobalState(p.clippingPlanes,ue),Be.length>0&&Za(le,Be,ee,ue),he&&j.viewport(C.copy(he)),le.length>0&&Po(le,ee,ue),Be.length>0&&Po(Be,ee,ue),Ve.length>0&&Po(Ve,ee,ue),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Za(I,ee,ue,he){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const Be=ce.isWebGL2;P===null&&(P=new rs(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Ia:_r,minFilter:Pa,samples:Be?4:0})),p.getDrawingBufferSize(ne),Be?P.setSize(ne.x,ne.y):P.setSize(Yh(ne.x),Yh(ne.y));const Ve=p.getRenderTarget();p.setRenderTarget(P),p.getClearColor(fe),H=p.getClearAlpha(),H<1&&p.setClearColor(16777215,.5),p.clear();const We=p.toneMapping;p.toneMapping=vr,Po(I,ue,he),v.updateMultisampleRenderTarget(P),v.updateRenderTargetMipmap(P);let Xe=!1;for(let Je=0,qe=ee.length;Je<qe;Je++){const Ye=ee[Je],Et=Ye.object,gn=Ye.geometry,Nt=Ye.material,fi=Ye.group;if(Nt.side===In&&Et.layers.test(he.layers)){const mt=Nt.side;Nt.side=Yt,Nt.needsUpdate=!0,hs(Et,ue,he,gn,Nt,fi),Nt.side=mt,Nt.needsUpdate=!0,Xe=!0}}Xe===!0&&(v.updateMultisampleRenderTarget(P),v.updateRenderTargetMipmap(P)),p.setRenderTarget(Ve),p.setClearColor(fe,H),p.toneMapping=We}function Po(I,ee,ue){const he=ee.isScene===!0?ee.overrideMaterial:null;for(let le=0,Be=I.length;le<Be;le++){const Ve=I[le],We=Ve.object,Xe=Ve.geometry,Je=he===null?Ve.material:he,qe=Ve.group;We.layers.test(ue.layers)&&hs(We,ee,ue,Xe,Je,qe)}}function hs(I,ee,ue,he,le,Be){I.onBeforeRender(p,ee,ue,he,le,Be),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),le.onBeforeRender(p,ee,ue,he,I,Be),le.transparent===!0&&le.side===In&&le.forceSinglePass===!1?(le.side=Yt,le.needsUpdate=!0,p.renderBufferDirect(ue,ee,he,le,I,Be),le.side=wr,le.needsUpdate=!0,p.renderBufferDirect(ue,ee,he,le,I,Be),le.side=In):p.renderBufferDirect(ue,ee,he,le,I,Be),I.onAfterRender(p,ee,ue,he,le,Be)}function hi(I,ee,ue){ee.isScene!==!0&&(ee=V);const he=L.get(I),le=m.state.lights,Be=m.state.shadowsArray,Ve=le.state.version,We=Te.getParameters(I,le.state,Be,ee,ue),Xe=Te.getProgramCacheKey(We);let Je=he.programs;he.environment=I.isMeshStandardMaterial?ee.environment:null,he.fog=ee.fog,he.envMap=(I.isMeshStandardMaterial?F:S).get(I.envMap||he.environment),Je===void 0&&(I.addEventListener("dispose",Ce),Je=new Map,he.programs=Je);let qe=Je.get(Xe);if(qe!==void 0){if(he.currentProgram===qe&&he.lightsStateVersion===Ve)return el(I,We),qe}else We.uniforms=Te.getUniforms(I),I.onBuild(ue,We,p),I.onBeforeCompile(We,p),qe=Te.acquireProgram(We,Xe),Je.set(Xe,qe),he.uniforms=We.uniforms;const Ye=he.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ye.clippingPlanes=Fe.uniform),el(I,We),he.needsLights=Rr(I),he.lightsStateVersion=Ve,he.needsLights&&(Ye.ambientLightColor.value=le.state.ambient,Ye.lightProbe.value=le.state.probe,Ye.directionalLights.value=le.state.directional,Ye.directionalLightShadows.value=le.state.directionalShadow,Ye.spotLights.value=le.state.spot,Ye.spotLightShadows.value=le.state.spotShadow,Ye.rectAreaLights.value=le.state.rectArea,Ye.ltc_1.value=le.state.rectAreaLTC1,Ye.ltc_2.value=le.state.rectAreaLTC2,Ye.pointLights.value=le.state.point,Ye.pointLightShadows.value=le.state.pointShadow,Ye.hemisphereLights.value=le.state.hemi,Ye.directionalShadowMap.value=le.state.directionalShadowMap,Ye.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ye.spotShadowMap.value=le.state.spotShadowMap,Ye.spotLightMatrix.value=le.state.spotLightMatrix,Ye.spotLightMap.value=le.state.spotLightMap,Ye.pointShadowMap.value=le.state.pointShadowMap,Ye.pointShadowMatrix.value=le.state.pointShadowMatrix),he.currentProgram=qe,he.uniformsList=null,qe}function Qa(I){if(I.uniformsList===null){const ee=I.currentProgram.getUniforms();I.uniformsList=oc.seqWithValue(ee.seq,I.uniforms)}return I.uniformsList}function el(I,ee){const ue=L.get(I);ue.outputColorSpace=ee.outputColorSpace,ue.batching=ee.batching,ue.instancing=ee.instancing,ue.instancingColor=ee.instancingColor,ue.skinning=ee.skinning,ue.morphTargets=ee.morphTargets,ue.morphNormals=ee.morphNormals,ue.morphColors=ee.morphColors,ue.morphTargetsCount=ee.morphTargetsCount,ue.numClippingPlanes=ee.numClippingPlanes,ue.numIntersection=ee.numClipIntersection,ue.vertexAlphas=ee.vertexAlphas,ue.vertexTangents=ee.vertexTangents,ue.toneMapping=ee.toneMapping}function ht(I,ee,ue,he,le){ee.isScene!==!0&&(ee=V),v.resetTextureUnits();const Be=ee.fog,Ve=he.isMeshStandardMaterial?ee.environment:null,We=T===null?p.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Oi,Xe=(he.isMeshStandardMaterial?F:S).get(he.envMap||Ve),Je=he.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,qe=!!ue.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Ye=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,gn=!!ue.morphAttributes.color;let Nt=vr;he.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=p.toneMapping);const fi=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,mt=fi!==void 0?fi.length:0,Ze=L.get(he),Au=m.state.lights;if(O===!0&&(N===!0||I!==w)){const Tn=I===w&&he.id===z;Fe.setState(he,I,Tn)}let xt=!1;he.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Au.state.version||Ze.outputColorSpace!==We||le.isBatchedMesh&&Ze.batching===!1||!le.isBatchedMesh&&Ze.batching===!0||le.isInstancedMesh&&Ze.instancing===!1||!le.isInstancedMesh&&Ze.instancing===!0||le.isSkinnedMesh&&Ze.skinning===!1||!le.isSkinnedMesh&&Ze.skinning===!0||le.isInstancedMesh&&Ze.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ze.instancingColor===!1&&le.instanceColor!==null||Ze.envMap!==Xe||he.fog===!0&&Ze.fog!==Be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Fe.numPlanes||Ze.numIntersection!==Fe.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==qe||Ze.morphTargets!==Ye||Ze.morphNormals!==Et||Ze.morphColors!==gn||Ze.toneMapping!==Nt||ce.isWebGL2===!0&&Ze.morphTargetsCount!==mt)&&(xt=!0):(xt=!0,Ze.__version=he.version);let Pr=Ze.currentProgram;xt===!0&&(Pr=hi(he,ee,le));let bp=!1,Io=!1,bu=!1;const Gt=Pr.getUniforms(),Ir=Ze.uniforms;if(j.useProgram(Pr.program)&&(bp=!0,Io=!0,bu=!0),he.id!==z&&(z=he.id,Io=!0),bp||w!==I){Gt.setValue(k,"projectionMatrix",I.projectionMatrix),Gt.setValue(k,"viewMatrix",I.matrixWorldInverse);const Tn=Gt.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,pe.setFromMatrixPosition(I.matrixWorld)),ce.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",I.isOrthographicCamera===!0),w!==I&&(w=I,Io=!0,bu=!0)}if(le.isSkinnedMesh){Gt.setOptional(k,le,"bindMatrix"),Gt.setOptional(k,le,"bindMatrixInverse");const Tn=le.skeleton;Tn&&(ce.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Gt.setValue(k,"boneTexture",Tn.boneTexture,v)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}le.isBatchedMesh&&(Gt.setOptional(k,le,"batchingTexture"),Gt.setValue(k,"batchingTexture",le._matricesTexture,v));const Cu=ue.morphAttributes;if((Cu.position!==void 0||Cu.normal!==void 0||Cu.color!==void 0&&ce.isWebGL2===!0)&&Re.update(le,ue,Pr),(Io||Ze.receiveShadow!==le.receiveShadow)&&(Ze.receiveShadow=le.receiveShadow,Gt.setValue(k,"receiveShadow",le.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Ir.envMap.value=Xe,Ir.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Io&&(Gt.setValue(k,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&Cr(Ir,bu),Be&&he.fog===!0&&ye.refreshFogUniforms(Ir,Be),ye.refreshMaterialUniforms(Ir,he,te,q,P),oc.upload(k,Qa(Ze),Ir,v)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(oc.upload(k,Qa(Ze),Ir,v),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Gt.setValue(k,"center",le.center),Gt.setValue(k,"modelViewMatrix",le.modelViewMatrix),Gt.setValue(k,"normalMatrix",le.normalMatrix),Gt.setValue(k,"modelMatrix",le.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Tn=he.uniformsGroups;for(let Ru=0,Kx=Tn.length;Ru<Kx;Ru++)if(ce.isWebGL2){const Cp=Tn[Ru];xe.update(Cp,Pr),xe.bind(Cp,Pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pr}function Cr(I,ee){I.ambientLightColor.needsUpdate=ee,I.lightProbe.needsUpdate=ee,I.directionalLights.needsUpdate=ee,I.directionalLightShadows.needsUpdate=ee,I.pointLights.needsUpdate=ee,I.pointLightShadows.needsUpdate=ee,I.spotLights.needsUpdate=ee,I.spotLightShadows.needsUpdate=ee,I.rectAreaLights.needsUpdate=ee,I.hemisphereLights.needsUpdate=ee}function Rr(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,ee,ue){L.get(I.texture).__webglTexture=ee,L.get(I.depthTexture).__webglTexture=ue;const he=L.get(I);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=ue===void 0,he.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,ee){const ue=L.get(I);ue.__webglFramebuffer=ee,ue.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(I,ee=0,ue=0){T=I,R=ee,A=ue;let he=!0,le=null,Be=!1,Ve=!1;if(I){const Xe=L.get(I);Xe.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(k.FRAMEBUFFER,null),he=!1):Xe.__webglFramebuffer===void 0?v.setupRenderTarget(I):Xe.__hasExternalTextures&&v.rebindTextures(I,L.get(I.texture).__webglTexture,L.get(I.depthTexture).__webglTexture);const Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ve=!0);const qe=L.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(qe[ee])?le=qe[ee][ue]:le=qe[ee],Be=!0):ce.isWebGL2&&I.samples>0&&v.useMultisampledRTT(I)===!1?le=L.get(I).__webglMultisampledFramebuffer:Array.isArray(qe)?le=qe[ue]:le=qe,C.copy(I.viewport),W.copy(I.scissor),X=I.scissorTest}else C.copy(K).multiplyScalar(te).floor(),W.copy(ge).multiplyScalar(te).floor(),X=_e;if(j.bindFramebuffer(k.FRAMEBUFFER,le)&&ce.drawBuffers&&he&&j.drawBuffers(I,le),j.viewport(C),j.scissor(W),j.setScissorTest(X),Be){const Xe=L.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Xe.__webglTexture,ue)}else if(Ve){const Xe=L.get(I.texture),Je=ee||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.__webglTexture,ue||0,Je)}z=-1},this.readRenderTargetPixels=function(I,ee,ue,he,le,Be,Ve){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=L.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){j.bindFramebuffer(k.FRAMEBUFFER,We);try{const Xe=I.texture,Je=Xe.format,qe=Xe.type;if(Je!==Xn&&Ie.convert(Je)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=qe===Ia&&(Q.has("EXT_color_buffer_half_float")||ce.isWebGL2&&Q.has("EXT_color_buffer_float"));if(qe!==_r&&Ie.convert(qe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ar&&(ce.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=I.width-he&&ue>=0&&ue<=I.height-le&&k.readPixels(ee,ue,he,le,Ie.convert(Je),Ie.convert(qe),Be)}finally{const Xe=T!==null?L.get(T).__webglFramebuffer:null;j.bindFramebuffer(k.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(I,ee,ue=0){const he=Math.pow(2,-ue),le=Math.floor(ee.image.width*he),Be=Math.floor(ee.image.height*he);v.setTexture2D(ee,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,I.x,I.y,le,Be),j.unbindTexture()},this.copyTextureToTexture=function(I,ee,ue,he=0){const le=ee.image.width,Be=ee.image.height,Ve=Ie.convert(ue.format),We=Ie.convert(ue.type);v.setTexture2D(ue,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ue.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ue.unpackAlignment),ee.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,he,I.x,I.y,le,Be,Ve,We,ee.image.data):ee.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,he,I.x,I.y,ee.mipmaps[0].width,ee.mipmaps[0].height,Ve,ee.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,he,I.x,I.y,Ve,We,ee.image),he===0&&ue.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(I,ee,ue,he,le=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=I.max.x-I.min.x+1,Ve=I.max.y-I.min.y+1,We=I.max.z-I.min.z+1,Xe=Ie.convert(he.format),Je=Ie.convert(he.type);let qe;if(he.isData3DTexture)v.setTexture3D(he,0),qe=k.TEXTURE_3D;else if(he.isDataArrayTexture||he.isCompressedArrayTexture)v.setTexture2DArray(he,0),qe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,he.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,he.unpackAlignment);const Ye=k.getParameter(k.UNPACK_ROW_LENGTH),Et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),gn=k.getParameter(k.UNPACK_SKIP_PIXELS),Nt=k.getParameter(k.UNPACK_SKIP_ROWS),fi=k.getParameter(k.UNPACK_SKIP_IMAGES),mt=ue.isCompressedTexture?ue.mipmaps[le]:ue.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,I.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,I.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,I.min.z),ue.isDataTexture||ue.isData3DTexture?k.texSubImage3D(qe,le,ee.x,ee.y,ee.z,Be,Ve,We,Xe,Je,mt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(qe,le,ee.x,ee.y,ee.z,Be,Ve,We,Xe,mt.data)):k.texSubImage3D(qe,le,ee.x,ee.y,ee.z,Be,Ve,We,Xe,Je,mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,gn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fi),le===0&&he.generateMipmaps&&k.generateMipmap(qe),j.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?v.setTextureCube(I,0):I.isData3DTexture?v.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?v.setTexture2DArray(I,0):v.setTexture2D(I,0),j.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,j.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===op?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===_u?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Jr:Sy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?Ot:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class IC extends Wy{}IC.prototype.isWebGL1Renderer=!0;class LC extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ls extends mn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],f=i[r+1]-d,g=(o-d)/f;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Me:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new $,r=[],s=[],o=[],a=new $,l=new Ct;for(let g=0;g<=e;g++){const y=g/e;r[g]=this.getTangentAt(y,new $)}s[0]=new $,o[0]=new $;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(zt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(zt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class up extends ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new Me,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*d-g*h+this.aX,c=f*h+g*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class NC extends up{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let f=(o-s)/c-(a-s)/(c+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,g*=d,r(o,a,f,g)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const zl=new $,Ld=new dp,Nd=new dp,Dd=new dp;class DC extends ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new $){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(zl.subVectors(r[0],r[1]).add(r[0]),c=zl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(zl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(h),g),x=Math.pow(h.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(d),g);x<1e-4&&(x=1),y<1e-4&&(y=x),m<1e-4&&(m=x),Ld.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,y,x,m),Nd.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,y,x,m),Dd.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,y,x,m)}else this.curveType==="catmullrom"&&(Ld.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Nd.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Dd.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return i.set(Ld.calc(l),Nd.calc(l),Dd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new $().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function iv(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function UC(t,e){const n=1-t;return n*n*e}function OC(t,e){return 2*(1-t)*t*e}function kC(t,e){return t*t*e}function ca(t,e,n,i){return UC(t,e)+OC(t,n)+kC(t,i)}function FC(t,e){const n=1-t;return n*n*n*e}function BC(t,e){const n=1-t;return 3*n*n*t*e}function zC(t,e){return 3*(1-t)*t*t*e}function HC(t,e){return t*t*t*e}function ua(t,e,n,i,r){return FC(t,e)+BC(t,n)+zC(t,i)+HC(t,r)}class jy extends ui{constructor(e=new Me,n=new Me,i=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class VC extends ui{constructor(e=new $,n=new $,i=new $,r=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new $){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y),ua(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xy extends ui{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GC extends ui{constructor(e=new $,n=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new $){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new $){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $y extends ui{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ca(e,r.x,s.x,o.x),ca(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WC extends ui{constructor(e=new $,n=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new $){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ca(e,r.x,s.x,o.x),ca(e,r.y,s.y,o.y),ca(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qy extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(iv(a,l.x,c.x,d.x,h.x),iv(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Me().fromArray(r))}return this}}var rv=Object.freeze({__proto__:null,ArcCurve:NC,CatmullRomCurve3:DC,CubicBezierCurve:jy,CubicBezierCurve3:VC,EllipseCurve:up,LineCurve:Xy,LineCurve3:GC,QuadraticBezierCurve:$y,QuadraticBezierCurve3:WC,SplineCurve:qy});class jC extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rv[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new rv[r.type]().fromJSON(r))}return this}}class ro extends jC{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Xy(this.currentPoint.clone(),new Me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new $y(this.currentPoint.clone(),new Me(e,n),new Me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new jy(this.currentPoint.clone(),new Me(e,n),new Me(i,r),new Me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new qy(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new up(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ac extends ro{constructor(e){super(e),this.uuid=To(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new ro().fromJSON(r))}return this}}const XC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Yy(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,h,f,g;if(i&&(s=JC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let y=n;y<r;y+=n)h=t[y],f=t[y+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>d&&(d=f);g=Math.max(c-a,d-l),g=g!==0?32767/g:0}return Na(s,o,n,a,l,g,0),o}};function Yy(t,e,n,i,r){let s,o;if(r===lR(t,e,n,i)>0)for(s=e;s<n;s+=i)o=sv(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=sv(s,t[s],t[s+1],o);return o&&Su(o,o.next)&&(Ua(o),o=o.next),o}function os(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Su(n,n.next)||vt(n.prev,n,n.next)===0)){if(Ua(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Na(t,e,n,i,r,s,o){if(!t)return;!o&&s&&nR(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?qC(t,i,r,s):$C(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ua(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=YC(os(t),e,n),Na(t,e,n,i,r,s,2)):o===2&&KC(t,e,n,i,r,s):Na(os(t),e,n,i,r,s,1);break}}}function $C(t){const e=t.prev,n=t,i=t.next;if(vt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,g=a>l?a>c?a:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=d&&y.x<=f&&y.y>=h&&y.y<=g&&Ys(r,a,s,l,o,c,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function qC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(vt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,f=o.y,g=a<l?a<c?a:c:l<c?l:c,y=d<h?d<f?d:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=d>h?d>f?d:f:h>f?h:f,u=Jh(g,y,e,n,i),_=Jh(x,m,e,n,i);let p=t.prevZ,E=t.nextZ;for(;p&&p.z>=u&&E&&E.z<=_;){if(p.x>=g&&p.x<=x&&p.y>=y&&p.y<=m&&p!==r&&p!==o&&Ys(a,d,l,h,c,f,p.x,p.y)&&vt(p.prev,p,p.next)>=0||(p=p.prevZ,E.x>=g&&E.x<=x&&E.y>=y&&E.y<=m&&E!==r&&E!==o&&Ys(a,d,l,h,c,f,E.x,E.y)&&vt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;p&&p.z>=u;){if(p.x>=g&&p.x<=x&&p.y>=y&&p.y<=m&&p!==r&&p!==o&&Ys(a,d,l,h,c,f,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;E&&E.z<=_;){if(E.x>=g&&E.x<=x&&E.y>=y&&E.y<=m&&E!==r&&E!==o&&Ys(a,d,l,h,c,f,E.x,E.y)&&vt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function YC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Su(r,s)&&Ky(r,i,i.next,s)&&Da(r,s)&&Da(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ua(i),Ua(i.next),i=t=s),i=i.next}while(i!==t);return os(i)}function KC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sR(o,a)){let l=Jy(o,a);o=os(o,o.next),l=os(l,l.next),Na(o,e,n,i,r,s,0),Na(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function JC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Yy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(rR(c));for(r.sort(ZC),s=0;s<r.length;s++)n=QC(r[s],n);return n}function ZC(t,e){return t.x-e.x}function QC(t,e){const n=eR(t,e);if(!n)return e;const i=Jy(n,t);return os(i,i.next),os(n,n.next)}function eR(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let d=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ys(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Da(n,t)&&(h<d||h===d&&(n.x>r.x||n.x===r.x&&tR(r,n)))&&(r=n,d=h)),n=n.next;while(n!==a);return r}function tR(t,e){return vt(t.prev,t,e.prev)<0&&vt(e.next,t,t.next)<0}function nR(t,e,n,i){let r=t;do r.z===0&&(r.z=Jh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,iR(r)}function iR(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Jh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function rR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ys(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function sR(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!oR(t,e)&&(Da(t,e)&&Da(e,t)&&aR(t,e)&&(vt(t.prev,t,e.prev)||vt(t,e.prev,e))||Su(t,e)&&vt(t.prev,t,t.next)>0&&vt(e.prev,e,e.next)>0)}function vt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Su(t,e){return t.x===e.x&&t.y===e.y}function Ky(t,e,n,i){const r=Vl(vt(t,e,n)),s=Vl(vt(t,e,i)),o=Vl(vt(n,i,t)),a=Vl(vt(n,i,e));return!!(r!==s&&o!==a||r===0&&Hl(t,n,e)||s===0&&Hl(t,i,e)||o===0&&Hl(n,t,i)||a===0&&Hl(n,e,i))}function Hl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Vl(t){return t>0?1:t<0?-1:0}function oR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Ky(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Da(t,e){return vt(t.prev,t,t.next)<0?vt(t,e,t.next)>=0&&vt(t,t.prev,e)>=0:vt(t,e,t.prev)<0||vt(t,t.next,e)<0}function aR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Jy(t,e){const n=new Zh(t.i,t.x,t.y),i=new Zh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function sv(t,e,n,i){const r=new Zh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ua(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Zh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lR(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Eu{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Eu.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];ov(e),av(i,e);let o=e.length;n.forEach(ov);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,av(i,n[l]);const a=XC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ov(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function av(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class da extends ci{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new $,f=new $,g=[],y=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],p=u/i;let E=0;u===0&&o===0?E=.5/n:u===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const A=R/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+p*a),h.y=e*Math.cos(o+p*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+p*a),y.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(A+E,1-p),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const p=d[u][_+1],E=d[u][_],R=d[u+1][_],A=d[u+1][_+1];(u!==0||o>0)&&g.push(p,E,A),(u!==i-1||l<Math.PI)&&g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new rn(y,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lv extends ja{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ey,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const cv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class cR{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const g=c[h],y=c[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return y}return null}}}const uR=new cR;class hp{constructor(e){this.manager=e!==void 0?e:uR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hp.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class dR extends Error{constructor(e,n){super(e),this.response=n}}class hR extends hp{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cv.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(yi[e]!==void 0){yi[e].push({onLoad:n,onProgress:i,onError:r});return}yi[e]=[],yi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=yi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=f?parseInt(f):0,y=g!==0;let x=0;const m=new ReadableStream({start(u){_();function _(){h.read().then(({done:p,value:E})=>{if(p)u.close();else{x+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:y,loaded:x,total:g});for(let A=0,T=d.length;A<T;A++){const z=d[A];z.onProgress&&z.onProgress(R)}u.enqueue(E),_()}})}}});return new Response(m)}else throw new dR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(f);return c.arrayBuffer().then(y=>g.decode(y))}}}).then(c=>{cv.add(e,c);const d=yi[e];delete yi[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{const d=yi[e];if(d===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zy extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Ud=new Ct,uv=new $,dv=new $;class fR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;uv.setFromMatrixPosition(e.matrixWorld),n.position.copy(uv),dv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dv),n.updateMatrixWorld(),Ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pR extends fR{constructor(){super(new ky(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hv extends Zy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new pR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mR extends Zy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class fv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pv=new Me;class gR{constructor(e=new Me(1/0,1/0),n=new Me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pv.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Or{constructor(){this.type="ShapePath",this.color=new it,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new ro,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(u){const _=[];for(let p=0,E=u.length;p<E;p++){const R=u[p],A=new ac;A.curves=R.curves,_.push(A)}return _}function i(u,_){const p=_.length;let E=!1;for(let R=p-1,A=0;A<p;R=A++){let T=_[R],z=_[A],w=z.x-T.x,C=z.y-T.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(T=_[A],w=-w,z=_[R],C=-C),u.y<T.y||u.y>z.y)continue;if(u.y===T.y){if(u.x===T.x)return!0}else{const W=C*(u.x-T.x)-w*(u.y-T.y);if(W===0)return!0;if(W<0)continue;E=!E}}else{if(u.y!==T.y)continue;if(z.x<=u.x&&u.x<=T.x||T.x<=u.x&&u.x<=z.x)return!0}}return E}const r=Eu.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ac,l.curves=a.curves,c.push(l),c;let d=!r(s[0].getPoints());d=e?!d:d;const h=[],f=[];let g=[],y=0,x;f[y]=void 0,g[y]=[];for(let u=0,_=s.length;u<_;u++)a=s[u],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!d&&f[y]&&y++,f[y]={s:new ac,p:x},f[y].s.curves=a.curves,d&&y++,g[y]=[]):g[y].push({h:a,p:x[0]});if(!f[0])return n(s);if(f.length>1){let u=!1,_=0;for(let p=0,E=f.length;p<E;p++)h[p]=[];for(let p=0,E=f.length;p<E;p++){const R=g[p];for(let A=0;A<R.length;A++){const T=R[A];let z=!0;for(let w=0;w<f.length;w++)i(T.p,f[w].p)&&(p!==w&&_++,z?(z=!1,h[w].push(T)):u=!0);z&&h[p].push(T)}}_>0&&u===!1&&(g=h)}let m;for(let u=0,_=f.length;u<_;u++){l=f[u].s,c.push(l),m=g[u];for(let p=0,E=m.length;p<E;p++)l.holes.push(m[p].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);const mv={type:"change"},Od={type:"start"},gv={type:"end"},Gl=new Cy,vv=new Zi,vR=Math.cos(70*Tw.DEG2RAD);class _R extends ds{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Le),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mv),i.update(),s=r.NONE},this.update=function(){const D=new $,xe=new ss().setFromUnitVectors(e.up,new $(0,1,0)),Ne=xe.clone().invert(),Ue=new $,Se=new ss,G=new $,Ee=2*Math.PI;return function(B=null){const ve=i.object.position;D.copy(ve).sub(i.target),D.applyQuaternion(xe),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&X(C(B)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ke=i.minAzimuthAngle,He=i.maxAzimuthAngle;isFinite(ke)&&isFinite(He)&&(ke<-Math.PI?ke+=Ee:ke>Math.PI&&(ke-=Ee),He<-Math.PI?He+=Ee:He>Math.PI&&(He-=Ee),ke<=He?a.theta=Math.max(ke,Math.min(He,a.theta)):a.theta=a.theta>(ke+He)/2?Math.max(ke,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Ne),ve.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let et=!1;if(i.zoomToCursor&&A){let nt=null;if(i.object.isPerspectiveCamera){const tt=D.length();nt=K(tt*c);const pt=tt-nt;i.object.position.addScaledVector(E,pt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const tt=new $(R.x,R.y,0);tt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),et=!0;const pt=new $(R.x,R.y,0);pt.unproject(i.object),i.object.position.sub(pt).add(tt),i.object.updateMatrixWorld(),nt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(nt).add(i.object.position):(Gl.origin.copy(i.object.position),Gl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Gl.direction))<vR?e.lookAt(i.target):(vv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Gl.intersectPlane(vv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),et=!0);return c=1,A=!1,et||Ue.distanceToSquared(i.object.position)>o||8*(1-Se.dot(i.object.quaternion))>o||G.distanceToSquared(i.target)>0?(i.dispatchEvent(mv),Ue.copy(i.object.position),Se.copy(i.object.quaternion),G.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ge),i.domElement.removeEventListener("pointerdown",v),i.domElement.removeEventListener("pointercancel",F),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",F),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new fv,l=new fv;let c=1;const d=new $,h=new Me,f=new Me,g=new Me,y=new Me,x=new Me,m=new Me,u=new Me,_=new Me,p=new Me,E=new $,R=new Me;let A=!1;const T=[],z={};let w=!1;function C(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function W(D){const xe=Math.abs(D*.01);return Math.pow(.95,i.zoomSpeed*xe)}function X(D){l.theta-=D}function fe(D){l.phi-=D}const H=function(){const D=new $;return function(Ne,Ue){D.setFromMatrixColumn(Ue,0),D.multiplyScalar(-Ne),d.add(D)}}(),J=function(){const D=new $;return function(Ne,Ue){i.screenSpacePanning===!0?D.setFromMatrixColumn(Ue,1):(D.setFromMatrixColumn(Ue,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Ne),d.add(D)}}(),q=function(){const D=new $;return function(Ne,Ue){const Se=i.domElement;if(i.object.isPerspectiveCamera){const G=i.object.position;D.copy(G).sub(i.target);let Ee=D.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),H(2*Ne*Ee/Se.clientHeight,i.object.matrix),J(2*Ue*Ee/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(Ne*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),J(Ue*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(D,xe){if(!i.zoomToCursor)return;A=!0;const Ne=i.domElement.getBoundingClientRect(),Ue=D-Ne.left,Se=xe-Ne.top,G=Ne.width,Ee=Ne.height;R.x=Ue/G*2-1,R.y=-(Se/Ee)*2+1,E.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function ge(D){h.set(D.clientX,D.clientY)}function _e(D){Y(D.clientX,D.clientX),u.set(D.clientX,D.clientY)}function re(D){y.set(D.clientX,D.clientY)}function O(D){f.set(D.clientX,D.clientY),g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const xe=i.domElement;X(2*Math.PI*g.x/xe.clientHeight),fe(2*Math.PI*g.y/xe.clientHeight),h.copy(f),i.update()}function N(D){_.set(D.clientX,D.clientY),p.subVectors(_,u),p.y>0?te(W(p.y)):p.y<0&&U(W(p.y)),u.copy(_),i.update()}function P(D){x.set(D.clientX,D.clientY),m.subVectors(x,y).multiplyScalar(i.panSpeed),q(m.x,m.y),y.copy(x),i.update()}function b(D){Y(D.clientX,D.clientY),D.deltaY<0?U(W(D.deltaY)):D.deltaY>0&&te(W(D.deltaY)),i.update()}function ne(D){let xe=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?fe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?fe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),xe=!0;break}xe&&(D.preventDefault(),i.update())}function pe(D){if(T.length===1)h.set(D.pageX,D.pageY);else{const xe=Ie(D),Ne=.5*(D.pageX+xe.x),Ue=.5*(D.pageY+xe.y);h.set(Ne,Ue)}}function V(D){if(T.length===1)y.set(D.pageX,D.pageY);else{const xe=Ie(D),Ne=.5*(D.pageX+xe.x),Ue=.5*(D.pageY+xe.y);y.set(Ne,Ue)}}function se(D){const xe=Ie(D),Ne=D.pageX-xe.x,Ue=D.pageY-xe.y,Se=Math.sqrt(Ne*Ne+Ue*Ue);u.set(0,Se)}function k(D){i.enableZoom&&se(D),i.enablePan&&V(D)}function be(D){i.enableZoom&&se(D),i.enableRotate&&pe(D)}function Q(D){if(T.length==1)f.set(D.pageX,D.pageY);else{const Ne=Ie(D),Ue=.5*(D.pageX+Ne.x),Se=.5*(D.pageY+Ne.y);f.set(Ue,Se)}g.subVectors(f,h).multiplyScalar(i.rotateSpeed);const xe=i.domElement;X(2*Math.PI*g.x/xe.clientHeight),fe(2*Math.PI*g.y/xe.clientHeight),h.copy(f)}function ce(D){if(T.length===1)x.set(D.pageX,D.pageY);else{const xe=Ie(D),Ne=.5*(D.pageX+xe.x),Ue=.5*(D.pageY+xe.y);x.set(Ne,Ue)}m.subVectors(x,y).multiplyScalar(i.panSpeed),q(m.x,m.y),y.copy(x)}function j(D){const xe=Ie(D),Ne=D.pageX-xe.x,Ue=D.pageY-xe.y,Se=Math.sqrt(Ne*Ne+Ue*Ue);_.set(0,Se),p.set(0,Math.pow(_.y/u.y,i.zoomSpeed)),te(p.y),u.copy(_);const G=(D.pageX+xe.x)*.5,Ee=(D.pageY+xe.y)*.5;Y(G,Ee)}function Z(D){i.enableZoom&&j(D),i.enablePan&&ce(D)}function L(D){i.enableZoom&&j(D),i.enableRotate&&Q(D)}function v(D){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",F)),Re(D),D.pointerType==="touch"?Fe(D):ie(D))}function S(D){i.enabled!==!1&&(D.pointerType==="touch"?me(D):oe(D))}function F(D){Oe(D),T.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",F)),i.dispatchEvent(gv),s=r.NONE}function ie(D){let xe;switch(D.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case ps.DOLLY:if(i.enableZoom===!1)return;_e(D),s=r.DOLLY;break;case ps.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;re(D),s=r.PAN}else{if(i.enableRotate===!1)return;ge(D),s=r.ROTATE}break;case ps.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;ge(D),s=r.ROTATE}else{if(i.enablePan===!1)return;re(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Od)}function oe(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;O(D);break;case r.DOLLY:if(i.enableZoom===!1)return;N(D);break;case r.PAN:if(i.enablePan===!1)return;P(D);break}}function ae(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Od),b(Te(D)),i.dispatchEvent(gv))}function Te(D){const xe=D.deltaMode,Ne={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(xe){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return D.ctrlKey&&!w&&(Ne.deltaY*=10),Ne}function ye(D){D.key==="Control"&&(w=!0,document.addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(D){D.key==="Control"&&(w=!1,document.removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Le(D){i.enabled===!1||i.enablePan===!1||ne(D)}function Fe(D){switch(Pe(D),T.length){case 1:switch(i.touches.ONE){case ms.ROTATE:if(i.enableRotate===!1)return;pe(D),s=r.TOUCH_ROTATE;break;case ms.PAN:if(i.enablePan===!1)return;V(D),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ms.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(D),s=r.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(D),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Od)}function me(D){switch(Pe(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Q(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Z(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(D),i.update();break;default:s=r.NONE}}function Ge(D){i.enabled!==!1&&D.preventDefault()}function Re(D){T.push(D.pointerId)}function Oe(D){delete z[D.pointerId];for(let xe=0;xe<T.length;xe++)if(T[xe]==D.pointerId){T.splice(xe,1);return}}function Pe(D){let xe=z[D.pointerId];xe===void 0&&(xe=new Me,z[D.pointerId]=xe),xe.set(D.pageX,D.pageY)}function Ie(D){const xe=D.pointerId===T[0]?T[1]:T[0];return z[xe]}i.domElement.addEventListener("contextmenu",Ge),i.domElement.addEventListener("pointerdown",v),i.domElement.addEventListener("pointercancel",F),i.domElement.addEventListener("wheel",ae,{passive:!1}),document.addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}const yR=Ot;class Vc extends hp{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new hR(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(O,N){if(O.nodeType!==1)return;const P=E(O);let b=!1,ne=null;switch(O.nodeName){case"svg":N=y(O,N);break;case"style":s(O);break;case"g":N=y(O,N);break;case"path":N=y(O,N),O.hasAttribute("d")&&(ne=r(O));break;case"rect":N=y(O,N),ne=l(O);break;case"polygon":N=y(O,N),ne=c(O);break;case"polyline":N=y(O,N),ne=d(O);break;case"circle":N=y(O,N),ne=h(O);break;case"ellipse":N=y(O,N),ne=f(O);break;case"line":N=y(O,N),ne=g(O);break;case"defs":b=!0;break;case"use":N=y(O,N);const se=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),k=O.viewportElement.getElementById(se);k?i(k,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+se);break}ne&&(N.fill!==void 0&&N.fill!=="none"&&ne.color.setStyle(N.fill,yR),A(ne,ge),X.push(ne),ne.userData={node:O,style:N});const pe=O.childNodes;for(let V=0;V<pe.length;V++){const se=pe[V];b&&se.nodeName!=="style"&&se.nodeName!=="defs"||i(se,N)}P&&(H.pop(),H.length>0?ge.copy(H[H.length-1]):ge.identity())}function r(O){const N=new Or,P=new Me,b=new Me,ne=new Me;let pe=!0,V=!1;const se=O.getAttribute("d");if(se===""||se==="none")return null;const k=se.match(/[a-df-z][^a-df-z]*/ig);for(let be=0,Q=k.length;be<Q;be++){const ce=k[be],j=ce.charAt(0),Z=ce.slice(1).trim();pe===!0&&(V=!0,pe=!1);let L;switch(j){case"M":L=m(Z);for(let v=0,S=L.length;v<S;v+=2)P.x=L[v+0],P.y=L[v+1],b.x=P.x,b.y=P.y,v===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),v===0&&ne.copy(P);break;case"H":L=m(Z);for(let v=0,S=L.length;v<S;v++)P.x=L[v],b.x=P.x,b.y=P.y,N.lineTo(P.x,P.y),v===0&&V===!0&&ne.copy(P);break;case"V":L=m(Z);for(let v=0,S=L.length;v<S;v++)P.y=L[v],b.x=P.x,b.y=P.y,N.lineTo(P.x,P.y),v===0&&V===!0&&ne.copy(P);break;case"L":L=m(Z);for(let v=0,S=L.length;v<S;v+=2)P.x=L[v+0],P.y=L[v+1],b.x=P.x,b.y=P.y,N.lineTo(P.x,P.y),v===0&&V===!0&&ne.copy(P);break;case"C":L=m(Z);for(let v=0,S=L.length;v<S;v+=6)N.bezierCurveTo(L[v+0],L[v+1],L[v+2],L[v+3],L[v+4],L[v+5]),b.x=L[v+2],b.y=L[v+3],P.x=L[v+4],P.y=L[v+5],v===0&&V===!0&&ne.copy(P);break;case"S":L=m(Z);for(let v=0,S=L.length;v<S;v+=4)N.bezierCurveTo(x(P.x,b.x),x(P.y,b.y),L[v+0],L[v+1],L[v+2],L[v+3]),b.x=L[v+0],b.y=L[v+1],P.x=L[v+2],P.y=L[v+3],v===0&&V===!0&&ne.copy(P);break;case"Q":L=m(Z);for(let v=0,S=L.length;v<S;v+=4)N.quadraticCurveTo(L[v+0],L[v+1],L[v+2],L[v+3]),b.x=L[v+0],b.y=L[v+1],P.x=L[v+2],P.y=L[v+3],v===0&&V===!0&&ne.copy(P);break;case"T":L=m(Z);for(let v=0,S=L.length;v<S;v+=2){const F=x(P.x,b.x),ie=x(P.y,b.y);N.quadraticCurveTo(F,ie,L[v+0],L[v+1]),b.x=F,b.y=ie,P.x=L[v+0],P.y=L[v+1],v===0&&V===!0&&ne.copy(P)}break;case"A":L=m(Z,[3,4],7);for(let v=0,S=L.length;v<S;v+=7){if(L[v+5]==P.x&&L[v+6]==P.y)continue;const F=P.clone();P.x=L[v+5],P.y=L[v+6],b.x=P.x,b.y=P.y,o(N,L[v],L[v+1],L[v+2],L[v+3],L[v+4],F,P),v===0&&V===!0&&ne.copy(P)}break;case"m":L=m(Z);for(let v=0,S=L.length;v<S;v+=2)P.x+=L[v+0],P.y+=L[v+1],b.x=P.x,b.y=P.y,v===0?N.moveTo(P.x,P.y):N.lineTo(P.x,P.y),v===0&&ne.copy(P);break;case"h":L=m(Z);for(let v=0,S=L.length;v<S;v++)P.x+=L[v],b.x=P.x,b.y=P.y,N.lineTo(P.x,P.y),v===0&&V===!0&&ne.copy(P);break;case"v":L=m(Z);for(let v=0,S=L.length;v<S;v++)P.y+=L[v],b.x=P.x,b.y=P.y,N.lineTo(P.x,P.y),v===0&&V===!0&&ne.copy(P);break;case"l":L=m(Z);for(let v=0,S=L.length;v<S;v+=2)P.x+=L[v+0],P.y+=L[v+1],b.x=P.x,b.y=P.y,N.lineTo(P.x,P.y),v===0&&V===!0&&ne.copy(P);break;case"c":L=m(Z);for(let v=0,S=L.length;v<S;v+=6)N.bezierCurveTo(P.x+L[v+0],P.y+L[v+1],P.x+L[v+2],P.y+L[v+3],P.x+L[v+4],P.y+L[v+5]),b.x=P.x+L[v+2],b.y=P.y+L[v+3],P.x+=L[v+4],P.y+=L[v+5],v===0&&V===!0&&ne.copy(P);break;case"s":L=m(Z);for(let v=0,S=L.length;v<S;v+=4)N.bezierCurveTo(x(P.x,b.x),x(P.y,b.y),P.x+L[v+0],P.y+L[v+1],P.x+L[v+2],P.y+L[v+3]),b.x=P.x+L[v+0],b.y=P.y+L[v+1],P.x+=L[v+2],P.y+=L[v+3],v===0&&V===!0&&ne.copy(P);break;case"q":L=m(Z);for(let v=0,S=L.length;v<S;v+=4)N.quadraticCurveTo(P.x+L[v+0],P.y+L[v+1],P.x+L[v+2],P.y+L[v+3]),b.x=P.x+L[v+0],b.y=P.y+L[v+1],P.x+=L[v+2],P.y+=L[v+3],v===0&&V===!0&&ne.copy(P);break;case"t":L=m(Z);for(let v=0,S=L.length;v<S;v+=2){const F=x(P.x,b.x),ie=x(P.y,b.y);N.quadraticCurveTo(F,ie,P.x+L[v+0],P.y+L[v+1]),b.x=F,b.y=ie,P.x=P.x+L[v+0],P.y=P.y+L[v+1],v===0&&V===!0&&ne.copy(P)}break;case"a":L=m(Z,[3,4],7);for(let v=0,S=L.length;v<S;v+=7){if(L[v+5]==0&&L[v+6]==0)continue;const F=P.clone();P.x+=L[v+5],P.y+=L[v+6],b.x=P.x,b.y=P.y,o(N,L[v],L[v+1],L[v+2],L[v+3],L[v+4],F,P),v===0&&V===!0&&ne.copy(P)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(P.copy(ne),N.currentPath.currentPoint.copy(P),pe=!0);break;default:console.warn(ce)}V=!1}return N}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){const P=O.sheet.cssRules[N];if(P.type!==1)continue;const b=P.selectorText.split(/,/gm).filter(Boolean).map(ne=>ne.trim());for(let ne=0;ne<b.length;ne++){const pe=Object.fromEntries(Object.entries(P.style).filter(([,V])=>V!==""));fe[b[ne]]=Object.assign(fe[b[ne]]||{},pe)}}}function o(O,N,P,b,ne,pe,V,se){if(N==0||P==0){O.lineTo(se.x,se.y);return}b=b*Math.PI/180,N=Math.abs(N),P=Math.abs(P);const k=(V.x-se.x)/2,be=(V.y-se.y)/2,Q=Math.cos(b)*k+Math.sin(b)*be,ce=-Math.sin(b)*k+Math.cos(b)*be;let j=N*N,Z=P*P;const L=Q*Q,v=ce*ce,S=L/j+v/Z;if(S>1){const me=Math.sqrt(S);N=me*N,P=me*P,j=N*N,Z=P*P}const F=j*v+Z*L,ie=(j*Z-F)/F;let oe=Math.sqrt(Math.max(0,ie));ne===pe&&(oe=-oe);const ae=oe*N*ce/P,Te=-oe*P*Q/N,ye=Math.cos(b)*ae-Math.sin(b)*Te+(V.x+se.x)/2,we=Math.sin(b)*ae+Math.cos(b)*Te+(V.y+se.y)/2,Le=a(1,0,(Q-ae)/N,(ce-Te)/P),Fe=a((Q-ae)/N,(ce-Te)/P,(-Q-ae)/N,(-ce-Te)/P)%(Math.PI*2);O.currentPath.absellipse(ye,we,N,P,Le,Le+Fe,pe===0,b)}function a(O,N,P,b){const ne=O*P+N*b,pe=Math.sqrt(O*O+N*N)*Math.sqrt(P*P+b*b);let V=Math.acos(Math.max(-1,Math.min(1,ne/pe)));return O*b-N*P<0&&(V=-V),V}function l(O){const N=p(O.getAttribute("x")||0),P=p(O.getAttribute("y")||0),b=p(O.getAttribute("rx")||O.getAttribute("ry")||0),ne=p(O.getAttribute("ry")||O.getAttribute("rx")||0),pe=p(O.getAttribute("width")),V=p(O.getAttribute("height")),se=1-.551915024494,k=new Or;return k.moveTo(N+b,P),k.lineTo(N+pe-b,P),(b!==0||ne!==0)&&k.bezierCurveTo(N+pe-b*se,P,N+pe,P+ne*se,N+pe,P+ne),k.lineTo(N+pe,P+V-ne),(b!==0||ne!==0)&&k.bezierCurveTo(N+pe,P+V-ne*se,N+pe-b*se,P+V,N+pe-b,P+V),k.lineTo(N+b,P+V),(b!==0||ne!==0)&&k.bezierCurveTo(N+b*se,P+V,N,P+V-ne*se,N,P+V-ne),k.lineTo(N,P+ne),(b!==0||ne!==0)&&k.bezierCurveTo(N,P+ne*se,N+b*se,P,N+b,P),k}function c(O){function N(pe,V,se){const k=p(V),be=p(se);ne===0?b.moveTo(k,be):b.lineTo(k,be),ne++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Or;let ne=0;return O.getAttribute("points").replace(P,N),b.currentPath.autoClose=!0,b}function d(O){function N(pe,V,se){const k=p(V),be=p(se);ne===0?b.moveTo(k,be):b.lineTo(k,be),ne++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new Or;let ne=0;return O.getAttribute("points").replace(P,N),b.currentPath.autoClose=!1,b}function h(O){const N=p(O.getAttribute("cx")||0),P=p(O.getAttribute("cy")||0),b=p(O.getAttribute("r")||0),ne=new ro;ne.absarc(N,P,b,0,Math.PI*2);const pe=new Or;return pe.subPaths.push(ne),pe}function f(O){const N=p(O.getAttribute("cx")||0),P=p(O.getAttribute("cy")||0),b=p(O.getAttribute("rx")||0),ne=p(O.getAttribute("ry")||0),pe=new ro;pe.absellipse(N,P,b,ne,0,Math.PI*2);const V=new Or;return V.subPaths.push(pe),V}function g(O){const N=p(O.getAttribute("x1")||0),P=p(O.getAttribute("y1")||0),b=p(O.getAttribute("x2")||0),ne=p(O.getAttribute("y2")||0),pe=new Or;return pe.moveTo(N,P),pe.lineTo(b,ne),pe.currentPath.autoClose=!1,pe}function y(O,N){N=Object.assign({},N);let P={};if(O.hasAttribute("class")){const V=O.getAttribute("class").split(/\s/).filter(Boolean).map(se=>se.trim());for(let se=0;se<V.length;se++)P=Object.assign(P,fe["."+V[se]])}O.hasAttribute("id")&&(P=Object.assign(P,fe["#"+O.getAttribute("id")]));function b(V,se,k){k===void 0&&(k=function(Q){return Q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Q}),O.hasAttribute(V)&&(N[se]=k(O.getAttribute(V))),P[V]&&(N[se]=k(P[V])),O.style&&O.style[V]!==""&&(N[se]=k(O.style[V]))}function ne(V){return Math.max(0,Math.min(1,p(V)))}function pe(V){return Math.max(0,p(V))}return b("fill","fill"),b("fill-opacity","fillOpacity",ne),b("fill-rule","fillRule"),b("opacity","opacity",ne),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",ne),b("stroke-width","strokeWidth",pe),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",pe),b("visibility","visibility"),N}function x(O,N){return O-(N-O)}function m(O,N,P){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const b={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ne=0,pe=1,V=2,se=3;let k=ne,be=!0,Q="",ce="";const j=[];function Z(F,ie,oe){const ae=new SyntaxError('Unexpected character "'+F+'" at index '+ie+".");throw ae.partial=oe,ae}function L(){Q!==""&&(ce===""?j.push(Number(Q)):j.push(Number(Q)*Math.pow(10,Number(ce)))),Q="",ce=""}let v;const S=O.length;for(let F=0;F<S;F++){if(v=O[F],Array.isArray(N)&&N.includes(j.length%P)&&b.FLAGS.test(v)){k=pe,Q=v,L();continue}if(k===ne){if(b.WHITESPACE.test(v))continue;if(b.DIGIT.test(v)||b.SIGN.test(v)){k=pe,Q=v;continue}if(b.POINT.test(v)){k=V,Q=v;continue}b.COMMA.test(v)&&(be&&Z(v,F,j),be=!0)}if(k===pe){if(b.DIGIT.test(v)){Q+=v;continue}if(b.POINT.test(v)){Q+=v,k=V;continue}if(b.EXP.test(v)){k=se;continue}b.SIGN.test(v)&&Q.length===1&&b.SIGN.test(Q[0])&&Z(v,F,j)}if(k===V){if(b.DIGIT.test(v)){Q+=v;continue}if(b.EXP.test(v)){k=se;continue}b.POINT.test(v)&&Q[Q.length-1]==="."&&Z(v,F,j)}if(k===se){if(b.DIGIT.test(v)){ce+=v;continue}if(b.SIGN.test(v)){if(ce===""){ce+=v;continue}ce.length===1&&b.SIGN.test(ce)&&Z(v,F,j)}}b.WHITESPACE.test(v)?(L(),k=ne,be=!1):b.COMMA.test(v)?(L(),k=ne,be=!0):b.SIGN.test(v)?(L(),k=pe,Q=v):b.POINT.test(v)?(L(),k=V,Q=v):Z(v,F,j)}return L(),j}const u=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function p(O){let N="px";if(typeof O=="string"||O instanceof String)for(let b=0,ne=u.length;b<ne;b++){const pe=u[b];if(O.endsWith(pe)){N=pe,O=O.substring(0,O.length-pe.length);break}}let P;return N==="px"&&n.defaultUnit!=="px"?P=_.in[n.defaultUnit]/n.defaultDPI:(P=_[N][n.defaultUnit],P<0&&(P=_[N].in*n.defaultDPI)),P*parseFloat(O)}function E(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const N=R(O);return H.length>0&&N.premultiply(H[H.length-1]),ge.copy(N),H.push(N),N}function R(O){const N=new $e,P=J;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const b=p(O.getAttribute("x")),ne=p(O.getAttribute("y"));N.translate(b,ne)}if(O.hasAttribute("transform")){const b=O.getAttribute("transform").split(")");for(let ne=b.length-1;ne>=0;ne--){const pe=b[ne].trim();if(pe==="")continue;const V=pe.indexOf("("),se=pe.length;if(V>0&&V<se){const k=pe.slice(0,V),be=m(pe.slice(V+1));switch(P.identity(),k){case"translate":if(be.length>=1){const Q=be[0];let ce=0;be.length>=2&&(ce=be[1]),P.translate(Q,ce)}break;case"rotate":if(be.length>=1){let Q=0,ce=0,j=0;Q=be[0]*Math.PI/180,be.length>=3&&(ce=be[1],j=be[2]),q.makeTranslation(-ce,-j),te.makeRotation(Q),U.multiplyMatrices(te,q),q.makeTranslation(ce,j),P.multiplyMatrices(q,U)}break;case"scale":if(be.length>=1){const Q=be[0];let ce=Q;be.length>=2&&(ce=be[1]),P.scale(Q,ce)}break;case"skewX":be.length===1&&P.set(1,Math.tan(be[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":be.length===1&&P.set(1,0,0,Math.tan(be[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":be.length===6&&P.set(be[0],be[2],be[4],be[1],be[3],be[5],0,0,1);break}}N.premultiply(P)}}return N}function A(O,N){function P(V){K.set(V.x,V.y,1).applyMatrix3(N),V.set(K.x,K.y)}function b(V){const se=V.xRadius,k=V.yRadius,be=Math.cos(V.aRotation),Q=Math.sin(V.aRotation),ce=new $(se*be,se*Q,0),j=new $(-k*Q,k*be,0),Z=ce.applyMatrix3(N),L=j.applyMatrix3(N),v=J.set(Z.x,L.x,0,Z.y,L.y,0,0,0,1),S=q.copy(v).invert(),oe=te.copy(S).transpose().multiply(S).elements,ae=W(oe[0],oe[1],oe[4]),Te=Math.sqrt(ae.rt1),ye=Math.sqrt(ae.rt2);if(V.xRadius=1/Te,V.yRadius=1/ye,V.aRotation=Math.atan2(ae.sn,ae.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Le=q.set(Te,0,0,0,ye,0,0,0,1),Fe=te.set(ae.cs,ae.sn,0,-ae.sn,ae.cs,0,0,0,1),me=Le.multiply(Fe).multiply(v),Ge=Re=>{const{x:Oe,y:Pe}=new $(Math.cos(Re),Math.sin(Re),0).applyMatrix3(me);return Math.atan2(Pe,Oe)};V.aStartAngle=Ge(V.aStartAngle),V.aEndAngle=Ge(V.aEndAngle),T(N)&&(V.aClockwise=!V.aClockwise)}}function ne(V){const se=w(N),k=C(N);V.xRadius*=se,V.yRadius*=k;const be=se>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);V.aRotation+=be,T(N)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const pe=O.subPaths;for(let V=0,se=pe.length;V<se;V++){const be=pe[V].curves;for(let Q=0;Q<be.length;Q++){const ce=be[Q];ce.isLineCurve?(P(ce.v1),P(ce.v2)):ce.isCubicBezierCurve?(P(ce.v0),P(ce.v1),P(ce.v2),P(ce.v3)):ce.isQuadraticBezierCurve?(P(ce.v0),P(ce.v1),P(ce.v2)):ce.isEllipseCurve&&(Y.set(ce.aX,ce.aY),P(Y),ce.aX=Y.x,ce.aY=Y.y,z(N)?b(ce):ne(ce))}}}function T(O){const N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function z(O){const N=O.elements,P=N[0]*N[3]+N[1]*N[4];if(P===0)return!1;const b=w(O),ne=C(O);return Math.abs(P/(b*ne))>Number.EPSILON}function w(O){const N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function C(O){const N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function W(O,N,P){let b,ne,pe,V,se;const k=O+P,be=O-P,Q=Math.sqrt(be*be+4*N*N);return k>0?(b=.5*(k+Q),se=1/b,ne=O*se*P-N*se*N):k<0?ne=.5*(k-Q):(b=.5*Q,ne=-.5*Q),be>0?pe=be+Q:pe=be-Q,Math.abs(pe)>2*Math.abs(N)?(se=-2*N/pe,V=1/Math.sqrt(1+se*se),pe=se*V):Math.abs(N)===0?(pe=1,V=0):(se=-.5*pe/N,pe=1/Math.sqrt(1+se*se),V=se*pe),be>0&&(se=pe,pe=-V,V=se),{rt1:b,rt2:ne,cs:pe,sn:V}}const X=[],fe={},H=[],J=new $e,q=new $e,te=new $e,U=new $e,Y=new Me,K=new $,ge=new $e,_e=new DOMParser().parseFromString(e,"image/svg+xml");return i(_e.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:X,xml:_e.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(x,m,u,_){const p=x.x,E=m.x,R=u.x,A=_.x,T=x.y,z=m.y,w=u.y,C=_.y,W=(A-R)*(T-w)-(C-w)*(p-R),X=(E-p)*(T-w)-(z-T)*(p-R),fe=(C-w)*(E-p)-(A-R)*(z-T),H=W/fe,J=X/fe;if(fe===0&&W!==0||H<=0||H>=1||J<0||J>1)return null;if(W===0&&fe===0){for(let q=0;q<2;q++)if(o(q===0?u:_,x,m),r.loc==i.ORIGIN){const te=q===0?u:_;return{x:te.x,y:te.y,t:r.t}}else if(r.loc==i.BETWEEN){const te=+(p+r.t*(E-p)).toPrecision(10),U=+(T+r.t*(z-T)).toPrecision(10);return{x:te,y:U,t:r.t}}return null}else{for(let U=0;U<2;U++)if(o(U===0?u:_,x,m),r.loc==i.ORIGIN){const Y=U===0?u:_;return{x:Y.x,y:Y.y,t:r.t}}const q=+(p+H*(E-p)).toPrecision(10),te=+(T+H*(z-T)).toPrecision(10);return{x:q,y:te,t:H}}}function o(x,m,u){const _=u.x-m.x,p=u.y-m.y,E=x.x-m.x,R=x.y-m.y,A=_*R-E*p;if(x.x===m.x&&x.y===m.y){r.loc=i.ORIGIN,r.t=0;return}if(x.x===u.x&&x.y===u.y){r.loc=i.DESTINATION,r.t=1;return}if(A<-Number.EPSILON){r.loc=i.LEFT;return}if(A>Number.EPSILON){r.loc=i.RIGHT;return}if(_*E<0||p*R<0){r.loc=i.BEHIND;return}if(Math.sqrt(_*_+p*p)<Math.sqrt(E*E+R*R)){r.loc=i.BEYOND;return}let T;_!==0?T=E/_:T=R/p,r.loc=i.BETWEEN,r.t=T}function a(x,m){const u=[],_=[];for(let p=1;p<x.length;p++){const E=x[p-1],R=x[p];for(let A=1;A<m.length;A++){const T=m[A-1],z=m[A],w=s(E,R,T,z);w!==null&&u.find(C=>C.t<=w.t+Number.EPSILON&&C.t>=w.t-Number.EPSILON)===void 0&&(u.push(w),_.push(new Me(w.x,w.y)))}}return _}function l(x,m,u){const _=new Me;m.getCenter(_);const p=[];return u.forEach(E=>{E.boundingBox.containsPoint(_)&&a(x,E.points).forEach(A=>{p.push({identifier:E.identifier,isCW:E.isCW,point:A})})}),p.sort((E,R)=>E.point.x-R.point.x),p}function c(x,m,u,_,p){(p==null||p==="")&&(p="nonzero");const E=new Me;x.boundingBox.getCenter(E);const R=[new Me(u,E.y),new Me(_,E.y)],A=l(R,x.boundingBox,m);A.sort((X,fe)=>X.point.x-fe.point.x);const T=[],z=[];A.forEach(X=>{X.identifier===x.identifier?T.push(X):z.push(X)});const w=T[0].point.x,C=[];let W=0;for(;W<z.length&&z[W].point.x<w;)C.length>0&&C[C.length-1]===z[W].identifier?C.pop():C.push(z[W].identifier),W++;if(C.push(x.identifier),p==="evenodd"){const X=C.length%2===0,fe=C[C.length-2];return{identifier:x.identifier,isHole:X,for:fe}}else if(p==="nonzero"){let X=!0,fe=null,H=null;for(let J=0;J<C.length;J++){const q=C[J];X?(H=m[q].isCW,X=!1,fe=q):H!==m[q].isCW&&(H=m[q].isCW,X=!0)}return{identifier:x.identifier,isHole:X,for:fe}}else console.warn('fill-rule: "'+p+'" is currently not implemented.')}let d=999999999,h=-999999999,f=e.subPaths.map(x=>{const m=x.getPoints();let u=-999999999,_=999999999,p=-999999999,E=999999999;for(let R=0;R<m.length;R++){const A=m[R];A.y>u&&(u=A.y),A.y<_&&(_=A.y),A.x>p&&(p=A.x),A.x<E&&(E=A.x)}return h<=p&&(h=p+1),d>=E&&(d=E-1),{curves:x.curves,points:m,isCW:Eu.isClockWise(m),identifier:-1,boundingBox:new gR(new Me(E,_),new Me(p,u))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;const g=f.map(x=>c(x,f,d,h,e.userData?e.userData.style.fillRule:void 0)),y=[];return f.forEach(x=>{if(!g[x.identifier].isHole){const u=new ac;u.curves=x.curves,g.filter(p=>p.isHole&&p.for===x.identifier).forEach(p=>{const E=f[p.identifier],R=new ro;R.curves=E.curves,u.holes.push(R)}),y.push(u)}}),y}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Vc.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new ci;return l.setAttribute("position",new rn(s,3)),l.setAttribute("normal",new rn(o,3)),l.setAttribute("uv",new rn(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const c=new Me,d=new Me,h=new Me,f=new Me,g=new Me,y=new Me,x=new Me,m=new Me,u=new Me,_=new Me,p=new Me,E=new Me,R=new Me,A=new Me,T=new Me,z=new Me,w=new Me;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=be(e);const C=e.length;if(C<2)return 0;const W=e[0].equals(e[C-1]);let X,fe=e[0],H;const J=n.strokeWidth/2,q=1/(C-1);let te=0,U,Y,K,ge,_e=!1,re=0,O=l*3,N=l*2;P(e[0],e[1],c).multiplyScalar(J),m.copy(e[0]).sub(c),u.copy(e[0]).add(c),_.copy(m),p.copy(u);for(let Q=1;Q<C;Q++){X=e[Q],Q===C-1?W?H=e[1]:H=void 0:H=e[Q+1];const ce=c;if(P(fe,X,ce),h.copy(ce).multiplyScalar(J),E.copy(X).sub(h),R.copy(X).add(h),U=te+q,Y=!1,H!==void 0){P(X,H,d),h.copy(d).multiplyScalar(J),A.copy(X).sub(h),T.copy(X).add(h),K=!0,h.subVectors(H,fe),ce.dot(h)<0&&(K=!1),Q===1&&(_e=K),h.subVectors(H,X),h.normalize();const j=Math.abs(ce.dot(h));if(j>Number.EPSILON){const Z=J/j;h.multiplyScalar(-Z),f.subVectors(X,fe),g.copy(f).setLength(Z).add(h),z.copy(g).negate();const L=g.length(),v=f.length();f.divideScalar(v),y.subVectors(H,X);const S=y.length();switch(y.divideScalar(S),f.dot(z)<v&&y.dot(z)<S&&(Y=!0),w.copy(g).add(X),z.add(X),ge=!1,Y?K?(T.copy(z),R.copy(z)):(A.copy(z),E.copy(z)):pe(),n.strokeLineJoin){case"bevel":V(K,Y,U);break;case"round":se(K,Y),K?ne(X,E,A,U,0):ne(X,T,R,U,1);break;case"miter":case"miter-clip":default:const F=J*n.strokeMiterLimit/L;if(F<1)if(n.strokeLineJoin!=="miter-clip"){V(K,Y,U);break}else se(K,Y),K?(y.subVectors(w,E).multiplyScalar(F).add(E),x.subVectors(w,A).multiplyScalar(F).add(A),b(E,U,0),b(y,U,0),b(X,U,.5),b(X,U,.5),b(y,U,0),b(x,U,0),b(X,U,.5),b(x,U,0),b(A,U,0)):(y.subVectors(w,R).multiplyScalar(F).add(R),x.subVectors(w,T).multiplyScalar(F).add(T),b(R,U,1),b(y,U,1),b(X,U,.5),b(X,U,.5),b(y,U,1),b(x,U,1),b(X,U,.5),b(x,U,1),b(T,U,1));else Y?(K?(b(u,te,1),b(m,te,0),b(w,U,0),b(u,te,1),b(w,U,0),b(z,U,1)):(b(u,te,1),b(m,te,0),b(w,U,1),b(m,te,0),b(z,U,0),b(w,U,1)),K?A.copy(w):T.copy(w)):K?(b(E,U,0),b(w,U,0),b(X,U,.5),b(X,U,.5),b(w,U,0),b(A,U,0)):(b(R,U,1),b(w,U,1),b(X,U,.5),b(X,U,.5),b(w,U,1),b(T,U,1)),ge=!0;break}}else pe()}else pe();!W&&Q===C-1&&k(e[0],_,p,K,!0,te),te=U,fe=X,m.copy(A),u.copy(T)}if(!W)k(X,E,R,K,!1,U);else if(Y&&s){let Q=w,ce=z;_e!==K&&(Q=z,ce=w),K?(ge||_e)&&(ce.toArray(s,0*3),ce.toArray(s,3*3),ge&&Q.toArray(s,1*3)):(ge||!_e)&&(ce.toArray(s,1*3),ce.toArray(s,3*3),ge&&Q.toArray(s,0*3))}return re;function P(Q,ce,j){return j.subVectors(ce,Q),j.set(-j.y,j.x).normalize()}function b(Q,ce,j){s&&(s[O]=Q.x,s[O+1]=Q.y,s[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[N]=ce,a[N+1]=j,N+=2)),re+=3}function ne(Q,ce,j,Z,L){c.copy(ce).sub(Q).normalize(),d.copy(j).sub(Q).normalize();let v=Math.PI;const S=c.dot(d);Math.abs(S)<1&&(v=Math.abs(Math.acos(S))),v/=i,h.copy(ce);for(let F=0,ie=i-1;F<ie;F++)f.copy(h).rotateAround(Q,v),b(h,Z,L),b(f,Z,L),b(Q,Z,.5),h.copy(f);b(f,Z,L),b(j,Z,L),b(Q,Z,.5)}function pe(){b(u,te,1),b(m,te,0),b(E,U,0),b(u,te,1),b(E,U,1),b(R,U,0)}function V(Q,ce,j){ce?Q?(b(u,te,1),b(m,te,0),b(E,U,0),b(u,te,1),b(E,U,0),b(z,U,1),b(E,j,0),b(A,j,0),b(z,j,.5)):(b(u,te,1),b(m,te,0),b(R,U,1),b(m,te,0),b(z,U,0),b(R,U,1),b(R,j,1),b(z,j,0),b(T,j,1)):Q?(b(E,j,0),b(A,j,0),b(X,j,.5)):(b(R,j,1),b(T,j,0),b(X,j,.5))}function se(Q,ce){ce&&(Q?(b(u,te,1),b(m,te,0),b(E,U,0),b(u,te,1),b(E,U,0),b(z,U,1),b(E,te,0),b(X,U,.5),b(z,U,1),b(X,U,.5),b(A,te,0),b(z,U,1)):(b(u,te,1),b(m,te,0),b(R,U,1),b(m,te,0),b(z,U,0),b(R,U,1),b(R,te,1),b(z,U,0),b(X,U,.5),b(X,U,.5),b(z,U,0),b(T,te,1)))}function k(Q,ce,j,Z,L,v){switch(n.strokeLineCap){case"round":L?ne(Q,j,ce,v,.5):ne(Q,ce,j,v,.5);break;case"square":if(L)c.subVectors(ce,Q),d.set(c.y,-c.x),h.addVectors(c,d).add(Q),f.subVectors(d,c).add(Q),Z?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(j,Q),d.set(c.y,-c.x),h.addVectors(c,d).add(Q),f.subVectors(d,c).add(Q);const S=s.length;Z?(h.toArray(s,S-1*3),f.toArray(s,S-2*3),f.toArray(s,S-4*3)):(f.toArray(s,S-2*3),h.toArray(s,S-1*3),f.toArray(s,S-4*3))}break}}function be(Q){let ce=!1;for(let Z=1,L=Q.length-1;Z<L;Z++)if(Q[Z].distanceTo(Q[Z+1])<r){ce=!0;break}if(!ce)return Q;const j=[];j.push(Q[0]);for(let Z=1,L=Q.length-1;Z<L;Z++)Q[Z].distanceTo(Q[Z+1])>=r&&j.push(Q[Z]);return j.push(Q[Q.length-1]),j}}}const Wl=100,kd=3,jo=3.5,_v=.3,yv=8,xR=1500,Ns={water:{r:17,g:22,b:41},land:{r:54,g:63,b:84}},Zt="#9333ea";function SR({cards:t,selectedCards:e,autoRotate:n,onMarkerClick:i,onMarkerVisibilityChange:r,onInteraction:s,focusCardId:o,onFocusLost:a,visibleCardIds:l}){const c=de.useRef(null),d=de.useRef(null),h=de.useRef(null),f=de.useRef(null),g=de.useRef(null),y=de.useRef(null),x=de.useRef(null),m=de.useRef([]),u=de.useRef(null),_=de.useRef(0),p=de.useRef({}),E=de.useRef({}),R=de.useRef({});de.useRef({});const A=de.useRef(null),T=de.useRef(e),z=de.useRef(r),w=de.useRef(s),C=de.useRef(!1),W=de.useRef(o),[X,fe]=de.useState(!1),H=de.useRef(null),J=de.useRef(null),q=de.useRef(null),te=de.useRef(l),U=de.useRef({});de.useRef(new $),de.useRef(new $);const Y=de.useRef(new $),K=de.useRef(new $);de.useRef(new Me),de.useEffect(()=>{T.current=e},[e]),de.useEffect(()=>{W.current=o},[o]),de.useEffect(()=>{z.current=r},[r]),de.useEffect(()=>{w.current=s},[s]),de.useEffect(()=>{te.current=l},[l]);const ge=de.useCallback(()=>{const Z=document.createElement("canvas");Z.width=4096,Z.height=4096/2;const L=Z.getContext("2d");L.fillStyle="#000003",L.fillRect(0,0,Z.width,Z.height);for(let v=0;v<2500;v++){const S=Math.random()*Z.width,F=Math.random()*Z.height,ie=Math.random()*1.2+.3,oe=Math.random();let ae,Te,ye;const we=Math.random();we<.7?ae=Te=ye=180+Math.random()*50:we<.85?(ae=160+Math.random()*40,Te=180+Math.random()*40,ye=220):(ae=220,Te=210+Math.random()*20,ye=160+Math.random()*40),L.beginPath(),L.arc(S,F,ie,0,Math.PI*2),L.fillStyle=`rgba(${ae}, ${Te}, ${ye}, ${(.2+oe*.4)*.6})`,L.fill()}return new Ls(Z)},[]),_e=de.useCallback(j=>{const L=document.createElement("canvas");L.width=2048,L.height=2048/2;const v=L.getContext("2d",{willReadFrequently:!0});v.drawImage(j,0,0,L.width,L.height);const F=v.getImageData(0,0,L.width,L.height).data,ie=document.createElement("canvas");ie.width=2048,ie.height=2048/2;const oe=ie.getContext("2d"),ae=oe.createImageData(2048,2048/2),Te=ae.data,ye=document.createElement("canvas");ye.width=2048,ye.height=2048/2;const we=ye.getContext("2d"),Le=we.createImageData(2048,2048/2),Fe=Le.data;for(let Re=0;Re<F.length;Re+=4){const Pe=F[Re]>100;Te[Re]=Te[Re+1]=Te[Re+2]=Pe?0:255,Te[Re+3]=255,Pe?(Fe[Re]=Ns.water.r,Fe[Re+1]=Ns.water.g,Fe[Re+2]=Ns.water.b):(Fe[Re]=Ns.land.r,Fe[Re+1]=Ns.land.g,Fe[Re+2]=Ns.land.b),Fe[Re+3]=255}oe.putImageData(ae,0,0),we.putImageData(Le,0,0);const me=document.createElement("canvas");me.width=2048,me.height=2048/2;const Ge=me.getContext("2d");return Ge.filter="blur(1px)",Ge.drawImage(ie,0,0),{colorTexture:new Ls(ye),displacementTexture:new Ls(me)}},[]),re=de.useCallback((j=Zt)=>{const Z=document.createElement("canvas");Z.width=128,Z.height=128;const L=Z.getContext("2d");L.fillStyle=j,L.beginPath();for(let v=0;v<10;v++){const S=v%2===0?60:25,F=v*Math.PI/5-Math.PI/2,ie=64+Math.cos(F)*S,oe=64+Math.sin(F)*S;v===0?L.moveTo(ie,oe):L.lineTo(ie,oe)}return L.closePath(),L.fill(),new Ls(Z)},[]),O=de.useCallback((j=Zt)=>new Promise(Z=>{if(j===Zt){const L=new Image;L.onload=()=>{const S=document.createElement("canvas");S.width=128,S.height=128,S.getContext("2d").drawImage(L,0,0,128,128),Z(new Ls(S))},L.onerror=()=>{Z(re(j))};const v="/anking-globe/";L.src=v+"star.svg"}else Z(re(j))}),[re]),N=de.useCallback((j=Zt)=>{const Z=document.createElement("canvas");Z.width=128,Z.height=128;const L=Z.getContext("2d");let v=147,S=51,F=234;if(j.startsWith("#")){const oe=j.slice(1);v=parseInt(oe.slice(0,2),16),S=parseInt(oe.slice(2,4),16),F=parseInt(oe.slice(4,6),16)}const ie=L.createRadialGradient(64,64,0,64,64,64);return ie.addColorStop(0,`rgba(${v}, ${S}, ${F}, 0.5)`),ie.addColorStop(.3,`rgba(${v}, ${S}, ${F}, 0.2)`),ie.addColorStop(.6,`rgba(${v}, ${S}, ${F}, 0.05)`),ie.addColorStop(1,`rgba(${v}, ${S}, ${F}, 0)`),L.fillStyle=ie,L.fillRect(0,0,128,128),new Ls(Z)},[]),P=de.useCallback(j=>{let Z=147,L=51,v=234;if(j.startsWith("#")){const S=j.slice(1);Z=parseInt(S.slice(0,2),16),L=parseInt(S.slice(2,4),16),v=parseInt(S.slice(4,6),16)}return{r:Z,g:L,b:v}},[]),b=de.useCallback(()=>{const L=new Vc().parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z"/></svg>'),S=Vc.createShapes(L.paths[0])[0],F=11.04/2,ie=11.53/2,oe=Math.max(11.04,11.53),ae=jo/oe,ye=S.getPoints(32).map(Pe=>({x:(Pe.x-F)*ae,y:-(Pe.y-ie)*ae})),we=20,Le=ye.length,Fe=[],me=[],Ge=[];for(let Pe=0;Pe<=we;Pe++){const Ie=Pe/we,D=Ie*yv,xe=1+Ie*1.2;for(let Ne=0;Ne<Le;Ne++){const Ue=ye[Ne];Fe.push(Ue.x*xe,Ue.y*xe,D),me.push(Ne/Le,Ie)}Fe.push(0,0,D),me.push(.5,Ie)}const Re=Le+1;for(let Pe=0;Pe<we;Pe++){const Ie=Pe*Re,D=(Pe+1)*Re;for(let xe=0;xe<Le;xe++){const Ne=Ie+xe,Ue=Ie+(xe+1)%Le,Se=D+xe,G=D+(xe+1)%Le;Ge.push(Ne,Ue,Se),Ge.push(Ue,G,Se)}}const Oe=new ci;return Oe.setAttribute("position",new rn(Fe,3)),Oe.setAttribute("uv",new rn(me,2)),Oe.setIndex(Ge),Oe.computeVertexNormals(),Oe},[]),ne=de.useCallback((j=Zt)=>{const{r:Z,g:L,b:v}=P(j),S=b(),F=new ki({uniforms:{color:{value:new it(Z/255,L/255,v/255)},opacity:{value:.35},rayLength:{value:yv}},vertexShader:`
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
      `,transparent:!0,side:In,depthWrite:!1,blending:oa}),ie=new un(S,F);return ie.position.z=.3,ie.userData={type:"beam"},ie},[P,b]),pe=de.useCallback((j,Z,L,v=[])=>{const S=new qs,F=new qs;let ie=0;for(let D=0;D<j.id.length;D++)ie=(ie<<5)-ie+j.id.charCodeAt(D),ie|=0;const oe=Math.abs(ie)%1e3/1e3*Math.PI*2;F.rotation.z=oe,F.userData={type:"starContainer",baseRotation:oe};const ae=new un(new La(jo*1.5,jo*1.5),new la({map:L,transparent:!0,opacity:.3,side:In,depthWrite:!1,blending:oa}));ae.position.z=.1,ae.userData={type:"glow"};const Te=new un(new La(jo,jo),new la({map:Z,transparent:!0,opacity:1,side:In,depthWrite:!1}));Te.position.z=.2,Te.userData={type:"star"},F.add(ae),F.add(Te),S.add(F);const ye=j.starColor||Zt,we=ne(ye);S.add(we),we.rotation.z=oe,U.current[j.id]=1;let Le=j.lat,Fe=j.lng;const me=5,Ge=1.5;let Re=0;const Oe=8;for(;Re<Oe;){const D=(90-Le)*(Math.PI/180),xe=(Fe+180)*(Math.PI/180),Ne=Wl+kd+_v,Ue=new $(-Ne*Math.sin(D)*Math.cos(xe),Ne*Math.cos(D),Ne*Math.sin(D)*Math.sin(xe));let Se=!1;for(const Ce of v)if(Ue.distanceTo(Ce.position)<me){Se=!0;break}if(!Se){S.position.copy(Ue);break}const G=Re*Math.PI/4,Ee=Ge*(1+Re*.3);Le=j.lat+Math.sin(G)*Ee,Fe=j.lng+Math.cos(G)*Ee,Re++}if(Re>=Oe){const D=(90-j.lat)*(Math.PI/180),xe=(j.lng+180)*(Math.PI/180),Ne=Wl+kd+_v;S.position.set(-Ne*Math.sin(D)*Math.cos(xe),Ne*Math.cos(D),Ne*Math.sin(D)*Math.sin(xe))}const Pe=S.position.clone().normalize(),Ie=S.position.clone().add(Pe);return S.lookAt(Ie),S.userData={card:j},E.current[j.id]=1,S},[ne]),V=de.useCallback((j,Z,L)=>{var Te;Y.current.subVectors(Z,j).normalize(),K.current.copy(j).normalize();const v=Y.current.dot(K.current),F=((Te=p.current[L])==null?void 0:Te.visible)??!1?v>-.15:v>0;if(!F)return{visible:!1,targetOpacity:0,scale:0};let ie=1;v<.2&&(ie=Math.max(0,(v+.15)/.35));const oe=Z.distanceTo(j),ae=Math.max(.5,Math.min(.85,220/oe));return{visible:F,targetOpacity:ie,scale:ae}},[]),se=de.useCallback(j=>{const Z=h.current,L=f.current;if(!Z||!L)return;const v=(90-j.lat)*(Math.PI/180),S=(j.lng+180)*(Math.PI/180),F=new $(-220*Math.sin(v)*Math.cos(S),220*Math.cos(v),220*Math.sin(v)*Math.sin(S)),ie=Z.position.clone(),oe=L.target.clone(),ae=new $(0,0,0),Te=performance.now(),ye=2e3,we=Le=>{const Fe=Le-Te;let me=Math.min(Fe/ye,1);if(me>=1){Z.position.copy(F),L.target.set(0,0,0),L.update();return}const Ge=me<.5?16*me*me*me*me*me:1-Math.pow(-2*me+2,5)/2;Z.position.lerpVectors(ie,F,Ge),L.target.lerpVectors(oe,ae,Ge),L.update(),requestAnimationFrame(we)};requestAnimationFrame(we)},[]);de.useCallback((j,Z,L)=>{Y.current.subVectors(L,j);const v=Y.current.dot(Z);return v<0?1/0:(K.current.copy(Z).multiplyScalar(v).add(j),K.current.distanceTo(L))},[]);const k=de.useCallback((j,Z)=>{const L=h.current,v=c.current,S=m.current;if(!L||!v||S.length===0)return null;const F=v.getBoundingClientRect(),ie=j-F.left,oe=Z-F.top;let ae=null,Te=25;const ye=new $;for(const we of S){if(!we.visible)continue;const Le=we.userData.card;if(!Le||(E.current[Le.id]??0)<.3)continue;ye.copy(we.position).project(L);const me=(ye.x*.5+.5)*F.width,Ge=(-ye.y*.5+.5)*F.height,Re=ie-me,Oe=oe-Ge,Pe=Math.sqrt(Re*Re+Oe*Oe);Pe<Te&&(Te=Pe,ae=Le)}return ae},[]);de.useEffect(()=>{if(o&&o!==u.current&&t.length>0){u.current=o;const j=parseInt(o.split("-")[0],10),Z=t.find(L=>L.id===j);Z&&se(Z)}},[o,t,se]),de.useEffect(()=>{if(!c.current||C.current)return;C.current=!0;const j=c.current,Z=new LC;Z.background=new it(3),d.current=Z;const L=new Pn(45,j.clientWidth/j.clientHeight,1,3e3);L.position.z=320,h.current=L;const v=new Wy({antialias:!0,powerPreference:"high-performance"});v.setSize(j.clientWidth,j.clientHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.appendChild(v.domElement),g.current=v;const S=new _R(L,v.domElement);S.enableDamping=!0,S.dampingFactor=.05,S.minDistance=150,S.maxDistance=600,S.enablePan=!1,S.autoRotateSpeed=.5,f.current=S,S.addEventListener("start",()=>{w.current&&w.current()});const F=new MutationObserver(Re=>{for(const Oe of Re)if(Oe.type==="attributes"&&Oe.attributeName==="style"){const Pe=Oe.target;Pe.style.cursor&&Pe.style.cursor!==""&&(Pe.style.cursor="")}});F.observe(v.domElement,{attributes:!0,attributeFilter:["style"]});const ie=new un(new da(xR,64,32),new la({map:ge(),side:Yt,transparent:!0,opacity:.7}));Z.add(ie),y.current=ie;const oe=new un(new da(Wl,200,100),new lv({color:1119785}));Z.add(oe);const ae=new Image;ae.crossOrigin="anonymous",ae.onload=()=>{const{colorTexture:Re,displacementTexture:Oe}=_e(ae);oe.material.dispose(),oe.material=new lv({map:Re,displacementMap:Oe,displacementScale:kd,roughness:.85,metalness:.05})};const Te="/anking-globe/";ae.src=Te+"earth_specular.png",Z.add(new un(new da(Wl+18,32,32),new ki({vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }",blending:oa,side:Yt,transparent:!0}))),Z.add(new mR(10053324,.25));const ye=new hv(16772829,1);ye.position.set(300,100,200),Z.add(ye),x.current=ye,Z.add(new hv(9647082,.2).translateX(-200).translateY(-100).translateZ(-200));const we=N(Zt);A.current=we,O(Zt).then(Re=>{R.current[Zt]=Re});const Le=()=>{L.aspect=j.clientWidth/j.clientHeight,L.updateProjectionMatrix(),v.setSize(j.clientWidth,j.clientHeight)};window.addEventListener("resize",Le);const Fe=new $;let me;const Ge=Re=>{var Se,G;if(me=requestAnimationFrame(Ge),S.update(),_.current++,y.current&&(y.current.rotation.y=-L.rotation.y*.1,y.current.rotation.x=-L.rotation.x*.05),x.current){const Ee=Re*1e-4;x.current.position.set(Math.cos(Ee)*400,Math.sin(Ee*.3)*100+50,Math.sin(Ee)*400)}const Oe=Re*5e-4,Pe=m.current,Ie=T.current,D={},xe=L.position,Ne=j.clientWidth,Ue=j.clientHeight;for(let Ee=0;Ee<Pe.length;Ee++){const Ce=Pe[Ee],B=Ce.userData.card;if(!B)continue;const ve=te.current,ke=ve===null||ve.has(B.id),{visible:He,targetOpacity:et,scale:nt}=V(Ce.position,xe,B.id);p.current[B.id]={visible:He};const tt=ke?et:0,pt=E.current[B.id]??1,wt=pt+(tt-pt)*.1;E.current[B.id]=wt,Ce.visible=wt>.01;const Ro=Ie==null?void 0:Ie.includes(B.id),Za=U.current[B.id]??1,hs=Za+((Ro?0:1)-Za)*.08;U.current[B.id]=hs,B.id;let hi=null;for(const ht of Ce.children)((Se=ht.userData)==null?void 0:Se.type)==="starContainer"&&(hi=ht);if(Ro){if(Ce.scale.setScalar(.7*nt),hi){const ht=hi.userData.baseRotation||0;hi.rotation.z=ht+Oe}Ce.traverse(ht=>{var Cr,Rr,I;((Cr=ht.userData)==null?void 0:Cr.type)==="star"?ht.material.opacity=wt:((Rr=ht.userData)==null?void 0:Rr.type)==="glow"?(ht.material.opacity=.6*wt,ht.scale.setScalar(1.8)):((I=ht.userData)==null?void 0:I.type)==="beam"&&ht.material.uniforms&&(ht.material.uniforms.opacity.value=hs*.35*wt)})}else Ce.scale.setScalar(nt),Ce.traverse(ht=>{var Cr,Rr,I;((Cr=ht.userData)==null?void 0:Cr.type)==="star"?ht.material.opacity=wt:((Rr=ht.userData)==null?void 0:Rr.type)==="glow"?(ht.material.opacity=.3*wt,ht.scale.setScalar(1)):((I=ht.userData)==null?void 0:I.type)==="beam"&&ht.material.uniforms&&(ht.material.uniforms.opacity.value=hs*.35*wt)});Fe.copy(Ce.position).project(L);const Qa=(Fe.x*.5+.5)*Ne,el=(-Fe.y*.5+.5)*Ue;D[B.id]={visible:Ce.visible,screenPos:{x:Qa,y:el},scale:nt,opacity:wt}}Pe.length>0&&_.current%1===0&&((G=z.current)==null||G.call(z,D)),v.render(Z,L)};return Ge(0),()=>{window.removeEventListener("resize",Le),cancelAnimationFrame(me),F.disconnect(),Z.traverse(Re=>{Re.geometry&&Re.geometry.dispose(),Re.material&&(Array.isArray(Re.material)?Re.material.forEach(Oe=>Oe.dispose()):Re.material.dispose())}),v.dispose(),j&&v.domElement.parentNode===j&&j.removeChild(v.domElement),C.current=!1}},[]),de.useEffect(()=>()=>{q.current&&cancelAnimationFrame(q.current)},[]),de.useEffect(()=>{if(f.current){const j=n&&!X&&(!e||e.length===0)&&!o;f.current.autoRotate=j}},[n,X,e,o]),de.useEffect(()=>{if(!(!h.current||!f.current))if(o){H.current||(H.current=h.current.position.clone());const j=m.current.find(Z=>{var L;return((L=Z.userData.card)==null?void 0:L.id)===o});if(j){const L=j.position.clone().normalize().multiplyScalar(160),v=h.current.position.clone(),S=600,F=Date.now();let ie=!1;const oe=()=>{if(ie||!W.current)return;const ae=Date.now()-F,Te=Math.min(ae/S,1),ye=1-Math.pow(1-Te,3);h.current.position.lerpVectors(v,L,ye),f.current.update(),Te<1&&requestAnimationFrame(oe)};return oe(),()=>{ie=!0}}}else H.current=null},[o]),de.useEffect(()=>{if(!f.current||!c.current)return;let j=null;const Z=F=>{j={x:F.clientX,y:F.clientY}},L=F=>{if(!j)return;const ie=F.clientX-j.x,oe=F.clientY-j.y;Math.sqrt(ie*ie+oe*oe)>5&&(W.current&&a&&a(),j=null)},v=()=>{j=null},S=c.current;return S.addEventListener("mousedown",Z),S.addEventListener("mousemove",L),S.addEventListener("mouseup",v),()=>{S.removeEventListener("mousedown",Z),S.removeEventListener("mousemove",L),S.removeEventListener("mouseup",v)}},[a]),de.useEffect(()=>{!d.current||!A.current||R.current[Zt]&&(!t||t.length===0||(m.current.forEach(j=>{j.traverse(Z=>{Z.geometry&&Z.geometry.dispose(),Z.material&&Z.material.dispose()}),d.current.remove(j)}),m.current=[],E.current={},U.current={},t.forEach(j=>{const Z=j.starColor||Zt,L=R.current[Z]||R.current[Zt],v=N(Z),S=pe(j,L,v,m.current);d.current.add(S),m.current.push(S)})))},[t,pe,N]),de.useEffect(()=>{const j=setInterval(()=>{R.current[Zt]&&d.current&&m.current.length===0&&t&&t.length>0&&(t.forEach(Z=>{const L=Z.starColor||Zt,v=R.current[L]||R.current[Zt],S=N(L),F=pe(Z,v,S,m.current);d.current.add(F),m.current.push(F)}),clearInterval(j))},100);return()=>clearInterval(j)},[t,pe,N]);const be=de.useCallback(j=>{const Z=k(j.clientX,j.clientY);Z&&i(Z)},[i,k]),Q=de.useCallback(j=>{const Z=k(j.clientX,j.clientY),L=(Z==null?void 0:Z.id)??null;L!==J.current&&(J.current=L,q.current&&cancelAnimationFrame(q.current),q.current=requestAnimationFrame(()=>{fe(L!==null),q.current=null}))},[k]),ce=de.useCallback(()=>{q.current&&cancelAnimationFrame(q.current),J.current=null,fe(!1)},[]);return M.jsx("div",{ref:c,className:`globe-canvas ${X?"hovering-star":""}`,onClick:be,onPointerMove:Q,onPointerLeave:ce})}function ER({cards:t=[],groups:e=[],selectedCards:n=[],visibleCardIds:i=null,autoRotate:r,onAutoRotateChange:s,onToggleCard:o,onToggleCardVisibility:a,onOpenAll:l,onCloseAll:c,onManageClick:d,isEmbedMode:h}){const[f,g]=de.useState(!1),[y,x]=de.useState({}),[m,u]=de.useState(!1),_=de.useMemo(()=>i===null?new Set(t.map(W=>W.id)):i,[i,t]),p=de.useMemo(()=>t.length>0&&t.every(W=>_.has(W.id)),[t,_]),E=de.useMemo(()=>{const W=t.filter(X=>_.has(X.id)).length;return W>0&&W<t.length},[t,_]),R=W=>t.filter(X=>{var fe;return(fe=W.memberIds)==null?void 0:fe.includes(X.id)}),A=W=>{const X=R(W);return X.length>0&&X.every(fe=>_.has(fe.id))},T=W=>{const X=R(W),fe=X.filter(H=>_.has(H.id)).length;return fe>0&&fe<X.length},z=W=>{x(X=>({...X,[W]:!X[W]}))},w=()=>{const W=p;t.forEach(X=>{W?_.has(X.id)&&(a==null||a(X.id)):_.has(X.id)||a==null||a(X.id)})},C=W=>{const X=R(W),fe=A(W);!fe&&p&&t.forEach(H=>{_.has(H.id)&&(a==null||a(H.id))}),X.forEach(H=>{fe?_.has(H.id)&&(a==null||a(H.id)):_.has(H.id)||a==null||a(H.id)})};return h?null:M.jsxs(M.Fragment,{children:[M.jsx("button",{className:"controls-toggle",onClick:()=>g(!f),children:M.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("circle",{cx:"12",cy:"12",r:"3"}),M.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),f&&M.jsxs("div",{className:"controls-panel",children:[M.jsx("h3",{children:"Settings"}),M.jsx("div",{className:"control-item",children:M.jsxs("label",{className:"toggle-label",children:[M.jsx("span",{children:"Auto Rotate"}),M.jsxs("div",{className:"toggle-switch",children:[M.jsx("input",{type:"checkbox",checked:r,onChange:W=>s==null?void 0:s(W.target.checked)}),M.jsx("span",{className:"toggle-slider"})]})]})}),M.jsx("div",{className:"control-divider"}),M.jsxs("div",{className:"dropdown-actions",style:{marginBottom:"12px"},children:[M.jsxs("button",{className:"dropdown-action-btn",onClick:l,children:[M.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),M.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show Cards"]}),M.jsxs("button",{className:"dropdown-action-btn",onClick:c,children:[M.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),M.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide Cards"]})]}),M.jsx("div",{className:"control-divider"}),M.jsxs("div",{className:"groups-section",children:[M.jsx("div",{className:"section-label",children:"Groups"}),M.jsxs("div",{className:"group-dropdown",children:[M.jsxs("div",{className:"group-header",onClick:()=>u(!m),children:[M.jsx("div",{className:"group-checkbox-wrapper",onClick:W=>W.stopPropagation(),children:M.jsx("input",{type:"checkbox",checked:p,ref:W=>{W&&(W.indeterminate=E)},onChange:w})}),M.jsx("span",{className:"group-label-text",children:"All Members"}),M.jsxs("span",{className:"group-count",children:["(",t.length,")"]}),M.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:m?"rotate(180deg)":"none",transition:"transform 0.2s",marginLeft:"auto"},children:M.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),m&&M.jsx("div",{className:"group-members",children:t.map(W=>M.jsxs("label",{className:"member-checkbox-item",children:[M.jsx("input",{type:"checkbox",checked:_.has(W.id),onChange:()=>a==null?void 0:a(W.id)}),M.jsx("span",{className:"member-label-text",children:W.name}),n.includes(W.id)&&M.jsx("span",{className:"card-open-indicator",children:"●"})]},W.id))})]}),e.map(W=>{const X=R(W),fe=y[W.id],H=A(W),J=T(W);return M.jsxs("div",{className:"group-dropdown",children:[M.jsxs("div",{className:"group-header",onClick:()=>z(W.id),children:[M.jsx("div",{className:"group-checkbox-wrapper",onClick:q=>q.stopPropagation(),children:M.jsx("input",{type:"checkbox",checked:H,ref:q=>{q&&(q.indeterminate=J)},onChange:()=>C(W)})}),M.jsx("span",{className:"group-label-text",children:W.name}),M.jsxs("span",{className:"group-count",children:["(",X.length,")"]}),M.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{transform:fe?"rotate(180deg)":"none",transition:"transform 0.2s",marginLeft:"auto"},children:M.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),fe&&M.jsx("div",{className:"group-members",children:X.length===0?M.jsx("div",{className:"empty-group",children:"No members"}):X.map(q=>M.jsxs("label",{className:"member-checkbox-item",children:[M.jsx("input",{type:"checkbox",checked:_.has(q.id),onChange:()=>a==null?void 0:a(q.id)}),M.jsx("span",{className:"member-label-text",children:q.name}),n.includes(q.id)&&M.jsx("span",{className:"card-open-indicator",children:"●"})]},q.id))})]},W.id)})]}),M.jsx("div",{className:"control-divider"}),M.jsxs("button",{className:"manage-btn",onClick:d,children:[M.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),M.jsx("circle",{cx:"9",cy:"7",r:"4"}),M.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),M.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Manage Members"]})]})]})}const At="https://api-efgn5mw6aq-uc.a.run.app";function Qh(t){return t?t.startsWith("http")?t:`https://storage.googleapis.com/anking-globe.appspot.com/cards/${t}`:""}async function MR(){const t=await fetch(`${At}/cards`);if(!t.ok)throw new Error("Failed to fetch cards");return t.json()}const Qy=220,ex=58,Gc=56,wR=280;function TR(t,e,n,i,r={x:0,y:0}){const s=i?Gc:Qy,o=i?Gc:ex;let a,l,c,d;switch(t){case"top-left":a=e,l=n,c="left",d="top";break;case"top-right":a=e-s,l=n,c="right",d="top";break;case"bottom-left":a=e,l=n-o,c="left",d="bottom";break;case"bottom-right":a=e-s,l=n-o,c="right",d="bottom";break;default:a=e,l=n,c="left",d="top"}return a+=r.x,l+=r.y,{left:a,top:l,originX:c,originY:d}}const AR=de.memo(function({card:e,visibilityData:n,anchor:i,offset:r,onClose:s,onFocus:o,isFocused:a,zIndex:l}){const[c,d]=de.useState(!1),h=n==null?void 0:n[e.id];if(!h||!h.visible||h.opacity<.05)return null;const{screenPos:f,scale:g,opacity:y}=h,x=Math.max(.5,Math.min(1.5,g)),u=220/x>wR&&!a,_=u?.85:.75,p=u?.55:.5,E=u?1:1.1,R=a?1.5:1,A=c&&!a?1.15:1;let T=x*_*R*A;T=Math.max(p,Math.min(E,T));const z=TR(i,f.x,f.y,u,r||{x:0,y:0});let w=l||1e3;a&&(w=2e3),c&&(w=2500);const C=`${z.originX} ${z.originY}`,W=[e.title,e.university].filter(Boolean).join(" · ");return M.jsx("div",{className:`popup-card ${a?"focused":""} ${c?"hovered":""} ${u?"compact":""}`,style:{left:z.left,top:z.top,width:u?Gc:Qy,height:u?Gc:ex,transform:`scale(${T})`,transformOrigin:C,opacity:y,zIndex:w,pointerEvents:y>.3?"auto":"none"},onClick:X=>{X.stopPropagation(),o(e.id)},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:M.jsxs("div",{className:"popup-card-inner",children:[M.jsx("div",{className:"card-image-wrapper",children:M.jsx("img",{src:Qh(e.image),alt:e.name,onError:X=>{X.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(e.name)}&background=9333ea&color=fff`}})}),M.jsxs("div",{className:"card-content",children:[M.jsx("p",{className:"card-name",children:e.name}),M.jsx("div",{className:"card-info marquee-wrapper",children:M.jsx("span",{className:"marquee-content",children:W})}),M.jsxs("div",{className:"card-location",children:[M.jsx("svg",{width:"10",height:"10",viewBox:"0 0 20 20",fill:"currentColor",children:M.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})}),M.jsx("div",{className:"card-location-text marquee-wrapper",children:M.jsx("span",{className:"marquee-content",children:e.location})})]})]}),M.jsx("button",{className:"card-close-btn",onClick:X=>{X.stopPropagation(),s(e.id)},children:M.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[M.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),M.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})});function bR(){return M.jsx("div",{className:"loading-screen",children:M.jsxs("div",{className:"loading-content",children:[M.jsx("div",{className:"loading-spinner"}),M.jsx("p",{children:"Loading..."})]})})}var xv={};/**
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
 */const tx=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},CR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[d],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new RR;const f=s<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const y=c<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PR=function(t){const e=tx(t);return nx.encodeByteArray(e,!0)},Wc=function(t){return PR(t).replace(/\./g,"")},ix=function(t){try{return nx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LR=()=>IR().__FIREBASE_DEFAULTS__,NR=()=>{if(typeof process>"u"||typeof xv>"u")return;const t=xv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ix(t[1]);return e&&JSON.parse(e)},fp=()=>{try{return LR()||NR()||DR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rx=t=>{var e,n;return(n=(e=fp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UR=t=>{const e=rx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},sx=()=>{var t;return(t=fp())===null||t===void 0?void 0:t.config},ox=t=>{var e;return(e=fp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class OR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function kR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function BR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VR(){const t=sn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GR(){try{return typeof indexedDB=="object"}catch{return!1}}function WR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const jR="FirebaseError";class Hi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jR,Object.setPrototypeOf(this,Hi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?XR(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Hi(r,a,i)}}function XR(t,e){return t.replace($R,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const $R=/\{\$([^}]+)}/g;function qR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Sv(s)&&Sv(o)){if(!jc(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Sv(t){return t!==null&&typeof t=="object"}/**
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
 */function qa(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function YR(t,e){const n=new KR(t,e);return n.subscribe.bind(n)}class KR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");JR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Fd),r.error===void 0&&(r.error=Fd),r.complete===void 0&&(r.complete=Fd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fd(){}/**
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
 */function Vi(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class ZR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new OR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eP(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:QR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QR(t){return t===zr?void 0:t}function eP(t){return t.instantiationMode==="EAGER"}/**
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
 */class tP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var at;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(at||(at={}));const nP={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},iP=at.INFO,rP={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},sP=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=rP[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ax{constructor(e){this.name=e,this._logLevel=iP,this._logHandler=sP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in at))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...e),this._logHandler(this,at.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...e),this._logHandler(this,at.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,at.INFO,...e),this._logHandler(this,at.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,at.WARN,...e),this._logHandler(this,at.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...e),this._logHandler(this,at.ERROR,...e)}}const oP=(t,e)=>e.some(n=>t instanceof n);let Ev,Mv;function aP(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lP(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lx=new WeakMap,ef=new WeakMap,cx=new WeakMap,Bd=new WeakMap,pp=new WeakMap;function cP(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lx.set(n,t)}).catch(()=>{}),pp.set(e,t),e}function uP(t){if(ef.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ef.set(t,e)}let tf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ef.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dP(t){tf=t(tf)}function hP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(zd(this),e,...n);return cx.set(i,e.sort?e.sort():[e]),yr(i)}:lP().includes(t)?function(...e){return t.apply(zd(this),e),yr(lx.get(this))}:function(...e){return yr(t.apply(zd(this),e))}}function fP(t){return typeof t=="function"?hP(t):(t instanceof IDBTransaction&&uP(t),oP(t,aP())?new Proxy(t,tf):t)}function yr(t){if(t instanceof IDBRequest)return cP(t);if(Bd.has(t))return Bd.get(t);const e=fP(t);return e!==t&&(Bd.set(t,e),pp.set(e,t)),e}const zd=t=>pp.get(t);function pP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mP=["get","getKey","getAll","getAllKeys","count"],gP=["put","add","delete","clear"],Hd=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hd.get(e))return Hd.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=gP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||mP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Hd.set(e,s),s}dP(t=>({...t,get:(e,n,i)=>wv(e,n)||t.get(e,n,i),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
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
 */class vP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_P(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function _P(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nf="@firebase/app",Tv="0.10.13";/**
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
 */const Fi=new ax("@firebase/app"),yP="@firebase/app-compat",xP="@firebase/analytics-compat",SP="@firebase/analytics",EP="@firebase/app-check-compat",MP="@firebase/app-check",wP="@firebase/auth",TP="@firebase/auth-compat",AP="@firebase/database",bP="@firebase/data-connect",CP="@firebase/database-compat",RP="@firebase/functions",PP="@firebase/functions-compat",IP="@firebase/installations",LP="@firebase/installations-compat",NP="@firebase/messaging",DP="@firebase/messaging-compat",UP="@firebase/performance",OP="@firebase/performance-compat",kP="@firebase/remote-config",FP="@firebase/remote-config-compat",BP="@firebase/storage",zP="@firebase/storage-compat",HP="@firebase/firestore",VP="@firebase/vertexai-preview",GP="@firebase/firestore-compat",WP="firebase",jP="10.14.1";/**
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
 */const rf="[DEFAULT]",XP={[nf]:"fire-core",[yP]:"fire-core-compat",[SP]:"fire-analytics",[xP]:"fire-analytics-compat",[MP]:"fire-app-check",[EP]:"fire-app-check-compat",[wP]:"fire-auth",[TP]:"fire-auth-compat",[AP]:"fire-rtdb",[bP]:"fire-data-connect",[CP]:"fire-rtdb-compat",[RP]:"fire-fn",[PP]:"fire-fn-compat",[IP]:"fire-iid",[LP]:"fire-iid-compat",[NP]:"fire-fcm",[DP]:"fire-fcm-compat",[UP]:"fire-perf",[OP]:"fire-perf-compat",[kP]:"fire-rc",[FP]:"fire-rc-compat",[BP]:"fire-gcs",[zP]:"fire-gcs-compat",[HP]:"fire-fst",[GP]:"fire-fst-compat",[VP]:"fire-vertex","fire-js":"fire-js",[WP]:"fire-js-all"};/**
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
 */const Xc=new Map,$P=new Map,sf=new Map;function Av(t,e){try{t.container.addComponent(e)}catch(n){Fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xo(t){const e=t.name;if(sf.has(e))return Fi.debug(`There were multiple attempts to register component ${e}.`),!1;sf.set(e,t);for(const n of Xc.values())Av(n,t);for(const n of $P.values())Av(n,t);return!0}function mp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bi(t){return t.settings!==void 0}/**
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
 */const qP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new $a("app","Firebase",qP);/**
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
 */class YP{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=jP;function ux(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:rf,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw xr.create("bad-app-name",{appName:String(r)});if(n||(n=sx()),!n)throw xr.create("no-options");const s=Xc.get(r);if(s){if(jc(n,s.options)&&jc(i,s.config))return s;throw xr.create("duplicate-app",{appName:r})}const o=new tP(r);for(const l of sf.values())o.addComponent(l);const a=new YP(n,i,o);return Xc.set(r,a),a}function dx(t=rf){const e=Xc.get(t);if(!e&&t===rf&&sx())return ux();if(!e)throw xr.create("no-app",{appName:t});return e}function Sr(t,e,n){var i;let r=(i=XP[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fi.warn(a.join(" "));return}xo(new as(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const KP="firebase-heartbeat-database",JP=1,Oa="firebase-heartbeat-store";let Vd=null;function hx(){return Vd||(Vd=pP(KP,JP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Vd}async function ZP(t){try{const n=(await hx()).transaction(Oa),i=await n.objectStore(Oa).get(fx(t));return await n.done,i}catch(e){if(e instanceof Hi)Fi.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fi.warn(n.message)}}}async function bv(t,e){try{const i=(await hx()).transaction(Oa,"readwrite");await i.objectStore(Oa).put(e,fx(t)),await i.done}catch(n){if(n instanceof Hi)Fi.warn(n.message);else{const i=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fi.warn(i.message)}}}function fx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QP=1024,e2=30*24*60*60*1e3;class t2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=e2}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Fi.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cv(),{heartbeatsToSend:i,unsentEntries:r}=n2(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Fi.warn(n),""}}}function Cv(){return new Date().toISOString().substring(0,10)}function n2(t,e=QP){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Rv(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Rv(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class i2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GR()?WR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rv(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function r2(t){xo(new as("platform-logger",e=>new vP(e),"PRIVATE")),xo(new as("heartbeat",e=>new t2(e),"PRIVATE")),Sr(nf,Tv,t),Sr(nf,Tv,"esm2017"),Sr("fire-js","")}r2("");var s2="firebase",o2="10.14.1";/**
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
 */Sr(s2,o2,"app");function gp(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function px(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a2=px,mx=new $a("auth","Firebase",px());/**
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
 */const $c=new ax("@firebase/auth");function l2(t,...e){$c.logLevel<=at.WARN&&$c.warn(`Auth (${bo}): ${t}`,...e)}function lc(t,...e){$c.logLevel<=at.ERROR&&$c.error(`Auth (${bo}): ${t}`,...e)}/**
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
 */function ai(t,...e){throw _p(t,...e)}function Kn(t,...e){return _p(t,...e)}function vp(t,e,n){const i=Object.assign(Object.assign({},a2()),{[e]:n});return new $a("auth","Firebase",i).create(e,{appName:t.name})}function Zr(t){return vp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function c2(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ai(t,"argument-error"),vp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _p(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return mx.create(t,...e)}function je(t,e,...n){if(!t)throw _p(e,...n)}function Ci(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function Bi(t,e){t||Ci(e)}/**
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
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function u2(){return Pv()==="http:"||Pv()==="https:"}function Pv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function d2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u2()||zR()||"connection"in navigator)?navigator.onLine:!0}function h2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bi(n>e,"Short delay should be less than long delay!"),this.isMobile=FR()||HR()}get(){return d2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yp(t,e){Bi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gx{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const p2=new Ya(3e4,6e4);function xp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Co(t,e,n,i,r={}){return vx(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=qa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return BR()||(c.referrerPolicy="no-referrer"),gx.fetch()(_x(t,t.config.apiHost,n,a),c)})}async function vx(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},f2),e);try{const r=new g2(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jl(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vp(t,d,c);ai(t,d)}}catch(r){if(r instanceof Hi)throw r;ai(t,"network-request-failed",{message:String(r)})}}async function m2(t,e,n,i,r={}){const s=await Co(t,e,n,i,r);return"mfaPendingCredential"in s&&ai(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _x(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?yp(t.config,r):`${t.config.apiScheme}://${r}`}class g2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Kn(this.auth,"network-request-failed")),p2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Kn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function v2(t,e){return Co(t,"POST","/v1/accounts:delete",e)}async function yx(t,e){return Co(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _2(t,e=!1){const n=Vi(t),i=await n.getIdToken(e),r=Sp(i);je(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ha(Gd(r.auth_time)),issuedAtTime:ha(Gd(r.iat)),expirationTime:ha(Gd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gd(t){return Number(t)*1e3}function Sp(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const r=ix(n);return r?JSON.parse(r):(lc("Failed to decode base64 JWT payload"),null)}catch(r){return lc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Iv(t){const e=Sp(t);return je(e,"internal-error"),je(typeof e.exp<"u","internal-error"),je(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ka(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Hi&&y2(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function y2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class x2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class af{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qc(t){var e;const n=t.auth,i=await t.getIdToken(),r=await ka(t,yx(n,{idToken:i}));je(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xx(s.providerUserInfo):[],a=E2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new af(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function S2(t){const e=Vi(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E2(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function xx(t){return t.map(e=>{var{providerId:n}=e,i=gp(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function M2(t,e){const n=await vx(t,{},async()=>{const i=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=_x(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gx.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function w2(t,e){return Co(t,"POST","/v2/accounts:revokeToken",xp(t,e))}/**
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
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(typeof e.idToken<"u","internal-error"),je(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){je(e.length!==0,"internal-error");const n=Iv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(je(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await M2(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new so;return i&&(je(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(je(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(je(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
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
 */function Yi(t,e){je(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=gp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new af(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ka(this,this.stsTokenManager.getToken(this.auth,e));return je(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _2(this,e)}reload(){return S2(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bi(this.auth.app))return Promise.reject(Zr(this.auth));const e=await this.getIdToken();return await ka(this,v2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,d;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,u=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:E,isAnonymous:R,providerData:A,stsTokenManager:T}=n;je(p&&T,e,"internal-error");const z=so.fromJSON(this.name,T);je(typeof p=="string",e,"internal-error"),Yi(h,e.name),Yi(f,e.name),je(typeof E=="boolean",e,"internal-error"),je(typeof R=="boolean",e,"internal-error"),Yi(g,e.name),Yi(y,e.name),Yi(x,e.name),Yi(m,e.name),Yi(u,e.name),Yi(_,e.name);const w=new Ri({uid:p,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:R,photoURL:y,phoneNumber:g,tenantId:x,stsTokenManager:z,createdAt:u,lastLoginAt:_});return A&&Array.isArray(A)&&(w.providerData=A.map(C=>Object.assign({},C))),m&&(w._redirectEventId=m),w}static async _fromIdTokenResponse(e,n,i=!1){const r=new so;r.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await qc(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];je(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?xx(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new so;a.updateFromIdToken(i);const l=new Ri({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new af(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Lv=new Map;function Pi(t){Bi(t instanceof Function,"Expected a class definition");let e=Lv.get(t);return e?(Bi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lv.set(t,e),e)}/**
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
 */class Sx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sx.type="NONE";const Nv=Sx;/**
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
 */function cc(t,e,n){return`firebase:${t}:${e}:${n}`}class oo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=cc(this.userKey,r.apiKey,s),this.fullPersistenceKey=cc("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new oo(Pi(Nv),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Pi(Nv);const o=cc(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Ri._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new oo(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new oo(s,e,i))}}/**
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
 */function Dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ex(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bx(e))return"Blackberry";if(Cx(e))return"Webos";if(Mx(e))return"Safari";if((e.includes("chrome/")||wx(e))&&!e.includes("edge/"))return"Chrome";if(Ax(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ex(t=sn()){return/firefox\//i.test(t)}function Mx(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wx(t=sn()){return/crios\//i.test(t)}function Tx(t=sn()){return/iemobile/i.test(t)}function Ax(t=sn()){return/android/i.test(t)}function bx(t=sn()){return/blackberry/i.test(t)}function Cx(t=sn()){return/webos/i.test(t)}function Ep(t=sn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function T2(t=sn()){var e;return Ep(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A2(){return VR()&&document.documentMode===10}function Rx(t=sn()){return Ep(t)||Ax(t)||Cx(t)||bx(t)||/windows phone/i.test(t)||Tx(t)}/**
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
 */function Px(t,e=[]){let n;switch(t){case"Browser":n=Dv(sn());break;case"Worker":n=`${Dv(sn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${i}`}/**
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
 */class b2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function C2(t,e={}){return Co(t,"GET","/v2/passwordPolicy",xp(t,e))}/**
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
 */const R2=6;class P2{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:R2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class I2{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uv(this),this.idTokenSubscription=new Uv(this),this.beforeStateQueue=new b2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yx(this,{idToken:e}),i=await Ri._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bi(this.app))return Promise.reject(Zr(this));const n=e?Vi(e):null;return n&&je(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bi(this.app)?Promise.reject(Zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bi(this.app)?Promise.reject(Zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C2(this),n=new P2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await w2(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pi(e)||this._popupRedirectResolver;je(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[Pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(je(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Px(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mu(t){return Vi(t)}class Uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=YR(n=>this.observer=n)}get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function L2(t){Mp=t}function N2(t){return Mp.loadJS(t)}function D2(){return Mp.gapiScript}function U2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function O2(t,e){const n=mp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(jc(s,e??{}))return r;ai(r,"already-initialized")}return n.initialize({options:e})}function k2(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Pi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function F2(t,e,n){const i=Mu(t);je(i._canInitEmulator,i,"emulator-config-failed"),je(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Ix(e),{host:o,port:a}=B2(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),z2()}function Ix(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function B2(t){const e=Ix(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ov(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ov(o)}}}function Ov(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function z2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lx{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,n){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}/**
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
 */async function ao(t,e){return m2(t,"POST","/v1/accounts:signInWithIdp",xp(t,e))}/**
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
 */const H2="http://localhost";class ls extends Lx{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ai("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=gp(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ls(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ao(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
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
 */class wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends Ka{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class Mi extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mi.credential(n,i)}catch{return null}}}Mi.GOOGLE_SIGN_IN_METHOD="google.com";Mi.PROVIDER_ID="google.com";/**
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
 */class nr extends Ka{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class ir extends Ka{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ir.credential(n,i)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */class So{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ri._fromIdTokenResponse(e,i,r),o=kv(i);return new So({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=kv(i);return new So({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function kv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yc extends Hi{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Yc(e,n,i,r)}}function Nx(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,s,e,i):s})}async function V2(t,e,n=!1){const i=await ka(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return So._forOperation(t,"link",i)}/**
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
 */async function G2(t,e,n=!1){const{auth:i}=t;if(bi(i.app))return Promise.reject(Zr(i));const r="reauthenticate";try{const s=await ka(t,Nx(i,r,e,t),n);je(s.idToken,i,"internal-error");const o=Sp(s.idToken);je(o,i,"internal-error");const{sub:a}=o;return je(t.uid===a,i,"user-mismatch"),So._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ai(i,"user-mismatch"),s}}/**
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
 */async function W2(t,e,n=!1){if(bi(t.app))return Promise.reject(Zr(t));const i="signIn",r=await Nx(t,i,e),s=await So._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function j2(t,e,n,i){return Vi(t).onIdTokenChanged(e,n,i)}function X2(t,e,n){return Vi(t).beforeAuthStateChanged(e,n)}function $2(t,e,n,i){return Vi(t).onAuthStateChanged(e,n,i)}function q2(t){return Vi(t).signOut()}const Kc="__sak";/**
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
 */class Dx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kc,"1"),this.storage.removeItem(Kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Y2=1e3,K2=10;class Ux extends Dx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);A2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,K2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ux.type="LOCAL";const J2=Ux;/**
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
 */class Ox extends Dx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ox.type="SESSION";const kx=Ox;/**
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
 */function Z2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new wu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Z2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
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
 */function Tp(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Tp("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function oi(){return window}function eI(t){oi().location.href=t}/**
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
 */function Fx(){return typeof oi().WorkerGlobalScope<"u"&&typeof oi().importScripts=="function"}async function tI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iI(){return Fx()?self:null}/**
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
 */const Bx="firebaseLocalStorageDb",rI=1,Jc="firebaseLocalStorage",zx="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function sI(){const t=indexedDB.deleteDatabase(Bx);return new Ja(t).toPromise()}function lf(){const t=indexedDB.open(Bx,rI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Jc,{keyPath:zx})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Jc)?e(i):(i.close(),await sI(),e(await lf()))})})}async function Fv(t,e,n){const i=Tu(t,!0).put({[zx]:e,value:n});return new Ja(i).toPromise()}async function oI(t,e){const n=Tu(t,!1).get(e),i=await new Ja(n).toPromise();return i===void 0?null:i.value}function Bv(t,e){const n=Tu(t,!0).delete(e);return new Ja(n).toPromise()}const aI=800,lI=3;class Hx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>lI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(iI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tI(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lf();return await Fv(e,Kc,"1"),await Bv(e,Kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>oI(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Tu(r,!1).getAll();return new Ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hx.type="LOCAL";const cI=Hx;new Ya(3e4,6e4);/**
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
 */function Vx(t,e){return e?Pi(e):(je(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ap extends Lx{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uI(t){return W2(t.auth,new Ap(t),t.bypassAuthState)}function dI(t){const{auth:e,user:n}=t;return je(n,e,"internal-error"),G2(n,new Ap(t),t.bypassAuthState)}async function hI(t){const{auth:e,user:n}=t;return je(n,e,"internal-error"),V2(n,new Ap(t),t.bypassAuthState)}/**
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
 */class Gx{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uI;case"linkViaPopup":case"linkViaRedirect":return hI;case"reauthViaPopup":case"reauthViaRedirect":return dI;default:ai(this.auth,"internal-error")}}resolve(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fI=new Ya(2e3,1e4);async function pI(t,e,n){if(bi(t.app))return Promise.reject(Kn(t,"operation-not-supported-in-this-environment"));const i=Mu(t);c2(t,e,wp);const r=Vx(i,n);return new Xr(i,"signInViaPopup",e,r).executeNotNull()}class Xr extends Gx{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return je(e,this.auth,"internal-error"),e}async onExecution(){Bi(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fI.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const mI="pendingRedirect",uc=new Map;class gI extends Gx{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const i=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(t,e){const n=xI(e),i=yI(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function _I(t,e){uc.set(t._key(),e)}function yI(t){return Pi(t._redirectPersistence)}function xI(t){return cc(mI,t.config.apiKey,t.name)}async function SI(t,e,n=!1){if(bi(t.app))return Promise.reject(Zr(t));const i=Mu(t),r=Vx(i,e),o=await new gI(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const EI=10*60*1e3;class MI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Wx(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zv(e))}saveEventToCache(e){this.cachedEventUids.add(zv(e)),this.lastProcessedEventTime=Date.now()}}function zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wx(t);default:return!1}}/**
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
 */async function TI(t,e={}){return Co(t,"GET","/v1/projects",e)}/**
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
 */const AI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bI=/^https?/;async function CI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TI(t);for(const n of e)try{if(RI(n))return}catch{}ai(t,"unauthorized-domain")}function RI(t){const e=of(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!bI.test(n))return!1;if(AI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const PI=new Ya(3e4,6e4);function Hv(){const t=oi().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function II(t){return new Promise((e,n)=>{var i,r,s;function o(){Hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hv(),n(Kn(t,"network-request-failed"))},timeout:PI.get()})}if(!((r=(i=oi().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=oi().gapi)===null||s===void 0)&&s.load)o();else{const a=U2("iframefcb");return oi()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},N2(`${D2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dc=null,e})}let dc=null;function LI(t){return dc=dc||II(t),dc}/**
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
 */const NI=new Ya(5e3,15e3),DI="__/auth/iframe",UI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(t){const e=t.config;je(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yp(e,UI):`https://${t.config.authDomain}/${DI}`,i={apiKey:e.apiKey,appName:t.name,v:bo},r=kI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${qa(i).slice(1)}`}async function BI(t){const e=await LI(t),n=oi().gapi;return je(n,t,"internal-error"),e.open({where:document.body,url:FI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=oi().setTimeout(()=>{s(o)},NI.get());function l(){oi().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const zI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,VI=600,GI="_blank",WI="http://localhost";class Vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(t,e,n,i=HI,r=VI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zI),{width:i.toString(),height:r.toString(),top:s,left:o}),c=sn().toLowerCase();n&&(a=wx(c)?GI:n),Ex(c)&&(e=e||WI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(T2(c)&&a!=="_self")return XI(e||"",a),new Vv(null);const h=window.open(e||"",a,d);je(h,t,"popup-blocked");try{h.focus()}catch{}return new Vv(h)}function XI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const $I="__/auth/handler",qI="emulator/auth/handler",YI=encodeURIComponent("fac");async function Gv(t,e,n,i,r,s){je(t.config.authDomain,t,"auth-domain-config-required"),je(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:bo,eventId:r};if(e instanceof wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Ka){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${YI}=${encodeURIComponent(l)}`:"";return`${KI(t)}?${qa(a).slice(1)}${c}`}function KI({config:t}){return t.emulator?yp(t,qI):`https://${t.authDomain}/${$I}`}/**
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
 */const Wd="webStorageSupport";class JI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kx,this._completeRedirectFn=SI,this._overrideRedirectResult=_I}async _openPopup(e,n,i,r){var s;Bi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gv(e,n,i,of(),r);return jI(e,o,Tp())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Gv(e,n,i,of(),r);return eI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Bi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await BI(e),i=new MI(e);return n.register("authEvent",r=>(je(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Wd];o!==void 0&&n(!!o),ai(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rx()||Mx()||Ep()}}const ZI=JI;var Wv="@firebase/auth",jv="1.7.9";/**
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
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tL(t){xo(new as("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;je(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Px(t)},c=new I2(i,r,s,l);return k2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),xo(new as("auth-internal",e=>{const n=Mu(e.getProvider("auth").getImmediate());return(i=>new QI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(Wv,jv,eL(t)),Sr(Wv,jv,"esm2017")}/**
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
 */const nL=5*60,iL=ox("authIdTokenMaxAge")||nL;let Xv=null;const rL=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>iL)return;const r=n==null?void 0:n.token;Xv!==r&&(Xv=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sL(t=dx()){const e=mp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=O2(t,{popupRedirectResolver:ZI,persistence:[cI,J2,kx]}),i=ox("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=rL(s.toString());X2(n,o,()=>o(n.currentUser)),j2(n,a=>o(a))}}const r=rx("auth");return r&&F2(n,`http://${r}`),n}function oL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}L2({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Kn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",oL().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tL("Browser");/**
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
 */const jx="firebasestorage.googleapis.com",aL="storageBucket",lL=2*60*1e3,cL=10*60*1e3;/**
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
 */class di extends Hi{constructor(e,n,i=0){super(jd(e),`Firebase Storage: ${n} (${jd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,di.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var li;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(li||(li={}));function jd(t){return"storage/"+t}function uL(){const t="An unknown error occurred, please check the error payload for server response.";return new di(li.UNKNOWN,t)}function dL(){return new di(li.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hL(){return new di(li.CANCELED,"User canceled the upload/download.")}function fL(t){return new di(li.INVALID_URL,"Invalid URL '"+t+"'.")}function pL(t){return new di(li.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $v(t){return new di(li.INVALID_ARGUMENT,t)}function Xx(){return new di(li.APP_DELETED,"The Firebase app was deleted.")}function mL(t){return new di(li.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class $n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=$n.makeFromUrl(e,n)}catch{return new $n(e,"")}if(i.path==="")return i;throw pL(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),y={bucket:1,path:3},x=n===jx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",u=new RegExp(`^https?://${x}/${r}/${m}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:c},{regex:u,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<p.length;E++){const R=p[E],A=R.regex.exec(e);if(A){const T=A[R.indices.bucket];let z=A[R.indices.path];z||(z=""),i=new $n(T,z),R.postModify(i);break}}if(i==null)throw fL(e);return i}}class gL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vL(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...m){c||(c=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(g,l())},m)}function f(){s&&clearTimeout(s)}function g(m,...u){if(c){f();return}if(m){f(),d.call(null,m,...u);return}if(l()||o){f(),d.call(null,m,...u);return}i<64&&(i*=2);let p;a===1?(a=2,p=0):p=(i+Math.random())*1e3,h(p)}let y=!1;function x(m){y||(y=!0,f(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function _L(t){t(!1)}/**
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
 */function yL(t){return t!==void 0}function qv(t,e,n,i){if(i<e)throw $v(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw $v(`Invalid value for '${t}'. Expected ${n} or less.`)}function xL(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}var Zc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zc||(Zc={}));/**
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
 */function SL(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class EL{constructor(e,n,i,r,s,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Xl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Zc.NO_ERROR,l=s.getStatus();if(!a||SL(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Zc.ABORT;i(!1,new Xl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Xl(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());yL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=uL();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Xx():hL();o(l)}else{const l=dL();o(l)}};this.canceled_?n(!1,new Xl(!1,null,!0)):this.backoffId_=vL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_L(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function ML(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bL(t,e,n,i,r,s,o=!0){const a=xL(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return TL(c,e),ML(c,n),wL(c,s),AL(c,i),new EL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function CL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Qc{constructor(e,n){this._service=e,n instanceof $n?this._location=n:this._location=$n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qc(e,n)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RL(this._location.path)}get storage(){return this._service}get parent(){const e=CL(this._location.path);if(e===null)return null;const n=new $n(this._location.bucket,e);return new Qc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw mL(e)}}function Yv(t,e){const n=e==null?void 0:e[aL];return n==null?null:$n.makeFromBucketSpec(n,t)}function PL(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:kR(r,t.app.options.projectId))}class IL{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=jx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lL,this._maxUploadRetryTime=cL,this._requests=new Set,r!=null?this._bucket=$n.makeFromBucketSpec(r,this._host):this._bucket=Yv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=Yv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qc(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new gL(Xx());{const o=bL(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Kv="@firebase/storage",Jv="0.13.2";/**
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
 */const $x="storage";function LL(t=dx(),e){t=Vi(t);const i=mp(t,$x).getImmediate({identifier:e}),r=UR("storage");return r&&NL(i,...r),i}function NL(t,e,n,i={}){PL(t,e,n,i)}function DL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new IL(n,i,r,e,bo)}function UL(){xo(new as($x,DL,"PUBLIC").setMultipleInstances(!0)),Sr(Kv,Jv,""),Sr(Kv,Jv,"esm2017")}UL();const OL={apiKey:"AIzaSyBtC41YV8I-AjXxZCR5bFMzqUqu08DUm1o",authDomain:"anking-globe.firebaseapp.com",projectId:"anking-globe",storageBucket:"anking-globe.firebasestorage.app",messagingSenderId:"615376842",appId:"1:615376842:web:your_app_id"},qx=ux(OL),Fa=sL(qx);LL(qx);const kL=new Mi,FL=async()=>{try{const t=await pI(Fa,kL),e=await t.user.getIdToken();return{user:t.user,token:e}}catch(t){throw console.error("Google sign-in error:",t),t}},BL=async()=>{await q2(Fa)},zL=async()=>Fa.currentUser?await Fa.currentUser.getIdToken():null;function HL(t){if(!t)return"";if(typeof t=="object"){const n=[];return(t.city||t.town||t.village||t.municipality)&&n.push(t.city||t.town||t.village||t.municipality),(t.state||t.region||t.province)&&n.push(t.state||t.region||t.province),t.country&&n.push(t.country),n.join(", ")}const e=t.split(",").map(n=>n.trim());return e.length<=3?t:e.slice(-3).join(", ")}function VL({onBack:t}){const[e,n]=de.useState("checking"),[i,r]=de.useState(!1),[s,o]=de.useState(null),[a,l]=de.useState(null),[c,d]=de.useState("members"),[h,f]=de.useState([]),[g,y]=de.useState(null),[x,m]=de.useState(!1),[u,_]=de.useState(!1),[p,E]=de.useState({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),[R,A]=de.useState([]),[T,z]=de.useState(!1),[w,C]=de.useState([]),[W,X]=de.useState([]),[fe,H]=de.useState([]),[J,q]=de.useState(!1),[te,U]=de.useState(!1),[Y,K]=de.useState(!1),[ge,_e]=de.useState(500),[re,O]=de.useState(null),[N,P]=de.useState([]),[b,ne]=de.useState(null),[pe,V]=de.useState({name:"",color:"#9333ea",memberIds:[]}),[se,k]=de.useState(!1),be=de.useRef(null);de.useEffect(()=>{const B=$2(Fa,async ve=>{if(ve){const ke=await ve.getIdToken();l(ke),o({email:ve.email,username:ve.displayName||ve.email,picture:ve.photoURL||""}),Q(ke)}else l(null),o(null),n("none")});return()=>B()},[]);const Q=async B=>{try{const ke=await(await fetch(`${At}/auth/check`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${B}`}})).json();if(ke.error){n("none");return}n(ke.status),r(ke.isAdmin||!1),(ke.status==="approved"||ke.isAdmin)&&(L(),v(),S())}catch(ve){console.error("Auth check error:",ve),n("error")}},ce=()=>a?{Authorization:`Bearer ${a}`}:{},j=async()=>{try{await FL();const B=await zL();if(B){l(B);const ke=await(await fetch(`${At}/auth/request`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${B}`}})).json();n(ke.status),r(ke.isAdmin||!1),(ke.status==="approved"||ke.isAdmin)&&(L(),v(),S())}}catch(B){console.error("Sign in error:",B)}},Z=async()=>{try{await BL(),l(null),o(null),n("none")}catch(B){console.error("Sign out error:",B)}},L=async()=>{try{const ve=await(await fetch(`${At}/cards`)).json();f(ve)}catch(B){console.error("Load cards error:",B)}},v=async()=>{try{const ve=await(await fetch(`${At}/images`,{headers:ce()})).json();C(ve)}catch(B){console.error("Load images error:",B)}},S=async()=>{try{const ve=await(await fetch(`${At}/groups`)).json();P(ve)}catch(B){console.error("Load groups error:",B)}},F=async()=>{if(i)try{const[B,ve]=await Promise.all([fetch(`${At}/users/pending`,{headers:ce()}),fetch(`${At}/users/approved`,{headers:ce()})]);X(await B.json()),H(await ve.json())}catch(B){console.error("Load users error:",B)}},ie=async B=>{try{(await fetch(`${At}/users/${encodeURIComponent(B)}/approve`,{method:"POST",headers:ce()})).ok&&(O({type:"success",message:`Approved ${B}`}),setTimeout(()=>O(null),3e3),F())}catch(ve){console.error("Approve error:",ve)}},oe=async B=>{try{await fetch(`${At}/users/${encodeURIComponent(B)}`,{method:"DELETE",headers:ce()}),O({type:"success",message:`Denied ${B}`}),setTimeout(()=>O(null),3e3),F()}catch(ve){console.error("Deny error:",ve)}},ae=async B=>{if(confirm(`Revoke access for ${B}?`))try{await fetch(`${At}/users/${encodeURIComponent(B)}/revoke`,{method:"POST",headers:ce()}),F()}catch(ve){console.error("Revoke error:",ve)}},Te=async B=>{if(!B||B.length<3){A([]);return}z(!0);try{const ke=await(await fetch(`${At}/geocode?q=${encodeURIComponent(B)}`)).json();A(ke.slice(0,5))}catch{A([])}z(!1)},ye=B=>{E(ve=>({...ve,location:HL(B.address)||B.display_name,lat:B.lat.toString(),lng:B.lng.toString()})),A([])},we=(B,ve)=>{E(ke=>({...ke,[B]:ve})),(B==="university"||B==="location")&&(clearTimeout(window.geocodeTimeout),window.geocodeTimeout=setTimeout(()=>Te(ve),600))},Le=async B=>{const ve=B.target.files[0];if(ve){if(!ve.type.match(/^image\/(png|jpe?g|webp)$/)){alert("Please select a PNG, JPG, or WebP image.");return}if(ve.size>5*1024*1024){alert("Image too large. Max 5MB.");return}_(!0);try{const ke=new FileReader;ke.onload=async()=>{const He=ke.result,et=await fetch(`${At}/images/upload`,{method:"POST",headers:{"Content-Type":"application/json",...ce()},body:JSON.stringify({filename:ve.name,data:He})});if(et.ok){const nt=await et.json();E(tt=>({...tt,image:nt.url||nt.filename})),await v()}else{const nt=await et.json();alert(nt.error||"Upload failed")}_(!1)},ke.readAsDataURL(ve)}catch{alert("Upload failed"),_(!1)}B.target.value=""}},Fe=()=>{E({name:"",title:"",university:"",location:"",lat:"",lng:"",image:""}),y(null),A([])},me=B=>{var ve,ke;y(B),E({name:B.name||"",title:B.title||"",university:B.university||"",location:B.location||"",lat:((ve=B.lat)==null?void 0:ve.toString())||"",lng:((ke=B.lng)==null?void 0:ke.toString())||"",image:B.image||""})},Ge=async B=>{if(B.preventDefault(),!p.name||!p.location||!p.lat||!p.lng){alert("Please fill required fields");return}m(!0);const ve={...p,lat:parseFloat(p.lat),lng:parseFloat(p.lng)};try{const ke=g?`${At}/cards/${g.id}`:`${At}/cards`,et=await fetch(ke,{method:g?"PUT":"POST",headers:{"Content-Type":"application/json",...ce()},body:JSON.stringify(ve)});if(et.ok)Fe(),L();else{const nt=await et.json();alert(nt.error||"Save failed")}}catch{alert("Save failed")}m(!1)},Re=async B=>{if(confirm("Delete this member?"))try{await fetch(`${At}/cards/${B}`,{method:"DELETE",headers:ce()}),L(),(g==null?void 0:g.id)===B&&Fe()}catch{alert("Delete failed")}},Oe=()=>{V({name:"",color:"#9333ea",memberIds:[]}),ne(null)},Pe=B=>{ne(B),V({name:B.name||"",color:B.color||"#9333ea",memberIds:B.memberIds||[]})},Ie=B=>{V(ve=>{const ke=ve.memberIds.includes(B)?ve.memberIds.filter(He=>He!==B):[...ve.memberIds,B];return{...ve,memberIds:ke}})},D=async B=>{if(B.preventDefault(),!pe.name){alert("Please enter a group name");return}k(!0);try{const ve=b?`${At}/groups/${b.id}`:`${At}/groups`,He=await fetch(ve,{method:b?"PUT":"POST",headers:{"Content-Type":"application/json",...ce()},body:JSON.stringify(pe)});if(He.ok)Oe(),S(),O({type:"success",message:b?"Group updated":"Group created"}),setTimeout(()=>O(null),3e3);else{const et=await He.json();alert(et.error||"Save failed")}}catch{alert("Save failed")}k(!1)},xe=async B=>{if(confirm("Delete this group?"))try{await fetch(`${At}/groups/${B}`,{method:"DELETE",headers:ce()}),S(),(b==null?void 0:b.id)===B&&Oe(),O({type:"success",message:"Group deleted"}),setTimeout(()=>O(null),3e3)}catch{alert("Delete failed")}},[Ne,Ue]=de.useState("all"),Se=()=>{const B=window.location.origin+"/anking-globe/",ve=new URLSearchParams({embed:"true"});return Ne&&Ne!=="all"&&ve.set("group",Ne),`${B}?${ve.toString()}`},G=()=>{if(Ne==="all")return"All Members";const B=N.find(ve=>ve.id===Ne);return B?B.name:"All Members"},Ee=()=>`<iframe 
  src="${Se()}" 
  width="100%" 
  height="${ge}" 
  frameborder="0" 
  allow="accelerometer; gyroscope"
  style="border-radius: 12px; overflow: hidden;"
></iframe>`,Ce=()=>{navigator.clipboard.writeText(Ee()),K(!0),setTimeout(()=>K(!1),2e3)};return e==="checking"?M.jsx("div",{className:"admin-page",children:M.jsx("div",{className:"admin-auth",children:M.jsx("div",{className:"auth-loading",children:"Checking authentication..."})})}):e==="error"?M.jsx("div",{className:"admin-page",children:M.jsxs("div",{className:"admin-auth",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsxs("div",{className:"auth-card error",children:[M.jsx("div",{className:"error-icon",children:"❌"}),M.jsx("h1",{children:"Authentication Error"}),M.jsx("button",{onClick:Z,children:"Try Again"})]})]})}):e==="none"?M.jsx("div",{className:"admin-page",children:M.jsxs("div",{className:"admin-auth",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsxs("div",{className:"auth-card",children:[M.jsx("h1",{children:"Admin Access"}),M.jsx("p",{children:"Sign in with Google to request access."}),M.jsxs("button",{className:"google-sign-in-btn",onClick:j,children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[M.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),M.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),M.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),M.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),M.jsx("p",{className:"auth-note",children:"Admins will be notified to approve your request."})]})]})}):e==="pending"?M.jsx("div",{className:"admin-page",children:M.jsxs("div",{className:"admin-auth",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsxs("div",{className:"auth-card pending",children:[M.jsx("div",{className:"pending-icon",children:"⏳"}),M.jsx("h1",{children:"Access Pending"}),s&&M.jsxs("div",{className:"pending-user-info",children:[s.picture&&M.jsx("img",{src:s.picture,alt:"",className:"pending-avatar"}),M.jsx("p",{children:M.jsx("strong",{children:s.username})}),M.jsx("p",{children:s.email})]}),M.jsx("p",{children:"An admin has been notified and will review your request."}),M.jsxs("button",{className:"google-sign-in-btn",onClick:Z,children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),M.jsx("polyline",{points:"16 17 21 12 16 7"}),M.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Use another account"]})]})]})}):M.jsxs("div",{className:"admin-page",children:[M.jsxs("div",{className:"admin-header",children:[M.jsxs("button",{className:"back-button",onClick:t,children:[M.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:M.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Globe"]}),M.jsx("h1",{children:"Member Management"}),M.jsxs("div",{className:"admin-user",children:[(s==null?void 0:s.picture)&&M.jsx("img",{src:s.picture,alt:"",className:"user-avatar"}),M.jsx("span",{children:(s==null?void 0:s.username)||(s==null?void 0:s.email)}),i&&M.jsx("span",{className:"admin-badge",children:"Admin"}),i&&M.jsxs("button",{className:`user-mgmt-btn ${J?"active":""}`,onClick:()=>{q(!J),F()},children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),M.jsx("circle",{cx:"9",cy:"7",r:"4"}),M.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),M.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Users",W.length>0&&M.jsx("span",{className:"pending-count",children:W.length})]}),M.jsxs("button",{className:"embed-btn",onClick:()=>U(!0),children:[M.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("polyline",{points:"16 18 22 12 16 6"}),M.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"Embed"]}),M.jsx("button",{className:"logout-btn",onClick:Z,children:"Sign Out"})]})]}),i&&J&&M.jsxs("div",{className:"user-management-panel",children:[M.jsxs("div",{className:"user-section",children:[M.jsxs("h3",{children:["Pending (",W.length,")"]}),W.length===0?M.jsx("p",{className:"no-users",children:"No pending requests"}):M.jsx("ul",{children:W.map(B=>M.jsxs("li",{children:[M.jsxs("div",{className:"user-info",children:[B.picture&&M.jsx("img",{src:B.picture,alt:"",className:"list-avatar"}),M.jsxs("div",{children:[M.jsx("span",{className:"user-name",children:B.username}),M.jsx("span",{className:"user-email",children:B.email})]})]}),M.jsxs("div",{className:"user-actions",children:[M.jsx("button",{className:"approve",onClick:()=>{console.log("clicked"),ie(B.email)},children:"Approve"}),M.jsx("button",{className:"deny",onClick:()=>oe(B.email),children:"Deny"})]})]},B.email))})]}),M.jsxs("div",{className:"user-section",children:[M.jsxs("h3",{children:["Approved (",fe.length,")"]}),M.jsx("ul",{children:fe.map(B=>M.jsxs("li",{children:[M.jsxs("div",{className:"user-info",children:[B.picture&&M.jsx("img",{src:B.picture,alt:"",className:"list-avatar"}),M.jsxs("div",{children:[M.jsx("span",{className:"user-name",children:B.username||"Unknown"}),M.jsx("span",{className:"user-email",children:B.email})]})]}),M.jsx("button",{className:"revoke",onClick:()=>ae(B.email),children:"Revoke"})]},B.email))})]})]}),te&&M.jsx("div",{className:"embed-modal-overlay",onClick:()=>U(!1),children:M.jsxs("div",{className:"embed-modal",onClick:B=>B.stopPropagation(),children:[M.jsx("button",{className:"embed-modal-close",onClick:()=>U(!1),children:"×"}),M.jsx("h2",{children:"🔗 Embed Globe"}),M.jsxs("p",{className:"embed-description",children:["Embed the ",M.jsx("strong",{children:"live globe"})," on any website. It shows real-time data, with a toggle button to show/hide all cards."]}),M.jsxs("div",{className:"embed-setting",children:[M.jsx("label",{children:"Group to display:"}),M.jsxs("select",{value:Ne,onChange:B=>Ue(B.target.value),className:"embed-group-select",children:[M.jsx("option",{value:"all",children:"All Members"}),N.map(B=>M.jsx("option",{value:B.id,children:B.name},B.id))]})]}),M.jsxs("div",{className:"embed-setting",children:[M.jsx("label",{children:"Height:"}),M.jsxs("div",{className:"embed-height-input",children:[M.jsx("input",{type:"number",value:ge,onChange:B=>_e(parseInt(B.target.value)||500),min:"300",max:"1000"}),M.jsx("span",{children:"px"})]})]}),M.jsx("div",{className:"embed-info",children:M.jsxs("span",{children:["📍 Footer will show: ",M.jsx("strong",{children:G()})]})}),M.jsxs("div",{className:"embed-preview",children:[M.jsx("div",{className:"embed-preview-header",children:M.jsx("span",{children:"iframe Code"})}),M.jsx("pre",{children:Ee()})]}),M.jsxs("div",{className:"embed-actions",children:[M.jsx("button",{className:"embed-copy-btn",onClick:Ce,children:Y?"✓ Copied!":"📋 Copy Embed Code"}),M.jsx("a",{className:"embed-preview-btn",href:Se(),target:"_blank",rel:"noopener noreferrer",children:"👁 Preview Embed"})]}),M.jsxs("div",{className:"embed-instructions",children:[M.jsx("h4",{children:"How to use:"}),M.jsxs("ul",{children:[M.jsxs("li",{children:[M.jsx("strong",{children:"Discourse:"})," Paste in an HTML block"]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Wix:"}),' Add "Embed HTML" element']}),M.jsxs("li",{children:[M.jsx("strong",{children:"WordPress:"}),' Use "Custom HTML" block']})]}),M.jsx("p",{className:"embed-note",children:"✅ Live data - updates automatically!"})]})]})}),M.jsxs("div",{className:"admin-tabs",children:[M.jsxs("button",{className:`admin-tab ${c==="members"?"active":""}`,onClick:()=>d("members"),children:[M.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),M.jsx("circle",{cx:"9",cy:"7",r:"4"}),M.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),M.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Add Members"]}),M.jsxs("button",{className:`admin-tab ${c==="groups"?"active":""}`,onClick:()=>d("groups"),children:[M.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),M.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),M.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),M.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Subgroups"]})]}),c==="members"&&M.jsxs("div",{className:"admin-content",children:[M.jsxs("div",{className:"admin-form-panel",children:[M.jsx("h2",{children:g?"Edit Member":"Add New Member"}),M.jsxs("form",{onSubmit:Ge,children:[M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Name *"}),M.jsx("input",{type:"text",value:p.name,onChange:B=>we("name",B.target.value),placeholder:"John Doe",required:!0})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Title / Role"}),M.jsx("input",{type:"text",value:p.title,onChange:B=>we("title",B.target.value),placeholder:"Medical Student..."})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"University (type to search)"}),M.jsx("input",{type:"text",value:p.university,onChange:B=>we("university",B.target.value),placeholder:"e.g. Harvard Medical School"}),T&&p.university&&M.jsx("div",{className:"geocode-loading",children:"Searching..."}),R.length>0&&p.university&&M.jsx("ul",{className:"geocode-results",children:R.map((B,ve)=>M.jsxs("li",{onClick:()=>ye(B),children:[M.jsx("span",{className:"result-name",children:B.display_name}),M.jsxs("span",{className:"result-coords",children:[B.lat.toFixed(4),", ",B.lng.toFixed(4)]})]},ve))})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Location * (City, Region, Country)"}),M.jsx("input",{type:"text",value:p.location,onChange:B=>we("location",B.target.value),placeholder:"Boston, MA, USA",required:!0}),T&&!p.university&&M.jsx("div",{className:"geocode-loading",children:"Searching..."}),R.length>0&&!p.university&&M.jsx("ul",{className:"geocode-results",children:R.map((B,ve)=>M.jsxs("li",{onClick:()=>ye(B),children:[M.jsx("span",{className:"result-name",children:B.display_name}),M.jsxs("span",{className:"result-coords",children:[B.lat.toFixed(4),", ",B.lng.toFixed(4)]})]},ve))})]}),M.jsxs("div",{className:"form-row",children:[M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Latitude *"}),M.jsx("input",{type:"number",step:"any",value:p.lat,onChange:B=>we("lat",B.target.value),placeholder:"42.3601",required:!0})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Longitude *"}),M.jsx("input",{type:"number",step:"any",value:p.lng,onChange:B=>we("lng",B.target.value),placeholder:"-71.0589",required:!0})]})]}),M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Profile Image"}),M.jsxs("div",{className:"image-input-row",children:[M.jsxs("select",{value:p.image,onChange:B=>we("image",B.target.value),children:[M.jsx("option",{value:"",children:"No image"}),w.map(B=>M.jsx("option",{value:B,children:B},B))]}),M.jsx("input",{type:"file",ref:be,onChange:Le,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),M.jsx("button",{type:"button",className:"upload-btn",onClick:()=>{var B;return(B=be.current)==null?void 0:B.click()},disabled:u,children:u?"Uploading...":"📤 Upload"})]}),p.image&&M.jsx("div",{className:"image-preview",children:M.jsx("img",{src:Qh(p.image),alt:"Preview"})})]}),M.jsxs("div",{className:"form-actions",children:[M.jsx("button",{type:"submit",className:"primary",disabled:x,children:x?"Saving...":g?"Update":"Add Member"}),g&&M.jsx("button",{type:"button",className:"secondary",onClick:Fe,children:"Cancel"})]})]})]}),M.jsxs("div",{className:"admin-table-panel",children:[M.jsx("div",{className:"table-header",children:M.jsxs("h2",{children:["Members (",h.length,")"]})}),M.jsx("div",{className:"table-container",children:M.jsxs("table",{children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{children:"Image"}),M.jsx("th",{children:"Name"}),M.jsx("th",{children:"Title"}),M.jsx("th",{children:"University"}),M.jsx("th",{children:"Location"}),M.jsx("th",{children:"Lat"}),M.jsx("th",{children:"Lng"}),M.jsx("th",{children:"Actions"})]})}),M.jsxs("tbody",{children:[h.map(B=>{var ve,ke;return M.jsxs("tr",{className:(g==null?void 0:g.id)===B.id?"selected":"",onClick:()=>me(B),children:[M.jsx("td",{className:"img-cell",children:B.image?M.jsx("img",{src:Qh(B.image),alt:B.name}):M.jsx("div",{className:"no-image",children:"?"})}),M.jsx("td",{className:"name-cell",children:B.name}),M.jsx("td",{children:B.title||"-"}),M.jsx("td",{className:"uni-cell",children:B.university||"-"}),M.jsx("td",{className:"location-cell",children:B.location}),M.jsx("td",{className:"coord-cell",children:(ve=B.lat)==null?void 0:ve.toFixed(2)}),M.jsx("td",{className:"coord-cell",children:(ke=B.lng)==null?void 0:ke.toFixed(2)}),M.jsxs("td",{className:"actions-cell",children:[M.jsx("button",{className:"edit-btn",onClick:He=>{He.stopPropagation(),me(B)},children:"Edit"}),M.jsx("button",{className:"delete-btn",onClick:He=>{He.stopPropagation(),Re(B.id)},children:"Delete"})]})]},B.id)}),h.length===0&&M.jsx("tr",{children:M.jsx("td",{colSpan:"8",className:"empty-row",children:"No members yet."})})]})]})})]})]}),c==="groups"&&M.jsxs("div",{className:"admin-content",children:[M.jsxs("div",{className:"admin-form-panel",children:[M.jsx("h2",{children:b?"Edit Subgroup":"Create Subgroup"}),M.jsxs("form",{onSubmit:D,children:[M.jsxs("div",{className:"form-group",children:[M.jsx("label",{children:"Group Name *"}),M.jsx("input",{type:"text",value:pe.name,onChange:B=>V(ve=>({...ve,name:B.target.value})),placeholder:"e.g. Editors, Reviewers, US Team",required:!0})]}),M.jsxs("div",{className:"form-group",children:[M.jsxs("label",{children:["Members (",pe.memberIds.length," selected)"]}),M.jsxs("div",{className:"member-select-list",children:[h.map(B=>M.jsxs("label",{className:"member-select-item",children:[M.jsx("input",{type:"checkbox",checked:pe.memberIds.includes(B.id),onChange:()=>Ie(B.id)}),M.jsx("span",{className:"member-select-name",children:B.name}),M.jsx("span",{className:"member-select-location",children:B.location})]},B.id)),h.length===0&&M.jsx("p",{className:"no-members",children:"No members available. Add members first."})]})]}),M.jsxs("div",{className:"form-actions",children:[M.jsx("button",{type:"submit",className:"primary",disabled:se,children:se?"Saving...":b?"Update Group":"Create Group"}),b&&M.jsx("button",{type:"button",className:"secondary",onClick:Oe,children:"Cancel"})]})]})]}),M.jsxs("div",{className:"admin-table-panel",children:[M.jsx("div",{className:"table-header",children:M.jsxs("h2",{children:["Subgroups (",N.length,")"]})}),M.jsx("div",{className:"table-container",children:M.jsxs("table",{children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{children:"Name"}),M.jsx("th",{children:"Members"}),M.jsx("th",{children:"Actions"})]})}),M.jsxs("tbody",{children:[N.map(B=>{var ve,ke;return M.jsxs("tr",{className:(b==null?void 0:b.id)===B.id?"selected":"",onClick:()=>Pe(B),children:[M.jsx("td",{className:"name-cell",children:B.name}),M.jsxs("td",{children:[M.jsx("span",{className:"member-count",children:((ve=B.memberIds)==null?void 0:ve.length)||0}),((ke=B.memberIds)==null?void 0:ke.length)>0&&M.jsxs("span",{className:"member-preview",children:[B.memberIds.slice(0,3).map(He=>{const et=h.find(nt=>nt.id===He);return et?et.name.split(" ")[0]:""}).filter(Boolean).join(", "),B.memberIds.length>3&&` +${B.memberIds.length-3}`]})]}),M.jsxs("td",{className:"actions-cell",children:[M.jsx("button",{className:"edit-btn",onClick:He=>{He.stopPropagation(),Pe(B)},children:"Edit"}),M.jsx("button",{className:"delete-btn",onClick:He=>{He.stopPropagation(),xe(B.id)},children:"Delete"})]})]},B.id)}),N.length===0&&M.jsx("tr",{children:M.jsx("td",{colSpan:"3",className:"empty-row",children:"No subgroups yet. Create one to organize members."})})]})]})})]})]}),re&&M.jsxs("div",{className:`toast-notification ${re.type}`,children:[re.type==="success"?"✓":"ℹ"," ",re.message]})]})}function GL(){const[t,e]=de.useState([]),[n,i]=de.useState(!0),[r,s]=de.useState(null),o=de.useCallback(async()=>{try{i(!0);const a=await MR();e(a),s(null)}catch(a){console.error("Failed to load cards:",a),s(a.message)}finally{i(!1)}},[]);return de.useEffect(()=>{o()},[o]),{cards:t,loading:n,error:r,refetch:o}}function WL(){const[t,e]=de.useState([]),[n,i]=de.useState(!0),[r,s]=de.useState(null),o=de.useCallback(async()=>{try{i(!0);const a=await fetch(`${At}/groups`);if(!a.ok)throw new Error("Failed to fetch groups");const l=await a.json();e(l),s(null)}catch(a){s(a.message)}finally{i(!1)}},[]);return de.useEffect(()=>{o()},[o]),{groups:t,loading:n,error:r,refetch:o}}console.log("APP VERSION 28 LOADED");const Xd=220,$d=58,jL=["top-left","top-right","bottom-left","bottom-right"],Qn=35,XL=45;function $L(t,e=.5){const n=[],i=new Set;for(const r of t){if(i.has(r.id))continue;const s=[r];i.add(r.id);for(const o of t){if(i.has(o.id))continue;const a=Math.abs(r.lat-o.lat),l=Math.abs(r.lng-o.lng);a<e&&l<e&&(s.push(o),i.add(o.id))}n.push(s)}return n}function cf(t,e){return t>=0&&e>=0?"top-left":t<0&&e>=0?"top-right":t>=0&&e<0?"bottom-left":"bottom-right"}function eu(t,e,n){const i=(e+180)*4,r=(90-t)*4;let s,o;switch(n){case"top-left":s=i,o=r;break;case"top-right":s=i-Xd,o=r;break;case"bottom-left":s=i,o=r-$d;break;case"bottom-right":s=i-Xd,o=r-$d;break;default:s=i,o=r}return{left:s,top:o,right:s+Xd,bottom:o+$d}}function Yx(t,e){const n=Math.max(0,Math.min(t.right,e.right)-Math.max(t.left,e.left)),i=Math.max(0,Math.min(t.bottom,e.bottom)-Math.max(t.top,e.top));return n*i}function Zv(t,e){let n=0;for(let i=0;i<t.length;i++)for(let r=i+1;r<t.length;r++){const s=eu(t[i].lat,t[i].lng,e[t[i].id]),o=eu(t[r].lat,t[r].lng,e[t[r].id]);n+=Yx(s,o)}return n}function Ko(t,e,n){let i=0;const r=eu(t.lat,t.lng,n[t.id]);for(const s of e){if(s.id===t.id)continue;const o=eu(s.lat,s.lng,n[s.id]);i+=Yx(r,o)}return i}function qL(t,e=15){const n=[],i=new Set;for(const r of t){if(i.has(r.id))continue;const s=[],o=[r];for(i.add(r.id);o.length>0;){const a=o.shift();s.push(a);for(const l of t){if(i.has(l.id))continue;Math.sqrt(Math.pow(a.lat-l.lat,2)+Math.pow(a.lng-l.lng,2))<e&&(i.add(l.id),o.push(l))}}n.push(s)}return n}function YL(t){const e=[];if(t===1)return e.push({angle:0,distance:0,anchor:"top-left"}),e;if(t===2)return e.push({angle:-Math.PI/4,distance:Qn,anchor:"top-right"}),e.push({angle:3*Math.PI/4,distance:Qn,anchor:"bottom-left"}),e;if(t===3)return e.push({angle:-Math.PI/2,distance:Qn,anchor:"top-right"}),e.push({angle:Math.PI/6,distance:Qn,anchor:"bottom-left"}),e.push({angle:5*Math.PI/6,distance:Qn,anchor:"bottom-right"}),e;if(t===4)return e.push({angle:-Math.PI/4,distance:Qn,anchor:"top-right"}),e.push({angle:-3*Math.PI/4,distance:Qn,anchor:"top-left"}),e.push({angle:Math.PI/4,distance:Qn,anchor:"bottom-right"}),e.push({angle:3*Math.PI/4,distance:Qn,anchor:"bottom-left"}),e;const n=6;for(let i=0;i<t;i++){const r=Math.floor(i/n),s=i%n,o=Math.min(n,t-r*n),a=r*(Math.PI/n),l=2*Math.PI*s/o+a-Math.PI/2,c=Qn+r*XL;let d;const h=(l%(2*Math.PI)+2*Math.PI)%(2*Math.PI);h<Math.PI/2?d="top-left":h<Math.PI?d="top-right":h<3*Math.PI/2?d="bottom-right":d="bottom-left",e.push({angle:l,distance:c,anchor:d})}return e}function KL(t,e,n){const i=t.length;if(i===1){const s=t[0],o=s.lng<-30,a=s.lat>20;e[s.id]=cf(o?1:-1,a?1:-1),n[s.id]={x:0,y:0};return}const r=YL(i);for(let s=0;s<i;s++){const o=t[s],a=r[s];e[o.id]=a.anchor,n[o.id]={x:Math.cos(a.angle)*a.distance,y:Math.sin(a.angle)*a.distance}}}function JL(t,e){const n=qL(t,18);for(const i of n){if(i.length===1){const o=i[0];if(e[o.id])continue;const a=o.lng<-30,l=o.lat>20;e[o.id]=cf(a?1:-1,l?1:-1);continue}let r=0,s=0;for(const o of i)r+=o.lat,s+=o.lng;r/=i.length,s/=i.length;for(const o of i){if(e[o.id])continue;const a=o.lng-s,l=o.lat-r;e[o.id]=cf(a>=0?1:-1,l>=0?-1:1)}}}function ZL(t,e,n,i=10){let r=!0,s=0;for(;r&&s<i;){r=!1,s++;const o=[...t].sort((a,l)=>Ko(l,t,e)-Ko(a,t,e));for(const a of o){if(n.has(a.id))continue;const l=Ko(a,t,e);if(l===0)continue;const c=e[a.id];let d=c,h=l;for(const f of jL){if(f===c)continue;e[a.id]=f;const g=Ko(a,t,e);g<h&&(h=g,d=f,r=!0)}e[a.id]=d}}return s}function QL(t){if(!t||t.length===0)return{anchors:{},offsets:{}};console.log("=== Computing card anchors (with merged stars) ===");const e={},n={},i=new Set,r=$L(t,.5);console.log(`Found ${r.length} unique star locations from ${t.length} cards`);for(const a of r)a.length>1?(console.log(`Merged star: ${a.map(l=>l.name).join(", ")}`),KL(a,e,n),a.forEach(l=>i.add(l.id))):n[a[0].id]={x:0,y:0};JL(t,e);for(const a of t)e[a.id]||(e[a.id]="top-left"),n[a.id]||(n[a.id]={x:0,y:0});let s=Zv(t,e);console.log(`Initial overlap: ${s.toFixed(0)}`);const o=ZL(t,e,i,15);s=Zv(t,e),console.log(`After ${o} iterations: overlap = ${s.toFixed(0)}`),console.log("Final anchors:");for(const a of t){const l=Ko(a,t,e),c=n[a.id],d=c.x!==0||c.y!==0?` [offset: ${c.x},${c.y}]`:"";console.log(`  ${a.name}: "${e[a.id]}"${d}${l>0?` ⚠️ overlap: ${l.toFixed(0)}`:" ✓"}`)}return{anchors:e,offsets:n}}function eN(){const[t,e]=de.useState("globe"),{cards:n,loading:i,error:r,refetch:s}=GL(),{groups:o,refetch:a}=WL(),[l,c]=de.useState([]),[d,h]=de.useState(null),[f,g]=de.useState(!0),[y,x]=de.useState({}),[m,u]=de.useState(null),{anchors:_,offsets:p}=de.useMemo(()=>QL(n),[n]),E=de.useMemo(()=>new URLSearchParams(window.location.search),[]),R=E.get("embed")==="true",A=E.get("group"),T=de.useMemo(()=>!A||A==="all"?null:o.find(V=>V.id===A),[A,o]),z=de.useMemo(()=>!A||A==="all"?"All Members":(T==null?void 0:T.name)||"All Members",[A,T]),[w,C]=de.useState(!1),[W,X]=de.useState(null),[fe,H]=de.useState(!1),J=de.useRef(null),q=de.useCallback(()=>{g(!1),J.current&&clearTimeout(J.current),J.current=setTimeout(()=>g(!0),5e3)},[]);de.useEffect(()=>()=>{J.current&&clearTimeout(J.current)},[]),de.useEffect(()=>{if(!R||fe||!n||n.length===0)return;let V=A&&A!=="all"&&T?n.filter(se=>{var k;return(k=T.memberIds)==null?void 0:k.includes(se.id)}):n;u(new Set(V.map(se=>se.id))),H(!0)},[R,fe,n,A,T]),de.useEffect(()=>{const V=()=>{var Q;let se=((Q=window.location.hash)==null?void 0:Q.length)>1?new URLSearchParams(window.location.hash.slice(1)):new URLSearchParams(window.location.search);const k=se.get("notification"),be=se.get("message");k&&be&&(X({type:k,message:decodeURIComponent(be)}),window.history.replaceState({},"","/anking-globe/"),setTimeout(()=>X(null),4e3))};return V(),window.addEventListener("hashchange",V),()=>window.removeEventListener("hashchange",V)},[]);const te=de.useCallback(V=>{u(se=>{if(se===null){const be=new Set(n.map(Q=>Q.id));return be.delete(V),be}const k=new Set(se);return k.has(V)?(k.delete(V),c(be=>be.filter(Q=>Q!==V)),d===V&&h(null)):k.add(V),k.size===n.length?null:k})},[n,d]),U=de.useCallback(V=>{if(q(),d===V.id){c(se=>se.filter(k=>k!==V.id)),h(null);return}c(se=>se.includes(V.id)?se:[...se,V.id]),h(V.id)},[q,d]),Y=de.useCallback(V=>{c(se=>se.filter(k=>k!==V))},[]),K=de.useCallback(V=>{h(se=>se===V?null:V)},[]),ge=de.useCallback(V=>{q(),c(se=>se.includes(V)?(d===V&&h(null),se.filter(k=>k!==V)):(h(V),[...se,V]))},[d,q]),_e=de.useCallback(()=>{q();const V=m===null?n.map(se=>se.id):Array.from(m);c(V)},[n,m,q]),re=de.useCallback(()=>{c([]),h(null)},[]),O=de.useCallback(()=>{w?(c([]),h(null)):c(n.map(V=>V.id)),C(!w),q()},[w,n,q]),N=de.useCallback(V=>{x(V)},[]),P=de.useCallback(()=>{q()},[q]),b=de.useCallback(()=>{h(null)},[]);if(i)return M.jsx(bR,{});if(r)return M.jsxs("div",{className:"error-screen",children:["Error: ",r]});if(t==="admin")return M.jsx(VL,{onBack:()=>{e("globe"),s(),a()}});const ne=n?new Set(n.map(V=>{var se,k;return(k=(se=V.location)==null?void 0:se.split(",").pop())==null?void 0:k.trim()})).size:0,pe=n?n.filter(V=>l.includes(V.id)):[];return M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:`globe-container ${R?"embed-mode":""}`,children:[M.jsx(SR,{cards:n||[],selectedCards:l,autoRotate:f,onMarkerClick:U,onMarkerVisibilityChange:N,onInteraction:P,focusCardId:d,onFocusLost:b,visibleCardIds:m}),!R&&M.jsx(ER,{cards:n,groups:o,selectedCards:l,visibleCardIds:m,autoRotate:f,onAutoRotateChange:g,onToggleCard:ge,onToggleCardVisibility:te,onOpenAll:_e,onCloseAll:re,onManageClick:()=>e("admin"),isEmbedMode:R}),pe.map((V,se)=>M.jsx(AR,{card:V,visibilityData:y,anchor:_[V.id]||"top-left",offset:p[V.id]||{x:0,y:0},onClose:Y,onFocus:K,isFocused:d===V.id,zIndex:1e3+se},V.id)),M.jsx("div",{className:`globe-logo-container ${R?"embed":""}`,children:M.jsx("img",{src:"/anking-globe/logo.png",alt:"Logo",className:"globe-logo"})}),M.jsx("div",{className:"globe-footer",children:R?z:"AnKing Step Deck Maintainers · 2025"}),M.jsxs("div",{className:"globe-stats",children:[M.jsxs("div",{className:"stat-item",children:[M.jsx("div",{className:"stat-value",children:R?(m==null?void 0:m.size)??((n==null?void 0:n.length)||0):(n==null?void 0:n.length)||0}),M.jsx("div",{className:"stat-label",children:"Active Members"})]}),M.jsxs("div",{className:"stat-item",children:[M.jsx("div",{className:"stat-value",children:ne}),M.jsx("div",{className:"stat-label",children:"Countries"})]})]}),M.jsxs("div",{className:"instructions",children:[M.jsx("kbd",{children:"Drag"})," to rotate · ",M.jsx("kbd",{children:"Scroll"})," to zoom",M.jsx("br",{}),"Click markers to toggle cards"]}),R&&M.jsx("button",{className:"embed-toggle-btn",onClick:O,children:w?M.jsxs(M.Fragment,{children:[M.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),M.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),"Hide All"]}):M.jsxs(M.Fragment,{children:[M.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[M.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),M.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Show All"]})})]}),W&&M.jsxs("div",{className:`toast-notification ${W.type}`,children:[W.type==="success"?"✓":"ℹ"," ",W.message]})]})}qd.createRoot(document.getElementById("root")).render(M.jsx(fS.StrictMode,{children:M.jsx(eN,{})}));
